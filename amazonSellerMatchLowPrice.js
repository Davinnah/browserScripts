// ==UserScript==
// @name         amazoneSellerMatchLowPrice
// @namespace    https://greasyfork.org/users/98044
// @version      0.5
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

  const $matchLowPriceButtons = $('button span.a-dropdown-prompt:visible');
  const $saveAllButton = $('span.a-declarative span.a-button-inner a.a-button-text:visible');
  console.log($matchLowPriceButtons,$saveAllButton);

  $matchLowPriceButtons.click();
  $saveAllButton.click();
  console.log("clicked");

});
