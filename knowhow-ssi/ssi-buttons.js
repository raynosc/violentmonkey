// ==UserScript==
// @name SSI Buttoms
// @namespace Violentmonkey Scripts
// @match http://ssi.knowhow.com.uy/ssi/servlet/ing01?INS*
// @run-at   document-end
// @grant none
// ==/UserScript== 
//



// VARIABLES
Date.prototype.getNDay = function() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Lunes";
  weekday[2] = "Martes";
  weekday[3] = "Miércoles";
  weekday[4] = "Jueves";
  weekday[5] = "Viernes";
  weekday[6] = "Sabado";
  return weekday[d.getDay()];
}

date = new Date();
y = date.getFullYear().toString();
m = (date.getMonth() + 101).toString().substring(1);
d = (date.getDate() + 100).toString().substring(1);
w = date.getNDay();
h = date.getHours();
inhour="09:00";
mm = (date.getMinutes() + 100).toString().substring(1);
close_date = d + "/" + m + "/" + y + " " + h + ":" + mm + "";

//prefix=[{"prefix": "AGESIC:REGISTROS", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PDI", "pm_name": "FAVIO PI\u00d1EYRO", "id": "587"}, {"prefix": "AGESIC:PORTAL:INNOVA", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PORTAL:PRESIDENCIA", "pm_name": "LUIS REYES", "id": "437"}, {"prefix": "AGESIC:PORTAL:PEU", "pm_name": "LUIS REYES", "id": "437"}, {"prefix": "AGESIC:PORTAL", "pm_name": "LUIS REYES", "id": "437"}, {"prefix": "AGESIC:OID", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:CKAN", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PORTAL:LIFERAY", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:GEO:VCLOUD", "pm_name": "GUSTAVO VAZQUEZ", "id": "395"}, {"prefix": "AGESIC:CLOUD", "pm_name": "MARCELOS SAN MARTIN"}, {"prefix": "AGESIC:FORMULARIOS:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "AGESIC:SIGES", "pm_name": "GONZALO AMENDOLA", "id": "533"}, {"prefix": "AGESIC:APTRANSVERSALES:FIRMAS", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:POWERDNS", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:GITLAB", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PDI:COESYS", "pm_name": "FAVIO PI\u00d1EYRO", "id": "587"}, {"prefix": "AGESIC:TRAMITES:TRAZABILIDAD", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:MOODLE", "pm_name": "GONZALO AMENDOLA", "id": "533"}, {"prefix": "AGESIC:T100:", "pm_name": "VICTOR ALCORTA"}, {"prefix": "AGESIC:LIFERAYGC:", "pm_name": "GONZALO AMENDOLA", "id": "533"}, {"prefix": "AGESIC:APUSOAGESIC:LIFERAYGC:", "pm_name": "GONZALO AMENDOLA", "id": "533"}, {"prefix": "AGESIC:GIRH", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:ACCE", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:ZABBIX", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PENTAHO", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PDI:IDURUGUAY", "pm_name": "FAVIO PI\u00d1EYRO", "id": "587"}, {"prefix": "AGESIC:CONSUL", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:IDENOMENCLATOR", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:ZABBIXPROXY:GEO:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "AGESIC:SECIU", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PORTAL:PUNIF", "pm_name": "LUIS REYES", "id": "437"}, {"prefix": "AGESIC:VEEAM:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "AGESIC:PDI:", "pm_name": "FAVIO PI\u00d1EYRO", "id": "587"}, {"prefix": "AGESIC:GEOPORTAL", "pm_name": "MILTON DI PASCUA", "id": "450"}, {"prefix": "AGESIC:MISAVISOS", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:MIPERFIL", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:NEXTCLOUD:SALUD:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "AGESIC:NEXTCLOUD:AGESIC:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "AGESIC:ACTIVIDADESINTERACTIVAS", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "AGESIC:DGR", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:ENCUESTAS:", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:DIRECCIONES:", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:PFEA", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:CONSENTIMIENTODIGITAL", "pm_name": "RODRIGO RODRIGUEZ", "id": "564"}, {"prefix": "AGESIC:SAIP", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:IFAZ", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:TICKANTEL:", "pm_name": "MARIELA TORRES", "id": "597"}, {"prefix": "ANTEL:SGR:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:SORTEOS:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:LDAP", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:STP", "pm_name": "SEBASTIAN MARCO", "id": "281"}, {"prefix": "ANTEL:GEOSWITCH", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:IPTOCOUNTRY", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:GESTCORREO", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:LUA:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:GIS:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:PUSHNOTIFICATION:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:SPOTIFY:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:WECM:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:DNS", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:APICONT", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:UNISYS:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:APICONFIG:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:EPAGOS:", "pm_name": "MONICA PEREZ", "id": "289"}, {"prefix": "ANTEL:SCXCA:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:IAN:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:DBTV", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:IAN", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:SIAV:", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:DBMYSQL", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:GEVENTOS", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:AUTORIZADOR", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:AMP", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:HELPDESK", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:MICROPAGOS", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:RESTRICCIONES", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:DALE", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:PRONOSTICADOR", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:ANTELGO", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:WEBSTORE:", "pm_name": "GARBUSI PABLO"}, {"prefix": "ANTEL:LOGAN:", "pm_name": "GARBUSI PABLO"}, {"prefix": "ANTEL:CDS:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:TUAPP:", "pm_name": "VALERIA ASTOR", "id": "615"}, {"prefix": "ANTEL:WEAVER", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:SEGUIMIENTO:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:LUPITA", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:EVERGENT", "pm_name": "FEDERICO AVAS", "id": "451"}, {"prefix": "ANTEL:EPAGOS:PCI:", "pm_name": "MONICA PEREZ", "id": "289"}, {"prefix": "ANTEL:CORONAVIRUS:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:SAURON:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:HEADEND:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:ZAZU:", "pm_name": "GASTON MARTIRENA", "id": "447"}, {"prefix": "ANTEL:EYWA", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:WILEE", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:MAUTIC", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "ANTEL:VQUEUE:", "pm_name": "MARIELA TORRES", "id": "597"}, {"prefix": "SG:GURI:", "pm_name": "SERGIO GARCIA", "id": "459"}, {"prefix": "SG:IRCCA:", "pm_name": "JUAN DA COSTA", "id": "436"}, {"prefix": "SG:PARLAMENTO:", "pm_name": "VALERIA BONJOUR", "id": "456"}, {"prefix": "SG:CLOUDPOCITOS:", "pm_name": "MARCELOS SAN MARTIN"}, {"prefix": "SG:PIWIKHG:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "SG:AFE:", "pm_name": "PEDRO CERIOTTI"}, {"prefix": "SG:GATEWAY:", "pm_name": "VALERIA BONJOUR", "id": "456"}, {"prefix": "SG:AIN:", "pm_name": "FAVIAN GIORELLO", "id": 354}, {"prefix": "SG:OPP-SIFI:", "pm_name": "VALERIA BONJOUR", "id": "456"}, {"prefix": "SG:ANEP:", "pm_name": "VALERIA BONJOUR", "id": "456"}]
function fnc_get_onsite_contact_id(username){
  // Para usuarios de monitoreo el contacto siempre es alejandro
  if (username == "rvolpe" || username == "asuarez"){ 
    return 3; // Alejandro Cristiani
  }
  // Obtenemos el id del cliente seleccionado
  client_id = $('#vTAREACLIENTEID').find(":selected").val();
  switch(client_id){
    case "1":{ // Abitab
      return 119; // Pablo Geymonat
    }break;
    case "35":{ // HG
      return 354; // Favian Giorello
    }break;
    case "46":{ // ACCESA
      return 245; // Pablo Caceres
    }break; 
    case "58":{ // Diario el pais
      return 362; // Enrique buela
    }break;
    default:{ // Know-how
      if (username == "rsanchez" || username == "jgodoy" || username == "clorenzo" || username == "fdumont" ){ 
        return 4; // Martin Vazquez
      } else if (username == "lbaronio" ||username == "esuarez" || username == "hcabrera" || username == "mgastelumendi" || 
                 username == "igastelumendi" || username == "yugarte" || username == "acristia"){
        return 3; // Alejandro Cristiani
      } else if (username == "vviera" || username == "asanabria" || username == "dcastera" || username == "mvazquez"){
        return 4; // Martin Vazquez
      }
    }
  }
}

