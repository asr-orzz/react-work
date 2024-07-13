import React from 'react'
import classes from "./index.module.css"

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
        <div className={classes.Services }>Services</div>
        <button className={classes.AddService}>Add Service</button>
    </div>
  )
}

export default Navbar;