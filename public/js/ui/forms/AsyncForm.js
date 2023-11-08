/**
 * Класс AsyncForm управляет асинхронными формами
 * Собирает данные форм и передает их в метод onSubmit
*/
class AsyncForm {

  /**
   * Сохраняет переданный элемент и 
   * регистрирует события через registerEvents
   * Выбрасывает ошибку если элемент пустой
   */
  constructor(element) {

    if (!element) {
      throw new Error('Error empty element in AsyncForm');
    } else {
      this.element = element;
      this.registerEvents();
    }

  }

  /**
   * Запрещает отправку формы.
   * При отправке вызывает метод submit.
   */
  registerEvents() {

    this.element.onsubmit = (e) => {
      e.preventDefault();
      this.submit();
    }

  }

  /**
   * Преобразует данные формы в объект
   */
  getData() {

    const formData = new FormData(this.element);
    const data = {};

    for (let [name, value] of formData) {
      data[name] = value; 
    }

    return data;

  }

  onSubmit(data) {

  }

  /**
   * Вызывает onSubmit и передает туда данные формы  
   */
  submit() {
    const data = this.getData();
    this.onSubmit(data);
  }

}