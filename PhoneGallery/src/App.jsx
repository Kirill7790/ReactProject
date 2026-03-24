import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PhoneListPage from './pages/PhoneListPage';
import PhoneDetailsPage from './pages/PhoneDetailsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import AddPhoneForm from './components/AddPhoneForm';
import { phonesData } from './data/phonesData';

function App() {
    const [phones, setPhones] = useState(() => {
        const savedPhones = localStorage.getItem('phones');
        if (savedPhones && savedPhones !== 'undefined') {
            try {
                const parsed = JSON.parse(savedPhones);
                if (parsed && parsed.length > 0) {
                    return parsed;
                }
                return phonesData;
            } catch (error) {
                console.error('Помилка при читанні даних:', error);
                return phonesData;
            }
        }
        return phonesData;
    });

    const [activeFilter, setActiveFilter] = useState('Всі');
    const [searchTerm, setSearchTerm] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        if (phones && phones.length > 0) {
            localStorage.setItem('phones', JSON.stringify(phones));
        }
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

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleAddPhone = (newPhone) => {
        setPhones(prevPhones => [...prevPhones, newPhone]);
    };

    const getFilteredPhones = () => {
        let result = phones;

        if (activeFilter !== 'Всі') {
            result = result.filter(phone => phone.brand === activeFilter);
        }

        if (searchTerm.trim() !== '') {
            result = result.filter(phone =>
                phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                phone.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return result;
    };

    const likedPhones = phones.filter(phone => phone.isLiked);
    const filteredPhones = getFilteredPhones();

    return (
        <>
            <AddPhoneForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onAddPhone={handleAddPhone}
            />

            <Routes>
                <Route path="/" element={
                    <Layout
                        likedCount={likedPhones.length}
                        onOpenForm={() => setIsFormOpen(true)}
                    />
                }>
                    <Route index element={
                        <HomePage
                            phones={phones}
                            filteredPhones={filteredPhones}
                            activeFilter={activeFilter}
                            searchTerm={searchTerm}
                            onFilterChange={handleFilterChange}
                            onSearch={handleSearch}
                            onLike={handleLike}
                            onDelete={handleDelete}
                            likedPhones={likedPhones}
                        />
                    } />
                    <Route path="phones" element={
                        <PhoneListPage
                            phones={phones}
                            onLike={handleLike}
                            onDelete={handleDelete}
                        />
                    } />
                    <Route path="phone/:id" element={
                        <PhoneDetailsPage phones={phones} />
                    } />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="404" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;