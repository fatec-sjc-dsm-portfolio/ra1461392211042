import React from 'react';

interface ProjectCardProps {
  title: string;
  technologies: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PersonalProjectCardProps {
  title: string;
  technologies: string;
  description: string;
  colaboration: string;
  imageUrl: string;
  link: string;
}

// Componente genérico para projeto padrão
export function ProjectCard({ title, technologies, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-green-600">{technologies}</p>
        <p className="text-gray-600">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-medium"
          >
            Ver no GitHub
          </a>
        )}
      </div>
    </div>
  );
}

// Componente para projeto pessoal/colaborativo
export function PersonalProjectCard({
  title,
  technologies,
  description,
  colaboration,
  imageUrl,
  link,
}: PersonalProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-green-600">{technologies}</p>
        <p className="text-gray-600">{description}</p>
        <p className="text-green-600">{colaboration}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-medium"
          >
            Ver no site
          </a>
        )}
      </div>
    </div>
  );
}
