import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular localities in and around</span> <span className={css.bld}>Pune</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Kothrud" count="" link='' />
            <PlacesCard place="Koregaon Park" count="" link='' />
            <PlacesCard place="Hinjewadi" count="" link='' />
            <PlacesCard place="Viman Nagar" count="" link='' />
            <PlacesCard place="Camp (Cantonment Area)" count="" link='' />
            <PlacesCard place="Shivaji Nagar" count="" link='' />
            <PlacesCard place="FC Road" count="" link='' />
            <PlacesCard place="Magarpatta City" count="" link='' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;