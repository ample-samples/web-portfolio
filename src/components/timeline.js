import { Container, Typography, Box } from "@mui/material"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './style.css'

export function TimeLine() {
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
          {...verticalTimelineElementSettings}
        >
          <h3 className="vertical-timeline-element-title">Boolean Full Stack Developer</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Boolean, UK</h4>
          <p> Passionate software developer, finding new projects to create and challenges to solve
            <br/>
            <a href="/#/portfolio">Check out my projects here</a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/449289/target.svg" alt="" /> }
          date="2022 - Present"
          {...verticalTimelineElementSettings}
          contentStyle={{ background: '#fff', color: '#000', borderTop: '4px solid #0086CE' }}
        >
          <h3 className="vertical-timeline-element-title">Target Marker Supervisor - Part Time</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Bisley Shooting Grounds, Bisley</h4>
          <p> Supervisor Target Marker at NRA </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/357475/circuit.svg" alt="" /> }
          date="2021"
          {...verticalTimelineElementSettings} >
          <h3 className="vertical-timeline-element-title">Engineering Technician</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Guided Ultrasonics Ltd, Brentford</h4>
          <p>Manufacturing hand-crafted, high-quality non-destructive testing equipment for industrial pipes</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/438596/grad-cap.svg" alt="" /> }
          date="2020 - 2021"
          {...verticalTimelineElementSettings}
          contentStyle={{ background: '#fff', color: '#000', borderTop: '4px solid #0086CE' }}
        >
          <h3 className="vertical-timeline-element-title">Mechanical Engineering - 2nd year</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Harper Adams University, Shropshire</h4>
          <p>Learning various engineering skills, such as statistical analysis, 5S methodology and writing literature reviews</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/438596/grad-cap.svg" alt="" /> }
          date="2019-2020"
          {...verticalTimelineElementSettings}>
          <h3 className="vertical-timeline-element-title">Combined Hons. Mathematics & Computer Science - 1st year</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Keele University, Staffordshire</h4>
          <p>Exposure to various languages and computer science concepts. Including: <br/> Java, assembly and systems architecture</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          icon={ <img className="timeline-element-icon" src="https://www.svgrepo.com/show/438596/grad-cap.svg" alt="" /> }
          date="2018 - 2019"
          {...verticalTimelineElementSettings}
          contentStyle={{ background: '#fff', color: '#000', borderTop: '4px solid #0086CE' }}
        >
          <h3 className="vertical-timeline-element-title">Mechanical Engineering - 1st year</h3>
          <hr className="vertical-timeline-element-title-separator"/>
          <h4 className="vertical-timeline-element-subtitle">Harper Adams University, Shropshire</h4>
          <p>Member of the Motorsport club, work experience with <a href="https://www.m-sport.co.uk/">M-Sport Rally</a> team</p>
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
      </Container>
    </>
  )
}
