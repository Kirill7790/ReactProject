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
        console.log(`Filter changed to: ${filter}`);
    };

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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '30px',
                        marginTop: '20px'
                    }}>
                        {phones.map(phone => (
                            <PhoneCard
                                key={phone.id}
                                phone={phone}
                                onLike={handleLike}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;