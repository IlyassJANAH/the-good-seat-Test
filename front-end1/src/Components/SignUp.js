import React from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Button, Checkbox, DatePicker} from 'antd';
import axios from 'axios';


    function onChange(date, dateString) {
        console.log(dateString);
    }

    const onFinish = values => {
        console.log('Success:', values);
        axios.post(`/api/signup`, values)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const SignUpComponent = ()=>{
    return(
    <div className="card p-3 col-6">
        <h2>
            Please login
        </h2>
        <h3>
            <Link to="signup">
                Don't have an account? Sign up.
            </Link>
        </h3>
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="First name"
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="BirthDate"
                name="birthDate"
                rules={[{ required: true, message: 'Please input your birthdate!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="phone number"
                name="phoneNumber"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Country"
                name="country"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
)};


export default SignUpComponent;
