import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Home1 = () => {
  let inputRef=useRef()
  const[searchvalue,setsearchvalue]=useRef(pizza)

  const [allFood, setallFood]=useState([]);
  console.log (allFood)


let getData=async()=>{
  let res = await fetch('https://api.edamam.com/search?q=&app_id=a0ab596c&app_key=a8cb118340a018e4d1675edb0c4a0886')
let data = await res.json();
//console.log(data.hits)
setallFood(data.hits);
}

useEffect(()=>{
  getData()
},[searchvalue])


  return (
 <div>
     <div>
    <label htmlFor="" className='d-flex justify-content-center gap-3'>
      <input  className='col-3 rounded' type="text" name="" id="" placeholder='Search for recipes...' />
      <button className='btn btn-success rounded-2 ps-4 pe-4'>Search</button>
    </label>
  </div>
  
     <div className='row d-flex justify-content-center gap-2'>

   
      {allFood.map((ele)=>{
        return <div key = {ele.recipe.url} className="card" style={{width:'18rem'}}>
        <img src={ele.recipe.image} className ="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{ele.recipe.label}</h5>
        

        <Link state={ele} to ="/single" className="btn btn-primary">view Recipe</Link>
        {/* <button onClick={()=>handleitem(ele)}>Click me</button>*/}

        </div>
      

    </div>
})}
  </div>
 </div>
  )
}

export default Home1
