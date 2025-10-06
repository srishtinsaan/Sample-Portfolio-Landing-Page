import React from 'react'

function Navbar() {
  return (
    <div>
      <header className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-400">VK.</h1>
          <nav className="space-x-6 hidden md:flex">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-400 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
