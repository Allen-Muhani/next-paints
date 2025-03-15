import { randomUUID } from "crypto";
import React from "react";


const BulletList = ({ items }: { items: Array<string> }) => {

    const uuid = randomUUID().toLowerCase();

    return (
        <ul className="list-disc list-inside text-gray-600 [&>li]:before:text-red-700">
            {items.map((item, index) => (
                <li key={`${index}-${uuid}`} className="pl-10">{item}</li>
            ))}
        </ul>
    );
};

export default BulletList;  