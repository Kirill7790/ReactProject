import React from 'react';
import '../styles/filters.css';

const Filters = () => {
    return (
        <section className="filters-section">
            <div className="container">
                <div className="filters-container">
                    <div className="filter-group">
                        <button className="filter-btn active">Всі</button>
                        <button className="filter-btn">Apple</button>
                        <button className="filter-btn">Samsung</button>
                        <button className="filter-btn">Google</button>
                        <button className="filter-btn">OnePlus</button>
                        <button className="filter-btn">Xiaomi</button>
                    </div>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Пошук смартфонів..."
                            value=""
                            readOnly
                        />
                        <button type="button">Пошук</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Filters;