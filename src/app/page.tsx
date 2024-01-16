import AboutRTU from "@/components/AboutRTU";
import AboutThar from "@/components/AboutThar";
import AfterMovie from "@/components/AfterMovie";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Glimpse from "@/components/Glimpse";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Stars from "@/components/global/Stars";

export default function Home() {
	return (
		<>
			<Stars />
			<Navbar />
			<Hero />
			<AboutRTU />
			<AboutThar />
			<Events />
			<AfterMovie />
			<Team />
			<Contact />
			<Footer />
		</>
	);
}
