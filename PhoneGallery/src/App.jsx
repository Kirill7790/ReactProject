import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import PhoneCard from './components/PhoneCard';
import LikedPhones from './components/LikedPhones';
import { phonesData } from './data/phonesData';

function App() {
    const [phones, setPhones] = useState(phonesData);
    const [activeFilter, setActiveFilter] = useState('Всі');

    const handleLike = (id) => {
        setPhones(prevPhones =>
            prevPhones.map(phone =>
                phone.id === id
                    ? { ...phone, isLiked: !phone.isLiked }
                    : phone
            )
        );
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const getFilteredPhones = () => {
        if (activeFilter === 'Всі') {
            return phones;
        }
        return phones.filter(phone => phone.brand === activeFilter);
    };

    const filteredPhones = getFilteredPhones();
    const likedPhones = phones.filter(phone => phone.isLiked);

    return (
        <>
            <Header
                likedCount={likedPhones.length}
                onNavigate={(page) => console.log('Navigate to:', page)}
            />

            <main>
                <Filters
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                />

                {likedPhones.length > 0 && (
                    <LikedPhones likedPhones={likedPhones} />
                )}

                <section className="container">
                    <h2 style={{
                        marginBottom: '30px',
                        fontSize: '2rem',
                        color: 'var(--dark-color)',
                        textAlign: 'center'
                    }}>
                        Флагманські смартфони
                    </h2>

                    {filteredPhones.length === 0 ? (
                        <div className="no-phones-message">
                            <p>Смартфонів цього бренду поки немає!</p>
                            <button
                                className="reset-filter-btn"
                                onClick={() => setActiveFilter('Всі')}
                            >
                                Показати всі телефони
                            </button>
                        </div>
                    ) : (
                        <div className="phones-grid">
                            {filteredPhones.map(phone => (
                                <PhoneCard
                                    key={phone.id}
                                    phone={phone}
                                    onLike={handleLike}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;