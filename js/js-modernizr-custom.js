!(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, i, s, a;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = C[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++)
          (s = e[i]),
            (a = s.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = o)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = o)),
            h.push((o ? "" : "no-") + a.join("-"));
      }
  }
  function i(e) {
    var n = x.className,
      t = Modernizr._config.classPrefix || "";
    if ((_ && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      _ ? (x.className.baseVal = n) : (x.className = n));
  }
  function s(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function a() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : _
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function l(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function u(e, n, t) {
    var o;
    for (var i in e)
      if (e[i] in n)
        return t === !1
          ? e[i]
          : ((o = n[e[i]]), r(o, "function") ? f(o, t || n) : o);
    return !1;
  }
  function d(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function p(n, t, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, n, t);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(
          i,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];
    return o;
  }
  function c() {
    var e = n.body;
    return e || ((e = a(_ ? "svg" : "body")), (e.fake = !0)), e;
  }
  function m(e, t, r, o) {
    var i,
      s,
      l,
      f,
      u = "modernizr",
      d = a("div"),
      p = c();
    if (parseInt(r, 10))
      for (; r--; )
        (l = a("div")), (l.id = o ? o[r] : u + (r + 1)), d.appendChild(l);
    return (
      (i = a("style")),
      (i.type = "text/css"),
      (i.id = "s" + u),
      (p.fake ? p : d).appendChild(i),
      p.appendChild(d),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(n.createTextNode(e)),
      (d.id = u),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (f = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(p)),
      (s = t(d, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (x.style.overflow = f), x.offsetHeight)
        : d.parentNode.removeChild(d),
      !!s
    );
  }
  function v(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(d(n[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--; ) i.push("(" + d(n[o]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        m(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == p(e, null, "position");
          }
        )
      );
    }
    return t;
  }
  function g(e, n, o, i) {
    function f() {
      d && (delete N.style, delete N.modElem);
    }
    if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
      var u = v(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (
      var d, p, c, m, g, y = ["modernizr", "tspan", "samp"];
      !N.style && y.length;

    )
      (d = !0), (N.modElem = a(y.shift())), (N.style = N.modElem.style);
    for (c = e.length, p = 0; c > p; p++)
      if (
        ((m = e[p]),
        (g = N.style[m]),
        l(m, "-") && (m = s(m)),
        N.style[m] !== t)
      ) {
        if (i || r(o, "undefined")) return f(), "pfx" == n ? m : !0;
        try {
          N.style[m] = o;
        } catch (h) {}
        if (N.style[m] != g) return f(), "pfx" == n ? m : !0;
      }
    return f(), !1;
  }
  function y(e, n, t, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + b.join(s + " ") + s).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? g(a, n, o, i)
      : ((a = (e + " " + z.join(s + " ") + s).split(" ")), u(a, n, t));
  }
  var h = [],
    C = [],
    S = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        C.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        C.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = S), (Modernizr = new Modernizr());
  var x = n.documentElement,
    _ = "svg" === x.nodeName.toLowerCase(),
    w = "Moz O ms Webkit",
    b = S._config.usePrefixes ? w.split(" ") : [];
  S._cssomPrefixes = b;
  var E = function (n) {
    var r,
      o = prefixes.length,
      i = e.CSSRule;
    if ("undefined" == typeof i) return t;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, "")),
      (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in i)
    )
      return "@" + n;
    for (var s = 0; o > s; s++) {
      var a = prefixes[s],
        l = a.toUpperCase() + "_" + r;
      if (l in i) return "@-" + a.toLowerCase() + "-" + n;
    }
    return !1;
  };
  S.atRule = E;
  var z = S._config.usePrefixes ? w.toLowerCase().split(" ") : [];
  S._domPrefixes = z;
  var P = { elem: a("modernizr") };
  Modernizr._q.push(function () {
    delete P.elem;
  });
  var N = { style: P.elem.style };
  Modernizr._q.unshift(function () {
    delete N.style;
  }),
    (S.testAllProps = y);
  var k = (S.prefixed = function (e, n, t) {
    return 0 === e.indexOf("@")
      ? E(e)
      : (-1 != e.indexOf("-") && (e = s(e)), n ? y(e, n, t) : y(e, "pfx"));
  });
  Modernizr.addTest("backgroundblendmode", k("backgroundBlendMode", "text")),
    o(),
    i(h),
    delete S.addTest,
    delete S.addAsyncTest;
  for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
  e.Modernizr = Modernizr;
})(window, document);
