// ==UserScript==
// @name         amazoneSellerMatchLowPrice
// @namespace    https://greasyfork.org/users/98044
// @version      0.8
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

  let $matchLowPriceButtons = $('button span.a-dropdown-prompt:visible');
  let $saveAllButton = $('span.a-declarative span.a-button-inner a.a-button-text:visible');

  setInterval(function(){$matchLowPriceButtons.click()}, 5000);

  setInterval(function(){$saveAllButton = $('span.a-declarative span.a-button-inner a.a-button-text:visible')}, 5000);
  setInterval(function(){$saveAllButton.click()}, 10000);

  setInterval(function(){location.reload()}, 60000);

});
