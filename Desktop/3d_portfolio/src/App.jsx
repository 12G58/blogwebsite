import { BrowserRouter } from 'react-router-dom'; 
import {Route, Routes} from 'react-router-dom'; 

import {Logic, Contact, Science, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => { 
  return (
    <BrowserRouter>

    <div className = "relative z-0 bg-primary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Routes>
        <Route path = '/' element = { <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center"> < Hero /> </div>} /> 
        <Route path = '/logic' element = { <Logic /> } />
        <Route path = '/science' element = { <Science /> } />
        <Route path = '/tech' element = { <Tech /> } />

      </Routes>
      
      <div className = "relatie z-0">
        <Contact /> 
        <StarsCanvas /> 
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
