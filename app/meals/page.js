import Link from "next/link"
export default function Allburguers(){
    return(
        <main>
            <h1>All burgers site</h1>
            <p><Link href="/meals/[burguer]?burguer=1">beefburguer</Link></p>
            <p><Link href="/meals/[burguer]?burguer=2">Cheese</Link></p>
        </main>
    )
}