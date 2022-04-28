import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Fab from "@mui/material/Fab";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function About() {
  const history = useHistory();
  return (
    <div className="center gap">
      <a
        target={"_blank"}
        href="https://www.linkedin.com/in/jayasurya-vs-a4ba25216/"
      >
        <Fab color="primary" aria-label="add">
          <LinkedInIcon />
        </Fab>
      </a>
      <a target={"_blank"} href="https://github.com/JAYASURYA018">
        <Fab color="error" aria-label="add">
          <GitHubIcon />
        </Fab>
      </a>
      <a target={"_blank"} href="https://twitter.com/jayasuryavs1999">
        <Fab color="warning" aria-label="add">
          <TwitterIcon />
        </Fab>
      </a>
      <a target={"_blank"} href="https://www.instagram.com/jaya_surya_vs/">
        <Fab color="secondary" aria-label="add">
          <InstagramIcon />
        </Fab>
      </a>
      <a
        target={"_blank"}
        href="https://www.facebook.com/profile.php?id=100063623570303"
      >
        <Fab color="primary" aria-label="add">
          <FacebookIcon />
        </Fab>
      </a>
    </div>
  );
}

export default About;
