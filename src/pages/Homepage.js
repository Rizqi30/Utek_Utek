import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sale from "../assets/sale.png";
import lpng from "../assets/lpng.jpeg";
// import ec from "../assets/ec.png";
import bola from "../assets/bola.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Card } from "react-bootstrap";
// import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      {/* iki mt-3 tak ilangi mergo navbar e ono warnane, nek dikei mt-3 ono gep warna putih ng tengah tengah */}
      <div
        className="d-flex flex-row mb-3 px-5 justify-content-end align-items-center"
        style={{ backgroundColor: "#2F2E41", height: "64px", color: "white" }}
      >
        <p style={{ margin: "0", marginRight: "10px" }}>Lokasi : </p>
        <NavDropdown
          title={<span style={{ color: "white" }}>Jakarta</span>}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      </div>
      <Carousel
        fade
        style={{
          borderRadius: "20px",
          maxHeight: "380px",
          maxWidth: "1200px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <Carousel.Item style={{ height: "100%", width: "100%" }}>
          {/* iki aku nambahi p-2 nganggo jeda antara gambar ben ra mepet, nek meh kanan kiri px-2 nek meh atas bawah py-2 */}
          <img className="d-block w-100 p-2" src={sale} alt="First slide" />
        </Carousel.Item>
      </Carousel>

      <section
        className="mt-5"
        style={{
          height: "fit-content",
          maxWidth: "1200px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <h3 className="mb-4">Rekomendasi Lapangan</h3>
        <div
          className="wrapper"
          style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p>Jakarta Selatan</p>
              </Card.Text>
              <Card.Text>
                <p>4.8 | Tersewa</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p>Jakarta Selatan</p>
              </Card.Text>
              <Card.Text>
                <p>4.8 | Tersewa</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p>Jakarta Selatan</p>
              </Card.Text>
              <Card.Text>
                <p>4.8 | Tersewa</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p>Jakarta Selatan</p>
              </Card.Text>
              <Card.Text>
                <p>4.8 | Tersewa</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section
        className="mt-5"
        style={{
          display: "flex",
          height: "fit-content",
          flexDirection: "column",
          maxWidth: "1200px",
          margin: "auto",
          justifyContent: "center",
          padding: "15px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Kategori Lapangan
        </h3>
        <div
          className="cat_wrapper d-flex justify-content-evenly "
          style={{ gap: "10px", justifyContent: "" }}
        >
          <img
            src={bola}
            style={{
              boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
            }}
            className=""
            alt=""
          />
          <img
            src={bola}
            style={{
              boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
            }}
            className=""
            alt=""
          />
          <img
            src={bola}
            style={{
              boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
            }}
            className=""
            alt=""
          />
          <img
            src={bola}
            style={{
              boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
            }}
            className=""
            alt=""
          />
          <img
            src={bola}
            style={{
              boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
            }}
            className=""
            alt=""
          />
          <img
            src={bola}
            style={{
              boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
            }}
            className=""
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
