import React, { Fragment } from "react";
import "./css/Sidebar.css";
import Logo from "../../assets/logo-text.png";
import Mainlogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Tabs from "./Navtab";
function Sidebar(props) {
  function Getval(e) {
    console.log("Child", e);
    props.getvalue(e);
    
  }

  return (
    <div className="flex-shrink-0  sidenav">
      {/* logo part */}
      <Link
        to="/"
        className="d-flex align-items-center link-dark text-decoration-none logoholder"
      >
        <div className="Logo">
          <img src={Mainlogo} alt={Mainlogo} className="img-fluid mainlogo" />
          <img src={Logo} alt="logo-text.png" className="img-fluid logo" />
        </div>
      </Link>

      {/* main sidebarnavlinks */}
      <ul className="list-unstyled sidebarlistholder">
        <li className="mb-1">
          {Tabs.map((e) => {
            const { id, icon, navtitle, databstarget, link, dropdown } = e;
            return (
              <Fragment key={id}>
                {dropdown ? (
                  <a
                    to={link}
                    className="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${databstarget}`}
                    aria-expanded="false"
                  >
                    <span>
                      {icon}&nbsp;&nbsp;{navtitle}
                    </span>
                  </a>
                ) : (
                  <Link
                    to={link}
                    onClick={() => Getval(navtitle)}
                    className="btn btn-toggle align-items-center rounded collapsed"
                    
                  >
                    <span>
                      {icon}&nbsp;&nbsp;{navtitle}
                    </span>
                  </Link>
                )}

                <div className="collapse" id={databstarget}>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    {e.childs &&
                      e.childs.length > 0 &&
                      e.childs.map((e) => {
                        const { smenu, name, childlink } = e;
                        return (
                          <li key={name}>
                            <Link
                              onClick={() => Getval(name)}
                              to={childlink}
                              className="link-dark rounded"
                            >
                              {smenu}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </Fragment>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
