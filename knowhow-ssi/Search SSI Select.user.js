// ==UserScript==
// @name Search SSI Select
// @namespace Violentmonkey Scripts
// @match http://ssi.knowhow.com.uy/ssi*
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
  //$('select[name="idProyecto"]').attr('id', 'idProyecto');
  if ($('select').length > 0){
    $('select').select2({
    width: '350px' // need to override the changed default
    });
  }
});