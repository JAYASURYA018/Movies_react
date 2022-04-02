import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useHistory } from 'react-router-dom';

function About() {

    const history = useHistory();
  return (
    <div className='center gap'>
        <Fab color="primary" aria-label="add">
            <LinkedInIcon/>
      </Fab>
      <Fab color="error" aria-label="add">
        <GitHubIcon/>
      </Fab>
      <Fab color="warning" aria-label="add">
        <TwitterIcon/>
      </Fab>
      <Fab color="secondary" aria-label="add">
        <InstagramIcon/>
      </Fab>
      <Fab color="primary" aria-label="add">
        <FacebookIcon/>
      </Fab>
    </div>
  )
}

export default About