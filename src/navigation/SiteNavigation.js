import React from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';

import Home from '../screens/Home.js';
import Products from '../screens/Products.js';
import Header from '../components/Header.js';
import Categories from '../screens/Categories.js';
import UniqCategory from '../screens/UniqCategory.js';

const SiteNavigation = () => {
  const location = useLocation();

  return (
    <div>
      <Header showHeader={location.pathname === '/'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<DynamicCategory />} />
      </Routes>
    </div>
  );
};

const DynamicCategory = () => {
  const { categoryName } = useParams();

  return <UniqCategory categoryName={categoryName} />;
};


export default SiteNavigation;
