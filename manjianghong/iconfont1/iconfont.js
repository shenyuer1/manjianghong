(function(window){var svgSprite='<svg><symbol id="icon-dianhua" viewBox="0 0 1000 1000"><path d="M923.2149 749.336l-67.0853 130.9882c-477.3839 13.6947-745.8709-532.8347-745.8709-532.8347l46.5923-221.9865 139.8759-44.4069L436.6019 303.0815l-108.0702 69.0672 341.1307 286.14 46.6413-88.7648 186.4682 133.1727L923.2149 749.336z"  ></path></symbol><symbol id="icon-dingwei-copy" viewBox="0 0 1024 1024"><path d="M247.315612 652.624784C246.409949 651.427516 248.107683 653.821029 247.315612 652.624784L247.315612 652.624784z"  ></path><path d="M511.714998 65.155952c-195.241519 0-353.429649 157.760047-353.429649 352.257809 0 89.567945 34.849097 173.042101 90.054635 235.211023l229.337432 289.200658c18.023207 22.730701 47.585688 22.652929 65.68667 0l228.426652-289.200658c57.928667-62.71025 93.319116-143.210679 93.319116-235.211023C865.10883 222.914976 706.916606 65.155952 511.714998 65.155952zM511.714998 593.928964c-97.869945 0-177.140537-78.996169-177.140537-176.515203 0-97.480148 79.270593-176.514179 177.140537-176.514179 97.794217 0 177.102674 79.034031 177.102674 176.514179C688.816648 514.932796 609.509215 593.928964 511.714998 593.928964z"  ></path></symbol><symbol id="icon-feiji" viewBox="0 0 1024 1024"><path d="M960 206.507L63.448 415.449l163.355 155.757 630.625-311.514-569.842 372.297v182.349l91.175-91.175 91.175 91.175L960 206.507z"  ></path></symbol><symbol id="icon-email" viewBox="0 0 1024 1024"><path d="M44.8 234.666667c0 4.266667-2.133333 10.666667-2.133333 17.066666v522.666667c0 6.4 2.133333 12.8 4.266666 17.066667l305.066667-294.4L44.8 234.666667z m881.066667 595.2c4.266667 0 10.666667 0 14.933333-2.133334l-309.333333-298.666666-119.466667 98.133333-119.466667-98.133333-309.333333 298.666666c4.266667 2.133333 10.666667 2.133333 14.933333 2.133334h827.733334zM512 558.933333l121.6-98.133333L940.8 198.4c-4.266667-2.133333-10.666667-2.133333-14.933333-2.133333H98.133333c-6.4 0-10.666667 0-14.933333 2.133333l307.2 264.533333 121.6 96z m465.066667 232.533334c2.133333-6.4 4.266667-10.666667 4.266666-17.066667V251.733333c0-6.4-2.133333-10.666667-2.133333-17.066666L672 497.066667l305.066667 294.4z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)