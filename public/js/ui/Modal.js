/**
 * Класс Modal отвечает за управление модальными окнами:
 * - открытие/закрытие окон
 */
class Modal {

  /**
   * Устанавливает переданный элемент в свойство element
   * Регистрирует обработчики событий через registerEvents
   * Если элемент не передан, выбрасывает ошибку
   */
  constructor(element) {

    if (!element) {
      throw new Error('Error empty element in Modal'); 
    } else {
      this.element = element;
      this.registerEvents();
    }

  }

  /**
   * При клике на [data-dismiss="modal"] закрывает окно
   */
  registerEvents() {

    const btnClose = this.element.querySelectorAll('button[data-dismiss="modal"]');

    btnClose.forEach(elem => {
      elem.addEventListener('click', (e) => {
        this.onClose(e);
      });
    });

  }

  /**
   * Закрывает окно при событии закрытия
   */
  onClose(e) {

    e.preventDefault();
    this.close();

  }

  /**
   * Открывает окно
   */
  open() {
    this.element.style.display = 'block';
  }

  /**
   * Закрывает окно  
   */
  close(){
    this.element.style.display = 'none';
  }

}