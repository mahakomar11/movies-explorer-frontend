class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return response
        .json()
        .then((data) => Promise.reject(new Error(data.message)));
    }
  }

  getMovies() {
    return fetch(this._url).then((res) => this._handleResponse(res));
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;