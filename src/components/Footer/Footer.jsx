import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

import styles from "../styles/Footer.module.css"

import  Logo from "../../images/logo.svg"

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt='' />
        </Link>
      </div>

      <div className={styles.rights}>
        Prod by dnfff
      </div>
    </section>
  )
}

export default Footer