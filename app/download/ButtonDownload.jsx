'use client';

import React, { useState } from 'react';

const DownloadButton = () => {
    
    const [enteredPassword, setEnteredPassword] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Проверка пароля
        if (enteredPassword !== 'QWERTY1234') {
            alert('Неверный пароль');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/downloadData');
            const blob = await response.blob();

            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Ошибка при загрузке файла:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                    <input
                        type="password"
                        name='password'
                        id="password"
                        value={enteredPassword}
                        onChange={(e) => setEnteredPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Скачать
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DownloadButton;
