import React from 'react'
import User from '../../assets/svg/user'
import './index.scss'
import {FaApple} from 'react-icons/fa'
import { FaCar } from 'react-icons/fa'
import { FaPeopleArrows } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function MainDashboard({children}){
   
    const boardReference=[{name:'OverView',icon:<FaTimes />},{name:'cars',icon:<FaCar />,},{name:'Drivers',icon:<FaPeopleArrows />},{name:'profile',icon:<FaUser />}]


   return(
      <div class='dashboard'>
             <div className="menu">
            <div class='logo'><img src='https://www.tookuai.com/img/logo.jfif'/></div>

                <div className="info">
                    <span>
                      <div className="name">Obi Victor</div>
                      <div className="id">193id</div>

                    </span>
                    <div className="avatar">
                       <FaApple />
                    </div>
                </div>
                <div className="navs">
                    {
                        boardReference.map(links=>(
                            <Link to={`/${links.name}`}><span>{links.name}</span><span>{links.icon}</span></Link>
                        ))
                    }
                </div>
            </div>
     
        <div className="body">
        <div className="dash-top">
            <div className="profile">
            
            Welcome to the Admin Dashboard
            
            </div>
            <div className="language">
                <select>
                    <option>English</option>
                    <option>Arabic</option>
                </select>
            </div>
            <div className="info">
                    <span>
                      <div className="name">Obi Victor</div>
                      <div className="id">193id</div>

                    </span>
                    <div className="avatar">
                       <FaApple />
                    </div>
                </div>
        </div>
            <div className="content">{children}</div>
        </div>

      </div>

   )


}