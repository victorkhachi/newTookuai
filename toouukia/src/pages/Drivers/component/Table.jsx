// import { useTranslation } from "i18next";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/cjs/react.production.min";

export default function Table({data}){
   const {t}=useTranslation()
    return(
        <Fragment >
                 <p>{data.date}</p>

           <table>
           <thead>
                <tr>
                    <th>{t('rider')}</th>
                    <th>{t('from')}</th>
                    <th>{t('to')}</th>
                    <th>{t('cost')}</th>
                    <th>{t('rating')}</th>
                    <th>POT</th>
                    <th>DOT</th>
                    <th>{t('escort')}</th>
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