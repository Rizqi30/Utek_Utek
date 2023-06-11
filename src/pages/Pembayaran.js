import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { GiSoccerField } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import Ellipse from "../assets/Ellipse 17.png";
import { FaMoneyBillWave } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Pembayaran() {
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
      {/* Content 1 */}
      <div
        className="container"
        style={{ marginLeft: "7px", marginBottom: "90px", lineHeight: "10px" }}
      >
        {/* Content 1 */}
        <p className="d-flex align-items-center" style={{ color: "#FF7315" }}>
          <BiUserCircle
            style={{
              color: "#FF7315",
              marginRight: "5px",
              height: "30px",
              width: "30px",
            }}
          />
          Penyewa
        </p>
        <p style={{ fontWeight: "700" }}>John Doe</p>
        <p style={{ fontWeight: "700" }}>082134554212</p>
        <p style={{ color: "#666666" }}>
          Jl. Suyono Ardianto, Perum. Jaya Wijaya Blok A No. 24, Jakarta Selatan
        </p>
      </div>

      {/* Content 2 */}
      <div
        className="container"
        style={{ marginLeft: "7px", marginBottom: "90px", lineHeight: "10px" }}
      >
        <p className="d-flex align-items-center" style={{ color: "#FF7315" }}>
          <GiSoccerField
            style={{
              color: "#FF7315",
              marginRight: "5px",
              height: "30px",
              width: "30px",
            }}
          />
          Lapangan Dipesan
        </p>
        <p>
          <span style={{ fontWeight: "500" }}>Jakselmania FC</span> |{" "}
          <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
          <span style={{ color: "#FF7315" }}>Chat Sekarang</span>
        </p>
        <div
          className="container mb-4"
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
        <p style={{ fontWeight: "500" }}>
          Total Harga{" "}
          <span style={{ display: "flex", justifyContent: "end" }}>
            Rp 75.000
          </span>
        </p>
      </div>

      {/* Content 3 */}
      <div
        className="container"
        style={{ marginLeft: "7px", marginBottom: "90px", lineHeight: "10px" }}
      >
        <p className="d-flex align-items-center" style={{ color: "#FF7315" }}>
          <FaMoneyBillWave
            style={{
              color: "#FF7315",
              marginRight: "5px",
              height: "30px",
              width: "30px",
            }}
          />
          Pembayaran
        </p>
        <p
          style={{
            fontSize: "13px",
            borderBottom: "1px solid black",
            paddingBottom: "10px",
          }}
        >
          Saldo DibookingPay : <strong>Rp 100.000,-</strong>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        ></div>

        {/* Bener */}
        <div
          style={{
            display: "flex",
            alignContent: "end",
            flexWrap: "wrap",
            flexDirection: "column",
            borderBottom: "1px solid black",
          }}
        >
          <div style={{ width: "20rem" }}>
            <div className="d-flex justify-content-between">
              <p>Status</p>
              <p>Lunas</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Metode Pembayaran </p>
              <p>DibookingPay</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Total Pembayaran </p>
              <p>Rp 75.000</p>
            </div>
          </div>
        </div>

        <p
          style={{ color: "red", fontSize: "12px" }}
          className="d-flex align-items-center my-1"
        >
          <CiCircleAlert size={20} />
          <span className="ms-1">Mohon selesaikan pembayaran secepatnya.</span>
        </p>
        <div
          style={{
            display: "flex",
            alignContent: "end",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Form className="d-flex justify-content-center py-3">
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
              Batal
            </Button>
            <Button variant="none" style={{ backgroundColor: "#FF7315", color: '#FFFFFF' }}>
              Bayar Sekarang
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Pembayaran;
