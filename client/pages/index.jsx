import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Feature from "../components/features";
import Footer from "../components/footer";
import AOS from "aos";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Footer />
    </>
  );
}
