import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('https://mycontacts-bub07ti1.b4a.run');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new ContactsService();
