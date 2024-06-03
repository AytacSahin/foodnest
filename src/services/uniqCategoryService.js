import axios from 'axios';

const fetchUniqCategory = async (category) => {
    console.log("cate:", category);
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        console.log("fetchUniqCategory çalıştı.");
        return response.data;
    } catch (error) {
        console.log("Error:", error.message);
        return [];
    };
}

export default fetchUniqCategory;