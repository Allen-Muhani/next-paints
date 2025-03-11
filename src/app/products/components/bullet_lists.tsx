import React from "react";

const BulletList = ({ items }: { items: Array<String> }) => {
    return (
        <ul className="list-disc list-inside text-gray-600 [&>li]:before:text-red-700">
            {items.map((item) => (
                <li className="pl-10">{item}</li>
            ))}
        </ul>
    );
};

export default BulletList;  