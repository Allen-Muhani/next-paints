import React from "react";
import { TableData } from "../product_data/types";
import NumberedList from "./numbered_lists";
import BulletList from "./bullet_lists";

const StyledTable = ({ data }: { data: Array<TableData> }) => {
    return (
        <table className="w-full border border-gray-300 text-gray-700">
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                        <td className="p-3 text-left font-bold align-top bg-gray-100 w-1/4">
                            {row.key}
                        </td>
                        <td className="p-3 align-top">
                            {(row.valueType === "paragraph") && (
                                <span>{row.value}</span>
                            )}

                            {(row.value.length > 0 && Array.isArray(row.value) && row.valueType === "numbered") && (
                                <NumberedList items={row.value}></NumberedList>
                            )}

                            {(row.value.length > 0 && Array.isArray(row.value) && row.valueType === "bullets") && (
                                <BulletList items={row.value}></BulletList>
                            )}

                            {(row.footer != undefined) && (
                                <span>{row.footer}</span>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};



export default StyledTable;
