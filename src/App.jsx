import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./component/Landing"
import About from "./component/About"
import Technologies from "./component/Technologies"
import Projects from "./component/Projects"
import GetinTouch from "./component/GetinTouch"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
   <div className="h-[100vh]">
    <Router>
     
     <Landing/>
     <About/>
     <Technologies/>
     <Projects/>
     <GetinTouch/>
      {/* <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/" element={<About/>}/>
      </Routes> */}
    </Router>
   </div>
  )
}

export default App
