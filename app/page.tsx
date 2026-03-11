import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Header from "@/components/landing/navbar";
import Problem from "@/components/landing/problem";
import Solution from "@/components/landing/solution";

export default function Home (){
    return (
        <div>
            <Header/>
            <Hero/>
            <Problem/>
            <Solution/>
            <FAQ/>
            <Footer/>
        </div>
    )
}
