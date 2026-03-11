import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="home">

      <div className="home-content">

        <h1 className="HomeH1">Hi, I'm Shaker 👋</h1>

        <h2 className="HomeTyping">
          <Typewriter
            words={[
              "Software Engineer",
              "Web Developer",
              "UI/UX",
              "QA Manual Engineer",
              "QA Automation Engineer"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="HomeDesc">
          Quality Assurance Engineer and Web Developer with 3+ years of experience building high-quality web applications. Skilled in React.js and modern JavaScript, with strong expertise in manual and automated testing to deliver reliable, scalable products. Experienced working with remote teams to improve workflows, reduce bugs, and ship features efficiently. Passionate about continuous learning and creating user-friendly digital experiences.
        </p>

        

        <div className="social-icons">
          <a href="https://github.com/ShakerSerwan">GitHub</a>
          <a href="https://www.linkedin.com/in/mohammed-shaker-sirawan-a67116183/">LinkedIn</a>
        </div>

      </div>

    </section>
  );
};

export default Home;