import React, { useState } from 'react';
import '../styles/filters.css';

const Filters = ({ activeFilter, onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filters = ['Всі', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];

    const handleFilterClick = (filter) => {
        onFilterChange(filter);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        // Тут буде логіка пошуку
    };

    return (
        <section className="filters-section">
            <div className="container">
                <div className="filters-container">
                    <div className="filter-group">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <form className="search-box" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Пошук смартфонів..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">Пошук</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Filters;