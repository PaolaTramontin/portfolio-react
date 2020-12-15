import React from 'react'
//import the router
import { Route} from 'react-router-dom'
// Components imports
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Projects from "./components/Projects";
//Layout Component
import Layout from "./components/common/Layout"
// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout> 
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Layout>
    </div>
  );
};

export default App;
