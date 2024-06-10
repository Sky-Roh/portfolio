import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import project1Img from "../../../public/images/ClimbStation.png";
import chromeEx from "../../../public/images/chrome-ex-1.png";
import vistavid from "../../../public/images/vistavid.png";
import ProjectItems from "../Projects/ProjectItems";

const CarousalProject = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const techIconsClimbStation = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg",
  ];

  const techIconsVistaVid = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  ];

  const techIconChromeEx = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons//vitejs/vitejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  ];
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      // autoPlay={true}
      autoPlaySpeed={6000}
      centerMode={false}
      responsive={responsive}
      infinite={true}
      itemClass="item"
      data-aos="fade-up"
    >
      <div>
        <ProjectItems
          image={project1Img.src}
          name="climbstation"
          title="ClimbStation"
          description="This is a project I made when I was studying at BrainStation."
          techIcons={techIconsClimbStation}
          githubLink="https://github.com/Sky-Roh/climbing-capstone-client"
          webLink="https://climb-station.netlify.app"
        />
      </div>
      <div>
        <ProjectItems
          image={chromeEx.src}
          name="ChromeExtension"
          title="Chrome Extension"
          description="This is a project I made when I was studying at BrainStation."
          techIcons={techIconChromeEx}
          githubLink="https://github.com/Sky-Roh/chrome-ex-amz"
        />
      </div>
      <div>
        <ProjectItems
          image={vistavid.src}
          name="vistavid"
          title="VistaVid"
          description="This is a project I made when I was studying at BrainStation."
          techIcons={techIconsVistaVid}
          githubLink="https://github.com/Sky-Roh/vistavid-frontend"
        />
      </div>
    </Carousel>
  );
};

export default CarousalProject;