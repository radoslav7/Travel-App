import { Link } from 'react-router-dom';
import Card from '../components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [posts, setPosts] = useState(null);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/posts');
        const dataObject = response.data.data;
        const arrayOfData = Object.keys(dataObject).map((key) => [key, dataObject[key]]);
        setPosts(arrayOfData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(posts);
    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <div>
                        <h1>Adventure anywhere</h1>
                        <p>Keep calm & travel on</p>
                    </div>
                    <button>Add your adventure</button>
                </div>

                <div className="posts-container">
                    {posts?.map((post) => (
                        <Link id="link" to={`/posts/${post[0]}`} key={post[0]}>
                            <Card post={post[1]} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
