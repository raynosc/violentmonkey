// ==UserScript==
// @name SSI Search Btn
// @namespace Violentmonkey Scripts
// @match http://ssi.knowhow.com.uy/ssi/servlet/busquedatareas
// @grant none
// ==/UserScript== 
//

$(document).ready(function () {
  if(document.body){ 
    // Botón para LINUX/HG
    var btnHGLxInbox = $('<input id="btnHGLxInbox" type="button" value="LINUX/HG" class="SpecialButtons own_btn"/>');
    $(".gx-content-placeholder").prepend( btnHGLxInbox );
    btnHGLxInbox.click(function() {   
      
      //vTAREARESPONSABLEID
      $('#vTAREARESPONSABLEID').focus();
      $('[name=vTAREARESPONSABLEID]').val( 398 );      
      $("vTAREARESPONSABLEID").trigger("onblur"); 
      //vESTADOID
      $('#vESTADOID').focus();
      $('#vESTADOID option[value="NOF"]').attr("selected", true);
      $("vESTADOID").trigger("onblur");     
      //BUTTON1
      $("input[name='BUTTON1']").click();
    });  
    // Botón para LINUX/ADMIN
    var btnAdmLxInbox = $('<input id="btnAdmLxInbox" type="button" value="LINUX/ADMIN" class="SpecialButtons own_btn"/>');
    $(".gx-content-placeholder").prepend( btnAdmLxInbox );
    btnAdmLxInbox.click(function() {      
      //vTAREARESPONSABLEID
      $('#vTAREARESPONSABLEID').focus();
      $('[name=vTAREARESPONSABLEID]').val( 494 );
      $("vTAREARESPONSABLEID").trigger("onblur");
      //vESTADOID
      $('#vESTADOID').focus();
      $('#vESTADOID option[value="NOF"]').attr("selected", true);
      $("vESTADOID").trigger("onblur");
      //BUTTON1
      $("input[name='BUTTON1']").click();
    });  
  }
});