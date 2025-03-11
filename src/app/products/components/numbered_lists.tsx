import React from "react";

const NumberedList = ({ items }: { items: Array<String> }) => {
    return (
        <ol className="list-decimal list-inside text-gray-600">
            {items.map((item, index) => (
                <li className="pl-10">{item}</li>
            ))}
        </ol>
    );
};

export default NumberedList;