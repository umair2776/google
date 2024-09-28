import React from 'react';
import { MdOutlineLaptopWindows } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { IoTvOutline } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { IoMdWatch } from "react-icons/io";
// Make sure to import the CSS file

const Prenav2 = () => {
  return (
    <div className='prenav'>
      <div className='list-item'>
        <MdOutlineLaptopWindows />
        <li>Windows</li>
      </div>

      <div className='list-item'>
        <HiMiniDevicePhoneMobile />
        <li>Phone</li>
      </div>

      <div className='list-item'>
        <FaTabletAlt />
        <li>Tablet</li>
      </div>

      <div className='list-item'>
        <IoTvOutline />
        <li>TV</li>
      </div>

      <div className='list-item'>
        <MdLaptopChromebook />
        <li>Chromebook</li>
      </div>

      <div className='list-item'>
        <IoMdWatch />
        <li>Watch</li>
      </div>
    </div>
  )
}

export default Prenav2;
