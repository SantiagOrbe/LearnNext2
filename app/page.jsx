"use client"

import Image from "next/image";
import imagen2 from "../public/imagenes/imagen2.png"

const cargador= ({src, width}) =>{
  return `https://wallpaperaccess.com/full/${src}?w=${width}`
}

export default function page() {
  return (
    <>
      <marquee>Pagina principal</marquee> 
        <div className="caja">
          <div>
            <h5>In the Old Mole there is room for everything that is disturbing, that incites reflection and, as a consequence, action, in a world that does not stand out precisely for its sense of justice, equality, solidarity or defense of liberties.
                It has eight sections: Who we are, Contact, Magazines, Books, News, Links and Basket. The format is magazine cover. On the right of the page there is a search engine for all the numbers published by El Viejo Topo.
            </h5>
          </div>
        </div>
        <div className="caja">
        <Image loader={cargador} src="1614580.png"
        width={500} height={250}
        />
        </div>
    </>
  )
}
