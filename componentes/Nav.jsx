import Link from "next/link";
import {Montserrat} from "@next/font/google"

const fuente = Montserrat({
  weight: "400", 
  subsets:["latin"],
  variable:"--mifont"
})

export default function Nav() {
  return (
    <>
         <nav className={fuente.className}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/somos">Quienes somos</Link>
            <Link href="/personas">People</Link>
          </nav>
    </>
  )
}
