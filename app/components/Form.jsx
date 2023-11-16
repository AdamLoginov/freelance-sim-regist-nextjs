'use client';

import { useState } from "react";

import Link from "next/link";

const Form = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        phone: '',
        firstName: '',
        lastName: '',
        surName: '',
        dateOfBorn: '',
        placeOfBorn: '',
        registAddress: '',
        typeDoc: '',
        issuedBy: '',
        dateOfIssue: '',
        codeOffice: '',
        numberDoc: '',
        seriaDoc: ''
    })

      const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)



        const response = await fetch('http://localhost:8000/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setFormData({
            phone: '',
            contactPhone: '',
            firstName: '',
            lastName: '',
            surName: '',
            dateOfBorn: '',
            placeOfBorn: '',
            registAddress: '',
            typeDoc: '',
            issuedBy: '',
            dateOfIssue: '',
            codeOffice: '',
            numberDoc: '',
            seriaDoc: ''
        })
        setIsLoading(false)
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        console.log(formData)
      };

    return(
        <form onSubmit={handleFormSubmit}>
            <div className="mb-6">
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Номер телефона</label>
                <input type="text" name='phone' value={formData.phone} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
            </div>
            <div className="mb-6">
                <label for="contactPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Контактный номер телефона</label>
                <input type="text" name='contactPhone' value={formData.contactPhone} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
            </div>
        
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фамилия</label>
                    <input type="text" id="last_name" name="lastName" value={formData.lastName} onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иванов" required />
                </div>
                <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имя</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} id="first_name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иван" required/>
                </div>
                <div>
                    <label for="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Отчество</label>
                    <input type="text" id="surname" name="surName" value={formData.surName} onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Иванович" required />
                </div>  
                <div>
                    <label for="dateBorn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Дата рождения</label>
                    <input datepicker datepicker-buttons type="date" name="dateOfBorn" value={formData.dateOfBorn} onChange={handleInputChange}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                </div>
            </div>
            <div className="mb-6">
                <label for="placeOfBorn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Место рождения</label>
                <input type="text" id="placeOfBorn" name="placeOfBorn" value={formData.placeOfBorn} onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="г.Иванов" required />
            </div> 
            <div className="mb-6">
                <label for="registAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Адрес регистрации</label>
                <input type="text" id="registAddress" name="registAddress" value={formData.registAddress} onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="г.Иванов" required />
            </div> 
            <div className="mb-6">
                <label for="typeDoc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Тип документа</label>
                <select id="typeDoc" name="typeDoc" value={formData.typeDoc} onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Выберете тип документа</option>
                    <option value={"Паспорт РФ"}>Паспорт РФ</option>
                    <option value={"Загран паспорт РФ"}>Загран паспорт РФ</option>
                </select>
            </div> 
            <div className="mb-6">
                <label for="issuedBy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Кем выдан</label>
                <input type="text" id="issuedBy" name="issuedBy" value={formData.issuedBy} onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Отделом УФМС по Ивановской области города Иваново" required />
            </div> 

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label for="dateOfIssue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Дата выдачи документа</label>
                    <input datepicker datepicker-buttons type="date" name="dateOfIssue" value={formData.dateOfIssue} onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                </div>
                <div>
                    <label for="codeOffice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Код подразделения</label>
                    <input type="text" id="codeOffice" name="codeOffice" value={formData.codeOffice} onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-456" pattern="\d{3}\d{3}" required/>
                </div>

                <div>
                    <label for="numberDoc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Номер документа</label>
                    <input type="text" id="numberDoc" name="numberDoc" value={formData.numberDoc} onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234" required/>
                </div>
                <div>
                    <label for="seriaDoc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Серия документа</label>
                    <input type="text" id="seriaDoc" name="seriaDoc" value={formData.seriaDoc} onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456"  required/>
                </div>

            </div>

            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300
                 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я даю разрешение на 
                <Link href="/pdrt" className="text-blue-600 hover:underline dark:text-blue-500"> обработку моих персональных данных</Link>.</label>
            </div>
            <button type="submit" disabled={isLoading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
            rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {isLoading && <span>Отправка...</span>}
                {!isLoading && <span>Отправить</span>}
                </button>
        </form>

    )
}

export default Form;