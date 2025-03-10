import React from "react";
import { Product } from "./products.grid";


const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div key={product.uri.valueOf()} className="bg-gray-100 shadow-lg rounded-lg p-5">
            <img
                src={product.image.valueOf()}
                alt={product.name.valueOf()}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Read More
            </button>
        </div>


    );
};

export default ProductCard;
