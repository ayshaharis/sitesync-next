import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-screen bg-cyan-950 text-white px-6 py-3 flex justify-between items-center">
            <ul className="flex  justify-between items-center space-x-10">
            <Link href="/"><h1 className="text-2xl ">SiteSync</h1></Link>
            <Link href="/"><li> sites </li></Link>
            <Link  href="/"><li>Miscellaneous works</li></Link> 
            <Link href="/"><li>Upcoming projects</li></Link> 
            </ul>
             
        </nav>
  );
}