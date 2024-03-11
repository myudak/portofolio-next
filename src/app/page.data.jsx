import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGoogle,
} from "react-icons/io5";

import { EmailIcon } from "@chakra-ui/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";

const pageDataLink = [
  {
    title: "Github",
    link: "https://github.com/myudak",
    icon: <IoLogoGithub />,
  },
  {
    title: "Linkedin",
    link: "https://linkedin.com/in/myudak",
    icon: <IoLogoLinkedin />,
  },
  {
    title: "Kaggle",
    link: "https://www.kaggle.com/myudak",
    icon: <FontAwesomeIcon icon={faKaggle} />,
  },
  {
    title: "Email",
    link: "mailto:yudaplzhacker@gmail.com",
    icon: <EmailIcon />,
  },
  {
    title: "Google Developer",
    link: "https://g.dev/myudak",
    icon: <IoLogoGoogle />,
  },
  {
    title: "Instagram",
    link: "https://instagram.com/myudakk",
    icon: <IoLogoInstagram />,
  },
  {
    title: "Cloud Skill Boost",
    link: "https://www.cloudskillsboost.google/public_profiles/82d8002a-3d76-4e6d-bce8-9d64dded34a2",
    icon: <IoLogoGoogle />,
  },
];

const pageDataBio = [
  {
    title: "Born in Bontang, East Kalimantan.",
    year: "2006",
  },
  {
    title: "Completed high school in the SMAS YPVDP.",
    year: "2024",
  },
];

const pageData = {
  pageDataLink: pageDataLink,
  pageDataBio: pageDataBio,
};

export default pageData;
