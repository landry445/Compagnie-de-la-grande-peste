import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from "../components/form"

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
            <Form />
        </div>
    );
};

export default Home;
