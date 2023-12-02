! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 405)
}({
    1: function(e) {
        e.exports = jQuery
    },
    12: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = (o(n(2)), o(n(14))),
            i = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.geocoder = e.geocoder, n.projection = e.projection || "EPSG:3857", n.hookupEvents(), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, a.default), r(t, [{
                    key: "metersPerUnit",
                    value: function() {
                        return proj4.defs[this.projection].to_meter
                    }
                }, {
                    key: "accuracyDistance",
                    value: function(e) {
                        return "EPSG:3857" === this.projection ? e : e / this.metersPerUnit()
                    }
                }, {
                    key: "search",
                    value: function(e) {
                        this.geocoder.search(e)
                    }
                }, {
                    key: "locate",
                    value: function() {
                        throw "Not implemented"
                    }
                }, {
                    key: "track",
                    value: function() {
                        throw "Not implemented"
                    }
                }, {
                    key: "proxyEvent",
                    value: function(e) {
                        this.trigger(e.type, e)
                    }
                }, {
                    key: "hookupEvents",
                    value: function() {
                        this.geocoder.on("geocoded", this.proxyEvent, this), this.geocoder.on("ambiguous", this.proxyEvent, this), this.geocoder.on("error", this.proxyEvent, this)
                    }
                }]), t
            }();
        i.Options, i.Accuracy = {
            HIGH: 0,
            MEDIUM: 50,
            LOW: 500,
            ZIP_CODE: 1e3
        }, i.Result, i.Ambiguous, t.default = i
    },
    124: function(e) {
        e.exports = ol.geom.Point
    },
    125: function(e) {
        e.exports = ol.Feature
    },
    126: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(175)),
            s = o(n(2)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = (0, a.default)(e.map.getTargetElement()).find("f-tip").get(0),
                        o = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            id: s.default.nextId("FeatureTip"),
                            element: n || (0, a.default)(t.HTML).get(0),
                            stopEvent: !1
                        }));
                    return o.setMap(e.map), o.map = o.getMap(), o.tip = (0, a.default)(o.getElement()), o.addTips(e.tips), e.map.on("pointermove", a.default.proxy(o.label, o)), (0, a.default)(e.map.getViewport()).mouseout(a.default.proxy(o.hide, o)), o
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "hide",
                    value: function() {
                        this.tip.fadeOut()
                    }
                }, {
                    key: "addTips",
                    value: function(e) {
                        e.forEach(function(e) {
                            e.layer.nycTip = e.label
                        })
                    }
                }, {
                    key: "label",
                    value: function(e) {
                        var t = this.map.forEachFeatureAtPixel(e.pixel, function(e, t) {
                            return t.getVisible() && t.nycTip ? t.nycTip(e) : null
                        });
                        t ? (this.tip.html(t.html).addClass(t.css || ""), this.setPosition(e.coordinate), this.tip.show(), this.position()) : this.hide()
                    }
                }, {
                    key: "position",
                    value: function() {
                        var e = this.map.getSize(),
                            t = this.map.getPixelFromCoordinate(this.getPosition()),
                            n = this.tip.width(),
                            o = this.tip.height(),
                            r = t[1] + o > e[1] ? "bottom" : "top",
                            a = t[0] + n > e[0] ? "right" : "left";
                        this.setPositioning(r + "-" + a)
                    }
                }]), t
            }();
        u.TipDef, u.LabelFunction, u.Label, u.Options, u.HTML = '<div class="f-tip" role="tooltip"></div>', t.default = u
    },
    127: function(e) {
        e.exports = ol.layer.Vector
    },
    128: function(e) {
        e.exports = ol.source.Vector
    },
    129: function(e) {
        e.exports = ol.format.GeoJSON
    },
    14: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1)),
            a = function() {
                function e() {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.evtHdlrs = {}
                }
                return o(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        this.addHdlr(e, t, n)
                    }
                }, {
                    key: "one",
                    value: function(e, t, n) {
                        this.addHdlr(e, t, n, !0)
                    }
                }, {
                    key: "trigger",
                    value: function(e, t) {
                        var n = this.evtHdlrs[e],
                            o = [];
                        n && (n.forEach(function(e) {
                            e.scope ? e.handler.call(e.scope, t) : e.handler(t), e.remove && o.push(e)
                        }), o.forEach(function(e) {
                            n.splice(r.default.inArray(e, n), 1)
                        }))
                    }
                }, {
                    key: "off",
                    value: function(e, t, n) {
                        var o = this.evtHdlrs[e];
                        o.forEach(function(e, r) {
                            if (e.handler === t && e.scope === n) return o.splice(r, 1), !1
                        })
                    }
                }, {
                    key: "addHdlr",
                    value: function(e, t, n, o) {
                        this.evtHdlrs[e] = this.evtHdlrs[e] || [], this.evtHdlrs[e].push({
                            handler: t,
                            scope: n,
                            remove: o
                        })
                    }
                }]), e
            }();
        a.Handler, t.default = a
    },
    16: function(e) {
        var t = function() {
            return this
        }();
        try {
            t = t || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (t = window)
        }
        e.exports = t
    },
    165: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = (o(n(1)), o(n(128)));
        n(65);
        var i = function(e) {
            function t(e) {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, t), e.loader = function() {
                    console.warn("Use autoLoad to load features")
                };
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.autoLoadOptions = e, n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a.default), r(t, [{
                key: "autoLoad",
                value: function() {
                    var e = this,
                        t = this.autoLoadOptions,
                        n = this.getFormat();
                    return new Promise(function(o) {
                        fetch(t.url).then(function(e) {
                            return e.text()
                        }).then(function(t) {
                            var r = n.readFeatures(t);
                            e.addFeatures(r), e.set("autoload-complete", !0), o(r)
                        })
                    })
                }
            }]), t
        }();
        t.default = i
    },
    166: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(392)),
            s = o(n(391)),
            u = (o(n(2)), o(n(165))),
            l = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.allFeatures = e.features || null, n.on("change:autoload-complete", a.default.proxy(n.storeFeatures, n)), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, u.default), r(t, [{
                    key: "filter",
                    value: function(e) {
                        var t = [],
                            n = {};
                        return this.allFeatures.forEach(function(o) {
                            var r = !0;
                            e.every(function(e) {
                                return r = -1 < a.default.inArray(o.get(e.property), e.values)
                            }), r && (n[o.getId()] = !0, t.push(o))
                        }), this.clear(!0), this.addFeatures(t), t
                    }
                }, {
                    key: "sort",
                    value: function(e) {
                        var n = this,
                            o = this.getFeatures();
                        return o.sort(function(o, r) {
                            o.getGeometry(), r.getGeometry();
                            var i = n.distance(e, o.getGeometry()),
                                s = n.distance(e, r.getGeometry());
                            return o.set("__distance", i), r.set("__distance", s), a.default.extend(o, t.DistanceDecoration), a.default.extend(r, t.DistanceDecoration), i.distance < s.distance ? -1 : i.distance > s.distance ? 1 : 0
                        }), o
                    }
                }, {
                    key: "distance",
                    value: function(e, t) {
                        var n = new i.default([e, t.getClosestPoint(e)]),
                            o = this.projections(this.getFormat());
                        return o[0] && n.transform(o[1], o[0]), {
                            distance: n.getLength(),
                            units: o[0] ? o[0].getUnits() : void 0
                        }
                    }
                }, {
                    key: "projections",
                    value: function(e) {
                        var t, n, o = e ? e.parentFormat : null;
                        return o ? (t = o.defaultDataProjection, n = o.defaultFeatureProjection || "EPSG:3857") : e && (t = e.defaultDataProjection, n = e.defaultFeatureProjection || "EPSG:3857"), t && (t = t.getCode ? t : new s.default({
                            code: t
                        })), [t, n]
                    }
                }, {
                    key: "storeFeatures",
                    value: function() {
                        this.allFeatures = this.getFeatures()
                    }
                }]), t
            }();
        l.Distance, l.Filter, l.DistanceDecoration = {
            getDistance: function() {
                return this.get("__distance")
            }
        }, t.default = l
    },
    167: function(e) {
        e.exports = ol.format.Feature
    },
    168: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = (o(n(1)), o(n(2))),
            i = (o(n(125)), o(n(167))),
            s = (o(n(124)), function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.parentFormat = e.parentFormat, n.decorations = e.decorations, n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "readFeature",
                    value: function() {
                        throw "Not supported: Use readFeatures"
                    }
                }, {
                    key: "readFeatures",
                    value: function(e, t) {
                        var n = this,
                            o = this.parentFormat.readFeatures(e, t);
                        return o.forEach(function(e) {
                            n.decorate(e)
                        }), o
                    }
                }, {
                    key: "readProjection",
                    value: function(e) {
                        return this.parentFormat.readProjection(e)
                    }
                }, {
                    key: "getLastExtent",
                    value: function() {
                        return null
                    }
                }, {
                    key: "getType",
                    value: function() {
                        return this.parentFormat.getType()
                    }
                }, {
                    key: "decorate",
                    value: function(e) {
                        e.get("decorated") || (e.set("decorated", !0), a.default.mixin(e, this.decorations), e.extendFeature && e.extendFeature())
                    }
                }]), t
            }());
        s.Options, t.default = s
    },
    169: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = (o(n(1)), o(n(96))),
            i = (o(n(2)), o(n(393))),
            s = o(n(177)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.layers = [], n.pager = new i.default({
                        target: n.content
                    }), n.addLayers(e.layers), n.pager.on("change", n.paged, n), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "showFeature",
                    value: function(e) {
                        this.showFeatures([e])
                    }
                }, {
                    key: "showFeatures",
                    value: function(e, t) {
                        t = t || a.default.getCenter(e[0].getGeometry().getExtent()), this.pager.show(e), this.show({
                            coordinate: t
                        })
                    }
                }, {
                    key: "mapClick",
                    value: function(e) {
                        var t = this.getId(),
                            n = [];
                        this.map.forEachFeatureAtPixel(e.pixel, function(e, o) {
                            o.get("popup-id") === t && n.push(e)
                        }), n.length && this.showFeatures(n, e.coordinate)
                    }
                }, {
                    key: "paged",
                    value: function(e) {
                        this.cssClass(e.item.cssClass ? e.item.cssClass() : ""), this.pan()
                    }
                }]), t
            }();
        t.default = u
    },
    170: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(129)),
            s = o(n(96)),
            u = o(n(37)),
            l = o(n(12)),
            c = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, a.default)(e.getTargetElement()).find(".ol-overlaycontainer-stopevent")));
                    return n.map = e, n.view = e.getView(), n.geoJson = new i.default, n.getContainer().on("click dblclick mouseover mousemove", function() {
                        (0, a.default)(".f-tip").hide()
                    }), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, u.default), r(t, [{
                    key: "featureAsLocation",
                    value: function(e, t) {
                        var n = e.getGeometry();
                        return {
                            name: t.nameField ? e.get(t.nameField) : e.getName(),
                            coordinate: s.default.getCenter(n.getExtent()),
                            geometry: JSON.parse(this.geoJson.writeGeometry(n)),
                            data: e.getProperties(),
                            type: "geocoded",
                            accuracy: l.default.Accuracy.HIGH
                        }
                    }
                }, {
                    key: "zoom",
                    value: function(e) {
                        this.view.animate({
                            zoom: this.view.getZoom() + 1 * (0, a.default)(e.target).data("zoom-incr")
                        })
                    }
                }]), t
            }();
        t.default = c
    },
    171: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = (o(n(1)), o(n(129))),
            i = o(n(395)),
            s = o(n(394)),
            u = o(n(128)),
            l = o(n(127)),
            c = o(n(125)),
            f = o(n(124)),
            d = (o(n(12)), o(n(56))),
            p = o(n(126)),
            h = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.layer = null, n.source = null, n.map = e.map, n.view = n.map.getView(), n.zoom = void 0 === e.zoom ? d.default.ZOOM_LEVEL : e.zoom, n.format = new a.default, n.tip = null, n.createLayer(e.style), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, d.default), r(t, [{
                    key: "zoomLocation",
                    value: function(e, t) {
                        var n = this.map,
                            o = this.view,
                            r = this.source,
                            a = this.feature(e),
                            i = a.getGeometry();
                        r.clear(), r.addFeature(a), t && n.once("moveend", t), "Point" === i.getType() ? o.animate({
                            center: e.coordinate,
                            zoom: this.zoom
                        }) : o.fit(i.getExtent(), {
                            size: n.getSize(),
                            duration: 500
                        })
                    }
                }, {
                    key: "setLocation",
                    value: function(e) {
                        this.source.clear(), this.source.addFeature(this.feature(e))
                    }
                }, {
                    key: "feature",
                    value: function(e) {
                        var t = e.geometry,
                            n = new c.default({
                                name: e.name,
                                isFeature: e.isFeature
                            });
                        return t ? n.setGeometry(this.format.readGeometry(t)) : n.setGeometry(new f.default(e.coordinate)), n
                    }
                }, {
                    key: "createLayer",
                    value: function(e) {
                        this.source = new u.default, this.layer = new l.default({
                            source: this.source,
                            style: e || t.LOCATION_STYLE,
                            zIndex: 1e4
                        }), this.map.addLayer(this.layer), this.tip = new p.default({
                            map: this.map,
                            tips: [{
                                layer: this.layer,
                                label: function(e) {
                                    return {
                                        css: "nyc-user-location",
                                        html: e.get("name")
                                    }
                                }
                            }]
                        })
                    }
                }]), t
            }();
        h.Options, h.LOCATION_STYLE = new i.default({
            image: new s.default({
                scale: .09375,
                imgSize: [1024, 1024],
                src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221024%22%20height%3D%221024%22%3E%3Cfilter%20id%3D%22filter%22%20style%3D%22color-interpolation-filters%3AsRGB%22%20x%3D%22-0.035750399%22%20width%3D%221.0715008%22%20y%3D%22-0.03625311%22%20%20height%3D%221.0725062%22%3E%3CfeGaussianBlur%20stdDeviation%3D%226.0015266%22%2F%3E%3C%2Ffilter%3E%3Cpath%20style%3D%22opacity%3A0.1%3Bfill%3A%23000000%3Bfill-opacity%3A1%3Bstroke%3A%23000000%3Bstroke-width%3A10%3Bstroke-opacity%3A1%3Bfilter%3Aurl(%23filter)%22%20d%3D%22M%20868.91078%2C141.10492%20C%20806.53392%2C79.855774%20695.84806%2C89.539532%20621.70905%2C162.73227%20547.57005%2C235.92501%20492.08486%2C476.05139%20510.9101%2C494.53629%20529.73535%2C513.02119%20773.473%2C457.74384%20847.612%2C384.5511%20921.751%2C311.35836%20931.28764%2C202.35407%20868.91078%2C141.10492%20Z%20M%20645.16036%2C361.99953%20c%20-41.52967%2C-40.77885%20-35.13918%2C-113.58881%2014.19918%2C-162.29746%2049.33837%2C-48.70864%20123.27149%2C-55.19708%20164.80115%2C-14.41823%2041.52967%2C40.77885%2035.13918%2C113.58881%20-14.19918%2C162.29745%20-49.33837%2C48.70864%20-123.27149%2C55.19709%20-164.80115%2C14.41824%20z%22%2F%3E%3Cpath%20style%3D%22fill%3A%23000%3Bstroke%3A%23fff%3Bstroke-width%3A20%22%20d%3D%22m%20512%2C25.6%20c%20-95.4279%2C0%20-172.8%2C77.3721%20-172.8%2C172.8%200%2C95.4279%20144%2C288%20172.8%2C288%2028.8%2C0%20172.8%2C-192.5721%20172.8%2C-288%20C%20684.8%2C102.9721%20607.4279%2C25.6%20512%2C25.6%20Z%20m%200%2C288%20c%20-63.5346%2C0%20-115.2%2C-51.6942%20-115.2%2C-115.2%200%2C-63.5058%2051.6654%2C-115.2%20115.2%2C-115.2%2063.5346%2C0%20115.2%2C51.6942%20115.2%2C115.2%200%2C63.5058%20-51.6654%2C115.2%20-115.2%2C115.2%20z%22%2F%3E%3C%2Fsvg%3E"
            })
        }), t.default = h
    },
    172: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = (o(n(2)), o(n(12))),
            s = o(n(397)),
            u = o(n(396)),
            l = o(n(96)),
            c = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.locating = !1, n.extentLimit = e.extentLimit, n.geolocation = new s.default({
                        trackingOptions: {
                            maximumAge: 1e4,
                            enableHighAccuracy: !0,
                            timeout: 6e5
                        }
                    }), n.geolocation.on("change", a.default.proxy(n.geolocationChange, n)), n.geolocation.on("error", a.default.proxy(n.geolocationError, n)), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "locate",
                    value: function() {
                        this.locating = !0, this.geolocation.setTracking(!0)
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        this.geolocation.setTracking(e)
                    }
                }, {
                    key: "geolocationError",
                    value: function(e) {
                        console.error(e.message, e)
                    }
                }, {
                    key: "geolocationChange",
                    value: function() {
                        var e = this.geolocation,
                            t = e.getPosition(),
                            n = u.default.toStringHDMS(t);
                        t = proj4("EPSG:4326", this.projection, t), this.withinLimit(t) && (this.locating && (this.track(!1), this.locating = !1), this.trigger("geolocated", {
                            coordinate: t,
                            heading: e.getHeading(),
                            accuracy: e.getAccuracy() / this.metersPerUnit(),
                            type: "geolocated",
                            name: n
                        }))
                    }
                }, {
                    key: "withinLimit",
                    value: function(e) {
                        return !this.extentLimit || l.default.containsCoordinate(this.extentLimit, e)
                    }
                }]), t
            }();
        c.Options, t.default = c
    },
    173: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(n(68)),
            a = o(n(69)),
            i = o(n(172)),
            s = o(n(171)),
            u = o(n(170)),
            l = function(e) {
                function t(e) {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            zoomSearch: new u.default(e.map),
                            locator: new i.default({
                                geocoder: new a.default({
                                    url: e.url
                                })
                            }),
                            mapLocator: new s.default({
                                map: e.map
                            })
                        }))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r.default), t
            }();
        l.Options, t.default = l
    },
    174: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = o(n(3)),
            u = o(n(58)),
            l = o(n(71)),
            c = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target));
                    return n.choiceControls = [], n.source = e.source, e.choiceOptions.forEach(function(e) {
                        var t = (0, a.default)('<div class="' + i.default.nextId("filter") + '"></div>');
                        e.target = e.target || (0, a.default)('<div class="' + i.default.nextId("filter-chc") + '"></div>'), n.append((0, a.default)(t));
                        var o = new l.default(e);
                        new u.default({
                            target: t,
                            title: e.title,
                            content: o.getContainer()
                        });
                        o.on("change", a.default.proxy(n.filter, n)), n.choiceControls.push(o)
                    }), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "filter",
                    value: function() {
                        var e = {},
                            t = [];
                        this.choiceControls.forEach(function(t) {
                            t.val().forEach(function(t) {
                                var n = e[t.name] || [];
                                e[t.name] = n.concat(t.values)
                            })
                        }), Object.keys(e).forEach(function(n) {
                            t.push({
                                property: n,
                                values: e[n]
                            })
                        }), this.source.filter(t), this.trigger("change", this)
                    }
                }]), t
            }();
        c.Options, c.ChoiceOptions, t.default = c
    },
    175: function(e) {
        e.exports = ol.Overlay
    },
    176: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(175)),
            s = o(n(2)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                        id: s.default.nextId("Popup"),
                        element: (0, a.default)(t.HTML).get(0),
                        stopEvent: !0
                    }));
                    return n.margin = [10, 10, 10, 10], n.popup = (0, a.default)(n.getElement()), n.map = e.map, n.setMap(n.map), n.content = n.popup.find(".content"), n.popup.find(".btn-x").on("click tap", a.default.proxy(n.hide, n)), n.popup.on("mouseover mousemove", a.default.proxy(n.hideTip, n)), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "show",
                    value: function(e) {
                        this.setPosition(e.coordinate), e.html && (this.content.html(e.html), this.cssClass(e.css)), this.popup.fadeIn(), (0, a.default)(".f-tip").fadeOut(), this.pan()
                    }
                }, {
                    key: "cssClass",
                    value: function(e) {
                        this.content.get(0).className = "content", this.content.addClass(e)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.popup.fadeOut()
                    }
                }, {
                    key: "hideTip",
                    value: function(e) {
                        e.stopPropagation(), (0, a.default)(".f-tip").fadeOut()
                    }
                }, {
                    key: "pan",
                    value: function() {
                        var e = this.popup;
                        if (!this.fullscreen() && "none" !== e.css("display")) {
                            var t = this.map.getView(),
                                n = parseInt(e.css("bottom")),
                                o = -parseInt(e.css("left")),
                                r = this.getOffset(),
                                a = this.map.getPixelFromCoordinate(this.getPosition()),
                                i = this.map.getSize(),
                                s = {
                                    width: e.width(),
                                    height: e.height() + n
                                },
                                u = s.width - o,
                                l = a[0] - o - this.margin[3],
                                c = i[0] - (a[0] + u) - this.margin[1],
                                f = a[1] - s.height + r[1] - this.margin[0],
                                d = i[1] - (a[1] + n) - r[1] - this.margin[2],
                                p = t.getCenter(),
                                h = this.map.getPixelFromCoordinate(p);
                            0 > c ? h[0] -= c : 0 > l && (h[0] += l), 0 > f ? h[1] += f : 0 > d && (h[1] -= d), t.animate({
                                center: this.map.getCoordinateFromPixel(h)
                            })
                        }
                    }
                }, {
                    key: "fullscreen",
                    value: function() {
                        var e = (0, a.default)(this.map.getTargetElement()),
                            t = (0, a.default)(this.getElement()),
                            n = this.content,
                            o = n.clone();
                        if (t.height() > e.height()) {
                            var r = (0, a.default)('<div class="pop fullscreen"></div>').append(n);
                            t.append(o);
                            var i = (0, a.default)('<button class="btn-rnd btn-x"><span class="screen-reader-only">Close</span></button>').click(function() {
                                r.fadeOut(function() {
                                    o.remove(), n.find(".dtl").not(".btn").slideUp(), t.append(n), r.remove()
                                })
                            });
                            return e.append(r.append(i)), r.fadeIn(), !0
                        }
                    }
                }]), t
            }();
        u.ShowOptions, u.Options, u.HTML = '<div class="pop"><div class="content"></div><button class="btn-rnd btn-x"><span class="screen-reader-only">Close</span></button></div>', t.default = u
    },
    177: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(96)),
            s = o(n(2)),
            u = o(n(176)),
            l = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.layers = [], n.addLayers(e.layers), n.map.on("click", a.default.proxy(n.mapClick, n)), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, u.default), r(t, [{
                    key: "addLayers",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.addLayer(e)
                        })
                    }
                }, {
                    key: "addLayer",
                    value: function(e) {
                        this.layers.push(e), e.set("popup-id", this.getId())
                    }
                }, {
                    key: "showFeature",
                    value: function(e, t) {
                        t = t || i.default.getCenter(e.getGeometry().getExtent()), this.show({
                            coordinate: t,
                            html: s.default.html(e),
                            css: e.cssClass ? e.cssClass() : ""
                        })
                    }
                }, {
                    key: "mapClick",
                    value: function(e) {
                        var t = this.getId(),
                            n = this.map.forEachFeatureAtPixel(e.pixel, function(e, n) {
                                if (n.get("popup-id") === t) return e
                            });
                        n && this.showFeature(n, e.coordinate)
                    }
                }]), t
            }();
        l.Options, t.default = l
    },
    178: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = o(n(129)),
            s = o(n(128)),
            u = o(n(127)),
            l = o(n(57)),
            c = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, l.default), a(t, [{
                    key: "addToMap",
                    value: function(e, t, n) {
                        var o = {
                            featureProjection: e.getView().getProjection(),
                            dataProjection: this.customProj(n)
                        };
                        "object" === (void 0 === t ? "undefined" : r(t)) && (t = {
                            type: "FeatureCollection",
                            features: t
                        }), t = (new i.default).readFeatures(t, o);
                        var a = new s.default,
                            l = new u.default({
                                source: a
                            });
                        return a.addFeatures(t), e.addLayer(l), l
                    }
                }]), t
            }();
        t.default = c
    },
    179: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n, o = [],
                            r = !0,
                            a = !1;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (o.push(i.value), !t || o.length !== t); r = !0);
                        } catch (e) {
                            a = !0, n = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (a) throw n
                            }
                        }
                        return o
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            a = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = o(n(1)),
            s = o(n(2)),
            u = o(n(180)),
            l = o(n(59)),
            c = o(n(178)),
            f = o(n(403)),
            d = o(n(402)),
            p = o(n(401)),
            h = o(n(400)),
            y = (o(n(399)), function(e) {
                function t(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var o = e.view instanceof d.default;
                    t.setupView(e);
                    var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return s.default.mixin(r, [l.default]), r.latestPhoto = 0, r.base = null, r.labels = {}, r.photos = {}, r.storage = new c.default, r.setupLayers(e, n), r.defaultExtent(o), r.hookupEvents(r.getTargetElement()), r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, f.default), a(t, [{
                    key: "showPhoto",
                    value: function(e) {
                        this.hidePhoto(), this.photos[(e || this.latestPhoto) + ""].setVisible(!0), this.showLabels("photo")
                    }
                }, {
                    key: "hidePhoto",
                    value: function() {
                        this.base.setVisible(!0), this.showLabels(l.default.LabelType.BASE), Object.entries(this.photos).forEach(function(e) {
                            var t = r(e, 2);
                            t[0];
                            t[1].setVisible(!1)
                        })
                    }
                }, {
                    key: "showLabels",
                    value: function(e) {
                        this.labels.base.setVisible(e === l.default.LabelType.BASE), this.labels.photo.setVisible(e === l.default.LabelType.PHOTO)
                    }
                }, {
                    key: "getBaseLayers",
                    value: function() {
                        return {
                            base: this.base,
                            labels: this.labels,
                            photos: this.photos
                        }
                    }
                }, {
                    key: "getStorage",
                    value: function() {
                        return this.storage
                    }
                }, {
                    key: "defaultExtent",
                    value: function(e) {
                        e || this.getView().fit(t.EXTENT, this.getSize())
                    }
                }, {
                    key: "setupLayers",
                    value: function(e, n) {
                        var o = this;
                        this.base = new h.default({
                            extent: this.layerExtent(t.UNIVERSE_EXTENT, e.view),
                            source: new p.default({
                                url: t.BASE_URL,
                                projection: "EPSG:3857"
                            }),
                            preload: n || 0
                        }), this.addLayer(this.base), Object.entries(t.LABEL_URLS).forEach(function(n) {
                            var a = r(n, 2),
                                i = a[0],
                                s = a[1];
                            o.labels[i] = new h.default({
                                extent: o.layerExtent(t.LABEL_EXTENT, e.view),
                                source: new p.default({
                                    url: s,
                                    projection: "EPSG:3857"
                                }),
                                zIndex: 1e3,
                                visible: "base" == i
                            }), o.addLayer(o.labels[i])
                        }), Object.entries(t.PHOTO_URLS).forEach(function(n) {
                            var a = r(n, 2),
                                s = a[0],
                                u = a[1],
                                l = new h.default({
                                    extent: o.layerExtent(t.PHOTO_EXTENT, e.view),
                                    source: new p.default({
                                        url: u,
                                        projection: "EPSG:3857"
                                    }),
                                    visible: !1
                                });
                            1 * s.split("-")[0] > o.latestPhoto && (o.latestPhoto = s), l.set("name", s), o.addLayer(l), l.on("change:visible", i.default.proxy(o.photoChange, o)), o.photos[s] = l
                        })
                    }
                }, {
                    key: "layerExtent",
                    value: function(e, t) {
                        if (t && "EPSG:3857" !== t.getProjection().getCode()) {
                            var n = "EPSG:3857",
                                o = "EPSG:2263",
                                r = proj4(n, o, [e[0], e[1]]),
                                a = proj4(n, o, [e[2], e[3]]);
                            return [r[0], r[1], a[0], a[1]]
                        }
                        return e
                    }
                }, {
                    key: "photoChange",
                    value: function() {
                        var e = this,
                            t = !1;
                        Object.entries(this.photos).some(function(n) {
                            var o = r(n, 2),
                                a = (o[0], o[1]);
                            if (t = a.getVisible()) return e.showLabels(l.default.LabelType.PHOTO), !0
                        }), t || this.showLabels(l.default.LabelType.BASE)
                    }
                }]), t
            }());
        y.setupView = function(e) {
            e.view instanceof d.default || (e.view = new d.default({
                center: y.CENTER,
                minZoom: 8,
                maxZoom: 21,
                zoom: 8,
                constrainRotation: 1
            }))
        }, y.BASE_URL = "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/carto/basemap/{z}/{x}/{-y}.jpg", y.PHOTO_URLS = {
            1924: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/1924/{z}/{x}/{-y}.png8",
            1951: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/1951/{z}/{x}/{-y}.png8",
            1996: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/1996/{z}/{x}/{-y}.png8",
            "2001-2": "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2001-2/{z}/{x}/{-y}.png8",
            2004: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2004/{z}/{x}/{-y}.png8",
            2006: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2006/{z}/{x}/{-y}.png8",
            2008: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2008/{z}/{x}/{-y}.png8",
            2010: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2010/{z}/{x}/{-y}.png8",
            2012: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2012/{z}/{x}/{-y}.png8",
            2014: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2014/{z}/{x}/{-y}.png8",
            2016: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/photo/2016/{z}/{x}/{-y}.png8"
        }, y.LABEL_URLS = {
            base: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/carto/label/{z}/{x}/{-y}.png8",
            photo: "https://" + u.default.TILE_HOSTS + "/tms/1.0.0/carto/label-lt/{z}/{x}/{-y}.png8"
        }, y.UNIVERSE_EXTENT = [-8453323, 4774561, -7983695, 5165920], y.EXTENT = [-8266522, 4937867, -8203781, 5000276], y.CENTER = [-8235252, 4969073], y.LABEL_EXTENT = [-8268e3, 4870900, -8005e3, 5055500], y.PHOTO_EXTENT = [-8268357, 4937238, -8203099, 5001716], t.default = y
    },
    180: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
            TILE_HOSTS: "maps{1-4}.nyc.gov",
            TILE_GRID: function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(404)).default.createXYZ({
                minZoom: 8,
                maxZoom: 21
            })
        };
        t.default = o
    },
    2: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(n(1)),
                a = o(n(80));
            a.default.defs("EPSG:2263", "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs"), a.default.defs("EPSG:6539", "+proj=lcc +lat_1=40.66666666666666 +lat_2=41.03333333333333 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs"), e.proj4 = a.default;
            var i = {
                inherits: function(e, t) {
                    i.copyFromParentProperties(e.prototype, t.prototype)
                },
                subclass: function(e, t) {
                    var n = Object.getPrototypeOf(t);
                    i.copyFromParentProperties(e, n), i.copyFromParentKeys(e, t)
                },
                mixin: function(e, t) {
                    t.forEach(function(t) {
                        r.default.extend(e, t)
                    })
                },
                copyFromParentProperties: function(e, t) {
                    Object.getOwnPropertyNames(t).forEach(function(n) {
                        n in e || (e[n] = t[n])
                    })
                },
                copyFromParentKeys: function(e, t) {
                    Object.keys(t).forEach(function(n) {
                        n in e || (e[n] = t[n])
                    })
                },
                capitalize: function(e) {
                    var t = "";
                    return e.split(" ").forEach(function(e) {
                        var n = e.toLowerCase();
                        t += n.substr(0, 1).toUpperCase(), t += n.substr(1).toLowerCase(), t += " "
                    }), t.trim()
                },
                nextId: function(e) {
                    var t = i.uniqueIds[e];
                    return i.uniqueIds[e] = "number" == typeof t ? t + 1 : 0, e + "-" + i.uniqueIds[e]
                },
                html: function(e) {
                    if ("function" == typeof e.html) return (0, r.default)(e.html());
                    var t = (0, r.default)('<div class="nyc-html"></div>');
                    return e.getProperties ? e = e.getProperties() : e.properties && (e = e.properties), Object.keys(e).forEach(function(n) {
                        t.append('<div><span class="fld">' + n + '</span><span class="val">' + e[n] + "</span></div>")
                    }), t
                },
                loading: function(e) {
                    e.hasClass("loading") && e.append((0, r.default)("#loading").get(0) || i.LOADING_HTML)
                },
                ready: function(e) {
                    (0, r.default)(e || (0, r.default)("body")).removeClass("loading").attr("aria-hidden", !1), (0, r.default)("#loading").fadeOut()
                },
                cacheBust: function(e) {
                    var t = 6e4 * e;
                    return Math.round((new Date).getTime() / t) * t
                },
                activeElement: function() {
                    var e = document.activeElement;
                    return {
                        activeElement: e,
                        isTextInput: "INPUT" === e.tagName && "text" === e.type
                    }
                },
                uniqueIds: {},
                LOADING_HTML: '<div id="loading"><div><svg xmlns="http://www.w3.org/2000/svg" width="152" height="52"><g transform="translate(1.5,0)"><polygon points="15.5,1.2 3.1,1.2 0,4.3 0,47.7 3.1,50.8 15.5,50.8 18.6,47.7 18.6,35.3 34.1,50.8 46.6,50.8 49.7,47.7 49.7,4.3 46.6,1.2 34.1,1.2 31,4.3 31,16.7 "/><polygon points="83.8,47.7 83.8,38.4 99.3,22.9 99.3,10.5 99.3,4.3 96.2,1.2 83.8,1.2 80.7,4.3 80.7,10.5 74.5,16.7 68.3,10.5 68.3,4.3 65.2,1.2 52.8,1.2 49.7,4.3 49.7,22.9 65.2,38.4 65.2,47.7 68.3,50.8 80.7,50.8 "/><polygon points="145.9,29.1 130.4,29.1 130.4,32.2 118,32.2 118,19.8 130.4,19.8 130.4,22.9 145.9,22.9 149,19.8 149,10.5 139.7,1.2 108.6,1.2 99.3,10.5 99.3,41.5 108.6,50.8 139.7,50.8 149,41.5 149,32.2 "/></g></svg><h1>maps.nyc.gov</h1></div></div>'
            };
            (0, r.default)(document).ready(function() {
                i.loading((0, r.default)("body"))
            }), t.default = i
        }).call(this, n(16))
    },
    24: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(3)),
            s = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, a.default)(t.HTML)));
                    return (0, a.default)("body").append(n.getContainer().addClass(e)), n.okBtn = n.find(".btn-ok"), n.yesNoBtns = n.find(".btn-yes, .btn-no"), n.inputBtns = n.find(".btn-submit, .btn-cancel"), n.field = n.find("input"), n.msg = n.find(".dia-msg"), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "ok",
                    value: function(e) {
                        this.buttons(t.Type.OK, e), this.show(t.Type.OK, e), this.okBtn.focus();
                        var n = this,
                            o = this.okBtn;
                        return new Promise(function(e) {
                            o.one("click", function() {
                                n.hide(), e(!0)
                            })
                        })
                    }
                }, {
                    key: "input",
                    value: function(e) {
                        var n = this.field;
                        this.buttons(t.Type.INPUT, e), n.attr("placeholder", e.placeholder || ""), this.show(t.Type.INPUT, e), n.focus();
                        var o = this,
                            r = this.inputBtns;
                        return new Promise(function(e) {
                            var t = function(t) {
                                o.hndlKey(e, o, t)
                            };
                            (0, a.default)(document).keyup(t), r.one("click", function(r) {
                                var i = (0, a.default)(r.target).hasClass("btn-cancel");
                                (0, a.default)(document).off("keyup", t), o.hide(), e(i ? void 0 : n.val())
                            })
                        })
                    }
                }, {
                    key: "yesNo",
                    value: function(e) {
                        this.buttons(t.Type.YES_NO, e), this.show(t.Type.YES_NO, e), this.find(".btn-yes").focus();
                        var n = this,
                            o = this.yesNoBtns;
                        return new Promise(function(e) {
                            o.one("click", function(t) {
                                n.hide(), e((0, a.default)(t.target).hasClass("btn-yes"))
                            })
                        })
                    }
                }, {
                    key: "yesNoCancel",
                    value: function(e) {
                        this.buttons(t.Type.YES_NO_CANCEL, e), this.show(t.Type.YES_NO_CANCEL, e), this.find(".btn-yes").focus();
                        var n = this,
                            o = this.yesNoBtns,
                            r = this.find(".btn-cancel");
                        return new Promise(function(e) {
                            var t = function(t) {
                                n.hndlKey(e, n, t)
                            };
                            (0, a.default)(document).keyup(t), o.one("click", function(o) {
                                (0, a.default)(document).off("keyup", t), n.hide(), e((0, a.default)(o.target).hasClass("btn-yes"))
                            }), r.one("click", function() {
                                (0, a.default)(document).off("keyup", t), n.hide(), e(void 0)
                            })
                        })
                    }
                }, {
                    key: "buttons",
                    value: function(e, n) {
                        var o = n.buttonText || [],
                            r = n.buttonHref || [];
                        e === t.Type.OK ? this.find(".btn-ok").html(o[0] || "OK").attr("href", r[0] || "#") : e === t.Type.INPUT ? (this.find(".btn-submit").html(o[0] || "Submit").attr("href", r[0] || "#"), this.find(".btn-cancel").html(o[1] || "Cancel").attr("href", r[1] || "#")) : e === t.Type.YES_NO ? (this.find(".btn-yes").html(o[0] || "Yes").attr("href", r[0] || "#"), this.find(".btn-no").html(o[1] || "No").attr("href", r[1] || "#")) : e === t.Type.YES_NO_CANCEL && (this.find(".btn-yes").html(o[0] || "Yes").attr("href", r[0] || "#"), this.find(".btn-no").html(o[1] || "No").attr("href", r[1] || "#"), this.find(".btn-cancel").html(o[2] || "Cancel").attr("href", r[2] || "#"))
                    }
                }, {
                    key: "show",
                    value: function(e, n) {
                        var o;
                        this.currentType = e, this.getContainer().removeClass("dia-3-btns"), this.find(".ui-link").removeClass("ui-link"), this.inputBtns.css("display", e === t.Type.INPUT ? "inline-block" : "none"), this.field.css("display", e === t.Type.INPUT ? "block" : "none"), this.okBtn.css("display", e === t.Type.OK ? "inline-block" : "none"), this.yesNoBtns.css("display", e === t.Type.YES_NO ? "inline-block" : "none"), e === t.Type.YES_NO_CANCEL && (this.getContainer().addClass("dia-3-btns"), this.yesNoBtns.css("display", "inline-block"), this.find(".btn-cancel").css("display", "inline-block"));
                        try {
                            o = (0, a.default)(n.message)
                        } catch (e) {}
                        o && o.length ? this.msg.html(o) : this.msg.html(n.message), this.getContainer().fadeIn()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this.field;
                        this.getContainer().fadeOut(function() {
                            e.val("")
                        })
                    }
                }, {
                    key: "hndlKey",
                    value: function(e, t, n) {
                        13 === n.keyCode && (0, a.default)(n.target).get(0) === t.field.get(0) ? (t.hide(), e(t.field.val())) : 27 === n.keyCode && (t.hide(), e(void 0))
                    }
                }]), t
            }();
        s.Type = {
            OK: "ok",
            YES_NO: "yes-no",
            YES_NO_CANCEL: "yes-no-cancel",
            INPUT: "input"
        }, s.Options, s.HTML = '<div class="dia-container" role="dialog"><div class="dia"><div class="dia-msg"></div><input class="rad-all"><div class="dia-btns"><a class="btn rad-all btn-ok">OK</a><a class="btn rad-all btn-yes">Yes</a><a class="btn rad-all btn-no">No</a><a class="btn rad-all btn-submit">OK</a><a class="btn rad-all btn-cancel">Cancel</a></div></div></div>', t.default = s
    },
    3: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(14)),
            s = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.container = (0, a.default)(e), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "getContainer",
                    value: function() {
                        return this.container
                    }
                }, {
                    key: "find",
                    value: function(e) {
                        return this.getContainer().find(e)
                    }
                }, {
                    key: "append",
                    value: function(e) {
                        return this.getContainer().append((0, a.default)(e))
                    }
                }]), t
            }();
        t.default = s
    },
    36: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                a = o(n(1)),
                i = o(n(3)),
                s = function(t) {
                    function n(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var o = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t.target));
                        return e.nycTranslateInstance = o, o.defaultLanguage = t.defaultLanguage || "en", o.button = t.button, o.languages = t.languages, o.hints = [], o.namedCodes = {}, o.code = "", o.messages = t.messages, o.defaultMessages = null, o.messages && (!o.messages[o.defaultLanguage] && (o.defaultLanguage = o.defaultLang()), !o.messages[o.defaultLanguage] && (o.defaultLanguage = "en"), o.defaultMessages = o.messages[o.defaultLanguage]), o.code = o.defaultLanguage, o.render(t.target), o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, i.default), r(n, [{
                        key: "translate",
                        value: function(e) {
                            var t = this,
                                n = (0, a.default)(e.target).val();
                            this.code = n, Object.keys(this.defaultMessages).forEach(function(e) {
                                var o = (t.messages[n] || t.defaultMessages)[e] || t.defaultMessages[e];
                                (0, a.default)("." + e).html(o), (0, a.default)('*[data-msg-key="' + e + '"]').each(function(e, t) {
                                    (0, a.default)(t).attr((0, a.default)(t).data("msg-attr"), o)
                                })
                            }), this.css(), this.trigger("change", this)
                        }
                    }, {
                        key: "lang",
                        value: function() {
                            return this.code
                        }
                    }, {
                        key: "getCookieValue",
                        value: function() {
                            return ""
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            var t = this,
                                o = [],
                                r = (0, a.default)(n.HTML);
                            (0, a.default)(e).append(r), Object.keys(this.languages).forEach(function(e) {
                                var n = t.languages[e].code,
                                    r = (0, a.default)("<option></option>").attr("value", n).html(t.languages[e].native);
                                t.find("select").append(r), o.push(e), t.hints.push(t.languages[e].hint), t.namedCodes[n] = e
                            }), this.codes = o.toString(), this.find("select").change(a.default.proxy(this.translate, this)), this.selectDefault(), this.showHint(), this.button && (0, a.default)("#lng").addClass("button"), this.trigger("ready", this)
                        }
                    }, {
                        key: "css",
                        value: function() {
                            (0, a.default)("body")[this.code === this.defaultLanguage ? "removeClass" : "addClass"]("translated")
                        }
                    }, {
                        key: "defaultLang",
                        value: function() {
                            return navigator.language.split("-")[0]
                        }
                    }, {
                        key: "selectDefault",
                        value: function() {
                            var e = this.defaultLang(),
                                t = this.getCookieValue(),
                                n = [],
                                o = [];
                            Object.values(this.languages).forEach(function(r) {
                                var a = r.code;
                                0 === t.indexOf(a) ? n.push(a) : 0 === t.indexOf(e) && o.push(a)
                            });
                            var r = n[0] || o[0] || "en";
                            this.find("select").val(this.languages[r].code).trigger("change")
                        }
                    }, {
                        key: "showHint",
                        value: function() {
                            if (!this.button) {
                                var e = this.hints,
                                    t = this.find(".hint"),
                                    n = 0;
                                setInterval(function() {
                                    t.html(e[n] || "Translate"), ++n === e.length && (n = 0)
                                }, 1e3)
                            }
                        }
                    }]), n
                }();
            s.Options, s.Choice, s.Choices, s.DEFAULT_LANGUAGES = {
                en: {
                    code: "en",
                    name: "English",
                    native: "English",
                    hint: "Translate"
                },
                ar: {
                    code: "ar",
                    name: "Arabic",
                    native: "&#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629;",
                    hint: "&#x62A;&#x631;&#x62C;&#x645;"
                },
                bn: function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({
                    code: "bn",
                    name: "Bengali",
                    native: "&#x9AC;&#x9BE;&#x999;&#x9BE;&#x9B2;&#x9BF;",
                    hint: "&#x9AC;&#x9BE;&#x999;&#x9BE;&#x9B2;&#x9BF;"
                }, "hint", "&#x985;&#x9A8;&#x9C1;&#x9AC;&#x9BE;&#x9A6; &#x995;&#x9B0;&#x9BE;"),
                "zh-CN": {
                    code: "zh-CN",
                    name: "Chinese (Simplified)",
                    native: "&#x4E2D;&#x56FD;",
                    hint: "&#x7FFB;&#x8BD1;"
                },
                fr: {
                    code: "fr",
                    name: "French",
                    native: "Fran&#231;ais",
                    hint: "Traduire"
                },
                ht: {
                    code: "ht",
                    name: "Haitian Creole",
                    native: "Krey&#242;l Ayisyen",
                    hint: "Tradui"
                },
                ko: {
                    code: "ko",
                    name: "Korean",
                    native: "&#xD55C;&#xAD6D;&#xC758;",
                    hint: "&#xBC88;&#xC5ED;"
                },
                ru: {
                    code: "ru",
                    name: "Russian",
                    native: "P&#x443;&#x441;&#x441;&#x43A;&#x438;&#x439;",
                    hint: "&#x43F;&#x435;&#x440;&#x435;&#x432;&#x435;&#x441;&#x442;&#x438;"
                },
                es: {
                    code: "es",
                    name: "Spanish",
                    native: "Espa&#241;ol",
                    hint: "Traducir"
                },
                ur: {
                    code: "ur",
                    name: "Urdu",
                    native: "&#x627;&#x631;&#x62F;&#x648;",
                    hint: "&#x62A;&#x631;&#x62C;&#x645;&#x6C1; &#x6A9;&#x631;&#x6CC;&#x6BA;"
                }
            }, s.HTML = '<div id="lng"></span><select class="notranslate" translate="no" title="Translate..." araia-label="Translate..."></select></div><div id="lng-goog"></div></div>', t.default = s
        }).call(this, n(16))
    },
    37: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(3)),
            s = (o(n(12)), o(n(44))),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, a.default)(t.HTML)));
                    return (0, a.default)(e).append(n.getContainer()), n.isAddrSrch = !0, n.input = null, n.list = null, n.retention = null, n.clear = null, n.autoComplete = null, n.input = n.find(".srch input"), n.list = n.find(".srch ul"), n.retention = n.find("ul.retention"), n.clear = n.find(".srch .btn-x"), n.hookupEvents(n.input), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "zoom",
                    value: function() {
                        throw "Not implemented"
                    }
                }, {
                    key: "featureAsLocation",
                    value: function() {
                        throw "Not implemented"
                    }
                }, {
                    key: "val",
                    value: function(e) {
                        return "string" == typeof e && (this.input.val(e), this.clearBtn()), this.input.val()
                    }
                }, {
                    key: "disambiguate",
                    value: function(e) {
                        var t = this,
                            n = e.possible;
                        if (n.length) {
                            var o = this.list;
                            this.emptyList(), n.forEach(function(e) {
                                o.append(t.listItem({
                                    layerName: "addr"
                                }, e))
                            }), this.showList(!0)
                        }
                    }
                }, {
                    key: "setFeatures",
                    value: function(e) {
                        var t = this;
                        this.autoComplete = this.autoComplete || new s.default, e.nameField = e.nameField || "name", e.displayField = e.displayField || e.nameField, e.placeholder && this.input.attr("placeholder", e.placeholder), this.sortAlphapetically(e).forEach(function(n) {
                            var o = t.featureAsLocation(n, e),
                                r = t.listItem(e, o);
                            t.retention.append(r)
                        }), this.emptyList()
                    }
                }, {
                    key: "removeFeatures",
                    value: function(e) {
                        this.find("li." + e).remove()
                    }
                }, {
                    key: "sortAlphapetically",
                    value: function(e) {
                        var t = [];
                        return e.features.forEach(function(e) {
                            e.get ? t.push(a.default.extend({}, e)) : t.push(a.default.extend({
                                get: function(e) {
                                    return this.properties[e]
                                }
                            }, e))
                        }), t.sort(function(t, n) {
                            var o = e.nameField;
                            return t.get(o) < n.get(o) ? -1 : t.get(o) > n.get(o) ? 1 : 0
                        }), t
                    }
                }, {
                    key: "listItem",
                    value: function(e, t) {
                        var n = (0, a.default)("<li></li>"),
                            o = e.displayField;
                        return n.addClass(e.layerName), "addr" !== e.layerName && n.addClass("feature"), n.addClass("notranslate").attr("translate", "no").html(t.data[o] || t.name).data("nameField", e.nameField).data("displayField", o).data("location", t).click(a.default.proxy(this.disambiguated, this))
                    }
                }, {
                    key: "emptyList",
                    value: function() {
                        this.retention.append(this.find(".srch li")), this.list.empty()
                    }
                }, {
                    key: "disambiguated",
                    value: function(e) {
                        var t = (0, a.default)(e.target);
                        "LI" !== t.get(0).tagName.toUpperCase() && (t = t.parent());
                        var n = t.data("location");
                        this.val(n.name), n.isFeature = t.hasClass("feature"), this.trigger("disambiguated", n), t.parent().slideUp(), this.emptyList()
                    }
                }, {
                    key: "listClick",
                    value: function(e) {
                        if (e = e.originalEvent || e, "block" === this.list.css("display")) {
                            var t = (0, a.default)(e.target);
                            a.default.contains(this.list.get(0), t.get(0)) ? this.autoComplete && t.trigger("click") : this.list.slideUp()
                        }
                    }
                }, {
                    key: "hookupEvents",
                    value: function(e) {
                        e.on("keyup change", a.default.proxy(this.key, this)), e.focus(function() {
                            return e.select()
                        }), this.find(".btn-z-in, .btn-z-out").click(a.default.proxy(this.zoom, this)), this.find(".btn-geo").click(a.default.proxy(this.geolocate, this)), this.clear.click(a.default.proxy(this.clearTxt, this)), (0, a.default)(document).mouseup(a.default.proxy(this.listClick, this))
                    }
                }, {
                    key: "key",
                    value: function(e) {
                        13 === e.keyCode && this.isAddrSrch ? (this.triggerSearch(), this.list.slideUp()) : this.filterList(), this.clearBtn()
                    }
                }, {
                    key: "clearTxt",
                    value: function() {
                        this.val(""), this.clearBtn()
                    }
                }, {
                    key: "clearBtn",
                    value: function() {
                        this.clear[this.val() ? "show" : "hide"]()
                    }
                }, {
                    key: "filterList",
                    value: function() {
                        var e = this.val().trim();
                        this.autoComplete && e ? this.autoComplete.filter(this.retention, this.list, e) : this.emptyList(), this.showList(!1)
                    }
                }, {
                    key: "showList",
                    value: function(e) {
                        var t = this;
                        this.list.slideDown(function() {
                            e && t.list.children().first().attr("tabindex", 0).focus()
                        })
                    }
                }, {
                    key: "geolocate",
                    value: function() {
                        this.val(""), this.trigger("geolocate")
                    }
                }, {
                    key: "triggerSearch",
                    value: function() {
                        var e = this.val().trim();
                        e.length && (this.input.blur(), this.trigger("search", e))
                    }
                }]), t
            }();
        u.FeatureSearchOptions, u.HTML = '<div class="z-srch" role="toolbar"><div class="srch" role="search"><input class="rad-all" placeholder="Search for an address..."><button class="btn-rnd btn-x"><span class="screen-reader-only">Clear</span></button><ul class="rad-all"></ul></div><span class="screen-reader-only">Zoom in</span></button><span class="screen-reader-only">Zoom out</span></button><span class="screen-reader-only">Current location</span></=><ul class="retention"></ul></div>', t.default = u
    },
    38: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = o(n(3)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target));
                    return n.getContainer().append((0, a.default)(t.HTML)).addClass("tabs"), n.btns = n.find(".btns"), n.tabs = n.find(".container"), n.active = null, n.ready = !1, n.render(e.tabs), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "open",
                    value: function(e) {
                        e = this.find(e), this.find(".tab").attr("aria-hidden", !0).removeClass("active"), this.btns.find(".btn").removeClass("active").attr("aria-selected", !1), e.addClass("active").attr("aria-hidden", !1).attr("tabindex", 0).focus(), e.data("btn").addClass("active").attr("aria-selected", !0), this.active = e, this.trigger("change", this)
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        var n = this,
                            o = !1;
                        e.forEach(function(e, r) {
                            var s = i.default.nextId("tab-btn"),
                                u = (0, a.default)(e.tab).addClass("tab tab-" + r).attr("aria-labelledby", s).attr("role", "tabpanel").attr("aria-hidden", !0),
                                l = u.attr("id") || i.default.nextId("tab-pnl");
                            u.attr("id", l);
                            var c = (0, a.default)(t.BTN_HTML).attr("id", s).attr("aria-controls", l).attr("aria-selected", !1).click(a.default.proxy(n.btnClick, n)).addClass("btn-tab btn-" + r).data("tab", u).append(e.title);
                            u.data("btn", c), n.btns.append(c), n.tabs.append(u), e.active && (n.open(u), o = !0)
                        }), o || this.open(e[0].tab), this.ready = !0
                    }
                }, {
                    key: "btnClick",
                    value: function(e) {
                        this.open((0, a.default)(e.currentTarget).data("tab"))
                    }
                }]), t
            }();
        u.Options, u.Tab, u.HTML = '<div class="btns" role="tablist"></div><div class="container"></div>', u.BTN_HTML = '<h2 class="btn" role="tab"><span class="screen-reader-only">show </span></h2>', t.default = u
    },
    387: function(e) {
        e.exports = ol.format.FormatType
    },
    388: function(e) {
        e.exports = window
    },
    389: function(e) {
        e.exports = window.Papa || {}
    },
    390: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(389)),
            i = o(n(388)),
            s = (o(n(2)), o(n(125))),
            u = o(n(167)),
            l = o(n(387)),
            c = o(n(124)),
            f = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.defaultDataProjection = e.defaultDataProjection || "EPSG:4326", n.defaultFeatureProjection = e.defaultFeatureProjection || "EPSG:3857", n.id = e.id, n.x = e.x, n.y = e.y, n.lastId = 0, n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, u.default), r(t, [{
                    key: "readFeature",
                    value: function(e, t) {
                        var n = e[this.id] || this.lastId++,
                            o = e[this.x] = 1 * e[this.x],
                            r = e[this.y] = 1 * e[this.y];
                        if (isNaN(o) || isNaN(r)) throw "Invalid coordinate [" + o + ", " + r + "] for id " + n;
                        var a = new c.default([o, r]),
                            i = new s.default(e);
                        return (t = t || {}).dataProjection = t.dataProjection || this.defaultDataProjection, t.featureProjection = t.featureProjection || this.defaultFeatureProjection, a.transform(t.dataProjection, t.featureProjection), i.setGeometry(a), i.setId(n), i
                    }
                }, {
                    key: "readFeatures",
                    value: function(e, t) {
                        var n = this,
                            o = [];
                        return e instanceof ArrayBuffer && (e = new i.default.TextDecoder("utf-8").decode(e)), "string" == typeof e && (e = a.default.parse(e, {
                            header: !0
                        }).data), e.forEach(function(e) {
                            try {
                                o.push(n.readFeature(e, t))
                            } catch (t) {
                                console.error(t, e)
                            }
                        }), o
                    }
                }, {
                    key: "readProjection",
                    value: function() {
                        return this.defaultDataProjection
                    }
                }, {
                    key: "getLastExtent",
                    value: function() {
                        return null
                    }
                }, {
                    key: "getType",
                    value: function() {
                        return l.default.ARRAY_BUFFER
                    }
                }]), t
            }();
        f.Options, t.default = f
    },
    391: function(e) {
        e.exports = ol.proj.Projection
    },
    392: function(e) {
        e.exports = ol.geom.LineString
    },
    393: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = o(n(3)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, a.default)(t.HTML)));
                    return e = e || {}, (0, a.default)(e.target).append(n.getContainer()), n.item = null, n.current = n.find(".current"), n.total = n.find(".total"), n.currentItem = n.find(".it"), n.btns = n.find(".btns"), n.items = null, n.find(".btn-nxt, .btn-prv").click(a.default.proxy(n.navigate, n)), e.items && n.show(e.items), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "show",
                    value: function(e) {
                        this.items = e, this.item = e[0], this.btns[1 < e.length ? "show" : "hide"](), this.current.data("current", 0).html(1), this.total.html(e.length), this.currentItem.html(e.length ? i.default.html(e[0]) : ""), this.trigger("change", this)
                    }
                }, {
                    key: "navigate",
                    value: function(e) {
                        var t = (0, a.default)(e.target).data("incr") - 0,
                            n = this.current.data("current") - 0 + t;
                        0 <= n && n < this.items.length && (this.current.data("current", n).html(n + 1), this.currentItem.html(i.default.html(this.items[n])), this.item = this.items[n], this.trigger("change", this))
                    }
                }]), t
            }();
        u.Options, u.HTML = '<div class="it-pg"><div class="it"></div><div class="btns"><button class="btn-rnd btn-prv" data-incr="-1"><span class="screen-reader-only">Previous</span></button><span class="current"></span> of <span class="total"></span><button class="btn-rnd btn-nxt" data-incr="1"><span class="screen-reader-only">Next</span></button></div></div>', t.default = u
    },
    394: function(e) {
        e.exports = ol.style.Icon
    },
    395: function(e) {
        e.exports = ol.style.Style
    },
    396: function(e) {
        e.exports = ol.coordinate
    },
    397: function(e) {
        e.exports = ol.Geolocation
    },
    398: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                a = o(n(1)),
                i = o(n(2)),
                s = o(n(58)),
                u = o(n(24)),
                l = o(n(66)),
                c = o(n(38)),
                f = o(n(67)),
                d = o(n(56)),
                p = o(n(70)),
                h = o(n(36)),
                y = o(n(64)),
                b = o(n(179)),
                m = o(n(174)),
                g = o(n(173)),
                v = o(n(169)),
                w = o(n(126)),
                _ = o(n(168)),
                O = o(n(166)),
                k = o(n(127)),
                T = function() {
                    function t(n) {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), e.finderApp = this, (0, a.default)("body").append(t.HTML).addClass("fnd"), (0, a.default)("#banner").html(n.title), (0, a.default)("#home").attr("title", n.title), this.pager = new f.default({
                            target: "#facilities"
                        }), this.facilitySearchOptions = n.facilitySearchOptions, this.map = new b.default({
                            target: "map"
                        }), this.source = new O.default({
                            url: n.facilityUrl,
                            format: new _.default({
                                parentFormat: this.parentFomat(n.facilityFormat),
                                decorations: this.decorations(n, n.facilityFormat)
                            })
                        }), this.source.autoLoad().then(a.default.proxy(this.ready, this)), this.layer = new k.default({
                            source: this.source,
                            style: n.facilityStyle
                        }), this.map.addLayer(this.layer), this.popup = new v.default({
                            map: this.map,
                            layers: [this.layer]
                        }), this.view = this.map.getView(), this.locationMgr = new g.default({
                            map: this.map,
                            url: n.geoclientUrl
                        }), this.locationMgr.on("geocoded", this.located, this), this.locationMgr.on("geolocated", this.located, this), this.filters = this.createFilters(n.filterChoiceOptions), this.tabs = this.createTabs(n), this.adjustTabs(), this.view.fit(b.default.EXTENT, {
                            size: this.map.getSize(),
                            duration: 500
                        }), this.location = {}, new w.default({
                            map: this.map,
                            tips: [{
                                layer: this.layer,
                                label: function(e) {
                                    return {
                                        html: e.getName()
                                    }
                                }
                            }]
                        }), this.showSplash(n.splashOptions), new l.default({
                            target: "#map"
                        }), new y.default({
                            target: "#map",
                            languages: n.languages || h.default.DEFAULT_LANGUAGES,
                            button: !0
                        }), this.directions = null, this.directionsUrl = n.directionsUrl
                    }
                    return r(t, [{
                        key: "resetList",
                        value: function(e) {
                            e instanceof m.default && (0, a.default)("#tabs .btns h2.btn-2").addClass("filtered");
                            var t = this.location.coordinate;
                            this.popup.hide(), this.pager.reset(t ? this.source.sort(t) : this.source.getFeatures())
                        }
                    }, {
                        key: "zoomTo",
                        value: function(e) {
                            var t = this.popup;
                            t.hide(), "none" !== (0, a.default)("h3.btn-0").css("display") && this.tabs.open("#map"), this.map.once("moveend", function() {
                                t.showFeature(e)
                            }), this.view.animate({
                                center: e.getGeometry().getCoordinates(),
                                zoom: d.default.ZOOM_LEVEL
                            })
                        }
                    }, {
                        key: "directionsTo",
                        value: function(e) {
                            this.directions = this.directions || new p.default(this.directionsUrl);
                            var t = e.getFullAddress(),
                                n = e.getName(),
                                o = this.getFromAddr();
                            this.directions.directions({
                                from: o,
                                to: t,
                                facility: n,
                                origin: this.location,
                                destination: {
                                    name: e.getName(),
                                    coordinate: e.getGeometry().getCoordinates()
                                }
                            })
                        }
                    }, {
                        key: "located",
                        value: function(e) {
                            this.location = e, this.resetList(), this.focusFacilities()
                        }
                    }, {
                        key: "createFilters",
                        value: function(e) {
                            if (e) {
                                var t = (0, a.default)('<button class="screen-reader-only">Apply</button>'),
                                    n = new m.default({
                                        target: "#filters",
                                        source: this.source,
                                        choiceOptions: e
                                    });
                                return n.on("change", this.resetList, this), (0, a.default)("#filters").append(t), t.click(a.default.proxy(this.focusFacilities, this)), n
                            }
                        }
                    }, {
                        key: "createTabs",
                        value: function(e) {
                            var t = [{
                                tab: "#map",
                                title: "Map"
                            }, {
                                tab: "#facilities",
                                title: e.facilityTabTitle || "Facilities"
                            }];
                            e.splashOptions && (0, a.default)("#tabs").attr("aria-hidden", !0), this.filters && t.push({
                                tab: "#filters",
                                title: e.filterTabTitle || "Filters"
                            });
                            var n = new c.default({
                                target: "#tabs",
                                tabs: t
                            });
                            return n.on("change", this.tabChange, this), (0, a.default)(window).resize(a.default.proxy(this.adjustTabs, this)), n
                        }
                    }, {
                        key: "expandDetail",
                        value: function() {
                            this.popup.pan()
                        }
                    }, {
                        key: "getFromAddr",
                        value: function() {
                            var e = this.location;
                            if ("geolocated" === e.type) {
                                var t = proj4(this.view.getProjection().getCode(), "EPSG:4326", e.coordinate);
                                return t[1] + "," + t[0]
                            }
                            return e.name || ""
                        }
                    }, {
                        key: "focusFacilities",
                        value: function() {
                            this.tabs.find(".tab-1").attr("tabindex", 0).focus()
                        }
                    }, {
                        key: "showSplash",
                        value: function(e) {
                            var t = this.locationMgr.zoomSearch.input;
                            e ? (e.buttonText = e.buttonText || ['Continue<span aria-hidden="true">...</span>'], new u.default("splash").ok(e).then(function() {
                                (0, a.default)("#tabs").attr("aria-hidden", !1), t.focus()
                            }), (0, a.default)(".splash .dia-msg").attr("tabindex", 0).focus()) : t.focus()
                        }
                    }, {
                        key: "tabsFillScreen",
                        value: function() {
                            return 1 > Math.abs(this.tabs.getContainer().width() - (0, a.default)(window).width())
                        }
                    }, {
                        key: "adjustTabs",
                        value: function() {
                            "block" === (0, a.default)("#directions").css("display") || i.default.activeElement().isTextInput || this.tabs.open(this.tabsFillScreen() ? "#map" : "#facilities")
                        }
                    }, {
                        key: "tabChange",
                        value: function() {
                            this.tabsFillScreen() || (0, a.default)("#map").attr("aria-hidden", !1), this.map.setSize([(0, a.default)("#map").width(), (0, a.default)("#map").height()])
                        }
                    }, {
                        key: "parentFomat",
                        value: function(e) {
                            return e.parentFomat || e
                        }
                    }, {
                        key: "decorations",
                        value: function(e, n) {
                            var o = [t.FEATURE_DECORATIONS, {
                                finderApp: this
                            }];
                            return n.parentFomat && n.parentFomat.decorations && (o = o.concat(n.parentFomat.decorations)), n.decorations && (o = o.concat(n.decorations)), e.decorations && (o = o.concat(e.decorations)), o
                        }
                    }, {
                        key: "ready",
                        value: function(e) {
                            var t = this.facilitySearchOptions || {};
                            t.features = e, this.pager.reset(e || []), this.locationMgr.zoomSearch.setFeatures(t), i.default.ready((0, a.default)("body"))
                        }
                    }]), t
                }();
            T.handleButton = function(t) {
                var n = (0, a.default)(t.currentTarget),
                    o = n.data("feature");
                n.hasClass("map") ? e.finderApp.zoomTo(o) : e.finderApp.directionsTo(o)
            }, T.FEATURE_DECORATIONS = {
                html: function() {
                    return (0, a.default)('<div class="facility"></div>').addClass(this.cssClass()).append(this.distanceHtml()).append(this.nameHtml()).append(this.distanceHtml(!0)).append(this.addressHtml()).append(this.phoneButton()).append(this.emailButton()).append(this.websiteButton()).append(this.mapButton()).append(this.directionsButton()).append(this.detailsCollapsible())
                },
                getName: function() {
                    throw "A getName decoration must be provided"
                },
                cssClass: function() {},
                getAddress1: function() {
                    throw "A getAddress1 decoration must be provided to use default html method and directions"
                },
                getAddress2: function() {
                    return ""
                },
                getCityStateZip: function() {
                    throw "A getCityStateZip decoration must be provided to use default html method and directions"
                },
                getFullAddress: function() {
                    return this.getAddress1() + "\n" + this.getAddress2() + ",\n" + this.getCityStateZip()
                },
                getPhone: function() {},
                getEmail: function() {},
                getWebsite: function() {},
                detailsHtml: function() {},
                nameHtml: function() {
                    return (0, a.default)('<h3 class="name notranslate"></h3>').html(this.getName())
                },
                addressHtml: function() {
                    var e = (0, a.default)('<div class="addr"></div>').append('<div class="ln1">' + this.getAddress1() + "</div>");
                    return this.getAddress2() && e.append('<div class="ln2">' + this.getAddress2() + "</div>"), e.append('<div class="ln3">' + this.getCityStateZip() + "</div>")
                },
                mapButton: function() {
                    return (0, a.default)('<a class="btn rad-all map" role="button" href="#">Map</a>').data("feature", this).click(T.handleButton)
                },
                directionsButton: function() {
                    return (0, a.default)('<a class="btn rad-all dir" role="button" href="#">Directions</a>').data("feature", this).click(T.handleButton)
                },
                phoneButton: function() {
                    var e = this.getPhone();
                    if (e) return (0, a.default)('<a class="btn rad-all phone" role="button">' + e + "</a>").attr("href", "tel:" + e)
                },
                emailButton: function() {
                    var e = this.getEmail();
                    if (e) return (0, a.default)('<a class="btn rad-all email" role="button">Email</a>').attr("href", "mailto:" + e)
                },
                websiteButton: function() {
                    var e = this.getWebsite();
                    if (e) return (0, a.default)('<a class="btn rad-all web" target="blank" role="button">Website</a>').attr("href", e)
                },
                distanceHtml: function(e) {
                    if (this.getDistance) {
                        var t = (0, a.default)('<div class="dist"></div>'),
                            n = this.getDistance();
                        return e ? (t.addClass("screen-reader-only"), "ft" === n.units ? t.html((n.distance / 5280).toFixed(2) + " miles") : t.html((n.distance / 1e3).toFixed(2) + " kilometers")) : (t.attr("aria-hidden", !0), "ft" === n.units ? t.html("&bull; " + (n.distance / 5280).toFixed(2) + " mi &bull;") : t.html("&bull; " + (n.distance / 1e3).toFixed(2) + " km &bull;"))
                    }
                },
                detailsCollapsible: function() {
                    var e = this.detailsHtml();
                    if (e) {
                        var t = new s.default({
                            target: (0, a.default)('<div class="dtl"></div>'),
                            title: this.detailButtonText || 'Details<span aria-hidden="true">...</span>',
                            content: e,
                            collapsed: !0
                        });
                        return t.on("change", this.finderApp.expandDetail, this.finderApp), t.getContainer()
                    }
                }
            }, T.Options, T.HTML = '<h1 id="banner"></h1><div id="home" onclick="document.location.reload()"></div><div id="map"></div><div id="tabs"></div><div id="facilities"></div><div id="filters"></div>', t.default = T
        }).call(this, n(16))
    },
    399: function(e) {
        e.exports = ol.geom.Polygon
    },
    400: function(e) {
        e.exports = ol.layer.Tile
    },
    401: function(e) {
        e.exports = ol.source.XYZ
    },
    402: function(e) {
        e.exports = ol.View
    },
    403: function(e) {
        e.exports = ol.Map
    },
    404: function(e) {
        e.exports = ol.tilegrid
    },
    405: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        o(n(81));
        var r = o(n(180)),
            a = o(n(179)),
            i = o(n(177)),
            s = o(n(126)),
            u = o(n(174)),
            l = o(n(398)),
            c = o(n(178)),
            f = o(n(173)),
            d = o(n(172)),
            p = o(n(171)),
            h = o(n(169)),
            y = o(n(176)),
            b = o(n(170)),
            m = o(n(390)),
            g = o(n(168)),
            v = o(n(165)),
            w = o(n(166));
        window.nyc.ol = r.default, window.nyc.ol.Basemap = a.default, window.nyc.ol.FeaturePopup = i.default, window.nyc.ol.FeatureTip = s.default, window.nyc.ol.Filters = u.default, window.nyc.ol.FinderApp = l.default, window.nyc.ol.LocalStorage = c.default, window.nyc.ol.LocationMgr = f.default, window.nyc.ol.Locator = d.default, window.nyc.ol.MapLocator = p.default, window.nyc.ol.MultiFeaturePopup = h.default, window.nyc.ol.Popup = y.default, window.nyc.ol.ZoomSearch = b.default, window.nyc.ol.format = {}, window.nyc.ol.format.CsvPoint = m.default, window.nyc.ol.format.Decorate = g.default, window.nyc.ol.source = {}, window.nyc.ol.source.AutoLoad = v.default, window.nyc.ol.source.FilterAndSort = w.default
    },
    41: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            o = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "replace",
                    value: function(e, t) {
                        return Object.keys(t).forEach(function(n) {
                            e = e.replace(new RegExp("\\$\\{" + n + "\\}", "g"), void 0 === t[n] ? "" : t[n])
                        }), e
                    }
                }]), e
            }();
        t.default = o
    },
    42: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(14)),
            a = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r.default), o(t, [{
                    key: "search",
                    value: function() {
                        throw "Not implemented"
                    }
                }]), t
            }();
        t.default = a
    },
    43: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = (function(e) {
                e && e.__esModule
            }(n(2)), function() {
                function e(t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.url = t
                }
                return o(e, [{
                    key: "directions",
                    value: function(e) {
                        var t = {
                            jsonpacket: this.jsonpacket(e),
                            rand: this.randomParamCopiedFromMtaCode()
                        };
                        this.window = window.open(this.getUrl() + "?" + $.param(t))
                    }
                }, {
                    key: "getUrl",
                    value: function() {
                        if (this.url) return this.url;
                        var e = document.location.hostname,
                            t = document.location.pathname,
                            n = document.location.port;
                        return "http://" + e + (n = n ? ":" + n : "") + t + "/mta.html"
                    }
                }, {
                    key: "jsonpacket",
                    value: function(e) {
                        return JSON.stringify(this.insanifyRequest(e))
                    }
                }, {
                    key: "randomParamCopiedFromMtaCode",
                    value: function() {
                        return Math.floor(11 * Math.random())
                    }
                }, {
                    key: "now",
                    value: function() {
                        var e = new Date,
                            t = e.getHours();
                        return {
                            date: e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear(),
                            hour: 13 > t ? t : t - 12,
                            minute: e.getMinutes(),
                            ampm: 12 > t ? "am" : "pm"
                        }
                    }
                }, {
                    key: "insanifyLocation",
                    value: function(e) {
                        var t = proj4(e.projection || "EPSG:3857", "EPSG:4326", e.coordinate);
                        return t[1] + "$" + t[0] + "$" + e.name + "$0"
                    }
                }, {
                    key: "insanifyRequest",
                    value: function(e) {
                        var t = e.origin,
                            n = e.destination,
                            o = (e.projection, this.now());
                        return {
                            RequestDevicename: "DESKTOP",
                            OriginInput: t.name,
                            DestinationInput: n.name,
                            Arrdep: "D",
                            Hour: o.hour,
                            Minute: o.minute,
                            Ampm: o.ampm,
                            InputDate: o.date,
                            Minimize: "X",
                            Walkdist: "0.50",
                            Mode: "FRBC12",
                            LineStart: "",
                            LineEnd: "",
                            Accessible: e.accessible ? "Y" : "N",
                            OriginCoordinates: this.insanifyLocation(t),
                            DestinationCoordinates: this.insanifyLocation(n),
                            LocationType: "",
                            StartServiceType: "train",
                            StartTrainType: "subway",
                            StartBorough: "",
                            EndBorough: "",
                            Walkincrease: "",
                            Maxinitialwait: "",
                            Maxtriptime: "",
                            Maxtransfers: ""
                        }
                    }
                }]), e
            }());
        r.Location, r.SaneRequest, r.InsaneRequest, t.default = r
    },
    44: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1)),
            a = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return o(e, [{
                    key: "filter",
                    value: function(e, t, n) {
                        var o = this,
                            a = 3 < n.length,
                            i = 6 < n.length,
                            s = {
                                exact: [],
                                possible: []
                            },
                            u = this.regexp(n),
                            l = [],
                            c = this.test;
                        r.default.merge((0, r.default)(t).find("li"), (0, r.default)(e).find("li")).each(function(e, t) {
                            l.push((0, r.default)(t)), c(u, (0, r.default)(t), s, a, o.log)
                        }), (0, r.default)(e).append(l), s.exact.length ? (0, r.default)(t).prepend(s.exact) : !i && (0, r.default)(t).prepend(s.possible)
                    }
                }, {
                    key: "test",
                    value: function(e, t, n, o) {
                        var r = t.html();
                        o && e.exact.test(r) && n.exact.push(t), e.possible.test(r) && n.possible.push(t)
                    }
                }, {
                    key: "regexp",
                    value: function(e) {
                        for (var t = new String(e.replace(/[^a-zA-Z0-9]/g, "")), n = new String(e.replace(/[^a-zA-Z0-9 ]/g, "")), o = "^", r = 0; r < t.length; r++) o += "(?=.*" + t.charAt(r) + ")|";
                        return o = o.substr(0, o.length - 1), o += ".*$", {
                            exact: new RegExp("(" + n + ")", "i"),
                            possible: new RegExp(o, "i")
                        }
                    }
                }]), e
            }();
        t.default = a
    },
    56: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = (function(e) {
                e && e.__esModule
            }(n(12)), function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return o(e, [{
                    key: "zoomLocation",
                    value: function() {
                        throw "Not implemented"
                    }
                }, {
                    key: "setLocation",
                    value: function() {
                        throw "Not implemented"
                    }
                }]), e
            }());
        r.ZOOM_LEVEL = 17, t.default = r
    },
    57: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, [{
                    key: "canDownload",
                    value: function() {
                        return "download" in (0, a.default)("<a></a>").get(0)
                    }
                }, {
                    key: "saveGeoJson",
                    value: function(e, t) {
                        var n = "data:application/jsoncharset=utf-8," + encodeURIComponent(t),
                            o = (0, a.default)('<a class="file-dwn"><img></a>');
                        (0, a.default)("body").append(o), o.attr("href", n).attr("download", e).find("img").trigger("click"), o.remove()
                    }
                }, {
                    key: "setItem",
                    value: function(e, t) {
                        "localStorage" in window && localStorage.setItem(e, t)
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        if ("localStorage" in window) return localStorage.getItem(e)
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        if ("localStorage" in window) return localStorage.removeItem(e)
                    }
                }, {
                    key: "readTextFile",
                    value: function(e, t) {
                        var n = new FileReader;
                        if (n.onload = function() {
                                e(n.result)
                            }, t) n.readAsText(t);
                        else {
                            var o = (0, a.default)('<input class="file-in" type="file">');
                            (0, a.default)("body").append(o), o.change(function(e) {
                                o.remove(), n.readAsText(e.target.files[0])
                            }), o.trigger("click")
                        }
                    }
                }, {
                    key: "loadGeoJsonFile",
                    value: function(e, t, n) {
                        var o = this;
                        this.readTextFile(function(n) {
                            var r = o.addToMap(e, n);
                            t && t(r)
                        }, n)
                    }
                }, {
                    key: "loadShapeFile",
                    value: function(e, t, n) {
                        if (n) this.getShpDbfPrj(e, n, t);
                        else {
                            var o = this,
                                r = (0, a.default)('<input class="file-in" type="file" multiple>');
                            (0, a.default)("body").append(r), r.change(function(n) {
                                o.getShpDbfPrj(e, n.target.files, t), r.remove()
                            }), r.trigger("click")
                        }
                    }
                }, {
                    key: "getShpDbfPrj",
                    value: function(e, t, n) {
                        var o, r, a, i = this;
                        Object.values(t).forEach(function(e) {
                            var t = e.name,
                                n = t.substr(t.length - 4).toLowerCase();
                            ".shp" === n ? o = e : ".dbf" === n ? r = e : ".prj" === n && (a = e)
                        }), o ? this.readPrj(a, function(t) {
                            i.readShpDbf(e, o, r, t, n)
                        }) : n && n()
                    }
                }, {
                    key: "readPrj",
                    value: function(e, t) {
                        e ? this.readTextFile(t, e) : t()
                    }
                }, {
                    key: "readShpDbf",
                    value: function(e, t, n, o, r) {
                        var a, i, s = this,
                            u = new FileReader;
                        u.onload = function(t) {
                            a = t.target.result, (i || !n) && s.readShp(e, a, i, o, r)
                        };
                        var l = new FileReader;
                        l.onload = function(t) {
                            i = t.target.result, a && s.readShp(e, a, i, o, r)
                        }, u.readAsArrayBuffer(t), n && l.readAsArrayBuffer(n)
                    }
                }, {
                    key: "readShp",
                    value: function(t, n, o, r, a) {
                        var i = this,
                            s = [];
                        e.shapefile.open(n, o).then(function(e) {
                            e.read().then(function n(o) {
                                if (!o.done) return s.push(o.value), e.read().then(n);
                                var u = i.addToMap(t, s, r);
                                a && a(u)
                            })
                        }).catch(function(e) {
                            console.error(e)
                        })
                    }
                }, {
                    key: "addToMap",
                    value: function() {
                        throw "Not implemented"
                    }
                }, {
                    key: "customProj",
                    value: function(e) {
                        if (e) {
                            var t = i.default.nextId("shp:prj");
                            return proj4.defs(t, e), t
                        }
                    }
                }]), e
            }();
        s.shapefile = n(79), t.default = s
    },
    58: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = o(n(3)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target));
                    n.getContainer().append(t.HTML);
                    var o = i.default.nextId("clsp-btn"),
                        r = i.default.nextId("clsp-pnl");
                    return n.btn = n.find("h3").attr("id", o).attr("aria-controls", r).append(e.title).click(a.default.proxy(n.toggle, n)), n.content = n.find(".content").append((0, a.default)(e.content)).attr("id", r).attr("aria-labelledby", o), e.collapsed ? (n.content.hide(), n.btn.removeClass("rad-top"), n.find("h3 button").attr("aria-collapsed", !0).attr("aria-expanded", !1).addClass("expd")) : n.find("h3 button").attr("aria-collapsed", !1).attr("aria-expanded", !0), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "toggle",
                    value: function() {
                        var e = "none" === this.content.css("display"),
                            t = this.find("h3 button"),
                            n = this;
                        e ? this.content.slideDown(function() {
                            n.btn.addClass("rad-top"), n.trigger("change", n)
                        }) : this.content.slideUp(function() {
                            n.btn.removeClass("rad-top"), n.trigger("change", n)
                        }), t.toggleClass("expd").attr("aria-collapsed", !e).attr("aria-expanded", e)
                    }
                }]), t
            }();
        u.Options, u.HTML = '<div class="clps rad-all"><h3 class="btn rad-all rad-top" role="button"><button class="btn-rnd"></button></h3><div class="content rad-bot"></div></div>', t.default = u
    },
    59: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1)),
            r = {
                hookupEvents: function(e) {
                    (0, o.default)(e).on("drop", o.default.proxy(this.loadLayer, this)), (0, o.default)(e).on("dragover", function(e) {
                        e.preventDefault()
                    })
                },
                loadLayer: function(e) {
                    var t = e.originalEvent.dataTransfer;
                    if (e.preventDefault(), e.stopPropagation(), t && t.files.length) {
                        var n = t.files;
                        "json" === n[0].name.split(".").pop().toLowerCase() ? this.storage.loadGeoJsonFile(this, null, n[0]) : this.storage.loadShapeFile(this, null, n)
                    }
                },
                sortedPhotos: function() {
                    var e = this,
                        t = [];
                    return Object.keys(this.photos).forEach(function(n) {
                        t.push(e.photos[n])
                    }), t.sort(function(e, t) {
                        var n = e.name || e.get("name");
                        return (t.name || t.get("name")).substr(0, 4) - n.substr(0, 4)
                    })
                },
                LabelType: {
                    BASE: "base",
                    PHOTO: "photo"
                }
            };
        t.default = r
    },
    64: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(36)),
            s = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.default.getScript("https://translate.google.com/translate_a/element.js?cb=nycTranslateInstance.init"), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "init",
                    value: function() {
                        nycTranslateInstance.goog = new google.translate.TranslateElement({
                            pageLanguage: "en",
                            includedLanguages: nycTranslateInstance.codes,
                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: !1
                        }, "lng-goog"), nycTranslateInstance.hack(), nycTranslateInstance.trigger("ready", nycTranslateInstance)
                    }
                }, {
                    key: "translate",
                    value: function(e) {
                        var t = (0, a.default)("iframe.goog-te-menu-frame:first").contents().find(".goog-te-menu2-item span.text");
                        if (clearTimeout(nycTranslateInstance.timeout), e && t.length) {
                            this.code = (0, a.default)(e.target).val();
                            var n = this.languages[this.code].name;
                            "English" === n ? this.showOriginalText() : (0, a.default)(t).each(function(e, t) {
                                if ((0, a.default)(t).text() === n) return (0, a.default)(t).trigger("click"), !1
                            }), this.css("goog"), this.trigger("change", this)
                        } else nycTranslateInstance.timeout = setTimeout(function() {
                            nycTranslateInstance.translate(e)
                        }, 200)
                    }
                }, {
                    key: "getCookieValue",
                    value: function() {
                        var e = this.getCookie();
                        return e ? e = (e = e.split("/"))[2] : ""
                    }
                }, {
                    key: "getCookie",
                    value: function() {
                        for (var e, t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                            for (e = t[n];
                                " " === e.charAt(0);) e = e.substring(1, e.length);
                            if (0 === e.indexOf("googtrans=")) return e.substring(10, e.length)
                        }
                    }
                }, {
                    key: "hack",
                    value: function() {
                        (0, a.default)("input[placeholder]").each(function(e, t) {
                            var n = (0, a.default)(t).next();
                            if (n.hasClass("lng-placeholder")) {
                                n.find("font");
                                var o = n.html();
                                a.default.each(n.find("font"), function(e, t) {
                                    o = (0, a.default)(t).html()
                                }), (0, a.default)(t).attr("placeholder", o)
                            } else(0, a.default)(t).after('<span class="lng-placeholder">' + (0, a.default)(t).attr("placeholder") + "</span>")
                        }), (0, a.default)("body").css("top", "auto"), (0, a.default)("#goog-gt-tt").remove(), setTimeout(a.default.proxy(this.hack, this), 200)
                    }
                }, {
                    key: "showOriginalText",
                    value: function() {
                        var e = this,
                            t = (0, a.default)("iframe.goog-te-banner-frame:first");
                        (0, a.default)(t.contents().find(".goog-te-button button")).each(function(t, n) {
                            if ("Show original" === (0, a.default)(n).text()) {
                                var o = e.find("select").val();
                                return (0, a.default)(n).trigger("click"), "English" !== e.languages[o].name && e.find("select").val("en"), !1
                            }
                        })
                    }
                }]), t
            }();
        t.default = s
    },
    65: function(e, t, n) {
        n(78), e.exports = self.fetch.bind(self)
    },
    66: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(3)),
            s = o(n(41));
        n(65);
        var u = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target)),
                    o = n;
                return fetch(e.url || "./manifest.webmanifest").then(function(e) {
                    return e.json()
                }).then(function(e) {
                    e.url = document.location.href, o.append((new s.default).replace(t.HTML, e)), o.hookupEvents()
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i.default), r(t, [{
                key: "hookupEvents",
                value: function() {
                    var e = this.find(".btns");
                    this.find(".btn-shr").click(function(t) {
                        t.stopPropagation(), e.fadeToggle(function() {
                            (0, a.default)("*").one("click", function(t) {
                                t.stopPropagation(), 1 == 1 * e.css("opacity") && e.fadeOut()
                            })
                        })
                    })
                }
            }]), t
        }();
        u.Options, u.HTML = '<div class="shr"><a class="btn-shr btn-sq rad-all" role="button" title="Share..."><span class="screen-reader-only">Share...</span></a><div class="btns"><a class="btn-sq rad-all facebook" role="button" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener noreferrer" title="Facebook"><span class="screen-reader-only">Facebook</span></a><a class="btn-sq rad-all twitter" role="button" href="https://twitter.com/intent/tweet?text=${url} @nycgov&source=webclient" target="_blank" rel="noopener noreferrer" title="Twitter"><span class="screen-reader-only">Twitter</span></a><a class="btn-sq rad-all google" role="button" href="https://plus.google.com/share?url=${url}" target="_blank" rel="noopener noreferrer" title="Google+"><span class="screen-reader-only">Google+</span></a><a class="btn-sq rad-all linkedin" role="button" href="http://www.linkedin.com/shareArticle?mini=true&url=${url}" target="_blank" rel="noopener noreferrer" title="LinkedIn"><span class="screen-reader-only">LinkedIn</span></a><a class="btn-sq rad-all tumblr" role="button" href="http://www.tumblr.com/share/link?url=${url}&name=${name}&description=via%20NYC.gov" target="_blank" rel="noopener noreferrer" title="Tumblr"><span class="screen-reader-only">Tumblr</span></a><a class="btn-sq rad-all email" role="button" href="mailto:?subject=${name}&body=${description}%0A%0A${url}" title="email"><span class="screen-reader-only">Email</span></a></div></div>', t.default = u
    },
    67: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(3)),
            s = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target));
                    return n.getContainer().addClass("lst-pg").append((0, a.default)(t.HTML)), n.items = e.items || [], n.list = n.find(".list"), n.index = 0, n.pageSize = e.pageSize || 10, n.moreBtn = n.find("button").click(a.default.proxy(n.more, n)), n.reset(n.items), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default), r(t, [{
                    key: "reset",
                    value: function(e) {
                        this.list.empty(), this.items = e, this.index = 0, this.moreBtn.fadeIn(), this.next()
                    }
                }, {
                    key: "next",
                    value: function(e) {
                        e = e || this.pageSize;
                        var t = this.items.slice(this.index, this.index + e);
                        return this.index += e, this.index >= this.items.length - 1 && this.moreBtn.fadeOut(), this.render(t), t
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.list.append((0, a.default)('<div class="lst-it" role="listitem"></div>').append(e.html()))
                        })
                    }
                }, {
                    key: "more",
                    value: function() {
                        this.next()
                    }
                }]), t
            }();
        s.Options, s.Item, s.HTML = '<div class="list" role="list"></div><button class="btn rad-all btn-more">More...</button>', t.default = s
    },
    68: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(14)),
            i = (o(n(12)), o(n(37)), o(n(24))),
            s = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.zoomSearch = e.zoomSearch, n.locator = e.locator, n.mapLocator = e.mapLocator, n.dialog = new i.default, n.autoLocate = e.autoLocate || !1, n.hookupEvents(), n.locateFromQueryString(document.location.search), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, a.default), r(t, [{
                    key: "setLocation",
                    value: function(e) {
                        this.mapLocator.setLocation(e)
                    }
                }, {
                    key: "hookupEvents",
                    value: function() {
                        this.locator.on("geocoded", this.located, this), this.locator.on("geolocated", this.located, this), this.locator.on("ambiguous", this.ambiguous, this), this.locator.on("error", this.error, this), this.zoomSearch.on("disambiguated", this.located, this), this.zoomSearch.on("search", this.locator.search, this.locator), this.zoomSearch.on("geolocate", this.locator.locate, this.locator)
                    }
                }, {
                    key: "locateFromQueryString",
                    value: function(e) {
                        var t = {};
                        try {
                            e.substr(1).split("&").forEach(function(e) {
                                var n = e.split("=");
                                t[n[0]] = decodeURIComponent(n[1])
                            })
                        } catch (e) {}
                        t.address ? this.locator.search(t.address) : this.autoLocate && this.locator.locate()
                    }
                }, {
                    key: "located",
                    value: function(e) {
                        var t = this;
                        this.zoomSearch.val("geolocated" === e.type ? "" : e.name), this.mapLocator.zoomLocation(e, function() {
                            t.trigger(e.type, e)
                        })
                    }
                }, {
                    key: "ambiguous",
                    value: function(e) {
                        e.possible.length ? this.zoomSearch.disambiguate(e) : this.dialog.ok({
                            message: "The location you entered was not understood"
                        })
                    }
                }, {
                    key: "error",
                    value: function() {
                        this.dialog.ok({
                            message: "Failed to contact geocoder"
                        })
                    }
                }]), t
            }();
        s.Options, t.default = s
    },
    69: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            s = o(n(1)),
            u = o(n(2)),
            l = o(n(12)),
            c = o(n(42)),
            f = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.url = e.url + "&input=", n.projection = e.projection || "EPSG:3857", n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, c.default), i(t, [{
                    key: "search",
                    value: function(e) {
                        if (5 !== (e = e.trim()).length || isNaN(e)) e.length && (e = e.replace(/"/g, "").replace(/'/g, "").replace(/&/g, " and "), s.default.ajax({
                            url: "" + this.url + e,
                            dataType: "jsonp",
                            success: s.default.proxy(this.geoclient, this),
                            error: s.default.proxy(this.error, this)
                        }));
                        else {
                            var n = this.project(t.ZIP_CODE_POINTS[e]);
                            this.trigger(n ? "geocoded" : "ambiguous", n ? {
                                coordinate: n,
                                accuracy: l.default.Accuracy.ZIP_CODE,
                                type: "geocoded",
                                zip: !0,
                                name: e
                            } : {
                                input: e,
                                possible: []
                            })
                        }
                    }
                }, {
                    key: "project",
                    value: function(e) {
                        return e && "EPSG:2263" !== this.projection ? proj4("EPSG:2263", this.projection, e) : e
                    }
                }, {
                    key: "geoclient",
                    value: function(e) {
                        var t = e.results;
                        if ("OK" !== e.status) this.trigger("ambiguous", {
                            type: "ambiguous",
                            input: e.input,
                            possible: []
                        });
                        else if (1 === t.length) {
                            var n = t[0],
                                o = this.parse(n);
                            o ? (o.type = "geocoded", this.trigger("geocoded", o)) : this.trigger("ambiguous", {
                                type: "ambiguous",
                                input: e.input,
                                possible: []
                            })
                        } else this.trigger("ambiguous", {
                            type: "ambiguous",
                            input: e.input,
                            possible: this.possible(t)
                        })
                    }
                }, {
                    key: "possible",
                    value: function(e) {
                        var t = this,
                            n = [];
                        return e.forEach(function(e) {
                            var o = t.parse(e);
                            o && n.push(o)
                        }), n
                    }
                }, {
                    key: "parse",
                    value: function(e) {
                        var t, n, o, r = e.request.split(" ")[0],
                            a = e.response;
                        if ("intersection" === r) t = a.streetName1 + " and " + a.streetName2, n = [1 * a.xCoordinate, 1 * a.yCoordinate], o = l.default.Accuracy.MEDIUM;
                        else if ("blockface" === r) t = a.firstStreetNameNormalized + " btwn " + a.secondStreetNameNormalized + " & " + a.thirdStreetNameNormalized, n = [(1 * a.fromXCoordinate + 1 * a.toXCoordinate) / 2, (1 * a.fromYCoordinate + 1 * a.toYCoordinate) / 2], o = l.default.Accuracy.LOW;
                        else {
                            var i = a.internalLabelXCoordinate,
                                s = a.internalLabelYCoordinate;
                            t = (a.houseNumber ? a.houseNumber + " " : "") + (a.firstStreetNameNormalized || a.giStreetName1), n = [1 * (i && s ? i : a.xCoordinate), 1 * (i && s ? s : a.yCoordinate)], o = i && s ? l.default.Accuracy.HIGH : l.default.Accuracy.MEDIUM
                        }
                        try {
                            return {
                                type: "geocoded",
                                coordinate: this.project(n),
                                data: a,
                                accuracy: o,
                                name: u.default.capitalize(t.replace(/  /, " ").replace(/  /, " ") + ", " + a.firstBoroughName) + ", NY " + (a.zipCode || a.leftSegmentZipCode || "")
                            }
                        } catch (r) {
                            console.warn("No coordinate", e)
                        }
                    }
                }, {
                    key: "error",
                    value: function() {
                        console.error("Geoclient error", arguments), this.trigger("error", {
                            type: "error",
                            error: arguments
                        })
                    }
                }]), t
            }();
        f.Options, f.ZIP_CODE_POINTS = (r(a = {
            10474: [1018466, 233787],
            10455: [1007889, 236616],
            10037: [1001661, 235627],
            10024: [991450, 225457],
            10454: [1007449, 232863],
            10026: [997179, 231835],
            10035: [1001886, 231364],
            10025: [993331, 230012]
        }, "10035", [1006595, 228454]), r(a, "11101", [1001319, 211034]), r(a, "11364", [1051553, 211923]), r(a, "10018", [984278, 215509]), r(a, "10020", [990012, 215729]), r(a, "11005", [1064789, 214295]), r(a, "10017", [991869, 213252]), r(a, "10001", [983613, 213360]), r(a, "10011", [982781, 210664]), r(a, "10016", [990291, 210665]), r(a, "11104", [1006224, 210564]), r(a, "11109", [996054, 210740]), r(a, "10010", [988989, 208515]), r(a, "11367", [1032392, 205392]), r(a, "10014", [982449, 206620]), r(a, "10003", [987465, 205563]), r(a, "11222", [998773, 204620]), r(a, "11379", [1017432, 200740]), r(a, "11429", [1056859, 198057]), r(a, "11435", [1036960, 195018]), r(a, "11415", [1031798, 197376]), r(a, "11418", [1031001, 193330]), r(a, "11433", [1043368, 193721]), r(a, "11451", [1039899, 194697]), r(a, "11221", [1004438, 191873]), r(a, "11421", [1023878, 191241]), r(a, "11372", [1016528, 213126]), r(a, "11004", [1065606, 210363]), r(a, "11040", [1065956, 213534]), r(a, "10002", [988242, 200171]), r(a, "10314", [939259, 155728]), r(a, "11693", [1028661, 168843]), r(a, "11228", [980891, 164066]), r(a, "11096", [1048547, 164406]), r(a, "11693", [1032834, 164479]), r(a, "11209", [976172, 165379]), r(a, "10304", [962458, 165679]), r(a, "10456", [1007883, 242372]), r(a, "10472", [1021444, 241624]), r(a, "10031", [998088, 239814]), r(a, "10039", [1001519, 240436]), r(a, "10459", [1013835, 240084]), r(a, "10451", [1005368, 238290]), r(a, "10473", [1022475, 237217]), r(a, "10030", [1000193, 237302]), r(a, "10027", [999088, 234131]), r(a, "10464", [1047712, 250241]), r(a, "10464", [1043291, 247861]), r(a, "10461", [1028296, 247902]), r(a, "10457", [1012388, 247405]), r(a, "10460", [1015132, 243510]), r(a, "10032", [1000382, 244917]), r(a, "10452", [1005446, 244483]), r(a, "11414", [1027256, 178677]), r(a, "11231", [979340, 182720]), r(a, "11232", [983612, 177801]), r(a, "10034", [1005713, 255122]), r(a, "10033", [1001707, 248780]), r(a, "10462", [1020685, 249420]), r(a, "10040", [1003863, 251914]), r(a, "10453", [1008152, 249805]), r(a, "11102", [1004636, 220364]), r(a, "11370", [1014445, 217532]), r(a, "10021", [997020, 219120]), r(a, "11361", [1047797, 217779]), r(a, "11358", [1040709, 216377]), r(a, "11362", [1057749, 215220]), r(a, "10044", [996385, 214347]), r(a, "11369", [1019957, 217722]), r(a, "11103", [1008295, 217197]), r(a, "11106", [1001397, 217519]), r(a, "11368", [1024870, 212082]), r(a, "11377", [1010574, 210678]), r(a, "10036", [985413, 216821]), r(a, "11355", [1033762, 213010]), r(a, "10302", [945946, 169124]), r(a, "10465", [1031495, 239091]), r(a, "11691", [1053783, 158810]), r(a, "11096", [1054217, 162199]), r(a, "11223", [991665, 156781]), r(a, "11693", [1030676, 160394]), r(a, "11208", [1019700, 184749]), r(a, "11207", [1013544, 183721]), r(a, "10004", [978925, 190480]), r(a, "10004", [971715, 190592]), r(a, "11413", [1053380, 183328]), r(a, "11217", [989547, 187967]), r(a, "11238", [994291, 186584]), r(a, "11231", [983057, 186217]), r(a, "11422", [1057272, 180607]), r(a, "11420", [1036899, 184708]), r(a, "11417", [1027410, 185709]), r(a, "11215", [989882, 181773]), r(a, "11357", [1036533, 225804]), r(a, "10029", [999950, 227538]), r(a, "00083", [991590, 220538]), r(a, "11356", [1028115, 225277]), r(a, "11359", [1046026, 228012]), r(a, "10303", [933820, 171004]), r(a, "11234", [1004323, 163783]), r(a, "11360", [1044984, 223892]), r(a, "11105", [1011836, 221755]), r(a, "10128", [997765, 224257]), r(a, "11371", [1022003, 220457]), r(a, "10023", [988765, 222068]), r(a, "11363", [1055047, 220385]), r(a, "10028", [995910, 222872]), r(a, "11354", [1032198, 219054]), r(a, "11216", [998312, 187241]), r(a, "11416", [1025796, 188584]), r(a, "11233", [1006523, 186300]), r(a, "11436", [1040697, 185554]), r(a, "11213", [1000284, 183308]), r(a, "11212", [1008387, 180764]), r(a, "11225", [997345, 180829]), r(a, "11218", [990799, 173649]), r(a, "11226", [995711, 174598]), r(a, "11219", [985166, 169604]), r(a, "11210", [999101, 167896]), r(a, "11230", [993494, 166072]), r(a, "11419", [1033365, 190202]), r(a, "11434", [1046577, 185969]), r(a, "11204", [987887, 164576]), r(a, "10471", [1012587, 266570]), r(a, "10470", [1024748, 268409]), r(a, "10466", [1024313, 263999]), r(a, "10467", [1019786, 258782]), r(a, "11430", [1043607, 175068]), r(a, "11203", [1002509, 175950]), r(a, "10469", [1026678, 255623]), r(a, "10468", [1013897, 258046]), r(a, "10463", [1008780, 258696]), r(a, "10458", [1015534, 253712]), r(a, "11378", [1009641, 202115]), r(a, "10009", [990043, 203961]), r(a, "10012", [984832, 203596]), r(a, "10013", [982892, 201665]), r(a, "10007", [982504, 199552]), r(a, "11237", [1004600, 197083]), r(a, "11385", [1011367, 195195]), r(a, "10038", [983418, 197803]), r(a, "11206", [1000221, 195003]), r(a, "10006", [980563, 197293]), r(a, "11412", [1050773, 193231]), r(a, "10005", [981339, 197038]), r(a, "11251", [993428, 194599]), r(a, "10004", [980174, 195435]), r(a, "11411", [1057763, 192413]), r(a, "11201", [986968, 192156]), r(a, "10004", [972576, 193652]), r(a, "11205", [995897, 192159]), r(a, "10305", [963310, 156060]), r(a, "11229", [999717, 158278]), r(a, "11214", [984e3, 159330]), r(a, "10306", [950937, 145144]), r(a, "11694", [1025530, 149310]), r(a, "11224", [984306, 149092]), r(a, "10308", [942704, 140020]), r(a, "10282", [979981, 200244]), r(a, "11211", [999857, 199848]), r(a, "11249", [993704, 198278]), r(a, "11370", [1016758, 227518]), r(a, "10065", [994666, 217698]), r(a, "10075", [995301, 221633]), r(a, "10069", [987047, 221849]), r(a, "10281", [980036, 198787]), r(a, "11373", [1017948, 208465]), r(a, "10279", [981949, 198823]), r(a, "10165", [990124, 213288]), r(a, "10168", [990733, 212960]), r(a, "10105", [990067, 217259]), r(a, "10118", [988212, 211939]), r(a, "10176", [990123, 214490]), r(a, "10162", [997739, 219667]), r(a, "10170", [990955, 213470]), r(a, "10112", [989735, 215947]), r(a, "10122", [986550, 213178]), r(a, "10107", [989098, 218425]), r(a, "10103", [990705, 216275]), r(a, "10174", [991094, 213106]), r(a, "10166", [990733, 213798]), r(a, "10169", [990872, 214089]), r(a, "10167", [991259, 214199]), r(a, "10177", [990927, 214381]), r(a, "10172", [991398, 214417]), r(a, "10171", [991426, 214709]), r(a, "10270", [982060, 196710]), r(a, "10104", [990123, 216312]), r(a, "10271", [981339, 197293]), r(a, "10110", [989486, 213943]), r(a, "10175", [989847, 214016]), r(a, "10151", [991702, 217332]), r(a, "10173", [990040, 213907]), r(a, "10178", [990429, 212814]), r(a, "10119", [986217, 213068]), r(a, "10121", [986439, 212486]), r(a, "10123", [986827, 213032]), r(a, "10106", [989624, 218024]), r(a, "10158", [991177, 212122]), r(a, "10041", [981727, 195435]), r(a, "10120", [987242, 212449]), r(a, "10278", [983113, 199880]), r(a, "10155", [993143, 216531]), r(a, "10043", [982337, 195836]), r(a, "10081", [981838, 197074]), r(a, "10096", [989071, 214235]), r(a, "10097", [988461, 216931]), r(a, "10196", [989237, 215e3]), r(a, "10196", [989458, 214963]), r(a, "10275", [980368, 196382]), r(a, "10265", [982060, 196164]), r(a, "10045", [981866, 197329]), r(a, "10047", [988047, 208660]), r(a, "10047", [988047, 208660]), r(a, "10080", [980785, 198167]), r(a, "10203", [981062, 196965]), r(a, "10259", [981478, 197439]), r(a, "10260", [981921, 196564]), r(a, "10285", [980147, 199224]), r(a, "10286", [981727, 196637]), r(a, "10463", [1007644, 260043]), r(a, "10475", [1030489, 258509]), r(a, "10464", [1036131, 258338]), r(a, "10309", [923594, 132955]), r(a, "10307", [916899, 124411]), r(a, "10280", [979509, 197257]), r(a, "10048", [980812, 198532]), r(a, "10055", [991564, 215802]), r(a, "10019", [989652, 217477]), r(a, "10111", [990483, 215838]), r(a, "10153", [991896, 217478]), r(a, "10154", [991896, 215328]), r(a, "10152", [991979, 215584]), r(a, "10115", [994299, 234675]), r(a, "10022", [993087, 215620]), r(a, "11235", [1000973, 149936]), r(a, "11693", [1036606, 153266]), r(a, "11692", [1041045, 155461]), r(a, "11697", [1009230, 143240]), r(a, "10312", [935583, 136827]), r(a, "11239", [1021573, 175899]), r(a, "11236", [1011642, 172461]), r(a, "11220", [979421, 172519]), r(a, "10301", [961077, 172967]), r(a, "10310", [950582, 169591]), r(a, "11426", [1060737, 207724]), r(a, "11365", [1041364, 208618]), r(a, "11001", [1065508, 206646]), r(a, "11375", [1026883, 201848]), r(a, "11427", [1053373, 205042]), r(a, "11374", [1022389, 203771]), r(a, "11366", [1039491, 203659]), r(a, "11423", [1048812, 200621]), r(a, "11428", [1055655, 202207]), r(a, "11432", [1041634, 200093]), a), t.default = f
    },
    70: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                a = o(n(1)),
                i = o(n(2)),
                s = o(n(3)),
                u = o(n(24)),
                l = o(n(38)),
                c = o(n(43)),
                f = function(t) {
                    function n(t, o) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, "body"));
                        e.directions = r, r.append(n.HTML), r.tabs = new l.default({
                            target: "#dir-tabs",
                            tabs: [{
                                tab: "#map-tab",
                                title: "Route Map"
                            }, {
                                tab: "#route-tab",
                                title: "Directions"
                            }]
                        }), (0, a.default)(window).resize(a.default.proxy(r.adjustTabs, r)), r.map = null, r.service = null, r.renderer = null, r.args = null, r.modeBtn = "#transit", r.url = (t || n.GOOGLE_URL) + "&callback=directions.init", r.routeTarget = r.find("#route-tab div.route"), r.lastDir = "", r.styles = o || n.DEFAULT_STYLES, (0, a.default)("#mta").click(a.default.proxy(r.tripPlanHack, r)), (0, a.default)("#mode button").not("#mta").click(a.default.proxy(r.mode, r));
                        var i = (0, a.default)("#fld-from input");
                        return i.keypress(a.default.proxy(r.key, r)).focus(function() {
                            return i.select()
                        }), r
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, s.default), r(n, [{
                        key: "directions",
                        value: function(e) {
                            var t = e.mode || "TRANSIT",
                                n = this.url;
                            return this.args = e, this.adjustTabs(), this.map ? (e.from = e.from || (0, a.default)("#fld-from input").val(), (0, a.default)("#fld-from input").val(e.from), (0, a.default)("#fld-to").html(e.to), (0, a.default)("#fld-facility").html(e.facility), (0, a.default)("#directions").slideDown(), void(e.from && this.lastDir !== e.from + "|" + e.to + "|" + t && (this.lastDir = e.from + "|" + e.to + "|" + t, this.service.route({
                                origin: e.from,
                                destination: e.to,
                                travelMode: google.maps.TravelMode[t]
                            }, a.default.proxy(this.handleResp, this))))) : a.default.getScript(n)
                        }
                    }, {
                        key: "handleResp",
                        value: function(e, t) {
                            if (t === google.maps.DirectionsStatus.OK) {
                                var n = e.routes[0].legs[0],
                                    o = n.start_address.replace(/\, USA/, ""),
                                    r = n.end_address.replace(/\, USA/, "");
                                if (!this.args.origin.coordinate) {
                                    var i = n.start_location;
                                    this.args.origin = {
                                        name: o,
                                        coordinate: [i.lng(), i.lat()],
                                        projection: "EPSG:4326"
                                    }
                                }
                                this.renderer.setOptions({
                                    map: this.map,
                                    panel: (0, a.default)(this.routeTarget).get(0),
                                    directions: e
                                }), (0, a.default)("#fld-from input").val(o), (0, a.default)("#fld-to").html(r)
                            } else(0, a.default)(this.routeTarget).empty(), (new u.default).ok({
                                message: "Could not determine directions from '" + this.args.from + "' to '" + this.args.to + "'"
                            });
                            this.trigger("change", {
                                response: e,
                                status: t
                            })
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.map = new google.maps.Map((0, a.default)("#map-tab div.map").get(0), {
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                backgroundColor: "#D3D3D3",
                                panControl: !1,
                                streetViewControl: !1,
                                mapTypeControl: !1,
                                zoomControl: !1,
                                maxZoom: 18,
                                styles: this.styles
                            }), this.service = new google.maps.DirectionsService, this.renderer = new google.maps.DirectionsRenderer, this.find(".btn-z-in, .btn-z-out").click(a.default.proxy(this.zoom, this)), this.directions(this.args)
                        }
                    }, {
                        key: "adjustTabs",
                        value: function() {
                            if ("block" === (0, a.default)("#directions").css("display") && !i.default.activeElement().isTextInput) {
                                var e = 1 > Math.abs(this.tabs.getContainer().width() - (0, a.default)(window).width());
                                (this.args || {
                                    origin: {}
                                }).origin.coordinate && e ? this.tabs.open("#map-tab") : this.tabs.open("#route-tab")
                            }
                        }
                    }, {
                        key: "zoom",
                        value: function(e) {
                            var t = this.map.getZoom();
                            this.map.setZoom(t + 1 * (0, a.default)(e.target).data("zoom-incr"))
                        }
                    }, {
                        key: "mode",
                        value: function(e) {
                            this.args = this.args || {}, this.modeBtn = e.target, (0, a.default)("#mode button").removeClass("active"), (0, a.default)(this.modeBtn).addClass("active"), this.args.mode = (0, a.default)(this.modeBtn).data("mode"), this.directions(this.args)
                        }
                    }, {
                        key: "key",
                        value: function(e) {
                            13 === e.keyCode && (this.args.from = (0, a.default)("#fld-from input").val(), this.directions(this.args))
                        }
                    }, {
                        key: "tripPlanHack",
                        value: function() {
                            this.args.accessible = !0, (new c.default).directions(this.args)
                        }
                    }]), n
                }();
            f.DEFAULT_GOOGLE_URL = "https://maps.googleapis.com/maps/api/js?&sensor=false&libraries=visualization", f.Request, f.Response, f.HTML = '<div id="directions"><button id="back-to-map" class="btn rad-all" onclick="$(\'#directions\').slideUp()">Back to finder</button><div id="dir-tabs"><div id="route-tab"><div class="fld-lbl">From my location:</div><div id="fld-from"><input class="rad-all" placeholder="Enter an address..."></div><div class="fld-lbl">To <span id="fld-facility"></span>:</div><div id="fld-to"></div><table id="mode"><tbody><tr><td><button id="transit" class="btn-sq rad-all active" data-mode="TRANSIT" title="Get transit directions"><span class="screen-reader-only">get transit directions</span></button></td><td><button id="bike" class="btn-sq rad-all" data-mode="BICYCLING" title="Get bicycling directions"><span class="screen-reader-only">get bicycling directions</span></button></td><td><button id="walk" class="btn-sq rad-all" data-mode="WALKING" title="Get walking directions"><span class="screen-reader-only">get walking directions</span></button></td><td><button id="car" class="btn-sq rad-all" data-mode="DRIVING" title="Get driving directions"><span class="screen-reader-only">get driving directions</span></button></td><td><span class="screen-reader-only">Get accessible transit directions from the MTA </span><buttTripPlanner<svg xmlns="http://www.w3.org/2000/svg" width="656" height="656" viewBox="0 0 656 656"><g transform="translate(-263.86732,-69.7075)"><path d="M 833.556,367.574 C 825.803,359.619 814.97,355.419 803.9,356.025 l -133.981,7.458 73.733,-83.975 c 10.504,-11.962 13.505,-27.908 9.444,-42.157 -2.143,-9.764 -8.056,-18.648 -17.14,-24.324 -0.279,-0.199 -176.247,-102.423 -176.247,-102.423 -14.369,-8.347 -32.475,-6.508 -44.875,4.552 l -85.958,76.676 c -15.837,14.126 -17.224,38.416 -3.097,54.254 14.128,15.836 38.419,17.227 54.255,3.096 l 65.168,-58.131 53.874,31.285 -95.096,108.305 c -39.433,6.431 -74.913,24.602 -102.765,50.801 l 49.66,49.66 c 22.449,-20.412 52.256,-32.871 84.918,-32.871 69.667,0 126.346,56.68 126.346,126.348 0,32.662 -12.459,62.467 -32.869,84.916 l 49.657,49.66 c 33.08,-35.166 53.382,-82.484 53.382,-134.576 0,-31.035 -7.205,-60.384 -20.016,-86.482 l 51.861,-2.889 -12.616,154.75 c -1.725,21.152 14.027,39.695 35.18,41.422 1.059,0.086 2.116,0.127 3.163,0.127 19.806,0 36.621,-15.219 38.257,-35.306 l 16.193,-198.685 c 0.904,-11.071 -3.026,-21.989 -10.775,-29.942 z"/><path  d="m 762.384,202.965 c 35.523,0 64.317,-28.797 64.317,-64.322 0,-35.523 -28.794,-64.323 -64.317,-64.323 -35.527,0 -64.323,28.8 -64.323,64.323 0,35.525 28.795,64.322 64.323,64.322 z"/><path d="m 535.794,650.926 c -69.668,0 -126.348,-56.68 -126.348,-126.348 0,-26.256 8.056,-50.66 21.817,-70.887 l -50.196,-50.195 c -26.155,33.377 -41.791,75.393 -41.791,121.082 0,108.535 87.983,196.517 196.518,196.517 45.691,0 87.703,-15.636 121.079,-41.792 L 606.678,629.11 c -20.226,13.757 -44.63,21.816 -70.884,21.816 z"/></g></svg></td></tr></tbody></table><div class="route"></div></div><div id="map-tab"><div class="map"></div><button class="btn-z-in btn-sq rad-all" data-zoom-incr="1" title="Zoom in"><span class="screen-reader-only">Zoom in</span></button><button class="btn-z-out btn-sq rad-all" data-zoom-incr="-1" title="Zoom out"><span class="screen-reader-only">Zoom out</span></button></div></div></div>', f.DEFAULT_STYLES = [{
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ececec"
                }]
            }, {
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#dcdcdc"
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#585858"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#e8e8e8"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#d8d8d8"
                }]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }]
            }, {
                featureType: "landscape.man_made",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit.line",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi.government",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "poi.park",
                stylers: [{
                    visibility: "on"
                }]
            }], t.default = f
        }).call(this, n(16))
    },
    71: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = o(n(3)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target));
                    return n.getContainer().addClass("chc rad-all"), n.radio = e.radio, n.inputs = null, n.choices = e.choices, n.setChoices(n.choices), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "setChoices",
                    value: function(e) {
                        var n = this;
                        this.getContainer().empty(), this.radio && this.getContainer().attr("role", "radiogroup"), e.forEach(function(e, o) {
                            var r = (0, a.default)(t.HTML),
                                s = i.default.nextId("chc-chc"),
                                u = r.find("input");
                            r.addClass(n.radio ? e.name + "-" + o : e.name), u.attr("id", s).attr("name", e.name).attr("type", n.radio ? "radio" : "checkbox").prop("checked", e.checked).data("choice", e).change(a.default.proxy(n.change, n)), r.find("label").html(e.label).attr("for", s), n.append(r), n.extend(e)
                        }), this.inputs = this.find("input")
                    }
                }, {
                    key: "val",
                    value: function(e) {
                        if (e) return a.default.each(this.inputs, function(t, n) {
                            (0, a.default)(n).prop("checked", !1), e.some(function(e) {
                                var t = (0, a.default)(n).data("choice");
                                if (e.eq(t)) return (0, a.default)(n).prop("checked", !0), !0
                            })
                        }), this.val();
                        var t = [];
                        return a.default.each(this.inputs, function(e, n) {
                            (0, a.default)(n).prop("checked") && t.push((0, a.default)(n).data("choice"))
                        }), t
                    }
                }, {
                    key: "change",
                    value: function() {
                        this.trigger("change", this)
                    }
                }, {
                    key: "extend",
                    value: function(e) {
                        a.default.extend(e, {
                            eq: function(e) {
                                return this.name === e.name && this.label === e.label && JSON.stringify(this.value) === JSON.stringify(e.value)
                            }
                        })
                    }
                }]), t
            }();
        u.Choice, u.Options, u.HTML = '<div class="chc-chc"><input><label></label></div>', t.default = u
    },
    75: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {}
    },
    76: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {}
    },
    77: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n, o = 0; o < t.length; o++)(n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = o(n(1)),
            i = o(n(2)),
            s = o(n(3)),
            u = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.target)),
                        o = e.units,
                        r = i.default.nextId("slider"),
                        s = (0, a.default)("<label></label>").html(e.label || "").attr("for", r);
                    return n.text = (0, a.default)('<input type="text">').attr("value", e.value || e.min).change(a.default.proxy(n.change, n)).keydown(a.default.proxy(n.key, n)).focus(function(e) {
                        return (0, a.default)(e.target).select()
                    }), n.range = (0, a.default)('<input type="range">').attr("id", r).attr("min", e.min).attr("max", e.max).attr("step", e.step || 1).attr("value", n.text.val()).change(a.default.proxy(n.change, n)), o = o ? (0, a.default)("<span>" + o + "</span>") : void 0, n.append(s).append(n.text).append(o).append(n.range).addClass("sld"), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s.default), r(t, [{
                    key: "val",
                    value: function(e) {
                        return void 0 === e ? 1 * this.range.val() : (this.range.val(e), this.change(), this)
                    }
                }, {
                    key: "badKey",
                    value: function(e) {
                        var t = e.keyCode;
                        return -1 === a.default.inArray(t, [8, 9, 37, 39, 46]) && isNaN(String.fromCharCode(e.which || t))
                    }
                }, {
                    key: "key",
                    value: function(e) {
                        38 === e.keyCode ? this.val(1 * this.val() + 1 * this.range.attr("step")) : 40 === e.keyCode ? this.val(this.val() - this.range.attr("step")) : this.badKey(e) ? e.preventDefault() : 13 === e.keyCode && this.val(this.text.val())
                    }
                }, {
                    key: "change",
                    value: function() {
                        this.text.val(this.range.val()), this.trigger("change", this)
                    }
                }]), t
            }();
        u.Options, t.default = u
    },
    78: function() {
        ! function(e) {
            "use strict";

            function t(e) {
                if ("string" != typeof e && (e += ""), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }

            function n(e) {
                return "string" != typeof e && (e += ""), e
            }

            function o(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return h.iterable && (t[Symbol.iterator] = function() {
                    return t
                }), t
            }

            function r(e) {
                this.map = {}, e instanceof r ? e.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t])
                }, this)
            }

            function a(e) {
                return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
            }

            function i(e) {
                return new Promise(function(t, n) {
                    e.onload = function() {
                        t(e.result)
                    }, e.onerror = function() {
                        n(e.error)
                    }
                })
            }

            function s(e) {
                var t = new FileReader,
                    n = i(t);
                return t.readAsArrayBuffer(e), n
            }

            function u(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer
            }

            function l() {
                return this.bodyUsed = !1, this._initBody = function(e) {
                    if (this._bodyInit = e, e)
                        if ("string" == typeof e) this._bodyText = e;
                        else if (h.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                    else if (h.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                    else if (h.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                    else if (h.arrayBuffer && h.blob && b(e)) this._bodyArrayBuffer = u(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!h.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !m(e)) throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = u(e)
                    } else this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : h.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, h.blob && (this.blob = function() {
                    var e = a(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? a(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
                }), this.text = function() {
                    var e = a(this);
                    if (e) return e;
                    if (this._bodyBlob) return function(e) {
                        var t = new FileReader,
                            n = i(t);
                        return t.readAsText(e), n
                    }(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                        for (var t = new Uint8Array(e), n = Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
                        return n.join("")
                    }(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, h.formData && (this.formData = function() {
                    return this.text().then(f)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }

            function c(e, t) {
                var n = (t = t || {}).body;
                if (e instanceof c) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new r(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                } else this.url = e + "";
                if (this.credentials = t.credentials || this.credentials || "omit", (t.headers || !this.headers) && (this.headers = new r(t.headers)), this.method = function(e) {
                        var t = e.toUpperCase();
                        return -1 < g.indexOf(t) ? t : e
                    }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }

            function f(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var n = e.split("="),
                            o = n.shift().replace(/\+/g, " "),
                            r = n.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(o), decodeURIComponent(r))
                    }
                }), t
            }

            function d(e) {
                var t = new r;
                return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                    var n = e.split(":"),
                        o = n.shift().trim();
                    if (o) {
                        var r = n.join(":").trim();
                        t.append(o, r)
                    }
                }), t
            }

            function p(e, t) {
                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && 300 > this.status, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new r(t.headers), this.url = t.url || "", this._initBody(e)
            }
            if (!e.fetch) {
                var h = {
                    searchParams: "URLSearchParams" in e,
                    iterable: "Symbol" in e && "iterator" in Symbol,
                    blob: "FileReader" in e && "Blob" in e && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in e,
                    arrayBuffer: "ArrayBuffer" in e
                };
                if (h.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    b = function(e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    },
                    m = ArrayBuffer.isView || function(e) {
                        return e && -1 < y.indexOf(Object.prototype.toString.call(e))
                    };
                r.prototype.append = function(e, o) {
                    e = t(e), o = n(o);
                    var r = this.map[e];
                    this.map[e] = r ? r + "," + o : o
                }, r.prototype.delete = function(e) {
                    delete this.map[t(e)]
                }, r.prototype.get = function(e) {
                    return e = t(e), this.has(e) ? this.map[e] : null
                }, r.prototype.has = function(e) {
                    return this.map.hasOwnProperty(t(e))
                }, r.prototype.set = function(e, o) {
                    this.map[t(e)] = n(o)
                }, r.prototype.forEach = function(e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, r.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, n) {
                        e.push(n)
                    }), o(e)
                }, r.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), o(e)
                }, r.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, n) {
                        e.push([n, t])
                    }), o(e)
                }, h.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
                var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                c.prototype.clone = function() {
                    return new c(this, {
                        body: this._bodyInit
                    })
                }, l.call(c.prototype), l.call(p.prototype), p.prototype.clone = function() {
                    return new p(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new r(this.headers),
                        url: this.url
                    })
                }, p.error = function() {
                    var e = new p(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var v = [301, 302, 303, 307, 308];
                p.redirect = function(e, t) {
                    if (-1 === v.indexOf(t)) throw new RangeError("Invalid status code");
                    return new p(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.Headers = r, e.Request = c, e.Response = p, e.fetch = function(e, t) {
                    return new Promise(function(n, o) {
                        var r = new c(e, t),
                            a = new XMLHttpRequest;
                        a.onload = function() {
                            var e = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: d(a.getAllResponseHeaders() || "")
                            };
                            e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                            var t = "response" in a ? a.response : a.responseText;
                            n(new p(t, e))
                        }, a.onerror = function() {
                            o(new TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            o(new TypeError("Network request failed"))
                        }, a.open(r.method, r.url, !0), "include" === r.credentials ? a.withCredentials = !0 : "omit" === r.credentials && (a.withCredentials = !1), "responseType" in a && h.blob && (a.responseType = "blob"), r.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), a.send(void 0 === r._bodyInit ? null : r._bodyInit)
                    })
                }, e.fetch.polyfill = !0
            }
        }("undefined" == typeof self ? this : self)
    },
    79: function(e) {
        e.exports = window.shapefile || {}
    },
    80: function(e) {
        e.exports = window.proj4 || {
            defs: function() {}
        }
    },
    81: function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        o(n(1));
        var r = o(n(2)),
            a = o(n(44)),
            i = o(n(59)),
            s = o(n(71)),
            u = o(n(58)),
            l = o(n(3)),
            c = o(n(24)),
            f = o(n(70)),
            d = o(n(14)),
            p = o(n(69)),
            h = o(n(42)),
            y = o(n(57)),
            b = o(n(68)),
            m = o(n(12)),
            g = o(n(56)),
            v = o(n(67)),
            w = o(n(41)),
            _ = o(n(38)),
            O = o(n(66)),
            k = o(n(77)),
            T = o(n(37)),
            x = o(n(76)),
            E = o(n(36)),
            j = o(n(64)),
            P = o(n(75)),
            C = o(n(43));
        window.nyc = r.default, window.nyc.AutoComplete = a.default, window.nyc.BasemapHelper = i.default, window.nyc.Choice = s.default, window.nyc.Collapsible = u.default, window.nyc.Container = l.default, window.nyc.Dialog = c.default, window.nyc.Directions = f.default, window.nyc.EventHandling = d.default, window.nyc.Geoclient = p.default, window.nyc.Geocoder = h.default, window.nyc.LocalStorage = y.default, window.nyc.LocationMgr = b.default, window.nyc.Locator = m.default, window.nyc.MapLocator = g.default, window.nyc.ListPager = v.default, window.nyc.ReplaceTokens = w.default, window.nyc.Share = O.default, window.nyc.Slider = k.default, window.nyc.Tabs = _.default, window.nyc.ZoomSearch = T.default, window.nyc.lang = x.default, window.nyc.lang.Translate = E.default, window.nyc.lang.Goog = j.default, window.nyc.mta = P.default, window.nyc.mta.TripPlanHack = C.default
    },
    96: function(e) {
        e.exports = ol.extent
    }
});;