import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPizzaSlice } from 'react-icons/fa'
import MainDashboard from '../../components/Dashboard'
import Component from './component'
import './index.scss'



export default function Drivers(){
    const Drivers=[{name:'lorem',
                    email:'ipsum@lorem',
                    tel:5432344,
                    dp:<FaPizzaSlice />,
                    id:12,
                    rating:'',
                    walletID:'345678dfghj',
                    carID:123,
                    trips:[{date:'day1',
                           trips:[{customerName:'obi',location:'ipsum',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                                {customerName:'kachi',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                                {customerName:'dolor',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                                {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                                 {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:103,rating:''}
                            ]
                        },{date:'day2',
                        trips:[{customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                             {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:153,rating:''},
                             {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                             {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                              {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:223,rating:''}
                         ]
                     },{date:'day3',
                     trips:[{customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                          {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:523,rating:''},
                          {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                          {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:123,rating:''},
                           {customerName:'lorem',location:'lagos',destination:'lokoja',POT:"2:30",DOT:"3:30",tripFare:13,rating:''}
                      ]
                  },{date:'day4',
                  trips:[{customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                       {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                       {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                       {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                        {customerName:'lorem',location:'lagos',tripFare:123,rating:''}
                   ]
               },{date:'day5',
               trips:[{customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                    {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                    {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                    {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                     {customerName:'lorem',location:'lagos',tripFare:123,rating:''}
                ]
            },{date:'day6',
            trips:[{customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                 {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                 {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                 {customerName:'lorem',location:'lagos',tripFare:123,rating:''},
                  {customerName:'lorem',location:'lagos',tripFare:123,rating:''}
             ]
         }
                    ],
                    onTrip:false,
                    bankInfo:{
                        name:'lorem',
                        bank:'city bank',
                        number:23456
                    }
},{name:'lorem',
email:'ipsum@lorem',
tel:5432344,
dp:<FaPizzaSlice />,
id:12,
rating:'',
walletID:'345678dfghj',
carID:123,
trips:[],
onTrip:false,
bankInfo:{
    name:'lorem',
    bank:'city bank',
    number:23456
}
},{name:'lorem',
email:'ipsum@lorem',
tel:5432344,
dp:<FaPizzaSlice />,
id:12,
rating:'',
walletID:'345678dfghj',
carID:123,
trips:[],
onTrip:false,
bankInfo:{
    name:'lorem',
    bank:'city bank',
    number:23456
}
},{name:'lorem',
email:'ipsum@lorem',
tel:5432344,
dp:<FaPizzaSlice />,
id:12,
rating:'',
walletID:'345678dfghj',
carID:123,
trips:[],
onTrip:false,
bankInfo:{
    name:'lorem',
    bank:'city bank',
    number:23456
}
},{name:'lorem',
email:'ipsum@lorem',
tel:5432344,
dp:<FaPizzaSlice />,
id:12,
rating:'',
walletID:'345678dfghj',
carID:123,
trips:[],
onTrip:false,
bankInfo:{
    name:'lorem',
    bank:'city bank',
    number:23456
}
},{name:'lorem',
email:'ipsum@lorem',
tel:5432344,
dp:<FaPizzaSlice />,
id:12,
rating:'',
walletID:'345678dfghj',
carID:123,
trips:[],
onTrip:false,
bankInfo:{
    name:'lorem',
    bank:'city bank',
    number:23456
}
}]
const {t}=useTranslation()
    return(
        <MainDashboard>
            <div className="cars drivers">
                <div className="top">{t('driver')}</div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>{t('Dn')}</th>
                                <th>{t('APh')}</th>
                                <th>{t('Or')}</th>
                            </tr>
                        </thead>
                        {
                            Drivers.map(driver=>(
                              <Component driver={driver} />
                            )

                            )
                        }
                    </table>
                </div>
            </div>
        </MainDashboard>
    )
}