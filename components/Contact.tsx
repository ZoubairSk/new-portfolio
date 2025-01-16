import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className="py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:contact@skirej.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Email Zubayr Skirej"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/ZoubairSk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Zubayr Skirej's GitHub profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/zubayr-skirej"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Zubayr Skirej's Linkedin profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          © {new Date().getFullYear()} Zoubair Skiredj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
