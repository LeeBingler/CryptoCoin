import React from 'react';
import { Link } from 'react-router-dom';

interface ListLinkOnHomeProps {
    children: string;
    className: string;
    onClick: React.MouseEventHandler
}

function ListLinkOnHome({ onClick, children, className = 'list' }: ListLinkOnHomeProps) {
    const arrayOfChild = children.split(',');

    return (
        <ul className={className}>
            {arrayOfChild.map((item, index) => {
                return (
                    <li onClick={onClick} key={index}>
                        <Link to={`/#${item.replace(/\s/g, '')}`}>
                            {item}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default ListLinkOnHome;
