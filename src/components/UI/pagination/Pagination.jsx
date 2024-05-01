import React from 'react';
import DefaultButton from "../button/DefaultButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, changePage, page}) => {
    const pagesArray = getPagesArray(totalPages);

    return (
        <div className='page__wrapper'>
            { pagesArray.map((p, index) => {
                return (
                    <DefaultButton
                        key={index}
                        className='page-button'
                        id={page === p ? 'page-button_current' : ''}
                        onClick={() => changePage(p)}
                    >
                        {p}
                    </DefaultButton>
                );
            })}
        </div>
    );
};

export default Pagination;