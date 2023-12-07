import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('https://mycontacts-bub07ti1.b4a.run');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContacts(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }

  updateContacts(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, { body: contact });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
