import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import UserEmailList from "./components/UserEmailList";
import {Route, Switch} from  "react-router-dom";
function App() {
  return (
    <div className="mainDiv">
      <Switch>
      <Route exact path="/"          component={Register}></Route>
      <Route exact path="/login"     component={Login}></Route>
      <Route exact path="/emaillist" component={UserEmailList}></Route>
     </Switch>
   </div>
  );
}

export default App;
