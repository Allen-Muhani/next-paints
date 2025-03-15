import React from "react";
import { Product } from "./product_data/types";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="bg-gray-100 shadow-lg rounded-lg p-5">
            <img
                src={product.image.valueOf()}
                alt={product.name.valueOf()}
                className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.briefDescription}</p>
            <Link href={"/products/" + product.uri}>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-primary">
                    Read More
                </button>
            </Link>
        </div>
    );
};

export default ProductCard;
