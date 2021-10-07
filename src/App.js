import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import Page404 from './Page404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostDetail from './PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/posts/:id">
              <PostDetail />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
