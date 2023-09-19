import axios from "axios"
import { useEffect, useState } from "react";

function useFetchData(url:string) {
    const [data, setData] = useState({
        isLoading: true,
        data: [],
        error: null
    })

    useEffect(() => {
        const source = axios.CancelToken.source();
          const fetchData = async () => {
            setData(prev => ({...prev, isLoading: true}))
              await axios
                  .get(url, {cancelToken: source.token})
                  .then((response) => {
                      return JSON.parse(response.request.response);
                  })
                  .then((data) => {
                      setData({error: null, isLoading: false, data: data});
                  })
                  .catch((e) => {
                      console.error(e);
                      setData(prev => ({...prev, error: e, isLoading: false}))
                  });
          };
          fetchData();

          return () => {
            source.cancel();
          }
      }, [url]);

      return data;
}

export default useFetchData