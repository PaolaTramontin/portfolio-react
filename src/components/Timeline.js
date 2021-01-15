import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';
 
const TimeLine = () => {


  return (
    <Timeline >
      <Events>
      <ImageEvent
          text="React"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          alt="React">
        </ImageEvent> 

        <ImageEvent
          text="Node"
          src="https://www.maxpixels.net/static/photo/1x/Nodejs-Node-Js-Source-Code-Logo-Javascript-736399.png"
          alt="Node">
        </ImageEvent> 
        <ImageEvent
          text="Python"
          src="https://img.wonderhowto.com/img/75/78/63568875540985/0/python-credential-sniffer.1280x600.jpg"
          alt="Python">
        </ImageEvent> 
        
        <ImageEvent
          text="Mongoose"
          src="https://cms-assets.tutsplus.com/uploads/users/34/syllabuses/1228/preview_image/mongoose.jpg"
          alt="Mongoose">
        </ImageEvent> 
       

        <ImageEvent
          text="MongoDB"
          src="https://miro.medium.com/max/780/1*dqiYC6CSouYCwg3ESYsP2w.png"
          alt="MongoDB">
        </ImageEvent> 

       
        <ImageEvent
          text="PostgreSQL"
          src="https://zdnet2.cbsistatic.com/hub/i/r/2018/04/19/092cbf81-acac-4f3a-91a1-5a26abc1721f/thumbnail/770x578/5d78c50199e6a9242367b37892be8057/postgresql-logo.png"
          alt="PostgresSQL">
        </ImageEvent> 

        <ImageEvent
          text="CSS"
          src="https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png"
          alt="CSS">
        </ImageEvent> 

        <ImageEvent
          text="Expresss"
          src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png"
          alt="Express">
        </ImageEvent> 

        <ImageEvent
          text="Sequelize"
          src="https://cdn.iconscout.com/icon/free/png-512/sequelize-2-1175003.png"
          alt="Sequelize">
        </ImageEvent> 

        <ImageEvent
          text="Postman"
          src="https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png"
          alt="Postman"
        >
        </ImageEvent> 


        <ImageEvent
          text="JavaScript"
          src="https://cdn.freebiesupply.com/logos/large/2x/logo-javascript-logo-png-transparent.png"
          alt="JavaScript"
        >
        </ImageEvent> 

        
        
        <ImageEvent
          text="HTML"
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          alt="HTML"
        >
        </ImageEvent> 


 
        {/* <YouTubeEvent
          date="6/18/19"
          id="6UnRHtwHGSE"
          name="General Tso's Chicken recipe"
          text="... and YouTube videos!"
        /> */}
      </Events>
    </Timeline>
  );
}

export default TimeLine;