function fnc_select_option(option_id, option_value){
  $('#' + option_id).focus();
  $('#' + option_id + ' option[value="' + option_value + '"]').attr("selected", true);
  $('#' + option_id).trigger("onblur");
}

function fnc_set_value(id, value){
  $('#' + id).focus();
  $('#' + id).val( value );
  $('#' + id).trigger("onblur");
}

function fnc_fill_lnx_adm(){
  //vTAREACLIENTEID
  fnc_select_option("vTAREACLIENTEID", 35);
  //vTAREACATEGORIAID
  fnc_select_option("vTAREACATEGORIAID", 6);
  //vTAREATIPOTAREAID
  fnc_select_option("vTAREATIPOTAREAID", 6);
  //vTAREAESTHRS
  fnc_set_value("vTAREAESTHRS", "2,0");
  ////vTAREAESTID
  fnc_select_option("vTAREAESTID", "ACE");
}

function fnc_onsite(type){
  start_hours = inhour;
  var start_hours = prompt("Hora de inicio", inhour);
  if (start_hours != null) {
    //mm = (date.getMinutes() + 100).toString().substring(1);
    //inhourint = start_hours.toString().substring(0,2);
    close_date = d + "/" + m + "/" + y + " " + h + ":" + mm + "";
    hour = h;
    if (hour < 10){
      hour = "0" + hour ;
    }
    onsitemsg = type + " " + y + "-" + m + "-" + d + " (" + w + " " + start_hours + " a " + hour + ":" + mm + ")";
    end = h+':'+mm;
    s = start_hours.split(':');
    e = end.split(':');
    min = e[1]-s[1];
    hour = 0;
    if(min < 0){
        min += 60;
        hour += 1;
    }
    min+=100;
    estimate = e[0] -s[0] - hour + "," + min.toString().substring(1,2);    
    //Categoría: Administración y Operaciones
    fnc_select_option("vTAREACATEGORIAID", 21);
    //Tipo tarea: Registro de horas
    fnc_select_option("vTAREATIPOTAREAID", 29);
    //Contacto: Giorello/Fabian
    //fnc_select_option("vTAREATIPOTAREAID", id);
    //Hrs. Estimadas: 
    fnc_set_value("vTAREAESTHRS", estimate);
    //vTAREAESTFCHFIN
    fnc_set_value("vTAREAESTFCHFIN", close_date);
    //vTAREALINEAHRINI
    fnc_set_value("vTAREALINEAHRINI", d +"/"+ m +"/"+ y + start_hours);
    //vTAREALINEAHRFIN
    fnc_set_value("vTAREALINEAHRFIN", close_date);
    //vTAREATITDSC
    fnc_set_value("vTAREATITDSC", onsitemsg);
    //vTAREAESTID
    fnc_select_option("vTAREAESTID", "FIN");
    //vTAREADSC
    fnc_set_value("vTAREADSC", "");
    // Contenido
    $('iframe').contents().find('body').prepend(onsitemsg);
    // Para el tipo remoto cambiamos la modalidad
    if (type.toUpperCase() == "REMOTO") {
      //vTAREALINEAMODALIDAD
      fnc_select_option("vTAREALINEAMODALIDAD", "REMOTO");
    }
  }
}

