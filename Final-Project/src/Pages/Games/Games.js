import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Table, Input, Image } from "antd";
import {
  VideoCameraOutlined,
  AimOutlined,
  TableOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

const { SubMenu } = Menu;
const { Search } = Input;
const { Content, Sider } = Layout;

const Games = () => {
  const [user] = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [games, setGames] = useState([]);
  const data = [];
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
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.length - b.Name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Genre",
      dataIndex: "Genre",
      key: "Genre",
      sorter: (a, b) => a.Genre.length - b.Genre.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Release",
      dataIndex: "Release",
      key: "Release",
      filters: [
        {
            text: '> 1980',
            value: 1980,
        },
        {
            text: '> 2000',
            value: 2000,
        },
        {
            text: '> 2010',
            value: 2010,
        },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.Release > value,
      sorter: (a, b) => a.Release - b.Release,
    },
    {
      title: "Platform",
      dataIndex: "Platform",
      key: "Platform",
      filters: [
        {
          text: "Android",
          value: "Android",
        },
        {
          text: "Console",
          value: "Console",
        },
        {
          text: "iOs",
          value: "iOs",
        },
        {
          text: "PC",
          value: "PC",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.Platform.indexOf(value) === 0,
      sorter: (a, b) => a.Platform.length - b.Platform.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Single Player",
      dataIndex: "SinglePlayer",
      key: "SinglePlayer",
      sorter: (a, b) => a.SinglePlayer.length - b.SinglePlayer.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Multi Player",
      dataIndex: "multiplayer",
      key: "multiplayer",
      sorter: (a, b) => a.multiplayer.length - b.multiplayer.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "operation",
      dataIndex: "aksi",
      width: 170,
    },
  ];
  const handleDelete = (event) => {
    var idGame = parseInt(event.target.value);
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        var newdataFilm = games.filter((x) => x.id !== idGame);
        setGames([...newdataFilm]);
      });
  };
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        setGames(
          res.data.filter((item) =>
            item.genre === null
              ? item.genre
              : item.genre.toLowerCase().includes(genre.toLowerCase())
          )
        );
      });
  }, [genre]);
  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        setGames(
          res.data.filter((item) =>
            item.platform === null
              ? item.platform
              : item.platform.toLowerCase().includes(platform.toLowerCase())
          )
        );
      });
  }, [platform]);
  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        setGames(
          res.data.filter((item) =>
            item.release === null
              ? item.release
              : item.release
                  .toString()
                  .toLowerCase()
                  .includes(year.toLowerCase())
          )
        );
      });
  }, [year]);
  const submitSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let resGames = res.data.map((el) => {
          return {
            id: el.id,
            name: el.name,
            release: el.release,
            platform: el.platform,
            genre: el.genre,
            singlePlayer: el.singlePlayer,
            multiplayer: el.multiplayer,
            image_url: el.image_url,
          };
        });

        let filteredGames = resGames.filter(
          (x) => x.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
        setGames([...filteredGames]);
      });
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {games !== null &&
        games.map((item, index) => {
          data.push({
            number: index + 1,
            image: (
              <Image
                style={{
                  width: 120,
                  height: 150,
                  objectFit: "cover",
                  borderRadius: '10px'
                }}
                src={item.image_url}
                alt="Gambar"
              />
            ),
            Name: item.name,
            Genre: item.genre,
            Release: item.release,
            Platform: item.platform,
            SinglePlayer: item.singlePlayer === 1 ? "Yes" : "No",
            multiplayer: item.multiplayer === 1 ? "Yes" : "No",
            aksi: (
              <p>
                {" "}
                <button value={item.id} style={{ marginRight: "5px" }}>
                  <Link
                    to={`/games/edit/${item.id}`}
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
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu icon={<VideoCameraOutlined />} title="Menu Movies List">
              <Menu.Item icon={<TableOutlined />}>
                <Link to="/movies">Table Movie</Link>
              </Menu.Item>
              <Menu.Item icon={<PlusSquareOutlined />}>
                <Link to="/movies/create">Add Movie</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<AimOutlined />} title="Edit Games">
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
                display: "inline",
              }}
            >
              <h3 style={{ marginRight: "10px" }}>Filter :</h3>
              <div>
                <Input
                  type="number"
                  placeholder="Release"
                  max={2021}
                  min={1980}
                  onChange={(e) => setYear(e.target.value)}
                  style={{ width: "100px" }}
                />
                <Input
                  type="text"
                  placeholder="Genre"
                  onChange={(e) => setGenre(e.target.value)}
                  style={{ width: "100px", marginLeft: "20px" }}
                />
                <Input
                  type="text"
                  placeholder="Platform"
                  onChange={(e) => setPlatform(e.target.value)}
                  style={{ width: "100px", marginLeft: "20px" }}
                />
              </div>
              <br />
              <form onSubmit={submitSearch}>
                <Search
                  type="text"
                  placeholder="Search Game 'Enter to search'"
                  onChange={handleChangeSearch}
                  enterButton
                  allowClear
                  size="large"
                />
              </form>
            </div>
            <br />
            <br />
            <h1>TABLE GAMES</h1>
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Games;
