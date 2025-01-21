import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import movies from "../public/assets/images/movies.jpg";
import countries from "../public/assets/images/countries.png";
import ecomerce from "../public/assets/images/ecomerce.webp";
import news from "../public/assets/images/news.webp";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle
        title="Algunos proyectos que he desarrollado"
        titleNo="03"
      />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://movies-plum-ten.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={movies}
                alt="movies"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <h3 className="text-2xl font-bold text-black">Movies App</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base text-white p-2 md:p-6 rounded-md">
              esta aplicacion de peliculas es una aplicacion web que te permite
              ver detalles de peliculas y ver trailers de peliculas.como tambien
              sus actores y actrices.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-[#1d3f61]">
              <li>React</li>
              <li>TMDB API</li>
              <li>React Router</li>
              <li>Tailwind</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="bg-[#1d3f61] hover:text-[#25507b] duration-300"
                href="https://movies-plum-ten.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://ecommerce01-gules.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ecomerce}
                alt="ecomerceImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <h3 className="text-2xl font-bold text-black">Ecommerce</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] text-white p-2 md:p-6 rounded-md xl:-mr-16">
              Esta aplicacion de ecommerce es una aplicacion web que te permite
              hacer pedidos de productos y ver detalles de los productos.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-[#1d3f61]">
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="bg-[#1d3f61] hover:text-[#25507b] duration-300"
                href="https://ecommerce01-gules.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/junito02/App-news"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={news}
                alt="newsImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <h3 className="text-2xl font-bold text-black">
                Aplicacion de noticias
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] text-white p-2 md:p-6 rounded-md">
              Esta aplicacion de noticias es una aplicacion web que te permite
              ver noticias y ver detalles de las noticias. aunque la api tiene
              restricciones es un proyecto completo y me gusto el desarrollo
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-[#1d3f61]">
              <li>React</li>
              <li>Tailwind</li>
              <li>News API</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4 ">
              <a
                className="bg-[#1d3f61] hover:text-[#25507b] duration-300"
                href="https://github.com/junito02/App-news"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
