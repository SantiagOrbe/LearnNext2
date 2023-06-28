import Image from "next/image";

export default function page() {
  return (
    <>
    <marquee>Who we are?🥵</marquee>
    <div className="people">
      What is the human being? When we speak of the human being or directly of the human being, we refer to our species: Homo sapiens (from the Latin "wise man"), belonging to the order of primates and the family of hominids, creators of the civilization that today dominates and transform planet Earth.
    </div>
    <Image 
    src="/imagenes/imagen5.png"
    width={1000}
    height={1000}
    />
    </>
  )
}
