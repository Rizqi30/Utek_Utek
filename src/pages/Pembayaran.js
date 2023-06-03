import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { GiSoccerField } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import Ellipse from "../assets/Ellipse 17.png";

function Pembayaran() {
  return (
    <section className='mt-1 mb-5' style={{height: "fit-content", maxWidth: "1200px", overflow: "hidden", margin: "auto",}}>
        {/* Content 1 */}
        <div className='container' style={{marginLeft:"7px", marginBottom:"90px", lineHeight:"10px"}}>
            {/* Content 1 */}
            <p className='d-flex align-items-center' style={{color:"#FF7315"}}>
              <BiUserCircle style={{ color: "#FF7315", marginRight: "5px", height:"30px", width:"30px"}}/>Penyewa
            </p>
            <p style={{fontWeight:"700"}}>John Doe</p>
            <p style={{fontWeight:"700"}}>082134554212</p>
            <p style={{color:"#666666"}}>Jl. Suyono Ardianto, Perum. Jaya Wijaya Blok A No. 24, Jakarta Selatan</p>
        </div>

        {/* Content 2 */}
        <div className='container mb-5' style={{marginLeft:"7px", lineHeight:"1px"}}>
            <p className='d-flex align-items-center' style={{color:"#FF7315"}}>
              <GiSoccerField style={{ color: "#FF7315", marginRight: "5px", height:"30px", width:"30px"}}/>Lapangan Dipesan
            </p>
            <p><span style={{fontWeight:"500"}}>Jakselmania FC</span> |  <BiMessageDetail style={{color:"#FF7315"}}/> <span style={{color:"#FF7315"}}>Chat Sekarang</span></p>
            <div className="container mb-4" style={{display:"flex", height: "fit-content", maxWidth: "1200px", overflow: "hidden", margin: "auto", borderBottom:"1px solid black"}}>
                <img src={Ellipse} alt="elipse" style={{height:"60px", width:"60px"}}/>
                <div className="content" style={{alignItems:"center"}}>
                  <p style={{marginLeft:"15px", fontWeight:"700", fontSize:"13px", lineHeight:"12px"}}>Lapangan Futsal Jakselmania</p>
                  <p style={{marginLeft:"15px", color:"#666666", fontSize:"13px", lineHeight:"1px"}}>Waktu : 21-05-2023 | 08.00 - 09.00 WIB</p>
                  <p style={{marginLeft:"15px", color:"#666666", fontSize:"13px", lineHeight:"1px"}}>Harga : Rp 75.000/Jam</p>
                </div>
            </div>
            <p style={{fontWeight:"500"}}>Total Harga <span style={{display:"flex", justifyContent:"end"}}>Rp 75.000</span></p>
        </div>
        <h2>Error</h2>
    </section>
  )
}

export default Pembayaran