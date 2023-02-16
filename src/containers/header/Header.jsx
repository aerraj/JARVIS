import React from 'react';
import './header.css';
import people from'../../assets/people.png'
import ai from'../../assets/ai.png'


const Header = () => {
  return (
    <div>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text
          ">
            Harness the power of JARVIS with GPT3
          </h1>
          <p>JARVIS is beautiful in many ways. One of the most striking aspects of AI is its ability to process and analyze vast amounts of data quickly and accurately, enabling it to provide insights and predictions that would be impossible for humans to obtain on their own. </p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="YourEmail Address " />
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt="Users"/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
                  <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
          </div>
      </div>
    </div>
  )
}

export default Header