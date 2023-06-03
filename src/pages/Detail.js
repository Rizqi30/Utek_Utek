import React from "react";
import detail from "../assets/detail.png";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Rating from "../components/Rating/Rating";
import "../styles/Detail.css";
import Ellipse from "../assets/Ellipse 17.png";
import { BiMessageDetail } from "react-icons/bi";
import online from "../assets/online.png";

function Detail() {
  return (
    <div>
      <div
        className="hero"
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          className="mainhero"
          style={{ maxWidth: "620px", padding: "10px" }}
        >
          <img
            src={detail}
            alt="detail lapangan"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div
          className="secondhero"
          style={{ maxWidth: "310px", padding: "10px" }}
        >
          <div style={{ maxWidth: "410px" }}>
            <img src={detail} alt="detail lapangan" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={detail} alt="detail lapangan" style={{ width: "100%" }} />
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
        <p style={{ marginLeft: "7px" }}>
          <FaMapMarkerAlt style={{ color: "#FF7315", marginRight: "5px" }} />
          {""} Jakarta Selatan |{" "}
          <FaStar
            style={{ color: "#FF7315", marginRight: "5px", marginLeft: "5px" }}
          />
          4.8 | Tersewa 36 | Buka 08.00 - 22.00 WIB
        </p>
        <h2 className="mb-2w" style={{ padding: "10px" }}>
          <strong>Rp 75.000</strong>/jam
        </h2>
      </section>

      <div
        className="container mb-4"
        style={{
          display: "flex",
          height: "fit-content",
          maxWidth: "1200px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <img
          src={Ellipse}
          alt="elipse"
          style={{ height: "70px", width: "70px" }}
          className="d-block img-fluid"
        />
        <div className="content d-flex align-items-start flex-column h-auto justify-content-center">
          <p style={{ marginLeft: "15px" }} className="mb-0">
            <span
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "12px",
              }}
            >
              Jakselmania FC
            </span>{" "}
            | <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
            <span style={{ color: "#FF7315" }}>Chat Sekarang</span>
          </p>
          <p
            className="mb-0"
            style={{
              marginLeft: "15px",
              fontSize: "13px",
              alignItems: "center",
            }}
          >
            <img
              src={online}
              alt="online"
              style={{ height: "15px", width: "15px", marginRight: "5px" }}
            />
            Online | Terakhir online 27 menit lalu
          </p>
          <p style={{ marginLeft: "15px", fontSize: "13px" }} className="mb-0">
            Jl. Jaksel Permata Indah No.12, Jakarta Selatan.
          </p>
        </div>
      </div>

      <div
        className="mb-5"
        style={{
          height: "fit-content",
          maxWidth: "1200px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <h5 style={{ marginLeft: "7px" }}>Fasilitas Lainnya</h5>
        <div
          className="child-cotent"
          style={{ marginLeft: "20px", lineHeight: "7px", padding: "12px" }}
        >
          <p>Kamar Mandi, Musholla, Kantin</p>
          <p>Gratis 2 Botol Minum 1,5 Liter </p>
        </div>
      </div>

      <Rating />
    </div>
  );
}

export default Detail;
