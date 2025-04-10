import react from 'react'
import Header from './Components/Header.jsx'
import Opening from './Components/Opening.jsx'
import About from './Components/About.jsx'
import MainPage from "./Components/MainPage.jsx"
import UtilityPages from "./Components/UtilityPages.jsx"
import Template from './Components/Template.jsx'
import Ending from "./Components/Ending.jsx"
import Footer from './Components/footer.jsx'
import './App.css'

function App() {

  return (
    <div className='mainAppCon'>
        <Header />
        <Opening />
        <About/>
        <MainPage/>
        <UtilityPages/>
        <Template/>
        <Ending/>
        <Footer/>
    </div>
  )
}

export default App
