import { useParams } from "react-router-dom";
import { products } from '../utils/helper'
import React from 'react';




const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === Number(id));

    if (!product) return <p className="text-3xl text-center">Product not found</p>;

    return (
        <div className="p-4 text-center justify-center mt-30 bg-white rounded-lg shadow-xl max-w-[320px] mx-auto  ">
            <img src={product.img} alt={product.name} className="mx-auto" />

            <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
            <p className="mt-2">{product.price}</p>
            <p className="mt-2 mb-2">{product.description}</p>

           

        </div>
    );
};

export default ProductDetail;
