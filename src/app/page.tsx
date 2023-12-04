'use client'

import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import Header from "@/components/head/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <HomePage />
      <AboutUs />
    </>
  );
}
