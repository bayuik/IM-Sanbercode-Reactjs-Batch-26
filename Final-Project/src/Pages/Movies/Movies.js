import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Layout, Menu, Table, Input, Image } from "antd";
import {
  VideoCameraOutlined,
  DingtalkOutlined,
  TableOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Search } = Input;
const { Content, Sider } = Layout;

const Movies = () => {
  const [user] = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [Genre, setGenre] = useState("");
  const [Rating, setRating] = useState("");
  const [release, setYear] = useState("");

  const data = [];
  function truncateString(str, num) {
    if (str === null) {
      return "";
    } else {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    }
  }
  const columns = [
    {
      title: "No",
      width: 70,
      dataIndex: "number",
      key: "number",
      sorter: (a, b) => a.number - b.number,
    },
    {
      title: "Cover",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Tittle",
      dataIndex: "Tittle",
      key: "Tittle",
      sorter: (a, b) => a.Tittle.length - b.Tittle.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Genre",
      dataIndex: "Genre",
      key: "Genre",
      filters: [
        {
          text: "Action",
          value: "Action",
        },
        {
          text: "Adventure",
          value: "Adventure",
        },
        {
          text: "Animation",
          value: "Animation",
        },
        {
          text: "Comedy",
          value: "Comedy",
        },
        {
          text: "Drama",
          value: "Drama",
        },
        {
          text: "Fantasy",
          value: "Fantasy",
        },
        {
          text: "Horror",
          value: "Horror",
        },
        {
          text: "Mystery",
          value: "Mystery",
        },
      ],
      filterMultiple: true,
      onFilter: (value, record) => record.Genre.indexOf(value) === 0,
      sorter: (a, b) => a.Genre.length - b.Genre.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Release",
      dataIndex: "Year",
      key: "Year",
      sorter: (a, b) => a.Year - b.Year,
    },
    {
      title: "Duration",
      dataIndex: "Duration",
      key: "Duration",
      filters: [
        {
          text: "> 30 Menit",
          value: 30,
        },
        {
          text: "> 1 jam",
          value: 60,
        },
        {
          text: "> 2 jam",
          value: 120,
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.Duration > value,
      sorter: (a, b) => a.Duration - b.Duration,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      filters: [
        {
            text: '> 3',
            value: 3,
        },
        {
            text: '> 5',
            value: 5,
        },
        {
            text: '> 8',
            value: 8,
        },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.Rating > value,
      sorter: (a, b) => a.Rating - b.Rating,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Review",
      dataIndex: "Review",
      key: "Review",
      sorter: (a, b) => a.Review.length - b.Review.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "operation",
      dataIndex: "aksi",
      width: 170,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        setMovies(
          res.data.filter((item) =>
            item.genre === null
              ? item.genre
              : item.genre.toLowerCase().includes(Genre.toLowerCase())
          )
        );
      });
  }, [Genre]);
  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        setMovies(
          res.data.filter((item) =>
            item.rating === null
              ? item.rating
              : item.rating
                  .toString()
                  .toLowerCase()
                  .includes(Rating.toLowerCase())
          )
        );
      });
  }, [Rating]);
  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        setMovies(
          res.data.filter((item) =>
            item.year === null
              ? item.year
              : item.year
                  .toString()
                  .toLowerCase()
                  .includes(release.toLowerCase())
          )
        );
      });
  }, [release]);

  const handleDelete = (event) => {
    var idFilm = parseInt(event.target.value);
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-movie/${idFilm}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })

      .then((res) => {
        console.log("cek", res);
        var newdataFilm = movies.filter((x) => x.id !== idFilm);
        setMovies([...newdataFilm]);
      });
  };
  const submitSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let resMovies = res.data.map((el) => {
          return {
            id: el.id,
            title: el.title,
            description: el.description,
            year: el.year,
            review: el.review,
            duration: el.duration,
            genre: el.genre,
            rating: el.rating,
            image_url: el.image_url,
          };
        });

        let filteredMovies = resMovies.filter(
          (x) => x.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
        setMovies([...filteredMovies]);
      });
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {movies !== null &&
        movies.map((item, index) => {
          data.push({
            number: index + 1,
            image: (
              <Image
                style={{
                  width: 80,
                  height: 110,
                  objectFit: "cover",
                  borderRadius: '10px'
                }}
                src={item.image_url}
                alt="Cover"
              />
            ),
            Tittle: item.title,
            Genre: truncateString(item.genre, 10),
            Year: item.year,
            Duration: item.duration,
            Rating: item.rating,
            Description: truncateString(item.description, 50),
            Review: truncateString(item.review, 20),
            aksi: (
              <p>
                {" "}
                <button value={item.id} style={{ marginRight: "5px" }}>
                  <Link
                    to={`/movies/edit/${item.id}`}
                    style={{ color: "black" }}
                  >
                    Edit
                  </Link>
                </button>
                <button value={item.id} onClick={handleDelete}>
                  Delete
                </button>
              </p>
            ),
          });
        })}

      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            theme="dark"
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu icon={<VideoCameraOutlined />} title="Movies">
              <Menu.Item icon={<TableOutlined />}>
                <Link to="/movies">Table Movie</Link>
              </Menu.Item>
              <Menu.Item icon={<PlusSquareOutlined />}>
                <Link to="/movies/create">Add Movie</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<DingtalkOutlined />} title="Games">
              <Menu.Item icon={<TableOutlined />}>
                <Link to="/games">Table Games</Link>
              </Menu.Item>
              <Menu.Item icon={<PlusSquareOutlined />}>
                <Link to="/games/create">Add Games</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Filter :</h3>
              <div>
                <Input
                  type="text"
                  placeholder="Genre"
                  onChange={(e) => setGenre(e.target.value)}
                  style={{ width: "100px" }}
                />
                <Input
                  type="number"
                  placeholder="Rating"
                  max={10}
                  min={0}
                  onChange={(e) => setRating(e.target.value)}
                  style={{ width: "100px", marginLeft: "20px" }}
                />
                <Input
                  type="number"
                  placeholder="Release Year"
                  max={2021}
                  min={1980}
                  onChange={(e) => setYear(e.target.value)}
                  style={{ width: "100px", marginLeft: "20px" }}
                />
              </div>

              <hr />
              <form onSubmit={submitSearch}>
                <Search
                  type="text"
                  placeholder="Search Title 'Enter to search'"
                  onChange={handleChangeSearch}
                  enterButton
                  allowClear
                  size="large"
                />
              </form>
            </div>
            <br />
            <br />
            <h1>TABLE MOVIE</h1>
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Movies;
