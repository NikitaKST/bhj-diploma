/**
 * Класс LoginForm управляет формой
 * входа в портал
 *
 * @class LoginForm
 * @extends AsyncForm
 */
class LoginForm extends AsyncForm {

  /**
   * Производит авторизацию с помощью User.login
   *
   * @param {object} data Данные формы
   *
   * @private
   */
  onSubmit(data) {
    // Обращение к API для авторизации
    User.login(data, (err, response) => {
      // Если авторизация прошла успешно
      if (err === null && response.success) {
        // Устанавливаем состояние "пользователь авторизован"
        App.setState('user-logged');
        // Закрываем окно формы
        App.getModal('login').close();
        // Сбрасываем форму
        this.element.reset();
      }
    });
  }

}
