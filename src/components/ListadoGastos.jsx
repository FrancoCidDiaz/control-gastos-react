import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div>
      <h2 className='listado-gastos contenedor'>
        {gastos.length ? "Gastos" : "No hay gastos aun"}
        {gastos.map(gasto => (
        <Gasto
        key={gasto.id}
        gasto={gasto}
        />
        ))}
      </h2>

      
    </div>
  )
}

export default ListadoGastos