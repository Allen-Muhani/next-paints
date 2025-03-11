import React from "react";
import ProductCard from "./product.card";
import { product_data } from './product_data/product.data';

const products = product_data;

const ProductGrid = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 bg-white text-gray-900">
            <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
