const NavTabs = [
    {
        id:1,
        navtitle:'Dashboard',
        icon:<i className="fa-solid fa-border-none"></i>,
        databstarget:'',
        childs:[]
    },
    {
        id:2,
        navtitle:'Trading',
        icon:<i className="fa-solid fa-chart-simple"></i>,
        databstarget:'trading-collapse',
          childs:[
           
                {
                    name: "Market",  
                    smenu:"Market"
                },
                {
                    name: "ISO Listing",
                    smenu:"ISO Listing"
                },
                {
                    name: "P2P",
                    smenu:"P2P"
                },
                {
                    name:"FUTURE",
                    smenu:"FUTURE"
                },
                {
                    name:"Intra Trading",
                    smenu:"Intra Trading"
                }
            
            ]
        
    },
    {
        id:3,
        navtitle:'Crypto',
        icon:<i className="fa-brands fa-bitcoin"></i>,
        databstarget:'crypto-collapse',
        childs:[
           
            {
                name:"Market Watch",
                smenu:"Market Watch"
            },
            {
                name:"ISO Listing Filter",
                smenu:"ISO Listing Filter"
            },
            {
                name:"Coin Detail",
                smenu:"Coin Detail"
            },
            {
                name:"Exchange",
                smenu:"Exchange"
            },
            {
                name:"Banking",
                smenu:"Banking"
            }
        
        ]
    
    },
    {
        id:4,
        navtitle:'Reports',
        icon:<i className="fa-solid fa-flag"></i>,
        databstarget:'report-collapse',
        childs:[
           
            {
                name:"History",
                smenu:"History"
            },
            {
                name:"Orders",
                smenu:"Orders"
            },
            {
                name:"Reports",
                smenu:"Reports"
            },
            {
                name:"User",
                smenu:"User"
            },
            {
                name:"Contacts",
                smenu:"Contacts"
            },
            {
                name:"Activity",
                smenu:"Activity"
            }
        
        ]
    },
    {
        id:5,
        navtitle:'Apps',
        icon:<i className="fa-solid fa-grip"></i>,
        databstarget:'app-collapse',
        childs:[
           
            {
                name:"Profile",
                smenu:"Profile"
            },
            {
                name:"Edit Profile",
                smenu:"Edit Profile"
            },
            {
                name:"Post Details",
                smenu:"Post Details"
            }
        ]
    },
    {
        id:6,
        navtitle:'Charts',
        icon:<i className="fa-solid fa-square-poll-vertical"></i>,
        databstarget:'chart-collapse',
        childs:[
           
            {
                name:"Flot",
                smenu:"Flot"
            },
            {
                name:"Morris",
                smenu:"Morris"
            },
            {
                name:"Chartjs",
                smenu:"Chartjs"
            },
            {
                name:"Chartist",
                smenu:"Chartist"
            },
            {
                name:"Sparkline",
                smenu:"Sparkline"
            },
            {
                name:"Peity",
                smenu:"Peity"
            }

        ]
    },
    {
        id:7,
        navtitle:'Tables',
        icon:<i className="fa-solid fa-table-columns"></i>,
        databstarget:'table-collapse',
        childs:[
           
            {
                name:"Bootstrap",
                smenu:"Bootstrap"
            },
            {
                name:"Table",
                smenu:"Table"
            }
            
        ]
    },
    {
        id:8,
        navtitle:'Pages',
        icon:<i className="fa-solid fa-file-lines"></i>,
        databstarget:'page-collapse',
        childs:[
           
            {
                name:"Login",
                smenu:"Login"
            },
            {
                name:"Register",
                smenu:"Register"
            }
            
        ]
    },

]



export default NavTabs; 