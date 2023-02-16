import React from 'react'
import { Brand,Cta,Navbar } from './components';
import { Features,Blog,Footer,Header,HiJarvis,Possibility} from './containers'
import './app.css';


const App = () => {
  return (
    <div>
        <div className="app">
          <div className="gradient__bg">
            <Navbar/>
            <Header/>
          </div>
          <Brand/>
          <HiJarvis/>
          <Features/>
          <Possibility/>
          <Cta/>
          <Blog/>
          <Footer/>
        </div>
    </div>
  )
}

export default App