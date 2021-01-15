import React from "react";
// import "../css/components/Contact.css";
import "../css/components/Home.css";




const Contact = () => {


    
    return(
        <div id="bigContactDiv"> 
            <div class="overlay">
    <div class="contact-card">
        {/* <div class="contact-card__buttons">
            <div class="contact-card__buttons__close" title="Close this card">
                <i class="fa fa-close"></i>
            </div>
            <div class="contact-card__buttons__edit" title="Edit this contact">
                <i class="fa fa-pencil"></i>
            </div>
            <div class="contact-card__buttons__remove" title="Delete this contact">
                <i class="fa fa-user-times"></i>
            </div>
        </div> */}
        <div class="contact-card__header">
            <div class="contact-card__header__avt">
                <img id="avatar" src="https://i.postimg.cc/269qsnHT/avatar.jpg" alt="" />

            </div>
            <div class="contact-card__header__name">
                <div>
                    <h2 id="paolaContact">Paola Tramontin</h2>
                    <div class="contact-card__header__tags">
                        <span id="devdev" class="contact-card__header__tag-family">Full Stack Developer</span>
                        {/* <span class="contact-card__header__tag-co-worker">Coworkers</span><span class="contact-card__header__tag-friends">Friends</span> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="contact_body">
            <p id="contactMe"> <b> Contact Me </b></p>
                <div id="icons">
                    <i id="iconLogos"class="fa fa-linkedin-square"></i>
                        <a id="iconText" href="https://www.linkedin.com/in/paola-tramontin-45886190/"   target="_blank">Linkedin</a>
                    </div>



                    <div id="icons">
                        <i id="iconLogos2" class="fa fa-envelope"></i>
                        <a id="iconText" href="tel:0123 456 789">PaolaTramontin1221@gmail.com</a>

                    </div>

                    <div id="icons">
                    <i id="iconLogos3" class="fa fa-map-marker"></i>
                        <a id="iconText3" href="tel:0123 456 789">Boston, MA</a>

                    </div>


                    
                {/* </div> */}
{/* 
                <div>
                    <div class="contact-card__details__info">
                        <span>Front-end Web Developer</span>
                    </div>
                    <div class="contact-card__details__icon">
                        <div>
                            <i class="fa fa-id-badge"></i>
                        </div>
                    </div>
                </div> */}
                <br></br>
                <br></br>
                <br></br>
        </div>
    </div>
</div>

        </div>
    )
}




export default Contact;