import jsonDatas from '../../../utils/mockDatas.json';
import { useState, useEffect, useMemo } from 'react';
import { useReactTable } from '@tanstack/react-table';
import { ErrorBoundary } from "react-error-boundary";

export default function EmployeeTable() {
  const [datas, setDatas] = useState(jsonDatas);


  useEffect(() => {
    setDatas(jsonDatas);
  }, []);

  const columns = useMemo(() => ([
    {
      Header: 'firstName',
      accessor: 'firstName',
    }, {
      Header: 'lastName',
      accessor: 'lastName',
    }, {
      Header: 'birthDate',
      accessor: 'birthDate',
    }, {
      Header: 'street',
      accessor: 'street',
    }, {
      Header: 'city',
      accessor: 'city',
    }, {
      Header: 'zipCode',
      accessor: 'zip',
    }, {
      Header: 'state',
      accessor: 'state',
    }, {
      Header: 'startDate',
      accessor: 'startDate',
    }, {
      Header: 'department',
      accessor: 'department',
    },])
    , []);

  const tableInstance = useReactTable({
    columns: columns,
    datas: datas
  });

  
  console.log("tableInstance", tableInstance.getHeaderGroups());


  return (
    <ErrorBoundary>
      
      <table>
      <thead>

      </thead>

    </table>
    </ErrorBoundary>
    

  )
}


