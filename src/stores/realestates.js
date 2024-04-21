import request from '@/services/request';
import { defineStore } from 'pinia';
export const useRealestatesStore = defineStore('realestates', {
 state: () => ({
  url: '/realestates',
  realestates: [],
  realestate: {},
  customer: {
   customer_name: '',
   customer_number: '',
   owner_name: 'Ali',
   owner_number: '',
  },
 }),

 getters: {
  getRealestates() {
   return this.realestates;
  },
 },
 actions: {
  fetchRealestates() {
   request.get(this.url).then((response) => {
    this.realestates = response.data;
   });
  },
  getRealestate(id) {
   return request.get(`${this.url}/${id}`);
  },
  addRealestate(realestate) {
   request.post(this.url, realestate).then((response) => {
    this.realestate = response.data;
   });
  },
  removeRealestate(id) {
   request.delete(this.url, id).then(() => {
    this.realestates = this.realestates.filter((r) => r?.id !== id);
   });
  },
  updateRealestate(realestate) {
   this.realestates = this.realestates.map((r) => (r.id === realestate?.id ? realestate : r));
  },
 },
});
