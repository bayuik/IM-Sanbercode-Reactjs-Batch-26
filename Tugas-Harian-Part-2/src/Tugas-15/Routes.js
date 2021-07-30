
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tugas11 from "../Tugas-11/Tugas11";
import Tugas9 from "../Tugas-9/Tugas9";
import Tugas10 from "../Tugas-10/Tugas10";
import Tugas12 from "../Tugas-12/Tugas12";
import Tugas13 from "../Tugas-13/Tugas13";
import Student from "../Tugas-14/Student";
import StudentForm15 from "./StudentForm15";
import StudentList15 from "./StudentList15";
import '../App.css'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav className="custom-navbar">
          <ul>
            <li>
              <Link to="/">Tugas 9</Link>
            </li>
            <li>
              <Link to="/tugas10">Tugas 10</Link>
            </li>
            <li>
              <Link to="/tugas11">Tugas 11</Link>
            </li>
            <li>
              <Link to="/tugas12">Tugas 12</Link>
            </li>
            <li>
              <Link to="/tugas13">Tugas 13</Link>
            </li>
            <li>
              <Link to="/tugas14">Tugas 14</Link>
            </li>
            <li>
              <Link to="/tugas15">Tugas 15</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Tugas9}></Route>
          <Route exact path="/tugas10" component={Tugas10}></Route>
          <Route exact path="/tugas11" component={Tugas11}></Route>
          <Route exact path="/tugas12" component={Tugas12}></Route>
          <Route exact path="/tugas13" component={Tugas13}></Route>
          <Route exact path="/tugas14" component={Student}></Route>
          <Route exact path="/create">
            <StudentForm15 />
            <Link to="/tugas15">
              <button>Kembali Ke Tabel</button>
            </Link>
          </Route>
          <Route exact path="/tugas15">
            <Link to="/create">
              <button>Buat Data Nilai Mahasiswa Baru</button>
            </Link>
            <StudentList15 />
          </Route>
          <Route exact path="/tugas15/student/:id">
            <StudentForm15 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
