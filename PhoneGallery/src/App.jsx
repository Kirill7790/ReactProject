import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import PhoneCard from './components/PhoneCard';
import LikedPhones from './components/LikedPhones';
import AddPhoneForm from './components/AddPhoneForm';
import { phonesData } from './data/phonesData';

function App() {
    const [phones, setPhones] = useState(() => {
        const savedPhones = localStorage.getItem('phones');
        return savedPhones ? JSON.parse(savedPhones) : phonesData;
    });
    const [activeFilter, setActiveFilter] = useState('Всі');
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('phones', JSON.stringify(phones));
    }, [phones]);

    const handleLike = (id) => {
        setPhones(prevPhones =>
            prevPhones.map(phone =>
                phone.id === id
                    ? { ...phone, isLiked: !phone.isLiked }
                    : phone
            )
        );
    };

    const handleDelete = (id) => {
        setPhones(prevPhones => prevPhones.filter(phone => phone.id !== id));
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const handleAddPhone = (newPhone) => {
        setPhones(prevPhones => [...prevPhones, newPhone]);
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
                onOpenForm={() => setIsFormOpen(true)}
            />

            <AddPhoneForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onAddPhone={handleAddPhone}
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
                    <h2 className="section-title">Флагманські смартфони</h2>

                    {filteredPhones.length === 0 ? (
                        <div className="no-phones-message">
                            <p>Смартфонів цього бренду поки немає в наявності!</p>
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
                                    onDelete={handleDelete}
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