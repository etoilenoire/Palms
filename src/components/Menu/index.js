import React from 'react'
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
  label: "Bibliothèques"
}]

const Menu = (props) => {
  return (

<nav className="navbar fixed-bottom navbar-light bottom-tab-nav" role="navigation">
<Nav className="w-100">
  <div className=" d-flex flex-row justify-content-around w-100">
    {
      tabs.map((tab, index) =>(
        <NavItem key={`tab-${index}`}>
          <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
              <div >
              <FontAwesomeIcon size="lg" icon={tab.icon}/>
              <div >{tab.label}</div>
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
