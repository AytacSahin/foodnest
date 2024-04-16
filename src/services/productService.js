import axios from 'axios';

const fetchProducts = async (ch) => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${ch}`);
        return response.data;
    } catch (error) {
        console.log("Error:", error.message);
        return [];
    };
}

export default fetchProducts;