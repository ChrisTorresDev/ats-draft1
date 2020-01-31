import React from 'react';
import call from './assets/calltoday.jpg';

export const About = () => (
  <div>
    <h2>About</h2>
    <hr />
    <p>7 Reasons Why to choose ATS for your next land project:</p>
    <ol>
      <li>ATS has combined professional experience of over 60 years of land surveying, engineering and planning.</li>
      <li>ATS is an established, reputable company serving the area since 2001.</li>
      <li>ATS and its employees are committed to performing our services to a high professional standard in an ethical and responsible manner.</li>
      <li>As our name implies, ATS utilizes the most advanced technology in the field to be more efficient and cost effective which in turn saves our clients time and money.</li>
      <li>ATS is big enough to handle the largest of land development projects while still being able to give our personal attention to the smaller projects as well.</li>
      <li>Many of our clients consider one of our most valuable services is our ability to handle all aspects of a project. We strongly believe the process should be interactive and informative so the clients expectations are met and exceeded with no adverse surprises.</li>
      <li>And we enjoy what we do too! ATS is a great place to work and great place to do business.</li>
    </ol>
    <hr />
    <div className="text-center section">
      <img src={call} alt="Call Today" />
    </div>
  </div>
)
