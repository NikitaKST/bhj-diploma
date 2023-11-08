/**
 * Класс Account расширяет класс Entity
 */
class Account extends Entity {

  /**
   * Базовый URL для запросов к API аккаунтов
   */
  static URL = '/account';

  /**
   * Получить аккаунт по ID
   * 
   * @param {string} id - ID аккаунта  
   * @param {function} callback - Коллбэк функция
   */
  static get(id = '', callback) {

    /**
     * Создать GET запрос к API аккаунтов
     * Передать ID аккаунта, метод запроса и коллбэк
     */
    return createRequest({
      url: this.URL + '/' + id,
      method: "GET",
      id,
      callback
    });

  };

};
