import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
  {
    name: "Github",
    path: "https://github.com/hernandonatelli",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/hernan-donatelli-a81a9a35/",
    icon: <FaLinkedin />,
  }
]
const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {social.map((item, index ) => (
            <Link href={item.path} target="_blank" key={index} className={iconStyles}>
                {item.icon}
            </Link>
        ))}
    </div>;
};

export default Social;
