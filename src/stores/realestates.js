import request from '@/services/request';
import { defineStore } from 'pinia';
export const useRealestatesStore = defineStore('realestates', {
 state: () => ({
  url: '/realestates',
  realestates: [],
  realestate: {
   auction_id: 4,
   customer_name: '',
   customer_number: '',
   owner_name: '',
   owner_number: '',
   license: {
    number: '',
    issuance_place_id: '',
    date: '',
    path: '',
    realestate_type_id: '',
    note: '',
   },
   files: [],
   filesNames: [{ name: 'الصك' }, { name: 'الرخصة' }, { name: 'المخطط' }],
   document: {
    number: '',
    area_number: '',
    block_number: '',
    graph_number: '',
    space: '',
    quarter_id: '',
    north_desc: '',
    north_space: '',
    west_desc: '',
    west_space: '',
    east_desc: '',
    east_space: '',
    south_desc: '',
    south_space: '',
    note: '',
    path: '',
   },
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
