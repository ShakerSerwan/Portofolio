const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>City Events</h3>
          <p>Platform for discovering events in the city.</p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built with React.</p>
        </div>

        <div className="project-card">
    <h3>Sentiment Analysis</h3>
    <p>Built a model to predict user sentiments using NLP (Python, AI).</p>
  </div>

  <div className="project-card">
    <h3>Fake News Detection</h3>
    <p>Developed a classifier to identify misleading news using AI and NLP.</p>
  </div>

  <div className="project-card">
    <h3>Weather Prediction</h3>
    <p>Designed a weather forecasting model in collaboration with the Meteorological Authority.</p>
  </div>

  <div className="project-card">
    <h3>Automated Testing – Acceinfo App</h3>
    <p>Created a full automation testing framework for the mobile application.</p>
  </div>

  <div className="project-card">
    <h3>Automated Testing – Acceinfo Website</h3>
    <p>Built a Selenium-based automated test suite for web testing.</p>
  </div>
      </div>
    </section>
  );
};

export default Projects;