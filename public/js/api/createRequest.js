

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  const formData = new FormData();
  xhr.responseType = 'json';
  if(options.method == 'GET') {
      options.url += '?';
      for(let key in options.data) {
          options.url += `${key}=${options.data[key]}&`;
      }
  }
  
  if(options.method != 'GET') {
      for(let key in options.data) {
          formData.append(key, options.data[key]);
      }
  }
  
  try {
      xhr.open (options.method, options.url);
      xhr.send(formData);
  } catch (e) {
      console.log('catch' + e);
  };
  xhr.onload = () => {
      options.callback(null, xhr.response);
  };
  xhr.onerror = () => { 
      options.callback(xhr.statusText, null);
  };
  
  };