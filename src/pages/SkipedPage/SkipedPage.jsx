import css from './SkipedPage.module.css'

import { useNavigate } from "react-router-dom";

const SkipedPage = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  }

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <h1>Development in Progress...</h1>
        <div onClick={goBackHandler} className={css.backBtn}>Go Back</div>
      </div>
    </div>
  )
}

export default SkipedPage