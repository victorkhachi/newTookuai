import {Fragment, useState} from 'react'

export default function Component({car}){
        const [displayDetails,setDisplayDetails]=useState(false)
    return(
        <Fragment>
            <tr onClick={()=>setDisplayDetails(true)}>
                  <td>{car.id}</td>
                  <td>{car.name}</td>
                  <td>{car.year}</td>
                  <td onClick={(e)=>e.stopPropagation()}>
                     { car.driver && car.driver}
                     {!car.driver && <span >Add Driver</span>}
                  </td>

            </tr>

                             {displayDetails && <div class='selected_car' onClick={()=>setDisplayDetails(false)}>
                                  <div className="details" onClick={(e)=>e.stopPropagation()}>
                                     <p><h3>Car name:</h3>{car.name} </p>
                                     <p><h3>Driver ID :</h3>{car.driver && <span>{car.driver}</span>}
                                       {!car.driver && <span>no assigned driver</span>}
                                      </p>
                                     <p><h3>Car year:</h3>{car.year} </p>
                                     <p><h3>Plate Number:</h3>{car.plateNumber} </p>
                                     <p><h3>Engine Type:</h3>{car.name} </p>
                                     <p><h3>Car Value:</h3>{car.value} </p>
                                     <p><h3>Tier:</h3>{car.tier} </p>
                                     <p><h3>Category:</h3>{car.category} </p>
                                   </div>
                              </div>}
        </Fragment>
    )

}