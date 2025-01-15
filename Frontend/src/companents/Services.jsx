import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { FaSquareCheck } from "react-icons/fa6";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { ImRadioChecked } from "react-icons/im";

function Services() {
  return (
    <div className='Services'>
      <div className="container">
      <div className="content">
          <p>Our Services</p>
          <h2>We Offer Services</h2>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="icon">
            <FaCheckCircle />
            </div>
            <div className="text">
              <h2>Business Consulting</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
              <p>Learn More</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <RiDeleteBack2Fill />
            </div>
            <div className="text">
              <h2>Business Consulting</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
              <p>Learn More</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <PiHandbagSimpleFill />
            </div>
            <div className="text">
              <h2>Business Consulting</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
              <p>Learn More</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <FaSquareCheck />
            </div>
            <div className="text">
              <h2>Business Consulting</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
              <p>Learn More</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <IoMdTimer />
            </div>
            <div className="text">
              <h2>Business Consulting</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
              <p>Learn More</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <ImRadioChecked />
            </div>
            <div className="text">
              <h2>Business Consulting</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
