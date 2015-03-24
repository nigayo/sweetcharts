'use strict';
require.config({
    baseUrl:"../build",
    paths : {},
    waitSeconds: 15
});

require(["sweet_pie.min", "sweet_donut.min"], function (PIE, Donut) {

      new PIE( document.querySelector(".row-first > .chart-wrap:first-child "), {
        core : {
          // centerX:50, //default: center
          // centerY:200, //default: center 
          radius:150,
          nMilliSecondCycle:500,
          sRandomColorType : "b" //default: user custom value
        }, 
        htPiece : {
         "Chrome(all)"  : {"data" : 46.08, "color" : "green"},
         "Firefox 5+"   : {"data" : 17.67, "color" : "orange"},
         "IE(all)"      : {"data" : 20.78, "color" : "dodgerblue"},
         "safari 7.0"   : {"data" : 10.36, "color" : "skyblue"},
         "opera"        : {"data" : 2, "color" : "red"},
       }
     }).runAnimation();

      new PIE( document.querySelector(".row-first> .chart-wrap:last-child "), {
        core : {
          // centerX:50, //default: center
          // centerY:200, //default: center 
          radius:150,
          nMilliSecondCycle:500,
          sRandomColorType : "c" //default: user custom value
        }, 
        htPiece : {
         "WEBUI"          : {"data" : 33, "color" : "red"},
         "WEBServer"      : {"data" : 23, "color" : "blue"},
         "DBMaster"       : {"data" : 3,  "color" : "grey"},
         "DBMaster2"       : {"data" : 33,  "color" : "grey"},
         "DBMaster3"       : {"data" : 13,  "color" : "grey"},
         "ProjectManager" : {"data" : 13.3, "color" : "green"},
         "ProjectManager2" : {"data" : 33.3, "color" : "green"},
         "ProjectManager3" : {"data" : 13.3, "color" : "green"},
         "Designer"       : {"data" : 33, "color" : "magenta"},
         "Designer2"       : {"data" : 43, "color" : "magenta"},
         "Designer3"       : {"data" : 63, "color" : "magenta"},
       }
     }).runAnimation();

      new Donut( document.querySelector(".row-second> .chart-wrap:first-child "), {
        core : {
          radius:150,
          nMilliSecondCycle:500,
          sRandomColorType : "b" //default: user custom value
        }, 
        htPiece : {
         "WEBUI"          : {"data" : 33, "color" : "red"},
         "WEBServer"      : {"data" : 23, "color" : "blue"},
         "DBMaster"       : {"data" : 3,  "color" : "grey"},
         "DBMaster2"       : {"data" : 33,  "color" : "grey"},
         "DBMaster3"       : {"data" : 13,  "color" : "grey"},
         "ProjectManager2" : {"data" : 33.3, "color" : "green"},
         "ProjectManager3" : {"data" : 13.3, "color" : "green"},
         "Designer"       : {"data" : 33, "color" : "magenta"},
         "Designer2"       : {"data" : 43, "color" : "magenta"},
         "Designer3"       : {"data" : 63, "color" : "magenta"},
       }
      }).runAnimation();

      new Donut( document.querySelector(".row-second> .chart-wrap:last-child "), {
        core : {
          radius:150,
          nMilliSecondCycle:500,
          sRandomColorType : "d" //default: user custom value
        }, 
        htPiece : {
         "WEBUI"          : {"data" : 43, "color" : "red"},
         "WEBServer"      : {"data" : 23, "color" : "blue"},
         "DBMaster"       : {"data" : 12,  "color" : "grey"},
         "DBMaster2"       : {"data" : 43,  "color" : "grey"},
         "DBMaster3"       : {"data" : 13,  "color" : "grey"},
         "ProjectManager" : {"data" : 23.3, "color" : "green"},
         "ProjectManager2" : {"data" : 33.3, "color" : "green"},
         "ProjectManager3" : {"data" : 23.3, "color" : "green"},
         "Designer"       : {"data" : 73, "color" : "magenta"},
         "Designer2"       : {"data" : 43, "color" : "magenta"},
         "Designer3"       : {"data" : 63, "color" : "magenta"},
       }
      }).runAnimation();
});