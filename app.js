'use strict';


//I have absolutely nothing done for the constructor assignment. I'm still figuring out Monday's assignment. :-(

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
console.log(cookieStorePike.custEachHour);




var cookieStoreSeatac = {
  location: 'SeaTac Airport',
  locationurl: '',
  minCust: 3,
  maxCust: 24,
  aveCookieSale: 1.2,
  custEachHour: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
for (var i = 15; i > 0; i --) {
  var hour = cookieStoreSeatac.randCust();
  cookieStoreSeatac.custEachHour.push(hour);
}

console.log(cookieStoreSeatac.custEachHour);


var cookieStoreSeaCent =
{
  location: 'Seattle Center',
  locationurl: '',
  minCust: 11,
  maxCust: 38,
  aveCookieSale: 6.3,
  custEachHour: [],
  randCust: function ()
  {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
for (var i = 15; i > 0; i --) {
  var hour = cookieStoreSeaCent.randCust();
  cookieStoreSeaCent.custEachHour.push(hour);
}
console.log(cookieStoreSeaCent.custEachHour);


var cookieStoreCapHill = {
  location: 'Capitol Hill',
  locationurl: '',
  minCust: 20,
  maxCust: 38,
  aveCookieSale: 2.3,
  custEachHour: [],
  randCust: function ()
  {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
};
for (var i = 15; i > 0; i --) {
  var hour = cookieStoreCapHill.randCust();
  cookieStoreCapHill.custEachHour.push(hour);
}
console.log(cookieStoreCapHill.custEachHour);


var cookieStoreAlki =
{
  location: 'Alki',
  locationurl: '',
  minCust: 2,
  maxCust: 16,
  aveCookieSale: 4.6,
  custEachHour: [],
  randCust: function ()
  {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

for (var i = 15; i > 0; i --) {
  var hour = cookieStoreAlki.randCust();
  cookieStoreAlki.custEachHour.push(hour);
}
console.log(cookieStoreAlki.custEachHour);