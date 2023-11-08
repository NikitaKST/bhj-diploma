/**
 * Класс CreateAccountForm управляет формой создания нового счёта
*/
class CreateAccountForm extends AsyncForm {

  /**
   * Создаёт счёт через Account.create
   * При успехе закрывает окно, обновляет приложение App.update()
   * и сбрасывает форму
   */
  onSubmit(data) {
    
    Account.create(data, (err, response) => {
    
      if (err === null && response.success) {
      
        this.element.reset();
        App.getModal('createAccount').close();  
        App.update();
      
      }
    
    });
  
  }

}