import React, { useEffect, useState } from 'react'
import {DataGrid} from "@mui/x-data-grid"
const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("");
  const [dataGrid , setDataGrid] = useState({
    columns : [],
    rows: []
  });

  useEffect(() => {
   const endpoint = "http://localhost:3050/api/product?page=1";
   const getProducts = async () => {
    try {
    const {ok , data} = await fetch(endpoint).then(res => res.json());
    ok && setProducts(data);
    } catch (error) {
      setError(error.message)
    }
   };
   getProducts();
  }, []);

  useEffect(() => {
    const dataProduct = Object.entries(products.length ? products[0] : {});
    const listWrite = ["id","title","price","discount","description"];
    const headerNameTable = {id: "ID", title: "TITULO", price: "PRECIO",discount:"DESCUENTO" ,description: "DESCRIPCIÓN"}
    const columsFormat = dataProduct
    .filter(([key,value]) => listWrite.includes(key))
    .map(([key, value]) => {
      return {
        field: key,
        headerName: headerNameTable[key],
        width: key === "description" ? 400 : 100,
        /* type: typeof value, */
      }
    })
    console.log(dataProduct)
    
    const rowsFormat = [];
    products.forEach((product) => {
      const objData = {};
      Object.entries(product).forEach(([key, value]) => {
        if (listWrite.includes(key)) {
          objData[key] = value;
        }
      });
      rowsFormat.push(objData);
    });

    setDataGrid({
      columns: columsFormat,
      rows: rowsFormat,
    })

  },[products])

  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <h1 style={{color: '#191717'}}>TODOS LOS PRODUCTOS</h1>
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

Products.propTypes = {}

export default Products