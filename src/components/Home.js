import React from "react";
import "../css/components/Home.css";
import Particles from "react-particles-js";
import { ParticleOptions } from "./ParticleOptions";
import Timeline from "./Timeline";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Contact from "./Contact.js";
// import "../css/components/Contact.css";

const Home = () => {
  return (
    <div>
      <Parallax>
        {/* code below is for the background animation */}
        <main class="app">
          <div class="boxes">
            <Particles
              className="particles particles-box"
              params={ParticleOptions}
            />

            <h1 className="name">Paola Tramontin</h1>
            {/* <img id="selfie" src="https://i.postimg.cc/269qsnHT/avatar.jpg" /> */}

            <img
              id="selfie"
              src=" https://i.postimg.cc/KzWtNr95/Paola-Headshot2.png"
            />
            <div id="container">
              <h1 class="glitch">Full Stack Developer</h1>
              <h1 class="glitch">Full Stack Developer</h1>
              <h1 class="glitch">Full Stack Developer</h1>
            </div>

            <div id="welcome">
              <p> Welcome to my Portfolio</p> <br />
              <p id="welcomeP">
                {" "}
                I am a software developer with a strong real estate sales
                background. I leverage my 7 years of product knowledge,{" "}
                <b> team collaboration</b>, and{" "}
                <b>business development experience</b>. As a developer fluent in
                multiple frameworks and languages, I now have the programming
                skills to adapt to both sides of the business. My engineering
                certification along with my determination has led me to creating
                a portfolio that displays my skills and <b> passion</b> as a
                software developer.
              </p>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1 id="myWork"> Portfolio </h1>
            <div id="projects">
              <div id="workGame">
                <a
                  href="https://paolatramontin.github.io/project1/"
                  target="_blank"
                >
                  <img
                    id="got"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Night_King_at_Hardhome.jpg/220px-The_Night_King_at_Hardhome.jpg"
                  />
                </a>
                <div class="centered">
                  {" "}
                  <b> Memory Game </b>
                </div>
              </div>

              <div id="workGame2">
                <a
                  href="https://ultimuttadoption.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    id="dog"
                    src="https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80"
                  />
                </a>
                <div class="centered2">
                  {" "}
                  <b> The UltiMutt </b>
                </div>
              </div>

              <div id="workGame3">
                <a
                  href="https://paolatramontin.github.io/RaimundasCleaning/#global"
                  target="_blank"
                >
                  <img
                    id="clean"
                    src="https://previews.123rf.com/images/davizro/davizro1604/davizro160400027/55452948-professional-cleaning-equipment-on-white-table-overview-vertical-composition.jpg"
                  />
                </a>
                <div class="centered3">
                  {" "}
                  <b> Cleaning Services </b>
                </div>
              </div>

              <div id="workGame4">
                <a href="http://todolistpaola.surge.sh/" target="_blank">
                  <img
                    id="todo"
                    src="https://c8.alamy.com/comp/TDM71B/todo-list-on-clipboard-with-hands-illustration-checklist-document-with-task-to-do-on-board-with-paper-clip-flat-man-hands-holding-pen-and-clipboard-with-todo-list-on-green-background-TDM71B.jpg"
                  />
                </a>
                <div class="centered4">
                  {" "}
                  <b> To do List</b>
                </div>
              </div>

              <div id="workGame5">
                <a href="http://todolistpaola.surge.sh/" target="_blank">
                  <img
                    id="burgerStack"
                    src="https://i.pinimg.com/originals/6f/e6/3f/6fe63fd7429e2e5bd39b1c37e843ee0a.gif"
                  />
                </a>
                <div class="centered5">
                  {" "}
                  <b> Burger Stack</b>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id="timelineDiv">
            <h1 id="skills"> Skills </h1>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <hr />
                <Timeline />
              </Slide>
            </Container>
          </div>
        </main>
      </Parallax>

      <Contact />
    </div>
  );
};

export default Home;
















// // if the div is in the same line as the return you dont need the () in return
// const Home = () => {
  
//   //initial state
//   const [data, setData] = useState([])


//   //spinner will use the state below
//   const [loading, setLoading] = useState(true)



//   useEffect(()=>{
//     axios.get('https://api.github.com/users/PaolaTramontin/repos')
//       .then((response) =>{
//         setData(response.data)
//       })
//       .then(()=>
//         setLoading(false))
//   }, [])


//   const display = () => {
//     //if loading is true (it is defaul to true, return the spinner component), else return everythin else. aka if the page isnt loading anymore, return the actual components
//     if(loading){
//       return <Spinner />;
//     }else{
//       return data.map((card) => (
//         <div key={card.id} className="col s12 m6">
//           <div className="card blue-grey darken-1">
//             <div className="card-content white-text">
//               <span className="card-title">{card.name}</span>
//               <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//             </div>
//             <div className="card-action">
//               <a href="#">This is a link</a>
//               <a href="#">This is a link</a>
//             </div>
//           </div>
//         </div>
//       ))
//     }
// }



//   return (
//     <div className="container">
//       <h2> Paola's Repos </h2>
//       <div className="row">{display()}</div>;
//     </div>
//   ) 
// };




//  export default Home;








