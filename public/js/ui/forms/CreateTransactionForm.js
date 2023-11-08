/**
 * Класс CreateTransactionForm управляет формой создания новой транзакции 
*/
class CreateTransactionForm extends AsyncForm {

  /**
   * Вызывает конструктор родителя и метод renderAccountsList
   */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов через Account.list
   * Обновляет список счетов в форме 
   */
  renderAccountsList() {

    Account.list({}, (err, response) => {
    
      if (err === null && response.success) {
      
        let items = '';
        response.data.forEach(item => {
          items += `<option value="${item.id}">${item.name}</option>`
        });
        this.element.querySelector('.accounts-select').innerHTML = items;
      
      }

    });
  
  }

  /**
   * Создаёт новую транзакцию через Transaction.create
   * При успехе:
   * - вызывает App.update()
   * - сбрасывает форму
   * - закрывает окно
   */
  onSubmit(data) {

    Transaction.create(data, (err, response) => {
    
      if (err === null && response.success) {
      
        this.element.reset();
        App.getModal('newIncome').close();
        App.getModal('newExpense').close();  
        App.update();
      
      }

    });

  }

}