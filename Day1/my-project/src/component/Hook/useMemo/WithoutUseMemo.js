import React, { useState } from 'react';

function WithoutUseMemo() {

 const [searchTerm, setSearchTerm] = useState('');

 const products =
 [
    {id:1,name:"Laptop"},
    {id:2,name:"Smart Phone"},
    {id:3,name:"Smart Watch"},
    {id:4,name:"EarBus"}
 ]


// Using this every search time loading => timing cost more than using use memo
  const filteredProducts =products.filter((product)=>
{
  console.log("Filtering products...");
  return product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
});

  return (
    <>
        <h1>Without Use Memo</h1>
        
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


export default WithoutUseMemo;

