import React, { Component } from 'react';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";

class MyAppChild extends React.Component {
  render() {
    return <div>{this.props.key + ':' + this.props.label + " - " + this.props.value}</div>;
  }
}  

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
          SARdata: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }


  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.SARdata) return <p>Loading...</p>
   
    var json = this.state.SARData;
    var SARarray = [];

    Object.keys(json).forEach(function(key) {
      SARarray.push(json[key]);
    });

    return (
     <ul>{SARarray.map(item => <MyAppChild key={item.id} label={item.title.rendered} value={item.acf.type} />)}</ul> 

    ) 
  }

}


export default SARCourse
