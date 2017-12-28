import React from 'react';
const title = "we are tam"
const text = "Tam Tam is a full service digital agency focusing on Dutch Digital Service Design. We combine strategy, design, technology and interaction to make the digital interactions between company and customer valuable and memorable. We work for awesome brands with a team of 120 digitals from our office in Amsterdam. Making great workk and having a blast doing it. That's what we believe in."
class AboutUs extends React.Component {
   render() {
      return (
          <div className="about" id="about">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
      );
   }
}

export default AboutUs;