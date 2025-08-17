import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <Sidebar />
          <main>

            <Section id="about" title="Sobre Mim">
              <p className="text-gray-600 leading-relaxed">
                Sou André Felipe da Costa, desenvolvedor focado em Back-end, apaixonado por tecnologia. Dedico-me a criar sistemas robustos, eficientes e escaláveis, com experiência em APIs, bancos de dados e integração de sistemas. Sempre em busca de aprendizado e inovação, estou pronto para contribuir com soluções que fazem a diferença.</p>
            </Section>

            <Section id="education" title="Formação">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Desenvolvimento de Software Multiplataforma</h3>
                <p className="text-green-600">FATEC São José dos Campos  • 2022  - presente</p>
                <p className="text-gray-600 mt-2">Tecnologo com foco em desenvolvimento web</p>
              </div>
            </Section>

            <Section id="experience" title="Experiência">
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Analista de Banco de Dados - DBO l</h3>
                  <p className="text-green-600">HTI Tecnologia • 2023 - 2024</p>
                  <p className="text-gray-600 mt-2">Monitoramento de servidores de desenvolvimento e homologação e execução de queries de alto risco em servidores de produção</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Desenvolvedor Delphi</h3>
                  <p className="text-green-600">Embed.it • 2024</p>
                  <p className="text-gray-600 mt-2">Colaborei na criação de aplicações em delphi para comuicação com PinPad's para meios de pagamento e emissões de NFC</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Desenvolvedor C#</h3>
                  <p className="text-green-600">Pro4Tech • 2025</p>
                  <p className="text-gray-600 mt-2">Iniciando novos projetos e realizando a manutenção em projetos ja existentes</p>
                </div>
              </div>
            </Section>

            
            <Section id="projects" title="Projetos Academicos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </Section>

            <Section id="contact" title="Contact">
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong className="text-gray-800">Email:</strong> andrefelipecosta493@gmail.com
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Telefone:</strong> (12) 98107-0102
                </p>
              </div>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;