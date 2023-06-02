import React from 'react'
import detail from "../assets/detail.png";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function Detail() {
  return (
    <div>
        <div className='hero' style={{padding:"20px", display:"flex", alignItems:"center", flexWrap:"wrap", justifyContent:"center",justifyContent:"center"}}>
            <div className='mainhero' style={{maxWidth:"620px", padding:"10px"}}>
                <img src={detail} alt='detail lapangan' style={{maxWidth:"100%"}} />
            </div>
            <div className='secondhero' style={{maxWidth:"310px", padding:"10px"}}>
                <div style={{maxWidth:"410px"}}>
                    <img src={detail} alt='detail lapangan' style={{width:"100%"}} />
                </div>
                <div>
                    <img src={detail} alt='detail lapangan' style={{width:"100%"}} />
                </div>
            </div>
        </div>

        <section
            className="mt-1"
            style={{
                height: "fit-content",
                maxWidth: "1200px",
                overflow: "hidden",
                margin: "auto",
            }}
        >
            <h3 className="mb-2w" style={{ padding: "10px" }}>
                Lapangan Futsal Jakselmania
            </h3>
            <p className='d-flex align-items-center margin' style={{marginLeft:"7px"}} >
                <FaMapMarkerAlt className="d-flex align-items-center" style={{ color: "#FF7315", marginRight: "5px" }}/>
                {""} Jakarta Selatan | <FaStar style={{ color: "#FF7315", marginRight: "5px", marginLeft:"5px" }} />{" "}
                {""} 4.8 | Tersewa 36 | Buka 08.00 - 22.00 WIB
            </p>
            <h2 className="mb-2w" style={{ padding: "10px" }}>
                Lapangan Futsal Jakselmania
            </h2>
        </section>
    </div>
    
  )
}

export default Detail