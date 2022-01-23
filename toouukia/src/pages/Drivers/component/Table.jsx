import { Fragment } from "react/cjs/react.production.min";

export default function Table({data}){

    return(
        <Fragment >
                 <p>{data.date}</p>

           <table>
           <thead>
                <tr>
                    <th>Rider</th>
                    <th>from</th>
                    <th>to</th>
                    <th>cost</th>
                    <th>rating</th>
                    <th>POT</th>
                    <th>DOT</th>
                    <th>with escort</th>
                </tr>
            </thead>


            {
                data.trips.map(trip=>(
                   <tr>
                       <td>{trip.customerName}</td>
                       <td>{trip.location}</td>
                       <td>{trip.tripFare?trip.destination:'canceled'}</td>
                       <td>{trip.tripFare}</td>
                       <td>{trip.rating?trip.rating:'N/A'}</td>
                       <td>{trip.POT}</td>
                       <td>{trip.DOT}</td>
                       <td>N/A</td>
                       
                   </tr>
                ))}
        </table>
        </Fragment>
    )
}