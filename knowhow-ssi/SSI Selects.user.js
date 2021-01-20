// ==UserScript==
// @name SSI Selects
// @namespace Violentmonkey Scripts
// @match http://ssi.knowhow.com.uy/*
// @include https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.full.min.js
// @run-at   document-end
// @grant none
// ==/UserScript== 
//


$(document).ready(function () {
  $('head').append(' \
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" /> \
    ');
  if ($('select').length > 0){
    $('select').select2();
    $('body').css({
      "font-size":"1em"
    })
  }
});