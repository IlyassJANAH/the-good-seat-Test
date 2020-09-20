import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'antd';

const HomePage = () => (
    <div className="ui container">
        <h1>Home Page</h1>
        <Button type={"primary"} className={"mb-2"}><Link to='/login'> Login </Link></Button><br/>
        <Button type={"primary"}><Link to='/signup' > Registration</Link></Button>
    </div>

);

export default HomePage;
