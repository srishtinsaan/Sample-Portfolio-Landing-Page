import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";



function Footer() {
  return (
    <div>
      <footer className="py-6 bg-black text-center text-gray-400  ">
        © 2025 Vedant Kaushik.
        <div className="flex space-x-5 justify-center text-2xl mt-3">
          <a
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="LinkedIn"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
      </footer>
      
    </div>
  )
}

export default Footer
