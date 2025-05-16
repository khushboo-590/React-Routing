import { useParams } from "react-router-dom";
import { products } from '../utils/helper'
import React from 'react';




const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) return <p className="text-3xl text-center">Product not found</p>;

    return (
        <div className="p-4 text-center justify-center mt-30">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-2">{product.price}</p>
            <li> phone is an essential electronic device used for communication.</li>

            <li> Modern smartphones allow us to make calls, send messages, and use the internet.</li>

            <li> Phones are also used for taking pictures, watching videos, and using social media.</li>

             <li> They have become a part of our daily life and make many tasks easier.</li>

              <li>  However, too much use of phones can harm our eyes, sleep, and concentration.</li >

        </div>
    );
};

export default ProductDetail;
