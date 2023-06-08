(function(s) {
    function t(t) {
        for (var e, o, l = t[0], n = t[1], c = t[2], p = 0, u = []; p < l.length; p++)
            o = l[p],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && u.push(i[o][0]),
            i[o] = 0;
        for (e in n)
            Object.prototype.hasOwnProperty.call(n, e) && (s[e] = n[e]);
        m && m(t);
        while (u.length)
            u.shift()();
        return r.push.apply(r, c || []),
        a()
    }
    function a() {
        for (var s, t = 0; t < r.length; t++) {
            for (var a = r[t], e = !0, l = 1; l < a.length; l++) {
                var n = a[l];
                0 !== i[n] && (e = !1)
            }
            e && (r.splice(t--, 1),
            s = o(o.s = a[0]))
        }
        return s
    }
    var e = {}
      , i = {
        app: 0
    }
      , r = [];
    function o(t) {
        if (e[t])
            return e[t].exports;
        var a = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return s[t].call(a.exports, a, a.exports, o),
        a.l = !0,
        a.exports
    }
    o.m = s,
    o.c = e,
    o.d = function(s, t, a) {
        o.o(s, t) || Object.defineProperty(s, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    o.r = function(s) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(s, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(s, t) {
        if (1 & t && (s = o(s)),
        8 & t)
            return s;
        if (4 & t && "object" === typeof s && s && s.__esModule)
            return s;
        var a = Object.create(null);
        if (o.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: s
        }),
        2 & t && "string" != typeof s)
            for (var e in s)
                o.d(a, e, function(t) {
                    return s[t]
                }
                .bind(null, e));
        return a
    }
    ,
    o.n = function(s) {
        var t = s && s.__esModule ? function() {
            return s["default"]
        }
        : function() {
            return s
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(s, t) {
        return Object.prototype.hasOwnProperty.call(s, t)
    }
    ,
    o.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , n = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var c = 0; c < l.length; c++)
        t(l[c]);
    var m = n;
    r.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(s, t, a) {
        s.exports = a("56d7")
    },
    "0500": function(s, t, a) {
        "use strict";
        a("882e")
    },
    "0c52": function(s, t, a) {},
    1396: function(s, t, a) {
        "use strict";
        a("da10")
    },
    "1f81": function(s, t, a) {
        "use strict";
        a("f8f5")
    },
    "2b1e": function(s, t, a) {},
    "2b53": function(s, t, a) {
        "use strict";
        a("40b3")
    },
    "325d": function(s, t, a) {
        "use strict";
        a("e27a")
    },
    3281: function(s, t, a) {
        "use strict";
        a("0c52")
    },
    3397: function(s, t, a) {
        "use strict";
        a("d86f")
    },
    "3ae7": function(s, t, a) {},
    "40b3": function(s, t, a) {},
    "42b7": function(s, t, a) {},
    4875: function(s, t, a) {},
    5623: function(s, t, a) {
        "use strict";
        a("ca75")
    },
    "56d7": function(s, t, a) {
        "use strict";
        a.r(t);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var e = a("2b0e")
          , i = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("router-view")], 1)
        }
          , r = []
          , o = (a("1f81"),
        a("0500"),
        a("fdf0"),
        a("2877"))
          , l = {}
          , n = Object(o["a"])(l, i, r, !1, null, null, null)
          , c = n.exports
          , m = a("8c4f")
          , p = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "rel",
                attrs: {
                    id: "home-page-wrapper"
                }
            }, [s._m(0), s._m(1), a("section", {
                staticClass: "text-desc-block-wrapper menu"
            }, [a("div", {
                staticClass: "container",
                attrs: {
                    "data-menuanchor": "urban"
                }
            }, [a("router-link", {
                staticClass: "text-desc-block",
                attrs: {
                    to: "/urban",
                    tag: "div"
                }
            }, [a("h4", {
                staticClass: "section-block-title"
            }, [s._v("Payrail Urban")]), a("div", {
                staticClass: "section-desc-txt"
            }, [s._v(" Accelerating financial ease-on the go. You are confident of a better grip of your day-to-day transactions ")]), a("button", {
                staticClass: "visit-site-btn"
            }, [s._v("Visit Site")])])], 1), a("div", {
                staticClass: "container",
                attrs: {
                    "data-menuanchor": "agency"
                }
            }, [a("router-link", {
                staticClass: "text-desc-block",
                attrs: {
                    to: "/agency",
                    tag: "div"
                }
            }, [a("h4", {
                staticClass: "section-block-title"
            }, [s._v("Payrail Agency")]), a("div", {
                staticClass: "section-desc-txt"
            }, [s._v(" Your branchless Next-door Banking. Built for Super agents and agents; enabling multiple type transactions in an easy, convenient, and cost-effective manner. ")]), a("button", {
                staticClass: "visit-site-btn"
            }, [s._v("Visit Site")])])], 1), a("div", {
                staticClass: "container",
                attrs: {
                    "data-menuanchor": "business"
                }
            }, [a("router-link", {
                staticClass: "text-desc-block",
                attrs: {
                    to: "/business",
                    tag: "div"
                }
            }, [a("h4", {
                staticClass: "section-block-title"
            }, [s._v("Payrail Business")]), a("div", {
                staticClass: "section-desc-txt"
            }, [s._v(" Helping solopreneurs and small businesses grow into an all-inclusive banking service that works. ")]), a("button", {
                staticClass: "visit-site-btn"
            }, [s._v("Visit Site")])])], 1)]), a("full-page", {
                ref: "fullpage",
                attrs: {
                    options: s.options,
                    id: "fullpage"
                }
            }, [a("div", {
                staticClass: "section rel",
                attrs: {
                    id: "urban-section"
                }
            }, [a("section", {
                staticClass: "section-nav"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "flex-div justify-content-btw"
            }, [a("router-link", {
                staticClass: "section-logo-link",
                attrs: {
                    to: "/#"
                }
            }, [a("img", {
                staticClass: "section-logo",
                attrs: {
                    src: "images/AG LOGO WHITE.svg",
                    alt: "payrail urban"
                }
            })]), a("div", {
                staticClass: "sound-and-signin flex-div"
            }, [a("button", {
                staticClass: "audio-trigger"
            }, [a("img", {
                staticClass: "audio-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/audio-icon-black.svg",
                    alt: "audio icon"
                }
            }), a("img", {
                staticClass: "audio-icon muted-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/mute-2.svg",
                    alt: "muted audio icon"
                }
            })]), a("router-link", {
                staticClass: "flex-div",
                attrs: {
                    to: "/#"
                }
            }, [a("span", [s._v("Sign in")]), a("img", {
                staticClass: "right-arr",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-arr-white.svg",
                    alt: "right arrow"
                }
            })])], 1)], 1)])]), a("div", {
                staticClass: "scroll-line flex-div"
            }, [a("span", [s._v("Scroll")]), a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/line.svg",
                    alt: "line"
                }
            })]), a("section", {
                staticClass: "home-footer"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "copyright-p"
            }, [s._v(" © Angala Financial Technologies Limited. All Rights Reserved. ")])])])]), a("div", {
                staticClass: "section rel",
                attrs: {
                    id: "agency-section"
                }
            }, [a("section", {
                staticClass: "section-nav"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "flex-div justify-content-btw"
            }, [a("router-link", {
                staticClass: "section-logo-link",
                attrs: {
                    to: "/#"
                }
            }, [a("img", {
                staticClass: "section-logo",
                attrs: {
                    src: "images/AG LOGO WHITE.svg",
                    alt: "payrail agency"
                }
            })]), a("div", {
                staticClass: "sound-and-signin flex-div"
            }, [a("button", {
                staticClass: "audio-trigger"
            }, [a("img", {
                staticClass: "audio-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/audio-icon-black.svg",
                    alt: "audio icon"
                }
            }), a("img", {
                staticClass: "audio-icon muted-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/mute-2.svg",
                    alt: "muted audio icon"
                }
            })]), a("router-link", {
                staticClass: "flex-div",
                attrs: {
                    to: "/#"
                }
            }, [a("span", [s._v("Sign in")]), a("img", {
                staticClass: "right-arr",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-arr-white.svg",
                    alt: "right arrow"
                }
            })])], 1)], 1)])]), a("div", {
                staticClass: "scroll-line flex-div"
            }, [a("span", [s._v("Scroll")]), a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/line.svg",
                    alt: "line"
                }
            })]), a("section", {
                staticClass: "home-footer"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "copyright-p"
            }, [s._v(" © Angala Financial Technologies Limited. All Rights Reserved. ")])])])]), a("div", {
                staticClass: "section rel",
                attrs: {
                    id: "business-section"
                }
            }, [a("section", {
                staticClass: "section-nav"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "flex-div justify-content-btw"
            }, [a("router-link", {
                staticClass: "section-logo-link",
                attrs: {
                    to: "/#"
                }
            }, [a("img", {
                staticClass: "section-logo",
                attrs: {
                    src: "images/AG LOGO WHITE.svg",
                    alt: "payrail business"
                }
            })]), a("div", {
                staticClass: "sound-and-signin flex-div"
            }, [a("button", {
                staticClass: "audio-trigger"
            }, [a("img", {
                staticClass: "audio-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/audio-icon-black.svg",
                    alt: "audio icon"
                }
            }), a("img", {
                staticClass: "audio-icon muted-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/mute-2.svg",
                    alt: "muted audio icon"
                }
            })]), a("router-link", {
                staticClass: "flex-div",
                attrs: {
                    to: "/#"
                }
            }, [a("span", [s._v("Sign in")]), a("img", {
                staticClass: "right-arr",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-arr-white.svg",
                    alt: "right arrow"
                }
            })])], 1)], 1)])]), a("div", {
                staticClass: "scroll-line flex-div"
            }, [a("span", [s._v("Scroll")]), a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/line.svg",
                    alt: "line"
                }
            })]), a("section", {
                staticClass: "home-footer"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "copyright-p"
            }, [s._v(" © Angala Financial Technologies Limited. All Rights Reserved. ")])])])])])], 1)
        }
          , u = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "scroll-wheel-wrapper"
            }, [a("ul", {
                staticClass: "scroll-wheel wheel-item menu",
                attrs: {
                    id: "menu-wheel"
                }
            }, [a("li", {
                staticClass: "scrolled-point urban-point",
                attrs: {
                    "data-menuanchor": "urban"
                }
            }, [a("a", {
                attrs: {
                    href: "/urban",
                    onmouseenter: "window.location.href='/#urban'"
                }
            }, [a("img", {
                staticClass: "disabled-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-disabled.svg",
                    alt: "urban-icon"
                }
            }), a("img", {
                staticClass: "active-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-active.svg",
                    alt: "urban-icon"
                }
            })])]), a("li", {
                staticClass: "scrolled-point agency-point",
                attrs: {
                    "data-menuanchor": "agency"
                }
            }, [a("a", {
                attrs: {
                    href: "/agency",
                    onmouseenter: "window.location.href='/#agency'"
                }
            }, [a("img", {
                staticClass: "disabled-icon",
                attrs: {
                    src: "images/Group 9302484.png",
                    alt: "agency-icon"
                }
            }), a("img", {
                staticClass: "active-icon",
                attrs: {
                    src: "images/oilandgasactive.png",
                    alt: "agency-icon"
                }
            })])]), a("li", {
                staticClass: "scrolled-point business-point",
                attrs: {
                    "data-menuanchor": "business"
                }
            }, [a("a", {
                attrs: {
                    href: "/business",
                    onmouseenter: "window.location.href='/#business'"
                }
            }, [a("img", {
                staticClass: "disabled-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-disabled.svg",
                    alt: "business-icon"
                }
            }), a("img", {
                staticClass: "active-icon",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-active.svg",
                    alt: "business-icon"
                }
            })])]), a("img", {
                staticClass: "scroll-wheel-circle urban-circle",
                attrs: {
                    "data-menuanchor": "urban",
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-circle.svg",
                    alt: "scroll-circle"
                }
            }), a("img", {
                staticClass: "scroll-wheel-circle agency-circle",
                attrs: {
                    "data-menuanchor": "agency",
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-circle.svg",
                    alt: "scroll-circle"
                }
            }), a("img", {
                staticClass: "scroll-wheel-circle business-circle",
                attrs: {
                    "data-menuanchor": "business",
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-circle.svg",
                    alt: "scroll-circle"
                }
            })]), a("div", {
                staticClass: "outer-dotted-wheel wheel-item"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/wheel-ring.png",
                    alt: "ring"
                }
            })]), a("div", {
                staticClass: "inner-dotted-wheel wheel-item"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/wheel-ring.png",
                    alt: "ring"
                }
            })]), a("div", {
                staticClass: "wheel-shadow wheel-item"
            }), a("div", {
                staticClass: "inner-wheel-shadow wheel-item"
            })])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "menu-indicator-wrapper"
            }, [a("div", {
                staticClass: "container"
            }, [a("ul", {
                staticClass: "menu menu-indicator"
            }, [a("li", {
                staticClass: "page-indicator urban-indicator",
                attrs: {
                    "data-menuanchor": "urban"
                }
            }, [a("a", {
                attrs: {
                    href: "#urban"
                }
            }, [a("span", {
                staticClass: "indicator-bullet"
            }), a("span", {
                staticClass: "indicator-title"
            }, [s._v("Payrail Urban")])])]), a("hr"), a("li", {
                staticClass: "page-indicator agency-indicator",
                attrs: {
                    "data-menuanchor": "agency"
                }
            }, [a("a", {
                attrs: {
                    href: "#agency"
                }
            }, [a("span", {
                staticClass: "indicator-bullet"
            }), a("span", {
                staticClass: "indicator-title"
            }, [s._v("Payrail Agency")])])]), a("hr"), a("li", {
                staticClass: "page-indicator business-indicator",
                attrs: {
                    "data-menuanchor": "business"
                }
            }, [a("a", {
                attrs: {
                    href: "#business"
                }
            }, [a("span", {
                staticClass: "indicator-bullet"
            }), a("span", {
                staticClass: "indicator-title"
            }, [s._v("Payrail Business")])])])])])])
        }
        ]
          , d = a("1157")
          , g = a.n(d)
          , v = {
            name: "Home",
            components: {},
            data: function() {
                return {
                    options: {
                        scrollOverflow: !0,
                        scrollBar: !1,
                        menu: ".menu",
                        navigation: !1,
                        continuousVertical: !0,
                        anchors: ["urban", "agency", "business"],
                        sectionsColor: ["#1c1c1c"],
                        onLeave: function() {
                            if (!g()(".audio-trigger").hasClass("muted")) {
                                var s = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3");
                                s.load(),
                                s.play()
                            }
                        }
                    }
                }
            },
            mounted: function() {
                g()(".audio-trigger").click((function() {
                    g()(".audio-trigger").toggleClass("muted")
                }
                ))
            }
        }
          , h = v
          , f = (a("2b53"),
        Object(o["a"])(h, p, u, !1, null, "433ee464", null))
          , b = f.exports
          , y = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "contents"
            }, [a("div", {
                staticClass: "error-wrapper"
            }, [a("h1", {
                staticClass: "bold-error-code"
            }, [s._v("404")]), a("span", [s._v("Ooopppsss....Page not found")]), a("p", [a("router-link", {
                staticClass: "active-link",
                attrs: {
                    to: "/"
                }
            }, [s._v("Go Home")])], 1)])])
        }
          , w = []
          , C = {}
          , _ = C
          , k = (a("5865"),
        Object(o["a"])(_, y, w, !1, null, "455a4678", null))
          , x = k.exports
          , z = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                attrs: {
                    id: "agency-wrapper"
                }
            }, [a("AgencyNavbar"), a("div", {
                attrs: {
                    id: "agency-contents-wrapper"
                }
            }, [a("router-view")], 1), a("AgencyFooter")], 1)
        }
          , P = []
          , A = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", [a("nav", {
                staticClass: "trans-nav"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "nav-wrapper"
            }, [a("router-link", {
                staticClass: "brand-logo",
                attrs: {
                    to: "/"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("img", {
                staticClass: "logo n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/payrail-agency-logo-white-2.png",
                    alt: "Payrail Agency"
                }
            }), a("img", {
                staticClass: "logo n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/payrail-agency-logo-black.svg",
                    alt: "Payrail Agency"
                }
            })]), a("ul", {
                staticClass: "hide-on-med-and-down ul-nav",
                attrs: {
                    id: "nav-mobile"
                }
            }, [a("li", [a("router-link", {
                staticClass: "route-link",
                attrs: {
                    to: "/urban"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Urban")])])], 1), a("li", [a("router-link", {
                staticClass: "route-link",
                attrs: {
                    to: "/business"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Business")])])], 1), a("li", [a("router-link", {
                staticClass: "route-link active-link",
                attrs: {
                    to: "/agency"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Agency")])])], 1)]), s._m(0), s._m(1)], 1)])]), a("ul", {
                staticClass: "sidenav",
                attrs: {
                    id: "slide-out"
                }
            }, [s._m(2), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close",
                attrs: {
                    to: "/urban"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Urban")])])], 1), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close",
                attrs: {
                    to: "/business"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Business")])])], 1), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close active-link",
                attrs: {
                    to: "/agency"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Agency")])])], 1), s._m(3), s._m(4), s._m(5), s._m(6), s._m(7), s._m(8), s._m(9), s._m(10), s._m(11)])])
        }
          , T = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("ul", {
                staticClass: "right hide-on-med-and-down ul-nav",
                attrs: {
                    id: "nav-mobile-2"
                }
            }, [a("li", [a("a", {
                attrs: {
                    href: "#sect-1"
                }
            }, [a("span", [s._v("Features")])])]), a("li", [a("a", {
                attrs: {
                    href: "#sect-2"
                }
            }, [a("span", [s._v("About")])])]), a("li", [a("a", {
                attrs: {
                    href: "#sect-3"
                }
            }, [a("span", [s._v("Resources")])])]), a("li", [a("div", {
                staticClass: "switch-container"
            }, [a("div", {
                staticClass: "theme-button enabled light-mode-btn",
                attrs: {
                    "aria-label": "Enable light theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-light-button",
                    onclick: "enableTheme('light', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch light-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg",
                    alt: "switch"
                }
            })]), a("div", {
                staticClass: "theme-button dark-mode-btn",
                attrs: {
                    "aria-label": "Enable dark theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-dark-button",
                    onclick: "enableTheme('dark', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch dark-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg",
                    alt: "switch"
                }
            })])])]), a("li", [a("a", {
                attrs: {
                    href: "/agency#join-payrail"
                }
            }, [a("button", {
                staticClass: "nav-pry-btn black-bg btn pointer"
            }, [s._v(" Get the App "), a("img", {
                staticClass: "n-img-1 right-chevron",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-chevron.svg",
                    alt: "right-chevron"
                }
            }), a("img", {
                staticClass: "n-img-2 right-chevron",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-chevron-black.svg",
                    alt: "right-chevron"
                }
            })])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("ul", {
                staticClass: "right dn-mobile ul-nav"
            }, [a("li", {
                staticClass: "menu-img-wrapper"
            }, [a("img", {
                staticClass: "menu-img sidenav-trigger n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu.svg",
                    alt: "menu",
                    "data-target": "slide-out"
                }
            }), a("img", {
                staticClass: "menu-img sidenav-trigger n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu-2.svg",
                    alt: "menu",
                    "data-target": "slide-out"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "close-sidenav-div"
            }, [a("button", {
                staticClass: "sidenav-close"
            }, [a("img", {
                staticClass: "n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-black.svg",
                    alt: "close side-nav"
                }
            }), a("img", {
                staticClass: "n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-yellow.svg",
                    alt: "close side-nav"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", {
                staticClass: "divider-li"
            }, [a("hr", {
                staticClass: "divider"
            })])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Features")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("About")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Resources")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Blogs")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "switch-container-mobile"
            }, [a("div", {
                staticClass: "theme-button enabled light-mode-btn",
                attrs: {
                    "aria-label": "Enable light theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-light-button",
                    onclick: "enableTheme('light', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch light-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg",
                    alt: "switch"
                }
            })]), a("div", {
                staticClass: "theme-button dark-mode-btn",
                attrs: {
                    "aria-label": "Enable dark theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-dark-button",
                    onclick: "enableTheme('dark', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch dark-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg",
                    alt: "switch"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "appstore-container-mobile andriod-device"
            }, [a("a", {
                staticClass: "download-link playstore-link",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "download-link-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-black.svg",
                    alt: "playstore"
                }
            }), a("img", {
                staticClass: "download-link-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-white.svg",
                    alt: "playstore"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "appstore-container-mobile ios-device"
            }, [a("a", {
                staticClass: "download-link appstore-link",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "download-link-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-black.svg",
                    alt: "appstore"
                }
            }), a("img", {
                staticClass: "download-link-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-white.svg",
                    alt: "appstore"
                }
            })])])
        }
        ]
          , E = (a("ac1f"),
        a("00b4"),
        a("d3b7"),
        a("159b"),
        a("4d5c"))
          , S = a.n(E)
          , W = {
            name: "AgencyNavbar",
            mounted: function() {
                var s = document.querySelector("#slide-out");
                function t() {
                    var s = navigator.userAgent || navigator.vendor || window.opera;
                    return /windows phone/i.test(s) ? "Windows Phone" : /android/i.test(s) ? "Android" : /iPad|iPhone|iPod/.test(s) && !window.MSStream ? "iOS" : "unknown"
                }
                S.a.Sidenav.init(s),
                g()(window).scrollTop() ? g()("nav.trans-nav").addClass("scrolled-nav") : g()("nav.trans-nav").removeClass("scrolled-nav"),
                "unknown" === t() || "Windows Phone" === t() ? document.querySelectorAll(".unknown-device").forEach((function(s) {
                    s.style.display = "block"
                }
                )) : "iOS" === t() ? document.querySelectorAll(".ios-device").forEach((function(s) {
                    s.style.display = "block"
                }
                )) : document.querySelectorAll(".andriod-device").forEach((function(s) {
                    s.style.display = "block"
                }
                ))
            },
            methods: {
                scrollToTop: function() {
                    window.scrollTo(0, 0)
                }
            }
        }
          , D = W
          , I = (a("c56e"),
        a("e379"),
        a("5623"),
        Object(o["a"])(D, A, T, !1, null, "652b63a0", null))
          , O = I.exports
          , j = function() {
            var s = this
              , t = s.$createElement;
            s._self._c;
            return s._m(0)
        }
          , $ = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("footer", {
                staticClass: "scrollspy",
                attrs: {
                    id: "contact"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 pad0-xs* f-links-wrapper flw-1"
            }, [a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Resources")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Customer Stories")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Media")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Security")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Interest Calculator")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Plan Tool")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Blog")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Help Center")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Company")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("About Us")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Press")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Careers")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Ambassadors")])]), a("li", [a("a", {
                attrs: {
                    href: "/agency/privacy"
                }
            }, [s._v("Privacy")])]), a("li", [a("a", {
                attrs: {
                    href: "/agency/terms"
                }
            }, [s._v("Terms")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Product")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Saving Plans")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Insurance")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Payrail Wallet")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Rail Fund")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Features")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Give suggestions?")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Accounts")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Urban")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Business")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Agency")])])])])]), a("div", {
                staticClass: "col s12 pad0-xs* f-links-wrapper flw-2"
            }, [a("div", {
                staticClass: "ddf sa-ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Contact")]), a("ul", {
                staticClass: "footer-links-li social-footer-links"
            }, [a("li", {
                staticClass: "sa-li"
            }, [a("a", {
                attrs: {
                    href: "mailto:support@payrail.co"
                }
            }, [s._v("support@payrail.co")]), s._v(" "), a("br"), a("span", [s._v("Layi Yusuf Cresent, Lekki Phase 1, Lagos")])]), a("li", {
                staticClass: "agency-stuff"
            }, [a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://twitter.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/twitter-yellow.svg",
                    alt: "twitter"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://whatsapp.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/whatsapp-yellow.svg",
                    alt: "whatsapp"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://facebook.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/facebook-yellow.svg",
                    alt: "facebook"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://linkedin.com/company/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/linkedin-yellow.svg",
                    alt: "linkedin"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://instagram.com/payrail_agency",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/instagram-yellow.svg",
                    alt: "instagram"
                }
            })])])])]), a("div", {
                staticClass: "ddf"
            }, [a("ul", {
                staticClass: "footer-links-li social-footer-links"
            }, [a("li", [a("span", {
                staticClass: "download-txt"
            }, [s._v(" Download the Payrail app today for a 100% mobile banking experience. Available on iOS and Android. ")])]), a("li", {
                staticClass: "footer-appstore-wrapper agency-stuff"
            }, [a("a", {
                attrs: {
                    href: "https://play.google.com/store/apps/details?id=com.angala.payrail",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/google-playstore-yellow.svg",
                    alt: "google store"
                }
            })])]), a("a", {
                attrs: {
                    href: "https://apps.apple.com/ng/app/payrail-agency/id1588794187",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/apple-appstore-yellow.svg",
                    alt: "apple store"
                }
            })])]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/browser-yellow.svg",
                    alt: "web browser"
                }
            })])])])])])]), a("div", {
                staticClass: "col s12 pad0-xs footer-hr-div"
            }, [a("hr"), a("img", {
                staticClass: "payrail-anagala n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/payrail-angala.png",
                    alt: "Payrail and Angala"
                }
            }), a("img", {
                staticClass: "payrail-anagala n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/payrail-angala-light.png",
                    alt: "Payrail and Angala"
                }
            }), a("hr")]), a("div", {
                staticClass: "regulators-section col pad0-xs s12"
            }, [a("div", {
                staticClass: "flex-div regulator-subscribe-wrapper"
            }, [a("div", {
                staticClass: "regulators-wrapper"
            }, [a("a", {
                staticClass: "hover-scale",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/sec.png",
                    alt: "sec"
                }
            })]), a("a", {
                staticClass: "hover-scale",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/cbn.png",
                    alt: "cbn"
                }
            })]), a("a", {
                staticClass: "hover-scale last-regulator",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/ndic.png",
                    alt: "ndic"
                }
            })])])])]), a("div", {
                staticClass: "cookies-notice col pad0-xs s12"
            }, [a("div", {
                staticClass: "p-div text-justify"
            }, [a("p", [s._v(" Payrail is product of "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "https://angalafintech.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Angala Fintech ")]), s._v(" is a company registered in Nigeria RC - 1765120. All rights reserved. Payrail is financial service provided by Angala Microfinance Bank Limited RC *******, licensed and regulated by the Central Bank of Nigeria (CBN). We empower individuals with credit, simple payments solutions, high-yield investment opportunities, and easy-to-use tools for personal financial management.Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary. ")]), a("p", [s._v(" Our Insurance are managed by our fund management "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "https://angalafintech.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Angala Insurtech ")]), s._v(" RC - 1798557 and partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Check the list of Insurance avaible on Payrail.↗ ")])]), a("p", [s._v(" Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S. ")]), a("p", [s._v(" This website uses "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Cookies ↗ ")]), s._v(" We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. The content on this website does not constitute a complete description of Payrail or Angala Fintech services. By using this website, you accept our "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/agency/terms",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Terms of Use ")]), s._v(" and "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/agency/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Privacy Policy")]), s._v(". ")])])]), a("div", {
                staticClass: "col s12 pad0-xs copyright-div"
            }, [a("p", [s._v(" © Angala Financial Technologies Limited. All Rights Reserved. ")])])])])])
        }
        ]
          , R = {
            name: "AgencyFooter"
        }
          , N = R
          , B = (a("e625"),
        Object(o["a"])(N, j, $, !1, null, null, null))
          , q = B.exports
          , F = {
            name: "AgencyView",
            components: {
                AgencyNavbar: O,
                AgencyFooter: q
            }
        }
          , L = F
          , Y = (a("ead6"),
        Object(o["a"])(L, z, P, !1, null, null, null))
          , U = Y.exports
          , M = function() {
            var s = this
              , t = s.$createElement;
            s._self._c;
            return s._m(0)
        }
          , G = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "contents",
                attrs: {
                    id: "agency-contents"
                }
            }, [a("section", {
                staticClass: "scrollspy",
                attrs: {
                    id: "home"
                }
            }, [a("div", {
                staticClass: "row rel"
            }, [a("div", {
                staticClass: "container home-container"
            }, [a("div", {
                staticClass: "col s12 l6",
                attrs: {
                    id: "home-txt-side"
                }
            }, [a("div", {
                staticClass: "home-minor-title"
            }, [s._v("Designed for everyone")]), a("h1", {
                staticClass: "home-title"
            }, [s._v(" Your branchless Next-door Banking ")]), a("p", {
                staticClass: "home-desc-txt hidden-xs-sm"
            }, [s._v(" Built for Super agents and agents; enabling multiple type transactions in an easy, convenient, and cost-effective manner. ")]), a("div", {
                staticClass: "app-stores-wrapper hidden-xs-sm"
            }, [a("div", {
                staticClass: "unknown-device"
            }, [a("a", {
                attrs: {
                    href: "https://play.google.com/store/apps/details?id=com.angala.payrail",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("button", {
                staticClass: "app-store google-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/google-playstore.svg",
                    alt: "google store"
                }
            })])])]), a("div", {
                staticClass: "unknown-device"
            }, [a("a", {
                attrs: {
                    href: "https://apps.apple.com/ng/app/payrail-agency/id1588794187",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("button", {
                staticClass: "app-store apple-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/apple-appstore.svg",
                    alt: "apple store"
                }
            })])])])])]), a("div", {
                staticClass: "col s12 m8 offset-m2 l6 offset-l0 rel",
                attrs: {
                    id: "home-img-side"
                }
            }, [a("div", {
                staticClass: "phone-card-imgs hidden-xs"
            }, [a("img", {
                staticClass: "full-width pci-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/phone-1.png",
                    alt: "phone 1",
                    id: "p-img-1"
                }
            }), a("img", {
                staticClass: "full-width pci-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-card.png",
                    alt: "card",
                    id: "p-img-2"
                }
            }), a("img", {
                staticClass: "full-width pci-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/phone-2a.png",
                    alt: "phone 2",
                    id: "p-img-3"
                }
            })]), a("div", {
                staticClass: "visible-xs"
            }, [a("img", {
                staticClass: "full-width",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/landing-section-images-2.png",
                    alt: "phone and hand"
                }
            })])])]), a("div", {
                staticClass: "col s12 visible-xs-sm"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "home-desc-txt"
            }, [s._v(" Built for agents; individual-based businesses, enterprises and financial institutions to manage multiple payment workflows and move funds, so they can pay and get paid without delays. ")]), a("div", {
                staticClass: "app-stores-wrapper flex-div"
            }, [a("div", {
                staticClass: "unknown-device"
            }, [a("button", {
                staticClass: "app-store google-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/google-playstore.svg",
                    alt: "google store"
                }
            })])]), a("div", {
                staticClass: "unknown-device"
            }, [a("button", {
                staticClass: "app-store apple-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/apple-appstore.svg",
                    alt: "apple store"
                }
            })])])])])])])]), a("section", {
                staticClass: "mid-sects",
                attrs: {
                    id: "mid-sect-1"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "mid-sect-wrapper center col s12 m10 offset-m1 l6 offset-l3"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("More Transactions. More Commissions")]), a("p", {
                staticClass: "mid-sect-p"
            }, [s._v(" As a Payrail Agent, you have the power and control to make as much money as you can by providing financial services in your community easily within the app, and also get your Mastercard debit card almost instantly. ")]), a("div", {
                staticClass: "subscribe-form-wrapper"
            }, [a("form", {
                attrs: {
                    action: "#",
                    id: "subscribe-form",
                    onSubmit: "{SaveEmails}"
                }
            }, [a("div", {
                staticClass: "flex-div input-field"
            }, [a("input", {
                attrs: {
                    id: "subscriber-email",
                    placeholder: "Your Email...",
                    type: "email",
                    required: ""
                }
            }), a("button", {
                staticClass: "btn subscribe-submit pry-bg"
            }, [s._v("Join the Waitlist")])])]), a("div", {
                staticClass: "hidden",
                attrs: {
                    id: "subscribe-message"
                }
            }, [a("div", {
                staticClass: "dummy-positioning d-flex"
            }, [a("div", {
                staticClass: "success-icon"
            }, [a("div", {
                staticClass: "success-icon__tip"
            }), a("div", {
                staticClass: "success-icon__long"
            })])]), a("h5", {
                staticClass: "pry-color"
            }, [s._v("Email Submitted Successfully")])])])])])])]), a("section", {
                staticClass: "scrollspy",
                attrs: {
                    id: "sect-1"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 m6"
            }, [a("img", {
                staticClass: "sect-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-imgs-1.png",
                    alt: "section-img",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 m6"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Cutting-edge "), a("br"), s._v(" Agency Banking")]), a("p", {
                staticClass: "sect-desc"
            }, [s._v(" Payrail Agency is built to prioritize the needs of its users. We're not your typical agency banking platform; we're here to help you with your day-to-day agency banking needs. ")]), a("ul", {
                staticClass: "sect-list s-list-1"
            }, [a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("We are the first and only truly INCLUSIVE Financial Services partner.")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("You get to make money on all transactions and impact lives by partnering with us. ")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Stay organised with multiple staff, agent and super agent and for your business needs.")])])])])])])]), a("section", {
                attrs: {
                    id: "sect-2"
                }
            }, [a("div", {
                staticClass: "row rel"
            }, [a("div", {
                staticClass: "container flex-div-coloumn-xs"
            }, [a("div", {
                staticClass: "col s12 m6"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Save time with seamless transactions")]), a("p", {
                staticClass: "sect-desc"
            }, [s._v(" Payrail Agency guarantees you of the best infrastructure, the best pricing, stable network and 24 hrs multilingual support for your business needs. Our agencies services include; ")]), a("div", {
                staticClass: "sec-list-grid"
            }, [a("ul", {
                staticClass: "sect-list"
            }, [a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Account Opening")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Funds Transfer ")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Cash in/ Cash out")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Bill payments")])])]), a("ul", {
                staticClass: "sect-list"
            }, [a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Value financing")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Insurance")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Group savings")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v("Asset financing.")])])])])]), a("div", {
                staticClass: "col s12 m6 right-align sect-center"
            }, [a("img", {
                staticClass: "sect-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-imgs-2a.png",
                    alt: "section-img",
                    "data-aos": "fade-up"
                }
            })])])])]), a("section", {
                staticClass: "mid-sects",
                attrs: {
                    id: "mid-sect-2"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "mid-sect-wrapper center col s12 m10 offset-m1 l6 offset-l3"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Our Buy Now Pay Later")]), a("p", {
                staticClass: "mid-sect-p"
            }, [s._v(" Our Buy Now Pay Later services close the financial inclusion gap for individuals and businesses. As a Payrail Agent, you make significant commissions on all BNPL items you cross-sell to customers – "), a("span", {
                staticClass: "pry-color"
            }, [s._v("Solar devices, Agricultural machinery, Household items, Mobile phones, Water pumps")]), s._v(", and so on! ")]), a("div", {
                staticClass: "get-started-btn-wrapper"
            }, [a("a", {
                attrs: {
                    href: "#join-payrail"
                }
            }, [a("button", {
                staticClass: "nav-pry-btn black-bg btn pointer get-started-btn"
            }, [s._v(" Get Started → ")])])])])])])]), a("section", {
                attrs: {
                    id: "sect-3"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 m6"
            }, [a("img", {
                staticClass: "sect-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-imgs-3.png",
                    alt: "section-img",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 m6 sec-mag-down"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Do business with confidence")]), a("ul", {
                staticClass: "sect-list"
            }, [a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v(" Payrail guarantees the greatest infrastructure, the best pricing, a stable network. ")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v(" We offer multilingual customer friendly support 24 /7 for both individual and business owners. ")])]), a("li", [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check.svg",
                    alt: "check mark"
                }
            }), a("span", [s._v(" Your safety is our top priority, thus your money and personal information are safe with us and will never be shared with third parties. ")])])])])])])]), a("section", {
                staticClass: "mid-sects",
                attrs: {
                    id: "customer-testimonials"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "customer-sect-title"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Customer Testimonials")]), a("p", [s._v(" Our Agents put smiles on the faces of over 600,000 people daily. Do work that pay the bills and makes you proud with Payrail! ")])]), a("div", {
                staticClass: "testimony-wrapper hidden-xs"
            }, [a("div", {
                staticClass: "testimony-block",
                attrs: {
                    "data-aos": "fade-up"
                }
            }, [a("div", {
                staticClass: "flex-div review-title"
            }, [a("img", {
                staticClass: "review-title-icon rti-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points.svg",
                    alt: "points"
                }
            }), a("img", {
                staticClass: "review-title-icon rti-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points-2.svg",
                    alt: "points"
                }
            }), a("span", {
                staticClass: "bold"
            }, [s._v("Trusted and Reliable Service")])]), a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(" Quick response⚡⚡ app, super fast for transfers and electricity bill payment. I enjoy ❤️ using this Payrail Urban. ")])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Christiana Olaotan")])])])]), a("div", {
                staticClass: "testimony-block",
                attrs: {
                    "data-aos": "fade-up"
                }
            }, [a("div", {
                staticClass: "flex-div review-title"
            }, [a("img", {
                staticClass: "review-title-icon rti-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points.svg",
                    alt: "points"
                }
            }), a("img", {
                staticClass: "review-title-icon rti-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points-2.svg",
                    alt: "points"
                }
            }), a("span", {
                staticClass: "bold"
            }, [s._v("Instant Transaction Settlement")])]), a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(" Received funds in my wallet instantly and offer easy transfer services to my customers in real-time. No waiting for end-of-day reconciliation. ")])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Musa Abubaka")])])])]), a("div", {
                staticClass: "testimony-block",
                attrs: {
                    "data-aos": "fade-up"
                }
            }, [a("div", {
                staticClass: "flex-div review-title"
            }, [a("img", {
                staticClass: "review-title-icon rti-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points.svg",
                    alt: "points"
                }
            }), a("img", {
                staticClass: "review-title-icon rti-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points-2.svg",
                    alt: "points"
                }
            }), a("span", {
                staticClass: "bold"
            }, [s._v("Enjoying Lowest Charges")])]), a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(" I enjoyed cheaper transactions and also been able to renders delightful premium service ")])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Chinedu Nwaiwu")])])])])]), a("div", {
                staticClass: "carousel testimony-wrapper visible-xs"
            }, [a("div", {
                staticClass: "testimony-block carousel-item"
            }, [a("div", {
                staticClass: "flex-div review-title"
            }, [a("img", {
                staticClass: "review-title-icon rti-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points.svg",
                    alt: "points"
                }
            }), a("img", {
                staticClass: "review-title-icon rti-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points-2.svg",
                    alt: "points"
                }
            }), a("span", {
                staticClass: "bold"
            }, [s._v("Trusted and Reliable Service")])]), a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(" Quick response⚡⚡ app, super fast for transfers and electricity bill payment. I enjoy ❤️ using this Payrail Urban. ")])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Christiana Olaotan")])])])]), a("div", {
                staticClass: "testimony-block carousel-item"
            }, [a("div", {
                staticClass: "flex-div review-title"
            }, [a("img", {
                staticClass: "review-title-icon rti-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points.svg",
                    alt: "points"
                }
            }), a("img", {
                staticClass: "review-title-icon rti-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points-2.svg",
                    alt: "points"
                }
            }), a("span", {
                staticClass: "bold"
            }, [s._v("Instant Transaction Settlement")])]), a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(" Received funds in my wallet instantly and offer easy transfer services to my customers in real-time. No waiting for end-of-day reconciliation. ")])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Musa Abubaka")])])])]), a("div", {
                staticClass: "testimony-block carousel-item"
            }, [a("div", {
                staticClass: "flex-div review-title"
            }, [a("img", {
                staticClass: "review-title-icon rti-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points.svg",
                    alt: "points"
                }
            }), a("img", {
                staticClass: "review-title-icon rti-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/review-points-2.svg",
                    alt: "points"
                }
            }), a("span", {
                staticClass: "bold"
            }, [s._v("Enjoying Lowest Charges")])]), a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(" I enjoyed cheaper transactions and also been able to renders delightful premium service ")])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Chinedu Nwaiwu")])])])])])])])]), a("section", {
                staticClass: "mid-sects",
                attrs: {
                    id: "our-partners"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "partners-sect-wrapper center col s12 l10 offset-l1"
            }, [a("h4", {
                staticClass: "sect-title"
            }, [s._v("Our esteemed partners")]), a("div", {
                staticClass: "partners-wrapper hidden-xs"
            }, [a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/winrock.png",
                    alt: "winrock"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/usaid.png",
                    alt: "usaid"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/mercycorps.png",
                    alt: "mercycorps"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/japtini.png",
                    alt: "japtini"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/alluvial.png",
                    alt: "alluvial"
                }
            })])]), a("div", {
                staticClass: "visible-xs partners-wrapper-mobile"
            }, [a("div", {
                staticClass: "partners-wrapper"
            }, [a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/winrock.png",
                    alt: "winrock"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/usaid.png",
                    alt: "usaid"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/mercycorps.png",
                    alt: "mercycorps"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/japtini.png",
                    alt: "japtini"
                }
            })]), a("a", {
                staticClass: "partner-link",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "full-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/alluvial.png",
                    alt: "alluvial"
                }
            })])])])])])])]), a("section", {
                attrs: {
                    id: "debit-cards"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 pad0"
            }, [a("div", {
                staticClass: "col s12 m6 hidden-xs"
            }, [a("img", {
                staticClass: "full-width payrail-card-hand",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-card-hand.png",
                    alt: "payrail debit card",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 m6"
            }, [a("div", {
                staticClass: "debit-cards-txt-div"
            }, [a("div", {
                staticClass: "debit-card-title"
            }, [s._v("DEBIT CARD")]), a("div", {
                staticClass: "debit-card-txt"
            }, [s._v(" Instantly create virtual and physical naira cards to handle your all your payments ")])])]), a("div", {
                staticClass: "col s12 m6 visible-xs"
            }, [a("img", {
                staticClass: "full-width payrail-card-hand",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/agency-card-hand.png",
                    alt: "payrail debit card"
                }
            })])])])])]), a("section", {
                staticClass: "scrollspy",
                attrs: {
                    id: "join-payrail"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "black-bg black-wrapper"
            }, [a("div", {
                staticClass: "center col s12 m10 offset-m1 l6 offset-l3 pad0-xs"
            }, [a("h4", {
                staticClass: "sect-title white-txt"
            }, [s._v("Sign up for free. "), a("br"), s._v(" Join the Payrail Network")]), a("div", {
                staticClass: "app-stores-wrapper flex-div"
            }, [a("div", {}, [a("a", {
                attrs: {
                    href: "https://play.google.com/store/apps/details?id=com.angala.payrail",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("button", {
                staticClass: "app-store google-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/google-playstore.svg",
                    alt: "google store"
                }
            })])])]), a("div", {}, [a("a", {
                attrs: {
                    href: "https://apps.apple.com/ng/app/payrail-agency/id1588794187",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("button", {
                staticClass: "app-store apple-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/apple-appstore.svg",
                    alt: "apple store"
                }
            })])])])]), a("div", {
                staticClass: "box-txt"
            }, [s._v(" Come along with us on this money-making journey… ")])])])])])])])
        }
        ]
          , H = a("f5af")
          , V = a.n(H)
          , Q = (a("e829"),
        {
            name: "AgencyHome",
            mounted: function() {
                V.a.init();
                var s = document.querySelector(".carousel");
                S.a.Carousel.init(s),
                window.setInterval((function() {
                    S.a.Carousel.getInstance(s).next()
                }
                ), 8e3);
                var t = document.querySelectorAll(".scrollspy");
                S.a.ScrollSpy.init(t);
                var a = document.querySelector(".pci-img");
                function e() {
                    document.body.classList.remove("js-loading")
                }
                document.body.classList.add("js-loading"),
                a.addEventListener("load", e)
            }
        })
          , J = Q
          , K = Object(o["a"])(J, M, G, !1, null, null, null)
          , X = K.exports
          , Z = function() {
            var s = this
              , t = s.$createElement;
            s._self._c;
            return s._m(0)
        }
          , ss = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "contents"
            }, [a("div", {
                staticClass: "container"
            }, [a("h1", {
                staticClass: "center policy-page-title"
            }, [s._v("Privacy Policy")]), a("section", {
                staticClass: "policy-content-body col s12 pad0-xs"
            }, [a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("1. ")]), a("span", [s._v("Consent")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" You, as a user or visitor, accept this privacy policy when you give consent upon access to our platforms, or use the services offered on our website and/or application. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("2. ")]), a("span", [s._v("Which of your personal Data do we collect?")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" We collect Personal Data about you when you use the services offered on our website and digital platform, including the following: ")]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("2.1 ")]), s._v(" Sign-up information: ")]), a("span", [s._v(" When you register to use the services offered on our digital platform, we will collect important Personal Data in order to on-board you. These information include: your name, email address, mobile phone number and card details. Subsequently, we may require you to provide additional personal details as you use our services. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("2.2")]), s._v(" Transaction information: ")]), a("span", [s._v(" When you use our digital platform to send and receive money, on board agents, pay bills, and deposit & withdraw cash, we collect information associated with the transaction such as amount sent or received, amount paid for products or services, agent information, sometimes, including information about your device and location. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("2.3")]), s._v(" Participant Personal Data: ")]), a("span", [s._v(" When you use our services, we collect Personal Data about the other participants associated with the transaction. We collect personal Data such as name and financial account information about the participant who is receiving money from you or sending money to you. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("2.4")]), s._v(" Information from other sources: ")]), a("span", [s._v(" We may collect information from other sources, such as our social media platforms when you reach out to us to lodge a complaint about our services. However, we will only ask for information required to help us be of service to you. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("2.5")]), s._v(" Other information we collect related to your use of our website or Services: ")]), a("span", [s._v(" We may collect additional information from or about you when you communicate with us, contact our customer support teams or respond to a survey. ")])])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("3. ")]), a("span", [s._v("How Do We Retain Personal Data?")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" We retain Personal Data in a recognizable format for business purposes and also to fulfil our legal or regulatory obligations. There are situations when we may retain Personal Data for longer periods if it is in our legitimate business interests and to comply with applicable laws. We will however use and disclose such Personal Data in accordance with this Privacy Policy. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("4. ")]), a("span", [s._v("What do we do with your Personal Data?")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" Your personal data is collected to provide you with a quick and secure customer experience. We process your information to provide a seamless service, including and not limited to: ")]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("Making transactions - send or request money, or pay a bill")]), a("li", [s._v("Authenticate your access to an account")]), a("li", [s._v("Communicate with you about your account")]), a("li", [s._v("Manage risk, fraud and prevent you from fraud by verifying your identity")]), a("li", [s._v(" Comply with our obligations and to enforce the terms of our sites and services, including to comply with all applicable laws and regulations ")]), a("li", [s._v("Trail information breach and remediate such identified breaches")]), a("li", [s._v("Resolve disputes and troubleshoot problems")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [s._v("With your consent:")]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("Market Payrail Agency products and services to you.")]), a("li", [s._v("Use cookies to provide a targeted display, feature, service or offer to you.")]), a("li", [s._v(" Send communications about the product to you by SMS or email if you have opted in to receive them. ")])]), a("i", [s._v("Moving forward, you can withdraw your consent at any time you so desire and at no cost whatsoever.")])])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("5. ")]), a("span", [s._v(" Sharing your Personal Data")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" We may share your Personal Data or other information about you with others for the following reasons: ")]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("5.1 ")]), s._v(" With other brands who provide services to us ")]), a("span", [s._v(" Payrail Agency may share Personal Data with third-party service providers that perform services and functions for or on our behalf. These third-party service providers may, for example, provide you with services, like identity verification, transaction processing, product marketing, or customer support. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("5.2")]), s._v(" With partner financial institutions: ")]), a("span", [s._v(" We may share Personal Data with some other financial institutions who have partnered with us to enable ease of services, We may also share Personal Data to process transactions and keep your financial information up to date. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("5.3")])]), a("span", [s._v(" With the other parties to transactions when you use the services, such as other users and their service providers. This includes other users you are sending or receiving funds from and their service providers. The information might include: Personal Data and account information necessary to facilitate the transaction; and personal Data to help other participant(s) resolve disputes and detect and prevent fraud. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("5.4")]), s._v(" With other third parties for our business purposes or as permitted or required by law: ")]), a("span", [s._v(" We may share information about you with other parties for Payrail Agency’s business purposes or as permitted or required by law, including: ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("5.4.1")]), s._v(" If we need to do so to comply with a law, legal process or regulations: ")]), a("span", [s._v(" To law enforcement authorities or other government officials, or other third parties pursuant to a court order or other legal process or requirement applicable to Payrail Agency or Payrail Agency’s corporate family; "), a("br"), s._v(" If we believe, in our sole discretion, that the disclosure of Personal Data is necessary or appropriate to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity; ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("5.4.2")]), s._v(" To protect the vital interests of a person: ")]), a("span", [s._v(" With credit agencies and data processors for credit reference checks and anti-fraud and compliance purposes; ")])]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("To investigate violations of or enforce a user agreement or other legal terms applicable to any service;")]), a("li", [s._v("To protect our property, services and legal rights;")]), a("li", [s._v("To facilitate a sale of all or part of Payrail Agency’s business and;")]), a("li", [s._v("To support our audit, compliance, and corporate governance functions.")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [s._v("With your consent:")]), a("span", [s._v(" With your consent: We also will share your Personal Data and other information with your consent or direction. ")])])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("6. ")]), a("span", [s._v("How We Use Cookies")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" The purpose of the computer cookie is to help the website keep track of your visits and activity. A website might also use cookies to keep a record of your most recent visit or to record your login information. Like most active websites, our website uses cookies to enable the tracking of your activity for the duration of a session, using only encrypted session cookies which are erased either after a predefined timeout period or once the user logs out of the platform and closes the browser. In essence, certain aspects of our website are only available through the use of cookies, so your use of our website may be limited or not possible if you do not accept the cookies. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("7. ")]), a("span", [s._v("When can you apply your rights?")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" Request to Access, Rectify or Erase personal data. ")]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.1 ")]), s._v(" Request of Access ")]), a("span", [s._v(" You have the right to ask us whether we hold any Personal Data relating to you and, if we do, to be provided with a copy of that Personal Data in electronic form, unless you want to receive it in another way (for example, a paper copy). In addition, you can ask us for information on how we use your Personal Data, who we share it with, how long we keep it, where it is stored, and other information to help you understand how we use it. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.2")]), s._v(" Rectification Request ")]), a("span", [s._v(" You have the right to ask us to correct your Personal Data (including by means of providing a supplementary statement) if it is inaccurate and to have incomplete Personal Data updated without undue delay. If we cannot correct the Personal Data, we include a note on our files regarding your request to correct your Personal Data. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.3")]), s._v(" Erasure Request ")]), a("span", [s._v(" You have the right to ask us to erase your Personal Data if: ")])]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("Your Personal Data is no longer needed for the purpose(s) for which they were collected.")]), a("li", [s._v("Your Personal Data has been unlawfully retained.")]), a("li", [s._v("Your Personal Data has to be erased because of regulation compliance.")]), a("li", [s._v("You withdraw your consent for the processing of the Personal Data.")]), a("li", [s._v("You object to processing for direct marketing purposes.")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("span", [s._v(" If we have made the Personal Data concerned public, we will also take reasonable steps to inform other data controllers processing the data so they can seek to erase links to or copies of your Personal Data. We may refuse to act on your request to erase your Personal Data if the processing of your Personal Data is necessary: ")])]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("To exercise our right of freedom of expression and information.")]), a("li", [s._v("To comply with the NDPR and relevant Nigerian laws.")]), a("li", [s._v("For the performance of a task carried out in the public interest or to exercise official authority vested in us.")]), a("li", [s._v("To establish, exercise or defend legal claims.")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("span", [s._v(" In these cases, we can restrict the processing instead of erasing your Personal Data if requested to do so by you. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.4")]), s._v(" Requests to Object ")]), a("span", [s._v(" You have the right to object at any time to the processing of your Personal Data if we process it based on our legitimate interests. This includes any so-called “profiling”. Our privacy notice informs you when we rely on legitimate interests to process your Personal Data. In these cases, we will stop processing your Personal Data unless we can demonstrate compelling legitimate reasons for continuing the processing. We may reject your request if the processing of your Personal Data is needed to establish, exercise or defend legal claims. You have the right to object at any time if we process your Personal Data for direct marketing purposes. You may also object at any time to profiling supporting our direct marketing. In such cases, we will stop processing your Personal Data when we receive your objection. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.5")]), s._v(" Requests to Restrict ")]), a("span", [s._v(" You have the right to ask us to restrict the processing of your Personal Data if: ")])]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("You contest the accuracy of your Personal Data and we are in the process of verifying the Personal Data we hold.")]), a("li", [s._v("The processing is unlawful and you do not want us to erase your Personal Data.")]), a("li", [s._v(" We no longer need your Personal Data for the original purpose(s) of processing, but you need them to establish, exercise or defend legal claims and you do not want us to delete the Personal Data as a result, or. ")]), a("li", [s._v(" You have objected to processing carried out because of our legitimate interests while we verify if our legitimate grounds override yours. ")]), a("li", [s._v(" If processing is restricted, we may process your Personal Data (excepting for storage purposes), only If you have given us your consent for: ")]), a("ol", {
                staticClass: "pb-sub-list"
            }, [a("li", [s._v("Establishing, exercising or defending legal claims.")]), a("li", [s._v("Protecting the rights of another natural or legal person, or")]), a("li", [s._v("Reasons of important public interest as defined under the NDPR and relevant Nigerian laws.")])])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("span", [s._v("Once processing is restricted following your request, we will inform you before we lift the restriction.")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.6")]), s._v(" Requests for Portability ")]), a("span", [s._v(" If our processing is performed by computer and is necessary to fulfil a contract with you, or is based on your consent, you have the right to receive any Personal Data you have provided to us in a structured, commonly used and machine-readable electronic format. You can also send your Personal Data to another organization or have us do so for you if it is technically feasible for us to do so. If your request relates to a set of Personal Data that also concerns other individuals, we will remove those individuals in order to exercise their own rights regarding their Personal Data. Eventually even if you request the portability of your Personal Data, you retain your right to also request their erasure. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("b", {
                staticClass: "sub-policy-title"
            }, [a("span", [s._v("7.7")]), s._v(" Requests to Object to Automated Decisions ")]), a("span", [s._v(" Generally, you have the right to object to any decision producing a legal effect concerning you or which otherwise significantly affects you if this is based solely on the automated processing of your Personal Data. This includes automated decisions based on profiling. ")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("span", [s._v(" We may refuse your request if the decision in question is: ")])]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("Necessary to enter into a contract with you, or for the performance of your contract with us.")]), a("li", [s._v("Permitted by regulations, or based on your explicit consent.")])]), a("p", {
                staticClass: "sub-policy-block-texts"
            }, [a("span", [s._v(" We will only make decisions relying solely on automated processing that involve your sensitive Personal Data if you have given your explicit consent or the processing is necessary for reasons of substantial public interest, based on the NDPR and relevant laws. ")])])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("8. ")]), a("span", [s._v("How Do We Protect Your Personal Data?")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" While we are dedicated to securing our systems and services, you are responsible for securing and maintaining the privacy of your password(s) and account/profile registration information and verifying that the Personal Data we maintain about you is accurate and current. ")]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" We will however maintain technical, physical, and administrative security measures designed to provide reasonable protection for your Personal Data against loss, misuse, unauthorised access, disclosure, and alteration. The security measures include firewalls, data encryption, physical access controls to our premises, quality control as well as information access authorisation controls. We will inform you of any breaches which may affect your Personal Data. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("9. ")]), a("span", [s._v("Remedies for Violation and Timeframe for Remedy")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" If this policy is violated, our Data Protection Officer shall redress the violation within a week. Where the violation pertains to the disclosure of your Personal Data without your consent, such information shall be retracted immediately, and confirmation of the retraction sent to you within 48 hours of the redress. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("10. ")]), a("span", [s._v("Governing Laws")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" This Privacy Policy is made according to the Nigeria Data Protection Regulation (2019) or any other relevant Nigerian laws, regulations or international conventions applicable to Nigeria. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("11. ")]), a("span", [s._v("Privacy Policy review")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" We review this privacy policy periodically when there is any change to services or regulatory requirements. At the minimum, we shall review this annually and communicate via our communication platforms such as Website, Social Media Accounts or via the information channels on our app. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("12. ")]), a("span", [s._v("Contact Us")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" For any general inquiries or concerns about this Privacy Policy or the way in which your Personal Data is used or retained, please contact us for more clarifications: ")]), a("p", {
                staticClass: "policy-block-texts pb-contact"
            }, [a("b", [s._v("PAYRAIL AGENCY LIMITED")]), s._v(" "), a("br"), a("span", [s._v("Layi Yusuf Cresent, Lekki Phase 1, Lagos, Nigeria.")]), s._v(" "), a("br"), a("span", [s._v(" Email: "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "mailto:support@payrail.com"
                }
            }, [s._v("Support@payrail.com")])])])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("13. ")]), a("span", [s._v("Declaration")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" I have read all the terms and conditions within this Notice and hereby agree/ disagree to the use of my personal data for above mentioned purposes. ")])])])])])
        }
        ]
          , ts = {
            name: "AgencyPrivacy"
        }
          , as = ts
          , es = (a("7b25"),
        Object(o["a"])(as, Z, ss, !1, null, "7a096248", null))
          , is = es.exports
          , rs = function() {
            var s = this
              , t = s.$createElement;
            s._self._c;
            return s._m(0)
        }
          , os = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "contents"
            }, [a("div", {
                staticClass: "container"
            }, [a("h1", {
                staticClass: "center policy-page-title"
            }, [s._v("Terms And Conditions")]), a("section", {
                staticClass: "policy-content-body col s12 pad0-xs"
            }, [a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("1. ")]), a("span", [s._v("INTRODUCTION")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms And Conditions. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("2. ")]), a("span", [s._v("INTELLECTUAL PROPERTY RIGHTS")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" Other than content you own, which you may have opted to include on this Website, under these Terms, Payrail Agency and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("3. ")]), a("span", [s._v("RESTRICTIONS")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" You are expressly and emphatically restricted from all of the following: ")]), a("ul", {
                staticClass: "policy-list"
            }, [a("li", [s._v("publishing any Website material in any media;")]), a("li", [s._v("selling, sublicensing and/or otherwise commercializing any Website material;")]), a("li", [s._v("publicly performing and/or showing any Website material;")]), a("li", [s._v("using this Website in any way that is, or may be, damaging to this Website;")]), a("li", [s._v("using this Website in any way that impacts user access to this Website;")]), a("li", [s._v(" using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity; ")]), a("li", [s._v(" engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website; ")]), a("li", [s._v(" using this Website to engage in any advertising or marketing; ")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" Certain areas of this Website are restricted from access by you and Payrail Agency may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("4. ")]), a("span", [s._v("ASSIGNMENT")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" Payrail Agency shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("5. ")]), a("span", [s._v("YOUR CONTENT")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" In these Website Standard Terms And Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Payrail Agency a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media. ")]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" Your Content must be your own and must not be infringing on any third party’s rights. Payrail Agency reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("6. ")]), a("span", [s._v("ENTIRE AGREEMENT")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Payrail Agency and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same. ")])]), a("div", {
                staticClass: "policy-block"
            }, [a("h4", {
                staticClass: "policy-block-title"
            }, [a("span", {
                staticClass: "policy-num"
            }, [s._v("7. ")]), a("span", [s._v("GOVERNING LAW & JURISDICTION")])]), a("p", {
                staticClass: "policy-block-texts"
            }, [s._v(" These Terms will be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and you submit to the exclusive jurisdiction of the courts within Nigeria for the resolution of any disputes. ")])])])])])
        }
        ]
          , ls = {
            name: "AgencyTerms"
        }
          , ns = ls
          , cs = (a("7bb0"),
        Object(o["a"])(ns, rs, os, !1, null, "6e9a60ba", null))
          , ms = cs.exports
          , ps = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                attrs: {
                    id: "urban-wrapper"
                }
            }, [a("UrbanNavbar"), a("div", {
                attrs: {
                    id: "agency-contents-wrapper"
                }
            }, [a("router-view")], 1), a("UrbanFooter")], 1)
        }
          , us = []
          , ds = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", [a("nav", {
                staticClass: "trans-nav"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "nav-wrapper"
            }, [a("router-link", {
                staticClass: "brand-logo",
                attrs: {
                    to: "/"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("img", {
                staticClass: "logo n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-logo-1.png",
                    alt: "Payrail Urban"
                }
            }), a("img", {
                staticClass: "logo n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-logo-2.png",
                    alt: "Payrail Urban"
                }
            })]), a("ul", {
                staticClass: "hide-on-med-and-down ul-nav",
                attrs: {
                    id: "nav-mobile"
                }
            }, [a("li", [a("router-link", {
                staticClass: "route-link active-link",
                attrs: {
                    to: "/urban"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Urban")])])], 1), a("li", [a("router-link", {
                staticClass: "route-link",
                attrs: {
                    to: "/business"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Business")])])], 1), a("li", [a("router-link", {
                staticClass: "route-link",
                attrs: {
                    to: "/agency"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Agency")])])], 1)]), s._m(0), s._m(1)], 1)])]), a("ul", {
                staticClass: "sidenav",
                attrs: {
                    id: "slide-out-2"
                }
            }, [s._m(2), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close active-link",
                attrs: {
                    to: "/urban"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Urban")])])], 1), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close",
                attrs: {
                    to: "/business"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Business")])])], 1), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close",
                attrs: {
                    to: "/agency"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Agency")])])], 1), s._m(3), s._m(4), s._m(5), s._m(6), s._m(7), s._m(8), s._m(9), s._m(10), s._m(11)])])
        }
          , gs = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("ul", {
                staticClass: "right hide-on-med-and-down ul-nav",
                attrs: {
                    id: "nav-mobile-2"
                }
            }, [a("li", [a("a", {
                attrs: {
                    href: "#sect-1"
                }
            }, [a("span", [s._v("Features")])])]), a("li", [a("a", {
                attrs: {
                    href: "#sect-2"
                }
            }, [a("span", [s._v("About")])])]), a("li", [a("a", {
                attrs: {
                    href: "#sect-3"
                }
            }, [a("span", [s._v("Resources")])])]), a("li", [a("div", {
                staticClass: "switch-container"
            }, [a("div", {
                staticClass: "theme-button enabled light-mode-btn",
                attrs: {
                    "aria-label": "Enable light theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-light-button",
                    onclick: "enableTheme('light', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch light-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg",
                    alt: "switch"
                }
            })]), a("div", {
                staticClass: "theme-button dark-mode-btn",
                attrs: {
                    "aria-label": "Enable dark theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-dark-button",
                    onclick: "enableTheme('dark', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch dark-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg",
                    alt: "switch"
                }
            })])])]), a("li", [a("button", {
                staticClass: "nav-pry-btn black-bg btn pointer"
            }, [s._v(" Get the App "), a("img", {
                staticClass: "right-chevron",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-chevron-white.svg",
                    alt: "right-chevron"
                }
            })])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("ul", {
                staticClass: "right dn-mobile ul-nav"
            }, [a("li", {
                staticClass: "menu-img-wrapper"
            }, [a("img", {
                staticClass: "menu-img sidenav-trigger n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu.svg",
                    alt: "menu",
                    "data-target": "slide-out-2"
                }
            }), a("img", {
                staticClass: "menu-img sidenav-trigger n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu-2.svg",
                    alt: "menu",
                    "data-target": "slide-out-2"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "close-sidenav-div"
            }, [a("button", {
                staticClass: "sidenav-close"
            }, [a("img", {
                staticClass: "n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-black.svg",
                    alt: "close side-nav"
                }
            }), a("img", {
                staticClass: "n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-red.svg",
                    alt: "close side-nav"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", {
                staticClass: "divider-li"
            }, [a("hr", {
                staticClass: "divider"
            })])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Features")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("About")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Resources")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Blogs")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "switch-container-mobile"
            }, [a("div", {
                staticClass: "theme-button enabled light-mode-btn",
                attrs: {
                    "aria-label": "Enable light theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-light-button",
                    onclick: "enableTheme('light', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch light-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg",
                    alt: "switch"
                }
            })]), a("div", {
                staticClass: "theme-button dark-mode-btn",
                attrs: {
                    "aria-label": "Enable dark theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-dark-button",
                    onclick: "enableTheme('dark', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch dark-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg",
                    alt: "switch"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "appstore-container-mobile andriod-device"
            }, [a("a", {
                staticClass: "download-link playstore-link",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "download-link-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-black2.svg",
                    alt: "playstore"
                }
            }), a("img", {
                staticClass: "download-link-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-white2.svg",
                    alt: "playstore"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "appstore-container-mobile ios-device"
            }, [a("a", {
                staticClass: "download-link appstore-link",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "download-link-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-black2.svg",
                    alt: "appstore"
                }
            }), a("img", {
                staticClass: "download-link-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-white2.svg",
                    alt: "appstore"
                }
            })])])
        }
        ]
          , vs = {
            name: "UrbanNavbar",
            mounted: function() {
                var s = document.querySelector("#slide-out-2");
                function t() {
                    var s = navigator.userAgent || navigator.vendor || window.opera;
                    return /windows phone/i.test(s) ? "Windows Phone" : /android/i.test(s) ? "Android" : /iPad|iPhone|iPod/.test(s) && !window.MSStream ? "iOS" : "unknown"
                }
                S.a.Sidenav.init(s),
                g()(window).scrollTop() ? g()("nav.trans-nav").addClass("scrolled-nav") : g()("nav.trans-nav").removeClass("scrolled-nav"),
                "unknown" === t() || "Windows Phone" === t() ? document.querySelectorAll(".unknown-device").forEach((function(s) {
                    s.style.display = "block"
                }
                )) : "iOS" === t() ? document.querySelectorAll(".ios-device").forEach((function(s) {
                    s.style.display = "block"
                }
                )) : document.querySelectorAll(".andriod-device").forEach((function(s) {
                    s.style.display = "block"
                }
                ))
            },
            methods: {
                scrollToTop: function() {
                    window.scrollTo(0, 0)
                }
            }
        }
          , hs = vs
          , fs = (a("3397"),
        a("3281"),
        Object(o["a"])(hs, ds, gs, !1, null, "c5da2ab2", null))
          , bs = fs.exports
          , ys = function() {
            var s = this
              , t = s.$createElement;
            s._self._c;
            return s._m(0)
        }
          , ws = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("footer", {
                staticClass: "scrollspy",
                attrs: {
                    id: "contact"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 pad0-xs* f-links-wrapper flw-1"
            }, [a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Resources")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Customer Stories")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Media")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Security")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Interest Calculator")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Plan Tool")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Blog")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Help Center")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Company")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("About Us")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Press")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Careers")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Ambassadors")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Privacy")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Terms")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Product")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Saving Plans")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Insurance")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Payrail Wallet")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Rail Fund")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Features")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Give suggestions?")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Accounts")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Urban")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Business")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Agency")])])])])]), a("div", {
                staticClass: "col s12 pad0-xs* f-links-wrapper flw-2"
            }, [a("div", {
                staticClass: "ddf sa-ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Contact")]), a("ul", {
                staticClass: "footer-links-li social-footer-links"
            }, [a("li", {
                staticClass: "sa-li"
            }, [a("a", {
                attrs: {
                    href: "mailto:support@payrail.co"
                }
            }, [s._v("support@payrail.co")]), s._v(" "), a("br"), a("span", [s._v("Layi Yusuf Cresent, Lekki Phase 1, Lagos")])]), a("li", {
                staticClass: "urban-stuff"
            }, [a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://twitter.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/twitter-red.svg",
                    alt: "twitter"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://whatsapp.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/whatsapp-red.svg",
                    alt: "whatsapp"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://facebook.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/facebook-red.svg",
                    alt: "facebook"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://linkedin.com/company/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/linkedin-red.svg",
                    alt: "linkedin"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://instagram.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/instagram-red.svg",
                    alt: "instagram"
                }
            })])])])]), a("div", {
                staticClass: "ddf"
            }, [a("ul", {
                staticClass: "footer-links-li social-footer-links"
            }, [a("li", [a("span", {
                staticClass: "download-txt"
            }, [s._v(" Download the Payrail app today for a 100% mobile banking experience. Available on iOS and Android. ")])]), a("li", {
                staticClass: "footer-appstore-wrapper urban-stuff"
            }, [a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/google-playstore-red.svg",
                    alt: "google store"
                }
            })]), a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/apple-appstore-red.svg",
                    alt: "apple store"
                }
            })]), a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/browser-red.svg",
                    alt: "web browser"
                }
            })])])])])]), a("div", {
                staticClass: "col s12 pad0-xs footer-hr-div"
            }, [a("hr"), a("img", {
                staticClass: "payrail-anagala n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-angala.png",
                    alt: "Payrail and Angala"
                }
            }), a("img", {
                staticClass: "payrail-anagala n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-angala-light.png",
                    alt: "Payrail and Angala"
                }
            }), a("hr")]), a("div", {
                staticClass: "regulators-section col pad0-xs s12"
            }, [a("div", {
                staticClass: "flex-div regulator-subscribe-wrapper"
            }, [a("div", {
                staticClass: "regulators-wrapper"
            }, [a("a", {
                staticClass: "hover-scale",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/sec.png",
                    alt: "sec"
                }
            })]), a("a", {
                staticClass: "hover-scale",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/cbn.png",
                    alt: "cbn"
                }
            })]), a("a", {
                staticClass: "hover-scale last-regulator",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/ndic.png",
                    alt: "ndic"
                }
            })])])])]), a("div", {
                staticClass: "cookies-notice col pad0-xs s12"
            }, [a("div", {
                staticClass: "p-div text-justify"
            }, [a("p", [s._v(" Payrail is product of "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "https://angalafintech.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Angala Fintech ")]), s._v(" is a company registered in Nigeria RC - 1765120. All rights reserved. Payrail is financial service provided by Angala Microfinance Bank Limited RC *******, licensed and regulated by the Central Bank of Nigeria (CBN). We empower individuals with credit, simple payments solutions, high-yield investment opportunities, and easy-to-use tools for personal financial management.Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary. ")]), a("p", [s._v(" Our Insurance are managed by our fund management "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "https://angalafintech.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Angala Insurtech ")]), s._v(" RC - 1798557 and partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Check the list of Insurance avaible on Payrail.↗ ")])]), a("p", [s._v(" Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S. ")]), a("p", [s._v(" This website uses "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Cookies ↗ ")]), s._v(" We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. The content on this website does not constitute a complete description of Payrail or Angala Fintech services. By using this website, you accept our "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Terms of Use ")]), s._v(" and "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Privacy Policy")]), s._v(". ")])])]), a("div", {
                staticClass: "col s12 pad0-xs copyright-div"
            }, [a("p", [s._v(" © Angala Financial Technologies Limited. All Rights Reserved. ")])])])])])
        }
        ]
          , Cs = {
            name: "UrbanFooter"
        }
          , _s = Cs
          , ks = Object(o["a"])(_s, ys, ws, !1, null, null, null)
          , xs = ks.exports
          , zs = {
            name: "UrbanView",
            components: {
                UrbanNavbar: bs,
                UrbanFooter: xs
            }
        }
          , Ps = zs
          , As = (a("1396"),
        Object(o["a"])(Ps, ps, us, !1, null, null, null))
          , Ts = As.exports
          , Es = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "contents",
                attrs: {
                    id: "urban-contents"
                }
            }, [a("section", {
                staticClass: "scrollspy rel",
                attrs: {
                    id: "home"
                }
            }, [a("div", {
                staticClass: "lottie-bg"
            }, [a("lottie-vue-player", {
                staticStyle: {
                    width: "100%",
                    height: "100vh"
                },
                attrs: {
                    src: "https://assets10.lottiefiles.com/packages/lf20_wfzj5a5q.json"
                }
            })], 1), a("div", {
                staticClass: "row rel"
            }, [a("div", {
                staticClass: "container home-container"
            }, [s._m(0), a("div", {
                staticClass: "col s12 m8 offset-m2 l6 offset-l0 rel",
                attrs: {
                    id: "home-img-side"
                }
            }, [a("div", [a("lottie-vue-player", {
                staticStyle: {
                    width: "100%",
                    height: "600px"
                },
                attrs: {
                    src: "https://assets10.lottiefiles.com/packages/lf20_ftofuutj.json",
                    background: s.options.backgroundColor,
                    speed: s.options.speed
                }
            })], 1)])])])]), s._m(1), a("section", {
                staticClass: "scrollspy",
                attrs: {
                    id: "sect-1"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 l6 offset-l3 center hidden-xs-sm pad0-xs rel benefits-img-container"
            }, [a("img", {
                staticClass: "benefits-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-1.png",
                    alt: "benefits-images",
                    id: "benefits-1",
                    "data-aos": "fade-right"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-1a.png",
                    alt: "benefits-images",
                    id: "benefits-1a",
                    "data-aos": "fade-right"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-2.png",
                    alt: "benefits-images",
                    id: "benefits-2",
                    "data-aos": "fade-left"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-2a.png",
                    alt: "benefits-images",
                    id: "benefits-2a",
                    "data-aos": "fade-left"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-3.png",
                    alt: "benefits-images",
                    id: "benefits-3",
                    "data-aos": "fade-up-right"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-3a.png",
                    alt: "benefits-images",
                    id: "benefits-3a",
                    "data-aos": "fade-up-right"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-4.png",
                    alt: "benefits-images",
                    id: "benefits-4",
                    "data-aos": "fade-up-left"
                }
            }), a("img", {
                staticClass: "benefits-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-4a.png",
                    alt: "benefits-images",
                    id: "benefits-4a",
                    "data-aos": "fade-up-left"
                }
            }), a("div", {
                staticClass: "center-phone-div",
                attrs: {
                    "data-aos": "fade-up"
                }
            }, [a("img", {
                staticClass: "center-phone",
                staticStyle: {
                    opacity: "0 !important"
                },
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/mobile-view.png",
                    alt: "phone"
                }
            }), a("lottie-vue-player", {
                staticClass: "lottie-benefit",
                staticStyle: {
                    width: "100%",
                    height: "600px"
                },
                attrs: {
                    src: "https://assets10.lottiefiles.com/packages/lf20_q9nenasi.json",
                    background: s.options.backgroundColor,
                    speed: s.options.speed,
                    id: "lottie-benefit-1"
                }
            }), a("lottie-vue-player", {
                staticClass: "lottie-benefit",
                staticStyle: {
                    width: "100%",
                    height: "600px"
                },
                attrs: {
                    src: "https://assets10.lottiefiles.com/packages/lf20_batu9bbi.json",
                    background: s.options.backgroundColor,
                    speed: s.options.speed,
                    id: "lottie-benefit-2"
                }
            }), a("lottie-vue-player", {
                staticClass: "lottie-benefit",
                staticStyle: {
                    width: "100%",
                    height: "600px"
                },
                attrs: {
                    src: "https://assets10.lottiefiles.com/packages/lf20_6cwdrftm.json",
                    background: s.options.backgroundColor,
                    speed: s.options.speed,
                    id: "lottie-benefit-3"
                }
            }), a("lottie-vue-player", {
                staticClass: "lottie-benefit",
                staticStyle: {
                    width: "100%",
                    height: "600px"
                },
                attrs: {
                    src: "https://assets10.lottiefiles.com/packages/lf20_5i4x8c3v.json",
                    background: s.options.backgroundColor,
                    speed: s.options.speed,
                    id: "lottie-benefit-4"
                }
            })], 1)]), s._m(2)])])]), s._m(3), s._m(4), s._m(5), s._m(6), s._m(7), s._m(8)])
        }
          , Ss = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "col s12 l6",
                attrs: {
                    id: "home-txt-side"
                }
            }, [a("div", {
                staticClass: "home-minor-title"
            }, [s._v("Bank for everyone")]), a("h1", {
                staticClass: "home-title"
            }, [s._v(" Accelerating financial ease-on the go ")]), a("div", {
                staticClass: "subscribe-form-wrapper"
            }, [a("form", {
                attrs: {
                    action: "#",
                    id: "subscribe-form",
                    onSubmit: "SaveEmails"
                }
            }, [a("div", {
                staticClass: "flex-div input-field"
            }, [a("input", {
                attrs: {
                    id: "subscriber-email",
                    placeholder: "Your Email...",
                    type: "email",
                    required: ""
                }
            }), a("button", {
                staticClass: "btn subscribe-submit pry-bg"
            }, [a("span", {
                staticClass: "visible-text-m-l"
            }, [s._v("Get Started")])])])]), a("div", {
                staticClass: "hidden",
                attrs: {
                    id: "subscribe-message"
                }
            }, [a("div", {
                staticClass: "dummy-positioning d-flex"
            }, [a("div", {
                staticClass: "success-icon"
            }, [a("div", {
                staticClass: "success-icon__tip"
            }), a("div", {
                staticClass: "success-icon__long"
            })])]), a("h5", {
                staticClass: "pry-color"
            }, [s._v("Email Submitted Successfully")])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "mid-sects",
                attrs: {
                    id: "mid-sect-1"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "mid-sect-wrapper center col s12 m10 offset-m1 l6 offset-l3"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("When you "), a("br"), s._v(" Choose Payrail")]), a("p", {
                staticClass: "mid-sect-p rel"
            }, [s._v(" You are confident of a better grip of your day-to-day transactions. ")])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "col s12 visible-xs-sm pad0-xs benefits-img-container center"
            }, [a("img", {
                staticClass: "sect-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-full.png",
                    alt: "section-img",
                    "data-aos": "fade-up"
                }
            }), a("img", {
                staticClass: "sect-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/benefits-full-white.png",
                    alt: "section-img",
                    "data-aos": "fade-up"
                }
            })])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "sect-2"
                }
            }, [a("div", {
                staticClass: "row rel"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 m8 offset-m2 l6 offset-l3 center sect-title-holder"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Thrift Savings "), a("br", {
                staticClass: "visible-xs"
            }), s._v(" ( "), a("span", {
                attrs: {
                    id: "changing-text"
                }
            }, [s._v(" àjo ")]), s._v(" ) ")]), a("p", {
                staticClass: "sect-desc"
            }, [s._v(" An easy, stress free way to save alongside people you trust. ")])]), a("div", {
                staticClass: "col s12 pad0 flex-tab-view"
            }, [a("div", {
                staticClass: "col s12 l8 hidden-xs-sm"
            }, [a("img", {
                staticClass: "full-width sect-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/thrift.png",
                    alt: "phone and people",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 l8 visible-xs-sm tab-small-img-wrapper"
            }, [a("img", {
                staticClass: "full-width sect-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/thrift.png",
                    alt: "phone and people",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 l4"
            }, [a("div", {
                staticClass: "sect1-list"
            }, [a("div", {
                staticClass: "sect1-list-block"
            }, [a("h4", {
                staticClass: "slb-title"
            }, [s._v("No more loss")]), a("p", {
                staticClass: "slb-content"
            }, [s._v(" You will never have to chase another uncooperative group member. ")])]), a("div", {
                staticClass: "sect1-list-block"
            }, [a("h4", {
                staticClass: "slb-title"
            }, [s._v("Why waste time")]), a("p", {
                staticClass: "slb-content"
            }, [s._v(" Time is free but your time is priceless. Payrail handles all savings payments and divisions. ")])]), a("div", {
                staticClass: "sect1-list-block"
            }, [a("h4", {
                staticClass: "slb-title"
            }, [s._v("Secure")]), a("p", {
                staticClass: "slb-content"
            }, [s._v(" We will keep your money safe and protect your account. ")])])])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "sect-2-a"
                }
            }, [a("div", {
                staticClass: "row rel"
            }, [a("div", {
                staticClass: "container flex-div-coloumn-xs"
            }, [a("div", {
                staticClass: "col s12 l6"
            }, [a("div", {
                staticClass: "col s12 l8 offset-l2 pad0"
            }, [a("div", {
                staticClass: "sect1-list"
            }, [a("div", {
                staticClass: "sect1-list-block"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Optimized Functionality")]), a("p", {
                staticClass: "slb-content"
            }, [s._v(" Payrail helps you automate your subscription bills enabling you to have a stress free life. ")])]), a("div", {
                staticClass: "sect1-list-block"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Personalized Notifications")]), a("p", {
                staticClass: "slb-content"
            }, [s._v(" The days you got cut off from services you enjoy are long gone. We are here to prompt you - always. ")])])])])]), a("div", {
                staticClass: "col s12 l6 tab-small-img-wrapper center"
            }, [a("img", {
                staticClass: "full-width sect-img bills-pay-bg",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/bills-payment.png",
                    alt: "phone notification",
                    "data-aos": "fade-up"
                }
            })])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "sect-3"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 l6 tab-small-img-wrapper"
            }, [a("img", {
                staticClass: "sect-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/lady-with-phone.png",
                    alt: "lady-with-phone",
                    "data-aos": "fade-up"
                }
            }), a("img", {
                staticClass: "sect-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/lady-with-phone-a.png",
                    alt: "lady-with-phone",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 l6 sec-mag-down"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Maintenance fees are no business of yours")]), a("p", {
                staticClass: "mid-sect-p rel text-justify-xs"
            }, [s._v(" We would house your account and ensure that your data and funds are well protected at all times. At no cost whatsoever. ")]), a("ul", {
                staticClass: "sect-list sec-list-grid"
            }, [a("li", [a("img", {
                staticClass: "tick-box",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/tick-box.svg",
                    alt: "tick-box"
                }
            }), a("span", [s._v("No Minimum balance")])]), a("li", [a("img", {
                staticClass: "tick-box",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/tick-box.svg",
                    alt: "tick-box"
                }
            }), a("span", [s._v("No Monthly subscription")])]), a("li", [a("img", {
                staticClass: "tick-box",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/tick-box.svg",
                    alt: "tick-box"
                }
            }), a("span", [s._v("No Transaction fees")])]), a("li", [a("img", {
                staticClass: "tick-box",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/tick-box.svg",
                    alt: "tick-box"
                }
            }), a("span", [s._v("No Account opening fees")])])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "sect-4"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container sect-flex-align"
            }, [a("div", {
                staticClass: "col s12 l8 sec-mag-down"
            }, [a("h3", {
                staticClass: "sect-title"
            }, [s._v("Safety of your money our priority.")]), a("ul", {
                staticClass: "sect-list sec-list-grid"
            }, [a("li", [a("div", {
                staticClass: "sect-list-title-div"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check-red.svg",
                    alt: "check"
                }
            }), a("span", [s._v("Bank-grade Security")])]), a("p", {
                staticClass: "slb-content text-justify"
            }, [s._v(" All cards and bank data are encrypted to prevent unauthorised access to sensitive data. Our payment processors are also PCI-DSS compliant. ")])]), a("li", [a("div", {
                staticClass: "sect-list-title-div"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check-red.svg",
                    alt: "check"
                }
            }), a("span", [s._v("Regulatory Compliance")])]), a("p", {
                staticClass: "slb-content text-justify"
            }, [s._v(" We are a duly registered fund managing company with the Securities and Exchange Commission (SEC) of Nigeria. ")])]), a("li", [a("div", {
                staticClass: "sect-list-title-div"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check-red.svg",
                    alt: "check"
                }
            }), a("span", [s._v("Two-Factor Authentication")])]), a("p", {
                staticClass: "slb-content text-justify"
            }, [s._v(" You are more than just a username and password to us which is key transactions pass through the 2FA verification process on Payrail. ")])]), a("li", [a("div", {
                staticClass: "sect-list-title-div"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/check-red.svg",
                    alt: "check"
                }
            }), a("span", [s._v("Best Insurance Product")])]), a("p", {
                staticClass: "slb-content text-justify"
            }, [s._v(" All the insurance options listed on Payrail, are carefully screened, managed by Angala Insurtech, registered with the SEC, and has a standard third-party custodian structure. ")])])])]), a("div", {
                staticClass: "col s12 l4 safe-img-wrapper tab-small-img-wrapper"
            }, [a("img", {
                staticClass: "sect-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/safe-img.png",
                    alt: "safe-img",
                    "data-aos": "fade-up"
                }
            }), a("img", {
                staticClass: "sect-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/safe-img-2.png",
                    alt: "safe-img",
                    "data-aos": "fade-up"
                }
            })])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "debit-cards"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 pad0"
            }, [a("div", {
                staticClass: "col s12 m6 hidden-xs"
            }, [a("img", {
                staticClass: "full-width payrail-card-hand",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-card-hand2.png",
                    alt: "payrail debit card",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 m6"
            }, [a("div", {
                staticClass: "debit-cards-txt-div"
            }, [a("div", {
                staticClass: "debit-card-title"
            }, [s._v("DEBIT CARD")]), a("div", {
                staticClass: "debit-card-txt"
            }, [s._v(" Create a virtual and physical naira card to handle all your payments hassle free. ")])])]), a("div", {
                staticClass: "col s12 m6 visible-xs"
            }, [a("img", {
                staticClass: "full-width payrail-card-hand",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/urban-card-hand2.png",
                    alt: "payrail debit card"
                }
            })])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "join-payrail"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "black-bg black-wrapper rel"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 pad0-xs join-sub-wrapper rel"
            }, [a("div", {
                staticClass: "col s12 m7"
            }, [a("h4", {
                staticClass: "sect-title white-txt"
            }, [s._v(" Sign up to experience financial ease ")])]), a("div", {
                staticClass: "col s12 m5"
            }, [a("div", {
                staticClass: "app-stores-wrapper flex-div"
            }, [a("div", {}, [a("button", {
                staticClass: "app-store google-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-red.svg",
                    alt: "google store"
                }
            })])]), a("div", {}, [a("button", {
                staticClass: "app-store apple-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-red.svg",
                    alt: "apple store"
                }
            })])])])])])])])])])
        }
        ]
          , Ws = {
            name: "UrbanHome",
            components: {},
            mounted: function() {
                V.a.init(),
                g()("#benefits-1, #benefits-1a").hover((function() {
                    g()(".lottie-benefit").hide(),
                    g()("#lottie-benefit-1").show()
                }
                )),
                g()("#benefits-2, #benefits-2a").hover((function() {
                    g()(".lottie-benefit").hide(),
                    g()("#lottie-benefit-2").show()
                }
                )),
                g()("#benefits-3, #benefits-3a").hover((function() {
                    g()(".lottie-benefit").hide(),
                    g()("#lottie-benefit-3").show()
                }
                )),
                g()("#benefits-4, #benefits-4a").hover((function() {
                    g()(".lottie-benefit").hide(),
                    g()("#lottie-benefit-4").show()
                }
                ));
                var s = ["àjo", "isusu", "adashe"];
                function t(s, a, e) {
                    a < s.length ? (document.querySelector("#changing-text").innerHTML = s.substring(0, a + 1),
                    setTimeout((function() {
                        t(s, a + 1, e)
                    }
                    ), 100)) : "function" == typeof e && setTimeout(e, 1e3)
                }
                function a(e) {
                    "undefined" == typeof s[e] && setTimeout((function() {
                        a(0)
                    }
                    ), 500),
                    e < s[e].length && t(s[e], 0, (function() {
                        a(e + 1)
                    }
                    ))
                }
                a(0)
            },
            data: function() {
                return {
                    options: {
                        minimizable: !1,
                        playerSize: "standard",
                        backgroundColor: "transparent",
                        speed: 1,
                        backgroundStyle: "color",
                        theme: {
                            controlsView: "standard",
                            active: "light",
                            light: {
                                color: "#3D4852",
                                backgroundColor: "#fff",
                                opacity: "0.7"
                            },
                            dark: {
                                color: "#fff",
                                backgroundColor: "#202020",
                                opacity: "0.7"
                            }
                        }
                    }
                }
            }
        }
          , Ds = Ws
          , Is = (a("5a6a"),
        Object(o["a"])(Ds, Es, Ss, !1, null, null, null))
          , Os = Is.exports
          , js = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                attrs: {
                    id: "business-wrapper"
                }
            }, [a("BusinessNavbar"), a("div", {
                attrs: {
                    id: "business-contents-wrapper"
                }
            }, [a("router-view")], 1), a("BusinessFooter")], 1)
        }
          , $s = []
          , Rs = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", [a("nav", {
                staticClass: "trans-nav"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "nav-wrapper"
            }, [a("router-link", {
                staticClass: "brand-logo",
                attrs: {
                    to: "/"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("img", {
                staticClass: "logo n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-logo-black.svg",
                    alt: "Payrail Urban"
                }
            }), a("img", {
                staticClass: "logo n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-logo-white.svg",
                    alt: "Payrail Urban"
                }
            })]), a("ul", {
                staticClass: "hide-on-med-and-down ul-nav",
                attrs: {
                    id: "nav-mobile"
                }
            }, [a("li", [a("router-link", {
                staticClass: "route-link",
                attrs: {
                    to: "/urban"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Urban")])])], 1), a("li", [a("router-link", {
                staticClass: "route-link active-link",
                attrs: {
                    to: "/business"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Business")])])], 1), a("li", [a("router-link", {
                staticClass: "route-link",
                attrs: {
                    to: "/agency"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Agency")])])], 1)]), s._m(0), s._m(1)], 1)])]), a("ul", {
                staticClass: "sidenav",
                attrs: {
                    id: "slide-out-2"
                }
            }, [s._m(2), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close",
                attrs: {
                    to: "/urban"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Urban")])])], 1), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close active-link",
                attrs: {
                    to: "/business"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Business")])])], 1), a("li", {
                staticClass: "big-navg-link"
            }, [a("router-link", {
                staticClass: "route-link sidenav-close",
                attrs: {
                    to: "/agency"
                },
                on: {
                    click: function(t) {
                        return s.scrollToTop()
                    }
                }
            }, [a("span", [s._v("Agency")])])], 1), s._m(3), s._m(4), s._m(5), s._m(6), s._m(7), s._m(8), s._m(9), s._m(10), s._m(11)])])
        }
          , Ns = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("ul", {
                staticClass: "right hide-on-med-and-down ul-nav",
                attrs: {
                    id: "nav-mobile-2"
                }
            }, [a("li", [a("a", {
                attrs: {
                    href: "#sect-1"
                }
            }, [a("span", [s._v("Features")])])]), a("li", [a("a", {
                attrs: {
                    href: "#sect-2"
                }
            }, [a("span", [s._v("About")])])]), a("li", [a("a", {
                attrs: {
                    href: "#sect-3"
                }
            }, [a("span", [s._v("Resources")])])]), a("li", [a("div", {
                staticClass: "switch-container"
            }, [a("div", {
                staticClass: "theme-button enabled light-mode-btn",
                attrs: {
                    "aria-label": "Enable light theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-light-button",
                    onclick: "enableTheme('light', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch light-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg",
                    alt: "switch"
                }
            })]), a("div", {
                staticClass: "theme-button dark-mode-btn",
                attrs: {
                    "aria-label": "Enable dark theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-dark-button",
                    onclick: "enableTheme('dark', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch dark-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg",
                    alt: "switch"
                }
            })])])]), a("li", [a("a", {
                attrs: {
                    href: "https://business.payrail.co/signup",
                    target: "_blank"
                }
            }, [a("button", {
                staticClass: "nav-pry-btn black-bg btn pointer"
            }, [s._v(" Get Started "), a("img", {
                staticClass: "right-chevron",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-chevron-white.svg",
                    alt: "right-chevron"
                }
            })])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("ul", {
                staticClass: "right dn-mobile ul-nav"
            }, [a("li", {
                staticClass: "menu-img-wrapper"
            }, [a("img", {
                staticClass: "menu-img sidenav-trigger n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu.svg",
                    alt: "menu",
                    "data-target": "slide-out-2"
                }
            }), a("img", {
                staticClass: "menu-img sidenav-trigger n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu-2.svg",
                    alt: "menu",
                    "data-target": "slide-out-2"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "close-sidenav-div"
            }, [a("button", {
                staticClass: "sidenav-close"
            }, [a("img", {
                staticClass: "n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-black.svg",
                    alt: "close side-nav"
                }
            }), a("img", {
                staticClass: "n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-orange.svg",
                    alt: "close side-nav"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", {
                staticClass: "divider-li"
            }, [a("hr", {
                staticClass: "divider"
            })])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Features")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("About")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Resources")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("li", [a("a", {
                staticClass: "sidenav-close",
                attrs: {
                    href: "/"
                }
            }, [s._v("Blogs")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "switch-container-mobile"
            }, [a("div", {
                staticClass: "theme-button enabled light-mode-btn",
                attrs: {
                    "aria-label": "Enable light theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-light-button",
                    onclick: "enableTheme('light', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch light-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg",
                    alt: "switch"
                }
            })]), a("div", {
                staticClass: "theme-button dark-mode-btn",
                attrs: {
                    "aria-label": "Enable dark theme",
                    "aria-pressed": "false",
                    type: "button",
                    id: "theme-dark-button",
                    onclick: "enableTheme('dark', true)"
                }
            }, [a("img", {
                staticClass: "mode-switch dark-switch",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg",
                    alt: "switch"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "appstore-container-mobile andriod-device"
            }, [a("a", {
                staticClass: "download-link playstore-link",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "download-link-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-black3.svg",
                    alt: "playstore"
                }
            }), a("img", {
                staticClass: "download-link-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-white3.svg",
                    alt: "playstore"
                }
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "appstore-container-mobile ios-device"
            }, [a("a", {
                staticClass: "download-link appstore-link",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                staticClass: "download-link-img n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-black3.svg",
                    alt: "appstore"
                }
            }), a("img", {
                staticClass: "download-link-img n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-white3.svg",
                    alt: "appstore"
                }
            })])])
        }
        ]
          , Bs = {
            name: "BusinessNavbar",
            mounted: function() {
                var s = document.querySelector("#slide-out-2");
                function t() {
                    var s = navigator.userAgent || navigator.vendor || window.opera;
                    return /windows phone/i.test(s) ? "Windows Phone" : /android/i.test(s) ? "Android" : /iPad|iPhone|iPod/.test(s) && !window.MSStream ? "iOS" : "unknown"
                }
                S.a.Sidenav.init(s),
                g()(window).scrollTop() ? g()("nav.trans-nav").addClass("scrolled-nav") : g()("nav.trans-nav").removeClass("scrolled-nav"),
                "unknown" === t() || "Windows Phone" === t() ? document.querySelectorAll(".unknown-device").forEach((function(s) {
                    s.style.display = "block"
                }
                )) : "iOS" === t() ? document.querySelectorAll(".ios-device").forEach((function(s) {
                    s.style.display = "block"
                }
                )) : document.querySelectorAll(".andriod-device").forEach((function(s) {
                    s.style.display = "block"
                }
                ))
            },
            methods: {
                scrollToTop: function() {
                    window.scrollTo(0, 0)
                }
            }
        }
          , qs = Bs
          , Fs = (a("7570"),
        a("325d"),
        Object(o["a"])(qs, Rs, Ns, !1, null, "4bf40056", null))
          , Ls = Fs.exports
          , Ys = function() {
            var s = this
              , t = s.$createElement;
            s._self._c;
            return s._m(0)
        }
          , Us = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("footer", {
                staticClass: "scrollspy",
                attrs: {
                    id: "contact"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 pad0-xs* f-links-wrapper flw-1"
            }, [a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Resources")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Customer Stories")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Media")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Security")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Interest Calculator")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Plan Tool")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Blog")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Help Center")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Company")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("About Us")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Press")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("FAQs")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Careers")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Ambassadors")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Privacy")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Terms")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Product")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Saving Plans")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Insurance")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Payrail Wallet")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Rail Fund")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Features")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Give suggestions?")])])])]), a("div", {
                staticClass: "ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Accounts")]), a("ul", {
                staticClass: "footer-links-li"
            }, [a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Urban")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Business")])]), a("li", [a("a", {
                attrs: {
                    href: "/"
                }
            }, [s._v("Agency")])])])])]), a("div", {
                staticClass: "col s12 pad0-xs* f-links-wrapper flw-2"
            }, [a("div", {
                staticClass: "ddf sa-ddf"
            }, [a("h5", {
                staticClass: "footer-title"
            }, [s._v("Contact")]), a("ul", {
                staticClass: "footer-links-li social-footer-links"
            }, [a("li", {
                staticClass: "sa-li"
            }, [a("a", {
                attrs: {
                    href: "mailto:support@payrail.co"
                }
            }, [s._v("support@payrail.co")]), s._v(" "), a("br"), a("span", [s._v("Layi Yusuf Cresent, Lekki Phase 1, Lagos")])]), a("li", {
                staticClass: "business-stuff"
            }, [a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://twitter.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/twitter-orange.svg",
                    alt: "twitter"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://whatsapp.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/whatsapp-orange.svg",
                    alt: "whatsapp"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://facebook.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/facebook-orange.svg",
                    alt: "facebook"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://linkedin.com/company/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/linkedin-orange.svg",
                    alt: "linkedin"
                }
            })]), a("a", {
                staticClass: "social-link",
                attrs: {
                    href: "https://instagram.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }
            }, [a("img", {
                staticClass: "hover-scale",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/instagram-orange.svg",
                    alt: "instagram"
                }
            })])])])]), a("div", {
                staticClass: "ddf"
            }, [a("ul", {
                staticClass: "footer-links-li social-footer-links"
            }, [a("li", [a("span", {
                staticClass: "download-txt"
            }, [s._v(" Download the Payrail app today for a 100% mobile banking experience. Available on iOS and Android. ")])]), a("li", {
                staticClass: "footer-appstore-wrapper business-stuff"
            }, [a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-orange.svg",
                    alt: "google store"
                }
            })]), a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-orange.svg",
                    alt: "apple store"
                }
            })]), a("button", {
                staticClass: "app-store hover-scale"
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/web-orange.svg",
                    alt: "web browser"
                }
            })])])])])]), a("div", {
                staticClass: "col s12 pad0-xs footer-hr-div"
            }, [a("hr"), a("img", {
                staticClass: "payrail-anagala n-img-1",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/bizness-angala.png",
                    alt: "Payrail and Angala"
                }
            }), a("img", {
                staticClass: "payrail-anagala n-img-2",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/bizness-angala-white.png",
                    alt: "Payrail and Angala"
                }
            }), a("hr")]), a("div", {
                staticClass: "regulators-section col pad0-xs s12"
            }, [a("div", {
                staticClass: "flex-div regulator-subscribe-wrapper"
            }, [a("div", {
                staticClass: "regulators-wrapper"
            }, [a("a", {
                staticClass: "hover-scale",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/sec.png",
                    alt: "sec"
                }
            })]), a("a", {
                staticClass: "hover-scale",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/cbn.png",
                    alt: "cbn"
                }
            })]), a("a", {
                staticClass: "hover-scale last-regulator",
                attrs: {
                    href: "http://",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [a("img", {
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/ndic.png",
                    alt: "ndic"
                }
            })])])])]), a("div", {
                staticClass: "cookies-notice col pad0-xs s12"
            }, [a("div", {
                staticClass: "p-div text-justify"
            }, [a("p", [s._v(" Payrail is product of "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "https://angalafintech.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Angala Fintech ")]), s._v(" is a company registered in Nigeria RC - 1765120. All rights reserved. Payrail is financial service provided by Angala Microfinance Bank Limited RC *******, licensed and regulated by the Central Bank of Nigeria (CBN). We empower individuals with credit, simple payments solutions, high-yield investment opportunities, and easy-to-use tools for personal financial management.Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary. ")]), a("p", [s._v(" Our Insurance are managed by our fund management "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "https://angalafintech.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Angala Insurtech ")]), s._v(" RC - 1798557 and partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Check the list of Insurance avaible on Payrail.↗ ")])]), a("p", [s._v(" Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S. ")]), a("p", [s._v(" This website uses "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Cookies ↗ ")]), s._v(" We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. The content on this website does not constitute a complete description of Payrail or Angala Fintech services. By using this website, you accept our "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Terms of Use ")]), s._v(" and "), a("a", {
                staticClass: "pry-color",
                attrs: {
                    href: "/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [s._v(" Privacy Policy")]), s._v(". ")])])]), a("div", {
                staticClass: "col s12 pad0-xs copyright-div"
            }, [a("p", [s._v(" © Angala Financial Technologies Limited. All Rights Reserved. ")])])])])])
        }
        ]
          , Ms = {
            name: "UrbanFooter"
        }
          , Gs = Ms
          , Hs = Object(o["a"])(Gs, Ys, Us, !1, null, null, null)
          , Vs = Hs.exports
          , Qs = {
            name: "BusinessView",
            components: {
                BusinessNavbar: Ls,
                BusinessFooter: Vs
            }
        }
          , Js = Qs
          , Ks = (a("7aef"),
        Object(o["a"])(Js, js, $s, !1, null, null, null))
          , Xs = Ks.exports
          , Zs = function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "contents",
                attrs: {
                    id: "business-contents"
                }
            }, [s._m(0), s._m(1), s._m(2), s._m(3), s._m(4), a("section", {
                staticClass: "scrollspy",
                attrs: {
                    id: "testimonies-section"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [s._m(5), s._m(6), a("div", {
                staticClass: "carousel-nav flex-div"
            }, [s._m(7), a("div", {
                staticClass: "next-prev-wrapper flex-div hidden-xs"
            }, [a("img", {
                staticClass: "prev-btn slide-btn",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/left-slide.svg",
                    alt: "previous"
                },
                on: {
                    click: function(t) {
                        return s.prevFunc()
                    }
                }
            }), a("img", {
                staticClass: "next-btn slide-btn",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-slide.svg",
                    alt: "next"
                },
                on: {
                    click: function(t) {
                        return s.nextFunc()
                    }
                }
            })]), a("div", {
                staticClass: "next-prev-wrapper flex-div visible-xs"
            }, [a("img", {
                staticClass: "prev-btn slide-btn",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/left-slide.svg",
                    alt: "previous"
                },
                on: {
                    click: function(t) {
                        return s.prevFunc2()
                    }
                }
            }), a("img", {
                staticClass: "next-btn slide-btn",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-slide.svg",
                    alt: "next"
                },
                on: {
                    click: function(t) {
                        return s.nextFunc2()
                    }
                }
            })])])])])]), s._m(8), s._m(9)])
        }
          , st = [function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "scrollspy",
                attrs: {
                    id: "home"
                }
            }, [a("div", {
                staticClass: "row rel"
            }, [a("div", {
                staticClass: "col s12 l6",
                attrs: {
                    id: "home-txt-side"
                }
            }, [a("div", {
                staticClass: "home-minor-title"
            }, [s._v("Simplifying modern commerce")]), a("h1", {
                staticClass: "home-title"
            }, [s._v(" Helping solopreneurs and small businesses grow ")]), a("p", {
                staticClass: "home-desc-txt"
            }, [s._v(" into an all-inclusive "), a("span", {
                staticClass: "pry-color"
            }, [s._v("banking service that works.")])]), a("div", {
                staticClass: "subscribe-form-wrapper"
            }, [a("form", {
                attrs: {
                    action: "https://business.payrail.co/signup",
                    method: "get",
                    target: "_blank",
                    id: "subscribe-form"
                }
            }, [a("div", {
                staticClass: "flex-div input-field"
            }, [a("input", {
                attrs: {
                    name: "email",
                    id: "subscriber-email",
                    placeholder: "Your Email...",
                    type: "email",
                    required: ""
                }
            }), a("button", {
                staticClass: "btn subscribe-submit pry-bg"
            }, [a("span", {
                staticClass: "visible-text-m-l"
            }, [s._v("Get Started")])])])]), a("div", {
                staticClass: "hidden",
                attrs: {
                    id: "subscribe-message"
                }
            }, [a("div", {
                staticClass: "dummy-positioning d-flex"
            }, [a("div", {
                staticClass: "success-icon"
            }, [a("div", {
                staticClass: "success-icon__tip"
            }), a("div", {
                staticClass: "success-icon__long"
            })])]), a("h5", {
                staticClass: "pry-color"
            }, [s._v("Email Submitted Successfully")])])])]), a("div", {
                staticClass: "container home-container rel"
            })])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "section scrollspy",
                attrs: {
                    id: "integration-desc-section"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "mid-sect-wrapper col s12"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 l6 offset-l3 pad0 center sect-heading"
            }, [a("hr", {
                staticClass: "sect-top-marker"
            }), a("h4", {
                staticClass: "section-title center"
            }, [s._v("One integration, many possibilities")]), a("span", {
                staticClass: "sect-title-desc"
            }, [s._v(" Create your account with Payrail business and get it running in as little as 10 minutes ")])]), a("div", {
                staticClass: "col s12 pad0 sect-contents"
            }, [a("div", {
                staticClass: "col s12 l6 int-img-side text-center-xs",
                attrs: {
                    "data-aos": "fade-up"
                }
            }, [a("img", {
                staticClass: "int-img active-int-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/int-img-1.png",
                    alt: "dashboard-laptop"
                }
            }), a("img", {
                staticClass: "int-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/int-img-2.png",
                    alt: "dashboard-laptop"
                }
            }), a("img", {
                staticClass: "int-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/int-img-3.png",
                    alt: "dashboard-laptop"
                }
            }), a("img", {
                staticClass: "int-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/int-img-4.png",
                    alt: "dashboard-laptop"
                }
            })]), a("div", {
                staticClass: "col s12 l6 int-txt-side"
            }, [a("ul", {
                staticClass: "int-txt-indicator"
            }, [a("li", {
                staticClass: "txt-indicator-block active-indicator-block"
            }, [a("h5", {
                staticClass: "indicator-title"
            }, [s._v("You want data? You’ll have it")]), a("span", {
                staticClass: "indicator-text"
            }, [s._v(" We provide an unrivalled transparent view of your payments data and insights that helps your business strive. ")])]), a("li", {
                staticClass: "txt-indicator-block"
            }, [a("h5", {
                staticClass: "indicator-title"
            }, [s._v("Payment gateway")]), a("span", {
                staticClass: "indicator-text"
            }, [s._v(" We do not discriminate against credit cards and we accept payments in many currencies. ")])]), a("li", {
                staticClass: "txt-indicator-block"
            }, [a("h5", {
                staticClass: "indicator-title"
            }, [s._v("Whatever your business, you need cash")]), a("span", {
                staticClass: "indicator-text"
            }, [s._v(" Cash is the fuel that powers your business. Let’s make it easier to keep it flowing. ")])]), a("li", {
                staticClass: "txt-indicator-block"
            }, [a("h5", {
                staticClass: "indicator-title"
            }, [s._v("Time Wasted = zero ")]), a("span", {
                staticClass: "indicator-text"
            }, [s._v(" The recurring payments and subscription-based payment plans ensure that you drive revenue and expand effortlessly. ")])])])])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "section scrollspy",
                attrs: {
                    id: "protect-funds"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 pad0 pf-flex-div"
            }, [a("div", {
                staticClass: "col s12 m6",
                attrs: {
                    id: "pf-txt-side"
                }
            }, [a("h4", {
                staticClass: "section-title"
            }, [s._v("We will protect your funds")]), a("p", {
                staticClass: "sect-title-desc"
            }, [s._v(" Every payment made on our platform is 100% secure, far above industry standard. We also have an advanced fraud protection system in place. ")])]), a("div", {
                staticClass: "col s12 m6 right-align text-center-xs"
            }, [a("img", {
                staticClass: "sect-img pf-safe-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/bizness-safe.png",
                    alt: "section-img",
                    "data-aos": "fade-up"
                }
            })])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "section scrollspy",
                attrs: {
                    id: "gallery-section"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container*"
            }, [a("div", {
                staticClass: "mid-sect-wrapper col s12 pad0"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 l6 offset-l3 center sect-heading"
            }, [a("hr", {
                staticClass: "sect-top-marker"
            }), a("h4", {
                staticClass: "section-title center"
            }, [s._v("For today’s forward thinking businesses")]), a("span", {
                staticClass: "sect-title-desc"
            }, [s._v(" Whether you are a startup or the most experienced solopreneur, Payrail business has a solution for you. ")])]), a("div", {
                staticClass: "col s12 pad0 sect-contents marquee-content"
            }, [a("div", {
                staticClass: "marquee-item"
            }, [a("img", {
                staticClass: "full-width",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/full-img-gallery.png",
                    alt: "full-img-gallery",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "marquee-item"
            }, [a("img", {
                staticClass: "full-width",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/full-img-gallery.png",
                    alt: "full-img-gallery",
                    "data-aos": "fade-up"
                }
            })])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                staticClass: "section scrollspy",
                attrs: {
                    id: "support-section"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 l6 offset-l3 pad0 center sect-heading"
            }, [a("hr", {
                staticClass: "sect-top-marker"
            }), a("h4", {
                staticClass: "section-title center"
            }, [s._v("Over 5000 businesses trust Payrail")]), a("span", {
                staticClass: "sect-title-desc"
            }, [s._v(" Business to process millions of secure payments daily. What about yours? ")])]), a("div", {
                staticClass: "col s12 pad0 sect-contents pf-flex-div"
            }, [a("div", {
                staticClass: "col s12 m6 text-center-xs"
            }, [a("img", {
                staticClass: "sect-img pf-safe-img",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/chat-list-img.png",
                    alt: "chat-img",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 m6"
            }, [a("h4", {
                staticClass: "section-sub-title"
            }, [s._v("We offer a wide range of products that any business can benefit from. ")]), a("p", {
                staticClass: "sect-title-desc"
            }, [s._v(" Our team of payment experts are available to help each step of the way. ")])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "carousel testimonies-slider-1 hidden-xs"
            }, [a("div", {
                staticClass: "carousel-item"
            }, [a("div", {
                staticClass: "testimony-wrapper"
            }, [a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "My staff cannot still believe how easy it is for my customers to make payments. Before now, we were limited to selling in only Nigeria but now we have some of our best buying customers in Kenya and South Africa." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Olabisi Olayemi")]), s._v(" "), a("br"), a("span", [s._v("Founder, Seamwears Ltd ")])])])]), a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "I thought it was all hype when I was told I could have my account running in 10 minutes. But that was exactly what happened. There was no back and forth. There was no fuss. And now, my business’ cash flow has never been better." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Shittu Ogundare")]), s._v(" "), a("br"), a("span", [s._v("CEO, Blackman Shoes ")])])])])])]), a("div", {
                staticClass: "carousel-item"
            }, [a("div", {
                staticClass: "testimony-wrapper"
            }, [a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "It’s the interface for me, actually. It is so easy to use and very informative and I believe this is one of the reasons why transactions do not take a lot of time." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Karen Johson")]), s._v(" "), a("br"), a("span", [s._v("CEO, Cheekybeauty ")])])])]), a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "My staff cannot still believe how easy it is for my customers to make payments. Before now, we were limited to selling in only Nigeria but now we have some of our best buying customers in Kenya and South Africa." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Olabisi Olayemi")]), s._v(" "), a("br"), a("span", [s._v("Founder, Seamwears Ltd ")])])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "carousel testimonies-slider-2 visible-xs"
            }, [a("div", {
                staticClass: "carousel-item"
            }, [a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "My staff cannot still believe how easy it is for my customers to make payments. Before now, we were limited to selling in only Nigeria but now we have some of our best buying customers in Kenya and South Africa." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Olabisi Olayemi")]), s._v(" "), a("br"), a("span", [s._v("Founder, Seamwears Ltd ")])])])])]), a("div", {
                staticClass: "carousel-item"
            }, [a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "I thought it was all hype when I was told I could have my account running in 10 minutes. But that was exactly what happened. There was no back and forth. There was no fuss. And now, my business’ cash flow has never been better." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Shittu Ogundare")]), s._v(" "), a("br"), a("span", [s._v("CEO, Blackman Shoes ")])])])])]), a("div", {
                staticClass: "carousel-item"
            }, [a("div", {
                staticClass: "testimony-block"
            }, [a("div", {
                staticClass: "review-container"
            }, [a("p", [s._v(' "It’s the interface for me, actually. It is so easy to use and very informative and I believe this is one of the reasons why transactions do not take a lot of time." ')])]), a("div", {
                staticClass: "reviewer-details"
            }, [a("div", {
                staticClass: "reviewer-name"
            }, [a("b", [s._v("Karen Johson")]), s._v(" "), a("br"), a("span", [s._v("CEO, Cheekybeauty ")])])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("div", {
                staticClass: "carousel-counter flex-div hidden-xs"
            }, [a("span", {
                staticClass: "curr-slide"
            }, [s._v("1")]), a("hr", {
                staticClass: "counter-divider"
            }), a("span", {
                staticClass: "all-slide"
            }, [s._v("2")])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "debit-cards"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "col s12 pad0"
            }, [a("div", {
                staticClass: "col s12 m6 hidden-xs"
            }, [a("img", {
                staticClass: "full-width payrail-card-hand",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/bizness-card-hand.png",
                    alt: "payrail debit card",
                    "data-aos": "fade-up"
                }
            })]), a("div", {
                staticClass: "col s12 m6"
            }, [a("div", {
                staticClass: "debit-cards-txt-div"
            }, [a("div", {
                staticClass: "debit-card-title"
            }, [s._v("DEBIT CARD")]), a("div", {
                staticClass: "debit-card-txt"
            }, [s._v(" Instantly create virtual and physical naira cards to handle your all your payments ")])])]), a("div", {
                staticClass: "col s12 m6 visible-xs"
            }, [a("img", {
                staticClass: "full-width payrail-card-hand",
                attrs: {
                    src: "https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/bizness-card-hand.png",
                    alt: "payrail debit card"
                }
            })])])])])])
        }
        , function() {
            var s = this
              , t = s.$createElement
              , a = s._self._c || t;
            return a("section", {
                attrs: {
                    id: "join-payrail"
                }
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "black-bg black-wrapper"
            }, [a("div", {
                staticClass: "col s12 m10 offset-m1 pad0-xs"
            }, [a("div", {
                staticClass: "col s12 l7"
            }, [a("h4", {
                staticClass: "sect-title white-txt"
            }, [s._v("Sign up for free. "), a("br"), s._v(" Manage money with ease")])]), a("div", {
                staticClass: "col s12 l5"
            }, [a("div", {
                staticClass: "subscribe-form-wrapper"
            }, [a("form", {
                attrs: {
                    action: "https://business.payrail.co/signup",
                    method: "get",
                    target: "_blank",
                    id: "subscribe-form-2"
                }
            }, [a("div", {
                staticClass: "flex-div input-field"
            }, [a("input", {
                attrs: {
                    name: "email",
                    id: "subscriber-email-2",
                    placeholder: "Your Email...",
                    type: "email",
                    required: ""
                }
            }), a("button", {
                staticClass: "btn subscribe-submit pry-bg"
            }, [s._v("Get Started")])])]), a("div", {
                staticClass: "hidden subscribe-message",
                attrs: {
                    id: "subscribe-message-2"
                }
            }, [a("div", {
                staticClass: "dummy-positioning d-flex"
            }, [a("div", {
                staticClass: "success-icon"
            }, [a("div", {
                staticClass: "success-icon__tip"
            }), a("div", {
                staticClass: "success-icon__long"
            })])]), a("h5", {
                staticClass: "pry-color"
            }, [s._v("Email Submitted Successfully")])])])])])])])])])
        }
        ]
          , tt = {
            name: "BusinessHome",
            mounted: function() {
                V.a.init();
                var s = document.querySelector(".testimonies-slider-1.carousel");
                S.a.Carousel.init(s);
                var t = document.querySelector(".testimonies-slider-2.carousel");
                S.a.Carousel.init(t, {
                    fullWidth: !0
                }),
                window.setInterval((function() {
                    S.a.Carousel.getInstance(t).next()
                }
                ), 8e3);
                var a = 0;
                function e() {
                    var s, t = document.getElementsByClassName("int-img");
                    for (s = 0; s < t.length; s++)
                        t[s].style.display = "none";
                    a++,
                    a > t.length && (a = 1),
                    t[a - 1].style.display = "block",
                    setTimeout(e, 4e3)
                }
                e();
                var i = 0;
                function r() {
                    var s, t = document.getElementsByClassName("txt-indicator-block");
                    for (s = 0; s < t.length; s++)
                        t[s].classList.remove("active-indicator-block");
                    i++,
                    i > t.length && (i = 1),
                    t[i - 1].classList.add("active-indicator-block"),
                    setTimeout(r, 4e3)
                }
                r();
                var o = document.querySelector(".pci-img");
                function l() {
                    document.body.classList.remove("js-loading")
                }
                document.body.classList.add("js-loading"),
                o.addEventListener("load", l)
            },
            methods: {
                nextFunc: function() {
                    var s = document.querySelector(".testimonies-slider-1.carousel");
                    S.a.Carousel.getInstance(s).next()
                },
                prevFunc: function() {
                    var s = document.querySelector(".testimonies-slider-1.carousel");
                    S.a.Carousel.getInstance(s).prev()
                },
                nextFunc2: function() {
                    var s = document.querySelector(".testimonies-slider-2.carousel");
                    S.a.Carousel.getInstance(s).next()
                },
                prevFunc2: function() {
                    var s = document.querySelector(".testimonies-slider-2.carousel");
                    S.a.Carousel.getInstance(s).prev()
                }
            }
        }
          , at = tt
          , et = Object(o["a"])(at, Zs, st, !1, null, null, null)
          , it = et.exports;
        e["default"].use(m["a"]);
        var rt = [{
            path: "/",
            component: b,
            name: "Home"
        }, {
            path: "/urban",
            component: Ts,
            children: [{
                path: "/urban/home",
                alias: "",
                name: "UrbanHome",
                component: Os
            }]
        }, {
            path: "/agency",
            component: U,
            children: [{
                path: "/agency/home",
                alias: "",
                name: "AgencyHome",
                component: X
            }, {
                path: "privacy",
                name: "AgencyPrivacy",
                component: is
            }, {
                path: "terms",
                name: "AgencyTerms",
                component: ms
            }]
        }, {
            path: "/business",
            component: Xs,
            children: [{
                path: "/business/home",
                alias: "",
                name: "BusinessHome",
                component: it
            }]
        }, {
            path: "*",
            beforeEnter: function(s, t, a) {
                a("/error")
            }
        }, {
            path: "/error",
            name: "ErrorPage",
            component: x
        }]
          , ot = new m["a"]({
            mode: "history",
            base: "/",
            routes: rt
        })
          , lt = ot
          , nt = a("2f62");
        e["default"].use(nt["a"]);
        var ct = new nt["a"].Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {}
        })
          , mt = a("1446")
          , pt = a.n(mt)
          , ut = (a("8266"),
        a("619b"),
        a("975c"),
        a("a0a0"),
        a("a45e"))
          , dt = a.n(ut);
        e["default"].config.productionTip = !1,
        e["default"].use(pt.a),
        e["default"].use(dt.a),
        new e["default"]({
            router: lt,
            store: ct,
            render: function(s) {
                return s(c)
            }
        }).$mount("#app")
    },
    "584e": function(s, t, a) {},
    5865: function(s, t, a) {
        "use strict";
        a("c4f2")
    },
    "5a6a": function(s, t, a) {
        "use strict";
        a("4875")
    },
    7570: function(s, t, a) {
        "use strict";
        a("c3ea")
    },
    "7aef": function(s, t, a) {
        "use strict";
        a("3ae7")
    },
    "7b25": function(s, t, a) {
        "use strict";
        a("2b1e")
    },
    "7bb0": function(s, t, a) {
        "use strict";
        a("80a8")
    },
    "80a8": function(s, t, a) {},
    "882e": function(s, t, a) {},
    a5ee: function(s, t, a) {},
    aabd: function(s, t, a) {},
    c3ea: function(s, t, a) {},
    c4f2: function(s, t, a) {},
    c56e: function(s, t, a) {
        "use strict";
        a("584e")
    },
    ca75: function(s, t, a) {},
    d86f: function(s, t, a) {},
    da10: function(s, t, a) {},
    e27a: function(s, t, a) {},
    e379: function(s, t, a) {
        "use strict";
        a("ed3a")
    },
    e625: function(s, t, a) {
        "use strict";
        a("aabd")
    },
    ead6: function(s, t, a) {
        "use strict";
        a("a5ee")
    },
    ed3a: function(s, t, a) {},
    f8f5: function(s, t, a) {},
    fdf0: function(s, t, a) {
        "use strict";
        a("42b7")
    }
});
//# sourceMappingURL=app.511745ce.js.map
