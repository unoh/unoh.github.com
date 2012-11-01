
var SUN_JAVAFX_ALREADY_INCLUDED_DTFX_JS_;if(typeof(SUN_JAVAFX_ALREADY_INCLUDED_DTFX_JS_)=="undefined"){SUN_JAVAFX_ALREADY_INCLUDED_DTFX_JS_="Already Loaded";var dtfxObject={browserIDs:[{id:"MSIE",varsToSearch:[navigator.userAgent],stringsToFind:["MSIE"]},{id:"Chrome",varsToSearch:[navigator.userAgent,navigator.vendor],stringsToFind:["Chrome","Google"]},{id:"Safari",varsToSearch:[navigator.userAgent,navigator.vendor],stringsToFind:["Safari","Apple Computer"]},{id:"Opera",varsToSearch:[navigator.userAgent],stringsToFind:["Opera"]},{id:"Netscape Family",varsToSearch:[navigator.appName],stringsToFind:["Netscape"]}],OSIDs:[{id:"Windows",varsToSearch:[navigator.userAgent],stringsToFind:["Windows"]},{id:"Mac",varsToSearch:[navigator.userAgent],stringsToFind:["Mac OS X"]},{id:"Linux",varsToSearch:[navigator.userAgent],stringsToFind:["Linux"]},{id:"UNIX",varsToSearch:[navigator.userAgent],stringsToFind:["X11"]}],NoJava:[],NoJavaDownload:[{id:"Mac",varsToSearch:[navigator.userAgent],stringsToFind:["Mac OS X"]}],browsersSupportingDirectJavaAccess:["Opera","Netscape Family"],browsersSupportingActiveX:["MSIE"],activeXVersionList:["1.8.0","1.7.0","1.6.0","1.5.0","1.4.2"],findEntryInList:function(listToUse){var myID=null;for(var i=0;i<listToUse.length;i++){var match=true;for(var j=0;j<listToUse[i].varsToSearch.length;j++){if(listToUse[i].varsToSearch[j].indexOf(listToUse[i].stringsToFind[j],0)==-1){match=false;break;}}
if(match){myID=listToUse[i].id;break;}}
return myID;},thisBrowser:null,getBrowser:function(){if(null===dtfxObject.thisBrowser){dtfxObject.thisBrowser=dtfxObject.findEntryInList(dtfxObject.browserIDs);if(null===dtfxObject.thisBrowser){dtfxObject.thisBrowser="unknown";}}
return dtfxObject.thisBrowser;},thisBrowserCanAccessJava:null,browserCanAccessJava:function(){if(null===dtfxObject.thisBrowserCanAccessJava){var browser=dtfxObject.getBrowser();dtfxObject.thisBrowserCanAccessJava=false;for(var i=0;i<dtfxObject.browsersSupportingDirectJavaAccess.length;++i){if(browser==dtfxObject.browsersSupportingDirectJavaAccess[i]){dtfxObject.thisBrowserCanAccessJava=true;break;}}}
return dtfxObject.thisBrowserCanAccessJava;},thisBrowserHasActiveX:null,browserHasActiveX:function(){if(null===dtfxObject.thisBrowserHasActiveX){var browser=dtfxObject.getBrowser();dtfxObject.thisBrowserHasActiveX=false;if(null!=window.ActiveXObject){for(var i=0;i<dtfxObject.browsersSupportingActiveX.length;++i){if(browser==dtfxObject.browsersSupportingActiveX[i]){dtfxObject.thisBrowserHasActiveX=true;break;}}}}
return dtfxObject.thisBrowserHasActiveX;},thisJavaVersion:null,getJavaVersion:function(){if(null===dtfxObject.thisJavaVersion){if(dtfxObject.browserCanAccessJava()&&(typeof java=="object")){dtfxObject.thisJavaVersion=java.lang.System.getProperty("java.version");}
if((null===dtfxObject.thisJavaVersion)&&(dtfxObject.browserHasActiveX())){for(var v=0;v<dtfxObject.activeXVersionList.length;v++){try{var axo=new ActiveXObject("JavaWebStart.isInstalled."+
dtfxObject.activeXVersionList[v]+".0");dtfxObject.thisJavaVersion=dtfxObject.activeXVersionList[v];break;}catch(ignored){}}}
if(null===dtfxObject.thisJavaVersion){var bestVersionSeen=null;for(var i=0;i<navigator.mimeTypes.length;i++){var s=navigator.mimeTypes[i].type;var m=s.match(/^application\/x-java-applet;jpi-version=(.*)$/);if(m!==null){dtfxObject.thisJavaVersion=m[1];break;}
m=s.match(/^application\/x-java-applet;version=(.*)$/);if(m!==null){if((null===bestVersionSeen)||(m[1]>bestVersionSeen)){bestVersionSeen=m[1];}}}
if((null===dtfxObject.thisJavaVersion)&&(null!==bestVersionSeen)){dtfxObject.thisJavaVersion=bestVersionSeen;}}
if(null===dtfxObject.thisJavaVersion){dtfxObject.thisJavaVersion="0 - unknown";}}
return dtfxObject.thisJavaVersion;},thisOSName:null,getSystemOS:function(){if(null===dtfxObject.thisOSName){dtfxObject.thisOSName=dtfxObject.findEntryInList(dtfxObject.OSIDs);if(null===dtfxObject.thisOSName){dtfxObject.thisOSName="unknown";}}
return dtfxObject.thisOSName;},thisMacOSVersion:null,getMacOSVersion:function(){if(null===dtfxObject.thisMacOSVersion){if("Mac"!=dtfxObject.getSystemOS()){dtfxObject.thisMacOSVersion="Not Mac";}
else{if(dtfxObject.browserCanAccessJava()){dtfxObject.thisMacOSVersion=java.lang.System.getProperty("os.version");}
if(null===dtfxObject.thisMacOSVersion){var av=navigator.appVersion;var m=av.match(/Mac OS X ([0-9_]*);/);if(null!==m){dtfxObject.thisMacOSVersion=m[1];dtfxObject.thisMacOSVersion=dtfxObject.thisMacOSVersion.split("_").join(".");}}}
if(null===dtfxObject.thisMacOSVersion){dtfxObject.thisMacOSVersion="unknown";}}
return dtfxObject.thisMacOSVersion;},overlayCount:0,nameSeed:0,getBogusJarFileName:function(){if(0===dtfxObject.nameSeed){dtfxObject.nameSeed=(new Date()).getTime();}
var uniqueNum=dtfxObject.nameSeed++;return"emptyJarFile-"+uniqueNum;},isVersionAvailable:function(){var ret=true;if(("Safari"==dtfxObject.getBrowser())&&("Mac"==dtfxObject.getSystemOS())&&(dtfxObject.getMacOSVersion().indexOf("10.4",0)===0)){ret=false;}
return ret;},javaSupport:null,getJavaSupportExists:function(){if(null===dtfxObject.javaSupport){var noSupportName=dtfxObject.findEntryInList(dtfxObject.NoJava);if(null===noSupportName){dtfxObject.javaSupport=true;}
else{dtfxObject.javaSupport=false;}}
return dtfxObject.javaSupport;},javaDownloadSupport:null,getJavaDownloadSupportExists:function(){if(null===dtfxObject.javaDownloadSupport){var noSupportName=dtfxObject.findEntryInList(dtfxObject.NoJavaDownload);if(null===noSupportName){dtfxObject.javaDownloadSupport=true;}
else{dtfxObject.javaDownloadSupport=false;}}
return dtfxObject.javaDownloadSupport;},errorMessageBoxes:null,errorMessageWidths:null,errorMessageHeights:null,onloadHandlerQueued:false,smallErrorCode:"",onloadCheckErrorDisplay:function(){var boxId;var width;var height;while(dtfxObject.errorMessageBoxes.length>0){boxId=dtfxObject.errorMessageBoxes.pop();width=dtfxObject.errorMessageWidths.pop();height=dtfxObject.errorMessageHeights.pop();var tableForBox=document.getElementById(boxId);if((tableForBox.offsetHeight!=height)||(tableForBox.offsetWidth!=width)){tableForBox.rows.item(0).cells.item(0).innerHTML=dtfxObject.smallErrorCode;}}},javafxString:function(launchParams,appletParams){var stringOutput="";var errorMessageToUser="";if(!dtfxObject.getJavaSupportExists()){errorMessageToUser="Java is not supported on your system.";}
else if(dtfxObject.isVersionAvailable()){var javaVersion=dtfxObject.getJavaVersion();if(("V"+javaVersion)<"V1.5"){if("Mac"==dtfxObject.getSystemOS()){var osVersion=dtfxObject.getMacOSVersion();if(("V"+osVersion)<"V10.4"){errorMessageToUser="JavaFX requires Java 5.0 (1.5) or above.\n"+"Mac OS version "+osVersion+" does not support this Java version\n"+"Please upgrade your OS to 10.5 (Leopard) in order to run this application.";}
else{errorMessageToUser="JavaFX requires Java 5.0 (1.5) or above.\n"+"Please use Software Update to upgrade your Java version.";}}
else{errorMessageToUser="The current version of Java on this system ("+
javaVersion+") does not support JavaFX.\n";}}}
var standardArchives=new Array("applet-launcher","javafx-rt","fxdloader","jmc");switch(dtfxObject.getSystemOS()){case"Mac":standardArchives.push("Decora-SSE");standardArchives.push("Decora-JOGL");break;case"Windows":standardArchives.push("Decora-SSE");break;case"Linux":break;}
standardArchives.push(""+dtfxObject.getBogusJarFileName());var versionNumber="1.1.0";var appletPlayer="org.jdesktop.applet.util.JNLPAppletLauncher";var tagLeadChar="<";var tagEndChar=">";var carriageReturn="\n";var appletTagParams={};appletTagParams.code=appletPlayer;var params={};params.codebase_lookup="false";params["subapplet.classname"]="com.sun.javafx.runtime.adapter.Applet";params.progressbar="false";params.classloader_cache="false";var key="";if(typeof launchParams!="string"){for(key in launchParams){switch(key.toLocaleLowerCase()){case"jnlp_href":params.jnlp_href=launchParams[key];break;case"version":versionNumber=launchParams[key];break;case"code":params.MainJavaFXScript=launchParams[key];break;case"name":params["subapplet.displayname"]=launchParams[key];break;case"draggable":params[key]=launchParams[key];break;case"displayhtml":if(launchParams[key]){tagLeadChar="&lt;";tagEndChar="&gt;";carriageReturn="<br>\n";}
break;default:appletTagParams[key]=launchParams[key];break;}}}else{appletTagParams.archive=launchParams;}
if(""!=errorMessageToUser){if(!document.getElementById('deployJava')){var script=document.createElement('script');script.id='deployJava';script.type='text/javascript';script.src='http://java.com/js/deployJava.js';var head=document.getElementsByTagName("head")[0];head.appendChild(script);}
var errId="errorWithJava"+(++dtfxObject.overlayCount);var w=appletTagParams.width;var h=appletTagParams.height;stringOutput+=tagLeadChar+'div id="JavaLaunchError" style="width:'+w+';height:'+h+';background:white"'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'table id="'+errId+'" width='+w+' height='+
h+' border=1 padding=0 margin=0'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'tr'+tagEndChar+tagLeadChar+'td align="center" valign="middle"'+tagEndChar+
carriageReturn;dtfxObject.smallErrorCode=tagLeadChar+'a href="javascript:dtfxObject.explainAndInstall('+"'"+errorMessageToUser+"'"+')"'+
tagEndChar;dtfxObject.smallErrorCode+=tagLeadChar+'img src="http://dl.javafx.com/java-coffee-cup-23x20.png'+'" border="0" width="23" height="20" alt="Java Coffee Cup"'+
tagEndChar;stringOutput+=dtfxObject.smallErrorCode;stringOutput+=" Java needed.  Click for details.";stringOutput+=tagLeadChar+'/a'+tagEndChar;dtfxObject.smallErrorCode+=tagLeadChar+'/a'+tagEndChar;stringOutput+=tagLeadChar+'/td'+tagEndChar+tagLeadChar+'/tr'+
tagEndChar+tagLeadChar+'/table'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'/div'+tagEndChar+carriageReturn;dtfxObject.errorMessageBoxes.push(errId);dtfxObject.errorMessageWidths.push(w);dtfxObject.errorMessageHeights.push(h);if(!dtfxObject.onloadHandlerQueued){if(window.attachEvent){window.attachEvent("onload",dtfxObject.onloadCheckErrorDisplay);}
else if(window.addEventListener){window.addEventListener("load",dtfxObject.onloadCheckErrorDisplay,false);}
else{document.addEventListener("load",dtfxObject.onloadCheckErrorDisplay,false);}}
return stringOutput;}
params.jnlpNumExtensions=2;params.jnlpExtension1="http://dl.javafx.com/jmc";if(versionNumber!==""){params.jnlpExtension1+="__V"+versionNumber+".jnlp";}else{params.jnlpExtension1+=".jnlp";}
params.jnlpExtension2="http://dl.javafx.com/Decora";if(versionNumber!==""){params.jnlpExtension2+="__V"+versionNumber+".jnlp";}else{params.jnlpExtension2+=".jnlp";}
if("Mac"==dtfxObject.getSystemOS()){params.jnlpNumExtensions=3;if(versionNumber!==""){params.jnlpExtension3="http://dl.javafx.com/jogl__V1.1.1a.jnlp";}else{params.jnlpExtension3="http://dl.javafx.com/jogl.jnlp";}}
if(params.jnlp_href===undefined){var loc=appletTagParams.archive.indexOf(".jar,");if(-1==loc){loc=appletTagParams.archive.lastIndexOf(".jar");}
if(-1!=loc){params.jnlp_href=appletTagParams.archive.substr(0,loc)+"_browser.jnlp";}}
for(var i=0;i<standardArchives.length;i++){appletTagParams.archive+=","+"http://dl.javafx.com/"+standardArchives[i];if(versionNumber!==""){appletTagParams.archive+="__V"+versionNumber;}
appletTagParams.archive+=".jar";}
if("Mac"==dtfxObject.getSystemOS()){if(versionNumber!==""){appletTagParams.archive+=",http://dl.javafx.com/jogl__V1.1.1a.jar"+",http://dl.javafx.com/gluegen-rt__V1.0b06a.jar";}else{appletTagParams.archive+=",http://dl.javafx.com/jogl.jar"+",http://dl.javafx.com/gluegen-rt.jar";}}
if(dtfxObject.fxOverlayEnabled()){var dtId="deployJavaApplet"+(++dtfxObject.overlayCount);params["deployJavaAppletID"]=dtId;var width=appletTagParams.width;var height=appletTagParams.height;var img='http://dl.javafx.com/';var imgWidth;var imgHeight;if(width>=100&&height>=100){img=img+'javafx-loading-100x100.gif';imgWidth=100;imgHeight=100;}else{img=img+'javafx-loading-25x25.gif';imgWidth=25;imgHeight=25;}
stringOutput+=tagLeadChar+'div id="'+dtId+'Overlay'+'" style="width:'+width+';height:'+height+';position:absolute;background:white"'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'table width='+width+' height='+
height+' border=0 padding=0 margin=0'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'tr'+tagEndChar+tagLeadChar+'td align="center" valign="middle"'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'img src="'+img+'" width='+
imgWidth+' imgHeight='+imgHeight+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'/td'+tagEndChar+tagLeadChar+'/tr'+
tagEndChar+tagLeadChar+'/table'+tagEndChar+
carriageReturn;stringOutput+=tagLeadChar+'/div'+tagEndChar+carriageReturn;stringOutput+=tagLeadChar+'div id="'+dtId+'" style="position:relative;left:-10000px"'+
tagEndChar+carriageReturn;}
stringOutput+=tagLeadChar+"APPLET MAYSCRIPT"+carriageReturn;for(key in appletTagParams){stringOutput+=key+"=";if(typeof appletTagParams[key]=="number"){stringOutput+=appletTagParams[key];}else{stringOutput+="\""+appletTagParams[key]+"\"";}
stringOutput+=carriageReturn;}
stringOutput+=tagEndChar+carriageReturn;if(appletParams){for(key in appletParams){params[key]=appletParams[key];}}
for(key in params){stringOutput+=tagLeadChar+"param name=\""+key+"\" value=\""+params[key]+"\""+
tagEndChar+carriageReturn;}
stringOutput+=tagLeadChar+"/APPLET"+tagEndChar+carriageReturn;if(dtfxObject.fxOverlayEnabled()){stringOutput+=tagLeadChar+"/div"+tagEndChar+carriageReturn;}
return stringOutput;},fxOverlayEnabled:function(){return(dtfxObject.getBrowser()!="Netscape Family"&&dtfxObject.getBrowser()!="Opera")||dtfxObject.getSystemOS()!="Mac";},explainAndInstall:function(explanation){if(dtfxObject.getJavaDownloadSupportExists()&&dtfxObject.getJavaSupportExists()){if(confirm(explanation+"\n"+"Install Java now?")){deployJava.returnPage=document.location;deployJava.installLatestJRE();}}
else{alert(explanation);}},initDtfx:function(){dtfxObject.errorMessageBoxes=new Array();dtfxObject.errorMessageWidths=new Array();dtfxObject.errorMessageHeights=new Array();window.onunload=function(){};}};dtfxObject.initDtfx();}
function javafx(launchParams,appletParams){var stringOutput=dtfxObject.javafxString(launchParams,appletParams);if(null!=stringOutput){document.write(stringOutput);}}
function javafxString(launchParams,appletParams){return dtfxObject.javafxString(launchParams,appletParams);}
function fxAppletStarted(id){document.getElementById(id+"Overlay").style.visibility="hidden";document.getElementById(id).style.left="0px";}