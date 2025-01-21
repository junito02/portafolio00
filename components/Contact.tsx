import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="font-titleFont text-5xl font-semibold text-black">
        Contacto
      </h2>
      <p className="max-w-[600px] text-center text-[#1d3f61]">
        Estoy en busca de nuevas oportunidades como desarrollador junior en
        React. Si tienes algún proyecto interesante o simplemente quieres
        conectarte, estaré encantado de conversar y responder lo antes posible.
        ¡Hablemos!
      </p>

      <a href="mailto:junioralejandrotiburcio@gmail.com">
        <button className="w-52 h-14 text-md rounded-lg text-white font-titleFont border border-[#2e3073] mt-6 font-semibold tracking-wide bg-[#1d3f61] hover:bg-[#2e3073] hover:text-white duration-300 ">
          Dime, hola
        </button>
      </a>
    </section>
  );
};

export default Contact;
