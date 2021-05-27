import React, { useState }from "react";
import './Sidebar.css'
import Company from '../../Images/company.png'

const navLinks = [
    { url: '/data', name: 'Data' },
    { url: '/mandates', name: 'Mandates' },
    { url: '/beneficial-owners', name: 'Beneficial Owners' },
    { url: '/cases', name: 'Cases' },
    { url: '/resources', name: 'Resources' },
    { url: '/audit-logs', name: 'Audit Logs' },

  ];
  

const Sidebar = props => {
  const [activeLink, setActiveLink] = useState (0)
  const [activeClass, setActiveClass] = useState(false)

  const handleActiveLink = (index) => {
    console.log("INDEX", index)
  }

  // const handleActiveClass = () => setActiveClass(!activeClass);


    return (
        <>
        <div className="menu">               
          <ul>
            <div className="entitie-id-container">
              <label className="entitie-label">Entities</label>
              <span className="entitie-id-style">Entitie ID:  #{props.data.id}</span>
            </div>
            <hr />
            <div className="sidebar-header">
              <div className="img-circle"><img src={Company}/></div>
              <label className="sidebar-title">{props.data.companyName}</label>
            </div>
            <hr />
            {navLinks.map((link, index) => (
              <li  className={activeLink === index ? 'active-li' : ''} key={index}>
                <a href={link.url} onClick={handleActiveLink(index)}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        activeIndex
        </>
        );
  };
  export default Sidebar