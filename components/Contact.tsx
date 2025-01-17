import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="font-titleFont text-5xl font-semibold">Contacto</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Estoy en busca de nuevas oportunidades como desarrollador junior en
        React. Si tienes algún proyecto interesante o simplemente quieres
        conectarte, estaré encantado de conversar y responder lo antes posible.
        ¡Hablemos!
      </p>

      <a href="mailto:junioralejandrotiburcio@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Dime, hola
        </button>
      </a>
    </section>
  );
};

export default Contact;
