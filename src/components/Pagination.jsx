import React, { useState } from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const [activeNav, setActiveNav] = useState(1);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>

            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page_item">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            setActiveNav(number); paginate(number)
                        }} className={activeNav === number ? "page_link active_link" : "page_link"}>{number}</a>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default Pagination;
