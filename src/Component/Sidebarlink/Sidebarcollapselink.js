import React, { useState } from 'react'
import Tabs from './Navtab';


function Sidebarcollapselink(props) {
    const [navtabs, setTabs] = useState(Tabs);
  return (

    <li className="mb-1">
        {
            navtabs.map((e) => 
            
            {
                const {id,icon, navtitle ,databstarget} = e; 
                return(
                  <>
                  <button key={id} className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={`#${databstarget}`} aria-expanded="false">
                     <span> {icon}&nbsp;&nbsp;{navtitle}</span>
                    </button>
                  <div className="collapse" id={databstarget}>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            { e.childs && e.childs.length > 0 &&
               e.childs.map((e)=>{
                  const {smenu, name} = e;
                  return(
                      <li key={name}><a key={id} href="#" className="link-dark rounded">{smenu}</a></li>            

                  )
                })
            }
    </ul>
                    
                  </div>
 
                  </>
                    
                )
            })
        }
        
        
        
      </li>
  )
}

export default Sidebarcollapselink