(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [697],
  {
    8273: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          CountUp: function () {
            return t;
          },
        });
      var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var s, a = 1, i = arguments.length; a < i; a++)
                for (var t in (s = arguments[a]))
                  Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
              return e;
            }).apply(this, arguments);
        },
        t = (function () {
          function e(e, s, a) {
            var t = this;
            (this.endVal = s),
              (this.options = a),
              (this.version = "2.2.0"),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1,
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ""),
              (this.startVal = 0),
              (this.paused = !0),
              (this.once = !1),
              (this.count = function (e) {
                t.startTime || (t.startTime = e);
                var s = e - t.startTime;
                (t.remaining = t.duration - s),
                  t.useEasing
                    ? t.countDown
                      ? (t.frameVal =
                          t.startVal -
                          t.easingFn(s, 0, t.startVal - t.endVal, t.duration))
                      : (t.frameVal = t.easingFn(
                          s,
                          t.startVal,
                          t.endVal - t.startVal,
                          t.duration
                        ))
                    : t.countDown
                    ? (t.frameVal =
                        t.startVal - (t.startVal - t.endVal) * (s / t.duration))
                    : (t.frameVal =
                        t.startVal +
                        (t.endVal - t.startVal) * (s / t.duration)),
                  t.countDown
                    ? (t.frameVal =
                        t.frameVal < t.endVal ? t.endVal : t.frameVal)
                    : (t.frameVal =
                        t.frameVal > t.endVal ? t.endVal : t.frameVal),
                  (t.frameVal = Number(
                    t.frameVal.toFixed(t.options.decimalPlaces)
                  )),
                  t.printValue(t.frameVal),
                  s < t.duration
                    ? (t.rAF = requestAnimationFrame(t.count))
                    : null !== t.finalEndVal
                    ? t.update(t.finalEndVal)
                    : t.callback && t.callback();
              }),
              (this.formatNumber = function (e) {
                var s,
                  a,
                  i,
                  n,
                  r = e < 0 ? "-" : "";
                s = Math.abs(e).toFixed(t.options.decimalPlaces);
                var l = (s += "").split(".");
                if (
                  ((a = l[0]),
                  (i = l.length > 1 ? t.options.decimal + l[1] : ""),
                  t.options.useGrouping)
                ) {
                  n = "";
                  for (var c = 0, o = a.length; c < o; ++c)
                    0 !== c && c % 3 == 0 && (n = t.options.separator + n),
                      (n = a[o - c - 1] + n);
                  a = n;
                }
                return (
                  t.options.numerals &&
                    t.options.numerals.length &&
                    ((a = a.replace(/[0-9]/g, function (e) {
                      return t.options.numerals[+e];
                    })),
                    (i = i.replace(/[0-9]/g, function (e) {
                      return t.options.numerals[+e];
                    }))),
                  r + t.options.prefix + a + i + t.options.suffix
                );
              }),
              (this.easeOutExpo = function (e, s, a, i) {
                return (a * (1 - Math.pow(2, (-10 * e) / i)) * 1024) / 1023 + s;
              }),
              (this.options = i(i({}, this.defaults), a)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(s)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof e ? document.getElementById(e) : e),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined"),
              void 0 !== window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, e)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return t.handleScroll(t);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (e) {
                        return e();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (e.prototype.handleScroll = function (e) {
              if (e && window && !e.once) {
                var s = window.innerHeight + window.scrollY,
                  a = e.el.offsetTop + e.el.offsetHeight;
                a < s && a > window.scrollY && e.paused
                  ? ((e.paused = !1),
                    setTimeout(function () {
                      return e.start();
                    }, e.options.scrollSpyDelay),
                    e.options.scrollSpyOnce && (e.once = !0))
                  : window.scrollY > a && !e.paused && e.reset();
              }
            }),
            (e.prototype.determineDirectionAndSmartEasing = function () {
              var e = this.finalEndVal ? this.finalEndVal : this.endVal;
              this.countDown = this.startVal > e;
              var s = e - this.startVal;
              if (Math.abs(s) > this.options.smartEasingThreshold) {
                this.finalEndVal = e;
                var a = this.countDown ? 1 : -1;
                (this.endVal = e + a * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = e), (this.finalEndVal = null);
              this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (e.prototype.start = function (e) {
              this.error ||
                ((this.callback = e),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (e.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (e.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (e.prototype.update = function (e) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(e)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  this.finalEndVal || this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (e.prototype.printValue = function (e) {
              var s = this.formattingFn(e);
              "INPUT" === this.el.tagName
                ? (this.el.value = s)
                : "text" === this.el.tagName || "tspan" === this.el.tagName
                ? (this.el.textContent = s)
                : (this.el.innerHTML = s);
            }),
            (e.prototype.ensureNumber = function (e) {
              return "number" == typeof e && !isNaN(e);
            }),
            (e.prototype.validateValue = function (e) {
              var s = Number(e);
              return this.ensureNumber(s)
                ? s
                : ((this.error =
                    "[CountUp] invalid start or end value: ".concat(e)),
                  null);
            }),
            (e.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            e
          );
        })();
    },
    9328: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index4",
        function () {
          return a(5539);
        },
      ]);
    },
    8696: function (e, s, a) {
      "use strict";
      var i = a(5893),
        t = a(9008),
        n = a.n(t);
      a(7294);
      s.Z = function (e) {
        var s = e.style;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(n(), {
              children: [
                (0, i.jsx)("title", { children: "Loading..." }),
                (0, i.jsx)("link", { rel: "icon", href: "" }),
              ],
            }),
            (0, i.jsx)("div", {
              className: s,
              children: (0, i.jsx)("div", {
                className: "egns-preloader ",
                children: (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsx)("div", {
                    className: "row d-flex justify-content-center",
                    children: (0, i.jsx)("div", {
                      className: "col-6",
                      children: (0, i.jsxs)("div", {
                        className: "circle-border",
                        children: [
                          (0, i.jsx)("div", { className: "moving-circle" }),
                          (0, i.jsx)("div", { className: "moving-circle" }),
                          (0, i.jsx)("div", { className: "moving-circle" }),
                          (0, i.jsxs)("svg", {
                            width: "180px",
                            height: "150px",
                            viewBox: "0 0 187.3 93.7",
                            preserveAspectRatio: "xMidYMid meet",
                            style: {
                              left: "50%",
                              top: "50%",
                              position: "absolute",
                              transform:
                                "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)",
                            },
                            children: [
                              (0, i.jsx)("path", {
                                stroke: "#D90A2C",
                                id: "outline",
                                fill: "none",
                                strokeWidth: 4,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z",
                              }),
                              (0, i.jsx)("path", {
                                id: "outline-bg",
                                opacity: "0.05",
                                fill: "none",
                                stroke: "#959595",
                                strokeWidth: 4,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    5539: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return H;
          },
        });
      var i = a(5893),
        t = a(7294),
        n = a(9008),
        r = a.n(n),
        l = a(1664),
        c = a.n(l);
      var o = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className:
                "about-section3 position-relative overflow-hidden pt-120",
              id: "about",
              children: [
                (0, i.jsx)("img", {
                  src: "assets/images/bg/watermark2-bg.png",
                  alt: "image",
                  className: "watermark2-bg",
                }),
                (0, i.jsx)("div", {
                  className: "container-fluid",
                  children: (0, i.jsxs)("div", {
                    className:
                      "row justify-content-center align-items-center g-4",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-xl-7 col-lg-6 wow fadeInLeft",
                        "data-wow-duration": "1.5s",
                        "data-wow-delay": ".2s",
                        children: (0, i.jsx)("img", {
                          src: "assets/images/bg/about4-img.png",
                          className: "img-fluid about4-image",
                          alt: "image",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-xl-5 col-lg-6",
                        children: (0, i.jsxs)("div", {
                          className: "about3-content style-2 wow fadeInRight",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": ".2s",
                          children: [
                            (0, i.jsx)("h3", {
                              children:
                                "We create some things, Design for your success future.",
                            }),
                            (0, i.jsx)("p", {
                              className: "para",
                              children:
                                "Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been the industrys standard dummy text ever.",
                            }),
                            (0, i.jsxs)("ul", {
                              className: "about3-list",
                              children: [
                                (0, i.jsx)("li", {
                                  children:
                                    "Price of additional materials or parts (if needed)",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "Transportation cost for carrying new materials/parts",
                                }),
                                (0, i.jsx)("li", {
                                  children:
                                    "You will get 100% money back offer.",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "about-footer d-flex jusify-content-start align-items-center flex-wrap gap-4",
                              children: [
                                (0, i.jsx)(c(), {
                                  href: "/about",
                                  children: (0, i.jsx)("a", {
                                    className: "eg-btn btn--primary4 btn--lg",
                                    style: { cursor: "pointer" },
                                    children: "KNOW MORE",
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "experience d-flex flex-row align-items-center",
                                  children: [
                                    (0, i.jsxs)("svg", {
                                      width: 44,
                                      height: 44,
                                      viewBox: "0 0 44 44",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        (0, i.jsxs)("g", {
                                          clipPath: "url(#clip0_445_100)",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M21.45 0.223437C21.2695 0.403906 21.2266 0.532812 21.2266 0.859375C21.2266 1.18594 21.2695 1.31484 21.45 1.49531C21.6305 1.67578 21.7594 1.71875 22.0859 1.71875C22.4125 1.71875 22.5414 1.67578 22.7219 1.49531C22.9023 1.31484 22.9453 1.18594 22.9453 0.859375C22.9453 0.532812 22.9023 0.403906 22.7219 0.223437C22.5414 0.0429688 22.4125 0 22.0859 0C21.7594 0 21.6305 0.0429688 21.45 0.223437Z",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M16.9898 0.764866C14.4547 1.59846 12.1258 3.0594 10.3039 4.95861C8.1125 7.23596 6.64297 10.0633 5.98984 13.2688C5.82656 14.1024 5.80078 14.4891 5.80078 16.3281C5.80078 18.1672 5.82656 18.5539 5.98984 19.3875C6.64297 22.593 8.06953 25.343 10.2867 27.6719C10.7508 28.1617 11 28.4883 10.9742 28.5656C10.9484 28.6344 9.77969 30.7055 8.3875 33.1719C6.13594 37.1336 5.84375 37.6922 5.84375 38.0188C5.84375 38.5516 6.14453 38.8438 6.69453 38.8438C6.90938 38.8352 8.34453 38.5774 9.88281 38.2508C11.9367 37.8211 12.693 37.6922 12.7359 37.7696C12.7703 37.8211 13.2602 39.1789 13.8359 40.786C14.5922 42.9086 14.9187 43.7422 15.0648 43.8453C15.3398 44.0688 15.9672 44.0516 16.2164 43.8196C16.3195 43.7164 17.6773 41.3961 19.2242 38.6633C20.7711 35.9305 22.0602 33.6961 22.0859 33.6961C22.1117 33.6961 23.4008 35.9305 24.9477 38.6633C26.4945 41.3961 27.8523 43.7164 27.9641 43.8196C28.2477 44.086 28.8664 44.0688 29.1414 43.7938C29.2875 43.6563 29.657 42.7196 30.3273 40.8117C30.8687 39.2821 31.35 37.95 31.4016 37.8469C31.4961 37.6664 31.5047 37.6664 34.2891 38.2508C35.8273 38.5688 37.2625 38.8352 37.4773 38.8438C38.0273 38.8438 38.3281 38.5516 38.3281 38.0188C38.3281 37.6836 38.0445 37.1422 35.793 33.1719C34.3922 30.7141 33.232 28.643 33.2063 28.5742C33.1719 28.4883 33.4039 28.1789 33.8852 27.6719C36.1023 25.343 37.5289 22.593 38.182 19.3875C38.3453 18.5539 38.3711 18.1758 38.3711 16.3281C38.3711 14.4891 38.3453 14.1024 38.1734 13.2688C37.5289 10.0719 36.068 7.23596 33.868 4.95861C32.5188 3.55783 31.1867 2.58674 29.3648 1.66721C28.0414 1.00549 26.1766 0.386742 25.7469 0.464085C25.3172 0.541428 25.0508 0.876583 25.0508 1.33205C25.0508 1.89924 25.2656 2.07112 26.4516 2.44924C31.625 4.10783 35.243 8.18127 36.4117 13.6641C36.6523 14.7985 36.6266 18.0297 36.3688 19.1985C35.0453 25.1367 30.6367 29.4766 24.7672 30.6367C23.2633 30.9375 20.9086 30.9375 19.4047 30.6367C14.1797 29.6055 9.96016 25.936 8.29297 20.9516C7.7 19.1727 7.61406 18.5797 7.61406 16.3281C7.61406 14.0766 7.7 13.4836 8.29297 11.7047C9.79688 7.21877 13.2859 3.83284 17.8492 2.41487C18.8891 2.0883 19.1211 1.89065 19.1211 1.32346C19.1211 1.03127 19.0695 0.902367 18.8977 0.721897C18.5453 0.369553 18.1586 0.378147 16.9898 0.764866ZM13.2516 30.1125C15.1164 31.3242 17.5398 32.2266 19.6969 32.5102C20.118 32.5703 20.4617 32.6477 20.4703 32.6906C20.4961 32.8024 15.8641 40.9063 15.8039 40.8375C15.7781 40.8031 15.3914 39.7547 14.9531 38.5C14.0422 35.9133 13.9477 35.75 13.3289 35.75C13.1141 35.75 11.9453 35.9649 10.7422 36.2141C9.53906 36.4719 8.54219 36.6696 8.53359 36.661C8.50781 36.6438 12.4781 29.6485 12.5125 29.6485C12.5297 29.6485 12.8648 29.8547 13.2516 30.1125ZM33.6875 33.1719C34.7703 35.0797 35.6469 36.6524 35.6383 36.661C35.6297 36.6696 34.6328 36.4719 33.4297 36.2141C32.2266 35.9649 31.0578 35.7586 30.843 35.75C30.2242 35.75 30.1297 35.9133 29.2188 38.5C28.7805 39.7547 28.3938 40.8031 28.368 40.8375C28.3164 40.8977 23.7102 32.8883 23.6844 32.6992C23.6844 32.6563 24.0281 32.5703 24.4664 32.5102C26.6578 32.218 29.3047 31.2211 31.0234 30.0438C31.3328 29.8289 31.6078 29.6656 31.6508 29.6742C31.6852 29.6828 32.6047 31.2555 33.6875 33.1719Z",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M20.1523 3.52344C19.2328 3.66953 17.9352 4.03906 17.0586 4.41719C15.357 5.13047 14.1023 6.01562 12.7531 7.41641C11.0344 9.19531 9.94297 11.2578 9.40156 13.75C9.27266 14.3344 9.23828 14.8414 9.23828 16.3281C9.23828 18.3391 9.31563 18.8977 9.80547 20.393C10.4414 22.3352 11.4125 23.882 12.968 25.4461C14.8672 27.3453 16.8867 28.4453 19.5078 29.0125C20.5563 29.2445 23.6156 29.2445 24.6641 29.0125C27.3023 28.4367 29.2961 27.3453 31.2039 25.4461C33.1031 23.5383 34.1945 21.5445 34.7703 18.9062C35.0023 17.8578 35.0023 14.7984 34.7703 13.75C34.1945 11.1117 33.1031 9.11797 31.2039 7.21016C29.3305 5.33672 27.4227 4.27969 24.8445 3.67813C23.9938 3.48047 21.0547 3.38594 20.1523 3.52344ZM23.9766 5.38828C28.5312 6.14453 32.2523 9.86563 33.0344 14.4289C33.3266 16.1219 33.1719 18.2188 32.6391 19.8086C31.7195 22.5414 29.7602 24.8359 27.1477 26.2023C24.5438 27.5688 21.3297 27.8094 18.5109 26.8555C15.3398 25.7727 12.6156 23.0398 11.55 19.8773C10.8023 17.6516 10.8023 15.0047 11.5586 12.7617C12.057 11.2492 13.0797 9.63359 14.2828 8.44766C16.8953 5.87812 20.3672 4.77812 23.9766 5.38828Z",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M21.682 8.0352C21.4328 8.13833 21.2781 8.40473 20.2898 10.3727L19.1813 12.5985L16.9984 12.925C15.8039 13.1055 14.6781 13.286 14.5063 13.329C14.0852 13.4407 13.8359 13.7672 13.8359 14.2055C13.8359 14.5493 13.8875 14.6094 15.6148 16.3454L17.4023 18.1329L17.0328 20.35C16.5945 23.0227 16.5859 23.1344 16.9211 23.4696C17.368 23.9079 17.5656 23.8477 19.9633 22.6102L22.0945 21.5016L24.2172 22.6102C26.6062 23.8477 26.8039 23.9079 27.2508 23.4696C27.5859 23.1344 27.5773 23.0227 27.1391 20.35L26.7695 18.1329L28.557 16.3454C30.2844 14.6094 30.3359 14.5493 30.3359 14.2055C30.3359 13.7672 30.0867 13.4407 29.6656 13.329C29.4938 13.286 28.368 13.0969 27.1734 12.925L24.9906 12.5985L23.882 10.3727C22.8594 8.33599 22.7391 8.14692 22.4727 8.02661C22.1117 7.88052 22.0344 7.88052 21.682 8.0352ZM22.8766 12.504C23.3664 13.475 23.7016 14.0508 23.8477 14.1454C23.9766 14.2313 24.6984 14.3774 25.6695 14.5321C26.5633 14.6696 27.3367 14.7899 27.4055 14.7985C27.4656 14.8157 26.9844 15.3399 26.3313 15.9758C25.6695 16.6118 25.0938 17.2133 25.0336 17.3079C24.8789 17.5743 24.8961 17.9438 25.1797 19.5852C25.3172 20.4102 25.4203 21.1063 25.4031 21.1149C25.3859 21.1321 24.6984 20.7969 23.8734 20.3672C22.8594 19.8516 22.275 19.5938 22.0859 19.5938C21.8969 19.5938 21.3125 19.8516 20.2984 20.3758C19.4734 20.7969 18.7859 21.1407 18.7688 21.1235C18.7516 21.1063 18.8547 20.4102 18.9922 19.5852C19.2758 17.9438 19.293 17.5829 19.1383 17.3079C19.0781 17.2047 18.4938 16.6118 17.8406 15.9758C17.1703 15.3313 16.6977 14.8157 16.7664 14.7985C16.8352 14.7899 17.6086 14.6696 18.5023 14.5321C19.4734 14.3774 20.1953 14.2313 20.3242 14.1454C20.4703 14.0508 20.8055 13.475 21.2953 12.504C21.7078 11.679 22.0602 11 22.0859 11C22.1117 11 22.4641 11.679 22.8766 12.504Z",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("defs", {
                                          children: (0, i.jsx)("clipPath", {
                                            id: "clip0_445_100",
                                            children: (0, i.jsx)("rect", {
                                              width: 44,
                                              height: 44,
                                              fill: "white",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("h4", {
                                      className: "mb-0",
                                      children: "10+ Years Experience",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        d = a(1239);
      a(4877);
      var m = function () {
        var e = (0, t.useState)(!1),
          s = e[0],
          a = e[1];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: "banner-section4",
              children: [
                (0, i.jsx)("img", {
                  src: "assets/images/bg/banner4-wave1.svg",
                  className: "banner4-wave1 img-fluid",
                  alt: "image",
                }),
                (0, i.jsx)("img", {
                  src: "assets/images/bg/banner4-wave2.svg",
                  className: "banner4-wave2 img-fluid",
                  alt: "image",
                }),
                (0, i.jsx)("img", {
                  src: "assets/images/bg/banner4-spring.svg",
                  className: "banner4-spring img-fluid",
                  alt: "image",
                }),
                (0, i.jsx)("img", {
                  src: "assets/images/bg/banner4-dot-square.svg",
                  className: "banner4-dot-sq img-fluid",
                  alt: "image",
                }),
                (0, i.jsx)("a", { href: "#about", className: "go-down-btn" }),
                (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsxs)("div", {
                    className: "row justify-content-center align-items-center",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-lg-7",
                        children: (0, i.jsxs)("div", {
                          className: "banner-content style-2 wow fadeInLeft",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": "0.2s",
                          children: [
                            (0, i.jsx)("span", {
                              children: "Wellcome to Our Agency",
                            }),
                            (0, i.jsx)("h1", {
                              children: "Smart Ideas for your Brand are Here",
                            }),
                            (0, i.jsxs)("p", {
                              className: "para",
                              children: [
                                "Donec tincidunt lacinia diam, eu volutpat est sollicitudin at. Vestibulum ut mi tristi que, vulputate ante quis, tempus enim. Proin quis euismod purus. Suspen disse efficitur ",
                                (0, i.jsx)("br", {}),
                                " aliquam enim sed consequat vulputate ante quis.",
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "button-group gap-5",
                              children: [
                                (0, i.jsx)(c(), {
                                  href: "/project",
                                  children: (0, i.jsx)("a", {
                                    className: "eg-btn btn--primary4 btn--lg",
                                    style: { cursor: "pointer" },
                                    children: "Discover More",
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "btn-with-vdo d-flex align-items-center gap-4",
                                  onClick: function () {
                                    return a(!0);
                                  },
                                  style: { cursor: "pointer" },
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "video-play",
                                      children: (0, i.jsx)("div", {
                                        className:
                                          "popup-youtube video-icon style-2",
                                        children: (0, i.jsx)("i", {
                                          className: "bx bx-play",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "video-btn",
                                      children: "How it works",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "col-lg-5 position-relative",
                        children: [
                          (0, i.jsx)("img", {
                            src: "assets/images/bg/banner4-circel1.svg",
                            className: "banner4-circel1",
                            alt: "image",
                          }),
                          (0, i.jsx)("img", {
                            src: "assets/images/bg/banner4-circel2.svg",
                            className: "banner4-circel2",
                            alt: "image",
                          }),
                          (0, i.jsx)("div", {
                            className: "banner4-img",
                            children: (0, i.jsx)("img", {
                              src: "assets/images/bg/banner4-bg.png",
                              alt: "image",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)(t.Fragment, {
              children: (0, i.jsx)(d.Z, {
                channel: "youtube",
                isOpen: s,
                videoId: "TboWOSW7qCI",
                onClose: function () {
                  return a(!1);
                },
              }),
            }),
          ],
        });
      };
      var h = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: "faq-section pt-120 pb-120",
            children: [
              (0, i.jsx)("img", {
                src: "assets/images/bg/watermark2-bg.png",
                alt: "image",
                className: "watermark2-bg",
              }),
              (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsxs)("div", {
                  className: "row g-4 justify-content-center",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, i.jsxs)("div", {
                        className: "sidebar-card wow fadeInLeft",
                        "data-wow-duration": "1.5s",
                        "data-wow-delay": ".2s",
                        children: [
                          (0, i.jsx)("h2", {
                            children: "Discover Frequently Asked Questions?",
                          }),
                          (0, i.jsx)(c(), {
                            href: "/contact",
                            className: "eg-btn btn--primary4 btn--lg",
                            children: (0, i.jsx)("a", {
                              className: "eg-btn btn--primary4 btn--lg",
                              children: "Work Together",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "col-lg-8",
                      children: (0, i.jsxs)("div", {
                        className: "faq-wrap wow fadeInRight",
                        "data-wow-duration": "1.5s",
                        "data-wow-delay": ".2s",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "faq-item hover-btn",
                            children: [
                              (0, i.jsx)("span", {}),
                              (0, i.jsx)("h5", {
                                id: "heading10",
                                className: "accordion-button collapsed",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse10",
                                "aria-controls": "collapse10",
                                children:
                                  "01. Curious about how to build your own UX strategy? Here are five simple steps.",
                              }),
                              (0, i.jsx)("div", {
                                id: "collapse10",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "heading10",
                                children: (0, i.jsx)("div", {
                                  className: "faq-body",
                                  children:
                                    "Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "faq-item hover-btn",
                            children: [
                              (0, i.jsx)("span", {}),
                              (0, i.jsx)("h5", {
                                id: "heading11",
                                className: "accordion-button collapsed",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse11",
                                "aria-controls": "collapse11",
                                children:
                                  "02. Where Could a Career in UX Take You? Agency vs. In-House vs. Freelance?",
                              }),
                              (0, i.jsx)("div", {
                                id: "collapse11",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "heading11",
                                children: (0, i.jsx)("div", {
                                  className: "faq-body",
                                  children:
                                    "Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "faq-item hover-btn",
                            children: [
                              (0, i.jsx)("span", {}),
                              (0, i.jsx)("h5", {
                                id: "heading12",
                                className: "accordion-button collapsed",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse12",
                                "aria-controls": "collapse12",
                                children:
                                  "03. What Is a Problem Statement in UX? (And How To Write One?",
                              }),
                              (0, i.jsx)("div", {
                                id: "collapse12",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "heading12",
                                children: (0, i.jsx)("div", {
                                  className: "faq-body",
                                  children:
                                    "Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "faq-item hover-btn",
                            children: [
                              (0, i.jsx)("span", {}),
                              (0, i.jsx)("h5", {
                                id: "heading13",
                                className: "accordion-button collapsed",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse13",
                                "aria-controls": "collapse13",
                                children:
                                  "04. There are several techniques UX designers employ to arrive at a succinct ?",
                              }),
                              (0, i.jsx)("div", {
                                id: "collapse13",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "heading13",
                                children: (0, i.jsx)("div", {
                                  className: "faq-body",
                                  children:
                                    "Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "faq-item hover-btn",
                            children: [
                              (0, i.jsx)("span", {}),
                              (0, i.jsx)("h5", {
                                id: "heading14",
                                className: "accordion-button collapsed",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse14",
                                "aria-controls": "collapse14",
                                children:
                                  "05.What are the obstacles users are facing? What are they trying to do?",
                              }),
                              (0, i.jsx)("div", {
                                id: "collapse14",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "heading14",
                                children: (0, i.jsx)("div", {
                                  className: "faq-body",
                                  children:
                                    "Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var u = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className:
                "feature-section position-relative overflow-hidden pt-120 pb-120",
              children: [
                (0, i.jsx)("img", {
                  src: "assets/images/bg/dotted-bg.svg",
                  alt: "image",
                  className: "dotted-bg",
                }),
                (0, i.jsx)("img", {
                  src: "assets/images/bg/watermark2-bg.png",
                  alt: "image",
                  className: "watermark2-bg",
                }),
                (0, i.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, i.jsx)("div", {
                        className: "col-lg-6 col-md-8 col-sm-10",
                        children: (0, i.jsxs)("div", {
                          className: "section-title3 primary4 text-cener",
                          children: [
                            (0, i.jsx)("span", {
                              children: "- Why Choose Us-",
                            }),
                            (0, i.jsx)("h3", {
                              children: "Reasons to Choose Us",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Get the most of reduction in your team\u2019s operating costs for the whole product which creates amazing UI/UX experiences.",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "row justify-content-center g-4",
                      children: [
                        (0, i.jsx)("div", {
                          className: "col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsx)("div", {
                            className: "service-item2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.2s",
                            children: (0, i.jsxs)("div", {
                              className: "service-content",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "sn",
                                  children: "01",
                                }),
                                (0, i.jsx)("h4", {
                                  children: "Free Icon Plugin",
                                }),
                                (0, i.jsx)("p", {
                                  className: "para",
                                  children:
                                    "Nullam ullamcorper condimentum urna eu accumsan.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsx)("div", {
                            className: "service-item2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.4s",
                            children: (0, i.jsxs)("div", {
                              className: "service-content",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "sn",
                                  children: "02",
                                }),
                                (0, i.jsx)("h4", {
                                  children: "Free 6 Month Support",
                                }),
                                (0, i.jsx)("p", {
                                  className: "para",
                                  children:
                                    "Nullam ullamcorper condimentum urna eu accumsan.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsx)("div", {
                            className: "service-item2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.6s",
                            children: (0, i.jsxs)("div", {
                              className: "service-content",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "sn",
                                  children: "03",
                                }),
                                (0, i.jsx)("h4", {
                                  children: "Customer Strategy",
                                }),
                                (0, i.jsx)("p", {
                                  className: "para",
                                  children:
                                    "Nullam ullamcorper condimentum urna eu accumsan.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsx)("div", {
                            className: "service-item2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.8s",
                            children: (0, i.jsxs)("div", {
                              className: "service-content",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "sn",
                                  children: "04",
                                }),
                                (0, i.jsx)("h4", {
                                  children: "Best Premimum Image",
                                }),
                                (0, i.jsx)("p", {
                                  className: "para",
                                  children:
                                    "Nullam ullamcorper condimentum urna eu accumsan.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsx)("div", {
                            className: "service-item2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "1s",
                            children: (0, i.jsxs)("div", {
                              className: "service-content",
                              children: [
                                (0, i.jsx)("span", { children: "05" }),
                                (0, i.jsx)("h4", {
                                  children: "Most Advanced Features",
                                }),
                                (0, i.jsx)("p", {
                                  className: "para",
                                  children:
                                    "Nullam ullamcorper condimentum urna eu accumsan.",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsx)("div", {
                            className: "service-item2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "1.2s",
                            children: (0, i.jsxs)("div", {
                              className: "service-content",
                              children: [
                                (0, i.jsx)("span", { children: "06" }),
                                (0, i.jsx)("h4", {
                                  children: "Very Reasonable Price",
                                }),
                                (0, i.jsx)("p", {
                                  className: "para",
                                  children:
                                    "Nullam ullamcorper condimentum urna eu accumsan.",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        x = a(1084);
      var p = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className: "sponsor-section4",
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsx)("div", {
                  className: "sponsor-wrapper",
                  children: (0, i.jsxs)("div", {
                    className: "row justify-content-center gap-lg-0 gap-5",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-lg-2 col-md-3 col-sm-3 col-4",
                        children: (0, i.jsx)("div", {
                          className: "brand-item wow fadeInUp",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": ".2s",
                          children: (0, i.jsx)("svg", {
                            width: 70,
                            height: 34,
                            viewBox: "0 0 70 34",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M37.191 4.58617C37.191 2.22858 35.252 0.267395 32.844 0.267395C31.43 0.267395 30.198 1.05326 29.407 2.13121V4.39144C30.471 1.35231 32.844 1.54703 32.844 1.54703C34.552 1.54703 35.924 2.92403 35.924 4.58617C35.924 6.35262 34.552 7.72962 32.844 7.72962C31.997 7.72962 31.227 7.34017 30.674 6.74903L29.169 5.07994C28.525 4.48881 27.657 4.09935 26.677 4.09935C24.738 4.09935 23.163 5.67108 23.163 7.63226C23.163 9.49608 24.745 11.0678 26.677 11.0678C27.776 11.0678 28.749 10.574 29.407 9.79512V8.02867C28.35 10.0872 26.677 9.79512 26.677 9.79512C25.431 9.79512 24.423 8.81453 24.423 7.63921C24.423 6.36653 25.431 5.37899 26.677 5.37899C27.3 5.37899 27.86 5.57371 28.266 6.06749L29.771 7.73658C30.562 8.42508 31.647 8.9119 32.844 8.9119C35.259 8.90494 37.191 7.04112 37.191 4.58617ZM35.217 12.1388H30.1C30.793 12.1388 31.325 12.9247 31.325 13.6132V26.18C31.325 26.8685 30.793 27.6544 30.1 27.6544H35.217C34.524 27.6544 33.992 26.8685 33.992 26.18V13.6132C33.992 12.9247 34.524 12.1388 35.217 12.1388ZM25.662 13.6132V29.3165C25.662 29.3165 25.613 32.1609 23.401 33.7327C23.401 33.7327 28.343 33.0442 28.343 28.4333L28.322 13.6132C28.322 12.9247 28.854 12.1388 29.568 12.1388H24.43C25.13 12.1388 25.662 12.9247 25.662 13.6132ZM18.781 12.1388C19.481 12.1388 20.013 12.9247 20.013 13.6132V23.426C20.013 25.0951 18.69 26.4652 17.066 26.4652C15.456 26.4652 14.14 25.0882 14.14 23.5234V13.6132C14.14 12.9247 14.651 12.1388 15.358 12.1388H10.241C10.934 12.1388 11.466 12.9247 11.466 13.6132V23.2313C11.466 26.2704 13.986 28.0439 17.087 28.0439C20.181 28.0439 22.666 26.2774 22.666 23.2313V13.6132C22.666 12.9247 23.198 12.1388 23.898 12.1388H18.781ZM1.225 13.6132V26.18C1.225 26.8685 0.7 27.6544 0 27.6544H5.124C4.424 27.6544 3.892 26.8685 3.892 26.18V20.0948H7.455C8.148 20.0948 8.799 20.5886 8.799 21.2701L8.792 18.5231H3.892V13.7105H8.645C9.345 13.7105 9.989 14.3017 9.989 14.9832V12.1388H0C0.7 12.1388 1.225 12.9247 1.225 13.6132ZM53.837 19.601L50.694 17.9319C49.133 17.1461 49.343 15.8734 49.343 15.8734C49.343 15.8734 49.203 13.4184 52.325 13.4184C52.325 13.4184 54.292 13.3211 55.132 14.6911V12.3405C54.726 11.951 52.206 11.8467 52.206 11.8467C46.606 11.8467 46.683 16.1655 46.683 16.1655C46.683 16.1655 46.305 18.5231 49.567 20.2895L52.689 22.056C54.082 22.8419 53.914 23.8224 53.914 23.8224C53.914 23.8224 53.886 26.3748 50.351 26.4721C50.351 26.4721 47.467 26.2774 46.529 24.803L47.446 27.7448C48.482 28.1343 50.323 28.0369 50.323 28.0369C56.644 28.0369 56.504 23.6208 56.504 23.6208C56.504 23.6208 56.861 21.2701 53.837 19.601ZM64.883 12.1388C65.576 12.1388 66.108 12.9247 66.108 13.6132V23.426C66.108 25.0951 64.792 26.4652 63.175 26.4652C61.558 26.4652 60.228 25.0882 60.228 23.5234V13.6132C60.228 12.9247 60.774 12.1388 61.474 12.1388H56.336C57.036 12.1388 57.568 12.9247 57.568 13.6132L57.561 23.2313C57.561 26.2704 60.088 28.0439 63.189 28.0439C66.269 28.0439 68.768 26.2774 68.768 23.2313V13.6132C68.768 12.9247 69.3 12.1388 69.993 12.1388H64.883ZM36.127 12.1388L35.28 14.9902C35.959 13.7175 37.037 13.7175 37.037 13.7175H39.753V26.18C39.753 26.8685 39.221 27.6544 38.528 27.6544H43.645C42.952 27.6544 42.42 26.8685 42.42 26.18V13.7105H44.681C45.381 13.7105 45.948 14.3017 45.948 14.9832L46.788 12.1388H36.127Z",
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-2 col-md-3 col-sm-3 col-4",
                        children: (0, i.jsx)("div", {
                          className: "brand-item wow fadeInUp",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": ".4s",
                          children: (0, i.jsx)("svg", {
                            width: 90,
                            height: 20,
                            viewBox: "0 0 90 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M31.329 7.58558C30.987 7.94594 30.753 8.38738 30.42 8.75675C30.456 8.02702 30.456 7.29729 30.456 6.56756H26.64V19.5585H30.645V13.3513C30.636 12.2973 31.032 11.1622 31.923 10.5405C32.76 9.94594 33.84 9.90089 34.821 10.018V6.59459C33.588 6.25224 32.193 6.64864 31.329 7.58558ZM26.631 6.56756H26.64V6.55855L26.631 6.56756ZM25.722 14.1531C25.731 12.2522 25.416 10.2432 24.282 8.66666C22.437 5.99999 18.486 5.46846 15.759 7.01801V6.99999C13.986 7.97296 12.807 9.84684 12.555 11.8288C12.312 13.6396 12.591 15.5856 13.644 17.1171C14.607 18.5585 16.209 19.5225 17.91 19.8018C19.53 20.0721 21.267 19.9189 22.725 19.1171C24.084 18.4234 25.146 17.1712 25.551 15.6937C24.264 15.6576 22.977 15.6486 21.699 15.6937C21.06 17.1712 19.053 17.3784 17.793 16.6396C16.902 16.1351 16.488 15.1171 16.344 14.1531C19.467 14.1531 22.599 14.1892 25.722 14.1531ZM16.362 11.5946C16.56 10.6757 17.001 9.7117 17.892 9.28828C18.819 8.88287 20.034 8.9099 20.799 9.63963C21.348 10.1441 21.591 10.8829 21.708 11.5946H16.362ZM9.243 6.56756C8.352 9.34233 7.614 12.1802 6.651 14.9279C5.859 12.1261 4.968 9.35134 4.14 6.55855H0C1.602 10.8649 3.006 15.2342 4.572 19.5495C5.958 19.5135 7.335 19.5495 8.721 19.5495C10.224 15.2162 11.718 10.8829 13.248 6.55855C11.916 6.56756 10.575 6.53152 9.243 6.56756ZM51.273 10.1892C51.444 9.97296 51.669 9.78377 51.786 9.53152L51.822 6.55855H40.977V6.57657C40.977 7.62161 40.941 8.67567 40.977 9.72071C42.975 9.68468 44.982 9.73873 46.98 9.68468C47.106 9.82882 46.872 9.93693 46.809 10.045C44.847 12.2072 42.903 14.3784 40.968 16.5585V19.5676C44.676 19.5315 48.384 19.5315 52.092 19.5676V16.4324L45.711 16.3964C47.592 14.3513 49.41 12.2432 51.273 10.1892ZM35.874 6.57657L35.883 6.59459V19.5856H39.897C39.897 15.2522 39.861 10.9189 39.897 6.58558C38.556 6.57657 37.215 6.54053 35.874 6.57657ZM87.93 0.054044C86.364 3.57657 84.681 7.05405 83.052 10.5495C82.521 9.18918 81.837 7.89188 81.252 6.55855C80.577 6.52251 79.902 6.55855 79.236 6.55855C80.208 8.72972 81.288 10.8649 82.224 13.054H83.907C85.941 8.7117 87.93 4.34233 90 0.0180085C89.307 0.0180085 88.623 0.00899893 87.93 0.054044ZM78.984 9.09008C78.606 7.97296 77.787 7.009 76.698 6.54053C75.168 5.9099 73.278 6.02702 71.955 7.06305V7.04504C71.46 7.39639 71.127 7.90089 70.722 8.34233C70.722 7.74774 70.722 7.14414 70.758 6.54954H66.897V19.5495C68.211 19.5495 69.525 19.5135 70.839 19.5495V12.3423C70.821 11.5405 71.082 10.6937 71.658 10.1171C72.387 9.38738 73.638 9.27927 74.484 9.85585C75.051 10.2703 75.303 11 75.303 11.6757V19.5405C76.635 19.5405 77.967 19.5766 79.299 19.5405V12.6757C79.29 11.4775 79.416 10.2342 78.984 9.09008ZM35.892 1.9099H35.919L35.883 5.47747H39.897C39.897 4.28828 39.861 3.09909 39.897 1.9099H35.892ZM63.855 7.90089C62.208 6.4054 59.832 5.95494 57.681 6.34233C55.53 6.70269 53.595 8.19819 52.794 10.2432C52.254 11.4324 52.2 12.7748 52.299 14.054C52.542 16.2793 53.937 18.3784 55.989 19.3063C58.644 20.5225 62.118 20.1261 64.179 17.964C66.798 15.2703 66.672 10.4054 63.855 7.90089ZM61.164 16.1081C60.201 17.3243 58.077 17.3604 57.114 16.1081C56.214 14.9549 56.196 13.3964 56.322 12.009C56.493 10.9099 57.006 9.67567 58.14 9.27927V9.29729C58.959 8.99999 59.931 9.07206 60.66 9.57657C61.578 10.2342 61.947 11.4144 62.01 12.4955C62.082 13.7477 61.974 15.1081 61.164 16.1081Z",
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-2 col-md-3 col-sm-3 col-4",
                        children: (0, i.jsx)("div", {
                          className: "brand-item wow fadeInUp",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": ".6s",
                          children: (0, i.jsxs)("svg", {
                            width: 92,
                            height: 23,
                            viewBox: "0 0 92 23",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, i.jsxs)("g", {
                                clipPath: "url(#clip0_561_63)",
                                children: [
                                  (0, i.jsx)("path", {
                                    d: "M33.5285 12.417C33.4917 10.9779 32.8628 9.67016 31.4543 8.95059C29.4153 7.90902 25.9109 7.91067 24.1763 10.4144C24.1362 10.4735 24.1562 10.5737 24.1445 10.6542C24.081 10.6066 24.0191 10.5573 23.9555 10.508C23.9555 9.93959 23.9555 9.37281 23.9555 8.76002C22.6558 8.76002 21.4397 8.76002 20.2354 8.76002C20.2354 13.4602 20.2354 18.1161 20.2354 22.7588C21.5568 22.7588 22.8398 22.7588 24.1612 22.7588C24.1612 22.5157 24.1612 22.3037 24.1612 22.0951C24.1612 19.7918 24.1261 17.4836 24.183 15.1836C24.2064 14.3753 24.3536 13.5309 24.6396 12.7768C25.0545 11.6942 26.2789 11.2079 27.6422 11.4132C28.7395 11.5775 29.3852 12.2281 29.5708 13.4225C29.6495 13.917 29.693 14.4147 29.693 14.9125C29.7063 17.3324 29.7013 19.7491 29.7013 22.1723C29.7013 22.3727 29.7013 22.5765 29.7013 22.7588C31.0696 22.7588 32.3492 22.7588 33.5586 22.7588C33.5586 19.2809 33.6239 15.8473 33.5285 12.417Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M45.3533 0.895203C45.3533 4.00513 45.3533 7.1167 45.3533 10.3153C45.0773 10.0262 44.9016 9.82084 44.7043 9.63684C42.4427 7.52742 38.2626 7.9447 36.344 10.5667C34.3183 13.3316 34.2798 16.3923 35.5243 19.4447C36.7086 22.3641 39.5071 23.6931 42.6368 23.0343C43.8478 22.7748 44.8046 22.1423 45.5975 20.9808C45.5975 21.7003 45.5975 22.2261 45.5975 22.7649C46.8704 22.7649 48.0865 22.7649 49.3444 22.7649C49.3444 15.4493 49.3444 8.17306 49.3444 0.895203C48.0163 0.895203 46.6848 0.895203 45.3533 0.895203ZM45.007 18.3982C44.5822 19.5203 43.6889 20.1298 42.4728 20.2316C41.2685 20.3318 40.2933 19.8883 39.5958 18.9042C38.465 17.3008 38.4064 14.2911 39.4787 12.6449C40.1879 11.5606 41.2417 11.1778 42.4996 11.2764C43.6772 11.3684 44.5654 11.9533 44.9786 13.0211C45.4871 14.6623 45.4219 15.6941 45.4219 15.6941C45.4219 15.6941 45.549 16.9541 45.007 18.3982Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M14.5801 8.74054C14.5801 13.4638 14.5801 18.1163 14.5801 22.7623C15.8865 22.7623 17.1444 22.7623 18.4156 22.7623C18.4156 18.0736 18.4156 13.4227 18.4156 8.74054C17.126 8.74054 15.8631 8.74054 14.5801 8.74054Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M14.202 1.64124L14.1886 1.65438L14.1836 3.56995L15.7593 4.48338L14.1752 5.53973L14.1719 7.41424C15.7794 6.39402 17.2731 5.44938 18.8204 4.46531L14.202 1.64124Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M10.6017 8.70601C10.1969 8.69287 10.0163 8.83908 9.86073 9.18408C8.96247 11.1834 8.0408 13.1729 7.1208 15.1657C7.03884 15.3415 6.94516 15.5189 6.80967 15.7818C6.68756 15.5189 6.61062 15.3678 6.54371 15.2117C5.65215 13.1894 4.75222 11.1654 3.87404 9.1348C3.73855 8.8243 3.57796 8.69944 3.22502 8.7093C2.15113 8.73887 1.07556 8.73065 0 8.73887C0 8.77501 0 8.81444 0 8.85223C0.0719273 8.9623 0.158909 9.07072 0.214109 9.18737C2.30167 13.4999 4.38422 17.8124 6.47011 22.1249C6.5688 22.322 6.67418 22.5159 6.82807 22.8017C9.16655 18.0604 11.4532 13.4292 13.7783 8.71751C12.6592 8.71751 11.6271 8.73887 10.6017 8.70601Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M51.3076 1.03961L51.2976 1.05111L51.2909 2.96997L52.8666 3.8834L51.2875 4.93811L51.2842 6.81261C52.8883 5.79404 54.3837 4.84775 55.931 3.86368L51.3076 1.03961Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M91.164 19.8849C91.1255 17.442 91.1589 15.004 91.1506 12.566C91.1439 10.565 90.3008 9.41662 88.3705 8.78083C86.9554 8.31591 85.4884 8.27648 84.0214 8.35205C82.5327 8.42433 81.1042 8.73155 79.8848 9.61869C78.7323 10.4582 78.1702 11.5967 78.0983 13.0309C79.4214 13.0309 80.6893 13.0309 81.7766 13.0309C82.2383 12.3787 82.5009 11.6739 83.0144 11.3486C84.0582 10.6866 85.2626 10.7638 86.3833 11.273C87.0658 11.5753 87.1879 12.2391 87.1845 12.8896C87.1795 13.4975 86.7931 13.877 86.2144 14.0445C85.7276 14.1842 85.2308 14.291 84.734 14.3813C83.2754 14.6409 81.7816 14.7658 80.3682 15.1699C78.4763 15.7022 77.6483 17.0214 77.6533 18.9978C77.6567 20.91 78.6001 22.2736 80.3933 22.8535C80.9603 23.0359 81.5792 23.1246 82.1747 23.1542C84.0616 23.2544 85.8213 22.8683 87.2983 21.5409C87.4154 21.996 87.5141 22.3919 87.6111 22.7599C88.9744 22.7599 90.2707 22.7599 91.4433 22.7599C91.3429 21.7775 91.184 20.8312 91.164 19.8849ZM87.0858 18.247C86.9169 19.3953 86.2562 20.2085 85.0702 20.4254C84.3911 20.542 83.6651 20.5355 82.986 20.4386C82.1714 20.3252 81.7315 19.8011 81.6227 19.0585C81.5006 18.2848 81.7967 17.511 82.5109 17.2169C83.2336 16.913 84.0314 16.775 84.8026 16.5976C85.2057 16.5039 85.6172 16.494 86.0153 16.402C86.3866 16.3199 86.7496 16.1753 87.2364 16.0176C87.1896 16.8045 87.1929 17.5323 87.0858 18.247Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M72.3115 1.03961L72.3031 1.05111L72.2931 2.96997L73.8705 3.8834L72.2898 4.93811L72.2881 6.81261C73.8922 5.79404 75.3843 4.84775 76.9333 3.86368L72.3115 1.03961Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M67.4831 17.3737C67.0984 17.3655 66.9579 17.4756 66.8659 17.86C66.5079 19.3567 65.526 20.1584 64.034 20.2455C62.6724 20.3243 61.57 19.6014 61.0348 18.2067C60.3975 16.5572 60.4343 14.8897 61.0833 13.2534C61.4396 12.3647 62.0451 11.6779 63.027 11.3888C64.8703 10.8467 66.2236 11.6319 66.8726 13.6477C68.1037 13.6477 69.3499 13.6477 70.6797 13.6477C70.6529 12.4369 70.2465 11.42 69.5038 10.5378C67.2958 7.9273 62.2492 7.50509 59.3821 9.72952C57.1289 11.4742 56.5084 13.8991 56.6656 16.572C56.8044 18.9394 57.8097 20.8632 59.9007 22.1446C61.4095 23.0679 63.0772 23.265 64.8101 23.1435C68.0602 22.9102 70.5693 20.5001 70.765 17.3819C69.6677 17.3819 68.5704 17.3984 67.4831 17.3737Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M51.2842 8.75977C51.2842 13.4567 51.2842 18.1093 51.2842 22.7684C52.5889 22.7684 53.8535 22.7684 55.1448 22.7684C55.1448 18.0846 55.1448 13.4271 55.1448 8.75977C53.8384 8.75977 52.5638 8.75977 51.2842 8.75977Z",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M72.293 8.74054C72.293 13.4572 72.293 18.113 72.293 22.7689C73.6027 22.7689 74.8673 22.7689 76.1553 22.7689C76.1553 18.0802 76.1553 13.426 76.1553 8.74054C74.8656 8.74054 73.601 8.74054 72.293 8.74054Z",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("defs", {
                                children: (0, i.jsx)("clipPath", {
                                  id: "clip0_561_63",
                                  children: (0, i.jsx)("rect", {
                                    width: 92,
                                    height: 23,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-2 col-md-3 col-sm-3 col-4",
                        children: (0, i.jsx)("div", {
                          className: "brand-item wow fadeInUp",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": ".8s",
                          children: (0, i.jsx)("svg", {
                            width: 94,
                            height: 18,
                            viewBox: "0 0 94 18",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsxs)("g", {
                              opacity: "0.8",
                              children: [
                                (0, i.jsx)("path", {
                                  d: "M12.0984 1.81762C11.6258 1.55283 10.2712 1.71656 8.64441 2.22518C5.79724 4.19066 3.39436 7.08642 3.22656 11.7366C3.19608 11.8479 2.91537 11.7214 2.85974 11.6871C2.09085 10.1987 1.78626 8.63155 2.42829 6.37068C2.54799 6.1695 2.15657 5.92196 2.08644 5.99242C1.94544 6.1352 1.35812 6.76712 0.967986 7.45059C-0.965991 10.8388 0.298604 15.1801 3.68224 17.0802C7.06495 18.983 11.3366 17.7555 13.2201 14.3379C15.3992 10.3936 13.3758 2.53817 12.0984 1.8178V1.81762Z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M24.2074 3.7106C20.1966 3.7106 17.2852 6.72225 17.2852 10.8717C17.2852 15.0548 20.1889 17.9767 24.3473 17.9767C26.4476 17.9767 28.1104 17.3134 29.4328 15.948C29.8279 15.5172 29.8703 15.1021 29.8703 14.9434C29.8703 14.2669 29.3722 13.7756 28.6861 13.7756C28.3401 13.7756 28.0509 13.9076 27.719 14.2174C26.9701 14.922 25.984 15.642 24.3473 15.642C22.0711 15.642 20.2201 13.9161 20.1035 11.6999H29.1624C30.1474 11.6999 30.626 11.2345 30.626 10.2783C30.626 9.99645 30.626 9.79341 30.5698 9.39253C30.0818 5.835 27.7037 3.71116 24.2077 3.71116L24.2074 3.7106ZM24.2074 5.93197C26.3824 5.93197 27.7779 7.33192 27.864 9.5913H20.1063C20.31 7.50028 22.0604 5.93197 24.2074 5.93197ZM39.2762 3.7106C37.4542 3.7106 35.6502 4.76881 34.9452 6.23848V5.33009C34.9452 3.92328 33.8657 3.8519 33.6494 3.8519C33.0098 3.8519 32.3259 4.24017 32.3259 5.33009V16.2997C32.3259 17.7609 33.4752 17.8347 33.7054 17.8347C33.9358 17.8347 35.0855 17.7609 35.0855 16.2997V10.4192C35.0855 7.86075 36.5212 6.07364 38.5765 6.07364C40.5672 6.07364 41.5353 7.39311 41.5353 10.1079V16.2997C41.5353 17.7609 42.685 17.8347 42.9154 17.8347C43.1456 17.8347 44.2949 17.7609 44.2949 16.2997V9.23269C44.2949 6.56334 42.9763 3.71153 39.2762 3.71153V3.7106ZM56.7809 3.85208C56.1433 3.85208 55.6808 4.22775 55.4054 4.96685L51.63 14.5555L47.8832 4.96685C47.5898 4.21681 47.1309 3.85208 46.4797 3.85208C45.7188 3.85208 45.0996 4.45174 45.0996 5.18898C45.0996 5.37125 45.1201 5.60804 45.2729 5.9774L49.6118 16.3244C50.1288 17.5727 50.9792 17.8347 51.6019 17.8347C52.2241 17.8347 53.0751 17.5727 53.5932 16.3251L57.9601 5.92048C58.1094 5.55556 58.1325 5.28763 58.1325 5.1608C58.1325 4.41503 57.5509 3.85227 56.7809 3.85227V3.85208ZM64.8023 3.7106C63.0374 3.7106 61.3935 4.20717 60.1743 5.10758C59.7606 5.39573 59.5596 5.75508 59.5596 6.20714C59.5596 6.82942 60.03 7.31727 60.6318 7.31727C60.8919 7.31727 61.1833 7.21269 61.4506 7.02356C62.4989 6.31784 63.4839 5.98871 64.55 5.98871C66.5903 5.98871 67.7616 7.03673 67.7616 8.86426V9.16687C63.1815 9.17188 58.5232 9.73055 58.5232 13.7548C58.5232 16.6511 60.9738 17.9478 63.4024 17.9478C65.3367 17.9478 66.8815 17.1736 67.8725 15.708V16.4128C67.8725 17.4623 68.5702 17.8345 69.1691 17.8345C69.295 17.8345 70.4083 17.7946 70.4083 16.4128V9.03336C70.4083 5.69982 68.3121 3.70986 64.8021 3.70986L64.8023 3.7106ZM67.1811 11.2189H67.7616V11.8611C67.7616 14.2093 66.2811 15.7264 63.9906 15.7264C63.3688 15.7264 61.3395 15.5803 61.3395 13.6982C61.3395 11.4759 64.6732 11.2191 67.1811 11.2191V11.2189ZM77.596 6.38459C78.8033 6.38459 78.8645 5.4356 78.8645 5.24554C78.8645 4.68129 78.5311 4.07811 77.5958 4.07811H75.1133V1.54189C75.1133 0.408956 74.3855 0.00695801 73.7617 0.00695801C73.5314 0.00695801 72.3821 0.0807564 72.3821 1.54189V13.5859C72.3821 16.3654 73.7396 17.8345 76.3087 17.8345C76.9733 17.8345 77.621 17.7158 78.0443 17.5165C78.5301 17.2717 78.8083 16.8694 78.8083 16.4128C78.8083 15.7689 78.3458 15.3018 77.7082 15.3018C77.585 15.3018 77.4098 15.3326 77.2165 15.3887C76.9802 15.4485 76.8201 15.4716 76.645 15.4716C75.5998 15.4716 75.1133 14.7826 75.1133 13.3029V6.38329H77.596V6.38459ZM86.7201 3.7106C82.5462 3.7106 79.5182 6.69851 79.5182 10.8145C79.5182 12.8186 80.2521 14.6452 81.5837 15.9574C82.905 17.2593 84.729 17.9761 86.7202 17.9761C90.8419 17.9761 93.9502 14.8974 93.9502 10.8147C93.9502 6.69851 90.9088 3.71079 86.7202 3.71079H86.7201V3.7106ZM86.7201 15.6129C83.8578 15.6129 82.3612 13.1991 82.3612 10.8142C82.3612 7.53737 84.6207 6.04508 86.7201 6.04508C88.8195 6.04508 91.0789 7.53737 91.0789 10.8142C91.0789 14.1116 88.8195 15.6129 86.7201 15.6129Z",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-2 col-md-3 col-sm-3 col-4",
                        children: (0, i.jsx)("div", {
                          className: "brand-item wow fadeInUp",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": "1s",
                          children: (0, i.jsx)("svg", {
                            width: 70,
                            height: 34,
                            viewBox: "0 0 70 34",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M37.191 4.58617C37.191 2.22858 35.252 0.267395 32.844 0.267395C31.43 0.267395 30.198 1.05326 29.407 2.13121V4.39144C30.471 1.35231 32.844 1.54703 32.844 1.54703C34.552 1.54703 35.924 2.92403 35.924 4.58617C35.924 6.35262 34.552 7.72962 32.844 7.72962C31.997 7.72962 31.227 7.34017 30.674 6.74903L29.169 5.07994C28.525 4.48881 27.657 4.09935 26.677 4.09935C24.738 4.09935 23.163 5.67108 23.163 7.63226C23.163 9.49608 24.745 11.0678 26.677 11.0678C27.776 11.0678 28.749 10.574 29.407 9.79512V8.02867C28.35 10.0872 26.677 9.79512 26.677 9.79512C25.431 9.79512 24.423 8.81453 24.423 7.63921C24.423 6.36653 25.431 5.37899 26.677 5.37899C27.3 5.37899 27.86 5.57371 28.266 6.06749L29.771 7.73658C30.562 8.42508 31.647 8.9119 32.844 8.9119C35.259 8.90494 37.191 7.04112 37.191 4.58617ZM35.217 12.1388H30.1C30.793 12.1388 31.325 12.9247 31.325 13.6132V26.18C31.325 26.8685 30.793 27.6544 30.1 27.6544H35.217C34.524 27.6544 33.992 26.8685 33.992 26.18V13.6132C33.992 12.9247 34.524 12.1388 35.217 12.1388ZM25.662 13.6132V29.3165C25.662 29.3165 25.613 32.1609 23.401 33.7327C23.401 33.7327 28.343 33.0442 28.343 28.4333L28.322 13.6132C28.322 12.9247 28.854 12.1388 29.568 12.1388H24.43C25.13 12.1388 25.662 12.9247 25.662 13.6132ZM18.781 12.1388C19.481 12.1388 20.013 12.9247 20.013 13.6132V23.426C20.013 25.0951 18.69 26.4652 17.066 26.4652C15.456 26.4652 14.14 25.0882 14.14 23.5234V13.6132C14.14 12.9247 14.651 12.1388 15.358 12.1388H10.241C10.934 12.1388 11.466 12.9247 11.466 13.6132V23.2313C11.466 26.2704 13.986 28.0439 17.087 28.0439C20.181 28.0439 22.666 26.2774 22.666 23.2313V13.6132C22.666 12.9247 23.198 12.1388 23.898 12.1388H18.781ZM1.225 13.6132V26.18C1.225 26.8685 0.7 27.6544 0 27.6544H5.124C4.424 27.6544 3.892 26.8685 3.892 26.18V20.0948H7.455C8.148 20.0948 8.799 20.5886 8.799 21.2701L8.792 18.5231H3.892V13.7105H8.645C9.345 13.7105 9.989 14.3017 9.989 14.9832V12.1388H0C0.7 12.1388 1.225 12.9247 1.225 13.6132ZM53.837 19.601L50.694 17.9319C49.133 17.1461 49.343 15.8734 49.343 15.8734C49.343 15.8734 49.203 13.4184 52.325 13.4184C52.325 13.4184 54.292 13.3211 55.132 14.6911V12.3405C54.726 11.951 52.206 11.8467 52.206 11.8467C46.606 11.8467 46.683 16.1655 46.683 16.1655C46.683 16.1655 46.305 18.5231 49.567 20.2895L52.689 22.056C54.082 22.8419 53.914 23.8224 53.914 23.8224C53.914 23.8224 53.886 26.3748 50.351 26.4721C50.351 26.4721 47.467 26.2774 46.529 24.803L47.446 27.7448C48.482 28.1343 50.323 28.0369 50.323 28.0369C56.644 28.0369 56.504 23.6208 56.504 23.6208C56.504 23.6208 56.861 21.2701 53.837 19.601ZM64.883 12.1388C65.576 12.1388 66.108 12.9247 66.108 13.6132V23.426C66.108 25.0951 64.792 26.4652 63.175 26.4652C61.558 26.4652 60.228 25.0882 60.228 23.5234V13.6132C60.228 12.9247 60.774 12.1388 61.474 12.1388H56.336C57.036 12.1388 57.568 12.9247 57.568 13.6132L57.561 23.2313C57.561 26.2704 60.088 28.0439 63.189 28.0439C66.269 28.0439 68.768 26.2774 68.768 23.2313V13.6132C68.768 12.9247 69.3 12.1388 69.993 12.1388H64.883ZM36.127 12.1388L35.28 14.9902C35.959 13.7175 37.037 13.7175 37.037 13.7175H39.753V26.18C39.753 26.8685 39.221 27.6544 38.528 27.6544H43.645C42.952 27.6544 42.42 26.8685 42.42 26.18V13.7105H44.681C45.381 13.7105 45.948 14.3017 45.948 14.9832L46.788 12.1388H36.127Z",
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-lg-2 col-md-3 col-sm-3 col-4",
                        children: (0, i.jsx)("div", {
                          className: "brand-item wow fadeInUp",
                          "data-wow-duration": "1.5s",
                          "data-wow-delay": "1.2s",
                          children: (0, i.jsx)("svg", {
                            width: 90,
                            height: 20,
                            viewBox: "0 0 90 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M31.329 7.58558C30.987 7.94594 30.753 8.38738 30.42 8.75675C30.456 8.02702 30.456 7.29729 30.456 6.56756H26.64V19.5585H30.645V13.3513C30.636 12.2973 31.032 11.1622 31.923 10.5405C32.76 9.94594 33.84 9.90089 34.821 10.018V6.59459C33.588 6.25224 32.193 6.64864 31.329 7.58558ZM26.631 6.56756H26.64V6.55855L26.631 6.56756ZM25.722 14.1531C25.731 12.2522 25.416 10.2432 24.282 8.66666C22.437 5.99999 18.486 5.46846 15.759 7.01801V6.99999C13.986 7.97296 12.807 9.84684 12.555 11.8288C12.312 13.6396 12.591 15.5856 13.644 17.1171C14.607 18.5585 16.209 19.5225 17.91 19.8018C19.53 20.0721 21.267 19.9189 22.725 19.1171C24.084 18.4234 25.146 17.1712 25.551 15.6937C24.264 15.6576 22.977 15.6486 21.699 15.6937C21.06 17.1712 19.053 17.3784 17.793 16.6396C16.902 16.1351 16.488 15.1171 16.344 14.1531C19.467 14.1531 22.599 14.1892 25.722 14.1531ZM16.362 11.5946C16.56 10.6757 17.001 9.7117 17.892 9.28828C18.819 8.88287 20.034 8.9099 20.799 9.63963C21.348 10.1441 21.591 10.8829 21.708 11.5946H16.362ZM9.243 6.56756C8.352 9.34233 7.614 12.1802 6.651 14.9279C5.859 12.1261 4.968 9.35134 4.14 6.55855H0C1.602 10.8649 3.006 15.2342 4.572 19.5495C5.958 19.5135 7.335 19.5495 8.721 19.5495C10.224 15.2162 11.718 10.8829 13.248 6.55855C11.916 6.56756 10.575 6.53152 9.243 6.56756ZM51.273 10.1892C51.444 9.97296 51.669 9.78377 51.786 9.53152L51.822 6.55855H40.977V6.57657C40.977 7.62161 40.941 8.67567 40.977 9.72071C42.975 9.68468 44.982 9.73873 46.98 9.68468C47.106 9.82882 46.872 9.93693 46.809 10.045C44.847 12.2072 42.903 14.3784 40.968 16.5585V19.5676C44.676 19.5315 48.384 19.5315 52.092 19.5676V16.4324L45.711 16.3964C47.592 14.3513 49.41 12.2432 51.273 10.1892ZM35.874 6.57657L35.883 6.59459V19.5856H39.897C39.897 15.2522 39.861 10.9189 39.897 6.58558C38.556 6.57657 37.215 6.54053 35.874 6.57657ZM87.93 0.054044C86.364 3.57657 84.681 7.05405 83.052 10.5495C82.521 9.18918 81.837 7.89188 81.252 6.55855C80.577 6.52251 79.902 6.55855 79.236 6.55855C80.208 8.72972 81.288 10.8649 82.224 13.054H83.907C85.941 8.7117 87.93 4.34233 90 0.0180085C89.307 0.0180085 88.623 0.00899893 87.93 0.054044ZM78.984 9.09008C78.606 7.97296 77.787 7.009 76.698 6.54053C75.168 5.9099 73.278 6.02702 71.955 7.06305V7.04504C71.46 7.39639 71.127 7.90089 70.722 8.34233C70.722 7.74774 70.722 7.14414 70.758 6.54954H66.897V19.5495C68.211 19.5495 69.525 19.5135 70.839 19.5495V12.3423C70.821 11.5405 71.082 10.6937 71.658 10.1171C72.387 9.38738 73.638 9.27927 74.484 9.85585C75.051 10.2703 75.303 11 75.303 11.6757V19.5405C76.635 19.5405 77.967 19.5766 79.299 19.5405V12.6757C79.29 11.4775 79.416 10.2342 78.984 9.09008ZM35.892 1.9099H35.919L35.883 5.47747H39.897C39.897 4.28828 39.861 3.09909 39.897 1.9099H35.892ZM63.855 7.90089C62.208 6.4054 59.832 5.95494 57.681 6.34233C55.53 6.70269 53.595 8.19819 52.794 10.2432C52.254 11.4324 52.2 12.7748 52.299 14.054C52.542 16.2793 53.937 18.3784 55.989 19.3063C58.644 20.5225 62.118 20.1261 64.179 17.964C66.798 15.2703 66.672 10.4054 63.855 7.90089ZM61.164 16.1081C60.201 17.3243 58.077 17.3604 57.114 16.1081C56.214 14.9549 56.196 13.3964 56.322 12.009C56.493 10.9099 57.006 9.67567 58.14 9.27927V9.29729C58.959 8.99999 59.931 9.07206 60.66 9.57657C61.578 10.2342 61.947 11.4144 62.01 12.4955C62.082 13.7477 61.974 15.1081 61.164 16.1081Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        j = a(8352),
        C = a(8116);
      function g(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        );
      }
      function w(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {},
            i = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            i.forEach(function (s) {
              g(e, s, a[s]);
            });
        }
        return e;
      }
      C.ZP.use([C.W_, C.tl, C.pt, C.W_]);
      var v = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: "portfolio-section3 pt-120",
            children: (0, i.jsxs)("div", {
              className: "container-fluid",
              children: [
                (0, i.jsxs)("div", {
                  className: "row align-items-center justify-content-center",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "col-md-8 d-flex justify-content-lg-start justify-content-center",
                      children: (0, i.jsxs)("div", {
                        className: "section-title3 primary4 text-start",
                        children: [
                          (0, i.jsx)("span", {
                            children: "-My Latest Ui/Ux Project-",
                          }),
                          (0, i.jsx)("h3", {
                            children: "Our Best Professonal Ui/Ux Design",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "col-md-3 d-lg-flex justify-content-end d-none",
                      children: (0, i.jsxs)("div", {
                        className:
                          "slider-arrows2 style-4 text-center d-flex gap-4 mb-50",
                        children: [
                          (0, i.jsx)("div", {
                            className: "sponsor-prev1 swiper-prev-arrow",
                            tabIndex: 0,
                            role: "button",
                            "aria-label": "Previous slide",
                            children: (0, i.jsxs)("svg", {
                              width: 46,
                              height: 46,
                              viewBox: "0 0 46 46",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, i.jsx)("circle", {
                                  cx: 23,
                                  cy: 23,
                                  r: "22.25",
                                  strokeWidth: "1.5",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M20 27.573V23V18.427C20 18.2574 19.8022 18.1648 19.672 18.2734L14 23L19.672 27.7266C19.8022 27.8352 20 27.7426 20 27.573Z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M32 23.5C32.2761 23.5 32.5 23.2761 32.5 23C32.5 22.7239 32.2761 22.5 32 22.5V23.5ZM19.672 27.7266L19.9921 27.3425V27.3425L19.672 27.7266ZM14 23L13.6799 22.6159L13.219 23L13.6799 23.3841L14 23ZM19.672 18.2734L19.3519 17.8893L19.3519 17.8893L19.672 18.2734ZM32 22.5H20V23.5H32V22.5ZM19.5 23V27.573H20.5V23H19.5ZM19.9921 27.3425L14.3201 22.6159L13.6799 23.3841L19.3519 28.1107L19.9921 27.3425ZM14.3201 23.3841L19.9921 18.6575L19.3519 17.8893L13.6799 22.6159L14.3201 23.3841ZM19.5 18.427V23H20.5V18.427H19.5ZM19.9921 18.6575C19.7967 18.8203 19.5 18.6814 19.5 18.427H20.5C20.5 17.8335 19.8078 17.5093 19.3519 17.8893L19.9921 18.6575ZM19.5 27.573C19.5 27.3186 19.7967 27.1797 19.9921 27.3425L19.3519 28.1107C19.8078 28.4907 20.5 28.1665 20.5 27.573H19.5Z",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "sponsor-next1 swiper-next-arrow",
                            tabIndex: 0,
                            role: "button",
                            "aria-label": "Next slide",
                            children: (0, i.jsxs)("svg", {
                              width: 46,
                              height: 46,
                              viewBox: "0 0 46 46",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, i.jsx)("circle", { cx: 23, cy: 23, r: 23 }),
                                (0, i.jsx)("path", {
                                  d: "M26 18.427V23V27.573C26 27.7426 26.1978 27.8352 26.328 27.7266L32 23L26.328 18.2734C26.1978 18.1648 26 18.2574 26 18.427Z",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M14 22.5C13.7239 22.5 13.5 22.7239 13.5 23C13.5 23.2761 13.7239 23.5 14 23.5V22.5ZM26.328 18.2734L26.0079 18.6575V18.6575L26.328 18.2734ZM32 23L32.3201 23.3841L32.781 23L32.3201 22.6159L32 23ZM26.328 27.7266L26.6481 28.1107L26.6481 28.1107L26.328 27.7266ZM14 23.5H26V22.5H14V23.5ZM26.5 23V18.427H25.5V23H26.5ZM26.0079 18.6575L31.6799 23.3841L32.3201 22.6159L26.6481 17.8893L26.0079 18.6575ZM31.6799 22.6159L26.0079 27.3425L26.6481 28.1107L32.3201 23.3841L31.6799 22.6159ZM26.5 27.573V23H25.5V27.573H26.5ZM26.0079 27.3425C26.2033 27.1797 26.5 27.3186 26.5 27.573H25.5C25.5 28.1665 26.1922 28.4907 26.6481 28.1107L26.0079 27.3425ZM26.5 18.427C26.5 18.6814 26.2033 18.8203 26.0079 18.6575L26.6481 17.8893C26.1922 17.5093 25.5 17.8335 25.5 18.427H26.5Z",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "row position-relative justify-content-center",
                  children: (0, i.jsx)(
                    j.tq,
                    w(
                      {},
                      {
                        slidesPerView: "auto",
                        speed: 1200,
                        spaceBetween: 20,
                        autoplay: !0,
                        centerMode: !0,
                        loop: !0,
                        roundLengths: !0,
                        pagination: {
                          el: ".swiper-pagination",
                          clickable: "true",
                        },
                        navigation: {
                          nextEl: ".sponsor-prev1",
                          prevEl: ".sponsor-next1",
                        },
                        breakpoints: {
                          280: { slidesPerView: 1 },
                          576: { slidesPerView: 2 },
                          768: { slidesPerView: 3 },
                          1024: { slidesPerView: 4 },
                          1200: { slidesPerView: 4 },
                          1400: { slidesPerView: 5 },
                        },
                      },
                      {
                        className: "swiper portfolio-slider3 swiper-fix",
                        children: (0, i.jsxs)("div", {
                          className: "swiper-wrapper",
                          children: [
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.2s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf41.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Bottle Design",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children:
                                            "Worlds best bottle bottle design",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.4s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf42.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Mockup",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children:
                                            "Pocket-Sized Notebooks Hold",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.8s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf43.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "App Design",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children: "Pocket-Sized Mobile Phone",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.8s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf44.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "App Design",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children: "App Interface Design",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.8s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf45.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Illustration",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children: "Ui/Ux Best Illustration",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.8s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf44.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "App Design",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children: "App Interface Design",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(j.o5, {
                              className: "swiper-slide",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "portfolio-item1 style-3 wow fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.8s",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "portfolio-img",
                                    children: (0, i.jsx)("img", {
                                      alt: "image",
                                      src: "assets/images/bg/portf43.png",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "portfolio-content",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "App Design",
                                      }),
                                      (0, i.jsx)("h4", {
                                        children: (0, i.jsx)(c(), {
                                          href: "/",
                                          children: "Pocket-Sized Mobile Phone",
                                        }),
                                      }),
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(c(), {
                                            href: "/",
                                            className: "text-btn",
                                            children: "Live Preview",
                                          }),
                                          (0, i.jsxs)("svg", {
                                            width: 18,
                                            height: 10,
                                            viewBox: "0 0 18 10",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              (0, i.jsx)("path", {
                                                d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                              }),
                                              (0, i.jsx)("path", {
                                                d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      };
      var f = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className:
              "service-section4 pt-120 pb-120 position-relative overflow-hidden",
            children: [
              (0, i.jsx)("img", {
                src: "assets/images/bg/watermark1-bg.png",
                className: "watermark1-bg",
                alt: "image",
              }),
              (0, i.jsxs)("div", {
                className: "container",
                children: [
                  (0, i.jsx)("div", {
                    className: "row justify-content-center",
                    children: (0, i.jsx)("div", {
                      className: "col-lg-6 col-md-8 col-sm-10",
                      children: (0, i.jsxs)("div", {
                        className: "section-title3 primary4 text-cener",
                        children: [
                          (0, i.jsx)("span", { children: "-What We Offer-" }),
                          (0, i.jsx)("h3", {
                            children: "Our Creative Services",
                          }),
                          (0, i.jsx)("p", {
                            children:
                              "Get the most of reduction in your team\u2019s operating costs for the whole product which creates amazing UI/UX experiences.",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "row g-4 justify-content-center",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-md-6 col-sm-6 col-11",
                        children: (0, i.jsx)("div", {
                          className: "service-item4 hover-border4",
                          children: (0, i.jsxs)("div", {
                            className:
                              "row d-flex justify-content-center g-2 text-sm-start text-center",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-lg-3 col-md-12 p-0",
                                children: (0, i.jsx)("div", {
                                  className: "service-img",
                                  children: (0, i.jsx)("img", {
                                    src: "assets/images/bg/service41.png",
                                    className: "img-fluid",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "col-lg-9 col-md-12 p-0",
                                children: (0, i.jsxs)("div", {
                                  className: "service-content",
                                  children: [
                                    (0, i.jsx)("h4", {
                                      children: (0, i.jsx)(c(), {
                                        href: "/service-details",
                                        children: (0, i.jsx)("a", {
                                          children: "Ui/Ux Creative Design",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "para",
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and adipiscing elit.",
                                    }),
                                    (0, i.jsx)(c(), {
                                      href: "/service-details",
                                      className: "text-btn",
                                      children: "Read More ",
                                    }),
                                    (0, i.jsxs)("svg", {
                                      width: 18,
                                      height: 10,
                                      viewBox: "0 0 18 10",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        (0, i.jsx)("path", {
                                          d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                        }),
                                        (0, i.jsx)("path", {
                                          d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-md-6 col-sm-6 col-11",
                        children: (0, i.jsx)("div", {
                          className: "service-item4 hover-border4",
                          children: (0, i.jsxs)("div", {
                            className:
                              "row d-flex justify-content-center g-2 text-sm-start text-center",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-lg-3 p-0",
                                children: (0, i.jsx)("div", {
                                  className: "service-img",
                                  children: (0, i.jsx)("img", {
                                    src: "assets/images/bg/service42.png",
                                    className: "img-fluid",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "col-lg-9 p-0",
                                children: (0, i.jsxs)("div", {
                                  className: "service-content",
                                  children: [
                                    (0, i.jsx)("h4", {
                                      children: (0, i.jsx)(c(), {
                                        href: "/service-details",
                                        children: (0, i.jsx)("a", {
                                          children: "App Development",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "para",
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and adipiscing elit.",
                                    }),
                                    (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(c(), {
                                          href: "/service-details",
                                          className: "text-btn",
                                          children: "Read More ",
                                        }),
                                        (0, i.jsxs)("svg", {
                                          width: 18,
                                          height: 10,
                                          viewBox: "0 0 18 10",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-md-6 col-sm-6 col-11",
                        children: (0, i.jsx)("div", {
                          className: "service-item4 hover-border4",
                          children: (0, i.jsxs)("div", {
                            className:
                              "row d-flex justify-content-center g-2 text-sm-start text-center",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-lg-3 p-0",
                                children: (0, i.jsx)("div", {
                                  className: "service-img",
                                  children: (0, i.jsx)("img", {
                                    src: "assets/images/bg/service43.png",
                                    className: "img-fluid",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "col-lg-9 p-0",
                                children: (0, i.jsxs)("div", {
                                  className: "service-content",
                                  children: [
                                    (0, i.jsx)("h4", {
                                      children: (0, i.jsx)(c(), {
                                        href: "/service-details",
                                        children: (0, i.jsx)("a", {
                                          children:
                                            "Professional Content Writer",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "para",
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and adipiscing elit.",
                                    }),
                                    (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(c(), {
                                          href: "/service-details",
                                          className: "text-btn",
                                          children: "Read More ",
                                        }),
                                        (0, i.jsxs)("svg", {
                                          width: 18,
                                          height: 10,
                                          viewBox: "0 0 18 10",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-md-6 col-sm-6 col-11",
                        children: (0, i.jsx)("div", {
                          className: "service-item4 hover-border4",
                          children: (0, i.jsxs)("div", {
                            className:
                              "row d-flex justify-content-center g-2 text-sm-start text-center",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-lg-3 p-0",
                                children: (0, i.jsx)("div", {
                                  className: "service-img",
                                  children: (0, i.jsx)("img", {
                                    src: "assets/images/bg/service44.png",
                                    className: "img-fluid",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "col-lg-9 p-0",
                                children: (0, i.jsxs)("div", {
                                  className: "service-content",
                                  children: [
                                    (0, i.jsx)("h4", {
                                      children: (0, i.jsx)(c(), {
                                        href: "/service-details",
                                        children: (0, i.jsx)("a", {
                                          children: "Graphic Design",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "para",
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and adipiscing elit.",
                                    }),
                                    (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(c(), {
                                          href: "/service-details",
                                          className: "text-btn",
                                          children: "Read More ",
                                        }),
                                        (0, i.jsxs)("svg", {
                                          width: 18,
                                          height: 10,
                                          viewBox: "0 0 18 10",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "row justify-content-center mar-tp-50",
                    children: (0, i.jsx)("div", {
                      className: "col-md-4 text-center",
                      children: (0, i.jsx)(c(), {
                        href: "/contact",
                        children: (0, i.jsx)("a", {
                          className: "eg-btn btn--primary4 btn--lg",
                          children: "Get Started",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var N = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className:
                "team-section2 pb-120 position-relative overflow-hidden",
              children: [
                (0, i.jsx)("img", {
                  src: "assets/images/bg/watermark1-bg.png",
                  className: "watermark1-bg",
                  alt: "image",
                }),
                (0, i.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, i.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, i.jsx)("div", {
                        className: "col-lg-6 col-md-8 col-sm-10",
                        children: (0, i.jsxs)("div", {
                          className: "section-title3 primary4 text-cener",
                          children: [
                            (0, i.jsx)("span", { children: "-Our Team-" }),
                            (0, i.jsx)("h3", {
                              children: "Experts Ready To Serve",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Get the most of reduction in your team\u2019s operating costs for the whole product which creates amazing UI/UX experiences.",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "row d-flex justify-content-center g-4",
                      children: [
                        (0, i.jsx)("div", {
                          className: "col-xl-4 col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsxs)("div", {
                            className: "single-team2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.2s",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "team-image",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "assets/images/bg/team21.png",
                                    alt: "image",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "social-area gap-3",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "social-links d-flex justify-content-center align-items-center flex-row gap-3",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.instagram.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.pinterest.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-pinterest-alt",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "team-content",
                                children: [
                                  (0, i.jsx)("h4", {
                                    className: "name",
                                    children: "Marvin McKinney",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "designation",
                                    children: "Marvin McKinney",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-xl-4 col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsxs)("div", {
                            className: "single-team2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.4s",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "team-image",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "assets/images/bg/team22.png",
                                    alt: "image",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "social-area gap-3",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "social-links d-flex justify-content-center align-items-center flex-row gap-3",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.instagram.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.pinterest.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-pinterest-alt",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "team-content",
                                children: [
                                  (0, i.jsx)("h4", {
                                    className: "name",
                                    children: "Cameron Williamson",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "designation",
                                    children: "Web Developer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-xl-4 col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsxs)("div", {
                            className: "single-team2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.6s",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "team-image",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "assets/images/bg/team23.png",
                                    alt: "image",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "social-area gap-3",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "social-links d-flex justify-content-center align-items-center flex-row gap-3",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.instagram.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.pinterest.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-pinterest-alt",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "team-content",
                                children: [
                                  (0, i.jsx)("h4", {
                                    className: "name",
                                    children: "Brooklyn Simmons",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "designation",
                                    children: "Ui/Ux Designer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-xl-4 col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsxs)("div", {
                            className: "single-team2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "0.8s",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "team-image",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "assets/images/bg/team24.png",
                                    alt: "image",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "social-area gap-3",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "social-links d-flex justify-content-center align-items-center flex-row gap-3",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.instagram.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.pinterest.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-pinterest-alt",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "team-content",
                                children: [
                                  (0, i.jsx)("h4", {
                                    className: "name",
                                    children: "Arlene McCoy",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "designation",
                                    children: "Graphic Designer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-xl-4 col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsxs)("div", {
                            className: "single-team2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "1s",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "team-image",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "assets/images/bg/team25.png",
                                    alt: "image",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "social-area gap-3",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "social-links d-flex justify-content-center align-items-center flex-row gap-3",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.instagram.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.pinterest.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-pinterest-alt",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "team-content",
                                children: [
                                  (0, i.jsx)("h4", {
                                    className: "name",
                                    children: "Savannah Nguyen",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "designation",
                                    children: "Programmer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-xl-4 col-lg-4 col-md-6 col-sm-10",
                          children: (0, i.jsxs)("div", {
                            className: "single-team2 style-2 wow fadeInDown",
                            "data-wow-duration": "1.5s",
                            "data-wow-delay": "1.2s",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "team-image",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "assets/images/bg/team26.png",
                                    alt: "image",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "social-area gap-3",
                                    children: (0, i.jsxs)("ul", {
                                      className:
                                        "social-links d-flex justify-content-center align-items-center flex-row gap-3",
                                      children: [
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.instagram.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsx)("li", {
                                          children: (0, i.jsx)("a", {
                                            href: "https://www.pinterest.com/",
                                            children: (0, i.jsx)("i", {
                                              className: "bx bxl-pinterest-alt",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "team-content",
                                children: [
                                  (0, i.jsx)("h4", {
                                    className: "name",
                                    children: "Lincoln Anthony",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "designation",
                                    children: "Manager",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        b = a(7857);
      function L(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        );
      }
      function y(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {},
            i = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            i.forEach(function (s) {
              L(e, s, a[s]);
            });
        }
        return e;
      }
      C.ZP.use([C.W_, C.tl, C.pt, C.W_]);
      var V = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className: "testimonial-section4",
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "col-xl-6 col-lg-7",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "section-title3 text-white text-start",
                          children: [
                            (0, i.jsx)("span", { children: "-Testimonial-" }),
                            (0, i.jsx)("h3", {
                              className: "text-white",
                              children: "Our Client Feedback",
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "testimonial-area",
                          children: (0, i.jsxs)(
                            j.tq,
                            y(
                              {},
                              {
                                slidesPerView: 1,
                                speed: 1200,
                                spaceBetween: 25,
                                loop: !0,
                                autoplay: !0,
                                roundLengths: !0,
                                pagination: {
                                  el: ".testimonial4-pagination",
                                  type: "fraction",
                                },
                                navigation: {
                                  nextEl: ".testi-prev4",
                                  prevEl: ".testi-next4",
                                },
                              },
                              {
                                className:
                                  "swiper testimonial-slider4 swiper-fix",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "swiper-wrapper",
                                    children: [
                                      (0, i.jsx)(j.o5, {
                                        className: "swiper-slide",
                                        children: (0, i.jsxs)("div", {
                                          className:
                                            "testimonial-single3 style-3 wow fadeInUp",
                                          "data-wow-duration": "1.5s",
                                          "data-wow-delay": ".2s",
                                          children: [
                                            (0, i.jsxs)("div", {
                                              className: "author-area",
                                              children: [
                                                (0, i.jsxs)("div", {
                                                  className: "author gap-3",
                                                  children: [
                                                    (0, i.jsx)("div", {
                                                      className: "author-img",
                                                      children: (0, i.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/images/bg/client21.png",
                                                          alt: "image",
                                                        }
                                                      ),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                      className: "author-desig",
                                                      children: [
                                                        (0, i.jsx)("h5", {
                                                          children:
                                                            "Johan Martin Sr",
                                                        }),
                                                        (0, i.jsx)("p", {
                                                          children: "Manager",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsx)("img", {
                                                  src: "assets/images/icons/quote4.svg",
                                                  alt: "image",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("p", {
                                              className: "para",
                                              children:
                                                "You have been absolutely wonderful for Kinship Center, & I can thank you enough for all your tremendous skills, support and patience specia lly during our merger. You will always be Kinship Center vendor of choice! Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been the industry standard dummy text ever.",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, i.jsx)(j.o5, {
                                        className: "swiper-slide",
                                        children: (0, i.jsxs)("div", {
                                          className:
                                            "testimonial-single3 style-3 wow fadeInUp",
                                          "data-wow-duration": "1.5s",
                                          "data-wow-delay": ".2s",
                                          children: [
                                            (0, i.jsxs)("div", {
                                              className: "author-area",
                                              children: [
                                                (0, i.jsxs)("div", {
                                                  className: "author gap-3",
                                                  children: [
                                                    (0, i.jsx)("div", {
                                                      className: "author-img",
                                                      children: (0, i.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/images/bg/client22.png",
                                                          alt: "image",
                                                        }
                                                      ),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                      className: "author-desig",
                                                      children: [
                                                        (0, i.jsx)("h5", {
                                                          children:
                                                            "John Peter",
                                                        }),
                                                        (0, i.jsx)("p", {
                                                          children:
                                                            "Area Manager",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsx)("img", {
                                                  src: "assets/images/icons/quote4.svg",
                                                  alt: "image",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("p", {
                                              className: "para",
                                              children:
                                                "You have been absolutely wonderful for Kinship Center, & I can thank you enough for all your tremendous skills, support and patience specia lly during our merger. You will always be Kinship Center vendor of choice! Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been the industry standard dummy text ever.",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, i.jsx)(j.o5, {
                                        className: "swiper-slide",
                                        children: (0, i.jsxs)("div", {
                                          className:
                                            "testimonial-single3 style-3 wow fadeInUp",
                                          "data-wow-duration": "1.5s",
                                          "data-wow-delay": ".2s",
                                          children: [
                                            (0, i.jsxs)("div", {
                                              className: "author-area",
                                              children: [
                                                (0, i.jsxs)("div", {
                                                  className: "author gap-3",
                                                  children: [
                                                    (0, i.jsx)("div", {
                                                      className: "author-img",
                                                      children: (0, i.jsx)(
                                                        "img",
                                                        {
                                                          src: "assets/images/bg/client22.png",
                                                          alt: "image",
                                                        }
                                                      ),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                      className: "author-desig",
                                                      children: [
                                                        (0, i.jsx)("h5", {
                                                          children:
                                                            "Micheal Anderson",
                                                        }),
                                                        (0, i.jsx)("p", {
                                                          children:
                                                            "Product Manager",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsx)("img", {
                                                  src: "assets/images/icons/quote4.svg",
                                                  alt: "image",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("p", {
                                              className: "para",
                                              children:
                                                "You have been absolutely wonderful for Kinship Center, & I can thank you enough for all your tremendous skills, support and patience specia lly during our merger. You will always be Kinship Center vendor of choice! Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been the industry standard dummy text ever.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "testimonial-footer",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className: "testimonial4-pagination",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "slider-arrows2 style-4 text-center d-flex gap-4",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "testi-prev4 swiper-prev-arrow",
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "Previous slide",
                                            children: (0, i.jsx)("i", {
                                              className: "bi bi-arrow-left",
                                            }),
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "testi-next4 swiper-next-arrow",
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "Next slide",
                                            children: (0, i.jsx)("i", {
                                              className: "bi bi-arrow-right",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "col-xl-5 col-lg-5 offset-xl-1",
                      children: (0, i.jsx)("div", {
                        className: "company-counter style-2 wow fadeInUp",
                        "data-wow-duration": "1.5s",
                        "data-wow-delay": "0.2s",
                        children: (0, i.jsxs)("div", {
                          className: "row g-4 d-flex justify-content-center",
                          children: [
                            (0, i.jsx)("div", {
                              className: "col-sm-6 col-6",
                              children: (0, i.jsx)("div", {
                                className:
                                  "counter-single style-2 text-center d-flex flex-row wow animate fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.2s",
                                children: (0, i.jsxs)("div", {
                                  className: "coundown",
                                  children: [
                                    (0, i.jsxs)("h2", {
                                      className: "odometer",
                                      "data-odometer-final": 450,
                                      children: [
                                        (0, i.jsx)(b.ZP, {
                                          className: "odometer",
                                          end: 250,
                                          delay: 2,
                                          duration: 5,
                                        }),
                                        (0, i.jsx)("i", {
                                          className: "bx bx-plus",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("a", {
                                      href: "#",
                                      children: "Project",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "col-sm-6 col-6",
                              children: (0, i.jsx)("div", {
                                className:
                                  "counter-single style-2 text-center d-flex flex-row wow animate fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.4s",
                                children: (0, i.jsxs)("div", {
                                  className: "coundown",
                                  children: [
                                    (0, i.jsxs)("h2", {
                                      className: "odometer",
                                      "data-odometer-final": 50,
                                      children: [
                                        (0, i.jsx)(b.ZP, {
                                          className: "odometer",
                                          end: 150,
                                          delay: 2,
                                          duration: 5,
                                        }),
                                        (0, i.jsx)("i", {
                                          className: "bx bx-plus",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("a", {
                                      href: "#",
                                      children: "Customer",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "col-sm-6 col-6",
                              children: (0, i.jsx)("div", {
                                className:
                                  "counter-single style-2 text-center d-flex flex-row wow animate fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.6s",
                                children: (0, i.jsxs)("div", {
                                  className: "coundown",
                                  children: [
                                    (0, i.jsxs)("h2", {
                                      className: "odometer",
                                      "data-odometer-final": 963,
                                      children: [
                                        (0, i.jsx)(b.ZP, {
                                          className: "odometer",
                                          end: 350,
                                          delay: 2,
                                          duration: 5,
                                        }),
                                        (0, i.jsx)("i", {
                                          className: "bx bx-plus",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("a", {
                                      href: "#",
                                      children: "Success",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "col-sm-6 col-6",
                              children: (0, i.jsx)("div", {
                                className:
                                  "counter-single style-2 text-center d-flex flex-row wow animate fadeInDown",
                                "data-wow-duration": "1.5s",
                                "data-wow-delay": "0.8s",
                                children: (0, i.jsxs)("div", {
                                  className: "coundown",
                                  children: [
                                    (0, i.jsxs)("h2", {
                                      className: "odometer",
                                      "data-odometer-final": 50,
                                      children: [
                                        (0, i.jsx)(b.ZP, {
                                          className: "odometer",
                                          end: 250,
                                          delay: 2,
                                          duration: 5,
                                        }),
                                        (0, i.jsx)("i", {
                                          className: "bx bx-plus",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("a", {
                                      href: "#",
                                      children: "Awards",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        M = a(8696),
        Z = a(6557);
      var H = function () {
        var e = (0, t.useState)(!1),
          s = e[0],
          a = e[1];
        return (
          (0, t.useEffect)(function () {
            a(!1),
              setTimeout(function () {
                a(!0);
              }, 3e3);
          }, []),
          (0, i.jsx)(i.Fragment, {
            children: s
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(r(), {
                      children: [
                        (0, i.jsx)("title", {
                          children: " CodeErtz - Evolve bit by bit",
                        }),
                        (0, i.jsx)("meta", {
                          name: "description",
                          content: "Generated by create next app",
                        }),
                        (0, i.jsx)("link", {
                          rel: "icon",
                          href: "assets/images/icons/favicon4.png",
                        }),
                      ],
                    }),
                    (0, i.jsx)(Z.Z, {}),
                    (0, i.jsx)(m, {}),
                    (0, i.jsx)(p, {}),
                    (0, i.jsx)(o, {}),
                    (0, i.jsx)(f, {}),
                    (0, i.jsx)(v, {}),
                    (0, i.jsx)(u, {}),
                    (0, i.jsx)(N, {}),
                    (0, i.jsx)(V, {}),
                    (0, i.jsx)(h, {}),
                    (0, i.jsx)(x.Z, {
                      footerStyle: "style-4",
                      footerImage: "assets/images/icons/footer4-logo.svg",
                    }),
                  ],
                })
              : (0, i.jsx)(M.Z, { style: "home4preloader" }),
          })
        );
      };
    },
    7857: function (e, s, a) {
      "use strict";
      var i = a(7294),
        t = a(8273);
      function n(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var r = n(i);
      function l(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          s &&
            (i = i.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function c(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? l(Object(a), !0).forEach(function (s) {
                o(e, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      function o(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        );
      }
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var a = arguments[s];
                  for (var i in a)
                    Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
                }
                return e;
              }),
          d.apply(this, arguments)
        );
      }
      function m(e, s) {
        if (null == e) return {};
        var a,
          i,
          t = (function (e, s) {
            if (null == e) return {};
            var a,
              i,
              t = {},
              n = Object.keys(e);
            for (i = 0; i < n.length; i++)
              (a = n[i]), s.indexOf(a) >= 0 || (t[a] = e[a]);
            return t;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (i = 0; i < n.length; i++)
            (a = n[i]),
              s.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (t[a] = e[a]));
        }
        return t;
      }
      var h =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? i.useLayoutEffect
          : i.useEffect;
      function u(e) {
        var s = i.useRef(e);
        return (
          h(function () {
            s.current = e;
          }),
          i.useCallback(function () {
            for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
              a[i] = arguments[i];
            return s.current.apply(void 0, a);
          }, [])
        );
      }
      var x = [
          "ref",
          "startOnMount",
          "enableReinitialize",
          "delay",
          "onEnd",
          "onStart",
          "onPauseResume",
          "onReset",
          "onUpdate",
        ],
        p = {
          decimal: ".",
          delay: null,
          prefix: "",
          suffix: "",
          duration: 2,
          start: 0,
          startOnMount: !0,
          enableReinitialize: !0,
        },
        j = function (e) {
          var s = i.useMemo(
              function () {
                return c(c({}, p), e);
              },
              [e]
            ),
            a = s.ref,
            n = s.startOnMount,
            r = s.enableReinitialize,
            l = s.delay,
            o = s.onEnd,
            d = s.onStart,
            h = s.onPauseResume,
            j = s.onReset,
            C = s.onUpdate,
            g = m(s, x),
            w = i.useRef(),
            v = i.useRef(),
            f = i.useRef(!1),
            N = u(function () {
              return (function (e, s) {
                var a = s.decimal,
                  i = s.decimals,
                  n = s.duration,
                  r = s.easingFn,
                  l = s.end,
                  c = s.formattingFn,
                  o = s.numerals,
                  d = s.prefix,
                  m = s.separator,
                  h = s.start,
                  u = s.suffix,
                  x = s.useEasing,
                  p = s.enableScrollSpy,
                  j = s.scrollSpyDelay;
                return new t.CountUp(e, l, {
                  startVal: h,
                  duration: n,
                  decimal: a,
                  decimalPlaces: i,
                  easingFn: r,
                  formattingFn: c,
                  numerals: o,
                  separator: m,
                  prefix: d,
                  suffix: u,
                  useEasing: x,
                  useGrouping: !!m,
                  enableScrollSpy: p,
                  scrollSpyDelay: j,
                });
              })("string" === typeof a ? a : a.current, g);
            }),
            b = u(function (e) {
              var s = w.current;
              if (s && !e) return s;
              var a = N();
              return (w.current = a), a;
            }),
            L = u(function () {
              var e = function () {
                return b(!0).start(function () {
                  null === o ||
                    void 0 === o ||
                    o({ pauseResume: y, reset: V, start: Z, update: M });
                });
              };
              l && l > 0 ? (v.current = setTimeout(e, 1e3 * l)) : e(),
                null === d ||
                  void 0 === d ||
                  d({ pauseResume: y, reset: V, update: M });
            }),
            y = u(function () {
              b().pauseResume(),
                null === h ||
                  void 0 === h ||
                  h({ reset: V, start: Z, update: M });
            }),
            V = u(function () {
              v.current && clearTimeout(v.current),
                b().reset(),
                null === j ||
                  void 0 === j ||
                  j({ pauseResume: y, start: Z, update: M });
            }),
            M = u(function (e) {
              b().update(e),
                null === C ||
                  void 0 === C ||
                  C({ pauseResume: y, reset: V, start: Z });
            }),
            Z = u(function () {
              V(), L();
            }),
            H = u(function (e) {
              n && (e && V(), L());
            });
          return (
            i.useEffect(
              function () {
                f.current ? r && H(!0) : ((f.current = !0), H());
              },
              [
                r,
                f,
                H,
                l,
                e.start,
                e.suffix,
                e.prefix,
                e.duration,
                e.separator,
                e.decimals,
                e.decimal,
                e.formattingFn,
              ]
            ),
            i.useEffect(
              function () {
                return function () {
                  V();
                };
              },
              [V]
            ),
            { start: Z, pauseResume: y, reset: V, update: M, getCountUp: b }
          );
        },
        C = ["className", "redraw", "containerProps", "children", "style"];
      s.ZP = function (e) {
        var s = e.className,
          a = e.redraw,
          t = e.containerProps,
          n = e.children,
          l = e.style,
          o = m(e, C),
          h = r.default.useRef(null),
          x = r.default.useRef(!1),
          p = j(
            c(
              c({}, o),
              {},
              {
                ref: h,
                startOnMount: "function" !== typeof n || 0 === e.delay,
                enableReinitialize: !1,
              }
            )
          ),
          g = p.start,
          w = p.reset,
          v = p.update,
          f = p.pauseResume,
          N = p.getCountUp,
          b = u(function () {
            g();
          }),
          L = u(function (s) {
            e.preserveValue || w(), v(s);
          }),
          y = u(function () {
            "function" !== typeof e.children || h.current instanceof Element
              ? N()
              : console.error(
                  'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.'
                );
          });
        i.useEffect(
          function () {
            y();
          },
          [y]
        ),
          i.useEffect(
            function () {
              x.current && L(e.end);
            },
            [e.end, L]
          );
        var V = a && e;
        return (
          i.useEffect(
            function () {
              a && x.current && b();
            },
            [b, a, V]
          ),
          i.useEffect(
            function () {
              !a && x.current && b();
            },
            [
              b,
              a,
              e.start,
              e.suffix,
              e.prefix,
              e.duration,
              e.separator,
              e.decimals,
              e.decimal,
              e.className,
              e.formattingFn,
            ]
          ),
          i.useEffect(function () {
            x.current = !0;
          }, []),
          "function" === typeof n
            ? n({
                countUpRef: h,
                start: g,
                reset: w,
                update: v,
                pauseResume: f,
                getCountUp: N,
              })
            : r.default.createElement(
                "span",
                d({ className: s, ref: h, style: l }, t),
                e.start ? N().formattingFn(e.start) : ""
              )
        );
      };
    },
  },
  function (e) {
    e.O(0, [45, 352, 627, 694, 774, 888, 179], function () {
      return (s = 9328), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
