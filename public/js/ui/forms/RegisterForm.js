/**
 * Класс RegisterForm управляет формой
 * регистрации
 *
 * @class RegisterForm
 * @extends AsyncForm
 */
class RegisterForm extends AsyncForm {

  /**
   * Производит регистрацию с помощью User.register
   *
   * @param {object} data Данные формы
   *
   * @private
   */
  onSubmit(data) {
    // Обращение к API для регистрации
    User.register(data, (err, response) => {
      // Если регистрация прошла успешно
      if (err === null && response.success) {
        // Устанавливаем состояние "пользователь авторизован"
        App.setState('user-logged');
        // Закрываем окно формы
        App.getModal('register').close();
        // Сбрасываем форму
        this.element.reset();
      }
    });
  }

}
