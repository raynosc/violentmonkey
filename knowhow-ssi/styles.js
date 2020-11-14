// ==UserScript==
// @name     SSI Styles
// @include  http://ssi.knowhow.com.uy/*
// @grant    GM_addStyle
// @run-at   document-end
// ==/UserScript==

GM_addStyle ( `

.own_btn { color: white; }

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #3e8e41;
}

.myInputDropDown {
  box-sizing: border-box;
  background-image: url('https://img.icons8.com/small/16/000000/search.png');
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 12px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.myInputDropDown:focus {outline: 3px solid #ddd;}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 250px;
  overflow: auto;
  border: 1px solid #ddd;
  z-index: 1;

  margin:2px; 
  padding:2px;  
  height: 350px;  
  text-align:justify; 
}

.dropdown-content a {
  color: black;
  padding: 12px 12px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}

`);

//$("#TEXTBLOCKHEADER1_MPAGE").css("font-size", "50.0pt");