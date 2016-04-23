const api = {
  getMovie(title){
    title = title.toLowerCase().trim();
    var url = `http://www.omdbapi.com/?t=${title}`
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
