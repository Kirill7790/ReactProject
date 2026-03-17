import React, { useState, useRef } from 'react';
import '../styles/addPhoneForm.css';

const AddPhoneForm = ({ isOpen, onClose, onAddPhone }) => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        image: '',
        display: '',
        processor: '',
        ram: '',
        storage: '',
        camera: '',
        battery: '',
        price: '',
        isNew: false
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPhone = {
            id: Date.now(),
            name: formData.name,
            brand: formData.brand,
            image: formData.image,
            specs: {
                display: formData.display,
                processor: formData.processor,
                ram: formData.ram,
                storage: formData.storage,
                camera: formData.camera,
                battery: formData.battery
            },
            price: Number(formData.price),
            isNew: formData.isNew,
            isLiked: false
        };

        onAddPhone(newPhone);

        setFormData({
            name: '',
            brand: '',
            image: '',
            display: '',
            processor: '',
            ram: '',
            storage: '',
            camera: '',
            battery: '',
            price: '',
            isNew: false
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('form-overlay')) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="form-overlay" onClick={handleOverlayClick}>
            <div className="form-container">
                <div className="form-header">
                    <h2 className="form-title">Додати новий смартфон</h2>
                    <button className="form-close" onClick={onClose}>×</button>
                </div>

                <form className="add-phone-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="form-name">Назва моделі</label>
                            <input
                                type="text"
                                id="form-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="form-brand">Бренд</label>
                            <select
                                id="form-brand"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                required
                            >
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Google">Google</option>
                                <option value="OnePlus">OnePlus</option>
                                <option value="Xiaomi">Xiaomi</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Зображення</label>
                        <div className="image-upload-container">
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="file-input"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="file-upload-label">
                                <span className="upload-icon"></span>
                                Вибрати з комп'ютера
                            </label>
                            {formData.image && (
                                <div className="image-preview">
                                    <img src={formData.image} alt="Preview" />
                                    <button
                                        type="button"
                                        className="remove-image"
                                        onClick={() => {
                                            setFormData(prev => ({ ...prev, image: '' }));
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = '';
                                            }
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Або вставте URL зображення"
                            className="url-input"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="form-display">Дисплей</label>
                            <input
                                type="text"
                                id="form-display"
                                name="display"
                                value={formData.display}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="form-processor">Процесор</label>
                            <input
                                type="text"
                                id="form-processor"
                                name="processor"
                                value={formData.processor}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="form-ram">Оперативна пам'ять</label>
                            <input
                                type="text"
                                id="form-ram"
                                name="ram"
                                value={formData.ram}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="form-storage">Внутрішня пам'ять</label>
                            <input
                                type="text"
                                id="form-storage"
                                name="storage"
                                value={formData.storage}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="form-camera">Камера</label>
                            <input
                                type="text"
                                id="form-camera"
                                name="camera"
                                value={formData.camera}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="form-battery">Акумулятор</label>
                            <input
                                type="text"
                                id="form-battery"
                                name="battery"
                                value={formData.battery}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="form-price">Ціна ($)</label>
                            <input
                                type="number"
                                id="form-price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                step="1"
                            />
                        </div>

                        <div className="form-group checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="isNew"
                                    checked={formData.isNew}
                                    onChange={handleChange}
                                />
                                <span>Новинка (NEW)</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="form-submit-btn">Додати</button>
                        <button type="button" className="form-cancel-btn" onClick={onClose}>
                            Скасувати
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPhoneForm;