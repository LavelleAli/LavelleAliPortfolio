import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <footer className="border-t border-line px-6 py-8 text-sm text-muted">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Lavelle Ali</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            className="flex flex-col items-center hover:text-skyblue transition-colors duration-500 gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-sun text-2xl hover:scale-130 transition-[scale] duration-300  " />
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            className="flex flex-col items-center hover:text-skyblue transition-colors duration-500 gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-sun text-2xl hover:scale-130 transition-[scale] duration-300  " />
            LinkedIn
          </a>
          <a
            href="mailto:LavelleAli7@gmail.com"
            className="flex flex-col items-center hover:text-sky-400 transition-colors duration-500 gap-2"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-sun text-2xl hover:scale-130 transition-[scale] duration-300  " />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
