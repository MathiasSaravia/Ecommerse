import React, { useEffect, useState } from 'react'
import {DataGrid} from "@mui/x-data-grid"

export const Users = props => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState("");
  const [dataGrid , setDataGrid] = useState({
    columns : [],
    rows: []
  });

  useEffect(() => {
   const endpoint = "http://localhost:3050/api/auth/"
   const getUsers = async () => {
    try {
    const {ok , data} = await fetch(endpoint).then(res => res.json());

    ok && setUsers(data);
    console.log(data)
    } catch (error) {
      setError(error.message)
    }
   };
   getUsers();
  }, [])

  useEffect(() => {
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

  },[users])


  return (
    <div style={{ height: 400, width: '100%' }}>
    <h1 style={{color: '#191717'}}>TODOS LOS USUARIOS</h1>
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

Users.propTypes = {}

export default Users