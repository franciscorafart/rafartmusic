(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{PMsv:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums",function(){return t("jl0i")}])},jl0i:function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),r=t.n(a),s=t("O40h"),u=t("rm7x"),c=t("zCU7"),i=u.a;i.getInitialProps=Object(s.a)(r.a.mark(function e(){var n,t,a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');case 2:return n=e.sent,e.next=5,c.a.fetch('*[_type == "albums"]{title, name, slug, releaseType, year, description, cover, spotify, bandcamp, soundcloud}');case 5:return t=e.sent,e.next=8,c.a.fetch('*[_type == "menu"]{title, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');case 8:return a=e.sent,e.next=11,c.a.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');case 11:return s=e.sent,e.abrupt("return",{logo:n,albums:t,menu:a,favicon:s,page:"albums"});case 13:case"end":return e.stop()}},e)})),n.default=i}},[["PMsv",1,0]]]);