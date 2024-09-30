import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            I am a frontend developer with 1 year of experience. I am passionate
            about building web applications. I am a full stack developer. I am
            always looking for new and challenging projects. I love to create
            new things.
          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                I am a frontend developer with 1 year of experience. I am
                passionate about building web applications. I am a full stack
                developer. I am always looking for new and challenging projects.
                I love to create new things.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                I am a frontend developer with 1 year of experience. I am
                passionate about building web applications. I am a full stack
                developer. I am always looking for new and challenging projects.
                I love to create new things.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>U/X Design</h3>
              <p>
                I am a frontend developer with 1 year of experience. I am
                passionate about building web applications. I am a full stack
                developer. I am always looking for new and challenging projects.
                I love to create new things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
