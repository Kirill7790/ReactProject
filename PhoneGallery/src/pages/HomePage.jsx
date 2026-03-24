import React from 'react';
import Filters from '../components/Filters';
import LikedPhones from '../components/LikedPhones';
import PhoneCard from '../components/PhoneCard';

const HomePage = ({ phones, filteredPhones, activeFilter, searchTerm, onFilterChange, onSearch, onLike, onDelete, likedPhones }) => {
    return (
        <>
            <Filters
                activeFilter={activeFilter}
                searchTerm={searchTerm}
                onFilterChange={onFilterChange}
                onSearch={onSearch}
            />

            {likedPhones && likedPhones.length > 0 && (
                <LikedPhones likedPhones={likedPhones} />
            )}

            <section className="container">
                <h2 className="section-title">Флагманські смартфони</h2>

                {searchTerm && (
                    <div className="search-info">
                        Результати пошуку для: <strong>"{searchTerm}"</strong>
                        <span className="search-count">Знайдено: {filteredPhones.length}</span>
                    </div>
                )}

                {filteredPhones.length === 0 ? (
                    <div className="no-phones-message">
                        {searchTerm ? (
                            <>
                                <p>За запитом "{searchTerm}" нічого не знайдено</p>
                                <button
                                    className="reset-filter-btn"
                                    onClick={() => onSearch('')}
                                >
                                    Очистити пошук
                                </button>
                            </>
                        ) : (
                            <>
                                <p>Смартфонів цього бренду поки немає в наявності!</p>
                                <button
                                    className="reset-filter-btn"
                                    onClick={() => onFilterChange('Всі')}
                                >
                                    Показати всі телефони
                                </button>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="phones-grid">
                        {filteredPhones.map(phone => (
                            <PhoneCard
                                key={phone.id}
                                phone={phone}
                                onLike={onLike}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default HomePage;