import React from 'react';
import './Aside.scss';

const Aside = ({
    pageNumber
}) => {
    return (
        <section className="brand">
            <p>A</p>
            <p className="page">0{pageNumber}</p>
        </section>
    )
}

export default Aside
