"use client"
import cssBoton from "./boton.module.css"

export default function boton({valor}) {
    const masinfo=()=>{
        alert(`El apellido de ${valor.name.first} es ${valor.name.last}`)
    }
  return (
    <>
        <button className={cssBoton.boton} onClick={masinfo}>Mas info</button>
    </>
  )
}