function fnc_create_drop_down(id, name, text){
  $(".gx-content-placeholder").prepend(' \
    <div class="dropdown"> \
      <input id="btn' + id + '" type="button" value="' + name + ' ¬ " class="SpecialButtons own_btn" /> \
      <div id="myDropdown' + id + '" class="dropdown-content"> \
        <input type="text" placeholder="' + text + '..." id="myInput' + id + '" class="myInputDropDown" /> \
      </div> \
    </div> \
  ');
  $("#btn" + id).click(function(){ 
    document.getElementById("myDropdown" + id).classList.toggle("show");  
  });
  $("#myInput" + id).keyup(function(){ 
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput" + id);
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown" + id);
    a = div.getElementsByTagName("a");   
    for (i = 0; i < a.length; i++) {     
      txtValue = a[i].textContent || a[i].innerText;     
      if (txtValue.toUpperCase().indexOf(filter) > -1) {       
        a[i].style.display = "";     
      } else {      
        a[i].style.display = "none";     
      }   
    }  
  });
}



$(document).ready(function () {  
  $.getJSON( "http://reportes.knowhow.com.uy/js/ssi.json", function(data) {
    prefix = data;
    // Usuario del sistema
    username = $("#TXT_CONTACTOUSUID_MPAGE").text();
    // Creamos el dropdown para el boton remoto
    btn_remote = "Remoto"
    fnc_create_drop_down(btn_remote, btn_remote.toUpperCase(), "Buscar cliente");
    // Creamos el dropdown para el boton onsite
    btn_onsite = "OnSite"
    fnc_create_drop_down(btn_onsite, btn_onsite.toUpperCase(), "Buscar cliente");

    // Recorremos el select con los clientes para llenar la lista del dropdown para los botones
    $("#vTAREACLIENTEID > option").map(function() {
      client_id = $(this).val();
      if (client_id != 0) {
        // Llenamos la lista para el boton remoto
        btn_remote_client = $("<a href=\"#\" id=\"remote-client-" + client_id + "\" class=\"ignore-click\">" + $(this).text() + "</a>");
        // Funcion a ejecutar cuando se presione con un click el elemento
        btn_remote_client.click(function(){
          // Mostramos el contenido del dropdown
          document.getElementById("myDropdown" + btn_remote).classList.toggle("show");
          // Limpiamos posible residuo del input
          $("#myInput" + btn_remote).val("");
          // Activamos el select del cliente con el seleccionado por el usuario
          $('#vTAREACLIENTEID option:contains("' + $(this).text() + '")').attr("selected", true);
          // Ejecutamos la funcion onsite con el tipo remoto
          fnc_onsite("Remoto");
          // Buscamos para el cliente seleccionado el contacto
          fnc_select_option("vTAREACONTACTOID", fnc_get_onsite_contact_id(username));
          setTimeout(function(){
            //vTAREACONTACTOID
            fnc_select_option("vTAREACONTACTOID", fnc_get_onsite_contact_id(username));
          }, 4000);
        });
        $("#myDropdown" + btn_remote).append(btn_remote_client);  

        // Llenamos la lista para el boton onsite
        btn_onsite_client = $("<a href=\"#\" id=\"onsite-client-" + client_id + "\" class=\"ignore-click\">" + $(this).text() + "</a>");
        // Funcion a ejecutar cuando se presione con un click el elemento
        btn_onsite_client.click(function(){
          // Mostramos el contenido del dropdown
          document.getElementById("myDropdown" + btn_onsite).classList.toggle("show");
          // Limpiamos posible residuo del input
          $("#myInput" + btn_onsite).val("");
          // Activamos el select del cliente con el seleccionado por el usuario
          $('#vTAREACLIENTEID option:contains("' + $(this).text() + '")').attr("selected", true);
          // Ejecutamos la funcion onsite con el tipo común
          fnc_onsite("On-Site");
          // Buscamos para el cliente seleccionado el contacto
          fnc_select_option("vTAREACONTACTOID", fnc_get_onsite_contact_id(username));
          setTimeout(function(){
            //vTAREACONTACTOID
            fnc_select_option("vTAREACONTACTOID", fnc_get_onsite_contact_id(username));
          }, 4000);
        });
        $("#myDropdown" + btn_onsite).append(btn_onsite_client);
      }
    }).get();



    // Creamos el dropdown para el boton normal remoto
    btn_new_remote = "TK-Remoto"
    fnc_create_drop_down(btn_new_remote, btn_new_remote.toUpperCase(), "Buscar prefijo");

    // Creamos el dropdown para el boton normal
    btn_new_ticket = "TK-ONSITE"
    fnc_create_drop_down(btn_new_ticket, btn_new_ticket.toUpperCase(), "Buscar prefijo");

    $.each(prefix, function(index, value){
      btn_remote_prefix = $("<a href=\"#\" id=\"remote-prefix-" + index + "\" class=\"ignore-click\">" + value.prefix + "</a>");
      btn_remote_prefix.click(function(){
        document.getElementById("myDropdown" + btn_new_remote).classList.toggle("show");
        $("#myInput" + btn_new_remote).val("");
        fnc_fill_lnx_adm();
        setTimeout(function(){
          //vTAREACONTACTOID
          fnc_select_option("vTAREACONTACTOID", value.id);
        }, 2000);
        //vTAREALINEAHRFIN
        fnc_set_value("vTAREALINEAHRFIN", close_date);
        //vTAREATITDSC
        //fnc_set_value("vTAREATITDSC", value.prefix );
        fnc_set_value("vTAREATITDSC", value.prefix + ": xxxx [HG#tickid]");
        //vTAREALINEAMODALIDAD
        fnc_select_option("vTAREALINEAMODALIDAD", "REMOTO");
        setTimeout(function(){
          //vTAREACONTACTOID
          fnc_select_option("vTAREACONTACTOID", value.id);
        }, 4000);
      });
      $("#myDropdown" + btn_new_remote).append(btn_remote_prefix);

      btn_tk_prefix = $("<a href=\"#\" id=\"tk-prefix-" + index + "\" class=\"ignore-click\">" + value.prefix + "</a>");
      btn_tk_prefix.click(function(){
        document.getElementById("myDropdown" + btn_new_ticket).classList.toggle("show");
        $("#myInput" + btn_new_ticket).val("");
        fnc_fill_lnx_adm();
        setTimeout(function(){
          //vTAREACONTACTOID
          fnc_select_option("vTAREACONTACTOID", value.id);
        }, 2000);
        //vTAREALINEAHRFIN
        fnc_set_value("vTAREALINEAHRFIN", close_date);
        //vTAREATITDSC
        //fnc_set_value("vTAREATITDSC", value.prefix);
        fnc_set_value("vTAREATITDSC", value.prefix + ": xxxx [HG#tickid]");
        //vTAREALINEAMODALIDAD
        //fnc_select_option("vTAREALINEAMODALIDAD", "REMOTO");
        setTimeout(function(){
          //vTAREACONTACTOID
          fnc_select_option("vTAREACONTACTOID", value.id);
        }, 4000);
      });
      $("#myDropdown" + btn_new_ticket).append(btn_tk_prefix);
    });
  // cierre de ajax
  });
  
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
    if (minutes < 10){
      minutes = "0" + minutes 
    }
    current_date = d + "/" + m + "/" + y + " " + hours + ":" + minutes;
    if($("#run_timer").is(':checked')){
      $('#vTAREALINEAHRFIN').val(current_date);
    }
    
  },1000);
    
});