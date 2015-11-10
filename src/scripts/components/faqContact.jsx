import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';


export default class faqContact extends React.Component {
   handleSubmit = () => {
     Backbone.history.navigate( `/faq`, true);
   }

  render () {
    return <div className="contactBox">
        <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
      <div className="contactInformation">
        <h1>CONTACT:</h1>
        <h2>@VicAlvarez84</h2>
        <h2>727.412.5500</h2>
        <h2>victor.alvarez.iii@gmail.com</h2>
      </div>
      <div className="faqInformation">
        <h1>FAQS:</h1>
        <h2>Q: I have a band/venue/record store. Can I get involved?</h2>
        <h3>A: Of course! Add yourself right now!</h3>
        <h2>Q: I love your app! Can you make me a similar app?</h2>
        <h2>A: Feel free to contact me on any of the mediums above. Give me three weeks.</h2>
        <h2>Q: I hear you learned how to build this app at the Iron Yard?</h2>
        <h2>A: I did and I highly recommend going there! It will change your life for the better!</h2>
      </div>
      </div>


  }
}

export default faqContact;
