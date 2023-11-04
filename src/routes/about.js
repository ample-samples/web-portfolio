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

  const TimelineElements = () => {
    return (
      <>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/488881/computer.svg" alt="" /> }
          date="2023 - Present"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title">Boolean Full Stack Graduate</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Boolean, UK</h4>
          <p> Continual growth as a developer, finding new projects to create and challenges to solve </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/449289/target.svg" alt="" /> }
          date="2022 - Present"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title">Target Marker Supervisor - Part Time</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Bisley Shooting Grounds, Bisley</h4>
          <p> Supervisor Target Marker at NRA </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/357475/circuit.svg" alt="" /> }
          date="2021"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title">Engineering Technician</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Guided Ultrasonics Ltd, Brentford</h4>
          <p>Manufacturing hand-crafted, high-quality non-destructive testing equipment</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/438596/grad-cap.svg" alt="" /> }
          date="2020 - 2021"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title">Mechanical Engineering</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Harper Adams University, Shropshire</h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/357475/circuit.svg" alt="" /> }
          date="2021"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title">Combined Hons. Mathematics & Computer Science</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/357475/circuit.svg" alt="" /> }
          date="2021"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title"></h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/118998/basic-tick.svg" alt="" /> }
        />
      </>
    )
  }

  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h4' className="about-title" sx={{paddingTop: "30px"}}></Typography>
        <VerticalTimeline layout={"2-columns"} lineColor="#ccc"> 
          <TimelineElements />
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
