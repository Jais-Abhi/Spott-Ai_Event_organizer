import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div>
        {/* top */}
        <div className=" h-[120vh] lg:h-[90vh] flex max-lg:flex-col" >
          {/* left */}
          <div className=" max-lg:py-20 h-[80%]  w-full md:w-2/3 lg:w-1/2 text-wrap flex flex-col md:h-full justify-center items-center px-2 md:items-start md:px-10 lg:px-30" >
          <span className=" flex flex-col justify-center items-center md:items-start max-md:text-center text-5xl md:text-6xl  lg:text-7xl font-bold ">Discover & create amazing 
            <span
            className="bg-linear-to-r from-blue-500 to-orange-700 bg-clip-text text-transparent"
            > Events.</span>
            </span>
          <span 
          className="text-xl mt-8 text-white/60 max-md:text-center"
          >Whether you're hosting or attending, Spott makes every event memorable. Join our community today.</span>
          <Button className="mt-8 rounded-4xl  " size="md" >
            <Link href="/sign-up" className=" text-xl  px-4 " >Get Started</Link>
            </Button>
          </div>
          {/* right */}
          <div className="flex justify-center items-center flex-1 " >
            <Image src="/hero.png" width={650} height={650} alt="Create Events" />
          </div>
        </div>
        {/* bottom */}
        <div>

        </div>
      </div>
    </section>
  );
}
