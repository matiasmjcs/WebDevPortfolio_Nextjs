import React from 'react'

const Resources = () => {
  return (
    <main className="h-full container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl hover:text-rose-600 font-bold mb-4 text-center text-slate-200">
        Welcome to my blog
      </h1>
      <section className="grid grid-cols-1 items-center text-justify gap-6">
        <article className="border border-gray-600 p-4 rounded-md shadow-md">
          <p className="text-lg mb-4 text-gray-600">
            Welcome to this section of my blog where I will share resources and
            publish some articles on programming and software development tips
          </p>
        </article>
      </section>
      <section className='h-96 bg-black'>

      </section>
    </main>
  );
};

export default Resources;