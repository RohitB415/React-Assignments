import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow ="<";
var rightArrow=">"
var status = {
  1:"suspended",
  2:"completed",
  3:"cancelled"
};

var Appointments ={
  name:"Allen Ford",
  employeeid:1234567890,
  appointmenton: new Date().toLocaleDateString(),
  email:"person@example.com",
  phone:1234567890,
  orderInfo:{
    status: status[1],
    Door: "Mark",
    Time: new Date().toLocaleTimeString(),
  },
  person:{
    avatar:"https://www.w3schools.com/howto/img_avatar.png",
    title:"Hey this is title text",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
  },
};
const App =()=>{
  return(
    <div className="site-container">
      <div className="order-details">
        <div className="nav">
          <div className="nav-container">
           <a href='#' className='nav-arrow arrow'>{arrow}</a>
           <h1 className='nav-title'>
             {
               Appointments.name
             }
           </h1>
           <span className='nav-text'>{Appointments.employeeid}</span>
           <button className='btn nav-btn'>Print</button>
          </div>

        </div>
        <div className='container'>
          <div className='customer-info block'>
            <p className='text'>
              <span>Appointment On</span>
              {
                Appointments.appointmenton
              }

            </p>
            <p className='text'>
              <span>Email</span>
              {
                Appointments.email
              }

            </p>
            <p className='text'>
              <span>Phone</span>
              {
                Appointments.phone
              }

            </p>

          </div>
          <div className='order-info grid block'>

            <div className='unit one-third'>
              <p className='text text-label'>Status</p>
              <p className='text order-status'>{Appointments.orderInfo.status}</p>


            </div>
            <div className='unit one-third'>
              <p className='text text-label'>Door</p>
              <p className='text order-status'>{Appointments.orderInfo.Door}</p>


            </div>
            <div className='unit one-third'>
              <p className='text text-label'>Time</p>
              <p className='text order-status'>{Appointments.orderInfo.Time}</p>


            </div>
          
          
          </div>
          <ul className='product-list block'>
            <li className='product'>
              <label className='img custom-checkbox'>
                <input type="checkbox" className='product-input' value=""></input>
                <span className='custom-checkbox-indicator'></span>
                <img className='avatar' src={Appointments.person.avatar} width ="100" height="100"/>
              </label>
</li>
<li>              
              <a href='#' className='product-desc'>
               
                <div className='product-info'>
                  <h3 className='product-title text'>{Appointments.person.title}</h3>
                  <p className='text-help text'>
                    {Appointments.person.description}
                  </p>

                </div>
              </a>

            </li>
            <li>
            <span className='product-arrow arrow'>
                 {rightArrow}
                </span> 
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default App;
