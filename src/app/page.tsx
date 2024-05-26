import Image from "next/image";
import { fetchAnime } from "./action";
import { LoadMore } from "@/components/LoadMore";
import { Footer } from "@/components/Footer";


export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="max-w-7xl w-full  mx-auto bg-[#0F1117]">
      <header className="bg-hero bg-center bg-cover bg-no-repeat flex flex-col  items-center  px-8 py-16 justify-between lg:flex-row md:p-16 sm:gap-10">
        <div className="flex-1 flex flex-col gap-10 ">
          <div>
            <Image src={"./logo.svg"} alt="logo" width={101} height={36} />
          </div>
          <h2 className="sm:text-6xl text-5xl text-white lg:text-6xl font-bold leading-[120%] w-full">
            Explore The <span className="text-red-700">Diverse Realms</span> of
            Anime Magic
          </h2>
        </div>
        <div className="h-[50vh] w-full relative lg:flex-1">
          <Image
            src={"/anime.png"}
            fill
            alt="animebg-[#0F1117]"
            className="object-contain"
          />
        </div>
      </header>
      <section className="px-8 py-16 lg:p-16">
        <p className="text-white text-3xl font-bold mb-10">Explore Anime</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data}
        </div>
        <LoadMore />
      </section>
      <Footer />
    </main>
  );
}
