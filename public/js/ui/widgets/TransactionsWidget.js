/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error(`Error empty ${element} in class Transaction`);
    } else {
        this.element = element;
        this.registerEvents();
      }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const income = document.querySelector('.create-income-button'),
      expense = document.querySelector('.create-expense-button');

      income.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('newIncome').open();
      })

      expense.addEventListener('click', (e) => {
        e.preventDefault();
        App.getModal('newExpense').open();
        })
  }
}