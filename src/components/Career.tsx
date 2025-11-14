import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LEARNER</h4>
                <h5>KL UNIVERSITY</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              learning new things and implemting them, finding sloutions to the complex problems
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VIRTUAL INTERNSHIP</h4>
                <h5>AICTE</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a 10-week AI-ML Virtual Internship supported by AWS Academy, facilitated by EduSkills and AICTE. Gained hands-on experience in machine learning algorithms, data preprocessing, and AI model development, strengthening my foundation in artificial intelligence and its real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DATA ANALYTICS SIMULATION</h4>
                <h5>DELOITTE</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completed the Data Analytics job simulation by Deloitte on Forage, where I analyzed client data, interpreted business insights, and created dashboards using tools like Excel, tableau. Gained practical experience in data cleaning, visualization, and presenting data-driven recommendations in a simulated consulting environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
