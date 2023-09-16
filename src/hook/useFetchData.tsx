import axios from "axios"
import { useEffect, useState } from "react";

function useFetchData(url:string) {
    const [data, setData] = useState({
        isLoading: true,
        data: null,
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
                      setData(prev => ({...prev, isLoading: false, data: data}));
                  })
                  .catch((e) => {
                      console.error(e.status);
                      setData(prev => ({...prev, error: e}))
                  });
          };
          fetchData();

          return () => {
            source.cancel();
          }
      }, []);

      return data;
}

export default useFetchData