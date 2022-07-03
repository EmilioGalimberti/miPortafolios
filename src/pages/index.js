import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"


import {header, btn} from "../styles/home.module.css"

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
      
        <section className={header}>
          
          <div>
            <h2 >Portafolios</h2>
            <h3>Angular & React frontend developer</h3>
            <p>Estudiante de ing en sistemas & desarrollador fullstack</p>
            <Link className={btn}  to='/projects'>My Portafolio Projects</Link>
          </div>
          <img src='./banner.png' alt="site banner" style={{maxWidth: "100%"}}></img>

        </section>


      </Layout>
    </React.Fragment>
  )
}
