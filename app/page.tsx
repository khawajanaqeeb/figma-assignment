
import Link from "next/link";
import "./globals.css"; 
import profile from "./public/n2.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
      <div className="pic">
          <Image
            src={profile}
            width={150}
            height={150}
            className="pic"
            alt="Picture of the author"
            
          />
        </div>
        <div className="head">
          <h1>Khawaja Naqeeb Uddin</h1>
          <p> Ambitious Web Developer</p>
          <nav>
            <ul>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#education">Education</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm an ambitious web developer eager to learn new things with a
            passion for building atractive,functional and user-friendly
            websites.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Problem Solving</li>
            <li>Teamwork</li>
          </ul>
        </section>

        <section id="education">
          <h2>Education</h2>
          <p>University of Karachi - Masters's in Economics</p>
          <p>University of Karachi - Bachelor's Commerce</p>
          <p>Board of Intermediate Karachi - Intermediate Science</p>
          <p>Board of Secondary Education Karachi - Martriculation</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p>
            Worked as Computer teacher for class 9th and 10th, taught basics of
            C++,HTML,CSS.
          </p>
          <p>
            Worked in a computer sales and repair company named Computer Outlet
            , where performed hardware and software installation.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: naqeebkns@gmail.com</p>
          <p>Phone: +923452435349</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/naqeeb-kns-75203a143/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/khawajanaqeeb" target="_blank">
              GitHub
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>© 2024 Khawaja Naqeeb Uddin</p>
      </footer>
    </div>
  );
}
