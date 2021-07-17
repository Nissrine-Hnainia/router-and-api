import {useEffect, useState} from "react"
import { Route, Switch } from 'react-router';
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Errors from "./Pages/Errors";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"
import Axios from 'axios';
import UserDetails from "./Pages/UserDetails";

function App() {
  const [users, setUsers] = useState([])
  const [load, setLoad] = useState(true)
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {setUsers(res.data);
                  setLoad(false)})
    .catch(err => console.log(err))
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home users={users} load={load}/>}/>
        <Route path="/about" component={About}/>
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/*" component={Errors}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
