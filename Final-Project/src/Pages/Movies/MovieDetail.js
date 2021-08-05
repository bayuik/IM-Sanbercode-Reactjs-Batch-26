import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { message, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

function minuteToHours(num) {
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (rhours === 0 ? "" : rhours + " Jam") + (rminutes === 0 ? "" : " " + rminutes + " Menit");
}

const MovieDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          message.error("Tidak dapat mengambil Data, Mohon tunggu dan Periksa Koneksi Anda");
        });
    }
  }, [data, setData, id]);

  return (
    <>
      <div className="section">
        <Link to="/">
          <ArrowLeftOutlined style={{ width: "50px" }} />
          Back
        </Link>
        {data !== null &&
          [data].map((value) => (
            <div style={{ display: "flex", marginTop: "50px" }}>
              <div style={{ width: "30%" }}>
                <h1 style={{ marginBottom: 50 }}>
                  {value.title} ( {value.year} )
                </h1>
                <Image src={value.image_url} width={300} maxWidth={400} />
              </div>
              <div style={{ marginLeft: 60, marginTop: "90px" }}>
                <h4 style={{ marginBottom: 10 }}>
                  <strong>{value.genre}</strong> x
                </h4>
                <div>
                  <p>
                    <strong>Duration :</strong> {minuteToHours(value.duration)}
                  </p>
                  <p>
                    <strong>Rating :</strong> {value.rating} stars
                  </p>
                  <p>
                    <strong>Review :</strong> {value.review}
                  </p>
                  <h4>
                    <strong>Deskripsi</strong>
                  </h4>
                  <p width={50}>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieDetail;
