!function e(o,t,r){function n(a,s){if(!t[a]){if(!o[a]){var f="function"==typeof require&&require;if(!s&&f)return f(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=t[a]={exports:{}};o[a][0].call(l.exports,function(e){var t=o[a][1][e];return n(t||e)},l,l.exports,e,o,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(e,o,t){d3.json("./data/values_JunSep2015.json",function(e,o){function t(e){for(var o="#ccc",t=0;t<r.length;t++)if(e.properties.Name==r[t].neighborhood){var n=Number(r[t].wow);n>=-.5&&(o="#A45958"),n>=-.15&&(o="#b2e2e2"),n>=-.01&&(o="#66c2a4"),n>=.01&&(o="#2ca25f"),n>=.15&&(o="#006d2c"),n>=.5&&(o="#005824")}return{fillColor:o,fillOpacity:.7,opacity:.7,weight:1,color:"#fff"}}var r=o.values_JunSep2015;L.mapbox.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg";var n=L.mapbox.map("map","mapbox.light").setView([44.9654,-93.2691],11);$(document).ready(function(){$.getJSON("shapefiles/minneapolis_n.json",function(e){function o(e){var o=e.target,t=0;a.setLatLng(e.latlng);for(var i=0;i<r.length;i++)if(o.feature.properties.Name==r[i].neighborhood){if(r[i].wow<=-.5);else if(r[i].wow<=-.15);else if(r[i].wow<=-.01);else if(r[i].wow>=.01);else if(r[i].wow>=.15);else if(r[i].wow>=.5);0!=r[i].wow&&(t="<div style='font-weight:900;'>"+d3.format("%")(r[i].wow)+"</div>");break}a.setContent("<div class='countyName'>"+o.feature.properties.Name+"</div>"+t),a._map||a.openOn(n),o.setStyle({weight:3,opacity:.3,fillOpacity:.9}),L.Browser.ie||L.Browser.opera||o.bringToFront()}function i(e){merps.resetStyle(e.target),closeTooltip=window.setTimeout(function(){n.closePopup()},100)}merps=L.geoJson(e,{style:t,onEachFeature:function(e,t){t.on({mousemove:o,mouseout:i})}}).addTo(n);var a=new L.Popup({autoPan:!1});n.dragging.disable(),n.touchZoom.disable(),n.doubleClickZoom.disable(),n.scrollWheelZoom.disable()})})})},{}]},{},[1]);