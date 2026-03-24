import React, { useState } from 'react';
import '../styles/filters.css';

const Filters = ({ activeFilter, searchTerm, onFilterChange, onSearch }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '');

    const filters = ['Всі', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];

    const handleFilterClick = (filter) => {
        onFilterChange(filter);
    };

    const handleSearchChange = (e) => {
        setLocalSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(localSearchTerm);
    };

    const handleClearSearch = () => {
        setLocalSearchTerm('');
        onSearch('');
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
                            placeholder="Пошук за назвою або брендом..."
                            value={localSearchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">Пошук</button>
                        {localSearchTerm && (
                            <button type="button" className="clear-search" onClick={handleClearSearch}>
                                ✕
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Filters;