import { Typography, Container, Grid, Box } from "@mui/material"
import brewerytours from '../files/pictures/brewerytours.png'
import cohortManager from '../files/pictures/cohortmanager1.png'
import habitTracker from '../files/pictures/habit-tracker.png'
import rgbGui from '../files/pictures/RGB Acer GUI.png'
import browserHomepage from '../files/pictures/browser-homepage.png'

import { PortfolioEntry } from "../components/PortfolioProjectCard"
import { PortfolioEntryCarousel } from "../components/PortfolioProjectCardCarousel"

export function Portfolio() {
  return (
    <>
      <Container className="portfolio" component="main" maxWidth="md">
        <br />
        <br />
        <Typography variant='h4' sx={{ display: { xs: "block", md: "none" } }}>Check out some of the things I've built
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Typography variant='h4' sx={{ display: { xs: "inline-block", md: "none" } }}>👇</Typography>
            <Typography variant='h4' sx={{ display: { xs: "inline-block", md: "none" } }}>👇</Typography>
          </Box>
        </Typography>
        <Typography variant='h4' sx={{ display: { xs: "none", md: "block" } }}>👇Check out some of the things I've built👇</Typography>
        <br />
        <Grid container rowGap={2} columnGap={2} className="portfolio-list" sx={{ justifyContent: "center", flexDirection: "row" }}>
          <PortfolioEntry
            title="Habit Tracker"
            img={habitTracker}
            shortDesc="A Full Stack application to allow logged in users to track, and see a statistical breakdown of their daily habits. Built using React and a RESTful API."
            fullDesc=<p>
              This app enables users to see their daily well-being habits:
              <br />
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>Frontend:</span> Enable logged in users to track, and see a statistical breakdown of their daily habits. Built using React and a RESTful API.
              <br />
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>Backend:</span> The back end which powers the habit-tracker, featuring password hashing, data manipulation & storage & retrieval. Built using Express, Node.js, Prisma, jsonwebtoken, bcrypt.
              <br />
              <br />
              Features:
              <ul>
                <li>Create your own account! Your details are stored using modern security measures</li>
                <li>You can track various statistics, these include meditation time, step count, sleep duration and calorie intake</li>
                <li>Adjust your habits retro-actively! Choose which day to enter habits for and see a complete breakdown in the "Habit History" page</li>
              </ul>
            </p>
            repoURL="https://github.com/ample-samples/habit-tracker"
          // hostedURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          />
          <PortfolioEntry
            title="RBG Keyboard Control"
            img={rgbGui}
            shortDesc="Allows a user to control their RGB keyboard lights. Built with Python using Tkinter, the CustomTkinter library and BASH scripting."
            fullDesc=<p>
              This application was created to help users control their keyboard lights in a user-friendly way.
              This is a Linux only application designed for users of Arch Linux.
              I created this to solve the problem I had which was when I had just started using Linux and found that there were no programs to control my laptop's lights in an easy way.
              <br />
              <br />
              Features:
              <ul>
                <li>Save your favourite colours using the profile system</li>
                <li>Mode selection, to choose between static colours, a breathing effect and more</li>
                <li>A preview window for colour selection</li>
                <li>A switch for light mode and dark mode</li>
              </ul>
            </p>
            repoURL="https://github.com/ample-samples/acer-predator-rgb-gui"
          // hostedURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          />
          <PortfolioEntry
            title="Browser Homepage"
            img={browserHomepage}
            shortDesc="A small single page application project to become familiar with Next.js and Tailwind CSS, deployed to Vercel."
            fullDesc=<p>
              I created this page to familiarise myself with Next.js and Tailwind CSS.
              <br />
              <br />
              Features:
              <ul>
                <li>Sliding text using TailwindCSS + HeadlessUI</li>
                <li>Interactive quick links</li>
                <li>A clean & minimalist aesthetic</li>
              </ul>
            </p>
            repoURL="https://github.com/ample-samples/browser-homepage"
            hostedURL="https://browser-homepage-ample-samples.vercel.app/"
          />
          <PortfolioEntry
            title="Cohort Manager"
            img={cohortManager}
            shortDesc="A Team Dev project in which we built a front end site for a cohort manager & social media platform, using Scrum and Agile methodology. Built with React, Figma, RESTful API."
            fullDesc="A Team Dev project in which we built a front end site for a cohort manager & social media platform, using Scrum and Agile methodology. Built with React, Figma, RESTful API."
            repoURL="https://github.com/ample-samples/team-dev-client-c10"
          // hostedURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          />
          <PortfolioEntry
            title="Brewery Tours"
            img={brewerytours}
            shortDesc="A front end website which you can use to search through breweries in the USA. Built using pure JavaScript, HTML and CSS, and interacting with a RESTful API."
            fullDesc="A front end website which you can use to search through breweries in the USA. Built using pure JavaScript, HTML and CSS, and interacting with a RESTful API."
            repoURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          // hostedURL="https://github.com/ample-samples/js-dom-brewery-tours-challenge"
          />
        </Grid>
        <br />
        <hr />
        <Typography variant='h6'>To see the rest, have a look at my <a target="__blank" href="https://github.com/ample-samples">GitHub profile</a></Typography>
      </Container>
    </>
  )
}
