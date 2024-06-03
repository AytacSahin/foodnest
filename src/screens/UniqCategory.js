import React, { useEffect, useState } from 'react';
import fetchUniqCategory from '../services/uniqCategoryService';
import { Card, CardImg, CardBody, CardTitle, Row, Col } from 'reactstrap';
import './UniqCategory.css';

const UniqCategory = ({ categoryName }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUniqCategory(categoryName);
                setMeals(data.meals);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, [categoryName]);

    return (
        <div className="card-container">
            {meals.map(meal => (
                <div key={meal.idMeal} className="card-item">
                    <Card className='card-elem'>
                        <CardImg className="card-img" top width="100%" src={meal.strMealThumb} alt={`${meal.idMeal}. product`} />
                        <CardBody>
                            <CardTitle className="card-title" tag="h5">{meal.strMeal}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default UniqCategory;
