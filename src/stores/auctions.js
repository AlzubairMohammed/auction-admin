import request from '@/services/request';
import { defineStore } from 'pinia';
export const useAuctionsStore = defineStore('auctions', {
 state: () => {
  return {
   url: '/auctions',
   auctions: [],
   auction: {},
  };
 },
 getters: {
  getAuctions() {
   return this.auctions;
  },
 },
 actions: {
  fetchAuctions() {
   request.get(this.url).then((response) => {
    this.auctions = response.data;
   });
  },
  getAuction(id) {
   return request.get(`${this.url}/${id}`);
  },
  addAuction(auction) {
   request.post(this.url, auction).then((response) => {
    this.auction = response.data;
   });
  },
  removeAuction(id) {
   request.delete(this.url, id).then(() => {
    this.auctions = this.auctions.filter((r) => r?.id !== id);
   });
  },
  updateAuction(auction) {
   this.auctions = this.auctions.map((r) => (r.id === auction?.id ? auction : r));
  },
 },
});
