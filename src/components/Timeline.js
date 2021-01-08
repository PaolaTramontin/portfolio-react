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
        <TextEvent  text=" *JavaScript*" />
        <TextEvent text=" *React*" />
        <TextEvent text=" *Node*" />
        <TextEvent text=" *Python*" />
        <TextEvent text=" *Mongoose*" />
        <TextEvent text=" *SQL*" />
        <TextEvent text=" *HTML*" />
        <TextEvent  text=" *CSS*" />
        <TextEvent  text=" *MongoDB*" />
        <TextEvent text=" *Express*" />
        <TextEvent  text=" *Sequelize*" />
        <TextEvent text=" *Postman*" />
        {/* <TextEvent date="1/1/19" text=" *Postman*" /> */}

        
        
        {/* <ImageEvent
          date="4/13/19"
          text="You can embed images..."
          src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
          alt="jellyfish swimming"
          credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
            </UrlButton>
          </div>
        </ImageEvent> */}
 
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