import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Feature from "../components/features";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Feature />
    </>
  );
}
