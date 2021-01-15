import React from "react";
import "../../css/components/Layout.css";



const Layout = (props) => {

  return (
    <div>
      <nav class="nav">
        <div id="linkContainer" >
          {/* <a href="#" className="brand-logo">
            Logo
          </a> */}
          <ul>
            <li class="li">
              <a className= "links" href="https://docs.google.com/document/d/1z5GEQYJHYzmOYdPIT0Dx0D38fjJHYWkgFu1MkKhrtzo/edit?usp=sharing">Resume</a>
            </li>
            <li class="li">
              <a className="links" href="#myWork">Projects</a>
            </li>
            <li class="li">
              <a className= "links" href="#timelineDiv">Skills</a>
            </li>
            <li class="li">
              <a className= "links" href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      
      <div>{props.children}</div>
      {/* ##################  FOOTER STARTS ################################ */}
      <footer>
          <h5 id="footerText">
            © 2020 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </h5>
      </footer>
    </div>
  );
};


export default Layout;