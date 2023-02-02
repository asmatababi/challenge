import "./App.css";
import Nav from "./navbar/Nav";
import Profile from "./profile/Profile";
import Contact from "./contact/Contact";
import ProjectList from "./projects/ProjectList";
import { Fragment } from "react";
import image from "./John-Doe.jpg";
import proj from "./proj.png";
function App() {
  const about = {
    name: "John Doe",
    discription: "and i make horrible websites.",
    image: image,
    projects: [
      {
        id: 1,
        name: "project 1",
        image: proj,
        paragraphe:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      },
      {
        id: 2,
        name: "project 2",
        image: proj,
        paragraphe:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      },
      {
        id: 3,
        name: "project 3",
        image: proj,
        paragraphe:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      },
      {
        id: 4,
        name: "project 4",
        image: proj,
        paragraphe:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      },
    ],
  };
  return (
    <Fragment>
      <Nav about={about} />

      <Profile about={about} />
      <ProjectList about={about} />

      <Contact />
    </Fragment>
  );
}

export default App;

