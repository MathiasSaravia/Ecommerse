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
    const listWrite = ["id","title","price","discount","description"]
    const columsFormat = dataProduct
    .filter(([key,value]) => listWrite.includes(key))
    .map(([key, value]) => {
      return {
        field: key,
        headerName: "",
        with: 150,
        /* type: typeof value, */
      }
    })

    const rowsFormat = [];
    products.forEach((product) => {
      const objData = {};
      Object.entries(product).forEach(([key, value]) => {
        if (listWrite.includes(key)) {
          objData[key] = value;
        }
      });
      rowsFormat.push(rowsFormat);
    });
    console.log(rowsFormat)
    setDataGrid({
      columns: columsFormat
    })

  },[products])

  const columsProducts = [
  {
    field: "id",
    headerName: "ID",
    with: 150,
    type: "number",
  },
  { 
  field: "title",
  headerName: "Titulo",
  with: 150,
  type: "string",
  }
]
  

  const rowsProduct = [
    {
      id:1,
      title:"product 1",
      price:1000,
      discount:10,
      description:"description",
      
    }
  ]
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <h1>TODOS LOS PRODUCTOS</h1>
        <DataGrid
          rows={rowsProduct}
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