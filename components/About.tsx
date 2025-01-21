import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import image from "../public/assets/images/imagen.webp";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Acerca de mi" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base font-medium text-black  flex flex-col gap-4">
          <p>
            Hace dos años, decidí adentrarme en el apasionante mundo de la
            programación, impulsado por mi interés en la tecnología y el deseo
            de adquirir nuevas habilidades.
          </p>
          <p>
            Desde entonces, he estado dedicando tiempo y esfuerzo a comprender
            los fundamentos de la programación y a explorar diversos lenguajes y
            herramientas.
          </p>
          <p>
            Este viaje me ha permitido empezar a construir una base sólida en el
            área, y estoy entusiasmado por seguir creciendo y enfrentar nuevos
            desafíos en el futuro.
          </p>
        </div>
        <div className="w-full lgl:w-1/3 flex justify-center items-center">
          <div className="relative w-full max-w-[250px] aspect-square rounded-full overflow-hidden">
            <Image
              src={image}
              alt="profileImg"
              fill
              sizes="(max-width: 768px) 100vw, 250px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
