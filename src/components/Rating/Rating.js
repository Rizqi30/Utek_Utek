import React from "react";
import { FaStar } from "react-icons/fa";
import ButtonRating from "./ButtonRating";
import CommentSection from "./CommentSection";

const Rating = () => {
  return (
    <section
      className="mt-1"
      style={{
        height: "fit-content",
        maxWidth: "1200px",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between margin bg-dark px-3 "
        style={{ height: "5rem" }}
      >
        <div className="d-flex align-items-center text-white">
          <FaStar color="#FF7315" size={35} />
          <h2 className="m-0 mx-2">4.8</h2>
          <h5 className="m-0 mt-2">dari 5</h5>
        </div>

        <div>
          <ButtonRating title={"Semua"} />
          <ButtonRating title={"5 Bintang (30)"} />
          <ButtonRating title={"4 Bintang (4)"} />
          <ButtonRating title={"3 Bintang (1)"} />
          <ButtonRating title={"2 Bintang (0)"} />
          <ButtonRating title={"1 Bintang (0)"} />
          <ButtonRating title={"Dengan Komentar (28)"} />
        </div>
      </div>

      <div className="comment-section p-5">
        <CommentSection
          name={"INA JABRAN"}
          date={"20-05-2023 20:15 | Waktu : 19.00 - 20.00"}
          star={5}
          comment={
            "Mantap mau latihan tau seru - seruan main futsal disini fasilitasnya lengkap, tempatnya enak banget buat main futsal"
          }
        />
        <CommentSection
          name={"INA JABRAN"}
          date={"20-05-2023 20:15 | Waktu : 19.00 - 20.00"}
          star={5}
          comment={
            "Mantap mau latihan tau seru - seruan main futsal disini fasilitasnya lengkap, tempatnya enak banget buat main futsal"
          }
        />
        <CommentSection
          name={"INA JABRAN"}
          date={"20-05-2023 20:15 | Waktu : 19.00 - 20.00"}
          star={5}
          comment={
            "Mantap mau latihan tau seru - seruan main futsal disini fasilitasnya lengkap, tempatnya enak banget buat main futsal"
          }
        />
        <CommentSection
          name={"INA JABRAN"}
          date={"20-05-2023 20:15 | Waktu : 19.00 - 20.00"}
          star={5}
          comment={
            "Mantap mau latihan tau seru - seruan main futsal disini fasilitasnya lengkap, tempatnya enak banget buat main futsal"
          }
        />
      </div>
    </section>
  );
};

export default Rating;
