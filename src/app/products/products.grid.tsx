import React from "react";
import ProductCard from "./product.card";

export type Product = {
    id: Number;
    name: String;
    uri: String;
    description: String;
    technical_specs: String;
    image: String;
}

const products: Array<Product> = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a great product that you will love!",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 2,
        name: "Product 2",
        description: "High quality and best performance in the market.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 3,
        name: "Product 3",
        description: "An amazing product that meets all your needs.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 4,
        name: "Product 4",
        description: "Affordable and reliable for everyday use.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 5,
        name: "Product 5",
        description: "An excellent choice for professionals.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 6,
        name: "Product 6",
        description: "Top-rated product by our customers.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 7,
        name: "Product 7",
        description: "Built for durability and long-lasting use.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
    {
        id: 8,
        name: "Product 8",
        description: "The perfect solution for your needs.",
        image: "https://via.placeholder.com/400",
        uri: '',
        technical_specs: ''
    },
];

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
