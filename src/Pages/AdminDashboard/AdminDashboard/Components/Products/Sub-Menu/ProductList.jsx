import React from "react";
import ExportToExcelButton from "./Test";

export const ProductList = () => {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 35 }
  ];
  return (
    <div>
      <h1>ProductList</h1>
      <ExportToExcelButton data={data}/>
    </div>
  );
};
