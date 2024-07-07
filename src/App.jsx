import React, { useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import gsap from "gsap";

function App() {
  const buttonRef = useRef(null);

  //gsap animation for greeting text
  useEffect(() => {
    const timeline = gsap.timeline({
      onStart: () => {
        document.body.classList.add("no-scroll");
        window.scrollTo(0, 0);
      },
      onComplete: () => document.body.classList.remove("no-scroll"),
    });
    const greetings = document.querySelectorAll(".hello h1");

    greetings.forEach((greeting, index) => {
      timeline.to(greeting, {
        opacity: 1,
        duration: 0.3,
        onStart: () => {
          if (index > 0) {
            gsap.to(greetings[index - 1], {
              opacity: 0,
              duration: 0.3,
            });
          }
        },
        delay: index === 0 ? 0 : 0.3,
      });
    });

    timeline.to(".hello", {
      y: -1000,
      duration: 2,
      ease: "power2.inOut",
      delay: 0.3,
    });
  }, []);

  //gsap animation on hover for about-main-button
  useEffect(() => {
    const button = buttonRef.current;
    const tl = gsap.timeline({ paused: true });

    tl.to(button, {
      backgroundColor: "#455CE9",
      duration: 0.3,
      ease: "power2.inOut",
    });

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      button.removeEventListener("mouseenter", () => tl.play());
      button.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  //scrooling animation for marquee
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translate(-150%)",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    } else {
      gsap.to(".marque", {
        transform: "translate(0%)",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  };

  //for booklx
  const handleProject1 = (e) => {
    gsap.to(".booklx-card", {
      opacity: 1,
      transform: "translateX(500px)",
      height: "35vh",
      overflow: "hidden",

      ease: "none",
      zIndex: 0,
    });
  };
  const handleprojectLeave1 = () => {
    gsap.to(".booklx-card", {
      transform: "translateX(-500px)",
      opacity: 0,
    });
  };
  //for futurechaos
  const handleProject2 = (e) => {
    gsap.to(".futurechaos-card", {
      opacity: 1,
      transform: "translateX(500px)",
      height: "35vh",
      overflow: "hidden",

      ease: "none",
      zIndex: 0,
    });
  };
  const handleprojectLeave2 = () => {
    gsap.to(".futurechaos-card", {
      transform: "translateX(-500px)",
      opacity: 0,
    });
  };

  //for blog burst
  const handleProject3 = (e) => {
    gsap.to(".blog-card", {
      opacity: 1,
      transform: "translateX(500px)",
      height: "35vh",
      overflow: "hidden",

      ease: "none",
      zIndex: 0,
    });
  };
  const handleprojectLeave3 = () => {
    gsap.to(".blog-card", {
      transform: "translateX(-500px)",
      opacity: 0,
    });
  };

  //for jewellery
  const handleProject4 = (e) => {
    gsap.to(".jewellery-card", {
      opacity: 1,
      transform: "translateX(500px)",
      height: "35vh",
      overflow: "hidden",

      ease: "none",
      zIndex: 0,
    });
  };
  const handleprojectLeave4 = () => {
    gsap.to(".jewellery-card", {
      transform: "translateX(-500px)",
      opacity: 0,
    });
  };

  return (
    <main className="main" onWheel={handleScroll}>
      {/* ------------------landing page----------------- */}
      <main className="hero d-flex flex-column">
        <div className="hello text-light d-flex justify-content-center align-items-center">
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 1 }}>
            <div></div> Hello
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> नमस्ते
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> Hola
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> Bonjour
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> Hallo
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> Ciao
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> 안녕하세요
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> Olá
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> Привет
          </h1>
          <h1 className="d-flex mb-0 align-items-center" style={{ opacity: 0 }}>
            <div></div> 你好
          </h1>
        </div>
        <div className="nav d-flex align-items-center justify-content-between px-5">
          <div className="nav-name d-flex align-items-center justify-content-start sans">
            <p className="mb-0 px-1">© Code By Bebek © Bebek das</p>
          </div>
          <div className="nav-item-box d-flex align-items-center justify-content-start gap-4">
            <button
              className="nav-item d-flex align-items-center justify-content-center"
              onClick={() => window.scrollTo(1300, 1300)}
            >
              <p className="work mb-0">WORK</p>
            </button>
            <button
              className="nav-item d-flex align-items-center justify-content-center"
              onClick={() => window.scrollTo(800, 800)}
            >
              <p className="about mb-0">ABOUT</p>
            </button>
            <button
              className="nav-item d-flex align-items-center justify-content-center"
              onClick={() => window.scrollTo(2000, 2000)}
            >
              <p className="contact mb-0">CONTACT</p>
            </button>
          </div>
        </div>

        <div className="landing2 d-flex">
          <div className="landing-left d-flex justify-content-start align-items-center">
            <div className="landing-left-first d-flex align-items-center justify-content-end">
              <div className="landing-left-text">
                <p className="pop">
                  Located
                  <br />
                  in the
                  <br />
                  great INDIA
                </p>
              </div>
              <div className="landing-left-gif">
                <img src="images/globe.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="landing-center d-flex justify-content-center align-items-end">
            <img src="images/model2.png" alt="" />
          </div>
          <div className="landing-right d-flex flex-column justify-content-center align-items-start pop">
            <div className="southeast-i">
              <SouthEastIcon />
            </div>
            <h2>AZURE AWS</h2>
            <h2>Designer and Developer</h2>
          </div>
        </div>

        <div className="move d-flex justify-content-start align-items-center pop">
          <div className="marque">
            <h1>VIVEK DAS -</h1>
          </div>
          <div className="marque">
            <h1>VIVEK DAS -</h1>
          </div>
          <div className="marque">
            <h1>VIVEK DAS -</h1>
          </div>
          <div className="marque">
            <h1>VIVEK DAS -</h1>
          </div>
        </div>
      </main>

      {/* --------------------About----------------------- */}
      <main className="about-main d-flex align-items-center justify-content-center gap-5">
        <div className="about-main-head pop d-flex align-items-start justify-content-start">
          <h2 className="mb-0">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h2>
        </div>
        <div className="about-main-body pop d-flex align-items-start justify-content-start">
          <p className="mb-0">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </div>
        <div ref={buttonRef} className="about-main-button pop">
          About me
        </div>
      </main>

      {/* ------------------projects-------------------- */}
      <main className="projects d-flex flex-column align-items-center justifg-content-start">
        <div className="booklx-card">
          <img src="images/booklx.png" alt="" />
        </div>
        <div className="futurechaos-card">
          <img src="images/futurechaos.png" alt="" />
        </div>
        <div className="blog-card">
          <img src="images/blogburst.png" alt="" />
        </div>
        <div className="jewellery-card">
          <img src="images/jewellery.png" alt="" />
        </div>
        <section className="projects-heading d-flex align-items-center justify-content-start pop">
          RECENT WORK
        </section>
        <button
          className="projects-item d-flex align-items-center justify-content-between pop"
          onMouseEnter={handleProject1}
          onMouseLeave={handleprojectLeave1}
          onClick={() =>
            (window.location.href =
              "https://github.com/bebekdas7/BookLx_frontend")
          }
        >
          <h1 className="mb-0">BOOK-LX</h1>
          <p className="mb-0">Design & Development</p>
        </button>
        <button
          className="projects-item d-flex align-items-center justify-content-between pop"
          onMouseEnter={handleProject2}
          onMouseLeave={handleprojectLeave2}
          onClick={() =>
            (window.location.href =
              "https://frontend-olive-kappa-24.vercel.app/")
          }
        >
          <h1 className="mb-0">FUTURECHAOS</h1>
          <p className="mb-0">Design & Development</p>
        </button>
        <button
          className="projects-item d-flex align-items-center justify-content-between pop"
          onMouseEnter={handleProject3}
          onMouseLeave={handleprojectLeave3}
          onClick={() => window.alert("On development")}
        >
          <h1 className="mb-0">BLOG BURST</h1>
          <p className="mb-0">Design & Development</p>
        </button>
        <button
          className="projects-item d-flex align-items-center justify-content-between pop"
          onMouseEnter={handleProject4}
          onMouseLeave={handleprojectLeave4}
          onClick={() =>
            (window.location.href =
              "https://thankful-coast-077a92e00.5.azurestaticapps.net/")
          }
        >
          <h1 className="mb-0">JEWELLERY</h1>
          <p className="mb-0">Design & Development</p>
        </button>
      </main>

      {/* ------------------contact---------------- */}
      <main className="contacts-main d-flex flex-column justify-content-end align-items-center gap-5">
        <div className="contacts d-flex flex-column">
          <div className="motivation d-flex flex-column align-items-start justify-content-center pop">
            <button className="motivation-button pop">Get in touch</button>
            <div className="contact-img d-flex align-items-center">
              <div>
                <img src="images/me.png" alt="" />
              </div>
              <h1 className="mb-0 ms-3">Let's work</h1>
            </div>
            <h1 className="mb-0">together</h1>
          </div>
          <div className="contact-details d-flex align-items-center gap-2">
            <div className="email pop">
              <a
                href="mailto:bebekdas7@gmail.com"
                className="text-decoration-none text-light"
              >
                bebekdas7@gmail.com
              </a>
            </div>
            <div className="number pop">
              <a
                href="tel:9130966959"
                className="text-decoration-none text-light"
              >
                +91 9130966959
              </a>
            </div>
          </div>
        </div>
        <div className="footer d-flex justify-content-between align-items-center">
          <div className="footer-data d-flex align-items-center justify-content-center">
            <div className="version d-flex flex-column align-items-start justify-content-center gap-2">
              <p className="mb-0 pop">VERSION</p>
              <p className="mb-0 text-light pop">2024 © Edition</p>
            </div>
            <div className="localtime d-flex flex-column align-items-start justify-content-center gap-2">
              <p className="mb-0 pop">PLACE</p>
              <p className="mb-0 text-light pop">Mumbai, India</p>
            </div>
          </div>
          <div className="footer-socials d-flex align-items-center justify-contenr-start pop">
            <li>
              <a href="https://www.linkedin.com/in/bebekdas7/" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://x.com/vivekk_dev" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/the__boogeyymann/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </div>
        </div>
      </main>
    </main>
  );
}

export default App;
