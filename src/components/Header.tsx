import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-lg rounded-xl mb-8 animate-fadeIn overflow-hidden">
      <div className="h-64 relative bg-gradient-to-b from-green-700 to-green-800">
        <img
          src="/img/banner.png"
          alt="Developer Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="px-6 pb-6 relative">
        <div className="flex flex-col items-center -mt-20">
          <img
            src="img/me.jpg"
            alt="Developer Profile"
            className="w-40 h-40 rounded-full object-cover object-top border-4 border-white shadow-xl transition-transform hover:scale-105"
          />
          <div className="text-center mt-4">
            <h1 className="text-4xl font-bold text-gray-800">FeCosta</h1>
            <p className="text-xl text-green-600 mb-4">Back-End Developer</p>
            <h2 className= "text-2xl font-light text-gray-800">Construindo a base para o seu sucesso digital.</h2>
            <br></br>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Github className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
