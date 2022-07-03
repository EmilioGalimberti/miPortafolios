import React from 'react'
import Layout from '../../components/Layout'

import {portfolio} from '../../styles/projects.module.css'

export default function index() {
  return (
    <Layout>
        <div className={portfolio}>
            <h2>Portafolios</h2>
            <h3>Projects & websites I`ve Created</h3>
        </div>
    </Layout>
  )
}
