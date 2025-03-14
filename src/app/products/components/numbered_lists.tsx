import { randomUUID } from "crypto";
import React from "react";

const NumberedList = ({ items }: { items: Array<String> }) => {

    const uuid = randomUUID().toLowerCase();

    return (
        <ol className="list-decimal list-inside text-gray-600">
            {items.map((item, index) => (
                <li key={`${index}-${uuid}`} className="pl-10">{item}</li>
            ))}
        </ol>
    );
};

export default NumberedList;