import React from "react";
import { Link } from "react-router-dom";
import { products } from "../utils/helper";

const Product = () => {
    return (
        <div className="max-w-[1320px] mx-auto ">
            <h2 className="text-2xl font-bold mb-6 p-2 text-center mt-7">All Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition mx-auto">
                        <img src={product.img} alt={product.name} className="mx-auto" />

                        <h3 className="text-xl font-semibold mb-2 text-center">{product.name}</h3>
                        <p className="text-gray-700 mb-3 text-center">{product.price}</p>
                        <Link
                            to={`/product/${product.id}`}
                            className="text-white bg-blue-600 px-2 py-2 rounded hover:bg-blue-700  mx-auto justify-center items-center text-center flex max-w-[140px]"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
