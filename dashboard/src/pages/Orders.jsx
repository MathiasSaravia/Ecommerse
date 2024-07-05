import React, { useEffect, useState } from 'react'
import {DataGrid} from "@mui/x-data-grid"

export const Orders = props => {

  const [Orders, setOrders] = useState([])
  const [error, setError] = useState("");
  const [dataGrid , setDataGrid] = useState({
    columns : [],
    rows: []
  });

  useEffect(() => {
   const endpoint = "http://localhost:3050/api/cart"
   const getOrders = async () => {
    try {
    const {ok , data} = await fetch(endpoint).then(res => res.json());

    ok && setOrders(data);
    console.log(data)
    } catch (error) {
      setError(error.message)
    }
   };
   getOrders();
   console.log(getOrders)
  }, [])

/*   useEffect(() => {
    const dataUser = Object.entries(users.length ? users[0] : {});
    const listWriteUser = ["id","name","email","rol"];
    const headerNameTableUser = {id: "ID", name: "NOMBRE", email: "EMAIL", rol: "ROL"}
    const columsFormatUser = dataUser
    .filter(([key,value]) => listWriteUser.includes(key))
    .map(([key, value]) => {
      return {
        field: key,
        headerName: headerNameTableUser[key],
        with: 150,
        type: typeof value, 
      }
    })
    
    const rowsFormat = [];
    users.forEach((user) => {
      const objDataUser = {};
      Object.entries(user).forEach(([key, value]) => {
        if (listWriteUser.includes(key)) {
          objDataUser[key] = value;
        }
      });
      rowsFormat.push(objDataUser);
    });

    setDataGrid({
      columns: columsFormatUser,
      rows: rowsFormat,
    })

  },[users]) */


  return (
    <div style={{ height: 400, width: '100%' }}>
    <h1 style={{color: '#191717'}}>TODAS LAS ORDENES</h1>
      <DataGrid
        rows={dataGrid.rows}
        columns={dataGrid.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

Orders.propTypes = {}

export default Orders