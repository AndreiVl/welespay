!function(e){e(window).on("load",function(){e(".brands-line").mCustomScrollbar({axis:"x",moveDragger:!0})})}(jQuery),$(document).ready(function(){var e=$(".cat__icons"),i=e.children(".cat__icon-card"),s=e.children(".cat__icon-list"),r=$(".cat__icons-big"),t=r.children(".cat__icon-card"),l=r.children(".cat__icon-list"),n=$(".cat"),o=$(".product");i.click(function(){if(i.hasClass("cat__icon-hide"))return!1;i.addClass("cat__icon-hide"),s.removeClass("cat__icon-hide"),n.removeClass("cat--list"),o.removeClass("product--list")}),s.click(function(){if(s.hasClass("cat__icon-hide"))return!1;s.addClass("cat__icon-hide"),i.removeClass("cat__icon-hide"),n.addClass("cat--list"),o.addClass("product--list")}),t.click(function(){if(t.hasClass("cat__icon-active"))return!1;t.addClass("cat__icon-active"),l.removeClass("cat__icon-active"),n.removeClass("cat--list"),o.removeClass("product--list")}),l.click(function(){if(l.hasClass("cat__icon-active"))return!1;l.addClass("cat__icon-active"),t.removeClass("cat__icon-active"),n.addClass("cat--list"),o.addClass("product--list")})}),$(document).ready(function(){jQuery("#slider-1").slider({min:0,max:35e3,values:[698,29698],range:!0,stop:function(e,i){jQuery("input#minCost-1").val(jQuery("#slider-1").slider("values",0)),jQuery("input#maxCost-1").val(jQuery("#slider-1").slider("values",1))},slide:function(e,i){jQuery("input#minCost-1").val(jQuery("#slider-1").slider("values",0)),jQuery("input#maxCost-1").val(jQuery("#slider-1").slider("values",1))}}),jQuery("input#minCost-1").change(function(){var e=jQuery("input#minCost-1").val(),i=jQuery("input#maxCost-1").val();parseInt(e)>parseInt(i)&&(e=i,jQuery("input#minCost-1").val(e)),jQuery("#slider-1").slider("values",0,e)}),jQuery("input#maxCost-1").change(function(){var e=jQuery("input#minCost-1").val(),i=jQuery("input#maxCost-1").val(),s=jQuery("#slider-1").slider("option","max");i>s&&(i=s,jQuery("input#maxCost-1").val(s)),parseInt(e)>parseInt(i)&&(i=e,jQuery("input#maxCost-1").val(i)),jQuery("#slider-1").slider("values",1,i)}),jQuery("#slider-2").slider({range:!0,values:[0,7e3],min:0,max:7e3,stop:function(e,i){jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0)),jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1))},slide:function(e,i){jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0)),jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1))}}),jQuery("input#minCost-2").change(function(){var e=jQuery("input#minCost-2").val(),i=jQuery("input#maxCost-2").val();parseInt(e)>parseInt(i)&&(e=i,jQuery("input#minCost-2").val(e)),jQuery("#slider-2").slider("values",0,e)}),jQuery("input#maxCost-2").change(function(){var e=jQuery("input#minCost-2").val(),i=jQuery("input#maxCost-2").val(),s=jQuery("#slider-2").slider("option","max");i>s&&(i=s,jQuery("input#maxCost-2").val(s)),parseInt(e)>parseInt(i)&&(i=e,jQuery("input#maxCost-2").val(i)),jQuery("#slider-2").slider("values",1,i)}),jQuery("#slider-3").slider({min:0,max:7e3,step:200,values:[0,7e3],range:!0,stop:function(e,i){jQuery("input#minCost-3").val(jQuery("#slider-3").slider("values",0)),jQuery("input#maxCost-3").val(jQuery("#slider-3").slider("values",1))},slide:function(e,i){jQuery("input#minCost-3").val(jQuery("#slider-3").slider("values",0)),jQuery("input#maxCost-3").val(jQuery("#slider-3").slider("values",1))}}),jQuery("input#minCost-3").change(function(){var e=jQuery("input#minCost-3").val(),i=jQuery("input#maxCost-3").val();parseInt(e)>parseInt(i)&&(e=i,jQuery("input#minCost-3").val(e)),jQuery("#slider-3").slider("values",0,e)}),jQuery("input#maxCost-3").change(function(){var e=jQuery("input#minCost-3").val(),i=jQuery("input#maxCost-3").val(),s=jQuery("#slider-3").slider("option","max");i>s&&(i=s,jQuery("input#maxCost-3").val(s)),parseInt(e)>parseInt(i)&&(i=e,jQuery("input#maxCost-3").val(i)),jQuery("#slider-3").slider("values",1,i)}),jQuery("#slider-1-mob").slider({min:0,max:35e3,values:[698,29698],range:!0,stop:function(e,i){jQuery("input#minCost-1-mob").val(jQuery("#slider-1-mob").slider("values",0)),jQuery("input#maxCost-1-mob").val(jQuery("#slider-1-mob").slider("values",1))},slide:function(e,i){jQuery("input#minCost-1-mob").val(jQuery("#slider-1-mob").slider("values",0)),jQuery("input#maxCost-1-mob").val(jQuery("#slider-1-mob").slider("values",1))}}),jQuery("input#minCost-1-mob").change(function(){var e=jQuery("input#minCost-1-mob").val(),i=jQuery("input#maxCost-1-mob").val();parseInt(e)>parseInt(i)&&(e=i,jQuery("input#minCost-1-mob").val(e)),jQuery("#slider-1-mob").slider("values",0,e)}),jQuery("input#maxCost-1-mob").change(function(){var e=jQuery("input#minCost-1-mob").val(),i=jQuery("input#maxCost-1-mob").val(),s=jQuery("#slider-1-mob").slider("option","max");i>s&&(i=s,jQuery("input#maxCost-1-mob").val(s)),parseInt(e)>parseInt(i)&&(i=e,jQuery("input#maxCost-1-mob").val(i)),jQuery("#slider-1-mob").slider("values",1,i)}),jQuery("#slider-2-mob").slider({min:0,max:7e3,values:[0,7e3],range:!0,stop:function(e,i){jQuery("input#minCost-2-mob").val(jQuery("#slider-2-mob").slider("values",0)),jQuery("input#maxCost-2-mob").val(jQuery("#slider-2-mob").slider("values",1))},slide:function(e,i){jQuery("input#minCost-2-mob").val(jQuery("#slider-2-mob").slider("values",0)),jQuery("input#maxCost-2-mob").val(jQuery("#slider-2-mob").slider("values",1))}}),jQuery("input#minCost-2-mob").change(function(){var e=jQuery("input#minCost-2-mob").val(),i=jQuery("input#maxCost-2-mob").val();parseInt(e)>parseInt(i)&&(e=i,jQuery("input#minCost-2-mob").val(e)),jQuery("#slider-2-mob").slider("values",0,e)}),jQuery("input#maxCost-2-mob").change(function(){var e=jQuery("input#minCost-2-mob").val(),i=jQuery("input#maxCost-2-mob").val(),s=jQuery("#slider-2-mob").slider("option","max");i>s&&(i=s,jQuery("input#maxCost-2-mob").val(s)),parseInt(e)>parseInt(i)&&(i=e,jQuery("input#maxCost-2-mob").val(i)),jQuery("#slider-2-mob").slider("values",1,i)}),jQuery("#slider-3-mob").slider({min:0,max:7e3,step:200,values:[800,5e3],range:!0,stop:function(e,i){jQuery("input#minCost-3-mob").val(jQuery("#slider-3-mob").slider("values",0)),jQuery("input#maxCost-3-mob").val(jQuery("#slider-3-mob").slider("values",1))},slide:function(e,i){jQuery("input#minCost-3-mob").val(jQuery("#slider-3-mob").slider("values",0)),jQuery("input#maxCost-3-mob").val(jQuery("#slider-3-mob").slider("values",1))}}),jQuery("input#minCost-3-mob").change(function(){var e=jQuery("input#minCost-3-mob").val(),i=jQuery("input#maxCost-3-mob").val();parseInt(e)>parseInt(i)&&(e=i,jQuery("input#minCost-3-mob").val(e)),jQuery("#slider-3-mob").slider("values",0,e)}),jQuery("input#maxCost-3-mob").change(function(){var e=jQuery("input#minCost-3-mob").val(),i=jQuery("input#maxCost-3-mob").val(),s=jQuery("#slider-3-mob").slider("option","max");i>s&&(i=s,jQuery("input#maxCost-3-mob").val(s)),parseInt(e)>parseInt(i)&&(i=e,jQuery("input#maxCost-3-mob").val(i)),jQuery("#slider-3-mob").slider("values",1,i)}),$(".cat-filter__clear-check").click(function(e){e.preventDefault(),$(this).parent().parent().find("input[type=checkbox]").prop("checked",!1)})}),$(window).on("load",function(){$(".cat-filter__scroll").mCustomScrollbar({axis:"y"})}),$(function(){$("#cat-sort").selectize({create:!0,sortField:"text"})}),$(document).ready(function(){$(".footer__ico-money img").hover(function(){$(this).attr("src","images/"+$(this).attr("data-color")+"-color.svg")},function(){$(this).attr("src","images/"+$(this).attr("data-color")+".svg")})});var forEach=function(e,i,s){if("[object Object]"===Object.prototype.toString.call(e))for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.call(s,e[r],r,e);else for(var t=0,l=e.length;l>t;t++)i.call(s,e[t],t,e)},hamburgers=document.querySelectorAll(".hamburger");hamburgers.length>0&&forEach(hamburgers,function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1)}),$(document).ready(function(){$(".header__hamburger span").click(function(){$(".menu-mobile").addClass("menu-mobile--open")}),$(".menu-mobile__close").click(function(){$(".menu-mobile").removeClass("menu-mobile--open")}),$(".menu-mobile__link--sub").click(function(){$(".menu-mobile__body--2").addClass("menu-mobile__body--open")}),$(".menu-mobile__link--back").click(function(){$(".menu-mobile__body--2").removeClass("menu-mobile__body--open")}),$(this).scrollTop()>285?$(".header__bottom").addClass("header__bottom--scrolled"):$(".header__bottom").removeClass("header__bottom--scrolled"),$(window).scroll(function(){$(this).scrollTop()>285?$(".header__bottom").addClass("header__bottom--scrolled"):$(".header__bottom").removeClass("header__bottom--scrolled")})}),$(document).ready(function(){$(".header-mobile__ico-search").click(function(e){e.preventDefault();var i=$(".header-mobile__search");i.hasClass("header-mobile__search--show")?i.removeClass("header-mobile__search--show"):i.addClass("header-mobile__search--show")}),$("#hamburger").click(function(){$(".menu-mobile").toggleClass("menu-mobile--show")})}),function(e){e(window).on("load",function(){e(".item-choice").mCustomScrollbar({axis:"x",advanced:{autoExpandHorizontalScroll:!0},mouseWheel:{enable:!1}})})}(jQuery),$(document).ready(function(){$(".menu__level-2__dropdown").hover(function(){$(this).children(".menu__level-3").show(300)},function(){$(this).children(".menu__level-3").hide(300)}),$(".menu__level-2-left").click(function(){var e=$(this).siblings(".menu__level-2-body").children("ul"),i=850,s=(e.children("li").length,e.css("left"));screen.width>=1600&&(i=1360),(s=Number(s.replace("px","")))<0&&e.css("left",s+i+"px")}),$(".menu__level-2-right").click(function(){var e=$(this).siblings(".menu__level-2-body").children("ul"),i=850,s=170*e.children("li").length,r=e.css("left");screen.width>=1600&&(i=1360),(r=r.replace("px",""))-i>-s&&e.css("left",r-i+"px")}),$(".menu__item").hover(function(){$(this).find(".menu__level-2-body").children("ul").children("li").length<6&&($(this).find(".menu__level-2-left").css("display","none"),$(this).find(".menu__level-2-right").css("display","none"))})}),$(document).ready(function(){$(".menu-footer__title").click(function(){if(jQuery(window).width()<768){var e=$(this).parent().parent();e.toggleClass("menu-footer--open"),e.children(".menu-footer__body").slideToggle(300)}})}),$(document).ready(function(){$(".menu-mobile__nav").click(function(){$(this).next(".menu-mobile__in").toggleClass("menu-mobile__in--show")}),$(".menu-mobile__close").click(function(){$(this).parent().parent().parent().toggleClass("menu-mobile__in--show")})}),$(document).ready(function(){$(".mobile-filter-btn").click(function(e){e.preventDefault();var i=$(".mobile-filter");i.hasClass("mobile-filter--show")?(i.removeClass("mobile-filter--show"),$("html,body").css("overflow-y","auto")):(i.addClass("mobile-filter--show"),$("html,body").css("overflow-y","hidden"))}),$(".mobile-filter-close").click(function(){$(".mobile-filter").removeClass("mobile-filter--show"),$("html,body").css("overflow-y","auto")})}),$(function(){$("#city").selectize({create:!0,sortField:"text"}),$("#search_cat").selectize({create:!0,sortField:"text"})}),$(document).ready(function(){new Swiper(".slider-overview__body",{slidesPerView:2,slidesPerGroup:2,spaceBetween:25,navigation:{nextEl:".slider-overview__next",prevEl:".slider-overview__prev"},breakpoints:{1199:{spaceBetween:350,slidesPerView:1,slidesPerGroup:1},1200:{spaceBetween:54,slidesPerView:2,slidesPerGroup:2}}})}),$(document).ready(function(){new Swiper(".slider-product__slider",{direction:"vertical",slidesPerView:3,slidesPerGroup:1,spaceBetween:20,mousewheel:!0,pagination:{el:".slider-product__pag",clickable:!0},navigation:{nextEl:".slider-product__next",prevEl:".slider-product__prev"},breakpoints:{767:{direction:"horizontal",spaceBetween:50,slidesPerView:1,slidesPerGroup:1},1199:{direction:"vertical",spaceBetween:20,slidesPerView:2,slidesPerGroup:1},1719:{direction:"horizontal",spaceBetween:15,slidesPerView:3,slidesPerGroup:1},1720:{direction:"vertical",spaceBetween:20,slidesPerView:3,slidesPerGroup:1}}})}),$(document).ready(function(){new Swiper(".slider-top__body",{slidesPerView:3,slidesPerGroup:3,spaceBetween:0,pagination:{el:".slider-top__pag",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},1199:{slidesPerView:1,slidesPerGroup:1},1200:{slidesPerView:3,slidesPerGroup:3}}})}),function(e){jQuery.fn.lightTabs=function(s){return this.each(function(){tabs=this,i=0,showPage=function(i){e(tabs).children("div").children("div").fadeOut("slow"),e(tabs).children("div").children("div").eq(i).fadeIn("slow"),e(tabs).children("ul").children("li").removeClass("tabs__icon--active"),e(tabs).children("ul").children("li").eq(i).addClass("tabs__icon--active")},showPage(0),e(tabs).children("ul").children("li").each(function(s,r){e(r).attr("data-page",i),i++}),e(tabs).children("ul").children("li").click(function(){showPage(parseInt(e(this).attr("data-page")))})})}}(jQuery),$(document).ready(function(){$(".tabs").lightTabs()}),$(window).on("load",function(){$(".testimonial").mCustomScrollbar({axis:"y",advanced:{autoExpandHorizontalScroll:!0}})});