import React from 'react';

interface ListPaginationProps {
    setPage: React.Dispatch<string>;
    currrentPage: string;
    numberOfPage: number;
    className: string;
}

function ListPagination({ setPage, currrentPage, numberOfPage, className }: ListPaginationProps) {
    const listPage = new Array(numberOfPage).fill(true).map((_, i) => {
        return (i + 1).toString();
    });

    function handleOnClick(number: string) {
        setPage(number);
    }

    return (
        <div className={className}>
            {listPage.map((number) => {
                return (
                    <button
                        key={number}
                        className={currrentPage === number ? 'active' : ''}
                        onClick={() => handleOnClick(number)}
                    >
                        {number}
                    </button>
                );
            })}
        </div>
    );
}

export default ListPagination;
