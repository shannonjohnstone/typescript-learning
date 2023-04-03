import axios, { AxiosPromise } from 'axios';

export class Sync<T extends { id?: number }> {
  constructor(public url: string) { }

  async fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}${id}`);
  }

  async save(data: T): AxiosPromise {
    const id = data?.id;

    try {
      if (id) {
        return await axios.put(`${this.url}${id}`, data);
      } else {
        return await axios.post(this.url, data);
      }
    } catch (error) {
      throw new Error('Error saving data');
    }
  }
}
