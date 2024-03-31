import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" exact element={<News country="in" category="general" />}></Route>
              <Route path="/business" exact element={<News country="in" category="business" />}></Route>
              <Route path="/health" exact element={<News country="in" category="health" />}></Route>
              <Route path="/science" exact element={<News country="in" category="science" />}></Route>
              <Route path="/technology" exact element={<News country="in" category="technology" />}></Route>
              <Route path="/sports" exact element={<News country="in" category="sports" />}></Route>
              <Route path="/entertainment" exact element={<News country="in" category="entertainment" />}></Route>
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}
