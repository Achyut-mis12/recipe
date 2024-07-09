import React from 'react'
import {useLocation} from 'react-router-dom'

const SingleRecipe=()=>{
    let location =useLocation()
    console.log(location.state)
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.label)


    return (

        <div className='row'>
            <div className='col-md-6 d-flex justify-content-center'>
            <img src={location.state.recipe.image} alt={location.state.recipe.label} />
            <h1>{location.state.recipe.label}</h1>
            
        </div>
        <div className='col-md-6'>
            <h2>Ingredients:{location.state.recipe.label}</h2>
            <h3>meal type:{location.state.recipe.label.mealtype}</h3>
            <div className='row d-flex gap-2 p-2'>
            <div className='clo-2 bg-warning'>
                <p>{location.state.recipe.totalNutrients.CA.label}</p>
                <p>{location.state.recipe.totalNutrients.CA.quantity}</p>

            </div>
            <div className='col-2 bg-warning'>
                <p>{location.state.recipe.totalNutrients.FE.label}</p>
                <p>{location.state.recipe.totalNutrients.FE.quantity}</p>
            </div>
          <div className="col-2 bg-warning">
            <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
            <p>{location.state.recipe.totalNutrients.SUGAR.quantity}</p>
          </div>

        </div>
<link to={location.state.recipe.url}className='btn btn-success mt-3'></link>
       </div> 
      <div className="row mt-5 d-flex justify-content-center align-item-center">
        <div className='col-md-5 d-flex justify-content-center flex-column'></div>
        <h2 className="d-flex justify-content-center  align-item-center">health label</h2>
      </div>
   
   </div>
   
    )
       


}

export default SingleRecipe;
