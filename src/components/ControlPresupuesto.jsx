import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })

  }  

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
       <div>
         <p>Grafica aca</p>
       </div>
       <div className='contenido-presupuesto'>
         <p><span>Presupuesto:</span>{presupuesto}</p>
       </div>
       <div className='contenido-presupuesto'>
         <p><span>Disponible:</span>0</p>
       </div> 
       <div className='contenido-presupuesto'>
         <p><span>Gastado:</span>0</p>
       </div>  

    </div>
  )
}

export default ControlPresupuesto