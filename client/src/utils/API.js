import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=c1bcc775e37c46ffa4f1a66092d6de7c";

export default {
  searchArticle: function(topic, startYear, endYear) {
    let query = topic;
    query += "&begin_date=" + startYear + "0101";
    query += "&end_date=" + endYear + "1231"
    return axios.get(BASEURL + query + APIKEY)
  }
};