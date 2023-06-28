"use client"
import Boton from "./boton"
import Image from "next/image"

const cargador=({src, width})=>{
    return `${src}?w=${width}`
}

export default function ficha({valor}) {
  return (
    <>
     <div className="persona">
            <h3>{valor.name.first}</h3>
            <Image loader={cargador} src={valor.picture.large} 
            alt="" width={125} height={125}/>
            <div>
                <Boton valor={valor}/>
            </div>
    </div>
    </>
  )
}
