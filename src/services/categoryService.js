import axios from 'axios';

const fetchCategories = async () => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        return response.data;
    } catch (error) {
        console.log("Error iss:", error.message);
        return [];
    };
}

export default fetchCategories;