import React, { Component } from 'react';

const urlForUsername = username =>
  `https://api.github.com/users/${username}`

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";

class SARCourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          SARData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.SARData) return <p>Loading...</p>
   
    return (
      <div>
        <h2>{JSON.stringify(this.state.SARData)}</h2>
       

      </div>
    )
  }
}

export default SARCourse;


