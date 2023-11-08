/** 
 * Класс Sidebar отвечает за работу боковой колонки:
 * - кнопки скрытия/показа колонки в мобильной версии 
 * - кнопки меню
*/
class Sidebar {

  /**
   * Запускает методы initAuthLinks и initToggleButton
   */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Переключает классы sidebar-open и sidebar-collapse у body
   * при нажатии на кнопку .sidebar-toggle
   */
  static initToggleButton() {
    
    const body = document.querySelector('.sidebar-mini');
    const btn = document.querySelector('.sidebar-toggle');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    });

  }

  /**
   * Обработчики событий для кнопок меню
   */
  static initAuthLinks() {

    const register = document.querySelector('.menu-item_register'),
      login = document.querySelector('.menu-item_login'),
      logut = document.querySelector('.menu-item_logout');

    register.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('register').open();
    });

    login.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('login').open();
    });

    logut.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout(User.current(), (err, response) => {
        if (err === null && response.success) {
          App.setState('init');
        }
      });
    });

  };

};