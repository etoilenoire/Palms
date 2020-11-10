import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <aside>
      <span>Menu</span>
      <ul>
        <li>
          <Link to= "/">Artistes</Link>
        </li>
        <li>Albums</li>
        <li>Crédits</li>
      </ul>
    </aside>
  )
}

export default Menu
