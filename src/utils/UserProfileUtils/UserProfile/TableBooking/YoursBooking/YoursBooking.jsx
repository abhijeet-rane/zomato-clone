import { useState } from 'react';

import css from './YoursBooking.module.css'

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";
import BookingsCard from '../../../../Cards/BookingsCard/BookingsCard'

import WhiteButton from '../../../../Buttons/WhiteButton/WhiteButton'
import RedButton from '../../../../Buttons/RedButton/RedButton'

const YoursBooking = ({hashId}) => {

    let [isData, setIsData] = useState(true)

    let data = [
        {
            id: 1,
            title: "Hotel 1",
            address: "Alandi, Pune",
        },
        {
            id:2,
            title: "Hotel 2",
            address: "Punawale, Pune",
        }
    ]

  return (<div className={css.outerDiv}>
   <div className={css.btns}>  
            <RedButton  txt="Past" count="2" />
            <WhiteButton txt="Upcoming" count="0" />
    </div>
  {isData ? (
    <div className={css.bdy}>
       {data?.map(val => {
          return <BookingsCard key={val?.id} title={val?.title} address={val?.address} />
       })}
    </div>
  ) : (
    <UserProfileNoData hashId={hashId} />
  )}
</div>);
}

export default YoursBooking