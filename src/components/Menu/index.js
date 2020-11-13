import React from 'react';
import styles from './Menu.module.css';
import { Nav, Navbar, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faStream, faMusic } from '@fortawesome/free-solid-svg-icons';


const tabs = [{
  route: "/homepage",
  icon: faHome,
  label: "Home"
},{
  route: "/streampage",
  icon: faMusic,
  label: "Stream"
},{
  route: "/researchpage",
  icon: faSearch,
  label: "Recherche"
},{
  route: "/librarypage",
  icon: faStream,
  label: "Bibliothèque"
}]

const Menu = (props) => {
  return (

<nav role="navigation">
<Nav>
  <div>
    {
      tabs.map((tab, index) =>(
        <NavItem key={`tab-${index}`}>
          <NavLink to={tab.route} activeClassName="active">
              <div>
              <FontAwesomeIcon className="menuBouton" icon={tab.icon}/>
              <div>{tab.label}</div>
            </div>
          </NavLink>
        </NavItem>
      ))
    }
  </div>
</Nav>
</nav>

)
};

export default Menu
