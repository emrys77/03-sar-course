import React from 'react';

import axios from 'axios';

var apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";
var DataHolder = document.getElementsByClassName("DataHolder");

function GetData() {
    console.log("GetData function has fired");
    DataHolder.innerHTML = "show me the data";
    const request = axios.get(apiUrl)
    .then(function (response) {
       //DataHolder.innerHTML = response;
       DataHolder.innerHTML = "show me the data";
    })
    .catch(function (error) {
        DataHolder.innerHTML = "(An error has occurred.)";
    });
}

export default GetData;
    

function createRequest1() {
    const request = axios.get(url)
  
    request
    .then(result => console.log('(1) Inside result:', result))
    .catch(error => console.error('(1) Inside error:', error))
  
    return request
  }