import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, scroll } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
const listItems = socials.map((social,index) =>
    <Box key={index}><a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a></Box>
  );

  
const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
          let moving = window.pageYOffset
          setVisible(position > moving);
          setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
          window.removeEventListener("scroll", handleScroll);
        })
    })

  const ps = visible ? "sticky" : "absolute";
  return (
    <Box
      position={ps}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing='24px'>
              {listItems}
            </HStack>
            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section">Projects</a>
              <a href="#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
