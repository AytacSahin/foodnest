import React from 'react';
import './Home.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="homepage-container">
                <h1 className="home-title">Food Nest</h1>
                <p className="home-desc">Discover Delicious Meals</p>
                <Link to='/categories'>
                    <Button className="home-styled-button" color='secondary'>Meals</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
