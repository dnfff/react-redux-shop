import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

import styles from "../styles/Header.module.css"

import  Logo from "../../images/logo.svg"
// import  Avatar from "../../images/avatar.jpg"
import basket from "../../images/basket.png"


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt='' />
        </Link>
      </div>

      <form className={styles.form}>
        <div className={styles.input}>
            <input 
              type='search' 
              name='search' 
              placeholder='Search...'
              autoComplete='off'
              onChange={() => {}}
              value=""
            />
        </div>

          {false && <div className={styles.box}></div>}
      </form>

      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar} />
          <div className={styles.username}>Guest</div>
      </div>

      <div className={styles.account}>
        <Link to={ROUTES.CART} className={styles.favourites}>
          <img className="icon" src={basket}/>
        </Link>
        {/* <span className={styles.count}>2</span> */}
      </div>

      </div>
    </div>
  )
}

export default Header