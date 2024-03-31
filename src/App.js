import React,{Component} from  'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component{
  render(){
    return(
    <>
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<News country="in" category="home"></News>}></Route>
            <Route path="/general" element={<News country="in" category="general"></News>}></Route>
            <Route path="/business" element={<News country="in" category="business"></News>}></Route>
            <Route path="/health" element={<News country="in" category="health"></News>}></Route>
            <Route path="/science" element={<News country="in" category="science"></News>}></Route>
            <Route path="/technology" element={<News country="in" category="technology"></News>}></Route>
            <Route path="/sports" element={<News country="in" category="sports"></News>}></Route>
            <Route path="/entertainment" element={<News country="in" category="entertainment"></News>}></Route>
          </Routes>
        </div>
      </Router>
    </>
    )
  }
}
