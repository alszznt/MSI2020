export default class SwapiService {

  _apiBase = 'https://api.chucknorris.io/jokes'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getRandomJoke(){
    const res = await this.getResource(`/random/`);
    return this._transformJoke(res);
  }
  async getAllCategories(){
    const res = await this.getResource(`/categories/`);
    return res
  }
  async getRandomCategories( category ) {
    const joke = await this.getResource(`/random?category=${ category }`);
    return this._transformJoke(joke);
  }
  async getSearchJoke ( query ) {
    const res = await this.getResource(`/search?query=${ query }`);
    return res.result.map(this._transformJoke);
  }

  _transformJoke(joke) {
      return {
        id: joke.id,
        value: joke.value,
        categories: joke.categories,
        updatedAt: joke.updated_at,
        url: joke.url,
        favorite: false
      }
    }

}



const swapi = new SwapiService();

swapi.getSearchJoke('aaa').then((joke) => {

});
