import { Typography, Container, Grid } from "@mui/material"
import brewerytours from '../files/pictures/brewerytours.png'
import cohortManager from '../files/pictures/cohortmanager1.png'

import { PortfolioEntry } from "../components/PortfolioProjectCard"
import { PortfolioEntryCarousel } from "../components/PortfolioProjectCardCarousel"

export function Portfolio() {
  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h3'>Portfolio</Typography>
        <br />
        <Typography variant='h4'>What's here is just a taste:</Typography>
        <Typography variant='h6'>To see more, have a look at my <a target="__blank" href="https://github.com/ample-samples">GitHub profile</a></Typography>
        <hr />
        <br />
        <Grid container rowGap={2} columnGap={2} className="portfolio-list" sx={{ justifyContent: "center", flexDirection: "row" }}>
          <PortfolioEntry
            title="Brewery Tours"
            img={brewerytours}
            shortDesc="A front end website which you can use to search through breweries in the USA. Built using pure JavaScript, HTML and CSS, and interacting with a RESTful API."
            fullDesc="A front end website which you can use to search through breweries in the USA. Built using pure JavaScript, HTML and CSS, and interacting with a RESTful API."
            repoURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
            // hostedURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          />
          <PortfolioEntry
            title="Cohort Manager"
            img={cohortManager}
            shortDesc="A Team Dev project in which we built a front end site for a cohort manager & social media platform, using Scrum and Agile methodology. Built with React, Figma, RESTful API."
            fullDesc="A Team Dev project in which we built a front end site for a cohort manager & social media platform, using Scrum and Agile methodology. Built with React, Figma, RESTful API."
            repoURL="https://github.com/ample-samples/team-dev-client-c10"
            // hostedURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          />
        </Grid>
      </Container>
    </>
  )
}
