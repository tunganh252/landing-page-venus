import Chooses from "@/components/Chooses"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Header from "@/components/Header"
import HeroBanner from "@/components/HeroBanner"



export default function Home() {


  return (
    <main className="font-poppins h-full">
      <Header />
      <div className="body-content">
        <div className="px-6 lg:px-24 2xl:px-80">
          <HeroBanner />
          <Features />
          <Chooses />
        </div>
        <Contact />
      </div>
    </main>
  )
}
