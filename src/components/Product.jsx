import React from "react";
import { Link } from "react-router-dom";
import { products } from "../utils/helper";
import CustomBtn from "./common/CustomBtn";

const Product = () => {
    return (
        <div className="max-w-[1320px] mx-auto  p-3">
            <h2 className="text-2xl font-bold mb-6 p-2 text-center mt-7"> Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition mx-auto">
                        <img src={product.img} alt={product.name} className="mx-auto" />

                        <h3 className="text-xl font-semibold mb-2 text-center mt-4">{product.name}</h3>
                        <Link to={`/product/${product.id}`}>
                            <CustomBtn
                                btn="View Details"
                                className="text-white bg-blue-600 px-2 py-2 rounded hover:bg-blue-700 mx-auto justify-center items-center text-center flex max-w-[140px]"
                            />
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;



