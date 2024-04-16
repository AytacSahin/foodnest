import React, { useEffect, useState } from 'react';
import fetchProducts from '../services/productService';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const Products = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts("b");
                setMeals(data.meals);
                console.log(data.meals);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

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

export default Products;
