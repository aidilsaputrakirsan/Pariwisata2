import Booking from "@/components/Booking";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <Image
          className="absolute -right-20 -top-48 -z-10 "
          width={766}
          height={823}
          src={"/Decore.png"}
          alt="decor"
          loading="lazy"
        />
        <Image
          className="absolute right-36 top-20"
          width={684}
          height={664}
          src={"/Image.png"}
          alt="decor"
          loading="lazy"
        />
        <div className="w-6/12 px-32 py-20">
          <h3 className="text-xl font-bold pb-6" style={{ color: "#DF6951" }}>
            BEST DESTINATIONS AROUND THE WORLD
          </h3>
          <h1
            className="text-black text-7xl text-wrap font-bold pb-6"
            style={{ color: "#181E4B" }}
          >
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-xl pb-6" style={{ color: "#5E6282" }}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex justify-between items-center w-64 h-14">
            <button
              className="p-4 rounded-md active:p-[18px]"
              style={{ backgroundColor: "#F1A501" }}
            >
              <Link className="text-nowrap" href={"/findmore"}>
                Find out more
              </Link>
            </button>
            <button
              className="p-4 pl-10 rounded-md h-fit flex justify-center items-center text-nowrap"
              style={{ width: "200px", color: "#686D77" }}
            >
              <Image
                className="h-ful active:w-20 active:h-20"
                src="/Play button.svg"
                alt="Play button"
                width={140}
                height={140}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              Play Demo
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Services />
      </div>
      <div className="pt-10">
        <Destinations />
      </div>
      <div className="pt-10">
        <Booking />
      </div>
      <div className="pt-10">
        <Testimonials />
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </>
  );
}
