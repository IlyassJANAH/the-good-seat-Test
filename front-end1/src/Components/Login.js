import React from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Button, Checkbox, DatePicker} from 'antd';
import axios from 'axios';


    function onChange(date, dateString) {
        console.log(dateString);
    }

    const onFinish = values => {
        console.log('Success:', values);
        axios.post(`/api/login`, values)
            .then(res => {
                console.log(res);

                if (res.data.statusCode === '200'){
                    localStorage.setItem('usertoken', res.data.body.token)
                }
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
                rules={[
                    {
                        required: true, message: 'Please input your email!'
                    }
                    ]}
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

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
)};


export default SignUpComponent;
