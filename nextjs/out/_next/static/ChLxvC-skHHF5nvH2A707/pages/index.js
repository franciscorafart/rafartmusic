(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),s=n("O40h"),i=n("rm7x"),u=n("zCU7"),c=i.a;c.getInitialProps=Object(s.a)(a.a.mark(function e(){var t,n,r,s,i,c,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.fetch('*[_type == "albums"]{title, name, slug, releaseType, description, cover, spotify, soundcloud}');case 2:return t=e.sent,e.next=5,u.a.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');case 5:return n=e.sent,e.next=8,u.a.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');case 8:return r=e.sent,e.next=11,u.a.fetch('*[_type == "generalAssets" && slug.current == "menu-background"][0]{title, mainImage}');case 11:return s=e.sent,e.next=14,u.a.fetch('*[_type == "menu"]{title, slug, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');case 14:return i=e.sent,e.next=17,u.a.fetch('*[_type == "videos"]{link, title, slug, artist, description, title}');case 17:return c=e.sent,e.next=20,u.a.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');case 20:return o=e.sent,e.abrupt("return",{albums:t,coverImage:n,menu:i,logo:r,menuBackground:s,videos:c,favicon:o,page:"home"});case 22:case"end":return e.stop()}},e)})),t.default=c},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);