import React from "react";
// import "../css/components/Contact.css";
import "../css/components/Home.css";




const Contact = () => {


    
    return(
        <div> 
            <div class="overlay">
    <div class="contact-card">
        <div class="contact-card__buttons">
            <div class="contact-card__buttons__close" title="Close this card">
                <i class="fa fa-close"></i>
            </div>
            <div class="contact-card__buttons__edit" title="Edit this contact">
                <i class="fa fa-pencil"></i>
            </div>
            <div class="contact-card__buttons__remove" title="Delete this contact">
                <i class="fa fa-user-times"></i>
            </div>
        </div>
        <div class="contact-card__header">
            <div class="contact-card__header__avt">
                <img src="http://res.cloudinary.com/nh0kvjpp0ybh/image/upload/v1502960147/photo3_styhnr.png" alt="" />
            </div>
            <div class="contact-card__header__name">
                <div>
                    <h2>Full Name</h2>
                    <div class="contact-card__header__tags">
                        <span class="contact-card__header__tag-family">Family</span><span class="contact-card__header__tag-co-worker">Coworkers</span><span class="contact-card__header__tag-friends">Friends</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-card__body">
            <p>Contact Details</p>
            <div class="contact-card__details">
                <div>
                    <div class="contact-card__details__info">
                        <a href="tel:0123 456 789">0123 456 789</a>
                    </div>
                    <div class="contact-card__details__icon">
                        <div>
                            <i class="fa fa-phone"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="contact-card__details__info">
                        <a>Nov 27, 1996</a>
                    </div>
                    <div class="contact-card__details__icon">
                        <div>
                            <i class="fa fa-birthday-cake"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="contact-card__details__info">
                        <span>Front-end Web Developer</span>
                    </div>
                    <div class="contact-card__details__icon">
                        <div>
                            <i class="fa fa-id-badge"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}




export default Contact;