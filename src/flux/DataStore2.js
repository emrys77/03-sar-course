import React, { Component } from 'react';
import axios from 'axios';

const appUrl = 'http://staging7.emrysmedia.com'; // Wordpress installation url

const params = '?per_page=100'; // so we get all the data

this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages${params}`; // Endpoint for getting Wordpress Pages
this.questionsEndPoint = `${appUrl}/wp-json/wp/v2/questions${params}`; // Endpoint for getting Wordpress Questions (steps)

    
componentDidMount() {
    var self = this;
    // read data periodically
    setInterval(function() {
        axios.get( questionsEndPoint )
            .then(function(response) {
                var names=[];
                Object.keys(response.data).forEach(function(data) {
                     names.push(data.Name);
                })
                self.setState({
                    jdata: names
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }, 1000);
} 