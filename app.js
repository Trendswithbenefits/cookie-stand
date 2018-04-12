'use strict';

var timePoint = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allCookieStores = [];

function CookieStore(storeName,minCust,maxCust,aveCookieSale) {
  this.storeName = storeName;
  // this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookieSale = aveCookieSale;
  // this.locationurl = locationurl; --for future use
  //array for storing hourly cookie sales
  this.cookieEachHour = [];
  //setting initial value of cookieEachHour array sum to 0
  this.cookieSum = 0;
  allCookieStores.push(this);

}

//function for calculating total number of cookies
CookieStore.prototype.cookieSum = function() {
  this.cookieSum = 0;
  for (var i  = 0; i < timePoint.length; i++) {
    this.cookieSum += this.cookieEachHour[i];
  }
  return this.cookieSum;
};

//function for generating random number of customers

// CookieStore.prototype.randCust = function() {
//  Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
// };

//function for taking random # of customers, mutiplying them by the number of cookies
//bought each hour, and then pushing the resulting information into the custEachHour array

CookieStore.prototype.cookieGen = function() {
  for (var i = 0; i < timePoint.length; i ++) {
    var randNum = (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    var randCookie = Math.round(randNum *this.aveCookieSale);
    this.cookieEachHour.push(randCookie);
  }
};

// CookieStore.prototype.cookieGen = function() {
//   for (var i = 0; i < timePoint.length; i ++) {
//     var cookieHour = this.randCust()*this.aveCookieSale;
//     this.cookieEachHour.push(Math.round(cookieHour));
//   }
// };


var cookieStorePike = new CookieStore('First and Pike',23, 65, 6.3);

console.log(allCookieStores);
console.log(cookieStorePike.cookieGen());

var cookieStoreSeatac = new CookieStore('SeaTac',3,24,1.2);
var cookieStoreSeaCent = new CookieStore('Seattle Center',11,38,6.3);
var cookieStoreCapHill = new CookieStore('Capitol Hill',20,38,2.3);
var cookieStoreAlki = new CookieStore('Alki',2,16,4.6);

// var theadEl = document.getElementById('hours');
// var thEl = document.createElement('th');
// thEl.textContent = 'hello';
// theadEl.appendChild(thEl);

//function to print the hours
function renderHours() {
  var theadEl = document.getElementById('hours');
//empty element for the far left cell of the header row
  var thEl = document.createElement('th');
  theadEl.appendChild(thEl);
  for (var i =0; i < timePoint.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = timePoint[i];
    theadEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Store total';
  theadEl.appendChild(thEl);
}
renderHours();

//function to sum the cookies sold over the course of the day
// CookieStore.prototype.storeCookieTotal = function() {
  // var cookieSum = 0;
//   for (var i  = 0; i < timePoint.length; i++) {
//     i += this.cookieEachHour[i];
//   }
//   return cookieSum;
// };


//function to print the store name in a row and then print the number of cookies sold at each hour
CookieStore.prototype.renderCookies = function() {
  var tbodyEl = document.getElementById('cookiesneeded');
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  for (var i =0; i < timePoint.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieEachHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('th');
  //put back some text in the below text content line
  tdEl.textContent = this.cookieSum;
  trEl.appendChild(tdEl);
};
cookieStoreAlki.cookieGen();
console.log('The hourly cookie sales for the Alki location are:', cookieStoreAlki.cookieEachHour);

// cookieStoreAlki.cookieSum();
cookieStoreAlki.cookieGen();
cookieStoreAlki.renderCookies();
// cookieStoreCapHill.storeCookieTotal();
cookieStoreCapHill.cookieGen();
cookieStoreCapHill.renderCookies();
cookieStorePike.cookieGen();
cookieStorePike.renderCookies();
cookieStoreSeaCent.cookieGen();
cookieStoreSeaCent.renderCookies();
cookieStoreSeatac.cookieGen();
cookieStoreSeatac.renderCookies();

// function storeCookieTotal() {
//   for (var i  = 0; i < timePoint.length; i++) {
//     cookieSum  += cookieEachHour[i];
//   }





// *********************************
// Thar Be Corpse Code Below!!
// *********************************

// var cookieStorePike = {
//   location: '1st and Pike',
//   locationurl: 'https://www.google.com/maps/place/1st+Ave+%26+Pike+St,+Seattle,+WA+98101/@47.6088188,-122.3422157,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab2f8f1e7f5:0xbb338c128f949a19!8m2!3d47.6088152!4d-122.340027',
//   minCust: 23,
//   maxCust: 65,
//   storeOpen: 6,
//   storeClose: 21,
//   aveCookieSale: 6.3,
//   //array for storing hourly cookie sales
//   cookieEachHour: [],
//   //function for generating random number of customers
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
  //function for taking random # of customers, mutiplying them by the number of cookies
  //bought each hour, and then pushing the resulting information into the custEachHour array
//   cookieGen: function() {
//     for (var i = 0; i < timePoint.length; i ++) {
//       var cookieHour = this.randCust()*this.aveCookieSale;
//       this.cookieEachHour.push(Math.round(cookieHour));
//     }
//   }
// };
// cookieStorePike.cookieGen();
// console.log('The hourly cookie sales at the First and Pike location are:',cookieStorePike.cookieEachHour);

//Need a function to add all the elements of the array

// for (var i = 0; i < cookieStorePike.cookieEachHour.length; i ++) {
//   cookieEachHour += 1;
// }
//constructor

// var CookieStore = {
//   this.location = location,
//   this.locationurl = locationurl,
//   minCust: 23,
//   maxCust: 65,
//   aveCookieSale: 6.3,
//   //array for storing hourly cookie sales
//   this.cookieEachHour = [],
//   //function for generating random number of customers
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   //function for taking random # of customers, mutiplying them by the number of cookies
//   //bought each hour, and then pushing the resulting information into the custEachHour array
//   cookieGen: function() {
//     for (var i = 0; i < timePoint.length; i ++) {
//       var cookieHour = this.randCust()*this.aveCookieSale;
//       this.cookieEachHour.push(Math.round(cookieHour));
//     }
//   }
// };

// CookieStore.prototype.allCookieStores

// cookieStorePike.cookieGen();
// console.log('The hourly cookie sales at the First and Pike location are:',cookieStorePike.cookieEachHour);

// //Need a function to add all the elements of the array

// for (var i = 0; i < cookieStorePike.cookieEachHour.length; i ++) {
//   cookieEachHour += 1;
// }



// var cookieStoreSeatac = {
//   location: 'SeaTac Airport',
//   locationurl: '',
//   minCust: 3,
//   maxCust: 24,
//   storeOpen: 6,
//   storeClose: 21,
//   aveCookieSale: 1.2,
//   cookieEachHour: [],
//   randCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookieGen: function() {
//     for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
//       var cookieHour = this.randCust()*this.aveCookieSale;
//       this.cookieEachHour.push(Math.round(cookieHour));
//     }
//   }
// };

// cookieStoreSeatac.cookieGen();
// console.log('The hourly cookie sales at the SeaTac location are:',cookieStoreSeatac.cookieEachHour);


// var cookieStoreSeaCent =
// {
//   location: 'Seattle Center',
//   locationurl: '',
//   minCust: 11,
//   maxCust: 38,
//   storeOpen: 6,
//   storeClose: 21,
//   aveCookieSale: 6.3,
//   cookieEachHour: [],
//   randCust: function ()
//   {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookieGen: function() {
//     for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
//       var cookieHour = this.randCust()*this.aveCookieSale;
//       this.cookieEachHour.push(Math.round(cookieHour));
//     }
//   }
// };
// cookieStoreSeaCent.cookieGen();
// console.log('The hourly cookie sales for the Seattle Center location are:',cookieStoreSeaCent.cookieEachHour);


// var cookieStoreCapHill = {
//   location: 'Capitol Hill',
//   locationurl: '',
//   minCust: 20,
//   maxCust: 38,
//   storeOpen: 6,
//   storeClose: 21,
//   aveCookieSale: 2.3,
//   cookieEachHour: [],
//   randCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookieGen: function() {
//     for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
//       var cookieHour = this.randCust()*this.aveCookieSale;
//       this.cookieEachHour.push(Math.round(cookieHour));
//     }
//   }
// };

// cookieStoreCapHill.cookieGen();
// console.log('The hourly cookie sales for the Capitol Hill location are:',cookieStoreCapHill.cookieEachHour);

// var cookieStoreAlki =
// {
//   location: 'Alki',
//   locationurl: '',
//   minCust: 2,
//   maxCust: 16,
//   storeOpen: 6,
//   storeClose: 21,
//   aveCookieSale: 4.6,
//   cookieEachHour: [],
//   randCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   cookieGen: function() {
//     for (var i = (this.storeClose - this.storeOpen); i > 0; i --) {
//       var cookieHour = this.randCust()*this.aveCookieSale;
//       this.cookieEachHour.push(Math.round(cookieHour));
//     }
//   }
// };
// cookieStoreAlki.cookieGen();
// console.log('The hourly cookie sales for the Alki location are:', cookieStoreAlki.cookieEachHour);

// stretch goal: putting each company's hours up on their website