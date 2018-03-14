import axios from 'axios';

var apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";
var DataHolder = document.getElementsByClassName("DataHolder");

function GetData() {
    axios.get(apiUrl)
    .then(function (response) {
       //DataHolder.innerHTML = response;
       DataHolder.innerHTML = "show me the data";
    })
    .catch(function (error) {
        DataHolder.innerHTML = "(An error has occurred.)";
    });
}

export default GetData;
	