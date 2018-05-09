import React, { Component } from 'react';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";

class SARCourse extends Component {
    constructor(props) {
      super(props)
      this.state = {
        requestFailed: false
      }
    }
  
    componentDidMount() {
        fetch( apiUrl )
        .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

    }
    /*        
    <ul>{SARarray.map(item => <MyAppChild key={item.id} label={item.title.rendered} value={item.acf.type} />)}</ul>
    Object.keys(json).forEach(function(key) {
        SARarray.push(json[key]);
      });
  */
    render() {
  
      if (this.state.requestFailed) return <p>Failed!</p>
      if (!this.state.SARdata) return <p>Loading...</p>
     
      var json = this.state.SARdata;
      var SARarray = [];
  
      Object.keys(json).forEach(function(key) {
        SARarray.push(json[key]);
      });
      
      return (
        <div>emrys
        </div>
      )
    }
  }
  
  export default SARCourse;
  
  //export default MyAppChild;
  