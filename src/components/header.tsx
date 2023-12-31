import React from 'react'
/**
 * Renders the header component.
 *
 * @return {JSX.Element} The rendered header component.
 */
const Header = (): JSX.Element => {
  return (
    <header role='presentation' className="w-full h-96 grid grid-cols-1 md:grid-cols-2 items-center justify-center px-[1rem] md:p-20 bg-black text-white">
      <div>
        <h2 className="text-2xl font-bold">
          Hi! I am Matías
        </h2>
        <h2 data-testid="title2" className="text-2xl font-bold">
          a <span className="text-rose-600">Software</span> Developer
        </h2>
      </div>
    </header>
  );
}

export default Header
