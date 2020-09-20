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

const SearchCourses = ()=>{
    return(
        <div className="card p-3 col-6">
            <h2>
                Chercher une course
            </h2>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Adresse de départ"
                    name="depart"
                    rules={[
                        {
                            required: true, message: 'Please input your depart addresse!'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Addresse d'arrivé"
                    name="arrival"
                    rules={[{ required: true, message: 'Please input your arrival addresse' }]}
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


export default SearchCourses;
