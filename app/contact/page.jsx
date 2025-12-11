"use client";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Suspense } from "react";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Suspense>
        <ContactUs />
      </Suspense>
      <Footer />
    </>
  );
}