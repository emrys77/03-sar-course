import axios from 'axios';
import alt   from './Alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://staging7.emrysmedia.com'; // Wordpress installation url

        const params = '?per_page=100'; // so we get all the data

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages${params}`; // Endpoint for getting Wordpress Pages
        this.questionsEndPoint = `${appUrl}/wp-json/wp/v2/questions${params}`; // Endpoint for getting Wordpress Questions (steps)

    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }

    // Method for getting Questions data
    getQuestions(pages, cb){
        this.api(this.questionsEndPoint).then((response)=>{
            const questions     = response
            const payload       = { pages, questions };

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);
