// ==UserScript==
// @name SSI Buttoms Close
// @namespace Violentmonkey Scripts
// @match http://ssi.knowhow.com.uy/ssi/servlet/ing01?UPD*
// @grant none
// ==/UserScript== 
//


$(document).ready(function () {
  if(document.body){ 
    // Botón para SIGES y VSIGES
    var btnClose = $('<input id="btnClose" type="button" value="Finalizar" class="SpecialButtons own_btn"/>');
    $(".gx-content-placeholder").prepend( btnClose );
    btnClose.click(function() {            
      $('#vTAREAESTID').focus();
      $('#vTAREAESTID option[value="FIN"]').attr("selected", true);
      $('iframe').contents().find('body').prepend('## Cierro ticket');
    });
  }
  timeinterval = setInterval(() => { 
    date_now = new Date();
    hours = date_now.getHours();
    minutes = date_now.getMinutes();
    y = date_now.getFullYear().toString();
    m = (date_now.getMonth() + 101).toString().substring(1);
    d = (date_now.getDate() + 100).toString().substring(1);
    if (minutes < 10){
        minutes = "0" + minutes 
    }
    current_date = d + "/" + m + "/" + y + " " + hours + ":" + minutes;
    //$('#vTAREALINEAHRFIN').focus();
    $('#vTAREALINEAHRFIN').val(current_date);
    //console.log(current_date);
  },60000);
});
