import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to= "/HomePage">Home</Link>
        </li>
        <li>
          <Link to= "/StreamPage">Stream</Link>
        </li>
        <li>
          <Link to= "/ResearchPage">Recherche</Link>
        </li>
        <li>
          <Link to= "/LibraryPage">Bibliothèque</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Menu
