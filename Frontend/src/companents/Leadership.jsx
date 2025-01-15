import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";

function Leadership() {
  return (
    <div  className='Leadership'>
      <div className="container">
      <div className="content">
          <p>Team</p>
          <h2>Leadership</h2>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="image">
              <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
              <div className="head">
                <p>John Rooster</p>
                <span>Co-Founder, President</span>
              </div>
              <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <div className="icons">
                <div className="icon"><FaFacebook /></div>
                <div className="icon"><FaTwitter /></div>
                <div className="icon"><FaLinkedin /></div>
                <div className="icon"><FiInstagram /></div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
              </div>
              <div className="head">
                <p>Tom Sharp</p>
                <span>Co-Founder, COO</span>
              </div>
              <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <div className="icons">
                <div className="icon"><FaFacebook /></div>
                <div className="icon"><FaTwitter /></div>
                <div className="icon"><FaLinkedin /></div>
                <div className="icon"><FiInstagram /></div>
              </div>
        
          </div>
          <div className="card">
            <div className="image">
              <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
              <div className="head">
                <p>Winston Hodson</p>
                <span>Marketing</span>
              </div>
              <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <div className="icons">
                <div className="icon"><FaFacebook /></div>
                <div className="icon"><FaTwitter /></div>
                <div className="icon"><FaLinkedin /></div>
                <div className="icon"><FiInstagram /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leadership
