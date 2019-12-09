import { Route, BrowserRouter as Router } from 'react-router-dom'
import Users from 'components/users/users'
import Contact from 'components/contact/contact'
import React from 'react'
import MyMenu from 'usables/menu';
import Game from 'components/game/game';

class MyRouter extends React.Component {
  render() {
    return (
        <Router>
            <MyMenu />
            <div>
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route path="/game" component={Game} />
            </div>
        </Router>
    )
  }
}
export default MyRouter