var h=this;var i=Array.prototype,l=i.indexOf?function(a,c,b){return i.indexOf.call(a,c,b)}:function(a,c,b){b=b==null?0:b<0?Math.max(0,a.length+b):b;if(typeof a=="string"){if(typeof c!="string"||c.length!=1)return-1;return a.indexOf(c,b)}for(b=b;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},m=i.forEach?function(a,c,b){i.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=typeof a=="string"?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)};function n(a,c){var b=0;a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");c=String(c).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var d=Math.max(a.length,c.length),e=0;b==0&&e<d;e++){var f=a[e]||"",g=c[e]||"",I=new RegExp("(\\d*)(\\D*)","g"),J=new RegExp("(\\d*)(\\D*)","g");do{var j=I.exec(f)||["","",""],k=J.exec(g)||["","",""];if(j[0].length==0&&k[0].length==0)break;b=o(j[1].length==0?0:parseInt(j[1],10),k[1].length==0?0:parseInt(k[1],10))||o(j[2].length==0,k[2].length==0)||o(j[2],
k[2])}while(b==0)}return b}function o(a,c){if(a<c)return-1;else if(a>c)return 1;return 0};var p,q,r,s;function t(){return h.navigator?h.navigator.userAgent:null}s=r=q=p=false;var u;if(u=t()){var v=h.navigator;p=u.indexOf("Opera")==0;q=!p&&u.indexOf("MSIE")!=-1;r=!p&&u.indexOf("WebKit")!=-1;s=!p&&!r&&v.product=="Gecko"}var w=q,x=s,y=r,z,A="",B;if(p&&h.opera){var C=h.opera.version;A=typeof C=="function"?C():C}else{if(x)B=/rv\:([^\);]+)(\)|;)/;else if(w)B=/MSIE\s+([^\);]+)(\)|;)/;else if(y)B=/WebKit\/(\S+)/;if(B){var D=B.exec(t());A=D?D[1]:""}}z=A;var E={};function F(a,c,b,d){d=d||a;c=c&&c!="*"?c.toUpperCase():"";if(d.querySelectorAll&&(c||b)&&(!y||a.compatMode=="CSS1Compat"||E["528"]||(E["528"]=n(z,"528")>=0)))return d.querySelectorAll(c+(b?"."+b:""));if(b&&d.getElementsByClassName){a=d.getElementsByClassName(b);if(c){d={};for(var e=0,f=0,g;g=a[f];f++)if(c==g.nodeName)d[e++]=g;d.length=e;return d}else return a}a=d.getElementsByTagName(c||"*");if(b){d={};for(f=e=0;g=a[f];f++){c=g.className;if(typeof c.split=="function"&&l(c.split(/\s+/),b)>=0)d[e++]=
g}d.length=e;return d}else return a}var G={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},H={IMG:" ",BR:"\n"};function K(a){if(w&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var c=[];L(a,c,true);a=c.join("")}a=a.replace(/\xAD/g,"");a=a.replace(/ +/g," ");if(a!=" ")a=a.replace(/^\s*/,"");return a}
function L(a,c,b){if(!(a.nodeName in G))if(a.nodeType==3)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else if(a.nodeName in H)c.push(H[a.nodeName]);else for(a=a.firstChild;a;){L(a,c,b);a=a.nextSibling}};function M(a){var c=new RegExp("(^|[\\s\"])'([^']*)'($|[\\s\".,;:?!])","g");a=a.replace(c,"$1\u2018$2\u2019$3");a=a.replace(c,"$1\u2018$2\u2019$3");m([{a:"\\.\\.\\.",replace:"\u2026"},{a:"'",replace:"\u2019"},{a:'"($|[\\s.,;:?!])',replace:"\u201d$1"},{a:'(^|[\\s-])"',replace:"$1\u201c"},{a:"---",replace:"\u2014"},{a:"--",replace:"\u2013"}],function(b){a=a.replace(new RegExp(b.a,"g"),b.replace)});return a};function N(a,c){var b=c||{},d=b.uglyTags||[],e=b.uglyClass||"";if(a==null)return null;b=a.cloneNode(true);if(a.nodeType==3){c=M(K(b));if("textContent"in b)b.textContent=c;else if(b.firstChild&&b.firstChild.nodeType==3){for(;b.lastChild!=b.firstChild;)b.removeChild(b.lastChild);b.firstChild.data=c}else{for(;a=b.firstChild;)b.removeChild(a);b.appendChild((b.nodeType==9?b:b.ownerDocument||b.document).createTextNode(c))}}else if(!(l(d,a.nodeName.toLowerCase())>=0)&&!(a.className&&a.className==e)){a=b.childNodes;
for(d=0;d<a.length;d++){e=N(a[d],c);var f=a[d],g=f.parentNode;g&&g.replaceChild(e,f)}}return b};window.prettify=function(){for(var a=F(document,null,"prettify",void 0),c={uglyTags:["code","pre","script"],uglyClass:"keepugly"},b=0;b<a.length;b++){var d=N(a[b],c),e=a[b],f=e.parentNode;f&&f.replaceChild(d,e)}};window.prettifyTextInputs=function(){var a=F(document,"textarea",void 0,void 0);m(a,function(c){c.value=M(c.value)});a=F(document,"input",void 0,void 0);m(a,function(c){if(c.type=="text")c.value=M(c.value)})};window.prettifyStr=M;window.prettifyHtml=N;
