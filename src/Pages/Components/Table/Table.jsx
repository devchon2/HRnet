


import React, { useState, useEffect } from 'react';
import { useReactTable, flexRender } from '@tanstack/react-table';
import { columnDef } from './Columns.js';
import { useSelector } from 'react-redux';

export default function EmployeeTable() {
  const list = useSelector(state => state.database);
  console.log("list", list);
  const [datas, setDatas] = useState(list);
  const [columns, setColumns] = useState(columnDef);



  useEffect(() => {
    setDatas(list);
    setColumns(columnDef);
  }, [list,]);


  const tableInstance = useReactTable({
    columns: columns,
    data: datas,
  });

  console.log("columns", columns);
  console.log("datas", datas);
  console.log("tableInstance", tableInstance);


  return (

    <div>
      <table >
        <thead>
          {tableInstance.getHeaderGroups().map(headerEl => {
            return <tr key={headerEl.id} > {headerEl.headers.map(columnEl => {
              return <th key={columnEl.id}>
                {flexRender(
                  columnEl.column.columnDef.header,
                  columnEl.getContext()
                )}
              </th>
            })}
            </tr>
          }
          )}
        </thead>
        {/* <tbody>
          {tableInstance.getRow().map( rowEl => {

             return <tr key={rowEl.id} > 
             {console.log("rowEl", rowEl)}
              {
             rowEl.cells.map((cellEl) => {             
               return <td key={cellEl.id}>
                 {flexRender(
                   cellEl.column.columnDef.cell,
                   cellEl.getContext()
                 )}
                 </td>
             })}
             </tr>
          })}
        </tbody>         */}
      </table>
    </div>
  )
}