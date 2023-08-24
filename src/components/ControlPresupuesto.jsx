import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ presupuesto, gastos }) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)  
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad , 0)
    const totalDisponible = presupuesto - totalGastado
    const porcentajeActual = (( (presupuesto - totalDisponible) / presupuesto ) *100).toFixed(1)
    setGastado(totalGastado)
    setDisponible(totalDisponible)
    
    setTimeout(() => {
      setPorcentaje(porcentajeActual) 
    }, 1500);
  }, [gastos])
  

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })

  }  

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
       <div>
         <CircularProgressbar
            styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
         />
       </div>
       <div className='contenido-presupuesto'>
         <p><span>Presupuesto:</span>{presupuesto}</p>
       </div>
       <div className='contenido-presupuesto'>
         <p><span>Disponible:</span>{disponible}</p>
       </div> 
       <div className='contenido-presupuesto'>
         <p><span>Gastado:</span>{gastado}</p>
       </div>  

    </div>
  )
}

export default ControlPresupuesto