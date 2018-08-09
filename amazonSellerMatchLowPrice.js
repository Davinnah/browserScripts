// ==UserScript==
// @name         amazoneSellerMatchLowPrice
// @namespace    TODO
// @version      0.1
// @description  Will refresh "Manage  Inventory" page every 16mins, click all "Match Low Price" buttons, then "Save"
// @author       Davinna
// @icon         https://turkerhub.com/data/avatars/l/0/594.jpg?1485199123
// @include      *sellercentral.amazon.com/inventory?viewId=PRICING*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @license      https://opensource.org/licenses/MIT
// @copyright    2017-2018 Davinna
// ==/UserScript==

$(document).ready(function(){
  'use strict';
  const $matchLowPrice = $('button span.a-dropdown-prompt:visible');
  const $saveAll = $('span.a-declarative span.a-button-inner a.a-button-text:visible');
  
  $matchLowPrice.click();
  setTimeout(function(){$saveAll.click()}, 5000);
  setInterval(function(){location.reload()}, 960000);
  
});