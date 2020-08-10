import React from 'react';
import './pagination.css'

const Pagination = (props) =>{
    const { handlePaginationClick,page,totalPages } = props;
    return(
        <div className="Pagination">
            <button
                className='Pagination-button'
                onClick = {() => handlePaginationClick('prev')}
                disabled ={page === 1}
            >
                 &larr;
            </button>
            <span className='Pagination-info'>
                Page <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button 
                className='Pagination-button'
                onClick={() => handlePaginationClick('next')}
                disabled={page ===totalPages}
            >
                &rarr;
            </button>
        </div>
    )
};

export default Pagination