import Image from "next/image";
import Link from "next/link";
import { Geist, Poppins } from "next/font/google";

const poppins = Geist({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[70vh]">
        <div className= "flex flex-col gap-4 justify-center items-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The most trusted URL shortener
          </p>
          <p className="px-28 text-center">
            This is the easiest useable URL Shortener in the internet. It ensures link security, protects user data, prevents malicious redirects, offers reliability, and maintains uptime. Trust can also be built through user reviews, brand reputation, and features like analytics and password protection for links.
          </p>
          <div className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 shadow-lg px-3 rounded-lg py-1 font-bold text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg px-3 rounded-lg py-1 font-bold text-white'>Github</button></Link>
            </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
