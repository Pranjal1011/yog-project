import React from "react";
import {NavLink} from "react-router-dom";

function Menu2(){
    return(
<>

<div style={{padding: "0px 0px 0px 500px"}}>

<button type="button" class="btn btn-outline-dark">
<NavLink to="/heart2" style={{fontWeight:"bolder"}}>Start</NavLink>
</button>
</div>
</>
    
    );
}
export default Menu2;