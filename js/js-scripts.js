!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function i(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function s(t) {
    return "string" == typeof t;
  }
  function n(t) {
    return "function" == typeof t;
  }
  function r(t) {
    return "number" == typeof t;
  }
  function a(t) {
    return void 0 === t;
  }
  function o(t) {
    return "object" == typeof t;
  }
  function l(t) {
    return !1 !== t;
  }
  function c() {
    return "undefined" != typeof window;
  }
  function d(t) {
    return n(t) || s(t);
  }
  function h(t) {
    return (Tt = _e(t, de)) && Di;
  }
  function u(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function p(t, e) {
    return !e && console.warn(t);
  }
  function f(t, e) {
    return (t && (de[t] = e) && Tt && (Tt[t] = e)) || de;
  }
  function m() {
    return 0;
  }
  function g(t) {
    var e,
      i,
      s = t[0];
    if ((o(s) || n(s) || (t = [t]), !(e = (s._gsap || {}).harness))) {
      for (i = be.length; i-- && !be[i].targetTest(s); );
      e = be[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Ne(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  }
  function v(t) {
    return t._gsap || g($e(t))[0]._gsap;
  }
  function y(t, e, i) {
    return (i = t[e]) && n(i)
      ? t[e]()
      : (a(i) && t.getAttribute && t.getAttribute(e)) || i;
  }
  function w(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function b(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function x(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function _(t, e) {
    var i = e.charAt(0),
      s = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      "+" === i ? t + s : "-" === i ? t - s : "*" === i ? t * s : t / s
    );
  }
  function E(t, e) {
    for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i; );
    return s < i;
  }
  function T() {
    var t,
      e,
      i = me.length,
      s = me.slice(0);
    for (ge = {}, t = me.length = 0; t < i; t++)
      (e = s[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function S(t, e, i, s) {
    me.length && !yt && T(),
      t.render(e, i, s || (yt && e < 0 && (t._initted || t._startAt))),
      me.length && !yt && T();
  }
  function C(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(le).length < 2
      ? e
      : s(t)
      ? t.trim()
      : t;
  }
  function M(t) {
    return t;
  }
  function k(t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  }
  function $(t, e) {
    for (var i in e)
      "__proto__" !== i &&
        "constructor" !== i &&
        "prototype" !== i &&
        (t[i] = o(e[i]) ? $(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  }
  function O(t, e) {
    var i,
      s = {};
    for (i in t) i in e || (s[i] = t[i]);
    return s;
  }
  function z(t) {
    var e = t.parent || bt,
      i = t.keyframes
        ? (function (t) {
            return function (e, i) {
              for (var s in i)
                s in e ||
                  ("duration" === s && t) ||
                  "ease" === s ||
                  (e[s] = i[s]);
            };
          })(ie(t.keyframes))
        : k;
    if (l(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function P(t, e, i, s, n) {
    void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
    var r,
      a = t[s];
    if (n) for (r = e[n]; a && a[n] > r; ) a = a._prev;
    return (
      a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[s] = e),
      (e._prev = a),
      (e.parent = e._dp = t),
      e
    );
  }
  function L(t, e, i, s) {
    void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
    var n = e._prev,
      r = e._next;
    n ? (n._next = r) : t[i] === e && (t[i] = r),
      r ? (r._prev = n) : t[s] === e && (t[s] = n),
      (e._next = e._prev = e.parent = null);
  }
  function A(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function I(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  }
  function D(t, e, i, s) {
    return (
      t._startAt &&
      (yt
        ? t._startAt.revert(ue)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, s))
    );
  }
  function R(t) {
    return t._repeat ? Ee(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function B(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function Y(t) {
    return (t._end = x(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || Gt) || 0)
    ));
  }
  function X(t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = x(
          i._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Y(t),
        i._dirty || I(i, t)),
      t
    );
  }
  function W(t, e) {
    var i;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((i = B(t.rawTime(), e)),
        (!e._dur || Me(0, e.totalDuration(), i) - e._tTime > Gt) &&
          e.render(i, !0)),
      I(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -Gt;
    }
  }
  function j(t, e, i, s) {
    return (
      e.parent && A(e),
      (e._start = x(
        (r(i) ? i : i || t !== bt ? Ce(t, i, e) : t._time) + e._delay
      )),
      (e._end = x(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      P(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Te(e) || (t._recent = e),
      s || W(t, e),
      t._ts < 0 && X(t, t._tTime),
      t
    );
  }
  function q(t, e) {
    return (
      (de.ScrollTrigger || u("scrollTrigger", e)) &&
      de.ScrollTrigger.create(e, t)
    );
  }
  function H(t, e, i, s, n) {
    return (
      ei(t, e, n),
      t._initted
        ? !i &&
          t._pt &&
          !yt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          Ct !== De.frame
          ? (me.push(t), (t._lazy = [n, s]), 1)
          : void 0
        : 1
    );
  }
  function F(t, e, i, s) {
    var n = t._repeat,
      r = x(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !s && (t._time *= r / t._dur),
      (t._dur = r),
      (t._tDur = n ? (n < 0 ? 1e10 : x(r * (n + 1) + t._rDelay * n)) : r),
      0 < a && !s && X(t, (t._tTime = t._tDur * a)),
      t.parent && Y(t),
      i || I(t.parent, t),
      t
    );
  }
  function N(t) {
    return t instanceof Ue ? I(t) : F(t, t._dur);
  }
  function V(t, e, i) {
    var s,
      n,
      a = r(e[1]),
      o = (a ? 2 : 1) + (t < 2 ? 0 : 1),
      c = e[o];
    if ((a && (c.duration = e[1]), (c.parent = i), t)) {
      for (s = c, n = i; n && !("immediateRender" in s); )
        (s = n.vars.defaults || {}), (n = l(n.vars.inherit) && n.parent);
      (c.immediateRender = l(s.immediateRender)),
        t < 2 ? (c.runBackwards = 1) : (c.startAt = e[o - 1]);
    }
    return new ri(e[0], c, e[1 + o]);
  }
  function G(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function U(t, e) {
    return s(t) && (e = ce.exec(t)) ? e[1] : "";
  }
  function Q(t, e) {
    return (
      t &&
      o(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && o(t[0]))) &&
      !t.nodeType &&
      t !== xt
    );
  }
  function K(t) {
    return (
      (t = $e(t)[0] || p("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return $e(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? p("Invalid scope") || Et.createElement("div")
            : t
        );
      }
    );
  }
  function Z(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function J(t) {
    if (n(t)) return t;
    var e = o(t) ? t : { each: t },
      i = je(e.ease),
      r = e.from || 0,
      a = parseFloat(e.base) || 0,
      l = {},
      c = 0 < r && r < 1,
      d = isNaN(r) || c,
      h = e.axis,
      u = r,
      p = r;
    return (
      s(r)
        ? (u = p = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !c && d && ((u = r[0]), (p = r[1])),
      function (t, s, n) {
        var o,
          c,
          f,
          m,
          g,
          v,
          y,
          w,
          b,
          _ = (n || e).length,
          E = l[_];
        if (!E) {
          if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, Vt])[1])) {
            for (
              y = -Vt;
              y < (y = n[b++].getBoundingClientRect().left) && b < _;

            );
            b--;
          }
          for (
            E = l[_] = [],
              o = d ? Math.min(b, _) * u - 0.5 : r % b,
              c = b === Vt ? 0 : d ? (_ * p) / b - 0.5 : (r / b) | 0,
              w = Vt,
              v = y = 0;
            v < _;
            v++
          )
            (f = (v % b) - o),
              (m = c - ((v / b) | 0)),
              (E[v] = g = h ? Math.abs("y" === h ? m : f) : Zt(f * f + m * m)),
              y < g && (y = g),
              g < w && (w = g);
          "random" === r && Z(E),
            (E.max = y - w),
            (E.min = w),
            (E.v = _ =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (_ < b
                    ? _ - 1
                    : h
                    ? "y" === h
                      ? _ / b
                      : b
                    : Math.max(b, _ / b)) ||
                0) * ("edges" === r ? -1 : 1)),
            (E.b = _ < 0 ? a - _ : a),
            (E.u = U(e.amount || e.each) || 0),
            (i = i && _ < 0 ? We(i) : i);
        }
        return (
          (_ = (E[t] - E.min) / E.max || 0), x(E.b + (i ? i(_) : _) * E.v) + E.u
        );
      }
    );
  }
  function tt(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var s = x(Math.round(parseFloat(i) / t) * t * e);
      return (s - (s % 1)) / e + (r(i) ? 0 : U(i));
    };
  }
  function et(t, e) {
    var i,
      s,
      a = ie(t);
    return (
      !a &&
        o(t) &&
        ((i = a = t.radius || Vt),
        t.values
          ? ((t = $e(t.values)), (s = !r(t[0])) && (i *= i))
          : (t = tt(t.increment))),
      G(
        e,
        a
          ? n(t)
            ? function (e) {
                return (s = t(e)), Math.abs(s - e) <= i ? s : e;
              }
            : function (e) {
                for (
                  var n,
                    a,
                    o = parseFloat(s ? e.x : e),
                    l = parseFloat(s ? e.y : 0),
                    c = Vt,
                    d = 0,
                    h = t.length;
                  h--;

                )
                  (n = s
                    ? (n = t[h].x - o) * n + (a = t[h].y - l) * a
                    : Math.abs(t[h] - o)) < c && ((c = n), (d = h));
                return (
                  (d = !i || c <= i ? t[d] : e),
                  s || d === e || r(e) ? d : d + U(e)
                );
              }
          : tt(t)
      )
    );
  }
  function it(t, e, i, s) {
    return G(ie(t) ? !e : !0 === i ? !!(i = 0) : !s, function () {
      return ie(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) *
                i *
                s
            ) / s;
    });
  }
  function st(t, e, i) {
    return G(i, function (i) {
      return t[~~e(i)];
    });
  }
  function nt(t) {
    for (var e, i, s, n, r = 0, a = ""; ~(e = t.indexOf("random(", r)); )
      (s = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (i = t.substr(e + 7, s - e - 7).match(n ? le : se)),
        (a +=
          t.substr(r, e - r) + it(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
        (r = s + 1);
    return a + t.substr(r, t.length - r);
  }
  function rt(t, e, i) {
    var s,
      n,
      r,
      a = t.labels,
      o = Vt;
    for (s in a)
      (n = a[s] - e) < 0 == !!i &&
        n &&
        o > (n = Math.abs(n)) &&
        ((r = s), (o = n));
    return r;
  }
  function at(t) {
    return (
      A(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!yt),
      t.progress() < 1 && ze(t, "onInterrupt"),
      t
    );
  }
  function ot(t, e, i) {
    return (
      ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
        ? e + (i - e) * t * 6
        : t < 0.5
        ? i
        : 3 * t < 2
        ? e + (i - e) * (2 / 3 - t) * 6
        : e) *
        Pe +
        0.5) |
      0
    );
  }
  function lt(t, e, i) {
    var s,
      n,
      a,
      o,
      l,
      c,
      d,
      h,
      u,
      p,
      f = t ? (r(t) ? [t >> 16, (t >> 8) & Pe, t & Pe] : 0) : Le.black;
    if (!f) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Le[t]))
        f = Le[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            (t =
              "#" +
              (s = t.charAt(1)) +
              s +
              (n = t.charAt(2)) +
              n +
              (a = t.charAt(3)) +
              a +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
          9 === t.length)
        )
          return [
            (f = parseInt(t.substr(1, 6), 16)) >> 16,
            (f >> 8) & Pe,
            f & Pe,
            parseInt(t.substr(7), 16) / 255,
          ];
        f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Pe, t & Pe];
      } else if ("hsl" === t.substr(0, 3))
        if (((f = p = t.match(se)), e)) {
          if (~t.indexOf("="))
            return (f = t.match(ne)), i && f.length < 4 && (f[3] = 1), f;
        } else
          (o = (+f[0] % 360) / 360),
            (l = f[1] / 100),
            (s =
              2 * (c = f[2] / 100) -
              (n = c <= 0.5 ? c * (l + 1) : c + l - c * l)),
            3 < f.length && (f[3] *= 1),
            (f[0] = ot(o + 1 / 3, s, n)),
            (f[1] = ot(o, s, n)),
            (f[2] = ot(o - 1 / 3, s, n));
      else f = t.match(se) || Le.transparent;
      f = f.map(Number);
    }
    return (
      e &&
        !p &&
        ((s = f[0] / Pe),
        (n = f[1] / Pe),
        (a = f[2] / Pe),
        (c = ((d = Math.max(s, n, a)) + (h = Math.min(s, n, a))) / 2),
        d === h
          ? (o = l = 0)
          : ((u = d - h),
            (l = 0.5 < c ? u / (2 - d - h) : u / (d + h)),
            (o =
              d === s
                ? (n - a) / u + (n < a ? 6 : 0)
                : d === n
                ? (a - s) / u + 2
                : (s - n) / u + 4),
            (o *= 60)),
        (f[0] = ~~(o + 0.5)),
        (f[1] = ~~(100 * l + 0.5)),
        (f[2] = ~~(100 * c + 0.5))),
      i && f.length < 4 && (f[3] = 1),
      f
    );
  }
  function ct(t) {
    var e = [],
      i = [],
      s = -1;
    return (
      t.split(Ae).forEach(function (t) {
        var n = t.match(re) || [];
        e.push.apply(e, n), i.push((s += n.length + 1));
      }),
      (e.c = i),
      e
    );
  }
  function dt(t, e, i) {
    var s,
      n,
      r,
      a,
      o = "",
      l = (t + o).match(Ae),
      c = e ? "hsla(" : "rgba(",
      d = 0;
    if (!l) return t;
    if (
      ((l = l.map(function (t) {
        return (
          (t = lt(t, e, 1)) &&
          c +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      i && ((r = ct(t)), (s = i.c).join(o) !== r.c.join(o)))
    )
      for (a = (n = t.replace(Ae, "1").split(re)).length - 1; d < a; d++)
        o +=
          n[d] +
          (~s.indexOf(d)
            ? l.shift() || c + "0,0,0,0)"
            : (r.length ? r : l.length ? l : i).shift());
    if (!n) for (a = (n = t.split(Ae)).length - 1; d < a; d++) o += n[d] + l[d];
    return o + n[a];
  }
  function ht(t) {
    var e,
      i = t.join(" ");
    if (((Ae.lastIndex = 0), Ae.test(i)))
      return (
        (e = Ie.test(i)),
        (t[1] = dt(t[1], e)),
        (t[0] = dt(t[0], e, ct(t[1]))),
        !0
      );
  }
  function ut(t, e) {
    for (var i, s = t._first; s; )
      s instanceof Ue
        ? ut(s, e)
        : !s.vars.yoyoEase ||
          (s._yoyo && s._repeat) ||
          s._yoyo === e ||
          (s.timeline
            ? ut(s.timeline, e)
            : ((i = s._ease),
              (s._ease = s._yEase),
              (s._yEase = i),
              (s._yoyo = e))),
        (s = s._next);
  }
  function pt(t, e, i, s) {
    void 0 === i &&
      (i = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === s &&
        (s = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      r = { easeIn: e, easeOut: i, easeInOut: s };
    return (
      w(t, function (t) {
        for (var e in ((Be[t] = de[t] = r), (Be[(n = t.toLowerCase())] = i), r))
          Be[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Be[t + "." + e] = r[e];
      }),
      r
    );
  }
  function ft(t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  }
  function mt(t, e, i) {
    function s(t) {
      return 1 === t ? 1 : n * Math.pow(2, -10 * t) * te((t - a) * r) + 1;
    }
    var n = 1 <= e ? e : 1,
      r = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      a = (r / Ut) * (Math.asin(1 / n) || 0),
      o =
        "out" === t
          ? s
          : "in" === t
          ? function (t) {
              return 1 - s(1 - t);
            }
          : ft(s);
    return (
      (r = Ut / r),
      (o.config = function (e, i) {
        return mt(t, e, i);
      }),
      o
    );
  }
  function gt(t, e) {
    function i(t) {
      return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
    }
    void 0 === e && (e = 1.70158);
    var s =
      "out" === t
        ? i
        : "in" === t
        ? function (t) {
            return 1 - i(1 - t);
          }
        : ft(i);
    return (
      (s.config = function (e) {
        return gt(t, e);
      }),
      s
    );
  }
  var vt,
    yt,
    wt,
    bt,
    xt,
    _t,
    Et,
    Tt,
    St,
    Ct,
    Mt,
    kt,
    $t,
    Ot,
    zt,
    Pt,
    Lt,
    At,
    It,
    Dt,
    Rt,
    Bt,
    Yt,
    Xt,
    Wt,
    jt,
    qt,
    Ht,
    Ft = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Nt = { duration: 0.5, overwrite: !1, delay: 0 },
    Vt = 1e8,
    Gt = 1 / Vt,
    Ut = 2 * Math.PI,
    Qt = Ut / 4,
    Kt = 0,
    Zt = Math.sqrt,
    Jt = Math.cos,
    te = Math.sin,
    ee =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    ie = Array.isArray,
    se = /(?:-?\.?\d|\.)+/gi,
    ne = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    re = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    oe = /[+-]=-?[.\d]+/,
    le = /[^,'"\[\]\s]+/gi,
    ce = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    de = {},
    he = { suppressEvents: !0, isStart: !0, kill: !1 },
    ue = { suppressEvents: !0, kill: !1 },
    pe = { suppressEvents: !0 },
    fe = {},
    me = [],
    ge = {},
    ve = {},
    ye = {},
    we = 30,
    be = [],
    xe = "",
    _e = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    Ee = function (t, e) {
      var i = Math.floor((t /= e));
      return t && i === t ? i - 1 : i;
    },
    Te = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    Se = { _start: 0, endTime: m, totalDuration: m },
    Ce = function t(e, i, n) {
      var r,
        a,
        o,
        l = e.labels,
        c = e._recent || Se,
        d = e.duration() >= Vt ? c.endTime(!1) : e._dur;
      return s(i) && (isNaN(i) || i in l)
        ? ((a = i.charAt(0)),
          (o = "%" === i.substr(-1)),
          (r = i.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= r && (i = i.replace(/=/, "")),
              ("<" === a ? c._start : c.endTime(0 <= c._repeat)) +
                (parseFloat(i.substr(1)) || 0) *
                  (o ? (r < 0 ? c : n).totalDuration() / 100 : 1))
            : r < 0
            ? (i in l || (l[i] = d), l[i])
            : ((a = parseFloat(i.charAt(r - 1) + i.substr(r + 1))),
              o && n && (a = (a / 100) * (ie(n) ? n[0] : n).totalDuration()),
              1 < r ? t(e, i.substr(0, r - 1), n) + a : d + a))
        : null == i
        ? d
        : +i;
    },
    Me = function (t, e, i) {
      return i < t ? t : e < i ? e : i;
    },
    ke = [].slice,
    $e = function (t, e, i) {
      return wt && !e && wt.selector
        ? wt.selector(t)
        : !s(t) || i || (!_t && Re())
        ? ie(t)
          ? (function (t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  return (s(t) && !e) || Q(t, 1)
                    ? i.push.apply(i, $e(t))
                    : i.push(t);
                }) || i
              );
            })(t, i)
          : Q(t)
          ? ke.call(t, 0)
          : t
          ? [t]
          : []
        : ke.call((e || Et).querySelectorAll(t), 0);
    },
    Oe = function (t, e, i, s, n) {
      var r = e - t,
        a = s - i;
      return G(n, function (e) {
        return i + (((e - t) / r) * a || 0);
      });
    },
    ze = function (t, e, i) {
      var s,
        n,
        r,
        a = t.vars,
        o = a[e],
        l = wt,
        c = t._ctx;
      if (o)
        return (
          (s = a[e + "Params"]),
          (n = a.callbackScope || t),
          i && me.length && T(),
          c && (wt = c),
          (r = s ? o.apply(n, s) : o.call(n)),
          (wt = l),
          r
        );
    },
    Pe = 255,
    Le = {
      aqua: [0, Pe, Pe],
      lime: [0, Pe, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Pe],
      navy: [0, 0, 128],
      white: [Pe, Pe, Pe],
      olive: [128, 128, 0],
      yellow: [Pe, Pe, 0],
      orange: [Pe, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Pe, 0, 0],
      pink: [Pe, 192, 203],
      cyan: [0, Pe, Pe],
      transparent: [Pe, Pe, Pe, 0],
    },
    Ae = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Le) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ie = /hsl[a]?\(/,
    De =
      ((It = Date.now),
      (Dt = 500),
      (Rt = 33),
      (Bt = It()),
      (Yt = Bt),
      (Wt = Xt = 1e3 / 240),
      (Pt = {
        time: 0,
        frame: 0,
        tick: function () {
          qe(!0);
        },
        deltaRatio: function (t) {
          return Lt / (1e3 / (t || 60));
        },
        wake: function () {
          St &&
            (!_t &&
              c() &&
              ((xt = _t = window),
              (Et = xt.document || {}),
              (de.gsap = Di),
              (xt.gsapVersions || (xt.gsapVersions = [])).push(Di.version),
              h(Tt || xt.GreenSockGlobals || (!xt.gsap && xt) || {}),
              (zt = xt.requestAnimationFrame)),
            $t && Pt.sleep(),
            (Ot =
              zt ||
              function (t) {
                return setTimeout(t, (Wt - 1e3 * Pt.time + 1) | 0);
              }),
            (kt = 1),
            qe(2));
        },
        sleep: function () {
          (zt ? xt.cancelAnimationFrame : clearTimeout)($t), (kt = 0), (Ot = m);
        },
        lagSmoothing: function (t, e) {
          (Dt = t || 1 / 0), (Rt = Math.min(e || 33, Dt));
        },
        fps: function (t) {
          (Xt = 1e3 / (t || 240)), (Wt = 1e3 * Pt.time + Xt);
        },
        add: function (t, e, i) {
          var s = e
            ? function (e, i, n, r) {
                t(e, i, n, r), Pt.remove(s);
              }
            : t;
          return Pt.remove(t), jt[i ? "unshift" : "push"](s), Re(), s;
        },
        remove: function (t, e) {
          ~(e = jt.indexOf(t)) && jt.splice(e, 1) && e <= At && At--;
        },
        _listeners: (jt = []),
      })),
    Re = function () {
      return !kt && De.wake();
    },
    Be = {},
    Ye = /^[\d.\-M][\d.\-,\s]/,
    Xe = /["']/g,
    We = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    je = function (t, e) {
      return (
        (t &&
          (n(t)
            ? t
            : Be[t] ||
              (function (t) {
                var e = (t + "").split("("),
                  i = Be[e[0]];
                return i && 1 < e.length && i.config
                  ? i.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [
                            (function (t) {
                              for (
                                var e,
                                  i,
                                  s,
                                  n = {},
                                  r = t.substr(1, t.length - 3).split(":"),
                                  a = r[0],
                                  o = 1,
                                  l = r.length;
                                o < l;
                                o++
                              )
                                (i = r[o]),
                                  (e =
                                    o !== l - 1
                                      ? i.lastIndexOf(",")
                                      : i.length),
                                  (s = i.substr(0, e)),
                                  (n[a] = isNaN(s)
                                    ? s.replace(Xe, "").trim()
                                    : +s),
                                  (a = i.substr(e + 1).trim());
                              return n;
                            })(e[1]),
                          ]
                        : (function (t) {
                            var e = t.indexOf("(") + 1,
                              i = t.indexOf(")"),
                              s = t.indexOf("(", e);
                            return t.substring(
                              e,
                              ~s && s < i ? t.indexOf(")", i + 1) : i
                            );
                          })(t)
                            .split(",")
                            .map(C)
                    )
                  : Be._CE && Ye.test(t)
                  ? Be._CE("", t)
                  : i;
              })(t))) ||
        e
      );
    };
  function qe(t) {
    var e,
      i,
      s,
      n,
      r = It() - Yt,
      a = !0 === t;
    if (
      (Dt < r && (Bt += r - Rt),
      (0 < (e = (s = (Yt += r) - Bt) - Wt) || a) &&
        ((n = ++Pt.frame),
        (Lt = s - 1e3 * Pt.time),
        (Pt.time = s /= 1e3),
        (Wt += e + (Xt <= e ? 4 : Xt - e)),
        (i = 1)),
      a || ($t = Ot(qe)),
      i)
    )
      for (At = 0; At < jt.length; At++) jt[At](s, Lt, n, t);
  }
  function He(t) {
    return t < Ht
      ? qt * t * t
      : t < 0.7272727272727273
      ? qt * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? qt * (t -= 2.25 / 2.75) * t + 0.9375
      : qt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  w("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var i = e < 5 ? e + 1 : e;
    pt(
      t + ",Power" + (i - 1),
      e
        ? function (t) {
            return Math.pow(t, i);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, i);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, i) / 2
          : 1 - Math.pow(2 * (1 - t), i) / 2;
      }
    );
  }),
    (Be.Linear.easeNone = Be.none = Be.Linear.easeIn),
    pt("Elastic", mt("in"), mt("out"), mt()),
    (qt = 7.5625),
    (Ht = 1 / 2.75),
    pt(
      "Bounce",
      function (t) {
        return 1 - He(1 - t);
      },
      He
    ),
    pt("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    pt("Circ", function (t) {
      return -(Zt(1 - t * t) - 1);
    }),
    pt("Sine", function (t) {
      return 1 === t ? 1 : 1 - Jt(t * Qt);
    }),
    pt("Back", gt("in"), gt("out"), gt()),
    (Be.SteppedEase =
      Be.steps =
      de.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
              s = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((s * Me(0, 0.99999999, t)) | 0) + n) * i;
            };
          },
        }),
    (Nt.ease = Be["quad.out"]),
    w(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (xe += t + "," + t + "Params,");
      }
    );
  var Fe,
    Ne = function (t, e) {
      (this.id = Kt++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : y),
        (this.set = e ? e.getSetter : hi);
    },
    Ve =
      (((Fe = Ge.prototype).delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (Fe.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (Fe.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            F(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (Fe.totalTime = function (t, e) {
        if ((Re(), !arguments.length)) return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
          for (X(this, t), !i._dp || i.parent || W(i, this); i && i.parent; )
            i.parent._time !==
              i._start +
                (0 <= i._ts
                  ? i._tTime / i._ts
                  : (i.totalDuration() - i._tTime) / -i._ts) &&
              i.totalTime(i._tTime, !0),
              (i = i.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            j(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === Gt) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), S(this, t, e)),
          this
        );
      }),
      (Fe.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + R(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Fe.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (Fe.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                R(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (Fe.iteration = function (t, e) {
        var i = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * i, e)
          : this._repeat
          ? Ee(this._tTime, i) + 1
          : 1;
      }),
      (Fe.timeScale = function (t) {
        if (!arguments.length) return this._rts === -Gt ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? B(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -Gt ? 0 : this._rts),
          this.totalTime(Me(-this._delay, this._tDur, e), !0),
          Y(this),
          (function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (Fe.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Re(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== Gt &&
                      (this._tTime -= Gt)
                  ))),
            this)
          : this._ps;
      }),
      (Fe.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || j(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (Fe.endTime = function (t) {
        return (
          this._start +
          (l(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (Fe.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? B(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Fe.revert = function (t) {
        void 0 === t && (t = pe);
        var e = yt;
        return (
          (yt = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (yt = e),
          this
        );
      }),
      (Fe.globalTime = function (t) {
        for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
          (i = e._start + i / (e._ts || 1)), (e = e._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(t)
          : i;
      }),
      (Fe.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), N(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (Fe.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), N(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (Fe.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Fe.seek = function (t, e) {
        return this.totalTime(Ce(this, t), l(e));
      }),
      (Fe.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, l(e));
      }),
      (Fe.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Fe.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Fe.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Fe.resume = function () {
        return this.paused(!1);
      }),
      (Fe.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -Gt : 0)),
            this)
          : this._rts < 0;
      }),
      (Fe.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Gt), this;
      }),
      (Fe.isActive = function () {
        var t,
          e = this.parent || this._dp,
          i = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < this.endTime(!0) - Gt
          )
        );
      }),
      (Fe.eventCallback = function (t, e, i) {
        var s = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((s[t] = e),
                i && (s[t + "Params"] = i),
                "onUpdate" === t && (this._onUpdate = e))
              : delete s[t],
            this)
          : s[t];
      }),
      (Fe.then = function (t) {
        var e = this;
        return new Promise(function (i) {
          function s() {
            var t = e.then;
            (e.then = null),
              n(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
              i(r),
              (e.then = t);
          }
          var r = n(t) ? t : M;
          (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
          (!e._tTime && e._ts < 0)
            ? s()
            : (e._prom = s);
        });
      }),
      (Fe.kill = function () {
        at(this);
      }),
      Ge);
  function Ge(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      F(this, +t.duration, 1, 1),
      (this.data = t.data),
      wt && (this._ctx = wt).data.push(this),
      kt || De.wake();
  }
  k(Ve.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Gt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ue = (function (t) {
    function a(e, s) {
      var n;
      return (
        void 0 === e && (e = {}),
        ((n = t.call(this, e) || this).labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = l(e.sortChildren)),
        bt && j(e.parent || bt, i(n), s),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && q(i(n), e.scrollTrigger),
        n
      );
    }
    e(a, t);
    var o = a.prototype;
    return (
      (o.to = function (t, e, i) {
        return V(0, arguments, this), this;
      }),
      (o.from = function (t, e, i) {
        return V(1, arguments, this), this;
      }),
      (o.fromTo = function (t, e, i, s) {
        return V(2, arguments, this), this;
      }),
      (o.set = function (t, e, i) {
        return (
          (e.duration = 0),
          (e.parent = this),
          z(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new ri(t, e, Ce(this, i), 1),
          this
        );
      }),
      (o.call = function (t, e, i) {
        return j(this, ri.delayedCall(0, t, e), i);
      }),
      (o.staggerTo = function (t, e, i, s, n, r, a) {
        return (
          (i.duration = e),
          (i.stagger = i.stagger || s),
          (i.onComplete = r),
          (i.onCompleteParams = a),
          (i.parent = this),
          new ri(t, i, Ce(this, n)),
          this
        );
      }),
      (o.staggerFrom = function (t, e, i, s, n, r, a) {
        return (
          (i.runBackwards = 1),
          (z(i).immediateRender = l(i.immediateRender)),
          this.staggerTo(t, e, i, s, n, r, a)
        );
      }),
      (o.staggerFromTo = function (t, e, i, s, n, r, a, o) {
        return (
          (s.startAt = i),
          (z(s).immediateRender = l(s.immediateRender)),
          this.staggerTo(t, e, s, n, r, a, o)
        );
      }),
      (o.render = function (t, e, i) {
        var s,
          n,
          r,
          a,
          o,
          l,
          c,
          d,
          h,
          u,
          p,
          f,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = t <= 0 ? 0 : x(t),
          w = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (
          (this !== bt && g < y && 0 <= t && (y = g),
          y !== this._tTime || i || w)
        ) {
          if (
            (m !== this._time &&
              v &&
              ((y += this._time - m), (t += this._time - m)),
            (s = y),
            (h = this._start),
            (l = !(d = this._ts)),
            w && (v || (m = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((p = this._yoyo),
              (o = v + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, i);
            if (
              ((s = x(y % o)),
              y === g
                ? ((a = this._repeat), (s = v))
                : ((a = ~~(y / o)) && a === y / o && ((s = v), a--),
                  v < s && (s = v)),
              (u = Ee(this._tTime, o)),
              !m && this._tTime && u !== a && (u = a),
              p && 1 & a && ((s = v - s), (f = 1)),
              a !== u && !this._lock)
            ) {
              var b = p && 1 & u,
                _ = b === (p && 1 & a);
              if (
                (a < u && (b = !b),
                (m = b ? 0 : v),
                (this._lock = 1),
                (this.render(m || (f ? 0 : x(a * o)), e, !v)._lock = 0),
                (this._tTime = y),
                !e && this.parent && ze(this, "onRepeat"),
                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  l != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                _ &&
                  ((this._lock = 2),
                  (m = b ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !f && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              ut(this, f);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (c = (function (t, e, i) {
                var s;
                if (e < i)
                  for (s = t._first; s && s._start <= i; ) {
                    if ("isPause" === s.data && s._start > e) return s;
                    s = s._next;
                  }
                else
                  for (s = t._last; s && s._start >= i; ) {
                    if ("isPause" === s.data && s._start < e) return s;
                    s = s._prev;
                  }
              })(this, x(m), x(s))) &&
              (y -= s - (s = c._start)),
            (this._tTime = y),
            (this._time = s),
            (this._act = !d),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (m = 0)),
            !m && s && !e && (ze(this, "onStart"), this._tTime !== y))
          )
            return this;
          if (m <= s && 0 <= t)
            for (n = this._first; n; ) {
              if (
                ((r = n._next), (n._act || s >= n._start) && n._ts && c !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    0 < n._ts
                      ? (s - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (s - n._start) * n._ts,
                    e,
                    i
                  ),
                  s !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), r && (y += this._zTime = -Gt);
                  break;
                }
              }
              n = r;
            }
          else {
            n = this._last;
            for (var E = t < 0 ? t : s; n; ) {
              if (
                ((r = n._prev), (n._act || E <= n._end) && n._ts && c !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    0 < n._ts
                      ? (E - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (E - n._start) * n._ts,
                    e,
                    i || (yt && (n._initted || n._startAt))
                  ),
                  s !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), r && (y += this._zTime = E ? -Gt : Gt);
                  break;
                }
              }
              n = r;
            }
          }
          if (
            c &&
            !e &&
            (this.pause(),
            (c.render(m <= s ? 0 : -Gt)._zTime = m <= s ? 1 : -1),
            this._ts)
          )
            return (this._start = h), Y(this), this.render(t, e, i);
          this._onUpdate && !e && ze(this, "onUpdate", !0),
            ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
              ((h !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && v) ||
                  !((y === g && 0 < this._ts) || (!y && this._ts < 0)) ||
                  A(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (!y && !m && g) ||
                  (ze(
                    this,
                    y === g && 0 <= t ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  !this._prom ||
                    (y < g && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (o.add = function (t, e) {
        var i = this;
        if ((r(e) || (e = Ce(this, e, t)), !(t instanceof Ve))) {
          if (ie(t))
            return (
              t.forEach(function (t) {
                return i.add(t, e);
              }),
              this
            );
          if (s(t)) return this.addLabel(t, e);
          if (!n(t)) return this;
          t = ri.delayedCall(0, t);
        }
        return this !== t ? j(this, t, e) : this;
      }),
      (o.getChildren = function (t, e, i, s) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === i && (i = !0),
          void 0 === s && (s = -Vt);
        for (var n = [], r = this._first; r; )
          r._start >= s &&
            (r instanceof ri
              ? e && n.push(r)
              : (i && n.push(r),
                t && n.push.apply(n, r.getChildren(!0, e, i)))),
            (r = r._next);
        return n;
      }),
      (o.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
          if (e[i].vars.id === t) return e[i];
      }),
      (o.remove = function (t) {
        return s(t)
          ? this.removeLabel(t)
          : n(t)
          ? this.killTweensOf(t)
          : (L(this, t),
            t === this._recent && (this._recent = this._last),
            I(this));
      }),
      (o.totalTime = function (e, i) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = x(
                De.time -
                  (0 < this._ts
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, i),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (o.addLabel = function (t, e) {
        return (this.labels[t] = Ce(this, e)), this;
      }),
      (o.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (o.addPause = function (t, e, i) {
        var s = ri.delayedCall(0, e || m, i);
        return (
          (s.data = "isPause"), (this._hasPause = 1), j(this, s, Ce(this, t))
        );
      }),
      (o.removePause = function (t) {
        var e = this._first;
        for (t = Ce(this, t); e; )
          e._start === t && "isPause" === e.data && A(e), (e = e._next);
      }),
      (o.killTweensOf = function (t, e, i) {
        for (var s = this.getTweensOf(t, i), n = s.length; n--; )
          Ze !== s[n] && s[n].kill(t, e);
        return this;
      }),
      (o.getTweensOf = function (t, e) {
        for (var i, s = [], n = $e(t), a = this._first, o = r(e); a; )
          a instanceof ri
            ? E(a._targets, n) &&
              (o
                ? (!Ze || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              s.push(a)
            : (i = a.getTweensOf(n, e)).length && s.push.apply(s, i),
            (a = a._next);
        return s;
      }),
      (o.tweenTo = function (t, e) {
        e = e || {};
        var i,
          s = this,
          n = Ce(s, t),
          r = e.startAt,
          a = e.onStart,
          o = e.onStartParams,
          l = e.immediateRender,
          c = ri.to(
            s,
            k(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (r && "time" in r ? r.time : s._time)) / s.timeScale()
                  ) ||
                  Gt,
                onStart: function () {
                  if ((s.pause(), !i)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (r && "time" in r ? r.time : s._time)) /
                          s.timeScale()
                      );
                    c._dur !== t && F(c, t, 0, 1).render(c._time, !0, !0),
                      (i = 1);
                  }
                  a && a.apply(c, o || []);
                },
              },
              e
            )
          );
        return l ? c.render(0) : c;
      }),
      (o.tweenFromTo = function (t, e, i) {
        return this.tweenTo(e, k({ startAt: { time: Ce(this, t) } }, i));
      }),
      (o.recent = function () {
        return this._recent;
      }),
      (o.nextLabel = function (t) {
        return void 0 === t && (t = this._time), rt(this, Ce(this, t));
      }),
      (o.previousLabel = function (t) {
        return void 0 === t && (t = this._time), rt(this, Ce(this, t), 1);
      }),
      (o.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + Gt);
      }),
      (o.shiftChildren = function (t, e, i) {
        void 0 === i && (i = 0);
        for (var s, n = this._first, r = this.labels; n; )
          n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (s in r) r[s] >= i && (r[s] += t);
        return I(this);
      }),
      (o.invalidate = function (e) {
        var i = this._first;
        for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
        return t.prototype.invalidate.call(this, e);
      }),
      (o.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, i = this._first; i; )
          (e = i._next), this.remove(i), (i = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          I(this)
        );
      }),
      (o.totalDuration = function (t) {
        var e,
          i,
          s,
          n = 0,
          r = this,
          a = r._last,
          o = Vt;
        if (arguments.length)
          return r.timeScale(
            (r._repeat < 0 ? r.duration() : r.totalDuration()) /
              (r.reversed() ? -t : t)
          );
        if (r._dirty) {
          for (s = r.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              o < (i = a._start) && r._sort && a._ts && !r._lock
                ? ((r._lock = 1), (j(r, a, i - a._delay, 1)._lock = 0))
                : (o = i),
              i < 0 &&
                a._ts &&
                ((n -= i),
                ((!s && !r._dp) || (s && s.smoothChildTiming)) &&
                  ((r._start += i / r._ts), (r._time -= i), (r._tTime -= i)),
                r.shiftChildren(-i, !1, -1 / 0),
                (o = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = e);
          F(r, r === bt && r._time > n ? r._time : n, 1, 1), (r._dirty = 0);
        }
        return r._tDur;
      }),
      (a.updateRoot = function (t) {
        if ((bt._ts && (S(bt, B(t, bt)), (Ct = De.frame)), De.frame >= we)) {
          we += Ft.autoSleep || 120;
          var e = bt._first;
          if ((!e || !e._ts) && Ft.autoSleep && De._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || De.sleep();
          }
        }
      }),
      a
    );
  })(Ve);
  function Qe(t, e, i, r, a, l) {
    var c, d, h, u;
    if (
      ve[t] &&
      !1 !==
        (c = new ve[t]()).init(
          a,
          c.rawVars
            ? e[t]
            : (function (t, e, i, r, a) {
                if (
                  (n(t) && (t = ii(t, a, e, i, r)),
                  !o(t) || (t.style && t.nodeType) || ie(t) || ee(t))
                )
                  return s(t) ? ii(t, a, e, i, r) : t;
                var l,
                  c = {};
                for (l in t) c[l] = ii(t[l], a, e, i, r);
                return c;
              })(e[t], r, a, l, i),
          i,
          r,
          l
        ) &&
      ((i._pt = d = new wi(i._pt, a, t, 0, 1, c.render, c, 0, c.priority)),
      i !== Mt)
    )
      for (h = i._ptLookup[i._targets.indexOf(a)], u = c._props.length; u--; )
        h[c._props[u]] = d;
    return c;
  }
  function Ke(t, e, i, s) {
    var n,
      r,
      a = e.ease || s || "power1.inOut";
    if (ie(e))
      (r = i[t] || (i[t] = [])),
        e.forEach(function (t, i) {
          return r.push({ t: (i / (e.length - 1)) * 100, v: t, e: a });
        });
    else
      for (n in e)
        (r = i[n] || (i[n] = [])),
          "ease" === n || r.push({ t: parseFloat(t), v: e[n], e: a });
  }
  k(Ue.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ze,
    Je,
    ti = function (t, e, i, r, a, o, l, c, d, h) {
      n(r) && (r = r(a || 0, t, o));
      var p,
        f = t[e],
        m =
          "get" !== i
            ? i
            : n(f)
            ? d
              ? t[
                  e.indexOf("set") || !n(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](d)
              : t[e]()
            : f,
        g = n(f) ? (d ? di : ci) : li;
      if (
        (s(r) &&
          (~r.indexOf("random(") && (r = nt(r)),
          "=" === r.charAt(1) &&
            ((!(p = _(m, r) + (U(m) || 0)) && 0 !== p) || (r = p))),
        !h || m !== r || Je)
      )
        return isNaN(m * r) || "" === r
          ? (f || e in t || u(e, r),
            function (t, e, i, s, n, r, a) {
              var o,
                l,
                c,
                d,
                h,
                u,
                p,
                f,
                m = new wi(this._pt, t, e, 0, 1, fi, null, n),
                g = 0,
                v = 0;
              for (
                m.b = i,
                  m.e = s,
                  i += "",
                  (p = ~(s += "").indexOf("random(")) && (s = nt(s)),
                  r && (r((f = [i, s]), t, e), (i = f[0]), (s = f[1])),
                  l = i.match(ae) || [];
                (o = ae.exec(s));

              )
                (d = o[0]),
                  (h = s.substring(g, o.index)),
                  c ? (c = (c + 1) % 5) : "rgba(" === h.substr(-5) && (c = 1),
                  d !== l[v++] &&
                    ((u = parseFloat(l[v - 1]) || 0),
                    (m._pt = {
                      _next: m._pt,
                      p: h || 1 === v ? h : ",",
                      s: u,
                      c: "=" === d.charAt(1) ? _(u, d) - u : parseFloat(d) - u,
                      m: c && c < 4 ? Math.round : 0,
                    }),
                    (g = ae.lastIndex));
              return (
                (m.c = g < s.length ? s.substring(g, s.length) : ""),
                (m.fp = a),
                (oe.test(s) || p) && (m.e = 0),
                (this._pt = m)
              );
            }.call(this, t, e, m, r, g, c || Ft.stringFilter, d))
          : ((p = new wi(
              this._pt,
              t,
              e,
              +m || 0,
              r - (m || 0),
              "boolean" == typeof f ? pi : ui,
              0,
              g
            )),
            d && (p.fp = d),
            l && p.modifier(l, this, t),
            (this._pt = p));
    },
    ei = function t(e, i, s) {
      var n,
        r,
        a,
        o,
        c,
        d,
        h,
        u,
        p,
        f,
        m,
        y,
        w,
        b = e.vars,
        x = b.ease,
        _ = b.startAt,
        E = b.immediateRender,
        S = b.lazy,
        C = b.onUpdate,
        M = b.onUpdateParams,
        $ = b.callbackScope,
        z = b.runBackwards,
        P = b.yoyoEase,
        L = b.keyframes,
        I = b.autoRevert,
        D = e._dur,
        R = e._startAt,
        B = e._targets,
        Y = e.parent,
        X = Y && "nested" === Y.data ? Y.vars.targets : B,
        W = "auto" === e._overwrite && !vt,
        j = e.timeline;
      if (
        (!j || (L && x) || (x = "none"),
        (e._ease = je(x, Nt.ease)),
        (e._yEase = P ? We(je(!0 === P ? x : P, Nt.ease)) : 0),
        P &&
          e._yoyo &&
          !e._repeat &&
          ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
        (e._from = !j && !!b.runBackwards),
        !j || (L && !b.stagger))
      ) {
        if (
          ((y = (u = B[0] ? v(B[0]).harness : 0) && b[u.prop]),
          (n = O(b, fe)),
          R &&
            (R._zTime < 0 && R.progress(1),
            i < 0 && z && E && !I
              ? R.render(-1, !0)
              : R.revert(z && D ? ue : he),
            (R._lazy = 0)),
          _)
        ) {
          if (
            (A(
              (e._startAt = ri.set(
                B,
                k(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: Y,
                    immediateRender: !0,
                    lazy: !R && l(S),
                    startAt: null,
                    delay: 0,
                    onUpdate: C,
                    onUpdateParams: M,
                    callbackScope: $,
                    stagger: 0,
                  },
                  _
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            i < 0 && (yt || (!E && !I)) && e._startAt.revert(ue),
            E && D && i <= 0 && s <= 0)
          )
            return void (i && (e._zTime = i));
        } else if (z && D && !R)
          if (
            (i && (E = !1),
            (a = k(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: E && !R && l(S),
                immediateRender: E,
                stagger: 0,
                parent: Y,
              },
              n
            )),
            y && (a[u.prop] = y),
            A((e._startAt = ri.set(B, a))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            i < 0 && (yt ? e._startAt.revert(ue) : e._startAt.render(-1, !0)),
            (e._zTime = i),
            E)
          ) {
            if (!i) return;
          } else t(e._startAt, Gt, Gt);
        for (
          e._pt = e._ptCache = 0, S = (D && l(S)) || (S && !D), r = 0;
          r < B.length;
          r++
        ) {
          if (
            ((h = (c = B[r])._gsap || g(B)[r]._gsap),
            (e._ptLookup[r] = f = {}),
            ge[h.id] && me.length && T(),
            (m = X === B ? r : X.indexOf(c)),
            u &&
              !1 !== (p = new u()).init(c, y || n, e, m, X) &&
              ((e._pt = o =
                new wi(e._pt, c, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach(function (t) {
                f[t] = o;
              }),
              p.priority && (d = 1)),
            !u || y)
          )
            for (a in n)
              ve[a] && (p = Qe(a, n, e, m, c, X))
                ? p.priority && (d = 1)
                : (f[a] = o =
                    ti.call(e, c, a, "get", n[a], m, X, 0, b.stringFilter));
          e._op && e._op[r] && e.kill(c, e._op[r]),
            W &&
              e._pt &&
              ((Ze = e),
              bt.killTweensOf(c, f, e.globalTime(i)),
              (w = !e.parent),
              (Ze = 0)),
            e._pt && S && (ge[h.id] = 1);
        }
        d && yi(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = C),
        (e._initted = (!e._op || e._pt) && !w),
        L && i <= 0 && j.render(Vt, !0, !0);
    },
    ii = function (t, e, i, r, a) {
      return n(t)
        ? t.call(e, i, r, a)
        : s(t) && ~t.indexOf("random(")
        ? nt(t)
        : t;
    },
    si = xe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    ni = {};
  w(si + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (ni[t] = 1);
  });
  var ri = (function (t) {
    function n(e, s, n, a) {
      var c;
      "number" == typeof s && ((n.duration = s), (s = n), (n = null));
      var h,
        u,
        f,
        m,
        v,
        y,
        w,
        b,
        _ = (c = t.call(this, a ? s : z(s)) || this).vars,
        E = _.duration,
        T = _.delay,
        S = _.immediateRender,
        C = _.stagger,
        M = _.overwrite,
        $ = _.keyframes,
        P = _.defaults,
        L = _.scrollTrigger,
        A = _.yoyoEase,
        I = s.parent || bt,
        D = (ie(e) || ee(e) ? r(e[0]) : "length" in s) ? [e] : $e(e);
      if (
        ((c._targets = D.length
          ? g(D)
          : p(
              "GSAP target " + e + " not found. https://greensock.com",
              !Ft.nullTargetWarn
            ) || []),
        (c._ptLookup = []),
        (c._overwrite = M),
        $ || C || d(E) || d(T))
      ) {
        if (
          ((s = c.vars),
          (h = c.timeline =
            new Ue({
              data: "nested",
              defaults: P || {},
              targets: I && "nested" === I.data ? I.vars.targets : D,
            })).kill(),
          (h.parent = h._dp = i(c)),
          (h._start = 0),
          C || d(E) || d(T))
        ) {
          if (((m = D.length), (w = C && J(C)), o(C)))
            for (v in C) ~si.indexOf(v) && ((b = b || {})[v] = C[v]);
          for (u = 0; u < m; u++)
            ((f = O(s, ni)).stagger = 0),
              A && (f.yoyoEase = A),
              b && _e(f, b),
              (y = D[u]),
              (f.duration = +ii(E, i(c), u, y, D)),
              (f.delay = (+ii(T, i(c), u, y, D) || 0) - c._delay),
              !C &&
                1 === m &&
                f.delay &&
                ((c._delay = T = f.delay), (c._start += T), (f.delay = 0)),
              h.to(y, f, w ? w(u, y, D) : 0),
              (h._ease = Be.none);
          h.duration() ? (E = T = 0) : (c.timeline = 0);
        } else if ($) {
          z(k(h.vars.defaults, { ease: "none" })),
            (h._ease = je($.ease || s.ease || "none"));
          var R,
            B,
            Y,
            X = 0;
          if (ie($))
            $.forEach(function (t) {
              return h.to(D, t, ">");
            }),
              h.duration();
          else {
            for (v in ((f = {}), $))
              "ease" === v || "easeEach" === v || Ke(v, $[v], f, $.easeEach);
            for (v in f)
              for (
                R = f[v].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  u = X = 0;
                u < R.length;
                u++
              )
                ((Y = {
                  ease: (B = R[u]).e,
                  duration: ((B.t - (u ? R[u - 1].t : 0)) / 100) * E,
                })[v] = B.v),
                  h.to(D, Y, X),
                  (X += Y.duration);
            h.duration() < E && h.to({}, { duration: E - h.duration() });
          }
        }
        E || c.duration((E = h.duration()));
      } else c.timeline = 0;
      return (
        !0 !== M || vt || ((Ze = i(c)), bt.killTweensOf(D), (Ze = 0)),
        j(I, i(c), n),
        s.reversed && c.reverse(),
        s.paused && c.paused(!0),
        (S ||
          (!E &&
            !$ &&
            c._start === x(I._time) &&
            l(S) &&
            (function t(e) {
              return !e || (e._ts && t(e.parent));
            })(i(c)) &&
            "nested" !== I.data)) &&
          ((c._tTime = -Gt), c.render(Math.max(0, -T) || 0)),
        L && q(i(c), L),
        c
      );
    }
    e(n, t);
    var a = n.prototype;
    return (
      (a.render = function (t, e, i) {
        var s,
          n,
          r,
          a,
          o,
          l,
          c,
          d,
          h,
          u = this._time,
          p = this._tDur,
          f = this._dur,
          m = t < 0,
          g = p - Gt < t && !m ? p : t < Gt ? 0 : t;
        if (f) {
          if (
            g !== this._tTime ||
            !t ||
            i ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != m)
          ) {
            if (((s = g), (d = this.timeline), this._repeat)) {
              if (((a = f + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + t, e, i);
              if (
                ((s = x(g % a)),
                g === p
                  ? ((r = this._repeat), (s = f))
                  : ((r = ~~(g / a)) && r === g / a && ((s = f), r--),
                    f < s && (s = f)),
                (l = this._yoyo && 1 & r) && ((h = this._yEase), (s = f - s)),
                (o = Ee(this._tTime, a)),
                s === u && !i && this._initted)
              )
                return (this._tTime = g), this;
              r !== o &&
                (d && this._yEase && ut(d, l),
                !this.vars.repeatRefresh ||
                  l ||
                  this._lock ||
                  ((this._lock = i = 1),
                  (this.render(x(a * r), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (H(this, m ? t : s, i, e, g)) return (this._tTime = 0), this;
              if (u !== this._time) return this;
              if (f !== this._dur) return this.render(t, e, i);
            }
            if (
              ((this._tTime = g),
              (this._time = s),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = c = (h || this._ease)(s / f)),
              this._from && (this.ratio = c = 1 - c),
              s && !u && !e && (ze(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (n = this._pt; n; ) n.r(c, n.d), (n = n._next);
            (d &&
              d.render(
                t < 0 ? t : !s && l ? -Gt : d._dur * d._ease(s / this._dur),
                e,
                i
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (m && D(this, t, 0, i), ze(this, "onUpdate")),
              this._repeat &&
                r !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                ze(this, "onRepeat"),
              (g !== this._tDur && g) ||
                this._tTime !== g ||
                (m && !this._onUpdate && D(this, t, 0, !0),
                (!t && f) ||
                  !(
                    (g === this._tDur && 0 < this._ts) ||
                    (!g && this._ts < 0)
                  ) ||
                  A(this, 1),
                e ||
                  (m && !u) ||
                  !(g || u || l) ||
                  (ze(this, g === p ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (g < p && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else
          !(function (t, e, i, s) {
            var n,
              r,
              a,
              o = t.ratio,
              l =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function t(e) {
                      var i = e.parent;
                      return (
                        i &&
                        i._ts &&
                        i._initted &&
                        !i._lock &&
                        (i.rawTime() < 0 || t(i))
                      );
                    })(t) &&
                    (t._initted || !Te(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !Te(t))))
                  ? 0
                  : 1,
              c = t._rDelay,
              d = 0;
            if (
              (c &&
                t._repeat &&
                ((d = Me(0, t._tDur, e)),
                (r = Ee(d, c)),
                t._yoyo && 1 & r && (l = 1 - l),
                r !== Ee(t._tTime, c) &&
                  ((o = 1 - l),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              l !== o || yt || s || t._zTime === Gt || (!e && t._zTime))
            ) {
              if (!t._initted && H(t, e, s, i, d)) return;
              for (
                a = t._zTime,
                  t._zTime = e || (i ? Gt : 0),
                  i = i || (e && !a),
                  t.ratio = l,
                  t._from && (l = 1 - l),
                  t._time = 0,
                  t._tTime = d,
                  n = t._pt;
                n;

              )
                n.r(l, n.d), (n = n._next);
              e < 0 && D(t, e, 0, !0),
                t._onUpdate && !i && ze(t, "onUpdate"),
                d && t._repeat && !i && t.parent && ze(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === l &&
                  (l && A(t, 1),
                  i ||
                    yt ||
                    (ze(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, i);
        return this;
      }),
      (a.targets = function () {
        return this._targets;
      }),
      (a.invalidate = function (e) {
        return (
          (e && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(e),
          t.prototype.invalidate.call(this, e)
        );
      }),
      (a.resetTo = function (t, e, i, s) {
        kt || De.wake(), this._ts || this.play();
        var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || ei(this, n),
          (function (t, e, i, s, n, r, a) {
            var o,
              l,
              c,
              d,
              h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!h)
              for (
                h = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
                d--;

              ) {
                if ((o = c[d][e]) && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
                if (!o)
                  return (Je = 1), (t.vars[e] = "+=0"), ei(t, a), (Je = 0), 1;
                h.push(o);
              }
            for (d = h.length; d--; )
              ((o = (l = h[d])._pt || l).s =
                (!s && 0 !== s) || n ? o.s + (s || 0) + r * o.c : s),
                (o.c = i - o.s),
                l.e && (l.e = b(i) + U(l.e)),
                l.b && (l.b = o.s + U(l.b));
          })(this, t, e, i, s, this._ease(n / this._dur), n)
            ? this.resetTo(t, e, i, s)
            : (X(this, 0),
              this.parent ||
                P(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (a.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? at(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Ze && !0 !== Ze.vars.overwrite)
              ._first || at(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              F(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          r,
          a,
          o,
          l,
          c,
          d,
          h = this._targets,
          u = t ? $e(t) : h,
          p = this._ptLookup,
          f = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var i = t.length, s = i === e.length;
              s && i-- && t[i] === e[i];

            );
            return i < 0;
          })(h, u)
        )
          return "all" === e && (this._pt = 0), at(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (s(e) &&
                ((l = {}),
                w(e, function (t) {
                  return (l[t] = 1);
                }),
                (e = l)),
              (e = (function (t, e) {
                var i,
                  s,
                  n,
                  r,
                  a = t[0] ? v(t[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return e;
                for (s in ((i = _e({}, e)), o))
                  if ((s in i))
                    for (n = (r = o[s].split(",")).length; n--; )
                      i[r[n]] = i[s];
                return i;
              })(h, e))),
            d = h.length;
          d--;

        )
          if (~u.indexOf(h[d]))
            for (l in ((r = p[d]),
            "all" === e
              ? ((n[d] = e), (o = r), (a = {}))
              : ((a = n[d] = n[d] || {}), (o = e)),
            o))
              (c = r && r[l]) &&
                (("kill" in c.d && !0 !== c.d.kill(l)) || L(this, c, "_pt"),
                delete r[l]),
                "all" !== a && (a[l] = 1);
        return this._initted && !this._pt && f && at(this), this;
      }),
      (n.to = function (t, e, i) {
        return new n(t, e, i);
      }),
      (n.from = function (t, e) {
        return V(1, arguments);
      }),
      (n.delayedCall = function (t, e, i, s) {
        return new n(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: i,
          onReverseCompleteParams: i,
          callbackScope: s,
        });
      }),
      (n.fromTo = function (t, e, i) {
        return V(2, arguments);
      }),
      (n.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e);
      }),
      (n.killTweensOf = function (t, e, i) {
        return bt.killTweensOf(t, e, i);
      }),
      n
    );
  })(Ve);
  function ai(t, e, i) {
    return t.setAttribute(e, i);
  }
  function oi(t, e, i, s) {
    s.mSet(t, e, s.m.call(s.tween, i, s.mt), s);
  }
  k(ri.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    w("staggerTo,staggerFrom,staggerFromTo", function (t) {
      ri[t] = function () {
        var e = new Ue(),
          i = ke.call(arguments, 0);
        return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
      };
    });
  var li = function (t, e, i) {
      return (t[e] = i);
    },
    ci = function (t, e, i) {
      return t[e](i);
    },
    di = function (t, e, i, s) {
      return t[e](s.fp, i);
    },
    hi = function (t, e) {
      return n(t[e]) ? ci : a(t[e]) && t.setAttribute ? ai : li;
    },
    ui = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    pi = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    fi = function (t, e) {
      var i = e._pt,
        s = "";
      if (!t && e.b) s = e.b;
      else if (1 === t && e.e) s = e.e;
      else {
        for (; i; )
          (s =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
            s),
            (i = i._next);
        s += e.c;
      }
      e.set(e.t, e.p, s, e);
    },
    mi = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    gi = function (t, e, i, s) {
      for (var n, r = this._pt; r; )
        (n = r._next), r.p === s && r.modifier(t, e, i), (r = n);
    },
    vi = function (t) {
      for (var e, i, s = this._pt; s; )
        (i = s._next),
          (s.p === t && !s.op) || s.op === t
            ? L(this, s, "_pt")
            : s.dep || (e = 1),
          (s = i);
      return !e;
    },
    yi = function (t) {
      for (var e, i, s, n, r = t._pt; r; ) {
        for (e = r._next, i = s; i && i.pr > r.pr; ) i = i._next;
        (r._prev = i ? i._prev : n) ? (r._prev._next = r) : (s = r),
          (r._next = i) ? (i._prev = r) : (n = r),
          (r = e);
      }
      t._pt = s;
    },
    wi =
      ((bi.prototype.modifier = function (t, e, i) {
        (this.mSet = this.mSet || this.set),
          (this.set = oi),
          (this.m = t),
          (this.mt = i),
          (this.tween = e);
      }),
      bi);
  function bi(t, e, i, s, n, r, a, o, l) {
    (this.t = e),
      (this.s = s),
      (this.c = n),
      (this.p = i),
      (this.r = r || ui),
      (this.d = a || this),
      (this.set = o || li),
      (this.pr = l || 0),
      (this._next = t) && (t._prev = this);
  }
  function xi(t) {
    return (Si[t] || Ci).map(function (t) {
      return t();
    });
  }
  function _i() {
    var t = Date.now(),
      e = [];
    2 < t - Mi &&
      (xi("matchMediaInit"),
      Ti.forEach(function (t) {
        var i,
          s,
          n,
          r,
          a = t.queries,
          o = t.conditions;
        for (s in a)
          (i = xt.matchMedia(a[s]).matches) && (n = 1),
            i !== o[s] && ((o[s] = i), (r = 1));
        r && (t.revert(), n && e.push(t));
      }),
      xi("matchMediaRevert"),
      e.forEach(function (t) {
        return t.onMatch(t);
      }),
      (Mi = t),
      xi("matchMedia"));
  }
  w(
    xe +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (fe[t] = 1);
    }
  ),
    (de.TweenMax = de.TweenLite = ri),
    (de.TimelineLite = de.TimelineMax = Ue),
    (bt = new Ue({
      sortChildren: !1,
      defaults: Nt,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ft.stringFilter = ht);
  var Ei,
    Ti = [],
    Si = {},
    Ci = [],
    Mi = 0,
    ki =
      (((Ei = $i.prototype).add = function (t, e, i) {
        function s() {
          var t,
            s = wt,
            a = r.selector;
          return (
            s && s !== r && s.data.push(r),
            i && (r.selector = K(i)),
            (wt = r),
            n((t = e.apply(r, arguments))) && r._r.push(t),
            (wt = s),
            (r.selector = a),
            (r.isReverted = !1),
            t
          );
        }
        n(t) && ((i = e), (e = t), (t = n));
        var r = this;
        return (r.last = s), t === n ? s(r) : t ? (r[t] = s) : s;
      }),
      (Ei.ignore = function (t) {
        var e = wt;
        (wt = null), t(this), (wt = e);
      }),
      (Ei.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (e) {
            return e instanceof $i
              ? t.push.apply(t, e.getTweens())
              : e instanceof ri &&
                  !(e.parent && "nested" === e.parent.data) &&
                  t.push(e);
          }),
          t
        );
      }),
      (Ei.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (Ei.kill = function (t, e) {
        var i = this;
        if (t) {
          var s = this.getTweens();
          this.data.forEach(function (t) {
            "isFlip" === t.data &&
              (t.revert(),
              t.getChildren(!0, !0, !1).forEach(function (t) {
                return s.splice(s.indexOf(t), 1);
              }));
          }),
            s
              .map(function (t) {
                return { g: t.globalTime(0), t: t };
              })
              .sort(function (t, e) {
                return e.g - t.g || -1;
              })
              .forEach(function (e) {
                return e.t.revert(t);
              }),
            this.data.forEach(function (e) {
              return !(e instanceof Ve) && e.revert && e.revert(t);
            }),
            this._r.forEach(function (e) {
              return e(t, i);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (t) {
            return t.kill && t.kill();
          });
        if ((this.clear(), e)) {
          var n = Ti.indexOf(this);
          ~n && Ti.splice(n, 1);
        }
      }),
      (Ei.revert = function (t) {
        this.kill(t || {});
      }),
      $i);
  function $i(t, e) {
    (this.selector = e && K(e)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      t && this.add(t);
  }
  var Oi,
    zi =
      (((Oi = Pi.prototype).add = function (t, e, i) {
        o(t) || (t = { matches: t });
        var s,
          n,
          r,
          a = new ki(0, i || this.scope),
          l = (a.conditions = {});
        for (n in (this.contexts.push(a),
        (e = a.add("onMatch", e)),
        (a.queries = t)))
          "all" === n
            ? (r = 1)
            : (s = xt.matchMedia(t[n])) &&
              (Ti.indexOf(a) < 0 && Ti.push(a),
              (l[n] = s.matches) && (r = 1),
              s.addListener
                ? s.addListener(_i)
                : s.addEventListener("change", _i));
        return r && e(a), this;
      }),
      (Oi.revert = function (t) {
        this.kill(t || {});
      }),
      (Oi.kill = function (t) {
        this.contexts.forEach(function (e) {
          return e.kill(t, !0);
        });
      }),
      Pi);
  function Pi(t) {
    (this.contexts = []), (this.scope = t);
  }
  var Li = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (t) {
        return (function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            i = n(t),
            s =
              e && !i && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            r = {
              init: m,
              render: mi,
              add: ti,
              kill: vi,
              modifier: gi,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: hi,
              aliases: {},
              register: 0,
            };
          if ((Re(), t !== s)) {
            if (ve[e]) return;
            k(s, k(O(t, r), a)),
              _e(s.prototype, _e(r, O(t, a))),
              (ve[(s.prop = e)] = s),
              t.targetTest && (be.push(s), (fe[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          f(e, s), t.register && t.register(Di, s, wi);
        })(t);
      });
    },
    timeline: function (t) {
      return new Ue(t);
    },
    getTweensOf: function (t, e) {
      return bt.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, n) {
      s(t) && (t = $e(t)[0]);
      var r = v(t || {}).get,
        a = i ? M : C;
      return (
        "native" === i && (i = ""),
        t
          ? e
            ? a(((ve[e] && ve[e].get) || r)(t, e, i, n))
            : function (e, i, s) {
                return a(((ve[e] && ve[e].get) || r)(t, e, i, s));
              }
          : t
      );
    },
    quickSetter: function (t, e, i) {
      if (1 < (t = $e(t)).length) {
        var s = t.map(function (t) {
            return Di.quickSetter(t, e, i);
          }),
          n = s.length;
        return function (t) {
          for (var e = n; e--; ) s[e](t);
        };
      }
      t = t[0] || {};
      var r = ve[e],
        a = v(t),
        o = (a.harness && (a.harness.aliases || {})[e]) || e,
        l = r
          ? function (e) {
              var s = new r();
              (Mt._pt = 0),
                s.init(t, i ? e + i : e, Mt, 0, [t]),
                s.render(1, s),
                Mt._pt && mi(1, Mt);
            }
          : a.set(t, o);
      return r
        ? l
        : function (e) {
            return l(t, o, i ? e + i : e, a, 1);
          };
    },
    quickTo: function (t, e, i) {
      function s(t, i, s) {
        return r.resetTo(e, t, i, s);
      }
      var n,
        r = Di.to(
          t,
          _e((((n = {})[e] = "+=0.1"), (n.paused = !0), n), i || {})
        );
      return (s.tween = r), s;
    },
    isTweening: function (t) {
      return 0 < bt.getTweensOf(t, !0).length;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = je(t.ease, Nt.ease)), $(Nt, t || {});
    },
    config: function (t) {
      return $(Ft, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        s = t.plugins,
        n = t.defaults,
        r = t.extendTimeline;
      (s || "").split(",").forEach(function (t) {
        return (
          t && !ve[t] && !de[t] && p(e + " effect requires " + t + " plugin.")
        );
      }),
        (ye[e] = function (t, e, s) {
          return i($e(t), k(e || {}, n), s);
        }),
        r &&
          (Ue.prototype[e] = function (t, i, s) {
            return this.add(ye[e](t, o(i) ? i : (s = i) && {}, this), s);
          });
    },
    registerEase: function (t, e) {
      Be[t] = je(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? je(t, e) : Be;
    },
    getById: function (t) {
      return bt.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var i,
        s,
        n = new Ue(t);
      for (
        n.smoothChildTiming = l(t.smoothChildTiming),
          bt.remove(n),
          n._dp = 0,
          n._time = n._tTime = bt._time,
          i = bt._first;
        i;

      )
        (s = i._next),
          (!e &&
            !i._dur &&
            i instanceof ri &&
            i.vars.onComplete === i._targets[0]) ||
            j(n, i, i._start - i._delay),
          (i = s);
      return j(bt, n, 0), n;
    },
    context: function (t, e) {
      return t ? new ki(t, e) : wt;
    },
    matchMedia: function (t) {
      return new zi(t);
    },
    matchMediaRefresh: function () {
      return (
        Ti.forEach(function (t) {
          var e,
            i,
            s = t.conditions;
          for (i in s) s[i] && ((s[i] = !1), (e = 1));
          e && t.revert();
        }) || _i()
      );
    },
    addEventListener: function (t, e) {
      var i = Si[t] || (Si[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = Si[t],
        s = i && i.indexOf(e);
      0 <= s && i.splice(s, 1);
    },
    utils: {
      wrap: function t(e, i, s) {
        var n = i - e;
        return ie(e)
          ? st(e, t(0, e.length), i)
          : G(s, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function t(e, i, s) {
        var n = i - e,
          r = 2 * n;
        return ie(e)
          ? st(e, t(0, e.length - 1), i)
          : G(s, function (t) {
              return e + (n < (t = (r + ((t - e) % r)) % r || 0) ? r - t : t);
            });
      },
      distribute: J,
      random: it,
      snap: et,
      normalize: function (t, e, i) {
        return Oe(t, e, 0, 1, i);
      },
      getUnit: U,
      clamp: function (t, e, i) {
        return G(i, function (i) {
          return Me(t, e, i);
        });
      },
      splitColor: lt,
      toArray: $e,
      selector: K,
      mapRange: Oe,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (i) {
          return t(parseFloat(i)) + (e || U(i));
        };
      },
      interpolate: function t(e, i, n, r) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var o,
            l,
            c,
            d,
            h,
            u = s(e),
            p = {};
          if ((!0 === n && (r = 1) && (n = null), u))
            (e = { p: e }), (i = { p: i });
          else if (ie(e) && !ie(i)) {
            for (c = [], d = e.length, h = d - 2, l = 1; l < d; l++)
              c.push(t(e[l - 1], e[l]));
            d--,
              (a = function (t) {
                t *= d;
                var e = Math.min(h, ~~t);
                return c[e](t - e);
              }),
              (n = i);
          } else r || (e = _e(ie(e) ? [] : {}, e));
          if (!c) {
            for (o in i) ti.call(p, e, o, "get", i[o]);
            a = function (t) {
              return mi(t, p) || (u ? e.p : e);
            };
          }
        }
        return G(n, a);
      },
      shuffle: Z,
    },
    install: h,
    effects: ye,
    ticker: De,
    updateRoot: Ue.updateRoot,
    plugins: ve,
    globalTimeline: bt,
    core: {
      PropTween: wi,
      globals: f,
      Tween: ri,
      Timeline: Ue,
      Animation: Ve,
      getCache: v,
      _removeLinkedListItem: L,
      reverting: function () {
        return yt;
      },
      context: function (t) {
        return t && wt && (wt.data.push(t), (t._ctx = wt)), wt;
      },
      suppressOverwrites: function (t) {
        return (vt = t);
      },
    },
  };
  function Ai(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  }
  function Ii(t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, i, n) {
        n._onInit = function (t) {
          var n, r;
          if (
            (s(i) &&
              ((n = {}),
              w(i, function (t) {
                return (n[t] = 1);
              }),
              (i = n)),
            e)
          ) {
            for (r in ((n = {}), i)) n[r] = e(i[r]);
            i = n;
          }
          !(function (t, e) {
            var i,
              s,
              n,
              r = t._targets;
            for (i in e)
              for (s = r.length; s--; )
                (n = (n = t._ptLookup[s][i]) && n.d) &&
                  (n._pt && (n = Ai(n, i)),
                  n && n.modifier && n.modifier(e[i], t, r[s], i));
          })(t, i);
        };
      },
    };
  }
  w("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Li[t] = ri[t]);
  }),
    De.add(Ue.updateRoot),
    (Mt = Li.to({}, { duration: 0 }));
  var Di =
    Li.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, s, n) {
          var r, a, o;
          for (r in ((this.tween = i), e))
            (o = t.getAttribute(r) || ""),
              ((a = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[r],
                s,
                n,
                0,
                0,
                r
              )).op = r),
              (a.b = o),
              this._props.push(r);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            yt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Ii("roundProps", tt),
      Ii("modifiers"),
      Ii("snap", et)
    ) || Li;
  function Ri(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Bi(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function Yi(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function Xi(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Wi(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function ji(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function qi(t, e, i) {
    return (t.style[e] = i);
  }
  function Hi(t, e, i) {
    return t.style.setProperty(e, i);
  }
  function Fi(t, e, i) {
    return (t._gsap[e] = i);
  }
  function Ni(t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  }
  function Vi(t, e, i, s, n) {
    var r = t._gsap;
    (r.scaleX = r.scaleY = i), r.renderTransform(n, r);
  }
  function Gi(t, e, i, s, n) {
    var r = t._gsap;
    (r[e] = i), r.renderTransform(n, r);
  }
  function Ui(t, e) {
    var i = this,
      s = this.target,
      n = s.style;
    if (t in Ns) {
      if (
        ((this.tfm = this.tfm || {}),
        "transform" !== t &&
          (~(t = Js[t] || t).indexOf(",")
            ? t.split(",").forEach(function (t) {
                return (i.tfm[t] = on(s, t));
              })
            : (this.tfm[t] = s._gsap.x ? s._gsap[t] : on(s, t))),
        0 <= this.props.indexOf(tn))
      )
        return;
      s._gsap.svg &&
        ((this.svgo = s.getAttribute("data-svg-origin")),
        this.props.push(en, e, "")),
        (t = tn);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Qi(t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  }
  function Ki() {
    var t,
      e,
      i = this.props,
      s = this.target,
      n = s.style,
      r = s._gsap;
    for (t = 0; t < i.length; t += 3)
      i[t + 1]
        ? (s[i[t]] = i[t + 2])
        : i[t + 2]
        ? (n[i[t]] = i[t + 2])
        : n.removeProperty(i[t].replace(Qs, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) r[e] = this.tfm[e];
      r.svg &&
        (r.renderTransform(),
        s.setAttribute("data-svg-origin", this.svgo || "")),
        !(t = Cs()) || t.isStart || n[tn] || (Qi(n), (r.uncache = 1));
    }
  }
  function Zi(t, e) {
    var i = { target: t, props: [], revert: Ki, save: Ui };
    return (
      e &&
        e.split(",").forEach(function (t) {
          return i.save(t);
        }),
      i
    );
  }
  function Ji(t, e) {
    var i = xs.createElementNS
      ? xs.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : xs.createElement(t);
    return i.style ? i : xs.createElement(t);
  }
  function ts(t, e, i) {
    var s = getComputedStyle(t);
    return (
      s[e] ||
      s.getPropertyValue(e.replace(Qs, "-$1").toLowerCase()) ||
      s.getPropertyValue(e) ||
      (!i && ts(t, nn(e) || e, 1)) ||
      ""
    );
  }
  function es() {
    "undefined" != typeof window &&
      window.document &&
      ((bs = window),
      (xs = bs.document),
      (_s = xs.documentElement),
      (Ts = Ji("div") || { style: {} }),
      Ji("div"),
      (tn = nn(tn)),
      (en = tn + "Origin"),
      (Ts.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ms = !!nn("perspective")),
      (Cs = Di.core.reverting),
      (Es = 1));
  }
  function is(t) {
    var e,
      i = Ji(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      s = this.parentNode,
      n = this.nextSibling,
      r = this.style.cssText;
    if (
      (_s.appendChild(i),
      i.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = is);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      s && (n ? s.insertBefore(this, n) : s.appendChild(this)),
      _s.removeChild(i),
      (this.style.cssText = r),
      e
    );
  }
  function ss(t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  }
  function ns(t) {
    var e;
    try {
      e = t.getBBox();
    } catch (i) {
      e = is.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === is || (e = is.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +ss(t, ["x", "cx", "x1"]) || 0,
            y: +ss(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function rs(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ns(t));
  }
  function as(t, e) {
    if (e) {
      var i = t.style;
      e in Ns && e !== en && (e = tn),
        i.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            i.removeProperty(e.replace(Qs, "-$1").toLowerCase()))
          : i.removeAttribute(e);
    }
  }
  function os(t, e, i, s, n, r) {
    var a = new wi(t._pt, e, i, 0, 1, r ? ji : Wi);
    return ((t._pt = a).b = s), (a.e = n), t._props.push(i), a;
  }
  function ls(t, e, i, s) {
    var n,
      r,
      a,
      o,
      l = parseFloat(i) || 0,
      c = (i + "").trim().substr((l + "").length) || "px",
      d = Ts.style,
      h = Ks.test(e),
      u = "svg" === t.tagName.toLowerCase(),
      p = (u ? "client" : "offset") + (h ? "Width" : "Height"),
      f = "px" === s,
      m = "%" === s;
    return s === c || !l || rn[s] || rn[c]
      ? l
      : ("px" === c || f || (l = ls(t, e, i, "px")),
        (o = t.getCTM && rs(t)),
        (!m && "%" !== c) || (!Ns[e] && !~e.indexOf("adius"))
          ? ((d[h ? "width" : "height"] = 100 + (f ? c : s)),
            (r =
              ~e.indexOf("adius") || ("em" === s && t.appendChild && !u)
                ? t
                : t.parentNode),
            o && (r = (t.ownerSVGElement || {}).parentNode),
            (r && r !== xs && r.appendChild) || (r = xs.body),
            (a = r._gsap) &&
            m &&
            a.width &&
            h &&
            a.time === De.time &&
            !a.uncache
              ? b((l / a.width) * 100)
              : ((!m && "%" !== c) ||
                  an[ts(r, "display")] ||
                  (d.position = ts(t, "position")),
                r === t && (d.position = "static"),
                r.appendChild(Ts),
                (n = Ts[p]),
                r.removeChild(Ts),
                (d.position = "absolute"),
                h && m && (((a = v(r)).time = De.time), (a.width = r[p])),
                b(f ? (n * l) / 100 : n && l ? (100 / n) * l : 0)))
          : ((n = o ? t.getBBox()[h ? "width" : "height"] : t[p]),
            b(m ? (l / n) * 100 : (l / 100) * n)));
  }
  function cs(t, e, i, s) {
    if (!i || "none" === i) {
      var n = nn(e, t, 1),
        r = n && ts(t, n, 1);
      r && r !== i
        ? ((e = n), (i = r))
        : "borderColor" === e && (i = ts(t, "borderTopColor"));
    }
    var a,
      o,
      l,
      c,
      d,
      h,
      u,
      p,
      f,
      m,
      g,
      v = new wi(this._pt, t.style, e, 0, 1, fi),
      y = 0,
      w = 0;
    if (
      ((v.b = i),
      (v.e = s),
      (i += ""),
      "auto" == (s += "") &&
        ((t.style[e] = s), (s = ts(t, e) || s), (t.style[e] = i)),
      ht((a = [i, s])),
      (s = a[1]),
      (l = (i = a[0]).match(re) || []),
      (s.match(re) || []).length)
    ) {
      for (; (o = re.exec(s)); )
        (u = o[0]),
          (f = s.substring(y, o.index)),
          d
            ? (d = (d + 1) % 5)
            : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) || (d = 1),
          u !== (h = l[w++] || "") &&
            ((c = parseFloat(h) || 0),
            (g = h.substr((c + "").length)),
            "=" === u.charAt(1) && (u = _(c, u) + g),
            (p = parseFloat(u)),
            (m = u.substr((p + "").length)),
            (y = re.lastIndex - m.length),
            m ||
              ((m = m || Ft.units[e] || g),
              y === s.length && ((s += m), (v.e += m))),
            g !== m && (c = ls(t, e, h, m) || 0),
            (v._pt = {
              _next: v._pt,
              p: f || 1 === w ? f : ",",
              s: c,
              c: p - c,
              m: (d && d < 4) || "zIndex" === e ? Math.round : 0,
            }));
      v.c = y < s.length ? s.substring(y, s.length) : "";
    } else v.r = "display" === e && "none" === s ? ji : Wi;
    return oe.test(s) && (v.e = 0), (this._pt = v);
  }
  function ds(t) {
    var e = t.split(" "),
      i = e[0],
      s = e[1] || "50%";
    return (
      ("top" !== i && "bottom" !== i && "left" !== s && "right" !== s) ||
        ((t = i), (i = s), (s = t)),
      (e[0] = ln[i] || i),
      (e[1] = ln[s] || s),
      e.join(" ")
    );
  }
  function hs(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i,
        s,
        n,
        r = e.t,
        a = r.style,
        o = e.u,
        l = r._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (s = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (i = o[n]),
            Ns[i] && ((s = 1), (i = "transformOrigin" === i ? en : tn)),
            as(r, i);
      s &&
        (as(r, tn),
        l &&
          (l.svg && r.removeAttribute("transform"),
          un(r, 1),
          (l.uncache = 1),
          Qi(a)));
    }
  }
  function us(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function ps(t) {
    var e = ts(t, tn);
    return us(e) ? dn : e.substr(7).match(ne).map(b);
  }
  function fs(t, e) {
    var i,
      s,
      n,
      r,
      a = t._gsap || v(t),
      o = t.style,
      l = ps(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (l = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? dn
        : l
      : (l !== dn ||
          t.offsetParent ||
          t === _s ||
          a.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((i = t.parentNode) && t.offsetParent) ||
            ((r = 1), (s = t.nextElementSibling), _s.appendChild(t)),
          (l = ps(t)),
          n ? (o.display = n) : as(t, "display"),
          r &&
            (s
              ? i.insertBefore(t, s)
              : i
              ? i.appendChild(t)
              : _s.removeChild(t))),
        e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  }
  function ms(t, e, i, s, n, r) {
    var a,
      o,
      l,
      c = t._gsap,
      d = n || fs(t, !0),
      h = c.xOrigin || 0,
      u = c.yOrigin || 0,
      p = c.xOffset || 0,
      f = c.yOffset || 0,
      m = d[0],
      g = d[1],
      v = d[2],
      y = d[3],
      w = d[4],
      b = d[5],
      x = e.split(" "),
      _ = parseFloat(x[0]) || 0,
      E = parseFloat(x[1]) || 0;
    i
      ? d !== dn &&
        (o = m * y - g * v) &&
        ((l = _ * (-g / o) + E * (m / o) - (m * b - g * w) / o),
        (_ = _ * (y / o) + E * (-v / o) + (v * b - y * w) / o),
        (E = l))
      : ((_ = (a = ns(t)).x + (~x[0].indexOf("%") ? (_ / 100) * a.width : _)),
        (E = a.y + (~(x[1] || x[0]).indexOf("%") ? (E / 100) * a.height : E))),
      s || (!1 !== s && c.smooth)
        ? ((w = _ - h),
          (b = E - u),
          (c.xOffset = p + (w * m + b * v) - w),
          (c.yOffset = f + (w * g + b * y) - b))
        : (c.xOffset = c.yOffset = 0),
      (c.xOrigin = _),
      (c.yOrigin = E),
      (c.smooth = !!s),
      (c.origin = e),
      (c.originIsAbsolute = !!i),
      (t.style[en] = "0px 0px"),
      r &&
        (os(r, c, "xOrigin", h, _),
        os(r, c, "yOrigin", u, E),
        os(r, c, "xOffset", p, c.xOffset),
        os(r, c, "yOffset", f, c.yOffset)),
      t.setAttribute("data-svg-origin", _ + " " + E);
  }
  function gs(t, e, i) {
    var s = U(e);
    return b(parseFloat(e) + parseFloat(ls(t, "x", i + "px", s))) + s;
  }
  function vs(t, e, i, n, r) {
    var a,
      o,
      l = 360,
      c = s(r),
      d = parseFloat(r) * (c && ~r.indexOf("rad") ? Vs : 1) - n,
      h = n + d + "deg";
    return (
      c &&
        ("short" === (a = r.split("_")[1]) &&
          (d %= l) != d % 180 &&
          (d += d < 0 ? l : -l),
        "cw" === a && d < 0
          ? (d = ((d + 36e9) % l) - ~~(d / l) * l)
          : "ccw" === a && 0 < d && (d = ((d - 36e9) % l) - ~~(d / l) * l)),
      (t._pt = o = new wi(t._pt, e, i, n, d, Bi)),
      (o.e = h),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  }
  function ys(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }
  function ws(t, e, i) {
    var s,
      n,
      r,
      a,
      o,
      l,
      c,
      d = ys({}, i._gsap),
      h = i.style;
    for (n in (d.svg
      ? ((r = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (h[tn] = e),
        (s = un(i, 1)),
        as(i, tn),
        i.setAttribute("transform", r))
      : ((r = getComputedStyle(i)[tn]),
        (h[tn] = e),
        (s = un(i, 1)),
        (h[tn] = r)),
    Ns))
      (r = d[n]) !== (a = s[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = U(r) !== (c = U(a)) ? ls(i, n, r, c) : parseFloat(r)),
        (l = parseFloat(a)),
        (t._pt = new wi(t._pt, s, n, o, l - o, Ri)),
        (t._pt.u = c || 0),
        t._props.push(n));
    ys(s, d);
  }
  (ri.version = Ue.version = Di.version = "3.11.4"), (St = 1), c() && Re();
  var bs,
    xs,
    _s,
    Es,
    Ts,
    Ss,
    Cs,
    Ms,
    ks = Be.Power0,
    $s = Be.Power1,
    Os = Be.Power2,
    zs = Be.Power3,
    Ps = Be.Power4,
    Ls = Be.Linear,
    As = Be.Quad,
    Is = Be.Cubic,
    Ds = Be.Quart,
    Rs = Be.Quint,
    Bs = Be.Strong,
    Ys = Be.Elastic,
    Xs = Be.Back,
    Ws = Be.SteppedEase,
    js = Be.Bounce,
    qs = Be.Sine,
    Hs = Be.Expo,
    Fs = Be.Circ,
    Ns = {},
    Vs = 180 / Math.PI,
    Gs = Math.PI / 180,
    Us = Math.atan2,
    Qs = /([A-Z])/g,
    Ks = /(left|right|width|margin|padding|x)/i,
    Zs = /[\s,\(]\S/,
    Js = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    tn = "transform",
    en = tn + "Origin",
    sn = "O,Moz,ms,Ms,Webkit".split(","),
    nn = function (t, e, i) {
      var s = (e || Ts).style,
        n = 5;
      if (t in s && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(sn[n] + t in s);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? sn[n] : "") + t;
    },
    rn = { deg: 1, rad: 1, turn: 1 },
    an = { grid: 1, flex: 1 },
    on = function (t, e, i, s) {
      var n;
      return (
        Es || es(),
        e in Js &&
          "transform" !== e &&
          ~(e = Js[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Ns[e] && "transform" !== e
          ? ((n = un(t, s)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : n.svg
                ? n.origin
                : pn(ts(t, en)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) &&
              "auto" !== n &&
              !s &&
              !~(n + "").indexOf("calc(")) ||
            (n =
              (cn[e] && cn[e](t, e, i)) ||
              ts(t, e) ||
              y(t, e) ||
              ("opacity" === e ? 1 : 0)),
        i && !~(n + "").trim().indexOf(" ") ? ls(t, e, n, i) + i : n
      );
    },
    ln = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    cn = {
      clearProps: function (t, e, i, s, n) {
        if ("isFromStart" !== n.data) {
          var r = (t._pt = new wi(t._pt, e, i, 0, 0, hs));
          return (r.u = s), (r.pr = -10), (r.tween = n), t._props.push(i), 1;
        }
      },
    },
    dn = [1, 0, 0, 1, 0, 0],
    hn = {},
    un = function (t, e) {
      var i = t._gsap || new Ne(t);
      if ("x" in i && !e && !i.uncache) return i;
      var s,
        n,
        r,
        a,
        o,
        l,
        c,
        d,
        h,
        u,
        p,
        f,
        m,
        g,
        v,
        y,
        w,
        x,
        _,
        E,
        T,
        S,
        C,
        M,
        k,
        $,
        O,
        z,
        P,
        L,
        A,
        I,
        D = t.style,
        R = i.scaleX < 0,
        B = "deg",
        Y = getComputedStyle(t),
        X = ts(t, en) || "0";
      return (
        (s = n = r = l = c = d = h = u = p = 0),
        (a = o = 1),
        (i.svg = !(!t.getCTM || !rs(t))),
        Y.translate &&
          (("none" === Y.translate &&
            "none" === Y.scale &&
            "none" === Y.rotate) ||
            (D[tn] =
              ("none" !== Y.translate
                ? "translate3d(" +
                  (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") +
              ("none" !== Y.scale
                ? "scale(" + Y.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== Y[tn] ? Y[tn] : "")),
          (D.scale = D.rotate = D.translate = "none")),
        (g = fs(t, i.svg)),
        i.svg &&
          ((M = i.uncache
            ? ((k = t.getBBox()),
              (X = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px"),
              "")
            : !e && t.getAttribute("data-svg-origin")),
          ms(t, M || X, !!M || i.originIsAbsolute, !1 !== i.smooth, g)),
        (f = i.xOrigin || 0),
        (m = i.yOrigin || 0),
        g !== dn &&
          ((x = g[0]),
          (_ = g[1]),
          (E = g[2]),
          (T = g[3]),
          (s = S = g[4]),
          (n = C = g[5]),
          6 === g.length
            ? ((a = Math.sqrt(x * x + _ * _)),
              (o = Math.sqrt(T * T + E * E)),
              (l = x || _ ? Us(_, x) * Vs : 0),
              (h = E || T ? Us(E, T) * Vs + l : 0) &&
                (o *= Math.abs(Math.cos(h * Gs))),
              i.svg && ((s -= f - (f * x + m * E)), (n -= m - (f * _ + m * T))))
            : ((I = g[6]),
              (L = g[7]),
              (O = g[8]),
              (z = g[9]),
              (P = g[10]),
              (A = g[11]),
              (s = g[12]),
              (n = g[13]),
              (r = g[14]),
              (c = (v = Us(I, P)) * Vs),
              v &&
                ((M = S * (y = Math.cos(-v)) + O * (w = Math.sin(-v))),
                (k = C * y + z * w),
                ($ = I * y + P * w),
                (O = S * -w + O * y),
                (z = C * -w + z * y),
                (P = I * -w + P * y),
                (A = L * -w + A * y),
                (S = M),
                (C = k),
                (I = $)),
              (d = (v = Us(-E, P)) * Vs),
              v &&
                ((y = Math.cos(-v)),
                (A = T * (w = Math.sin(-v)) + A * y),
                (x = M = x * y - O * w),
                (_ = k = _ * y - z * w),
                (E = $ = E * y - P * w)),
              (l = (v = Us(_, x)) * Vs),
              v &&
                ((M = x * (y = Math.cos(v)) + _ * (w = Math.sin(v))),
                (k = S * y + C * w),
                (_ = _ * y - x * w),
                (C = C * y - S * w),
                (x = M),
                (S = k)),
              c &&
                359.9 < Math.abs(c) + Math.abs(l) &&
                ((c = l = 0), (d = 180 - d)),
              (a = b(Math.sqrt(x * x + _ * _ + E * E))),
              (o = b(Math.sqrt(C * C + I * I))),
              (v = Us(S, C)),
              (h = 2e-4 < Math.abs(v) ? v * Vs : 0),
              (p = A ? 1 / (A < 0 ? -A : A) : 0)),
          i.svg &&
            ((M = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !us(ts(t, tn))),
            M && t.setAttribute("transform", M))),
        90 < Math.abs(h) &&
          Math.abs(h) < 270 &&
          (R
            ? ((a *= -1),
              (h += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((o *= -1), (h += h <= 0 ? 180 : -180))),
        (e = e || i.uncache),
        (i.x =
          s -
          ((i.xPercent =
            s &&
            ((!e && i.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-s) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          "px"),
        (i.y =
          n -
          ((i.yPercent =
            n &&
            ((!e && i.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          "px"),
        (i.z = r + "px"),
        (i.scaleX = b(a)),
        (i.scaleY = b(o)),
        (i.rotation = b(l) + B),
        (i.rotationX = b(c) + B),
        (i.rotationY = b(d) + B),
        (i.skewX = h + B),
        (i.skewY = u + B),
        (i.transformPerspective = p + "px"),
        (i.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (D[en] = pn(X)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ft.force3D),
        (i.renderTransform = i.svg ? wn : Ms ? yn : fn),
        (i.uncache = 0),
        i
      );
    },
    pn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    fn = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        yn(t, e);
    },
    mn = "0deg",
    gn = "0px",
    vn = ") ",
    yn = function (t, e) {
      var i = e || this,
        s = i.xPercent,
        n = i.yPercent,
        r = i.x,
        a = i.y,
        o = i.z,
        l = i.rotation,
        c = i.rotationY,
        d = i.rotationX,
        h = i.skewX,
        u = i.skewY,
        p = i.scaleX,
        f = i.scaleY,
        m = i.transformPerspective,
        g = i.force3D,
        v = i.target,
        y = i.zOrigin,
        w = "",
        b = ("auto" === g && t && 1 !== t) || !0 === g;
      if (y && (d !== mn || c !== mn)) {
        var x,
          _ = parseFloat(c) * Gs,
          E = Math.sin(_),
          T = Math.cos(_);
        (_ = parseFloat(d) * Gs),
          (r = gs(v, r, E * (x = Math.cos(_)) * -y)),
          (a = gs(v, a, -Math.sin(_) * -y)),
          (o = gs(v, o, T * x * -y + y));
      }
      m !== gn && (w += "perspective(" + m + vn),
        (s || n) && (w += "translate(" + s + "%, " + n + "%) "),
        (!b && r === gn && a === gn && o === gn) ||
          (w +=
            o !== gn || b
              ? "translate3d(" + r + ", " + a + ", " + o + ") "
              : "translate(" + r + ", " + a + vn),
        l !== mn && (w += "rotate(" + l + vn),
        c !== mn && (w += "rotateY(" + c + vn),
        d !== mn && (w += "rotateX(" + d + vn),
        (h === mn && u === mn) || (w += "skew(" + h + ", " + u + vn),
        (1 === p && 1 === f) || (w += "scale(" + p + ", " + f + vn),
        (v.style[tn] = w || "translate(0, 0)");
    },
    wn = function (t, e) {
      var i,
        s,
        n,
        r,
        a,
        o = e || this,
        l = o.xPercent,
        c = o.yPercent,
        d = o.x,
        h = o.y,
        u = o.rotation,
        p = o.skewX,
        f = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        y = o.xOrigin,
        w = o.yOrigin,
        x = o.xOffset,
        _ = o.yOffset,
        E = o.forceCSS,
        T = parseFloat(d),
        S = parseFloat(h);
      (u = parseFloat(u)),
        (p = parseFloat(p)),
        (f = parseFloat(f)) && ((p += f = parseFloat(f)), (u += f)),
        u || p
          ? ((u *= Gs),
            (p *= Gs),
            (i = Math.cos(u) * m),
            (s = Math.sin(u) * m),
            (n = Math.sin(u - p) * -g),
            (r = Math.cos(u - p) * g),
            p &&
              ((f *= Gs),
              (a = Math.tan(p - f)),
              (n *= a = Math.sqrt(1 + a * a)),
              (r *= a),
              f &&
                ((a = Math.tan(f)), (i *= a = Math.sqrt(1 + a * a)), (s *= a))),
            (i = b(i)),
            (s = b(s)),
            (n = b(n)),
            (r = b(r)))
          : ((i = m), (r = g), (s = n = 0)),
        ((T && !~(d + "").indexOf("px")) || (S && !~(h + "").indexOf("px"))) &&
          ((T = ls(v, "x", d, "px")), (S = ls(v, "y", h, "px"))),
        (y || w || x || _) &&
          ((T = b(T + y - (y * i + w * n) + x)),
          (S = b(S + w - (y * s + w * r) + _))),
        (l || c) &&
          ((T = b(T + (l / 100) * (a = v.getBBox()).width)),
          (S = b(S + (c / 100) * a.height))),
        (a =
          "matrix(" +
          i +
          "," +
          s +
          "," +
          n +
          "," +
          r +
          "," +
          T +
          "," +
          S +
          ")"),
        v.setAttribute("transform", a),
        E && (v.style[tn] = a);
    };
  w("padding,margin,Width,Radius", function (t, e) {
    var i = "Right",
      s = "Bottom",
      n = "Left",
      r = (e < 3 ? ["Top", i, s, n] : ["Top" + n, "Top" + i, s + i, s + n]).map(
        function (i) {
          return e < 2 ? t + i : "border" + i + t;
        }
      );
    cn[1 < e ? "border" + t : t] = function (t, e, i, s, n) {
      var a, o;
      if (arguments.length < 4)
        return (
          (a = r.map(function (e) {
            return on(t, e, i);
          })),
          5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
        );
      (a = (s + "").split(" ")),
        (o = {}),
        r.forEach(function (t, e) {
          return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        t.init(e, o, n);
    };
  });
  var bn,
    xn,
    _n = {
      name: "css",
      register: es,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, i, n, r) {
        var a,
          o,
          l,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          w,
          b,
          x,
          E,
          T = this._props,
          S = t.style,
          C = i.vars.startAt;
        for (p in (Es || es(),
        (this.styles = this.styles || Zi(t)),
        (E = this.styles.props),
        (this.tween = i),
        e))
          if (
            "autoRound" !== p &&
            ((o = e[p]), !ve[p] || !Qe(p, e, i, n, t, r))
          )
            if (
              ((d = typeof o),
              (h = cn[p]),
              "function" === d && (d = typeof (o = o.call(i, n, t, r))),
              "string" === d && ~o.indexOf("random(") && (o = nt(o)),
              h)
            )
              h(this, t, p, o, i) && (x = 1);
            else if ("--" === p.substr(0, 2))
              (a = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
                (o += ""),
                (Ae.lastIndex = 0),
                Ae.test(a) || ((f = U(a)), (m = U(o))),
                m ? f !== m && (a = ls(t, p, a, m) + m) : f && (o += f),
                this.add(S, "setProperty", a, o, n, r, 0, 0, p),
                T.push(p),
                E.push(p, 0, S[p]);
            else if ("undefined" !== d) {
              if (
                (C && p in C
                  ? (s(
                      (a =
                        "function" == typeof C[p]
                          ? C[p].call(i, n, t, r)
                          : C[p])
                    ) &&
                      ~a.indexOf("random(") &&
                      (a = nt(a)),
                    U(a + "") || (a += Ft.units[p] || U(on(t, p)) || ""),
                    "=" === (a + "").charAt(1) && (a = on(t, p)))
                  : (a = on(t, p)),
                (c = parseFloat(a)),
                (g = "string" === d && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (l = parseFloat(o)),
                p in Js &&
                  ("autoAlpha" === p &&
                    (1 === c &&
                      "hidden" === on(t, "visibility") &&
                      l &&
                      (c = 0),
                    E.push("visibility", 0, S.visibility),
                    os(
                      this,
                      S,
                      "visibility",
                      c ? "inherit" : "hidden",
                      l ? "inherit" : "hidden",
                      !l
                    )),
                  "scale" !== p &&
                    "transform" !== p &&
                    ~(p = Js[p]).indexOf(",") &&
                    (p = p.split(",")[0])),
                (v = p in Ns))
              )
                if (
                  (this.styles.save(p),
                  y ||
                    (((w = t._gsap).renderTransform && !e.parseTransform) ||
                      un(t, e.parseTransform),
                    (b = !1 !== e.smoothOrigin && w.smooth),
                    ((y = this._pt =
                      new wi(
                        this._pt,
                        S,
                        tn,
                        0,
                        1,
                        w.renderTransform,
                        w,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === p)
                )
                  (this._pt = new wi(
                    this._pt,
                    w,
                    "scaleY",
                    w.scaleY,
                    (g ? _(w.scaleY, g + l) : l) - w.scaleY || 0,
                    Ri
                  )),
                    (this._pt.u = 0),
                    T.push("scaleY", p),
                    (p += "X");
                else {
                  if ("transformOrigin" === p) {
                    E.push(en, 0, S[en]),
                      (o = ds(o)),
                      w.svg
                        ? ms(t, o, 0, b, 0, this)
                        : ((m = parseFloat(o.split(" ")[2]) || 0) !==
                            w.zOrigin && os(this, w, "zOrigin", w.zOrigin, m),
                          os(this, S, p, pn(a), pn(o)));
                    continue;
                  }
                  if ("svgOrigin" === p) {
                    ms(t, o, 1, b, 0, this);
                    continue;
                  }
                  if (p in hn) {
                    vs(this, w, p, c, g ? _(c, g + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === p) {
                    os(this, w, "smooth", w.smooth, o);
                    continue;
                  }
                  if ("force3D" === p) {
                    w[p] = o;
                    continue;
                  }
                  if ("transform" === p) {
                    ws(this, o, t);
                    continue;
                  }
                }
              else p in S || (p = nn(p) || p);
              if (
                v ||
                ((l || 0 === l) && (c || 0 === c) && !Zs.test(o) && p in S)
              )
                (l = l || 0),
                  (f = (a + "").substr((c + "").length)) !==
                    (m = U(o) || (p in Ft.units ? Ft.units[p] : f)) &&
                    (c = ls(t, p, a, m)),
                  (this._pt = new wi(
                    this._pt,
                    v ? w : S,
                    p,
                    c,
                    (g ? _(c, g + l) : l) - c,
                    v || ("px" !== m && "zIndex" !== p) || !1 === e.autoRound
                      ? Ri
                      : Xi
                  )),
                  (this._pt.u = m || 0),
                  f !== m && "%" !== m && ((this._pt.b = a), (this._pt.r = Yi));
              else if (p in S) cs.call(this, t, p, a, g ? g + o : o);
              else if (p in t) this.add(t, p, a || t[p], g ? g + o : o, n, r);
              else if ("parseTransform" !== p) {
                u(p, o);
                continue;
              }
              v || (p in S ? E.push(p, 0, S[p]) : E.push(p, 1, a || t[p])),
                T.push(p);
            }
        x && yi(this);
      },
      render: function (t, e) {
        if (e.tween._time || !Cs())
          for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
        else e.styles.revert();
      },
      get: on,
      aliases: Js,
      getSetter: function (t, e, i) {
        var s = Js[e];
        return (
          s && s.indexOf(",") < 0 && (e = s),
          e in Ns && e !== en && (t._gsap.x || on(t, "x"))
            ? i && Ss === i
              ? "scale" === e
                ? Ni
                : Fi
              : (Ss = i || {}) && ("scale" === e ? Vi : Gi)
            : t.style && !a(t.style[e])
            ? qi
            : ~e.indexOf("-")
            ? Hi
            : hi(t, e)
        );
      },
      core: { _removeProperty: as, _getMatrix: fs },
    };
  (Di.utils.checkPrefix = nn),
    (Di.core.getStyleSaver = Zi),
    (xn = w(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
        "," +
        (bn = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Ns[t] = 1;
      }
    )),
    w(bn, function (t) {
      (Ft.units[t] = "deg"), (hn[t] = 1);
    }),
    (Js[xn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + bn),
    w(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Js[e[1]] = xn[e[0]];
      }
    ),
    w(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        Ft.units[t] = "px";
      }
    ),
    Di.registerPlugin(_n);
  var En = Di.registerPlugin(_n) || Di,
    Tn = En.core.Tween;
  (t.Back = Xs),
    (t.Bounce = js),
    (t.CSSPlugin = _n),
    (t.Circ = Fs),
    (t.Cubic = Is),
    (t.Elastic = Ys),
    (t.Expo = Hs),
    (t.Linear = Ls),
    (t.Power0 = ks),
    (t.Power1 = $s),
    (t.Power2 = Os),
    (t.Power3 = zs),
    (t.Power4 = Ps),
    (t.Quad = As),
    (t.Quart = Ds),
    (t.Quint = Rs),
    (t.Sine = qs),
    (t.SteppedEase = Ws),
    (t.Strong = Bs),
    (t.TimelineLite = Ue),
    (t.TimelineMax = Ue),
    (t.TweenLite = ri),
    (t.TweenMax = Tn),
    (t.default = En),
    (t.gsap = En),
    "undefined" == typeof window || window !== t
      ? Object.defineProperty(t, "__esModule", { value: !0 })
      : delete t.default;
}),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    let e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (!t || !e) return this;
        let i = (this._events = this._events || {}),
          s = (i[t] = i[t] || []);
        return s.includes(e) || s.push(e), this;
      }),
      (e.once = function (t, e) {
        if (!t || !e) return this;
        this.on(t, e);
        let i = (this._onceEvents = this._onceEvents || {});
        return ((i[t] = i[t] || {})[e] = !0), this;
      }),
      (e.off = function (t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        let s = i.indexOf(e);
        return -1 != s && i.splice(s, 1), this;
      }),
      (e.emitEvent = function (t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        (i = i.slice(0)), (e = e || []);
        let s = this._onceEvents && this._onceEvents[t];
        for (let n of i)
          s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e);
        return this;
      }),
      (e.allOff = function () {
        return delete this._events, delete this._onceEvents, this;
      }),
      t
    );
  }),
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : this, function (t, e) {
    let i = t.jQuery,
      s = t.console;
    function n(t, e, r) {
      if (!(this instanceof n)) return new n(t, e, r);
      let a = t;
      var o;
      "string" == typeof t && (a = document.querySelectorAll(t)),
        a
          ? ((this.elements =
              ((o = a),
              Array.isArray(o)
                ? o
                : "object" == typeof o && "number" == typeof o.length
                ? [...o]
                : [o])),
            (this.options = {}),
            "function" == typeof e ? (r = e) : Object.assign(this.options, e),
            r && this.on("always", r),
            this.getImages(),
            i && (this.jqDeferred = new i.Deferred()),
            setTimeout(this.check.bind(this)))
          : s.error(`Bad element for imagesLoaded ${a || t}`);
    }
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      });
    const r = [1, 9, 11];
    n.prototype.addElementImages = function (t) {
      "IMG" === t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
      let { nodeType: e } = t;
      if (!e || !r.includes(e)) return;
      let i = t.querySelectorAll("img");
      for (let t of i) this.addImage(t);
      if ("string" == typeof this.options.background) {
        let e = t.querySelectorAll(this.options.background);
        for (let t of e) this.addElementBackgroundImages(t);
      }
    };
    const a = /url\((['"])?(.*?)\1\)/gi;
    function o(t) {
      this.img = t;
    }
    function l(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (n.prototype.addElementBackgroundImages = function (t) {
        let e = getComputedStyle(t);
        if (!e) return;
        let i = a.exec(e.backgroundImage);
        for (; null !== i; ) {
          let s = i && i[2];
          s && this.addBackground(s, t), (i = a.exec(e.backgroundImage));
        }
      }),
      (n.prototype.addImage = function (t) {
        let e = new o(t);
        this.images.push(e);
      }),
      (n.prototype.addBackground = function (t, e) {
        let i = new l(t, e);
        this.images.push(i);
      }),
      (n.prototype.check = function () {
        if (
          ((this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          !this.images.length)
        )
          return void this.complete();
        let t = (t, e, i) => {
          setTimeout(() => {
            this.progress(t, e, i);
          });
        };
        this.images.forEach(function (e) {
          e.once("progress", t), e.check();
        });
      }),
      (n.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount === this.images.length && this.complete(),
          this.options.debug && s && s.log(`progress: ${i}`, t, e);
      }),
      (n.prototype.complete = function () {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          let t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (o.prototype = Object.create(e.prototype)),
      (o.prototype.check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.img.crossOrigin &&
              (this.proxyImage.crossOrigin = this.img.crossOrigin),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.currentSrc || this.img.src));
      }),
      (o.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (o.prototype.confirm = function (t, e) {
        this.isLoaded = t;
        let { parentNode: i } = this.img,
          s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e]);
      }),
      (o.prototype.handleEvent = function (t) {
        let e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (l.prototype = Object.create(o.prototype)),
      (l.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (l.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (l.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (n.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((i = e),
          (i.fn.imagesLoaded = function (t, e) {
            return new n(this, t, e).jqDeferred.promise(i(this));
          }));
      }),
      n.makeJQueryPlugin(),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    function i(i, r, o) {
      function l(t, e, s) {
        var n,
          r = "$()." + i + '("' + e + '")';
        return (
          t.each(function (t, l) {
            var c = o.data(l, i);
            if (c) {
              var d = c[e];
              if (d && "_" != e.charAt(0)) {
                var h = d.apply(c, s);
                n = void 0 === n ? h : n;
              } else a(r + " is not a valid method");
            } else a(i + " not initialized. Cannot call methods, i.e. " + r);
          }),
          void 0 !== n ? n : t
        );
      }
      function c(t, e) {
        t.each(function (t, s) {
          var n = o.data(s, i);
          n ? (n.option(e), n._init()) : ((n = new r(s, e)), o.data(s, i, n));
        });
      }
      (o = o || e || t.jQuery) &&
        (r.prototype.option ||
          (r.prototype.option = function (t) {
            o.isPlainObject(t) &&
              (this.options = o.extend(!0, this.options, t));
          }),
        (o.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return l(this, t, e);
          }
          return c(this, t), this;
        }),
        s(o));
    }
    function s(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
      r = t.console,
      a =
        void 0 === r
          ? function () {}
          : function (t) {
              r.error(t);
            };
    return s(e || t.jQuery), i;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            s = (i[t] = i[t] || []);
          return -1 == s.indexOf(e) && s.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var s = i.indexOf(e);
          return -1 != s && i.splice(s, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var s = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var r = i[n];
            s && s[r] && (this.off(t, r), delete s[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function e(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          r(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function i() {
      if (!l) {
        l = !0;
        var i = document.createElement("div");
        (i.style.width = "200px"),
          (i.style.padding = "1px 2px 3px 4px"),
          (i.style.borderStyle = "solid"),
          (i.style.borderWidth = "1px 2px 3px 4px"),
          (i.style.boxSizing = "border-box");
        var r = document.body || document.documentElement;
        r.appendChild(i);
        var a = e(i);
        (n = 200 == Math.round(t(a.width))),
          (s.isBoxSizeOuter = n),
          r.removeChild(i);
      }
    }
    function s(s) {
      if (
        (i(),
        "string" == typeof s && (s = document.querySelector(s)),
        s && "object" == typeof s && s.nodeType)
      ) {
        var r = e(s);
        if ("none" == r.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < o;
              e++
            )
              t[a[e]] = 0;
            return t;
          })();
        var l = {};
        (l.width = s.offsetWidth), (l.height = s.offsetHeight);
        for (
          var c = (l.isBorderBox = "border-box" == r.boxSizing), d = 0;
          d < o;
          d++
        ) {
          var h = a[d],
            u = r[h],
            p = parseFloat(u);
          l[h] = isNaN(p) ? 0 : p;
        }
        var f = l.paddingLeft + l.paddingRight,
          m = l.paddingTop + l.paddingBottom,
          g = l.marginLeft + l.marginRight,
          v = l.marginTop + l.marginBottom,
          y = l.borderLeftWidth + l.borderRightWidth,
          w = l.borderTopWidth + l.borderBottomWidth,
          b = c && n,
          x = t(r.width);
        !1 !== x && (l.width = x + (b ? 0 : f + y));
        var _ = t(r.height);
        return (
          !1 !== _ && (l.height = _ + (b ? 0 : m + w)),
          (l.innerWidth = l.width - (f + y)),
          (l.innerHeight = l.height - (m + w)),
          (l.outerWidth = l.width + g),
          (l.outerHeight = l.height + v),
          l
        );
      }
    }
    var n,
      r =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      a = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      o = a.length,
      l = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var s = e[i] + "MatchesSelector";
        if (t[s]) return s;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      s = Array.prototype.slice;
    (i.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? s.call(t)
        : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, s) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!s) return void n.push(t);
              e(t, s) && n.push(t);
              for (var i = t.querySelectorAll(s), r = 0; r < i.length; r++)
                n.push(i[r]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var s = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            r = this;
          this[n] = setTimeout(function () {
            s.apply(r, e), delete r[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, s) {
        i.docReady(function () {
          var r = i.toDashed(s),
            a = "data-" + r,
            o = document.querySelectorAll("[" + a + "]"),
            l = document.querySelectorAll(".js-" + r),
            c = i.makeArray(o).concat(i.makeArray(l)),
            d = a + "-options",
            h = t.jQuery;
          c.forEach(function (t) {
            var i,
              r = t.getAttribute(a) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (e) {
              return void (
                n &&
                n.error("Error parsing " + a + " on " + t.className + ": " + e)
              );
            }
            var o = new e(t, i);
            h && h.data(t, s, o);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var s = document.documentElement.style,
      n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      r = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      a = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[n],
      o = {
        transform: r,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay",
      },
      l = (i.prototype = Object.create(t.prototype));
    (l.constructor = i),
      (l._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.getSize = function () {
        this.size = e(this.element);
      }),
      (l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[o[i] || i] = t[i];
        }
      }),
      (l.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          s = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          r = parseFloat(s),
          a = parseFloat(n),
          o = this.layout.size;
        -1 != s.indexOf("%") && (r = (r / 100) * o.width),
          -1 != n.indexOf("%") && (a = (a / 100) * o.height),
          (r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? o.paddingLeft : o.paddingRight),
          (a -= i ? o.paddingTop : o.paddingBottom),
          (this.position.x = r),
          (this.position.y = a);
      }),
      (l.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          s = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          a = i ? "right" : "left",
          o = this.position.x + t[n];
        (e[r] = this.getXValue(o)), (e[a] = "");
        var l = s ? "paddingTop" : "paddingBottom",
          c = s ? "top" : "bottom",
          d = s ? "bottom" : "top",
          h = this.position.y + t[l];
        (e[c] = this.getYValue(h)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          s = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), !n || this.isTransitioning)) {
          var r = t - i,
            a = e - s,
            o = {};
          (o.transform = this.getTranslate(r, a)),
            this.transition({
              to: o,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (l.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (l.moveTo = l._transitionTo),
      (l.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (l._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var c =
      "opacity," +
      (function (t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      })(r);
    (l.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: c,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(a, this, !1);
      }
    }),
      (l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (l.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var d = { "-webkit-transform": "transform" };
    (l.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = d[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          (function (t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        )
          e.onEnd[i].call(this), delete e.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (l.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(a, this, !1),
          (this.isTransitioning = !1);
      }),
      (l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var h = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (l.removeTransitionStyles = function () {
        this.css(h);
      }),
      (l.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (l.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (l.remove = function () {
        return n && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (l.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (l.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (l.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (l.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, s, n, r) {
            return e(t, i, s, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, s, n) {
    "use strict";
    function r(t, e) {
      var i = s.getQueryElement(t);
      if (i) {
        (this.element = i),
          l && (this.$element = l(this.element)),
          (this.options = s.extend({}, this.constructor.defaults)),
          this.option(e);
        var n = ++d;
        (this.element.outlayerGUID = n),
          (h[n] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    function a(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    var o = t.console,
      l = t.jQuery,
      c = function () {},
      d = 0,
      h = {};
    (r.namespace = "outlayer"),
      (r.Item = n),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var u = r.prototype;
    s.extend(u, e.prototype),
      (u.option = function (t) {
        s.extend(this.options, t);
      }),
      (u._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (u._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          s.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (u.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (u._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            s = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var r = new i(e[n], this);
          s.push(r);
        }
        return s;
      }),
      (u._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector);
      }),
      (u.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (u.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (u._init = u.layout),
      (u._resetLayout = function () {
        this.getSize();
      }),
      (u.getSize = function () {
        this.size = i(this.element);
      }),
      (u._getMeasurement = function (t, e) {
        var s,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (s = this.element.querySelector(n))
              : n instanceof HTMLElement && (s = n),
            (this[t] = s ? i(s)[e] : n))
          : (this[t] = 0);
      }),
      (u.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (u._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (u._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var s = this._getItemLayoutPosition(t);
            (s.item = t), (s.isInstant = e || t.isLayoutInstant), i.push(s);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (u._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (u._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (u.updateStagger = function () {
        var t = this.options.stagger;
        return null == t
          ? void (this.stagger = 0)
          : ((this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                s = e && e[2];
              return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0;
            })(t)),
            this.stagger);
      }),
      (u._positionItem = function (t, e, i, s, n) {
        s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (u._postLayout = function () {
        this.resizeContainer();
      }),
      (u.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (u._getContainerSize = c),
      (u._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (u._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function s() {
          ++a == r && i();
        }
        var n = this,
          r = e.length;
        if (e && r) {
          var a = 0;
          e.forEach(function (e) {
            e.once(t, s);
          });
        } else i();
      }),
      (u.dispatchEvent = function (t, e, i) {
        var s = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, s), l))
          if (((this.$element = this.$element || l(this.element)), e)) {
            var n = l.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (u.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (u.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (u.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (u.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (u._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            s.makeArray(t)
          );
      }),
      (u._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (u._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (u._manageStamp = c),
      (u._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          s = this._boundingRect,
          n = i(t);
        return {
          left: e.left - s.left - n.marginLeft,
          top: e.top - s.top - n.marginTop,
          right: s.right - e.right - n.marginRight,
          bottom: s.bottom - e.bottom - n.marginBottom,
        };
      }),
      (u.handleEvent = s.handleEvent),
      (u.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (u.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (u.onresize = function () {
        this.resize();
      }),
      s.debounceMethod(r, "onresize", 100),
      (u.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (u.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (u.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (u.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (u.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (u.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (u.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (u.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (u.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (u.getItems = function (t) {
        t = s.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (u.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), s.removeFrom(this.items, t);
            }, this);
      }),
      (u.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete h[e],
          delete this.element.outlayerGUID,
          l && l.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && h[e];
      }),
      (r.create = function (t, e) {
        var i = a(r);
        return (
          (i.defaults = s.extend({}, r.defaults)),
          s.extend(i.defaults, e),
          (i.compatOptions = s.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = a(n)),
          s.htmlInit(i, t),
          l && l.bridget && l.bridget(t, i),
          i
        );
      });
    var p = { ms: 1, s: 1e3 };
    return (r.Item = n), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      s = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), s.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var s = e[i];
            this.sortData[i] = s(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var s = i.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        s[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (s.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return (
          this.isotope.size &&
          e &&
          e.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (s._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (s.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (s.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (s.getSegmentSize = function (t, e) {
        var i = t + e,
          s = "outer" + e;
        if ((this._getMeasurement(i, s), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[s]) || this.isotope.size["inner" + e];
        }
      }),
      (s.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (s.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (s.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(s)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var s = i.prototype;
    return (
      (s._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (s.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var s = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          r = n / s,
          a = s - (n % s);
        (r = Math[a && a < 1 ? "round" : "floor"](r)),
          (this.cols = Math.max(r, 1));
      }),
      (s.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (s._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = Math[e && e < 1 ? "round" : "ceil"](
            t.size.outerWidth / this.columnWidth
          );
        i = Math.min(i, this.cols);
        for (
          var s = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](i, t),
            n = { x: this.columnWidth * s.col, y: s.y },
            r = s.y + t.size.outerHeight,
            a = i + s.col,
            o = s.col;
          o < a;
          o++
        )
          this.colYs[o] = r;
        return n;
      }),
      (s._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (s._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++)
          e[s] = this._getColGroupY(s, t);
        return e;
      }),
      (s._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (s._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var s = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = s ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (s._manageStamp = function (t) {
        var i = e(t),
          s = this._getElementOffset(t),
          n = this._getOption("originLeft") ? s.left : s.right,
          r = n + i.outerWidth,
          a = Math.floor(n / this.columnWidth);
        a = Math.max(0, a);
        var o = Math.floor(r / this.columnWidth);
        (o -= r % this.columnWidth ? 0 : 1), (o = Math.min(this.cols - 1, o));
        for (
          var l =
              (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight,
            c = a;
          c <= o;
          c++
        )
          this.colYs[c] = Math.max(l, this.colYs[c]);
      }),
      (s._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (s._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (s.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      s = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var r in e.prototype) n[r] || (s[r] = e.prototype[r]);
    var a = s.measureColumns;
    s.measureColumns = function () {
      (this.items = this.isotope.filteredItems), a.call(this);
    };
    var o = s._getOption;
    return (
      (s._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : o.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var s = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          s
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, s, n, r, a, o) {
            return e(t, i, s, n, r, a, o);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, s, n, r, a) {
    var o = t.jQuery,
      l = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      c = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (c.Item = r), (c.LayoutMode = a);
    var d = c.prototype;
    (d._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      e.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      a.modes))
        this._initLayoutMode(t);
    }),
      (d.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (d._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var s = t[i];
          s.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (d._initLayoutMode = function (t) {
        var e = a.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (d.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (d._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (d.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (d._init = d.arrange),
      (d._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (d._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (d._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            s &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          s,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (s = !0), t();
          });
      }),
      (d._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], s = [], n = [], r = this._getFilterTest(e), a = 0;
          a < t.length;
          a++
        ) {
          var o = t[a];
          if (!o.isIgnored) {
            var l = r(o);
            l && i.push(o),
              l && o.isHidden ? s.push(o) : l || o.isHidden || n.push(o);
          }
        }
        return { matches: i, needReveal: s, needHide: n };
      }),
      (d._getFilterTest = function (t) {
        return o && this.options.isJQueryFiltering
          ? function (e) {
              return o(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return s(e.element, t);
            };
      }),
      (d.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (d._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = h(i);
        }
      }),
      (d._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          t[i].updateSortData();
        }
      });
    var h = function (t) {
      if ("string" != typeof t) return t;
      var e = l(t).split(" "),
        i = e[0],
        s = i.match(/^\[(.+)\]$/),
        n = (function (t, e) {
          return t
            ? function (e) {
                return e.getAttribute(t);
              }
            : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent;
              };
        })(s && s[1], i),
        r = c.sortDataParsers[e[1]];
      return r
        ? function (t) {
            return t && r(n(t));
          }
        : function (t) {
            return t && n(t);
          };
    };
    (c.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (d._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = (function (t, e) {
            return function (i, s) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                  a = i.sortData[r],
                  o = s.sortData[r];
                if (a > o || a < o)
                  return (
                    (a > o ? 1 : -1) * ((void 0 !== e[r] ? e[r] : e) ? 1 : -1)
                  );
              }
              return 0;
            };
          })(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (d._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (d._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (d._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (d._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (d._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (d._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (d.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (d.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (d.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (d._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (d.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            s,
            n = e.length;
          for (i = 0; i < n; i++)
            (s = e[i]), this.element.appendChild(s.element);
          var r = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(r);
        }
      });
    var u = d.remove;
    return (
      (d.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        for (var i = e && e.length, s = 0; i && s < i; s++) {
          var r = e[s];
          n.removeFrom(this.filteredItems, r);
        }
      }),
      (d.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (d._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var s = t.apply(this, e);
        return (this.options.transitionDuration = i), s;
      }),
      (d.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      c
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).LocomotiveScroll = e());
  })(this, function () {
    "use strict";
    function t(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function e(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(t, s.key, s);
      }
    }
    function i(t, i, s) {
      return i && e(t.prototype, i), s && e(t, s), t;
    }
    function s(t, e, i) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = i),
        t
      );
    }
    function n(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s);
      }
      return i;
    }
    function r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? n(Object(i), !0).forEach(function (e) {
              s(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : n(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && l(t, e);
    }
    function o(t) {
      return (o = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function l(t, e) {
      return (l =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function c(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function d(t, e) {
      return !e || ("object" != typeof e && "function" != typeof e) ? c(t) : e;
    }
    function h(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var i,
          s = o(t);
        if (e) {
          var n = o(this).constructor;
          i = Reflect.construct(s, arguments, n);
        } else i = s.apply(this, arguments);
        return d(this, i);
      };
    }
    function u(t, e, i) {
      return (u =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, i) {
              var s = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = o(t));

                );
                return t;
              })(t, e);
              if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e);
                return n.get ? n.get.call(i) : n.value;
              }
            })(t, e, i || t);
    }
    function p(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var i = [],
              s = !0,
              n = !1,
              r = void 0;
            try {
              for (
                var a, o = t[Symbol.iterator]();
                !(s = (a = o.next()).done) &&
                (i.push(a.value), !e || i.length !== e);
                s = !0
              );
            } catch (t) {
              (n = !0), (r = t);
            } finally {
              try {
                s || null == o.return || o.return();
              } finally {
                if (n) throw r;
              }
            }
            return i;
          }
        })(t, e) ||
        m(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function f(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return g(t);
        })(t) ||
        (function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        m(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function m(t, e) {
      if (t) {
        if ("string" == typeof t) return g(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === i && t.constructor && (i = t.constructor.name),
          "Map" === i || "Set" === i
            ? Array.from(t)
            : "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            ? g(t, e)
            : void 0
        );
      }
    }
    function g(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
      return s;
    }
    var v = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        initPosition: { x: 0, y: 0 },
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: 0.1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
          smooth: !1,
          direction: "vertical",
          gestureDirection: "vertical",
          breakpoint: 1024,
        },
        smartphone: {
          smooth: !1,
          direction: "vertical",
          gestureDirection: "vertical",
        },
      },
      y = (function () {
        function e() {
          var i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e),
            Object.assign(this, v, i),
            (this.smartphone = v.smartphone),
            i.smartphone && Object.assign(this.smartphone, i.smartphone),
            (this.tablet = v.tablet),
            i.tablet && Object.assign(this.tablet, i.tablet),
            (this.namespace = "locomotive"),
            (this.html = document.documentElement),
            (this.windowHeight = window.innerHeight),
            (this.windowWidth = window.innerWidth),
            (this.windowMiddle = {
              x: this.windowWidth / 2,
              y: this.windowHeight / 2,
            }),
            (this.els = {}),
            (this.currentElements = {}),
            (this.listeners = {}),
            (this.hasScrollTicking = !1),
            (this.hasCallEventSet = !1),
            (this.checkScroll = this.checkScroll.bind(this)),
            (this.checkResize = this.checkResize.bind(this)),
            (this.checkEvent = this.checkEvent.bind(this)),
            (this.instance = {
              scroll: { x: 0, y: 0 },
              limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
              currentElements: this.currentElements,
            }),
            this.isMobile
              ? this.isTablet
                ? (this.context = "tablet")
                : (this.context = "smartphone")
              : (this.context = "desktop"),
            this.isMobile && (this.direction = this[this.context].direction),
            "horizontal" === this.direction
              ? (this.directionAxis = "x")
              : (this.directionAxis = "y"),
            this.getDirection && (this.instance.direction = null),
            this.getDirection && (this.instance.speed = 0),
            this.html.classList.add(this.initClass),
            window.addEventListener("resize", this.checkResize, !1);
        }
        return (
          i(e, [
            {
              key: "init",
              value: function () {
                this.initEvents();
              },
            },
            {
              key: "checkScroll",
              value: function () {
                this.dispatchScroll();
              },
            },
            {
              key: "checkResize",
              value: function () {
                var t = this;
                this.resizeTick ||
                  ((this.resizeTick = !0),
                  requestAnimationFrame(function () {
                    t.resize(), (t.resizeTick = !1);
                  }));
              },
            },
            { key: "resize", value: function () {} },
            {
              key: "checkContext",
              value: function () {
                if (this.reloadOnContextChange) {
                  (this.isMobile =
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ) ||
                    ("MacIntel" === navigator.platform &&
                      navigator.maxTouchPoints > 1) ||
                    this.windowWidth < this.tablet.breakpoint),
                    (this.isTablet =
                      this.isMobile &&
                      this.windowWidth >= this.tablet.breakpoint);
                  var t = this.context;
                  this.isMobile
                    ? this.isTablet
                      ? (this.context = "tablet")
                      : (this.context = "smartphone")
                    : (this.context = "desktop"),
                    t != this.context &&
                      ("desktop" == t ? this.smooth : this[t].smooth) !=
                        ("desktop" == this.context
                          ? this.smooth
                          : this[this.context].smooth) &&
                      window.location.reload();
                }
              },
            },
            {
              key: "initEvents",
              value: function () {
                var t = this;
                (this.scrollToEls = this.el.querySelectorAll(
                  "[data-".concat(this.name, "-to]")
                )),
                  (this.setScrollTo = this.setScrollTo.bind(this)),
                  this.scrollToEls.forEach(function (e) {
                    e.addEventListener("click", t.setScrollTo, !1);
                  });
              },
            },
            {
              key: "setScrollTo",
              value: function (t) {
                t.preventDefault(),
                  this.scrollTo(
                    t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-href")
                    ) || t.currentTarget.getAttribute("href"),
                    {
                      offset: t.currentTarget.getAttribute(
                        "data-".concat(this.name, "-offset")
                      ),
                    }
                  );
              },
            },
            { key: "addElements", value: function () {} },
            {
              key: "detectElements",
              value: function (t) {
                var e = this,
                  i = this.instance.scroll.y,
                  s = i + this.windowHeight,
                  n = this.instance.scroll.x,
                  r = n + this.windowWidth;
                Object.entries(this.els).forEach(function (a) {
                  var o = p(a, 2),
                    l = o[0],
                    c = o[1];
                  if (
                    (!c ||
                      (c.inView && !t) ||
                      ("horizontal" === e.direction
                        ? r >= c.left && n < c.right && e.setInView(c, l)
                        : s >= c.top && i < c.bottom && e.setInView(c, l)),
                    c && c.inView)
                  )
                    if ("horizontal" === e.direction) {
                      var d = c.right - c.left;
                      (c.progress =
                        (e.instance.scroll.x - (c.left - e.windowWidth)) /
                        (d + e.windowWidth)),
                        (r < c.left || n > c.right) && e.setOutOfView(c, l);
                    } else {
                      var h = c.bottom - c.top;
                      (c.progress =
                        (e.instance.scroll.y - (c.top - e.windowHeight)) /
                        (h + e.windowHeight)),
                        (s < c.top || i > c.bottom) && e.setOutOfView(c, l);
                    }
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "setInView",
              value: function (t, e) {
                (this.els[e].inView = !0),
                  t.el.classList.add(t.class),
                  (this.currentElements[e] = t),
                  t.call &&
                    this.hasCallEventSet &&
                    (this.dispatchCall(t, "enter"),
                    t.repeat || (this.els[e].call = !1));
              },
            },
            {
              key: "setOutOfView",
              value: function (t, e) {
                var i = this;
                (this.els[e].inView = !1),
                  Object.keys(this.currentElements).forEach(function (t) {
                    t === e && delete i.currentElements[t];
                  }),
                  t.call &&
                    this.hasCallEventSet &&
                    this.dispatchCall(t, "exit"),
                  t.repeat && t.el.classList.remove(t.class);
              },
            },
            {
              key: "dispatchCall",
              value: function (t, e) {
                (this.callWay = e),
                  (this.callValue = t.call.split(",").map(function (t) {
                    return t.trim();
                  })),
                  (this.callObj = t),
                  1 == this.callValue.length &&
                    (this.callValue = this.callValue[0]);
                var i = new Event(this.namespace + "call");
                this.el.dispatchEvent(i);
              },
            },
            {
              key: "dispatchScroll",
              value: function () {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t);
              },
            },
            {
              key: "setEvents",
              value: function (t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var i = this.listeners[t];
                i.push(e),
                  1 === i.length &&
                    this.el.addEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ),
                  "call" === t &&
                    ((this.hasCallEventSet = !0), this.detectElements(!0));
              },
            },
            {
              key: "unsetEvents",
              value: function (t, e) {
                if (this.listeners[t]) {
                  var i = this.listeners[t],
                    s = i.indexOf(e);
                  s < 0 ||
                    (i.splice(s, 1),
                    0 === i.index &&
                      this.el.removeEventListener(
                        this.namespace + t,
                        this.checkEvent,
                        !1
                      ));
                }
              },
            },
            {
              key: "checkEvent",
              value: function (t) {
                var e = this,
                  i = t.type.replace(this.namespace, ""),
                  s = this.listeners[i];
                s &&
                  0 !== s.length &&
                  s.forEach(function (t) {
                    switch (i) {
                      case "scroll":
                        return t(e.instance);
                      case "call":
                        return t(e.callValue, e.callWay, e.callObj);
                      default:
                        return t();
                    }
                  });
              },
            },
            { key: "startScroll", value: function () {} },
            { key: "stopScroll", value: function () {} },
            {
              key: "setScroll",
              value: function (t, e) {
                this.instance.scroll = { x: 0, y: 0 };
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                window.removeEventListener("resize", this.checkResize, !1),
                  Object.keys(this.listeners).forEach(function (e) {
                    t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                  }),
                  (this.listeners = {}),
                  this.scrollToEls.forEach(function (e) {
                    e.removeEventListener("click", t.setScrollTo, !1);
                  }),
                  this.html.classList.remove(this.initClass);
              },
            },
          ]),
          e
        );
      })(),
      w =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {};
    function b(t, e) {
      return t((e = { exports: {} }), e.exports), e.exports;
    }
    var x = b(function (t, e) {
        t.exports = {
          polyfill: function () {
            var t = window,
              e = document;
            if (
              !("scrollBehavior" in e.documentElement.style) ||
              !0 === t.__forceSmoothScrollPolyfill__
            ) {
              var i,
                s = t.HTMLElement || t.Element,
                n = {
                  scroll: t.scroll || t.scrollTo,
                  scrollBy: t.scrollBy,
                  elementScroll: s.prototype.scroll || o,
                  scrollIntoView: s.prototype.scrollIntoView,
                },
                r =
                  t.performance && t.performance.now
                    ? t.performance.now.bind(t.performance)
                    : Date.now,
                a =
                  ((i = t.navigator.userAgent),
                  new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i)
                    ? 1
                    : 0);
              (t.scroll = t.scrollTo =
                function () {
                  void 0 !== arguments[0] &&
                    (!0 !== l(arguments[0])
                      ? f.call(
                          t,
                          e.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : t.scrollX || t.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : t.scrollY || t.pageYOffset
                        )
                      : n.scroll.call(
                          t,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : t.scrollX || t.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : t.scrollY || t.pageYOffset
                        ));
                }),
                (t.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (l(arguments[0])
                      ? n.scrollBy.call(
                          t,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : 0,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : 0
                        )
                      : f.call(
                          t,
                          e.body,
                          ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                          ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                        ));
                }),
                (s.prototype.scroll = s.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0])
                      if (!0 !== l(arguments[0])) {
                        var t = arguments[0].left,
                          e = arguments[0].top;
                        f.call(
                          this,
                          this,
                          void 0 === t ? this.scrollLeft : ~~t,
                          void 0 === e ? this.scrollTop : ~~e
                        );
                      } else {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError("Value could not be converted");
                        n.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                  }),
                (s.prototype.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (!0 !== l(arguments[0])
                      ? this.scroll({
                          left: ~~arguments[0].left + this.scrollLeft,
                          top: ~~arguments[0].top + this.scrollTop,
                          behavior: arguments[0].behavior,
                        })
                      : n.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left + this.scrollLeft
                            : ~~arguments[0] + this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top + this.scrollTop
                            : ~~arguments[1] + this.scrollTop
                        ));
                }),
                (s.prototype.scrollIntoView = function () {
                  if (!0 !== l(arguments[0])) {
                    var i = u(this),
                      s = i.getBoundingClientRect(),
                      r = this.getBoundingClientRect();
                    i !== e.body
                      ? (f.call(
                          this,
                          i,
                          i.scrollLeft + r.left - s.left,
                          i.scrollTop + r.top - s.top
                        ),
                        "fixed" !== t.getComputedStyle(i).position &&
                          t.scrollBy({
                            left: s.left,
                            top: s.top,
                            behavior: "smooth",
                          }))
                      : t.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: "smooth",
                        });
                  } else
                    n.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                });
            }
            function o(t, e) {
              (this.scrollLeft = t), (this.scrollTop = e);
            }
            function l(t) {
              if (
                null === t ||
                "object" != typeof t ||
                void 0 === t.behavior ||
                "auto" === t.behavior ||
                "instant" === t.behavior
              )
                return !0;
              if ("object" == typeof t && "smooth" === t.behavior) return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  t.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function c(t, e) {
              return "Y" === e
                ? t.clientHeight + a < t.scrollHeight
                : "X" === e
                ? t.clientWidth + a < t.scrollWidth
                : void 0;
            }
            function d(e, i) {
              var s = t.getComputedStyle(e, null)["overflow" + i];
              return "auto" === s || "scroll" === s;
            }
            function h(t) {
              var e = c(t, "Y") && d(t, "Y"),
                i = c(t, "X") && d(t, "X");
              return e || i;
            }
            function u(t) {
              for (; t !== e.body && !1 === h(t); ) t = t.parentNode || t.host;
              return t;
            }
            function p(e) {
              var i,
                s,
                n,
                a,
                o = (r() - e.startTime) / 468;
              (a = o = o > 1 ? 1 : o),
                (i = 0.5 * (1 - Math.cos(Math.PI * a))),
                (s = e.startX + (e.x - e.startX) * i),
                (n = e.startY + (e.y - e.startY) * i),
                e.method.call(e.scrollable, s, n),
                (s === e.x && n === e.y) ||
                  t.requestAnimationFrame(p.bind(t, e));
            }
            function f(i, s, a) {
              var l,
                c,
                d,
                h,
                u = r();
              i === e.body
                ? ((l = t),
                  (c = t.scrollX || t.pageXOffset),
                  (d = t.scrollY || t.pageYOffset),
                  (h = n.scroll))
                : ((l = i), (c = i.scrollLeft), (d = i.scrollTop), (h = o)),
                p({
                  scrollable: l,
                  method: h,
                  startTime: u,
                  startX: c,
                  startY: d,
                  x: s,
                  y: a,
                });
            }
          },
        };
      }),
      _ =
        (x.polyfill,
        (function (e) {
          a(n, e);
          var s = h(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              t(this, n),
              (e = s.call(this, i)).resetNativeScroll &&
                (history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0)),
              window.addEventListener("scroll", e.checkScroll, !1),
              void 0 === window.smoothscrollPolyfill &&
                ((window.smoothscrollPolyfill = x),
                window.smoothscrollPolyfill.polyfill()),
              e
            );
          }
          return (
            i(n, [
              {
                key: "init",
                value: function () {
                  (this.instance.scroll.y = window.pageYOffset),
                    this.addElements(),
                    this.detectElements(),
                    u(o(n.prototype), "init", this).call(this);
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var t = this;
                  u(o(n.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed &&
                      (this.addSpeed(), (this.speedTs = Date.now())),
                    (this.instance.scroll.y = window.pageYOffset),
                    Object.entries(this.els).length &&
                      (this.hasScrollTicking ||
                        (requestAnimationFrame(function () {
                          t.detectElements();
                        }),
                        (this.hasScrollTicking = !0)));
                },
              },
              {
                key: "addDirection",
                value: function () {
                  window.pageYOffset > this.instance.scroll.y
                    ? "down" !== this.instance.direction &&
                      (this.instance.direction = "down")
                    : window.pageYOffset < this.instance.scroll.y &&
                      "up" !== this.instance.direction &&
                      (this.instance.direction = "up");
                },
              },
              {
                key: "addSpeed",
                value: function () {
                  window.pageYOffset != this.instance.scroll.y
                    ? (this.instance.speed =
                        (window.pageYOffset - this.instance.scroll.y) /
                        Math.max(1, Date.now() - this.speedTs))
                    : (this.instance.speed = 0);
                },
              },
              {
                key: "resize",
                value: function () {
                  Object.entries(this.els).length &&
                    ((this.windowHeight = window.innerHeight),
                    this.updateElements());
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this;
                  (this.els = {}),
                    this.el
                      .querySelectorAll("[data-" + this.name + "]")
                      .forEach(function (e, i) {
                        e.getBoundingClientRect();
                        var s,
                          n,
                          r,
                          a = e.dataset[t.name + "Class"] || t.class,
                          o =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : i,
                          l =
                            "string" == typeof e.dataset[t.name + "Offset"]
                              ? e.dataset[t.name + "Offset"].split(",")
                              : t.offset,
                          c = e.dataset[t.name + "Repeat"],
                          d = e.dataset[t.name + "Call"],
                          h = e.dataset[t.name + "Target"],
                          u = (r =
                            void 0 !== h
                              ? document.querySelector("".concat(h))
                              : e).getBoundingClientRect();
                        (s = u.top + t.instance.scroll.y),
                          (n = u.left + t.instance.scroll.x);
                        var p = s + r.offsetHeight,
                          f = n + r.offsetWidth;
                        c = "false" != c && (null != c || t.repeat);
                        var m = t.getRelativeOffset(l),
                          g = {
                            el: e,
                            targetEl: r,
                            id: o,
                            class: a,
                            top: (s += m[0]),
                            bottom: (p -= m[1]),
                            left: n,
                            right: f,
                            offset: l,
                            progress: 0,
                            repeat: c,
                            inView: !1,
                            call: d,
                          };
                        (t.els[o] = g),
                          e.classList.contains(a) && t.setInView(t.els[o], o);
                      });
                },
              },
              {
                key: "updateElements",
                value: function () {
                  var t = this;
                  Object.entries(this.els).forEach(function (e) {
                    var i = p(e, 2),
                      s = i[0],
                      n = i[1],
                      r =
                        n.targetEl.getBoundingClientRect().top +
                        t.instance.scroll.y,
                      a = r + n.targetEl.offsetHeight,
                      o = t.getRelativeOffset(n.offset);
                    (t.els[s].top = r + o[0]), (t.els[s].bottom = a - o[1]);
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: "getRelativeOffset",
                value: function (t) {
                  var e = [0, 0];
                  if (t)
                    for (var i = 0; i < t.length; i++)
                      "string" == typeof t[i]
                        ? t[i].includes("%")
                          ? (e[i] = parseInt(
                              (t[i].replace("%", "") * this.windowHeight) / 100
                            ))
                          : (e[i] = parseInt(t[i]))
                        : (e[i] = t[i]);
                  return e;
                },
              },
              {
                key: "scrollTo",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = parseInt(e.offset) || 0,
                    s = !!e.callback && e.callback;
                  if ("string" == typeof t) {
                    if ("top" === t) t = this.html;
                    else if ("bottom" === t)
                      t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t))) return;
                  } else if ("number" == typeof t) t = parseInt(t);
                  else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                  i =
                    "number" != typeof t
                      ? t.getBoundingClientRect().top +
                        i +
                        this.instance.scroll.y
                      : t + i;
                  var n = function () {
                    return parseInt(window.pageYOffset) === parseInt(i);
                  };
                  if (s) {
                    if (n()) return void s();
                    var r = function t() {
                      n() && (window.removeEventListener("scroll", t), s());
                    };
                    window.addEventListener("scroll", r);
                  }
                  window.scrollTo({
                    top: i,
                    behavior: 0 === e.duration ? "auto" : "smooth",
                  });
                },
              },
              {
                key: "update",
                value: function () {
                  this.addElements(), this.detectElements();
                },
              },
              {
                key: "destroy",
                value: function () {
                  u(o(n.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1);
                },
              },
            ]),
            n
          );
        })(y)),
      E = Object.getOwnPropertySymbols,
      T = Object.prototype.hasOwnProperty,
      S = Object.prototype.propertyIsEnumerable;
    function C(t) {
      if (null == t)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(t);
    }
    var M = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, i = 0; i < 10; i++)
          e["_" + String.fromCharCode(i)] = i;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var s = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            s[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (var i, s, n = C(t), r = 1; r < arguments.length; r++) {
            for (var a in (i = Object(arguments[r])))
              T.call(i, a) && (n[a] = i[a]);
            if (E) {
              s = E(i);
              for (var o = 0; o < s.length; o++)
                S.call(i, s[o]) && (n[s[o]] = i[s[o]]);
            }
          }
          return n;
        };
    function k() {}
    k.prototype = {
      on: function (t, e, i) {
        var s = this.e || (this.e = {});
        return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
      },
      once: function (t, e, i) {
        var s = this;
        function n() {
          s.off(t, n), e.apply(i, arguments);
        }
        return (n._ = e), this.on(t, n, i);
      },
      emit: function (t) {
        for (
          var e = [].slice.call(arguments, 1),
            i = ((this.e || (this.e = {}))[t] || []).slice(),
            s = 0,
            n = i.length;
          s < n;
          s++
        )
          i[s].fn.apply(i[s].ctx, e);
        return this;
      },
      off: function (t, e) {
        var i = this.e || (this.e = {}),
          s = i[t],
          n = [];
        if (s && e)
          for (var r = 0, a = s.length; r < a; r++)
            s[r].fn !== e && s[r].fn._ !== e && n.push(s[r]);
        return n.length ? (i[t] = n) : delete i[t], this;
      },
    };
    var $ = k,
      O = b(function (t, e) {
        (function () {
          (null !== e ? e : this).Lethargy = (function () {
            function t(t, e, i, s) {
              (this.stability = null != t ? Math.abs(t) : 8),
                (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                (this.delay = null != s ? s : 150),
                (this.lastUpDeltas = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this)),
                (this.lastDownDeltas = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this)),
                (this.deltasTimestamp = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this));
            }
            return (
              (t.prototype.check = function (t) {
                var e;
                return (
                  null != (t = t.originalEvent || t).wheelDelta
                    ? (e = t.wheelDelta)
                    : null != t.deltaY
                    ? (e = -40 * t.deltaY)
                    : (null == t.detail && 0 !== t.detail) ||
                      (e = -40 * t.detail),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  e > 0
                    ? (this.lastUpDeltas.push(e),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(e),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1))
                );
              }),
              (t.prototype.isInertia = function (t) {
                var e, i, s, n, r, a, o;
                return null ===
                  (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                  ? t
                  : !(
                      this.deltasTimestamp[2 * this.stability - 2] +
                        this.delay >
                        Date.now() && e[0] === e[2 * this.stability - 1]
                    ) &&
                      ((s = e.slice(0, this.stability)),
                      (i = e.slice(this.stability, 2 * this.stability)),
                      (o = s.reduce(function (t, e) {
                        return t + e;
                      })),
                      (r = i.reduce(function (t, e) {
                        return t + e;
                      })),
                      (a = o / s.length),
                      (n = r / i.length),
                      Math.abs(a) < Math.abs(n * this.tolerance) &&
                        this.sensitivity < Math.abs(n) &&
                        t);
              }),
              (t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas;
              }),
              (t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas;
              }),
              t
            );
          })();
        }).call(w);
      }),
      z = "onwheel" in document,
      P = "onmousewheel" in document,
      L =
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      A = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      I = !!window.navigator.msPointerEnabled,
      D = "onkeydown" in document,
      R = navigator.userAgent.indexOf("Firefox") > -1,
      B = Object.prototype.toString,
      Y = Object.prototype.hasOwnProperty;
    function X(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var W = O.Lethargy,
      j = "virtualscroll",
      q = H;
    function H(t) {
      !(function (t) {
        if (!t) return console.warn("bindAll requires at least one argument.");
        var e = Array.prototype.slice.call(arguments, 1);
        if (0 === e.length)
          for (var i in t)
            Y.call(t, i) &&
              "function" == typeof t[i] &&
              "[object Function]" == B.call(t[i]) &&
              e.push(i);
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          t[n] = X(t[n], t);
        }
      })(
        this,
        "_onWheel",
        "_onMouseWheel",
        "_onTouchStart",
        "_onTouchMove",
        "_onKeyDown"
      ),
        (this.el = window),
        t && t.el && ((this.el = t.el), delete t.el),
        (this.options = M(
          {
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0,
          },
          t
        )),
        this.options.limitInertia && (this._lethargy = new W()),
        (this._emitter = new $()),
        (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
        (this.touchStartX = null),
        (this.touchStartY = null),
        (this.bodyTouchAction = null),
        void 0 !== this.options.passive &&
          (this.listenerOptions = { passive: this.options.passive });
    }
    function F(t, e, i) {
      return (1 - i) * t + i * e;
    }
    function N(t) {
      var e = {};
      if (window.getComputedStyle) {
        var i = getComputedStyle(t),
          s = i.transform || i.webkitTransform || i.mozTransform,
          n = s.match(/^matrix3d\((.+)\)$/);
        return (
          n
            ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
              (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
            : ((n = s.match(/^matrix\((.+)\)$/)),
              (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
              (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
          e
        );
      }
    }
    function V(t) {
      for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
      return e;
    }
    (H.prototype._notify = function (t) {
      var e = this._event;
      (e.x += e.deltaX),
        (e.y += e.deltaY),
        this._emitter.emit(j, {
          x: e.x,
          y: e.y,
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          originalEvent: t,
        });
    }),
      (H.prototype._onWheel = function (t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
          var i = this._event;
          (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
            (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
            R &&
              1 == t.deltaMode &&
              ((i.deltaX *= e.firefoxMultiplier),
              (i.deltaY *= e.firefoxMultiplier)),
            (i.deltaX *= e.mouseMultiplier),
            (i.deltaY *= e.mouseMultiplier),
            this._notify(t);
        }
      }),
      (H.prototype._onMouseWheel = function (t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
          var e = this._event;
          (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
            (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
            this._notify(t);
        }
      }),
      (H.prototype._onTouchStart = function (t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
      }),
      (H.prototype._onTouchMove = function (t) {
        var e = this.options;
        e.preventTouch &&
          !t.target.classList.contains(e.unpreventTouchClass) &&
          t.preventDefault();
        var i = this._event,
          s = t.targetTouches ? t.targetTouches[0] : t;
        (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
          (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
          (this.touchStartX = s.pageX),
          (this.touchStartY = s.pageY),
          this._notify(t);
      }),
      (H.prototype._onKeyDown = function (t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
          case 37:
          case 38:
            e.deltaY = this.options.keyStep;
            break;
          case 39:
          case 40:
            e.deltaY = -this.options.keyStep;
            break;
          case t.shiftKey:
            e.deltaY = i;
            break;
          case 32:
            e.deltaY = -i;
            break;
          default:
            return;
        }
        this._notify(t);
      }),
      (H.prototype._bind = function () {
        z &&
          this.el.addEventListener(
            "wheel",
            this._onWheel,
            this.listenerOptions
          ),
          P &&
            this.el.addEventListener(
              "mousewheel",
              this._onMouseWheel,
              this.listenerOptions
            ),
          L &&
            this.options.useTouch &&
            (this.el.addEventListener(
              "touchstart",
              this._onTouchStart,
              this.listenerOptions
            ),
            this.el.addEventListener(
              "touchmove",
              this._onTouchMove,
              this.listenerOptions
            )),
          I &&
            A &&
            ((this.bodyTouchAction = document.body.style.msTouchAction),
            (document.body.style.msTouchAction = "none"),
            this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
          D &&
            this.options.useKeyboard &&
            document.addEventListener("keydown", this._onKeyDown);
      }),
      (H.prototype._unbind = function () {
        z && this.el.removeEventListener("wheel", this._onWheel),
          P && this.el.removeEventListener("mousewheel", this._onMouseWheel),
          L &&
            (this.el.removeEventListener("touchstart", this._onTouchStart),
            this.el.removeEventListener("touchmove", this._onTouchMove)),
          I &&
            A &&
            ((document.body.style.msTouchAction = this.bodyTouchAction),
            this.el.removeEventListener(
              "MSPointerDown",
              this._onTouchStart,
              !0
            ),
            this.el.removeEventListener(
              "MSPointerMove",
              this._onTouchMove,
              !0
            )),
          D &&
            this.options.useKeyboard &&
            document.removeEventListener("keydown", this._onKeyDown);
      }),
      (H.prototype.on = function (t, e) {
        this._emitter.on(j, t, e);
        var i = this._emitter.e;
        i && i[j] && 1 === i[j].length && this._bind();
      }),
      (H.prototype.off = function (t, e) {
        this._emitter.off(j, t, e);
        var i = this._emitter.e;
        (!i[j] || i[j].length <= 0) && this._unbind();
      }),
      (H.prototype.reset = function () {
        var t = this._event;
        (t.x = 0), (t.y = 0);
      }),
      (H.prototype.destroy = function () {
        this._emitter.off(), this._unbind();
      });
    var G = "function" == typeof Float32Array;
    function U(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function Q(t, e) {
      return 3 * e - 6 * t;
    }
    function K(t) {
      return 3 * t;
    }
    function Z(t, e, i) {
      return ((U(e, i) * t + Q(e, i)) * t + K(e)) * t;
    }
    function J(t, e, i) {
      return 3 * U(e, i) * t * t + 2 * Q(e, i) * t + K(e);
    }
    function tt(t) {
      return t;
    }
    var et = function (t, e, i, s) {
        if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && i === s) return tt;
        for (
          var n = G ? new Float32Array(11) : new Array(11), r = 0;
          r < 11;
          ++r
        )
          n[r] = Z(0.1 * r, t, i);
        function a(e) {
          for (var s = 0, r = 1; 10 !== r && n[r] <= e; ++r) s += 0.1;
          --r;
          var a = s + ((e - n[r]) / (n[r + 1] - n[r])) * 0.1,
            o = J(a, t, i);
          return o >= 0.001
            ? (function (t, e, i, s) {
                for (var n = 0; n < 4; ++n) {
                  var r = J(e, i, s);
                  if (0 === r) return e;
                  e -= (Z(e, i, s) - t) / r;
                }
                return e;
              })(e, a, t, i)
            : 0 === o
            ? a
            : (function (t, e, i, s, n) {
                var r,
                  a,
                  o = 0;
                do {
                  (r = Z((a = e + (i - e) / 2), s, n) - t) > 0
                    ? (i = a)
                    : (e = a);
                } while (Math.abs(r) > 1e-7 && ++o < 10);
                return a;
              })(e, s, s + 0.1, t, i);
        }
        return function (t) {
          return 0 === t ? 0 : 1 === t ? 1 : Z(a(t), e, s);
        };
      },
      it = (function (e) {
        a(n, e);
        var s = h(n);
        function n() {
          var e,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            t(this, n),
            history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0),
            (e = s.call(this, i)).inertia && (e.lerp = 0.1 * e.inertia),
            (e.isScrolling = !1),
            (e.isDraggingScrollbar = !1),
            (e.isTicking = !1),
            (e.hasScrollTicking = !1),
            (e.parallaxElements = {}),
            (e.stop = !1),
            (e.scrollbarContainer = i.scrollbarContainer),
            (e.checkKey = e.checkKey.bind(c(e))),
            window.addEventListener("keydown", e.checkKey, !1),
            e
          );
        }
        return (
          i(n, [
            {
              key: "init",
              value: function () {
                var t = this;
                this.html.classList.add(this.smoothClass),
                  this.html.setAttribute(
                    "data-".concat(this.name, "-direction"),
                    this.direction
                  ),
                  (this.instance = r(
                    {
                      delta: { x: this.initPosition.x, y: this.initPosition.y },
                      scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y,
                      },
                    },
                    this.instance
                  )),
                  (this.vs = new q({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier:
                      navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0,
                  })),
                  this.vs.on(function (e) {
                    t.stop ||
                      t.isDraggingScrollbar ||
                      requestAnimationFrame(function () {
                        t.updateDelta(e), t.isScrolling || t.startScrolling();
                      });
                  }),
                  this.setScrollLimit(),
                  this.initScrollBar(),
                  this.addSections(),
                  this.addElements(),
                  this.checkScroll(!0),
                  this.transformElements(!0, !0),
                  u(o(n.prototype), "init", this).call(this);
              },
            },
            {
              key: "setScrollLimit",
              value: function () {
                if (
                  ((this.instance.limit.y =
                    this.el.offsetHeight - this.windowHeight),
                  "horizontal" === this.direction)
                ) {
                  for (
                    var t = 0, e = this.el.children, i = 0;
                    i < e.length;
                    i++
                  )
                    t += e[i].offsetWidth;
                  this.instance.limit.x = t - this.windowWidth;
                }
              },
            },
            {
              key: "startScrolling",
              value: function () {
                (this.startScrollTs = Date.now()),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              },
            },
            {
              key: "stopScrolling",
              value: function () {
                cancelAnimationFrame(this.checkScrollRaf),
                  (this.startScrollTs = void 0),
                  this.scrollToRaf &&
                    (cancelAnimationFrame(this.scrollToRaf),
                    (this.scrollToRaf = null)),
                  (this.isScrolling = !1),
                  (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                  this.html.classList.remove(this.scrollingClass);
              },
            },
            {
              key: "checkKey",
              value: function (t) {
                var e = this;
                if (this.stop)
                  9 == t.keyCode &&
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0);
                    });
                else {
                  switch (t.keyCode) {
                    case 9:
                      requestAnimationFrame(function () {
                        (e.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (e.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0),
                          e.scrollTo(document.activeElement, {
                            offset: -window.innerHeight / 2,
                          });
                      });
                      break;
                    case 38:
                      this.isActiveElementScrollSensitive() &&
                        (this.instance.delta[this.directionAxis] -= 240);
                      break;
                    case 40:
                      this.isActiveElementScrollSensitive() &&
                        (this.instance.delta[this.directionAxis] += 240);
                      break;
                    case 33:
                      this.instance.delta[this.directionAxis] -=
                        window.innerHeight;
                      break;
                    case 34:
                      this.instance.delta[this.directionAxis] +=
                        window.innerHeight;
                      break;
                    case 36:
                      this.instance.delta[this.directionAxis] -=
                        this.instance.limit[this.directionAxis];
                      break;
                    case 35:
                      this.instance.delta[this.directionAxis] +=
                        this.instance.limit[this.directionAxis];
                      break;
                    case 32:
                      this.isActiveElementScrollSensitive() &&
                        (t.shiftKey
                          ? (this.instance.delta[this.directionAxis] -=
                              window.innerHeight)
                          : (this.instance.delta[this.directionAxis] +=
                              window.innerHeight));
                      break;
                    default:
                      return;
                  }
                  this.instance.delta[this.directionAxis] < 0 &&
                    (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]),
                    this.stopScrolling(),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                }
              },
            },
            {
              key: "isActiveElementScrollSensitive",
              value: function () {
                return !(
                  document.activeElement instanceof HTMLInputElement ||
                  document.activeElement instanceof HTMLTextAreaElement ||
                  document.activeElement instanceof HTMLButtonElement ||
                  document.activeElement instanceof HTMLSelectElement
                );
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this,
                  e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                if (e || this.isScrolling || this.isDraggingScrollbar) {
                  this.hasScrollTicking ||
                    ((this.checkScrollRaf = requestAnimationFrame(function () {
                      return t.checkScroll();
                    })),
                    (this.hasScrollTicking = !0)),
                    this.updateScroll();
                  var i = Math.abs(
                      this.instance.delta[this.directionAxis] -
                        this.instance.scroll[this.directionAxis]
                    ),
                    s = Date.now() - this.startScrollTs;
                  if (
                    (!this.animatingScroll &&
                      s > 100 &&
                      ((i < 0.5 &&
                        0 != this.instance.delta[this.directionAxis]) ||
                        (i < 0.5 &&
                          0 == this.instance.delta[this.directionAxis])) &&
                      this.stopScrolling(),
                    Object.entries(this.sections).forEach(function (i) {
                      var s = p(i, 2),
                        n = (s[0], s[1]);
                      n.persistent ||
                      (t.instance.scroll[t.directionAxis] >
                        n.offset[t.directionAxis] &&
                        t.instance.scroll[t.directionAxis] <
                          n.limit[t.directionAxis])
                        ? ("horizontal" === t.direction
                            ? t.transform(
                                n.el,
                                -t.instance.scroll[t.directionAxis],
                                0
                              )
                            : t.transform(
                                n.el,
                                0,
                                -t.instance.scroll[t.directionAxis]
                              ),
                          n.inView ||
                            ((n.inView = !0),
                            (n.el.style.opacity = 1),
                            (n.el.style.pointerEvents = "all"),
                            n.el.setAttribute(
                              "data-".concat(t.name, "-section-inview"),
                              ""
                            )))
                        : ((n.inView || e) &&
                            ((n.inView = !1),
                            (n.el.style.opacity = 0),
                            (n.el.style.pointerEvents = "none"),
                            n.el.removeAttribute(
                              "data-".concat(t.name, "-section-inview")
                            )),
                          t.transform(n.el, 0, 0));
                    }),
                    this.getDirection && this.addDirection(),
                    this.getSpeed &&
                      (this.addSpeed(), (this.speedTs = Date.now())),
                    this.detectElements(),
                    this.transformElements(),
                    this.hasScrollbar)
                  ) {
                    var r =
                      (this.instance.scroll[this.directionAxis] /
                        this.instance.limit[this.directionAxis]) *
                      this.scrollBarLimit[this.directionAxis];
                    "horizontal" === this.direction
                      ? this.transform(this.scrollbarThumb, r, 0)
                      : this.transform(this.scrollbarThumb, 0, r);
                  }
                  u(o(n.prototype), "checkScroll", this).call(this),
                    (this.hasScrollTicking = !1);
                }
              },
            },
            {
              key: "resize",
              value: function () {
                (this.windowHeight = window.innerHeight),
                  (this.windowWidth = window.innerWidth),
                  this.checkContext(),
                  (this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2,
                  }),
                  this.update();
              },
            },
            {
              key: "updateDelta",
              value: function (t) {
                var e,
                  i =
                    this[this.context] && this[this.context].gestureDirection
                      ? this[this.context].gestureDirection
                      : this.gestureDirection;
                (e =
                  "both" === i
                    ? t.deltaX + t.deltaY
                    : "vertical" === i
                    ? t.deltaY
                    : "horizontal" === i
                    ? t.deltaX
                    : t.deltaY),
                  (this.instance.delta[this.directionAxis] -=
                    e * this.multiplier),
                  this.instance.delta[this.directionAxis] < 0 &&
                    (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]);
              },
            },
            {
              key: "updateScroll",
              value: function (t) {
                this.isScrolling || this.isDraggingScrollbar
                  ? (this.instance.scroll[this.directionAxis] = F(
                      this.instance.scroll[this.directionAxis],
                      this.instance.delta[this.directionAxis],
                      this.lerp
                    ))
                  : this.instance.scroll[this.directionAxis] >
                    this.instance.limit[this.directionAxis]
                  ? this.setScroll(
                      this.instance.scroll[this.directionAxis],
                      this.instance.limit[this.directionAxis]
                    )
                  : this.instance.scroll.y < 0
                  ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                  : this.setScroll(
                      this.instance.scroll[this.directionAxis],
                      this.instance.delta[this.directionAxis]
                    );
              },
            },
            {
              key: "addDirection",
              value: function () {
                this.instance.delta.y > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : this.instance.delta.y < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up"),
                  this.instance.delta.x > this.instance.scroll.x
                    ? "right" !== this.instance.direction &&
                      (this.instance.direction = "right")
                    : this.instance.delta.x < this.instance.scroll.x &&
                      "left" !== this.instance.direction &&
                      (this.instance.direction = "left");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                this.instance.delta[this.directionAxis] !=
                this.instance.scroll[this.directionAxis]
                  ? (this.instance.speed =
                      (this.instance.delta[this.directionAxis] -
                        this.instance.scroll[this.directionAxis]) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "initScrollBar",
              value: function () {
                if (
                  ((this.scrollbar = document.createElement("span")),
                  (this.scrollbarThumb = document.createElement("span")),
                  this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                  this.scrollbarThumb.classList.add(
                    "".concat(this.scrollbarClass, "_thumb")
                  ),
                  this.scrollbar.append(this.scrollbarThumb),
                  this.scrollbarContainer
                    ? this.scrollbarContainer.append(this.scrollbar)
                    : document.body.append(this.scrollbar),
                  (this.getScrollBar = this.getScrollBar.bind(this)),
                  (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                  (this.moveScrollBar = this.moveScrollBar.bind(this)),
                  this.scrollbarThumb.addEventListener(
                    "mousedown",
                    this.getScrollBar
                  ),
                  window.addEventListener("mouseup", this.releaseScrollBar),
                  window.addEventListener("mousemove", this.moveScrollBar),
                  (this.hasScrollbar = !1),
                  "horizontal" == this.direction)
                ) {
                  if (
                    this.instance.limit.x + this.windowWidth <=
                    this.windowWidth
                  )
                    return;
                } else if (
                  this.instance.limit.y + this.windowHeight <=
                  this.windowHeight
                )
                  return;
                (this.hasScrollbar = !0),
                  (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                  (this.scrollbarHeight = this.scrollbarBCR.height),
                  (this.scrollbarWidth = this.scrollbarBCR.width),
                  "horizontal" === this.direction
                    ? (this.scrollbarThumb.style.width = "".concat(
                        (this.scrollbarWidth * this.scrollbarWidth) /
                          (this.instance.limit.x + this.scrollbarWidth),
                        "px"
                      ))
                    : (this.scrollbarThumb.style.height = "".concat(
                        (this.scrollbarHeight * this.scrollbarHeight) /
                          (this.instance.limit.y + this.scrollbarHeight),
                        "px"
                      )),
                  (this.scrollbarThumbBCR =
                    this.scrollbarThumb.getBoundingClientRect()),
                  (this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                  });
              },
            },
            {
              key: "reinitScrollBar",
              value: function () {
                if (
                  ((this.hasScrollbar = !1), "horizontal" == this.direction)
                ) {
                  if (
                    this.instance.limit.x + this.windowWidth <=
                    this.windowWidth
                  )
                    return;
                } else if (
                  this.instance.limit.y + this.windowHeight <=
                  this.windowHeight
                )
                  return;
                (this.hasScrollbar = !0),
                  (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                  (this.scrollbarHeight = this.scrollbarBCR.height),
                  (this.scrollbarWidth = this.scrollbarBCR.width),
                  "horizontal" === this.direction
                    ? (this.scrollbarThumb.style.width = "".concat(
                        (this.scrollbarWidth * this.scrollbarWidth) /
                          (this.instance.limit.x + this.scrollbarWidth),
                        "px"
                      ))
                    : (this.scrollbarThumb.style.height = "".concat(
                        (this.scrollbarHeight * this.scrollbarHeight) /
                          (this.instance.limit.y + this.scrollbarHeight),
                        "px"
                      )),
                  (this.scrollbarThumbBCR =
                    this.scrollbarThumb.getBoundingClientRect()),
                  (this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                  });
              },
            },
            {
              key: "destroyScrollBar",
              value: function () {
                this.scrollbarThumb.removeEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                  window.removeEventListener("mouseup", this.releaseScrollBar),
                  window.removeEventListener("mousemove", this.moveScrollBar),
                  this.scrollbar.remove();
              },
            },
            {
              key: "getScrollBar",
              value: function (t) {
                (this.isDraggingScrollbar = !0),
                  this.checkScroll(),
                  this.html.classList.remove(this.scrollingClass),
                  this.html.classList.add(this.draggingClass);
              },
            },
            {
              key: "releaseScrollBar",
              value: function (t) {
                (this.isDraggingScrollbar = !1),
                  this.isScrolling &&
                    this.html.classList.add(this.scrollingClass),
                  this.html.classList.remove(this.draggingClass);
              },
            },
            {
              key: "moveScrollBar",
              value: function (t) {
                var e = this;
                this.isDraggingScrollbar &&
                  requestAnimationFrame(function () {
                    var i =
                        (((100 * (t.clientX - e.scrollbarBCR.left)) /
                          e.scrollbarWidth) *
                          e.instance.limit.x) /
                        100,
                      s =
                        (((100 * (t.clientY - e.scrollbarBCR.top)) /
                          e.scrollbarHeight) *
                          e.instance.limit.y) /
                        100;
                    s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s),
                      i > 0 &&
                        i < e.instance.limit.x &&
                        (e.instance.delta.x = i);
                  });
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  (this.parallaxElements = {}),
                  this.el
                    .querySelectorAll("[data-".concat(this.name, "]"))
                    .forEach(function (e, i) {
                      var s,
                        n,
                        r,
                        a = V(e),
                        o = Object.entries(t.sections)
                          .map(function (t) {
                            var e = p(t, 2);
                            return e[0], e[1];
                          })
                          .find(function (t) {
                            return a.includes(t.el);
                          }),
                        l = e.dataset[t.name + "Class"] || t.class,
                        c =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : "el" + i,
                        d = e.dataset[t.name + "Repeat"],
                        h = e.dataset[t.name + "Call"],
                        u = e.dataset[t.name + "Position"],
                        f = e.dataset[t.name + "Delay"],
                        m = e.dataset[t.name + "Direction"],
                        g = "string" == typeof e.dataset[t.name + "Sticky"],
                        v =
                          !!e.dataset[t.name + "Speed"] &&
                          parseFloat(e.dataset[t.name + "Speed"]) / 10,
                        y =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        w = e.dataset[t.name + "Target"],
                        b = (r =
                          void 0 !== w
                            ? document.querySelector("".concat(w))
                            : e).getBoundingClientRect();
                      null === o || o.inView
                        ? ((s = b.top + t.instance.scroll.y - N(r).y),
                          (n = b.left + t.instance.scroll.x - N(r).x))
                        : ((s = b.top - N(o.el).y - N(r).y),
                          (n = b.left - N(o.el).x - N(r).x));
                      var x = s + r.offsetHeight,
                        _ = n + r.offsetWidth,
                        E = { x: (_ - n) / 2 + n, y: (x - s) / 2 + s };
                      if (g) {
                        var T = e.getBoundingClientRect(),
                          S = T.top,
                          C = T.left,
                          M = { x: C - n, y: S - s };
                        (s += window.innerHeight),
                          (n += window.innerWidth),
                          (x =
                            S +
                            r.offsetHeight -
                            e.offsetHeight -
                            M[t.directionAxis]),
                          (E = {
                            x:
                              ((_ =
                                C +
                                r.offsetWidth -
                                e.offsetWidth -
                                M[t.directionAxis]) -
                                n) /
                                2 +
                              n,
                            y: (x - s) / 2 + s,
                          });
                      }
                      d = "false" != d && (null != d || t.repeat);
                      var k = [0, 0];
                      if (y)
                        if ("horizontal" === t.direction) {
                          for (var $ = 0; $ < y.length; $++)
                            "string" == typeof y[$]
                              ? y[$].includes("%")
                                ? (k[$] = parseInt(
                                    (y[$].replace("%", "") * t.windowWidth) /
                                      100
                                  ))
                                : (k[$] = parseInt(y[$]))
                              : (k[$] = y[$]);
                          (n += k[0]), (_ -= k[1]);
                        } else {
                          for ($ = 0; $ < y.length; $++)
                            "string" == typeof y[$]
                              ? y[$].includes("%")
                                ? (k[$] = parseInt(
                                    (y[$].replace("%", "") * t.windowHeight) /
                                      100
                                  ))
                                : (k[$] = parseInt(y[$]))
                              : (k[$] = y[$]);
                          (s += k[0]), (x -= k[1]);
                        }
                      var O = {
                        el: e,
                        id: c,
                        class: l,
                        section: o,
                        top: s,
                        middle: E,
                        bottom: x,
                        left: n,
                        right: _,
                        offset: y,
                        progress: 0,
                        repeat: d,
                        inView: !1,
                        call: h,
                        speed: v,
                        delay: f,
                        position: u,
                        target: r,
                        direction: m,
                        sticky: g,
                      };
                      (t.els[c] = O),
                        e.classList.contains(l) && t.setInView(t.els[c], c),
                        (!1 !== v || g) && (t.parallaxElements[c] = O);
                    });
              },
            },
            {
              key: "addSections",
              value: function () {
                var t = this;
                this.sections = {};
                var e = this.el.querySelectorAll(
                  "[data-".concat(this.name, "-section]")
                );
                0 === e.length && (e = [this.el]),
                  e.forEach(function (e, i) {
                    var s =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "section" + i,
                      n = e.getBoundingClientRect(),
                      r = {
                        x: n.left - 1.5 * window.innerWidth - N(e).x,
                        y: n.top - 1.5 * window.innerHeight - N(e).y,
                      },
                      a = {
                        x: r.x + n.width + 2 * window.innerWidth,
                        y: r.y + n.height + 2 * window.innerHeight,
                      },
                      o = "string" == typeof e.dataset[t.name + "Persistent"];
                    e.setAttribute("data-scroll-section-id", s);
                    var l = {
                      el: e,
                      offset: r,
                      limit: a,
                      inView: !1,
                      persistent: o,
                      id: s,
                    };
                    t.sections[s] = l;
                  });
              },
            },
            {
              key: "transform",
              value: function (t, e, i, s) {
                var n;
                if (s) {
                  var r = N(t),
                    a = F(r.x, e, s),
                    o = F(r.y, i, s);
                  n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                    .concat(a, ",")
                    .concat(o, ",0,1)");
                } else
                  n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                    .concat(e, ",")
                    .concat(i, ",0,1)");
                (t.style.webkitTransform = n),
                  (t.style.msTransform = n),
                  (t.style.transform = n);
              },
            },
            {
              key: "transformElements",
              value: function (t) {
                var e = this,
                  i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  s = this.instance.scroll.x + this.windowWidth,
                  n = this.instance.scroll.y + this.windowHeight,
                  r = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y,
                  };
                Object.entries(this.parallaxElements).forEach(function (a) {
                  var o = p(a, 2),
                    l = (o[0], o[1]),
                    c = !1;
                  if ((t && (c = 0), l.inView || i))
                    switch (l.position) {
                      case "top":
                      case "left":
                        c = e.instance.scroll[e.directionAxis] * -l.speed;
                        break;
                      case "elementTop":
                        c = (n - l.top) * -l.speed;
                        break;
                      case "bottom":
                        c =
                          (e.instance.limit[e.directionAxis] -
                            n +
                            e.windowHeight) *
                          l.speed;
                        break;
                      case "elementLeft":
                        c = (s - l.left) * -l.speed;
                        break;
                      case "right":
                        c =
                          (e.instance.limit[e.directionAxis] -
                            s +
                            e.windowHeight) *
                          l.speed;
                        break;
                      default:
                        c =
                          (r[e.directionAxis] - l.middle[e.directionAxis]) *
                          -l.speed;
                    }
                  l.sticky &&
                    (c = l.inView
                      ? "horizontal" === e.direction
                        ? e.instance.scroll.x - l.left + window.innerWidth
                        : e.instance.scroll.y - l.top + window.innerHeight
                      : "horizontal" === e.direction
                      ? e.instance.scroll.x < l.left - window.innerWidth &&
                        e.instance.scroll.x < l.left - window.innerWidth / 2
                        ? 0
                        : e.instance.scroll.x > l.right &&
                          e.instance.scroll.x > l.right + 100 &&
                          l.right - l.left + window.innerWidth
                      : e.instance.scroll.y < l.top - window.innerHeight &&
                        e.instance.scroll.y < l.top - window.innerHeight / 2
                      ? 0
                      : e.instance.scroll.y > l.bottom &&
                        e.instance.scroll.y > l.bottom + 100 &&
                        l.bottom - l.top + window.innerHeight),
                    !1 !== c &&
                      ("horizontal" === l.direction ||
                      ("horizontal" === e.direction &&
                        "vertical" !== l.direction)
                        ? e.transform(l.el, c, 0, !t && l.delay)
                        : e.transform(l.el, 0, c, !t && l.delay));
                });
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e = this,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  s = parseInt(i.offset) || 0,
                  n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                  r = i.easing || [0.25, 0, 0.35, 1],
                  a = !!i.disableLerp,
                  o = !!i.callback && i.callback;
                if (((r = et.apply(void 0, f(r))), "string" == typeof t)) {
                  if ("top" === t) t = 0;
                  else if ("bottom" === t) t = this.instance.limit.y;
                  else if ("left" === t) t = 0;
                  else if ("right" === t) t = this.instance.limit.x;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                if ("number" != typeof t) {
                  var l = V(t).includes(this.el);
                  if (!l) return;
                  var c = t.getBoundingClientRect(),
                    d = c.top,
                    h = c.left,
                    u = V(t),
                    m = u.find(function (t) {
                      return Object.entries(e.sections)
                        .map(function (t) {
                          var e = p(t, 2);
                          return e[0], e[1];
                        })
                        .find(function (e) {
                          return e.el == t;
                        });
                    }),
                    g = 0;
                  (g = m
                    ? N(m)[this.directionAxis]
                    : -this.instance.scroll[this.directionAxis]),
                    (s =
                      "horizontal" === this.direction ? h + s - g : d + s - g);
                } else s = t + s;
                var v = parseFloat(this.instance.delta[this.directionAxis]),
                  y = Math.max(
                    0,
                    Math.min(s, this.instance.limit[this.directionAxis])
                  ),
                  w = y - v,
                  b = function (t) {
                    a
                      ? "horizontal" === e.direction
                        ? e.setScroll(v + w * t, e.instance.delta.y)
                        : e.setScroll(e.instance.delta.x, v + w * t)
                      : (e.instance.delta[e.directionAxis] = v + w * t);
                  };
                (this.animatingScroll = !0),
                  this.stopScrolling(),
                  this.startScrolling();
                var x = Date.now(),
                  _ = function t() {
                    var i = (Date.now() - x) / n;
                    i > 1
                      ? (b(1),
                        (e.animatingScroll = !1),
                        0 == n && e.update(),
                        o && o())
                      : ((e.scrollToRaf = requestAnimationFrame(t)), b(r(i)));
                  };
                _();
              },
            },
            {
              key: "update",
              value: function () {
                this.setScrollLimit(),
                  this.addSections(),
                  this.addElements(),
                  this.detectElements(),
                  this.updateScroll(),
                  this.transformElements(!0),
                  this.reinitScrollBar(),
                  this.checkScroll(!0);
              },
            },
            {
              key: "startScroll",
              value: function () {
                this.stop = !1;
              },
            },
            {
              key: "stopScroll",
              value: function () {
                this.stop = !0;
              },
            },
            {
              key: "setScroll",
              value: function (t, e) {
                this.instance = r(
                  r({}, this.instance),
                  {},
                  { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                u(o(n.prototype), "destroy", this).call(this),
                  this.stopScrolling(),
                  this.html.classList.remove(this.smoothClass),
                  this.vs.destroy(),
                  this.destroyScrollBar(),
                  window.removeEventListener("keydown", this.checkKey, !1);
              },
            },
          ]),
          n
        );
      })(y);
    return (function () {
      function e() {
        var i =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e),
          (this.options = i),
          Object.assign(this, v, i),
          (this.smartphone = v.smartphone),
          i.smartphone && Object.assign(this.smartphone, i.smartphone),
          (this.tablet = v.tablet),
          i.tablet && Object.assign(this.tablet, i.tablet),
          this.smooth ||
            "horizontal" != this.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
            ),
          this.tablet.smooth ||
            "horizontal" != this.tablet.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
            ),
          this.smartphone.smooth ||
            "horizontal" != this.smartphone.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
            ),
          this.init();
      }
      return (
        i(e, [
          {
            key: "init",
            value: function () {
              if (
                ((this.options.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.isMobile &&
                  !this.options.isTablet)
                  ? (this.scroll = new it(this.options))
                  : (this.scroll = new _(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var t = window.location.hash.slice(
                    1,
                    window.location.hash.length
                  ),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e);
              }
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        e
      );
    })();
  }),
  (function (t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : (("undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this
        ).Parallax = t());
  })(function () {
    return (function t(e, i, s) {
      function n(a, o) {
        if (!i[a]) {
          if (!e[a]) {
            var l = "function" == typeof require && require;
            if (!o && l) return l(a, !0);
            if (r) return r(a, !0);
            var c = new Error("Cannot find module '" + a + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          var d = (i[a] = { exports: {} });
          e[a][0].call(
            d.exports,
            function (t) {
              return n(e[a][1][t] || t);
            },
            d,
            d.exports,
            t,
            e,
            i,
            s
          );
        }
        return i[a].exports;
      }
      for (
        var r = "function" == typeof require && require, a = 0;
        a < s.length;
        a++
      )
        n(s[a]);
      return n;
    })(
      {
        1: [
          function (t, e, i) {
            "use strict";
            function s(t) {
              if (null == t)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(t);
            }
            var n = Object.getOwnPropertySymbols,
              r = Object.prototype.hasOwnProperty,
              a = Object.prototype.propertyIsEnumerable;
            e.exports = (function () {
              try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                  return !1;
                for (var e = {}, i = 0; i < 10; i++)
                  e["_" + String.fromCharCode(i)] = i;
                if (
                  "0123456789" !==
                  Object.getOwnPropertyNames(e)
                    .map(function (t) {
                      return e[t];
                    })
                    .join("")
                )
                  return !1;
                var s = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function (t) {
                    s[t] = t;
                  }),
                  "abcdefghijklmnopqrst" ===
                    Object.keys(Object.assign({}, s)).join("")
                );
              } catch (t) {
                return !1;
              }
            })()
              ? Object.assign
              : function (t, e) {
                  for (var i, o, l = s(t), c = 1; c < arguments.length; c++) {
                    for (var d in (i = Object(arguments[c])))
                      r.call(i, d) && (l[d] = i[d]);
                    if (n) {
                      o = n(i);
                      for (var h = 0; h < o.length; h++)
                        a.call(i, o[h]) && (l[o[h]] = i[o[h]]);
                    }
                  }
                  return l;
                };
          },
          {},
        ],
        2: [
          function (t, e, i) {
            (function (t) {
              (function () {
                var i, s, n, r, a, o;
                "undefined" != typeof performance &&
                null !== performance &&
                performance.now
                  ? (e.exports = function () {
                      return performance.now();
                    })
                  : null != t && t.hrtime
                  ? ((e.exports = function () {
                      return (i() - a) / 1e6;
                    }),
                    (s = t.hrtime),
                    (r = (i = function () {
                      var t;
                      return 1e9 * (t = s())[0] + t[1];
                    })()),
                    (o = 1e9 * t.uptime()),
                    (a = r - o))
                  : Date.now
                  ? ((e.exports = function () {
                      return Date.now() - n;
                    }),
                    (n = Date.now()))
                  : ((e.exports = function () {
                      return new Date().getTime() - n;
                    }),
                    (n = new Date().getTime()));
              }).call(this);
            }).call(this, t("_process"));
          },
          { _process: 3 },
        ],
        3: [
          function (t, e, i) {
            function s() {
              throw new Error("setTimeout has not been defined");
            }
            function n() {
              throw new Error("clearTimeout has not been defined");
            }
            function r(t) {
              if (d === setTimeout) return setTimeout(t, 0);
              if ((d === s || !d) && setTimeout)
                return (d = setTimeout), setTimeout(t, 0);
              try {
                return d(t, 0);
              } catch (e) {
                try {
                  return d.call(null, t, 0);
                } catch (e) {
                  return d.call(this, t, 0);
                }
              }
            }
            function a() {
              m &&
                p &&
                ((m = !1),
                p.length ? (f = p.concat(f)) : (g = -1),
                f.length && o());
            }
            function o() {
              if (!m) {
                var t = r(a);
                m = !0;
                for (var e = f.length; e; ) {
                  for (p = f, f = []; ++g < e; ) p && p[g].run();
                  (g = -1), (e = f.length);
                }
                (p = null),
                  (m = !1),
                  (function (t) {
                    if (h === clearTimeout) return clearTimeout(t);
                    if ((h === n || !h) && clearTimeout)
                      return (h = clearTimeout), clearTimeout(t);
                    try {
                      h(t);
                    } catch (e) {
                      try {
                        return h.call(null, t);
                      } catch (e) {
                        return h.call(this, t);
                      }
                    }
                  })(t);
              }
            }
            function l(t, e) {
              (this.fun = t), (this.array = e);
            }
            function c() {}
            var d,
              h,
              u = (e.exports = {});
            !(function () {
              try {
                d = "function" == typeof setTimeout ? setTimeout : s;
              } catch (t) {
                d = s;
              }
              try {
                h = "function" == typeof clearTimeout ? clearTimeout : n;
              } catch (t) {
                h = n;
              }
            })();
            var p,
              f = [],
              m = !1,
              g = -1;
            (u.nextTick = function (t) {
              var e = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                  e[i - 1] = arguments[i];
              f.push(new l(t, e)), 1 !== f.length || m || r(o);
            }),
              (l.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (u.title = "browser"),
              (u.browser = !0),
              (u.env = {}),
              (u.argv = []),
              (u.version = ""),
              (u.versions = {}),
              (u.on = c),
              (u.addListener = c),
              (u.once = c),
              (u.off = c),
              (u.removeListener = c),
              (u.removeAllListeners = c),
              (u.emit = c),
              (u.prependListener = c),
              (u.prependOnceListener = c),
              (u.listeners = function (t) {
                return [];
              }),
              (u.binding = function (t) {
                throw new Error("process.binding is not supported");
              }),
              (u.cwd = function () {
                return "/";
              }),
              (u.chdir = function (t) {
                throw new Error("process.chdir is not supported");
              }),
              (u.umask = function () {
                return 0;
              });
          },
          {},
        ],
        4: [
          function (t, e, i) {
            (function (i) {
              for (
                var s = t("performance-now"),
                  n = "undefined" == typeof window ? i : window,
                  r = ["moz", "webkit"],
                  a = "AnimationFrame",
                  o = n["request" + a],
                  l = n["cancel" + a] || n["cancelRequest" + a],
                  c = 0;
                !o && c < r.length;
                c++
              )
                (o = n[r[c] + "Request" + a]),
                  (l = n[r[c] + "Cancel" + a] || n[r[c] + "CancelRequest" + a]);
              if (!o || !l) {
                var d = 0,
                  h = 0,
                  u = [];
                (o = function (t) {
                  if (0 === u.length) {
                    var e = s(),
                      i = Math.max(0, 1e3 / 60 - (e - d));
                    (d = i + e),
                      setTimeout(function () {
                        var t = u.slice(0);
                        u.length = 0;
                        for (var e = 0; e < t.length; e++)
                          if (!t[e].cancelled)
                            try {
                              t[e].callback(d);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              }, 0);
                            }
                      }, Math.round(i));
                  }
                  return u.push({ handle: ++h, callback: t, cancelled: !1 }), h;
                }),
                  (l = function (t) {
                    for (var e = 0; e < u.length; e++)
                      u[e].handle === t && (u[e].cancelled = !0);
                  });
              }
              (e.exports = function (t) {
                return o.call(n, t);
              }),
                (e.exports.cancel = function () {
                  l.apply(n, arguments);
                }),
                (e.exports.polyfill = function () {
                  (n.requestAnimationFrame = o), (n.cancelAnimationFrame = l);
                });
            }).call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            );
          },
          { "performance-now": 2 },
        ],
        5: [
          function (t, e, i) {
            "use strict";
            var s = (function () {
                function t(t, e) {
                  for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(t, s.key, s);
                  }
                }
                return function (e, i, s) {
                  return i && t(e.prototype, i), s && t(e, s), e;
                };
              })(),
              n = t("raf"),
              r = t("object-assign"),
              a = {
                propertyCache: {},
                vendors: [
                  null,
                  ["-webkit-", "webkit"],
                  ["-moz-", "Moz"],
                  ["-o-", "O"],
                  ["-ms-", "ms"],
                ],
                clamp: function (t, e, i) {
                  return e < i
                    ? t < e
                      ? e
                      : t > i
                      ? i
                      : t
                    : t < i
                    ? i
                    : t > e
                    ? e
                    : t;
                },
                data: function (t, e) {
                  return a.deserialize(t.getAttribute("data-" + e));
                },
                deserialize: function (t) {
                  return (
                    "true" === t ||
                    ("false" !== t &&
                      ("null" === t
                        ? null
                        : !isNaN(parseFloat(t)) && isFinite(t)
                        ? parseFloat(t)
                        : t))
                  );
                },
                camelCase: function (t) {
                  return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : "";
                  });
                },
                accelerate: function (t) {
                  a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                    a.css(t, "transform-style", "preserve-3d"),
                    a.css(t, "backface-visibility", "hidden");
                },
                transformSupport: function (t) {
                  for (
                    var e = document.createElement("div"),
                      i = !1,
                      s = null,
                      n = !1,
                      r = null,
                      o = null,
                      l = 0,
                      c = a.vendors.length;
                    l < c;
                    l++
                  )
                    if (
                      (null !== a.vendors[l]
                        ? ((r = a.vendors[l][0] + "transform"),
                          (o = a.vendors[l][1] + "Transform"))
                        : ((r = "transform"), (o = "transform")),
                      void 0 !== e.style[o])
                    ) {
                      i = !0;
                      break;
                    }
                  switch (t) {
                    case "2D":
                      n = i;
                      break;
                    case "3D":
                      if (i) {
                        var d = document.body || document.createElement("body"),
                          h = document.documentElement,
                          u = h.style.overflow,
                          p = !1;
                        document.body ||
                          ((p = !0),
                          (h.style.overflow = "hidden"),
                          h.appendChild(d),
                          (d.style.overflow = "hidden"),
                          (d.style.background = "")),
                          d.appendChild(e),
                          (e.style[o] = "translate3d(1px,1px,1px)"),
                          (n =
                            void 0 !==
                              (s = window
                                .getComputedStyle(e)
                                .getPropertyValue(r)) &&
                            s.length > 0 &&
                            "none" !== s),
                          (h.style.overflow = u),
                          d.removeChild(e),
                          p &&
                            (d.removeAttribute("style"),
                            d.parentNode.removeChild(d));
                      }
                  }
                  return n;
                },
                css: function (t, e, i) {
                  var s = a.propertyCache[e];
                  if (!s)
                    for (var n = 0, r = a.vendors.length; n < r; n++)
                      if (
                        ((s =
                          null !== a.vendors[n]
                            ? a.camelCase(a.vendors[n][1] + "-" + e)
                            : e),
                        void 0 !== t.style[s])
                      ) {
                        a.propertyCache[e] = s;
                        break;
                      }
                  t.style[s] = i;
                },
              },
              o = {
                relativeInput: !1,
                clipRelativeInput: !1,
                inputElement: null,
                hoverOnly: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: 0.1,
                frictionY: 0.1,
                originX: 0.5,
                originY: 0.5,
                pointerEvents: !1,
                precision: 1,
                onReady: null,
                selector: null,
              },
              l = (function () {
                function t(e, i) {
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this.element = e);
                  var s = {
                    calibrateX: a.data(this.element, "calibrate-x"),
                    calibrateY: a.data(this.element, "calibrate-y"),
                    invertX: a.data(this.element, "invert-x"),
                    invertY: a.data(this.element, "invert-y"),
                    limitX: a.data(this.element, "limit-x"),
                    limitY: a.data(this.element, "limit-y"),
                    scalarX: a.data(this.element, "scalar-x"),
                    scalarY: a.data(this.element, "scalar-y"),
                    frictionX: a.data(this.element, "friction-x"),
                    frictionY: a.data(this.element, "friction-y"),
                    originX: a.data(this.element, "origin-x"),
                    originY: a.data(this.element, "origin-y"),
                    pointerEvents: a.data(this.element, "pointer-events"),
                    precision: a.data(this.element, "precision"),
                    relativeInput: a.data(this.element, "relative-input"),
                    clipRelativeInput: a.data(
                      this.element,
                      "clip-relative-input"
                    ),
                    hoverOnly: a.data(this.element, "hover-only"),
                    inputElement: document.querySelector(
                      a.data(this.element, "input-element")
                    ),
                    selector: a.data(this.element, "selector"),
                  };
                  for (var n in s) null === s[n] && delete s[n];
                  r(this, o, s, i),
                    this.inputElement || (this.inputElement = this.element),
                    (this.calibrationTimer = null),
                    (this.calibrationFlag = !0),
                    (this.enabled = !1),
                    (this.depthsX = []),
                    (this.depthsY = []),
                    (this.raf = null),
                    (this.bounds = null),
                    (this.elementPositionX = 0),
                    (this.elementPositionY = 0),
                    (this.elementWidth = 0),
                    (this.elementHeight = 0),
                    (this.elementCenterX = 0),
                    (this.elementCenterY = 0),
                    (this.elementRangeX = 0),
                    (this.elementRangeY = 0),
                    (this.calibrationX = 0),
                    (this.calibrationY = 0),
                    (this.inputX = 0),
                    (this.inputY = 0),
                    (this.motionX = 0),
                    (this.motionY = 0),
                    (this.velocityX = 0),
                    (this.velocityY = 0),
                    (this.onMouseMove = this.onMouseMove.bind(this)),
                    (this.onDeviceOrientation =
                      this.onDeviceOrientation.bind(this)),
                    (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                    (this.onOrientationTimer =
                      this.onOrientationTimer.bind(this)),
                    (this.onMotionTimer = this.onMotionTimer.bind(this)),
                    (this.onCalibrationTimer =
                      this.onCalibrationTimer.bind(this)),
                    (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                    (this.onWindowResize = this.onWindowResize.bind(this)),
                    (this.windowWidth = null),
                    (this.windowHeight = null),
                    (this.windowCenterX = null),
                    (this.windowCenterY = null),
                    (this.windowRadiusX = null),
                    (this.windowRadiusY = null),
                    (this.portrait = !1),
                    (this.desktop = !navigator.userAgent.match(
                      /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                    )),
                    (this.motionSupport =
                      !!window.DeviceMotionEvent && !this.desktop),
                    (this.orientationSupport =
                      !!window.DeviceOrientationEvent && !this.desktop),
                    (this.orientationStatus = 0),
                    (this.motionStatus = 0),
                    this.initialise();
                }
                return (
                  s(t, [
                    {
                      key: "initialise",
                      value: function () {
                        void 0 === this.transform2DSupport &&
                          ((this.transform2DSupport = a.transformSupport("2D")),
                          (this.transform3DSupport = a.transformSupport("3D"))),
                          this.transform3DSupport && a.accelerate(this.element),
                          "static" ===
                            window
                              .getComputedStyle(this.element)
                              .getPropertyValue("position") &&
                            (this.element.style.position = "relative"),
                          this.pointerEvents ||
                            (this.element.style.pointerEvents = "none"),
                          this.updateLayers(),
                          this.updateDimensions(),
                          this.enable(),
                          this.queueCalibration(this.calibrationDelay);
                      },
                    },
                    {
                      key: "doReadyCallback",
                      value: function () {
                        this.onReady && this.onReady();
                      },
                    },
                    {
                      key: "updateLayers",
                      value: function () {
                        this.selector
                          ? (this.layers = this.element.querySelectorAll(
                              this.selector
                            ))
                          : (this.layers = this.element.children),
                          this.layers.length ||
                            console.warn(
                              "ParallaxJS: Your scene does not have any layers."
                            ),
                          (this.depthsX = []),
                          (this.depthsY = []);
                        for (var t = 0; t < this.layers.length; t++) {
                          var e = this.layers[t];
                          this.transform3DSupport && a.accelerate(e),
                            (e.style.position = t ? "absolute" : "relative"),
                            (e.style.display = "block"),
                            (e.style.left = 0),
                            (e.style.top = 0);
                          var i = a.data(e, "depth") || 0;
                          this.depthsX.push(a.data(e, "depth-x") || i),
                            this.depthsY.push(a.data(e, "depth-y") || i);
                        }
                      },
                    },
                    {
                      key: "updateDimensions",
                      value: function () {
                        (this.windowWidth = window.innerWidth),
                          (this.windowHeight = window.innerHeight),
                          (this.windowCenterX =
                            this.windowWidth * this.originX),
                          (this.windowCenterY =
                            this.windowHeight * this.originY),
                          (this.windowRadiusX = Math.max(
                            this.windowCenterX,
                            this.windowWidth - this.windowCenterX
                          )),
                          (this.windowRadiusY = Math.max(
                            this.windowCenterY,
                            this.windowHeight - this.windowCenterY
                          ));
                      },
                    },
                    {
                      key: "updateBounds",
                      value: function () {
                        (this.bounds =
                          this.inputElement.getBoundingClientRect()),
                          (this.elementPositionX = this.bounds.left),
                          (this.elementPositionY = this.bounds.top),
                          (this.elementWidth = this.bounds.width),
                          (this.elementHeight = this.bounds.height),
                          (this.elementCenterX =
                            this.elementWidth * this.originX),
                          (this.elementCenterY =
                            this.elementHeight * this.originY),
                          (this.elementRangeX = Math.max(
                            this.elementCenterX,
                            this.elementWidth - this.elementCenterX
                          )),
                          (this.elementRangeY = Math.max(
                            this.elementCenterY,
                            this.elementHeight - this.elementCenterY
                          ));
                      },
                    },
                    {
                      key: "queueCalibration",
                      value: function (t) {
                        clearTimeout(this.calibrationTimer),
                          (this.calibrationTimer = setTimeout(
                            this.onCalibrationTimer,
                            t
                          ));
                      },
                    },
                    {
                      key: "enable",
                      value: function () {
                        this.enabled ||
                          ((this.enabled = !0),
                          this.orientationSupport
                            ? ((this.portrait = !1),
                              window.addEventListener(
                                "deviceorientation",
                                this.onDeviceOrientation
                              ),
                              (this.detectionTimer = setTimeout(
                                this.onOrientationTimer,
                                this.supportDelay
                              )))
                            : this.motionSupport
                            ? ((this.portrait = !1),
                              window.addEventListener(
                                "devicemotion",
                                this.onDeviceMotion
                              ),
                              (this.detectionTimer = setTimeout(
                                this.onMotionTimer,
                                this.supportDelay
                              )))
                            : ((this.calibrationX = 0),
                              (this.calibrationY = 0),
                              (this.portrait = !1),
                              window.addEventListener(
                                "mousemove",
                                this.onMouseMove
                              ),
                              this.doReadyCallback()),
                          window.addEventListener(
                            "resize",
                            this.onWindowResize
                          ),
                          (this.raf = n(this.onAnimationFrame)));
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        this.enabled &&
                          ((this.enabled = !1),
                          this.orientationSupport
                            ? window.removeEventListener(
                                "deviceorientation",
                                this.onDeviceOrientation
                              )
                            : this.motionSupport
                            ? window.removeEventListener(
                                "devicemotion",
                                this.onDeviceMotion
                              )
                            : window.removeEventListener(
                                "mousemove",
                                this.onMouseMove
                              ),
                          window.removeEventListener(
                            "resize",
                            this.onWindowResize
                          ),
                          n.cancel(this.raf));
                      },
                    },
                    {
                      key: "calibrate",
                      value: function (t, e) {
                        (this.calibrateX = void 0 === t ? this.calibrateX : t),
                          (this.calibrateY =
                            void 0 === e ? this.calibrateY : e);
                      },
                    },
                    {
                      key: "invert",
                      value: function (t, e) {
                        (this.invertX = void 0 === t ? this.invertX : t),
                          (this.invertY = void 0 === e ? this.invertY : e);
                      },
                    },
                    {
                      key: "friction",
                      value: function (t, e) {
                        (this.frictionX = void 0 === t ? this.frictionX : t),
                          (this.frictionY = void 0 === e ? this.frictionY : e);
                      },
                    },
                    {
                      key: "scalar",
                      value: function (t, e) {
                        (this.scalarX = void 0 === t ? this.scalarX : t),
                          (this.scalarY = void 0 === e ? this.scalarY : e);
                      },
                    },
                    {
                      key: "limit",
                      value: function (t, e) {
                        (this.limitX = void 0 === t ? this.limitX : t),
                          (this.limitY = void 0 === e ? this.limitY : e);
                      },
                    },
                    {
                      key: "origin",
                      value: function (t, e) {
                        (this.originX = void 0 === t ? this.originX : t),
                          (this.originY = void 0 === e ? this.originY : e);
                      },
                    },
                    {
                      key: "setInputElement",
                      value: function (t) {
                        (this.inputElement = t), this.updateDimensions();
                      },
                    },
                    {
                      key: "setPosition",
                      value: function (t, e, i) {
                        (e = e.toFixed(this.precision) + "px"),
                          (i = i.toFixed(this.precision) + "px"),
                          this.transform3DSupport
                            ? a.css(
                                t,
                                "transform",
                                "translate3d(" + e + "," + i + ",0)"
                              )
                            : this.transform2DSupport
                            ? a.css(
                                t,
                                "transform",
                                "translate(" + e + "," + i + ")"
                              )
                            : ((t.style.left = e), (t.style.top = i));
                      },
                    },
                    {
                      key: "onOrientationTimer",
                      value: function () {
                        this.orientationSupport && 0 === this.orientationStatus
                          ? (this.disable(),
                            (this.orientationSupport = !1),
                            this.enable())
                          : this.doReadyCallback();
                      },
                    },
                    {
                      key: "onMotionTimer",
                      value: function () {
                        this.motionSupport && 0 === this.motionStatus
                          ? (this.disable(),
                            (this.motionSupport = !1),
                            this.enable())
                          : this.doReadyCallback();
                      },
                    },
                    {
                      key: "onCalibrationTimer",
                      value: function () {
                        this.calibrationFlag = !0;
                      },
                    },
                    {
                      key: "onWindowResize",
                      value: function () {
                        this.updateDimensions();
                      },
                    },
                    {
                      key: "onAnimationFrame",
                      value: function () {
                        this.updateBounds();
                        var t = this.inputX - this.calibrationX,
                          e = this.inputY - this.calibrationY;
                        (Math.abs(t) > this.calibrationThreshold ||
                          Math.abs(e) > this.calibrationThreshold) &&
                          this.queueCalibration(0),
                          this.portrait
                            ? ((this.motionX = this.calibrateX
                                ? e
                                : this.inputY),
                              (this.motionY = this.calibrateY
                                ? t
                                : this.inputX))
                            : ((this.motionX = this.calibrateX
                                ? t
                                : this.inputX),
                              (this.motionY = this.calibrateY
                                ? e
                                : this.inputY)),
                          (this.motionX *=
                            this.elementWidth * (this.scalarX / 100)),
                          (this.motionY *=
                            this.elementHeight * (this.scalarY / 100)),
                          isNaN(parseFloat(this.limitX)) ||
                            (this.motionX = a.clamp(
                              this.motionX,
                              -this.limitX,
                              this.limitX
                            )),
                          isNaN(parseFloat(this.limitY)) ||
                            (this.motionY = a.clamp(
                              this.motionY,
                              -this.limitY,
                              this.limitY
                            )),
                          (this.velocityX +=
                            (this.motionX - this.velocityX) * this.frictionX),
                          (this.velocityY +=
                            (this.motionY - this.velocityY) * this.frictionY);
                        for (var i = 0; i < this.layers.length; i++) {
                          var s = this.layers[i],
                            r = this.depthsX[i],
                            o = this.depthsY[i],
                            l = this.velocityX * (r * (this.invertX ? -1 : 1)),
                            c = this.velocityY * (o * (this.invertY ? -1 : 1));
                          this.setPosition(s, l, c);
                        }
                        this.raf = n(this.onAnimationFrame);
                      },
                    },
                    {
                      key: "rotate",
                      value: function (t, e) {
                        var i = (t || 0) / 30,
                          s = (e || 0) / 30,
                          n = this.windowHeight > this.windowWidth;
                        this.portrait !== n &&
                          ((this.portrait = n), (this.calibrationFlag = !0)),
                          this.calibrationFlag &&
                            ((this.calibrationFlag = !1),
                            (this.calibrationX = i),
                            (this.calibrationY = s)),
                          (this.inputX = i),
                          (this.inputY = s);
                      },
                    },
                    {
                      key: "onDeviceOrientation",
                      value: function (t) {
                        var e = t.beta,
                          i = t.gamma;
                        null !== e &&
                          null !== i &&
                          ((this.orientationStatus = 1), this.rotate(e, i));
                      },
                    },
                    {
                      key: "onDeviceMotion",
                      value: function (t) {
                        var e = t.rotationRate.beta,
                          i = t.rotationRate.gamma;
                        null !== e &&
                          null !== i &&
                          ((this.motionStatus = 1), this.rotate(e, i));
                      },
                    },
                    {
                      key: "onMouseMove",
                      value: function (t) {
                        var e = t.clientX,
                          i = t.clientY;
                        if (
                          this.hoverOnly &&
                          (e < this.elementPositionX ||
                            e > this.elementPositionX + this.elementWidth ||
                            i < this.elementPositionY ||
                            i > this.elementPositionY + this.elementHeight)
                        )
                          return (this.inputX = 0), void (this.inputY = 0);
                        this.relativeInput
                          ? (this.clipRelativeInput &&
                              ((e = Math.max(e, this.elementPositionX)),
                              (e = Math.min(
                                e,
                                this.elementPositionX + this.elementWidth
                              )),
                              (i = Math.max(i, this.elementPositionY)),
                              (i = Math.min(
                                i,
                                this.elementPositionY + this.elementHeight
                              ))),
                            this.elementRangeX &&
                              this.elementRangeY &&
                              ((this.inputX =
                                (e -
                                  this.elementPositionX -
                                  this.elementCenterX) /
                                this.elementRangeX),
                              (this.inputY =
                                (i -
                                  this.elementPositionY -
                                  this.elementCenterY) /
                                this.elementRangeY)))
                          : this.windowRadiusX &&
                            this.windowRadiusY &&
                            ((this.inputX =
                              (e - this.windowCenterX) / this.windowRadiusX),
                            (this.inputY =
                              (i - this.windowCenterY) / this.windowRadiusY));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.disable(),
                          clearTimeout(this.calibrationTimer),
                          clearTimeout(this.detectionTimer),
                          this.element.removeAttribute("style");
                        for (var t = 0; t < this.layers.length; t++)
                          this.layers[t].removeAttribute("style");
                        delete this.element, delete this.layers;
                      },
                    },
                    {
                      key: "version",
                      value: function () {
                        return "3.1.0";
                      },
                    },
                  ]),
                  t
                );
              })();
            e.exports = l;
          },
          { "object-assign": 1, raf: 4 },
        ],
      },
      {},
      [5]
    )(5);
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).Swiper =
          e());
  })(this, function () {
    "use strict";
    function t(t) {
      return (
        null !== t &&
        "object" == typeof t &&
        "constructor" in t &&
        t.constructor === Object
      );
    }
    function e(i, s) {
      void 0 === i && (i = {}),
        void 0 === s && (s = {}),
        Object.keys(s).forEach((n) => {
          void 0 === i[n]
            ? (i[n] = s[n])
            : t(s[n]) &&
              t(i[n]) &&
              Object.keys(s[n]).length > 0 &&
              e(i[n], s[n]);
        });
    }
    const i = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function s() {
      const t = "undefined" != typeof document ? document : {};
      return e(t, i), t;
    }
    const n = {
      document: i,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (t) =>
        "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
      cancelAnimationFrame(t) {
        "undefined" != typeof setTimeout && clearTimeout(t);
      },
    };
    function r() {
      const t = "undefined" != typeof window ? window : {};
      return e(t, n), t;
    }
    class a extends Array {
      constructor(t) {
        "number" == typeof t
          ? super(t)
          : (super(...(t || [])),
            (function (t) {
              const e = t.__proto__;
              Object.defineProperty(t, "__proto__", {
                get: () => e,
                set(t) {
                  e.__proto__ = t;
                },
              });
            })(this));
      }
    }
    function o(t) {
      void 0 === t && (t = []);
      const e = [];
      return (
        t.forEach((t) => {
          Array.isArray(t) ? e.push(...o(t)) : e.push(t);
        }),
        e
      );
    }
    function l(t, e) {
      return Array.prototype.filter.call(t, e);
    }
    function c(t, e) {
      const i = r(),
        n = s();
      let o = [];
      if (!e && t instanceof a) return t;
      if (!t) return new a(o);
      if ("string" == typeof t) {
        const i = t.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let t = "div";
          0 === i.indexOf("<li") && (t = "ul"),
            0 === i.indexOf("<tr") && (t = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (t = "tr"),
            0 === i.indexOf("<tbody") && (t = "table"),
            0 === i.indexOf("<option") && (t = "select");
          const e = n.createElement(t);
          e.innerHTML = i;
          for (let t = 0; t < e.childNodes.length; t += 1)
            o.push(e.childNodes[t]);
        } else
          o = (function (t, e) {
            if ("string" != typeof t) return [t];
            const i = [],
              s = e.querySelectorAll(t);
            for (let t = 0; t < s.length; t += 1) i.push(s[t]);
            return i;
          })(t.trim(), e || n);
      } else if (t.nodeType || t === i || t === n) o.push(t);
      else if (Array.isArray(t)) {
        if (t instanceof a) return t;
        o = t;
      }
      return new a(
        (function (t) {
          const e = [];
          for (let i = 0; i < t.length; i += 1)
            -1 === e.indexOf(t[i]) && e.push(t[i]);
          return e;
        })(o)
      );
    }
    c.fn = a.prototype;
    const d = {
      addClass: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        const s = o(e.map((t) => t.split(" ")));
        return (
          this.forEach((t) => {
            t.classList.add(...s);
          }),
          this
        );
      },
      removeClass: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        const s = o(e.map((t) => t.split(" ")));
        return (
          this.forEach((t) => {
            t.classList.remove(...s);
          }),
          this
        );
      },
      hasClass: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        const s = o(e.map((t) => t.split(" ")));
        return (
          l(this, (t) => s.filter((e) => t.classList.contains(e)).length > 0)
            .length > 0
        );
      },
      toggleClass: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        const s = o(e.map((t) => t.split(" ")));
        this.forEach((t) => {
          s.forEach((e) => {
            t.classList.toggle(e);
          });
        });
      },
      attr: function (t, e) {
        if (1 === arguments.length && "string" == typeof t)
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(t, e);
          else
            for (const e in t)
              (this[i][e] = t[e]), this[i].setAttribute(e, t[e]);
        return this;
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this;
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
        return this;
      },
      transition: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transitionDuration =
            "string" != typeof t ? `${t}ms` : t;
        return this;
      },
      on: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        let [s, n, r, a] = e;
        function o(t) {
          const e = t.target;
          if (!e) return;
          const i = t.target.dom7EventData || [];
          if ((i.indexOf(t) < 0 && i.unshift(t), c(e).is(n))) r.apply(e, i);
          else {
            const t = c(e).parents();
            for (let e = 0; e < t.length; e += 1)
              c(t[e]).is(n) && r.apply(t[e], i);
          }
        }
        function l(t) {
          const e = (t && t.target && t.target.dom7EventData) || [];
          e.indexOf(t) < 0 && e.unshift(t), r.apply(this, e);
        }
        "function" == typeof e[1] && (([s, r, a] = e), (n = void 0)),
          a || (a = !1);
        const d = s.split(" ");
        let h;
        for (let t = 0; t < this.length; t += 1) {
          const e = this[t];
          if (n)
            for (h = 0; h < d.length; h += 1) {
              const t = d[h];
              e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                e.dom7LiveListeners[t].push({ listener: r, proxyListener: o }),
                e.addEventListener(t, o, a);
            }
          else
            for (h = 0; h < d.length; h += 1) {
              const t = d[h];
              e.dom7Listeners || (e.dom7Listeners = {}),
                e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                e.dom7Listeners[t].push({ listener: r, proxyListener: l }),
                e.addEventListener(t, l, a);
            }
        }
        return this;
      },
      off: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        let [s, n, r, a] = e;
        "function" == typeof e[1] && (([s, r, a] = e), (n = void 0)),
          a || (a = !1);
        const o = s.split(" ");
        for (let t = 0; t < o.length; t += 1) {
          const e = o[t];
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t];
            let s;
            if (
              (!n && i.dom7Listeners
                ? (s = i.dom7Listeners[e])
                : n && i.dom7LiveListeners && (s = i.dom7LiveListeners[e]),
              s && s.length)
            )
              for (let t = s.length - 1; t >= 0; t -= 1) {
                const n = s[t];
                (r && n.listener === r) ||
                (r &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === r)
                  ? (i.removeEventListener(e, n.proxyListener, a),
                    s.splice(t, 1))
                  : r ||
                    (i.removeEventListener(e, n.proxyListener, a),
                    s.splice(t, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        const t = r();
        for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
          i[s] = arguments[s];
        const n = i[0].split(" "),
          a = i[1];
        for (let e = 0; e < n.length; e += 1) {
          const s = n[e];
          for (let e = 0; e < this.length; e += 1) {
            const n = this[e];
            if (t.CustomEvent) {
              const e = new t.CustomEvent(s, {
                detail: a,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = i.filter((t, e) => e > 0)),
                n.dispatchEvent(e),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (t) {
        const e = this;
        return (
          t &&
            e.on("transitionend", function i(s) {
              s.target === this && (t.call(this, s), e.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const t = r();
        return this[0] ? t.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const t = r(),
            e = s(),
            i = this[0],
            n = i.getBoundingClientRect(),
            a = e.body,
            o = i.clientTop || a.clientTop || 0,
            l = i.clientLeft || a.clientLeft || 0,
            c = i === t ? t.scrollY : i.scrollTop,
            d = i === t ? t.scrollX : i.scrollLeft;
          return { top: n.top + c - o, left: n.left + d - l };
        }
        return null;
      },
      css: function (t, e) {
        const i = r();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof t) {
            for (s = 0; s < this.length; s += 1)
              for (const e in t) this[s].style[e] = t[e];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(t);
        }
        if (2 === arguments.length && "string" == typeof t) {
          for (s = 0; s < this.length; s += 1) this[s].style[t] = e;
          return this;
        }
        return this;
      },
      each: function (t) {
        return t
          ? (this.forEach((e, i) => {
              t.apply(e, [e, i]);
            }),
            this)
          : this;
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this;
      },
      is: function (t) {
        const e = r(),
          i = s(),
          n = this[0];
        let o, l;
        if (!n || void 0 === t) return !1;
        if ("string" == typeof t) {
          if (n.matches) return n.matches(t);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
          if (n.msMatchesSelector) return n.msMatchesSelector(t);
          for (o = c(t), l = 0; l < o.length; l += 1) if (o[l] === n) return !0;
          return !1;
        }
        if (t === i) return n === i;
        if (t === e) return n === e;
        if (t.nodeType || t instanceof a) {
          for (o = t.nodeType ? [t] : t, l = 0; l < o.length; l += 1)
            if (o[l] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let t,
          e = this[0];
        if (e) {
          for (t = 0; null !== (e = e.previousSibling); )
            1 === e.nodeType && (t += 1);
          return t;
        }
      },
      eq: function (t) {
        if (void 0 === t) return this;
        const e = this.length;
        if (t > e - 1) return c([]);
        if (t < 0) {
          const i = e + t;
          return c(i < 0 ? [] : [this[i]]);
        }
        return c([this[t]]);
      },
      append: function () {
        let t;
        const e = s();
        for (let i = 0; i < arguments.length; i += 1) {
          t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (let i = 0; i < this.length; i += 1)
            if ("string" == typeof t) {
              const s = e.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[i].appendChild(s.firstChild);
            } else if (t instanceof a)
              for (let e = 0; e < t.length; e += 1) this[i].appendChild(t[e]);
            else this[i].appendChild(t);
        }
        return this;
      },
      prepend: function (t) {
        const e = s();
        let i, n;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof t) {
            const s = e.createElement("div");
            for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
          } else if (t instanceof a)
            for (n = 0; n < t.length; n += 1)
              this[i].insertBefore(t[n], this[i].childNodes[0]);
          else this[i].insertBefore(t, this[i].childNodes[0]);
        return this;
      },
      next: function (t) {
        return this.length > 0
          ? t
            ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(t)
              ? c([this[0].nextElementSibling])
              : c([])
            : this[0].nextElementSibling
            ? c([this[0].nextElementSibling])
            : c([])
          : c([]);
      },
      nextAll: function (t) {
        const e = [];
        let i = this[0];
        if (!i) return c([]);
        for (; i.nextElementSibling; ) {
          const s = i.nextElementSibling;
          t ? c(s).is(t) && e.push(s) : e.push(s), (i = s);
        }
        return c(e);
      },
      prev: function (t) {
        if (this.length > 0) {
          const e = this[0];
          return t
            ? e.previousElementSibling && c(e.previousElementSibling).is(t)
              ? c([e.previousElementSibling])
              : c([])
            : e.previousElementSibling
            ? c([e.previousElementSibling])
            : c([]);
        }
        return c([]);
      },
      prevAll: function (t) {
        const e = [];
        let i = this[0];
        if (!i) return c([]);
        for (; i.previousElementSibling; ) {
          const s = i.previousElementSibling;
          t ? c(s).is(t) && e.push(s) : e.push(s), (i = s);
        }
        return c(e);
      },
      parent: function (t) {
        const e = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (t
              ? c(this[i].parentNode).is(t) && e.push(this[i].parentNode)
              : e.push(this[i].parentNode));
        return c(e);
      },
      parents: function (t) {
        const e = [];
        for (let i = 0; i < this.length; i += 1) {
          let s = this[i].parentNode;
          for (; s; )
            t ? c(s).is(t) && e.push(s) : e.push(s), (s = s.parentNode);
        }
        return c(e);
      },
      closest: function (t) {
        let e = this;
        return void 0 === t ? c([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
      },
      find: function (t) {
        const e = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].querySelectorAll(t);
          for (let t = 0; t < s.length; t += 1) e.push(s[t]);
        }
        return c(e);
      },
      children: function (t) {
        const e = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].children;
          for (let i = 0; i < s.length; i += 1)
            (t && !c(s[i]).is(t)) || e.push(s[i]);
        }
        return c(e);
      },
      filter: function (t) {
        return c(l(this, t));
      },
      remove: function () {
        for (let t = 0; t < this.length; t += 1)
          this[t].parentNode && this[t].parentNode.removeChild(this[t]);
        return this;
      },
    };
    function h(t, e) {
      return void 0 === e && (e = 0), setTimeout(t, e);
    }
    function u() {
      return Date.now();
    }
    function p(t, e) {
      void 0 === e && (e = "x");
      const i = r();
      let s, n, a;
      const o = (function (t) {
        const e = r();
        let i;
        return (
          e.getComputedStyle && (i = e.getComputedStyle(t, null)),
          !i && t.currentStyle && (i = t.currentStyle),
          i || (i = t.style),
          i
        );
      })(t);
      return (
        i.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((t) => t.replace(",", "."))
                .join(", ")),
            (a = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = a.toString().split(","))),
        "x" === e &&
          (n = i.WebKitCSSMatrix
            ? a.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === e &&
          (n = i.WebKitCSSMatrix
            ? a.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function f(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        t.constructor &&
        "Object" === Object.prototype.toString.call(t).slice(8, -1)
      );
    }
    function m(t) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? t instanceof HTMLElement
        : t && (1 === t.nodeType || 11 === t.nodeType);
    }
    function g() {
      const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != s && !m(s)) {
          const i = Object.keys(Object(s)).filter((t) => e.indexOf(t) < 0);
          for (let e = 0, n = i.length; e < n; e += 1) {
            const n = i[e],
              r = Object.getOwnPropertyDescriptor(s, n);
            void 0 !== r &&
              r.enumerable &&
              (f(t[n]) && f(s[n])
                ? s[n].__swiper__
                  ? (t[n] = s[n])
                  : g(t[n], s[n])
                : !f(t[n]) && f(s[n])
                ? ((t[n] = {}), s[n].__swiper__ ? (t[n] = s[n]) : g(t[n], s[n]))
                : (t[n] = s[n]));
          }
        }
      }
      return t;
    }
    function v(t, e, i) {
      t.style.setProperty(e, i);
    }
    function y(t) {
      let { swiper: e, targetPosition: i, side: s } = t;
      const n = r(),
        a = -e.translate;
      let o,
        l = null;
      const c = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const d = i > a ? "next" : "prev",
        h = (t, e) => ("next" === d && t >= e) || ("prev" === d && t <= e),
        u = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const t = Math.max(Math.min((o - l) / c, 1), 0),
            r = 0.5 - Math.cos(t * Math.PI) / 2;
          let d = a + r * (i - a);
          if ((h(d, i) && (d = i), e.wrapperEl.scrollTo({ [s]: d }), h(d, i)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: d });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    let w, b, x;
    function _() {
      return (
        w ||
          (w = (function () {
            const t = r(),
              e = s();
            return {
              smoothScroll:
                e.documentElement &&
                "scrollBehavior" in e.documentElement.style,
              touch: !!(
                "ontouchstart" in t ||
                (t.DocumentTouch && e instanceof t.DocumentTouch)
              ),
              passiveListener: (function () {
                let e = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      e = !0;
                    },
                  });
                  t.addEventListener("testPassiveListener", null, i);
                } catch (t) {}
                return e;
              })(),
              gestures: "ongesturestart" in t,
            };
          })()),
        w
      );
    }
    function E(t) {
      return (
        void 0 === t && (t = {}),
        b ||
          (b = (function (t) {
            let { userAgent: e } = void 0 === t ? {} : t;
            const i = _(),
              s = r(),
              n = s.navigator.platform,
              a = e || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = s.screen.width,
              c = s.screen.height,
              d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let h = a.match(/(iPad).*OS\s([\d_]+)/);
            const u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !h && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !h &&
                m &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${c}`) >= 0 &&
                ((h = a.match(/(Version)\/([\d.]+)/)),
                h || (h = [0, 1, "13_0_0"]),
                (m = !1)),
              d && !f && ((o.os = "android"), (o.android = !0)),
              (h || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(t)),
        b
      );
    }
    function T() {
      return (
        x ||
          (x = (function () {
            const t = r();
            return {
              isSafari: (function () {
                const e = t.navigator.userAgent.toLowerCase();
                return (
                  e.indexOf("safari") >= 0 &&
                  e.indexOf("chrome") < 0 &&
                  e.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                t.navigator.userAgent
              ),
            };
          })()),
        x
      );
    }
    Object.keys(d).forEach((t) => {
      Object.defineProperty(c.fn, t, { value: d[t], writable: !0 });
    });
    var S = {
        on(t, e, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const n = i ? "unshift" : "push";
          return (
            t.split(" ").forEach((t) => {
              s.eventsListeners[t] || (s.eventsListeners[t] = []),
                s.eventsListeners[t][n](e);
            }),
            s
          );
        },
        once(t, e, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          function n() {
            s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
              r[a] = arguments[a];
            e.apply(s, r);
          }
          return (n.__emitterProxy = e), s.on(t, n, i);
        },
        onAny(t, e) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const s = e ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
          );
        },
        offAny(t) {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsAnyListeners) return e;
          const i = e.eventsAnyListeners.indexOf(t);
          return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
        },
        off(t, e) {
          const i = this;
          return !i.eventsListeners || i.destroyed
            ? i
            : i.eventsListeners
            ? (t.split(" ").forEach((t) => {
                void 0 === e
                  ? (i.eventsListeners[t] = [])
                  : i.eventsListeners[t] &&
                    i.eventsListeners[t].forEach((s, n) => {
                      (s === e ||
                        (s.__emitterProxy && s.__emitterProxy === e)) &&
                        i.eventsListeners[t].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit() {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let e, i, s;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            "string" == typeof r[0] || Array.isArray(r[0])
              ? ((e = r[0]), (i = r.slice(1, r.length)), (s = t))
              : ((e = r[0].events), (i = r[0].data), (s = r[0].context || t)),
            i.unshift(s),
            (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(s, [e, ...i]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((t) => {
                    t.apply(s, i);
                  });
            }),
            t
          );
        },
      },
      C = {
        updateSize: function () {
          const t = this;
          let e, i;
          const s = t.$el;
          (e =
            void 0 !== t.params.width && null !== t.params.width
              ? t.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== t.params.height && null !== t.params.height
                ? t.params.height
                : s[0].clientHeight),
            (0 === e && t.isHorizontal()) ||
              (0 === i && t.isVertical()) ||
              ((e =
                e -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(t, {
                width: e,
                height: i,
                size: t.isHorizontal() ? e : i,
              }));
        },
        updateSlides: function () {
          const t = this;
          function e(e) {
            return t.isHorizontal()
              ? e
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[e];
          }
          function i(t, i) {
            return parseFloat(t.getPropertyValue(e(i)) || 0);
          }
          const s = t.params,
            { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = t,
            l = t.virtual && s.virtual.enabled,
            c = l ? t.virtual.slides.length : t.slides.length,
            d = n.children(`.${t.params.slideClass}`),
            h = l ? t.virtual.slides.length : d.length;
          let u = [];
          const p = [],
            f = [];
          let m = s.slidesOffsetBefore;
          "function" == typeof m && (m = s.slidesOffsetBefore.call(t));
          let g = s.slidesOffsetAfter;
          "function" == typeof g && (g = s.slidesOffsetAfter.call(t));
          const y = t.snapGrid.length,
            w = t.slidesGrid.length;
          let b = s.spaceBetween,
            x = -m,
            _ = 0,
            E = 0;
          if (void 0 === r) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * r),
            (t.virtualSize = -b),
            a
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (v(t.wrapperEl, "--swiper-centered-offset-before", ""),
              v(t.wrapperEl, "--swiper-centered-offset-after", ""));
          const T = s.grid && s.grid.rows > 1 && t.grid;
          let S;
          T && t.grid.initSlides(h);
          const C =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (t) => void 0 !== s.breakpoints[t].slidesPerView
            ).length > 0;
          for (let n = 0; n < h; n += 1) {
            S = 0;
            const a = d.eq(n);
            if (
              (T && t.grid.updateSlide(n, a, h, e), "none" !== a.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                C && (d[n].style[e("width")] = "");
                const r = getComputedStyle(a[0]),
                  o = a[0].style.transform,
                  l = a[0].style.webkitTransform;
                if (
                  (o && (a[0].style.transform = "none"),
                  l && (a[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  S = t.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const t = i(r, "width"),
                    e = i(r, "padding-left"),
                    s = i(r, "padding-right"),
                    n = i(r, "margin-left"),
                    o = i(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) S = t + n + o;
                  else {
                    const { clientWidth: i, offsetWidth: r } = a[0];
                    S = t + e + s + n + o + (r - i);
                  }
                }
                o && (a[0].style.transform = o),
                  l && (a[0].style.webkitTransform = l),
                  s.roundLengths && (S = Math.floor(S));
              } else
                (S = (r - (s.slidesPerView - 1) * b) / s.slidesPerView),
                  s.roundLengths && (S = Math.floor(S)),
                  d[n] && (d[n].style[e("width")] = `${S}px`);
              d[n] && (d[n].swiperSlideSize = S),
                f.push(S),
                s.centeredSlides
                  ? ((x = x + S / 2 + _ / 2 + b),
                    0 === _ && 0 !== n && (x = x - r / 2 - b),
                    0 === n && (x = x - r / 2 - b),
                    Math.abs(x) < 0.001 && (x = 0),
                    s.roundLengths && (x = Math.floor(x)),
                    E % s.slidesPerGroup == 0 && u.push(x),
                    p.push(x))
                  : (s.roundLengths && (x = Math.floor(x)),
                    (E - Math.min(t.params.slidesPerGroupSkip, E)) %
                      t.params.slidesPerGroup ==
                      0 && u.push(x),
                    p.push(x),
                    (x = x + S + b)),
                (t.virtualSize += S + b),
                (_ = S),
                (E += 1);
            }
          }
          if (
            ((t.virtualSize = Math.max(t.virtualSize, r) + g),
            a &&
              o &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              n.css({ width: `${t.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              n.css({ [e("width")]: `${t.virtualSize + s.spaceBetween}px` }),
            T && t.grid.updateWrapperSize(S, u, e),
            !s.centeredSlides)
          ) {
            const e = [];
            for (let i = 0; i < u.length; i += 1) {
              let n = u[i];
              s.roundLengths && (n = Math.floor(n)),
                u[i] <= t.virtualSize - r && e.push(n);
            }
            (u = e),
              Math.floor(t.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(t.virtualSize - r);
          }
          if ((0 === u.length && (u = [0]), 0 !== s.spaceBetween)) {
            const i = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
            d.filter((t, e) => !s.cssMode || e !== d.length - 1).css({
              [i]: `${b}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let t = 0;
            f.forEach((e) => {
              t += e + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (t -= s.spaceBetween);
            const e = t - r;
            u = u.map((t) => (t < 0 ? -m : t > e ? e + g : t));
          }
          if (s.centerInsufficientSlides) {
            let t = 0;
            if (
              (f.forEach((e) => {
                t += e + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (t -= s.spaceBetween),
              t < r)
            ) {
              const e = (r - t) / 2;
              u.forEach((t, i) => {
                u[i] = t - e;
              }),
                p.forEach((t, i) => {
                  p[i] = t + e;
                });
            }
          }
          if (
            (Object.assign(t, {
              slides: d,
              snapGrid: u,
              slidesGrid: p,
              slidesSizesGrid: f,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            v(t.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              v(
                t.wrapperEl,
                "--swiper-centered-offset-after",
                t.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const e = -t.snapGrid[0],
              i = -t.slidesGrid[0];
            (t.snapGrid = t.snapGrid.map((t) => t + e)),
              (t.slidesGrid = t.slidesGrid.map((t) => t + i));
          }
          if (
            (h !== c && t.emit("slidesLengthChange"),
            u.length !== y &&
              (t.params.watchOverflow && t.checkOverflow(),
              t.emit("snapGridLengthChange")),
            p.length !== w && t.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && t.updateSlidesOffset(),
            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
          ) {
            const e = `${s.containerModifierClass}backface-hidden`,
              i = t.$el.hasClass(e);
            h <= s.maxBackfaceHiddenSlides
              ? i || t.$el.addClass(e)
              : i && t.$el.removeClass(e);
          }
        },
        updateAutoHeight: function (t) {
          const e = this,
            i = [],
            s = e.virtual && e.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof t
            ? e.setTransition(t)
            : !0 === t && e.setTransition(e.params.speed);
          const a = (t) =>
            s
              ? e.slides.filter(
                  (e) =>
                    parseInt(e.getAttribute("data-swiper-slide-index"), 10) ===
                    t
                )[0]
              : e.slides.eq(t)[0];
          if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)
              (e.visibleSlides || c([])).each((t) => {
                i.push(t);
              });
            else
              for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const t = e.activeIndex + n;
                if (t > e.slides.length && !s) break;
                i.push(a(t));
              }
          else i.push(a(e.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const t = i[n].offsetHeight;
              r = t > r ? t : r;
            }
          (r || 0 === r) && e.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const t = this,
            e = t.slides;
          for (let i = 0; i < e.length; i += 1)
            e[i].swiperSlideOffset = t.isHorizontal()
              ? e[i].offsetLeft
              : e[i].offsetTop;
        },
        updateSlidesProgress: function (t) {
          void 0 === t && (t = (this && this.translate) || 0);
          const e = this,
            i = e.params,
            { slides: s, rtlTranslate: n, snapGrid: r } = e;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && e.updateSlidesOffset();
          let a = -t;
          n && (a = t),
            s.removeClass(i.slideVisibleClass),
            (e.visibleSlidesIndexes = []),
            (e.visibleSlides = []);
          for (let t = 0; t < s.length; t += 1) {
            const o = s[t];
            let l = o.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const c =
                (a + (i.centeredSlides ? e.minTranslate() : 0) - l) /
                (o.swiperSlideSize + i.spaceBetween),
              d =
                (a - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - l) /
                (o.swiperSlideSize + i.spaceBetween),
              h = -(a - l),
              u = h + e.slidesSizesGrid[t];
            ((h >= 0 && h < e.size - 1) ||
              (u > 1 && u <= e.size) ||
              (h <= 0 && u >= e.size)) &&
              (e.visibleSlides.push(o),
              e.visibleSlidesIndexes.push(t),
              s.eq(t).addClass(i.slideVisibleClass)),
              (o.progress = n ? -c : c),
              (o.originalProgress = n ? -d : d);
          }
          e.visibleSlides = c(e.visibleSlides);
        },
        updateProgress: function (t) {
          const e = this;
          if (void 0 === t) {
            const i = e.rtlTranslate ? -1 : 1;
            t = (e && e.translate && e.translate * i) || 0;
          }
          const i = e.params,
            s = e.maxTranslate() - e.minTranslate();
          let { progress: n, isBeginning: r, isEnd: a } = e;
          const o = r,
            l = a;
          0 === s
            ? ((n = 0), (r = !0), (a = !0))
            : ((n = (t - e.minTranslate()) / s), (r = n <= 0), (a = n >= 1)),
            Object.assign(e, { progress: n, isBeginning: r, isEnd: a }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              e.updateSlidesProgress(t),
            r && !o && e.emit("reachBeginning toEdge"),
            a && !l && e.emit("reachEnd toEdge"),
            ((o && !r) || (l && !a)) && e.emit("fromEdge"),
            e.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const t = this,
            {
              slides: e,
              params: i,
              $wrapperEl: s,
              activeIndex: n,
              realIndex: r,
            } = t,
            a = t.virtual && i.virtual.enabled;
          let o;
          e.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (o = a
              ? t.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : e.eq(n)),
            o.addClass(i.slideActiveClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = o
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = e.eq(0)), l.addClass(i.slideNextClass));
          let c = o
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = e.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (t) {
          const e = this,
            i = e.rtlTranslate ? e.translate : -e.translate,
            {
              slidesGrid: s,
              snapGrid: n,
              params: r,
              activeIndex: a,
              realIndex: o,
              snapIndex: l,
            } = e;
          let c,
            d = t;
          if (void 0 === d) {
            for (let t = 0; t < s.length; t += 1)
              void 0 !== s[t + 1]
                ? i >= s[t] && i < s[t + 1] - (s[t + 1] - s[t]) / 2
                  ? (d = t)
                  : i >= s[t] && i < s[t + 1] && (d = t + 1)
                : i >= s[t] && (d = t);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(i) >= 0) c = n.indexOf(i);
          else {
            const t = Math.min(r.slidesPerGroupSkip, d);
            c = t + Math.floor((d - t) / r.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === a))
            return void (
              c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"))
            );
          const h = parseInt(
            e.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(e, {
            snapIndex: c,
            realIndex: h,
            previousIndex: a,
            activeIndex: d,
          }),
            e.emit("activeIndexChange"),
            e.emit("snapIndexChange"),
            o !== h && e.emit("realIndexChange"),
            (e.initialized || e.params.runCallbacksOnInit) &&
              e.emit("slideChange");
        },
        updateClickedSlide: function (t) {
          const e = this,
            i = e.params,
            s = c(t).closest(`.${i.slideClass}`)[0];
          let n,
            r = !1;
          if (s)
            for (let t = 0; t < e.slides.length; t += 1)
              if (e.slides[t] === s) {
                (r = !0), (n = t);
                break;
              }
          if (!s || !r)
            return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
          (e.clickedSlide = s),
            e.virtual && e.params.virtual.enabled
              ? (e.clickedIndex = parseInt(
                  c(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (e.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== e.clickedIndex &&
              e.clickedIndex !== e.activeIndex &&
              e.slideToClickedSlide();
        },
      },
      M = {
        getTranslate: function (t) {
          void 0 === t && (t = this.isHorizontal() ? "x" : "y");
          const {
            params: e,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: n,
          } = this;
          if (e.virtualTranslate) return i ? -s : s;
          if (e.cssMode) return s;
          let r = p(n[0], t);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (t, e) {
          const i = this,
            {
              rtlTranslate: s,
              params: n,
              $wrapperEl: r,
              wrapperEl: a,
              progress: o,
            } = i;
          let l,
            c = 0,
            d = 0;
          i.isHorizontal() ? (c = s ? -t : t) : (d = t),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                r.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? c : d);
          const h = i.maxTranslate() - i.minTranslate();
          (l = 0 === h ? 0 : (t - i.minTranslate()) / h),
            l !== o && i.updateProgress(t),
            i.emit("setTranslate", i.translate, e);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (t, e, i, s, n) {
          void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          const r = this,
            { params: a, wrapperEl: o } = r;
          if (r.animating && a.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            c = r.maxTranslate();
          let d;
          if (
            ((d = s && t > l ? l : s && t < c ? c : t),
            r.updateProgress(d),
            a.cssMode)
          ) {
            const t = r.isHorizontal();
            if (0 === e) o[t ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!r.support.smoothScroll)
                return (
                  y({
                    swiper: r,
                    targetPosition: -d,
                    side: t ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [t ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === e
              ? (r.setTransition(0),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", e, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(e),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", e, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (t) {
                      r &&
                        !r.destroyed &&
                        t.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
    function k(t) {
      let { swiper: e, runCallbacks: i, direction: s, step: n } = t;
      const { activeIndex: r, previousIndex: a } = e;
      let o = s;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        e.emit(`transition${n}`),
        i && r !== a)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === o
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    var $ = {
        slideTo: function (t, e, i, s, n) {
          if (
            (void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0),
            "number" != typeof t && "string" != typeof t)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
            );
          if ("string" == typeof t) {
            const e = parseInt(t, 10);
            if (!isFinite(e))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
              );
            t = e;
          }
          const r = this;
          let a = t;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: h,
            rtlTranslate: u,
            wrapperEl: p,
            enabled: f,
          } = r;
          if (
            (r.animating && o.preventInteractionOnTransition) ||
            (!f && !s && !n)
          )
            return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (o.normalizeSlideIndex)
            for (let t = 0; t < c.length; t += 1) {
              const e = -Math.floor(100 * v),
                i = Math.floor(100 * c[t]),
                s = Math.floor(100 * c[t + 1]);
              void 0 !== c[t + 1]
                ? e >= i && e < s - (s - i) / 2
                  ? (a = t)
                  : e >= i && e < s && (a = t + 1)
                : e >= i && (a = t);
            }
          if (r.initialized && a !== h) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (h || 0) !== a
            )
              return !1;
          }
          let w;
          if (
            (a !== (d || 0) && i && r.emit("beforeSlideChangeStart"),
            r.updateProgress(v),
            (w = a > h ? "next" : a < h ? "prev" : "reset"),
            (u && -v === r.translate) || (!u && v === r.translate))
          )
            return (
              r.updateActiveIndex(a),
              o.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== o.effect && r.setTranslate(v),
              "reset" !== w && (r.transitionStart(i, w), r.transitionEnd(i, w)),
              !1
            );
          if (o.cssMode) {
            const t = r.isHorizontal(),
              i = u ? v : -v;
            if (0 === e) {
              const e = r.virtual && r.params.virtual.enabled;
              e &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (p[t ? "scrollLeft" : "scrollTop"] = i),
                e &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  y({ swiper: r, targetPosition: i, side: t ? "left" : "top" }),
                  !0
                );
              p.scrollTo({ [t ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(e),
            r.setTranslate(v),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", e, s),
            r.transitionStart(i, w),
            0 === e
              ? r.transitionEnd(i, w)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (t) {
                    r &&
                      !r.destroyed &&
                      t.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(i, w));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (t, e, i, s) {
          if (
            (void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0),
            "string" == typeof t)
          ) {
            const e = parseInt(t, 10);
            if (!isFinite(e))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
              );
            t = e;
          }
          const n = this;
          let r = t;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, e, i, s);
        },
        slideNext: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          const s = this,
            { animating: n, enabled: r, params: a } = s;
          if (!r) return s;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return a.rewind && s.isEnd
            ? s.slideTo(0, t, e, i)
            : s.slideTo(s.activeIndex + l, t, e, i);
        },
        slidePrev: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          const s = this,
            {
              params: n,
              animating: r,
              snapGrid: a,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: c,
            } = s;
          if (!c) return s;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function d(t) {
            return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
          }
          const h = d(l ? s.translate : -s.translate),
            u = a.map((t) => d(t));
          let p = a[u.indexOf(h) - 1];
          if (void 0 === p && n.cssMode) {
            let t;
            a.forEach((e, i) => {
              h >= e && (t = i);
            }),
              void 0 !== t && (p = a[t > 0 ? t - 1 : t]);
          }
          let f = 0;
          if (
            (void 0 !== p &&
              ((f = o.indexOf(p)),
              f < 0 && (f = s.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && s.isBeginning)
          ) {
            const n =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(n, t, e, i);
          }
          return s.slideTo(f, t, e, i);
        },
        slideReset: function (t, e, i) {
          return (
            void 0 === t && (t = this.params.speed),
            void 0 === e && (e = !0),
            this.slideTo(this.activeIndex, t, e, i)
          );
        },
        slideToClosest: function (t, e, i, s) {
          void 0 === t && (t = this.params.speed),
            void 0 === e && (e = !0),
            void 0 === s && (s = 0.5);
          const n = this;
          let r = n.activeIndex;
          const a = Math.min(n.params.slidesPerGroupSkip, r),
            o = a + Math.floor((r - a) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[o]) {
            const t = n.snapGrid[o];
            l - t > (n.snapGrid[o + 1] - t) * s &&
              (r += n.params.slidesPerGroup);
          } else {
            const t = n.snapGrid[o - 1];
            l - t <= (n.snapGrid[o] - t) * s && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, t, e, i)
          );
        },
        slideToClickedSlide: function () {
          const t = this,
            { params: e, $wrapperEl: i } = t,
            s =
              "auto" === e.slidesPerView
                ? t.slidesPerViewDynamic()
                : e.slidesPerView;
          let n,
            r = t.clickedIndex;
          if (e.loop) {
            if (t.animating) return;
            (n = parseInt(
              c(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              e.centeredSlides
                ? r < t.loopedSlides - s / 2 ||
                  r > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    h(() => {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - s
                ? (t.loopFix(),
                  (r = i
                    .children(
                      `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  h(() => {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      O = {
        loopCreate: function () {
          const t = this,
            e = s(),
            { params: i, $wrapperEl: n } = t,
            r = n.children().length > 0 ? c(n.children()[0].parentNode) : n;
          r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let a = r.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const t = i.slidesPerGroup - (a.length % i.slidesPerGroup);
            if (t !== i.slidesPerGroup) {
              for (let s = 0; s < t; s += 1) {
                const t = c(e.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                r.append(t);
              }
              a = r.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = a.length),
            (t.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (t.loopedSlides += i.loopAdditionalSlides),
            t.loopedSlides > a.length &&
              t.params.loopedSlidesLimit &&
              (t.loopedSlides = a.length);
          const o = [],
            l = [];
          a.each((t, e) => {
            c(t).attr("data-swiper-slide-index", e);
          });
          for (let e = 0; e < t.loopedSlides; e += 1) {
            const t = e - Math.floor(e / a.length) * a.length;
            l.push(a.eq(t)[0]), o.unshift(a.eq(a.length - t - 1)[0]);
          }
          for (let t = 0; t < l.length; t += 1)
            r.append(c(l[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let t = o.length - 1; t >= 0; t -= 1)
            r.prepend(c(o[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const t = this;
          t.emit("beforeLoopFix");
          const {
            activeIndex: e,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: a,
            rtlTranslate: o,
          } = t;
          let l;
          (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
          const c = -a[e] - t.getTranslate();
          e < s
            ? ((l = i.length - 3 * s + e),
              (l += s),
              t.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                t.setTranslate((o ? -t.translate : t.translate) - c))
            : e >= i.length - s &&
              ((l = -i.length + e + s),
              (l += s),
              t.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                t.setTranslate((o ? -t.translate : t.translate) - c)),
            (t.allowSlidePrev = n),
            (t.allowSlideNext = r),
            t.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: t, params: e, slides: i } = this;
          t
            .children(
              `.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
    function z(t) {
      const e = this,
        i = s(),
        n = r(),
        a = e.touchEventsData,
        { params: o, touches: l, enabled: d } = e;
      if (!d) return;
      if (e.animating && o.preventInteractionOnTransition) return;
      !e.animating && o.cssMode && o.loop && e.loopFix();
      let h = t;
      h.originalEvent && (h = h.originalEvent);
      let p = c(h.target);
      if ("wrapper" === o.touchEventsTarget && !p.closest(e.wrapperEl).length)
        return;
      if (
        ((a.isTouchEvent = "touchstart" === h.type),
        !a.isTouchEvent && "which" in h && 3 === h.which)
      )
        return;
      if (!a.isTouchEvent && "button" in h && h.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      const f = !!o.noSwipingClass && "" !== o.noSwipingClass,
        m = t.composedPath ? t.composedPath() : t.path;
      f && h.target && h.target.shadowRoot && m && (p = c(m[0]));
      const g = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        v = !(!h.target || !h.target.shadowRoot);
      if (
        o.noSwiping &&
        (v
          ? (function (t, e) {
              return (
                void 0 === e && (e = this),
                (function e(i) {
                  if (!i || i === s() || i === r()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const n = i.closest(t);
                  return n || i.getRootNode
                    ? n || e(i.getRootNode().host)
                    : null;
                })(e)
              );
            })(g, p[0])
          : p.closest(g)[0])
      )
        return void (e.allowClick = !0);
      if (o.swipeHandler && !p.closest(o.swipeHandler)[0]) return;
      (l.currentX =
        "touchstart" === h.type ? h.targetTouches[0].pageX : h.pageX),
        (l.currentY =
          "touchstart" === h.type ? h.targetTouches[0].pageY : h.pageY);
      const y = l.currentX,
        w = l.currentY,
        b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        x = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (b && (y <= x || y >= n.innerWidth - x)) {
        if ("prevent" !== b) return;
        t.preventDefault();
      }
      if (
        (Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (l.startX = y),
        (l.startY = w),
        (a.touchStartTime = u()),
        (e.allowClick = !0),
        e.updateSize(),
        (e.swipeDirection = void 0),
        o.threshold > 0 && (a.allowThresholdMove = !1),
        "touchstart" !== h.type)
      ) {
        let t = !0;
        p.is(a.focusableElements) &&
          ((t = !1), "SELECT" === p[0].nodeName && (a.isTouched = !1)),
          i.activeElement &&
            c(i.activeElement).is(a.focusableElements) &&
            i.activeElement !== p[0] &&
            i.activeElement.blur();
        const s = t && e.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !s) ||
          p[0].isContentEditable ||
          h.preventDefault();
      }
      e.params.freeMode &&
        e.params.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !o.cssMode &&
        e.freeMode.onTouchStart(),
        e.emit("touchStart", h);
    }
    function P(t) {
      const e = s(),
        i = this,
        n = i.touchEventsData,
        { params: r, touches: a, rtlTranslate: o, enabled: l } = i;
      if (!l) return;
      let d = t;
      if ((d.originalEvent && (d = d.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", d)
        );
      if (n.isTouchEvent && "touchmove" !== d.type) return;
      const h =
          "touchmove" === d.type &&
          d.targetTouches &&
          (d.targetTouches[0] || d.changedTouches[0]),
        p = "touchmove" === d.type ? h.pageX : d.pageX,
        f = "touchmove" === d.type ? h.pageY : d.pageY;
      if (d.preventedByNestedSwiper) return (a.startX = p), void (a.startY = f);
      if (!i.allowTouchMove)
        return (
          c(d.target).is(n.focusableElements) || (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(a, {
              startX: p,
              startY: f,
              currentX: p,
              currentY: f,
            }),
            (n.touchStartTime = u()))
          )
        );
      if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (i.isVertical()) {
          if (
            (f < a.startY && i.translate <= i.maxTranslate()) ||
            (f > a.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (p < a.startX && i.translate <= i.maxTranslate()) ||
          (p > a.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        e.activeElement &&
        d.target === e.activeElement &&
        c(d.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      if (
        (n.allowTouchCallbacks && i.emit("touchMove", d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (a.currentX = p), (a.currentY = f);
      const m = a.currentX - a.startX,
        g = a.currentY - a.startY;
      if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let t;
        (i.isHorizontal() && a.currentY === a.startY) ||
        (i.isVertical() && a.currentX === a.startX)
          ? (n.isScrolling = !1)
          : m * m + g * g >= 25 &&
            ((t = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? t > r.touchAngle
              : 90 - t > r.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", d),
        void 0 === n.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !r.cssMode && d.cancelable && d.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && d.stopPropagation(),
        n.isMoved ||
          (r.loop && !r.cssMode && i.loopFix(),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", d)),
        i.emit("sliderMove", d),
        (n.isMoved = !0);
      let v = i.isHorizontal() ? m : g;
      (a.diff = v),
        (v *= r.touchRatio),
        o && (v = -v),
        (i.swipeDirection = v > 0 ? "prev" : "next"),
        (n.currentTranslate = v + n.startTranslate);
      let y = !0,
        w = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (w = 0),
        v > 0 && n.currentTranslate > i.minTranslate()
          ? ((y = !1),
            r.resistance &&
              (n.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + n.startTranslate + v) ** w))
          : v < 0 &&
            n.currentTranslate < i.maxTranslate() &&
            ((y = !1),
            r.resistance &&
              (n.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - n.startTranslate - v) ** w)),
        y && (d.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(v) > r.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (n.currentTranslate = n.startTranslate),
            void (a.diff = i.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
          r.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          r.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function L(t) {
      const e = this,
        i = e.touchEventsData,
        {
          params: s,
          touches: n,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = e;
      if (!o) return;
      let l = t;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && e.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && s.grabCursor && e.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
        e.setGrabCursor(!1);
      const c = u(),
        d = c - i.touchStartTime;
      if (e.allowClick) {
        const t = l.path || (l.composedPath && l.composedPath());
        e.updateClickedSlide((t && t[0]) || l.target),
          e.emit("tap click", l),
          d < 300 &&
            c - i.lastClickTime < 300 &&
            e.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = u()),
        h(() => {
          e.destroyed || (e.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !e.swipeDirection ||
          0 === n.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let p;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (p = s.followFinger
          ? r
            ? e.translate
            : -e.translate
          : -i.currentTranslate),
        s.cssMode)
      )
        return;
      if (e.params.freeMode && s.freeMode.enabled)
        return void e.freeMode.onTouchEnd({ currentPos: p });
      let f = 0,
        m = e.slidesSizesGrid[0];
      for (
        let t = 0;
        t < a.length;
        t += t < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const e = t < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== a[t + e]
          ? p >= a[t] && p < a[t + e] && ((f = t), (m = a[t + e] - a[t]))
          : p >= a[t] && ((f = t), (m = a[a.length - 1] - a[a.length - 2]));
      }
      let g = null,
        v = null;
      s.rewind &&
        (e.isBeginning
          ? (v =
              e.params.virtual && e.params.virtual.enabled && e.virtual
                ? e.virtual.slides.length - 1
                : e.slides.length - 1)
          : e.isEnd && (g = 0));
      const y = (p - a[f]) / m,
        w = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (d > s.longSwipesMs) {
        if (!s.longSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection &&
          (y >= s.longSwipesRatio
            ? e.slideTo(s.rewind && e.isEnd ? g : f + w)
            : e.slideTo(f)),
          "prev" === e.swipeDirection &&
            (y > 1 - s.longSwipesRatio
              ? e.slideTo(f + w)
              : null !== v && y < 0 && Math.abs(y) > s.longSwipesRatio
              ? e.slideTo(v)
              : e.slideTo(f));
      } else {
        if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
        !e.navigation ||
        (l.target !== e.navigation.nextEl && l.target !== e.navigation.prevEl)
          ? ("next" === e.swipeDirection && e.slideTo(null !== g ? g : f + w),
            "prev" === e.swipeDirection && e.slideTo(null !== v ? v : f))
          : l.target === e.navigation.nextEl
          ? e.slideTo(f + w)
          : e.slideTo(f);
      }
    }
    function A() {
      const t = this,
        { params: e, el: i } = t;
      if (i && 0 === i.offsetWidth) return;
      e.breakpoints && t.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = t;
      (t.allowSlideNext = !0),
        (t.allowSlidePrev = !0),
        t.updateSize(),
        t.updateSlides(),
        t.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
        t.isEnd &&
        !t.isBeginning &&
        !t.params.centeredSlides
          ? t.slideTo(t.slides.length - 1, 0, !1, !0)
          : t.slideTo(t.activeIndex, 0, !1, !0),
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.run(),
        (t.allowSlidePrev = n),
        (t.allowSlideNext = s),
        t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
    }
    function I(t) {
      const e = this;
      e.enabled &&
        (e.allowClick ||
          (e.params.preventClicks && t.preventDefault(),
          e.params.preventClicksPropagation &&
            e.animating &&
            (t.stopPropagation(), t.stopImmediatePropagation())));
    }
    function D() {
      const t = this,
        { wrapperEl: e, rtlTranslate: i, enabled: s } = t;
      if (!s) return;
      let n;
      (t.previousTranslate = t.translate),
        t.isHorizontal()
          ? (t.translate = -e.scrollLeft)
          : (t.translate = -e.scrollTop),
        0 === t.translate && (t.translate = 0),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
      const r = t.maxTranslate() - t.minTranslate();
      (n = 0 === r ? 0 : (t.translate - t.minTranslate()) / r),
        n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
        t.emit("setTranslate", t.translate, !1);
    }
    let R = !1;
    function B() {}
    const Y = (t, e) => {
      const i = s(),
        {
          params: n,
          touchEvents: r,
          el: a,
          wrapperEl: o,
          device: l,
          support: c,
        } = t,
        d = !!n.nested,
        h = "on" === e ? "addEventListener" : "removeEventListener",
        u = e;
      if (c.touch) {
        const e = !(
          "touchstart" !== r.start ||
          !c.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        a[h](r.start, t.onTouchStart, e),
          a[h](
            r.move,
            t.onTouchMove,
            c.passiveListener ? { passive: !1, capture: d } : d
          ),
          a[h](r.end, t.onTouchEnd, e),
          r.cancel && a[h](r.cancel, t.onTouchEnd, e);
      } else
        a[h](r.start, t.onTouchStart, !1),
          i[h](r.move, t.onTouchMove, d),
          i[h](r.end, t.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        a[h]("click", t.onClick, !0),
        n.cssMode && o[h]("scroll", t.onScroll),
        n.updateOnWindowResize
          ? t[u](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              A,
              !0
            )
          : t[u]("observerUpdate", A, !0);
    };
    var X = {
      attachEvents: function () {
        const t = this,
          e = s(),
          { params: i, support: n } = t;
        (t.onTouchStart = z.bind(t)),
          (t.onTouchMove = P.bind(t)),
          (t.onTouchEnd = L.bind(t)),
          i.cssMode && (t.onScroll = D.bind(t)),
          (t.onClick = I.bind(t)),
          n.touch && !R && (e.addEventListener("touchstart", B), (R = !0)),
          Y(t, "on");
      },
      detachEvents: function () {
        Y(this, "off");
      },
    };
    const W = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var j = {
        addClasses: function () {
          const t = this,
            {
              classNames: e,
              params: i,
              rtl: s,
              $el: n,
              device: r,
              support: a,
            } = t,
            o = (function (t, e) {
              const i = [];
              return (
                t.forEach((t) => {
                  "object" == typeof t
                    ? Object.keys(t).forEach((s) => {
                        t[s] && i.push(e + s);
                      })
                    : "string" == typeof t && i.push(e + t);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !a.touch },
                { "free-mode": t.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          e.push(...o), n.addClass([...e].join(" ")), t.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: t, classNames: e } = this;
          t.removeClass(e.join(" ")), this.emitContainerClasses();
        },
      },
      q = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function H(t, e) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === t[s] &&
              (t[s] = { auto: !0 }),
            s in t && "enabled" in n
              ? (!0 === t[s] && (t[s] = { enabled: !0 }),
                "object" != typeof t[s] ||
                  "enabled" in t[s] ||
                  (t[s].enabled = !0),
                t[s] || (t[s] = { enabled: !1 }),
                g(e, i))
              : g(e, i))
          : g(e, i);
      };
    }
    const F = {
        eventsEmitter: S,
        update: C,
        translate: M,
        transition: {
          setTransition: function (t, e) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(t),
              i.emit("setTransition", t, e);
          },
          transitionStart: function (t, e) {
            void 0 === t && (t = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              k({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
          },
          transitionEnd: function (t, e) {
            void 0 === t && (t = !0);
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                k({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
          },
        },
        slide: $,
        loop: O,
        grabCursor: {
          setGrabCursor: function (t) {
            const e = this;
            if (
              e.support.touch ||
              !e.params.simulateTouch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode
            )
              return;
            const i =
              "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = t ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const t = this;
            t.support.touch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode ||
              (t[
                "container" === t.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: X,
        breakpoints: {
          setBreakpoint: function () {
            const t = this,
              {
                activeIndex: e,
                initialized: i,
                loopedSlides: s = 0,
                params: n,
                $el: r,
              } = t,
              a = n.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
            if (!o || t.currentBreakpoint === o) return;
            const l = (o in a ? a[o] : void 0) || t.originalParams,
              c = W(t, n),
              d = W(t, l),
              h = n.enabled;
            c && !d
              ? (r.removeClass(
                  `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                ),
                t.emitContainerClasses())
              : !c &&
                d &&
                (r.addClass(`${n.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === n.grid.fill)) &&
                  r.addClass(`${n.containerModifierClass}grid-column`),
                t.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((e) => {
                const i = n[e] && n[e].enabled,
                  s = l[e] && l[e].enabled;
                i && !s && t[e].disable(), !i && s && t[e].enable();
              });
            const u = l.direction && l.direction !== n.direction,
              p = n.loop && (l.slidesPerView !== n.slidesPerView || u);
            u && i && t.changeDirection(), g(t.params, l);
            const f = t.params.enabled;
            Object.assign(t, {
              allowTouchMove: t.params.allowTouchMove,
              allowSlideNext: t.params.allowSlideNext,
              allowSlidePrev: t.params.allowSlidePrev,
            }),
              h && !f ? t.disable() : !h && f && t.enable(),
              (t.currentBreakpoint = o),
              t.emit("_beforeBreakpoint", l),
              p &&
                i &&
                (t.loopDestroy(),
                t.loopCreate(),
                t.updateSlides(),
                t.slideTo(e - s + t.loopedSlides, 0, !1)),
              t.emit("breakpoint", l);
          },
          getBreakpoint: function (t, e, i) {
            if (
              (void 0 === e && (e = "window"), !t || ("container" === e && !i))
            )
              return;
            let s = !1;
            const n = r(),
              a = "window" === e ? n.innerHeight : i.clientHeight,
              o = Object.keys(t).map((t) => {
                if ("string" == typeof t && 0 === t.indexOf("@")) {
                  const e = parseFloat(t.substr(1));
                  return { value: a * e, point: t };
                }
                return { value: t, point: t };
              });
            o.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
            for (let t = 0; t < o.length; t += 1) {
              const { point: r, value: a } = o[t];
              "window" === e
                ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
                : a <= i.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const t = this,
              { isLocked: e, params: i } = t,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const e = t.slides.length - 1,
                i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * s;
              t.isLocked = t.size > i;
            } else t.isLocked = 1 === t.snapGrid.length;
            !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
              !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
              e && e !== t.isLocked && (t.isEnd = !1),
              e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
          },
        },
        classes: j,
        images: {
          loadImage: function (t, e, i, s, n, a) {
            const o = r();
            let l;
            function d() {
              a && a();
            }
            c(t).parent("picture")[0] || (t.complete && n)
              ? d()
              : e
              ? ((l = new o.Image()),
                (l.onload = d),
                (l.onerror = d),
                s && (l.sizes = s),
                i && (l.srcset = i),
                e && (l.src = e))
              : d();
          },
          preloadImages: function () {
            const t = this;
            function e() {
              null != t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length &&
                  (t.params.updateOnImagesReady && t.update(),
                  t.emit("imagesReady")));
            }
            t.imagesToLoad = t.$el.find("img");
            for (let i = 0; i < t.imagesToLoad.length; i += 1) {
              const s = t.imagesToLoad[i];
              t.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                e
              );
            }
          },
        },
      },
      N = {};
    class V {
      constructor() {
        let t, e;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
          s[n] = arguments[n];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (e = s[0])
            : ([t, e] = s),
          e || (e = {}),
          (e = g({}, e)),
          t && !e.el && (e.el = t),
          e.el && c(e.el).length > 1)
        ) {
          const t = [];
          return (
            c(e.el).each((i) => {
              const s = g({}, e, { el: i });
              t.push(new V(s));
            }),
            t
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = _()),
          (r.device = E({ userAgent: e.userAgent })),
          (r.browser = T()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          e.modules && Array.isArray(e.modules) && r.modules.push(...e.modules);
        const a = {};
        r.modules.forEach((t) => {
          t({
            swiper: r,
            extendParams: H(e, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = g({}, q, a);
        return (
          (r.params = g({}, o, N, e)),
          (r.originalParams = g({}, r.params)),
          (r.passedParams = g({}, e)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((t) => {
              r.on(t, r.params.on[t]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = c),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: t,
            classNames: [],
            slides: c(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                e = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: t[0],
                  move: t[1],
                  end: t[2],
                  cancel: t[3],
                }),
                (r.touchEventsDesktop = { start: e[0], move: e[1], end: e[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: u(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const t = this;
        t.enabled ||
          ((t.enabled = !0),
          t.params.grabCursor && t.setGrabCursor(),
          t.emit("enable"));
      }
      disable() {
        const t = this;
        t.enabled &&
          ((t.enabled = !1),
          t.params.grabCursor && t.unsetGrabCursor(),
          t.emit("disable"));
      }
      setProgress(t, e) {
        const i = this;
        t = Math.min(Math.max(t, 0), 1);
        const s = i.minTranslate(),
          n = (i.maxTranslate() - s) * t + s;
        i.translateTo(n, void 0 === e ? 0 : e),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const e = t.el.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper") ||
              0 === e.indexOf(t.params.containerModifierClass)
          );
        t.emit("_containerClasses", e.join(" "));
      }
      getSlideClasses(t) {
        const e = this;
        return e.destroyed
          ? ""
          : t.className
              .split(" ")
              .filter(
                (t) =>
                  0 === t.indexOf("swiper-slide") ||
                  0 === t.indexOf(e.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const e = [];
        t.slides.each((i) => {
          const s = t.getSlideClasses(i);
          e.push({ slideEl: i, classNames: s }), t.emit("_slideClass", i, s);
        }),
          t.emit("_slideClasses", e);
      }
      slidesPerViewDynamic(t, e) {
        void 0 === t && (t = "current"), void 0 === e && (e = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let t,
            e = s[o].swiperSlideSize;
          for (let i = o + 1; i < s.length; i += 1)
            s[i] &&
              !t &&
              ((e += s[i].swiperSlideSize), (l += 1), e > a && (t = !0));
          for (let i = o - 1; i >= 0; i -= 1)
            s[i] &&
              !t &&
              ((e += s[i].swiperSlideSize), (l += 1), e > a && (t = !0));
        } else if ("current" === t)
          for (let t = o + 1; t < s.length; t += 1)
            (e ? n[t] + r[t] - n[o] < a : n[t] - n[o] < a) && (l += 1);
        else for (let t = o - 1; t >= 0; t -= 1) n[o] - n[t] < a && (l += 1);
        return l;
      }
      update() {
        const t = this;
        if (!t || t.destroyed) return;
        const { snapGrid: e, params: i } = t;
        function s() {
          const e = t.rtlTranslate ? -1 * t.translate : t.translate,
            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        let n;
        i.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.params.freeMode && t.params.freeMode.enabled
            ? (s(), t.params.autoHeight && t.updateAutoHeight())
            : ((n =
                ("auto" === t.params.slidesPerView ||
                  t.params.slidesPerView > 1) &&
                t.isEnd &&
                !t.params.centeredSlides
                  ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                  : t.slideTo(t.activeIndex, 0, !1, !0)),
              n || s()),
          i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
          t.emit("update");
      }
      changeDirection(t, e) {
        void 0 === e && (e = !0);
        const i = this,
          s = i.params.direction;
        return (
          t || (t = "horizontal" === s ? "vertical" : "horizontal"),
          t === s ||
            ("horizontal" !== t && "vertical" !== t) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${s}`)
              .addClass(`${i.params.containerModifierClass}${t}`),
            i.emitContainerClasses(),
            (i.params.direction = t),
            i.slides.each((e) => {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            i.emit("changeDirection"),
            e && i.update()),
          i
        );
      }
      changeLanguageDirection(t) {
        const e = this;
        (e.rtl && "rtl" === t) ||
          (!e.rtl && "ltr" === t) ||
          ((e.rtl = "rtl" === t),
          (e.rtlTranslate = "horizontal" === e.params.direction && e.rtl),
          e.rtl
            ? (e.$el.addClass(`${e.params.containerModifierClass}rtl`),
              (e.el.dir = "rtl"))
            : (e.$el.removeClass(`${e.params.containerModifierClass}rtl`),
              (e.el.dir = "ltr")),
          e.update());
      }
      mount(t) {
        const e = this;
        if (e.mounted) return !0;
        const i = c(t || e.params.el);
        if (!(t = i[0])) return !1;
        t.swiper = e;
        const n = () =>
          `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (t && t.shadowRoot && t.shadowRoot.querySelector) {
            const e = c(t.shadowRoot.querySelector(n()));
            return (e.children = (t) => i.children(t)), e;
          }
          return i.children ? i.children(n()) : c(i).children(n());
        })();
        if (0 === r.length && e.params.createElements) {
          const t = s().createElement("div");
          (r = c(t)),
            (t.className = e.params.wrapperClass),
            i.append(t),
            i.children(`.${e.params.slideClass}`).each((t) => {
              r.append(t);
            });
        }
        return (
          Object.assign(e, {
            $el: i,
            el: t,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === e.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(t) {
        const e = this;
        return (
          e.initialized ||
            !1 === e.mount(t) ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.enabled && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"),
            e.emit("afterInit")),
          e
        );
      }
      destroy(t, e) {
        void 0 === t && (t = !0), void 0 === e && (e = !0);
        const i = this,
          { params: s, $el: n, $wrapperEl: r, slides: a } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            e &&
              (i.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((t) => {
              i.off(t);
            }),
            !1 !== t &&
              ((i.$el[0].swiper = null),
              (function (t) {
                const e = t;
                Object.keys(e).forEach((t) => {
                  try {
                    e[t] = null;
                  } catch (t) {}
                  try {
                    delete e[t];
                  } catch (t) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(t) {
        g(N, t);
      }
      static get extendedDefaults() {
        return N;
      }
      static get defaults() {
        return q;
      }
      static installModule(t) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        const e = V.prototype.__modules__;
        "function" == typeof t && e.indexOf(t) < 0 && e.push(t);
      }
      static use(t) {
        return Array.isArray(t)
          ? (t.forEach((t) => V.installModule(t)), V)
          : (V.installModule(t), V);
      }
    }
    function G(t, e, i, n) {
      const r = s();
      return (
        t.params.createElements &&
          Object.keys(n).forEach((s) => {
            if (!i[s] && !0 === i.auto) {
              let a = t.$el.children(`.${n[s]}`)[0];
              a ||
                ((a = r.createElement("div")),
                (a.className = n[s]),
                t.$el.append(a)),
                (i[s] = a),
                (e[s] = a);
            }
          }),
        i
      );
    }
    function U(t) {
      return (
        void 0 === t && (t = ""),
        `.${t
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function Q(t) {
      const e = this,
        { $wrapperEl: i, params: s } = e;
      if ((s.loop && e.loopDestroy(), "object" == typeof t && "length" in t))
        for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
      else i.append(t);
      s.loop && e.loopCreate(), s.observer || e.update();
    }
    function K(t) {
      const e = this,
        { params: i, $wrapperEl: s, activeIndex: n } = e;
      i.loop && e.loopDestroy();
      let r = n + 1;
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && s.prepend(t[e]);
        r = n + t.length;
      } else s.prepend(t);
      i.loop && e.loopCreate(), i.observer || e.update(), e.slideTo(r, 0, !1);
    }
    function Z(t, e) {
      const i = this,
        { $wrapperEl: s, params: n, activeIndex: r } = i;
      let a = r;
      n.loop &&
        ((a -= i.loopedSlides),
        i.loopDestroy(),
        (i.slides = s.children(`.${n.slideClass}`)));
      const o = i.slides.length;
      if (t <= 0) return void i.prependSlide(e);
      if (t >= o) return void i.appendSlide(e);
      let l = a > t ? a + 1 : a;
      const c = [];
      for (let e = o - 1; e >= t; e -= 1) {
        const t = i.slides.eq(e);
        t.remove(), c.unshift(t);
      }
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        l = a > t ? a + e.length : a;
      } else s.append(e);
      for (let t = 0; t < c.length; t += 1) s.append(c[t]);
      n.loop && i.loopCreate(),
        n.observer || i.update(),
        n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
    }
    function J(t) {
      const e = this,
        { params: i, $wrapperEl: s, activeIndex: n } = e;
      let r = n;
      i.loop &&
        ((r -= e.loopedSlides),
        e.loopDestroy(),
        (e.slides = s.children(`.${i.slideClass}`)));
      let a,
        o = r;
      if ("object" == typeof t && "length" in t) {
        for (let i = 0; i < t.length; i += 1)
          (a = t[i]), e.slides[a] && e.slides.eq(a).remove(), a < o && (o -= 1);
        o = Math.max(o, 0);
      } else (a = t), e.slides[a] && e.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
      i.loop && e.loopCreate(),
        i.observer || e.update(),
        i.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1);
    }
    function tt() {
      const t = this,
        e = [];
      for (let i = 0; i < t.slides.length; i += 1) e.push(i);
      t.removeSlide(e);
    }
    function et(t) {
      const {
        effect: e,
        swiper: i,
        on: s,
        setTranslate: n,
        setTransition: r,
        overwriteParams: a,
        perspective: o,
        recreateShadows: l,
        getEffectParams: c,
      } = t;
      let d;
      s("beforeInit", () => {
        if (i.params.effect !== e) return;
        i.classNames.push(`${i.params.containerModifierClass}${e}`),
          o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
        const t = a ? a() : {};
        Object.assign(i.params, t), Object.assign(i.originalParams, t);
      }),
        s("setTranslate", () => {
          i.params.effect === e && n();
        }),
        s("setTransition", (t, s) => {
          i.params.effect === e && r(s);
        }),
        s("transitionEnd", () => {
          if (i.params.effect === e && l) {
            if (!c || !c().slideShadows) return;
            i.slides.each((t) => {
              i.$(t)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .remove();
            }),
              l();
          }
        }),
        s("virtualUpdate", () => {
          i.params.effect === e &&
            (i.slides.length || (d = !0),
            requestAnimationFrame(() => {
              d && i.slides && i.slides.length && (n(), (d = !1));
            }));
        });
    }
    function it(t, e) {
      return t.transformEl
        ? e
            .find(t.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : e;
    }
    function st(t) {
      let { swiper: e, duration: i, transformEl: s, allSlides: n } = t;
      const { slides: r, activeIndex: a, $wrapperEl: o } = e;
      if (e.params.virtualTranslate && 0 !== i) {
        let t,
          i = !1;
        (t = n ? (s ? r.find(s) : r) : s ? r.eq(a).find(s) : r.eq(a)),
          t.transitionEnd(() => {
            if (i) return;
            if (!e || e.destroyed) return;
            (i = !0), (e.animating = !1);
            const t = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
          });
      }
    }
    function nt(t, e, i) {
      const s = "swiper-slide-shadow" + (i ? `-${i}` : ""),
        n = t.transformEl ? e.find(t.transformEl) : e;
      let r = n.children(`.${s}`);
      return (
        r.length ||
          ((r = c(
            `<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`
          )),
          n.append(r)),
        r
      );
    }
    Object.keys(F).forEach((t) => {
      Object.keys(F[t]).forEach((e) => {
        V.prototype[e] = F[t][e];
      });
    }),
      V.use([
        function (t) {
          let { swiper: e, on: i, emit: s } = t;
          const n = r();
          let a = null,
            o = null;
          const l = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            c = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          i("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((a = new ResizeObserver((t) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: i, height: s } = e;
                    let n = i,
                      r = s;
                    t.forEach((t) => {
                      let { contentBoxSize: i, contentRect: s, target: a } = t;
                      (a && a !== e.el) ||
                        ((n = s ? s.width : (i[0] || i).inlineSize),
                        (r = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (n === i && r === s) || l();
                  });
                })),
                a.observe(e.el))
              : (n.addEventListener("resize", l),
                n.addEventListener("orientationchange", c));
          }),
            i("destroy", () => {
              o && n.cancelAnimationFrame(o),
                a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
                n.removeEventListener("resize", l),
                n.removeEventListener("orientationchange", c);
            });
        },
        function (t) {
          let { swiper: e, extendParams: i, on: s, emit: n } = t;
          const a = [],
            o = r(),
            l = function (t, e) {
              void 0 === e && (e = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (t) => {
                  if (1 === t.length) return void n("observerUpdate", t[0]);
                  const e = function () {
                    n("observerUpdate", t[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(e)
                    : o.setTimeout(e, 0);
                }
              );
              i.observe(t, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData,
              }),
                a.push(i);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) l(t[e]);
                }
                l(e.$el[0], { childList: e.params.observeSlideChildren }),
                  l(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              a.forEach((t) => {
                t.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const rt = [
      function (t) {
        let e,
          { swiper: i, extendParams: s, on: n, emit: r } = t;
        function a(t, e) {
          const s = i.params.virtual;
          if (s.cache && i.virtual.cache[e]) return i.virtual.cache[e];
          const n = s.renderSlide
            ? c(s.renderSlide.call(i, t, e))
            : c(
                `<div class="${i.params.slideClass}" data-swiper-slide-index="${e}">${t}</div>`
              );
          return (
            n.attr("data-swiper-slide-index") ||
              n.attr("data-swiper-slide-index", e),
            s.cache && (i.virtual.cache[e] = n),
            n
          );
        }
        function o(t) {
          const {
              slidesPerView: e,
              slidesPerGroup: s,
              centeredSlides: n,
            } = i.params,
            { addSlidesBefore: o, addSlidesAfter: l } = i.params.virtual,
            { from: c, to: d, slides: h, slidesGrid: u, offset: p } = i.virtual;
          i.params.cssMode || i.updateActiveIndex();
          const f = i.activeIndex || 0;
          let m, g, v;
          (m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top"),
            n
              ? ((g = Math.floor(e / 2) + s + l),
                (v = Math.floor(e / 2) + s + o))
              : ((g = e + (s - 1) + l), (v = s + o));
          const y = Math.max((f || 0) - v, 0),
            w = Math.min((f || 0) + g, h.length - 1),
            b = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);
          function x() {
            i.updateSlides(),
              i.updateProgress(),
              i.updateSlidesClasses(),
              i.lazy && i.params.lazy.enabled && i.lazy.load(),
              r("virtualUpdate");
          }
          if (
            (Object.assign(i.virtual, {
              from: y,
              to: w,
              offset: b,
              slidesGrid: i.slidesGrid,
            }),
            c === y && d === w && !t)
          )
            return (
              i.slidesGrid !== u && b !== p && i.slides.css(m, `${b}px`),
              i.updateProgress(),
              void r("virtualUpdate")
            );
          if (i.params.virtual.renderExternal)
            return (
              i.params.virtual.renderExternal.call(i, {
                offset: b,
                from: y,
                to: w,
                slides: (function () {
                  const t = [];
                  for (let e = y; e <= w; e += 1) t.push(h[e]);
                  return t;
                })(),
              }),
              void (i.params.virtual.renderExternalUpdate
                ? x()
                : r("virtualUpdate"))
            );
          const _ = [],
            E = [];
          if (t) i.$wrapperEl.find(`.${i.params.slideClass}`).remove();
          else
            for (let t = c; t <= d; t += 1)
              (t < y || t > w) &&
                i.$wrapperEl
                  .find(
                    `.${i.params.slideClass}[data-swiper-slide-index="${t}"]`
                  )
                  .remove();
          for (let e = 0; e < h.length; e += 1)
            e >= y &&
              e <= w &&
              (void 0 === d || t
                ? E.push(e)
                : (e > d && E.push(e), e < c && _.push(e)));
          E.forEach((t) => {
            i.$wrapperEl.append(a(h[t], t));
          }),
            _.sort((t, e) => e - t).forEach((t) => {
              i.$wrapperEl.prepend(a(h[t], t));
            }),
            i.$wrapperEl.children(".swiper-slide").css(m, `${b}px`),
            x();
        }
        s({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        }),
          (i.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
          n("beforeInit", () => {
            i.params.virtual.enabled &&
              ((i.virtual.slides = i.params.virtual.slides),
              i.classNames.push(`${i.params.containerModifierClass}virtual`),
              (i.params.watchSlidesProgress = !0),
              (i.originalParams.watchSlidesProgress = !0),
              i.params.initialSlide || o());
          }),
          n("setTranslate", () => {
            i.params.virtual.enabled &&
              (i.params.cssMode && !i._immediateVirtual
                ? (clearTimeout(e),
                  (e = setTimeout(() => {
                    o();
                  }, 100)))
                : o());
          }),
          n("init update resize", () => {
            i.params.virtual.enabled &&
              i.params.cssMode &&
              v(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`);
          }),
          Object.assign(i.virtual, {
            appendSlide: function (t) {
              if ("object" == typeof t && "length" in t)
                for (let e = 0; e < t.length; e += 1)
                  t[e] && i.virtual.slides.push(t[e]);
              else i.virtual.slides.push(t);
              o(!0);
            },
            prependSlide: function (t) {
              const e = i.activeIndex;
              let s = e + 1,
                n = 1;
              if (Array.isArray(t)) {
                for (let e = 0; e < t.length; e += 1)
                  t[e] && i.virtual.slides.unshift(t[e]);
                (s = e + t.length), (n = t.length);
              } else i.virtual.slides.unshift(t);
              if (i.params.virtual.cache) {
                const t = i.virtual.cache,
                  e = {};
                Object.keys(t).forEach((i) => {
                  const s = t[i],
                    r = s.attr("data-swiper-slide-index");
                  r && s.attr("data-swiper-slide-index", parseInt(r, 10) + n),
                    (e[parseInt(i, 10) + n] = s);
                }),
                  (i.virtual.cache = e);
              }
              o(!0), i.slideTo(s, 0);
            },
            removeSlide: function (t) {
              if (null == t) return;
              let e = i.activeIndex;
              if (Array.isArray(t))
                for (let s = t.length - 1; s >= 0; s -= 1)
                  i.virtual.slides.splice(t[s], 1),
                    i.params.virtual.cache && delete i.virtual.cache[t[s]],
                    t[s] < e && (e -= 1),
                    (e = Math.max(e, 0));
              else
                i.virtual.slides.splice(t, 1),
                  i.params.virtual.cache && delete i.virtual.cache[t],
                  t < e && (e -= 1),
                  (e = Math.max(e, 0));
              o(!0), i.slideTo(e, 0);
            },
            removeAllSlides: function () {
              (i.virtual.slides = []),
                i.params.virtual.cache && (i.virtual.cache = {}),
                o(!0),
                i.slideTo(0, 0);
            },
            update: o,
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: n, emit: a } = t;
        const o = s(),
          l = r();
        function d(t) {
          if (!e.enabled) return;
          const { rtlTranslate: i } = e;
          let s = t;
          s.originalEvent && (s = s.originalEvent);
          const n = s.keyCode || s.charCode,
            r = e.params.keyboard.pageUpDown,
            c = r && 33 === n,
            d = r && 34 === n,
            h = 37 === n,
            u = 39 === n,
            p = 38 === n,
            f = 40 === n;
          if (
            !e.allowSlideNext &&
            ((e.isHorizontal() && u) || (e.isVertical() && f) || d)
          )
            return !1;
          if (
            !e.allowSlidePrev &&
            ((e.isHorizontal() && h) || (e.isVertical() && p) || c)
          )
            return !1;
          if (
            !(
              s.shiftKey ||
              s.altKey ||
              s.ctrlKey ||
              s.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ("input" === o.activeElement.nodeName.toLowerCase() ||
                  "textarea" === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              e.params.keyboard.onlyInViewport &&
              (c || d || h || u || p || f)
            ) {
              let t = !1;
              if (
                e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
                0 === e.$el.parents(`.${e.params.slideActiveClass}`).length
              )
                return;
              const s = e.$el,
                n = s[0].clientWidth,
                r = s[0].clientHeight,
                a = l.innerWidth,
                o = l.innerHeight,
                c = e.$el.offset();
              i && (c.left -= e.$el[0].scrollLeft);
              const d = [
                [c.left, c.top],
                [c.left + n, c.top],
                [c.left, c.top + r],
                [c.left + n, c.top + r],
              ];
              for (let e = 0; e < d.length; e += 1) {
                const i = d[e];
                if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= o) {
                  if (0 === i[0] && 0 === i[1]) continue;
                  t = !0;
                }
              }
              if (!t) return;
            }
            e.isHorizontal()
              ? ((c || d || h || u) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (((d || u) && !i) || ((c || h) && i)) && e.slideNext(),
                (((c || h) && !i) || ((d || u) && i)) && e.slidePrev())
              : ((c || d || p || f) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (d || f) && e.slideNext(),
                (c || p) && e.slidePrev()),
              a("keyPress", n);
          }
        }
        function h() {
          e.keyboard.enabled ||
            (c(o).on("keydown", d), (e.keyboard.enabled = !0));
        }
        function u() {
          e.keyboard.enabled &&
            (c(o).off("keydown", d), (e.keyboard.enabled = !1));
        }
        (e.keyboard = { enabled: !1 }),
          i({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          n("init", () => {
            e.params.keyboard.enabled && h();
          }),
          n("destroy", () => {
            e.keyboard.enabled && u();
          }),
          Object.assign(e.keyboard, { enable: h, disable: u });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        const a = r();
        let o;
        i({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (e.mousewheel = { enabled: !1 });
        let l,
          d = u();
        const p = [];
        function f() {
          e.enabled && (e.mouseEntered = !0);
        }
        function m() {
          e.enabled && (e.mouseEntered = !1);
        }
        function g(t) {
          return !(
            (e.params.mousewheel.thresholdDelta &&
              t.delta < e.params.mousewheel.thresholdDelta) ||
            (e.params.mousewheel.thresholdTime &&
              u() - d < e.params.mousewheel.thresholdTime) ||
            (!(t.delta >= 6 && u() - d < 60) &&
              (t.direction < 0
                ? (e.isEnd && !e.params.loop) ||
                  e.animating ||
                  (e.slideNext(), n("scroll", t.raw))
                : (e.isBeginning && !e.params.loop) ||
                  e.animating ||
                  (e.slidePrev(), n("scroll", t.raw)),
              (d = new a.Date().getTime()),
              1))
          );
        }
        function v(t) {
          let i = t,
            s = !0;
          if (!e.enabled) return;
          const r = e.params.mousewheel;
          e.params.cssMode && i.preventDefault();
          let a = e.$el;
          if (
            ("container" !== e.params.mousewheel.eventsTarget &&
              (a = c(e.params.mousewheel.eventsTarget)),
            !e.mouseEntered && !a[0].contains(i.target) && !r.releaseOnEdges)
          )
            return !0;
          i.originalEvent && (i = i.originalEvent);
          let d = 0;
          const f = e.rtlTranslate ? -1 : 1,
            m = (function (t) {
              let e = 0,
                i = 0,
                s = 0,
                n = 0;
              return (
                "detail" in t && (i = t.detail),
                "wheelDelta" in t && (i = -t.wheelDelta / 120),
                "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                "axis" in t &&
                  t.axis === t.HORIZONTAL_AXIS &&
                  ((e = i), (i = 0)),
                (s = 10 * e),
                (n = 10 * i),
                "deltaY" in t && (n = t.deltaY),
                "deltaX" in t && (s = t.deltaX),
                t.shiftKey && !s && ((s = n), (n = 0)),
                (s || n) &&
                  t.deltaMode &&
                  (1 === t.deltaMode
                    ? ((s *= 40), (n *= 40))
                    : ((s *= 800), (n *= 800))),
                s && !e && (e = s < 1 ? -1 : 1),
                n && !i && (i = n < 1 ? -1 : 1),
                { spinX: e, spinY: i, pixelX: s, pixelY: n }
              );
            })(i);
          if (r.forceToAxis)
            if (e.isHorizontal()) {
              if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
              d = -m.pixelX * f;
            } else {
              if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
              d = -m.pixelY;
            }
          else
            d =
              Math.abs(m.pixelX) > Math.abs(m.pixelY)
                ? -m.pixelX * f
                : -m.pixelY;
          if (0 === d) return !0;
          r.invert && (d = -d);
          let v = e.getTranslate() + d * r.sensitivity;
          if (
            (v >= e.minTranslate() && (v = e.minTranslate()),
            v <= e.maxTranslate() && (v = e.maxTranslate()),
            (s =
              !!e.params.loop ||
              !(v === e.minTranslate() || v === e.maxTranslate())),
            s && e.params.nested && i.stopPropagation(),
            e.params.freeMode && e.params.freeMode.enabled)
          ) {
            const t = {
                time: u(),
                delta: Math.abs(d),
                direction: Math.sign(d),
              },
              s =
                l &&
                t.time < l.time + 500 &&
                t.delta <= l.delta &&
                t.direction === l.direction;
            if (!s) {
              (l = void 0), e.params.loop && e.loopFix();
              let a = e.getTranslate() + d * r.sensitivity;
              const c = e.isBeginning,
                u = e.isEnd;
              if (
                (a >= e.minTranslate() && (a = e.minTranslate()),
                a <= e.maxTranslate() && (a = e.maxTranslate()),
                e.setTransition(0),
                e.setTranslate(a),
                e.updateProgress(),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                ((!c && e.isBeginning) || (!u && e.isEnd)) &&
                  e.updateSlidesClasses(),
                e.params.freeMode.sticky)
              ) {
                clearTimeout(o), (o = void 0), p.length >= 15 && p.shift();
                const i = p.length ? p[p.length - 1] : void 0,
                  s = p[0];
                if (
                  (p.push(t),
                  i && (t.delta > i.delta || t.direction !== i.direction))
                )
                  p.splice(0);
                else if (
                  p.length >= 15 &&
                  t.time - s.time < 500 &&
                  s.delta - t.delta >= 1 &&
                  t.delta <= 6
                ) {
                  const i = d > 0 ? 0.8 : 0.2;
                  (l = t),
                    p.splice(0),
                    (o = h(() => {
                      e.slideToClosest(e.params.speed, !0, void 0, i);
                    }, 0));
                }
                o ||
                  (o = h(() => {
                    (l = t),
                      p.splice(0),
                      e.slideToClosest(e.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (s || n("scroll", i),
                e.params.autoplay &&
                  e.params.autoplayDisableOnInteraction &&
                  e.autoplay.stop(),
                a === e.minTranslate() || a === e.maxTranslate())
              )
                return !0;
            }
          } else {
            const i = {
              time: u(),
              delta: Math.abs(d),
              direction: Math.sign(d),
              raw: t,
            };
            p.length >= 2 && p.shift();
            const s = p.length ? p[p.length - 1] : void 0;
            if (
              (p.push(i),
              s
                ? (i.direction !== s.direction ||
                    i.delta > s.delta ||
                    i.time > s.time + 150) &&
                  g(i)
                : g(i),
              (function (t) {
                const i = e.params.mousewheel;
                if (t.direction < 0) {
                  if (e.isEnd && !e.params.loop && i.releaseOnEdges) return !0;
                } else if (e.isBeginning && !e.params.loop && i.releaseOnEdges)
                  return !0;
                return !1;
              })(i))
            )
              return !0;
          }
          return (
            i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1
          );
        }
        function y(t) {
          let i = e.$el;
          "container" !== e.params.mousewheel.eventsTarget &&
            (i = c(e.params.mousewheel.eventsTarget)),
            i[t]("mouseenter", f),
            i[t]("mouseleave", m),
            i[t]("wheel", v);
        }
        function w() {
          return e.params.cssMode
            ? (e.wrapperEl.removeEventListener("wheel", v), !0)
            : !e.mousewheel.enabled &&
                (y("on"), (e.mousewheel.enabled = !0), !0);
        }
        function b() {
          return e.params.cssMode
            ? (e.wrapperEl.addEventListener(event, v), !0)
            : !!e.mousewheel.enabled &&
                (y("off"), (e.mousewheel.enabled = !1), !0);
        }
        s("init", () => {
          !e.params.mousewheel.enabled && e.params.cssMode && b(),
            e.params.mousewheel.enabled && w();
        }),
          s("destroy", () => {
            e.params.cssMode && w(), e.mousewheel.enabled && b();
          }),
          Object.assign(e.mousewheel, { enable: w, disable: b });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        function r(t) {
          let i;
          return (
            t &&
              ((i = c(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                i.length > 1 &&
                1 === e.$el.find(t).length &&
                (i = e.$el.find(t))),
            i
          );
        }
        function a(t, i) {
          const s = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[i ? "addClass" : "removeClass"](s.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: i } = e.navigation;
          a(i, e.isBeginning && !e.params.rewind),
            a(t, e.isEnd && !e.params.rewind);
        }
        function l(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), n("navigationPrev"));
        }
        function d(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), n("navigationNext"));
        }
        function h() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = G(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const i = r(t.nextEl),
            s = r(t.prevEl);
          i && i.length > 0 && i.on("click", d),
            s && s.length > 0 && s.on("click", l),
            Object.assign(e.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            e.enabled ||
              (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
        }
        function u() {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t.length &&
            (t.off("click", d),
            t.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", l),
              i.removeClass(e.params.navigation.disabledClass));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            !1 === e.params.navigation.enabled ? p() : (h(), o());
          }),
          s("toEdge fromEdge lock unlock", () => {
            o();
          }),
          s("destroy", () => {
            u();
          }),
          s("enable disable", () => {
            const { $nextEl: t, $prevEl: i } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          s("click", (t, i) => {
            const { $nextEl: s, $prevEl: r } = e.navigation,
              a = i.target;
            if (e.params.navigation.hideOnClick && !c(a).is(r) && !c(a).is(s)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === a || e.pagination.el.contains(a))
              )
                return;
              let t;
              s
                ? (t = s.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                n(!0 === t ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          });
        const p = () => {
          e.$el.addClass(e.params.navigation.navigationDisabledClass), u();
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass),
              h(),
              o();
          },
          disable: p,
          update: o,
          init: h,
          destroy: u,
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        const r = "swiper-pagination";
        let a;
        i({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (t) => t,
            formatFractionTotal: (t) => t,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function l() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function d(t, i) {
          const { bulletActiveClass: s } = e.params.pagination;
          t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
        }
        function h() {
          const t = e.rtl,
            i = e.params.pagination;
          if (l()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el;
          let h;
          const u = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((h = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                h > s - 1 - 2 * e.loopedSlides && (h -= s - 2 * e.loopedSlides),
                h > u - 1 && (h -= u),
                h < 0 && "bullets" !== e.params.paginationType && (h = u + h))
              : (h = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === i.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const s = e.pagination.bullets;
            let n, l, u;
            if (
              (i.dynamicBullets &&
                ((a = s
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  e.isHorizontal() ? "width" : "height",
                  a * (i.dynamicMainBullets + 4) + "px"
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((o += h - (e.previousIndex - e.loopedSlides || 0)),
                  o > i.dynamicMainBullets - 1
                    ? (o = i.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (n = Math.max(h - o, 0)),
                (l = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                (u = (l + n) / 2)),
              s.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((t) => `${i.bulletActiveClass}${t}`)
                  .join(" ")
              ),
              r.length > 1)
            )
              s.each((t) => {
                const e = c(t),
                  s = e.index();
                s === h && e.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (s >= n &&
                      s <= l &&
                      e.addClass(`${i.bulletActiveClass}-main`),
                    s === n && d(e, "prev"),
                    s === l && d(e, "next"));
              });
            else {
              const t = s.eq(h),
                r = t.index();
              if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const t = s.eq(n),
                  a = s.eq(l);
                for (let t = n; t <= l; t += 1)
                  s.eq(t).addClass(`${i.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= s.length) {
                    for (let t = i.dynamicMainBullets; t >= 0; t -= 1)
                      s.eq(s.length - t).addClass(
                        `${i.bulletActiveClass}-main`
                      );
                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`
                    );
                  } else d(t, "prev"), d(a, "next");
                else d(t, "prev"), d(a, "next");
              }
            }
            if (i.dynamicBullets) {
              const n = Math.min(s.length, i.dynamicMainBullets + 4),
                r = (a * n - a) / 2 - u * a,
                o = t ? "right" : "left";
              s.css(e.isHorizontal() ? o : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === i.type &&
              (r.find(U(i.currentClass)).text(i.formatFractionCurrent(h + 1)),
              r.find(U(i.totalClass)).text(i.formatFractionTotal(u))),
            "progressbar" === i.type)
          ) {
            let t;
            t = i.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const s = (h + 1) / u;
            let n = 1,
              a = 1;
            "horizontal" === t ? (n = s) : (a = s),
              r
                .find(U(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
                .transition(e.params.speed);
          }
          "custom" === i.type && i.renderCustom
            ? (r.html(i.renderCustom(e, h + 1, u)), n("paginationRender", r[0]))
            : n("paginationUpdate", r[0]),
            e.params.watchOverflow &&
              e.enabled &&
              r[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
        }
        function u() {
          const t = e.params.pagination;
          if (l()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            s = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let n = e.params.loop
              ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              n > i &&
              (n = i);
            for (let i = 0; i < n; i += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, i, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            s.html(r), (e.pagination.bullets = s.find(U(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            s.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              s.html(r)),
            "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
        }
        function p() {
          e.params.pagination = G(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let i = c(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              ((i = e.$el.find(t.el)),
              i.length > 1 &&
                (i = i.filter((t) => c(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (o = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", U(t.bulletClass), function (t) {
                t.preventDefault();
                let i = c(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            Object.assign(e.pagination, { $el: i, el: i[0] }),
            e.enabled || i.addClass(t.lockClass));
        }
        function f() {
          const t = e.params.pagination;
          if (l()) return;
          const i = e.pagination.$el;
          i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            i.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off("click", U(t.bulletClass));
        }
        s("init", () => {
          !1 === e.params.pagination.enabled ? m() : (p(), u(), h());
        }),
          s("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && h();
          }),
          s("snapIndexChange", () => {
            e.params.loop || h();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (u(), h());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (u(), h());
          }),
          s("destroy", () => {
            f();
          }),
          s("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            h();
          }),
          s("click", (t, i) => {
            const s = i.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !c(s).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                  (e.navigation.prevEl && s === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              n(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          });
        const m = () => {
          e.$el.addClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.addClass(
                e.params.pagination.paginationDisabledClass
              ),
            f();
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.removeClass(
                  e.params.pagination.paginationDisabledClass
                ),
              p(),
              u(),
              h();
          },
          disable: m,
          render: u,
          update: h,
          init: p,
          destroy: f,
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: n, emit: r } = t;
        const a = s();
        let o,
          l,
          d,
          u,
          p = !1,
          f = null,
          m = null;
        function g() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: i, progress: s } = e,
            { $dragEl: n, $el: r } = t,
            a = e.params.scrollbar;
          let o = l,
            c = (d - l) * s;
          i
            ? ((c = -c),
              c > 0 ? ((o = l - c), (c = 0)) : -c + l > d && (o = d + c))
            : c < 0
            ? ((o = l + c), (c = 0))
            : c + l > d && (o = d - c),
            e.isHorizontal()
              ? (n.transform(`translate3d(${c}px, 0, 0)`),
                (n[0].style.width = `${o}px`))
              : (n.transform(`translate3d(0px, ${c}px, 0)`),
                (n[0].style.height = `${o}px`)),
            a.hide &&
              (clearTimeout(f),
              (r[0].style.opacity = 1),
              (f = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function v() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: i, $el: s } = t;
          (i[0].style.width = ""),
            (i[0].style.height = ""),
            (d = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
            (u =
              e.size /
              (e.virtualSize +
                e.params.slidesOffsetBefore -
                (e.params.centeredSlides ? e.snapGrid[0] : 0))),
            (l =
              "auto" === e.params.scrollbar.dragSize
                ? d * u
                : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (i[0].style.width = `${l}px`)
              : (i[0].style.height = `${l}px`),
            (s[0].style.display = u >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (s[0].style.opacity = 0),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
        function y(t) {
          return e.isHorizontal()
            ? "touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0].clientX
              : t.clientX
            : "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientY
            : t.clientY;
        }
        function w(t) {
          const { scrollbar: i, rtlTranslate: s } = e,
            { $el: n } = i;
          let r;
          (r =
            (y(t) -
              n.offset()[e.isHorizontal() ? "left" : "top"] -
              (null !== o ? o : l / 2)) /
            (d - l)),
            (r = Math.max(Math.min(r, 1), 0)),
            s && (r = 1 - r);
          const a =
            e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
          e.updateProgress(a),
            e.setTranslate(a),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        function b(t) {
          const i = e.params.scrollbar,
            { scrollbar: s, $wrapperEl: n } = e,
            { $el: a, $dragEl: l } = s;
          (p = !0),
            (o =
              t.target === l[0] || t.target === l
                ? y(t) -
                  t.target.getBoundingClientRect()[
                    e.isHorizontal() ? "left" : "top"
                  ]
                : null),
            t.preventDefault(),
            t.stopPropagation(),
            n.transition(100),
            l.transition(100),
            w(t),
            clearTimeout(m),
            a.transition(0),
            i.hide && a.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", t);
        }
        function x(t) {
          const { scrollbar: i, $wrapperEl: s } = e,
            { $el: n, $dragEl: a } = i;
          p &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            w(t),
            s.transition(0),
            n.transition(0),
            a.transition(0),
            r("scrollbarDragMove", t));
        }
        function _(t) {
          const i = e.params.scrollbar,
            { scrollbar: s, $wrapperEl: n } = e,
            { $el: a } = s;
          p &&
            ((p = !1),
            e.params.cssMode &&
              (e.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
            i.hide &&
              (clearTimeout(m),
              (m = h(() => {
                a.css("opacity", 0), a.transition(400);
              }, 1e3))),
            r("scrollbarDragEnd", t),
            i.snapOnRelease && e.slideToClosest());
        }
        function E(t) {
          const {
              scrollbar: i,
              touchEventsTouch: s,
              touchEventsDesktop: n,
              params: r,
              support: o,
            } = e,
            l = i.$el;
          if (!l) return;
          const c = l[0],
            d = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            h = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!c) return;
          const u = "on" === t ? "addEventListener" : "removeEventListener";
          o.touch
            ? (c[u](s.start, b, d), c[u](s.move, x, d), c[u](s.end, _, h))
            : (c[u](n.start, b, d), a[u](n.move, x, d), a[u](n.end, _, h));
        }
        function T() {
          const { scrollbar: t, $el: i } = e;
          e.params.scrollbar = G(
            e,
            e.originalParams.scrollbar,
            e.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const s = e.params.scrollbar;
          if (!s.el) return;
          let n = c(s.el);
          e.params.uniqueNavElements &&
            "string" == typeof s.el &&
            n.length > 1 &&
            1 === i.find(s.el).length &&
            (n = i.find(s.el)),
            n.addClass(e.isHorizontal() ? s.horizontalClass : s.verticalClass);
          let r = n.find(`.${e.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = c(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            n.append(r)),
            Object.assign(t, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
            s.draggable && e.params.scrollbar.el && e.scrollbar.el && E("on"),
            n &&
              n[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
        function S() {
          const t = e.params.scrollbar,
            i = e.scrollbar.$el;
          i &&
            i.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            e.params.scrollbar.el && e.scrollbar.el && E("off");
        }
        i({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical",
          },
        }),
          (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          n("init", () => {
            !1 === e.params.scrollbar.enabled ? C() : (T(), v(), g());
          }),
          n("update resize observerUpdate lock unlock", () => {
            v();
          }),
          n("setTranslate", () => {
            g();
          }),
          n("setTransition", (t, i) => {
            !(function (t) {
              e.params.scrollbar.el &&
                e.scrollbar.el &&
                e.scrollbar.$dragEl.transition(t);
            })(i);
          }),
          n("enable disable", () => {
            const { $el: t } = e.scrollbar;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          }),
          n("destroy", () => {
            S();
          });
        const C = () => {
          e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
            e.scrollbar.$el &&
              e.scrollbar.$el.addClass(
                e.params.scrollbar.scrollbarDisabledClass
              ),
            S();
        };
        Object.assign(e.scrollbar, {
          enable: () => {
            e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),
              e.scrollbar.$el &&
                e.scrollbar.$el.removeClass(
                  e.params.scrollbar.scrollbarDisabledClass
                ),
              T(),
              v(),
              g();
          },
          disable: C,
          updateSize: v,
          setTranslate: g,
          init: T,
          destroy: S,
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({ parallax: { enabled: !1 } });
        const n = (t, i) => {
            const { rtl: s } = e,
              n = c(t),
              r = s ? -1 : 1,
              a = n.attr("data-swiper-parallax") || "0";
            let o = n.attr("data-swiper-parallax-x"),
              l = n.attr("data-swiper-parallax-y");
            const d = n.attr("data-swiper-parallax-scale"),
              h = n.attr("data-swiper-parallax-opacity");
            if (
              (o || l
                ? ((o = o || "0"), (l = l || "0"))
                : e.isHorizontal()
                ? ((o = a), (l = "0"))
                : ((l = a), (o = "0")),
              (o =
                o.indexOf("%") >= 0
                  ? parseInt(o, 10) * i * r + "%"
                  : o * i * r + "px"),
              (l =
                l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px"),
              null != h)
            ) {
              const t = h - (h - 1) * (1 - Math.abs(i));
              n[0].style.opacity = t;
            }
            if (null == d) n.transform(`translate3d(${o}, ${l}, 0px)`);
            else {
              const t = d - (d - 1) * (1 - Math.abs(i));
              n.transform(`translate3d(${o}, ${l}, 0px) scale(${t})`);
            }
          },
          r = () => {
            const { $el: t, slides: i, progress: s, snapGrid: r } = e;
            t
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((t) => {
                n(t, s);
              }),
              i.each((t, i) => {
                let a = t.progress;
                e.params.slidesPerGroup > 1 &&
                  "auto" !== e.params.slidesPerView &&
                  (a += Math.ceil(i / 2) - s * (r.length - 1)),
                  (a = Math.min(Math.max(a, -1), 1)),
                  c(t)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((t) => {
                      n(t, a);
                    });
              });
          };
        s("beforeInit", () => {
          e.params.parallax.enabled &&
            ((e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0));
        }),
          s("init", () => {
            e.params.parallax.enabled && r();
          }),
          s("setTranslate", () => {
            e.params.parallax.enabled && r();
          }),
          s("setTransition", (t, i) => {
            e.params.parallax.enabled &&
              (function (t) {
                void 0 === t && (t = e.params.speed);
                const { $el: i } = e;
                i.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).each((e) => {
                  const i = c(e);
                  let s =
                    parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                  0 === t && (s = 0), i.transition(s);
                });
              })(i);
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        const a = r();
        i({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        }),
          (e.zoom = { enabled: !1 });
        let o,
          l,
          d,
          h = 1,
          u = !1;
        const f = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3,
          },
          m = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let v = 1;
        function y(t) {
          if (t.targetTouches.length < 2) return 1;
          const e = t.targetTouches[0].pageX,
            i = t.targetTouches[0].pageY,
            s = t.targetTouches[1].pageX,
            n = t.targetTouches[1].pageY;
          return Math.sqrt((s - e) ** 2 + (n - i) ** 2);
        }
        function w(t) {
          const i = e.support,
            s = e.params.zoom;
          if (((l = !1), (d = !1), !i.gestures)) {
            if (
              "touchstart" !== t.type ||
              ("touchstart" === t.type && t.targetTouches.length < 2)
            )
              return;
            (l = !0), (f.scaleStart = y(t));
          }
          (f.$slideEl && f.$slideEl.length) ||
          ((f.$slideEl = c(t.target).closest(`.${e.params.slideClass}`)),
          0 === f.$slideEl.length && (f.$slideEl = e.slides.eq(e.activeIndex)),
          (f.$imageEl = f.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`)),
          (f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
          0 !== f.$imageWrapEl.length)
            ? (f.$imageEl && f.$imageEl.transition(0), (u = !0))
            : (f.$imageEl = void 0);
        }
        function b(t) {
          const i = e.support,
            s = e.params.zoom,
            n = e.zoom;
          if (!i.gestures) {
            if (
              "touchmove" !== t.type ||
              ("touchmove" === t.type && t.targetTouches.length < 2)
            )
              return;
            (d = !0), (f.scaleMove = y(t));
          }
          f.$imageEl && 0 !== f.$imageEl.length
            ? (i.gestures
                ? (n.scale = t.scale * h)
                : (n.scale = (f.scaleMove / f.scaleStart) * h),
              n.scale > f.maxRatio &&
                (n.scale = f.maxRatio - 1 + (n.scale - f.maxRatio + 1) ** 0.5),
              n.scale < s.minRatio &&
                (n.scale = s.minRatio + 1 - (s.minRatio - n.scale + 1) ** 0.5),
              f.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
            : "gesturechange" === t.type && w(t);
        }
        function x(t) {
          const i = e.device,
            s = e.support,
            n = e.params.zoom,
            r = e.zoom;
          if (!s.gestures) {
            if (!l || !d) return;
            if (
              "touchend" !== t.type ||
              ("touchend" === t.type &&
                t.changedTouches.length < 2 &&
                !i.android)
            )
              return;
            (l = !1), (d = !1);
          }
          f.$imageEl &&
            0 !== f.$imageEl.length &&
            ((r.scale = Math.max(Math.min(r.scale, f.maxRatio), n.minRatio)),
            f.$imageEl
              .transition(e.params.speed)
              .transform(`translate3d(0,0,0) scale(${r.scale})`),
            (h = r.scale),
            (u = !1),
            1 === r.scale && (f.$slideEl = void 0));
        }
        function _(t) {
          const i = e.zoom;
          if (!f.$imageEl || 0 === f.$imageEl.length) return;
          if (((e.allowClick = !1), !m.isTouched || !f.$slideEl)) return;
          m.isMoved ||
            ((m.width = f.$imageEl[0].offsetWidth),
            (m.height = f.$imageEl[0].offsetHeight),
            (m.startX = p(f.$imageWrapEl[0], "x") || 0),
            (m.startY = p(f.$imageWrapEl[0], "y") || 0),
            (f.slideWidth = f.$slideEl[0].offsetWidth),
            (f.slideHeight = f.$slideEl[0].offsetHeight),
            f.$imageWrapEl.transition(0));
          const s = m.width * i.scale,
            n = m.height * i.scale;
          if (!(s < f.slideWidth && n < f.slideHeight)) {
            if (
              ((m.minX = Math.min(f.slideWidth / 2 - s / 2, 0)),
              (m.maxX = -m.minX),
              (m.minY = Math.min(f.slideHeight / 2 - n / 2, 0)),
              (m.maxY = -m.minY),
              (m.touchesCurrent.x =
                "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
              (m.touchesCurrent.y =
                "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
              !m.isMoved && !u)
            ) {
              if (
                e.isHorizontal() &&
                ((Math.floor(m.minX) === Math.floor(m.startX) &&
                  m.touchesCurrent.x < m.touchesStart.x) ||
                  (Math.floor(m.maxX) === Math.floor(m.startX) &&
                    m.touchesCurrent.x > m.touchesStart.x))
              )
                return void (m.isTouched = !1);
              if (
                !e.isHorizontal() &&
                ((Math.floor(m.minY) === Math.floor(m.startY) &&
                  m.touchesCurrent.y < m.touchesStart.y) ||
                  (Math.floor(m.maxY) === Math.floor(m.startY) &&
                    m.touchesCurrent.y > m.touchesStart.y))
              )
                return void (m.isTouched = !1);
            }
            t.cancelable && t.preventDefault(),
              t.stopPropagation(),
              (m.isMoved = !0),
              (m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX),
              (m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY),
              m.currentX < m.minX &&
                (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
              m.currentX > m.maxX &&
                (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
              m.currentY < m.minY &&
                (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
              m.currentY > m.maxY &&
                (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
              g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x),
              g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y),
              g.prevTime || (g.prevTime = Date.now()),
              (g.x =
                (m.touchesCurrent.x - g.prevPositionX) /
                (Date.now() - g.prevTime) /
                2),
              (g.y =
                (m.touchesCurrent.y - g.prevPositionY) /
                (Date.now() - g.prevTime) /
                2),
              Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
              Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
              (g.prevPositionX = m.touchesCurrent.x),
              (g.prevPositionY = m.touchesCurrent.y),
              (g.prevTime = Date.now()),
              f.$imageWrapEl.transform(
                `translate3d(${m.currentX}px, ${m.currentY}px,0)`
              );
          }
        }
        function E() {
          const t = e.zoom;
          f.$slideEl &&
            e.previousIndex !== e.activeIndex &&
            (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"),
            (t.scale = 1),
            (h = 1),
            (f.$slideEl = void 0),
            (f.$imageEl = void 0),
            (f.$imageWrapEl = void 0));
        }
        function T(t) {
          const i = e.zoom,
            s = e.params.zoom;
          if (
            (f.$slideEl ||
              (t &&
                t.target &&
                (f.$slideEl = c(t.target).closest(`.${e.params.slideClass}`)),
              f.$slideEl ||
                (e.params.virtual && e.params.virtual.enabled && e.virtual
                  ? (f.$slideEl = e.$wrapperEl.children(
                      `.${e.params.slideActiveClass}`
                    ))
                  : (f.$slideEl = e.slides.eq(e.activeIndex))),
              (f.$imageEl = f.$slideEl
                .find(`.${s.containerClass}`)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`))),
            !f.$imageEl ||
              0 === f.$imageEl.length ||
              !f.$imageWrapEl ||
              0 === f.$imageWrapEl.length)
          )
            return;
          let n, r, o, l, d, u, p, g, v, y, w, b, x, _, E, T, S, C;
          e.params.cssMode &&
            ((e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.touchAction = "none")),
            f.$slideEl.addClass(`${s.zoomedSlideClass}`),
            void 0 === m.touchesStart.x && t
              ? ((n =
                  "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX),
                (r =
                  "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
              : ((n = m.touchesStart.x), (r = m.touchesStart.y)),
            (i.scale = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            (h = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            t
              ? ((S = f.$slideEl[0].offsetWidth),
                (C = f.$slideEl[0].offsetHeight),
                (o = f.$slideEl.offset().left + a.scrollX),
                (l = f.$slideEl.offset().top + a.scrollY),
                (d = o + S / 2 - n),
                (u = l + C / 2 - r),
                (v = f.$imageEl[0].offsetWidth),
                (y = f.$imageEl[0].offsetHeight),
                (w = v * i.scale),
                (b = y * i.scale),
                (x = Math.min(S / 2 - w / 2, 0)),
                (_ = Math.min(C / 2 - b / 2, 0)),
                (E = -x),
                (T = -_),
                (p = d * i.scale),
                (g = u * i.scale),
                p < x && (p = x),
                p > E && (p = E),
                g < _ && (g = _),
                g > T && (g = T))
              : ((p = 0), (g = 0)),
            f.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${p}px, ${g}px,0)`),
            f.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${i.scale})`);
        }
        function S() {
          const t = e.zoom,
            i = e.params.zoom;
          f.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (f.$slideEl = e.$wrapperEl.children(
                  `.${e.params.slideActiveClass}`
                ))
              : (f.$slideEl = e.slides.eq(e.activeIndex)),
            (f.$imageEl = f.$slideEl
              .find(`.${i.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (f.$imageWrapEl = f.$imageEl.parent(`.${i.containerClass}`))),
            f.$imageEl &&
              0 !== f.$imageEl.length &&
              f.$imageWrapEl &&
              0 !== f.$imageWrapEl.length &&
              (e.params.cssMode &&
                ((e.wrapperEl.style.overflow = ""),
                (e.wrapperEl.style.touchAction = "")),
              (t.scale = 1),
              (h = 1),
              f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              f.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              f.$slideEl.removeClass(`${i.zoomedSlideClass}`),
              (f.$slideEl = void 0));
        }
        function C(t) {
          const i = e.zoom;
          i.scale && 1 !== i.scale ? S() : T(t);
        }
        function M() {
          const t = e.support;
          return {
            passiveListener: !(
              "touchstart" !== e.touchEvents.start ||
              !t.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            activeListenerWithCapture: !t.passiveListener || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function k() {
          return `.${e.params.slideClass}`;
        }
        function $(t) {
          const { passiveListener: i } = M(),
            s = k();
          e.$wrapperEl[t]("gesturestart", s, w, i),
            e.$wrapperEl[t]("gesturechange", s, b, i),
            e.$wrapperEl[t]("gestureend", s, x, i);
        }
        function O() {
          o || ((o = !0), $("on"));
        }
        function z() {
          o && ((o = !1), $("off"));
        }
        function P() {
          const t = e.zoom;
          if (t.enabled) return;
          t.enabled = !0;
          const i = e.support,
            { passiveListener: s, activeListenerWithCapture: n } = M(),
            r = k();
          i.gestures
            ? (e.$wrapperEl.on(e.touchEvents.start, O, s),
              e.$wrapperEl.on(e.touchEvents.end, z, s))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(e.touchEvents.start, r, w, s),
              e.$wrapperEl.on(e.touchEvents.move, r, b, n),
              e.$wrapperEl.on(e.touchEvents.end, r, x, s),
              e.touchEvents.cancel &&
                e.$wrapperEl.on(e.touchEvents.cancel, r, x, s)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              `.${e.params.zoom.containerClass}`,
              _,
              n
            );
        }
        function L() {
          const t = e.zoom;
          if (!t.enabled) return;
          const i = e.support;
          t.enabled = !1;
          const { passiveListener: s, activeListenerWithCapture: n } = M(),
            r = k();
          i.gestures
            ? (e.$wrapperEl.off(e.touchEvents.start, O, s),
              e.$wrapperEl.off(e.touchEvents.end, z, s))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, r, w, s),
              e.$wrapperEl.off(e.touchEvents.move, r, b, n),
              e.$wrapperEl.off(e.touchEvents.end, r, x, s),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, x, s)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              `.${e.params.zoom.containerClass}`,
              _,
              n
            );
        }
        Object.defineProperty(e.zoom, "scale", {
          get: () => v,
          set(t) {
            if (v !== t) {
              const e = f.$imageEl ? f.$imageEl[0] : void 0,
                i = f.$slideEl ? f.$slideEl[0] : void 0;
              n("zoomChange", t, e, i);
            }
            v = t;
          },
        }),
          s("init", () => {
            e.params.zoom.enabled && P();
          }),
          s("destroy", () => {
            L();
          }),
          s("touchStart", (t, i) => {
            e.zoom.enabled &&
              (function (t) {
                const i = e.device;
                f.$imageEl &&
                  0 !== f.$imageEl.length &&
                  (m.isTouched ||
                    (i.android && t.cancelable && t.preventDefault(),
                    (m.isTouched = !0),
                    (m.touchesStart.x =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    (m.touchesStart.y =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY)));
              })(i);
          }),
          s("touchEnd", (t, i) => {
            e.zoom.enabled &&
              (function () {
                const t = e.zoom;
                if (!f.$imageEl || 0 === f.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved)
                  return (m.isTouched = !1), void (m.isMoved = !1);
                (m.isTouched = !1), (m.isMoved = !1);
                let i = 300,
                  s = 300;
                const n = g.x * i,
                  r = m.currentX + n,
                  a = g.y * s,
                  o = m.currentY + a;
                0 !== g.x && (i = Math.abs((r - m.currentX) / g.x)),
                  0 !== g.y && (s = Math.abs((o - m.currentY) / g.y));
                const l = Math.max(i, s);
                (m.currentX = r), (m.currentY = o);
                const c = m.width * t.scale,
                  d = m.height * t.scale;
                (m.minX = Math.min(f.slideWidth / 2 - c / 2, 0)),
                  (m.maxX = -m.minX),
                  (m.minY = Math.min(f.slideHeight / 2 - d / 2, 0)),
                  (m.maxY = -m.minY),
                  (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                  (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                  f.$imageWrapEl
                    .transition(l)
                    .transform(
                      `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                    );
              })();
          }),
          s("doubleTap", (t, i) => {
            !e.animating &&
              e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              C(i);
          }),
          s("transitionEnd", () => {
            e.zoom.enabled && e.params.zoom.enabled && E();
          }),
          s("slideChange", () => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E();
          }),
          Object.assign(e.zoom, {
            enable: P,
            disable: L,
            in: T,
            out: S,
            toggle: C,
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        i({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (e.lazy = {});
        let a = !1,
          o = !1;
        function l(t, i) {
          void 0 === i && (i = !0);
          const s = e.params.lazy;
          if (void 0 === t) return;
          if (0 === e.slides.length) return;
          const r =
              e.virtual && e.params.virtual.enabled
                ? e.$wrapperEl.children(
                    `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                  )
                : e.slides.eq(t),
            a = r.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
          !r.hasClass(s.elementClass) ||
            r.hasClass(s.loadedClass) ||
            r.hasClass(s.loadingClass) ||
            a.push(r[0]),
            0 !== a.length &&
              a.each((t) => {
                const a = c(t);
                a.addClass(s.loadingClass);
                const o = a.attr("data-background"),
                  d = a.attr("data-src"),
                  h = a.attr("data-srcset"),
                  u = a.attr("data-sizes"),
                  p = a.parent("picture");
                e.loadImage(a[0], d || o, h, u, !1, () => {
                  if (null != e && e && (!e || e.params) && !e.destroyed) {
                    if (
                      (o
                        ? (a.css("background-image", `url("${o}")`),
                          a.removeAttr("data-background"))
                        : (h &&
                            (a.attr("srcset", h), a.removeAttr("data-srcset")),
                          u && (a.attr("sizes", u), a.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each((t) => {
                              const e = c(t);
                              e.attr("data-srcset") &&
                                (e.attr("srcset", e.attr("data-srcset")),
                                e.removeAttr("data-srcset"));
                            }),
                          d && (a.attr("src", d), a.removeAttr("data-src"))),
                      a.addClass(s.loadedClass).removeClass(s.loadingClass),
                      r.find(`.${s.preloaderClass}`).remove(),
                      e.params.loop && i)
                    ) {
                      const t = r.attr("data-swiper-slide-index");
                      r.hasClass(e.params.slideDuplicateClass)
                        ? l(
                            e.$wrapperEl
                              .children(
                                `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                              )
                              .index(),
                            !1
                          )
                        : l(
                            e.$wrapperEl
                              .children(
                                `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                              )
                              .index(),
                            !1
                          );
                    }
                    n("lazyImageReady", r[0], a[0]),
                      e.params.autoHeight && e.updateAutoHeight();
                  }
                }),
                  n("lazyImageLoad", r[0], a[0]);
              });
        }
        function d() {
          const { $wrapperEl: t, params: i, slides: s, activeIndex: n } = e,
            r = e.virtual && i.virtual.enabled,
            a = i.lazy;
          let d = i.slidesPerView;
          function h(e) {
            if (r) {
              if (
                t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0;
            } else if (s[e]) return !0;
            return !1;
          }
          function u(t) {
            return r ? c(t).attr("data-swiper-slide-index") : c(t).index();
          }
          if (
            ("auto" === d && (d = 0),
            o || (o = !0),
            e.params.watchSlidesProgress)
          )
            t.children(`.${i.slideVisibleClass}`).each((t) => {
              l(r ? c(t).attr("data-swiper-slide-index") : c(t).index());
            });
          else if (d > 1) for (let t = n; t < n + d; t += 1) h(t) && l(t);
          else l(n);
          if (a.loadPrevNext)
            if (d > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
              const t = a.loadPrevNextAmount,
                e = Math.ceil(d),
                i = Math.min(n + e + Math.max(t, e), s.length),
                r = Math.max(n - Math.max(e, t), 0);
              for (let t = n + e; t < i; t += 1) h(t) && l(t);
              for (let t = r; t < n; t += 1) h(t) && l(t);
            } else {
              const e = t.children(`.${i.slideNextClass}`);
              e.length > 0 && l(u(e));
              const s = t.children(`.${i.slidePrevClass}`);
              s.length > 0 && l(u(s));
            }
        }
        function h() {
          const t = r();
          if (!e || e.destroyed) return;
          const i = e.params.lazy.scrollingElement
              ? c(e.params.lazy.scrollingElement)
              : c(t),
            s = i[0] === t,
            n = s ? t.innerWidth : i[0].offsetWidth,
            o = s ? t.innerHeight : i[0].offsetHeight,
            l = e.$el.offset(),
            { rtlTranslate: u } = e;
          let p = !1;
          u && (l.left -= e.$el[0].scrollLeft);
          const f = [
            [l.left, l.top],
            [l.left + e.width, l.top],
            [l.left, l.top + e.height],
            [l.left + e.width, l.top + e.height],
          ];
          for (let t = 0; t < f.length; t += 1) {
            const e = f[t];
            if (e[0] >= 0 && e[0] <= n && e[1] >= 0 && e[1] <= o) {
              if (0 === e[0] && 0 === e[1]) continue;
              p = !0;
            }
          }
          const m = !(
            "touchstart" !== e.touchEvents.start ||
            !e.support.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          p
            ? (d(), i.off("scroll", h, m))
            : a || ((a = !0), i.on("scroll", h, m));
        }
        s("beforeInit", () => {
          e.params.lazy.enabled &&
            e.params.preloadImages &&
            (e.params.preloadImages = !1);
        }),
          s("init", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? h() : d());
          }),
          s("scroll", () => {
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.freeMode.sticky &&
              d();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? h() : d());
          }),
          s("transitionStart", () => {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart && !o)) &&
              (e.params.lazy.checkInView ? h() : d());
          }),
          s("transitionEnd", () => {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              (e.params.lazy.checkInView ? h() : d());
          }),
          s("slideChange", () => {
            const {
              lazy: t,
              cssMode: i,
              watchSlidesProgress: s,
              touchReleaseOnEdges: n,
              resistanceRatio: r,
            } = e.params;
            t.enabled && (i || (s && (n || 0 === r))) && d();
          }),
          s("destroy", () => {
            e.$el &&
              e.$el
                .find(`.${e.params.lazy.loadingClass}`)
                .removeClass(e.params.lazy.loadingClass);
          }),
          Object.assign(e.lazy, { load: d, loadInSlide: l });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        function n(t, e) {
          const i = (function () {
            let t, e, i;
            return (s, n) => {
              for (e = -1, t = s.length; t - e > 1; )
                (i = (t + e) >> 1), s[i] <= n ? (e = i) : (t = i);
              return t;
            };
          })();
          let s, n;
          return (
            (this.x = t),
            (this.y = e),
            (this.lastIndex = t.length - 1),
            (this.interpolate = function (t) {
              return t
                ? ((n = i(this.x, t)),
                  (s = n - 1),
                  ((t - this.x[s]) * (this.y[n] - this.y[s])) /
                    (this.x[n] - this.x[s]) +
                    this.y[s])
                : 0;
            }),
            this
          );
        }
        function r() {
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        }
        i({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (e.controller = { control: void 0 }),
          s("beforeInit", () => {
            e.controller.control = e.params.controller.control;
          }),
          s("update", () => {
            r();
          }),
          s("resize", () => {
            r();
          }),
          s("observerUpdate", () => {
            r();
          }),
          s("setTranslate", (t, i, s) => {
            e.controller.control && e.controller.setTranslate(i, s);
          }),
          s("setTransition", (t, i, s) => {
            e.controller.control && e.controller.setTransition(i, s);
          }),
          Object.assign(e.controller, {
            setTranslate: function (t, i) {
              const s = e.controller.control;
              let r, a;
              const o = e.constructor;
              function l(t) {
                const i = e.rtlTranslate ? -e.translate : e.translate;
                "slide" === e.params.controller.by &&
                  ((function (t) {
                    e.controller.spline ||
                      (e.controller.spline = e.params.loop
                        ? new n(e.slidesGrid, t.slidesGrid)
                        : new n(e.snapGrid, t.snapGrid));
                  })(t),
                  (a = -e.controller.spline.interpolate(-i))),
                  (a && "container" !== e.params.controller.by) ||
                    ((r =
                      (t.maxTranslate() - t.minTranslate()) /
                      (e.maxTranslate() - e.minTranslate())),
                    (a = (i - e.minTranslate()) * r + t.minTranslate())),
                  e.params.controller.inverse && (a = t.maxTranslate() - a),
                  t.updateProgress(a),
                  t.setTranslate(a, e),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              }
              if (Array.isArray(s))
                for (let t = 0; t < s.length; t += 1)
                  s[t] !== i && s[t] instanceof o && l(s[t]);
              else s instanceof o && i !== s && l(s);
            },
            setTransition: function (t, i) {
              const s = e.constructor,
                n = e.controller.control;
              let r;
              function a(i) {
                i.setTransition(t, e),
                  0 !== t &&
                    (i.transitionStart(),
                    i.params.autoHeight &&
                      h(() => {
                        i.updateAutoHeight();
                      }),
                    i.$wrapperEl.transitionEnd(() => {
                      n &&
                        (i.params.loop &&
                          "slide" === e.params.controller.by &&
                          i.loopFix(),
                        i.transitionEnd());
                    }));
              }
              if (Array.isArray(n))
                for (r = 0; r < n.length; r += 1)
                  n[r] !== i && n[r] instanceof s && a(n[r]);
              else n instanceof s && i !== n && a(n);
            },
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
          },
        }),
          (e.a11y = { clicked: !1 });
        let n = null;
        function r(t) {
          const e = n;
          0 !== e.length && (e.html(""), e.html(t));
        }
        function a(t) {
          t.attr("tabIndex", "0");
        }
        function o(t) {
          t.attr("tabIndex", "-1");
        }
        function l(t, e) {
          t.attr("role", e);
        }
        function d(t, e) {
          t.attr("aria-roledescription", e);
        }
        function h(t, e) {
          t.attr("aria-label", e);
        }
        function u(t) {
          t.attr("aria-disabled", !0);
        }
        function p(t) {
          t.attr("aria-disabled", !1);
        }
        function f(t) {
          if (13 !== t.keyCode && 32 !== t.keyCode) return;
          const i = e.params.a11y,
            s = c(t.target);
          e.navigation &&
            e.navigation.$nextEl &&
            s.is(e.navigation.$nextEl) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)),
            e.navigation &&
              e.navigation.$prevEl &&
              s.is(e.navigation.$prevEl) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? r(i.firstSlideMessage) : r(i.prevSlideMessage)),
            e.pagination &&
              s.is(U(e.params.pagination.bulletClass)) &&
              s[0].click();
        }
        function m() {
          return (
            e.pagination && e.pagination.bullets && e.pagination.bullets.length
          );
        }
        function g() {
          return m() && e.params.pagination.clickable;
        }
        const v = (t, e, i) => {
            a(t),
              "BUTTON" !== t[0].tagName && (l(t, "button"), t.on("keydown", f)),
              h(t, i),
              (function (t, e) {
                t.attr("aria-controls", e);
              })(t, e);
          },
          y = () => {
            e.a11y.clicked = !0;
          },
          w = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                e.destroyed || (e.a11y.clicked = !1);
              });
            });
          },
          b = (t) => {
            if (e.a11y.clicked) return;
            const i = t.target.closest(`.${e.params.slideClass}`);
            if (!i || !e.slides.includes(i)) return;
            const s = e.slides.indexOf(i) === e.activeIndex,
              n =
                e.params.watchSlidesProgress &&
                e.visibleSlides &&
                e.visibleSlides.includes(i);
            s ||
              n ||
              (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
              (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
              e.slideTo(e.slides.indexOf(i), 0));
          },
          x = () => {
            const t = e.params.a11y;
            t.itemRoleDescriptionMessage &&
              d(c(e.slides), t.itemRoleDescriptionMessage),
              t.slideRole && l(c(e.slides), t.slideRole);
            const i = e.params.loop
              ? e.slides.filter(
                  (t) => !t.classList.contains(e.params.slideDuplicateClass)
                ).length
              : e.slides.length;
            t.slideLabelMessage &&
              e.slides.each((s, n) => {
                const r = c(s),
                  a = e.params.loop
                    ? parseInt(r.attr("data-swiper-slide-index"), 10)
                    : n;
                h(
                  r,
                  t.slideLabelMessage
                    .replace(/\{\{index\}\}/, a + 1)
                    .replace(/\{\{slidesLength\}\}/, i)
                );
              });
          };
        s("beforeInit", () => {
          n = c(
            `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
          );
        }),
          s("afterInit", () => {
            e.params.a11y.enabled &&
              (() => {
                const t = e.params.a11y;
                e.$el.append(n);
                const i = e.$el;
                t.containerRoleDescriptionMessage &&
                  d(i, t.containerRoleDescriptionMessage),
                  t.containerMessage && h(i, t.containerMessage);
                const s = e.$wrapperEl,
                  r =
                    t.id ||
                    s.attr("id") ||
                    `swiper-wrapper-${
                      ((a = 16),
                      void 0 === a && (a = 16),
                      "x"
                        .repeat(a)
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        ))
                    }`;
                var a;
                const o =
                  e.params.autoplay && e.params.autoplay.enabled
                    ? "off"
                    : "polite";
                var l;
                let c, u;
                (l = r),
                  s.attr("id", l),
                  (function (t, e) {
                    t.attr("aria-live", e);
                  })(s, o),
                  x(),
                  e.navigation &&
                    e.navigation.$nextEl &&
                    (c = e.navigation.$nextEl),
                  e.navigation &&
                    e.navigation.$prevEl &&
                    (u = e.navigation.$prevEl),
                  c && c.length && v(c, r, t.nextSlideMessage),
                  u && u.length && v(u, r, t.prevSlideMessage),
                  g() &&
                    e.pagination.$el.on(
                      "keydown",
                      U(e.params.pagination.bulletClass),
                      f
                    ),
                  e.$el.on("focus", b, !0),
                  e.$el.on("pointerdown", y, !0),
                  e.$el.on("pointerup", w, !0);
              })();
          }),
          s(
            "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
            () => {
              e.params.a11y.enabled && x();
            }
          ),
          s("fromEdge toEdge afterInit lock unlock", () => {
            e.params.a11y.enabled &&
              (function () {
                if (e.params.loop || e.params.rewind || !e.navigation) return;
                const { $nextEl: t, $prevEl: i } = e.navigation;
                i &&
                  i.length > 0 &&
                  (e.isBeginning ? (u(i), o(i)) : (p(i), a(i))),
                  t && t.length > 0 && (e.isEnd ? (u(t), o(t)) : (p(t), a(t)));
              })();
          }),
          s("paginationUpdate", () => {
            e.params.a11y.enabled &&
              (function () {
                const t = e.params.a11y;
                m() &&
                  e.pagination.bullets.each((i) => {
                    const s = c(i);
                    e.params.pagination.clickable &&
                      (a(s),
                      e.params.pagination.renderBullet ||
                        (l(s, "button"),
                        h(
                          s,
                          t.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            s.index() + 1
                          )
                        ))),
                      s.is(`.${e.params.pagination.bulletActiveClass}`)
                        ? s.attr("aria-current", "true")
                        : s.removeAttr("aria-current");
                  });
              })();
          }),
          s("destroy", () => {
            e.params.a11y.enabled &&
              (function () {
                let t, i;
                n && n.length > 0 && n.remove(),
                  e.navigation &&
                    e.navigation.$nextEl &&
                    (t = e.navigation.$nextEl),
                  e.navigation &&
                    e.navigation.$prevEl &&
                    (i = e.navigation.$prevEl),
                  t && t.off("keydown", f),
                  i && i.off("keydown", f),
                  g() &&
                    e.pagination.$el.off(
                      "keydown",
                      U(e.params.pagination.bulletClass),
                      f
                    ),
                  e.$el.off("focus", b, !0),
                  e.$el.off("pointerdown", y, !0),
                  e.$el.off("pointerup", w, !0);
              })();
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1,
          },
        });
        let n = !1,
          a = {};
        const o = (t) =>
            t
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          l = (t) => {
            const e = r();
            let i;
            i = t ? new URL(t) : e.location;
            const s = i.pathname
                .slice(1)
                .split("/")
                .filter((t) => "" !== t),
              n = s.length;
            return { key: s[n - 2], value: s[n - 1] };
          },
          c = (t, i) => {
            const s = r();
            if (!n || !e.params.history.enabled) return;
            let a;
            a = e.params.url ? new URL(e.params.url) : s.location;
            const l = e.slides.eq(i);
            let c = o(l.attr("data-history"));
            if (e.params.history.root.length > 0) {
              let i = e.params.history.root;
              "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)),
                (c = `${i}/${t}/${c}`);
            } else a.pathname.includes(t) || (c = `${t}/${c}`);
            e.params.history.keepQuery && (c += a.search);
            const d = s.history.state;
            (d && d.value === c) ||
              (e.params.history.replaceState
                ? s.history.replaceState({ value: c }, null, c)
                : s.history.pushState({ value: c }, null, c));
          },
          d = (t, i, s) => {
            if (i)
              for (let n = 0, r = e.slides.length; n < r; n += 1) {
                const r = e.slides.eq(n);
                if (
                  o(r.attr("data-history")) === i &&
                  !r.hasClass(e.params.slideDuplicateClass)
                ) {
                  const i = r.index();
                  e.slideTo(i, t, s);
                }
              }
            else e.slideTo(0, t, s);
          },
          h = () => {
            (a = l(e.params.url)), d(e.params.speed, a.value, !1);
          };
        s("init", () => {
          e.params.history.enabled &&
            (() => {
              const t = r();
              if (e.params.history) {
                if (!t.history || !t.history.pushState)
                  return (
                    (e.params.history.enabled = !1),
                    void (e.params.hashNavigation.enabled = !0)
                  );
                (n = !0),
                  (a = l(e.params.url)),
                  (a.key || a.value) &&
                    (d(0, a.value, e.params.runCallbacksOnInit),
                    e.params.history.replaceState ||
                      t.addEventListener("popstate", h));
              }
            })();
        }),
          s("destroy", () => {
            e.params.history.enabled &&
              (() => {
                const t = r();
                e.params.history.replaceState ||
                  t.removeEventListener("popstate", h);
              })();
          }),
          s("transitionEnd _freeModeNoMomentumRelease", () => {
            n && c(e.params.history.key, e.activeIndex);
          }),
          s("slideChange", () => {
            n && e.params.cssMode && c(e.params.history.key, e.activeIndex);
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, emit: n, on: a } = t,
          o = !1;
        const l = s(),
          d = r();
        i({
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        });
        const h = () => {
            n("hashChange");
            const t = l.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
              const i = e.$wrapperEl
                .children(`.${e.params.slideClass}[data-hash="${t}"]`)
                .index();
              if (void 0 === i) return;
              e.slideTo(i);
            }
          },
          u = () => {
            if (o && e.params.hashNavigation.enabled)
              if (
                e.params.hashNavigation.replaceState &&
                d.history &&
                d.history.replaceState
              )
                d.history.replaceState(
                  null,
                  null,
                  `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
                ),
                  n("hashSet");
              else {
                const t = e.slides.eq(e.activeIndex),
                  i = t.attr("data-hash") || t.attr("data-history");
                (l.location.hash = i || ""), n("hashSet");
              }
          };
        a("init", () => {
          e.params.hashNavigation.enabled &&
            (() => {
              if (
                !e.params.hashNavigation.enabled ||
                (e.params.history && e.params.history.enabled)
              )
                return;
              o = !0;
              const t = l.location.hash.replace("#", "");
              if (t) {
                const i = 0;
                for (let s = 0, n = e.slides.length; s < n; s += 1) {
                  const n = e.slides.eq(s);
                  if (
                    (n.attr("data-hash") || n.attr("data-history")) === t &&
                    !n.hasClass(e.params.slideDuplicateClass)
                  ) {
                    const t = n.index();
                    e.slideTo(t, i, e.params.runCallbacksOnInit, !0);
                  }
                }
              }
              e.params.hashNavigation.watchState && c(d).on("hashchange", h);
            })();
        }),
          a("destroy", () => {
            e.params.hashNavigation.enabled &&
              e.params.hashNavigation.watchState &&
              c(d).off("hashchange", h);
          }),
          a("transitionEnd _freeModeNoMomentumRelease", () => {
            o && u();
          }),
          a("slideChange", () => {
            o && e.params.cssMode && u();
          });
      },
      function (t) {
        let e,
          { swiper: i, extendParams: n, on: r, emit: a } = t;
        function o() {
          if (!i.size)
            return (i.autoplay.running = !1), void (i.autoplay.paused = !1);
          const t = i.slides.eq(i.activeIndex);
          let s = i.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (s = t.attr("data-swiper-autoplay") || i.params.autoplay.delay),
            clearTimeout(e),
            (e = h(() => {
              let t;
              i.params.autoplay.reverseDirection
                ? i.params.loop
                  ? (i.loopFix(),
                    (t = i.slidePrev(i.params.speed, !0, !0)),
                    a("autoplay"))
                  : i.isBeginning
                  ? i.params.autoplay.stopOnLastSlide
                    ? c()
                    : ((t = i.slideTo(
                        i.slides.length - 1,
                        i.params.speed,
                        !0,
                        !0
                      )),
                      a("autoplay"))
                  : ((t = i.slidePrev(i.params.speed, !0, !0)), a("autoplay"))
                : i.params.loop
                ? (i.loopFix(),
                  (t = i.slideNext(i.params.speed, !0, !0)),
                  a("autoplay"))
                : i.isEnd
                ? i.params.autoplay.stopOnLastSlide
                  ? c()
                  : ((t = i.slideTo(0, i.params.speed, !0, !0)), a("autoplay"))
                : ((t = i.slideNext(i.params.speed, !0, !0)), a("autoplay")),
                ((i.params.cssMode && i.autoplay.running) || !1 === t) && o();
            }, s));
        }
        function l() {
          return (
            void 0 === e &&
            !i.autoplay.running &&
            ((i.autoplay.running = !0), a("autoplayStart"), o(), !0)
          );
        }
        function c() {
          return (
            !!i.autoplay.running &&
            void 0 !== e &&
            (e && (clearTimeout(e), (e = void 0)),
            (i.autoplay.running = !1),
            a("autoplayStop"),
            !0)
          );
        }
        function d(t) {
          i.autoplay.running &&
            (i.autoplay.paused ||
              (e && clearTimeout(e),
              (i.autoplay.paused = !0),
              0 !== t && i.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    i.$wrapperEl[0].addEventListener(t, p);
                  })
                : ((i.autoplay.paused = !1), o())));
        }
        function u() {
          const t = s();
          "hidden" === t.visibilityState && i.autoplay.running && d(),
            "visible" === t.visibilityState &&
              i.autoplay.paused &&
              (o(), (i.autoplay.paused = !1));
        }
        function p(t) {
          i &&
            !i.destroyed &&
            i.$wrapperEl &&
            t.target === i.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              i.$wrapperEl[0].removeEventListener(t, p);
            }),
            (i.autoplay.paused = !1),
            i.autoplay.running ? o() : c());
        }
        function f() {
          i.params.autoplay.disableOnInteraction
            ? c()
            : (a("autoplayPause"), d()),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              i.$wrapperEl[0].removeEventListener(t, p);
            });
        }
        function m() {
          i.params.autoplay.disableOnInteraction ||
            ((i.autoplay.paused = !1), a("autoplayResume"), o());
        }
        (i.autoplay = { running: !1, paused: !1 }),
          n({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          r("init", () => {
            i.params.autoplay.enabled &&
              (l(),
              s().addEventListener("visibilitychange", u),
              i.params.autoplay.pauseOnMouseEnter &&
                (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)));
          }),
          r("beforeTransitionStart", (t, e, s) => {
            i.autoplay.running &&
              (s || !i.params.autoplay.disableOnInteraction
                ? i.autoplay.pause(e)
                : c());
          }),
          r("sliderFirstMove", () => {
            i.autoplay.running &&
              (i.params.autoplay.disableOnInteraction ? c() : d());
          }),
          r("touchEnd", () => {
            i.params.cssMode &&
              i.autoplay.paused &&
              !i.params.autoplay.disableOnInteraction &&
              o();
          }),
          r("destroy", () => {
            i.$el.off("mouseenter", f),
              i.$el.off("mouseleave", m),
              i.autoplay.running && c(),
              s().removeEventListener("visibilitychange", u);
          }),
          Object.assign(i.autoplay, { pause: d, run: o, start: l, stop: c });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let n = !1,
          r = !1;
        function a() {
          const t = e.thumbs.swiper;
          if (!t || t.destroyed) return;
          const i = t.clickedIndex,
            s = t.clickedSlide;
          if (s && c(s).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
          if (null == i) return;
          let n;
          if (
            ((n = t.params.loop
              ? parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10)
              : i),
            e.params.loop)
          ) {
            let t = e.activeIndex;
            e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
              (e.loopFix(),
              (e._clientLeft = e.$wrapperEl[0].clientLeft),
              (t = e.activeIndex));
            const i = e.slides
                .eq(t)
                .prevAll(`[data-swiper-slide-index="${n}"]`)
                .eq(0)
                .index(),
              s = e.slides
                .eq(t)
                .nextAll(`[data-swiper-slide-index="${n}"]`)
                .eq(0)
                .index();
            n = void 0 === i ? s : void 0 === s ? i : s - t < t - i ? s : i;
          }
          e.slideTo(n);
        }
        function o() {
          const { thumbs: t } = e.params;
          if (n) return !1;
          n = !0;
          const i = e.constructor;
          if (t.swiper instanceof i)
            (e.thumbs.swiper = t.swiper),
              Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (f(t.swiper)) {
            const s = Object.assign({}, t.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (e.thumbs.swiper = new i(s)),
              (r = !0);
          }
          return (
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", a),
            !0
          );
        }
        function l(t) {
          const i = e.thumbs.swiper;
          if (!i || i.destroyed) return;
          const s =
            "auto" === i.params.slidesPerView
              ? i.slidesPerViewDynamic()
              : i.params.slidesPerView;
          let n = 1;
          const r = e.params.thumbs.slideThumbActiveClass;
          if (
            (e.params.slidesPerView > 1 &&
              !e.params.centeredSlides &&
              (n = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (n = 1),
            (n = Math.floor(n)),
            i.slides.removeClass(r),
            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
          )
            for (let t = 0; t < n; t += 1)
              i.$wrapperEl
                .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
                .addClass(r);
          else
            for (let t = 0; t < n; t += 1)
              i.slides.eq(e.realIndex + t).addClass(r);
          const a = e.params.thumbs.autoScrollOffset,
            o = a && !i.params.loop;
          if (e.realIndex !== i.realIndex || o) {
            let n,
              r,
              l = i.activeIndex;
            if (i.params.loop) {
              i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                (i.loopFix(),
                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                (l = i.activeIndex));
              const t = i.slides
                  .eq(l)
                  .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index(),
                s = i.slides
                  .eq(l)
                  .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index();
              (n =
                void 0 === t
                  ? s
                  : void 0 === s
                  ? t
                  : s - l == l - t
                  ? i.params.slidesPerGroup > 1
                    ? s
                    : l
                  : s - l < l - t
                  ? s
                  : t),
                (r = e.activeIndex > e.previousIndex ? "next" : "prev");
            } else
              (n = e.realIndex), (r = n > e.previousIndex ? "next" : "prev");
            o && (n += "next" === r ? a : -1 * a),
              i.visibleSlidesIndexes &&
                i.visibleSlidesIndexes.indexOf(n) < 0 &&
                (i.params.centeredSlides
                  ? (n =
                      n > l
                        ? n - Math.floor(s / 2) + 1
                        : n + Math.floor(s / 2) - 1)
                  : n > l && i.params.slidesPerGroup,
                i.slideTo(n, t ? 0 : void 0));
          }
        }
        (e.thumbs = { swiper: null }),
          s("beforeInit", () => {
            const { thumbs: t } = e.params;
            t && t.swiper && (o(), l(!0));
          }),
          s("slideChange update resize observerUpdate", () => {
            l();
          }),
          s("setTransition", (t, i) => {
            const s = e.thumbs.swiper;
            s && !s.destroyed && s.setTransition(i);
          }),
          s("beforeDestroy", () => {
            const t = e.thumbs.swiper;
            t && !t.destroyed && r && t.destroy();
          }),
          Object.assign(e.thumbs, { init: o, update: l });
      },
      function (t) {
        let { swiper: e, extendParams: i, emit: s, once: n } = t;
        i({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(e, {
            freeMode: {
              onTouchStart: function () {
                const t = e.getTranslate();
                e.setTranslate(t),
                  e.setTransition(0),
                  (e.touchEventsData.velocities.length = 0),
                  e.freeMode.onTouchEnd({
                    currentPos: e.rtl ? e.translate : -e.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: t, touches: i } = e;
                0 === t.velocities.length &&
                  t.velocities.push({
                    position: i[e.isHorizontal() ? "startX" : "startY"],
                    time: t.touchStartTime,
                  }),
                  t.velocities.push({
                    position: i[e.isHorizontal() ? "currentX" : "currentY"],
                    time: u(),
                  });
              },
              onTouchEnd: function (t) {
                let { currentPos: i } = t;
                const {
                    params: r,
                    $wrapperEl: a,
                    rtlTranslate: o,
                    snapGrid: l,
                    touchEventsData: c,
                  } = e,
                  d = u() - c.touchStartTime;
                if (i < -e.minTranslate()) e.slideTo(e.activeIndex);
                else if (i > -e.maxTranslate())
                  e.slides.length < l.length
                    ? e.slideTo(l.length - 1)
                    : e.slideTo(e.slides.length - 1);
                else {
                  if (r.freeMode.momentum) {
                    if (c.velocities.length > 1) {
                      const t = c.velocities.pop(),
                        i = c.velocities.pop(),
                        s = t.position - i.position,
                        n = t.time - i.time;
                      (e.velocity = s / n),
                        (e.velocity /= 2),
                        Math.abs(e.velocity) < r.freeMode.minimumVelocity &&
                          (e.velocity = 0),
                        (n > 150 || u() - t.time > 300) && (e.velocity = 0);
                    } else e.velocity = 0;
                    (e.velocity *= r.freeMode.momentumVelocityRatio),
                      (c.velocities.length = 0);
                    let t = 1e3 * r.freeMode.momentumRatio;
                    const i = e.velocity * t;
                    let d = e.translate + i;
                    o && (d = -d);
                    let h,
                      p = !1;
                    const f =
                      20 *
                      Math.abs(e.velocity) *
                      r.freeMode.momentumBounceRatio;
                    let m;
                    if (d < e.maxTranslate())
                      r.freeMode.momentumBounce
                        ? (d + e.maxTranslate() < -f &&
                            (d = e.maxTranslate() - f),
                          (h = e.maxTranslate()),
                          (p = !0),
                          (c.allowMomentumBounce = !0))
                        : (d = e.maxTranslate()),
                        r.loop && r.centeredSlides && (m = !0);
                    else if (d > e.minTranslate())
                      r.freeMode.momentumBounce
                        ? (d - e.minTranslate() > f &&
                            (d = e.minTranslate() + f),
                          (h = e.minTranslate()),
                          (p = !0),
                          (c.allowMomentumBounce = !0))
                        : (d = e.minTranslate()),
                        r.loop && r.centeredSlides && (m = !0);
                    else if (r.freeMode.sticky) {
                      let t;
                      for (let e = 0; e < l.length; e += 1)
                        if (l[e] > -d) {
                          t = e;
                          break;
                        }
                      (d =
                        Math.abs(l[t] - d) < Math.abs(l[t - 1] - d) ||
                        "next" === e.swipeDirection
                          ? l[t]
                          : l[t - 1]),
                        (d = -d);
                    }
                    if (
                      (m &&
                        n("transitionEnd", () => {
                          e.loopFix();
                        }),
                      0 !== e.velocity)
                    ) {
                      if (
                        ((t = o
                          ? Math.abs((-d - e.translate) / e.velocity)
                          : Math.abs((d - e.translate) / e.velocity)),
                        r.freeMode.sticky)
                      ) {
                        const i = Math.abs((o ? -d : d) - e.translate),
                          s = e.slidesSizesGrid[e.activeIndex];
                        t =
                          i < s
                            ? r.speed
                            : i < 2 * s
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                      }
                    } else if (r.freeMode.sticky)
                      return void e.slideToClosest();
                    r.freeMode.momentumBounce && p
                      ? (e.updateProgress(h),
                        e.setTransition(t),
                        e.setTranslate(d),
                        e.transitionStart(!0, e.swipeDirection),
                        (e.animating = !0),
                        a.transitionEnd(() => {
                          e &&
                            !e.destroyed &&
                            c.allowMomentumBounce &&
                            (s("momentumBounce"),
                            e.setTransition(r.speed),
                            setTimeout(() => {
                              e.setTranslate(h),
                                a.transitionEnd(() => {
                                  e && !e.destroyed && e.transitionEnd();
                                });
                            }, 0));
                        }))
                      : e.velocity
                      ? (s("_freeModeNoMomentumRelease"),
                        e.updateProgress(d),
                        e.setTransition(t),
                        e.setTranslate(d),
                        e.transitionStart(!0, e.swipeDirection),
                        e.animating ||
                          ((e.animating = !0),
                          a.transitionEnd(() => {
                            e && !e.destroyed && e.transitionEnd();
                          })))
                      : e.updateProgress(d),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses();
                  } else {
                    if (r.freeMode.sticky) return void e.slideToClosest();
                    r.freeMode && s("_freeModeNoMomentumRelease");
                  }
                  (!r.freeMode.momentum || d >= r.longSwipesMs) &&
                    (e.updateProgress(),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (t) {
        let e,
          i,
          s,
          { swiper: n, extendParams: r } = t;
        r({ grid: { rows: 1, fill: "column" } }),
          (n.grid = {
            initSlides: (t) => {
              const { slidesPerView: r } = n.params,
                { rows: a, fill: o } = n.params.grid;
              (i = e / a),
                (s = Math.floor(t / a)),
                (e = Math.floor(t / a) === t / a ? t : Math.ceil(t / a) * a),
                "auto" !== r && "row" === o && (e = Math.max(e, r * a));
            },
            updateSlide: (t, r, a, o) => {
              const { slidesPerGroup: l, spaceBetween: c } = n.params,
                { rows: d, fill: h } = n.params.grid;
              let u, p, f;
              if ("row" === h && l > 1) {
                const i = Math.floor(t / (l * d)),
                  s = t - d * l * i,
                  n = 0 === i ? l : Math.min(Math.ceil((a - i * d * l) / d), l);
                (f = Math.floor(s / n)),
                  (p = s - f * n + i * l),
                  (u = p + (f * e) / d),
                  r.css({ "-webkit-order": u, order: u });
              } else
                "column" === h
                  ? ((p = Math.floor(t / d)),
                    (f = t - p * d),
                    (p > s || (p === s && f === d - 1)) &&
                      ((f += 1), f >= d && ((f = 0), (p += 1))))
                  : ((f = Math.floor(t / i)), (p = t - f * i));
              r.css(o("margin-top"), 0 !== f ? c && `${c}px` : "");
            },
            updateWrapperSize: (t, i, s) => {
              const {
                  spaceBetween: r,
                  centeredSlides: a,
                  roundLengths: o,
                } = n.params,
                { rows: l } = n.params.grid;
              if (
                ((n.virtualSize = (t + r) * e),
                (n.virtualSize = Math.ceil(n.virtualSize / l) - r),
                n.$wrapperEl.css({ [s("width")]: `${n.virtualSize + r}px` }),
                a)
              ) {
                i.splice(0, i.length);
                const t = [];
                for (let e = 0; e < i.length; e += 1) {
                  let s = i[e];
                  o && (s = Math.floor(s)),
                    i[e] < n.virtualSize + i[0] && t.push(s);
                }
                i.push(...t);
              }
            },
          });
      },
      function (t) {
        let { swiper: e } = t;
        Object.assign(e, {
          appendSlide: Q.bind(e),
          prependSlide: K.bind(e),
          addSlide: Z.bind(e),
          removeSlide: J.bind(e),
          removeAllSlides: tt.bind(e),
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({ fadeEffect: { crossFade: !1, transformEl: null } }),
          et({
            effect: "fade",
            swiper: e,
            on: s,
            setTranslate: () => {
              const { slides: t } = e,
                i = e.params.fadeEffect;
              for (let s = 0; s < t.length; s += 1) {
                const t = e.slides.eq(s);
                let n = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (n -= e.translate);
                let r = 0;
                e.isHorizontal() || ((r = n), (n = 0));
                const a = e.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(t[0].progress), 0)
                  : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                it(i, t)
                  .css({ opacity: a })
                  .transform(`translate3d(${n}px, ${r}px, 0px)`);
              }
            },
            setTransition: (t) => {
              const { transformEl: i } = e.params.fadeEffect;
              (i ? e.slides.find(i) : e.slides).transition(t),
                st({ swiper: e, duration: t, transformEl: i, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !e.params.cssMode,
            }),
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        });
        const n = (t, e, i) => {
          let s = i
              ? t.find(".swiper-slide-shadow-left")
              : t.find(".swiper-slide-shadow-top"),
            n = i
              ? t.find(".swiper-slide-shadow-right")
              : t.find(".swiper-slide-shadow-bottom");
          0 === s.length &&
            ((s = c(
              `<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`
            )),
            t.append(s)),
            0 === n.length &&
              ((n = c(
                `<div class="swiper-slide-shadow-${
                  i ? "right" : "bottom"
                }"></div>`
              )),
              t.append(n)),
            s.length && (s[0].style.opacity = Math.max(-e, 0)),
            n.length && (n[0].style.opacity = Math.max(e, 0));
        };
        et({
          effect: "cube",
          swiper: e,
          on: s,
          setTranslate: () => {
            const {
                $el: t,
                $wrapperEl: i,
                slides: s,
                width: r,
                height: a,
                rtlTranslate: o,
                size: l,
                browser: d,
              } = e,
              h = e.params.cubeEffect,
              u = e.isHorizontal(),
              p = e.virtual && e.params.virtual.enabled;
            let f,
              m = 0;
            h.shadow &&
              (u
                ? ((f = i.find(".swiper-cube-shadow")),
                  0 === f.length &&
                    ((f = c('<div class="swiper-cube-shadow"></div>')),
                    i.append(f)),
                  f.css({ height: `${r}px` }))
                : ((f = t.find(".swiper-cube-shadow")),
                  0 === f.length &&
                    ((f = c('<div class="swiper-cube-shadow"></div>')),
                    t.append(f))));
            for (let t = 0; t < s.length; t += 1) {
              const e = s.eq(t);
              let i = t;
              p && (i = parseInt(e.attr("data-swiper-slide-index"), 10));
              let r = 90 * i,
                a = Math.floor(r / 360);
              o && ((r = -r), (a = Math.floor(-r / 360)));
              const c = Math.max(Math.min(e[0].progress, 1), -1);
              let d = 0,
                f = 0,
                g = 0;
              i % 4 == 0
                ? ((d = 4 * -a * l), (g = 0))
                : (i - 1) % 4 == 0
                ? ((d = 0), (g = 4 * -a * l))
                : (i - 2) % 4 == 0
                ? ((d = l + 4 * a * l), (g = l))
                : (i - 3) % 4 == 0 && ((d = -l), (g = 3 * l + 4 * l * a)),
                o && (d = -d),
                u || ((f = d), (d = 0));
              const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
                u ? r : 0
              }deg) translate3d(${d}px, ${f}px, ${g}px)`;
              c <= 1 &&
                c > -1 &&
                ((m = 90 * i + 90 * c), o && (m = 90 * -i - 90 * c)),
                e.transform(v),
                h.slideShadows && n(e, c, u);
            }
            if (
              (i.css({
                "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                "transform-origin": `50% 50% -${l / 2}px`,
              }),
              h.shadow)
            )
              if (u)
                f.transform(
                  `translate3d(0px, ${r / 2 + h.shadowOffset}px, ${
                    -r / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`
                );
              else {
                const t = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                  e =
                    1.5 -
                    (Math.sin((2 * t * Math.PI) / 360) / 2 +
                      Math.cos((2 * t * Math.PI) / 360) / 2),
                  i = h.shadowScale,
                  s = h.shadowScale / e,
                  n = h.shadowOffset;
                f.transform(
                  `scale3d(${i}, 1, ${s}) translate3d(0px, ${a / 2 + n}px, ${
                    -a / 2 / s
                  }px) rotateX(-90deg)`
                );
              }
            const g = d.isSafari || d.isWebView ? -l / 2 : 0;
            i.transform(
              `translate3d(0px,0,${g}px) rotateX(${
                e.isHorizontal() ? 0 : m
              }deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`
            ),
              i[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
          },
          setTransition: (t) => {
            const { $el: i, slides: s } = e;
            s
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
              e.params.cubeEffect.shadow &&
                !e.isHorizontal() &&
                i.find(".swiper-cube-shadow").transition(t);
          },
          recreateShadows: () => {
            const t = e.isHorizontal();
            e.slides.each((e) => {
              const i = Math.max(Math.min(e.progress, 1), -1);
              n(c(e), i, t);
            });
          },
          getEffectParams: () => e.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0,
            transformEl: null,
          },
        });
        const n = (t, i, s) => {
          let n = e.isHorizontal()
              ? t.find(".swiper-slide-shadow-left")
              : t.find(".swiper-slide-shadow-top"),
            r = e.isHorizontal()
              ? t.find(".swiper-slide-shadow-right")
              : t.find(".swiper-slide-shadow-bottom");
          0 === n.length && (n = nt(s, t, e.isHorizontal() ? "left" : "top")),
            0 === r.length &&
              (r = nt(s, t, e.isHorizontal() ? "right" : "bottom")),
            n.length && (n[0].style.opacity = Math.max(-i, 0)),
            r.length && (r[0].style.opacity = Math.max(i, 0));
        };
        et({
          effect: "flip",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t, rtlTranslate: i } = e,
              s = e.params.flipEffect;
            for (let r = 0; r < t.length; r += 1) {
              const a = t.eq(r);
              let o = a[0].progress;
              e.params.flipEffect.limitRotation &&
                (o = Math.max(Math.min(a[0].progress, 1), -1));
              const l = a[0].swiperSlideOffset;
              let c = -180 * o,
                d = 0,
                h = e.params.cssMode ? -l - e.translate : -l,
                u = 0;
              e.isHorizontal()
                ? i && (c = -c)
                : ((u = h), (h = 0), (d = -c), (c = 0)),
                (a[0].style.zIndex = -Math.abs(Math.round(o)) + t.length),
                s.slideShadows && n(a, o, s);
              const p = `translate3d(${h}px, ${u}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
              it(s, a).transform(p);
            }
          },
          setTransition: (t) => {
            const { transformEl: i } = e.params.flipEffect;
            (i ? e.slides.find(i) : e.slides)
              .transition(t)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(t),
              st({ swiper: e, duration: t, transformEl: i });
          },
          recreateShadows: () => {
            const t = e.params.flipEffect;
            e.slides.each((i) => {
              const s = c(i);
              let r = s[0].progress;
              e.params.flipEffect.limitRotation &&
                (r = Math.max(Math.min(i.progress, 1), -1)),
                n(s, r, t);
            });
          },
          getEffectParams: () => e.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          et({
            effect: "coverflow",
            swiper: e,
            on: s,
            setTranslate: () => {
              const { width: t, height: i, slides: s, slidesSizesGrid: n } = e,
                r = e.params.coverflowEffect,
                a = e.isHorizontal(),
                o = e.translate,
                l = a ? t / 2 - o : i / 2 - o,
                c = a ? r.rotate : -r.rotate,
                d = r.depth;
              for (let t = 0, e = s.length; t < e; t += 1) {
                const e = s.eq(t),
                  i = n[t],
                  o = (l - e[0].swiperSlideOffset - i / 2) / i,
                  h =
                    "function" == typeof r.modifier
                      ? r.modifier(o)
                      : o * r.modifier;
                let u = a ? c * h : 0,
                  p = a ? 0 : c * h,
                  f = -d * Math.abs(h),
                  m = r.stretch;
                "string" == typeof m &&
                  -1 !== m.indexOf("%") &&
                  (m = (parseFloat(r.stretch) / 100) * i);
                let g = a ? 0 : m * h,
                  v = a ? m * h : 0,
                  y = 1 - (1 - r.scale) * Math.abs(h);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(u) < 0.001 && (u = 0),
                  Math.abs(p) < 0.001 && (p = 0),
                  Math.abs(y) < 0.001 && (y = 0);
                const w = `translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${y})`;
                if (
                  (it(r, e).transform(w),
                  (e[0].style.zIndex = 1 - Math.abs(Math.round(h))),
                  r.slideShadows)
                ) {
                  let t = a
                      ? e.find(".swiper-slide-shadow-left")
                      : e.find(".swiper-slide-shadow-top"),
                    i = a
                      ? e.find(".swiper-slide-shadow-right")
                      : e.find(".swiper-slide-shadow-bottom");
                  0 === t.length && (t = nt(r, e, a ? "left" : "top")),
                    0 === i.length && (i = nt(r, e, a ? "right" : "bottom")),
                    t.length && (t[0].style.opacity = h > 0 ? h : 0),
                    i.length && (i[0].style.opacity = -h > 0 ? -h : 0);
                }
              }
            },
            setTransition: (t) => {
              const { transformEl: i } = e.params.coverflowEffect;
              (i ? e.slides.find(i) : e.slides)
                .transition(t)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(t);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
          },
        });
        const n = (t) => ("string" == typeof t ? t : `${t}px`);
        et({
          effect: "creative",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t, $wrapperEl: i, slidesSizesGrid: s } = e,
              r = e.params.creativeEffect,
              { progressMultiplier: a } = r,
              o = e.params.centeredSlides;
            if (o) {
              const t = s[0] / 2 - e.params.slidesOffsetBefore || 0;
              i.transform(`translateX(calc(50% - ${t}px))`);
            }
            for (let i = 0; i < t.length; i += 1) {
              const s = t.eq(i),
                l = s[0].progress,
                c = Math.min(
                  Math.max(s[0].progress, -r.limitProgress),
                  r.limitProgress
                );
              let d = c;
              o ||
                (d = Math.min(
                  Math.max(s[0].originalProgress, -r.limitProgress),
                  r.limitProgress
                ));
              const h = s[0].swiperSlideOffset,
                u = [e.params.cssMode ? -h - e.translate : -h, 0, 0],
                p = [0, 0, 0];
              let f = !1;
              e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
              let m = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              c < 0
                ? ((m = r.next), (f = !0))
                : c > 0 && ((m = r.prev), (f = !0)),
                u.forEach((t, e) => {
                  u[e] = `calc(${t}px + (${n(m.translate[e])} * ${Math.abs(
                    c * a
                  )}))`;
                }),
                p.forEach((t, e) => {
                  p[e] = m.rotate[e] * Math.abs(c * a);
                }),
                (s[0].style.zIndex = -Math.abs(Math.round(l)) + t.length);
              const g = u.join(", "),
                v = `rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,
                y =
                  d < 0
                    ? `scale(${1 + (1 - m.scale) * d * a})`
                    : `scale(${1 - (1 - m.scale) * d * a})`,
                w =
                  d < 0
                    ? 1 + (1 - m.opacity) * d * a
                    : 1 - (1 - m.opacity) * d * a,
                b = `translate3d(${g}) ${v} ${y}`;
              if ((f && m.shadow) || !f) {
                let t = s.children(".swiper-slide-shadow");
                if ((0 === t.length && m.shadow && (t = nt(r, s)), t.length)) {
                  const e = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                  t[0].style.opacity = Math.min(Math.max(Math.abs(e), 0), 1);
                }
              }
              const x = it(r, s);
              x.transform(b).css({ opacity: w }),
                m.origin && x.css("transform-origin", m.origin);
            }
          },
          setTransition: (t) => {
            const { transformEl: i } = e.params.creativeEffect;
            (i ? e.slides.find(i) : e.slides)
              .transition(t)
              .find(".swiper-slide-shadow")
              .transition(t),
              st({ swiper: e, duration: t, transformEl: i, allSlides: !0 });
          },
          perspective: () => e.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
      },
      function (t) {
        let { swiper: e, extendParams: i, on: s } = t;
        i({
          cardsEffect: {
            slideShadows: !0,
            transformEl: null,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8,
          },
        }),
          et({
            effect: "cards",
            swiper: e,
            on: s,
            setTranslate: () => {
              const { slides: t, activeIndex: i } = e,
                s = e.params.cardsEffect,
                { startTranslate: n, isTouched: r } = e.touchEventsData,
                a = e.translate;
              for (let o = 0; o < t.length; o += 1) {
                const l = t.eq(o),
                  c = l[0].progress,
                  d = Math.min(Math.max(c, -4), 4);
                let h = l[0].swiperSlideOffset;
                e.params.centeredSlides &&
                  !e.params.cssMode &&
                  e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
                  e.params.centeredSlides &&
                    e.params.cssMode &&
                    (h -= t[0].swiperSlideOffset);
                let u = e.params.cssMode ? -h - e.translate : -h,
                  p = 0;
                const f = -100 * Math.abs(d);
                let m = 1,
                  g = -s.perSlideRotate * d,
                  v = s.perSlideOffset - 0.75 * Math.abs(d);
                const y =
                    e.virtual && e.params.virtual.enabled
                      ? e.virtual.from + o
                      : o,
                  w =
                    (y === i || y === i - 1) &&
                    d > 0 &&
                    d < 1 &&
                    (r || e.params.cssMode) &&
                    a < n,
                  b =
                    (y === i || y === i + 1) &&
                    d < 0 &&
                    d > -1 &&
                    (r || e.params.cssMode) &&
                    a > n;
                if (w || b) {
                  const t = (1 - Math.abs((Math.abs(d) - 0.5) / 0.5)) ** 0.5;
                  (g += -28 * d * t),
                    (m += -0.5 * t),
                    (v += 96 * t),
                    (p = -25 * t * Math.abs(d) + "%");
                }
                if (
                  ((u =
                    d < 0
                      ? `calc(${u}px + (${v * Math.abs(d)}%))`
                      : d > 0
                      ? `calc(${u}px + (-${v * Math.abs(d)}%))`
                      : `${u}px`),
                  !e.isHorizontal())
                ) {
                  const t = p;
                  (p = u), (u = t);
                }
                const x =
                    d < 0 ? "" + (1 + (1 - m) * d) : "" + (1 - (1 - m) * d),
                  _ = `\n        translate3d(${u}, ${p}, ${f}px)\n        rotateZ(${
                    s.rotate ? g : 0
                  }deg)\n        scale(${x})\n      `;
                if (s.slideShadows) {
                  let t = l.find(".swiper-slide-shadow");
                  0 === t.length && (t = nt(s, l)),
                    t.length &&
                      (t[0].style.opacity = Math.min(
                        Math.max((Math.abs(d) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (l[0].style.zIndex = -Math.abs(Math.round(c)) + t.length),
                  it(s, l).transform(_);
              }
            },
            setTransition: (t) => {
              const { transformEl: i } = e.params.cardsEffect;
              (i ? e.slides.find(i) : e.slides)
                .transition(t)
                .find(".swiper-slide-shadow")
                .transition(t),
                st({ swiper: e, duration: t, transformEl: i });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !e.params.cssMode,
            }),
          });
      },
    ];
    return V.use(rt), V;
  });
var VanillaTilt = (function () {
  "use strict";
  class t {
    constructor(e, i = {}) {
      if (!(e instanceof Node))
        throw "Can't initialize VanillaTilt because " + e + " is not a Node.";
      (this.width = null),
        (this.height = null),
        (this.clientWidth = null),
        (this.clientHeight = null),
        (this.left = null),
        (this.top = null),
        (this.gammazero = null),
        (this.betazero = null),
        (this.lastgammazero = null),
        (this.lastbetazero = null),
        (this.transitionTimeout = null),
        (this.updateCall = null),
        (this.event = null),
        (this.updateBind = this.update.bind(this)),
        (this.resetBind = this.reset.bind(this)),
        (this.element = e),
        (this.settings = this.extendSettings(i)),
        (this.reverse = this.settings.reverse ? -1 : 1),
        (this.resetToStart = t.isSettingTrue(this.settings["reset-to-start"])),
        (this.glare = t.isSettingTrue(this.settings.glare)),
        (this.glarePrerender = t.isSettingTrue(
          this.settings["glare-prerender"]
        )),
        (this.fullPageListening = t.isSettingTrue(
          this.settings["full-page-listening"]
        )),
        (this.gyroscope = t.isSettingTrue(this.settings.gyroscope)),
        (this.gyroscopeSamples = this.settings.gyroscopeSamples),
        (this.elementListener = this.getElementListener()),
        this.glare && this.prepareGlare(),
        this.fullPageListening && this.updateClientSize(),
        this.addEventListeners(),
        this.reset(),
        !1 === this.resetToStart &&
          ((this.settings.startX = 0), (this.settings.startY = 0));
    }
    static isSettingTrue(t) {
      return "" === t || !0 === t || 1 === t;
    }
    getElementListener() {
      if (this.fullPageListening) return window.document;
      if ("string" == typeof this.settings["mouse-event-element"]) {
        const t = document.querySelector(this.settings["mouse-event-element"]);
        if (t) return t;
      }
      return this.settings["mouse-event-element"] instanceof Node
        ? this.settings["mouse-event-element"]
        : this.element;
    }
    addEventListeners() {
      (this.onMouseEnterBind = this.onMouseEnter.bind(this)),
        (this.onMouseMoveBind = this.onMouseMove.bind(this)),
        (this.onMouseLeaveBind = this.onMouseLeave.bind(this)),
        (this.onWindowResizeBind = this.onWindowResize.bind(this)),
        (this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this)),
        this.elementListener.addEventListener(
          "mouseenter",
          this.onMouseEnterBind
        ),
        this.elementListener.addEventListener(
          "mouseleave",
          this.onMouseLeaveBind
        ),
        this.elementListener.addEventListener(
          "mousemove",
          this.onMouseMoveBind
        ),
        (this.glare || this.fullPageListening) &&
          window.addEventListener("resize", this.onWindowResizeBind),
        this.gyroscope &&
          window.addEventListener(
            "deviceorientation",
            this.onDeviceOrientationBind
          );
    }
    removeEventListeners() {
      this.elementListener.removeEventListener(
        "mouseenter",
        this.onMouseEnterBind
      ),
        this.elementListener.removeEventListener(
          "mouseleave",
          this.onMouseLeaveBind
        ),
        this.elementListener.removeEventListener(
          "mousemove",
          this.onMouseMoveBind
        ),
        this.gyroscope &&
          window.removeEventListener(
            "deviceorientation",
            this.onDeviceOrientationBind
          ),
        (this.glare || this.fullPageListening) &&
          window.removeEventListener("resize", this.onWindowResizeBind);
    }
    destroy() {
      clearTimeout(this.transitionTimeout),
        null !== this.updateCall && cancelAnimationFrame(this.updateCall),
        this.reset(),
        this.removeEventListeners(),
        (this.element.vanillaTilt = null),
        delete this.element.vanillaTilt,
        (this.element = null);
    }
    onDeviceOrientation(t) {
      if (null === t.gamma || null === t.beta) return;
      this.updateElementPosition(),
        this.gyroscopeSamples > 0 &&
          ((this.lastgammazero = this.gammazero),
          (this.lastbetazero = this.betazero),
          null === this.gammazero
            ? ((this.gammazero = t.gamma), (this.betazero = t.beta))
            : ((this.gammazero = (t.gamma + this.lastgammazero) / 2),
              (this.betazero = (t.beta + this.lastbetazero) / 2)),
          (this.gyroscopeSamples -= 1));
      const e =
          this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
        i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
        s = e / this.width,
        n = i / this.height,
        r = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s,
        a = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n;
      null !== this.updateCall && cancelAnimationFrame(this.updateCall),
        (this.event = { clientX: r + this.left, clientY: a + this.top }),
        (this.updateCall = requestAnimationFrame(this.updateBind));
    }
    onMouseEnter() {
      this.updateElementPosition(),
        (this.element.style.willChange = "transform"),
        this.setTransition();
    }
    onMouseMove(t) {
      null !== this.updateCall && cancelAnimationFrame(this.updateCall),
        (this.event = t),
        (this.updateCall = requestAnimationFrame(this.updateBind));
    }
    onMouseLeave() {
      this.setTransition(),
        this.settings.reset && requestAnimationFrame(this.resetBind);
    }
    reset() {
      this.onMouseEnter(),
        this.fullPageListening
          ? (this.event = {
              clientX:
                ((this.settings.startX + this.settings.max) /
                  (2 * this.settings.max)) *
                this.clientWidth,
              clientY:
                ((this.settings.startY + this.settings.max) /
                  (2 * this.settings.max)) *
                this.clientHeight,
            })
          : (this.event = {
              clientX:
                this.left +
                ((this.settings.startX + this.settings.max) /
                  (2 * this.settings.max)) *
                  this.width,
              clientY:
                this.top +
                ((this.settings.startY + this.settings.max) /
                  (2 * this.settings.max)) *
                  this.height,
            });
      let t = this.settings.scale;
      (this.settings.scale = 1),
        this.update(),
        (this.settings.scale = t),
        this.resetGlare();
    }
    resetGlare() {
      this.glare &&
        ((this.glareElement.style.transform =
          "rotate(180deg) translate(-50%, -50%)"),
        (this.glareElement.style.opacity = "0"));
    }
    getValues() {
      let t, e;
      return (
        this.fullPageListening
          ? ((t = this.event.clientX / this.clientWidth),
            (e = this.event.clientY / this.clientHeight))
          : ((t = (this.event.clientX - this.left) / this.width),
            (e = (this.event.clientY - this.top) / this.height)),
        (t = Math.min(Math.max(t, 0), 1)),
        (e = Math.min(Math.max(e, 0), 1)),
        {
          tiltX: (
            this.reverse *
            (this.settings.max - t * this.settings.max * 2)
          ).toFixed(2),
          tiltY: (
            this.reverse *
            (e * this.settings.max * 2 - this.settings.max)
          ).toFixed(2),
          percentageX: 100 * t,
          percentageY: 100 * e,
          angle:
            Math.atan2(
              this.event.clientX - (this.left + this.width / 2),
              -(this.event.clientY - (this.top + this.height / 2))
            ) *
            (180 / Math.PI),
        }
      );
    }
    updateElementPosition() {
      let t = this.element.getBoundingClientRect();
      (this.width = this.element.offsetWidth),
        (this.height = this.element.offsetHeight),
        (this.left = t.left),
        (this.top = t.top);
    }
    update() {
      let t = this.getValues();
      (this.element.style.transform =
        "perspective(" +
        this.settings.perspective +
        "px) rotateX(" +
        ("x" === this.settings.axis ? 0 : t.tiltY) +
        "deg) rotateY(" +
        ("y" === this.settings.axis ? 0 : t.tiltX) +
        "deg) scale3d(" +
        this.settings.scale +
        ", " +
        this.settings.scale +
        ", " +
        this.settings.scale +
        ")"),
        this.glare &&
          ((this.glareElement.style.transform = `rotate(${t.angle}deg) translate(-50%, -50%)`),
          (this.glareElement.style.opacity =
            "" + (t.percentageY * this.settings["max-glare"]) / 100)),
        this.element.dispatchEvent(
          new CustomEvent("tiltChange", { detail: t })
        ),
        (this.updateCall = null);
    }
    prepareGlare() {
      if (!this.glarePrerender) {
        const t = document.createElement("div");
        t.classList.add("js-tilt-glare");
        const e = document.createElement("div");
        e.classList.add("js-tilt-glare-inner"),
          t.appendChild(e),
          this.element.appendChild(t);
      }
      (this.glareElementWrapper = this.element.querySelector(".js-tilt-glare")),
        (this.glareElement = this.element.querySelector(
          ".js-tilt-glare-inner"
        )),
        this.glarePrerender ||
          (Object.assign(this.glareElementWrapper.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "pointer-events": "none",
            "border-radius": "inherit",
          }),
          Object.assign(this.glareElement.style, {
            position: "absolute",
            top: "50%",
            left: "50%",
            "pointer-events": "none",
            "background-image":
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            transform: "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            opacity: "0",
          }),
          this.updateGlareSize());
    }
    updateGlareSize() {
      if (this.glare) {
        const t =
          2 *
          (this.element.offsetWidth > this.element.offsetHeight
            ? this.element.offsetWidth
            : this.element.offsetHeight);
        Object.assign(this.glareElement.style, {
          width: `${t}px`,
          height: `${t}px`,
        });
      }
    }
    updateClientSize() {
      (this.clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth),
        (this.clientHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight);
    }
    onWindowResize() {
      this.updateGlareSize(), this.updateClientSize();
    }
    setTransition() {
      clearTimeout(this.transitionTimeout),
        (this.element.style.transition =
          this.settings.speed + "ms " + this.settings.easing),
        this.glare &&
          (this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`),
        (this.transitionTimeout = setTimeout(() => {
          (this.element.style.transition = ""),
            this.glare && (this.glareElement.style.transition = "");
        }, this.settings.speed));
    }
    extendSettings(t) {
      let e = {
          reverse: !1,
          max: 15,
          startX: 0,
          startY: 0,
          perspective: 1e3,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1,
          speed: 300,
          transition: !0,
          axis: null,
          glare: !1,
          "max-glare": 1,
          "glare-prerender": !1,
          "full-page-listening": !1,
          "mouse-event-element": null,
          reset: !0,
          "reset-to-start": !0,
          gyroscope: !0,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          gyroscopeSamples: 10,
        },
        i = {};
      for (var s in e)
        if (s in t) i[s] = t[s];
        else if (this.element.hasAttribute("data-tilt-" + s)) {
          let t = this.element.getAttribute("data-tilt-" + s);
          try {
            i[s] = JSON.parse(t);
          } catch (e) {
            i[s] = t;
          }
        } else i[s] = e[s];
      return i;
    }
    static init(e, i) {
      e instanceof Node && (e = [e]),
        e instanceof NodeList && (e = [].slice.call(e)),
        e instanceof Array &&
          e.forEach((e) => {
            "vanillaTilt" in e || (e.vanillaTilt = new t(e, i));
          });
    }
  }
  return (
    "undefined" != typeof document &&
      ((window.VanillaTilt = t),
      t.init(document.querySelectorAll("[data-tilt]"))),
    t
  );
})();
let scroll;
function preventScroll(t) {
  return t.preventDefault(), t.stopPropagation(), !1;
}
(parcelRequire = (function (t, e, i, s) {
  var n,
    r = "function" == typeof parcelRequire && parcelRequire,
    a = "function" == typeof require && require;
  function o(i, s) {
    if (!e[i]) {
      if (!t[i]) {
        var n = "function" == typeof parcelRequire && parcelRequire;
        if (!s && n) return n(i, !0);
        if (r) return r(i, !0);
        if (a && "string" == typeof i) return a(i);
        var l = new Error("Cannot find module '" + i + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      (d.resolve = function (e) {
        return t[i][1][e] || e;
      }),
        (d.cache = {});
      var c = (e[i] = new o.Module(i));
      t[i][0].call(c.exports, d, c, c.exports, this);
    }
    return e[i].exports;
    function d(t) {
      return o(d.resolve(t));
    }
  }
  (o.isParcelRequire = !0),
    (o.Module = function (t) {
      (this.id = t), (this.bundle = o), (this.exports = {});
    }),
    (o.modules = t),
    (o.cache = e),
    (o.parent = r),
    (o.register = function (e, i) {
      t[e] = [
        function (t, e) {
          e.exports = i;
        },
        {},
      ];
    });
  for (var l = 0; l < i.length; l++)
    try {
      o(i[l]);
    } catch (t) {
      n || (n = t);
    }
  if (i.length) {
    var c = o(i[i.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define &&
        define.amd &&
        define(function () {
          return c;
        });
  }
  if (((parcelRequire = o), n)) throw n;
  return o;
})(
  {
    S3PC: [
      function (t, e, i) {
        var s = function (t) {
            return Array.prototype.slice.call(document.querySelectorAll(t));
          },
          n = function (t) {
            return t instanceof HTMLElement;
          },
          r = function (t) {
            return "[object String]" === Object.prototype.toString.call(t);
          };
        e.exports = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.zIndex,
            i = void 0 === e ? 1 : e,
            a = t.diameter,
            o = void 0 === a ? 80 : a,
            l = t.borderWidth,
            c = void 0 === l ? 1 : l,
            d = t.borderColor,
            h = void 0 === d ? "#ddd" : d,
            u = t.easing,
            p = void 0 === u ? 4 : u,
            f = t.background,
            m = void 0 === f ? "transparent" : f,
            g = t.blendMode,
            v = void 0 === g ? "normal" : g,
            y = !1,
            w = { x: 0, y: 0, o: 1, d: o },
            b = { x: 0, y: 0, o: 0, d: o },
            x = document.createElement("div"),
            _ = p / 15;
          (x.style = "--blend-mode:"
            .concat(
              v,
              ";position:fixed;top:0;left:0;border-radius:100%;pointer-events:none;opacity:0;z-index:"
            )
            .concat(i, ";height:")
            .concat(o, "px;width:")
            .concat(o, "px;background:")
            .concat(m, ";border:")
            .concat(c, "px solid ")
            .concat(
              h,
              ";mix-blend-mode:var(--blend-mode);transition:background "
            )
            .concat(_, "s,border ")
            .concat(_, "s;will-change:transform")),
            x.classList.add("dot"),
            document.addEventListener("mousemove", function (t) {
              (w.x = t.clientX),
                (w.y = t.clientY),
                (x.style.opacity = 1),
                y ||
                  (document.body.append(x),
                  (b.x = w.x),
                  (b.y = w.y),
                  (y = !0),
                  E());
            });
          var E = function t() {
            var e = w.x - b.x,
              i = w.y - b.y;
            (b.x += e / p), (b.y += i / p);
            var s = "translate3d("
              .concat(b.x - b.d / 2, "px,")
              .concat(b.y - b.d / 2, "px,0)");
            (x.style.webkitTransform = s), (x.style.transform = s);
            var n = w.o - b.o;
            (b.o += n / p), (x.style.opacity = b.o);
            var r = w.d - b.d;
            (b.d += r / p),
              (x.style.height = b.d + "px"),
              (x.style.width = b.d + "px");
            try {
              requestAnimationFrame(t);
            } catch (e) {
              setImmediate(t);
            }
          };
          return (
            (x.over = function (t, e) {
              var i = function (t) {
                t.addEventListener("mouseover", function (t) {
                  e.background && (x.style.backgroundColor = e.background),
                    e.borderColor && (x.style.borderColor = e.borderColor),
                    e.scale && (w.d = o * e.scale),
                    e.blendMode &&
                      x.style.setProperty("--blend-mode", e.blendMode);
                }),
                  t.addEventListener("mouseout", function (t) {
                    e.background && (x.style.backgroundColor = m),
                      e.borderColor && (x.style.borderColor = h),
                      e.scale && (w.d = o),
                      e.blendMode && x.style.setProperty("--blend-mode", v);
                  });
              };
              n(t) ? i(t) : r(t) && s(t).forEach(i);
            }),
            x
          );
        };
      },
      {},
    ],
    WXAN: [
      function (t, e, i) {
        "use strict";
        var s = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(t(".."));
        window.curDot = s.default;
      },
      { "..": "S3PC" },
    ],
  },
  {},
  ["WXAN"]
)),
  document.body.addEventListener("touchmove", preventScroll, { passive: !1 }),
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded"),
      imagesLoaded(
        "[data-scroll-container]",
        { background: ".sbi_photo" },
        function () {
          if (
            ((scroll = new LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              smooth: !1,
              repeat: !0,
              resetNativeScroll: !0,
              scrollFromAnywhere: !1,
              tablet: { smooth: !1 },
              smartphone: { smooth: !1 },
              passive: !0,
              inertia: 0.9,
              multiplier: 1.2,
            })),
            setTimeout(() => {
              scroll.update(),
                document.body.removeEventListener("touchmove", preventScroll, {
                  passive: !1,
                }),
                new ResizeObserver(() => scroll.update()).observe(
                  document.querySelector("[data-scroll-container]")
                );
            }, 200),
            scroll.on("scroll", (t) => {
              if (
                (t.scroll.y > window.innerHeight / 15
                  ? document.body.classList.add("scrolled")
                  : document.body.classList.remove("scrolled"),
                "object" == typeof t.currentElements.hero)
              ) {
                let e = t.currentElements.hero.progress;
                (e = e < 0.5 ? 0.5 : e),
                  (e = 2 * e - 1),
                  e > 0
                    ? gsap.to(".video-bg", 0, {
                        autoAlpha: 1 - 1.4 * e,
                        scale: 1 + e / 10,
                      })
                    : gsap.to(".video-bg", 0, { autoAlpha: 1, scale: 1 });
              }
            }),
            window.innerWidth >= 1024 || window.innerWidth > window.innerHeight)
          ) {
            curDot({
              zIndex: 1e5,
              diameter: 20,
              easing: 6,
              borderWidth: 1,
              borderColor: "#ff7300",
              background: "#ff7300",
              blendMode: "normal",
            }).over("a, input, textarea, .cursor-pointer, .swiper-nav", {
              scale: 4,
              borderColor: "#fff",
              background: "transparent",
              borderWidth: 4,
              blendMode: "plus-lighter",
            });
          }
        }
      );
    let t = window.innerWidth;
    if (
      (window.addEventListener("resize", function () {
        window.innerWidth != t && scroll.update();
      }),
      document.querySelector(".scroll") &&
        document
          .querySelector(".scroll")
          .addEventListener("click", function (t) {
            let e = t.target.closest("section");
            scroll.scrollTo(e.nextElementSibling, { offset: -100 });
          }),
      document.querySelector("a[data-scroll-page]") &&
        Array.prototype.forEach.call(
          document.querySelectorAll("a[data-scroll-page]"),
          function (t) {
            t.addEventListener("click", function (e) {
              e.preventDefault(),
                scroll.scrollTo(t.getAttribute("href"), { offset: -100 });
            });
          }
        ),
      document.querySelector(".bg-blob"))
    ) {
      const t = document.querySelector(".bg-blob .blob");
      let e = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const i = t.offsetWidth;
      let s = { x: e.x, y: e.y };
      const n = 0.025;
      let r = 0.06;
      window.addEventListener("mousemove", (t) => {
        (s.x = t.x), (s.y = t.y);
      });
      const a = gsap.quickSetter(t, "x", "px"),
        o = gsap.quickSetter(t, "y", "px");
      gsap.ticker.add((t, l) => {
        let c = l * r,
          d = 1 - Math.pow(1 - n, c);
        (e.x += (s.x - e.x) * d),
          (e.y += (s.y - e.y) * d),
          a(e.x - i / 2),
          o(e.y - i / 2);
      });
    }
    var e = document.querySelector("header .menu-toggle");
    if (e) {
      e.onclick = function () {
        document.querySelector("body.menu-open")
          ? (document.body.classList.remove("menu-open"),
            document.body.removeEventListener("touchmove", preventScroll, {
              passive: !1,
            }))
          : (document.body.classList.add("menu-open"),
            document.body.addEventListener("touchmove", preventScroll, {
              passive: !1,
            }));
      };
      const t = document.querySelectorAll(
        "header .menu-container .menu > li > a"
      );
      Array.prototype.forEach.call(t, (t) => {
        t.dataset.content = t.innerHTML;
      });
    }
    if (document.querySelector(".title-carousel .swiper")) {
      const t = document.querySelectorAll(".title-carousel .swiper");
      Array.prototype.forEach.call(t, (t) => {
        var e = new Swiper(t, {
          speed: 1200,
          spaceBetween: 0,
          slidesPerView: 1,
          loop: !0,
          autoplay: { delay: 5e3 },
          preloadImages: !1,
          lazy: { loadPrevNext: !0 },
          effect: "fade",
          fadeEffect: { crossFade: !0 },
          navigation: {
            nextEl: t.querySelector(".swiper-nav .next"),
            prevEl: t.querySelector(".swiper-nav .prev"),
          },
          parallax: !0,
        });
        e.on("slideChange", function () {
          t.classList.add("changing");
        }),
          e.on("slideChangeTransitionEnd", function () {
            t.classList.remove("changing");
          });
      });
    }
    if (document.querySelector(".content-carousel .swiper")) {
      const t = document.querySelectorAll(".content-carousel .swiper");
      Array.prototype.forEach.call(t, (t) => {
        new Swiper(t, {
          speed: 800,
          spaceBetween: 0,
          slidesPerView: 1,
          loop: !0,
          autoplay: { delay: 3e3 },
          preloadImages: !1,
          lazy: { loadPrevNext: !0 },
          effect: "fade",
          fadeEffect: { crossFade: !0 },
          pagination: {
            el: t
              .closest(".content-carousel")
              .querySelector(".swiper-pagination"),
            type: "bullets",
            clickable: !0,
          },
        });
      });
    }
    if (document.querySelector(".testimonials .swiper")) {
      const t = document.querySelectorAll(".testimonials .swiper");
      let e = !0;
      (window.innerWidth >= 1024 || window.innerWidth > window.innerHeight) &&
        (e = !1),
        Array.prototype.forEach.call(t, (t) => {
          new Swiper(t, {
            speed: 800,
            spaceBetween: 0,
            slidesPerView: 1,
            loop: !0,
            autoplay: { delay: 7e3 },
            preloadImages: !1,
            lazy: { loadPrevNext: !0 },
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            autoHeight: e,
          }).on("slideChange", function () {
            t
              .closest(".testimonials")
              .querySelector(".quotes")
              .classList.add("changing"),
              setTimeout(() => {
                t.closest(".testimonials")
                  .querySelector(".quotes")
                  .classList.remove("changing");
              }, 500);
          });
        });
      var i = document.querySelector(".testimonials .swiper-holder");
      new Parallax(i, { frictionX: 0.05, frictionY: 0.05 });
    }
    if (document.querySelector(".image-carousel .swiper")) {
      const t = document.querySelectorAll(".image-carousel .swiper");
      Array.prototype.forEach.call(t, (t) => {
        new Swiper(t, {
          speed: 3e3,
          spaceBetween: 15,
          slidesPerView: 2.2,
          loop: !0,
          autoplay: { delay: 1 },
          freeMode: !0,
          breakpoints: {
            640: { spaceBetween: 30, slidesPerView: 2.2 },
            1024: { spaceBetween: 30, slidesPerView: 3.2 },
            1300: { spaceBetween: 30, slidesPerView: 4.2 },
          },
        });
      });
    }
    if (
      (imagesLoaded(
        "[data-scroll-container]",
        { background: ".sbi_photo" },
        function () {
          if (document.querySelector(".tab-box .swiper")) {
            const t = document.querySelectorAll(".tab-box .swiper");
            let e = !0;
            window.innerWidth >= 1024 &&
              window.innerWidth > window.innerHeight &&
              (e = !1),
              console.log(e),
              Array.prototype.forEach.call(t, (t) => {
                var i = new Swiper(t, {
                  speed: 600,
                  spaceBetween: 0,
                  slidesPerView: 1,
                  preloadImages: !1,
                  lazy: { loadPrevNext: !0 },
                  effect: "fade",
                  fadeEffect: { crossFade: !0 },
                  parallax: !0,
                  allowTouchMove: !1,
                  autoHeight: e,
                });
                const s = t.closest(".tab-box").querySelectorAll(".toggles li");
                Array.prototype.forEach.call(s, (t) => {
                  t.addEventListener("click", function (t) {
                    let e = t.target.closest("li"),
                      s = Array.from(e.parentNode.children).indexOf(e);
                    i.slideTo(s);
                  });
                }),
                  i.on("slideChange", function () {
                    t
                      .closest(".tab-box")
                      .querySelector(".toggles li.active")
                      .classList.remove("active"),
                      t
                        .closest(".tab-box")
                        .querySelector(
                          `.toggles li:nth-child(${i.activeIndex + 1})`
                        )
                        .classList.add("active"),
                      t.closest(".swiper-holder").classList.add("changing"),
                      setTimeout(() => {
                        t.closest(".swiper-holder").classList.remove(
                          "changing"
                        );
                      }, 500);
                  });
              });
          }
        }
      ),
      document.querySelector(".content-feature .swiper"))
    ) {
      const t = document.querySelectorAll(".content-feature .swiper");
      Array.prototype.forEach.call(t, (t) => {
        var e = new Swiper(t, {
          speed: 1200,
          spaceBetween: 0,
          slidesPerView: 1,
          loop: !0,
          autoplay: { delay: 5e3 },
          preloadImages: !1,
          lazy: { loadPrevNext: !0 },
          effect: "fade",
          fadeEffect: { crossFade: !0 },
        });
        e.on("slideChange", function () {
          t.classList.add("changing");
        }),
          e.on("slideChangeTransitionEnd", function () {
            t.classList.remove("changing");
          });
      });
    }
    if (document.querySelector(".cards-carousel .swiper")) {
      const t = document.querySelectorAll(".cards-carousel .swiper");
      Array.prototype.forEach.call(t, (t) => {
        new Swiper(t, {
          speed: 1200,
          spaceBetween: 30,
          slidesPerView: 1,
          loop: !0,
          autoplay: { delay: 5e3 },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1500: { slidesPerView: 3.5, spaceBetween: 30 },
          },
          pagination: {
            el: t
              .closest(".cards-carousel")
              .querySelector(".swiper-pagination"),
            type: "bullets",
            clickable: !0,
          },
        });
      });
    }
    if (document.querySelector(".hero .btn")) {
      const t = document.querySelectorAll(".hero .btn");
      Array.prototype.forEach.call(t, (t) => {
        t.addEventListener("mouseover", function () {
          t.closest(".hero").classList.add("hovered");
        }),
          t.addEventListener("mouseleave", function () {
            t.closest(".hero").classList.remove("hovered");
          });
      });
    }
    if (document.querySelector(".image-links svg")) {
      const t = document.querySelectorAll(".image-links .single");
      Array.prototype.forEach.call(t, (t) => {
        t.addEventListener("mouseover", function () {
          t.closest(".image-links").classList.add("hovered");
        }),
          t.addEventListener("mouseleave", function () {
            t.closest(".image-links").classList.remove("hovered");
          });
      });
    }
    if (document.querySelector(".accordion")) {
      let t = document.querySelectorAll(".accordion .title-wrap");
      t = Array.prototype.slice.call(t);
      let e = document.querySelectorAll(".accordion li");
      e = Array.prototype.slice.call(e);
      let i = function () {
        let t = this.parentNode,
          e = t.children[1];
        t.classList.contains("active")
          ? (t.classList.remove("active"),
            gsap.to(e, 0.3, {
              height: 0,
              immediateRender: !1,
              ease: Power1.easeOut,
            }))
          : (t.classList.add("active"),
            gsap.set(e, { height: "auto" }),
            gsap.from(e, 0.6, {
              height: 0,
              immediateRender: !1,
              ease: Back.easeOut,
            }));
      };
      t.forEach(function (t, e) {
        t.addEventListener("click", i, !1);
      });
    }
  });