import { Link } from 'react-router-dom';

interface ListLinkOnHomeProps {
    children: string;
    className: string;
}

function ListLinkOnHome({ children, className = 'list' }: ListLinkOnHomeProps) {
    const arrayOfChild = children.split(',');

    return (
        <ul className={className}>
            {arrayOfChild.map((item) => {
                return (
                    <li>
                        <Link to={item === 'Home' ? `/` : `/#${item.replace(/\s/g, '')}`}>
                            {item}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default ListLinkOnHome;
