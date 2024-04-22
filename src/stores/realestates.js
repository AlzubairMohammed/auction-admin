import request from '@/services/request';
import { defineStore } from 'pinia';
export const useRealestatesStore = defineStore('realestates', {
 state: () => ({
  url: '/realestates',
  realestates: [],
  realestate: {
   customer_name: '',
   customer_number: '',
   owner_name: '',
   owner_number: '',
   auction_id: '',
   license: {
    number: '',
    issuance_place_id: '',
    date: '',
    path: '',
    realestate_type_id: '',
    note: '',
   },
   owners: [
    {
     name: '',
     identity_number: '',
     nationality: '',
     ownership_percentage: '',
    },
   ],
   files: [
    { name: 'الصك', path: '' },
    { name: 'الرخصة', path: '' },
    { name: 'المخطط', path: '' },
   ],
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
