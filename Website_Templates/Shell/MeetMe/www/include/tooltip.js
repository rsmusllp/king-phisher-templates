var tooltipOptions = {
    showDelay: 10,
    hideDelay: 300,
    effect: "slide",
    duration: 200,
    relativeTo: "element",
    position: 0,
    smartPosition: true,
    offsetX: 0,
    offsetY: 12,
    maxWidth: 400,
    calloutSize: 6,
    calloutPosition: 0.5,
    cssClass: "",
    sticky: false,
    overlay: false,
    license: "241l9"
};

/* JavaScript Tooltip v2015.10.26. Copyright www.menucool.com */
var tooltip = function(B) {
    "use strict";
    var f = "length",
        Eb = "addEventListener",
        ab, oc, Nb = function() {},
        Ib = function(a, c, b) {
            if (a[Eb]) a[Eb](c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        a = {},
        V = function(a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (window.event) window.event.cancelBubble = true
        },
        lc = function(b) {
            var a = b ? b : window.event;
            if (a.preventDefault) a.preventDefault();
            else if (a) a.returnValue = false
        },
        ac = function(d) {
            var a = d.childNodes,
                c = [];
            if (a)
                for (var b = 0, e = a[f]; b < e; b++) a[b].nodeType == 1 && c.push(a[b]);
            return c
        },
        Y = {
            a: 0,
            b: 0
        },
        g = null,
        gc = function(a) {
            if (!a) a = window.event;
            Y.a = a.clientX;
            Y.b = a.clientY
        },
        ec = function(a) {
            if (window.getComputedStyle) var b = window.getComputedStyle(a, null);
            else if (a.currentStyle) b = a.currentStyle;
            else b = a[d];
            return b
        },
        u = "offsetLeft",
        v = "offsetTop",
        ob = "clientWidth",
        nb = "clientHeight",
        A = "appendChild",
        Mb = "display",
        pc = "border",
        I = "opacity",
        S = 0,
        N = "createElement",
        kb = "getElementsByTagName",
        D = "parentNode",
        L = "calloutSize",
        Q = "position",
        Fb = "calloutPosition",
        w = Math.round,
        gb = "overlay",
        G = "sticky",
        U = "hideDelay",
        cb = "onmouseout",
        rb = "onclick",
        Jb = function() {
            this.a = [];
            this.b = null
        },
        O = "firstChild",
        ub = 0,
        m = document,
        T = "getElementById",
        W = navigator,
        P = "innerHTML",
        o = function(a, b) {
            return b ? m[a](b) : m[a]
        },
        E = {},
        Gb = function() {
            var c = 50,
                b = W.userAgent,
                a;
            if ((a = b.indexOf("MSIE ")) != -1) c = parseInt(b.substring(a + 5, b.indexOf(".", a)));
            return c
        },
        tb = Gb() < 9,
        xb = !!W.msMaxTouchPoints,
        lb = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
        Kb = (W.msPointerEnabled || W.pointerEnabled) && xb;
    if (Kb) var Xb = W.msPointerEnabled ? "onmspointerout" : "onpointerOut";
    var Qb = function(a) {
            return a.pointerType == a.MSPOINTER_TYPE_MOUSE || a.pointerType == "mouse"
        },
        nc = "marginTop",
        kc = "marginLeft",
        r = "offsetWidth",
        t = "offsetHeight",
        sb = "documentElement",
        mc = "borderColor",
        pb = "nextSibling",
        d = "style",
        z = "width",
        y = "left",
        s = "top",
        H = "height",
        ic = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        x, mb, C = function(c, a, b) {
            return setTimeout(c, a ? a.showDelay : b)
        },
        bb = function(a) {
            clearTimeout(a);
            return null
        };
    Jb.prototype = {
        d: {
            b: Nb,
            c: function(a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        e: function(i, d, h, f) {
            for (var a = [], g = h - d, c = Math.ceil((l.duration || 9) / 15), e, b = 1; b <= c; b++) {
                e = d + f.c(b / c) * g;
                a.push(e)
            }
            a.d = 0;
            return a
        },
        f: function() {
            this.b == null && this.g()
        },
        g: function() {
            this.h();
            var a = this;
            this.b = setInterval(function() {
                a.h()
            }, 15)
        },
        h: function() {
            var a = this.a[f];
            if (a) {
                for (var c = 0; c < a; c++) this.i(this.a[c]);
                while (a--) {
                    var b = this.a[a];
                    if (b.c.d == b.c[f]) {
                        b.d();
                        this.a.splice(a, 1)
                    }
                }
            } else {
                clearInterval(this.b);
                this.b = null
            }
        },
        i: function(a) {
            if (a.c.d < a.c[f]) {
                var c = a.b,
                    b = a.c[a.c.d];
                if (a.b == I) {
                    a.a.op = b;
                    if (tb) {
                        c = "filter";
                        b = "alpha(opacity=" + w(b * 100) + ")"
                    }
                } else b += "px";
                a.a[d][c] = b;
                a.c.d++
            }
        },
        j: function(e, b, d, f, a) {
            a = this.k(this.d, a);
            var c = this.e(b, d, f, a);
            this.a.push({
                a: e,
                b: b,
                c: c,
                d: a.b
            });
            this.f()
        },
        k: function(c, b) {
            b = b || {};
            var a, d = {};
            for (a in c) d[a] = b[a] !== undefined ? b[a] : c[a];
            return d
        }
    };
    var fb = new Jb,
        h = function(d, b, c, e, a) {
            fb.j(d, b, c, e, a)
        },
        hc = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        ib = function(d, a) {
            var c = [];
            if (ub) return ub;
            for (var b = 0; b < d[f]; b++) c[c[f]] = String.fromCharCode(d.charCodeAt(b) - (a && a > 7 ? a : 3));
            return c.join("")
        },
        Ob = function(a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        Tb = function(e, c) {
            var d = function(a) {
                    for (var c = a.substr(0, a[f] - 1), e = a.substr(a[f] - 1, 1), d = "", b = 0; b < c[f]; b++) d += c.charCodeAt(b) - e;
                    return unescape(d)
                },
                a = Ob(m.domain) + Math.random(),
                b = d(a);
            mb = "%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%";
            if (b[f] == 39) try {
                a = (new Function("$", "_", ib(mb))).apply(this, [b, c]);
                mb = a
            } catch (g) {}
        },
        fc = function(c, a) {
            var b = function(b) {
                var a = b.charCodeAt(0).toString();
                return a.substring(a[f] - 1)
            };
            return c + b(a[parseInt(ib("4"))]) + a[2] + b(a[0])
        },
        c, b, e, X, i, k, J = 0,
        jc = 1,
        l, R = null,
        F = null,
        db = function() {
            if (R != null) R = bb(R)
        },
        q = function() {
            if (F != null) F = bb(F)
        },
        eb = function(a, b) {
            if (a) {
                a.op = b;
                if (tb) a[d].filter = "alpha(opacity=" + b * 100 + ")";
                else a[d][I] = b
            }
        },
        Pb = function(a, c, b, d, g, e, h, f) {
            var j = b >= a,
                l = d >= c,
                m = j ? b - a < g : a - b < h,
                n = l ? d - c < e : c - d < f,
                i = m ? b - a : j ? g : -h,
                k = n ? d - c : l ? e : -f;
            if (m && n)
                if (Math.abs(i) > Math.abs(k)) i = j ? g : -h;
                else k = l ? e : -f;
            return [i, k]
        },
        dc = function(m, i, l) {
            Z(b, 1);
            var a = o(N, "div");
            a[d][z] = m + "px";
            e = o(N, "div");
            e.className = "mcTooltipInner";
            if (l == 1) {
                e[P] = i;
                var g = 1
            } else {
                var c = o(T, i);
                if (c[D].w) e = c[D];
                else {
                    e.w = c[D];
                    e[A](c);
                    g = 1
                }
            }
            if (tb) {
                var j = e[kb]("select"),
                    k = j[f];
                while (k--) j[k][cb] = V
            }
            a[A](e);
            b[A](a);
            if (e[r] < 20) {
                var h = b.className;
                b.className = ""
            }
            e[d][z] = e[r] + (g ? 1 : 0) + "px";
            e[d][H] = e[t] + (g ? 1 : 0) + "px";
            e[d][y] = e[d][s] = "auto";
            e = b.insertBefore(e, b[O]);
            e[d][Q] = "absolute";
            a = b.removeChild(a);
            a = null;
            if (h) b.className = h;
            return e
        },
        Rb = function(a) {
            if (a.w) {
                a.w[A](a);
                eb(a, 1)
            } else {
                a = a[D].removeChild(a);
                a = null
            }
        },
        Z = function(b, c) {
            for (var a = c; a < b.childNodes[f]; a++) Rb(b.childNodes[a])
        },
        j = function(b, a) {
            b[d][Mb] = a ? "block" : "none"
        },
        Wb = function() {
            c.v = S = 0;
            j(X, 0);
            j(c, 0);
            j(i, 0);
            j(J, 0);
            Z(b, 0)
        },
        Vb = function() {
            if (document.styleSheets && document.styleSheets.length) {
                var c = document.styleSheets[0];
                if (typeof b.style.animationName != "undefined") var a = "";
                if (typeof b.style.webkitAnimationName != "undefined") a = "-webkit-";
                else return;
                var d = "@" + a + "keyframes mcttSpinner {from{transform:rotate(0deg);} to{transform:rotate(360deg);}}";
                c.insertRule(d, 0);
                var e = "div#tooltipAjaxSpin {margin:30px;font-size:0;width:20px;height:20px;border-width:3px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;" + a + "animation:mcttSpinner .6s linear infinite;}";
                c.insertRule(e, 0)
            }
        },
        n = null,
        Zb = {
            a: function(d, b, a) {
                var e = null,
                    h = null,
                    i = null,
                    c = "html";
                if (a) {
                    h = a.success || null;
                    c = a.responseType || "html";
                    e = a.context && h ? a.context : null;
                    i = a.fail || null
                }
                n = this.b();
                n.onreadystatechange = function() {
                    if (n && n.readyState === 4) {
                        q();
                        if (n.status === 200) {
                            if (l == d && R) {
                                q();
                                var j = c.toLowerCase() == "xml" ? n.responseXML : n.responseText,
                                    k = j;
                                if (c.toLowerCase() == "json") k = eval("(" + j + ")");
                                if (c == "html") {
                                    var r = b.match(/.+#([^?]+)/);
                                    if (r) {
                                        var t = function(e, b) {
                                                var d = null;
                                                if (b.id == e) return b;
                                                for (var c = b[kb]("*"), a = 0, g = c[f]; a < g; a++)
                                                    if (c[a].id == e) {
                                                        d = c[a];
                                                        break
                                                    }
                                                return d
                                            },
                                            p = m[N]("div");
                                        p[P] = j;
                                        var o = t(r[1], p);
                                        if (o) j = k = o[P];
                                        p = null
                                    }
                                    if (!o) {
                                        var s = j.split(/<\/?body[^>]*>/i);
                                        if (s[f] > 1) j = k = s[1]
                                    }
                                }
                                if (h) j = a.success(k, e);
                                g.f(d, j, 1)
                            }
                        } else if (i) g.f(d, i(e), 1);
                        else g.f(d, "Failed to get data.", 1);
                        n = null
                    }
                };
                if (b.indexOf("#") != -1 && Gb() < 19) b = b.replace("#", "?#");
                n.open("GET", b, true);
                n.send(null)
            },
            b: function() {
                var a;
                try {
                    if (window.XMLHttpRequest) a = new XMLHttpRequest;
                    else a = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (b) {
                    throw new Error("AJAX not supported.");
                }
                return a
            }
        },
        Lb = function() {
            c = o(N, "div");
            c.id = "mcTooltipWrapper";
            c[P] = '<div id="mcTooltip"><div>&nbsp;</div></div><div id="mcttCo"><b></b></div><div id="mcttCloseButton"></div>';
            x = m.body;
            k = x;
            k[A](c);
            a.a = B.license || "4321";
            b = c[O];
            c.b = c.c = c.v = 0;
            Tb(c, a.a);
            X = c.lastChild;
            i = b[pb];
            j(c, 1);
            this.m(B, 1);
            j(c, 0);
            var e = this.k();
            ab = function(a) {
                q();
                e.i();
                V(a)
            };
            X[rb] = ab;
            this.l();
            J[rb] = function(a) {
                if (l[gb] !== 1) ab(a);
                else V(a)
            };
            b[cb] = function() {
                R != 1 && db();
                !l[G] && e.a(l[U])
            };
            b[rb] = V;
            Ib(m, "click", function(a) {
                if (l && l[G] !== 1) F = C(function() {
                    ab(a)
                }, 0, l[U] + 100)
            });
            eb(c, 0);
            c[d].visibility = "visible";
            Sb()
        },
        bc = function() {
            var b = m.getElementsByTagName("head");
            if (b[f]) {
                var a = m.createElement("style");
                b[0].appendChild(a);
                return a.sheet ? a.sheet : a.styleSheet
            } else return 0
        },
        cc = function() {
            if (typeof b.style.transform != "undefined") a = "";
            else if (typeof b.style.webkitTransform != "undefined") var a = "-webkit-";
            else if (typeof b.style.msTransform != "undefined") var a = "-ms-";
            else a = 0;
            return a
        },
        Db = function(a) {
            a = a.replace("__", E.prefix);
            E.a.insertRule(a, 0)
        },
        Sb = function() {
            E.prefix = cc();
            E.a = bc();
            if (E.a) {
                var a = "div#mcttCloseButton",
                    b = "position:absolute;left:auto;cursor:pointer;top:" + B[L] + "px;right:" + B[L] + "px;";
                if ("insertRule" in E.a) {
                    Db(a + "{" + b + "}");
                    Db("div#mcttCloseButton::after{content:'+';display:block;position:absolute;__transform:rotate(45deg);}")
                } else {
                    E.a.addRule(a, b, 0);
                    E.a.addRule("div#mcttCloseButton:after", "content:'X';display:block;position:absolute;", 0)
                }
            }
        },
        Ab = function(a) {
            if (a[D]) {
                var b = a[D].nodeName.toLowerCase();
                return b != "form" && b != "body" ? Ab(a[D]) : a[D]
            } else return x
        },
        p = function(c, b) {
            var a = c.getBoundingClientRect();
            return b ? a[s] : a[y]
        },
        K = function(b) {
            return b ? m[sb][nb] : m[sb][ob]
        },
        Yb = function() {
            var a = m[sb];
            return [window.pageXOffset || a.scrollLeft, window.pageYOffset || a.scrollTop]
        },
        hb = function(c, b, e, f, g) {
            i[d][c ? z : H] = a.f * 1.55 + "px";
            b[d].webkitTransform = b[d].transform = "translate(" + f + "px," + g + "px) rotate(" + e + "deg)"
        },
        Ub = function(h, g, c, d) {
            var f = K(0),
                e = K(1),
                a = 0,
                b = 0;
            if (k != x) {
                a = p(k, 0) - k[u];
                b = p(k, 1) - k[v]
            }
            if (c + a + h > f) c = f - h - a;
            if (c + a < 0) c = -a;
            if (d + b + g > e) d = e - g - b;
            if (d + b < 0) d = -b;
            return {
                l: c,
                t: d
            }
        };
    Lb.prototype = {
        j: function() {
            if (typeof i[d].transform == "undefined" && typeof i[d].webkitTransform == "undefined") {
                i[d][z] = "0";
                return
            }
            var b = i[O];
            i[d][z] = i[d][H] = b[d][z] = b[d][H] = a.f + "px";
            b[d].borderLeft = b[d].borderTop = a.b + "px solid " + a.d;
            b[d].backgroundColor = a.c;
            switch (a.e) {
                case 0:
                    hb(1, b, -135, a.f / 4, -a.f / 2);
                    break;
                case 2:
                    hb(1, b, 45, a.f / 4, a.f / 2);
                    break;
                case 3:
                    hb(0, b, 135, -a.f / 2, a.f / 4);
                    break;
                default:
                    hb(0, b, -45, a.f / 2, a.f / 4)
            }
        },
        d: function(a, d, b) {
            db();
            q();
            F = C(function() {
                (S != 1 || a != c.v) && g.f(a, d, b)
            }, a)
        },
        e: function(a, c, b) {
            db();
            q();
            F = C(function() {
                g.g(a, c, b)
            }, a)
        },
        f: function(g, C, B) {
            j(c, 1);
            S = 1;
            q();
            fb.a = [];
            j(J, g[gb]);
            j(X, g[G]);
            lb && j(X, 1);
            var f = this.n(g, C, B);
            if (c.v) {
                h(c, y, c[u], f.l);
                h(c, s, c[v], f.t);
                h(b, z, b.b, b.tw);
                h(b, H, b.c, b.th);
                h(i, y, i[u], f.x);
                h(i, s, i[v], f.y)
            } else if (a.e == 4) {
                var D = p(g, 0),
                    E = p(g, 1);
                h(c, y, D, f.l);
                h(c, s, E, f.t);
                h(b, z, g[r], b.tw);
                h(b, H, g[t], b.th)
            } else {
                if (a.e > 4) h(c, s, f.t + 6, f.t);
                else c[d][s] = f.t + "px";
                c[d][y] = f.l + "px";
                b[d][z] = b.tw + "px";
                b[d][H] = b.th + "px";
                i[d][y] = f.x + "px";
                i[d][s] = f.y + "px"
            }
            if (g.effect == "slide") {
                var k, l;
                if (!c.v && a.e < 4) {
                    switch (a.e) {
                        case 0:
                            k = 0;
                            l = 1;
                            break;
                        case 1:
                            k = -1;
                            l = 0;
                            break;
                        case 2:
                            k = 0;
                            l = -1;
                            break;
                        case 3:
                            k = 1;
                            l = 0
                    }
                    var n = [k * e[r], l * e[t]]
                } else {
                    if (!c.v && a.e > 3) {
                        k = g[u];
                        l = g[v]
                    } else {
                        k = c[u];
                        l = c[v];
                        if (a.e > 3) {
                            k += c.v[u] - g[u];
                            l += c.v[v] - g[v]
                        }
                    }
                    var x = a.l + a.b + a.b,
                        A = a.m + a.b + a.b;
                    n = Pb(k, l, f.l, f.t, b.b + x, b.c + A, b.tw + x, b.th + A)
                }
                var o = a.l / 2,
                    w = a.m / 2;
                h(e, y, n[0] + o, o);
                h(e, s, n[1] + w, w);
                var m = e[pb];
                if (m) {
                    h(m, y, o, -n[0] + o, {
                        b: function() {
                            Z(b, 1)
                        }
                    });
                    h(m, s, w, -n[1] + w)
                }
                eb(e, 1)
            } else {
                h(e, I, e.op - .1, 1, {
                    b: function() {
                        Z(b, 1)
                    }
                });
                var m = e[pb];
                m && h(m, I, m.op, 0)
            }
            h(c, I, c.op, 1);
            c.v = g
        },
        g: function(a, c, b) {
            n = null;
            q();
            F = C(function() {
                g.f(a, '<div id="tooltipAjaxSpin">&nbsp;</div>', 1)
            }, a);
            R = 1;
            Zb.a(a, c, b)
        },
        a: function(a) {
            q();
            F = C(function() {
                g.i()
            }, 0, a)
        },
        i: function() {
            S = -1;
            db();
            fb.a = [];
            h(c, I, c.op, 0, {
                b: Wb
            })
        },
        l: function() {
            if (o(T, "mcOverlay") == null) {
                J = o(N, "div");
                J.id = "mcOverlay";
                x[A](J);
                J[d][Q] = "fixed"
            }
        },
        m: function(f, g) {
            var h = 0;
            if (g || a.e != f[Q] || a.f != f[L]) {
                a.e = f[Q];
                a.f = f[L];
                c[d].padding = a.f + "px";
                h = 1
            }
            if (g || b.className != f.cssClass) {
                b.className = f.cssClass ? f.cssClass.replace(/^\s+|\s+$/g, "") : "";
                var k = ec(b),
                    l = Math.ceil(parseFloat(k.borderLeftWidth)),
                    n = k.backgroundColor,
                    m = k.borderLeftColor;
                if (g || a.b != l || a.c != n || a.d != m) {
                    a.b = l;
                    a.c = n;
                    a.d = m;
                    h = 1
                }
                a.l = g ? b[ob] - b[O][r] : e[u] * 2;
                a.m = g ? b[nb] - b[O][t] : e[v] * 2
            }
            if (h)
                if (a.e < 4) this.j();
                else j(i, 0)
        },
        k: function() {
            return (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", function(e) {
                var d = [];
                b.onmouseover = function(a) {
                    if (!l[G]) {
                        q();
                        if (S == -1) {
                            fb.a = [];
                            h(c, I, c.op, 1)
                        }
                    }
                    V(a)
                };
                for (var a = 0, g = e[f]; a < g; a++) d[d[f]] = String.fromCharCode(e.charCodeAt(a) - 4);
                return d.join("")
            }("zev$pAi,k,g,+kvthpu+0405--\u0080\u0080+6+-?zev$qAe2e\u0080\u0080+55+0rAtevwiMrx,q2glevEx,4--0sA,,k,g,+kvthpu+0405--\u0080\u0080+px+-2vitpegi,h_r16a0l_r16a--2wtpmx,++-?mj,e2e%Aj,r/+8+0s--qAQexl_g,+yhukvt+-a,-?mj,q@259-wixXmqisyx,jyrgxmsr,-m,40g,+Ch'oylmD.o{{wA66~~~5tlu|jvvs5jvt6.E[vvs{pw'W|yjohzl'YltpuklyC6hE+-0tswmxmsr>:\u0081-?\u008106444-?\u0081\u0081vixyvr$xlmw?"))).apply(this, [a, O, ib, hc, Ob, fc, o, ic, jb])
        },
        n: function(g, z, s) {
            var n = x;
            if (s == 2) {
                var B = o(T, z),
                    y = B[kb]("*"),
                    C = y[f];
                while (C--)
                    if (y[C].type == "submit") n = Ab(B)
            }
            if (k != n) {
                k = n;
                k[A](c)
            }
            b.b = b[ob] - a.l;
            b.c = b[nb] - a.m;
            e = dc(g.maxWidth, z, s);
            this.m(g, 0);
            b.tw = e[r];
            b.th = e[t];
            g.effect == "fade" && eb(e, 0);
            var q = b.tw + a.l + a.b + a.b,
                p = b.th + a.m + a.b + a.b,
                l = this.p(g, q, p);
            if (g.smartPosition) var d = Ub(q + a.f, p + a.f, l.x, l.y);
            else d = {
                l: l.x,
                t: l.y
            };
            var h = g[Q],
                m = this.u(h, g[Fb], q, p);
            if (g.smartPosition && h < 4) {
                var v = d.l - l.x,
                    w = d.t - l.y;
                if (h == 0 || h == 2) m[0] -= v;
                else v && j(i, 0);
                if (h == 1 || h == 3) m[1] -= w;
                else w && j(i, 0)
            }
            if (k == x) {
                var u = Yb();
                d.l = d.l + u[0];
                d.t = d.t + u[1]
            }
            d.x = m[0];
            d.y = m[1];
            return d
        },
        p: function(b, z, y) {
            var c, d, h, g, o = b[Q],
                m = b[Fb];
            if (o < 4)
                if (b.nodeType != 1) c = d = h = g = 0;
                else if (b.relativeTo == "mouse") {
                c = Y.a;
                d = Y.b;
                if (Y.a == null) {
                    c = p(b, 0) + w(b[r] / 2);
                    d = p(b, 1) + w(b[t] / 2)
                }
                h = 0;
                g = 0
            } else {
                var i = b,
                    e = ac(b);
                if (e[f]) {
                    e = e[0];
                    if (e[r] >= b[r] || e[t] >= b[t]) i = e
                }
                c = p(i, 0);
                d = p(i, 1);
                h = i[r];
                g = i[t]
            }
            var n = 20,
                l = z + 2 * b[L],
                j = y + 2 * b[L];
            switch (o) {
                case 0:
                    c += w(h / 2 - l * m);
                    d -= j + n;
                    break;
                case 2:
                    c += w(h / 2 - l * m);
                    d += g + n;
                    break;
                case 3:
                    c -= l + n;
                    d += w(g / 2 - j * m);
                    break;
                case 4:
                    c = w((K(0) - l) / 2);
                    d = w((K(1) - j) / 2);
                    break;
                case 5:
                    c = d = 0;
                    break;
                case 6:
                    c = K(0) - l - Math.ceil(a.l / 2);
                    d = K(1) - j - Math.ceil(a.m / 2);
                    break;
                case 1:
                default:
                    c += h + n;
                    d += w(g / 2 - j * m)
            }
            var q = 0,
                s = 0;
            if (k != x) {
                q = k[u] - p(k, 0);
                s = k[v] - p(k, 1)
            }
            return {
                x: c + q + b.offsetX,
                y: d + s + b.offsetY
            }
        },
        u: function(f, c, e, d) {
            j(i, f < 4);
            var b = [0, 0];
            switch (f) {
                case 0:
                    b = [e * c, d + a.f - a.b - 1];
                    break;
                case 1:
                    b = [a.b, d * c];
                    break;
                case 2:
                    b = [e * c, a.b];
                    break;
                case 3:
                    b = [e + a.f - a.b - 1, d * c]
            }
            return b
        }
    };
    var Bb = function() {
            if (g == null) {
                if (typeof console !== "undefined" && typeof console.log === "function") {
                    var a = console.log;
                    console.log = function() {
                        a.call(this, ++ub, arguments)
                    }
                }
                g = new Lb;
                if (a) console.log = a;
                Vb()
            }
            if (l && l.m && c[P].indexOf(ib("kdvh#Uh")) != -1) g.i = Nb;
            return g
        },
        vb = function(d, c, b) {
            b = b || {};
            var a;
            for (a in c) d[a] = b[a] !== undefined ? b[a] : c[a]
        },
        qb = 0,
        M, Hb = function(a) {
            if (!a) {
                a = o(N, "div");
                a.m = 1;
                a[d][Mb] = "none";
                x[A](a)
            }
            if (typeof a === "string") a = o(T, a);
            l = a;
            return a
        },
        wb = function(b, a) {
            return lb && b.target == a ? 0 : 1
        },
        yb = function(a, b) {
            vb(a, B, b);
            if (xb || lb) {
                a.showDelay = 1;
                a[U] = 30
            }
            if (a[gb])
                if (!a[G]) a[G] = a[gb];
            if (a[G]) a[cb] = function(a) {
                wb(a, this) && q()
            };
            else if (Kb) a[Xb] = function(a) {
                Qb(a) && g.a(this[U])
            };
            else a[cb] = function(a) {
                wb(a, this) && g.a(this[U])
            };
            if (a.relativeTo == "mouse") a.onmousemove = gc;
            a.set = 1
        },
        jb = function(a, c, h) {
            a = Hb(a);
            var b = 0;
            if (c.charAt(0) == "#") {
                if (c[f] > 2 && c.charAt(1) == "#") b = 2;
                else b = 1;
                var d = c.substring(b),
                    e = o(T, d);
                if (e) {
                    if (b == 2) c = e[P]
                } else b = -1
            }
            if (!a || !g || b == -1) {
                if (++qb < 40) M = C(function() {
                    jb(a, c, h)
                }, 0, 90)
            } else {
                M = bb(M);
                !a.set && yb(a, h);
                if (b == 1) g.d(a, d, 2);
                else g.d(a, c, 1)
            }
        },
        zb = function(a, d, b, c) {
            a = Hb(a);
            if (!a || !g) {
                if (++qb < 40) M = C(function() {
                    zb(a, d, b, c)
                }, 0, 90)
            } else {
                M = bb(M);
                !a.set && yb(a, c);
                g.e(a, d, b)
            }
        };
    Ib(window, "load", Bb);
    var Cb = function(a) {
        if (++qb < 20)
            if (!g) C(function() {
                Cb(a)
            }, 0, 90);
            else {
                vb(B, B, a);
                j(c, 1);
                g.m(B, 0);
                j(c, 0)
            }
    };
    return {
        changeOptions: function(L_options) {
            Cb(L_options)
        },
        pop: function(L_sender, L_text, L_options) {
            jb(L_sender, L_text, L_options)
        },
        ajax: function(L_sender, L_url, L_ajaxSettings, L_options) {
            zb(L_sender, L_url, L_ajaxSettings, L_options)
        },
        hide: function() {
            var a = Bb();
            a.i()
        }
    }
}(tooltipOptions)