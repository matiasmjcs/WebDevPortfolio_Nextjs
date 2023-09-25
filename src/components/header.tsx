import React from 'react'
const Header = (): JSX.Element => {
  return (
    <header className="w-full h-96 grid grid-cols-1 md:grid-cols-2 items-center justify-center p-20">
      <div>
        <h2 className="text-2xl font-bold">
          Hi! I am Matías
        </h2>
        <h2 className="text-2xl font-bold">
          a <span className="text-rose-600">Software</span> Developer
        </h2>
      </div>
    </header>
  );
}

export default Header
