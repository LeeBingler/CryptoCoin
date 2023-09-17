import ReactLoading from 'react-loading';

interface LoadingProps {
    width: string;
    height: string;
    classNameContainer: string;
}

function Loading({ width, height, classNameContainer }: LoadingProps) {
    return (
        <div className={classNameContainer}>
            <ReactLoading type='spinningBubbles' color='#f958f9' width={width} height={height} />
        </div>
    );
}

export default Loading;
