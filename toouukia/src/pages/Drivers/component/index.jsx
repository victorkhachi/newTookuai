import { Fragment, useState } from "react";

import { FaArrowLeft } from 'react-icons/fa'
import Barchart from "./Barchart";
import Table from "./Table";


export default function Component({driver}){
    const [displayDetails,setDisplayDetails]=useState(false)

    const trips=driver.trips.map(trip=> { return trip})
     
    const NOR=trips.map(day=>{
        return {date:day.date,
                data:day.trips.length
    }})   
    
     const amountPerDay=trips.map(days=>{
         let total=0
          for (let index = 0; index < days.trips.length; index++) {
               total+=days.trips[index].tripFare;
            
          }
          return {date:days.date,data:total}
             
         
     })
    
  const [barChart,setBarchart]=useState(false)  
  const [data,setData]=useState() 

  return(
    <Fragment>
    <tr onClick={()=>setDisplayDetails(true)}>
    
                                    <td>{driver.id}</td>
                                    <td>{driver.name}</td>
                                    <td>{driver.tel}</td>
                                    <td>{driver.onTrip?'busy':'free'}</td>
                                </tr>
                     {displayDetails && <div class='selected_car' >
                          <div className="top"  onClick={()=>setDisplayDetails(false)}>
                              <FaArrowLeft />
                          </div>
                          <div class='driver_body'>
                              <div className="left">
                            <div className="basic_info">
                             <div class='dp'>
                                  {driver.dp}
                             </div>
                             
                             
                              <ul>
                                  <li>Name:<span>{driver.name}</span></li>
                                  <li>Tel:<span>{driver.tel}</span></li>
                                  <li>Mail:<span>{driver.email}</span></li>
                                  <li>Active:<span>{driver.onTrip?'True':'False'}</span></li>
                                  <li>ID:<span>{driver.id}</span></li>
                                  <li>Car ID:<span>{driver.carID}</span></li>
                                  <li>wallet:<span>{driver.walletID}</span></li>
                                  <li>Bank Info:<span>{`${driver.bankInfo.bank} ,${driver.bankInfo.name}, ${driver.bankInfo.number}`}</span></li>
                              </ul>

                          </div>

                          <div className="chart_title">
                               {/* <div className="top">{driver.name}'s charts</div> */}
                               <div class='titles'>
                                   <div onClick={()=>{
                                       setBarchart(true)
                                       setData(NOR)
                                   }} >Trips Per Day</div>
                                   <div onClick={()=>{
                                       setBarchart(true)
                                       setData(amountPerDay)
                                   }} >Income Per Day</div>
                                   <div>Rating Per Day</div>

                               </div>
                            
                          </div>
                        {barChart &&  <div onClick={()=>setBarchart(false)} class='chart'>
                             <div> <Barchart data={data} /></div>
                          </div>}
                          </div>
                          <div className="right">
                              {/* <div className="chart">
                                  
                                      

                              </div> */}
                              <div className="table">
                                 {driver.trips && driver.trips.map(trip=>(
                                     <Table data={trip}/>
                                 ))}
                              </div>
                          </div>
                          </div>
                      </div>}
</Fragment>
  )

}