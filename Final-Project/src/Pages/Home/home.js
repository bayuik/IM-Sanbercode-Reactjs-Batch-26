import React, { Component } from "react";
import axios from "axios";
import { Card, message } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";
import "../../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      games: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let movies = res.data.map((el) => {
          return {
            id: el.id,
            title: el.title,
            description: el.description,
            genre: el.genre,
            year: el.year,
            duration: el.duration,
            rating: el.rating,
            review: el.review,
            image_url: el.image_url,
          };
        });
        this.setState({ movies });
      })
      .catch((err) => {
        message.error(
          "Tidak dapat mengambil data, mohon tunggu dan periksa koneksi anda"
        );
      });
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let games = res.data.map((el) => {
          return {
            id: el.id,
            name: el.name,
            release: el.release,
            genre: el.genre,
            platform: el.platform,
            singlePlayer: el.singlePlayer,
            multiPlayer: el.multiPlayer,
            image_url: el.image_url,
          };
        });
        this.setState({ games });
      })
      .catch((err) => {
        message.error(
          "Tidak dapat mengambil data, Mohon tunggu dan periksa koneksi anda"
        );
      });
  }

  render() {

    return (
      <>
        <div className="section">
          <div>
            <h1 style={{ textAlign: "center" }}>
              <strong style={{ fontWeight: "bold", fontSize: "40px" }}>
                Movie
              </strong>
            </h1>
            <div id="konten">
              {this.state.movies.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <Link to={`/detail-movie/${item.id}`}>
                      <Card
                        style={{
                          width: 230,
                          background: "#E8F0F2",
                          borderRadius: '10px 10px 100px 30px'
                        }}
                        cover={
                          <img
                            style={{
                              height: 280,
                              objectFit: 'cover',
                              borderRadius: '10px'
                              
                            }}
                            alt="cover-movie"
                            src={item.image_url}
                          />
                        }
                        hoverable
                      >
                        <Meta title={item.title} />
                        <p style={{opacity: .5, marginBottom: 0}}>({item.year})</p>
                        <p style={{ marginBottom: 0 }}>
                          <strong>Genre : </strong>
                          {item.genre}
                        </p>
                        <p style={{ marginTop: 0 }}>
                          <strong>Rating : </strong>
                          {item.rating} Stars
                        </p>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ marginTop: "20px",borderTop: "5px solid #7C83FD", width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>
              <strong style={{ fontWeight: "bold", fontSize: "40px" }}>
                Game
              </strong>
            </h1>
            <div id="konten">
              {this.state.games.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <Link to={`/detail-game/${item.id}`}>
                      <Card
                        style={{
                          width: 230,
                          background: "#E8F6EF",
                          borderRadius: '10px 10px 100px 30px',
                        }}
                        cover={
                          <img
                            style={{
                              height: 280,
                              objectFit: 'cover',
                              borderRadius: '10px'
                            }}
                            alt="cover-movie"
                            src={item.image_url}
                          />
                        }
                        hoverable
                      >
                        <Meta title={item.name} /> 
                        <p style={{opacity: .50, marginBottom: 0}}>({item.release})</p>
                        <p style={{ marginBottom: 0 }}>
                          <strong>Genre : </strong>
                          {item.genre}
                        </p>
                        <p style={{ marginTop: 0 }}>
                          <strong>Platform: </strong>
                          {item.platform}
                        </p>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home; 