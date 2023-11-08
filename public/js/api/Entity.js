class Entity {
  static URL = '';

  static list(data, callback){
    return createRequest({
      url: this.URL,
      method: "GET",
      data: data,
      callback
    })
  }

  static create(data, callback) {
    return createRequest({
      url: this.URL,
      method: "PUT",
      data: data,
      callback
    })
  }

  static remove(data, callback ) {
    return createRequest({
      url: this.URL,
      method: "DELETE",
      data: data,
      callback
    })
  }
}