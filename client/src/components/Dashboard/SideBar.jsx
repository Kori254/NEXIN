
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import { Box, IconButton} from "@mui/material";
import {Link} from "react-router-dom"
import CottageIcon from '@mui/icons-material/Cottage';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactPage from "@mui/icons-material/ContactPage";

const Item=({title,to,icon})=>{ //create a function for holding the sidebar details
    return(
    <Link to={to}>  
    <MenuItem
    style={{color:"rgb(200,200,200)"}}
    icon={icon}
    >
      <h4 className="bg-transparent text-sm" color="rgb(255,240,200)">{title}</h4> 
      
    </MenuItem>
    </Link>
     )
   }


function SideBar({ThemeStyles}) {
    
    const [isCollapsed, setCollapsed]=useState(false)
  return (
    <div className="flex-col w-fit h-screen border-x-4 border-neutral-700 bg-sky-950 border-solid ">
    <Box class="flex-col" style={ThemeStyles}>
   
<Sidebar collapsed={isCollapsed} style={ThemeStyles}>
<Menu  class="bg-sky-950">
<Box>
<MenuItem
        class="text-slate-200 justify-between"
        onClick={()=>setCollapsed(!isCollapsed)}   //set the collapse functionality when the menu ico is clicked
        icon={isCollapsed?<MenuIcon/>:undefined } //when collapsed the menu ico is visible
       style={{margin:"10px 0", cursor:"pointer"}}>

        {!isCollapsed&&( //when in a state of collapsed
             <Box class='flex justify-between p-3'>
         <h1 className="text-2xl font-bold">ADMIN</h1>
            <IconButton class="text-slate-200" onClick={()=>setCollapsed(!isCollapsed)}>
                <MenuIcon/>
            </IconButton>
            </Box>
        )}
       
           
        </MenuItem>

    </Box>
    {!isCollapsed &&(
        <Box>
 <Box class="mt-4">
   <h1 className="text-2xl text-center text-white font-bold">Mary Waritiri</h1>
   <h5 className="text-center text-green-600">Senior Architect</h5>
</Box>  
 </Box> 
    )}
  
</Menu>
<Menu class="bg-sky-950">
<Box paddingLeft={!isCollapsed? undefined: "10%"}>
    
        <Item
        icon={<CottageIcon/>}
        title="Dashboard"
        onClick={()=>setSelected(!isSelected)}
         to="/"
      />
    
     <h1 className="text-slate-500">Data</h1>
      
<Box> 
<Item
        icon={<ContactPage/>}
        title="Contact Information"
        to="/Contacts"
      />
      </Box>
     <Box>
        <Item
        icon={<ReceiptIcon/>}
        title="Tickets"
        to="/Tickets"
      />
     </Box>
    
      
      <h1 className="text-slate-500">Pages</h1>

     <Box>
        <Item
        icon={<QuizOutlinedIcon/>}
        title="Feedback Form"
        to="/Feedback"
      />
     </Box>

</Box>

</Menu>



</Sidebar>
    </Box>

      
    </div>
  )
}

export default SideBar