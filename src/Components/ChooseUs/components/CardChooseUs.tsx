interface CardChooseUsProps {
    content: string;
    title: string;
    icon: JSX.Element;
}

function CardChooseUs({ icon, content, title }: CardChooseUsProps) {
    return (
        <div className='cardChooseUs'>
            <div> {icon} </div>
            <div>
                <h3> {title} </h3>
                <p> {content} </p>
            </div>
        </div>
    );
}

export default CardChooseUs;
