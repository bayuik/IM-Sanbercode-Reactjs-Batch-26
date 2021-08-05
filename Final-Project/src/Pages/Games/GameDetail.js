import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { ArrowLeftOutlined } from "@ant-design/icons";

const GameDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          message.error(
            "Tidak dapat mengambil Data, Mohon tunggu dan Periksa Koneksi Anda"
          );
        });
    }
  }, [data, setData, id]);

  return (
    <>
      <div className="section">
      <Link to="/">
          <ArrowLeftOutlined style={{ width: "50px", marginBottom: "50px"}} />
          Back
        </Link>
        {data !== null &&
          [data].map((value) => (
            <div style={{ display: "flex" }}>
              <div>
              <h1>{value.name}</h1>
              <img src={value.image_url} alt="image_game" width={300} />
              </div>
              <div style={{ marginLeft: 60, marginTop: "100px" }}>
                <p style={{ marginBottom: 10 }}>
                  <strong>Release</strong>  {value.release} 
                </p>
                <h4 style={{ marginBottom: 10 }}>
                  <strong>Tipe :</strong> {value.genre}
                </h4>
                <div>
                  <p>
                    <strong>platform :</strong> {value.platform}
                  </p>
                  <p>
                    <strong>Single Player :</strong>  {value.singlePlayer === 1 ? "Yes" : "No" }
                  </p>
                  <p>
                    <strong>Multi Player :</strong> {value.multiPlayer === 1 ? "Yes" : "No" }
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

    </>
  );
};

export default GameDetail