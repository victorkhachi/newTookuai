import React, { useEffect, useState } from 'react'
import User from '../../assets/svg/user'
import './index.scss'
import {FaApple} from 'react-icons/fa'
import { FaCar } from 'react-icons/fa'
import { FaPeopleArrows } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'


export default function MainDashboard({children}){
   const {t ,i18n}=useTranslation()
    const boardReference=[{name:t('Ds'),icon:<FaTimes />},{name:t('car'),icon:<FaCar />,},{name:t('driver'),icon:<FaPeopleArrows />},{name:t('profile'),icon:<FaUser />}]
     const [language,setLanguage]=useState('en')
    // useEffect(()=>{
    //     const Html=document.querySelector('html')
    //     Html.lang=language
    //     console.log(Html);
    // },[language])

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
            {/* {t('wTa')} */}
                {t('wTa')}
            
            </div>
            <div className="language">
                <select onChange={(e)=>setLanguage(e.target.value)}>
                    <option value='en'>English</option>
                    <option value='ar'>Arabic</option>
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