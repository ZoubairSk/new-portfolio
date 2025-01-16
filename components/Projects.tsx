import Image from "next/image";
import { ExternalLink } from "lucide-react";
import techxus from "@/public/techxus.png";
import hader from "@/public/hader.png";
import favarr from "@/public/favarr.png";
import egtos from "@/public/egtos.png";
import magaly from "@/public/magaly.png";
import kaylam from "@/public/kaylam.png";
import geston from "@/public/geston.png";
const projects = [
  {
    title: "Global Package Delivery Platform",
    description:
      "An advanced delivery application enabling users to send packages globally. Winner of the Harvard Business School Venture Competition for its innovation in logistics.",
    image: favarr,
    live: "https://favarr.com",
  },
  {
    title: "Asset Exchange Platform for Companies",
    description:
      "A robust, token-based platform where companies can trade assets seamlessly, inspired by the functionality of platforms like Fiverr.",
    image: egtos,
    live: "https://citts.vercel.app",
  },
  {
    title: "Student Attendance Management System",
    description:
      "A streamlined platform for universities to manage student attendance through QR code scanning, simplifying classroom presence validation.",
    image: hader,
    live: "https://hader.edemia.fr",
  },
  {
    title: "Technology Training Platform for Minorities",
    description:
      "Empowering minority communities with technology training and educational resources, fostering growth and inclusivity.",
    image: techxus,
    live: "https://techxus.org/",
  },
  {
    title: "Real Estate Agency Website in Almería, Spain",
    description:
      "A professional real estate website designed to feature exclusive properties in Almería, Spain, targeting discerning buyers.",
    image: geston,
    live: "https://geston-properties.vercel.app",
  },
  {
    title: "Luxury Real Estate Platform in Costa Brava, Spain",
    description:
      "A premium real estate website showcasing luxurious properties in the picturesque Costa Brava region of Spain.",
    image: kaylam,
    live: "https://kaylamrealty.com",
  },
  {
    title: "Real Estate Website for French-Speaking Clients",
    description:
      "A tailored real estate platform catering to French-speaking audiences, featuring exquisite properties in Spain.",
    image: magaly,
    live: "https://immomg-es.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-lg flex items-center text-center"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full transition-transform duration-300 group-hover:scale-110 "
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 text-center">
                {project.description}
              </p>
              <div className="flex space-x-4">
                {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a> */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
