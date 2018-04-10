'use strict';

// var randCust = function (storeName) {
  // return Math.floor(Math.random() * (storeName.maxCust - storeName.minCust)) + storeName.minCust;
// };

var cookieStorePike = {
  location: '1st and Pike',
  locationurl: 'https://www.google.com/maps/place/1st+Ave+%26+Pike+St,+Seattle,+WA+98101/@47.6088188,-122.3422157,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab2f8f1e7f5:0xbb338c128f949a19!8m2!3d47.6088152!4d-122.340027',
  minCust: 23,
  maxCust: 65,
  aveCookieSale: 6.3,
  custEachHour: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
for (var i = 15; i > 0; i --) {
  var hour = cookieStorePike.randCust();
  cookieStorePike.custEachHour.push(hour);
}

var cookieStoreSeatac = {
  location: 'SeaTac Airport',
  locationurl: '',
  minCust: 3,
  maxCust: 24,
  aveCookieSale: 1.2,
  randCust: function getRandomInt(min, max) {
    min = Math.ceil(3);
    max = Math.floor(24);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

var cookieSeattleCenter = {
  location: 'Seattle Center',
  locationurl: '',
  minCust: 11,
  maxCust: 38,
  aveCookieSale: 6.3,
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var cookieStoreCapitolHill = {
  location: 'Capitol Hill',
  locationurl: '',
  minCust: 20,
  maxCust: 38,
  aveCookieSale: 2.3,
  randCust: function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  // hourCust: this.randCust(this.minCust, this.maxCust)
};
cookieStoreCapitolHill.randCust();

// var cookieStoreAlki = {
//   location: 'Alki',
//   locationurl: '',
//   minCust: 2,
//   maxCust: 16,
//   aveCookieSale: 4.6,
//   randCust: "jhfgkjyg"
// }