import AboutDetail from "@/components/sections/about-detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - Victor Kangacha | Data Scientist',
  description: 'Learn more about Victor Kangacha, a Data Scientist, specializing in AI/ML solutions'
}

export default function About(){
  return(
    <main className="flex min-h-screen flex-col">
     <AboutDetail/>
    </main>
  )
}