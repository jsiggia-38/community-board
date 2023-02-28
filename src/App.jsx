import './App.css';
import Resource from '../components/Resource';

const App = () => {

  return (
    <div className="App">
      
      <h1 className = "Title">Alamo Movie Events</h1>
      <div className = "wrapper">
        <Resource eventName = "Bill and Ted's Excellent Adventure" imageName = "../images/BillAndTedsExcellentAdventurePoster.jpeg" eventType = "Movie Party" infoLink = "https://drafthouse.com/nyc/event/movie-party-bill-teds-excellent-adventure" />
        <Resource eventName = "Scream 6" imageName = "../images/Scream6Poster.jpeg" eventType = "Regular" infoLink = "https://drafthouse.com/show/scream-vi" />
        <Resource eventName = "Bram Stoker's Dracula" imageName = "../images/BramStokerDraculaPoster.jpeg" eventType = "Brunch Screening" infoLink = "https://drafthouse.com/nyc/show/bram-stokers-dracula" />
        <Resource eventName = "Ant-Man and the Wasp Quantimania" imageName = "../images/AntMan3Poster.jpeg" eventType = "Regular" infoLink = "https://drafthouse.com/nyc/show/ant-man-and-the-wasp-quantumania?cinemaId=2101&sessionId=67760&utm_source=google&utm_medium=cpc&utm_campaign=pmax" />
        <Resource eventName = "Fast X" imageName = "../images/FastXPoster.jpeg" eventType = "Regular" infoLink = "https://drafthouse.com/nyc/show/fast-x" />
        <Resource eventName = "Critters" imageName = "../images/CrittersPoster.jpeg" eventType = "Terror Tuesday" infoLink = "https://drafthouse.com/nyc/show/critters" />
        <Resource eventName = "Edwards Vs. Usman" imageName = "../images/EdwardsVUsmanPoster.jpeg" eventType = "Fight" infoLink = "https://drafthouse.com/nyc/show/ufc-286-edwards-vs-usman" />
        <Resource eventName = "Fist of Condor" imageName = "../images/FistCondorPoster.jpeg" eventType = "Screening with Q/A" infoLink = "https://drafthouse.com/nyc/event/fantastic-fest-presents-fist-of-the-condor-w-live-q-a?cinemaId=2102" />
        <Resource eventName = "Jones Vs. Gane" imageName = "../images/JonesVGanePoster.jpeg" eventType = "Fight" infoLink = "https://drafthouse.com/nyc/show/ufc-285-jones-vs-gane" />
        <Resource eventName = "The Matrix" imageName = "../images/MatrixPoster.jpeg" eventType = "Regular" infoLink = "https://drafthouse.com/nyc/show/the-matrix" />
        <Resource eventName = "River's Edge" imageName = "../images/RiversEdgePoster.jpeg" eventType = "Weird Wednesday" infoLink = "https://drafthouse.com/nyc/event/weird-wednesday-rivers-edge" />
        <Resource eventName = "Something's Gotta Give" imageName = "../images/SomethingsGottaGivePoster.jpeg" eventType = "Brunch Screening" infoLink = "https://drafthouse.com/nyc/event/brunch-screenings-somethings-gotta-give" />
      </div>
    </div>
  )
}

export default App