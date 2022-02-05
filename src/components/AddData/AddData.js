import React from 'react';
import { useForm } from "react-hook-form";
import './AddData.css'


const AddData = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='add-data'>
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddData;