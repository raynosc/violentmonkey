// ==UserScript==
// @name     MySQL-Repo
// @include  http://repo.mysql.com/*
// @grant    GM_addStyle
// @run-at   document-end
// ==/UserScript==

GM_addStyle ( `
body {
	background: #eee;
	margin: 33px;
	color: #333;
	}
h1 {
	font: 2.0em Georgia, serif;
	}
h1 a:hover, h1 a:active {
	text-decoration: none;
	}
a{
  width: 100%;
  max-width: 320px; /* Will be AT MOST 320px wide */
}
a:link {
	text-decoration: none;
	color: #555;
	}
a:visited {
	text-decoration: none;
	color: #777;
	}
a:hover, a:active {
	text-decoration: underline;
	color: maroon;
	}
pre {
	font: 0.9em/1.3em "Courier New", Courier;
	margin: 3px 0;
	color: #777;
	}
pre img {
	display: none;
	}
img {
	margin: 3px 0;
}
pre a {
 width:600px;
}
`);
/*
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'example.css';
cssNode.media = 'screen';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);
*/
var links, i, le;
links = document.getElementsByTagName('a');
for (i = 0, le = links.length; i < le; i++) {
    links[i].textContent = links[i].href;
}