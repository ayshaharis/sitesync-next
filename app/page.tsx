import SiteGrid from "./components/SiteGrid"
import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function Home() {
  const sites= await prisma.site.findMany({
  orderBy: { createdAt: "desc" }
});




  return (
    <div>

     
           <SiteGrid sites={sites} />
    
    </div>
  );
}
