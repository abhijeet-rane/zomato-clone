import css from './ProfileWidget.module.css'

import rightArrowImg from '/icons/right-arrow.png';

let ProfileWidget = ({name, tag, data}) => {

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>{name}</div>
            <div className={css.tag}>{tag}</div>
            <div className={css.body}>
                <div className={css.mainBox}>
                    <div className={css.detBox}>
                        <div className={css.imgBox}>
                            <img className={css.profileImg} src="/src/profilelogo.jpg" alt='profile picture' />
                        </div>
                        <div className={css.userName}>Abhijeet</div>
                    </div>
                    <div className={css.detBox2}>
                        <div className={css.txtBox}>
                            <div className={css.count}>8</div>
                            <div className={css.txt}>Reviews</div>
                        </div>
                        <div className={css.txtBox}>
                            <div className={css.count}>4</div>
                            <div className={css.txt}>Photos</div>
                        </div>
                        <div className={css.txtBox}>
                            <div className={css.count}>14</div>
                            <div className={css.txt}>Followers</div>
                        </div>
                    </div>
                </div>
                <div className={css.footer}>
                    Zomato
                </div>
            </div>
            <div className={css.gtw}>Get this widget <img src={rightArrowImg} className={css.rightArrowImg} alt='right arrow' /></div>
        </div>
    </div>
}

export default ProfileWidget;