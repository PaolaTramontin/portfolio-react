import React, {useEffect, useState} from 'react'
//import axios
import axios from 'axios'
//Import Spinner 
import Spinner from './common/Spinner' 
//CSS import
import "../css/components/Blog.css";


// if the div is in the same line as the return you dont need the () in return
const Blog = () => {


  
  
  //initial state
  const [data, setData] = useState([])


  //spinner will use the state below
  const [loading, setLoading] = useState(true)



  useEffect(()=>{
    axios.get('https://api.github.com/users/PaolaTramontin/repos')
      .then((response) =>{
        setData(response.data)
      })
      .then(()=>
        setLoading(false))
  }, [])


  const display = () => {
    //if loading is true (it is defaul to true, return the spinner component), else return everythin else. aka if the page isnt loading anymore, return the actual components
    if(loading){
      return <Spinner />;
    }else{
      return data.map((card) => (
        <div key={card.id} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{card.name}</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      ))
    }
}



  return (
    <div className="container">
      <h2> Paola's Repos </h2>
      <div className="row">{display()}</div>;
      
    </div>
  ) 
};


export default Blog;