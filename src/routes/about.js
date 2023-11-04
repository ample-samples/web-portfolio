import { Container, Typography, Box } from "@mui/material"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './style.css'

export function About() {

  const bio = ""
  const verticalTimelineElementSettings = {
    contentStyle:{background: '#0086CE', color: '#fff'},
    contentArrowStyle:{borderRight: '7px solid  rgb(33, 150, 243)'},
    iconStyle:{background: 'rgb(33, 150, 243)', color: '#fff'}
  }
  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h4' className="about-title"></Typography>
        <VerticalTimeline layout={"1-column-left"} lineColor="#ccc"> 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/488881/computer.svg" alt="" /> }
    date="2023 - Present"
            {...verticalTimelineElementSettings}>
            <h3 className="vertical-timeline-element-title"><u>Boolean Full Stack Graduate</u></h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p> Continual growth as a developer, finding new projects to create and challenges to solve </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/449289/target.svg" alt="" /> }
    date="2023 - Present"
            {...verticalTimelineElementSettings}>
            <h3 className="vertical-timeline-element-title"><u>Target Marker Supervisor</u> - Part Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Bisley Shooting Grounds, Bisley</h4>
            <p> Supervisor Target Marker at NRA </p>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
        {
          // <Typography variant='p'>
          //   2014 - GCSE
          //   <br />
          //   Maths, further maths and physics 
          //   <br />
          //   2015 - BTEC
          //   <br />
          //   Vehicle Technology
          //   <br />
          //   2016 - Work experience
          //   <br />
          //   Landscape Architeture
          //   <br />
          //   2017-2019 - A levels
          //   <br />
          //   Maths, Further maths, Physics
          //   <br />
          //   2018-2021 - University
          //   <br />
          //   Mech eng & Maths + Comp sci
          //   <br />
          //   2021 - Work experience
          //   <br />
          //   Engineering technician - Electrical equipment
          //   <br />
          //   2022 Work experience
          //   <br />
          //   NRA
          //   <br />
          //   2023-Present Software development bootcamp
          //   <br />
          //   Resuming journey in tech - sofware developer
          //   <br />
          //   <br />
          //   <br />
          //   Stick to points that I'm interested in and/or are cool
          // </Typography>
        }

      </Container>
    </>
  )
}
