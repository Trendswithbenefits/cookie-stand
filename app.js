'use strict';


var cookieStorePike = {
  location: '1st and Pike',
  locationurl: 'https://www.google.com/maps/place/1st+Ave+%26+Pike+St,+Seattle,+WA+98101/@47.6088188,-122.3422157,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab2f8f1e7f5:0xbb338c128f949a19!8m2!3d47.6088152!4d-122.340027',
  minCust: 23,
  maxCust: 65,
  storeOpen: 6,
  storeClose: 21,
  aveCookieSale: 6.3,
  //array for storing hourly cookie sales
  cookieEachHour: [],
  //function for generating random number of customers
  randCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  //function for taking random # of customers, mutiplying them by the number of cookies
  //bought each hour, and then pushing the resulting information into the custEachHour array
  cookieGen: function() {
    for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
      var cookieHour = this.randCust()*this.aveCookieSale;
      this.cookieEachHour.push(Math.round(cookieHour));
    }
  }
};
cookieStorePike.cookieGen();
console.log('The hourly cookie sales at the First and Pike location are:',cookieStorePike.cookieEachHour);




var cookieStoreSeatac = {
  location: 'SeaTac Airport',
  locationurl: '',
  minCust: 3,
  maxCust: 24,
  storeOpen: 6,
  storeClose: 21,
  aveCookieSale: 1.2,
  cookieEachHour: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookieGen: function() {
    for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
      var cookieHour = this.randCust()*this.aveCookieSale;
      this.cookieEachHour.push(Math.round(cookieHour));
    }
  }
};

cookieStoreSeatac.cookieGen();
console.log('The hourly cookie sales at the SeaTac location are:',cookieStoreSeatac.cookieEachHour);


var cookieStoreSeaCent =
{
  location: 'Seattle Center',
  locationurl: '',
  minCust: 11,
  maxCust: 38,
  storeOpen: 6,
  storeClose: 21,
  aveCookieSale: 6.3,
  cookieEachHour: [],
  randCust: function ()
  {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookieGen: function() {
    for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
      var cookieHour = this.randCust()*this.aveCookieSale;
      this.cookieEachHour.push(Math.round(cookieHour));
    }
  }
};
cookieStoreSeaCent.cookieGen();
console.log('The hourly cookie sales for the Seattle Center location are:',cookieStoreSeaCent.cookieEachHour);


var cookieStoreCapHill = {
  location: 'Capitol Hill',
  locationurl: '',
  minCust: 20,
  maxCust: 38,
  storeOpen: 6,
  storeClose: 21,
  aveCookieSale: 2.3,
  cookieEachHour: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookieGen: function() {
    for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
      var cookieHour = this.randCust()*this.aveCookieSale;
      this.cookieEachHour.push(Math.round(cookieHour));
    }
  }
};

cookieStoreCapHill.cookieGen();
console.log('The hourly cookie sales for the Capitol Hill location are:',cookieStoreCapHill.cookieEachHour);

var cookieStoreAlki =
{
  location: 'Alki',
  locationurl: '',
  minCust: 2,
  maxCust: 16,
  storeOpen: 6,
  storeClose: 21,
  aveCookieSale: 4.6,
  cookieEachHour: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookieGen: function() {
    for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
      var cookieHour = this.randCust()*this.aveCookieSale;
      this.cookieEachHour.push(Math.round(cookieHour));
    }
  }
};
cookieStoreAlki.cookieGen();
console.log('The hourly cookie sales for the Alki location are:', cookieStoreAlki.cookieEachHour);

// stretch goal: putting each company's hours up on their website