import React from 'react'

const Resources = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center text-slate-200">
        Bienvenido a mi blog
      </h1>
      <section className="grid grid-cols-1 items-center text-justify gap-6">
        <article className="border border-gray-600 p-4 rounded-md shadow-md">
          <p className="text-lg mb-4 text-gray-600">
            ¡Bienvenido a esta sección de mi blog donde compartiré recursos y
            publicaré algunos artículos sobre programación y tips de desarrollo
            de software!
          </p>
        </article>
      </section>
    </main>
  );
};

export default Resources;