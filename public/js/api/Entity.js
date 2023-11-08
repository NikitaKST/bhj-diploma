/**
 * Базовый класс сущности 
 */
class Entity {

  /**
   * Базовый URL для запросов
   */
  static URL = '';

  /**
   * Получить список сущностей
   * 
   * @param {Object} data - данные запроса
   * @param {Function} callback - коллбэк на ответ
   */
  static list(data, callback){

    return createRequest({
      url: this.URL,
      method: "GET",
      data: data,
      callback
    });

  }

  /**
   * Создать новую сущность
   * 
   * @param {Object} data - данные сущности
   * @param {Function} callback - коллбэк на ответ
   */
  static create(data, callback) {

    return createRequest({
      url: this.URL,
      method: "PUT",
      data: data,
      callback
    });

  }

  /**
   * Удалить сущность
   * 
   * @param {Object} data - данные для запроса
   * @param {Function} callback - коллбэк на ответ
   */
  static remove(data, callback ) {

    return createRequest({
      url: this.URL,
      method: "DELETE",
      data: data,
      callback
    });

  }

}