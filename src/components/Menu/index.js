import React from 'react';
import styles from './Menu.module.css';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faStream, faMusic } from '@fortawesome/free-solid-svg-icons';
import Player from '../Player';


const tabs = [{
  route: "/homepage",
  icon: faHome,
  label: "home",
  activeClassName: styles['active-item-home']
},{
  route: "/streampage",
  icon: faMusic,
  label: "stream",
  activeClassName: styles['active-item-stream']
},{
  route: "/researchpage",
  icon: faSearch,
  label: "recherche",
  activeClassName: styles['active-item-search']
},{
  route: "/librarypage",
  icon: faStream,
  label: "bibliothèque",
  activeClassName: styles['active-item-library']
}]

const Menu = (props) => {
  return (
    <>
      <div>
        <Player/>
      </div>

      <nav className={`navbar fixed-bottom navbar-light bottom-tab-nav ${styles.menu}`} role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className={`nav-link bottom-nav-link ${styles.item}`} activeClassName={tab.activeClassName}>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className={`bottom-tab-label`}>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
          </div>
        </Nav>
      </nav>
    </>
)
};

export default Menu
