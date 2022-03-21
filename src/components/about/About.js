import "./about.css";

const About = () => {
  return (
    <div className="a" id='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello reader i hope you are doing well, I am very grateful that you came here and took your time to explore my portfolio.
          I am a student at Institute of Engineering and Technology Lucknow pursuing MCA(Master's of Computer Application's)
          since this is my last year i thought of making a project that would be unique in its own way
          so i thought of the portfolio idea and it came out to be pretty interesting.
        </p>
        <p className="a-desc">
          Some of my key skills are
          Python
          Java
          Django
          ReactJS
          Sql
          Dsa
        </p>
      </div>
    </div>
  );
};

export default About;