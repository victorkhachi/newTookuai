import React from "react";
import './index.scss'
import MainDashboard from "../../components/Dashboard";
import Barchart from "../Drivers/component/Barchart";
import { useTranslation } from "react-i18next";

export default function OverView(){
    const {t}=useTranslation()
        const income=[{date:'day1',data:10},
        {date:'day2',data:14},{date:'day3',data:10},{date:'day4',data:20},{date:'day5',data:30},]
    return(
        <MainDashboard>
            <div class='cars over_view'>
                <div className="top">
                    {t('Ds')}
                </div>
                <div className="logs">
                    <div><span className="number">12</span>{t('Nv')}</div>
                    <div><span className="number">10</span>{t('Nd')}</div>
                    <div><span className="number">0.0000</span>{t('wb')}</div>
                    <div><span className="number">8</span>{t('Or')}</div>
                    <div><span className="number">2</span>{t('fc')}</div>

                </div>
                <div className="charts">
                    <div style={{width:'40%'}}>
                       <div class='top'>{t('Rev')}</div>
                          <Barchart data={income} />
                     </div>
                     <div style={{width:'40%'}}>
                       <div class='top'>{t('Dt')}</div>
                          <Barchart data={income} />
                     </div>
                </div>
            </div>
        </MainDashboard>

    )


}