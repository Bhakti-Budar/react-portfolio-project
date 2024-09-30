import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Emmanuel Tweneboah</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Fullstack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I am a frontend developer with 1 year of experience. I am passionate
          about building web applications. I am a full stack developer. I am
          always looking for new and challenging projects. I love to create new
          things.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
