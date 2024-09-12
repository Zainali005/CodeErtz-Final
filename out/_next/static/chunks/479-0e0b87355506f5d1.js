"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{8273:function(e,s,t){t.r(s),t.d(s,{CountUp:function(){return n}});var a=function(){return(a=Object.assign||function(e){for(var s,t=1,a=arguments.length;t<a;t++)for(var n in s=arguments[t])Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);return e}).apply(this,arguments)},n=function(){function e(e,s,t){var n=this;this.endVal=s,this.options=t,this.version="2.2.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){n.startTime||(n.startTime=e);var s=e-n.startTime;n.remaining=n.duration-s,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(s,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(s,n.startVal,n.endVal-n.startVal,n.duration):n.countDown?n.frameVal=n.startVal-(n.startVal-n.endVal)*(s/n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(s/n.duration),n.countDown?n.frameVal=n.frameVal<n.endVal?n.endVal:n.frameVal:n.frameVal=n.frameVal>n.endVal?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),s<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.callback&&n.callback()},this.formatNumber=function(e){var s,t,a,i,r=e<0?"-":"";s=Math.abs(e).toFixed(n.options.decimalPlaces);var l=(s+="").split(".");if(t=l[0],a=l.length>1?n.options.decimal+l[1]:"",n.options.useGrouping){i="";for(var o=0,c=t.length;o<c;++o)0!==o&&o%3==0&&(i=n.options.separator+i),i=t[c-o-1]+i;t=i}return n.options.numerals&&n.options.numerals.length&&(t=t.replace(/[0-9]/g,(function(e){return n.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return n.options.numerals[+e]}))),r+n.options.prefix+t+a+n.options.suffix},this.easeOutExpo=function(e,s,t,a){return t*(1-Math.pow(2,-10*e/a))*1024/1023+s},this.options=a(a({},this.defaults),t),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(s),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",void 0!==window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return n.handleScroll(n)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var s=window.innerHeight+window.scrollY,t=e.el.offsetTop+e.el.offsetHeight;t<s&&t>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>t&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var s=e-this.startVal;if(Math.abs(s)>this.options.smartEasingThreshold){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var s=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=s:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=s:this.el.innerHTML=s},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var s=Number(e);return this.ensureNumber(s)?s:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},8849:function(e,s,t){var a=t(5893),n=t(7294),i=t(1239),r=(t(4877),t(7857)),l=t(1664),o=t.n(l);s.Z=function(){var e=(0,n.useState)(!1),s=e[0],t=e[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"activities-section pt-80 pb-80",children:[(0,a.jsx)("img",{src:"assets/images/bg/water-mark1.png",alt:"image",className:"img-fluid water-mark1"}),(0,a.jsx)("img",{src:"assets/images/bg/water-mark2.png",alt:"image",className:"img-fluid water-mark2"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsxs)("div",{className:"section-title primary3",children:[(0,a.jsx)("span",{children:"-Our Video-"}),(0,a.jsx)("h3",{children:"Our Company Activities"}),(0,a.jsx)("p",{className:"para",children:"Get the most of reduction in your team\u2019s operating costs for the whole product which creates amazing UI/UX experiences."})]})})}),(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsxs)("div",{className:"activities-area",children:[(0,a.jsx)("div",{className:"company-vdo position-relative wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:(0,a.jsx)("div",{className:"video-play style-2",children:(0,a.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return t(!0)},className:"popup-youtube video-icon",children:(0,a.jsx)("i",{className:"bx bx-play"})})})}),(0,a.jsx)("div",{className:"company-counter wow fadeInUp","data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:(0,a.jsxs)("div",{className:"row g-4 d-flex justify-content-center",children:[(0,a.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-10 col-10",children:(0,a.jsx)("div",{className:"counter-single text-center d-flex flex-row wow animate fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.6s",children:(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsxs)("h2",{className:"odometer",children:[(0,a.jsx)(r.ZP,{end:50,delay:2,duration:5}),"+"]}),(0,a.jsx)(o(),{href:"#",children:"Team Members"})]})})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-10 col-10",children:(0,a.jsx)("div",{className:"counter-single text-center d-flex flex-row wow animate fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.6s",children:(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsxs)("h2",{className:"odometer",children:[(0,a.jsx)(r.ZP,{end:120,delay:2,duration:5}),"+"]}),(0,a.jsx)(o(),{href:"#",children:"Projects Delivered"})]})})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-10 col-10",children:(0,a.jsx)("div",{className:"counter-single text-center d-flex flex-row wow animate fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.6s",children:(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsxs)("h2",{className:"odometer",children:[(0,a.jsx)(r.ZP,{end:15,delay:2,duration:5}),"+"]}),(0,a.jsx)(o(),{href:"#",children:"Partners"})]})})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-10 col-10",children:(0,a.jsx)("div",{className:"counter-single text-center d-flex flex-row wow animate fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.8s",children:(0,a.jsxs)("div",{className:"coundown d-flex flex-column",children:[(0,a.jsxs)("h2",{className:"odometer",children:[(0,a.jsx)(r.ZP,{end:25,delay:2,duration:5}),"+"]}),(0,a.jsx)(o(),{href:"#",children:"Awards Won"})]})})})]})})]})})]})]}),(0,a.jsx)(n.Fragment,{children:(0,a.jsx)(i.Z,{channel:"youtube",isOpen:s,videoId:"TboWOSW7qCI",onClose:function(){return t(!1)}})})]})}},346:function(e,s,t){var a=t(5893);t(7294),t(1664);s.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"team-section pt-120 pb-120",children:[(0,a.jsx)("img",{src:"assets/images/bg/section-bg1.png",alt:"image",className:"img-fluid water-mark1"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsxs)("div",{className:"section-title primary2",children:[(0,a.jsx)("span",{children:"-Our Team-"}),(0,a.jsx)("h3",{children:"Our Creative Minds"}),(0,a.jsx)("p",{className:"para",children:"Get the most of reduction in your team\u2019s operating costs for the whole product which creates amazing UI/UX experiences."})]})})}),(0,a.jsxs)("div",{className:"row d-flex justify-content-center g-4",children:[(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10",children:(0,a.jsxs)("div",{className:"single-team1 hover-border1 wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.2s",children:[(0,a.jsxs)("div",{className:"team-image",children:[(0,a.jsx)("img",{src:"assets/images/bg/team11.png",alt:"image"}),(0,a.jsxs)("div",{className:"social-area gap-3",children:[(0,a.jsx)("div",{className:"social-plus",children:(0,a.jsx)("i",{className:"bx bx-plus"})}),(0,a.jsxs)("ul",{className:"social-links d-flex justify-content-center align-items-center flex-column gap-3",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.instagram.com/",children:(0,a.jsx)("i",{className:"bx bxl-instagram"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.facebook.com/",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.twitter.com/",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})]})]})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h4",{className:"name",children:"Usama Farooq"}),(0,a.jsx)("p",{className:"designation",children:"CEO/Founder"})]})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10",children:(0,a.jsxs)("div",{className:"single-team1 hover-border1 wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.4s",children:[(0,a.jsxs)("div",{className:"team-image",children:[(0,a.jsx)("img",{src:"assets/images/bg/team12.png",alt:"image"}),(0,a.jsxs)("div",{className:"social-area gap-3",children:[(0,a.jsx)("div",{className:"social-plus",children:(0,a.jsx)("i",{className:"bx bx-plus"})}),(0,a.jsxs)("ul",{className:"social-links d-flex justify-content-center align-items-center flex-column gap-3",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.instagram.com/",children:(0,a.jsx)("i",{className:"bx bxl-instagram"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.facebook.com/",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.twitter.com/",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})]})]})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h4",{className:"name",children:"Usama Faisal"}),(0,a.jsx)("p",{className:"designation",children:"CEO"})]})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-10",children:(0,a.jsxs)("div",{className:"single-team1 hover-border1 wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":"0.6s",children:[(0,a.jsxs)("div",{className:"team-image",children:[(0,a.jsx)("img",{src:"assets/images/bg/team13.png",alt:"image"}),(0,a.jsxs)("div",{className:"social-area gap-3",children:[(0,a.jsx)("div",{className:"social-plus",children:(0,a.jsx)("i",{className:"bx bx-plus"})}),(0,a.jsxs)("ul",{className:"social-links d-flex justify-content-center align-items-center flex-column gap-3",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.instagram.com/",children:(0,a.jsx)("i",{className:"bx bxl-instagram"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.facebook.com/",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.twitter.com/",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})]})]})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h4",{className:"name",children:"Zulqarnain bukhari"}),(0,a.jsx)("p",{className:"designation",children:"CEO"})]})]})})]})]})]})})}},1756:function(e,s,t){var a=t(5893),n=(t(7294),t(8352)),i=t(8116);function r(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function l(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(s){r(e,s,t[s])}))}return e}i.ZP.use([i.W_,i.tl,i.pt,i.W_]),s.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"testimonial-section pb-120",children:[(0,a.jsx)("img",{src:"assets/images/bg/section-bg-bttm.png",className:"section-bg-bottom",alt:"image"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsxs)("div",{className:"section-title primary5",children:[(0,a.jsx)("span",{children:"-Testimonial-"}),(0,a.jsx)("h3",{children:"What They\u2019re Saying"}),(0,a.jsx)("p",{className:"para",children:"Get the most of reduction in your team\u2019s operating costs for the whole product which creates amazing UI/UX experiences."})]})})}),(0,a.jsxs)("div",{className:"row justify-content-center position-relative",children:[(0,a.jsx)(n.tq,l({},{slidesPerView:"auto",speed:1200,autoplay:!0,spaceBetween:30,loop:!0,roundLengths:!0,navigation:{nextEl:".testi-prev1",prevEl:".testi-next1"},breakpoints:{280:{slidesPerView:1},480:{slidesPerView:1},768:{slidesPerView:1},992:{slidesPerView:2},1200:{slidesPerView:2}}},{className:"swiper testimonial-slider1 swiper-fix",children:(0,a.jsxs)("div",{className:"swiper-wrapper",children:[(0,a.jsx)(n.o5,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-single hover-border1 wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":".2s",children:[(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/quote-icon.svg",className:"quote-icon"}),(0,a.jsx)("div",{className:"testi-img",children:(0,a.jsx)("img",{alt:"image",src:"assets/images/bg/testi11.png"})}),(0,a.jsxs)("div",{className:"testi-content",children:[(0,a.jsxs)("div",{className:"testi-designation",children:[(0,a.jsx)("h5",{children:(0,a.jsx)("div",{children:"Ronald Richards"})}),(0,a.jsx)("p",{children:"Co Founder"})]}),(0,a.jsx)("p",{children:"The exceptional service provided by this team exceeded our expectations and played a pivotal role in our project\u2019s success."})]})]})}),(0,a.jsx)(n.o5,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-single hover-border1 wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":".4s",children:[(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/quote-icon.svg",className:"quote-icon"}),(0,a.jsx)("div",{className:"testi-img",children:(0,a.jsx)("img",{alt:"image",src:"assets/images/bg/testi12.png"})}),(0,a.jsxs)("div",{className:"testi-content",children:[(0,a.jsxs)("div",{className:"testi-designation",children:[(0,a.jsx)("h5",{children:(0,a.jsx)("div",{children:"Marvin McKinney"})}),(0,a.jsx)("p",{children:"Founder"})]}),(0,a.jsx)("p",{children:"Their innovative approach and dedication to quality made a huge difference in the outcome of our project."})]})]})}),(0,a.jsx)(n.o5,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-single hover-border1 wow fadeInDown","data-wow-duration":"1.5s","data-wow-delay":".4s",children:[(0,a.jsx)("img",{alt:"image",src:"assets/images/icons/quote-icon.svg",className:"quote-icon"}),(0,a.jsx)("div",{className:"testi-img",children:(0,a.jsx)("img",{alt:"image",src:"assets/images/bg/testi11.png"})}),(0,a.jsxs)("div",{className:"testi-content",children:[(0,a.jsxs)("div",{className:"testi-designation",children:[(0,a.jsx)("h5",{children:(0,a.jsx)("div",{children:"Marvin McKinneys"})}),(0,a.jsx)("p",{children:"Manager"})]}),(0,a.jsx)("p",{children:"Their expertise and professionalism were key in delivering outstanding results that truly impressed our clients."})]})]})})]})})),(0,a.jsxs)("div",{className:"slider-arrows text-center d-xl-flex d-none justify-content-between",children:[(0,a.jsx)("div",{className:"testi-prev1 swiper-prev-arrow",tabIndex:0,role:"button","aria-label":"Previous slide",children:(0,a.jsxs)("svg",{width:46,height:46,viewBox:"0 0 46 46",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("circle",{cx:23,cy:23,r:"22.25",strokeWidth:"1.5"}),(0,a.jsx)("path",{d:"M20 27.573V23V18.427C20 18.2574 19.8022 18.1648 19.672 18.2734L14 23L19.672 27.7266C19.8022 27.8352 20 27.7426 20 27.573Z"}),(0,a.jsx)("path",{d:"M32 23.5C32.2761 23.5 32.5 23.2761 32.5 23C32.5 22.7239 32.2761 22.5 32 22.5V23.5ZM19.672 27.7266L19.9921 27.3425V27.3425L19.672 27.7266ZM14 23L13.6799 22.6159L13.219 23L13.6799 23.3841L14 23ZM19.672 18.2734L19.3519 17.8893L19.3519 17.8893L19.672 18.2734ZM32 22.5H20V23.5H32V22.5ZM19.5 23V27.573H20.5V23H19.5ZM19.9921 27.3425L14.3201 22.6159L13.6799 23.3841L19.3519 28.1107L19.9921 27.3425ZM14.3201 23.3841L19.9921 18.6575L19.3519 17.8893L13.6799 22.6159L14.3201 23.3841ZM19.5 18.427V23H20.5V18.427H19.5ZM19.9921 18.6575C19.7967 18.8203 19.5 18.6814 19.5 18.427H20.5C20.5 17.8335 19.8078 17.5093 19.3519 17.8893L19.9921 18.6575ZM19.5 27.573C19.5 27.3186 19.7967 27.1797 19.9921 27.3425L19.3519 28.1107C19.8078 28.4907 20.5 28.1665 20.5 27.573H19.5Z"})]})}),(0,a.jsx)("div",{className:"testi-next1 swiper-next-arrow",tabIndex:0,role:"button","aria-label":"Next slide",children:(0,a.jsxs)("svg",{width:46,height:46,viewBox:"0 0 46 46",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("circle",{cx:23,cy:23,r:23}),(0,a.jsx)("path",{d:"M26 18.427V23V27.573C26 27.7426 26.1978 27.8352 26.328 27.7266L32 23L26.328 18.2734C26.1978 18.1648 26 18.2574 26 18.427Z"}),(0,a.jsx)("path",{d:"M14 22.5C13.7239 22.5 13.5 22.7239 13.5 23C13.5 23.2761 13.7239 23.5 14 23.5V22.5ZM26.328 18.2734L26.0079 18.6575V18.6575L26.328 18.2734ZM32 23L32.3201 23.3841L32.781 23L32.3201 22.6159L32 23ZM26.328 27.7266L26.6481 28.1107L26.6481 28.1107L26.328 27.7266ZM14 23.5H26V22.5H14V23.5ZM26.5 23V18.427H25.5V23H26.5ZM26.0079 18.6575L31.6799 23.3841L32.3201 22.6159L26.6481 17.8893L26.0079 18.6575ZM31.6799 22.6159L26.0079 27.3425L26.6481 28.1107L32.3201 23.3841L31.6799 22.6159ZM26.5 27.573V23H25.5V27.573H26.5ZM26.0079 27.3425C26.2033 27.1797 26.5 27.3186 26.5 27.573H25.5C25.5 28.1665 26.1922 28.4907 26.6481 28.1107L26.0079 27.3425ZM26.5 18.427C26.5 18.6814 26.2033 18.8203 26.0079 18.6575L26.6481 17.8893C26.1922 17.5093 25.5 17.8335 25.5 18.427H26.5Z"})]})})]})]})]})]})})}},7857:function(e,s,t){var a=t(7294),n=t(8273);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=i(a);function l(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?l(Object(t),!0).forEach((function(s){c(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function c(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function u(e,s){if(null==e)return{};var t,a,n=function(e,s){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?a.useLayoutEffect:a.useEffect;function h(e){var s=a.useRef(e);return m((function(){s.current=e})),a.useCallback((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return s.current.apply(void 0,t)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},x=function(e){var s=a.useMemo((function(){return o(o({},p),e)}),[e]),t=s.ref,i=s.startOnMount,r=s.enableReinitialize,l=s.delay,c=s.onEnd,d=s.onStart,m=s.onPauseResume,x=s.onReset,w=s.onUpdate,g=u(s,f),j=a.useRef(),v=a.useRef(),b=a.useRef(!1),y=h((function(){return function(e,s){var t=s.decimal,a=s.decimals,i=s.duration,r=s.easingFn,l=s.end,o=s.formattingFn,c=s.numerals,d=s.prefix,u=s.separator,m=s.start,h=s.suffix,f=s.useEasing,p=s.enableScrollSpy,x=s.scrollSpyDelay;return new n.CountUp(e,l,{startVal:m,duration:i,decimal:t,decimalPlaces:a,easingFn:r,formattingFn:o,numerals:c,separator:u,prefix:d,suffix:h,useEasing:f,useGrouping:!!u,enableScrollSpy:p,scrollSpyDelay:x})}("string"===typeof t?t:t.current,g)})),N=h((function(e){var s=j.current;if(s&&!e)return s;var t=y();return j.current=t,t})),V=h((function(){var e=function(){return N(!0).start((function(){null===c||void 0===c||c({pauseResume:E,reset:O,start:L,update:F})}))};l&&l>0?v.current=setTimeout(e,1e3*l):e(),null===d||void 0===d||d({pauseResume:E,reset:O,update:F})})),E=h((function(){N().pauseResume(),null===m||void 0===m||m({reset:O,start:L,update:F})})),O=h((function(){v.current&&clearTimeout(v.current),N().reset(),null===x||void 0===x||x({pauseResume:E,start:L,update:F})})),F=h((function(e){N().update(e),null===w||void 0===w||w({pauseResume:E,reset:O,start:L})})),L=h((function(){O(),V()})),P=h((function(e){i&&(e&&O(),V())}));return a.useEffect((function(){b.current?r&&P(!0):(b.current=!0,P())}),[r,b,P,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),a.useEffect((function(){return function(){O()}}),[O]),{start:L,pauseResume:E,reset:O,update:F,getCountUp:N}},w=["className","redraw","containerProps","children","style"];s.ZP=function(e){var s=e.className,t=e.redraw,n=e.containerProps,i=e.children,l=e.style,c=u(e,w),m=r.default.useRef(null),f=r.default.useRef(!1),p=x(o(o({},c),{},{ref:m,startOnMount:"function"!==typeof i||0===e.delay,enableReinitialize:!1})),g=p.start,j=p.reset,v=p.update,b=p.pauseResume,y=p.getCountUp,N=h((function(){g()})),V=h((function(s){e.preserveValue||j(),v(s)})),E=h((function(){"function"!==typeof e.children||m.current instanceof Element?y():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));a.useEffect((function(){E()}),[E]),a.useEffect((function(){f.current&&V(e.end)}),[e.end,V]);var O=t&&e;return a.useEffect((function(){t&&f.current&&N()}),[N,t,O]),a.useEffect((function(){!t&&f.current&&N()}),[N,t,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),a.useEffect((function(){f.current=!0}),[]),"function"===typeof i?i({countUpRef:m,start:g,reset:j,update:v,pauseResume:b,getCountUp:y}):r.default.createElement("span",d({className:s,ref:m,style:l},n),e.start?y().formattingFn(e.start):"")}}}]);