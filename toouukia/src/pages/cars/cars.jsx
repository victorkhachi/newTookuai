import React from 'react'
import MainDashboard from '../../components/Dashboard'
import './cars.scss'
import Component from './Component'

export default function Cars(){
       const cars=[{name:'car1',id:1,year:'2001',driver:123,plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',id:2,year:'2001',driver:'',plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',id:3,year:'2001',driver:234,plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',id:4,year:'2001',driver:456,plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',id:5,year:'2001',driver:'',plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',year:'2001',driver:'',plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',year:'2001',driver:'',plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'},{name:'car1',year:'2001',driver:'',plateNumber:'dj53m3',engineType:'fn',value:'$2000',tier:'2',category:'suv'}]
    return(
        <MainDashboard>
           <div class='cars'>
                     <div className="top">
                          Cars
                     </div>
                     <div class='table'>
                     <table>
                       <thead>
                        <tr>
                            <th>Car ID</th>
                            <th>Car Name/model</th>
                            <th>Car year</th>
                            <th>Driver ID</th>
                          </tr>
                        </thead>
                        {
                          cars.map(car=>(
                              <Component car={car} />
                          ))  
                        }
                     </table>
                     </div>
            </div>
        </MainDashboard>
    )
}