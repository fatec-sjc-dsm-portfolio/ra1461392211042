import React from 'react';
import { BookOpen, Briefcase, FolderGit2, User, Phone } from 'lucide-react';

export default function Sidebar() {
  const sections = [
    { id: 'about', label: 'Sobre Mim', icon: User },
    { id: 'education', label: 'Formção', icon: BookOpen },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'projects', label: 'Projetos', icon: FolderGit2 },
    { id: 'contact', label: 'Contato', icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-lg rounded-xl p-4 sticky top-4 h-fit">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-center gap-3 p-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
            >
              <section.icon className="w-5 h-5" />
              <span className="font-medium">{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* Botão para download do currículo */}
      {/* <div className="mt-4">
        <a
          href="assests/andreFelipeCurriculo.pdf" // Substitua pelo caminho real do seu currículo
          download
          className="block text-center bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
        >
          Download CV
        </a>
      </div> */}
    </nav>
  );
}
