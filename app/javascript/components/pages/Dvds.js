import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
class Dvds extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dvds: []
    }
  }

  componentDidMount(){
    fetch("/dvds.json")
    .then((response) => response.json())
    .then((dvds) =>{
      this.setState({ dvds: dvds})
    })
  }

  render () {
    return (
      <div>
      <h1>My Dvds</h1>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>

          {this.state.dvds.map((dvd, index) => {
            return(
          <tr key={index}>
            <td>{dvd.title}</td>
            <td>{dvd.genre}</td>
            <td>{dvd.year}</td>
          </tr>
        )
      })}
        </tbody>
      </table>
      <Link to="new-dvd">Add New</Link>
    </div>


    );
  }
}

export default Dvds
