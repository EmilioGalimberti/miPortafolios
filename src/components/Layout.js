import React from 'react'
import NavBar from './NavBar'

import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layaout'>
        <NavBar/>
        <div className='content'>
                {/*contet for each page */}
                { children }
        </div>
        <footer>
            <p>Copyrith 2022 Web Emilio Galimberti. Gatsby</p>
        </footer>
    </div>
  )
}
