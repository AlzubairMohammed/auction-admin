import request from '@/services/request';
import { defineStore } from 'pinia';
export const useAreasCitiesQuartersStore = defineStore('areasCitiesQuarters', {
 state: () => ({
  areas: [],
  cities: [],
  quarters: [],
 }),

 getters: {
  getAreas() {
   return this.areas;
  },
  getCities() {
   return this.cities;
  },
  getQuarters() {
   return this.quarters;
  },
 },
 actions: {
  fetchAreas: async function () {
   await request.get('areas').then((response) => {
    this.areas = response.data;
   });
  },
  getAreaCities: async function (id) {
   await request.get(`cities/area/${id}`).then((response) => {
    this.cities = response.data;
   });
  },
  getCityQuarters: async function (id) {
   await request.get(`quarters/city/${id}`).then((response) => {
    this.quarters = response.data;
   });
  },
 },
});
