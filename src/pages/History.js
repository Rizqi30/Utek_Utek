import React from 'react'
import { BiMessageDetail } from 'react-icons/bi';
import Ellipse from '../assets/Ellipse 17.png';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function History() {
  return (
    <section
    className="mt-1 mb-5"
      style={{
        height: "fit-content",
        maxWidth: "1200px",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <div
        className='container'
        style={{ marginLeft: '7px', marginBottom: '90px', lineHeight: '10px' }}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <p>
              <span style={{ fontWeight: "500" }}>Jakselmania FC</span> |{" "}
              <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
              <span style={{ color: "#FF7315" }}>Chat Sekarang</span>
            </p>
          </div>
          <p style={{fontSize: '13px', border: '1px solid #CCCCCC', padding: '10px', color: '#CCCCCC'}}>Dibatalkan</p>
        </div>
        <div
          className="container mb-3"
          style={{
            display: "flex",
            height: "fit-content",
            maxWidth: "1200px",
            overflow: "hidden",
            margin: "auto",
            borderBottom: "1px solid black",
            paddingBottom: "10px",
          }}
        >
          <img
            src={Ellipse}
            alt="elipse"
            style={{ height: "60px", width: "60px" }}
          />
          <div className="content" style={{ alignItems: "center" }}>
            <p
              style={{
                marginLeft: "15px",
                fontWeight: "700",
                fontSize: "13px",
                lineHeight: "12px",
              }}
            >
              Lapangan Futsal Jakselmania
            </p>
            <p
              style={{
                marginLeft: "15px",
                color: "#666666",
                fontSize: "13px",
                lineHeight: "1px",
              }}
            >
              Waktu : 21-05-2023 | 08.00 - 09.00 WIB
            </p>
            <p
              style={{
                marginLeft: "15px",
                color: "#666666",
                fontSize: "13px",
                lineHeight: "1px",
              }}
            >
              Harga : Rp 75.000/Jam
            </p>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <p>Total Harga</p>
          <p>Rp 75.000</p>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "end",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Form className="d-flex justify-content-center py-1">
            <Button
              variant="none"
              className="mx-2"
              style={{
                backgroundColor: "white",
                color: "#FF7315",
                width: "100px",
                padding: 0,
              }}
            >
              Beri Ulasan
            </Button>
            <Button variant="none" style={{ backgroundColor: "#FF7315",color: '#FFFFFF' }}>
             Hubungi Pengelola
            </Button>
          </Form>
        </div>
      </div>
      
      <div
        className='container'
        style={{ marginLeft: '7px', marginBottom: '90px', lineHeight: '10px' }}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <p>
              <span style={{ fontWeight: "500" }}>Jakselmania FC</span> |{" "}
              <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
              <span style={{ color: "#FF7315" }}>Chat Sekarang</span>
            </p>
          </div>
          <p style={{fontSize: '13px', border: '1px solid #20E100', padding: '10px', color: '#20E100'}}>Selesai</p>
        </div>
        <div
          className="container mb-3"
          style={{
            display: "flex",
            height: "fit-content",
            maxWidth: "1200px",
            overflow: "hidden",
            margin: "auto",
            borderBottom: "1px solid black",
            paddingBottom: "10px",
          }}
        >
          <img
            src={Ellipse}
            alt="elipse"
            style={{ height: "60px", width: "60px" }}
          />
          <div className="content" style={{ alignItems: "center" }}>
            <p
              style={{
                marginLeft: "15px",
                fontWeight: "700",
                fontSize: "13px",
                lineHeight: "12px",
              }}
            >
              Lapangan Futsal Jakselmania
            </p>
            <p
              style={{
                marginLeft: "15px",
                color: "#666666",
                fontSize: "13px",
                lineHeight: "1px",
              }}
            >
              Waktu : 21-05-2023 | 08.00 - 09.00 WIB
            </p>
            <p
              style={{
                marginLeft: "15px",
                color: "#666666",
                fontSize: "13px",
                lineHeight: "1px",
              }}
            >
              Harga : Rp 75.000/Jam
            </p>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <p>Total Harga</p>
          <p>Rp 75.000</p>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "end",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Form className="d-flex justify-content-center py-1">
            <Button
              variant="none"
              className="mx-2"
              style={{
                backgroundColor: "white",
                color: "#FF7315",
                width: "100px",
                padding: 0,
              }}
            >
              Beri Ulasan
            </Button>
            <Button variant="none" style={{ backgroundColor: "#FF7315",color: '#FFFFFF' }}>
             Hubungi Pengelola
            </Button>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default History