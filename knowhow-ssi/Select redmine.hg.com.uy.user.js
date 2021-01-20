// ==UserScript==
// @name Select redmine.hg.com.uy
// @namespace Violentmonkey Scripts
// @match https://redmine.hg.com.uy/*
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
  /*if ($('#issue_category_id').length > 0){
    $('#issue_category_id').select2({ 
      width: '300px', 
      dropdownCssClass: "bigdrop" 
    });
  }
  if ($('#time_entry_hour_project_id').length > 0){
    $('#time_entry_hour_project_id').select2({ 
      width: '600px', 
      dropdownCssClass: "bigdrop" 
    });
  }*/
  if ($('select').length > 0){
    $('select').select2({ 
      width: '285px', 
      dropdownCssClass: "bigdrop" 
    });
  }
});