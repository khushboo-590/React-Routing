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
            
        </div>  
    );
};

export default ProductDetail;
