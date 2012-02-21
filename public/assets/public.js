/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}}),function(a,b){a.fn.imagesLoaded=function(a){function f(){a.call(b,c)}function g(a){--d<=0&&a.target.src!==e&&(setTimeout(f),c.unbind("load error",g))}var b=this,c=b.find("img").add(b.filter("img")),d=c.length,e="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";return d||f(),c.bind("load error",g).each(function(){if(this.complete||typeof this.complete=="undefined"){var a=this.src;this.src=e,this.src=a}}),b}}(jQuery),function(a,b,c){b.fn.touchwipe=function(a){var c={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!0};return a&&b.extend(c,a),this.each(function(){function e(){this.removeEventListener("touchmove",f),a=null,d=!1}function f(f){c.preventDefaultEvents&&f.preventDefault();if(d){var g=f.touches[0].pageX,h=f.touches[0].pageY,i=a-g,j=b-h;Math.abs(i)>=c.min_move_x?(e(),i>0?c.wipeLeft():c.wipeRight()):Math.abs(j)>=c.min_move_y&&(e(),j>0?c.wipeDown():c.wipeUp())}}function g(c){c.touches.length==1&&(a=c.touches[0].pageX,b=c.touches[0].pageY,d=!0,this.addEventListener("touchmove",f,!1))}var a,b,d=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",g,!1)}),this},b.elastislide=function(a,c){this.$el=b(c),this._init(a)},b.elastislide.defaults={speed:450,easing:"",imageW:190,margin:3,border:2,minItems:1,current:0,onClick:function(){return!1}},b.elastislide.prototype={_init:function(a){this.options=b.extend(!0,{},b.elastislide.defaults,a),this.$slider=this.$el.find("ul"),this.$items=this.$slider.children("li"),this.itemsCount=this.$items.length,this.$esCarousel=this.$slider.parent(),this._validateOptions(),this._configure(),this._addControls(),this._initEvents(),this.$slider.show(),this._slideToCurrent(!1)},_validateOptions:function(){this.options.speed<0&&(this.options.speed=450),this.options.margin<0&&(this.options.margin=4),this.options.border<0&&(this.options.border=1);if(this.options.minItems<1||this.options.minItems>this.itemsCount)this.options.minItems=1;this.options.current>this.itemsCount-1&&(this.options.current=0)},_configure:function(){this.current=this.options.current,this.visibleWidth=this.$esCarousel.width(),this.visibleWidth<this.options.minItems*(this.options.imageW+2*this.options.border)+(this.options.minItems-1)*this.options.margin?(this._setDim((this.visibleWidth-(this.options.minItems-1)*this.options.margin)/this.options.minItems),this._setCurrentValues(),this.fitCount=this.options.minItems):(this._setDim(),this._setCurrentValues()),this.$slider.css({width:this.sliderW})},_setDim:function(a){this.$items.css({marginRight:this.options.margin,width:a?a:this.options.imageW+2*this.options.border}).children("a").css({borderWidth:this.options.border})},_setCurrentValues:function(){this.itemW=this.$items.outerWidth(!0),this.sliderW=this.itemW*this.itemsCount,this.visibleWidth=this.$esCarousel.width(),this.fitCount=Math.floor(this.visibleWidth/this.itemW)},_addControls:function(){this.$navNext=b('<span class="es-nav-next">Next</span>'),this.$navPrev=b('<span class="es-nav-prev">Previous</span>'),b('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)},_toggleControls:function(a,b){a&&b?b===1?a==="right"?this.$navNext.show():this.$navPrev.show():a==="right"?this.$navNext.hide():this.$navPrev.hide():(this.current===this.itemsCount-1||this.fitCount>=this.itemsCount)&&this.$navNext.hide()},_initEvents:function(){var c=this;b(a).bind("resize.elastislide",function(a){c._reload(),clearTimeout(c.resetTimeout),c.resetTimeout=setTimeout(function(){c._slideToCurrent()},200)}),this.$navNext.bind("click.elastislide",function(a){c._slide("right")}),this.$navPrev.bind("click.elastislide",function(a){c._slide("left")}),this.$items.bind("click.elastislide",function(a){return c.options.onClick(b(this)),!1}),c.$slider.touchwipe({wipeLeft:function(){c._slide("right")},wipeRight:function(){c._slide("left")}})},reload:function(a){this._reload(),a&&a.call()},_reload:function(){var a=this;a._setCurrentValues(),a.visibleWidth<a.options.minItems*(a.options.imageW+2*a.options.border)+(a.options.minItems-1)*a.options.margin?(a._setDim((a.visibleWidth-(a.options.minItems-1)*a.options.margin)/a.options.minItems),a._setCurrentValues(),a.fitCount=a.options.minItems):(a._setDim(),a._setCurrentValues()),a.$slider.css({width:a.sliderW+10})},_slide:function(a,d,e,f){var g=parseFloat(this.$slider.css("margin-left"));if(d===c){var h=this.fitCount*this.itemW,d;if(h<0)return!1;if(a==="right"&&this.sliderW-(Math.abs(g)+h)<this.visibleWidth)h=this.sliderW-(Math.abs(g)+this.visibleWidth)-this.options.margin,this._toggleControls("right",-1),this._toggleControls("left",1);else if(a==="left"&&Math.abs(g)-h<0)h=Math.abs(g),this._toggleControls("left",-1),this._toggleControls("right",1);else{var i;a==="right"?i=Math.abs(g)+this.options.margin+Math.abs(h):i=Math.abs(g)-this.options.margin-Math.abs(h),i>0?this._toggleControls("left",1):this._toggleControls("left",-1),i<this.sliderW-this.visibleWidth?this._toggleControls("right",1):this._toggleControls("right",-1)}a==="right"?d="-="+h:d="+="+h}else{var i=Math.abs(d);Math.max(this.sliderW,this.visibleWidth)-i<this.visibleWidth&&(d=-(Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth),d!==0&&(d+=this.options.margin),this._toggleControls("right",-1),i=Math.abs(d)),i>0?this._toggleControls("left",1):this._toggleControls("left",-1),Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth>i+this.options.margin?this._toggleControls("right",1):this._toggleControls("right",-1)}b.fn.applyStyle=e===c?b.fn.animate:b.fn.css;var j={marginLeft:d},k=this;this.$slider.stop().applyStyle(j,b.extend(!0,[],{duration:this.options.speed,easing:this.options.easing,complete:function(){f&&f.call()}}))},_slideToCurrent:function(a){var b=this.current*this.itemW;this._slide("",-b,a)},add:function(a,b){this.$items=this.$items.add(a),this.itemsCount=this.$items.length,this._setDim(),this._setCurrentValues(),this.$slider.css({width:this.sliderW}),this._slideToCurrent(),b&&b.call(a)},setCurrent:function(a,b){this.current=a;var c=Math.abs(parseFloat(this.$slider.css("margin-left"))),d=c+this.visibleWidth,e=Math.abs(this.current*this.itemW);(e+this.itemW>d||e<c)&&this._slideToCurrent(),b&&b.call()},destroy:function(a){this._destroy(a)},_destroy:function(c){this.$el.unbind(".elastislide").removeData("elastislide"),b(a).unbind(".elastislide"),c&&c.call()}};var d=function(a){this.console&&console.error(a)};b.fn.elastislide=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var e=b.data(this,"elastislide");if(!e){d("cannot call methods on elastislide prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(e[a])||a.charAt(0)==="_"){d("no such method '"+a+"' for elastislide instance");return}e[a].apply(e,c)})}else this.each(function(){var c=b.data(this,"elastislide");c||b.data(this,"elastislide",new b.elastislide(a,this))});return this}}(window,jQuery),$(function(){Gallery=function(){var a=0,b=!1,c,d,e,f=0;return init=function(b){c=b,d=c.find("div.images-thumbnails-container"),e=d.find("a"),f=e.length,e.imagesLoaded(function(){var b=d.find($("ul")),c=b.width(),f=d.width();f>c&&b.css({width:c}),_addImageWrapper(),_showImage(e.eq(a))}),f>1&&_initCarousel()},_initCarousel=function(){d.show().elastislide({imageW:156,onClick:function(c){if(b)return!1;b=!0,_showImage(c.find("a")),a=c.index()}}),d.elastislide("setCurrent",a)},_addImageWrapper=function(){var a=c.find("a.image-large-nav-prev"),b=c.find("a.image-large-nav-next"),d=c.find("div.image-large");f>1?(a.bind("click.rgGallery",function(a){return _navigate("left"),!1}),b.bind("click.rgGallery",function(a){return _navigate("right"),!1}),d.touchwipe({wipeLeft:function(){_navigate("right")},wipeRight:function(){_navigate("left")},preventDefaultEvents:!1}),$(document).bind("keyup.rgGallery",function(a){a.keyCode==39?_navigate("right"):a.keyCode==37&&_navigate("left")})):(a.css("display","none"),b.css("display","none"))},_navigate=function(c){if(b)return!1;b=!0,c==="right"?a+1>=f?a=0:++a:c==="left"&&(a-1<0?a=f-1:--a),_showImage(e.eq(a))},_showImage=function(f){var g=c.find("div.image-large-loader").show();e.removeClass("selected"),f.addClass("selected");var h=f.find("img"),i=h.parent().attr("href"),j=h.data("description");$("<img/>").load(function(){c.find("div.image-large").empty().append('<img src="'+i+'"/>'),g.hide(),d.elastislide("reload"),d.elastislide("setCurrent",a),b=!1}).attr("src",i)},{init:init}}()}),$(document).ready(function(){$("#orbit").orbit({bullets:!0,animation:"horizontal-push",animationSpeed:800,timer:!0}),$(".images:first").length>0&&Gallery.init($(".images:first"))})