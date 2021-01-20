// ==UserScript==
// @name SSI Buttoms Close
// @namespace Violentmonkey Scripts
// @match http://ssi.knowhow.com.uy/ssi/servlet/ing01?UPD*
// @grant none
// ==/UserScript== 
//

var linkToRedmine = false;
function fncAddRedmineBtn(){
  //https://redmine.hg.com.uy/favicon.ico
  var btnRedmine = $('<buttom class="redmine_ico" id="btnRedmine" style="cursor: pointer; border:2px;"><img style="cursor: pointer; padding-left: 5px; width:24px; height:100%;" src="https://redmine.hg.com.uy/favicon.ico" alt="Abrir ticket en redmine" title="Abrir ticket en redmine"></button>');
  title = $("#vTAREATITDSC").val().split("#");
  url = "https://redmine.hg.com.uy/issues/" + title[1].replace("]", "");
  $("#vTAREATITDSC").parent().append( btnRedmine ); 
  //btnRedmine.append(" - " + title[1].replace("]", ""));
  btnRedmine.click(function() { 
    var win = window.open(url, '_blank');
    win.focus();
  });
}
$(document).ready(function () {
  
  if(document.body){ 
    // Botón para SIGES y VSIGES
    var btnClose = $('<input id="btnClose" type="button" value="Finalizar" class="SpecialButtons own_btn"/>');
    $(".gx-content-placeholder").prepend( btnClose );
    btnClose.click(function() {  
      date_now = new Date();
      hours = date_now.getHours();
      minutes = date_now.getMinutes();
      y = date_now.getFullYear().toString();
      m = (date_now.getMonth() + 101).toString().substring(1);
      d = (date_now.getDate() + 100).toString().substring(1);
      minute_less = 0;
      if (minutes < 10){
        minute_less = "0" + parseInt(minutes - 1);
        minutes = "0" + minutes;
      } else {
        minute_less = parseInt(minutes - 1);
      }
      current_date0 = d + "/" + m + "/" + y + " " + hours + ":" + minute_less;
      current_date1 = d + "/" + m + "/" + y + " " + hours + ":" + minutes;
      $('#vTAREALINEAHRINI').val(current_date0);
      $('#vTAREALINEAHRFIN').val(current_date1);
      $('#vTAREAESTID').focus();
      $('#vTAREAESTID option[value="FIN"]').attr("selected", true);
      $('iframe').contents().find('body').prepend('## Cierro ticket');
    });    
  }

  // adicionamos un checkbox para definir el timer cada segundo
  $("#vTAREALINEAHRFIN_dp_container").append(' \
    <input type="checkbox" id="run_timer" name="run_timer" value="timer"> \
    <label for="run_timer"> TIMER</label> \
  ');
  // Para que la hora fin siga corriendo cuando el timer se encuentre activo
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
    if($("#run_timer").is(':checked')){
      $('#vTAREALINEAHRFIN').val(current_date);
    }
    
    $('.redmine_ico').remove();
    linkToRedmine = false;
    if ($("#vTAREATITDSC").val().indexOf("[HG#") >= 0 && !linkToRedmine){
      linkToRedmine = true;
      fncAddRedmineBtn();
    }
    
  },1000);
});