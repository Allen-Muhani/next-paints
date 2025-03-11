import React from "react";
import { TableData } from "../product_data/types";

const StyledTable = ({ data }: { data: Array<TableData> }) => {
    return (
        <table className="w-full border border-gray-300 text-gray-700">
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                        <td className="p-3 text-left font-bold align-top bg-gray-100 w-1/4">
                            {row.key}
                        </td>
                        <td className="p-3 align-top">{row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};



export default StyledTable;
