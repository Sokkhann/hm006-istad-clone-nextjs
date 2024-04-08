import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import CaroucelComponent from "./components/CarouselComponent";
import CardCompoentCouse from "./components/Courses";
import CardCompoentIi from "./components/CourseContent";
import FooterComponent from "./components/FooterComponent";
export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div>
        <CaroucelComponent/>
      <div className="container mx-auto w-full mb-5">
      <p className="text-[28px] text-black mt-6 mb-6 font-bold text-center">COURSES</p>
        <CardCompoentCouse/>
        <p className="text-[28px] text-black mt-6 mb-6 font-bold text-center">USE FULL CONTENTS</p>
        </div>
        <div className="flex gap-[20px] justify-center ">
        <CardCompoentIi/>
        </div>
        </div>
        <FooterComponent/>
    </>
  );
}