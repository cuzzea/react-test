import { Link } from 'react-router-dom'
import React from 'react'

class MyMenu extends React.Component {
  render() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/game">Game</Link>
            </li>
        </ul>
    )
  }
}
export default MyMenu