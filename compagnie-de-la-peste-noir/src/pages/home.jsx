import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:5008/diseases')
            .then(response => {
                setData(response.data.diseases);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <h1>Diseases</h1>
            <ul>
                {data.map((disease, index) => (
                    <li key={index}>
                        <h3>{disease.name}</h3>
                        <p>{disease.description}</p>
                        <p>Healer: {disease.healer_type}</p>
                        <p>Price: {disease.price}</p>
                        <p>Survival Chance: {disease.survival_chance}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
