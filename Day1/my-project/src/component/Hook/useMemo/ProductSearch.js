import React, { useState,useMemo } from 'react';

function ProductSearch() {

 const [searchTerm, setSearchTerm] = useState('');

 const products =
 [
    {id:1,name:"Laptop"},
    {id:2,name:"Smart Phone"},
    {id:3,name:"Smart Watch"},
    {id:4,name:"EarBus"}
 ]

 const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    
    const filter= products.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    );
    return filter
  }, [products, searchTerm]); 

  return (
    <>
        <h1>Use Memo</h1>
        
        <input type='text' placeholder='Search Product....'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        
        {
            filteredProducts?.length>0 && 
            filteredProducts.map((product,index) => {
                return (
                    <React.Fragment key={index}>
                     <li>{product.name}</li>
                    </React.Fragment>
                )
            })
        }
    </>
  );
}


export default ProductSearch;

