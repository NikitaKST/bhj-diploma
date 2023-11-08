class Account extends Entity {
  static URL = '/account';

  static get(id = '', callback){
    return createRequest({
    url: this.URL + '/' + id,
    method: "GET",
    id,
    callback
    })
  }
}
