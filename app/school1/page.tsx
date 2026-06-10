

import About from "./About";
import Admission from "./Admission";
import Contact from "./Contact";
import Course from "./Course";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import Instructor from "./Instructor";
import Notise from "./Notise";
import Service from "./Service";
import Travels from "./Travels";
import Visite from "./Visite";
import Footer from './Footer';




export default function Shooll (){
    return(
    <div className=" font-Archivo ">
        <Header/>
        <Hero/>
        <Notise/>
        <About/>
        <Gallery/>
        <Visite/>
        <Course/>
        <Instructor/>
        <Travels/>
        <Service/>
        <Admission/>
        <Contact/>
        <Footer/>
    </div>
     
)}