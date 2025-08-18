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
   <nav className="bg-white shadow-lg rounded-xl p-4 sticky top-4 h-fit 
                md:w-64 md:h-fit md:sticky md:top-4 
                w-full fixed bottom-0 left-0 md:static z-50">
    <ul className="flex md:flex-col justify-around md:space-y-2 space-x-4 md:space-x-0">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex items-center gap-2 md:gap-3 p-2 md:p-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all text-sm md:text-base"
          >
            <section.icon className="w-5 h-5" />
            <span className="font-medium hidden md:inline">{section.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
  );
}
