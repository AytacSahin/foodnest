import React, { useEffect, useState } from 'react';
import './Categories.css'
import fetchCategories from '../services/categoryService';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data.categories);
                console.log(data.categories);
            } catch (error) {
                console.log("Error is:", error.message);
            }
        }
        getCategories();
    }, [])

    return (
        <div className='categories-container'>
            {categories.map((item) => (
                <Link className='categories-card' key={item.idCategory} to={`/category/${item.strCategory}`}>
                    <img className='category-image' src={item.strCategoryThumb} alt={`${item.idCategory}. category`} />
                    <div className='h1-descp'>
                        <h1>{item.strCategory}</h1>
                        <h4 className='desc-text'>{item.strCategoryDescription}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Categories