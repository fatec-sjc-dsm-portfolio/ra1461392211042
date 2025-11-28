import React from "react";

export default function Sidebar() {
  const menuItems = [
    { id: "about", label: "Sobre Mim" },
    { id: "education", label: "Formação" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos Acadêmicos" },
    { id: "personalProjects", label: "Projetos Pessoais" },
    { id: "contact", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="p-4 bg-white shadow-lg rounded-xl h-fit sticky top-6">
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="block w-full text-left text-gray-700 hover:text-green-600 transition animate-fadeIn"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
