import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1>jeffwilliams</h1>
      <ul className="flex gap-4">
        <li>
          <a
            target="_blank"
            href="https://github.com/orphandeity"
            rel="noreferrer"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/orphandeity"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </li>
      </ul>
    </header>
  );
}
