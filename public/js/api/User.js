/**
 * Класс пользователя
 */
class User {

  /**
   * Базовый URL для запросов пользователя
   */
  static URL = '/user';

  /**
   * Установить текущего пользователя в локальное хранилище
   * 
   * @param {Object} user - объект пользователя
   */
  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
  }

  /**
   * Удалить текущего пользователя из локального хранилища
   */
  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  /**
   * Получить текущего пользователя из локального хранилища
   * 
   * @returns {Object|null} - объект пользователя или null
   */
  static current() {
    return JSON.parse(localStorage.getItem('user'));
  }

  /**
   * Запрос текущего пользователя с сервера
   * 
   * @param {Function} callback - коллбэк на ответ
   */
  static fetch(callback) {

    createRequest({
      url: this.URL + '/current',
      method: 'GET',
      callback: (err, response) => {
        if(err === null && response.success) {
          this.setCurrent(response.user); 
        } else {
          this.unsetCurrent();
        }
        callback(err, response);
      }
    })

  }

}