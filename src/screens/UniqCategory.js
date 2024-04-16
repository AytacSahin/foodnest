import React, { useEffect, useState } from 'react';
import fetchUniqCategory from '../services/uniqCategoryService';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const UniqCategory = ({ categoryName }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUniqCategory(categoryName);
                setMeals(data.meals);
                console.log(data.meals);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, [categoryName]);

    /* API:
    "meals": [
    {
      "strMeal": "Beef and Mustard Pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
      "idMeal": "52874"
    },
    */

    return (
        <Row>
            {
                meals.map(meal => (
                    <Col key={meal.idMeal} sm="6" md="4" lg="3" xl="2">
                        <Card style={{ marginBottom: '20px' }}>
                            <CardImg top width="100%" src={meal.strMealThumb} alt={`${meal.idMeal}. product`} />
                            <CardBody>
                                <CardTitle tag="h5">{meal.strMeal}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Category: {meal.strCategory}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Area: {meal.strArea}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Tags: {meal.strTags}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
};

export default UniqCategory;
