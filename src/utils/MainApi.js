class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
    this._moviesUrl = `${this._baseUrl}/movies`;
    this._profileUrl = `${this._baseUrl}/users/me`;
    this._signupUrl = `${this._baseUrl}/signup`;
    this._loginUrl = `${this._baseUrl}/signin`;
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

  loadLoginedUser(jwt) {
    this._headers.Authorization = `Bearer ${jwt}`;
    return fetch(this._profileUrl, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  registerUser(loginData) {
    return fetch(this._registerUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(loginData),
    }).then((res) => this._handleResponse(res));
  }

  loginUser(loginData) {
    console.log(this._loginUrl);
    return fetch(this._loginUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(loginData),
    }).then((res) => this._handleResponse(res));
  }

  logoutUser() {
    delete this._headers.Authorization;
  }

  getSavedMovies() {
    return fetch(this._moviesUrl, {
      headers: this._headers,
    }).then((response) => this._handleResponse(response));
  }

  saveMovie(movieData) {
    return fetch(this._moviesUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movieData),
    }).then((response) => this._handleResponse(response));
  }

  deleteMovie(movieId) {
    return fetch(`${this._moviesUrl}/movieId`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((response) => this._handleResponse(response));
  }

  getUserInfo() {
    return fetch(this._profileUrl, {
      headers: this._headers,
    }).then((response) => this._handleResponse(response));
  }

  patchUserInfo(profile) {
    return fetch(this._profileUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name: profile.name, email: profile.email }),
    }).then((response) => this._handleResponse(response));
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:80',
  headers: {
    'Content-type': 'application/json',
  },
});

export default mainApi;
