var jv = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Gk = jv((tn, nn) => {
  (function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const i of o)
        if (i.type === 'childList')
          for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const i = {};
      return (
        o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === 'use-credentials'
          ? (i.credentials = 'include')
          : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
        i
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  var hl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {};
  function ml(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
  }
  var Ba = { exports: {} },
    Oc;
  function jd() {
    return (
      Oc ||
        ((Oc = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r();
          })(hl, function () {
            var n = 1e3,
              r = 6e4,
              o = 36e5,
              i = 'millisecond',
              a = 'second',
              s = 'minute',
              l = 'hour',
              c = 'day',
              u = 'week',
              f = 'month',
              d = 'quarter',
              p = 'year',
              h = 'date',
              m = 'Invalid Date',
              y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
              b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
              _ = {
                name: 'en',
                weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                  '_',
                ),
                ordinal: function (Z) {
                  var k = ['th', 'st', 'nd', 'rd'],
                    A = Z % 100;
                  return '[' + Z + (k[(A - 20) % 10] || k[A] || k[0]) + ']';
                },
              },
              M = function (Z, k, A) {
                var z = String(Z);
                return !z || z.length >= k ? Z : '' + Array(k + 1 - z.length).join(A) + Z;
              },
              R = {
                s: M,
                z: function (Z) {
                  var k = -Z.utcOffset(),
                    A = Math.abs(k),
                    z = Math.floor(A / 60),
                    j = A % 60;
                  return (k <= 0 ? '+' : '-') + M(z, 2, '0') + ':' + M(j, 2, '0');
                },
                m: function Z(k, A) {
                  if (k.date() < A.date()) return -Z(A, k);
                  var z = 12 * (A.year() - k.year()) + (A.month() - k.month()),
                    j = k.clone().add(z, f),
                    ee = A - j < 0,
                    ae = k.clone().add(z + (ee ? -1 : 1), f);
                  return +(-(z + (A - j) / (ee ? j - ae : ae - j)) || 0);
                },
                a: function (Z) {
                  return Z < 0 ? Math.ceil(Z) || 0 : Math.floor(Z);
                },
                p: function (Z) {
                  return (
                    { M: f, y: p, w: u, d: c, D: h, h: l, m: s, s: a, ms: i, Q: d }[Z] ||
                    String(Z || '')
                      .toLowerCase()
                      .replace(/s$/, '')
                  );
                },
                u: function (Z) {
                  return Z === void 0;
                },
              },
              x = 'en',
              C = {};
            C[x] = _;
            var T = '$isDayjsObject',
              $ = function (Z) {
                return Z instanceof Y || !(!Z || !Z[T]);
              },
              L = function Z(k, A, z) {
                var j;
                if (!k) return x;
                if (typeof k == 'string') {
                  var ee = k.toLowerCase();
                  C[ee] && (j = ee), A && ((C[ee] = A), (j = ee));
                  var ae = k.split('-');
                  if (!j && ae.length > 1) return Z(ae[0]);
                } else {
                  var Q = k.name;
                  (C[Q] = k), (j = Q);
                }
                return !z && j && (x = j), j || (!z && x);
              },
              S = function (Z, k) {
                if ($(Z)) return Z.clone();
                var A = typeof k == 'object' ? k : {};
                return (A.date = Z), (A.args = arguments), new Y(A);
              },
              B = R;
            (B.l = L),
              (B.i = $),
              (B.w = function (Z, k) {
                return S(Z, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
              });
            var Y = (function () {
                function Z(A) {
                  (this.$L = L(A.locale, null, !0)), this.parse(A), (this.$x = this.$x || A.x || {}), (this[T] = !0);
                }
                var k = Z.prototype;
                return (
                  (k.parse = function (A) {
                    (this.$d = (function (z) {
                      var j = z.date,
                        ee = z.utc;
                      if (j === null) return new Date(NaN);
                      if (B.u(j)) return new Date();
                      if (j instanceof Date) return new Date(j);
                      if (typeof j == 'string' && !/Z$/i.test(j)) {
                        var ae = j.match(y);
                        if (ae) {
                          var Q = ae[2] - 1 || 0,
                            se = (ae[7] || '0').substring(0, 3);
                          return ee
                            ? new Date(Date.UTC(ae[1], Q, ae[3] || 1, ae[4] || 0, ae[5] || 0, ae[6] || 0, se))
                            : new Date(ae[1], Q, ae[3] || 1, ae[4] || 0, ae[5] || 0, ae[6] || 0, se);
                        }
                      }
                      return new Date(j);
                    })(A)),
                      this.init();
                  }),
                  (k.init = function () {
                    var A = this.$d;
                    (this.$y = A.getFullYear()),
                      (this.$M = A.getMonth()),
                      (this.$D = A.getDate()),
                      (this.$W = A.getDay()),
                      (this.$H = A.getHours()),
                      (this.$m = A.getMinutes()),
                      (this.$s = A.getSeconds()),
                      (this.$ms = A.getMilliseconds());
                  }),
                  (k.$utils = function () {
                    return B;
                  }),
                  (k.isValid = function () {
                    return this.$d.toString() !== m;
                  }),
                  (k.isSame = function (A, z) {
                    var j = S(A);
                    return this.startOf(z) <= j && j <= this.endOf(z);
                  }),
                  (k.isAfter = function (A, z) {
                    return S(A) < this.startOf(z);
                  }),
                  (k.isBefore = function (A, z) {
                    return this.endOf(z) < S(A);
                  }),
                  (k.$g = function (A, z, j) {
                    return B.u(A) ? this[z] : this.set(j, A);
                  }),
                  (k.unix = function () {
                    return Math.floor(this.valueOf() / 1e3);
                  }),
                  (k.valueOf = function () {
                    return this.$d.getTime();
                  }),
                  (k.startOf = function (A, z) {
                    var j = this,
                      ee = !!B.u(z) || z,
                      ae = B.p(A),
                      Q = function (K, q) {
                        var ue = B.w(j.$u ? Date.UTC(j.$y, q, K) : new Date(j.$y, q, K), j);
                        return ee ? ue : ue.endOf(c);
                      },
                      se = function (K, q) {
                        return B.w(
                          j.toDate()[K].apply(j.toDate('s'), (ee ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)),
                          j,
                        );
                      },
                      me = this.$W,
                      xe = this.$M,
                      Pe = this.$D,
                      G = 'set' + (this.$u ? 'UTC' : '');
                    switch (ae) {
                      case p:
                        return ee ? Q(1, 0) : Q(31, 11);
                      case f:
                        return ee ? Q(1, xe) : Q(0, xe + 1);
                      case u:
                        var I = this.$locale().weekStart || 0,
                          X = (me < I ? me + 7 : me) - I;
                        return Q(ee ? Pe - X : Pe + (6 - X), xe);
                      case c:
                      case h:
                        return se(G + 'Hours', 0);
                      case l:
                        return se(G + 'Minutes', 1);
                      case s:
                        return se(G + 'Seconds', 2);
                      case a:
                        return se(G + 'Milliseconds', 3);
                      default:
                        return this.clone();
                    }
                  }),
                  (k.endOf = function (A) {
                    return this.startOf(A, !1);
                  }),
                  (k.$set = function (A, z) {
                    var j,
                      ee = B.p(A),
                      ae = 'set' + (this.$u ? 'UTC' : ''),
                      Q = ((j = {}),
                      (j[c] = ae + 'Date'),
                      (j[h] = ae + 'Date'),
                      (j[f] = ae + 'Month'),
                      (j[p] = ae + 'FullYear'),
                      (j[l] = ae + 'Hours'),
                      (j[s] = ae + 'Minutes'),
                      (j[a] = ae + 'Seconds'),
                      (j[i] = ae + 'Milliseconds'),
                      j)[ee],
                      se = ee === c ? this.$D + (z - this.$W) : z;
                    if (ee === f || ee === p) {
                      var me = this.clone().set(h, 1);
                      me.$d[Q](se), me.init(), (this.$d = me.set(h, Math.min(this.$D, me.daysInMonth())).$d);
                    } else Q && this.$d[Q](se);
                    return this.init(), this;
                  }),
                  (k.set = function (A, z) {
                    return this.clone().$set(A, z);
                  }),
                  (k.get = function (A) {
                    return this[B.p(A)]();
                  }),
                  (k.add = function (A, z) {
                    var j,
                      ee = this;
                    A = Number(A);
                    var ae = B.p(z),
                      Q = function (xe) {
                        var Pe = S(ee);
                        return B.w(Pe.date(Pe.date() + Math.round(xe * A)), ee);
                      };
                    if (ae === f) return this.set(f, this.$M + A);
                    if (ae === p) return this.set(p, this.$y + A);
                    if (ae === c) return Q(1);
                    if (ae === u) return Q(7);
                    var se = ((j = {}), (j[s] = r), (j[l] = o), (j[a] = n), j)[ae] || 1,
                      me = this.$d.getTime() + A * se;
                    return B.w(me, this);
                  }),
                  (k.subtract = function (A, z) {
                    return this.add(-1 * A, z);
                  }),
                  (k.format = function (A) {
                    var z = this,
                      j = this.$locale();
                    if (!this.isValid()) return j.invalidDate || m;
                    var ee = A || 'YYYY-MM-DDTHH:mm:ssZ',
                      ae = B.z(this),
                      Q = this.$H,
                      se = this.$m,
                      me = this.$M,
                      xe = j.weekdays,
                      Pe = j.months,
                      G = j.meridiem,
                      I = function (q, ue, g, w) {
                        return (q && (q[ue] || q(z, ee))) || g[ue].slice(0, w);
                      },
                      X = function (q) {
                        return B.s(Q % 12 || 12, q, '0');
                      },
                      K =
                        G ||
                        function (q, ue, g) {
                          var w = q < 12 ? 'AM' : 'PM';
                          return g ? w.toLowerCase() : w;
                        };
                    return ee.replace(b, function (q, ue) {
                      return (
                        ue ||
                        (function (g) {
                          switch (g) {
                            case 'YY':
                              return String(z.$y).slice(-2);
                            case 'YYYY':
                              return B.s(z.$y, 4, '0');
                            case 'M':
                              return me + 1;
                            case 'MM':
                              return B.s(me + 1, 2, '0');
                            case 'MMM':
                              return I(j.monthsShort, me, Pe, 3);
                            case 'MMMM':
                              return I(Pe, me);
                            case 'D':
                              return z.$D;
                            case 'DD':
                              return B.s(z.$D, 2, '0');
                            case 'd':
                              return String(z.$W);
                            case 'dd':
                              return I(j.weekdaysMin, z.$W, xe, 2);
                            case 'ddd':
                              return I(j.weekdaysShort, z.$W, xe, 3);
                            case 'dddd':
                              return xe[z.$W];
                            case 'H':
                              return String(Q);
                            case 'HH':
                              return B.s(Q, 2, '0');
                            case 'h':
                              return X(1);
                            case 'hh':
                              return X(2);
                            case 'a':
                              return K(Q, se, !0);
                            case 'A':
                              return K(Q, se, !1);
                            case 'm':
                              return String(se);
                            case 'mm':
                              return B.s(se, 2, '0');
                            case 's':
                              return String(z.$s);
                            case 'ss':
                              return B.s(z.$s, 2, '0');
                            case 'SSS':
                              return B.s(z.$ms, 3, '0');
                            case 'Z':
                              return ae;
                          }
                          return null;
                        })(q) ||
                        ae.replace(':', '')
                      );
                    });
                  }),
                  (k.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                  }),
                  (k.diff = function (A, z, j) {
                    var ee,
                      ae = this,
                      Q = B.p(z),
                      se = S(A),
                      me = (se.utcOffset() - this.utcOffset()) * r,
                      xe = this - se,
                      Pe = function () {
                        return B.m(ae, se);
                      };
                    switch (Q) {
                      case p:
                        ee = Pe() / 12;
                        break;
                      case f:
                        ee = Pe();
                        break;
                      case d:
                        ee = Pe() / 3;
                        break;
                      case u:
                        ee = (xe - me) / 6048e5;
                        break;
                      case c:
                        ee = (xe - me) / 864e5;
                        break;
                      case l:
                        ee = xe / o;
                        break;
                      case s:
                        ee = xe / r;
                        break;
                      case a:
                        ee = xe / n;
                        break;
                      default:
                        ee = xe;
                    }
                    return j ? ee : B.a(ee);
                  }),
                  (k.daysInMonth = function () {
                    return this.endOf(f).$D;
                  }),
                  (k.$locale = function () {
                    return C[this.$L];
                  }),
                  (k.locale = function (A, z) {
                    if (!A) return this.$L;
                    var j = this.clone(),
                      ee = L(A, z, !0);
                    return ee && (j.$L = ee), j;
                  }),
                  (k.clone = function () {
                    return B.w(this.$d, this);
                  }),
                  (k.toDate = function () {
                    return new Date(this.valueOf());
                  }),
                  (k.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null;
                  }),
                  (k.toISOString = function () {
                    return this.$d.toISOString();
                  }),
                  (k.toString = function () {
                    return this.$d.toUTCString();
                  }),
                  Z
                );
              })(),
              ne = Y.prototype;
            return (
              (S.prototype = ne),
              [
                ['$ms', i],
                ['$s', a],
                ['$m', s],
                ['$H', l],
                ['$W', c],
                ['$M', f],
                ['$y', p],
                ['$D', h],
              ].forEach(function (Z) {
                ne[Z[1]] = function (k) {
                  return this.$g(k, Z[0], Z[1]);
                };
              }),
              (S.extend = function (Z, k) {
                return Z.$i || (Z(k, Y, S), (Z.$i = !0)), S;
              }),
              (S.locale = L),
              (S.isDayjs = $),
              (S.unix = function (Z) {
                return S(1e3 * Z);
              }),
              (S.en = C[x]),
              (S.Ls = C),
              (S.p = {}),
              S
            );
          });
        })(Ba)),
      Ba.exports
    );
  }
  var Hv = jd();
  const Hd = ml(Hv);
  var Bv = { exports: {} };
  (function (e, t) {
    (function (n, r) {
      e.exports = r(jd());
    })(hl, function (n) {
      function r(a) {
        return a && typeof a == 'object' && 'default' in a ? a : { default: a };
      }
      var o = r(n),
        i = {
          name: 'zh-cn',
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          ordinal: function (a, s) {
            return s === 'W' ? a + '周' : a + '日';
          },
          weekStart: 1,
          yearStart: 4,
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
          },
          meridiem: function (a, s) {
            var l = 100 * a + s;
            return l < 600
              ? '凌晨'
              : l < 900
              ? '早上'
              : l < 1100
              ? '上午'
              : l < 1300
              ? '中午'
              : l < 1800
              ? '下午'
              : '晚上';
          },
        };
      return o.default.locale(i, null, !0), i;
    });
  })(Bv);
  var Bd = { exports: {} };
  (function (e, t) {
    (function (n, r) {
      e.exports = r();
    })(hl, function () {
      return function (n, r, o) {
        n = n || {};
        var i = r.prototype,
          a = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          };
        function s(c, u, f, d) {
          return i.fromToBase(c, u, f, d);
        }
        (o.en.relativeTime = a),
          (i.fromToBase = function (c, u, f, d, p) {
            for (
              var h,
                m,
                y,
                b = f.$locale().relativeTime || a,
                _ = n.thresholds || [
                  { l: 's', r: 44, d: 'second' },
                  { l: 'm', r: 89 },
                  { l: 'mm', r: 44, d: 'minute' },
                  { l: 'h', r: 89 },
                  { l: 'hh', r: 21, d: 'hour' },
                  { l: 'd', r: 35 },
                  { l: 'dd', r: 25, d: 'day' },
                  { l: 'M', r: 45 },
                  { l: 'MM', r: 10, d: 'month' },
                  { l: 'y', r: 17 },
                  { l: 'yy', d: 'year' },
                ],
                M = _.length,
                R = 0;
              R < M;
              R += 1
            ) {
              var x = _[R];
              x.d && (h = d ? o(c).diff(f, x.d, !0) : f.diff(c, x.d, !0));
              var C = (n.rounding || Math.round)(Math.abs(h));
              if (((y = h > 0), C <= x.r || !x.r)) {
                C <= 1 && R > 0 && (x = _[R - 1]);
                var T = b[x.l];
                p && (C = p('' + C)), (m = typeof T == 'string' ? T.replace('%d', C) : T(C, u, x.l, y));
                break;
              }
            }
            if (u) return m;
            var $ = y ? b.future : b.past;
            return typeof $ == 'function' ? $(m) : $.replace('%s', m);
          }),
          (i.to = function (c, u) {
            return s(c, u, this, !0);
          }),
          (i.from = function (c, u) {
            return s(c, u, this);
          });
        var l = function (c) {
          return c.$u ? o.utc() : o();
        };
        (i.toNow = function (c) {
          return this.to(l(this), c);
        }),
          (i.fromNow = function (c) {
            return this.from(l(this), c);
          });
      };
    });
  })(Bd);
  var zv = Bd.exports;
  const Fv = ml(zv);
  function vl(e, t) {
    const n = Object.create(null),
      r = e.split(',');
    for (let o = 0; o < r.length; o++) n[r[o]] = !0;
    return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
  }
  const Ne = {},
    $r = [],
    It = () => {},
    Wv = () => !1,
    Vv = /^on[^a-z]/,
    ra = (e) => Vv.test(e),
    gl = (e) => e.startsWith('onUpdate:'),
    We = Object.assign,
    yl = (e, t) => {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    },
    Kv = Object.prototype.hasOwnProperty,
    Me = (e, t) => Kv.call(e, t),
    ge = Array.isArray,
    Sr = (e) => oa(e) === '[object Map]',
    zd = (e) => oa(e) === '[object Set]',
    Ce = (e) => typeof e == 'function',
    ze = (e) => typeof e == 'string',
    bl = (e) => typeof e == 'symbol',
    Le = (e) => e !== null && typeof e == 'object',
    Fd = (e) => Le(e) && Ce(e.then) && Ce(e.catch),
    Wd = Object.prototype.toString,
    oa = (e) => Wd.call(e),
    Uv = (e) => oa(e).slice(8, -1),
    Vd = (e) => oa(e) === '[object Object]',
    wl = (e) => ze(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    _i = vl(
      ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
    ),
    ia = (e) => {
      const t = Object.create(null);
      return (n) => t[n] || (t[n] = e(n));
    },
    Yv = /-(\w)/g,
    Ut = ia((e) => e.replace(Yv, (t, n) => (n ? n.toUpperCase() : ''))),
    Xv = /\B([A-Z])/g,
    sr = ia((e) => e.replace(Xv, '-$1').toLowerCase()),
    aa = ia((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    za = ia((e) => (e ? `on${aa(e)}` : '')),
    Eo = (e, t) => !Object.is(e, t),
    Fa = (e, t) => {
      for (let n = 0; n < e.length; n++) e[n](t);
    },
    Ai = (e, t, n) => {
      Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
    },
    Gv = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    },
    qv = (e) => {
      const t = ze(e) ? Number(e) : NaN;
      return isNaN(t) ? e : t;
    };
  let Ec;
  const Cs = () =>
    Ec ||
    (Ec =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : {});
  function Sn(e) {
    if (ge(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n],
          o = ze(r) ? eg(r) : Sn(r);
        if (o) for (const i in o) t[i] = o[i];
      }
      return t;
    } else {
      if (ze(e)) return e;
      if (Le(e)) return e;
    }
  }
  const Zv = /;(?![^(]*\))/g,
    Qv = /:([^]+)/,
    Jv = /\/\*[^]*?\*\//g;
  function eg(e) {
    const t = {};
    return (
      e
        .replace(Jv, '')
        .split(Zv)
        .forEach((n) => {
          if (n) {
            const r = n.split(Qv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }),
      t
    );
  }
  function Ye(e) {
    let t = '';
    if (ze(e)) t = e;
    else if (ge(e))
      for (let n = 0; n < e.length; n++) {
        const r = Ye(e[n]);
        r && (t += r + ' ');
      }
    else if (Le(e)) for (const n in e) e[n] && (t += n + ' ');
    return t.trim();
  }
  const tg = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    ng = vl(tg);
  function Kd(e) {
    return !!e || e === '';
  }
  const Kt = (e) =>
      ze(e)
        ? e
        : e == null
        ? ''
        : ge(e) || (Le(e) && (e.toString === Wd || !Ce(e.toString)))
        ? JSON.stringify(e, Ud, 2)
        : String(e),
    Ud = (e, t) =>
      t && t.__v_isRef
        ? Ud(e, t.value)
        : Sr(t)
        ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => ((n[`${r} =>`] = o), n), {}) }
        : zd(t)
        ? { [`Set(${t.size})`]: [...t.values()] }
        : Le(t) && !ge(t) && !Vd(t)
        ? String(t)
        : t;
  let mt;
  class Yd {
    constructor(t = !1) {
      (this.detached = t),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = mt),
        !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const n = mt;
        try {
          return (mt = this), t();
        } finally {
          mt = n;
        }
      }
    }
    on() {
      mt = this;
    }
    off() {
      mt = this.parent;
    }
    stop(t) {
      if (this._active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          const o = this.parent.scopes.pop();
          o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index));
        }
        (this.parent = void 0), (this._active = !1);
      }
    }
  }
  function Xd(e) {
    return new Yd(e);
  }
  function rg(e, t = mt) {
    t && t.active && t.effects.push(e);
  }
  function _l() {
    return mt;
  }
  function Gd(e) {
    mt && mt.cleanups.push(e);
  }
  const Cl = (e) => {
      const t = new Set(e);
      return (t.w = 0), (t.n = 0), t;
    },
    qd = (e) => (e.w & Mn) > 0,
    Zd = (e) => (e.n & Mn) > 0,
    og = ({ deps: e }) => {
      if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Mn;
    },
    ig = (e) => {
      const { deps: t } = e;
      if (t.length) {
        let n = 0;
        for (let r = 0; r < t.length; r++) {
          const o = t[r];
          qd(o) && !Zd(o) ? o.delete(e) : (t[n++] = o), (o.w &= ~Mn), (o.n &= ~Mn);
        }
        t.length = n;
      }
    },
    Ii = new WeakMap();
  let so = 0,
    Mn = 1;
  const xs = 30;
  let Mt;
  const qn = Symbol(''),
    $s = Symbol('');
  class xl {
    constructor(t, n = null, r) {
      (this.fn = t), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), rg(this, r);
    }
    run() {
      if (!this.active) return this.fn();
      let t = Mt,
        n = Tn;
      for (; t; ) {
        if (t === this) return;
        t = t.parent;
      }
      try {
        return (this.parent = Mt), (Mt = this), (Tn = !0), (Mn = 1 << ++so), so <= xs ? og(this) : Pc(this), this.fn();
      } finally {
        so <= xs && ig(this),
          (Mn = 1 << --so),
          (Mt = this.parent),
          (Tn = n),
          (this.parent = void 0),
          this.deferStop && this.stop();
      }
    }
    stop() {
      Mt === this ? (this.deferStop = !0) : this.active && (Pc(this), this.onStop && this.onStop(), (this.active = !1));
    }
  }
  function Pc(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++) t[n].delete(e);
      t.length = 0;
    }
  }
  let Tn = !0;
  const Qd = [];
  function Wr() {
    Qd.push(Tn), (Tn = !1);
  }
  function Vr() {
    const e = Qd.pop();
    Tn = e === void 0 ? !0 : e;
  }
  function ct(e, t, n) {
    if (Tn && Mt) {
      let r = Ii.get(e);
      r || Ii.set(e, (r = new Map()));
      let o = r.get(n);
      o || r.set(n, (o = Cl())), Jd(o);
    }
  }
  function Jd(e, t) {
    let n = !1;
    so <= xs ? Zd(e) || ((e.n |= Mn), (n = !qd(e))) : (n = !e.has(Mt)), n && (e.add(Mt), Mt.deps.push(e));
  }
  function on(e, t, n, r, o, i) {
    const a = Ii.get(e);
    if (!a) return;
    let s = [];
    if (t === 'clear') s = [...a.values()];
    else if (n === 'length' && ge(e)) {
      const l = Number(r);
      a.forEach((c, u) => {
        (u === 'length' || u >= l) && s.push(c);
      });
    } else
      switch ((n !== void 0 && s.push(a.get(n)), t)) {
        case 'add':
          ge(e) ? wl(n) && s.push(a.get('length')) : (s.push(a.get(qn)), Sr(e) && s.push(a.get($s)));
          break;
        case 'delete':
          ge(e) || (s.push(a.get(qn)), Sr(e) && s.push(a.get($s)));
          break;
        case 'set':
          Sr(e) && s.push(a.get(qn));
          break;
      }
    if (s.length === 1) s[0] && Ss(s[0]);
    else {
      const l = [];
      for (const c of s) c && l.push(...c);
      Ss(Cl(l));
    }
  }
  function Ss(e, t) {
    const n = ge(e) ? e : [...e];
    for (const r of n) r.computed && kc(r);
    for (const r of n) r.computed || kc(r);
  }
  function kc(e, t) {
    (e !== Mt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
  }
  function ag(e, t) {
    var n;
    return (n = Ii.get(e)) == null ? void 0 : n.get(t);
  }
  const sg = vl('__proto__,__v_isRef,__isVue'),
    ep = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== 'arguments' && e !== 'caller')
        .map((e) => Symbol[e])
        .filter(bl),
    ),
    lg = $l(),
    cg = $l(!1, !0),
    ug = $l(!0),
    Mc = fg();
  function fg() {
    const e = {};
    return (
      ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
        e[t] = function (...n) {
          const r = Te(this);
          for (let i = 0, a = this.length; i < a; i++) ct(r, 'get', i + '');
          const o = r[t](...n);
          return o === -1 || o === !1 ? r[t](...n.map(Te)) : o;
        };
      }),
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
        e[t] = function (...n) {
          Wr();
          const r = Te(this)[t].apply(this, n);
          return Vr(), r;
        };
      }),
      e
    );
  }
  function dg(e) {
    const t = Te(this);
    return ct(t, 'has', e), t.hasOwnProperty(e);
  }
  function $l(e = !1, t = !1) {
    return function (r, o, i) {
      if (o === '__v_isReactive') return !e;
      if (o === '__v_isReadonly') return e;
      if (o === '__v_isShallow') return t;
      if (o === '__v_raw' && i === (e ? (t ? Eg : ip) : t ? op : rp).get(r)) return r;
      const a = ge(r);
      if (!e) {
        if (a && Me(Mc, o)) return Reflect.get(Mc, o, i);
        if (o === 'hasOwnProperty') return dg;
      }
      const s = Reflect.get(r, o, i);
      return (bl(o) ? ep.has(o) : sg(o)) || (e || ct(r, 'get', o), t)
        ? s
        : Be(s)
        ? a && wl(o)
          ? s
          : s.value
        : Le(s)
        ? e
          ? Yo(s)
          : In(s)
        : s;
    };
  }
  const pg = tp(),
    hg = tp(!0);
  function tp(e = !1) {
    return function (n, r, o, i) {
      let a = n[r];
      if (kr(a) && Be(a) && !Be(o)) return !1;
      if (!e && (!Ri(o) && !kr(o) && ((a = Te(a)), (o = Te(o))), !ge(n) && Be(a) && !Be(o))) return (a.value = o), !0;
      const s = ge(n) && wl(r) ? Number(r) < n.length : Me(n, r),
        l = Reflect.set(n, r, o, i);
      return n === Te(i) && (s ? Eo(o, a) && on(n, 'set', r, o) : on(n, 'add', r, o)), l;
    };
  }
  function mg(e, t) {
    const n = Me(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && on(e, 'delete', t, void 0), r;
  }
  function vg(e, t) {
    const n = Reflect.has(e, t);
    return (!bl(t) || !ep.has(t)) && ct(e, 'has', t), n;
  }
  function gg(e) {
    return ct(e, 'iterate', ge(e) ? 'length' : qn), Reflect.ownKeys(e);
  }
  const np = { get: lg, set: pg, deleteProperty: mg, has: vg, ownKeys: gg },
    yg = {
      get: ug,
      set(e, t) {
        return !0;
      },
      deleteProperty(e, t) {
        return !0;
      },
    },
    bg = We({}, np, { get: cg, set: hg }),
    Sl = (e) => e,
    sa = (e) => Reflect.getPrototypeOf(e);
  function Jo(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const o = Te(e),
      i = Te(t);
    n || (t !== i && ct(o, 'get', t), ct(o, 'get', i));
    const { has: a } = sa(o),
      s = r ? Sl : n ? El : Po;
    if (a.call(o, t)) return s(e.get(t));
    if (a.call(o, i)) return s(e.get(i));
    e !== o && e.get(t);
  }
  function ei(e, t = !1) {
    const n = this.__v_raw,
      r = Te(n),
      o = Te(e);
    return t || (e !== o && ct(r, 'has', e), ct(r, 'has', o)), e === o ? n.has(e) : n.has(e) || n.has(o);
  }
  function ti(e, t = !1) {
    return (e = e.__v_raw), !t && ct(Te(e), 'iterate', qn), Reflect.get(e, 'size', e);
  }
  function Ac(e) {
    e = Te(e);
    const t = Te(this);
    return sa(t).has.call(t, e) || (t.add(e), on(t, 'add', e, e)), this;
  }
  function Ic(e, t) {
    t = Te(t);
    const n = Te(this),
      { has: r, get: o } = sa(n);
    let i = r.call(n, e);
    i || ((e = Te(e)), (i = r.call(n, e)));
    const a = o.call(n, e);
    return n.set(e, t), i ? Eo(t, a) && on(n, 'set', e, t) : on(n, 'add', e, t), this;
  }
  function Rc(e) {
    const t = Te(this),
      { has: n, get: r } = sa(t);
    let o = n.call(t, e);
    o || ((e = Te(e)), (o = n.call(t, e))), r && r.call(t, e);
    const i = t.delete(e);
    return o && on(t, 'delete', e, void 0), i;
  }
  function Lc() {
    const e = Te(this),
      t = e.size !== 0,
      n = e.clear();
    return t && on(e, 'clear', void 0, void 0), n;
  }
  function ni(e, t) {
    return function (r, o) {
      const i = this,
        a = i.__v_raw,
        s = Te(a),
        l = t ? Sl : e ? El : Po;
      return !e && ct(s, 'iterate', qn), a.forEach((c, u) => r.call(o, l(c), l(u), i));
    };
  }
  function ri(e, t, n) {
    return function (...r) {
      const o = this.__v_raw,
        i = Te(o),
        a = Sr(i),
        s = e === 'entries' || (e === Symbol.iterator && a),
        l = e === 'keys' && a,
        c = o[e](...r),
        u = n ? Sl : t ? El : Po;
      return (
        !t && ct(i, 'iterate', l ? $s : qn),
        {
          next() {
            const { value: f, done: d } = c.next();
            return d ? { value: f, done: d } : { value: s ? [u(f[0]), u(f[1])] : u(f), done: d };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function vn(e) {
    return function (...t) {
      return e === 'delete' ? !1 : this;
    };
  }
  function wg() {
    const e = {
        get(i) {
          return Jo(this, i);
        },
        get size() {
          return ti(this);
        },
        has: ei,
        add: Ac,
        set: Ic,
        delete: Rc,
        clear: Lc,
        forEach: ni(!1, !1),
      },
      t = {
        get(i) {
          return Jo(this, i, !1, !0);
        },
        get size() {
          return ti(this);
        },
        has: ei,
        add: Ac,
        set: Ic,
        delete: Rc,
        clear: Lc,
        forEach: ni(!1, !0),
      },
      n = {
        get(i) {
          return Jo(this, i, !0);
        },
        get size() {
          return ti(this, !0);
        },
        has(i) {
          return ei.call(this, i, !0);
        },
        add: vn('add'),
        set: vn('set'),
        delete: vn('delete'),
        clear: vn('clear'),
        forEach: ni(!0, !1),
      },
      r = {
        get(i) {
          return Jo(this, i, !0, !0);
        },
        get size() {
          return ti(this, !0);
        },
        has(i) {
          return ei.call(this, i, !0);
        },
        add: vn('add'),
        set: vn('set'),
        delete: vn('delete'),
        clear: vn('clear'),
        forEach: ni(!0, !0),
      };
    return (
      ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
        (e[i] = ri(i, !1, !1)), (n[i] = ri(i, !0, !1)), (t[i] = ri(i, !1, !0)), (r[i] = ri(i, !0, !0));
      }),
      [e, n, t, r]
    );
  }
  const [_g, Cg, xg, $g] = wg();
  function Tl(e, t) {
    const n = t ? (e ? $g : xg) : e ? Cg : _g;
    return (r, o, i) =>
      o === '__v_isReactive'
        ? !e
        : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
        ? r
        : Reflect.get(Me(n, o) && o in r ? n : r, o, i);
  }
  const Sg = { get: Tl(!1, !1) },
    Tg = { get: Tl(!1, !0) },
    Og = { get: Tl(!0, !1) },
    rp = new WeakMap(),
    op = new WeakMap(),
    ip = new WeakMap(),
    Eg = new WeakMap();
  function Pg(e) {
    switch (e) {
      case 'Object':
      case 'Array':
        return 1;
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return 2;
      default:
        return 0;
    }
  }
  function kg(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Pg(Uv(e));
  }
  function In(e) {
    return kr(e) ? e : Ol(e, !1, np, Sg, rp);
  }
  function ap(e) {
    return Ol(e, !1, bg, Tg, op);
  }
  function Yo(e) {
    return Ol(e, !0, yg, Og, ip);
  }
  function Ol(e, t, n, r, o) {
    if (!Le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = o.get(e);
    if (i) return i;
    const a = kg(e);
    if (a === 0) return e;
    const s = new Proxy(e, a === 2 ? r : n);
    return o.set(e, s), s;
  }
  function rn(e) {
    return kr(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function kr(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Ri(e) {
    return !!(e && e.__v_isShallow);
  }
  function sp(e) {
    return rn(e) || kr(e);
  }
  function Te(e) {
    const t = e && e.__v_raw;
    return t ? Te(t) : e;
  }
  function la(e) {
    return Ai(e, '__v_skip', !0), e;
  }
  const Po = (e) => (Le(e) ? In(e) : e),
    El = (e) => (Le(e) ? Yo(e) : e);
  function lp(e) {
    Tn && Mt && ((e = Te(e)), Jd(e.dep || (e.dep = Cl())));
  }
  function cp(e, t) {
    e = Te(e);
    const n = e.dep;
    n && Ss(n);
  }
  function Be(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function te(e) {
    return up(e, !1);
  }
  function le(e) {
    return up(e, !0);
  }
  function up(e, t) {
    return Be(e) ? e : new Mg(e, t);
  }
  class Mg {
    constructor(t, n) {
      (this.__v_isShallow = n),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = n ? t : Te(t)),
        (this._value = n ? t : Po(t));
    }
    get value() {
      return lp(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || Ri(t) || kr(t);
      (t = n ? t : Te(t)), Eo(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Po(t)), cp(this));
    }
  }
  function J(e) {
    return Be(e) ? e.value : e;
  }
  const Ag = {
    get: (e, t, n) => J(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return Be(o) && !Be(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
    },
  };
  function fp(e) {
    return rn(e) ? e : new Proxy(e, Ag);
  }
  function Ig(e) {
    const t = ge(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = dp(e, n);
    return t;
  }
  class Rg {
    constructor(t, n, r) {
      (this._object = t), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0);
    }
    get value() {
      const t = this._object[this._key];
      return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return ag(Te(this._object), this._key);
    }
  }
  class Lg {
    constructor(t) {
      (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
    }
    get value() {
      return this._getter();
    }
  }
  function Li(e, t, n) {
    return Be(e) ? e : Ce(e) ? new Lg(e) : Le(e) && arguments.length > 1 ? dp(e, t, n) : te(e);
  }
  function dp(e, t, n) {
    const r = e[t];
    return Be(r) ? r : new Rg(e, t, n);
  }
  class Dg {
    constructor(t, n, r, o) {
      (this._setter = n),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !1),
        (this._dirty = !0),
        (this.effect = new xl(t, () => {
          this._dirty || ((this._dirty = !0), cp(this));
        })),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !o),
        (this.__v_isReadonly = r);
    }
    get value() {
      const t = Te(this);
      return lp(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value;
    }
    set value(t) {
      this._setter(t);
    }
  }
  function Ng(e, t, n = !1) {
    let r, o;
    const i = Ce(e);
    return i ? ((r = e), (o = It)) : ((r = e.get), (o = e.set)), new Dg(r, o, i || !o, n);
  }
  function On(e, t, n, r) {
    let o;
    try {
      o = r ? e(...r) : e();
    } catch (i) {
      ca(i, t, n);
    }
    return o;
  }
  function xt(e, t, n, r) {
    if (Ce(e)) {
      const i = On(e, t, n, r);
      return (
        i &&
          Fd(i) &&
          i.catch((a) => {
            ca(a, t, n);
          }),
        i
      );
    }
    const o = [];
    for (let i = 0; i < e.length; i++) o.push(xt(e[i], t, n, r));
    return o;
  }
  function ca(e, t, n, r = !0) {
    const o = t ? t.vnode : null;
    if (t) {
      let i = t.parent;
      const a = t.proxy,
        s = n;
      for (; i; ) {
        const c = i.ec;
        if (c) {
          for (let u = 0; u < c.length; u++) if (c[u](e, a, s) === !1) return;
        }
        i = i.parent;
      }
      const l = t.appContext.config.errorHandler;
      if (l) {
        On(l, null, 10, [e, a, s]);
        return;
      }
    }
    jg(e, n, o, r);
  }
  function jg(e, t, n, r = !0) {
    console.error(e);
  }
  let ko = !1,
    Ts = !1;
  const Je = [];
  let Ft = 0;
  const Tr = [];
  let Jt = null,
    zn = 0;
  const pp = Promise.resolve();
  let Pl = null;
  function tt(e) {
    const t = Pl || pp;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Hg(e) {
    let t = Ft + 1,
      n = Je.length;
    for (; t < n; ) {
      const r = (t + n) >>> 1;
      Mo(Je[r]) < e ? (t = r + 1) : (n = r);
    }
    return t;
  }
  function kl(e) {
    (!Je.length || !Je.includes(e, ko && e.allowRecurse ? Ft + 1 : Ft)) &&
      (e.id == null ? Je.push(e) : Je.splice(Hg(e.id), 0, e), hp());
  }
  function hp() {
    !ko && !Ts && ((Ts = !0), (Pl = pp.then(vp)));
  }
  function Bg(e) {
    const t = Je.indexOf(e);
    t > Ft && Je.splice(t, 1);
  }
  function zg(e) {
    ge(e) ? Tr.push(...e) : (!Jt || !Jt.includes(e, e.allowRecurse ? zn + 1 : zn)) && Tr.push(e), hp();
  }
  function Dc(e, t = ko ? Ft + 1 : 0) {
    for (; t < Je.length; t++) {
      const n = Je[t];
      n && n.pre && (Je.splice(t, 1), t--, n());
    }
  }
  function mp(e) {
    if (Tr.length) {
      const t = [...new Set(Tr)];
      if (((Tr.length = 0), Jt)) {
        Jt.push(...t);
        return;
      }
      for (Jt = t, Jt.sort((n, r) => Mo(n) - Mo(r)), zn = 0; zn < Jt.length; zn++) Jt[zn]();
      (Jt = null), (zn = 0);
    }
  }
  const Mo = (e) => (e.id == null ? 1 / 0 : e.id),
    Fg = (e, t) => {
      const n = Mo(e) - Mo(t);
      if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1;
      }
      return n;
    };
  function vp(e) {
    (Ts = !1), (ko = !0), Je.sort(Fg);
    const t = It;
    try {
      for (Ft = 0; Ft < Je.length; Ft++) {
        const n = Je[Ft];
        n && n.active !== !1 && On(n, null, 14);
      }
    } finally {
      (Ft = 0), (Je.length = 0), mp(), (ko = !1), (Pl = null), (Je.length || Tr.length) && vp();
    }
  }
  function Wg(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Ne;
    let o = n;
    const i = t.startsWith('update:'),
      a = i && t.slice(7);
    if (a && a in r) {
      const u = `${a === 'modelValue' ? 'model' : a}Modifiers`,
        { number: f, trim: d } = r[u] || Ne;
      d && (o = n.map((p) => (ze(p) ? p.trim() : p))), f && (o = n.map(Gv));
    }
    let s,
      l = r[(s = za(t))] || r[(s = za(Ut(t)))];
    !l && i && (l = r[(s = za(sr(t)))]), l && xt(l, e, 6, o);
    const c = r[s + 'Once'];
    if (c) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[s]) return;
      (e.emitted[s] = !0), xt(c, e, 6, o);
    }
  }
  function gp(e, t, n = !1) {
    const r = t.emitsCache,
      o = r.get(e);
    if (o !== void 0) return o;
    const i = e.emits;
    let a = {},
      s = !1;
    if (!Ce(e)) {
      const l = (c) => {
        const u = gp(c, t, !0);
        u && ((s = !0), We(a, u));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !i && !s
      ? (Le(e) && r.set(e, null), null)
      : (ge(i) ? i.forEach((l) => (a[l] = null)) : We(a, i), Le(e) && r.set(e, a), a);
  }
  function ua(e, t) {
    return !e || !ra(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, '')), Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, sr(t)) || Me(e, t));
  }
  let qe = null,
    fa = null;
  function Di(e) {
    const t = qe;
    return (qe = e), (fa = (e && e.type.__scopeId) || null), t;
  }
  function yp(e) {
    fa = e;
  }
  function bp() {
    fa = null;
  }
  function $e(e, t = qe, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && Gc(-1);
      const i = Di(t);
      let a;
      try {
        a = e(...o);
      } finally {
        Di(i), r._d && Gc(1);
      }
      return a;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Wa(e) {
    const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: o,
      props: i,
      propsOptions: [a],
      slots: s,
      attrs: l,
      emit: c,
      render: u,
      renderCache: f,
      data: d,
      setupState: p,
      ctx: h,
      inheritAttrs: m,
    } = e;
    let y, b;
    const _ = Di(e);
    try {
      if (n.shapeFlag & 4) {
        const R = o || r;
        (y = zt(u.call(R, R, f, i, p, d, h))), (b = l);
      } else {
        const R = t;
        (y = zt(R.length > 1 ? R(i, { attrs: l, slots: s, emit: c }) : R(i, null))), (b = t.props ? l : Vg(l));
      }
    } catch (R) {
      (go.length = 0), ca(R, e, 1), (y = v(vt));
    }
    let M = y;
    if (b && m !== !1) {
      const R = Object.keys(b),
        { shapeFlag: x } = M;
      R.length && x & 7 && (a && R.some(gl) && (b = Kg(b, a)), (M = sn(M, b)));
    }
    return (
      n.dirs && ((M = sn(M)), (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
      n.transition && (M.transition = n.transition),
      (y = M),
      Di(_),
      y
    );
  }
  const Vg = (e) => {
      let t;
      for (const n in e) (n === 'class' || n === 'style' || ra(n)) && ((t || (t = {}))[n] = e[n]);
      return t;
    },
    Kg = (e, t) => {
      const n = {};
      for (const r in e) (!gl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
      return n;
    };
  function Ug(e, t, n) {
    const { props: r, children: o, component: i } = e,
      { props: a, children: s, patchFlag: l } = t,
      c = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? Nc(r, a, c) : !!a;
      if (l & 8) {
        const u = t.dynamicProps;
        for (let f = 0; f < u.length; f++) {
          const d = u[f];
          if (a[d] !== r[d] && !ua(c, d)) return !0;
        }
      }
    } else return (o || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? (a ? Nc(r, a, c) : !0) : !!a;
    return !1;
  }
  function Nc(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      if (t[i] !== e[i] && !ua(n, i)) return !0;
    }
    return !1;
  }
  function Yg({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
  }
  const Xg = (e) => e.__isSuspense;
  function Gg(e, t) {
    t && t.pendingBranch ? (ge(e) ? t.effects.push(...e) : t.effects.push(e)) : zg(e);
  }
  function $t(e, t) {
    return Ml(e, null, t);
  }
  const oi = {};
  function _e(e, t, n) {
    return Ml(e, t, n);
  }
  function Ml(e, t, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: a } = Ne) {
    var s;
    const l = _l() === ((s = Ue) == null ? void 0 : s.scope) ? Ue : null;
    let c,
      u = !1,
      f = !1;
    if (
      (Be(e)
        ? ((c = () => e.value), (u = Ri(e)))
        : rn(e)
        ? ((c = () => e), (r = !0))
        : ge(e)
        ? ((f = !0),
          (u = e.some((R) => rn(R) || Ri(R))),
          (c = () =>
            e.map((R) => {
              if (Be(R)) return R.value;
              if (rn(R)) return Un(R);
              if (Ce(R)) return On(R, l, 2);
            })))
        : Ce(e)
        ? t
          ? (c = () => On(e, l, 2))
          : (c = () => {
              if (!(l && l.isUnmounted)) return d && d(), xt(e, l, 3, [p]);
            })
        : (c = It),
      t && r)
    ) {
      const R = c;
      c = () => Un(R());
    }
    let d,
      p = (R) => {
        d = _.onStop = () => {
          On(R, l, 4);
        };
      },
      h;
    if (Ro)
      if (((p = It), t ? n && xt(t, l, 3, [c(), f ? [] : void 0, p]) : c(), o === 'sync')) {
        const R = W0();
        h = R.__watcherHandles || (R.__watcherHandles = []);
      } else return It;
    let m = f ? new Array(e.length).fill(oi) : oi;
    const y = () => {
      if (_.active)
        if (t) {
          const R = _.run();
          (r || u || (f ? R.some((x, C) => Eo(x, m[C])) : Eo(R, m))) &&
            (d && d(), xt(t, l, 3, [R, m === oi ? void 0 : f && m[0] === oi ? [] : m, p]), (m = R));
        } else _.run();
    };
    y.allowRecurse = !!t;
    let b;
    o === 'sync'
      ? (b = y)
      : o === 'post'
      ? (b = () => st(y, l && l.suspense))
      : ((y.pre = !0), l && (y.id = l.uid), (b = () => kl(y)));
    const _ = new xl(c, b);
    t ? (n ? y() : (m = _.run())) : o === 'post' ? st(_.run.bind(_), l && l.suspense) : _.run();
    const M = () => {
      _.stop(), l && l.scope && yl(l.scope.effects, _);
    };
    return h && h.push(M), M;
  }
  function qg(e, t, n) {
    const r = this.proxy,
      o = ze(e) ? (e.includes('.') ? wp(r, e) : () => r[e]) : e.bind(r, r);
    let i;
    Ce(t) ? (i = t) : ((i = t.handler), (n = t));
    const a = Ue;
    Mr(this);
    const s = Ml(o, i.bind(r), n);
    return a ? Mr(a) : Zn(), s;
  }
  function wp(e, t) {
    const n = t.split('.');
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  function Un(e, t) {
    if (!Le(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
    if ((t.add(e), Be(e))) Un(e.value, t);
    else if (ge(e)) for (let n = 0; n < e.length; n++) Un(e[n], t);
    else if (zd(e) || Sr(e))
      e.forEach((n) => {
        Un(n, t);
      });
    else if (Vd(e)) for (const n in e) Un(e[n], t);
    return e;
  }
  function da(e, t) {
    const n = qe;
    if (n === null) return e;
    const r = va(n) || n.proxy,
      o = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
      let [a, s, l, c = Ne] = t[i];
      a &&
        (Ce(a) && (a = { mounted: a, updated: a }),
        a.deep && Un(s),
        o.push({ dir: a, instance: r, value: s, oldValue: void 0, arg: l, modifiers: c }));
    }
    return e;
  }
  function Rn(e, t, n, r) {
    const o = e.dirs,
      i = t && t.dirs;
    for (let a = 0; a < o.length; a++) {
      const s = o[a];
      i && (s.oldValue = i[a].value);
      let l = s.dir[r];
      l && (Wr(), xt(l, n, 8, [e.el, s, e, t]), Vr());
    }
  }
  function Zg() {
    const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
    return (
      ut(() => {
        e.isMounted = !0;
      }),
      St(() => {
        e.isUnmounting = !0;
      }),
      e
    );
  }
  const bt = [Function, Array],
    _p = {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: bt,
      onEnter: bt,
      onAfterEnter: bt,
      onEnterCancelled: bt,
      onBeforeLeave: bt,
      onLeave: bt,
      onAfterLeave: bt,
      onLeaveCancelled: bt,
      onBeforeAppear: bt,
      onAppear: bt,
      onAfterAppear: bt,
      onAppearCancelled: bt,
    },
    Qg = {
      name: 'BaseTransition',
      props: _p,
      setup(e, { slots: t }) {
        const n = fn(),
          r = Zg();
        let o;
        return () => {
          const i = t.default && xp(t.default(), !0);
          if (!i || !i.length) return;
          let a = i[0];
          if (i.length > 1) {
            for (const m of i)
              if (m.type !== vt) {
                a = m;
                break;
              }
          }
          const s = Te(e),
            { mode: l } = s;
          if (r.isLeaving) return Va(a);
          const c = jc(a);
          if (!c) return Va(a);
          const u = Os(c, s, r, n);
          Es(c, u);
          const f = n.subTree,
            d = f && jc(f);
          let p = !1;
          const { getTransitionKey: h } = c.type;
          if (h) {
            const m = h();
            o === void 0 ? (o = m) : m !== o && ((o = m), (p = !0));
          }
          if (d && d.type !== vt && (!Fn(c, d) || p)) {
            const m = Os(d, s, r, n);
            if ((Es(d, m), l === 'out-in'))
              return (
                (r.isLeaving = !0),
                (m.afterLeave = () => {
                  (r.isLeaving = !1), n.update.active !== !1 && n.update();
                }),
                Va(a)
              );
            l === 'in-out' &&
              c.type !== vt &&
              (m.delayLeave = (y, b, _) => {
                const M = Cp(r, d);
                (M[String(d.key)] = d),
                  (y._leaveCb = () => {
                    b(), (y._leaveCb = void 0), delete u.delayedLeave;
                  }),
                  (u.delayedLeave = _);
              });
          }
          return a;
        };
      },
    },
    Jg = Qg;
  function Cp(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || ((r = Object.create(null)), n.set(t.type, r)), r;
  }
  function Os(e, t, n, r) {
    const {
        appear: o,
        mode: i,
        persisted: a = !1,
        onBeforeEnter: s,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: f,
        onLeave: d,
        onAfterLeave: p,
        onLeaveCancelled: h,
        onBeforeAppear: m,
        onAppear: y,
        onAfterAppear: b,
        onAppearCancelled: _,
      } = t,
      M = String(e.key),
      R = Cp(n, e),
      x = ($, L) => {
        $ && xt($, r, 9, L);
      },
      C = ($, L) => {
        const S = L[1];
        x($, L), ge($) ? $.every((B) => B.length <= 1) && S() : $.length <= 1 && S();
      },
      T = {
        mode: i,
        persisted: a,
        beforeEnter($) {
          let L = s;
          if (!n.isMounted)
            if (o) L = m || s;
            else return;
          $._leaveCb && $._leaveCb(!0);
          const S = R[M];
          S && Fn(e, S) && S.el._leaveCb && S.el._leaveCb(), x(L, [$]);
        },
        enter($) {
          let L = l,
            S = c,
            B = u;
          if (!n.isMounted)
            if (o) (L = y || l), (S = b || c), (B = _ || u);
            else return;
          let Y = !1;
          const ne = ($._enterCb = (Z) => {
            Y || ((Y = !0), Z ? x(B, [$]) : x(S, [$]), T.delayedLeave && T.delayedLeave(), ($._enterCb = void 0));
          });
          L ? C(L, [$, ne]) : ne();
        },
        leave($, L) {
          const S = String(e.key);
          if (($._enterCb && $._enterCb(!0), n.isUnmounting)) return L();
          x(f, [$]);
          let B = !1;
          const Y = ($._leaveCb = (ne) => {
            B || ((B = !0), L(), ne ? x(h, [$]) : x(p, [$]), ($._leaveCb = void 0), R[S] === e && delete R[S]);
          });
          (R[S] = e), d ? C(d, [$, Y]) : Y();
        },
        clone($) {
          return Os($, t, n, r);
        },
      };
    return T;
  }
  function Va(e) {
    if (pa(e)) return (e = sn(e)), (e.children = null), e;
  }
  function jc(e) {
    return pa(e) ? (e.children ? e.children[0] : void 0) : e;
  }
  function Es(e, t) {
    e.shapeFlag & 6 && e.component
      ? Es(e.component.subTree, t)
      : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
  }
  function xp(e, t = !1, n) {
    let r = [],
      o = 0;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
      a.type === Ie
        ? (a.patchFlag & 128 && o++, (r = r.concat(xp(a.children, t, s))))
        : (t || a.type !== vt) && r.push(s != null ? sn(a, { key: s }) : a);
    }
    if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r;
  }
  function ce(e, t) {
    return Ce(e) ? (() => We({ name: e.name }, t, { setup: e }))() : e;
  }
  const ho = (e) => !!e.type.__asyncLoader,
    pa = (e) => e.type.__isKeepAlive;
  function e0(e, t) {
    $p(e, 'a', t);
  }
  function t0(e, t) {
    $p(e, 'da', t);
  }
  function $p(e, t, n = Ue) {
    const r =
      e.__wdc ||
      (e.__wdc = () => {
        let o = n;
        for (; o; ) {
          if (o.isDeactivated) return;
          o = o.parent;
        }
        return e();
      });
    if ((ha(t, r, n), n)) {
      let o = n.parent;
      for (; o && o.parent; ) pa(o.parent.vnode) && n0(r, t, n, o), (o = o.parent);
    }
  }
  function n0(e, t, n, r) {
    const o = ha(t, e, r, !0);
    Kr(() => {
      yl(r[t], o);
    }, n);
  }
  function ha(e, t, n = Ue, r = !1) {
    if (n) {
      const o = n[e] || (n[e] = []),
        i =
          t.__weh ||
          (t.__weh = (...a) => {
            if (n.isUnmounted) return;
            Wr(), Mr(n);
            const s = xt(t, n, e, a);
            return Zn(), Vr(), s;
          });
      return r ? o.unshift(i) : o.push(i), i;
    }
  }
  const un =
      (e) =>
      (t, n = Ue) =>
        (!Ro || e === 'sp') && ha(e, (...r) => t(...r), n),
    Sp = un('bm'),
    ut = un('m'),
    Tp = un('bu'),
    Xo = un('u'),
    St = un('bum'),
    Kr = un('um'),
    r0 = un('sp'),
    o0 = un('rtg'),
    i0 = un('rtc');
  function a0(e, t = Ue) {
    ha('ec', e, t);
  }
  const Op = 'components',
    s0 = 'directives',
    Ep = Symbol.for('v-ndc');
  function Pp(e) {
    return ze(e) ? kp(Op, e, !1) || e : e || Ep;
  }
  function l0(e) {
    return kp(s0, e);
  }
  function kp(e, t, n = !0, r = !1) {
    const o = qe || Ue;
    if (o) {
      const i = o.type;
      if (e === Op) {
        const s = B0(i, !1);
        if (s && (s === t || s === Ut(t) || s === aa(Ut(t)))) return i;
      }
      const a = Hc(o[e] || i[e], t) || Hc(o.appContext[e], t);
      return !a && r ? i : a;
    }
  }
  function Hc(e, t) {
    return e && (e[t] || e[Ut(t)] || e[aa(Ut(t))]);
  }
  function Ni(e, t, n, r) {
    let o;
    const i = n && n[r];
    if (ge(e) || ze(e)) {
      o = new Array(e.length);
      for (let a = 0, s = e.length; a < s; a++) o[a] = t(e[a], a, void 0, i && i[a]);
    } else if (typeof e == 'number') {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, i && i[a]);
    } else if (Le(e))
      if (e[Symbol.iterator]) o = Array.from(e, (a, s) => t(a, s, void 0, i && i[s]));
      else {
        const a = Object.keys(e);
        o = new Array(a.length);
        for (let s = 0, l = a.length; s < l; s++) {
          const c = a[s];
          o[s] = t(e[c], c, s, i && i[s]);
        }
      }
    else o = [];
    return n && (n[r] = o), o;
  }
  function Rt(e, t, n = {}, r, o) {
    if (qe.isCE || (qe.parent && ho(qe.parent) && qe.parent.isCE))
      return t !== 'default' && (n.name = t), v('slot', n, r && r());
    let i = e[t];
    i && i._c && (i._d = !1), he();
    const a = i && Mp(i(n)),
      s = nt(Ie, { key: n.key || (a && a.key) || `_${t}` }, a || (r ? r() : []), a && e._ === 1 ? 64 : -2);
    return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + '-s']), i && i._c && (i._d = !0), s;
  }
  function Mp(e) {
    return e.some((t) => (an(t) ? !(t.type === vt || (t.type === Ie && !Mp(t.children))) : !0)) ? e : null;
  }
  const Ps = (e) => (e ? (Vp(e) ? va(e) || e.proxy : Ps(e.parent)) : null),
    mo = We(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => Ps(e.parent),
      $root: (e) => Ps(e.root),
      $emit: (e) => e.emit,
      $options: (e) => Al(e),
      $forceUpdate: (e) => e.f || (e.f = () => kl(e.update)),
      $nextTick: (e) => e.n || (e.n = tt.bind(e.proxy)),
      $watch: (e) => qg.bind(e),
    }),
    Ka = (e, t) => e !== Ne && !e.__isScriptSetup && Me(e, t),
    c0 = {
      get({ _: e }, t) {
        const { ctx: n, setupState: r, data: o, props: i, accessCache: a, type: s, appContext: l } = e;
        let c;
        if (t[0] !== '$') {
          const p = a[t];
          if (p !== void 0)
            switch (p) {
              case 1:
                return r[t];
              case 2:
                return o[t];
              case 4:
                return n[t];
              case 3:
                return i[t];
            }
          else {
            if (Ka(r, t)) return (a[t] = 1), r[t];
            if (o !== Ne && Me(o, t)) return (a[t] = 2), o[t];
            if ((c = e.propsOptions[0]) && Me(c, t)) return (a[t] = 3), i[t];
            if (n !== Ne && Me(n, t)) return (a[t] = 4), n[t];
            ks && (a[t] = 0);
          }
        }
        const u = mo[t];
        let f, d;
        if (u) return t === '$attrs' && ct(e, 'get', t), u(e);
        if ((f = s.__cssModules) && (f = f[t])) return f;
        if (n !== Ne && Me(n, t)) return (a[t] = 4), n[t];
        if (((d = l.config.globalProperties), Me(d, t))) return d[t];
      },
      set({ _: e }, t, n) {
        const { data: r, setupState: o, ctx: i } = e;
        return Ka(o, t)
          ? ((o[t] = n), !0)
          : r !== Ne && Me(r, t)
          ? ((r[t] = n), !0)
          : Me(e.props, t) || (t[0] === '$' && t.slice(1) in e)
          ? !1
          : ((i[t] = n), !0);
      },
      has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i } }, a) {
        let s;
        return (
          !!n[a] ||
          (e !== Ne && Me(e, a)) ||
          Ka(t, a) ||
          ((s = i[0]) && Me(s, a)) ||
          Me(r, a) ||
          Me(mo, a) ||
          Me(o.config.globalProperties, a)
        );
      },
      defineProperty(e, t, n) {
        return (
          n.get != null ? (e._.accessCache[t] = 0) : Me(n, 'value') && this.set(e, t, n.value, null),
          Reflect.defineProperty(e, t, n)
        );
      },
    };
  function Ap() {
    return u0().slots;
  }
  function u0() {
    const e = fn();
    return e.setupContext || (e.setupContext = Up(e));
  }
  function Bc(e) {
    return ge(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
  }
  let ks = !0;
  function f0(e) {
    const t = Al(e),
      n = e.proxy,
      r = e.ctx;
    (ks = !1), t.beforeCreate && zc(t.beforeCreate, e, 'bc');
    const {
      data: o,
      computed: i,
      methods: a,
      watch: s,
      provide: l,
      inject: c,
      created: u,
      beforeMount: f,
      mounted: d,
      beforeUpdate: p,
      updated: h,
      activated: m,
      deactivated: y,
      beforeDestroy: b,
      beforeUnmount: _,
      destroyed: M,
      unmounted: R,
      render: x,
      renderTracked: C,
      renderTriggered: T,
      errorCaptured: $,
      serverPrefetch: L,
      expose: S,
      inheritAttrs: B,
      components: Y,
      directives: ne,
      filters: Z,
    } = t;
    if ((c && d0(c, r, null), a))
      for (const z in a) {
        const j = a[z];
        Ce(j) && (r[z] = j.bind(n));
      }
    if (o) {
      const z = o.call(n, n);
      Le(z) && (e.data = In(z));
    }
    if (((ks = !0), i))
      for (const z in i) {
        const j = i[z],
          ee = Ce(j) ? j.bind(n, n) : Ce(j.get) ? j.get.bind(n, n) : It,
          ae = !Ce(j) && Ce(j.set) ? j.set.bind(n) : It,
          Q = P({ get: ee, set: ae });
        Object.defineProperty(r, z, {
          enumerable: !0,
          configurable: !0,
          get: () => Q.value,
          set: (se) => (Q.value = se),
        });
      }
    if (s) for (const z in s) Ip(s[z], r, n, z);
    if (l) {
      const z = Ce(l) ? l.call(n) : l;
      Reflect.ownKeys(z).forEach((j) => {
        it(j, z[j]);
      });
    }
    u && zc(u, e, 'c');
    function A(z, j) {
      ge(j) ? j.forEach((ee) => z(ee.bind(n))) : j && z(j.bind(n));
    }
    if (
      (A(Sp, f),
      A(ut, d),
      A(Tp, p),
      A(Xo, h),
      A(e0, m),
      A(t0, y),
      A(a0, $),
      A(i0, C),
      A(o0, T),
      A(St, _),
      A(Kr, R),
      A(r0, L),
      ge(S))
    )
      if (S.length) {
        const z = e.exposed || (e.exposed = {});
        S.forEach((j) => {
          Object.defineProperty(z, j, { get: () => n[j], set: (ee) => (n[j] = ee) });
        });
      } else e.exposed || (e.exposed = {});
    x && e.render === It && (e.render = x),
      B != null && (e.inheritAttrs = B),
      Y && (e.components = Y),
      ne && (e.directives = ne);
  }
  function d0(e, t, n = It) {
    ge(e) && (e = Ms(e));
    for (const r in e) {
      const o = e[r];
      let i;
      Le(o) ? ('default' in o ? (i = Ae(o.from || r, o.default, !0)) : (i = Ae(o.from || r))) : (i = Ae(o)),
        Be(i)
          ? Object.defineProperty(t, r, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: (a) => (i.value = a),
            })
          : (t[r] = i);
    }
  }
  function zc(e, t, n) {
    xt(ge(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Ip(e, t, n, r) {
    const o = r.includes('.') ? wp(n, r) : () => n[r];
    if (ze(e)) {
      const i = t[e];
      Ce(i) && _e(o, i);
    } else if (Ce(e)) _e(o, e.bind(n));
    else if (Le(e))
      if (ge(e)) e.forEach((i) => Ip(i, t, n, r));
      else {
        const i = Ce(e.handler) ? e.handler.bind(n) : t[e.handler];
        Ce(i) && _e(o, i, e);
      }
  }
  function Al(e) {
    const t = e.type,
      { mixins: n, extends: r } = t,
      {
        mixins: o,
        optionsCache: i,
        config: { optionMergeStrategies: a },
      } = e.appContext,
      s = i.get(t);
    let l;
    return (
      s
        ? (l = s)
        : !o.length && !n && !r
        ? (l = t)
        : ((l = {}), o.length && o.forEach((c) => ji(l, c, a, !0)), ji(l, t, a)),
      Le(t) && i.set(t, l),
      l
    );
  }
  function ji(e, t, n, r = !1) {
    const { mixins: o, extends: i } = t;
    i && ji(e, i, n, !0), o && o.forEach((a) => ji(e, a, n, !0));
    for (const a in t)
      if (!(r && a === 'expose')) {
        const s = p0[a] || (n && n[a]);
        e[a] = s ? s(e[a], t[a]) : t[a];
      }
    return e;
  }
  const p0 = {
    data: Fc,
    props: Wc,
    emits: Wc,
    methods: lo,
    computed: lo,
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    components: lo,
    directives: lo,
    watch: m0,
    provide: Fc,
    inject: h0,
  };
  function Fc(e, t) {
    return t
      ? e
        ? function () {
            return We(Ce(e) ? e.call(this, this) : e, Ce(t) ? t.call(this, this) : t);
          }
        : t
      : e;
  }
  function h0(e, t) {
    return lo(Ms(e), Ms(t));
  }
  function Ms(e) {
    if (ge(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function rt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function lo(e, t) {
    return e ? We(Object.create(null), e, t) : t;
  }
  function Wc(e, t) {
    return e ? (ge(e) && ge(t) ? [...new Set([...e, ...t])] : We(Object.create(null), Bc(e), Bc(t ?? {}))) : t;
  }
  function m0(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = We(Object.create(null), e);
    for (const r in t) n[r] = rt(e[r], t[r]);
    return n;
  }
  function Rp() {
    return {
      app: null,
      config: {
        isNativeTag: Wv,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let v0 = 0;
  function g0(e, t) {
    return function (r, o = null) {
      Ce(r) || (r = We({}, r)), o != null && !Le(o) && (o = null);
      const i = Rp(),
        a = new Set();
      let s = !1;
      const l = (i.app = {
        _uid: v0++,
        _component: r,
        _props: o,
        _container: null,
        _context: i,
        _instance: null,
        version: V0,
        get config() {
          return i.config;
        },
        set config(c) {},
        use(c, ...u) {
          return a.has(c) || (c && Ce(c.install) ? (a.add(c), c.install(l, ...u)) : Ce(c) && (a.add(c), c(l, ...u))), l;
        },
        mixin(c) {
          return i.mixins.includes(c) || i.mixins.push(c), l;
        },
        component(c, u) {
          return u ? ((i.components[c] = u), l) : i.components[c];
        },
        directive(c, u) {
          return u ? ((i.directives[c] = u), l) : i.directives[c];
        },
        mount(c, u, f) {
          if (!s) {
            const d = v(r, o);
            return (
              (d.appContext = i),
              u && t ? t(d, c) : e(d, c, f),
              (s = !0),
              (l._container = c),
              (c.__vue_app__ = l),
              va(d.component) || d.component.proxy
            );
          }
        },
        unmount() {
          s && (e(null, l._container), delete l._container.__vue_app__);
        },
        provide(c, u) {
          return (i.provides[c] = u), l;
        },
        runWithContext(c) {
          Ao = l;
          try {
            return c();
          } finally {
            Ao = null;
          }
        },
      });
      return l;
    };
  }
  let Ao = null;
  function it(e, t) {
    if (Ue) {
      let n = Ue.provides;
      const r = Ue.parent && Ue.parent.provides;
      r === n && (n = Ue.provides = Object.create(r)), (n[e] = t);
    }
  }
  function Ae(e, t, n = !1) {
    const r = Ue || qe;
    if (r || Ao) {
      const o = r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : Ao._context.provides;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && Ce(t) ? t.call(r && r.proxy) : t;
    }
  }
  function y0() {
    return !!(Ue || qe || Ao);
  }
  function b0(e, t, n, r = !1) {
    const o = {},
      i = {};
    Ai(i, ma, 1), (e.propsDefaults = Object.create(null)), Lp(e, t, o, i);
    for (const a in e.propsOptions[0]) a in o || (o[a] = void 0);
    n ? (e.props = r ? o : ap(o)) : e.type.props ? (e.props = o) : (e.props = i), (e.attrs = i);
  }
  function w0(e, t, n, r) {
    const {
        props: o,
        attrs: i,
        vnode: { patchFlag: a },
      } = e,
      s = Te(o),
      [l] = e.propsOptions;
    let c = !1;
    if ((r || a > 0) && !(a & 16)) {
      if (a & 8) {
        const u = e.vnode.dynamicProps;
        for (let f = 0; f < u.length; f++) {
          let d = u[f];
          if (ua(e.emitsOptions, d)) continue;
          const p = t[d];
          if (l)
            if (Me(i, d)) p !== i[d] && ((i[d] = p), (c = !0));
            else {
              const h = Ut(d);
              o[h] = As(l, s, h, p, e, !1);
            }
          else p !== i[d] && ((i[d] = p), (c = !0));
        }
      }
    } else {
      Lp(e, t, o, i) && (c = !0);
      let u;
      for (const f in s)
        (!t || (!Me(t, f) && ((u = sr(f)) === f || !Me(t, u)))) &&
          (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (o[f] = As(l, s, f, void 0, e, !0)) : delete o[f]);
      if (i !== s) for (const f in i) (!t || !Me(t, f)) && (delete i[f], (c = !0));
    }
    c && on(e, 'set', '$attrs');
  }
  function Lp(e, t, n, r) {
    const [o, i] = e.propsOptions;
    let a = !1,
      s;
    if (t)
      for (let l in t) {
        if (_i(l)) continue;
        const c = t[l];
        let u;
        o && Me(o, (u = Ut(l)))
          ? !i || !i.includes(u)
            ? (n[u] = c)
            : ((s || (s = {}))[u] = c)
          : ua(e.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (a = !0)));
      }
    if (i) {
      const l = Te(n),
        c = s || Ne;
      for (let u = 0; u < i.length; u++) {
        const f = i[u];
        n[f] = As(o, l, f, c[f], e, !Me(c, f));
      }
    }
    return a;
  }
  function As(e, t, n, r, o, i) {
    const a = e[n];
    if (a != null) {
      const s = Me(a, 'default');
      if (s && r === void 0) {
        const l = a.default;
        if (a.type !== Function && !a.skipFactory && Ce(l)) {
          const { propsDefaults: c } = o;
          n in c ? (r = c[n]) : (Mr(o), (r = c[n] = l.call(null, t)), Zn());
        } else r = l;
      }
      a[0] && (i && !s ? (r = !1) : a[1] && (r === '' || r === sr(n)) && (r = !0));
    }
    return r;
  }
  function Dp(e, t, n = !1) {
    const r = t.propsCache,
      o = r.get(e);
    if (o) return o;
    const i = e.props,
      a = {},
      s = [];
    let l = !1;
    if (!Ce(e)) {
      const u = (f) => {
        l = !0;
        const [d, p] = Dp(f, t, !0);
        We(a, d), p && s.push(...p);
      };
      !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
    }
    if (!i && !l) return Le(e) && r.set(e, $r), $r;
    if (ge(i))
      for (let u = 0; u < i.length; u++) {
        const f = Ut(i[u]);
        Vc(f) && (a[f] = Ne);
      }
    else if (i)
      for (const u in i) {
        const f = Ut(u);
        if (Vc(f)) {
          const d = i[u],
            p = (a[f] = ge(d) || Ce(d) ? { type: d } : We({}, d));
          if (p) {
            const h = Yc(Boolean, p.type),
              m = Yc(String, p.type);
            (p[0] = h > -1), (p[1] = m < 0 || h < m), (h > -1 || Me(p, 'default')) && s.push(f);
          }
        }
      }
    const c = [a, s];
    return Le(e) && r.set(e, c), c;
  }
  function Vc(e) {
    return e[0] !== '$';
  }
  function Kc(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? 'null' : '';
  }
  function Uc(e, t) {
    return Kc(e) === Kc(t);
  }
  function Yc(e, t) {
    return ge(t) ? t.findIndex((n) => Uc(n, e)) : Ce(t) && Uc(t, e) ? 0 : -1;
  }
  const Np = (e) => e[0] === '_' || e === '$stable',
    Il = (e) => (ge(e) ? e.map(zt) : [zt(e)]),
    _0 = (e, t, n) => {
      if (t._n) return t;
      const r = $e((...o) => Il(t(...o)), n);
      return (r._c = !1), r;
    },
    jp = (e, t, n) => {
      const r = e._ctx;
      for (const o in e) {
        if (Np(o)) continue;
        const i = e[o];
        if (Ce(i)) t[o] = _0(o, i, r);
        else if (i != null) {
          const a = Il(i);
          t[o] = () => a;
        }
      }
    },
    Hp = (e, t) => {
      const n = Il(t);
      e.slots.default = () => n;
    },
    C0 = (e, t) => {
      if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? ((e.slots = Te(t)), Ai(t, '_', n)) : jp(t, (e.slots = {}));
      } else (e.slots = {}), t && Hp(e, t);
      Ai(e.slots, ma, 1);
    },
    x0 = (e, t, n) => {
      const { vnode: r, slots: o } = e;
      let i = !0,
        a = Ne;
      if (r.shapeFlag & 32) {
        const s = t._;
        s ? (n && s === 1 ? (i = !1) : (We(o, t), !n && s === 1 && delete o._)) : ((i = !t.$stable), jp(t, o)), (a = t);
      } else t && (Hp(e, t), (a = { default: 1 }));
      if (i) for (const s in o) !Np(s) && !(s in a) && delete o[s];
    };
  function Is(e, t, n, r, o = !1) {
    if (ge(e)) {
      e.forEach((d, p) => Is(d, t && (ge(t) ? t[p] : t), n, r, o));
      return;
    }
    if (ho(r) && !o) return;
    const i = r.shapeFlag & 4 ? va(r.component) || r.component.proxy : r.el,
      a = o ? null : i,
      { i: s, r: l } = e,
      c = t && t.r,
      u = s.refs === Ne ? (s.refs = {}) : s.refs,
      f = s.setupState;
    if (
      (c != null && c !== l && (ze(c) ? ((u[c] = null), Me(f, c) && (f[c] = null)) : Be(c) && (c.value = null)), Ce(l))
    )
      On(l, s, 12, [a, u]);
    else {
      const d = ze(l),
        p = Be(l);
      if (d || p) {
        const h = () => {
          if (e.f) {
            const m = d ? (Me(f, l) ? f[l] : u[l]) : l.value;
            o
              ? ge(m) && yl(m, i)
              : ge(m)
              ? m.includes(i) || m.push(i)
              : d
              ? ((u[l] = [i]), Me(f, l) && (f[l] = u[l]))
              : ((l.value = [i]), e.k && (u[e.k] = l.value));
          } else d ? ((u[l] = a), Me(f, l) && (f[l] = a)) : p && ((l.value = a), e.k && (u[e.k] = a));
        };
        a ? ((h.id = -1), st(h, n)) : h();
      }
    }
  }
  const st = Gg;
  function $0(e) {
    return S0(e);
  }
  function S0(e, t) {
    const n = Cs();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: i,
        createElement: a,
        createText: s,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: f,
        nextSibling: d,
        setScopeId: p = It,
        insertStaticContent: h,
      } = e,
      m = (g, w, O, N = null, F = null, H = null, U = !1, D = null, V = !!w.dynamicChildren) => {
        if (g === w) return;
        g && !Fn(g, w) && ((N = I(g)), se(g, F, H, !0), (g = null)),
          w.patchFlag === -2 && ((V = !1), (w.dynamicChildren = null));
        const { type: W, ref: re, shapeFlag: oe } = w;
        switch (W) {
          case Go:
            y(g, w, O, N);
            break;
          case vt:
            b(g, w, O, N);
            break;
          case Ua:
            g == null && _(w, O, N, U);
            break;
          case Ie:
            Y(g, w, O, N, F, H, U, D, V);
            break;
          default:
            oe & 1
              ? x(g, w, O, N, F, H, U, D, V)
              : oe & 6
              ? ne(g, w, O, N, F, H, U, D, V)
              : (oe & 64 || oe & 128) && W.process(g, w, O, N, F, H, U, D, V, K);
        }
        re != null && F && Is(re, g && g.ref, H, w || g, !w);
      },
      y = (g, w, O, N) => {
        if (g == null) r((w.el = s(w.children)), O, N);
        else {
          const F = (w.el = g.el);
          w.children !== g.children && c(F, w.children);
        }
      },
      b = (g, w, O, N) => {
        g == null ? r((w.el = l(w.children || '')), O, N) : (w.el = g.el);
      },
      _ = (g, w, O, N) => {
        [g.el, g.anchor] = h(g.children, w, O, N, g.el, g.anchor);
      },
      M = ({ el: g, anchor: w }, O, N) => {
        let F;
        for (; g && g !== w; ) (F = d(g)), r(g, O, N), (g = F);
        r(w, O, N);
      },
      R = ({ el: g, anchor: w }) => {
        let O;
        for (; g && g !== w; ) (O = d(g)), o(g), (g = O);
        o(w);
      },
      x = (g, w, O, N, F, H, U, D, V) => {
        (U = U || w.type === 'svg'), g == null ? C(w, O, N, F, H, U, D, V) : L(g, w, F, H, U, D, V);
      },
      C = (g, w, O, N, F, H, U, D) => {
        let V, W;
        const { type: re, props: oe, shapeFlag: ie, transition: pe, dirs: ye } = g;
        if (
          ((V = g.el = a(g.type, H, oe && oe.is, oe)),
          ie & 8 ? u(V, g.children) : ie & 16 && $(g.children, V, null, N, F, H && re !== 'foreignObject', U, D),
          ye && Rn(g, null, N, 'created'),
          T(V, g, g.scopeId, U, N),
          oe)
        ) {
          for (const be in oe) be !== 'value' && !_i(be) && i(V, be, null, oe[be], H, g.children, N, F, G);
          'value' in oe && i(V, 'value', null, oe.value), (W = oe.onVnodeBeforeMount) && Ht(W, N, g);
        }
        ye && Rn(g, null, N, 'beforeMount');
        const ke = (!F || (F && !F.pendingBranch)) && pe && !pe.persisted;
        ke && pe.beforeEnter(V),
          r(V, w, O),
          ((W = oe && oe.onVnodeMounted) || ke || ye) &&
            st(() => {
              W && Ht(W, N, g), ke && pe.enter(V), ye && Rn(g, null, N, 'mounted');
            }, F);
      },
      T = (g, w, O, N, F) => {
        if ((O && p(g, O), N)) for (let H = 0; H < N.length; H++) p(g, N[H]);
        if (F) {
          let H = F.subTree;
          if (w === H) {
            const U = F.vnode;
            T(g, U, U.scopeId, U.slotScopeIds, F.parent);
          }
        }
      },
      $ = (g, w, O, N, F, H, U, D, V = 0) => {
        for (let W = V; W < g.length; W++) {
          const re = (g[W] = D ? _n(g[W]) : zt(g[W]));
          m(null, re, w, O, N, F, H, U, D);
        }
      },
      L = (g, w, O, N, F, H, U) => {
        const D = (w.el = g.el);
        let { patchFlag: V, dynamicChildren: W, dirs: re } = w;
        V |= g.patchFlag & 16;
        const oe = g.props || Ne,
          ie = w.props || Ne;
        let pe;
        O && Ln(O, !1),
          (pe = ie.onVnodeBeforeUpdate) && Ht(pe, O, w, g),
          re && Rn(w, g, O, 'beforeUpdate'),
          O && Ln(O, !0);
        const ye = F && w.type !== 'foreignObject';
        if ((W ? S(g.dynamicChildren, W, D, O, N, ye, H) : U || j(g, w, D, null, O, N, ye, H, !1), V > 0)) {
          if (V & 16) B(D, w, oe, ie, O, N, F);
          else if (
            (V & 2 && oe.class !== ie.class && i(D, 'class', null, ie.class, F),
            V & 4 && i(D, 'style', oe.style, ie.style, F),
            V & 8)
          ) {
            const ke = w.dynamicProps;
            for (let be = 0; be < ke.length; be++) {
              const Oe = ke[be],
                He = oe[Oe],
                ft = ie[Oe];
              (ft !== He || Oe === 'value') && i(D, Oe, He, ft, F, g.children, O, N, G);
            }
          }
          V & 1 && g.children !== w.children && u(D, w.children);
        } else !U && W == null && B(D, w, oe, ie, O, N, F);
        ((pe = ie.onVnodeUpdated) || re) &&
          st(() => {
            pe && Ht(pe, O, w, g), re && Rn(w, g, O, 'updated');
          }, N);
      },
      S = (g, w, O, N, F, H, U) => {
        for (let D = 0; D < w.length; D++) {
          const V = g[D],
            W = w[D],
            re = V.el && (V.type === Ie || !Fn(V, W) || V.shapeFlag & 70) ? f(V.el) : O;
          m(V, W, re, null, N, F, H, U, !0);
        }
      },
      B = (g, w, O, N, F, H, U) => {
        if (O !== N) {
          if (O !== Ne) for (const D in O) !_i(D) && !(D in N) && i(g, D, O[D], null, U, w.children, F, H, G);
          for (const D in N) {
            if (_i(D)) continue;
            const V = N[D],
              W = O[D];
            V !== W && D !== 'value' && i(g, D, W, V, U, w.children, F, H, G);
          }
          'value' in N && i(g, 'value', O.value, N.value);
        }
      },
      Y = (g, w, O, N, F, H, U, D, V) => {
        const W = (w.el = g ? g.el : s('')),
          re = (w.anchor = g ? g.anchor : s(''));
        let { patchFlag: oe, dynamicChildren: ie, slotScopeIds: pe } = w;
        pe && (D = D ? D.concat(pe) : pe),
          g == null
            ? (r(W, O, N), r(re, O, N), $(w.children, O, re, F, H, U, D, V))
            : oe > 0 && oe & 64 && ie && g.dynamicChildren
            ? (S(g.dynamicChildren, ie, O, F, H, U, D), (w.key != null || (F && w === F.subTree)) && Rl(g, w, !0))
            : j(g, w, O, re, F, H, U, D, V);
      },
      ne = (g, w, O, N, F, H, U, D, V) => {
        (w.slotScopeIds = D),
          g == null ? (w.shapeFlag & 512 ? F.ctx.activate(w, O, N, U, V) : Z(w, O, N, F, H, U, V)) : k(g, w, V);
      },
      Z = (g, w, O, N, F, H, U) => {
        const D = (g.component = D0(g, N, F));
        if ((pa(g) && (D.ctx.renderer = K), N0(D), D.asyncDep)) {
          if ((F && F.registerDep(D, A), !g.el)) {
            const V = (D.subTree = v(vt));
            b(null, V, w, O);
          }
          return;
        }
        A(D, g, w, O, F, H, U);
      },
      k = (g, w, O) => {
        const N = (w.component = g.component);
        if (Ug(g, w, O))
          if (N.asyncDep && !N.asyncResolved) {
            z(N, w, O);
            return;
          } else (N.next = w), Bg(N.update), N.update();
        else (w.el = g.el), (N.vnode = w);
      },
      A = (g, w, O, N, F, H, U) => {
        const D = () => {
            if (g.isMounted) {
              let { next: re, bu: oe, u: ie, parent: pe, vnode: ye } = g,
                ke = re,
                be;
              Ln(g, !1),
                re ? ((re.el = ye.el), z(g, re, U)) : (re = ye),
                oe && Fa(oe),
                (be = re.props && re.props.onVnodeBeforeUpdate) && Ht(be, pe, re, ye),
                Ln(g, !0);
              const Oe = Wa(g),
                He = g.subTree;
              (g.subTree = Oe),
                m(He, Oe, f(He.el), I(He), g, F, H),
                (re.el = Oe.el),
                ke === null && Yg(g, Oe.el),
                ie && st(ie, F),
                (be = re.props && re.props.onVnodeUpdated) && st(() => Ht(be, pe, re, ye), F);
            } else {
              let re;
              const { el: oe, props: ie } = w,
                { bm: pe, m: ye, parent: ke } = g,
                be = ho(w);
              if (
                (Ln(g, !1),
                pe && Fa(pe),
                !be && (re = ie && ie.onVnodeBeforeMount) && Ht(re, ke, w),
                Ln(g, !0),
                oe && ue)
              ) {
                const Oe = () => {
                  (g.subTree = Wa(g)), ue(oe, g.subTree, g, F, null);
                };
                be ? w.type.__asyncLoader().then(() => !g.isUnmounted && Oe()) : Oe();
              } else {
                const Oe = (g.subTree = Wa(g));
                m(null, Oe, O, N, g, F, H), (w.el = Oe.el);
              }
              if ((ye && st(ye, F), !be && (re = ie && ie.onVnodeMounted))) {
                const Oe = w;
                st(() => Ht(re, ke, Oe), F);
              }
              (w.shapeFlag & 256 || (ke && ho(ke.vnode) && ke.vnode.shapeFlag & 256)) && g.a && st(g.a, F),
                (g.isMounted = !0),
                (w = O = N = null);
            }
          },
          V = (g.effect = new xl(D, () => kl(W), g.scope)),
          W = (g.update = () => V.run());
        (W.id = g.uid), Ln(g, !0), W();
      },
      z = (g, w, O) => {
        w.component = g;
        const N = g.vnode.props;
        (g.vnode = w), (g.next = null), w0(g, w.props, N, O), x0(g, w.children, O), Wr(), Dc(), Vr();
      },
      j = (g, w, O, N, F, H, U, D, V = !1) => {
        const W = g && g.children,
          re = g ? g.shapeFlag : 0,
          oe = w.children,
          { patchFlag: ie, shapeFlag: pe } = w;
        if (ie > 0) {
          if (ie & 128) {
            ae(W, oe, O, N, F, H, U, D, V);
            return;
          } else if (ie & 256) {
            ee(W, oe, O, N, F, H, U, D, V);
            return;
          }
        }
        pe & 8
          ? (re & 16 && G(W, F, H), oe !== W && u(O, oe))
          : re & 16
          ? pe & 16
            ? ae(W, oe, O, N, F, H, U, D, V)
            : G(W, F, H, !0)
          : (re & 8 && u(O, ''), pe & 16 && $(oe, O, N, F, H, U, D, V));
      },
      ee = (g, w, O, N, F, H, U, D, V) => {
        (g = g || $r), (w = w || $r);
        const W = g.length,
          re = w.length,
          oe = Math.min(W, re);
        let ie;
        for (ie = 0; ie < oe; ie++) {
          const pe = (w[ie] = V ? _n(w[ie]) : zt(w[ie]));
          m(g[ie], pe, O, null, F, H, U, D, V);
        }
        W > re ? G(g, F, H, !0, !1, oe) : $(w, O, N, F, H, U, D, V, oe);
      },
      ae = (g, w, O, N, F, H, U, D, V) => {
        let W = 0;
        const re = w.length;
        let oe = g.length - 1,
          ie = re - 1;
        for (; W <= oe && W <= ie; ) {
          const pe = g[W],
            ye = (w[W] = V ? _n(w[W]) : zt(w[W]));
          if (Fn(pe, ye)) m(pe, ye, O, null, F, H, U, D, V);
          else break;
          W++;
        }
        for (; W <= oe && W <= ie; ) {
          const pe = g[oe],
            ye = (w[ie] = V ? _n(w[ie]) : zt(w[ie]));
          if (Fn(pe, ye)) m(pe, ye, O, null, F, H, U, D, V);
          else break;
          oe--, ie--;
        }
        if (W > oe) {
          if (W <= ie) {
            const pe = ie + 1,
              ye = pe < re ? w[pe].el : N;
            for (; W <= ie; ) m(null, (w[W] = V ? _n(w[W]) : zt(w[W])), O, ye, F, H, U, D, V), W++;
          }
        } else if (W > ie) for (; W <= oe; ) se(g[W], F, H, !0), W++;
        else {
          const pe = W,
            ye = W,
            ke = new Map();
          for (W = ye; W <= ie; W++) {
            const Ge = (w[W] = V ? _n(w[W]) : zt(w[W]));
            Ge.key != null && ke.set(Ge.key, W);
          }
          let be,
            Oe = 0;
          const He = ie - ye + 1;
          let ft = !1,
            Ot = 0;
          const at = new Array(He);
          for (W = 0; W < He; W++) at[W] = 0;
          for (W = pe; W <= oe; W++) {
            const Ge = g[W];
            if (Oe >= He) {
              se(Ge, F, H, !0);
              continue;
            }
            let dt;
            if (Ge.key != null) dt = ke.get(Ge.key);
            else
              for (be = ye; be <= ie; be++)
                if (at[be - ye] === 0 && Fn(Ge, w[be])) {
                  dt = be;
                  break;
                }
            dt === void 0
              ? se(Ge, F, H, !0)
              : ((at[dt - ye] = W + 1), dt >= Ot ? (Ot = dt) : (ft = !0), m(Ge, w[dt], O, null, F, H, U, D, V), Oe++);
          }
          const qr = ft ? T0(at) : $r;
          for (be = qr.length - 1, W = He - 1; W >= 0; W--) {
            const Ge = ye + W,
              dt = w[Ge],
              dr = Ge + 1 < re ? w[Ge + 1].el : N;
            at[W] === 0 ? m(null, dt, O, dr, F, H, U, D, V) : ft && (be < 0 || W !== qr[be] ? Q(dt, O, dr, 2) : be--);
          }
        }
      },
      Q = (g, w, O, N, F = null) => {
        const { el: H, type: U, transition: D, children: V, shapeFlag: W } = g;
        if (W & 6) {
          Q(g.component.subTree, w, O, N);
          return;
        }
        if (W & 128) {
          g.suspense.move(w, O, N);
          return;
        }
        if (W & 64) {
          U.move(g, w, O, K);
          return;
        }
        if (U === Ie) {
          r(H, w, O);
          for (let oe = 0; oe < V.length; oe++) Q(V[oe], w, O, N);
          r(g.anchor, w, O);
          return;
        }
        if (U === Ua) {
          M(g, w, O);
          return;
        }
        if (N !== 2 && W & 1 && D)
          if (N === 0) D.beforeEnter(H), r(H, w, O), st(() => D.enter(H), F);
          else {
            const { leave: oe, delayLeave: ie, afterLeave: pe } = D,
              ye = () => r(H, w, O),
              ke = () => {
                oe(H, () => {
                  ye(), pe && pe();
                });
              };
            ie ? ie(H, ye, ke) : ke();
          }
        else r(H, w, O);
      },
      se = (g, w, O, N = !1, F = !1) => {
        const {
          type: H,
          props: U,
          ref: D,
          children: V,
          dynamicChildren: W,
          shapeFlag: re,
          patchFlag: oe,
          dirs: ie,
        } = g;
        if ((D != null && Is(D, null, O, g, !0), re & 256)) {
          w.ctx.deactivate(g);
          return;
        }
        const pe = re & 1 && ie,
          ye = !ho(g);
        let ke;
        if ((ye && (ke = U && U.onVnodeBeforeUnmount) && Ht(ke, w, g), re & 6)) Pe(g.component, O, N);
        else {
          if (re & 128) {
            g.suspense.unmount(O, N);
            return;
          }
          pe && Rn(g, null, w, 'beforeUnmount'),
            re & 64
              ? g.type.remove(g, w, O, F, K, N)
              : W && (H !== Ie || (oe > 0 && oe & 64))
              ? G(W, w, O, !1, !0)
              : ((H === Ie && oe & 384) || (!F && re & 16)) && G(V, w, O),
            N && me(g);
        }
        ((ye && (ke = U && U.onVnodeUnmounted)) || pe) &&
          st(() => {
            ke && Ht(ke, w, g), pe && Rn(g, null, w, 'unmounted');
          }, O);
      },
      me = (g) => {
        const { type: w, el: O, anchor: N, transition: F } = g;
        if (w === Ie) {
          xe(O, N);
          return;
        }
        if (w === Ua) {
          R(g);
          return;
        }
        const H = () => {
          o(O), F && !F.persisted && F.afterLeave && F.afterLeave();
        };
        if (g.shapeFlag & 1 && F && !F.persisted) {
          const { leave: U, delayLeave: D } = F,
            V = () => U(O, H);
          D ? D(g.el, H, V) : V();
        } else H();
      },
      xe = (g, w) => {
        let O;
        for (; g !== w; ) (O = d(g)), o(g), (g = O);
        o(w);
      },
      Pe = (g, w, O) => {
        const { bum: N, scope: F, update: H, subTree: U, um: D } = g;
        N && Fa(N),
          F.stop(),
          H && ((H.active = !1), se(U, g, w, O)),
          D && st(D, w),
          st(() => {
            g.isUnmounted = !0;
          }, w),
          w &&
            w.pendingBranch &&
            !w.isUnmounted &&
            g.asyncDep &&
            !g.asyncResolved &&
            g.suspenseId === w.pendingId &&
            (w.deps--, w.deps === 0 && w.resolve());
      },
      G = (g, w, O, N = !1, F = !1, H = 0) => {
        for (let U = H; U < g.length; U++) se(g[U], w, O, N, F);
      },
      I = (g) =>
        g.shapeFlag & 6 ? I(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : d(g.anchor || g.el),
      X = (g, w, O) => {
        g == null ? w._vnode && se(w._vnode, null, null, !0) : m(w._vnode || null, g, w, null, null, null, O),
          Dc(),
          mp(),
          (w._vnode = g);
      },
      K = { p: m, um: se, m: Q, r: me, mt: Z, mc: $, pc: j, pbc: S, n: I, o: e };
    let q, ue;
    return t && ([q, ue] = t(K)), { render: X, hydrate: q, createApp: g0(X, q) };
  }
  function Ln({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function Rl(e, t, n = !1) {
    const r = e.children,
      o = t.children;
    if (ge(r) && ge(o))
      for (let i = 0; i < r.length; i++) {
        const a = r[i];
        let s = o[i];
        s.shapeFlag & 1 &&
          !s.dynamicChildren &&
          ((s.patchFlag <= 0 || s.patchFlag === 32) && ((s = o[i] = _n(o[i])), (s.el = a.el)), n || Rl(a, s)),
          s.type === Go && (s.el = a.el);
      }
  }
  function T0(e) {
    const t = e.slice(),
      n = [0];
    let r, o, i, a, s;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const c = e[r];
      if (c !== 0) {
        if (((o = n[n.length - 1]), e[o] < c)) {
          (t[r] = o), n.push(r);
          continue;
        }
        for (i = 0, a = n.length - 1; i < a; ) (s = (i + a) >> 1), e[n[s]] < c ? (i = s + 1) : (a = s);
        c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
      }
    }
    for (i = n.length, a = n[i - 1]; i-- > 0; ) (n[i] = a), (a = t[a]);
    return n;
  }
  const O0 = (e) => e.__isTeleport,
    vo = (e) => e && (e.disabled || e.disabled === ''),
    Xc = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
    Rs = (e, t) => {
      const n = e && e.to;
      return ze(n) ? (t ? t(n) : null) : n;
    },
    E0 = {
      __isTeleport: !0,
      process(e, t, n, r, o, i, a, s, l, c) {
        const {
            mc: u,
            pc: f,
            pbc: d,
            o: { insert: p, querySelector: h, createText: m, createComment: y },
          } = c,
          b = vo(t.props);
        let { shapeFlag: _, children: M, dynamicChildren: R } = t;
        if (e == null) {
          const x = (t.el = m('')),
            C = (t.anchor = m(''));
          p(x, n, r), p(C, n, r);
          const T = (t.target = Rs(t.props, h)),
            $ = (t.targetAnchor = m(''));
          T && (p($, T), (a = a || Xc(T)));
          const L = (S, B) => {
            _ & 16 && u(M, S, B, o, i, a, s, l);
          };
          b ? L(n, C) : T && L(T, $);
        } else {
          t.el = e.el;
          const x = (t.anchor = e.anchor),
            C = (t.target = e.target),
            T = (t.targetAnchor = e.targetAnchor),
            $ = vo(e.props),
            L = $ ? n : C,
            S = $ ? x : T;
          if (
            ((a = a || Xc(C)),
            R ? (d(e.dynamicChildren, R, L, o, i, a, s), Rl(e, t, !0)) : l || f(e, t, L, S, o, i, a, s, !1),
            b)
          )
            $ || ii(t, n, x, c, 1);
          else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
            const B = (t.target = Rs(t.props, h));
            B && ii(t, B, null, c, 0);
          } else $ && ii(t, C, T, c, 1);
        }
        zp(t);
      },
      remove(e, t, n, r, { um: o, o: { remove: i } }, a) {
        const { shapeFlag: s, children: l, anchor: c, targetAnchor: u, target: f, props: d } = e;
        if ((f && i(u), (a || !vo(d)) && (i(c), s & 16)))
          for (let p = 0; p < l.length; p++) {
            const h = l[p];
            o(h, t, n, !0, !!h.dynamicChildren);
          }
      },
      move: ii,
      hydrate: P0,
    };
  function ii(e, t, n, { o: { insert: r }, m: o }, i = 2) {
    i === 0 && r(e.targetAnchor, t, n);
    const { el: a, anchor: s, shapeFlag: l, children: c, props: u } = e,
      f = i === 2;
    if ((f && r(a, t, n), (!f || vo(u)) && l & 16)) for (let d = 0; d < c.length; d++) o(c[d], t, n, 2);
    f && r(s, t, n);
  }
  function P0(e, t, n, r, o, i, { o: { nextSibling: a, parentNode: s, querySelector: l } }, c) {
    const u = (t.target = Rs(t.props, l));
    if (u) {
      const f = u._lpa || u.firstChild;
      if (t.shapeFlag & 16)
        if (vo(t.props)) (t.anchor = c(a(e), t, s(e), n, r, o, i)), (t.targetAnchor = f);
        else {
          t.anchor = a(e);
          let d = f;
          for (; d; )
            if (((d = a(d)), d && d.nodeType === 8 && d.data === 'teleport anchor')) {
              (t.targetAnchor = d), (u._lpa = t.targetAnchor && a(t.targetAnchor));
              break;
            }
          c(f, t, u, n, r, o, i);
        }
      zp(t);
    }
    return t.anchor && a(t.anchor);
  }
  const Bp = E0;
  function zp(e) {
    const t = e.ctx;
    if (t && t.ut) {
      let n = e.children[0].el;
      for (; n !== e.targetAnchor; ) n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid), (n = n.nextSibling);
      t.ut();
    }
  }
  const Ie = Symbol.for('v-fgt'),
    Go = Symbol.for('v-txt'),
    vt = Symbol.for('v-cmt'),
    Ua = Symbol.for('v-stc'),
    go = [];
  let At = null;
  function he(e = !1) {
    go.push((At = e ? null : []));
  }
  function k0() {
    go.pop(), (At = go[go.length - 1] || null);
  }
  let Io = 1;
  function Gc(e) {
    Io += e;
  }
  function Fp(e) {
    return (e.dynamicChildren = Io > 0 ? At || $r : null), k0(), Io > 0 && At && At.push(e), e;
  }
  function Ee(e, t, n, r, o, i) {
    return Fp(Se(e, t, n, r, o, i, !0));
  }
  function nt(e, t, n, r, o) {
    return Fp(v(e, t, n, r, o, !0));
  }
  function an(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function Fn(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const ma = '__vInternal',
    Wp = ({ key: e }) => e ?? null,
    Ci = ({ ref: e, ref_key: t, ref_for: n }) => (
      typeof e == 'number' && (e = '' + e),
      e != null ? (ze(e) || Be(e) || Ce(e) ? { i: qe, r: e, k: t, f: !!n } : e) : null
    );
  function Se(e, t = null, n = null, r = 0, o = null, i = e === Ie ? 0 : 1, a = !1, s = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && Wp(t),
      ref: t && Ci(t),
      scopeId: fa,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: qe,
    };
    return (
      s ? (Ll(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ze(n) ? 8 : 16),
      Io > 0 && !a && At && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && At.push(l),
      l
    );
  }
  const v = M0;
  function M0(e, t = null, n = null, r = 0, o = null, i = !1) {
    if (((!e || e === Ep) && (e = vt), an(e))) {
      const s = sn(e, t, !0);
      return (
        n && Ll(s, n),
        Io > 0 && !i && At && (s.shapeFlag & 6 ? (At[At.indexOf(e)] = s) : At.push(s)),
        (s.patchFlag |= -2),
        s
      );
    }
    if ((z0(e) && (e = e.__vccOpts), t)) {
      t = A0(t);
      let { class: s, style: l } = t;
      s && !ze(s) && (t.class = Ye(s)), Le(l) && (sp(l) && !ge(l) && (l = We({}, l)), (t.style = Sn(l)));
    }
    const a = ze(e) ? 1 : Xg(e) ? 128 : O0(e) ? 64 : Le(e) ? 4 : Ce(e) ? 2 : 0;
    return Se(e, t, n, r, o, a, i, !0);
  }
  function A0(e) {
    return e ? (sp(e) || ma in e ? We({}, e) : e) : null;
  }
  function sn(e, t, n = !1) {
    const { props: r, ref: o, patchFlag: i, children: a } = e,
      s = t ? I0(r || {}, t) : r;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: s,
      key: s && Wp(s),
      ref: t && t.ref ? (n && o ? (ge(o) ? o.concat(Ci(t)) : [o, Ci(t)]) : Ci(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ie ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && sn(e.ssContent),
      ssFallback: e.ssFallback && sn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  }
  function gt(e = ' ', t = 0) {
    return v(Go, null, e, t);
  }
  function Yn(e = '', t = !1) {
    return t ? (he(), nt(vt, null, e)) : v(vt, null, e);
  }
  function zt(e) {
    return e == null || typeof e == 'boolean'
      ? v(vt)
      : ge(e)
      ? v(Ie, null, e.slice())
      : typeof e == 'object'
      ? _n(e)
      : v(Go, null, String(e));
  }
  function _n(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : sn(e);
  }
  function Ll(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (ge(t)) n = 16;
    else if (typeof t == 'object')
      if (r & 65) {
        const o = t.default;
        o && (o._c && (o._d = !1), Ll(e, o()), o._c && (o._d = !0));
        return;
      } else {
        n = 32;
        const o = t._;
        !o && !(ma in t)
          ? (t._ctx = qe)
          : o === 3 && qe && (qe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
      }
    else
      Ce(t)
        ? ((t = { default: t, _ctx: qe }), (n = 32))
        : ((t = String(t)), r & 64 ? ((n = 16), (t = [gt(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
  }
  function I0(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r)
        if (o === 'class') t.class !== r.class && (t.class = Ye([t.class, r.class]));
        else if (o === 'style') t.style = Sn([t.style, r.style]);
        else if (ra(o)) {
          const i = t[o],
            a = r[o];
          a && i !== a && !(ge(i) && i.includes(a)) && (t[o] = i ? [].concat(i, a) : a);
        } else o !== '' && (t[o] = r[o]);
    }
    return t;
  }
  function Ht(e, t, n, r = null) {
    xt(e, t, 7, [n, r]);
  }
  const R0 = Rp();
  let L0 = 0;
  function D0(e, t, n) {
    const r = e.type,
      o = (t ? t.appContext : e.appContext) || R0,
      i = {
        uid: L0++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Yd(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Dp(r, o),
        emitsOptions: gp(r, o),
        emit: null,
        emitted: null,
        propsDefaults: Ne,
        inheritAttrs: r.inheritAttrs,
        ctx: Ne,
        data: Ne,
        props: Ne,
        attrs: Ne,
        slots: Ne,
        refs: Ne,
        setupState: Ne,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = Wg.bind(null, i)), e.ce && e.ce(i), i;
  }
  let Ue = null;
  const fn = () => Ue || qe;
  let Dl,
    pr,
    qc = '__VUE_INSTANCE_SETTERS__';
  (pr = Cs()[qc]) || (pr = Cs()[qc] = []),
    pr.push((e) => (Ue = e)),
    (Dl = (e) => {
      pr.length > 1 ? pr.forEach((t) => t(e)) : pr[0](e);
    });
  const Mr = (e) => {
      Dl(e), e.scope.on();
    },
    Zn = () => {
      Ue && Ue.scope.off(), Dl(null);
    };
  function Vp(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Ro = !1;
  function N0(e, t = !1) {
    Ro = t;
    const { props: n, children: r } = e.vnode,
      o = Vp(e);
    b0(e, n, o, t), C0(e, r);
    const i = o ? j0(e, t) : void 0;
    return (Ro = !1), i;
  }
  function j0(e, t) {
    const n = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = la(new Proxy(e.ctx, c0)));
    const { setup: r } = n;
    if (r) {
      const o = (e.setupContext = r.length > 1 ? Up(e) : null);
      Mr(e), Wr();
      const i = On(r, e, 0, [e.props, o]);
      if ((Vr(), Zn(), Fd(i))) {
        if ((i.then(Zn, Zn), t))
          return i
            .then((a) => {
              Zc(e, a, t);
            })
            .catch((a) => {
              ca(a, e, 0);
            });
        e.asyncDep = i;
      } else Zc(e, i, t);
    } else Kp(e, t);
  }
  function Zc(e, t, n) {
    Ce(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : Le(t) && (e.setupState = fp(t)), Kp(e, n);
  }
  let Qc;
  function Kp(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && Qc && !r.render) {
        const o = r.template || Al(e).template;
        if (o) {
          const { isCustomElement: i, compilerOptions: a } = e.appContext.config,
            { delimiters: s, compilerOptions: l } = r,
            c = We(We({ isCustomElement: i, delimiters: s }, a), l);
          r.render = Qc(o, c);
        }
      }
      e.render = r.render || It;
    }
    Mr(e), Wr(), f0(e), Vr(), Zn();
  }
  function H0(e) {
    return (
      e.attrsProxy ||
      (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
          return ct(e, 'get', '$attrs'), t[n];
        },
      }))
    );
  }
  function Up(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      get attrs() {
        return H0(e);
      },
      slots: e.slots,
      emit: e.emit,
      expose: t,
    };
  }
  function va(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy(fp(la(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in mo) return mo[n](e);
          },
          has(t, n) {
            return n in t || n in mo;
          },
        }))
      );
  }
  function B0(e, t = !0) {
    return Ce(e) ? e.displayName || e.name : e.name || (t && e.__name);
  }
  function z0(e) {
    return Ce(e) && '__vccOpts' in e;
  }
  const P = (e, t) => Ng(e, t, Ro);
  function Ar(e, t, n) {
    const r = arguments.length;
    return r === 2
      ? Le(t) && !ge(t)
        ? an(t)
          ? v(e, null, [t])
          : v(e, t)
        : v(e, null, t)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && an(n) && (n = [n]), v(e, t, n));
  }
  const F0 = Symbol.for('v-scx'),
    W0 = () => Ae(F0),
    V0 = '3.3.4',
    K0 = 'http://www.w3.org/2000/svg',
    Wn = typeof document < 'u' ? document : null,
    Jc = Wn && Wn.createElement('template'),
    U0 = {
      insert: (e, t, n) => {
        t.insertBefore(e, n || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, n, r) => {
        const o = t ? Wn.createElementNS(K0, e) : Wn.createElement(e, n ? { is: n } : void 0);
        return e === 'select' && r && r.multiple != null && o.setAttribute('multiple', r.multiple), o;
      },
      createText: (e) => Wn.createTextNode(e),
      createComment: (e) => Wn.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => Wn.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, '');
      },
      insertStaticContent(e, t, n, r, o, i) {
        const a = n ? n.previousSibling : t.lastChild;
        if (o && (o === i || o.nextSibling))
          for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); );
        else {
          Jc.innerHTML = r ? `<svg>${e}</svg>` : e;
          const s = Jc.content;
          if (r) {
            const l = s.firstChild;
            for (; l.firstChild; ) s.appendChild(l.firstChild);
            s.removeChild(l);
          }
          t.insertBefore(s, n);
        }
        return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
      },
    };
  function Y0(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(' ')),
      t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
  }
  function X0(e, t, n) {
    const r = e.style,
      o = ze(n);
    if (n && !o) {
      if (t && !ze(t)) for (const i in t) n[i] == null && Ls(r, i, '');
      for (const i in n) Ls(r, i, n[i]);
    } else {
      const i = r.display;
      o ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'), '_vod' in e && (r.display = i);
    }
  }
  const eu = /\s*!important$/;
  function Ls(e, t, n) {
    if (ge(n)) n.forEach((r) => Ls(e, t, r));
    else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
    else {
      const r = G0(e, t);
      eu.test(n) ? e.setProperty(sr(r), n.replace(eu, ''), 'important') : (e[r] = n);
    }
  }
  const tu = ['Webkit', 'Moz', 'ms'],
    Ya = {};
  function G0(e, t) {
    const n = Ya[t];
    if (n) return n;
    let r = Ut(t);
    if (r !== 'filter' && r in e) return (Ya[t] = r);
    r = aa(r);
    for (let o = 0; o < tu.length; o++) {
      const i = tu[o] + r;
      if (i in e) return (Ya[t] = i);
    }
    return t;
  }
  const nu = 'http://www.w3.org/1999/xlink';
  function q0(e, t, n, r, o) {
    if (r && t.startsWith('xlink:'))
      n == null ? e.removeAttributeNS(nu, t.slice(6, t.length)) : e.setAttributeNS(nu, t, n);
    else {
      const i = ng(t);
      n == null || (i && !Kd(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : n);
    }
  }
  function Z0(e, t, n, r, o, i, a) {
    if (t === 'innerHTML' || t === 'textContent') {
      r && a(r, o, i), (e[t] = n ?? '');
      return;
    }
    const s = e.tagName;
    if (t === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
      e._value = n;
      const c = s === 'OPTION' ? e.getAttribute('value') : e.value,
        u = n ?? '';
      c !== u && (e.value = u), n == null && e.removeAttribute(t);
      return;
    }
    let l = !1;
    if (n === '' || n == null) {
      const c = typeof e[t];
      c === 'boolean'
        ? (n = Kd(n))
        : n == null && c === 'string'
        ? ((n = ''), (l = !0))
        : c === 'number' && ((n = 0), (l = !0));
    }
    try {
      e[t] = n;
    } catch {}
    l && e.removeAttribute(t);
  }
  function Q0(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function J0(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  function ey(e, t, n, r, o = null) {
    const i = e._vei || (e._vei = {}),
      a = i[t];
    if (r && a) a.value = r;
    else {
      const [s, l] = ty(t);
      if (r) {
        const c = (i[t] = oy(r, o));
        Q0(e, s, c, l);
      } else a && (J0(e, s, a, l), (i[t] = void 0));
    }
  }
  const ru = /(?:Once|Passive|Capture)$/;
  function ty(e) {
    let t;
    if (ru.test(e)) {
      t = {};
      let r;
      for (; (r = e.match(ru)); ) (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
    }
    return [e[2] === ':' ? e.slice(3) : sr(e.slice(2)), t];
  }
  let Xa = 0;
  const ny = Promise.resolve(),
    ry = () => Xa || (ny.then(() => (Xa = 0)), (Xa = Date.now()));
  function oy(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      xt(iy(r, n.value), t, 5, [r]);
    };
    return (n.value = e), (n.attached = ry()), n;
  }
  function iy(e, t) {
    if (ge(t)) {
      const n = e.stopImmediatePropagation;
      return (
        (e.stopImmediatePropagation = () => {
          n.call(e), (e._stopped = !0);
        }),
        t.map((r) => (o) => !o._stopped && r && r(o))
      );
    } else return t;
  }
  const ou = /^on[a-z]/,
    ay = (e, t, n, r, o = !1, i, a, s, l) => {
      t === 'class'
        ? Y0(e, r, o)
        : t === 'style'
        ? X0(e, n, r)
        : ra(t)
        ? gl(t) || ey(e, t, n, r, a)
        : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : sy(e, t, r, o))
        ? Z0(e, t, r, i, a, s, l)
        : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r), q0(e, t, r, o));
    };
  function sy(e, t, n, r) {
    return r
      ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && ou.test(t) && Ce(n)))
      : t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA') ||
        (ou.test(t) && ze(n))
      ? !1
      : t in e;
  }
  const gn = 'transition',
    Qr = 'animation',
    lr = (e, { slots: t }) => Ar(Jg, ly(e), t);
  lr.displayName = 'Transition';
  const Yp = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  };
  lr.props = We({}, _p, Yp);
  const Dn = (e, t = []) => {
      ge(e) ? e.forEach((n) => n(...t)) : e && e(...t);
    },
    iu = (e) => (e ? (ge(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
  function ly(e) {
    const t = {};
    for (const Y in e) Y in Yp || (t[Y] = e[Y]);
    if (e.css === !1) return t;
    const {
        name: n = 'v',
        type: r,
        duration: o,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: a = `${n}-enter-active`,
        enterToClass: s = `${n}-enter-to`,
        appearFromClass: l = i,
        appearActiveClass: c = a,
        appearToClass: u = s,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: p = `${n}-leave-to`,
      } = e,
      h = cy(o),
      m = h && h[0],
      y = h && h[1],
      {
        onBeforeEnter: b,
        onEnter: _,
        onEnterCancelled: M,
        onLeave: R,
        onLeaveCancelled: x,
        onBeforeAppear: C = b,
        onAppear: T = _,
        onAppearCancelled: $ = M,
      } = t,
      L = (Y, ne, Z) => {
        Nn(Y, ne ? u : s), Nn(Y, ne ? c : a), Z && Z();
      },
      S = (Y, ne) => {
        (Y._isLeaving = !1), Nn(Y, f), Nn(Y, p), Nn(Y, d), ne && ne();
      },
      B = (Y) => (ne, Z) => {
        const k = Y ? T : _,
          A = () => L(ne, Y, Z);
        Dn(k, [ne, A]),
          au(() => {
            Nn(ne, Y ? l : i), yn(ne, Y ? u : s), iu(k) || su(ne, r, m, A);
          });
      };
    return We(t, {
      onBeforeEnter(Y) {
        Dn(b, [Y]), yn(Y, i), yn(Y, a);
      },
      onBeforeAppear(Y) {
        Dn(C, [Y]), yn(Y, l), yn(Y, c);
      },
      onEnter: B(!1),
      onAppear: B(!0),
      onLeave(Y, ne) {
        Y._isLeaving = !0;
        const Z = () => S(Y, ne);
        yn(Y, f),
          dy(),
          yn(Y, d),
          au(() => {
            Y._isLeaving && (Nn(Y, f), yn(Y, p), iu(R) || su(Y, r, y, Z));
          }),
          Dn(R, [Y, Z]);
      },
      onEnterCancelled(Y) {
        L(Y, !1), Dn(M, [Y]);
      },
      onAppearCancelled(Y) {
        L(Y, !0), Dn($, [Y]);
      },
      onLeaveCancelled(Y) {
        S(Y), Dn(x, [Y]);
      },
    });
  }
  function cy(e) {
    if (e == null) return null;
    if (Le(e)) return [Ga(e.enter), Ga(e.leave)];
    {
      const t = Ga(e);
      return [t, t];
    }
  }
  function Ga(e) {
    return qv(e);
  }
  function yn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t);
  }
  function Nn(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const { _vtc: n } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0));
  }
  function au(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let uy = 0;
  function su(e, t, n, r) {
    const o = (e._endId = ++uy),
      i = () => {
        o === e._endId && r();
      };
    if (n) return setTimeout(i, n);
    const { type: a, timeout: s, propCount: l } = fy(e, t);
    if (!a) return r();
    const c = a + 'end';
    let u = 0;
    const f = () => {
        e.removeEventListener(c, d), i();
      },
      d = (p) => {
        p.target === e && ++u >= l && f();
      };
    setTimeout(() => {
      u < l && f();
    }, s + 1),
      e.addEventListener(c, d);
  }
  function fy(e, t) {
    const n = window.getComputedStyle(e),
      r = (h) => (n[h] || '').split(', '),
      o = r(`${gn}Delay`),
      i = r(`${gn}Duration`),
      a = lu(o, i),
      s = r(`${Qr}Delay`),
      l = r(`${Qr}Duration`),
      c = lu(s, l);
    let u = null,
      f = 0,
      d = 0;
    t === gn
      ? a > 0 && ((u = gn), (f = a), (d = i.length))
      : t === Qr
      ? c > 0 && ((u = Qr), (f = c), (d = l.length))
      : ((f = Math.max(a, c)), (u = f > 0 ? (a > c ? gn : Qr) : null), (d = u ? (u === gn ? i.length : l.length) : 0));
    const p = u === gn && /\b(transform|all)(,|$)/.test(r(`${gn}Property`).toString());
    return { type: u, timeout: f, propCount: d, hasTransform: p };
  }
  function lu(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => cu(n) + cu(e[r])));
  }
  function cu(e) {
    return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
  }
  function dy() {
    return document.body.offsetHeight;
  }
  const py = ['ctrl', 'shift', 'alt', 'meta'],
    hy = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => 'button' in e && e.button !== 0,
      middle: (e) => 'button' in e && e.button !== 1,
      right: (e) => 'button' in e && e.button !== 2,
      exact: (e, t) => py.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    Ct =
      (e, t) =>
      (n, ...r) => {
        for (let o = 0; o < t.length; o++) {
          const i = hy[t[o]];
          if (i && i(n, t)) return;
        }
        return e(n, ...r);
      },
    my = {
      esc: 'escape',
      space: ' ',
      up: 'arrow-up',
      left: 'arrow-left',
      right: 'arrow-right',
      down: 'arrow-down',
      delete: 'backspace',
    },
    Lo = (e, t) => (n) => {
      if (!('key' in n)) return;
      const r = sr(n.key);
      if (t.some((o) => o === r || my[o] === r)) return e(n);
    },
    Nl = {
      beforeMount(e, { value: t }, { transition: n }) {
        (e._vod = e.style.display === 'none' ? '' : e.style.display), n && t ? n.beforeEnter(e) : Jr(e, t);
      },
      mounted(e, { value: t }, { transition: n }) {
        n && t && n.enter(e);
      },
      updated(e, { value: t, oldValue: n }, { transition: r }) {
        !t != !n &&
          (r
            ? t
              ? (r.beforeEnter(e), Jr(e, !0), r.enter(e))
              : r.leave(e, () => {
                  Jr(e, !1);
                })
            : Jr(e, t));
      },
      beforeUnmount(e, { value: t }) {
        Jr(e, t);
      },
    };
  function Jr(e, t) {
    e.style.display = t ? e._vod : 'none';
  }
  const vy = We({ patchProp: ay }, U0);
  let uu;
  function Xp() {
    return uu || (uu = $0(vy));
  }
  const fu = (...e) => {
      Xp().render(...e);
    },
    gy = (...e) => {
      const t = Xp().createApp(...e),
        { mount: n } = t;
      return (
        (t.mount = (r) => {
          const o = yy(r);
          if (!o) return;
          const i = t._component;
          !Ce(i) && !i.render && !i.template && (i.template = o.innerHTML), (o.innerHTML = '');
          const a = n(o, !1, o instanceof SVGElement);
          return o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), a;
        }),
        t
      );
    };
  function yy(e) {
    return ze(e) ? document.querySelector(e) : e;
  }
  var by = !1;
  /*!
   * pinia v2.1.6
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */ let Gp;
  const ga = (e) => (Gp = e),
    qp = Symbol();
  function Ds(e) {
    return (
      e &&
      typeof e == 'object' &&
      Object.prototype.toString.call(e) === '[object Object]' &&
      typeof e.toJSON != 'function'
    );
  }
  var yo;
  (function (e) {
    (e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function');
  })(yo || (yo = {}));
  function wy() {
    const e = Xd(!0),
      t = e.run(() => te({}));
    let n = [],
      r = [];
    const o = la({
      install(i) {
        ga(o),
          (o._a = i),
          i.provide(qp, o),
          (i.config.globalProperties.$pinia = o),
          r.forEach((a) => n.push(a)),
          (r = []);
      },
      use(i) {
        return !this._a && !by ? r.push(i) : n.push(i), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: new Map(),
      state: t,
    });
    return o;
  }
  const Zp = () => {};
  function du(e, t, n, r = Zp) {
    e.push(t);
    const o = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), r());
    };
    return !n && _l() && Gd(o), o;
  }
  function hr(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const _y = (e) => e();
  function Ns(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
      e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n],
        o = e[n];
      Ds(o) && Ds(r) && e.hasOwnProperty(n) && !Be(r) && !rn(r) ? (e[n] = Ns(o, r)) : (e[n] = r);
    }
    return e;
  }
  const Cy = Symbol();
  function xy(e) {
    return !Ds(e) || !e.hasOwnProperty(Cy);
  }
  const { assign: wn } = Object;
  function $y(e) {
    return !!(Be(e) && e.effect);
  }
  function Sy(e, t, n, r) {
    const { state: o, actions: i, getters: a } = t,
      s = n.state.value[e];
    let l;
    function c() {
      s || (n.state.value[e] = o ? o() : {});
      const u = Ig(n.state.value[e]);
      return wn(
        u,
        i,
        Object.keys(a || {}).reduce(
          (f, d) => (
            (f[d] = la(
              P(() => {
                ga(n);
                const p = n._s.get(e);
                return a[d].call(p, p);
              }),
            )),
            f
          ),
          {},
        ),
      );
    }
    return (l = Qp(e, c, t, n, r, !0)), l;
  }
  function Qp(e, t, n = {}, r, o, i) {
    let a;
    const s = wn({ actions: {} }, n),
      l = { deep: !0 };
    let c,
      u,
      f = [],
      d = [],
      p;
    const h = r.state.value[e];
    !i && !h && (r.state.value[e] = {}), te({});
    let m;
    function y($) {
      let L;
      (c = u = !1),
        typeof $ == 'function'
          ? ($(r.state.value[e]), (L = { type: yo.patchFunction, storeId: e, events: p }))
          : (Ns(r.state.value[e], $), (L = { type: yo.patchObject, payload: $, storeId: e, events: p }));
      const S = (m = Symbol());
      tt().then(() => {
        m === S && (c = !0);
      }),
        (u = !0),
        hr(f, L, r.state.value[e]);
    }
    const b = i
      ? function () {
          const { state: L } = n,
            S = L ? L() : {};
          this.$patch((B) => {
            wn(B, S);
          });
        }
      : Zp;
    function _() {
      a.stop(), (f = []), (d = []), r._s.delete(e);
    }
    function M($, L) {
      return function () {
        ga(r);
        const S = Array.from(arguments),
          B = [],
          Y = [];
        function ne(A) {
          B.push(A);
        }
        function Z(A) {
          Y.push(A);
        }
        hr(d, { args: S, name: $, store: x, after: ne, onError: Z });
        let k;
        try {
          k = L.apply(this && this.$id === e ? this : x, S);
        } catch (A) {
          throw (hr(Y, A), A);
        }
        return k instanceof Promise
          ? k.then((A) => (hr(B, A), A)).catch((A) => (hr(Y, A), Promise.reject(A)))
          : (hr(B, k), k);
      };
    }
    const R = {
        _p: r,
        $id: e,
        $onAction: du.bind(null, d),
        $patch: y,
        $reset: b,
        $subscribe($, L = {}) {
          const S = du(f, $, L.detached, () => B()),
            B = a.run(() =>
              _e(
                () => r.state.value[e],
                (Y) => {
                  (L.flush === 'sync' ? u : c) && $({ storeId: e, type: yo.direct, events: p }, Y);
                },
                wn({}, l, L),
              ),
            );
          return S;
        },
        $dispose: _,
      },
      x = In(R);
    r._s.set(e, x);
    const C = (r._a && r._a.runWithContext) || _y,
      T = r._e.run(() => ((a = Xd()), C(() => a.run(t))));
    for (const $ in T) {
      const L = T[$];
      if ((Be(L) && !$y(L)) || rn(L))
        i || (h && xy(L) && (Be(L) ? (L.value = h[$]) : Ns(L, h[$])), (r.state.value[e][$] = L));
      else if (typeof L == 'function') {
        const S = M($, L);
        (T[$] = S), (s.actions[$] = L);
      }
    }
    return (
      wn(x, T),
      wn(Te(x), T),
      Object.defineProperty(x, '$state', {
        get: () => r.state.value[e],
        set: ($) => {
          y((L) => {
            wn(L, $);
          });
        },
      }),
      r._p.forEach(($) => {
        wn(
          x,
          a.run(() => $({ store: x, app: r._a, pinia: r, options: s })),
        );
      }),
      h && i && n.hydrate && n.hydrate(x.$state, h),
      (c = !0),
      (u = !0),
      x
    );
  }
  function ya(e, t, n) {
    let r, o;
    const i = typeof t == 'function';
    typeof e == 'string' ? ((r = e), (o = i ? n : t)) : ((o = e), (r = e.id));
    function a(s, l) {
      const c = y0();
      return (
        (s = s || (c ? Ae(qp, null) : null)),
        s && ga(s),
        (s = Gp),
        s._s.has(r) || (i ? Qp(r, t, o, s) : Sy(r, o, s)),
        s._s.get(r)
      );
    }
    return (a.$id = r), a;
  }
  function Ty(e) {
    {
      e = Te(e);
      const t = {};
      for (const n in e) {
        const r = e[n];
        (Be(r) || rn(r)) && (t[n] = Li(e, n));
      }
      return t;
    }
  }
  /*!
   * vue-router v4.2.5
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */ const yr = typeof window < 'u';
  function Oy(e) {
    return e.__esModule || e[Symbol.toStringTag] === 'Module';
  }
  const Re = Object.assign;
  function qa(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = Nt(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const bo = () => {},
    Nt = Array.isArray,
    Ey = /\/$/,
    Py = (e) => e.replace(Ey, '');
  function Za(e, t, n = '/') {
    let r,
      o = {},
      i = '',
      a = '';
    const s = t.indexOf('#');
    let l = t.indexOf('?');
    return (
      s < l && s >= 0 && (l = -1),
      l > -1 && ((r = t.slice(0, l)), (i = t.slice(l + 1, s > -1 ? s : t.length)), (o = e(i))),
      s > -1 && ((r = r || t.slice(0, s)), (a = t.slice(s, t.length))),
      (r = Iy(r ?? t, n)),
      { fullPath: r + (i && '?') + i + a, path: r, query: o, hash: a }
    );
  }
  function ky(e, t) {
    const n = t.query ? e(t.query) : '';
    return t.path + (n && '?') + n + (t.hash || '');
  }
  function pu(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
  }
  function My(e, t, n) {
    const r = t.matched.length - 1,
      o = n.matched.length - 1;
    return (
      r > -1 &&
      r === o &&
      Ir(t.matched[r], n.matched[o]) &&
      Jp(t.params, n.params) &&
      e(t.query) === e(n.query) &&
      t.hash === n.hash
    );
  }
  function Ir(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Jp(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!Ay(e[n], t[n])) return !1;
    return !0;
  }
  function Ay(e, t) {
    return Nt(e) ? hu(e, t) : Nt(t) ? hu(t, e) : e === t;
  }
  function hu(e, t) {
    return Nt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Iy(e, t) {
    if (e.startsWith('/')) return e;
    if (!e) return t;
    const n = t.split('/'),
      r = e.split('/'),
      o = r[r.length - 1];
    (o === '..' || o === '.') && r.push('');
    let i = n.length - 1,
      a,
      s;
    for (a = 0; a < r.length; a++)
      if (((s = r[a]), s !== '.'))
        if (s === '..') i > 1 && i--;
        else break;
    return n.slice(0, i).join('/') + '/' + r.slice(a - (a === r.length ? 1 : 0)).join('/');
  }
  var Do;
  (function (e) {
    (e.pop = 'pop'), (e.push = 'push');
  })(Do || (Do = {}));
  var wo;
  (function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
  })(wo || (wo = {}));
  function Ry(e) {
    if (!e)
      if (yr) {
        const t = document.querySelector('base');
        (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
      } else e = '/';
    return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Py(e);
  }
  const Ly = /^[^#]+#/;
  function Dy(e, t) {
    return e.replace(Ly, '#') + t;
  }
  function Ny(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
      r = e.getBoundingClientRect();
    return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
  }
  const ba = () => ({ left: window.pageXOffset, top: window.pageYOffset });
  function jy(e) {
    let t;
    if ('el' in e) {
      const n = e.el,
        r = typeof n == 'string' && n.startsWith('#'),
        o = typeof n == 'string' ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
      if (!o) return;
      t = Ny(o, e);
    } else t = e;
    'scrollBehavior' in document.documentElement.style
      ? window.scrollTo(t)
      : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
  }
  function mu(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const js = new Map();
  function Hy(e, t) {
    js.set(e, t);
  }
  function By(e) {
    const t = js.get(e);
    return js.delete(e), t;
  }
  let zy = () => location.protocol + '//' + location.host;
  function eh(e, t) {
    const { pathname: n, search: r, hash: o } = t,
      i = e.indexOf('#');
    if (i > -1) {
      let s = o.includes(e.slice(i)) ? e.slice(i).length : 1,
        l = o.slice(s);
      return l[0] !== '/' && (l = '/' + l), pu(l, '');
    }
    return pu(n, e) + r + o;
  }
  function Fy(e, t, n, r) {
    let o = [],
      i = [],
      a = null;
    const s = ({ state: d }) => {
      const p = eh(e, location),
        h = n.value,
        m = t.value;
      let y = 0;
      if (d) {
        if (((n.value = p), (t.value = d), a && a === h)) {
          a = null;
          return;
        }
        y = m ? d.position - m.position : 0;
      } else r(p);
      o.forEach((b) => {
        b(n.value, h, { delta: y, type: Do.pop, direction: y ? (y > 0 ? wo.forward : wo.back) : wo.unknown });
      });
    };
    function l() {
      a = n.value;
    }
    function c(d) {
      o.push(d);
      const p = () => {
        const h = o.indexOf(d);
        h > -1 && o.splice(h, 1);
      };
      return i.push(p), p;
    }
    function u() {
      const { history: d } = window;
      d.state && d.replaceState(Re({}, d.state, { scroll: ba() }), '');
    }
    function f() {
      for (const d of i) d();
      (i = []), window.removeEventListener('popstate', s), window.removeEventListener('beforeunload', u);
    }
    return (
      window.addEventListener('popstate', s),
      window.addEventListener('beforeunload', u, { passive: !0 }),
      { pauseListeners: l, listen: c, destroy: f }
    );
  }
  function vu(e, t, n, r = !1, o = !1) {
    return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: o ? ba() : null };
  }
  function Wy(e) {
    const { history: t, location: n } = window,
      r = { value: eh(e, n) },
      o = { value: t.state };
    o.value ||
      i(
        r.value,
        { back: null, current: r.value, forward: null, position: t.length - 1, replaced: !0, scroll: null },
        !0,
      );
    function i(l, c, u) {
      const f = e.indexOf('#'),
        d = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l : zy() + e + l;
      try {
        t[u ? 'replaceState' : 'pushState'](c, '', d), (o.value = c);
      } catch (p) {
        console.error(p), n[u ? 'replace' : 'assign'](d);
      }
    }
    function a(l, c) {
      const u = Re({}, t.state, vu(o.value.back, l, o.value.forward, !0), c, { position: o.value.position });
      i(l, u, !0), (r.value = l);
    }
    function s(l, c) {
      const u = Re({}, o.value, t.state, { forward: l, scroll: ba() });
      i(u.current, u, !0);
      const f = Re({}, vu(r.value, l, null), { position: u.position + 1 }, c);
      i(l, f, !1), (r.value = l);
    }
    return { location: r, state: o, push: s, replace: a };
  }
  function Vy(e) {
    e = Ry(e);
    const t = Wy(e),
      n = Fy(e, t.state, t.location, t.replace);
    function r(i, a = !0) {
      a || n.pauseListeners(), history.go(i);
    }
    const o = Re({ location: '', base: e, go: r, createHref: Dy.bind(null, e) }, t, n);
    return (
      Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
      Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
      o
    );
  }
  function Ky(e) {
    return (e = location.host ? e || location.pathname + location.search : ''), e.includes('#') || (e += '#'), Vy(e);
  }
  function Uy(e) {
    return typeof e == 'string' || (e && typeof e == 'object');
  }
  function th(e) {
    return typeof e == 'string' || typeof e == 'symbol';
  }
  const bn = {
      path: '/',
      name: void 0,
      params: {},
      query: {},
      hash: '',
      fullPath: '/',
      matched: [],
      meta: {},
      redirectedFrom: void 0,
    },
    nh = Symbol('');
  var gu;
  (function (e) {
    (e[(e.aborted = 4)] = 'aborted'), (e[(e.cancelled = 8)] = 'cancelled'), (e[(e.duplicated = 16)] = 'duplicated');
  })(gu || (gu = {}));
  function Rr(e, t) {
    return Re(new Error(), { type: e, [nh]: !0 }, t);
  }
  function qt(e, t) {
    return e instanceof Error && nh in e && (t == null || !!(e.type & t));
  }
  const yu = '[^/]+?',
    Yy = { sensitive: !1, strict: !1, start: !0, end: !0 },
    Xy = /[.+*?^${}()[\]/\\]/g;
  function Gy(e, t) {
    const n = Re({}, Yy, t),
      r = [];
    let o = n.start ? '^' : '';
    const i = [];
    for (const c of e) {
      const u = c.length ? [] : [90];
      n.strict && !c.length && (o += '/');
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        let p = 40 + (n.sensitive ? 0.25 : 0);
        if (d.type === 0) f || (o += '/'), (o += d.value.replace(Xy, '\\$&')), (p += 40);
        else if (d.type === 1) {
          const { value: h, repeatable: m, optional: y, regexp: b } = d;
          i.push({ name: h, repeatable: m, optional: y });
          const _ = b || yu;
          if (_ !== yu) {
            p += 10;
            try {
              new RegExp(`(${_})`);
            } catch (R) {
              throw new Error(`Invalid custom RegExp for param "${h}" (${_}): ` + R.message);
            }
          }
          let M = m ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          f || (M = y && c.length < 2 ? `(?:/${M})` : '/' + M),
            y && (M += '?'),
            (o += M),
            (p += 20),
            y && (p += -8),
            m && (p += -20),
            _ === '.*' && (p += -50);
        }
        u.push(p);
      }
      r.push(u);
    }
    if (n.strict && n.end) {
      const c = r.length - 1;
      r[c][r[c].length - 1] += 0.7000000000000001;
    }
    n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
    const a = new RegExp(o, n.sensitive ? '' : 'i');
    function s(c) {
      const u = c.match(a),
        f = {};
      if (!u) return null;
      for (let d = 1; d < u.length; d++) {
        const p = u[d] || '',
          h = i[d - 1];
        f[h.name] = p && h.repeatable ? p.split('/') : p;
      }
      return f;
    }
    function l(c) {
      let u = '',
        f = !1;
      for (const d of e) {
        (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
        for (const p of d)
          if (p.type === 0) u += p.value;
          else if (p.type === 1) {
            const { value: h, repeatable: m, optional: y } = p,
              b = h in c ? c[h] : '';
            if (Nt(b) && !m)
              throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
            const _ = Nt(b) ? b.join('/') : b;
            if (!_)
              if (y) d.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
              else throw new Error(`Missing required param "${h}"`);
            u += _;
          }
      }
      return u || '/';
    }
    return { re: a, score: r, keys: i, parse: s, stringify: l };
  }
  function qy(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length
      ? e.length === 1 && e[0] === 40 + 40
        ? -1
        : 1
      : e.length > t.length
      ? t.length === 1 && t[0] === 40 + 40
        ? 1
        : -1
      : 0;
  }
  function Zy(e, t) {
    let n = 0;
    const r = e.score,
      o = t.score;
    for (; n < r.length && n < o.length; ) {
      const i = qy(r[n], o[n]);
      if (i) return i;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (bu(r)) return 1;
      if (bu(o)) return -1;
    }
    return o.length - r.length;
  }
  function bu(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const Qy = { type: 0, value: '' },
    Jy = /[a-zA-Z0-9_]/;
  function eb(e) {
    if (!e) return [[]];
    if (e === '/') return [[Qy]];
    if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
    function t(p) {
      throw new Error(`ERR (${n})/"${c}": ${p}`);
    }
    let n = 0,
      r = n;
    const o = [];
    let i;
    function a() {
      i && o.push(i), (i = []);
    }
    let s = 0,
      l,
      c = '',
      u = '';
    function f() {
      c &&
        (n === 0
          ? i.push({ type: 0, value: c })
          : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
        (c = ''));
    }
    function d() {
      c += l;
    }
    for (; s < e.length; ) {
      if (((l = e[s++]), l === '\\' && n !== 2)) {
        (r = n), (n = 4);
        continue;
      }
      switch (n) {
        case 0:
          l === '/' ? (c && f(), a()) : l === ':' ? (f(), (n = 1)) : d();
          break;
        case 4:
          d(), (n = r);
          break;
        case 1:
          l === '(' ? (n = 2) : Jy.test(l) ? d() : (f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && s--);
          break;
        case 2:
          l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l);
          break;
        case 3:
          f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && s--, (u = '');
          break;
        default:
          t('Unknown state');
          break;
      }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), a(), o;
  }
  function tb(e, t, n) {
    const r = Gy(eb(e.path), n),
      o = Re(r, { record: e, parent: t, children: [], alias: [] });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function nb(e, t) {
    const n = [],
      r = new Map();
    t = Cu({ strict: !1, end: !0, sensitive: !1 }, t);
    function o(u) {
      return r.get(u);
    }
    function i(u, f, d) {
      const p = !d,
        h = rb(u);
      h.aliasOf = d && d.record;
      const m = Cu(t, u),
        y = [h];
      if ('alias' in u) {
        const M = typeof u.alias == 'string' ? [u.alias] : u.alias;
        for (const R of M)
          y.push(Re({}, h, { components: d ? d.record.components : h.components, path: R, aliasOf: d ? d.record : h }));
      }
      let b, _;
      for (const M of y) {
        const { path: R } = M;
        if (f && R[0] !== '/') {
          const x = f.record.path,
            C = x[x.length - 1] === '/' ? '' : '/';
          M.path = f.record.path + (R && C + R);
        }
        if (
          ((b = tb(M, f, m)),
          d ? d.alias.push(b) : ((_ = _ || b), _ !== b && _.alias.push(b), p && u.name && !_u(b) && a(u.name)),
          h.children)
        ) {
          const x = h.children;
          for (let C = 0; C < x.length; C++) i(x[C], b, d && d.children[C]);
        }
        (d = d || b),
          ((b.record.components && Object.keys(b.record.components).length) || b.record.name || b.record.redirect) &&
            l(b);
      }
      return _
        ? () => {
            a(_);
          }
        : bo;
    }
    function a(u) {
      if (th(u)) {
        const f = r.get(u);
        f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(a), f.alias.forEach(a));
      } else {
        const f = n.indexOf(u);
        f > -1 && (n.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(a), u.alias.forEach(a));
      }
    }
    function s() {
      return n;
    }
    function l(u) {
      let f = 0;
      for (; f < n.length && Zy(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !rh(u, n[f])); ) f++;
      n.splice(f, 0, u), u.record.name && !_u(u) && r.set(u.record.name, u);
    }
    function c(u, f) {
      let d,
        p = {},
        h,
        m;
      if ('name' in u && u.name) {
        if (((d = r.get(u.name)), !d)) throw Rr(1, { location: u });
        (m = d.record.name),
          (p = Re(
            wu(
              f.params,
              d.keys.filter((_) => !_.optional).map((_) => _.name),
            ),
            u.params &&
              wu(
                u.params,
                d.keys.map((_) => _.name),
              ),
          )),
          (h = d.stringify(p));
      } else if ('path' in u)
        (h = u.path), (d = n.find((_) => _.re.test(h))), d && ((p = d.parse(h)), (m = d.record.name));
      else {
        if (((d = f.name ? r.get(f.name) : n.find((_) => _.re.test(f.path))), !d))
          throw Rr(1, { location: u, currentLocation: f });
        (m = d.record.name), (p = Re({}, f.params, u.params)), (h = d.stringify(p));
      }
      const y = [];
      let b = d;
      for (; b; ) y.unshift(b.record), (b = b.parent);
      return { name: m, path: h, params: p, matched: y, meta: ib(y) };
    }
    return e.forEach((u) => i(u)), { addRoute: i, resolve: c, removeRoute: a, getRoutes: s, getRecordMatcher: o };
  }
  function wu(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function rb(e) {
    return {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: void 0,
      beforeEnter: e.beforeEnter,
      props: ob(e),
      children: e.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: 'components' in e ? e.components || null : e.component && { default: e.component },
    };
  }
  function ob(e) {
    const t = {},
      n = e.props || !1;
    if ('component' in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
    return t;
  }
  function _u(e) {
    for (; e; ) {
      if (e.record.aliasOf) return !0;
      e = e.parent;
    }
    return !1;
  }
  function ib(e) {
    return e.reduce((t, n) => Re(t, n.meta), {});
  }
  function Cu(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function rh(e, t) {
    return t.children.some((n) => n === e || rh(e, n));
  }
  const oh = /#/g,
    ab = /&/g,
    sb = /\//g,
    lb = /=/g,
    cb = /\?/g,
    ih = /\+/g,
    ub = /%5B/g,
    fb = /%5D/g,
    ah = /%5E/g,
    db = /%60/g,
    sh = /%7B/g,
    pb = /%7C/g,
    lh = /%7D/g,
    hb = /%20/g;
  function jl(e) {
    return encodeURI('' + e)
      .replace(pb, '|')
      .replace(ub, '[')
      .replace(fb, ']');
  }
  function mb(e) {
    return jl(e).replace(sh, '{').replace(lh, '}').replace(ah, '^');
  }
  function Hs(e) {
    return jl(e)
      .replace(ih, '%2B')
      .replace(hb, '+')
      .replace(oh, '%23')
      .replace(ab, '%26')
      .replace(db, '`')
      .replace(sh, '{')
      .replace(lh, '}')
      .replace(ah, '^');
  }
  function vb(e) {
    return Hs(e).replace(lb, '%3D');
  }
  function gb(e) {
    return jl(e).replace(oh, '%23').replace(cb, '%3F');
  }
  function yb(e) {
    return e == null ? '' : gb(e).replace(sb, '%2F');
  }
  function Hi(e) {
    try {
      return decodeURIComponent('' + e);
    } catch {}
    return '' + e;
  }
  function bb(e) {
    const t = {};
    if (e === '' || e === '?') return t;
    const r = (e[0] === '?' ? e.slice(1) : e).split('&');
    for (let o = 0; o < r.length; ++o) {
      const i = r[o].replace(ih, ' '),
        a = i.indexOf('='),
        s = Hi(a < 0 ? i : i.slice(0, a)),
        l = a < 0 ? null : Hi(i.slice(a + 1));
      if (s in t) {
        let c = t[s];
        Nt(c) || (c = t[s] = [c]), c.push(l);
      } else t[s] = l;
    }
    return t;
  }
  function xu(e) {
    let t = '';
    for (let n in e) {
      const r = e[n];
      if (((n = vb(n)), r == null)) {
        r !== void 0 && (t += (t.length ? '&' : '') + n);
        continue;
      }
      (Nt(r) ? r.map((i) => i && Hs(i)) : [r && Hs(r)]).forEach((i) => {
        i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i));
      });
    }
    return t;
  }
  function wb(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = Nt(r) ? r.map((o) => (o == null ? null : '' + o)) : r == null ? r : '' + r);
    }
    return t;
  }
  const _b = Symbol(''),
    $u = Symbol(''),
    wa = Symbol(''),
    ch = Symbol(''),
    Bs = Symbol('');
  function eo() {
    let e = [];
    function t(r) {
      return (
        e.push(r),
        () => {
          const o = e.indexOf(r);
          o > -1 && e.splice(o, 1);
        }
      );
    }
    function n() {
      e = [];
    }
    return { add: t, list: () => e.slice(), reset: n };
  }
  function Cn(e, t, n, r, o) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () =>
      new Promise((a, s) => {
        const l = (f) => {
            f === !1
              ? s(Rr(4, { from: n, to: t }))
              : f instanceof Error
              ? s(f)
              : Uy(f)
              ? s(Rr(2, { from: t, to: f }))
              : (i && r.enterCallbacks[o] === i && typeof f == 'function' && i.push(f), a());
          },
          c = e.call(r && r.instances[o], t, n, l);
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(l)), u.catch((f) => s(f));
      });
  }
  function Qa(e, t, n, r) {
    const o = [];
    for (const i of e)
      for (const a in i.components) {
        let s = i.components[a];
        if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
          if (Cb(s)) {
            const c = (s.__vccOpts || s)[t];
            c && o.push(Cn(c, n, r, i, a));
          } else {
            let l = s();
            o.push(() =>
              l.then((c) => {
                if (!c) return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));
                const u = Oy(c) ? c.default : c;
                i.components[a] = u;
                const d = (u.__vccOpts || u)[t];
                return d && Cn(d, n, r, i, a)();
              }),
            );
          }
      }
    return o;
  }
  function Cb(e) {
    return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
  }
  function Su(e) {
    const t = Ae(wa),
      n = Ae(ch),
      r = P(() => t.resolve(J(e.to))),
      o = P(() => {
        const { matched: l } = r.value,
          { length: c } = l,
          u = l[c - 1],
          f = n.matched;
        if (!u || !f.length) return -1;
        const d = f.findIndex(Ir.bind(null, u));
        if (d > -1) return d;
        const p = Tu(l[c - 2]);
        return c > 1 && Tu(u) === p && f[f.length - 1].path !== p ? f.findIndex(Ir.bind(null, l[c - 2])) : d;
      }),
      i = P(() => o.value > -1 && Tb(n.params, r.value.params)),
      a = P(() => o.value > -1 && o.value === n.matched.length - 1 && Jp(n.params, r.value.params));
    function s(l = {}) {
      return Sb(l) ? t[J(e.replace) ? 'replace' : 'push'](J(e.to)).catch(bo) : Promise.resolve();
    }
    return { route: r, href: P(() => r.value.href), isActive: i, isExactActive: a, navigate: s };
  }
  const xb = ce({
      name: 'RouterLink',
      compatConfig: { MODE: 3 },
      props: {
        to: { type: [String, Object], required: !0 },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: { type: String, default: 'page' },
      },
      useLink: Su,
      setup(e, { slots: t }) {
        const n = In(Su(e)),
          { options: r } = Ae(wa),
          o = P(() => ({
            [Ou(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
            [Ou(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive,
          }));
        return () => {
          const i = t.default && t.default(n);
          return e.custom
            ? i
            : Ar(
                'a',
                {
                  'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                  'href': n.href,
                  'onClick': n.navigate,
                  'class': o.value,
                },
                i,
              );
        };
      },
    }),
    $b = xb;
  function Sb(e) {
    if (
      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
      !e.defaultPrevented &&
      !(e.button !== void 0 && e.button !== 0)
    ) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), !0;
    }
  }
  function Tb(e, t) {
    for (const n in t) {
      const r = t[n],
        o = e[n];
      if (typeof r == 'string') {
        if (r !== o) return !1;
      } else if (!Nt(o) || o.length !== r.length || r.some((i, a) => i !== o[a])) return !1;
    }
    return !0;
  }
  function Tu(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
  }
  const Ou = (e, t, n) => e ?? t ?? n,
    Ob = ce({
      name: 'RouterView',
      inheritAttrs: !1,
      props: { name: { type: String, default: 'default' }, route: Object },
      compatConfig: { MODE: 3 },
      setup(e, { attrs: t, slots: n }) {
        const r = Ae(Bs),
          o = P(() => e.route || r.value),
          i = Ae($u, 0),
          a = P(() => {
            let c = J(i);
            const { matched: u } = o.value;
            let f;
            for (; (f = u[c]) && !f.components; ) c++;
            return c;
          }),
          s = P(() => o.value.matched[a.value]);
        it(
          $u,
          P(() => a.value + 1),
        ),
          it(_b, s),
          it(Bs, o);
        const l = te();
        return (
          _e(
            () => [l.value, s.value, e.name],
            ([c, u, f], [d, p, h]) => {
              u &&
                ((u.instances[f] = c),
                p &&
                  p !== u &&
                  c &&
                  c === d &&
                  (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                  u.updateGuards.size || (u.updateGuards = p.updateGuards))),
                c && u && (!p || !Ir(u, p) || !d) && (u.enterCallbacks[f] || []).forEach((m) => m(c));
            },
            { flush: 'post' },
          ),
          () => {
            const c = o.value,
              u = e.name,
              f = s.value,
              d = f && f.components[u];
            if (!d) return Eu(n.default, { Component: d, route: c });
            const p = f.props[u],
              h = p ? (p === !0 ? c.params : typeof p == 'function' ? p(c) : p) : null,
              y = Ar(
                d,
                Re({}, h, t, {
                  onVnodeUnmounted: (b) => {
                    b.component.isUnmounted && (f.instances[u] = null);
                  },
                  ref: l,
                }),
              );
            return Eu(n.default, { Component: y, route: c }) || y;
          }
        );
      },
    });
  function Eu(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const uh = Ob;
  function Eb(e) {
    const t = nb(e.routes, e),
      n = e.parseQuery || bb,
      r = e.stringifyQuery || xu,
      o = e.history,
      i = eo(),
      a = eo(),
      s = eo(),
      l = le(bn);
    let c = bn;
    yr && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual');
    const u = qa.bind(null, (I) => '' + I),
      f = qa.bind(null, yb),
      d = qa.bind(null, Hi);
    function p(I, X) {
      let K, q;
      return th(I) ? ((K = t.getRecordMatcher(I)), (q = X)) : (q = I), t.addRoute(q, K);
    }
    function h(I) {
      const X = t.getRecordMatcher(I);
      X && t.removeRoute(X);
    }
    function m() {
      return t.getRoutes().map((I) => I.record);
    }
    function y(I) {
      return !!t.getRecordMatcher(I);
    }
    function b(I, X) {
      if (((X = Re({}, X || l.value)), typeof I == 'string')) {
        const O = Za(n, I, X.path),
          N = t.resolve({ path: O.path }, X),
          F = o.createHref(O.fullPath);
        return Re(O, N, { params: d(N.params), hash: Hi(O.hash), redirectedFrom: void 0, href: F });
      }
      let K;
      if ('path' in I) K = Re({}, I, { path: Za(n, I.path, X.path).path });
      else {
        const O = Re({}, I.params);
        for (const N in O) O[N] == null && delete O[N];
        (K = Re({}, I, { params: f(O) })), (X.params = f(X.params));
      }
      const q = t.resolve(K, X),
        ue = I.hash || '';
      q.params = u(d(q.params));
      const g = ky(r, Re({}, I, { hash: mb(ue), path: q.path })),
        w = o.createHref(g);
      return Re({ fullPath: g, hash: ue, query: r === xu ? wb(I.query) : I.query || {} }, q, {
        redirectedFrom: void 0,
        href: w,
      });
    }
    function _(I) {
      return typeof I == 'string' ? Za(n, I, l.value.path) : Re({}, I);
    }
    function M(I, X) {
      if (c !== I) return Rr(8, { from: X, to: I });
    }
    function R(I) {
      return T(I);
    }
    function x(I) {
      return R(Re(_(I), { replace: !0 }));
    }
    function C(I) {
      const X = I.matched[I.matched.length - 1];
      if (X && X.redirect) {
        const { redirect: K } = X;
        let q = typeof K == 'function' ? K(I) : K;
        return (
          typeof q == 'string' &&
            ((q = q.includes('?') || q.includes('#') ? (q = _(q)) : { path: q }), (q.params = {})),
          Re({ query: I.query, hash: I.hash, params: 'path' in q ? {} : I.params }, q)
        );
      }
    }
    function T(I, X) {
      const K = (c = b(I)),
        q = l.value,
        ue = I.state,
        g = I.force,
        w = I.replace === !0,
        O = C(K);
      if (O)
        return T(Re(_(O), { state: typeof O == 'object' ? Re({}, ue, O.state) : ue, force: g, replace: w }), X || K);
      const N = K;
      N.redirectedFrom = X;
      let F;
      return (
        !g && My(r, q, K) && ((F = Rr(16, { to: N, from: q })), Q(q, q, !0, !1)),
        (F ? Promise.resolve(F) : S(N, q))
          .catch((H) => (qt(H) ? (qt(H, 2) ? H : ae(H)) : j(H, N, q)))
          .then((H) => {
            if (H) {
              if (qt(H, 2))
                return T(
                  Re({ replace: w }, _(H.to), {
                    state: typeof H.to == 'object' ? Re({}, ue, H.to.state) : ue,
                    force: g,
                  }),
                  X || N,
                );
            } else H = Y(N, q, !0, w, ue);
            return B(N, q, H), H;
          })
      );
    }
    function $(I, X) {
      const K = M(I, X);
      return K ? Promise.reject(K) : Promise.resolve();
    }
    function L(I) {
      const X = xe.values().next().value;
      return X && typeof X.runWithContext == 'function' ? X.runWithContext(I) : I();
    }
    function S(I, X) {
      let K;
      const [q, ue, g] = Pb(I, X);
      K = Qa(q.reverse(), 'beforeRouteLeave', I, X);
      for (const O of q)
        O.leaveGuards.forEach((N) => {
          K.push(Cn(N, I, X));
        });
      const w = $.bind(null, I, X);
      return (
        K.push(w),
        G(K)
          .then(() => {
            K = [];
            for (const O of i.list()) K.push(Cn(O, I, X));
            return K.push(w), G(K);
          })
          .then(() => {
            K = Qa(ue, 'beforeRouteUpdate', I, X);
            for (const O of ue)
              O.updateGuards.forEach((N) => {
                K.push(Cn(N, I, X));
              });
            return K.push(w), G(K);
          })
          .then(() => {
            K = [];
            for (const O of g)
              if (O.beforeEnter)
                if (Nt(O.beforeEnter)) for (const N of O.beforeEnter) K.push(Cn(N, I, X));
                else K.push(Cn(O.beforeEnter, I, X));
            return K.push(w), G(K);
          })
          .then(
            () => (
              I.matched.forEach((O) => (O.enterCallbacks = {})), (K = Qa(g, 'beforeRouteEnter', I, X)), K.push(w), G(K)
            ),
          )
          .then(() => {
            K = [];
            for (const O of a.list()) K.push(Cn(O, I, X));
            return K.push(w), G(K);
          })
          .catch((O) => (qt(O, 8) ? O : Promise.reject(O)))
      );
    }
    function B(I, X, K) {
      s.list().forEach((q) => L(() => q(I, X, K)));
    }
    function Y(I, X, K, q, ue) {
      const g = M(I, X);
      if (g) return g;
      const w = X === bn,
        O = yr ? history.state : {};
      K && (q || w ? o.replace(I.fullPath, Re({ scroll: w && O && O.scroll }, ue)) : o.push(I.fullPath, ue)),
        (l.value = I),
        Q(I, X, K, w),
        ae();
    }
    let ne;
    function Z() {
      ne ||
        (ne = o.listen((I, X, K) => {
          if (!Pe.listening) return;
          const q = b(I),
            ue = C(q);
          if (ue) {
            T(Re(ue, { replace: !0 }), q).catch(bo);
            return;
          }
          c = q;
          const g = l.value;
          yr && Hy(mu(g.fullPath, K.delta), ba()),
            S(q, g)
              .catch((w) =>
                qt(w, 12)
                  ? w
                  : qt(w, 2)
                  ? (T(w.to, q)
                      .then((O) => {
                        qt(O, 20) && !K.delta && K.type === Do.pop && o.go(-1, !1);
                      })
                      .catch(bo),
                    Promise.reject())
                  : (K.delta && o.go(-K.delta, !1), j(w, q, g)),
              )
              .then((w) => {
                (w = w || Y(q, g, !1)),
                  w && (K.delta && !qt(w, 8) ? o.go(-K.delta, !1) : K.type === Do.pop && qt(w, 20) && o.go(-1, !1)),
                  B(q, g, w);
              })
              .catch(bo);
        }));
    }
    let k = eo(),
      A = eo(),
      z;
    function j(I, X, K) {
      ae(I);
      const q = A.list();
      return q.length ? q.forEach((ue) => ue(I, X, K)) : console.error(I), Promise.reject(I);
    }
    function ee() {
      return z && l.value !== bn
        ? Promise.resolve()
        : new Promise((I, X) => {
            k.add([I, X]);
          });
    }
    function ae(I) {
      return z || ((z = !I), Z(), k.list().forEach(([X, K]) => (I ? K(I) : X())), k.reset()), I;
    }
    function Q(I, X, K, q) {
      const { scrollBehavior: ue } = e;
      if (!yr || !ue) return Promise.resolve();
      const g = (!K && By(mu(I.fullPath, 0))) || ((q || !K) && history.state && history.state.scroll) || null;
      return tt()
        .then(() => ue(I, X, g))
        .then((w) => w && jy(w))
        .catch((w) => j(w, I, X));
    }
    const se = (I) => o.go(I);
    let me;
    const xe = new Set(),
      Pe = {
        currentRoute: l,
        listening: !0,
        addRoute: p,
        removeRoute: h,
        hasRoute: y,
        getRoutes: m,
        resolve: b,
        options: e,
        push: R,
        replace: x,
        go: se,
        back: () => se(-1),
        forward: () => se(1),
        beforeEach: i.add,
        beforeResolve: a.add,
        afterEach: s.add,
        onError: A.add,
        isReady: ee,
        install(I) {
          const X = this;
          I.component('RouterLink', $b),
            I.component('RouterView', uh),
            (I.config.globalProperties.$router = X),
            Object.defineProperty(I.config.globalProperties, '$route', { enumerable: !0, get: () => J(l) }),
            yr && !me && l.value === bn && ((me = !0), R(o.location).catch((ue) => {}));
          const K = {};
          for (const ue in bn) Object.defineProperty(K, ue, { get: () => l.value[ue], enumerable: !0 });
          I.provide(wa, X), I.provide(ch, ap(K)), I.provide(Bs, l);
          const q = I.unmount;
          xe.add(I),
            (I.unmount = function () {
              xe.delete(I),
                xe.size < 1 && ((c = bn), ne && ne(), (ne = null), (l.value = bn), (me = !1), (z = !1)),
                q();
            });
        },
      };
    function G(I) {
      return I.reduce((X, K) => X.then(() => L(K)), Promise.resolve());
    }
    return Pe;
  }
  function Pb(e, t) {
    const n = [],
      r = [],
      o = [],
      i = Math.max(t.matched.length, e.matched.length);
    for (let a = 0; a < i; a++) {
      const s = t.matched[a];
      s && (e.matched.find((c) => Ir(c, s)) ? r.push(s) : n.push(s));
      const l = e.matched[a];
      l && (t.matched.find((c) => Ir(c, l)) || o.push(l));
    }
    return [n, r, o];
  }
  function fh() {
    return Ae(wa);
  }
  const kb = { key: 0, class: 'h-full w-full bg-base-100 shadow-md rounded' },
    Mb = { key: 1, class: 'h-full w-full bg-base-100 shadow-md rounded flex flex-col' },
    Ab = { class: 'border-b border-base-300' },
    Ib = { class: 'flex-1' },
    rr = ce({
      __name: 'ContentCard',
      setup(e) {
        const t = Ap();
        return (n, r) =>
          J(t).header
            ? (he(), Ee('div', Mb, [Se('div', Ab, [Rt(n.$slots, 'header')]), Se('div', Ib, [Rt(n.$slots, 'default')])]))
            : (he(), Ee('div', kb, [Rt(n.$slots, 'default')]));
      },
    }),
    Rb = ce({
      __name: 'Button',
      props: {
        type: {},
        size: { default: 'sm' },
        outline: { type: Boolean },
        active: { type: Boolean },
        disabled: { type: Boolean },
        glass: { type: Boolean },
        noAnimation: { type: Boolean },
        wide: { type: Boolean },
        block: { type: Boolean },
        shape: {},
      },
      setup(e) {
        const t = e,
          n = P(() => ({
            'btn': !0,
            'btn-neutral': t.type === 'neutral',
            'btn-primary': t.type === 'primary',
            'btn-secondary': t.type === 'secondary',
            'btn-accent': t.type === 'accent',
            'btn-info': t.type === 'info',
            'btn-success': t.type === 'success',
            'btn-warning': t.type === 'warning',
            'btn-error': t.type === 'error',
            'btn-ghost': t.type === 'ghost',
            'btn-link': t.type === 'link',
            'btn-outline': !!t.outline,
            'btn-active': !!t.active,
            'btn-disabled': !!t.disabled,
            'glass': !!t.glass,
            'no-animation': !!t.noAnimation,
            'btn-xs': t.size === 'xs',
            'btn-sm': t.size === 'sm',
            'btn-md': t.size === 'md',
            'btn-lg': t.size === 'lg',
            'btn-wide': !!t.wide,
            'btn-block': !!t.block,
            'btn-circle': t.shape === 'circle',
            'btn-square': t.shape === 'square',
          }));
        return (r, o) => (he(), Ee('button', { class: Ye(n.value) }, [Rt(r.$slots, 'default', {}, void 0, !0)], 2));
      },
    }),
    jt = (e, t) => {
      const n = e.__vccOpts || e;
      for (const [r, o] of t) n[r] = o;
      return n;
    },
    An = jt(Rb, [['__scopeId', 'data-v-ac64d7e0']]),
    Lb = {},
    Db = { class: 'hero w-full h-full' },
    Nb = { class: 'hero-content text-center' };
  function jb(e, t) {
    return he(), Ee('div', Db, [Se('div', Nb, [Rt(e.$slots, 'default')])]);
  }
  const Hb = jt(Lb, [['render', jb]]),
    Bb = ['value', 'placeholder'],
    Hl = ce({
      __name: 'Input',
      props: { modelValue: {}, placeholder: { default: '' }, size: {}, type: {}, bordered: { type: Boolean } },
      emits: ['update:modelValue', 'change', 'input'],
      setup(e, { expose: t, emit: n }) {
        const r = e;
        t({ focus: a, blur: s, select: l });
        const o = P(() => ({
            'input': !0,
            'input-primary': r.type === 'primary',
            'input-secondary': r.type === 'secondary',
            'input-accent': r.type === 'accent',
            'input-info': r.type === 'info',
            'input-success': r.type === 'success',
            'input-warning': r.type === 'warning',
            'input-error': r.type === 'error',
            'input-ghost': r.type === 'ghost',
            'input-bordered': !!r.bordered,
            'input-xs': r.size === 'xs',
            'input-sm': r.size === 'sm',
            'input-md': r.size === 'md',
            'input-lg': r.size === 'lg',
          })),
          i = te(null);
        function a() {
          var f;
          (f = i.value) == null || f.focus();
        }
        function s() {
          var f;
          (f = i.value) == null || f.blur();
        }
        function l() {
          var f;
          return (f = i.value) == null ? void 0 : f.select();
        }
        function c(f) {
          const d = f.target.value;
          n('change', d);
        }
        function u(f) {
          const d = f.target.value;
          n('input', d), n('update:modelValue', d);
        }
        return (f, d) => (
          he(),
          Ee(
            'input',
            {
              ref_key: 'input',
              ref: i,
              value: f.modelValue,
              class: Ye(['w-full', o.value]),
              placeholder: f.placeholder,
              type: 'text',
              onChange: c,
              onInput: u,
            },
            null,
            42,
            Bb,
          )
        );
      },
    }),
    zb = ce({
      __name: 'Loading',
      props: { shape: { default: 'spinner' }, type: {}, size: { default: 'md' } },
      setup(e) {
        const t = e,
          n = P(() => ({
            'loading': !0,
            'loading-spinner': t.shape === 'spinner',
            'loading-dots': t.shape === 'dots',
            'loading-ring': t.shape === 'ring',
            'loading-ball': t.shape === 'ball',
            'loading-bars': t.shape === 'bars',
            'loading-infinity': t.shape === 'infinity',
            'loading-xs': t.size === 'xs',
            'loading-sm': t.size === 'sm',
            'loading-md': t.size === 'md',
            'loading-lg': t.size === 'lg',
            'text-neutral': t.type === 'neutral',
            'text-primary': t.type === 'primary',
            'text-secondary': t.type === 'secondary',
            'text-accent': t.type === 'accent',
            'text-info': t.type === 'info',
            'text-success': t.type === 'success',
            'text-warning': t.type === 'warning',
            'text-error': t.type === 'error',
          }));
        return (r, o) => (he(), Ee('div', { class: Ye(n.value) }, null, 2));
      },
    }),
    Fb = { method: 'dialog', class: 'modal-box' },
    Wb = { key: 1, class: 'font-bold text-lg' },
    Vb = { class: 'content py-4' },
    Kb = { key: 2, class: 'modal-action' },
    Ub = { key: 0, method: 'dialog', class: 'modal-backdrop' },
    Yb = ce({
      __name: 'Modal',
      props: {
        modelValue: { type: Boolean },
        useTopLayer: { type: Boolean, default: !1 },
        title: {},
        showClose: { type: Boolean, default: !0 },
        position: { default: 'middle' },
        closeOnBackdrop: { type: Boolean, default: !0 },
      },
      emits: ['update:modelValue'],
      setup(e, { emit: t }) {
        const n = e,
          r = Ap(),
          o = te(null),
          i = P(() => ({ top: 'modal-top', bottom: 'modal-bottom', middle: 'modal-middle' })[n.position]);
        function a() {
          t('update:modelValue', !1);
        }
        function s() {
          n.useTopLayer || a();
        }
        return (
          $t(() => {
            !o.value ||
              !n.useTopLayer ||
              (n.modelValue && !o.value.open ? o.value.showModal() : !n.modelValue && o.value.open && o.value.close());
          }),
          (l, c) => (
            he(),
            Ee(
              'dialog',
              {
                ref_key: 'dialogRef',
                ref: o,
                class: Ye(['modal', i.value, !l.useTopLayer && l.modelValue && 'modal-open']),
                onClose: a,
              },
              [
                Se('form', Fb, [
                  l.showClose
                    ? (he(),
                      nt(
                        J(An),
                        { key: 0, class: 'absolute right-2 top-2', shape: 'circle', type: 'ghost', onClick: s },
                        { default: $e(() => [gt(' ✕ ')]), _: 1 },
                      ))
                    : Yn('', !0),
                  l.title ? (he(), Ee('h3', Wb, Kt(l.title), 1)) : Yn('', !0),
                  Se('div', Vb, [Rt(l.$slots, 'default')]),
                  J(r).action ? (he(), Ee('div', Kb, [Rt(l.$slots, 'action')])) : Yn('', !0),
                ]),
                l.closeOnBackdrop ? (he(), Ee('form', Ub, [Se('button', { onClick: s }, 'close')])) : Yn('', !0),
              ],
              34,
            )
          )
        );
      },
    }),
    Xb = ['info', 'success', 'warning', 'error'],
    Gb = 8;
  var qb = {
    size: '1em',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    rtl: !1,
    theme: 'outline',
    colors: {
      outline: { fill: '#333', background: 'transparent' },
      filled: { fill: '#333', background: '#FFF' },
      twoTone: { fill: '#333', twoTone: '#2F88FF' },
      multiColor: {
        outStrokeColor: '#333',
        outFillColor: '#2F88FF',
        innerStrokeColor: '#FFF',
        innerFillColor: '#43CCF8',
      },
    },
    prefix: 'i',
  };
  function Zb() {
    return 'icon-' + (((1 + Math.random()) * 4294967296) | 0).toString(16).substring(1);
  }
  function Qb(e, t, n) {
    var r = typeof t.fill == 'string' ? [t.fill] : t.fill || [],
      o = [],
      i = t.theme || n.theme;
    switch (i) {
      case 'outline':
        o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push('none'),
          o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push('none');
        break;
      case 'filled':
        o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push('#FFF'),
          o.push('#FFF');
        break;
      case 'two-tone':
        o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push(typeof r[1] == 'string' ? r[1] : n.colors.twoTone.twoTone),
          o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push(typeof r[1] == 'string' ? r[1] : n.colors.twoTone.twoTone);
        break;
      case 'multi-color':
        o.push(typeof r[0] == 'string' ? r[0] : 'currentColor'),
          o.push(typeof r[1] == 'string' ? r[1] : n.colors.multiColor.outFillColor),
          o.push(typeof r[2] == 'string' ? r[2] : n.colors.multiColor.innerStrokeColor),
          o.push(typeof r[3] == 'string' ? r[3] : n.colors.multiColor.innerFillColor);
        break;
    }
    return {
      size: t.size || n.size,
      strokeWidth: t.strokeWidth || n.strokeWidth,
      strokeLinecap: t.strokeLinecap || n.strokeLinecap,
      strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
      colors: o,
      id: e,
    };
  }
  var Jb = Symbol('icon-context');
  function Ve(e, t, n) {
    var r = {
      name: 'icon-' + e,
      props: ['size', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'theme', 'fill', 'spin'],
      setup: function (i) {
        var a = Zb(),
          s = Ae(Jb, qb);
        return function () {
          var l = i.size,
            c = i.strokeWidth,
            u = i.strokeLinecap,
            f = i.strokeLinejoin,
            d = i.theme,
            p = i.fill,
            h = i.spin,
            m = Qb(a, { size: l, strokeWidth: c, strokeLinecap: u, strokeLinejoin: f, theme: d, fill: p }, s),
            y = [s.prefix + '-icon'];
          return (
            y.push(s.prefix + '-icon-' + e),
            t && s.rtl && y.push(s.prefix + '-icon-rtl'),
            h && y.push(s.prefix + '-icon-spin'),
            v('span', { class: y.join(' ') }, [n(m)])
          );
        };
      },
    };
    return r;
  }
  const e1 = Ve('analysis', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M44 5H3.99998V17H44V5Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M3.99998 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2786 31.368',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M44 16.1719V42.1719',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M3.99998 16.1719V30.1719',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M13.0155 43H44',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
          },
          null,
        ),
        v(
          'path',
          { 'd': 'M17 11H38', 'stroke': e.colors[2], 'stroke-width': e.strokeWidth, 'stroke-linecap': e.strokeLinecap },
          null,
        ),
        v(
          'path',
          {
            'd': 'M9.99998 10.9966H11',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
          },
          null,
        ),
      ]);
    }),
    t1 = Ve('attention', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            'd': 'M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z',
            'fill': e.colors[2],
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M24 12V28',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    n1 = Ve('check', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M43 11L16.875 37L5 25.1818',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    r1 = Ve('check-one', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M16 24L22 30L34 18',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    o1 = Ve('close', !1, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M8 8L40 40',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M8 40L40 8',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    i1 = Ve('close-one', !1, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M29.6567 18.3432L18.343 29.6569',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M18.3433 18.3432L29.657 29.6569',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    dh = Ve('delete', !1, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M9 10V44H39V10H9Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M20 20V33',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M28 20V33',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M4 10H44',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M16 10L19.289 4H28.7771L32 10H16Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    ph = Ve('edit', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M7 42H43',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    a1 = Ve('file-addition', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M30 4L40 14',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M24 21V35',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M17 28H24L31 28',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    s1 = Ve('file-code', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M30 4L40 14',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M27 24L32 29L27 34',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M21 24L16 29L21 34',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    l1 = Ve('hand-left', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M44 41V19H38V41H44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            'd': 'M38 19.0002C30.8948 12.4304 26.7757 8.66359 25.6428 7.69983C23.9433 6.25419 22.0226 6.86123 22.0226 10.479C22.0226 14.0968 27.2864 16.2443 27.2864 19.0002C27.2898 19.0166 20.529 19.0177 7.00404 19.0035C5.3467 19.0017 4.00175 20.3438 4 22.0012C4 22.0022 4 22.0033 4 22.0043C4 23.6635 5.34501 25.0085 7.00417 25.0085H14.0165C15.2234 32.9771 15.8893 37.3101 16.0144 38.0075C16.2019 39.0536 17.199 41.0002 20.068 41.0002C21.9807 41.0002 27.9581 41.0002 38 41.0002V19.0002Z',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    c1 = Ve('help', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M24 28.6248V24.6248C27.3137 24.6248 30 21.9385 30 18.6248C30 15.3111 27.3137 12.6248 24 12.6248C20.6863 12.6248 18 15.3111 18 18.6248',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            'd': 'M24 37.6248C25.3807 37.6248 26.5 36.5055 26.5 35.1248C26.5 33.7441 25.3807 32.6248 24 32.6248C22.6193 32.6248 21.5 33.7441 21.5 35.1248C21.5 36.5055 22.6193 37.6248 24 37.6248Z',
            'fill': e.colors[2],
          },
          null,
        ),
      ]);
    }),
    u1 = Ve('home', !1, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M9 18V42H39V18L24 6L9 18Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M19 29V42H29V29H19Z',
            'fill': e.colors[3],
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          { 'd': 'M9 42H39', 'stroke': e.colors[0], 'stroke-width': e.strokeWidth, 'stroke-linecap': e.strokeLinecap },
          null,
        ),
      ]);
    }),
    f1 = Ve('info', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            'd': 'M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z',
            'fill': e.colors[2],
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M24.5 34V20H23.5H22.5',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M21 34H28',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    d1 = Ve('key', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M22.8682 24.2982C25.4105 26.7935 26.4138 30.4526 25.4971 33.8863C24.5805 37.32 21.8844 40.0019 18.4325 40.9137C14.9806 41.8256 11.3022 40.8276 8.79375 38.2986C5.02208 34.4141 5.07602 28.2394 8.91499 24.4206C12.754 20.6019 18.9613 20.5482 22.8664 24.3L22.8682 24.2982Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M23 24L40 7',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M30.3052 16.9001L35.7337 22.3001L42.0671 16.0001L36.6385 10.6001L30.3052 16.9001Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    p1 = Ve('monitor-one', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M5 8C5 6.89543 5.89543 6 7 6H41C42.1046 6 43 6.89543 43 8V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V8Z',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M5 26C5 24.8954 5.89543 24 7 24H41C42.1046 24 43 24.8954 43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V26Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M22 12L18 17',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M28 14L25 18',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v('circle', { cx: '24', cy: '29', r: '2', fill: e.colors[2] }, null),
        v(
          'path',
          {
            'd': 'M17 34L14 42H34L31 34',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    h1 = Ve('plus', !1, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24.0605 10L24.0239 38',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M10 24L38 24',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    m1 = Ve('search', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M33.2216 33.2217L41.7069 41.707',
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    v1 = Ve('setting', !1, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z',
            'fill': e.colors[3],
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    g1 = Ve('time', !0, function (e) {
      return v('svg', { width: e.size, height: e.size, viewBox: '0 0 48 48', fill: 'none' }, [
        v(
          'path',
          {
            'd': 'M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z',
            'fill': e.colors[1],
            'stroke': e.colors[0],
            'stroke-width': e.strokeWidth,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
        v(
          'path',
          {
            'd': 'M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883',
            'stroke': e.colors[2],
            'stroke-width': e.strokeWidth,
            'stroke-linecap': e.strokeLinecap,
            'stroke-linejoin': e.strokeLinejoin,
          },
          null,
        ),
      ]);
    }),
    y1 = { class: 'flex items-start max-w-[75vw] w-max' },
    b1 = { class: 'h-5 flex-center flex-none' },
    w1 = { class: 'ml-1 text-sm whitespace-normal break-all' },
    _1 = ce({
      __name: 'Toast',
      props: {
        id: {},
        offset: { default: 0 },
        onClose: {},
        onDestroy: {},
        type: {},
        content: {},
        duration: { default: 1500 },
        position: { default: 'top-center' },
        html: { type: Boolean },
      },
      setup(e) {
        const t = e,
          n = te(!1),
          r = P(() => t.position.split('-')),
          o = P(() => r.value[0]),
          i = P(() => r.value[1]),
          a = P(() => ({ success: r1, error: i1, info: f1, warning: t1 })[t.type]),
          s = P(() => ({
            'toast': !0,
            'toast-top': o.value === 'top',
            'toast-bottom': o.value === 'bottom',
            'toast-start': i.value === 'start',
            'toast-center': i.value === 'center',
            'toast-end': i.value === 'end',
            'p-1': !0,
            'z-[9999]': !0,
          })),
          l = P(() => ({
            'alert': !0,
            'alert-info': t.type === 'info',
            'alert-error': t.type === 'error',
            'alert-warning': t.type === 'warning',
            'alert-success': t.type === 'success',
            'py-2': !0,
          })),
          c = P(() => ({ [o.value]: `${t.offset}px` })),
          u = P(() => (i.value === 'center' ? `toast-${t.position}` : `toast-${i.value}`));
        ut(() => {
          (n.value = !0), f();
        });
        function f() {
          setTimeout(() => {
            d();
          }, t.duration);
        }
        function d() {
          n.value = !1;
        }
        return (p, h) => (
          he(),
          nt(
            lr,
            { name: u.value, onBeforeLeave: p.onClose, onAfterLeave: p.onDestroy },
            {
              default: $e(() => [
                da(
                  Se(
                    'div',
                    { class: Ye(s.value), style: Sn(c.value) },
                    [
                      Se(
                        'div',
                        { class: Ye([l.value, 'grid-cols-[unset] text-left']) },
                        [Se('div', y1, [Se('div', b1, [(he(), nt(Pp(a.value)))]), Se('div', w1, Kt(p.content), 1)])],
                        2,
                      ),
                    ],
                    6,
                  ),
                  [[Nl, n.value]],
                ),
              ]),
              _: 1,
            },
            8,
            ['name', 'onBeforeLeave', 'onAfterLeave'],
          )
        );
      },
    }),
    C1 = jt(_1, [['__scopeId', 'data-v-737de82e']]);
  let x1 = 0;
  const Ja = new Map(),
    hh = (e) => (Ja.has(e) || Ja.set(e, []), Ja.get(e)),
    Pu = (e, t) => {
      var a;
      const n = t.split('-')[0] === 'top',
        r = hh(t),
        o = r.findIndex((s) => {
          var l, c;
          return ((c = (l = s.component) == null ? void 0 : l.props) == null ? void 0 : c.id) === e;
        });
      if (o === -1) return;
      const i = r.splice(o, 1)[0];
      if (n) {
        const s = r.length;
        if (!s || o >= s) return;
        const l = ((a = i.el) == null ? void 0 : a.offsetHeight) ?? 0;
        for (let c = o; c < s; c++) {
          const u = r[c];
          if (u.el && u.component) {
            const f = parseInt(u.el.style.top, 10) - l;
            u.component.props.offset = f;
          }
        }
      }
    },
    mh = (e) => {
      const { position: t = 'top-center' } = e,
        n = t.split('-')[0] === 'bottom',
        r = document.createElement('div');
      r.classList.add('toast-container');
      const o = hh(t);
      let i = Gb;
      n ||
        o.forEach((c) => {
          var u;
          i += ((u = c.el) == null ? void 0 : u.offsetHeight) ?? 0;
        });
      const a = x1++,
        s = {
          ...e,
          id: a,
          offset: i,
          onClose: () => {
            Pu(a, t);
          },
          onDestroy: () => {
            fu(null, r), r.remove();
          },
        },
        l = v(C1, s);
      return (
        o.push(l),
        fu(l, r),
        document.body.appendChild(r),
        n &&
          setTimeout(() => {
            var u;
            const c = ((u = l.el) == null ? void 0 : u.offsetHeight) ?? 0;
            for (let f = 0; f < o.length - 1; f++) {
              const d = o[f];
              if (d.el && d.component) {
                const p = parseInt(d.el.style.bottom, 10) + c;
                d.component.props.offset = p;
              }
            }
          }),
        () => {
          Pu(a, t);
        }
      );
    },
    $1 = Xb.reduce((e, t) => ((e[t] = (n, r) => mh({ ...r, content: n, type: t })), e), {}),
    Bl = Object.assign(mh, $1),
    S1 = ['data-tip'],
    T1 = ce({
      __name: 'Tooltip',
      props: {
        type: {},
        content: { default: '' },
        open: { type: Boolean },
        position: { default: 'top' },
        disabled: { type: Boolean, default: !1 },
      },
      setup(e) {
        const t = e,
          n = P(() => !t.content || t.disabled),
          r = P(() =>
            n.value
              ? {}
              : {
                  'tooltip': !0,
                  'tooltip-open': t.open,
                  'tooltip-top': t.position === 'top',
                  'tooltip-bottom': t.position === 'bottom',
                  'tooltip-left': t.position === 'left',
                  'tooltip-right': t.position === 'right',
                  'tooltip-primary': t.type === 'primary',
                  'tooltip-secondary': t.type === 'secondary',
                  'tooltip-accent': t.type === 'accent',
                  'tooltip-info': t.type === 'info',
                  'tooltip-success': t.type === 'success',
                  'tooltip-warning': t.type === 'warning',
                  'tooltip-error': t.type === 'error',
                },
          );
        return (o, i) => (
          he(),
          Ee('div', { 'class': Ye(r.value), 'data-tip': o.content }, [Rt(o.$slots, 'default', {}, void 0, !0)], 10, S1)
        );
      },
    }),
    _a = jt(T1, [['__scopeId', 'data-v-2a81d5de']]),
    O1 = { class: 'form-control w-full' },
    E1 = { class: 'label' },
    P1 = { class: 'inline-flex items-center' },
    k1 = { class: 'label-text font-semibold text-base' },
    M1 = { class: 'label font-semibold pb-0' },
    ku = ce({
      __name: 'FormInput',
      props: { modelValue: {}, title: {}, placeholder: { default: '' }, tip: { default: '' }, validateFn: {} },
      emits: ['update:modelValue', 'change', 'input'],
      setup(e, { expose: t, emit: n }) {
        const r = e;
        t({ validate: l, clearValidation: c, focus: s });
        const o = P({
            get() {
              return r.modelValue;
            },
            set(d) {
              n('update:modelValue', d);
            },
          }),
          i = te(''),
          a = te(null);
        function s() {
          var d;
          (d = a.value) == null || d.focus();
        }
        function l() {
          var d;
          return (i.value = ((d = r.validateFn) == null ? void 0 : d.call(r, r.modelValue)) ?? ''), !i.value;
        }
        function c() {
          i.value = '';
        }
        function u(d) {
          n('change', d);
        }
        function f(d) {
          var p;
          (i.value = ((p = r.validateFn) == null ? void 0 : p.call(r, d)) ?? ''), n('input', d);
        }
        return (d, p) => (
          he(),
          Ee('div', O1, [
            Se('label', E1, [
              Se('div', P1, [
                Se('span', k1, Kt(d.title), 1),
                d.tip
                  ? (he(),
                    nt(
                      J(_a),
                      { key: 0, class: 'ml-1', content: d.tip, position: 'right' },
                      { default: $e(() => [v(J(c1), { size: 14 })]), _: 1 },
                      8,
                      ['content'],
                    ))
                  : Yn('', !0),
              ]),
            ]),
            v(
              J(Hl),
              {
                'ref_key': 'input',
                'ref': a,
                'modelValue': o.value,
                'onUpdate:modelValue': p[0] || (p[0] = (h) => (o.value = h)),
                'class': Ye({ 'text-error': !!i.value }),
                'placeholder': d.placeholder,
                'size': 'sm',
                'bordered': '',
                'type': i.value ? 'error' : void 0,
                'onChange': u,
                'onInput': f,
              },
              null,
              8,
              ['modelValue', 'class', 'placeholder', 'type'],
            ),
            Se('label', M1, [
              Se('span', { class: Ye(['label-text-alt', { 'text-error': !!i.value }]) }, Kt(i.value || ' '), 3),
            ]),
          ])
        );
      },
    }),
    Xn = ce({
      __name: 'IconButton',
      props: { size: { default: 24 } },
      setup(e) {
        const t = e,
          n = P(() => ({ width: `${t.size}px`, height: `${t.size}px` }));
        return (r, o) => (
          he(),
          nt(
            J(An),
            { class: 'min-h-0 rounded', style: Sn(n.value), shape: 'square', type: 'ghost' },
            { default: $e(() => [Rt(r.$slots, 'default')]), _: 3 },
            8,
            ['style'],
          )
        );
      },
    });
  function Ca(e) {
    return _l() ? (Gd(e), !0) : !1;
  }
  function xa(e) {
    return typeof e == 'function' ? e() : J(e);
  }
  const zl = typeof window < 'u' && typeof document < 'u',
    A1 = Object.prototype.toString,
    I1 = (e) => A1.call(e) === '[object Object]',
    R1 = () => {};
  function L1(e, t) {
    function n(...r) {
      return new Promise((o, i) => {
        Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
          .then(o)
          .catch(i);
      });
    }
    return n;
  }
  const vh = (e) => e();
  function D1(e = vh) {
    const t = te(!0);
    function n() {
      t.value = !1;
    }
    function r() {
      t.value = !0;
    }
    const o = (...i) => {
      t.value && e(...i);
    };
    return { isActive: Yo(t), pause: n, resume: r, eventFilter: o };
  }
  function N1(e, t, n = {}) {
    const { eventFilter: r = vh, ...o } = n;
    return _e(e, L1(r, t), o);
  }
  function j1(e, t, n = {}) {
    const { eventFilter: r, ...o } = n,
      { eventFilter: i, pause: a, resume: s, isActive: l } = D1(r);
    return { stop: N1(e, t, { ...o, eventFilter: i }), pause: a, resume: s, isActive: l };
  }
  function H1(e, t = !0) {
    fn() ? ut(e) : t ? e() : tt(e);
  }
  function B1(e, t, n = {}) {
    const { immediate: r = !0 } = n,
      o = te(!1);
    let i = null;
    function a() {
      i && (clearTimeout(i), (i = null));
    }
    function s() {
      (o.value = !1), a();
    }
    function l(...c) {
      a(),
        (o.value = !0),
        (i = setTimeout(() => {
          (o.value = !1), (i = null), e(...c);
        }, xa(t)));
    }
    return r && ((o.value = !0), zl && l()), Ca(s), { isPending: Yo(o), start: l, stop: s };
  }
  function Fl(e, t, n) {
    return _e(
      e,
      (r, o, i) => {
        r && t(r, o, i);
      },
      n,
    );
  }
  function zs(e) {
    var t;
    const n = xa(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n;
  }
  const No = zl ? window : void 0,
    z1 = zl ? window.document : void 0;
  function _o(...e) {
    let t, n, r, o;
    if ((typeof e[0] == 'string' || Array.isArray(e[0]) ? (([n, r, o] = e), (t = No)) : ([t, n, r, o] = e), !t))
      return R1;
    Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
    const i = [],
      a = () => {
        i.forEach((u) => u()), (i.length = 0);
      },
      s = (u, f, d, p) => (u.addEventListener(f, d, p), () => u.removeEventListener(f, d, p)),
      l = _e(
        () => [zs(t), xa(o)],
        ([u, f]) => {
          if ((a(), !u)) return;
          const d = I1(f) ? { ...f } : f;
          i.push(...n.flatMap((p) => r.map((h) => s(u, p, h, d))));
        },
        { immediate: !0, flush: 'post' },
      ),
      c = () => {
        l(), a();
      };
    return Ca(c), c;
  }
  function F1() {
    const e = te(!1);
    return (
      fn() &&
        ut(() => {
          e.value = !0;
        }),
      e
    );
  }
  function W1(e) {
    const t = F1();
    return P(() => (t.value, !!e()));
  }
  const ai =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    si = '__vueuse_ssr_handlers__',
    V1 = K1();
  function K1() {
    return si in ai || (ai[si] = ai[si] || {}), ai[si];
  }
  function U1(e, t) {
    return V1[e] || t;
  }
  function Y1(e) {
    return e == null
      ? 'any'
      : e instanceof Set
      ? 'set'
      : e instanceof Map
      ? 'map'
      : e instanceof Date
      ? 'date'
      : typeof e == 'boolean'
      ? 'boolean'
      : typeof e == 'string'
      ? 'string'
      : typeof e == 'object'
      ? 'object'
      : Number.isNaN(e)
      ? 'any'
      : 'number';
  }
  const X1 = {
      boolean: { read: (e) => e === 'true', write: (e) => String(e) },
      object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
      number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
      any: { read: (e) => e, write: (e) => String(e) },
      string: { read: (e) => e, write: (e) => String(e) },
      map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) },
      set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
      date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
    },
    Mu = 'vueuse-storage';
  function G1(e, t, n, r = {}) {
    var o;
    const {
        flush: i = 'pre',
        deep: a = !0,
        listenToStorageChanges: s = !0,
        writeDefaults: l = !0,
        mergeDefaults: c = !1,
        shallow: u,
        window: f = No,
        eventFilter: d,
        onError: p = ($) => {
          console.error($);
        },
      } = r,
      h = (u ? le : te)(t);
    if (!n)
      try {
        n = U1('getDefaultStorage', () => {
          var $;
          return ($ = No) == null ? void 0 : $.localStorage;
        })();
      } catch ($) {
        p($);
      }
    if (!n) return h;
    const m = xa(t),
      y = Y1(m),
      b = (o = r.serializer) != null ? o : X1[y],
      { pause: _, resume: M } = j1(h, () => R(h.value), { flush: i, deep: a, eventFilter: d });
    return f && s && (_o(f, 'storage', T), _o(f, Mu, C)), T(), h;
    function R($) {
      try {
        if ($ == null) n.removeItem(e);
        else {
          const L = b.write($),
            S = n.getItem(e);
          S !== L &&
            (n.setItem(e, L),
            f &&
              f.dispatchEvent(new CustomEvent(Mu, { detail: { key: e, oldValue: S, newValue: L, storageArea: n } })));
        }
      } catch (L) {
        p(L);
      }
    }
    function x($) {
      const L = $ ? $.newValue : n.getItem(e);
      if (L == null) return l && m !== null && n.setItem(e, b.write(m)), m;
      if (!$ && c) {
        const S = b.read(L);
        return typeof c == 'function' ? c(S, m) : y === 'object' && !Array.isArray(S) ? { ...m, ...S } : S;
      } else return typeof L != 'string' ? L : b.read(L);
    }
    function C($) {
      T($.detail);
    }
    function T($) {
      if (!($ && $.storageArea !== n)) {
        if ($ && $.key == null) {
          h.value = m;
          return;
        }
        if (!($ && $.key !== e)) {
          _();
          try {
            ($ == null ? void 0 : $.newValue) !== b.write(h.value) && (h.value = x($));
          } catch (L) {
            p(L);
          } finally {
            $ ? tt(M) : M();
          }
        }
      }
    }
  }
  function q1(e, t, n = {}) {
    const { window: r = No, ...o } = n;
    let i;
    const a = W1(() => r && 'ResizeObserver' in r),
      s = () => {
        i && (i.disconnect(), (i = void 0));
      },
      l = P(() => (Array.isArray(e) ? e.map((f) => zs(f)) : [zs(e)])),
      c = _e(
        l,
        (f) => {
          if ((s(), a.value && r)) {
            i = new ResizeObserver(t);
            for (const d of f) d && i.observe(d, o);
          }
        },
        { immediate: !0, flush: 'post', deep: !0 },
      ),
      u = () => {
        s(), c();
      };
    return Ca(u), { isSupported: a, stop: u };
  }
  function Z1(e, t, n = {}) {
    const { window: r = No } = n;
    return G1(e, t, r == null ? void 0 : r.localStorage, n);
  }
  let Q1 = 0;
  function J1(e, t = {}) {
    const n = te(!1),
      { document: r = z1, immediate: o = !0, manual: i = !1, id: a = `vueuse_styletag_${++Q1}` } = t,
      s = te(e);
    let l = () => {};
    const c = () => {
        if (!r) return;
        const f = r.getElementById(a) || r.createElement('style');
        f.isConnected || ((f.id = a), t.media && (f.media = t.media), r.head.appendChild(f)),
          !n.value &&
            ((l = _e(
              s,
              (d) => {
                f.textContent = d;
              },
              { immediate: !0 },
            )),
            (n.value = !0));
      },
      u = () => {
        !r || !n.value || (l(), r.head.removeChild(r.getElementById(a)), (n.value = !1));
      };
    return o && !i && H1(c), i || Ca(u), { id: a, css: s, unload: u, load: c, isLoaded: Yo(n) };
  }
  const ew = ce({
      __name: 'ResizeLayout',
      props: {
        vertical: { type: Boolean, default: !1 },
        barSize: { default: 6 },
        barColor: { default: 'transparent' },
        barFocusedSize: { default: 2 },
        barFocusedColor: { default: 'transparent' },
        initStartSize: {},
        localKey: { default: '' },
        startMinSize: {},
        startMaxSize: {},
      },
      setup(e) {
        const t = e,
          n = te(null),
          r = te(null),
          o = te(null),
          i = te(null),
          a = te(!1),
          s = te(!1),
          l = Z1(t.localKey, ''),
          c = te(l.value || t.initStartSize || '50%'),
          { css: u, load: f, unload: d } = J1(''),
          p = P(() =>
            t.vertical
              ? {
                  'height': c.value,
                  'min-height': t.startMinSize && `${t.startMinSize}px`,
                  'max-height': t.startMaxSize && `${t.startMaxSize}px`,
                }
              : {
                  'width': c.value,
                  'min-width': t.startMinSize && `${t.startMinSize}px`,
                  'max-width': t.startMaxSize && `${t.startMaxSize}px`,
                },
          ),
          h = P(() =>
            t.vertical
              ? { 'height': `${t.barSize}px`, 'width': '100%', 'cursor': 'row-resize', 'background-color': t.barColor }
              : { 'width': `${t.barSize}px`, 'height': '100%', 'cursor': 'col-resize', 'background-color': t.barColor },
          ),
          m = P(() =>
            t.vertical
              ? {
                  'height': `${t.barFocusedSize}px`,
                  'width': '100%',
                  'background-color': a.value || s.value ? t.barFocusedColor : 'transparent',
                }
              : {
                  'width': `${t.barFocusedSize}px`,
                  'height': '100%',
                  'background-color': a.value || s.value ? t.barFocusedColor : 'transparent',
                },
          );
        return (
          _o(r, 'mousedown', () => {
            (s.value = !0),
              (u.value = `
    :root { 
      cursor: ${t.vertical ? 'row-resize' : 'col-resize'}; 
    }
    * {
      user-select: none;
      pointer-events: none;
    }
  `),
              f();
          }),
          _o(document, 'mouseup', () => {
            (s.value = !1), d();
          }),
          _o(document, 'mousemove', (y) => {
            var x, C;
            if (!s.value) return;
            const { width: b = 0, height: _ = 0 } = ((x = n.value) == null ? void 0 : x.getBoundingClientRect()) ?? {},
              { width: M = 0, height: R = 0 } = ((C = o.value) == null ? void 0 : C.getBoundingClientRect()) ?? {};
            t.vertical
              ? (c.value = `${Math.min(R + y.movementY, _ - t.barSize)}px`)
              : (c.value = `${Math.min(M + y.movementX, b - t.barSize)}px`),
              t.localKey && (l.value = c.value),
              tt(() => {
                var L, S, B, Y, ne, Z;
                const T =
                    (t.vertical
                      ? (L = n.value) == null
                        ? void 0
                        : L.scrollHeight
                      : (S = n.value) == null
                      ? void 0
                      : S.scrollWidth) ?? 0,
                  $ =
                    (t.vertical
                      ? (B = n.value) == null
                        ? void 0
                        : B.offsetHeight
                      : (Y = n.value) == null
                      ? void 0
                      : Y.offsetWidth) ?? 0;
                if (T > $) {
                  const k =
                    (t.vertical
                      ? (ne = i.value) == null
                        ? void 0
                        : ne.scrollHeight
                      : (Z = i.value) == null
                      ? void 0
                      : Z.scrollWidth) ?? 0;
                  (c.value = `${$ - t.barSize - k}px`), t.localKey && (l.value = c.value);
                }
              });
          }),
          q1(n, (y) => {
            var C;
            const b = y[0],
              { width: _, height: M } = b.contentRect,
              { width: R = 0, height: x = 0 } = ((C = o.value) == null ? void 0 : C.getBoundingClientRect()) ?? {};
            t.vertical ? (c.value = `${Math.min(x, M - t.barSize)}px`) : (c.value = `${Math.min(R, _ - t.barSize)}px`),
              t.localKey && (l.value = c.value);
          }),
          Kr(() => {
            d();
          }),
          (y, b) => (
            he(),
            Ee(
              'div',
              { ref_key: 'layoutRef', ref: n, class: Ye(['resize-layout flex', { 'flex-col': y.vertical }]) },
              [
                Se(
                  'div',
                  {
                    ref_key: 'startRef',
                    ref: o,
                    class: Ye([
                      'start-container flex-none',
                      [y.vertical ? 'min-h-fit max-h-full h-1/2' : 'min-w-fit max-w-full w-1/2'],
                    ]),
                    style: Sn(p.value),
                  },
                  [Rt(y.$slots, 'start', {}, void 0, !0)],
                  6,
                ),
                Se(
                  'div',
                  {
                    ref_key: 'barRef',
                    ref: r,
                    class: 'flex-none flex-center',
                    style: Sn(h.value),
                    onMouseenter: b[0] || (b[0] = (_) => (a.value = !0)),
                    onMouseleave: b[1] || (b[1] = (_) => (a.value = !1)),
                  },
                  [Se('div', { class: 'transition rounded-full', style: Sn(m.value) }, null, 4)],
                  36,
                ),
                Se(
                  'div',
                  {
                    ref_key: 'endRef',
                    ref: i,
                    class: Ye(['end-container flex-1', [y.vertical ? 'min-h-fit max-h-full' : 'min-w-fit max-w-full']]),
                  },
                  [Rt(y.$slots, 'end', {}, void 0, !0)],
                  2,
                ),
              ],
              2,
            )
          )
        );
      },
    }),
    tw = jt(ew, [['__scopeId', 'data-v-298ab477']]);
  function gh(e, t = 1500) {
    const n = te(!1),
      { start: r, stop: o } = B1(() => {
        n.value = !1;
      }, t);
    function i() {
      n.value ? (o(), e()) : ((n.value = !0), r());
    }
    function a() {
      n.value = !1;
    }
    return { confirmed: n, trigger: i, cancel: a };
  }
  function nw(e) {
    return e;
  }
  function rw(e) {
    return e.length === 0
      ? nw
      : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
  }
  function yh(e) {
    const t = {
      subscribe(n) {
        let r = null,
          o = !1,
          i = !1,
          a = !1;
        function s() {
          if (r === null) {
            a = !0;
            return;
          }
          i || ((i = !0), typeof r == 'function' ? r() : r && r.unsubscribe());
        }
        return (
          (r = e({
            next(l) {
              var c;
              o || (c = n.next) == null || c.call(n, l);
            },
            error(l) {
              var c;
              o || ((o = !0), (c = n.error) == null || c.call(n, l), s());
            },
            complete() {
              var l;
              o || ((o = !0), (l = n.complete) == null || l.call(n), s());
            },
          })),
          a && s(),
          { unsubscribe: s }
        );
      },
      pipe(...n) {
        return rw(n)(t);
      },
    };
    return t;
  }
  function ow(e) {
    return (t) => {
      let n = 0,
        r = null;
      const o = [];
      function i() {
        r ||
          (r = t.subscribe({
            next(s) {
              var l;
              for (const c of o) (l = c.next) == null || l.call(c, s);
            },
            error(s) {
              var l;
              for (const c of o) (l = c.error) == null || l.call(c, s);
            },
            complete() {
              var s;
              for (const l of o) (s = l.complete) == null || s.call(l);
            },
          }));
      }
      function a() {
        if (n === 0 && r) {
          const s = r;
          (r = null), s.unsubscribe();
        }
      }
      return {
        subscribe(s) {
          return (
            n++,
            o.push(s),
            i(),
            {
              unsubscribe() {
                n--, a();
                const l = o.findIndex((c) => c === s);
                l > -1 && o.splice(l, 1);
              },
            }
          );
        },
      };
    };
  }
  class Wl extends Error {
    constructor(t) {
      super(t), (this.name = 'ObservableAbortError'), Object.setPrototypeOf(this, Wl.prototype);
    }
  }
  function iw(e) {
    let t;
    return {
      promise: new Promise((r, o) => {
        let i = !1;
        function a() {
          i || ((i = !0), o(new Wl('This operation was aborted.')), s.unsubscribe());
        }
        const s = e.subscribe({
          next(l) {
            (i = !0), r(l), a();
          },
          error(l) {
            (i = !0), o(l), a();
          },
          complete() {
            (i = !0), a();
          },
        });
        t = a;
      }),
      abort: t,
    };
  }
  function aw(e) {
    return yh((t) => {
      function n(o = 0, i = e.op) {
        const a = e.links[o];
        if (!a) throw new Error('No more links to execute - did you forget to add an ending link?');
        return a({
          op: i,
          next(l) {
            return n(o + 1, l);
          },
        });
      }
      return n().subscribe(t);
    });
  }
  function Bi(e) {
    return !!e && !Array.isArray(e) && typeof e == 'object';
  }
  function sw(e, t) {
    if ('error' in e) {
      const r = t.transformer.deserialize(e.error);
      return { ok: !1, error: { ...e, error: r } };
    }
    return {
      ok: !0,
      result: {
        ...e.result,
        ...((!e.result.type || e.result.type === 'data') && {
          type: 'data',
          data: t.transformer.deserialize(e.result.data),
        }),
      },
    };
  }
  class es extends Error {
    constructor() {
      super('Unable to transform response from server');
    }
  }
  function lw(e, t) {
    let n;
    try {
      n = sw(e, t);
    } catch {
      throw new es();
    }
    if (!n.ok && (!Bi(n.error.error) || typeof n.error.error.code != 'number')) throw new es();
    if (n.ok && !Bi(n.result)) throw new es();
    return n;
  }
  function cw(e) {
    return e instanceof Wt || (e instanceof Error && e.name === 'TRPCClientError');
  }
  function uw(e) {
    return Bi(e) && Bi(e.error) && typeof e.error.code == 'number' && typeof e.error.message == 'string';
  }
  class Wt extends Error {
    static from(t, n = {}) {
      const r = t;
      return cw(r)
        ? (n.meta && (r.meta = { ...r.meta, ...n.meta }), r)
        : uw(r)
        ? new Wt(r.error.message, { ...n, result: r })
        : r instanceof Error
        ? new Wt(r.message, { ...n, cause: r })
        : new Wt('Unknown error', { ...n, cause: r });
    }
    constructor(t, n) {
      var o, i;
      const r = n == null ? void 0 : n.cause;
      super(t, { cause: r }),
        (this.meta = n == null ? void 0 : n.meta),
        (this.cause = r),
        (this.shape = (o = n == null ? void 0 : n.result) == null ? void 0 : o.error),
        (this.data = (i = n == null ? void 0 : n.result) == null ? void 0 : i.error.data),
        (this.name = 'TRPCClientError'),
        Object.setPrototypeOf(this, Wt.prototype);
    }
  }
  function bh(e) {
    const t = Object.create(null);
    for (const n in e) {
      const r = e[n];
      t[r] = n;
    }
    return t;
  }
  const wh = {
    PARSE_ERROR: -32700,
    BAD_REQUEST: -32600,
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    UNAUTHORIZED: -32001,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNPROCESSABLE_CONTENT: -32022,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099,
  };
  bh(wh);
  bh(wh);
  const _h = () => {};
  function Ch(e, t) {
    return new Proxy(_h, {
      get(r, o) {
        if (!(typeof o != 'string' || o === 'then')) return Ch(e, [...t, o]);
      },
      apply(r, o, i) {
        const a = t[t.length - 1] === 'apply';
        return e({ args: a ? (i.length >= 2 ? i[1] : []) : i, path: a ? t.slice(0, -1) : t });
      },
    });
  }
  const fw = (e) => Ch(e, []),
    dw = (e) =>
      new Proxy(_h, {
        get(t, n) {
          if (!(typeof n != 'string' || n === 'then')) return e(n);
        },
      }),
    Au = (e) => typeof e == 'function';
  function pw(e) {
    if (e) return e;
    if (typeof window < 'u' && Au(window.fetch)) return window.fetch;
    if (typeof globalThis < 'u' && Au(globalThis.fetch)) return globalThis.fetch;
    throw new Error('No fetch implementation found');
  }
  function hw(e) {
    return (
      e ||
      (typeof window < 'u' && window.AbortController
        ? window.AbortController
        : typeof globalThis < 'u' && globalThis.AbortController
        ? globalThis.AbortController
        : null)
    );
  }
  function mw(e) {
    return { url: e.url.toString().replace(/\/$/, ''), fetch: e.fetch, AbortController: hw(e.AbortController) };
  }
  function vw(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      t[n] = r;
    }
    return t;
  }
  const gw = { query: 'GET', mutation: 'POST' };
  function xh(e) {
    return 'input' in e
      ? e.runtime.transformer.serialize(e.input)
      : vw(e.inputs.map((t) => e.runtime.transformer.serialize(t)));
  }
  const $h = (e) => {
      let t = e.url + '/' + e.path;
      const n = [];
      if (('inputs' in e && n.push('batch=1'), e.type === 'query')) {
        const r = xh(e);
        r !== void 0 && n.push(`input=${encodeURIComponent(JSON.stringify(r))}`);
      }
      return n.length && (t += '?' + n.join('&')), t;
    },
    yw = (e) => {
      if (e.type === 'query') return;
      const t = xh(e);
      return t !== void 0 ? JSON.stringify(t) : void 0;
    },
    bw = (e) => _w({ ...e, contentTypeHeader: 'application/json', getUrl: $h, getBody: yw });
  async function ww(e, t) {
    const n = e.getUrl(e),
      r = e.getBody(e),
      { type: o } = e,
      i = await e.headers();
    /* istanbul ignore if -- @preserve */ if (o === 'subscription') throw new Error('Subscriptions should use wsLink');
    const a = {
      ...(e.contentTypeHeader ? { 'content-type': e.contentTypeHeader } : {}),
      ...(e.batchModeHeader ? { 'trpc-batch-mode': e.batchModeHeader } : {}),
      ...i,
    };
    return pw(e.fetch)(n, { method: gw[o], signal: t == null ? void 0 : t.signal, body: r, headers: a });
  }
  function _w(e) {
    const t = e.AbortController ? new e.AbortController() : null,
      n = {};
    let r = !1;
    return {
      promise: new Promise((a, s) => {
        ww(e, t)
          .then((l) => ((n.response = l), (r = !0), l.json()))
          .then((l) => {
            (n.responseJSON = l), a({ json: l, meta: n });
          })
          .catch((l) => {
            (r = !0), s(Wt.from(l, { meta: n }));
          });
      }),
      cancel: () => {
        r || t == null || t.abort();
      },
    };
  }
  const ts = () => {
    throw new Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
  };
  function ns(e) {
    let t = null,
      n = null;
    const r = () => {
      clearTimeout(n), (n = null), (t = null);
    };
    function o(s) {
      var u, f;
      const l = [[]];
      let c = 0;
      for (;;) {
        const d = s[c];
        if (!d) break;
        const p = l[l.length - 1];
        if (d.aborted) {
          (u = d.reject) == null || u.call(d, new Error('Aborted')), c++;
          continue;
        }
        if (e.validate(p.concat(d).map((m) => m.key))) {
          p.push(d), c++;
          continue;
        }
        if (p.length === 0) {
          (f = d.reject) == null || f.call(d, new Error('Input is too big for a single dispatch')), c++;
          continue;
        }
        l.push([]);
      }
      return l;
    }
    function i() {
      const s = o(t);
      r();
      for (const l of s) {
        if (!l.length) continue;
        const c = { items: l, cancel: ts };
        for (const p of l) p.batch = c;
        const u = (p, h) => {
            var y;
            const m = c.items[p];
            (y = m.resolve) == null || y.call(m, h), (m.batch = null), (m.reject = null), (m.resolve = null);
          },
          { promise: f, cancel: d } = e.fetch(
            c.items.map((p) => p.key),
            u,
          );
        (c.cancel = d),
          f
            .then((p) => {
              var h;
              for (let m = 0; m < p.length; m++) {
                const y = p[m];
                u(m, y);
              }
              for (const m of c.items)
                (h = m.reject) == null || h.call(m, new Error('Missing result')), (m.batch = null);
            })
            .catch((p) => {
              var h;
              for (const m of c.items) (h = m.reject) == null || h.call(m, p), (m.batch = null);
            });
      }
    }
    function a(s) {
      const l = { aborted: !1, key: s, batch: null, resolve: ts, reject: ts },
        c = new Promise((f, d) => {
          (l.reject = d), (l.resolve = f), t || (t = []), t.push(l);
        });
      return (
        n || (n = setTimeout(i)),
        {
          promise: c,
          cancel: () => {
            var f;
            (l.aborted = !0),
              (f = l.batch) != null && f.items.every((d) => d.aborted) && (l.batch.cancel(), (l.batch = null));
          },
        }
      );
    }
    return { load: a };
  }
  function Cw(e) {
    return function (n) {
      const r = mw(n),
        o = n.maxURLLength ?? 1 / 0;
      return (i) => {
        const a = (f) => {
            const d = (h) => {
                if (o === 1 / 0) return !0;
                const m = h.map((_) => _.path).join(','),
                  y = h.map((_) => _.input);
                return $h({ ...r, runtime: i, type: f, path: m, inputs: y }).length <= o;
              },
              p = e({ ...r, runtime: i, type: f, opts: n });
            return { validate: d, fetch: p };
          },
          s = ns(a('query')),
          l = ns(a('mutation')),
          c = ns(a('subscription')),
          u = { query: s, subscription: c, mutation: l };
        return ({ op: f }) =>
          yh((d) => {
            const p = u[f.type],
              { promise: h, cancel: m } = p.load(f);
            let y;
            return (
              h
                .then((b) => {
                  y = b;
                  const _ = lw(b.json, i);
                  if (!_.ok) {
                    d.error(Wt.from(_.error, { meta: b.meta }));
                    return;
                  }
                  d.next({ context: b.meta, result: _.result }), d.complete();
                })
                .catch((b) => {
                  d.error(Wt.from(b, { meta: y == null ? void 0 : y.meta }));
                }),
              () => {
                m();
              }
            );
          });
      };
    };
  }
  const xw = (e) => (t) => {
      const n = t.map((a) => a.path).join(','),
        r = t.map((a) => a.input),
        { promise: o, cancel: i } = bw({
          ...e,
          path: n,
          inputs: r,
          headers() {
            return e.opts.headers
              ? typeof e.opts.headers == 'function'
                ? e.opts.headers({ opList: t })
                : e.opts.headers
              : {};
          },
        });
      return {
        promise: o.then((a) =>
          (Array.isArray(a.json) ? a.json : t.map(() => a.json)).map((c) => ({ meta: a.meta, json: c })),
        ),
        cancel: i,
      };
    },
    $w = Cw(xw);
  class Sw {
    $request({ type: t, input: n, path: r, context: o = {} }) {
      return aw({ links: this.links, op: { id: ++this.requestId, type: t, path: r, input: n, context: o } }).pipe(ow());
    }
    requestAsPromise(t) {
      const n = this.$request(t),
        { promise: r, abort: o } = iw(n);
      return new Promise((a, s) => {
        var l;
        (l = t.signal) == null || l.addEventListener('abort', o),
          r
            .then((c) => {
              a(c.result.data);
            })
            .catch((c) => {
              s(Wt.from(c));
            });
      });
    }
    query(t, n, r) {
      return this.requestAsPromise({
        type: 'query',
        path: t,
        input: n,
        context: r == null ? void 0 : r.context,
        signal: r == null ? void 0 : r.signal,
      });
    }
    mutation(t, n, r) {
      return this.requestAsPromise({
        type: 'mutation',
        path: t,
        input: n,
        context: r == null ? void 0 : r.context,
        signal: r == null ? void 0 : r.signal,
      });
    }
    subscription(t, n, r) {
      return this.$request({
        type: 'subscription',
        path: t,
        input: n,
        context: r == null ? void 0 : r.context,
      }).subscribe({
        next(i) {
          var a, s, l;
          i.result.type === 'started'
            ? (a = r.onStarted) == null || a.call(r)
            : i.result.type === 'stopped'
            ? (s = r.onStopped) == null || s.call(r)
            : (l = r.onData) == null || l.call(r, i.result.data);
        },
        error(i) {
          var a;
          (a = r.onError) == null || a.call(r, i);
        },
        complete() {
          var i;
          (i = r.onComplete) == null || i.call(r);
        },
      });
    }
    constructor(t) {
      this.requestId = 0;
      const n = (() => {
        const r = t.transformer;
        return r
          ? 'input' in r
            ? t.transformer
            : { input: r, output: r }
          : {
              input: { serialize: (o) => o, deserialize: (o) => o },
              output: { serialize: (o) => o, deserialize: (o) => o },
            };
      })();
      (this.runtime = {
        transformer: { serialize: (r) => n.input.serialize(r), deserialize: (r) => n.output.deserialize(r) },
        combinedTransformer: n,
      }),
        (this.links = t.links.map((r) => r(this.runtime)));
    }
  }
  const Tw = { query: 'query', mutate: 'mutation', subscribe: 'subscription' },
    Ow = (e) => Tw[e];
  function Ew(e) {
    return dw((t) =>
      e.hasOwnProperty(t)
        ? e[t]
        : t === '__untypedClient'
        ? e
        : fw(({ path: n, args: r }) => {
            const o = [t, ...n],
              i = Ow(o.pop()),
              a = o.join('.');
            return e[i](a, ...r);
          }),
    );
  }
  function Pw(e) {
    const t = new Sw(e);
    return Ew(t);
  }
  const kw = '/whistle.mockya',
    En = Pw({ links: [$w({ url: `${kw}/trpc` })] });
  function Qn(e) {
    console.error(e), Bl.error(e.message.trim());
  }
  function $a(e) {
    return () => {
      const t = e(),
        n = Ty(t);
      return { ...t, ...n };
    };
  }
  const Vl = $a(
      ya('collections', {
        state: () => ({ fetched: !1, collections: [] }),
        actions: {
          async fetchCollections() {
            try {
              (this.collections = await En.getAllCollections.query()), (this.fetched = !0);
            } catch (e) {
              Qn(e);
            }
          },
          checkIdDuplicated(e) {
            return this.collections.some((t) => t.id === e);
          },
          async upsertCollection(e) {
            try {
              await En.upsertCollection.mutate(e), await this.fetchCollections();
            } catch (t) {
              Qn(t);
            }
          },
          async deleteCollection(e) {
            try {
              await En.deleteCollection.mutate(e), await this.fetchCollections();
            } catch (t) {
              Qn(t);
            }
          },
        },
      }),
    ),
    br = $a(
      ya('detail', {
        state: () => ({ collectionId: '', collectionName: '', rules: [] }),
        actions: {
          async fetchDetail() {
            try {
              const { name: e, rules: t } = await En.getCollection.query(this.collectionId);
              (this.collectionName = e), (this.rules = t);
            } catch (e) {
              Qn(e);
            }
          },
        },
      }),
    ),
    Fs = $a(
      ya('rule-list', {
        state: () => ({ selectedRuleId: 0 }),
        getters: {
          collectionId() {
            const { collectionId: e } = br();
            return e.value;
          },
          rules() {
            const { rules: e } = br();
            return e.value;
          },
        },
        actions: {
          async createRule(e) {
            const { fetchDetail: t } = br();
            try {
              await En.createRule.mutate({ collectionId: this.collectionId, name: e }), await t();
            } catch (n) {
              Qn(n);
            }
          },
          async updateRule(e) {
            const { fetchDetail: t } = br();
            try {
              await En.updateRule.mutate(e), await t();
            } catch (n) {
              Qn(n);
            }
          },
          async deleteRule(e) {
            const { fetchDetail: t } = br();
            try {
              await En.deleteRule.mutate(e), await t();
            } catch (n) {
              Qn(n);
            }
          },
        },
      }),
    );
  var Mw = function () {
      var e = document.getSelection();
      if (!e.rangeCount) return function () {};
      for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
      switch (t.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
          t.blur();
          break;
        default:
          t = null;
          break;
      }
      return (
        e.removeAllRanges(),
        function () {
          e.type === 'Caret' && e.removeAllRanges(),
            e.rangeCount ||
              n.forEach(function (o) {
                e.addRange(o);
              }),
            t && t.focus();
        }
      );
    },
    Aw = Mw,
    Iu = { 'text/plain': 'Text', 'text/html': 'Url', 'default': 'Text' },
    Iw = 'Copy to clipboard: #{key}, Enter';
  function Rw(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
    return e.replace(/#{\s*key\s*}/g, t);
  }
  function Lw(e, t) {
    var n,
      r,
      o,
      i,
      a,
      s,
      l = !1;
    t || (t = {}), (n = t.debug || !1);
    try {
      (o = Aw()),
        (i = document.createRange()),
        (a = document.getSelection()),
        (s = document.createElement('span')),
        (s.textContent = e),
        (s.ariaHidden = 'true'),
        (s.style.all = 'unset'),
        (s.style.position = 'fixed'),
        (s.style.top = 0),
        (s.style.clip = 'rect(0, 0, 0, 0)'),
        (s.style.whiteSpace = 'pre'),
        (s.style.webkitUserSelect = 'text'),
        (s.style.MozUserSelect = 'text'),
        (s.style.msUserSelect = 'text'),
        (s.style.userSelect = 'text'),
        s.addEventListener('copy', function (u) {
          if ((u.stopPropagation(), t.format))
            if ((u.preventDefault(), typeof u.clipboardData > 'u')) {
              n && console.warn('unable to use e.clipboardData'),
                n && console.warn('trying IE specific stuff'),
                window.clipboardData.clearData();
              var f = Iu[t.format] || Iu.default;
              window.clipboardData.setData(f, e);
            } else u.clipboardData.clearData(), u.clipboardData.setData(t.format, e);
          t.onCopy && (u.preventDefault(), t.onCopy(u.clipboardData));
        }),
        document.body.appendChild(s),
        i.selectNodeContents(s),
        a.addRange(i);
      var c = document.execCommand('copy');
      if (!c) throw new Error('copy command was unsuccessful');
      l = !0;
    } catch (u) {
      n && console.error('unable to copy using execCommand: ', u), n && console.warn('trying IE specific stuff');
      try {
        window.clipboardData.setData(t.format || 'text', e), t.onCopy && t.onCopy(window.clipboardData), (l = !0);
      } catch (f) {
        n && console.error('unable to copy using clipboardData: ', f),
          n && console.error('falling back to prompt'),
          (r = Rw('message' in t ? t.message : Iw)),
          window.prompt(r, e);
      }
    } finally {
      a && (typeof a.removeRange == 'function' ? a.removeRange(i) : a.removeAllRanges()),
        s && document.body.removeChild(s),
        o();
    }
    return l;
  }
  var Dw = Lw;
  const Nw = ml(Dw),
    jw = { class: 'collection-card transition-hover' },
    Hw = { class: 'flex justify-between' },
    Bw = ['onClick'],
    zw = { class: 'id-icon-container transition-hover flex-center bg-base-300 h-full px-1 rounded-l' },
    Fw = { class: 'mx-2 truncate max-w-50 text-sm' },
    Ww = { class: 'operation-list flex-center gap-1 transition-hover opacity-0' },
    Vw = { key: 0, class: 'flex-1 py-2 font-semibold text-lg truncate' },
    Kw = { class: 'text-xs flex w-fit items-center text-neural' },
    Uw = ce({
      __name: 'CollectionCard',
      props: { collection: {} },
      setup(e) {
        const t = e,
          { deleteCollection: n, upsertCollection: r } = Vl(),
          o = P(() => Hd(t.collection.updatedAt).fromNow()),
          {
            confirmed: i,
            trigger: a,
            cancel: s,
          } = gh(() => {
            n(t.collection.id);
          }),
          l = te(!1),
          c = te(t.collection.name),
          u = te(null);
        Fl(l, () => {
          (c.value = t.collection.name),
            tt(() => {
              var p, h;
              (p = u.value) == null || p.focus(), (h = u.value) == null || h.select();
            });
        });
        async function f() {
          const p = c.value.trim();
          p && p !== t.collection.name && (await r({ id: t.collection.id, name: p })), (l.value = !1);
        }
        function d() {
          Nw(t.collection.id), Bl.success(`ID "${t.collection.id}" Copied!`);
        }
        return (p, h) => (
          he(),
          Ee('div', jw, [
            Se('div', Hw, [
              v(
                J(_a),
                { class: 'id-tooltip w-fit', content: 'Copy ID', position: 'right' },
                {
                  default: $e(() => [
                    Se(
                      'div',
                      { class: 'id-marker transition-hover', onClick: Ct(d, ['stop']) },
                      [
                        Se('div', zw, [v(J(d1), { class: 'id-icon transition-hover hover:text-base-100' })]),
                        Se('div', Fw, Kt(p.collection.id), 1),
                      ],
                      8,
                      Bw,
                    ),
                  ]),
                  _: 1,
                },
              ),
              Se('div', Ww, [
                v(
                  J(Xn),
                  { onClick: h[0] || (h[0] = Ct((m) => (l.value = !0), ['stop'])) },
                  { default: $e(() => [v(J(ph))]), _: 1 },
                ),
                v(
                  J(Xn),
                  {
                    class: Ye(['delete-btn', { '!bg-error text-base-100': J(i) }]),
                    onClick: Ct(J(a), ['stop']),
                    onMouseleave: J(s),
                  },
                  { default: $e(() => [v(J(dh))]), _: 1 },
                  8,
                  ['class', 'onClick', 'onMouseleave'],
                ),
              ]),
            ]),
            l.value
              ? (he(),
                Ee('div', { key: 1, class: 'flex-1 py-2', onClick: h[2] || (h[2] = Ct(() => {}, ['stop'])) }, [
                  v(
                    J(Hl),
                    {
                      'ref_key': 'editInput',
                      'ref': u,
                      'modelValue': c.value,
                      'onUpdate:modelValue': h[1] || (h[1] = (m) => (c.value = m)),
                      'bordered': '',
                      'size': 'sm',
                      'onBlur': f,
                      'onKeydown': Lo(f, ['enter']),
                    },
                    null,
                    8,
                    ['modelValue', 'onKeydown'],
                  ),
                ]))
              : (he(), Ee('div', Vw, Kt(p.collection.name), 1)),
            Se('div', Kw, [v(J(g1), { class: 'mr-2' }), gt(' ' + Kt(o.value), 1)]),
          ])
        );
      },
    }),
    Yw = jt(Uw, [['__scopeId', 'data-v-5dc986e5']]),
    Xw = { class: 'add-collection-card' },
    Gw = ce({
      __name: 'CreateCollectionCard',
      setup(e) {
        return (t, n) => (he(), Ee('div', Xw, [v(J(h1), { class: 'mr-2', size: 20 }), gt(' New Collection ')]));
      },
    }),
    qw = jt(Gw, [['__scopeId', 'data-v-9de0f07b']]),
    Zw = ce({
      __name: 'CreateCollectionModal',
      props: { modelValue: { type: Boolean } },
      emits: ['update:modelValue'],
      setup(e, { emit: t }) {
        const n = e,
          r = P({
            get() {
              return n.modelValue;
            },
            set(p) {
              t('update:modelValue', p);
            },
          }),
          o = In({ id: '', name: '' }),
          { checkIdDuplicated: i, upsertCollection: a } = Vl(),
          s = te(null),
          l = te(null);
        Fl(r, () => {
          var p, h, m;
          (o.id = ''),
            (o.name = ''),
            (p = s.value) == null || p.clearValidation(),
            (h = l.value) == null || h.clearValidation(),
            (m = s.value) == null || m.focus();
        });
        function c(p) {
          return (
            (p = p.trim()),
            p === ''
              ? 'ID cannot be empty'
              : /\s+/.test(p)
              ? 'ID cannot contain space'
              : i(p)
              ? 'ID already exists'
              : ''
          );
        }
        function u(p) {
          return (p = p.trim()), p === '' ? 'Name cannot be empty' : '';
        }
        async function f() {
          var m, y;
          const p = (m = s.value) == null ? void 0 : m.validate(),
            h = (y = l.value) == null ? void 0 : y.validate();
          p && h && (await a(o), d());
        }
        function d() {
          t('update:modelValue', !1);
        }
        return (p, h) => (
          he(),
          nt(
            J(Yb),
            {
              'modelValue': r.value,
              'onUpdate:modelValue': h[3] || (h[3] = (m) => (r.value = m)),
              'title': 'Create Collection',
            },
            {
              default: $e(() => [
                v(
                  J(ku),
                  {
                    'ref_key': 'idInput',
                    'ref': s,
                    'modelValue': o.id,
                    'onUpdate:modelValue': h[0] || (h[0] = (m) => (o.id = m)),
                    'title': 'ID',
                    'tip': 'unique string without space',
                    'validate-fn': c,
                    'onKeydown':
                      h[1] ||
                      (h[1] = Lo(
                        Ct(
                          (m) => {
                            var y;
                            return (y = l.value) == null ? void 0 : y.focus();
                          },
                          ['prevent'],
                        ),
                        ['enter'],
                      )),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                v(
                  J(ku),
                  {
                    'ref_key': 'nameInput',
                    'ref': l,
                    'modelValue': o.name,
                    'onUpdate:modelValue': h[2] || (h[2] = (m) => (o.name = m)),
                    'title': 'Name',
                    'validate-fn': u,
                    'onKeydown': Lo(Ct(f, ['prevent']), ['enter']),
                  },
                  null,
                  8,
                  ['modelValue', 'onKeydown'],
                ),
              ]),
              action: $e(() => [
                v(J(An), { type: 'ghost', onClick: d }, { default: $e(() => [gt('Cancel')]), _: 1 }),
                v(J(An), { type: 'primary', onClick: f }, { default: $e(() => [gt('Create')]), _: 1 }),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          )
        );
      },
    }),
    Qw = { class: 'flex-1 truncate mr-1' },
    Ru = ce({
      __name: 'RuleItem',
      props: { rule: {}, initEdit: { type: Boolean, default: !1 }, selected: { type: Boolean, default: !1 } },
      emits: ['edit-confirm', 'edit-cancel', 'delete'],
      setup(e, { expose: t, emit: n }) {
        const r = e;
        t({ focusEdit: h });
        const o = te(r.initEdit),
          i = te(r.rule.name),
          a = te(),
          s = te(!1),
          {
            confirmed: l,
            trigger: c,
            cancel: u,
          } = gh(() => {
            n('delete');
          });
        function f() {
          console.log('try delete', l.value), c();
        }
        Fl(o, () => {
          (i.value = r.rule.name),
            tt(() => {
              h();
            });
        });
        function d() {
          n('edit-confirm', i.value, m);
        }
        function p() {
          m(), n('edit-cancel');
        }
        function h() {
          var b, _;
          (b = a.value) == null || b.focus(), (_ = a.value) == null || _.select();
        }
        function m() {
          o.value = !1;
        }
        function y(b) {
          o.value && (b.stopPropagation(), h());
        }
        return (b, _) => (
          he(),
          Ee(
            'div',
            {
              class: Ye([
                'flex items-center text-xs leading-6 cursor-pointer py-1 px-2 rounded',
                { 'hover:bg-base-200': !o.value && !b.selected, 'bg-primary-content/40': b.selected },
              ]),
              onMouseenter: _[2] || (_[2] = (M) => (s.value = !0)),
              onMouseleave: _[3] || (_[3] = (M) => (s.value = !1)),
            },
            [
              v(J(s1), { class: Ye(o.value ? 'mr-1' : 'mr-2'), size: 14, onClick: y }, null, 8, ['class']),
              o.value
                ? (he(),
                  Ee(
                    Ie,
                    { key: 1 },
                    [
                      v(
                        J(Hl),
                        {
                          'ref_key': 'inputRef',
                          'ref': a,
                          'modelValue': i.value,
                          'onUpdate:modelValue': _[1] || (_[1] = (M) => (i.value = M)),
                          'class': 'flex-1 text-xs px-1 rounded',
                          'size': 'xs',
                          'bordered': '',
                          'onKeydown': [Lo(d, ['enter']), Lo(p, ['esc'])],
                        },
                        null,
                        8,
                        ['modelValue', 'onKeydown'],
                      ),
                      v(
                        J(Xn),
                        { class: 'ml-1', onClick: Ct(d, ['stop']) },
                        { default: $e(() => [v(J(n1))]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      v(
                        J(Xn),
                        { class: 'ml-1', onClick: Ct(p, ['stop']) },
                        { default: $e(() => [v(J(o1))]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ],
                    64,
                  ))
                : (he(),
                  Ee(
                    Ie,
                    { key: 0 },
                    [
                      Se('div', Qw, Kt(b.rule.name), 1),
                      s.value
                        ? (he(),
                          Ee(
                            Ie,
                            { key: 0 },
                            [
                              v(
                                J(Xn),
                                { class: 'mr-1 hover:!bg-transparent', transparent: '' },
                                {
                                  default: $e(() => [
                                    v(J(ph), { onClick: _[0] || (_[0] = Ct((M) => (o.value = !0), ['stop'])) }),
                                  ]),
                                  _: 1,
                                },
                              ),
                              v(
                                J(Xn),
                                {
                                  class: Ye({ 'hover:!bg-transparent': !J(l), '!bg-error text-base-100': J(l) }),
                                  onClick: Ct(f, ['stop']),
                                  onMouseleave: J(u),
                                },
                                { default: $e(() => [v(J(dh))]), _: 1 },
                                8,
                                ['class', 'onClick', 'onMouseleave'],
                              ),
                            ],
                            64,
                          ))
                        : Yn('', !0),
                    ],
                    64,
                  )),
            ],
            34,
          )
        );
      },
    }),
    Jw = { class: 'py-2 h-screen w-10 bg-base-200 flex flex-col items-center justify-between' },
    e_ = ce({
      __name: 'SideBar',
      setup(e) {
        const t = fh(),
          o = [
            [
              {
                icon: u1,
                tip: 'Home',
                handler: () => {
                  i('/');
                },
              },
              {
                icon: m1,
                tip: 'Search',
                handler: () => {
                  Bl.warning('Not Implemented 嘿嘿'), En.getAllCollections.query().then((a) => console.log(a));
                },
              },
            ],
            [
              {
                icon: p1,
                tip: 'Traffic',
                handler: () => {
                  i('/traffic');
                },
              },
              {
                icon: e1,
                tip: 'Statistics',
                handler: () => {
                  i('/statistics');
                },
              },
              {
                icon: v1,
                tip: 'Settings',
                handler: () => {
                  i('/settings');
                },
              },
            ],
          ];
        function i(a) {
          t.push(a);
        }
        return (a, s) => (
          he(),
          Ee('div', Jw, [
            (he(),
            Ee(
              Ie,
              null,
              Ni(o, (l, c) =>
                Se('div', { key: c, class: 'flex flex-col items-center gap-2' }, [
                  (he(!0),
                  Ee(
                    Ie,
                    null,
                    Ni(
                      l,
                      (u) => (
                        he(),
                        nt(
                          J(_a),
                          { key: u.tip, content: u.tip, position: 'right' },
                          {
                            default: $e(() => [
                              v(
                                J(An),
                                {
                                  class: 'sidebar-btn rounded w-8 h-8 hover:shadow',
                                  shape: 'square',
                                  onClick: u.handler,
                                },
                                { default: $e(() => [(he(), nt(Pp(u.icon), { size: 20 }))]), _: 2 },
                                1032,
                                ['onClick'],
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['content'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ),
              64,
            )),
          ])
        );
      },
    }),
    t_ = jt(e_, [['__scopeId', 'data-v-7e22ba38']]),
    n_ = { class: 'h-screen w-screen flex' },
    r_ = { class: 'h-screen flex-1 relative min-w-0 py-2 pr-2 bg-base-200' },
    o_ = ce({
      __name: 'App',
      setup(e) {
        return (t, n) => (he(), Ee('div', n_, [v(J(t_), { class: 'flex-none' }), Se('div', r_, [v(J(uh))])]));
      },
    });
  var Sh = ((e) => ((e.DetailResizeLayout = 'mockya-detail-resize-layout'), e))(Sh || {});
  const i_ = $a(
    ya('rule-config', {
      state: () => ({}),
      getters: {
        selectedRuleid() {
          const { selectedRuleId: e } = Fs();
          return e.value;
        },
        selectedRule() {
          const { selectedRuleId: e, rules: t } = Fs();
          return console.log('ref', t.value, e), t.value.find(({ id: n }) => n === e.value);
        },
      },
    }),
  );
  function jo(e) {
    '@babel/helpers - typeof';
    return (
      (jo =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      jo(e)
    );
  }
  function a_(e, t) {
    if (jo(e) !== 'object' || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || 'default');
      if (jo(r) !== 'object') return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
  }
  function s_(e) {
    var t = a_(e, 'string');
    return jo(t) === 'symbol' ? t : String(t);
  }
  function l_(e, t, n) {
    return (
      (t = s_(t)),
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
      e
    );
  }
  function Lu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function de(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Lu(Object(n), !0).forEach(function (r) {
            l_(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Lu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function E() {
    return (
      (E = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      E.apply(this, arguments)
    );
  }
  const c_ = (e) => typeof e == 'function',
    u_ = Array.isArray,
    f_ = (e) => typeof e == 'string',
    d_ = (e) => e !== null && typeof e == 'object',
    p_ = /^on[^a-z]/,
    h_ = (e) => p_.test(e),
    Th = (e) => {
      const t = Object.create(null);
      return (n) => t[n] || (t[n] = e(n));
    },
    m_ = /-(\w)/g,
    Sa = Th((e) => e.replace(m_, (t, n) => (n ? n.toUpperCase() : ''))),
    v_ = /\B([A-Z])/g,
    g_ = Th((e) => e.replace(v_, '-$1').toLowerCase()),
    y_ = Object.prototype.hasOwnProperty,
    Du = (e, t) => y_.call(e, t);
  function b_(e, t, n, r) {
    const o = e[n];
    if (o != null) {
      const i = Du(o, 'default');
      if (i && r === void 0) {
        const a = o.default;
        r = o.type !== Function && c_(a) ? a() : a;
      }
      o.type === Boolean && (!Du(t, n) && !i ? (r = !1) : r === '' && (r = !0));
    }
    return r;
  }
  function to(e) {
    return typeof e == 'number' ? `${e}px` : e;
  }
  function je() {
    const e = [];
    for (let t = 0; t < arguments.length; t++) {
      const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (n) {
        if (f_(n)) e.push(n);
        else if (u_(n))
          for (let r = 0; r < n.length; r++) {
            const o = je(n[r]);
            o && e.push(o);
          }
        else if (d_(n)) for (const r in n) n[r] && e.push(r);
      }
    }
    return e.join(' ');
  }
  var Oh = (function () {
      if (typeof Map < 'u') return Map;
      function e(t, n) {
        var r = -1;
        return (
          t.some(function (o, i) {
            return o[0] === n ? ((r = i), !0) : !1;
          }),
          r
        );
      }
      return (function () {
        function t() {
          this.__entries__ = [];
        }
        return (
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.get = function (n) {
            var r = e(this.__entries__, n),
              o = this.__entries__[r];
            return o && o[1];
          }),
          (t.prototype.set = function (n, r) {
            var o = e(this.__entries__, n);
            ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
          }),
          (t.prototype.delete = function (n) {
            var r = this.__entries__,
              o = e(r, n);
            ~o && r.splice(o, 1);
          }),
          (t.prototype.has = function (n) {
            return !!~e(this.__entries__, n);
          }),
          (t.prototype.clear = function () {
            this.__entries__.splice(0);
          }),
          (t.prototype.forEach = function (n, r) {
            r === void 0 && (r = null);
            for (var o = 0, i = this.__entries__; o < i.length; o++) {
              var a = i[o];
              n.call(r, a[1], a[0]);
            }
          }),
          t
        );
      })();
    })(),
    Ws = typeof window < 'u' && typeof document < 'u' && window.document === document,
    zi = (function () {
      return typeof global < 'u' && global.Math === Math
        ? global
        : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
        ? window
        : Function('return this')();
    })(),
    w_ = (function () {
      return typeof requestAnimationFrame == 'function'
        ? requestAnimationFrame.bind(zi)
        : function (e) {
            return setTimeout(function () {
              return e(Date.now());
            }, 1e3 / 60);
          };
    })(),
    __ = 2;
  function C_(e, t) {
    var n = !1,
      r = !1,
      o = 0;
    function i() {
      n && ((n = !1), e()), r && s();
    }
    function a() {
      w_(i);
    }
    function s() {
      var l = Date.now();
      if (n) {
        if (l - o < __) return;
        r = !0;
      } else (n = !0), (r = !1), setTimeout(a, t);
      o = l;
    }
    return s;
  }
  var x_ = 20,
    $_ = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    S_ = typeof MutationObserver < 'u',
    T_ = (function () {
      function e() {
        (this.connected_ = !1),
          (this.mutationEventsAdded_ = !1),
          (this.mutationsObserver_ = null),
          (this.observers_ = []),
          (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
          (this.refresh = C_(this.refresh.bind(this), x_));
      }
      return (
        (e.prototype.addObserver = function (t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
        }),
        (e.prototype.removeObserver = function (t) {
          var n = this.observers_,
            r = n.indexOf(t);
          ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
        }),
        (e.prototype.refresh = function () {
          var t = this.updateObservers_();
          t && this.refresh();
        }),
        (e.prototype.updateObservers_ = function () {
          var t = this.observers_.filter(function (n) {
            return n.gatherActive(), n.hasActive();
          });
          return (
            t.forEach(function (n) {
              return n.broadcastActive();
            }),
            t.length > 0
          );
        }),
        (e.prototype.connect_ = function () {
          !Ws ||
            this.connected_ ||
            (document.addEventListener('transitionend', this.onTransitionEnd_),
            window.addEventListener('resize', this.refresh),
            S_
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener('DOMSubtreeModified', this.refresh), (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (e.prototype.disconnect_ = function () {
          !Ws ||
            !this.connected_ ||
            (document.removeEventListener('transitionend', this.onTransitionEnd_),
            window.removeEventListener('resize', this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (e.prototype.onTransitionEnd_ = function (t) {
          var n = t.propertyName,
            r = n === void 0 ? '' : n,
            o = $_.some(function (i) {
              return !!~r.indexOf(i);
            });
          o && this.refresh();
        }),
        (e.getInstance = function () {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }),
        (e.instance_ = null),
        e
      );
    })(),
    Eh = function (e, t) {
      for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var o = r[n];
        Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
      }
      return e;
    },
    Lr = function (e) {
      var t = e && e.ownerDocument && e.ownerDocument.defaultView;
      return t || zi;
    },
    Ph = Ta(0, 0, 0, 0);
  function Fi(e) {
    return parseFloat(e) || 0;
  }
  function Nu(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (r, o) {
      var i = e['border-' + o + '-width'];
      return r + Fi(i);
    }, 0);
  }
  function O_(e) {
    for (var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t; r < o.length; r++) {
      var i = o[r],
        a = e['padding-' + i];
      n[i] = Fi(a);
    }
    return n;
  }
  function E_(e) {
    var t = e.getBBox();
    return Ta(0, 0, t.width, t.height);
  }
  function P_(e) {
    var t = e.clientWidth,
      n = e.clientHeight;
    if (!t && !n) return Ph;
    var r = Lr(e).getComputedStyle(e),
      o = O_(r),
      i = o.left + o.right,
      a = o.top + o.bottom,
      s = Fi(r.width),
      l = Fi(r.height);
    if (
      (r.boxSizing === 'border-box' &&
        (Math.round(s + i) !== t && (s -= Nu(r, 'left', 'right') + i),
        Math.round(l + a) !== n && (l -= Nu(r, 'top', 'bottom') + a)),
      !M_(e))
    ) {
      var c = Math.round(s + i) - t,
        u = Math.round(l + a) - n;
      Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
    }
    return Ta(o.left, o.top, s, l);
  }
  var k_ = (function () {
    return typeof SVGGraphicsElement < 'u'
      ? function (e) {
          return e instanceof Lr(e).SVGGraphicsElement;
        }
      : function (e) {
          return e instanceof Lr(e).SVGElement && typeof e.getBBox == 'function';
        };
  })();
  function M_(e) {
    return e === Lr(e).document.documentElement;
  }
  function A_(e) {
    return Ws ? (k_(e) ? E_(e) : P_(e)) : Ph;
  }
  function I_(e) {
    var t = e.x,
      n = e.y,
      r = e.width,
      o = e.height,
      i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
      a = Object.create(i.prototype);
    return Eh(a, { x: t, y: n, width: r, height: o, top: n, right: t + r, bottom: o + n, left: t }), a;
  }
  function Ta(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
  }
  var R_ = (function () {
      function e(t) {
        (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = Ta(0, 0, 0, 0)), (this.target = t);
      }
      return (
        (e.prototype.isActive = function () {
          var t = A_(this.target);
          return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }),
        (e.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
        }),
        e
      );
    })(),
    L_ = (function () {
      function e(t, n) {
        var r = I_(n);
        Eh(this, { target: t, contentRect: r });
      }
      return e;
    })(),
    D_ = (function () {
      function e(t, n, r) {
        if (((this.activeObservations_ = []), (this.observations_ = new Oh()), typeof t != 'function'))
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
      }
      return (
        (e.prototype.observe = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof Lr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new R_(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }),
        (e.prototype.unobserve = function (t) {
          if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
          if (!(typeof Element > 'u' || !(Element instanceof Object))) {
            if (!(t instanceof Lr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
          }
        }),
        (e.prototype.disconnect = function () {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }),
        (e.prototype.gatherActive = function () {
          var t = this;
          this.clearActive(),
            this.observations_.forEach(function (n) {
              n.isActive() && t.activeObservations_.push(n);
            });
        }),
        (e.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              n = this.activeObservations_.map(function (r) {
                return new L_(r.target, r.broadcastRect());
              });
            this.callback_.call(t, n, t), this.clearActive();
          }
        }),
        (e.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }),
        (e.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }),
        e
      );
    })(),
    kh = typeof WeakMap < 'u' ? new WeakMap() : new Oh(),
    Mh = (function () {
      function e(t) {
        if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        var n = T_.getInstance(),
          r = new D_(t, n, this);
        kh.set(this, r);
      }
      return e;
    })();
  ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    Mh.prototype[e] = function () {
      var t;
      return (t = kh.get(this))[e].apply(t, arguments);
    };
  });
  var Ah = (function () {
    return typeof zi.ResizeObserver < 'u' ? zi.ResizeObserver : Mh;
  })();
  const N_ = (e) => e != null && e !== '',
    Vs = N_,
    j_ = (e, t) => {
      const n = E({}, e);
      return (
        Object.keys(t).forEach((r) => {
          const o = n[r];
          if (o) o.type || o.default ? (o.default = t[r]) : o.def ? o.def(t[r]) : (n[r] = { type: o, default: t[r] });
          else throw new Error(`not have ${r} prop`);
        }),
        n
      );
    },
    Kl = j_,
    H_ = (e) => {
      const t = Object.keys(e),
        n = {},
        r = {},
        o = {};
      for (let i = 0, a = t.length; i < a; i++) {
        const s = t[i];
        h_(s) ? ((n[s[2].toLowerCase() + s.slice(3)] = e[s]), (r[s] = e[s])) : (o[s] = e[s]);
      }
      return { onEvents: r, events: n, extraAttrs: o };
    },
    B_ = function () {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const n = {},
        r = /;(?![^(]*\))/g,
        o = /:(.+)/;
      return typeof e == 'object'
        ? e
        : (e.split(r).forEach(function (i) {
            if (i) {
              const a = i.split(o);
              if (a.length > 1) {
                const s = t ? Sa(a[0].trim()) : a[0].trim();
                n[s] = a[1].trim();
              }
            }
          }),
          n);
    },
    z_ = (e, t) => e[t] !== void 0,
    Ih = Symbol('skipFlatten'),
    Lt = function () {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      const n = Array.isArray(e) ? e : [e],
        r = [];
      return (
        n.forEach((o) => {
          Array.isArray(o)
            ? r.push(...Lt(o, t))
            : o && o.type === Ie
            ? o.key === Ih
              ? r.push(o)
              : r.push(...Lt(o.children, t))
            : o && an(o)
            ? t && !Rh(o)
              ? r.push(o)
              : t || r.push(o)
            : Vs(o) && r.push(o);
        }),
        r
      );
    },
    F_ = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'default',
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (an(e))
        return e.type === Ie
          ? t === 'default'
            ? Lt(e.children)
            : []
          : e.children && e.children[t]
          ? Lt(e.children[t](n))
          : [];
      {
        const r = e.$slots[t] && e.$slots[t](n);
        return Lt(r);
      }
    },
    co = (e) => {
      var t;
      let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || (e && (e.$el || e));
      for (; n && !n.tagName; ) n = n.nextSibling;
      return n;
    },
    W_ = (e) => {
      const t = {};
      if (e.$ && e.$.vnode) {
        const n = e.$.vnode.props || {};
        Object.keys(e.$props).forEach((r) => {
          const o = e.$props[r],
            i = g_(r);
          (o !== void 0 || i in n) && (t[r] = o);
        });
      } else if (an(e) && typeof e.type == 'object') {
        const n = e.props || {},
          r = {};
        Object.keys(n).forEach((i) => {
          r[Sa(i)] = n[i];
        });
        const o = e.type.props || {};
        Object.keys(o).forEach((i) => {
          const a = b_(o, r, i, r[i]);
          (a !== void 0 || i in r) && (t[i] = a);
        });
      }
      return t;
    },
    V_ = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'default',
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e,
        r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0,
        o;
      if (e.$) {
        const i = e[t];
        if (i !== void 0) return typeof i == 'function' && r ? i(n) : i;
        (o = e.$slots[t]), (o = r && o ? o(n) : o);
      } else if (an(e)) {
        const i = e.props && e.props[t];
        if (i !== void 0 && e.props !== null) return typeof i == 'function' && r ? i(n) : i;
        e.type === Ie
          ? (o = e.children)
          : e.children && e.children[t] && ((o = e.children[t]), (o = r && o ? o(n) : o));
      }
      return Array.isArray(o) && ((o = Lt(o)), (o = o.length === 1 ? o[0] : o), (o = o.length === 0 ? void 0 : o)), o;
    };
  function ju() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
      n = {};
    return e.$ ? (n = E(E({}, n), e.$attrs)) : (n = E(E({}, n), e.props)), H_(n)[t ? 'onEvents' : 'events'];
  }
  function K_(e, t) {
    let r = ((an(e) ? e.props : e.$attrs) || {}).style || {};
    if (typeof r == 'string') r = B_(r, t);
    else if (t && r) {
      const o = {};
      return Object.keys(r).forEach((i) => (o[Sa(i)] = r[i])), o;
    }
    return r;
  }
  function U_(e) {
    return e.length === 1 && e[0].type === Ie;
  }
  function Rh(e) {
    return (
      e && (e.type === vt || (e.type === Ie && e.children.length === 0) || (e.type === Go && e.children.trim() === ''))
    );
  }
  function qo() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const t = [];
    return (
      e.forEach((n) => {
        Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Ie ? t.push(...qo(n.children)) : t.push(n);
      }),
      t.filter((n) => !Rh(n))
    );
  }
  function Oa(e) {
    return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != 'symbol';
  }
  function Ul(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'default';
    var r, o;
    return (r = t[n]) !== null && r !== void 0 ? r : (o = e[n]) === null || o === void 0 ? void 0 : o.call(e);
  }
  const Wi = ce({
    compatConfig: { MODE: 3 },
    name: 'ResizeObserver',
    props: { disabled: Boolean, onResize: Function },
    emits: ['resize'],
    setup(e, t) {
      let { slots: n } = t;
      const r = In({ width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 });
      let o = null,
        i = null;
      const a = () => {
          i && (i.disconnect(), (i = null));
        },
        s = (u) => {
          const { onResize: f } = e,
            d = u[0].target,
            { width: p, height: h } = d.getBoundingClientRect(),
            { offsetWidth: m, offsetHeight: y } = d,
            b = Math.floor(p),
            _ = Math.floor(h);
          if (r.width !== b || r.height !== _ || r.offsetWidth !== m || r.offsetHeight !== y) {
            const M = { width: b, height: _, offsetWidth: m, offsetHeight: y };
            E(r, M),
              f &&
                Promise.resolve().then(() => {
                  f(E(E({}, M), { offsetWidth: m, offsetHeight: y }), d);
                });
          }
        },
        l = fn(),
        c = () => {
          const { disabled: u } = e;
          if (u) {
            a();
            return;
          }
          const f = co(l);
          f !== o && (a(), (o = f)), !i && f && ((i = new Ah(s)), i.observe(f));
        };
      return (
        ut(() => {
          c();
        }),
        Xo(() => {
          c();
        }),
        Kr(() => {
          a();
        }),
        _e(
          () => e.disabled,
          () => {
            c();
          },
          { flush: 'post' },
        ),
        () => {
          var u;
          return (u = n.default) === null || u === void 0 ? void 0 : u.call(n)[0];
        }
      );
    },
  });
  let Lh = (e) => setTimeout(e, 16),
    Dh = (e) => clearTimeout(e);
  typeof window < 'u' &&
    'requestAnimationFrame' in window &&
    ((Lh = (e) => window.requestAnimationFrame(e)), (Dh = (e) => window.cancelAnimationFrame(e)));
  let Hu = 0;
  const Yl = new Map();
  function Nh(e) {
    Yl.delete(e);
  }
  function Xe(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    Hu += 1;
    const n = Hu;
    function r(o) {
      if (o === 0) Nh(n), e();
      else {
        const i = Lh(() => {
          r(o - 1);
        });
        Yl.set(n, i);
      }
    }
    return r(t), n;
  }
  Xe.cancel = (e) => {
    const t = Yl.get(e);
    return Nh(t), Dh(t);
  };
  const Y_ = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return t;
    },
    Xl = (e) => {
      const t = e;
      return (
        (t.install = function (n) {
          n.component(t.displayName || t.name, e);
        }),
        e
      );
    };
  function lt(e) {
    return { type: Object, default: e };
  }
  function Co(e) {
    return { type: Boolean, default: e };
  }
  function Pt(e) {
    return { type: Function, default: e };
  }
  function Ks(e, t) {
    const n = { validator: () => !0, default: e };
    return n;
  }
  function Us(e) {
    return { type: Array, default: e };
  }
  function _r(e) {
    return { type: String, default: e };
  }
  function jh(e, t) {
    return e ? { type: e, default: t } : Ks(t);
  }
  let Hh = !1;
  try {
    const e = Object.defineProperty({}, 'passive', {
      get() {
        Hh = !0;
      },
    });
    window.addEventListener('testPassive', null, e), window.removeEventListener('testPassive', null, e);
  } catch {}
  const Cr = Hh;
  function uo(e, t, n, r) {
    if (e && e.addEventListener) {
      let o = r;
      o === void 0 && Cr && (t === 'touchstart' || t === 'touchmove' || t === 'wheel') && (o = { passive: !1 }),
        e.addEventListener(t, n, o);
    }
    return {
      remove: () => {
        e && e.removeEventListener && e.removeEventListener(t, n);
      },
    };
  }
  const X_ = 'anticon',
    Bh = Symbol('configProvider'),
    zh = {
      getPrefixCls: (e, t) => t || (e ? `ant-${e}` : 'ant'),
      iconPrefixCls: P(() => X_),
      getPopupContainer: P(() => () => document.body),
      direction: P(() => 'ltr'),
    },
    G_ = () => Ae(Bh, zh),
    q_ = Symbol('DisabledContextKey'),
    Z_ = () => Ae(q_, te(void 0)),
    Q_ = {
      items_per_page: '/ page',
      jump_to: 'Go to',
      jump_to_confirm: 'confirm',
      page: '',
      prev_page: 'Previous Page',
      next_page: 'Next Page',
      prev_5: 'Previous 5 Pages',
      next_5: 'Next 5 Pages',
      prev_3: 'Previous 3 Pages',
      next_3: 'Next 3 Pages',
    },
    J_ = {
      locale: 'en_US',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'Ok',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      yearFormat: 'YYYY',
      dateFormat: 'M/D/YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      monthBeforeYear: !0,
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century',
    },
    eC = J_,
    tC = { placeholder: 'Select time', rangePlaceholder: ['Start time', 'End time'] },
    Fh = tC,
    nC = {
      lang: E(
        {
          placeholder: 'Select date',
          yearPlaceholder: 'Select year',
          quarterPlaceholder: 'Select quarter',
          monthPlaceholder: 'Select month',
          weekPlaceholder: 'Select week',
          rangePlaceholder: ['Start date', 'End date'],
          rangeYearPlaceholder: ['Start year', 'End year'],
          rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
          rangeMonthPlaceholder: ['Start month', 'End month'],
          rangeWeekPlaceholder: ['Start week', 'End week'],
        },
        eC,
      ),
      timePickerLocale: E({}, Fh),
    },
    Bu = nC,
    pt = '${label} is not a valid ${type}',
    rC = {
      locale: 'en',
      Pagination: Q_,
      DatePicker: Bu,
      TimePicker: Fh,
      Calendar: Bu,
      global: { placeholder: 'Please select' },
      Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckall: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting',
      },
      Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
      Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
      Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page',
      },
      Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file',
      },
      Empty: { description: 'No data' },
      Icon: { icon: 'icon' },
      Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
      PageHeader: { back: 'Back' },
      Form: {
        optional: '(optional)',
        defaultValidateMessages: {
          default: 'Field validation error for ${label}',
          required: 'Please enter ${label}',
          enum: '${label} must be one of [${enum}]',
          whitespace: '${label} cannot be a blank character',
          date: {
            format: '${label} date format is invalid',
            parse: '${label} cannot be converted to a date',
            invalid: '${label} is an invalid date',
          },
          types: {
            string: pt,
            method: pt,
            array: pt,
            object: pt,
            number: pt,
            date: pt,
            boolean: pt,
            integer: pt,
            float: pt,
            regexp: pt,
            email: pt,
            url: pt,
            hex: pt,
          },
          string: {
            len: '${label} must be ${len} characters',
            min: '${label} must be at least ${min} characters',
            max: '${label} must be up to ${max} characters',
            range: '${label} must be between ${min}-${max} characters',
          },
          number: {
            len: '${label} must be equal to ${len}',
            min: '${label} must be minimum ${min}',
            max: '${label} must be maximum ${max}',
            range: '${label} must be between ${min}-${max}',
          },
          array: {
            len: 'Must be ${len} ${label}',
            min: 'At least ${min} ${label}',
            max: 'At most ${max} ${label}',
            range: 'The amount of ${label} must be between ${min}-${max}',
          },
          pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
        },
      },
      Image: { preview: 'Preview' },
      QRCode: { expired: 'QR code expired', refresh: 'Refresh' },
    },
    zu = rC,
    oC = ce({
      compatConfig: { MODE: 3 },
      name: 'LocaleReceiver',
      props: { componentName: String, defaultLocale: { type: [Object, Function] }, children: { type: Function } },
      setup(e, t) {
        let { slots: n } = t;
        const r = Ae('localeData', {}),
          o = P(() => {
            const { componentName: a = 'global', defaultLocale: s } = e,
              l = s || zu[a || 'global'],
              { antLocale: c } = r,
              u = a && c ? c[a] : {};
            return E(E({}, typeof l == 'function' ? l() : l), u || {});
          }),
          i = P(() => {
            const { antLocale: a } = r,
              s = a && a.locale;
            return a && a.exist && !s ? zu.locale : s;
          });
        return () => {
          const a = e.children || n.default,
            { antLocale: s } = r;
          return a == null ? void 0 : a(o.value, i.value, s);
        };
      },
    });
  function Gl(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
      (n =
        (e.charCodeAt(r) & 255) |
        ((e.charCodeAt(++r) & 255) << 8) |
        ((e.charCodeAt(++r) & 255) << 16) |
        ((e.charCodeAt(++r) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (t =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  const Fu = '%';
  class iC {
    constructor(t) {
      (this.cache = new Map()), (this.instanceId = t);
    }
    get(t) {
      return this.cache.get(Array.isArray(t) ? t.join(Fu) : t) || null;
    }
    update(t, n) {
      const r = Array.isArray(t) ? t.join(Fu) : t,
        o = this.cache.get(r),
        i = n(o);
      i === null ? this.cache.delete(r) : this.cache.set(r, i);
    }
  }
  const aC = iC,
    Wh = 'data-token-hash',
    Jn = 'data-css-hash',
    xr = '__cssinjs_instance__';
  function Vi() {
    const e = Math.random().toString(12).slice(2);
    if (typeof document < 'u' && document.head && document.body) {
      const t = document.body.querySelectorAll(`style[${Jn}]`) || [],
        { firstChild: n } = document.head;
      Array.from(t).forEach((o) => {
        (o[xr] = o[xr] || e), o[xr] === e && document.head.insertBefore(o, n);
      });
      const r = {};
      Array.from(document.querySelectorAll(`style[${Jn}]`)).forEach((o) => {
        var i;
        const a = o.getAttribute(Jn);
        r[a] ? o[xr] === e && ((i = o.parentNode) === null || i === void 0 || i.removeChild(o)) : (r[a] = !0);
      });
    }
    return new aC(e);
  }
  const Vh = Symbol('StyleContextKey'),
    Kh = { cache: Vi(), defaultCache: !0, hashPriority: 'low' },
    Ea = () => Ae(Vh, le(E(E({}, Kh), { cache: Vi() }))),
    sC = (e) => {
      const t = Ea(),
        n = le(E(E({}, Kh), { cache: Vi() }));
      return (
        _e(
          [() => J(e), t],
          () => {
            const r = E({}, t.value),
              o = J(e);
            Object.keys(o).forEach((a) => {
              const s = o[a];
              o[a] !== void 0 && (r[a] = s);
            });
            const { cache: i } = o;
            (r.cache = r.cache || Vi()), (r.defaultCache = !i && t.value.defaultCache), (n.value = r);
          },
          { immediate: !0 },
        ),
        it(Vh, n),
        n
      );
    },
    lC = () => ({
      autoClear: Co(),
      mock: _r(),
      cache: lt(),
      defaultCache: Co(),
      hashPriority: _r(),
      container: jh(),
      ssrInline: Co(),
      transformers: Us(),
      linters: Us(),
    });
  Xl(
    ce({
      name: 'AStyleProvider',
      inheritAttrs: !1,
      props: lC(),
      setup(e, t) {
        let { slots: n } = t;
        return (
          sC(e),
          () => {
            var r;
            return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
          }
        );
      },
    }),
  );
  function Uh(e, t, n, r) {
    const o = Ea(),
      i = le(''),
      a = le();
    $t(() => {
      i.value = [e, ...t.value].join('%');
    });
    const s = (l) => {
      o.value.cache.update(l, (c) => {
        const [u = 0, f] = c || [];
        return u - 1 === 0 ? (r == null || r(f, !1), null) : [u - 1, f];
      });
    };
    return (
      _e(
        i,
        (l, c) => {
          c && s(c),
            o.value.cache.update(l, (u) => {
              const [f = 0, d] = u || [],
                h = d || n();
              return [f + 1, h];
            }),
            (a.value = o.value.cache.get(i.value)[1]);
        },
        { immediate: !0 },
      ),
      St(() => {
        s(i.value);
      }),
      a
    );
  }
  function ln() {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  }
  function Vn(e, t) {
    return e && e.contains ? e.contains(t) : !1;
  }
  const Wu = 'data-vc-order',
    cC = 'vc-util-key',
    Ys = new Map();
  function Yh() {
    let { mark: e } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return e ? (e.startsWith('data-') ? e : `data-${e}`) : cC;
  }
  function Pa(e) {
    return e.attachTo ? e.attachTo : document.querySelector('head') || document.body;
  }
  function uC(e) {
    return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
  }
  function Xh(e) {
    return Array.from((Ys.get(e) || e).children).filter((t) => t.tagName === 'STYLE');
  }
  function Gh(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ln()) return null;
    const { csp: n, prepend: r } = t,
      o = document.createElement('style');
    o.setAttribute(Wu, uC(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), (o.innerHTML = e);
    const i = Pa(t),
      { firstChild: a } = i;
    if (r) {
      if (r === 'queue') {
        const s = Xh(i).filter((l) => ['prepend', 'prependQueue'].includes(l.getAttribute(Wu)));
        if (s.length) return i.insertBefore(o, s[s.length - 1].nextSibling), o;
      }
      i.insertBefore(o, a);
    } else i.appendChild(o);
    return o;
  }
  function qh(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = Pa(t);
    return Xh(n).find((r) => r.getAttribute(Yh(t)) === e);
  }
  function Ki(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = qh(e, t);
    n && Pa(t).removeChild(n);
  }
  function fC(e, t) {
    const n = Ys.get(e);
    if (!n || !Vn(document, n)) {
      const r = Gh('', t),
        { parentNode: o } = r;
      Ys.set(e, o), e.removeChild(r);
    }
  }
  function Ui(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var r, o, i;
    const a = Pa(n);
    fC(a, n);
    const s = qh(t, n);
    if (s)
      return (
        !((r = n.csp) === null || r === void 0) &&
          r.nonce &&
          s.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) &&
          (s.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce),
        s.innerHTML !== e && (s.innerHTML = e),
        s
      );
    const l = Gh(e, n);
    return l.setAttribute(Yh(n), t), l;
  }
  function dC(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  class Dr {
    constructor() {
      (this.cache = new Map()), (this.keys = []), (this.cacheCallTimes = 0);
    }
    size() {
      return this.keys.length;
    }
    internalGet(t) {
      let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = { map: this.cache };
      return (
        t.forEach((o) => {
          var i;
          r ? (r = (i = r == null ? void 0 : r.map) === null || i === void 0 ? void 0 : i.get(o)) : (r = void 0);
        }),
        r != null && r.value && n && (r.value[1] = this.cacheCallTimes++),
        r == null ? void 0 : r.value
      );
    }
    get(t) {
      var n;
      return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
    }
    has(t) {
      return !!this.internalGet(t);
    }
    set(t, n) {
      if (!this.has(t)) {
        if (this.size() + 1 > Dr.MAX_CACHE_SIZE + Dr.MAX_CACHE_OFFSET) {
          const [o] = this.keys.reduce(
            (i, a) => {
              const [, s] = i;
              return this.internalGet(a)[1] < s ? [a, this.internalGet(a)[1]] : i;
            },
            [this.keys[0], this.cacheCallTimes],
          );
          this.delete(o);
        }
        this.keys.push(t);
      }
      let r = this.cache;
      t.forEach((o, i) => {
        if (i === t.length - 1) r.set(o, { value: [n, this.cacheCallTimes++] });
        else {
          const a = r.get(o);
          a ? a.map || (a.map = new Map()) : r.set(o, { map: new Map() }), (r = r.get(o).map);
        }
      });
    }
    deleteByPath(t, n) {
      var r;
      const o = t.get(n[0]);
      if (n.length === 1)
        return (
          o.map ? t.set(n[0], { map: o.map }) : t.delete(n[0]), (r = o.value) === null || r === void 0 ? void 0 : r[0]
        );
      const i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), i;
    }
    delete(t) {
      if (this.has(t)) return (this.keys = this.keys.filter((n) => !dC(n, t))), this.deleteByPath(this.cache, t);
    }
  }
  Dr.MAX_CACHE_SIZE = 20;
  Dr.MAX_CACHE_OFFSET = 5;
  let Vu = {};
  function pC(e, t) {}
  function hC(e, t, n) {
    !t && !Vu[n] && (e(!1, n), (Vu[n] = !0));
  }
  function mC(e, t) {
    hC(pC, e, t);
  }
  function vC() {}
  let gC = vC;
  const Zh = gC;
  let Ku = 0;
  class Qh {
    constructor(t) {
      (this.derivatives = Array.isArray(t) ? t : [t]), (this.id = Ku), t.length === 0 && Zh(t.length > 0), (Ku += 1);
    }
    getDerivativeToken(t) {
      return this.derivatives.reduce((n, r) => r(t, n), void 0);
    }
  }
  const rs = new Dr();
  function yC(e) {
    const t = Array.isArray(e) ? e : [e];
    return rs.has(t) || rs.set(t, new Qh(t)), rs.get(t);
  }
  const Uu = new WeakMap();
  function Yi(e) {
    let t = Uu.get(e) || '';
    return (
      t ||
        (Object.keys(e).forEach((n) => {
          const r = e[n];
          (t += n), r instanceof Qh ? (t += r.id) : r && typeof r == 'object' ? (t += Yi(r)) : (t += r);
        }),
        Uu.set(e, t)),
      t
    );
  }
  function bC(e, t) {
    return Gl(`${t}_${Yi(e)}`);
  }
  const xo = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ''),
    Jh = '_bAmBoO_';
  function wC(e, t, n) {
    var r, o;
    if (ln()) {
      Ui(e, xo);
      const i = document.createElement('div');
      (i.style.position = 'fixed'),
        (i.style.left = '0'),
        (i.style.top = '0'),
        t == null || t(i),
        document.body.appendChild(i);
      const a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(Jh);
      return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Ki(xo), a;
    }
    return !1;
  }
  let os;
  function _C() {
    return (
      os === void 0 &&
        (os = wC(`@layer ${xo} { .${xo} { content: "${Jh}"!important; } }`, (e) => {
          e.className = xo;
        })),
      os
    );
  }
  const Yu = {},
    CC = 'css',
    Kn = new Map();
  function xC(e) {
    Kn.set(e, (Kn.get(e) || 0) + 1);
  }
  function $C(e, t) {
    typeof document < 'u' &&
      document.querySelectorAll(`style[${Wh}="${e}"]`).forEach((r) => {
        var o;
        r[xr] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
      });
  }
  const SC = 0;
  function TC(e, t) {
    Kn.set(e, (Kn.get(e) || 0) - 1);
    const n = Array.from(Kn.keys()),
      r = n.filter((o) => (Kn.get(o) || 0) <= 0);
    n.length - r.length > SC &&
      r.forEach((o) => {
        $C(o, t), Kn.delete(o);
      });
  }
  const OC = (e, t, n, r) => {
    const o = n.getDerivativeToken(e);
    let i = E(E({}, o), t);
    return r && (i = r(i)), i;
  };
  function EC(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te({});
    const r = Ea(),
      o = P(() => E({}, ...t.value)),
      i = P(() => Yi(o.value)),
      a = P(() => Yi(n.value.override || Yu));
    return Uh(
      'token',
      P(() => [n.value.salt || '', e.value.id, i.value, a.value]),
      () => {
        const { salt: l = '', override: c = Yu, formatToken: u, getComputedToken: f } = n.value,
          d = f ? f(o.value, c, e.value) : OC(o.value, c, e.value, u),
          p = bC(d, l);
        (d._tokenKey = p), xC(p);
        const h = `${CC}-${Gl(p)}`;
        return (d._hashId = h), [d, h];
      },
      (l) => {
        var c;
        TC(l[0]._tokenKey, (c = r.value) === null || c === void 0 ? void 0 : c.cache.instanceId);
      },
    );
  }
  var PC = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    em = 'comm',
    tm = 'rule',
    nm = 'decl',
    kC = '@import',
    MC = '@keyframes',
    AC = '@layer',
    IC = Math.abs,
    ql = String.fromCharCode;
  function rm(e) {
    return e.trim();
  }
  function xi(e, t, n) {
    return e.replace(t, n);
  }
  function RC(e, t) {
    return e.indexOf(t);
  }
  function Ho(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Bo(e, t, n) {
    return e.slice(t, n);
  }
  function en(e) {
    return e.length;
  }
  function LC(e) {
    return e.length;
  }
  function li(e, t) {
    return t.push(e), e;
  }
  var ka = 1,
    Nr = 1,
    om = 0,
    Tt = 0,
    Fe = 0,
    Ur = '';
  function Zl(e, t, n, r, o, i, a, s) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: ka,
      column: Nr,
      length: a,
      return: '',
      siblings: s,
    };
  }
  function DC() {
    return Fe;
  }
  function NC() {
    return (Fe = Tt > 0 ? Ho(Ur, --Tt) : 0), Nr--, Fe === 10 && ((Nr = 1), ka--), Fe;
  }
  function Dt() {
    return (Fe = Tt < om ? Ho(Ur, Tt++) : 0), Nr++, Fe === 10 && ((Nr = 1), ka++), Fe;
  }
  function er() {
    return Ho(Ur, Tt);
  }
  function $i() {
    return Tt;
  }
  function Ma(e, t) {
    return Bo(Ur, e, t);
  }
  function Xs(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function jC(e) {
    return (ka = Nr = 1), (om = en((Ur = e))), (Tt = 0), [];
  }
  function HC(e) {
    return (Ur = ''), e;
  }
  function is(e) {
    return rm(Ma(Tt - 1, Gs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function BC(e) {
    for (; (Fe = er()) && Fe < 33; ) Dt();
    return Xs(e) > 2 || Xs(Fe) > 3 ? '' : ' ';
  }
  function zC(e, t) {
    for (; --t && Dt() && !(Fe < 48 || Fe > 102 || (Fe > 57 && Fe < 65) || (Fe > 70 && Fe < 97)); );
    return Ma(e, $i() + (t < 6 && er() == 32 && Dt() == 32));
  }
  function Gs(e) {
    for (; Dt(); )
      switch (Fe) {
        case e:
          return Tt;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Gs(Fe);
          break;
        case 40:
          e === 41 && Gs(e);
          break;
        case 92:
          Dt();
          break;
      }
    return Tt;
  }
  function FC(e, t) {
    for (; Dt() && e + Fe !== 47 + 10; ) if (e + Fe === 42 + 42 && er() === 47) break;
    return '/*' + Ma(t, Tt - 1) + '*' + ql(e === 47 ? e : Dt());
  }
  function WC(e) {
    for (; !Xs(er()); ) Dt();
    return Ma(e, Tt);
  }
  function VC(e) {
    return HC(Si('', null, null, null, [''], (e = jC(e)), 0, [0], e));
  }
  function Si(e, t, n, r, o, i, a, s, l) {
    for (
      var c = 0, u = 0, f = a, d = 0, p = 0, h = 0, m = 1, y = 1, b = 1, _ = 0, M = '', R = o, x = i, C = r, T = M;
      y;

    )
      switch (((h = _), (_ = Dt()))) {
        case 40:
          if (h != 108 && Ho(T, f - 1) == 58) {
            RC((T += xi(is(_), '&', '&\f')), '&\f') != -1 && (b = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          T += is(_);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          T += BC(h);
          break;
        case 92:
          T += zC($i() - 1, 7);
          continue;
        case 47:
          switch (er()) {
            case 42:
            case 47:
              li(KC(FC(Dt(), $i()), t, n, l), l);
              break;
            default:
              T += '/';
          }
          break;
        case 123 * m:
          s[c++] = en(T) * b;
        case 125 * m:
        case 59:
        case 0:
          switch (_) {
            case 0:
            case 125:
              y = 0;
            case 59 + u:
              b == -1 && (T = xi(T, /\f/g, '')),
                p > 0 &&
                  en(T) - f &&
                  li(p > 32 ? Gu(T + ';', r, n, f - 1, l) : Gu(xi(T, ' ', '') + ';', r, n, f - 2, l), l);
              break;
            case 59:
              T += ';';
            default:
              if ((li((C = Xu(T, t, n, c, u, o, s, M, (R = []), (x = []), f, i)), i), _ === 123))
                if (u === 0) Si(T, t, C, C, R, i, f, s, x);
                else
                  switch (d === 99 && Ho(T, 3) === 110 ? 100 : d) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      Si(e, C, C, r && li(Xu(e, C, C, 0, 0, o, s, M, o, (R = []), f, x), x), o, x, f, s, r ? R : x);
                      break;
                    default:
                      Si(T, C, C, C, [''], x, 0, s, x);
                  }
          }
          (c = u = p = 0), (m = b = 1), (M = T = ''), (f = a);
          break;
        case 58:
          (f = 1 + en(T)), (p = h);
        default:
          if (m < 1) {
            if (_ == 123) --m;
            else if (_ == 125 && m++ == 0 && NC() == 125) continue;
          }
          switch (((T += ql(_)), _ * m)) {
            case 38:
              b = u > 0 ? 1 : ((T += '\f'), -1);
              break;
            case 44:
              (s[c++] = (en(T) - 1) * b), (b = 1);
              break;
            case 64:
              er() === 45 && (T += is(Dt())), (d = er()), (u = f = en((M = T += WC($i())))), _++;
              break;
            case 45:
              h === 45 && en(T) == 2 && (m = 0);
          }
      }
    return i;
  }
  function Xu(e, t, n, r, o, i, a, s, l, c, u, f) {
    for (var d = o - 1, p = o === 0 ? i : [''], h = LC(p), m = 0, y = 0, b = 0; m < r; ++m)
      for (var _ = 0, M = Bo(e, d + 1, (d = IC((y = a[m])))), R = e; _ < h; ++_)
        (R = rm(y > 0 ? p[_] + ' ' + M : xi(M, /&\f/g, p[_]))) && (l[b++] = R);
    return Zl(e, t, n, o === 0 ? tm : s, l, c, u, f);
  }
  function KC(e, t, n, r) {
    return Zl(e, t, n, em, ql(DC()), Bo(e, 2, -2), 0, r);
  }
  function Gu(e, t, n, r, o) {
    return Zl(e, t, n, nm, Bo(e, 0, r), Bo(e, r + 1, -1), r, o);
  }
  function qs(e, t) {
    for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
    return n;
  }
  function UC(e, t, n, r) {
    switch (e.type) {
      case AC:
        if (e.children.length) break;
      case kC:
      case nm:
        return (e.return = e.return || e.value);
      case em:
        return '';
      case MC:
        return (e.return = e.value + '{' + qs(e.children, r) + '}');
      case tm:
        if (!en((e.value = e.props.join(',')))) return '';
    }
    return en((n = qs(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
  }
  const qu = 'data-ant-cssinjs-cache-path',
    YC = '_FILE_STYLE__';
  let tr,
    im = !0;
  function XC() {
    var e;
    if (!tr && ((tr = {}), ln())) {
      const t = document.createElement('div');
      (t.className = qu),
        (t.style.position = 'fixed'),
        (t.style.visibility = 'hidden'),
        (t.style.top = '-9999px'),
        document.body.appendChild(t);
      let n = getComputedStyle(t).content || '';
      (n = n.replace(/^"/, '').replace(/"$/, '')),
        n.split(';').forEach((o) => {
          const [i, a] = o.split(':');
          tr[i] = a;
        });
      const r = document.querySelector(`style[${qu}]`);
      r && ((im = !1), (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
    }
  }
  function GC(e) {
    return XC(), !!tr[e];
  }
  function qC(e) {
    const t = tr[e];
    let n = null;
    if (t && ln())
      if (im) n = YC;
      else {
        const r = document.querySelector(`style[${Jn}="${tr[e]}"]`);
        r ? (n = r.innerHTML) : delete tr[e];
      }
    return [n, t];
  }
  const Zu = ln(),
    ZC = '_skip_check_',
    am = '_multi_value_';
  function Qu(e) {
    return qs(VC(e), UC).replace(/\{%%%\:[^;];}/g, ';');
  }
  function QC(e) {
    return typeof e == 'object' && e && (ZC in e || am in e);
  }
  function JC(e, t, n) {
    if (!t) return e;
    const r = `.${t}`,
      o = n === 'low' ? `:where(${r})` : r;
    return e
      .split(',')
      .map((a) => {
        var s;
        const l = a.trim().split(/\s+/);
        let c = l[0] || '';
        const u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || '';
        return (c = `${u}${o}${c.slice(u.length)}`), [c, ...l.slice(1)].join(' ');
      })
      .join(',');
  }
  const Ju = new Set(),
    Zs = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        {
          root: n,
          injectHash: r,
          parentSelectors: o,
        } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { root: !0, parentSelectors: [] };
      const { hashId: i, layer: a, path: s, hashPriority: l, transformers: c = [], linters: u = [] } = t;
      let f = '',
        d = {};
      function p(y) {
        const b = y.getName(i);
        if (!d[b]) {
          const [_] = Zs(y.style, t, { root: !1, parentSelectors: o });
          d[b] = `@keyframes ${y.getName(i)}${_}`;
        }
      }
      function h(y) {
        let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return (
          y.forEach((_) => {
            Array.isArray(_) ? h(_, b) : _ && b.push(_);
          }),
          b
        );
      }
      if (
        (h(Array.isArray(e) ? e : [e]).forEach((y) => {
          const b = typeof y == 'string' && !n ? {} : y;
          if (typeof b == 'string')
            f += `${b}
`;
          else if (b._keyframe) p(b);
          else {
            const _ = c.reduce((M, R) => {
              var x;
              return ((x = R == null ? void 0 : R.visit) === null || x === void 0 ? void 0 : x.call(R, M)) || M;
            }, b);
            Object.keys(_).forEach((M) => {
              var R;
              const x = _[M];
              if (typeof x == 'object' && x && (M !== 'animationName' || !x._keyframe) && !QC(x)) {
                let T = !1,
                  $ = M.trim(),
                  L = !1;
                (n || r) && i
                  ? $.startsWith('@')
                    ? (T = !0)
                    : ($ = JC(M, i, l))
                  : n && !i && ($ === '&' || $ === '') && (($ = ''), (L = !0));
                const [S, B] = Zs(x, t, { root: L, injectHash: T, parentSelectors: [...o, $] });
                (d = E(E({}, d), B)), (f += `${$}${S}`);
              } else {
                let T = function (L, S) {
                  const B = L.replace(/[A-Z]/g, (ne) => `-${ne.toLowerCase()}`);
                  let Y = S;
                  !PC[L] && typeof Y == 'number' && Y !== 0 && (Y = `${Y}px`),
                    L === 'animationName' && S != null && S._keyframe && (p(S), (Y = S.getName(i))),
                    (f += `${B}:${Y};`);
                };
                var C = T;
                const $ = (R = x == null ? void 0 : x.value) !== null && R !== void 0 ? R : x;
                typeof x == 'object' && x != null && x[am] && Array.isArray($)
                  ? $.forEach((L) => {
                      T(M, L);
                    })
                  : T(M, $);
              }
            });
          }
        }),
        !n)
      )
        f = `{${f}}`;
      else if (a && _C()) {
        const y = a.split(',');
        (f = `@layer ${y[y.length - 1].trim()} {${f}}`), y.length > 1 && (f = `@layer ${a}{%%%:%}${f}`);
      }
      return [f, d];
    };
  function ex(e, t) {
    return Gl(`${e.join('%')}${t}`);
  }
  function ef(e, t) {
    const n = Ea(),
      r = P(() => e.value.token._tokenKey),
      o = P(() => [r.value, ...e.value.path]);
    let i = Zu;
    return (
      Uh(
        'style',
        o,
        () => {
          const { path: a, hashId: s, layer: l, nonce: c, clientOnly: u, order: f = 0 } = e.value,
            d = o.value.join('|');
          if (GC(d)) {
            const [T, $] = qC(d);
            if (T) return [T, r.value, $, {}, u, f];
          }
          const p = t(),
            { hashPriority: h, container: m, transformers: y, linters: b, cache: _ } = n.value,
            [M, R] = Zs(p, { hashId: s, hashPriority: h, layer: l, path: a.join('-'), transformers: y, linters: b }),
            x = Qu(M),
            C = ex(o.value, x);
          if (i) {
            const T = { mark: Jn, prepend: 'queue', attachTo: m, priority: f },
              $ = typeof c == 'function' ? c() : c;
            $ && (T.csp = { nonce: $ });
            const L = Ui(x, C, T);
            (L[xr] = _.instanceId),
              L.setAttribute(Wh, r.value),
              Object.keys(R).forEach((S) => {
                Ju.has(S) || (Ju.add(S), Ui(Qu(R[S]), `_effect-${S}`, { mark: Jn, prepend: 'queue', attachTo: m }));
              });
          }
          return [x, r.value, C, R, u, f];
        },
        (a, s) => {
          let [, , l] = a;
          (s || n.value.autoClear) && Zu && Ki(l, { mark: Jn });
        },
      ),
      (a) => a
    );
  }
  class tx {
    constructor(t, n) {
      (this._keyframe = !0), (this.name = t), (this.style = n);
    }
    getName() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
      return t ? `${t}-${this.name}` : this.name;
    }
  }
  const Ke = tx,
    nx = '4.0.3',
    Xi = [
      'blue',
      'purple',
      'cyan',
      'green',
      'magenta',
      'pink',
      'red',
      'orange',
      'yellow',
      'volcano',
      'geekblue',
      'lime',
      'gold',
    ];
  function Ze(e, t) {
    rx(e) && (e = '100%');
    var n = ox(e);
    return (
      (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
      n && (e = parseInt(String(e * t), 10) / 100),
      Math.abs(e - t) < 1e-6
        ? 1
        : (t === 360
            ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
            : (e = (e % t) / parseFloat(String(t))),
          e)
    );
  }
  function ci(e) {
    return Math.min(1, Math.max(0, e));
  }
  function rx(e) {
    return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
  }
  function ox(e) {
    return typeof e == 'string' && e.indexOf('%') !== -1;
  }
  function sm(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function ui(e) {
    return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
  }
  function Gn(e) {
    return e.length === 1 ? '0' + e : String(e);
  }
  function ix(e, t, n) {
    return { r: Ze(e, 255) * 255, g: Ze(t, 255) * 255, b: Ze(n, 255) * 255 };
  }
  function tf(e, t, n) {
    (e = Ze(e, 255)), (t = Ze(t, 255)), (n = Ze(n, 255));
    var r = Math.max(e, t, n),
      o = Math.min(e, t, n),
      i = 0,
      a = 0,
      s = (r + o) / 2;
    if (r === o) (a = 0), (i = 0);
    else {
      var l = r - o;
      switch (((a = s > 0.5 ? l / (2 - r - o) : l / (r + o)), r)) {
        case e:
          i = (t - n) / l + (t < n ? 6 : 0);
          break;
        case t:
          i = (n - e) / l + 2;
          break;
        case n:
          i = (e - t) / l + 4;
          break;
      }
      i /= 6;
    }
    return { h: i, s: a, l: s };
  }
  function as(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
  }
  function ax(e, t, n) {
    var r, o, i;
    if (((e = Ze(e, 360)), (t = Ze(t, 100)), (n = Ze(n, 100)), t === 0)) (o = n), (i = n), (r = n);
    else {
      var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
        s = 2 * n - a;
      (r = as(s, a, e + 1 / 3)), (o = as(s, a, e)), (i = as(s, a, e - 1 / 3));
    }
    return { r: r * 255, g: o * 255, b: i * 255 };
  }
  function Qs(e, t, n) {
    (e = Ze(e, 255)), (t = Ze(t, 255)), (n = Ze(n, 255));
    var r = Math.max(e, t, n),
      o = Math.min(e, t, n),
      i = 0,
      a = r,
      s = r - o,
      l = r === 0 ? 0 : s / r;
    if (r === o) i = 0;
    else {
      switch (r) {
        case e:
          i = (t - n) / s + (t < n ? 6 : 0);
          break;
        case t:
          i = (n - e) / s + 2;
          break;
        case n:
          i = (e - t) / s + 4;
          break;
      }
      i /= 6;
    }
    return { h: i, s: l, v: a };
  }
  function sx(e, t, n) {
    (e = Ze(e, 360) * 6), (t = Ze(t, 100)), (n = Ze(n, 100));
    var r = Math.floor(e),
      o = e - r,
      i = n * (1 - t),
      a = n * (1 - o * t),
      s = n * (1 - (1 - o) * t),
      l = r % 6,
      c = [n, a, i, i, s, n][l],
      u = [s, n, n, a, i, i][l],
      f = [i, i, s, n, n, a][l];
    return { r: c * 255, g: u * 255, b: f * 255 };
  }
  function Js(e, t, n, r) {
    var o = [Gn(Math.round(e).toString(16)), Gn(Math.round(t).toString(16)), Gn(Math.round(n).toString(16))];
    return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1))
      ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
      : o.join('');
  }
  function lx(e, t, n, r, o) {
    var i = [Gn(Math.round(e).toString(16)), Gn(Math.round(t).toString(16)), Gn(Math.round(n).toString(16)), Gn(cx(r))];
    return o &&
      i[0].startsWith(i[0].charAt(1)) &&
      i[1].startsWith(i[1].charAt(1)) &&
      i[2].startsWith(i[2].charAt(1)) &&
      i[3].startsWith(i[3].charAt(1))
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
      : i.join('');
  }
  function cx(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function nf(e) {
    return ht(e) / 255;
  }
  function ht(e) {
    return parseInt(e, 16);
  }
  function ux(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
  }
  var el = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  };
  function wr(e) {
    var t = { r: 0, g: 0, b: 0 },
      n = 1,
      r = null,
      o = null,
      i = null,
      a = !1,
      s = !1;
    return (
      typeof e == 'string' && (e = px(e)),
      typeof e == 'object' &&
        (Zt(e.r) && Zt(e.g) && Zt(e.b)
          ? ((t = ix(e.r, e.g, e.b)), (a = !0), (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
          : Zt(e.h) && Zt(e.s) && Zt(e.v)
          ? ((r = ui(e.s)), (o = ui(e.v)), (t = sx(e.h, r, o)), (a = !0), (s = 'hsv'))
          : Zt(e.h) && Zt(e.s) && Zt(e.l) && ((r = ui(e.s)), (i = ui(e.l)), (t = ax(e.h, r, i)), (a = !0), (s = 'hsl')),
        Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
      (n = sm(n)),
      {
        ok: a,
        format: e.format || s,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n,
      }
    );
  }
  var fx = '[-\\+]?\\d+%?',
    dx = '[-\\+]?\\d*\\.\\d+%?',
    xn = '(?:'.concat(dx, ')|(?:').concat(fx, ')'),
    ss = '[\\s|\\(]+('.concat(xn, ')[,|\\s]+(').concat(xn, ')[,|\\s]+(').concat(xn, ')\\s*\\)?'),
    ls = '[\\s|\\(]+('
      .concat(xn, ')[,|\\s]+(')
      .concat(xn, ')[,|\\s]+(')
      .concat(xn, ')[,|\\s]+(')
      .concat(xn, ')\\s*\\)?'),
    Et = {
      CSS_UNIT: new RegExp(xn),
      rgb: new RegExp('rgb' + ss),
      rgba: new RegExp('rgba' + ls),
      hsl: new RegExp('hsl' + ss),
      hsla: new RegExp('hsla' + ls),
      hsv: new RegExp('hsv' + ss),
      hsva: new RegExp('hsva' + ls),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function px(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
    var t = !1;
    if (el[e]) (e = el[e]), (t = !0);
    else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    var n = Et.rgb.exec(e);
    return n
      ? { r: n[1], g: n[2], b: n[3] }
      : ((n = Et.rgba.exec(e)),
        n
          ? { r: n[1], g: n[2], b: n[3], a: n[4] }
          : ((n = Et.hsl.exec(e)),
            n
              ? { h: n[1], s: n[2], l: n[3] }
              : ((n = Et.hsla.exec(e)),
                n
                  ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                  : ((n = Et.hsv.exec(e)),
                    n
                      ? { h: n[1], s: n[2], v: n[3] }
                      : ((n = Et.hsva.exec(e)),
                        n
                          ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                          : ((n = Et.hex8.exec(e)),
                            n
                              ? { r: ht(n[1]), g: ht(n[2]), b: ht(n[3]), a: nf(n[4]), format: t ? 'name' : 'hex8' }
                              : ((n = Et.hex6.exec(e)),
                                n
                                  ? { r: ht(n[1]), g: ht(n[2]), b: ht(n[3]), format: t ? 'name' : 'hex' }
                                  : ((n = Et.hex4.exec(e)),
                                    n
                                      ? {
                                          r: ht(n[1] + n[1]),
                                          g: ht(n[2] + n[2]),
                                          b: ht(n[3] + n[3]),
                                          a: nf(n[4] + n[4]),
                                          format: t ? 'name' : 'hex8',
                                        }
                                      : ((n = Et.hex3.exec(e)),
                                        n
                                          ? {
                                              r: ht(n[1] + n[1]),
                                              g: ht(n[2] + n[2]),
                                              b: ht(n[3] + n[3]),
                                              format: t ? 'name' : 'hex',
                                            }
                                          : !1)))))))));
  }
  function Zt(e) {
    return !!Et.CSS_UNIT.exec(String(e));
  }
  var et = (function () {
      function e(t, n) {
        t === void 0 && (t = ''), n === void 0 && (n = {});
        var r;
        if (t instanceof e) return t;
        typeof t == 'number' && (t = ux(t)), (this.originalInput = t);
        var o = wr(t);
        (this.originalInput = t),
          (this.r = o.r),
          (this.g = o.g),
          (this.b = o.b),
          (this.a = o.a),
          (this.roundA = Math.round(100 * this.a) / 100),
          (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
          (this.gradientType = n.gradientType),
          this.r < 1 && (this.r = Math.round(this.r)),
          this.g < 1 && (this.g = Math.round(this.g)),
          this.b < 1 && (this.b = Math.round(this.b)),
          (this.isValid = o.ok);
      }
      return (
        (e.prototype.isDark = function () {
          return this.getBrightness() < 128;
        }),
        (e.prototype.isLight = function () {
          return !this.isDark();
        }),
        (e.prototype.getBrightness = function () {
          var t = this.toRgb();
          return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
        }),
        (e.prototype.getLuminance = function () {
          var t = this.toRgb(),
            n,
            r,
            o,
            i = t.r / 255,
            a = t.g / 255,
            s = t.b / 255;
          return (
            i <= 0.03928 ? (n = i / 12.92) : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
            a <= 0.03928 ? (r = a / 12.92) : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
            s <= 0.03928 ? (o = s / 12.92) : (o = Math.pow((s + 0.055) / 1.055, 2.4)),
            0.2126 * n + 0.7152 * r + 0.0722 * o
          );
        }),
        (e.prototype.getAlpha = function () {
          return this.a;
        }),
        (e.prototype.setAlpha = function (t) {
          return (this.a = sm(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
        }),
        (e.prototype.isMonochrome = function () {
          var t = this.toHsl().s;
          return t === 0;
        }),
        (e.prototype.toHsv = function () {
          var t = Qs(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
        }),
        (e.prototype.toHsvString = function () {
          var t = Qs(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            o = Math.round(t.v * 100);
          return this.a === 1
            ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
            : 'hsva('.concat(n, ', ').concat(r, '%, ').concat(o, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHsl = function () {
          var t = tf(this.r, this.g, this.b);
          return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
        }),
        (e.prototype.toHslString = function () {
          var t = tf(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            o = Math.round(t.l * 100);
          return this.a === 1
            ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
            : 'hsla('.concat(n, ', ').concat(r, '%, ').concat(o, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHex = function (t) {
          return t === void 0 && (t = !1), Js(this.r, this.g, this.b, t);
        }),
        (e.prototype.toHexString = function (t) {
          return t === void 0 && (t = !1), '#' + this.toHex(t);
        }),
        (e.prototype.toHex8 = function (t) {
          return t === void 0 && (t = !1), lx(this.r, this.g, this.b, this.a, t);
        }),
        (e.prototype.toHex8String = function (t) {
          return t === void 0 && (t = !1), '#' + this.toHex8(t);
        }),
        (e.prototype.toHexShortString = function (t) {
          return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
        }),
        (e.prototype.toRgb = function () {
          return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
        }),
        (e.prototype.toRgbString = function () {
          var t = Math.round(this.r),
            n = Math.round(this.g),
            r = Math.round(this.b);
          return this.a === 1
            ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
            : 'rgba('.concat(t, ', ').concat(n, ', ').concat(r, ', ').concat(this.roundA, ')');
        }),
        (e.prototype.toPercentageRgb = function () {
          var t = function (n) {
            return ''.concat(Math.round(Ze(n, 255) * 100), '%');
          };
          return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function () {
          var t = function (n) {
            return Math.round(Ze(n, 255) * 100);
          };
          return this.a === 1
            ? 'rgb('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%)')
            : 'rgba('
                .concat(t(this.r), '%, ')
                .concat(t(this.g), '%, ')
                .concat(t(this.b), '%, ')
                .concat(this.roundA, ')');
        }),
        (e.prototype.toName = function () {
          if (this.a === 0) return 'transparent';
          if (this.a < 1) return !1;
          for (var t = '#' + Js(this.r, this.g, this.b, !1), n = 0, r = Object.entries(el); n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            if (t === a) return i;
          }
          return !1;
        }),
        (e.prototype.toString = function (t) {
          var n = !!t;
          t = t ?? this.format;
          var r = !1,
            o = this.a < 1 && this.a >= 0,
            i = !n && o && (t.startsWith('hex') || t === 'name');
          return i
            ? t === 'name' && this.a === 0
              ? this.toName()
              : this.toRgbString()
            : (t === 'rgb' && (r = this.toRgbString()),
              t === 'prgb' && (r = this.toPercentageRgbString()),
              (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
              t === 'hex3' && (r = this.toHexString(!0)),
              t === 'hex4' && (r = this.toHex8String(!0)),
              t === 'hex8' && (r = this.toHex8String()),
              t === 'name' && (r = this.toName()),
              t === 'hsl' && (r = this.toHslString()),
              t === 'hsv' && (r = this.toHsvString()),
              r || this.toHexString());
        }),
        (e.prototype.toNumber = function () {
          return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        }),
        (e.prototype.clone = function () {
          return new e(this.toString());
        }),
        (e.prototype.lighten = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.l += t / 100), (n.l = ci(n.l)), new e(n);
        }),
        (e.prototype.brighten = function (t) {
          t === void 0 && (t = 10);
          var n = this.toRgb();
          return (
            (n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100))))),
            (n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100))))),
            (n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100))))),
            new e(n)
          );
        }),
        (e.prototype.darken = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.l -= t / 100), (n.l = ci(n.l)), new e(n);
        }),
        (e.prototype.tint = function (t) {
          return t === void 0 && (t = 10), this.mix('white', t);
        }),
        (e.prototype.shade = function (t) {
          return t === void 0 && (t = 10), this.mix('black', t);
        }),
        (e.prototype.desaturate = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.s -= t / 100), (n.s = ci(n.s)), new e(n);
        }),
        (e.prototype.saturate = function (t) {
          t === void 0 && (t = 10);
          var n = this.toHsl();
          return (n.s += t / 100), (n.s = ci(n.s)), new e(n);
        }),
        (e.prototype.greyscale = function () {
          return this.desaturate(100);
        }),
        (e.prototype.spin = function (t) {
          var n = this.toHsl(),
            r = (n.h + t) % 360;
          return (n.h = r < 0 ? 360 + r : r), new e(n);
        }),
        (e.prototype.mix = function (t, n) {
          n === void 0 && (n = 50);
          var r = this.toRgb(),
            o = new e(t).toRgb(),
            i = n / 100,
            a = {
              r: (o.r - r.r) * i + r.r,
              g: (o.g - r.g) * i + r.g,
              b: (o.b - r.b) * i + r.b,
              a: (o.a - r.a) * i + r.a,
            };
          return new e(a);
        }),
        (e.prototype.analogous = function (t, n) {
          t === void 0 && (t = 6), n === void 0 && (n = 30);
          var r = this.toHsl(),
            o = 360 / n,
            i = [this];
          for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; ) (r.h = (r.h + o) % 360), i.push(new e(r));
          return i;
        }),
        (e.prototype.complement = function () {
          var t = this.toHsl();
          return (t.h = (t.h + 180) % 360), new e(t);
        }),
        (e.prototype.monochromatic = function (t) {
          t === void 0 && (t = 6);
          for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], s = 1 / t; t--; )
            a.push(new e({ h: r, s: o, v: i })), (i = (i + s) % 1);
          return a;
        }),
        (e.prototype.splitcomplement = function () {
          var t = this.toHsl(),
            n = t.h;
          return [this, new e({ h: (n + 72) % 360, s: t.s, l: t.l }), new e({ h: (n + 216) % 360, s: t.s, l: t.l })];
        }),
        (e.prototype.onBackground = function (t) {
          var n = this.toRgb(),
            r = new e(t).toRgb(),
            o = n.a + r.a * (1 - n.a);
          return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
            a: o,
          });
        }),
        (e.prototype.triad = function () {
          return this.polyad(3);
        }),
        (e.prototype.tetrad = function () {
          return this.polyad(4);
        }),
        (e.prototype.polyad = function (t) {
          for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
            o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
          return o;
        }),
        (e.prototype.equals = function (t) {
          return this.toRgbString() === new e(t).toRgbString();
        }),
        e
      );
    })(),
    fi = 2,
    rf = 0.16,
    hx = 0.05,
    mx = 0.05,
    vx = 0.15,
    lm = 5,
    cm = 4,
    gx = [
      { index: 7, opacity: 0.15 },
      { index: 6, opacity: 0.25 },
      { index: 5, opacity: 0.3 },
      { index: 5, opacity: 0.45 },
      { index: 5, opacity: 0.65 },
      { index: 5, opacity: 0.85 },
      { index: 4, opacity: 0.9 },
      { index: 3, opacity: 0.95 },
      { index: 2, opacity: 0.97 },
      { index: 1, opacity: 0.98 },
    ];
  function of(e) {
    var t = e.r,
      n = e.g,
      r = e.b,
      o = Qs(t, n, r);
    return { h: o.h * 360, s: o.s, v: o.v };
  }
  function di(e) {
    var t = e.r,
      n = e.g,
      r = e.b;
    return '#'.concat(Js(t, n, r, !1));
  }
  function yx(e, t, n) {
    var r = n / 100,
      o = { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
    return o;
  }
  function af(e, t, n) {
    var r;
    return (
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? (r = n ? Math.round(e.h) - fi * t : Math.round(e.h) + fi * t)
        : (r = n ? Math.round(e.h) + fi * t : Math.round(e.h) - fi * t),
      r < 0 ? (r += 360) : r >= 360 && (r -= 360),
      r
    );
  }
  function sf(e, t, n) {
    if (e.h === 0 && e.s === 0) return e.s;
    var r;
    return (
      n ? (r = e.s - rf * t) : t === cm ? (r = e.s + rf) : (r = e.s + hx * t),
      r > 1 && (r = 1),
      n && t === lm && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2))
    );
  }
  function lf(e, t, n) {
    var r;
    return n ? (r = e.v + mx * t) : (r = e.v - vx * t), r > 1 && (r = 1), Number(r.toFixed(2));
  }
  function zo(e) {
    for (
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = wr(e), o = lm;
      o > 0;
      o -= 1
    ) {
      var i = of(r),
        a = di(wr({ h: af(i, o, !0), s: sf(i, o, !0), v: lf(i, o, !0) }));
      n.push(a);
    }
    n.push(di(r));
    for (var s = 1; s <= cm; s += 1) {
      var l = of(r),
        c = di(wr({ h: af(l, s), s: sf(l, s), v: lf(l, s) }));
      n.push(c);
    }
    return t.theme === 'dark'
      ? gx.map(function (u) {
          var f = u.index,
            d = u.opacity,
            p = di(yx(wr(t.backgroundColor || '#141414'), wr(n[f]), d * 100));
          return p;
        })
      : n;
  }
  var cs = {
      red: '#F5222D',
      volcano: '#FA541C',
      orange: '#FA8C16',
      gold: '#FAAD14',
      yellow: '#FADB14',
      lime: '#A0D911',
      green: '#52C41A',
      cyan: '#13C2C2',
      blue: '#1890FF',
      geekblue: '#2F54EB',
      purple: '#722ED1',
      magenta: '#EB2F96',
      grey: '#666666',
    },
    Ti = {},
    us = {};
  Object.keys(cs).forEach(function (e) {
    (Ti[e] = zo(cs[e])),
      (Ti[e].primary = Ti[e][5]),
      (us[e] = zo(cs[e], { theme: 'dark', backgroundColor: '#141414' })),
      (us[e].primary = us[e][5]);
  });
  var bx = Ti.blue;
  const wx = (e) => {
      const { controlHeight: t } = e;
      return { controlHeightSM: t * 0.75, controlHeightXS: t * 0.5, controlHeightLG: t * 1.25 };
    },
    _x = wx;
  function Cx(e) {
    const { sizeUnit: t, sizeStep: n } = e;
    return {
      sizeXXL: t * (n + 8),
      sizeXL: t * (n + 4),
      sizeLG: t * (n + 2),
      sizeMD: t * (n + 1),
      sizeMS: t * n,
      size: t * n,
      sizeSM: t * (n - 1),
      sizeXS: t * (n - 2),
      sizeXXS: t * (n - 3),
    };
  }
  const um = {
      blue: '#1677ff',
      purple: '#722ED1',
      cyan: '#13C2C2',
      green: '#52C41A',
      magenta: '#EB2F96',
      pink: '#eb2f96',
      red: '#F5222D',
      orange: '#FA8C16',
      yellow: '#FADB14',
      volcano: '#FA541C',
      geekblue: '#2F54EB',
      gold: '#FAAD14',
      lime: '#A0D911',
    },
    xx = E(E({}, um), {
      colorPrimary: '#1677ff',
      colorSuccess: '#52c41a',
      colorWarning: '#faad14',
      colorError: '#ff4d4f',
      colorInfo: '#1677ff',
      colorTextBase: '',
      colorBgBase: '',
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
      fontSize: 14,
      lineWidth: 1,
      lineType: 'solid',
      motionUnit: 0.1,
      motionBase: 0,
      motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
      motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
      motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
      motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
      borderRadius: 6,
      sizeUnit: 4,
      sizeStep: 4,
      sizePopupArrow: 16,
      controlHeight: 32,
      zIndexBase: 0,
      zIndexPopupBase: 1e3,
      opacityImage: 1,
      wireframe: !1,
    }),
    Ql = xx;
  function $x(e, t) {
    let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
    const {
        colorSuccess: o,
        colorWarning: i,
        colorError: a,
        colorInfo: s,
        colorPrimary: l,
        colorBgBase: c,
        colorTextBase: u,
      } = e,
      f = n(l),
      d = n(o),
      p = n(i),
      h = n(a),
      m = n(s),
      y = r(c, u);
    return E(E({}, y), {
      colorPrimaryBg: f[1],
      colorPrimaryBgHover: f[2],
      colorPrimaryBorder: f[3],
      colorPrimaryBorderHover: f[4],
      colorPrimaryHover: f[5],
      colorPrimary: f[6],
      colorPrimaryActive: f[7],
      colorPrimaryTextHover: f[8],
      colorPrimaryText: f[9],
      colorPrimaryTextActive: f[10],
      colorSuccessBg: d[1],
      colorSuccessBgHover: d[2],
      colorSuccessBorder: d[3],
      colorSuccessBorderHover: d[4],
      colorSuccessHover: d[4],
      colorSuccess: d[6],
      colorSuccessActive: d[7],
      colorSuccessTextHover: d[8],
      colorSuccessText: d[9],
      colorSuccessTextActive: d[10],
      colorErrorBg: h[1],
      colorErrorBgHover: h[2],
      colorErrorBorder: h[3],
      colorErrorBorderHover: h[4],
      colorErrorHover: h[5],
      colorError: h[6],
      colorErrorActive: h[7],
      colorErrorTextHover: h[8],
      colorErrorText: h[9],
      colorErrorTextActive: h[10],
      colorWarningBg: p[1],
      colorWarningBgHover: p[2],
      colorWarningBorder: p[3],
      colorWarningBorderHover: p[4],
      colorWarningHover: p[4],
      colorWarning: p[6],
      colorWarningActive: p[7],
      colorWarningTextHover: p[8],
      colorWarningText: p[9],
      colorWarningTextActive: p[10],
      colorInfoBg: m[1],
      colorInfoBgHover: m[2],
      colorInfoBorder: m[3],
      colorInfoBorderHover: m[4],
      colorInfoHover: m[4],
      colorInfo: m[6],
      colorInfoActive: m[7],
      colorInfoTextHover: m[8],
      colorInfoText: m[9],
      colorInfoTextActive: m[10],
      colorBgMask: new et('#000').setAlpha(0.45).toRgbString(),
      colorWhite: '#fff',
    });
  }
  const Sx = (e) => {
      let t = e,
        n = e,
        r = e,
        o = e;
      return (
        e < 6 && e >= 5 ? (t = e + 1) : e < 16 && e >= 6 ? (t = e + 2) : e >= 16 && (t = 16),
        e < 7 && e >= 5
          ? (n = 4)
          : e < 8 && e >= 7
          ? (n = 5)
          : e < 14 && e >= 8
          ? (n = 6)
          : e < 16 && e >= 14
          ? (n = 7)
          : e >= 16 && (n = 8),
        e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
        e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
        { borderRadius: e > 16 ? 16 : e, borderRadiusXS: r, borderRadiusSM: n, borderRadiusLG: t, borderRadiusOuter: o }
      );
    },
    Tx = Sx;
  function Ox(e) {
    const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
    return E(
      {
        motionDurationFast: `${(n + t).toFixed(1)}s`,
        motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
        motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
        lineWidthBold: o + 1,
      },
      Tx(r),
    );
  }
  const Qt = (e, t) => new et(e).setAlpha(t).toRgbString(),
    no = (e, t) => new et(e).darken(t).toHexString(),
    Ex = (e) => {
      const t = zo(e);
      return { 1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[4], 6: t[5], 7: t[6], 8: t[4], 9: t[5], 10: t[6] };
    },
    Px = (e, t) => {
      const n = e || '#fff',
        r = t || '#000';
      return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: Qt(r, 0.88),
        colorTextSecondary: Qt(r, 0.65),
        colorTextTertiary: Qt(r, 0.45),
        colorTextQuaternary: Qt(r, 0.25),
        colorFill: Qt(r, 0.15),
        colorFillSecondary: Qt(r, 0.06),
        colorFillTertiary: Qt(r, 0.04),
        colorFillQuaternary: Qt(r, 0.02),
        colorBgLayout: no(n, 4),
        colorBgContainer: no(n, 0),
        colorBgElevated: no(n, 0),
        colorBgSpotlight: Qt(r, 0.85),
        colorBorder: no(n, 15),
        colorBorderSecondary: no(n, 6),
      };
    };
  function kx(e) {
    const t = new Array(10).fill(null).map((n, r) => {
      const o = r - 1,
        i = e * Math.pow(2.71828, o / 5),
        a = r > 1 ? Math.floor(i) : Math.ceil(i);
      return Math.floor(a / 2) * 2;
    });
    return (
      (t[1] = e),
      t.map((n) => {
        const r = n + 8;
        return { size: n, lineHeight: r / n };
      })
    );
  }
  const Mx = (e) => {
      const t = kx(e),
        n = t.map((o) => o.size),
        r = t.map((o) => o.lineHeight);
      return {
        fontSizeSM: n[0],
        fontSize: n[1],
        fontSizeLG: n[2],
        fontSizeXL: n[3],
        fontSizeHeading1: n[6],
        fontSizeHeading2: n[5],
        fontSizeHeading3: n[4],
        fontSizeHeading4: n[3],
        fontSizeHeading5: n[2],
        lineHeight: r[1],
        lineHeightLG: r[2],
        lineHeightSM: r[0],
        lineHeightHeading1: r[6],
        lineHeightHeading2: r[5],
        lineHeightHeading3: r[4],
        lineHeightHeading4: r[3],
        lineHeightHeading5: r[2],
      };
    },
    Ax = Mx;
  function Ix(e) {
    const t = Object.keys(um)
      .map((n) => {
        const r = zo(e[n]);
        return new Array(10).fill(1).reduce((o, i, a) => ((o[`${n}-${a + 1}`] = r[a]), o), {});
      })
      .reduce((n, r) => ((n = E(E({}, n), r)), n), {});
    return E(
      E(
        E(
          E(E(E(E({}, e), t), $x(e, { generateColorPalettes: Ex, generateNeutralColorPalettes: Px })), Ax(e.fontSize)),
          Cx(e),
        ),
        _x(e),
      ),
      Ox(e),
    );
  }
  function fs(e) {
    return e >= 0 && e <= 255;
  }
  function pi(e, t) {
    const { r: n, g: r, b: o, a: i } = new et(e).toRgb();
    if (i < 1) return e;
    const { r: a, g: s, b: l } = new et(t).toRgb();
    for (let c = 0.01; c <= 1; c += 0.01) {
      const u = Math.round((n - a * (1 - c)) / c),
        f = Math.round((r - s * (1 - c)) / c),
        d = Math.round((o - l * (1 - c)) / c);
      if (fs(u) && fs(f) && fs(d)) return new et({ r: u, g: f, b: d, a: Math.round(c * 100) / 100 }).toRgbString();
    }
    return new et({ r: n, g: r, b: o, a: 1 }).toRgbString();
  }
  var Rx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function Lx(e) {
    const { override: t } = e,
      n = Rx(e, ['override']),
      r = E({}, t);
    Object.keys(Ql).forEach((p) => {
      delete r[p];
    });
    const o = E(E({}, n), r),
      i = 480,
      a = 576,
      s = 768,
      l = 992,
      c = 1200,
      u = 1600,
      f = 2e3;
    return E(
      E(E({}, o), {
        colorLink: o.colorInfoText,
        colorLinkHover: o.colorInfoHover,
        colorLinkActive: o.colorInfoActive,
        colorFillContent: o.colorFillSecondary,
        colorFillContentHover: o.colorFill,
        colorFillAlter: o.colorFillQuaternary,
        colorBgContainerDisabled: o.colorFillTertiary,
        colorBorderBg: o.colorBgContainer,
        colorSplit: pi(o.colorBorderSecondary, o.colorBgContainer),
        colorTextPlaceholder: o.colorTextQuaternary,
        colorTextDisabled: o.colorTextQuaternary,
        colorTextHeading: o.colorText,
        colorTextLabel: o.colorTextSecondary,
        colorTextDescription: o.colorTextTertiary,
        colorTextLightSolid: o.colorWhite,
        colorHighlight: o.colorError,
        colorBgTextHover: o.colorFillSecondary,
        colorBgTextActive: o.colorFill,
        colorIcon: o.colorTextTertiary,
        colorIconHover: o.colorText,
        colorErrorOutline: pi(o.colorErrorBg, o.colorBgContainer),
        colorWarningOutline: pi(o.colorWarningBg, o.colorBgContainer),
        fontSizeIcon: o.fontSizeSM,
        lineWidth: o.lineWidth,
        controlOutlineWidth: o.lineWidth * 2,
        controlInteractiveSize: o.controlHeight / 2,
        controlItemBgHover: o.colorFillTertiary,
        controlItemBgActive: o.colorPrimaryBg,
        controlItemBgActiveHover: o.colorPrimaryBgHover,
        controlItemBgActiveDisabled: o.colorFill,
        controlTmpOutline: o.colorFillQuaternary,
        controlOutline: pi(o.colorPrimaryBg, o.colorBgContainer),
        lineType: o.lineType,
        borderRadius: o.borderRadius,
        borderRadiusXS: o.borderRadiusXS,
        borderRadiusSM: o.borderRadiusSM,
        borderRadiusLG: o.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: o.sizeXXS,
        paddingXS: o.sizeXS,
        paddingSM: o.sizeSM,
        padding: o.size,
        paddingMD: o.sizeMD,
        paddingLG: o.sizeLG,
        paddingXL: o.sizeXL,
        paddingContentHorizontalLG: o.sizeLG,
        paddingContentVerticalLG: o.sizeMS,
        paddingContentHorizontal: o.sizeMS,
        paddingContentVertical: o.sizeSM,
        paddingContentHorizontalSM: o.size,
        paddingContentVerticalSM: o.sizeXS,
        marginXXS: o.sizeXXS,
        marginXS: o.sizeXS,
        marginSM: o.sizeSM,
        margin: o.size,
        marginMD: o.sizeMD,
        marginLG: o.sizeLG,
        marginXL: o.sizeXL,
        marginXXL: o.sizeXXL,
        boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS: i,
        screenXSMin: i,
        screenXSMax: a - 1,
        screenSM: a,
        screenSMMin: a,
        screenSMMax: s - 1,
        screenMD: s,
        screenMDMin: s,
        screenMDMax: l - 1,
        screenLG: l,
        screenLGMin: l,
        screenLGMax: c - 1,
        screenXL: c,
        screenXLMin: c,
        screenXLMax: u - 1,
        screenXXL: u,
        screenXXLMin: u,
        screenXXLMax: f - 1,
        screenXXXL: f,
        screenXXXLMin: f,
        boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
        boxShadowCard: `
      0 1px 2px -2px ${new et('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new et('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new et('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
      }),
      r,
    );
  }
  const Dx = (e, t, n, r, o) => {
    const i = e / 2,
      a = 0,
      s = i,
      l = (n * 1) / Math.sqrt(2),
      c = i - n * (1 - 1 / Math.sqrt(2)),
      u = i - t * (1 / Math.sqrt(2)),
      f = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      d = 2 * i - u,
      p = f,
      h = 2 * i - l,
      m = c,
      y = 2 * i - a,
      b = s,
      _ = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      M = n * (Math.sqrt(2) - 1);
    return {
      'pointerEvents': 'none',
      'width': e,
      'height': e,
      'overflow': 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: _,
        height: _,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: o,
        zIndex: 0,
        background: 'transparent',
      },
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: r,
        clipPath: {
          _multi_value_: !0,
          value: [
            `polygon(${M}px 100%, 50% ${M}px, ${2 * i - M}px 100%, ${M}px 100%)`,
            `path('M ${a} ${s} A ${n} ${n} 0 0 0 ${l} ${c} L ${u} ${f} A ${t} ${t} 0 0 1 ${d} ${p} L ${h} ${m} A ${n} ${n} 0 0 0 ${y} ${b} Z')`,
          ],
        },
        content: '""',
      },
    };
  };
  function Nx(e, t) {
    return Xi.reduce((n, r) => {
      const o = e[`${r}-1`],
        i = e[`${r}-3`],
        a = e[`${r}-6`],
        s = e[`${r}-7`];
      return E(E({}, n), t(r, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: s }));
    }, {});
  }
  const fm = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
    Aa = (e) => ({
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: e.fontFamily,
    }),
    jx = () => ({
      'display': 'inline-flex',
      'alignItems': 'center',
      'color': 'inherit',
      'fontStyle': 'normal',
      'lineHeight': 0,
      'textAlign': 'center',
      'textTransform': 'none',
      'verticalAlign': '-0.125em',
      'textRendering': 'optimizeLegibility',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      '> *': { lineHeight: 1 },
      'svg': { display: 'inline-block' },
    }),
    cf = () => ({
      '&::before': { display: 'table', content: '""' },
      '&::after': { display: 'table', clear: 'both', content: '""' },
    }),
    Hx = (e) => ({
      a: {
        'color': e.colorLink,
        'textDecoration': e.linkDecoration,
        'backgroundColor': 'transparent',
        'outline': 'none',
        'cursor': 'pointer',
        'transition': `color ${e.motionDurationSlow}`,
        '-webkit-text-decoration-skip': 'objects',
        '&:hover': { color: e.colorLinkHover },
        '&:active': { color: e.colorLinkActive },
        '&:active,\n  &:hover': { textDecoration: e.linkHoverDecoration, outline: 0 },
        '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
        '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
      },
    }),
    Bx = (e, t) => {
      const { fontFamily: n, fontSize: r } = e,
        o = `[class^="${t}"], [class*=" ${t}"]`;
      return {
        [o]: {
          'fontFamily': n,
          'fontSize': r,
          'boxSizing': 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
          [o]: { 'boxSizing': 'border-box', '&::before, &::after': { boxSizing: 'border-box' } },
        },
      };
    },
    dm = (e) => ({
      outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
      outlineOffset: 1,
      transition: 'outline-offset 0s, outline 0s',
    }),
    pm = (e) => ({ '&:focus-visible': E({}, dm(e)) });
  function Ia(e, t, n) {
    return (r) => {
      const o = P(() => (r == null ? void 0 : r.value)),
        [i, a, s] = Jl(),
        { getPrefixCls: l, iconPrefixCls: c } = G_(),
        u = P(() => l()),
        f = P(() => ({ theme: i.value, token: a.value, hashId: s.value, path: ['Shared', u.value] }));
      ef(f, () => [{ '&': Hx(a.value) }]);
      const d = P(() => ({ theme: i.value, token: a.value, hashId: s.value, path: [e, o.value, c.value] }));
      return [
        ef(d, () => {
          const { token: p, flush: h } = Fx(a.value),
            m = typeof n == 'function' ? n(p) : n,
            y = E(E({}, m), a.value[e]),
            b = `.${o.value}`,
            _ = or(p, { componentCls: b, prefixCls: o.value, iconCls: `.${c.value}`, antCls: `.${u.value}` }, y),
            M = t(_, {
              hashId: s.value,
              prefixCls: o.value,
              rootPrefixCls: u.value,
              iconPrefixCls: c.value,
              overrideComponentToken: a.value[e],
            });
          return h(e, y), [Bx(a.value, o.value), M];
        }),
        s,
      ];
    };
  }
  const hm = typeof CSSINJS_STATISTIC < 'u';
  let tl = !0;
  function or() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    if (!hm) return E({}, ...t);
    tl = !1;
    const r = {};
    return (
      t.forEach((o) => {
        Object.keys(o).forEach((a) => {
          Object.defineProperty(r, a, { configurable: !0, enumerable: !0, get: () => o[a] });
        });
      }),
      (tl = !0),
      r
    );
  }
  function zx() {}
  function Fx(e) {
    let t,
      n = e,
      r = zx;
    return (
      hm &&
        ((t = new Set()),
        (n = new Proxy(e, {
          get(o, i) {
            return tl && t.add(i), o[i];
          },
        })),
        (r = (o, i) => {
          Array.from(t);
        })),
      { token: n, keys: t, flush: r }
    );
  }
  const Wx = yC(Ix),
    Vx = { token: Ql, hashed: !0 },
    Kx = Symbol('DesignTokenContext'),
    Ux = te();
  function Jl() {
    const e = Ae(Kx, Ux.value || Vx),
      t = P(() => `${nx}-${e.hashed || ''}`),
      n = P(() => e.theme || Wx),
      r = EC(
        n,
        P(() => [Ql, e.token]),
        P(() => ({ salt: t.value, override: E({ override: e.token }, e.components), formatToken: Lx })),
      );
    return [n, P(() => r.value[0]), P(() => (e.hashed ? r.value[1] : ''))];
  }
  const mm = ce({
    compatConfig: { MODE: 3 },
    setup() {
      const [, e] = Jl(),
        t = P(() => (new et(e.value.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {}));
      return () =>
        v(
          'svg',
          { style: t.value, width: '184', height: '152', viewBox: '0 0 184 152', xmlns: 'http://www.w3.org/2000/svg' },
          [
            v('g', { 'fill': 'none', 'fill-rule': 'evenodd' }, [
              v('g', { transform: 'translate(24 31.67)' }, [
                v(
                  'ellipse',
                  {
                    'fill-opacity': '.8',
                    'fill': '#F5F5F7',
                    'cx': '67.797',
                    'cy': '106.89',
                    'rx': '67.797',
                    'ry': '12.668',
                  },
                  null,
                ),
                v(
                  'path',
                  {
                    d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                    fill: '#AEB8C2',
                  },
                  null,
                ),
                v(
                  'path',
                  {
                    d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                    fill: 'url(#linearGradient-1)',
                    transform: 'translate(13.56)',
                  },
                  null,
                ),
                v(
                  'path',
                  {
                    d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                    fill: '#F5F5F7',
                  },
                  null,
                ),
                v(
                  'path',
                  {
                    d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                    fill: '#DCE0E6',
                  },
                  null,
                ),
              ]),
              v(
                'path',
                {
                  d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                  fill: '#DCE0E6',
                },
                null,
              ),
              v('g', { transform: 'translate(149.65 15.383)', fill: '#FFF' }, [
                v('ellipse', { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' }, null),
                v('path', { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' }, null),
              ]),
            ]),
          ],
        );
    },
  });
  mm.PRESENTED_IMAGE_DEFAULT = !0;
  const Yx = mm,
    vm = ce({
      compatConfig: { MODE: 3 },
      setup() {
        const [, e] = Jl(),
          t = P(() => {
            const { colorFill: n, colorFillTertiary: r, colorFillQuaternary: o, colorBgContainer: i } = e.value;
            return {
              borderColor: new et(n).onBackground(i).toHexString(),
              shadowColor: new et(r).onBackground(i).toHexString(),
              contentColor: new et(o).onBackground(i).toHexString(),
            };
          });
        return () =>
          v('svg', { width: '64', height: '41', viewBox: '0 0 64 41', xmlns: 'http://www.w3.org/2000/svg' }, [
            v('g', { 'transform': 'translate(0 1)', 'fill': 'none', 'fill-rule': 'evenodd' }, [
              v('ellipse', { fill: t.value.shadowColor, cx: '32', cy: '33', rx: '32', ry: '7' }, null),
              v('g', { 'fill-rule': 'nonzero', 'stroke': t.value.borderColor }, [
                v(
                  'path',
                  {
                    d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                  },
                  null,
                ),
                v(
                  'path',
                  {
                    d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                    fill: t.value.contentColor,
                  },
                  null,
                ),
              ]),
            ]),
          ]);
      },
    });
  vm.PRESENTED_IMAGE_SIMPLE = !0;
  const Xx = vm,
    Gx = (e) => {
      const { componentCls: t, margin: n, marginXS: r, marginXL: o, fontSize: i, lineHeight: a } = e;
      return {
        [t]: {
          'marginInline': r,
          'fontSize': i,
          'lineHeight': a,
          'textAlign': 'center',
          [`${t}-image`]: {
            height: e.emptyImgHeight,
            marginBottom: r,
            opacity: e.opacityImage,
            img: { height: '100%' },
            svg: { height: '100%', margin: 'auto' },
          },
          [`${t}-footer`]: { marginTop: n },
          '&-normal': { marginBlock: o, color: e.colorTextDisabled, [`${t}-image`]: { height: e.emptyImgHeightMD } },
          '&-small': { marginBlock: r, color: e.colorTextDisabled, [`${t}-image`]: { height: e.emptyImgHeightSM } },
        },
      };
    },
    qx = Ia('Empty', (e) => {
      const { componentCls: t, controlHeightLG: n } = e,
        r = or(e, {
          emptyImgCls: `${t}-img`,
          emptyImgHeight: n * 2.5,
          emptyImgHeightMD: n,
          emptyImgHeightSM: n * 0.875,
        });
      return [Gx(r)];
    });
  var Zx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const gm = v(Yx, null, null),
    ym = v(Xx, null, null),
    Qx = () => ({ prefixCls: String, imageStyle: lt(), image: Ks(), description: Ks() }),
    ec = ce({
      name: 'AEmpty',
      compatConfig: { MODE: 3 },
      inheritAttrs: !1,
      props: Qx(),
      setup(e, t) {
        let { slots: n = {}, attrs: r } = t;
        const { direction: o, prefixCls: i } = Zo('empty', e),
          [a, s] = qx(i);
        return () => {
          var l, c;
          const u = i.value,
            f = E(E({}, e), r),
            {
              image: d = ((l = n.image) === null || l === void 0 ? void 0 : l.call(n)) || gm,
              description: p = ((c = n.description) === null || c === void 0 ? void 0 : c.call(n)) || void 0,
              imageStyle: h,
              class: m = '',
            } = f,
            y = Zx(f, ['image', 'description', 'imageStyle', 'class']);
          return a(
            v(
              oC,
              {
                componentName: 'Empty',
                children: (b) => {
                  const _ = typeof p < 'u' ? p : b.description,
                    M = typeof _ == 'string' ? _ : 'empty';
                  let R = null;
                  return (
                    typeof d == 'string' ? (R = v('img', { alt: M, src: d }, null)) : (R = d),
                    v(
                      'div',
                      de(
                        { class: je(u, m, s.value, { [`${u}-normal`]: d === ym, [`${u}-rtl`]: o.value === 'rtl' }) },
                        y,
                      ),
                      [
                        v('div', { class: `${u}-image`, style: h }, [R]),
                        _ && v('p', { class: `${u}-description` }, [_]),
                        n.default && v('div', { class: `${u}-footer` }, [qo(n.default())]),
                      ],
                    )
                  );
                },
              },
              null,
            ),
          );
        };
      },
    });
  ec.PRESENTED_IMAGE_DEFAULT = gm;
  ec.PRESENTED_IMAGE_SIMPLE = ym;
  const ro = Xl(ec),
    Jx = (e) => {
      const { prefixCls: t } = Zo('empty', e);
      return ((r) => {
        switch (r) {
          case 'Table':
          case 'List':
            return v(ro, { image: ro.PRESENTED_IMAGE_SIMPLE }, null);
          case 'Select':
          case 'TreeSelect':
          case 'Cascader':
          case 'Transfer':
          case 'Mentions':
            return v(ro, { image: ro.PRESENTED_IMAGE_SIMPLE, class: `${t.value}-small` }, null);
          default:
            return v(ro, null, null);
        }
      })(e.componentName);
    },
    e$ = Symbol('SizeContextKey'),
    t$ = () => Ae(e$, te(void 0)),
    Zo = (e, t) => {
      const n = t$(),
        r = Z_(),
        o = Ae(Bh, E(E({}, zh), { renderEmpty: (C) => Ar(Jx, { componentName: C }) })),
        i = P(() => o.getPrefixCls(e, t.prefixCls)),
        a = P(() => {
          var C, T;
          return (C = t.direction) !== null && C !== void 0
            ? C
            : (T = o.direction) === null || T === void 0
            ? void 0
            : T.value;
        }),
        s = P(() => {
          var C;
          return (C = t.iconPrefixCls) !== null && C !== void 0 ? C : o.iconPrefixCls.value;
        }),
        l = P(() => o.getPrefixCls()),
        c = P(() => {
          var C;
          return (C = o.autoInsertSpaceInButton) === null || C === void 0 ? void 0 : C.value;
        }),
        u = o.renderEmpty,
        f = o.space,
        d = o.pageHeader,
        p = o.form,
        h = P(() => {
          var C, T;
          return (C = t.getTargetContainer) !== null && C !== void 0
            ? C
            : (T = o.getTargetContainer) === null || T === void 0
            ? void 0
            : T.value;
        }),
        m = P(() => {
          var C, T;
          return (C = t.getPopupContainer) !== null && C !== void 0
            ? C
            : (T = o.getPopupContainer) === null || T === void 0
            ? void 0
            : T.value;
        }),
        y = P(() => {
          var C, T;
          return (C = t.dropdownMatchSelectWidth) !== null && C !== void 0
            ? C
            : (T = o.dropdownMatchSelectWidth) === null || T === void 0
            ? void 0
            : T.value;
        }),
        b = P(() => {
          var C;
          return (
            (t.virtual === void 0
              ? ((C = o.virtual) === null || C === void 0 ? void 0 : C.value) !== !1
              : t.virtual !== !1) && y.value !== !1
          );
        }),
        _ = P(() => t.size || n.value),
        M = P(() => {
          var C, T, $;
          return (C = t.autocomplete) !== null && C !== void 0
            ? C
            : ($ = (T = o.input) === null || T === void 0 ? void 0 : T.value) === null || $ === void 0
            ? void 0
            : $.autocomplete;
        }),
        R = P(() => {
          var C;
          return (C = t.disabled) !== null && C !== void 0 ? C : r.value;
        }),
        x = P(() => {
          var C;
          return (C = t.csp) !== null && C !== void 0 ? C : o.csp;
        });
      return {
        configProvider: o,
        prefixCls: i,
        direction: a,
        size: _,
        getTargetContainer: h,
        getPopupContainer: m,
        space: f,
        pageHeader: d,
        form: p,
        autoInsertSpaceInButton: c,
        renderEmpty: u,
        virtual: b,
        dropdownMatchSelectWidth: y,
        rootPrefixCls: l,
        getPrefixCls: o.getPrefixCls,
        autocomplete: M,
        csp: x,
        iconPrefixCls: s,
        disabled: R,
        select: o.select,
      };
    };
  function n$(e, t) {
    const n = E({}, e);
    for (let r = 0; r < t.length; r += 1) {
      const o = t[r];
      delete n[o];
    }
    return n;
  }
  function uf(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function bm(e, t, n) {
    return t && uf(e.prototype, t), n && uf(e, n), e;
  }
  function Oi() {
    return (Oi =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  function wm(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
  }
  function _m(e, t) {
    if (e == null) return {};
    var n,
      r,
      o = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
    return o;
  }
  function ff(e) {
    return (
      ((t = e) != null && typeof t == 'object' && Array.isArray(t) === !1) == 1 &&
      Object.prototype.toString.call(e) === '[object Object]'
    );
    var t;
  }
  var Cm = Object.prototype,
    xm = Cm.toString,
    r$ = Cm.hasOwnProperty,
    $m = /^\s*function (\w+)/;
  function df(e) {
    var t,
      n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
    if (n) {
      var r = n.toString().match($m);
      return r ? r[1] : '';
    }
    return '';
  }
  var ir = function (e) {
      var t, n;
      return (
        ff(e) !== !1 &&
        typeof (t = e.constructor) == 'function' &&
        ff((n = t.prototype)) !== !1 &&
        n.hasOwnProperty('isPrototypeOf') !== !1
      );
    },
    o$ = function (e) {
      return e;
    },
    ot = o$,
    Fo = function (e, t) {
      return r$.call(e, t);
    },
    i$ =
      Number.isInteger ||
      function (e) {
        return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
      },
    jr =
      Array.isArray ||
      function (e) {
        return xm.call(e) === '[object Array]';
      },
    Hr = function (e) {
      return xm.call(e) === '[object Function]';
    },
    Gi = function (e) {
      return ir(e) && Fo(e, '_vueTypes_name');
    },
    Sm = function (e) {
      return (
        ir(e) &&
        (Fo(e, 'type') ||
          ['_vueTypes_name', 'validator', 'default', 'required'].some(function (t) {
            return Fo(e, t);
          }))
      );
    };
  function tc(e, t) {
    return Object.defineProperty(e.bind(t), '__original', { value: e });
  }
  function cr(e, t, n) {
    var r;
    n === void 0 && (n = !1);
    var o = !0,
      i = '';
    r = ir(e) ? e : { type: e };
    var a = Gi(r) ? r._vueTypes_name + ' - ' : '';
    if (Sm(r) && r.type !== null) {
      if (r.type === void 0 || r.type === !0 || (!r.required && t === void 0)) return o;
      jr(r.type)
        ? ((o = r.type.some(function (f) {
            return cr(f, t, !0) === !0;
          })),
          (i = r.type
            .map(function (f) {
              return df(f);
            })
            .join(' or ')))
        : (o =
            (i = df(r)) === 'Array'
              ? jr(t)
              : i === 'Object'
              ? ir(t)
              : i === 'String' || i === 'Number' || i === 'Boolean' || i === 'Function'
              ? (function (f) {
                  if (f == null) return '';
                  var d = f.constructor.toString().match($m);
                  return d ? d[1] : '';
                })(t) === i
              : t instanceof r.type);
    }
    if (!o) {
      var s = a + 'value "' + t + '" should be of type "' + i + '"';
      return n === !1 ? (ot(s), !1) : s;
    }
    if (Fo(r, 'validator') && Hr(r.validator)) {
      var l = ot,
        c = [];
      if (
        ((ot = function (f) {
          c.push(f);
        }),
        (o = r.validator(t)),
        (ot = l),
        !o)
      ) {
        var u =
          (c.length > 1 ? '* ' : '') +
          c.join(`
* `);
        return (c.length = 0), n === !1 ? (ot(u), o) : u;
      }
    }
    return o;
  }
  function yt(e, t) {
    var n = Object.defineProperties(t, {
        _vueTypes_name: { value: e, writable: !0 },
        isRequired: {
          get: function () {
            return (this.required = !0), this;
          },
        },
        def: {
          value: function (o) {
            return o !== void 0 || this.default
              ? Hr(o) || cr(this, o, !0) === !0
                ? ((this.default = jr(o)
                    ? function () {
                        return [].concat(o);
                      }
                    : ir(o)
                    ? function () {
                        return Object.assign({}, o);
                      }
                    : o),
                  this)
                : (ot(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this)
              : this;
          },
        },
      }),
      r = n.validator;
    return Hr(r) && (n.validator = tc(r, n)), n;
  }
  function Yt(e, t) {
    var n = yt(e, t);
    return Object.defineProperty(n, 'validate', {
      value: function (r) {
        return (
          Hr(this.validator) &&
            ot(
              this._vueTypes_name +
                ` - calling .validate() will overwrite the current custom validator function. Validator info:
` +
                JSON.stringify(this),
            ),
          (this.validator = tc(r, this)),
          this
        );
      },
    });
  }
  function pf(e, t, n) {
    var r,
      o,
      i =
        ((r = t),
        (o = {}),
        Object.getOwnPropertyNames(r).forEach(function (f) {
          o[f] = Object.getOwnPropertyDescriptor(r, f);
        }),
        Object.defineProperties({}, o));
    if (((i._vueTypes_name = e), !ir(n))) return i;
    var a,
      s,
      l = n.validator,
      c = _m(n, ['validator']);
    if (Hr(l)) {
      var u = i.validator;
      u && (u = (s = (a = u).__original) !== null && s !== void 0 ? s : a),
        (i.validator = tc(
          u
            ? function (f) {
                return u.call(this, f) && l.call(this, f);
              }
            : l,
          i,
        ));
    }
    return Object.assign(i, c);
  }
  function Ra(e) {
    return e.replace(/^(?!\s*$)/gm, '  ');
  }
  var a$ = function () {
      return Yt('any', {});
    },
    s$ = function () {
      return Yt('function', { type: Function });
    },
    l$ = function () {
      return Yt('boolean', { type: Boolean });
    },
    c$ = function () {
      return Yt('string', { type: String });
    },
    u$ = function () {
      return Yt('number', { type: Number });
    },
    f$ = function () {
      return Yt('array', { type: Array });
    },
    d$ = function () {
      return Yt('object', { type: Object });
    },
    p$ = function () {
      return yt('integer', {
        type: Number,
        validator: function (e) {
          return i$(e);
        },
      });
    },
    h$ = function () {
      return yt('symbol', {
        validator: function (e) {
          return typeof e == 'symbol';
        },
      });
    };
  function m$(e, t) {
    if ((t === void 0 && (t = 'custom validation failed'), typeof e != 'function'))
      throw new TypeError('[VueTypes error]: You must provide a function as argument');
    return yt(e.name || '<<anonymous function>>', {
      validator: function (n) {
        var r = e(n);
        return r || ot(this._vueTypes_name + ' - ' + t), r;
      },
    });
  }
  function v$(e) {
    if (!jr(e)) throw new TypeError('[VueTypes error]: You must provide an array as argument.');
    var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
      n = e.reduce(function (r, o) {
        if (o != null) {
          var i = o.constructor;
          r.indexOf(i) === -1 && r.push(i);
        }
        return r;
      }, []);
    return yt('oneOf', {
      type: n.length > 0 ? n : void 0,
      validator: function (r) {
        var o = e.indexOf(r) !== -1;
        return o || ot(t), o;
      },
    });
  }
  function g$(e) {
    if (!jr(e)) throw new TypeError('[VueTypes error]: You must provide an array as argument');
    for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
      var o = e[r];
      if (Sm(o)) {
        if (Gi(o) && o._vueTypes_name === 'oneOf') {
          n = n.concat(o.type);
          continue;
        }
        if ((Hr(o.validator) && (t = !0), o.type !== !0 && o.type)) {
          n = n.concat(o.type);
          continue;
        }
      }
      n.push(o);
    }
    return (
      (n = n.filter(function (i, a) {
        return n.indexOf(i) === a;
      })),
      yt(
        'oneOfType',
        t
          ? {
              type: n,
              validator: function (i) {
                var a = [],
                  s = e.some(function (l) {
                    var c = cr(Gi(l) && l._vueTypes_name === 'oneOf' ? l.type || null : l, i, !0);
                    return typeof c == 'string' && a.push(c), c === !0;
                  });
                return (
                  s ||
                    ot(
                      'oneOfType - provided value does not match any of the ' +
                        a.length +
                        ` passed-in validators:
` +
                        Ra(
                          a.join(`
`),
                        ),
                    ),
                  s
                );
              },
            }
          : { type: n },
      )
    );
  }
  function y$(e) {
    return yt('arrayOf', {
      type: Array,
      validator: function (t) {
        var n,
          r = t.every(function (o) {
            return (n = cr(e, o, !0)) === !0;
          });
        return (
          r ||
            ot(
              `arrayOf - value validation error:
` + Ra(n),
            ),
          r
        );
      },
    });
  }
  function b$(e) {
    return yt('instanceOf', { type: e });
  }
  function w$(e) {
    return yt('objectOf', {
      type: Object,
      validator: function (t) {
        var n,
          r = Object.keys(t).every(function (o) {
            return (n = cr(e, t[o], !0)) === !0;
          });
        return (
          r ||
            ot(
              `objectOf - value validation error:
` + Ra(n),
            ),
          r
        );
      },
    });
  }
  function _$(e) {
    var t = Object.keys(e),
      n = t.filter(function (o) {
        var i;
        return !!(!((i = e[o]) === null || i === void 0) && i.required);
      }),
      r = yt('shape', {
        type: Object,
        validator: function (o) {
          var i = this;
          if (!ir(o)) return !1;
          var a = Object.keys(o);
          if (
            n.length > 0 &&
            n.some(function (l) {
              return a.indexOf(l) === -1;
            })
          ) {
            var s = n.filter(function (l) {
              return a.indexOf(l) === -1;
            });
            return (
              ot(
                s.length === 1
                  ? 'shape - required property "' + s[0] + '" is not defined.'
                  : 'shape - required properties "' + s.join('", "') + '" are not defined.',
              ),
              !1
            );
          }
          return a.every(function (l) {
            if (t.indexOf(l) === -1)
              return (
                i._vueTypes_isLoose === !0 ||
                (ot(
                  'shape - shape definition does not include a "' +
                    l +
                    '" property. Allowed keys: "' +
                    t.join('", "') +
                    '".',
                ),
                !1)
              );
            var c = cr(e[l], o[l], !0);
            return (
              typeof c == 'string' &&
                ot(
                  'shape - "' +
                    l +
                    `" property validation error:
 ` +
                    Ra(c),
                ),
              c === !0
            );
          });
        },
      });
    return (
      Object.defineProperty(r, '_vueTypes_isLoose', { writable: !0, value: !1 }),
      Object.defineProperty(r, 'loose', {
        get: function () {
          return (this._vueTypes_isLoose = !0), this;
        },
      }),
      r
    );
  }
  var Bt = (function () {
    function e() {}
    return (
      (e.extend = function (t) {
        var n = this;
        if (jr(t))
          return (
            t.forEach(function (f) {
              return n.extend(f);
            }),
            this
          );
        var r = t.name,
          o = t.validate,
          i = o !== void 0 && o,
          a = t.getter,
          s = a !== void 0 && a,
          l = _m(t, ['name', 'validate', 'getter']);
        if (Fo(this, r)) throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
        var c,
          u = l.type;
        return Gi(u)
          ? (delete l.type,
            Object.defineProperty(
              this,
              r,
              s
                ? {
                    get: function () {
                      return pf(r, u, l);
                    },
                  }
                : {
                    value: function () {
                      var f,
                        d = pf(r, u, l);
                      return (
                        d.validator &&
                          (d.validator = (f = d.validator).bind.apply(f, [d].concat([].slice.call(arguments)))),
                        d
                      );
                    },
                  },
            ))
          : ((c = s
              ? {
                  get: function () {
                    var f = Object.assign({}, l);
                    return i ? Yt(r, f) : yt(r, f);
                  },
                  enumerable: !0,
                }
              : {
                  value: function () {
                    var f,
                      d,
                      p = Object.assign({}, l);
                    return (
                      (f = i ? Yt(r, p) : yt(r, p)),
                      p.validator &&
                        (f.validator = (d = p.validator).bind.apply(d, [f].concat([].slice.call(arguments)))),
                      f
                    );
                  },
                  enumerable: !0,
                }),
            Object.defineProperty(this, r, c));
      }),
      bm(e, null, [
        {
          key: 'any',
          get: function () {
            return a$();
          },
        },
        {
          key: 'func',
          get: function () {
            return s$().def(this.defaults.func);
          },
        },
        {
          key: 'bool',
          get: function () {
            return l$().def(this.defaults.bool);
          },
        },
        {
          key: 'string',
          get: function () {
            return c$().def(this.defaults.string);
          },
        },
        {
          key: 'number',
          get: function () {
            return u$().def(this.defaults.number);
          },
        },
        {
          key: 'array',
          get: function () {
            return f$().def(this.defaults.array);
          },
        },
        {
          key: 'object',
          get: function () {
            return d$().def(this.defaults.object);
          },
        },
        {
          key: 'integer',
          get: function () {
            return p$().def(this.defaults.integer);
          },
        },
        {
          key: 'symbol',
          get: function () {
            return h$();
          },
        },
      ]),
      e
    );
  })();
  function Tm(e) {
    var t;
    return (
      e === void 0 &&
        (e = {
          func: function () {},
          bool: !0,
          string: '',
          number: 0,
          array: function () {
            return [];
          },
          object: function () {
            return {};
          },
          integer: 0,
        }),
      ((t = (function (n) {
        function r() {
          return n.apply(this, arguments) || this;
        }
        return (
          wm(r, n),
          bm(r, null, [
            {
              key: 'sensibleDefaults',
              get: function () {
                return Oi({}, this.defaults);
              },
              set: function (o) {
                this.defaults = o !== !1 ? Oi({}, o !== !0 ? o : e) : {};
              },
            },
          ]),
          r
        );
      })(Bt)).defaults = Oi({}, e)),
      t
    );
  }
  (Bt.defaults = {}),
    (Bt.custom = m$),
    (Bt.oneOf = v$),
    (Bt.instanceOf = b$),
    (Bt.oneOfType = g$),
    (Bt.arrayOf = y$),
    (Bt.objectOf = w$),
    (Bt.shape = _$),
    (Bt.utils = {
      validate: function (e, t) {
        return cr(t, e, !0) === !0;
      },
      toType: function (e, t, n) {
        return n === void 0 && (n = !1), n ? Yt(e, t) : yt(e, t);
      },
    });
  (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    return wm(t, e), t;
  })(Tm());
  const Om = Tm({
    func: void 0,
    bool: void 0,
    string: void 0,
    number: void 0,
    array: void 0,
    object: void 0,
    integer: void 0,
  });
  Om.extend([
    { name: 'looseBool', getter: !0, type: Boolean, default: void 0 },
    { name: 'style', getter: !0, type: [String, Object], default: void 0 },
    { name: 'VueNode', getter: !0, type: null },
  ]);
  const fe = Om,
    nr = (e, t, n) => {
      mC(e, `[ant-design-vue: ${t}] ${n}`);
    };
  function C$() {
    return '';
  }
  function x$(e) {
    return e ? e.ownerDocument : window.document;
  }
  function Em() {}
  const $$ = () => ({
      action: fe.oneOfType([fe.string, fe.arrayOf(fe.string)]).def([]),
      showAction: fe.any.def([]),
      hideAction: fe.any.def([]),
      getPopupClassNameFromAlign: fe.any.def(C$),
      onPopupVisibleChange: Function,
      afterPopupVisibleChange: fe.func.def(Em),
      popup: fe.any,
      popupStyle: { type: Object, default: void 0 },
      prefixCls: fe.string.def('rc-trigger-popup'),
      popupClassName: fe.string.def(''),
      popupPlacement: String,
      builtinPlacements: fe.object,
      popupTransitionName: String,
      popupAnimation: fe.any,
      mouseEnterDelay: fe.number.def(0),
      mouseLeaveDelay: fe.number.def(0.1),
      zIndex: Number,
      focusDelay: fe.number.def(0),
      blurDelay: fe.number.def(0.15),
      getPopupContainer: Function,
      getDocument: fe.func.def(x$),
      forceRender: { type: Boolean, default: void 0 },
      destroyPopupOnHide: { type: Boolean, default: !1 },
      mask: { type: Boolean, default: !1 },
      maskClosable: { type: Boolean, default: !0 },
      popupAlign: fe.object.def(() => ({})),
      popupVisible: { type: Boolean, default: void 0 },
      defaultPopupVisible: { type: Boolean, default: !1 },
      maskTransitionName: String,
      maskAnimation: String,
      stretch: String,
      alignPoint: { type: Boolean, default: void 0 },
      autoDestroy: { type: Boolean, default: !1 },
      mobile: Object,
      getTriggerDOMNode: Function,
    }),
    nc = {
      visible: Boolean,
      prefixCls: String,
      zIndex: Number,
      destroyPopupOnHide: Boolean,
      forceRender: Boolean,
      animation: [String, Object],
      transitionName: String,
      stretch: { type: String },
      align: { type: Object },
      point: { type: Object },
      getRootDomNode: { type: Function },
      getClassNameFromAlign: { type: Function },
      onMouseenter: { type: Function },
      onMouseleave: { type: Function },
      onMousedown: { type: Function },
      onTouchstart: { type: Function },
    },
    S$ = E(E({}, nc), { mobile: { type: Object } }),
    T$ = E(E({}, nc), { mask: Boolean, mobile: { type: Object }, maskAnimation: String, maskTransitionName: String });
  function Pm(e) {
    let { prefixCls: t, animation: n, transitionName: r } = e;
    return n ? { name: `${t}-${n}` } : r ? { name: r } : {};
  }
  function km(e) {
    const { prefixCls: t, visible: n, zIndex: r, mask: o, maskAnimation: i, maskTransitionName: a } = e;
    if (!o) return null;
    let s = {};
    return (
      (a || i) && (s = Pm({ prefixCls: t, transitionName: a, animation: i })),
      v(lr, de({ appear: !0 }, s), {
        default: () => [da(v('div', { style: { zIndex: r }, class: `${t}-mask` }, null), [[l0('if'), n]])],
      })
    );
  }
  km.displayName = 'Mask';
  const O$ = ce({
    compatConfig: { MODE: 3 },
    name: 'MobilePopupInner',
    inheritAttrs: !1,
    props: S$,
    emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
    setup(e, t) {
      let { expose: n, slots: r } = t;
      const o = te();
      return (
        n({ forceAlign: () => {}, getElement: () => o.value }),
        () => {
          var i;
          const {
              zIndex: a,
              visible: s,
              prefixCls: l,
              mobile: { popupClassName: c, popupStyle: u, popupMotion: f = {}, popupRender: d } = {},
            } = e,
            p = E({ zIndex: a }, u);
          let h = Lt((i = r.default) === null || i === void 0 ? void 0 : i.call(r));
          h.length > 1 && (h = v('div', { class: `${l}-content` }, [h])), d && (h = d(h));
          const m = je(l, c);
          return v(lr, de({ ref: o }, f), { default: () => [s ? v('div', { class: m, style: p }, [h]) : null] });
        }
      );
    },
  });
  var E$ =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, n, r) {
      function o(i) {
        return i instanceof n
          ? i
          : new n(function (a) {
              a(i);
            });
      }
      return new (n || (n = Promise))(function (i, a) {
        function s(u) {
          try {
            c(r.next(u));
          } catch (f) {
            a(f);
          }
        }
        function l(u) {
          try {
            c(r.throw(u));
          } catch (f) {
            a(f);
          }
        }
        function c(u) {
          u.done ? i(u.value) : o(u.value).then(s, l);
        }
        c((r = r.apply(e, t || [])).next());
      });
    };
  const hf = ['measure', 'align', null, 'motion'],
    P$ = (e, t) => {
      const n = le(null),
        r = le(),
        o = le(!1);
      function i(l) {
        o.value || (n.value = l);
      }
      function a() {
        Xe.cancel(r.value);
      }
      function s(l) {
        a(),
          (r.value = Xe(() => {
            let c = n.value;
            switch (n.value) {
              case 'align':
                c = 'motion';
                break;
              case 'motion':
                c = 'stable';
                break;
            }
            i(c), l == null || l();
          }));
      }
      return (
        _e(
          e,
          () => {
            i('measure');
          },
          { immediate: !0, flush: 'post' },
        ),
        ut(() => {
          _e(
            n,
            () => {
              switch (n.value) {
                case 'measure':
                  t();
                  break;
              }
              n.value &&
                (r.value = Xe(() =>
                  E$(void 0, void 0, void 0, function* () {
                    const l = hf.indexOf(n.value),
                      c = hf[l + 1];
                    c && l !== -1 && i(c);
                  }),
                ));
            },
            { immediate: !0, flush: 'post' },
          );
        }),
        St(() => {
          (o.value = !0), a();
        }),
        [n, s]
      );
    },
    k$ = (e) => {
      const t = le({ width: 0, height: 0 });
      function n(o) {
        t.value = { width: o.offsetWidth, height: o.offsetHeight };
      }
      return [
        P(() => {
          const o = {};
          if (e.value) {
            const { width: i, height: a } = t.value;
            e.value.indexOf('height') !== -1 && a
              ? (o.height = `${a}px`)
              : e.value.indexOf('minHeight') !== -1 && a && (o.minHeight = `${a}px`),
              e.value.indexOf('width') !== -1 && i
                ? (o.width = `${i}px`)
                : e.value.indexOf('minWidth') !== -1 && i && (o.minWidth = `${i}px`);
          }
          return o;
        }),
        n,
      ];
    };
  function mf(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function vf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? mf(Object(n), !0).forEach(function (r) {
            M$(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mf(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function nl(e) {
    '@babel/helpers - typeof';
    return (
      (nl =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      nl(e)
    );
  }
  function M$(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  var oo,
    A$ = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
  function qi() {
    if (oo !== void 0) return oo;
    oo = '';
    var e = document.createElement('p').style,
      t = 'Transform';
    for (var n in A$) n + t in e && (oo = n);
    return oo;
  }
  function Mm() {
    return qi() ? ''.concat(qi(), 'TransitionProperty') : 'transitionProperty';
  }
  function La() {
    return qi() ? ''.concat(qi(), 'Transform') : 'transform';
  }
  function gf(e, t) {
    var n = Mm();
    n && ((e.style[n] = t), n !== 'transitionProperty' && (e.style.transitionProperty = t));
  }
  function ds(e, t) {
    var n = La();
    n && ((e.style[n] = t), n !== 'transform' && (e.style.transform = t));
  }
  function I$(e) {
    return e.style.transitionProperty || e.style[Mm()];
  }
  function R$(e) {
    var t = window.getComputedStyle(e, null),
      n = t.getPropertyValue('transform') || t.getPropertyValue(La());
    if (n && n !== 'none') {
      var r = n.replace(/[^0-9\-.,]/g, '').split(',');
      return { x: parseFloat(r[12] || r[4], 0), y: parseFloat(r[13] || r[5], 0) };
    }
    return { x: 0, y: 0 };
  }
  var L$ = /matrix\((.*)\)/,
    D$ = /matrix3d\((.*)\)/;
  function N$(e, t) {
    var n = window.getComputedStyle(e, null),
      r = n.getPropertyValue('transform') || n.getPropertyValue(La());
    if (r && r !== 'none') {
      var o,
        i = r.match(L$);
      if (i)
        (i = i[1]),
          (o = i.split(',').map(function (s) {
            return parseFloat(s, 10);
          })),
          (o[4] = t.x),
          (o[5] = t.y),
          ds(e, 'matrix('.concat(o.join(','), ')'));
      else {
        var a = r.match(D$)[1];
        (o = a.split(',').map(function (s) {
          return parseFloat(s, 10);
        })),
          (o[12] = t.x),
          (o[13] = t.y),
          ds(e, 'matrix3d('.concat(o.join(','), ')'));
      }
    } else ds(e, 'translateX('.concat(t.x, 'px) translateY(').concat(t.y, 'px) translateZ(0)'));
  }
  var j$ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    Qo;
  function yf(e) {
    var t = e.style.display;
    (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
  }
  function Or(e, t, n) {
    var r = n;
    if (nl(t) === 'object') {
      for (var o in t) t.hasOwnProperty(o) && Or(e, o, t[o]);
      return;
    }
    if (typeof r < 'u') {
      typeof r == 'number' && (r = ''.concat(r, 'px')), (e.style[t] = r);
      return;
    }
    return Qo(e, t);
  }
  function H$(e) {
    var t,
      n,
      r,
      o = e.ownerDocument,
      i = o.body,
      a = o && o.documentElement;
    return (
      (t = e.getBoundingClientRect()),
      (n = Math.floor(t.left)),
      (r = Math.floor(t.top)),
      (n -= a.clientLeft || i.clientLeft || 0),
      (r -= a.clientTop || i.clientTop || 0),
      { left: n, top: r }
    );
  }
  function Am(e, t) {
    var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
      r = 'scroll'.concat(t ? 'Top' : 'Left');
    if (typeof n != 'number') {
      var o = e.document;
      (n = o.documentElement[r]), typeof n != 'number' && (n = o.body[r]);
    }
    return n;
  }
  function Im(e) {
    return Am(e);
  }
  function Rm(e) {
    return Am(e, !0);
  }
  function Wo(e) {
    var t = H$(e),
      n = e.ownerDocument,
      r = n.defaultView || n.parentWindow;
    return (t.left += Im(r)), (t.top += Rm(r)), t;
  }
  function rc(e) {
    return e != null && e == e.window;
  }
  function Lm(e) {
    return rc(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
  }
  function B$(e, t, n) {
    var r = n,
      o = '',
      i = Lm(e);
    return (r = r || i.defaultView.getComputedStyle(e, null)), r && (o = r.getPropertyValue(t) || r[t]), o;
  }
  var z$ = new RegExp('^('.concat(j$, ')(?!px)[a-z%]+$'), 'i'),
    F$ = /^(top|right|bottom|left)$/,
    ps = 'currentStyle',
    hs = 'runtimeStyle',
    jn = 'left',
    W$ = 'px';
  function V$(e, t) {
    var n = e[ps] && e[ps][t];
    if (z$.test(n) && !F$.test(t)) {
      var r = e.style,
        o = r[jn],
        i = e[hs][jn];
      (e[hs][jn] = e[ps][jn]),
        (r[jn] = t === 'fontSize' ? '1em' : n || 0),
        (n = r.pixelLeft + W$),
        (r[jn] = o),
        (e[hs][jn] = i);
    }
    return n === '' ? 'auto' : n;
  }
  typeof window < 'u' && (Qo = window.getComputedStyle ? B$ : V$);
  function hi(e, t) {
    return e === 'left' ? (t.useCssRight ? 'right' : e) : t.useCssBottom ? 'bottom' : e;
  }
  function bf(e) {
    if (e === 'left') return 'right';
    if (e === 'right') return 'left';
    if (e === 'top') return 'bottom';
    if (e === 'bottom') return 'top';
  }
  function wf(e, t, n) {
    Or(e, 'position') === 'static' && (e.style.position = 'relative');
    var r = -999,
      o = -999,
      i = hi('left', n),
      a = hi('top', n),
      s = bf(i),
      l = bf(a);
    i !== 'left' && (r = 999), a !== 'top' && (o = 999);
    var c = '',
      u = Wo(e);
    ('left' in t || 'top' in t) && ((c = I$(e) || ''), gf(e, 'none')),
      'left' in t && ((e.style[s] = ''), (e.style[i] = ''.concat(r, 'px'))),
      'top' in t && ((e.style[l] = ''), (e.style[a] = ''.concat(o, 'px'))),
      yf(e);
    var f = Wo(e),
      d = {};
    for (var p in t)
      if (t.hasOwnProperty(p)) {
        var h = hi(p, n),
          m = p === 'left' ? r : o,
          y = u[p] - f[p];
        h === p ? (d[h] = m + y) : (d[h] = m - y);
      }
    Or(e, d), yf(e), ('left' in t || 'top' in t) && gf(e, c);
    var b = {};
    for (var _ in t)
      if (t.hasOwnProperty(_)) {
        var M = hi(_, n),
          R = t[_] - u[_];
        _ === M ? (b[M] = d[M] + R) : (b[M] = d[M] - R);
      }
    Or(e, b);
  }
  function K$(e, t) {
    var n = Wo(e),
      r = R$(e),
      o = { x: r.x, y: r.y };
    'left' in t && (o.x = r.x + t.left - n.left), 'top' in t && (o.y = r.y + t.top - n.top), N$(e, o);
  }
  function U$(e, t, n) {
    if (n.ignoreShake) {
      var r = Wo(e),
        o = r.left.toFixed(0),
        i = r.top.toFixed(0),
        a = t.left.toFixed(0),
        s = t.top.toFixed(0);
      if (o === a && i === s) return;
    }
    n.useCssRight || n.useCssBottom
      ? wf(e, t, n)
      : n.useCssTransform && La() in document.body.style
      ? K$(e, t)
      : wf(e, t, n);
  }
  function oc(e, t) {
    for (var n = 0; n < e.length; n++) t(e[n]);
  }
  function Dm(e) {
    return Qo(e, 'boxSizing') === 'border-box';
  }
  var Y$ = ['margin', 'border', 'padding'],
    rl = -1,
    X$ = 2,
    ol = 1,
    G$ = 0;
  function q$(e, t, n) {
    var r = {},
      o = e.style,
      i;
    for (i in t) t.hasOwnProperty(i) && ((r[i] = o[i]), (o[i] = t[i]));
    n.call(e);
    for (i in t) t.hasOwnProperty(i) && (o[i] = r[i]);
  }
  function fo(e, t, n) {
    var r = 0,
      o,
      i,
      a;
    for (i = 0; i < t.length; i++)
      if (((o = t[i]), o))
        for (a = 0; a < n.length; a++) {
          var s = void 0;
          o === 'border' ? (s = ''.concat(o).concat(n[a], 'Width')) : (s = o + n[a]), (r += parseFloat(Qo(e, s)) || 0);
        }
    return r;
  }
  var Vt = {
    getParent: function (t) {
      var n = t;
      do n.nodeType === 11 && n.host ? (n = n.host) : (n = n.parentNode);
      while (n && n.nodeType !== 1 && n.nodeType !== 9);
      return n;
    },
  };
  oc(['Width', 'Height'], function (e) {
    (Vt['doc'.concat(e)] = function (t) {
      var n = t.document;
      return Math.max(n.documentElement['scroll'.concat(e)], n.body['scroll'.concat(e)], Vt['viewport'.concat(e)](n));
    }),
      (Vt['viewport'.concat(e)] = function (t) {
        var n = 'client'.concat(e),
          r = t.document,
          o = r.body,
          i = r.documentElement,
          a = i[n];
        return (r.compatMode === 'CSS1Compat' && a) || (o && o[n]) || a;
      });
  });
  function _f(e, t, n) {
    var r = n;
    if (rc(e)) return t === 'width' ? Vt.viewportWidth(e) : Vt.viewportHeight(e);
    if (e.nodeType === 9) return t === 'width' ? Vt.docWidth(e) : Vt.docHeight(e);
    var o = t === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
      i = Math.floor(t === 'width' ? e.getBoundingClientRect().width : e.getBoundingClientRect().height),
      a = Dm(e),
      s = 0;
    (i == null || i <= 0) &&
      ((i = void 0),
      (s = Qo(e, t)),
      (s == null || Number(s) < 0) && (s = e.style[t] || 0),
      (s = Math.floor(parseFloat(s)) || 0)),
      r === void 0 && (r = a ? ol : rl);
    var l = i !== void 0 || a,
      c = i || s;
    return r === rl
      ? l
        ? c - fo(e, ['border', 'padding'], o)
        : s
      : l
      ? r === ol
        ? c
        : c + (r === X$ ? -fo(e, ['border'], o) : fo(e, ['margin'], o))
      : s + fo(e, Y$.slice(r), o);
  }
  var Z$ = { position: 'absolute', visibility: 'hidden', display: 'block' };
  function Cf() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r,
      o = t[0];
    return (
      o.offsetWidth !== 0
        ? (r = _f.apply(void 0, t))
        : q$(o, Z$, function () {
            r = _f.apply(void 0, t);
          }),
      r
    );
  }
  oc(['width', 'height'], function (e) {
    var t = e.charAt(0).toUpperCase() + e.slice(1);
    Vt['outer'.concat(t)] = function (r, o) {
      return r && Cf(r, e, o ? G$ : ol);
    };
    var n = e === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
    Vt[e] = function (r, o) {
      var i = o;
      if (i !== void 0) {
        if (r) {
          var a = Dm(r);
          return a && (i += fo(r, ['padding', 'border'], n)), Or(r, e, i);
        }
        return;
      }
      return r && Cf(r, e, rl);
    };
  });
  function Nm(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
  }
  var we = {
    getWindow: function (t) {
      if (t && t.document && t.setTimeout) return t;
      var n = t.ownerDocument || t;
      return n.defaultView || n.parentWindow;
    },
    getDocument: Lm,
    offset: function (t, n, r) {
      if (typeof n < 'u') U$(t, n, r || {});
      else return Wo(t);
    },
    isWindow: rc,
    each: oc,
    css: Or,
    clone: function (t) {
      var n,
        r = {};
      for (n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
      var o = t.overflow;
      if (o) for (n in t) t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n]);
      return r;
    },
    mix: Nm,
    getWindowScrollLeft: function (t) {
      return Im(t);
    },
    getWindowScrollTop: function (t) {
      return Rm(t);
    },
    merge: function () {
      for (var t = {}, n = 0; n < arguments.length; n++)
        we.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
      return t;
    },
    viewportWidth: 0,
    viewportHeight: 0,
  };
  Nm(we, Vt);
  var ms = we.getParent;
  function il(e) {
    if (we.isWindow(e) || e.nodeType === 9) return null;
    var t = we.getDocument(e),
      n = t.body,
      r,
      o = we.css(e, 'position'),
      i = o === 'fixed' || o === 'absolute';
    if (!i) return e.nodeName.toLowerCase() === 'html' ? null : ms(e);
    for (r = ms(e); r && r !== n && r.nodeType !== 9; r = ms(r))
      if (((o = we.css(r, 'position')), o !== 'static')) return r;
    return null;
  }
  var xf = we.getParent;
  function Q$(e) {
    if (we.isWindow(e) || e.nodeType === 9) return !1;
    var t = we.getDocument(e),
      n = t.body,
      r = null;
    for (r = xf(e); r && r !== n && r !== t; r = xf(r)) {
      var o = we.css(r, 'position');
      if (o === 'fixed') return !0;
    }
    return !1;
  }
  function ic(e, t) {
    for (
      var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
        r = il(e),
        o = we.getDocument(e),
        i = o.defaultView || o.parentWindow,
        a = o.body,
        s = o.documentElement;
      r;

    ) {
      if (
        (navigator.userAgent.indexOf('MSIE') === -1 || r.clientWidth !== 0) &&
        r !== a &&
        r !== s &&
        we.css(r, 'overflow') !== 'visible'
      ) {
        var l = we.offset(r);
        (l.left += r.clientLeft),
          (l.top += r.clientTop),
          (n.top = Math.max(n.top, l.top)),
          (n.right = Math.min(n.right, l.left + r.clientWidth)),
          (n.bottom = Math.min(n.bottom, l.top + r.clientHeight)),
          (n.left = Math.max(n.left, l.left));
      } else if (r === a || r === s) break;
      r = il(r);
    }
    var c = null;
    if (!we.isWindow(e) && e.nodeType !== 9) {
      c = e.style.position;
      var u = we.css(e, 'position');
      u === 'absolute' && (e.style.position = 'fixed');
    }
    var f = we.getWindowScrollLeft(i),
      d = we.getWindowScrollTop(i),
      p = we.viewportWidth(i),
      h = we.viewportHeight(i),
      m = s.scrollWidth,
      y = s.scrollHeight,
      b = window.getComputedStyle(a);
    if (
      (b.overflowX === 'hidden' && (m = i.innerWidth),
      b.overflowY === 'hidden' && (y = i.innerHeight),
      e.style && (e.style.position = c),
      t || Q$(e))
    )
      (n.left = Math.max(n.left, f)),
        (n.top = Math.max(n.top, d)),
        (n.right = Math.min(n.right, f + p)),
        (n.bottom = Math.min(n.bottom, d + h));
    else {
      var _ = Math.max(m, f + p);
      n.right = Math.min(n.right, _);
      var M = Math.max(y, d + h);
      n.bottom = Math.min(n.bottom, M);
    }
    return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
  }
  function J$(e, t, n, r) {
    var o = we.clone(e),
      i = { width: t.width, height: t.height };
    return (
      r.adjustX && o.left < n.left && (o.left = n.left),
      r.resizeWidth && o.left >= n.left && o.left + i.width > n.right && (i.width -= o.left + i.width - n.right),
      r.adjustX && o.left + i.width > n.right && (o.left = Math.max(n.right - i.width, n.left)),
      r.adjustY && o.top < n.top && (o.top = n.top),
      r.resizeHeight && o.top >= n.top && o.top + i.height > n.bottom && (i.height -= o.top + i.height - n.bottom),
      r.adjustY && o.top + i.height > n.bottom && (o.top = Math.max(n.bottom - i.height, n.top)),
      we.mix(o, i)
    );
  }
  function ac(e) {
    var t, n, r;
    if (!we.isWindow(e) && e.nodeType !== 9) (t = we.offset(e)), (n = we.outerWidth(e)), (r = we.outerHeight(e));
    else {
      var o = we.getWindow(e);
      (t = { left: we.getWindowScrollLeft(o), top: we.getWindowScrollTop(o) }),
        (n = we.viewportWidth(o)),
        (r = we.viewportHeight(o));
    }
    return (t.width = n), (t.height = r), t;
  }
  function $f(e, t) {
    var n = t.charAt(0),
      r = t.charAt(1),
      o = e.width,
      i = e.height,
      a = e.left,
      s = e.top;
    return (
      n === 'c' ? (s += i / 2) : n === 'b' && (s += i),
      r === 'c' ? (a += o / 2) : r === 'r' && (a += o),
      { left: a, top: s }
    );
  }
  function mi(e, t, n, r, o) {
    var i = $f(t, n[1]),
      a = $f(e, n[0]),
      s = [a.left - i.left, a.top - i.top];
    return { left: Math.round(e.left - s[0] + r[0] - o[0]), top: Math.round(e.top - s[1] + r[1] - o[1]) };
  }
  function Sf(e, t, n) {
    return e.left < n.left || e.left + t.width > n.right;
  }
  function Tf(e, t, n) {
    return e.top < n.top || e.top + t.height > n.bottom;
  }
  function eS(e, t, n) {
    return e.left > n.right || e.left + t.width < n.left;
  }
  function tS(e, t, n) {
    return e.top > n.bottom || e.top + t.height < n.top;
  }
  function vi(e, t, n) {
    var r = [];
    return (
      we.each(e, function (o) {
        r.push(
          o.replace(t, function (i) {
            return n[i];
          }),
        );
      }),
      r
    );
  }
  function gi(e, t) {
    return (e[t] = -e[t]), e;
  }
  function Of(e, t) {
    var n;
    return /%$/.test(e) ? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t) : (n = parseInt(e, 10)), n || 0;
  }
  function Ef(e, t) {
    (e[0] = Of(e[0], t.width)), (e[1] = Of(e[1], t.height));
  }
  function jm(e, t, n, r) {
    var o = n.points,
      i = n.offset || [0, 0],
      a = n.targetOffset || [0, 0],
      s = n.overflow,
      l = n.source || e;
    (i = [].concat(i)), (a = [].concat(a)), (s = s || {});
    var c = {},
      u = 0,
      f = !!(s && s.alwaysByViewport),
      d = ic(l, f),
      p = ac(l);
    Ef(i, p), Ef(a, t);
    var h = mi(p, t, o, i, a),
      m = we.merge(p, h);
    if (d && (s.adjustX || s.adjustY) && r) {
      if (s.adjustX && Sf(h, p, d)) {
        var y = vi(o, /[lr]/gi, { l: 'r', r: 'l' }),
          b = gi(i, 0),
          _ = gi(a, 0),
          M = mi(p, t, y, b, _);
        eS(M, p, d) || ((u = 1), (o = y), (i = b), (a = _));
      }
      if (s.adjustY && Tf(h, p, d)) {
        var R = vi(o, /[tb]/gi, { t: 'b', b: 't' }),
          x = gi(i, 1),
          C = gi(a, 1),
          T = mi(p, t, R, x, C);
        tS(T, p, d) || ((u = 1), (o = R), (i = x), (a = C));
      }
      u && ((h = mi(p, t, o, i, a)), we.mix(m, h));
      var $ = Sf(h, p, d),
        L = Tf(h, p, d);
      if ($ || L) {
        var S = o;
        $ && (S = vi(o, /[lr]/gi, { l: 'r', r: 'l' })),
          L && (S = vi(o, /[tb]/gi, { t: 'b', b: 't' })),
          (o = S),
          (i = n.offset || [0, 0]),
          (a = n.targetOffset || [0, 0]);
      }
      (c.adjustX = s.adjustX && $), (c.adjustY = s.adjustY && L), (c.adjustX || c.adjustY) && (m = J$(h, p, d, c));
    }
    return (
      m.width !== p.width && we.css(l, 'width', we.width(l) + m.width - p.width),
      m.height !== p.height && we.css(l, 'height', we.height(l) + m.height - p.height),
      we.offset(
        l,
        { left: m.left, top: m.top },
        {
          useCssRight: n.useCssRight,
          useCssBottom: n.useCssBottom,
          useCssTransform: n.useCssTransform,
          ignoreShake: n.ignoreShake,
        },
      ),
      { points: o, offset: i, targetOffset: a, overflow: c }
    );
  }
  function nS(e, t) {
    var n = ic(e, t),
      r = ac(e);
    return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
  }
  function sc(e, t, n) {
    var r = n.target || t,
      o = ac(r),
      i = !nS(r, n.overflow && n.overflow.alwaysByViewport);
    return jm(e, o, n, i);
  }
  sc.__getOffsetParent = il;
  sc.__getVisibleRectForElement = ic;
  function rS(e, t, n) {
    var r,
      o,
      i = we.getDocument(e),
      a = i.defaultView || i.parentWindow,
      s = we.getWindowScrollLeft(a),
      l = we.getWindowScrollTop(a),
      c = we.viewportWidth(a),
      u = we.viewportHeight(a);
    'pageX' in t ? (r = t.pageX) : (r = s + t.clientX), 'pageY' in t ? (o = t.pageY) : (o = l + t.clientY);
    var f = { left: r, top: o, width: 0, height: 0 },
      d = r >= 0 && r <= s + c && o >= 0 && o <= l + u,
      p = [n.points[0], 'cc'];
    return jm(e, f, vf(vf({}, n), {}, { points: p }), d);
  }
  function Xt(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      o = e;
    if ((Array.isArray(e) && (o = qo(e)[0]), !o)) return null;
    const i = sn(o, t, r);
    return (i.props = n ? E(E({}, i.props), t) : i.props), Zh(typeof i.props.class != 'object'), i;
  }
  const oS = (e) => {
    if (!e) return !1;
    if (e.offsetParent) return !0;
    if (e.getBBox) {
      const t = e.getBBox();
      if (t.width || t.height) return !0;
    }
    if (e.getBoundingClientRect) {
      const t = e.getBoundingClientRect();
      if (t.width || t.height) return !0;
    }
    return !1;
  };
  function iS(e, t) {
    return e === t
      ? !0
      : !e || !t
      ? !1
      : 'pageX' in t && 'pageY' in t
      ? e.pageX === t.pageX && e.pageY === t.pageY
      : 'clientX' in t && 'clientY' in t
      ? e.clientX === t.clientX && e.clientY === t.clientY
      : !1;
  }
  function aS(e, t) {
    e !== document.activeElement && Vn(t, e) && typeof e.focus == 'function' && e.focus();
  }
  function Pf(e, t) {
    let n = null,
      r = null;
    function o(a) {
      let [{ target: s }] = a;
      if (!document.documentElement.contains(s)) return;
      const { width: l, height: c } = s.getBoundingClientRect(),
        u = Math.floor(l),
        f = Math.floor(c);
      (n !== u || r !== f) &&
        Promise.resolve().then(() => {
          t({ width: u, height: f });
        }),
        (n = u),
        (r = f);
    }
    const i = new Ah(o);
    return (
      e && i.observe(e),
      () => {
        i.disconnect();
      }
    );
  }
  const sS = (e, t) => {
    let n = !1,
      r = null;
    function o() {
      clearTimeout(r);
    }
    function i(a) {
      if (!n || a === !0) {
        if (e() === !1) return;
        (n = !0),
          o(),
          (r = setTimeout(() => {
            n = !1;
          }, t.value));
      } else
        o(),
          (r = setTimeout(() => {
            (n = !1), i();
          }, t.value));
    }
    return [
      i,
      () => {
        (n = !1), o();
      },
    ];
  };
  function lS() {
    (this.__data__ = []), (this.size = 0);
  }
  function lc(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function Da(e, t) {
    for (var n = e.length; n--; ) if (lc(e[n][0], t)) return n;
    return -1;
  }
  var cS = Array.prototype,
    uS = cS.splice;
  function fS(e) {
    var t = this.__data__,
      n = Da(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : uS.call(t, n, 1), --this.size, !0;
  }
  function dS(e) {
    var t = this.__data__,
      n = Da(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function pS(e) {
    return Da(this.__data__, e) > -1;
  }
  function hS(e, t) {
    var n = this.__data__,
      r = Da(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function dn(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  dn.prototype.clear = lS;
  dn.prototype.delete = fS;
  dn.prototype.get = dS;
  dn.prototype.has = pS;
  dn.prototype.set = hS;
  function mS() {
    (this.__data__ = new dn()), (this.size = 0);
  }
  function vS(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function gS(e) {
    return this.__data__.get(e);
  }
  function yS(e) {
    return this.__data__.has(e);
  }
  var bS = typeof global == 'object' && global && global.Object === Object && global;
  const Hm = bS;
  var wS = typeof self == 'object' && self && self.Object === Object && self,
    _S = Hm || wS || Function('return this')();
  const pn = _S;
  var CS = pn.Symbol;
  const Gt = CS;
  var Bm = Object.prototype,
    xS = Bm.hasOwnProperty,
    $S = Bm.toString,
    io = Gt ? Gt.toStringTag : void 0;
  function SS(e) {
    var t = xS.call(e, io),
      n = e[io];
    try {
      e[io] = void 0;
      var r = !0;
    } catch {}
    var o = $S.call(e);
    return r && (t ? (e[io] = n) : delete e[io]), o;
  }
  var TS = Object.prototype,
    OS = TS.toString;
  function ES(e) {
    return OS.call(e);
  }
  var PS = '[object Null]',
    kS = '[object Undefined]',
    kf = Gt ? Gt.toStringTag : void 0;
  function Yr(e) {
    return e == null ? (e === void 0 ? kS : PS) : kf && kf in Object(e) ? SS(e) : ES(e);
  }
  function Zi(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var MS = '[object AsyncFunction]',
    AS = '[object Function]',
    IS = '[object GeneratorFunction]',
    RS = '[object Proxy]';
  function zm(e) {
    if (!Zi(e)) return !1;
    var t = Yr(e);
    return t == AS || t == IS || t == MS || t == RS;
  }
  var LS = pn['__core-js_shared__'];
  const vs = LS;
  var Mf = (function () {
    var e = /[^.]+$/.exec((vs && vs.keys && vs.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function DS(e) {
    return !!Mf && Mf in e;
  }
  var NS = Function.prototype,
    jS = NS.toString;
  function ur(e) {
    if (e != null) {
      try {
        return jS.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var HS = /[\\^$.*+?()[\]{}|]/g,
    BS = /^\[object .+?Constructor\]$/,
    zS = Function.prototype,
    FS = Object.prototype,
    WS = zS.toString,
    VS = FS.hasOwnProperty,
    KS = RegExp(
      '^' +
        WS.call(VS)
          .replace(HS, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    );
  function US(e) {
    if (!Zi(e) || DS(e)) return !1;
    var t = zm(e) ? KS : BS;
    return t.test(ur(e));
  }
  function YS(e, t) {
    return e == null ? void 0 : e[t];
  }
  function fr(e, t) {
    var n = YS(e, t);
    return US(n) ? n : void 0;
  }
  var XS = fr(pn, 'Map');
  const Vo = XS;
  var GS = fr(Object, 'create');
  const Ko = GS;
  function qS() {
    (this.__data__ = Ko ? Ko(null) : {}), (this.size = 0);
  }
  function ZS(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var QS = '__lodash_hash_undefined__',
    JS = Object.prototype,
    e2 = JS.hasOwnProperty;
  function t2(e) {
    var t = this.__data__;
    if (Ko) {
      var n = t[e];
      return n === QS ? void 0 : n;
    }
    return e2.call(t, e) ? t[e] : void 0;
  }
  var n2 = Object.prototype,
    r2 = n2.hasOwnProperty;
  function o2(e) {
    var t = this.__data__;
    return Ko ? t[e] !== void 0 : r2.call(t, e);
  }
  var i2 = '__lodash_hash_undefined__';
  function a2(e, t) {
    var n = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (n[e] = Ko && t === void 0 ? i2 : t), this;
  }
  function ar(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  ar.prototype.clear = qS;
  ar.prototype.delete = ZS;
  ar.prototype.get = t2;
  ar.prototype.has = o2;
  ar.prototype.set = a2;
  function s2() {
    (this.size = 0), (this.__data__ = { hash: new ar(), map: new (Vo || dn)(), string: new ar() });
  }
  function l2(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
  }
  function Na(e, t) {
    var n = e.__data__;
    return l2(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  function c2(e) {
    var t = Na(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function u2(e) {
    return Na(this, e).get(e);
  }
  function f2(e) {
    return Na(this, e).has(e);
  }
  function d2(e, t) {
    var n = Na(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function hn(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  hn.prototype.clear = s2;
  hn.prototype.delete = c2;
  hn.prototype.get = u2;
  hn.prototype.has = f2;
  hn.prototype.set = d2;
  var p2 = 200;
  function h2(e, t) {
    var n = this.__data__;
    if (n instanceof dn) {
      var r = n.__data__;
      if (!Vo || r.length < p2 - 1) return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new hn(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  function Pn(e) {
    var t = (this.__data__ = new dn(e));
    this.size = t.size;
  }
  Pn.prototype.clear = mS;
  Pn.prototype.delete = vS;
  Pn.prototype.get = gS;
  Pn.prototype.has = yS;
  Pn.prototype.set = h2;
  var m2 = '__lodash_hash_undefined__';
  function v2(e) {
    return this.__data__.set(e, m2), this;
  }
  function g2(e) {
    return this.__data__.has(e);
  }
  function Uo(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.__data__ = new hn(); ++t < n; ) this.add(e[t]);
  }
  Uo.prototype.add = Uo.prototype.push = v2;
  Uo.prototype.has = g2;
  function y2(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
    return !1;
  }
  function Fm(e, t) {
    return e.has(t);
  }
  var b2 = 1,
    w2 = 2;
  function Wm(e, t, n, r, o, i) {
    var a = n & b2,
      s = e.length,
      l = t.length;
    if (s != l && !(a && l > s)) return !1;
    var c = i.get(e),
      u = i.get(t);
    if (c && u) return c == t && u == e;
    var f = -1,
      d = !0,
      p = n & w2 ? new Uo() : void 0;
    for (i.set(e, t), i.set(t, e); ++f < s; ) {
      var h = e[f],
        m = t[f];
      if (r) var y = a ? r(m, h, f, t, e, i) : r(h, m, f, e, t, i);
      if (y !== void 0) {
        if (y) continue;
        d = !1;
        break;
      }
      if (p) {
        if (
          !y2(t, function (b, _) {
            if (!Fm(p, _) && (h === b || o(h, b, n, r, i))) return p.push(_);
          })
        ) {
          d = !1;
          break;
        }
      } else if (!(h === m || o(h, m, n, r, i))) {
        d = !1;
        break;
      }
    }
    return i.delete(e), i.delete(t), d;
  }
  var _2 = pn.Uint8Array;
  const Af = _2;
  function C2(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (r, o) {
        n[++t] = [o, r];
      }),
      n
    );
  }
  function cc(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function (r) {
        n[++t] = r;
      }),
      n
    );
  }
  var x2 = 1,
    $2 = 2,
    S2 = '[object Boolean]',
    T2 = '[object Date]',
    O2 = '[object Error]',
    E2 = '[object Map]',
    P2 = '[object Number]',
    k2 = '[object RegExp]',
    M2 = '[object Set]',
    A2 = '[object String]',
    I2 = '[object Symbol]',
    R2 = '[object ArrayBuffer]',
    L2 = '[object DataView]',
    If = Gt ? Gt.prototype : void 0,
    gs = If ? If.valueOf : void 0;
  function D2(e, t, n, r, o, i, a) {
    switch (n) {
      case L2:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        (e = e.buffer), (t = t.buffer);
      case R2:
        return !(e.byteLength != t.byteLength || !i(new Af(e), new Af(t)));
      case S2:
      case T2:
      case P2:
        return lc(+e, +t);
      case O2:
        return e.name == t.name && e.message == t.message;
      case k2:
      case A2:
        return e == t + '';
      case E2:
        var s = C2;
      case M2:
        var l = r & x2;
        if ((s || (s = cc), e.size != t.size && !l)) return !1;
        var c = a.get(e);
        if (c) return c == t;
        (r |= $2), a.set(e, t);
        var u = Wm(s(e), s(t), r, o, i, a);
        return a.delete(e), u;
      case I2:
        if (gs) return gs.call(e) == gs.call(t);
    }
    return !1;
  }
  function Vm(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
  }
  var N2 = Array.isArray;
  const cn = N2;
  function j2(e, t, n) {
    var r = t(e);
    return cn(e) ? r : Vm(r, n(e));
  }
  function H2(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
      var a = e[n];
      t(a, n, e) && (i[o++] = a);
    }
    return i;
  }
  function B2() {
    return [];
  }
  var z2 = Object.prototype,
    F2 = z2.propertyIsEnumerable,
    Rf = Object.getOwnPropertySymbols,
    W2 = Rf
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              H2(Rf(e), function (t) {
                return F2.call(e, t);
              }));
        }
      : B2;
  const V2 = W2;
  function K2(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  function Br(e) {
    return e != null && typeof e == 'object';
  }
  var U2 = '[object Arguments]';
  function Lf(e) {
    return Br(e) && Yr(e) == U2;
  }
  var Km = Object.prototype,
    Y2 = Km.hasOwnProperty,
    X2 = Km.propertyIsEnumerable,
    G2 = Lf(
      (function () {
        return arguments;
      })(),
    )
      ? Lf
      : function (e) {
          return Br(e) && Y2.call(e, 'callee') && !X2.call(e, 'callee');
        };
  const uc = G2;
  function q2() {
    return !1;
  }
  var Um = typeof tn == 'object' && tn && !tn.nodeType && tn,
    Df = Um && typeof nn == 'object' && nn && !nn.nodeType && nn,
    Z2 = Df && Df.exports === Um,
    Nf = Z2 ? pn.Buffer : void 0,
    Q2 = Nf ? Nf.isBuffer : void 0,
    J2 = Q2 || q2;
  const al = J2;
  var eT = 9007199254740991,
    tT = /^(?:0|[1-9]\d*)$/;
  function fc(e, t) {
    var n = typeof e;
    return (t = t ?? eT), !!t && (n == 'number' || (n != 'symbol' && tT.test(e))) && e > -1 && e % 1 == 0 && e < t;
  }
  var nT = 9007199254740991;
  function dc(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= nT;
  }
  var rT = '[object Arguments]',
    oT = '[object Array]',
    iT = '[object Boolean]',
    aT = '[object Date]',
    sT = '[object Error]',
    lT = '[object Function]',
    cT = '[object Map]',
    uT = '[object Number]',
    fT = '[object Object]',
    dT = '[object RegExp]',
    pT = '[object Set]',
    hT = '[object String]',
    mT = '[object WeakMap]',
    vT = '[object ArrayBuffer]',
    gT = '[object DataView]',
    yT = '[object Float32Array]',
    bT = '[object Float64Array]',
    wT = '[object Int8Array]',
    _T = '[object Int16Array]',
    CT = '[object Int32Array]',
    xT = '[object Uint8Array]',
    $T = '[object Uint8ClampedArray]',
    ST = '[object Uint16Array]',
    TT = '[object Uint32Array]',
    De = {};
  De[yT] = De[bT] = De[wT] = De[_T] = De[CT] = De[xT] = De[$T] = De[ST] = De[TT] = !0;
  De[rT] =
    De[oT] =
    De[vT] =
    De[iT] =
    De[gT] =
    De[aT] =
    De[sT] =
    De[lT] =
    De[cT] =
    De[uT] =
    De[fT] =
    De[dT] =
    De[pT] =
    De[hT] =
    De[mT] =
      !1;
  function OT(e) {
    return Br(e) && dc(e.length) && !!De[Yr(e)];
  }
  function ET(e) {
    return function (t) {
      return e(t);
    };
  }
  var Ym = typeof tn == 'object' && tn && !tn.nodeType && tn,
    $o = Ym && typeof nn == 'object' && nn && !nn.nodeType && nn,
    PT = $o && $o.exports === Ym,
    ys = PT && Hm.process,
    kT = (function () {
      try {
        var e = $o && $o.require && $o.require('util').types;
        return e || (ys && ys.binding && ys.binding('util'));
      } catch {}
    })();
  const jf = kT;
  var Hf = jf && jf.isTypedArray,
    MT = Hf ? ET(Hf) : OT;
  const Xm = MT;
  var AT = Object.prototype,
    IT = AT.hasOwnProperty;
  function RT(e, t) {
    var n = cn(e),
      r = !n && uc(e),
      o = !n && !r && al(e),
      i = !n && !r && !o && Xm(e),
      a = n || r || o || i,
      s = a ? K2(e.length, String) : [],
      l = s.length;
    for (var c in e)
      (t || IT.call(e, c)) &&
        !(
          a &&
          (c == 'length' ||
            (o && (c == 'offset' || c == 'parent')) ||
            (i && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
            fc(c, l))
        ) &&
        s.push(c);
    return s;
  }
  var LT = Object.prototype;
  function DT(e) {
    var t = e && e.constructor,
      n = (typeof t == 'function' && t.prototype) || LT;
    return e === n;
  }
  function NT(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var jT = NT(Object.keys, Object);
  const HT = jT;
  var BT = Object.prototype,
    zT = BT.hasOwnProperty;
  function FT(e) {
    if (!DT(e)) return HT(e);
    var t = [];
    for (var n in Object(e)) zT.call(e, n) && n != 'constructor' && t.push(n);
    return t;
  }
  function WT(e) {
    return e != null && dc(e.length) && !zm(e);
  }
  function VT(e) {
    return WT(e) ? RT(e) : FT(e);
  }
  function Bf(e) {
    return j2(e, VT, V2);
  }
  var KT = 1,
    UT = Object.prototype,
    YT = UT.hasOwnProperty;
  function XT(e, t, n, r, o, i) {
    var a = n & KT,
      s = Bf(e),
      l = s.length,
      c = Bf(t),
      u = c.length;
    if (l != u && !a) return !1;
    for (var f = l; f--; ) {
      var d = s[f];
      if (!(a ? d in t : YT.call(t, d))) return !1;
    }
    var p = i.get(e),
      h = i.get(t);
    if (p && h) return p == t && h == e;
    var m = !0;
    i.set(e, t), i.set(t, e);
    for (var y = a; ++f < l; ) {
      d = s[f];
      var b = e[d],
        _ = t[d];
      if (r) var M = a ? r(_, b, d, t, e, i) : r(b, _, d, e, t, i);
      if (!(M === void 0 ? b === _ || o(b, _, n, r, i) : M)) {
        m = !1;
        break;
      }
      y || (y = d == 'constructor');
    }
    if (m && !y) {
      var R = e.constructor,
        x = t.constructor;
      R != x &&
        'constructor' in e &&
        'constructor' in t &&
        !(typeof R == 'function' && R instanceof R && typeof x == 'function' && x instanceof x) &&
        (m = !1);
    }
    return i.delete(e), i.delete(t), m;
  }
  var GT = fr(pn, 'DataView');
  const sl = GT;
  var qT = fr(pn, 'Promise');
  const ll = qT;
  var ZT = fr(pn, 'Set');
  const Er = ZT;
  var QT = fr(pn, 'WeakMap');
  const cl = QT;
  var zf = '[object Map]',
    JT = '[object Object]',
    Ff = '[object Promise]',
    Wf = '[object Set]',
    Vf = '[object WeakMap]',
    Kf = '[object DataView]',
    eO = ur(sl),
    tO = ur(Vo),
    nO = ur(ll),
    rO = ur(Er),
    oO = ur(cl),
    Bn = Yr;
  ((sl && Bn(new sl(new ArrayBuffer(1))) != Kf) ||
    (Vo && Bn(new Vo()) != zf) ||
    (ll && Bn(ll.resolve()) != Ff) ||
    (Er && Bn(new Er()) != Wf) ||
    (cl && Bn(new cl()) != Vf)) &&
    (Bn = function (e) {
      var t = Yr(e),
        n = t == JT ? e.constructor : void 0,
        r = n ? ur(n) : '';
      if (r)
        switch (r) {
          case eO:
            return Kf;
          case tO:
            return zf;
          case nO:
            return Ff;
          case rO:
            return Wf;
          case oO:
            return Vf;
        }
      return t;
    });
  const Uf = Bn;
  var iO = 1,
    Yf = '[object Arguments]',
    Xf = '[object Array]',
    yi = '[object Object]',
    aO = Object.prototype,
    Gf = aO.hasOwnProperty;
  function sO(e, t, n, r, o, i) {
    var a = cn(e),
      s = cn(t),
      l = a ? Xf : Uf(e),
      c = s ? Xf : Uf(t);
    (l = l == Yf ? yi : l), (c = c == Yf ? yi : c);
    var u = l == yi,
      f = c == yi,
      d = l == c;
    if (d && al(e)) {
      if (!al(t)) return !1;
      (a = !0), (u = !1);
    }
    if (d && !u) return i || (i = new Pn()), a || Xm(e) ? Wm(e, t, n, r, o, i) : D2(e, t, l, n, r, o, i);
    if (!(n & iO)) {
      var p = u && Gf.call(e, '__wrapped__'),
        h = f && Gf.call(t, '__wrapped__');
      if (p || h) {
        var m = p ? e.value() : e,
          y = h ? t.value() : t;
        return i || (i = new Pn()), o(m, y, n, r, i);
      }
    }
    return d ? (i || (i = new Pn()), XT(e, t, n, r, o, i)) : !1;
  }
  function Gm(e, t, n, r, o) {
    return e === t ? !0 : e == null || t == null || (!Br(e) && !Br(t)) ? e !== e && t !== t : sO(e, t, n, r, Gm, o);
  }
  function lO(e, t) {
    return Gm(e, t);
  }
  const cO = {
    align: Object,
    target: [Object, Function],
    onAlign: Function,
    monitorBufferTime: Number,
    monitorWindowResize: Boolean,
    disabled: Boolean,
  };
  function qf(e) {
    return typeof e != 'function' ? null : e();
  }
  function Zf(e) {
    return typeof e != 'object' || !e ? null : e;
  }
  const uO = ce({
    compatConfig: { MODE: 3 },
    name: 'Align',
    props: cO,
    emits: ['align'],
    setup(e, t) {
      let { expose: n, slots: r } = t;
      const o = te({}),
        i = te(),
        [a, s] = sS(
          () => {
            const { disabled: d, target: p, align: h, onAlign: m } = e;
            if (!d && p && i.value) {
              const y = i.value;
              let b;
              const _ = qf(p),
                M = Zf(p);
              (o.value.element = _), (o.value.point = M), (o.value.align = h);
              const { activeElement: R } = document;
              return _ && oS(_) ? (b = sc(y, _, h)) : M && (b = rS(y, M, h)), aS(R, y), m && b && m(y, b), !0;
            }
            return !1;
          },
          P(() => e.monitorBufferTime),
        ),
        l = te({ cancel: () => {} }),
        c = te({ cancel: () => {} }),
        u = () => {
          const d = e.target,
            p = qf(d),
            h = Zf(d);
          i.value !== c.value.element &&
            (c.value.cancel(), (c.value.element = i.value), (c.value.cancel = Pf(i.value, a))),
            (o.value.element !== p || !iS(o.value.point, h) || !lO(o.value.align, e.align)) &&
              (a(), l.value.element !== p && (l.value.cancel(), (l.value.element = p), (l.value.cancel = Pf(p, a))));
        };
      ut(() => {
        tt(() => {
          u();
        });
      }),
        Xo(() => {
          tt(() => {
            u();
          });
        }),
        _e(
          () => e.disabled,
          (d) => {
            d ? s() : a();
          },
          { immediate: !0, flush: 'post' },
        );
      const f = te(null);
      return (
        _e(
          () => e.monitorWindowResize,
          (d) => {
            d ? f.value || (f.value = uo(window, 'resize', a)) : f.value && (f.value.remove(), (f.value = null));
          },
          { flush: 'post' },
        ),
        Kr(() => {
          l.value.cancel(), c.value.cancel(), f.value && f.value.remove(), s();
        }),
        n({ forceAlign: () => a(!0) }),
        () => {
          const d = r == null ? void 0 : r.default();
          return d ? Xt(d[0], { ref: i }, !0, !0) : null;
        }
      );
    },
  });
  Y_('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
  const qm = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return E(
        e
          ? {
              name: e,
              appear: !0,
              enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
              enterActiveClass: `${e}-enter ${e}-enter-prepare`,
              enterToClass: `${e}-enter ${e}-enter-active`,
              leaveFromClass: ` ${e}-leave`,
              leaveActiveClass: `${e}-leave ${e}-leave-active`,
              leaveToClass: `${e}-leave ${e}-leave-active`,
            }
          : { css: !1 },
        t,
      );
    },
    fO = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
    dO = ce({
      compatConfig: { MODE: 3 },
      name: 'PopupInner',
      inheritAttrs: !1,
      props: nc,
      emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
      setup(e, t) {
        let { expose: n, attrs: r, slots: o } = t;
        const i = le(),
          a = le(),
          s = le(),
          [l, c] = k$(Li(e, 'stretch')),
          u = () => {
            e.stretch && c(e.getRootDomNode());
          },
          f = le(!1);
        let d;
        _e(
          () => e.visible,
          (C) => {
            clearTimeout(d),
              C
                ? (d = setTimeout(() => {
                    f.value = e.visible;
                  }))
                : (f.value = !1);
          },
          { immediate: !0 },
        );
        const [p, h] = P$(f, u),
          m = le(),
          y = () => (e.point ? e.point : e.getRootDomNode),
          b = () => {
            var C;
            (C = i.value) === null || C === void 0 || C.forceAlign();
          },
          _ = (C, T) => {
            var $;
            const L = e.getClassNameFromAlign(T),
              S = s.value;
            s.value !== L && (s.value = L),
              p.value === 'align' &&
                (S !== L
                  ? Promise.resolve().then(() => {
                      b();
                    })
                  : h(() => {
                      var B;
                      (B = m.value) === null || B === void 0 || B.call(m);
                    }),
                ($ = e.onAlign) === null || $ === void 0 || $.call(e, C, T));
          },
          M = P(() => {
            const C = typeof e.animation == 'object' ? e.animation : Pm(e);
            return (
              ['onAfterEnter', 'onAfterLeave'].forEach((T) => {
                const $ = C[T];
                C[T] = (L) => {
                  h(), (p.value = 'stable'), $ == null || $(L);
                };
              }),
              C
            );
          }),
          R = () =>
            new Promise((C) => {
              m.value = C;
            });
        _e(
          [M, p],
          () => {
            !M.value && p.value === 'motion' && h();
          },
          { immediate: !0 },
        ),
          n({ forceAlign: b, getElement: () => a.value.$el || a.value });
        const x = P(() => {
          var C;
          return !(
            !((C = e.align) === null || C === void 0) &&
            C.points &&
            (p.value === 'align' || p.value === 'stable')
          );
        });
        return () => {
          var C;
          const {
              zIndex: T,
              align: $,
              prefixCls: L,
              destroyPopupOnHide: S,
              onMouseenter: B,
              onMouseleave: Y,
              onTouchstart: ne = () => {},
              onMousedown: Z,
            } = e,
            k = p.value,
            A = [
              E(E({}, l.value), {
                zIndex: T,
                opacity: k === 'motion' || k === 'stable' || !f.value ? null : 0,
                pointerEvents: !f.value && k !== 'stable' ? 'none' : null,
              }),
              r.style,
            ];
          let z = Lt((C = o.default) === null || C === void 0 ? void 0 : C.call(o, { visible: e.visible }));
          z.length > 1 && (z = v('div', { class: `${L}-content` }, [z]));
          const j = je(L, r.class, s.value),
            ae = f.value || !e.visible ? qm(M.value.name, M.value) : {};
          return v(lr, de(de({ ref: a }, ae), {}, { onBeforeEnter: R }), {
            default: () =>
              !S || e.visible
                ? da(
                    v(
                      uO,
                      {
                        target: y(),
                        key: 'popup',
                        ref: i,
                        monitorWindowResize: !0,
                        disabled: x.value,
                        align: $,
                        onAlign: _,
                      },
                      {
                        default: () =>
                          v(
                            'div',
                            {
                              class: j,
                              onMouseenter: B,
                              onMouseleave: Y,
                              onMousedown: Ct(Z, ['capture']),
                              [Cr ? 'onTouchstartPassive' : 'onTouchstart']: Ct(ne, ['capture']),
                              style: A,
                            },
                            [z],
                          ),
                      },
                    ),
                    [[Nl, f.value]],
                  )
                : null,
          });
        };
      },
    }),
    pO = ce({
      compatConfig: { MODE: 3 },
      name: 'Popup',
      inheritAttrs: !1,
      props: T$,
      setup(e, t) {
        let { attrs: n, slots: r, expose: o } = t;
        const i = le(!1),
          a = le(!1),
          s = le(),
          l = le();
        return (
          _e(
            [() => e.visible, () => e.mobile],
            () => {
              (i.value = e.visible), e.visible && e.mobile && (a.value = !0);
            },
            { immediate: !0, flush: 'post' },
          ),
          o({
            forceAlign: () => {
              var c;
              (c = s.value) === null || c === void 0 || c.forceAlign();
            },
            getElement: () => {
              var c;
              return (c = s.value) === null || c === void 0 ? void 0 : c.getElement();
            },
          }),
          () => {
            const c = E(E(E({}, e), n), { visible: i.value }),
              u = a.value
                ? v(O$, de(de({}, c), {}, { mobile: e.mobile, ref: s }), { default: r.default })
                : v(dO, de(de({}, c), {}, { ref: s }), { default: r.default });
            return v('div', { ref: l }, [v(km, c, null), u]);
          }
        );
      },
    });
  function hO(e, t, n) {
    return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
  }
  function Qf(e, t, n) {
    const r = e[t] || {};
    return E(E({}, r), n);
  }
  function mO(e, t, n, r) {
    const { points: o } = n,
      i = Object.keys(e);
    for (let a = 0; a < i.length; a += 1) {
      const s = i[a];
      if (hO(e[s].points, o, r)) return `${t}-placement-${s}`;
    }
    return '';
  }
  const vO = {
      methods: {
        setState() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = typeof e == 'function' ? e(this.$data, this.$props) : e;
          if (this.getDerivedStateFromProps) {
            const r = this.getDerivedStateFromProps(W_(this), E(E({}, this.$data), n));
            if (r === null) return;
            n = E(E({}, n), r || {});
          }
          E(this.$data, n),
            this._.isMounted && this.$forceUpdate(),
            tt(() => {
              t && t();
            });
        },
        __emit() {
          const e = [].slice.call(arguments, 0);
          let t = e[0];
          t = `on${t[0].toUpperCase()}${t.substring(1)}`;
          const n = this.$props[t] || this.$attrs[t];
          if (e.length && n)
            if (Array.isArray(n)) for (let r = 0, o = n.length; r < o; r++) n[r](...e.slice(1));
            else n(...e.slice(1));
        },
      },
    },
    Zm = Symbol('PortalContextKey'),
    Qm = function (e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { inTriggerContext: !0 };
      it(Zm, {
        inTriggerContext: t.inTriggerContext,
        shouldRender: P(() => {
          const { sPopupVisible: n, popupRef: r, forceRender: o, autoDestroy: i } = e || {};
          let a = !1;
          return (n || r || o) && (a = !0), !n && i && (a = !1), a;
        }),
      });
    },
    gO = () => {
      Qm({}, { inTriggerContext: !1 });
      const e = Ae(Zm, { shouldRender: P(() => !1), inTriggerContext: !1 });
      return { shouldRender: P(() => e.shouldRender.value || e.inTriggerContext === !1) };
    },
    yO = ce({
      compatConfig: { MODE: 3 },
      name: 'Portal',
      inheritAttrs: !1,
      props: { getContainer: fe.func.isRequired, didUpdate: Function },
      setup(e, t) {
        let { slots: n } = t,
          r = !0,
          o;
        const { shouldRender: i } = gO();
        Sp(() => {
          (r = !1), i.value && (o = e.getContainer());
        });
        const a = _e(i, () => {
          i.value && !o && (o = e.getContainer()), o && a();
        });
        return (
          Xo(() => {
            tt(() => {
              var s;
              i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
            });
          }),
          () => {
            var s;
            return i.value
              ? r
                ? (s = n.default) === null || s === void 0
                  ? void 0
                  : s.call(n)
                : o
                ? v(Bp, { to: o }, n)
                : null
              : null;
          }
        );
      },
    });
  let bs;
  function bO(e) {
    if (typeof document > 'u') return 0;
    if (e || bs === void 0) {
      const t = document.createElement('div');
      (t.style.width = '100%'), (t.style.height = '200px');
      const n = document.createElement('div'),
        r = n.style;
      (r.position = 'absolute'),
        (r.top = '0'),
        (r.left = '0'),
        (r.pointerEvents = 'none'),
        (r.visibility = 'hidden'),
        (r.width = '200px'),
        (r.height = '150px'),
        (r.overflow = 'hidden'),
        n.appendChild(t),
        document.body.appendChild(n);
      const o = t.offsetWidth;
      n.style.overflow = 'scroll';
      let i = t.offsetWidth;
      o === i && (i = n.clientWidth), document.body.removeChild(n), (bs = o - i);
    }
    return bs;
  }
  const wO = `vc-util-locker-${Date.now()}`;
  let Jf = 0;
  function _O() {
    return (
      document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
      window.innerWidth > document.body.offsetWidth
    );
  }
  function CO(e) {
    const t = P(() => !!e && !!e.value);
    Jf += 1;
    const n = `${wO}_${Jf}`;
    $t(
      (r) => {
        if (ln()) {
          if (t.value) {
            const o = bO(),
              i = _O();
            Ui(
              `
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${o}px);` : ''}
}`,
              n,
            );
          } else Ki(n);
          r(() => {
            Ki(n);
          });
        }
      },
      { flush: 'post' },
    );
  }
  let Hn = 0;
  const Ei = ln(),
    ed = (e) => {
      if (!Ei) return null;
      if (e) {
        if (typeof e == 'string') return document.querySelectorAll(e)[0];
        if (typeof e == 'function') return e();
        if (typeof e == 'object' && e instanceof window.HTMLElement) return e;
      }
      return document.body;
    },
    xO = ce({
      compatConfig: { MODE: 3 },
      name: 'PortalWrapper',
      inheritAttrs: !1,
      props: {
        wrapperClassName: String,
        forceRender: { type: Boolean, default: void 0 },
        getContainer: fe.any,
        visible: { type: Boolean, default: void 0 },
        autoLock: Co(),
        didUpdate: Function,
      },
      setup(e, t) {
        let { slots: n } = t;
        const r = le(),
          o = le(),
          i = le(),
          a = ln() && document.createElement('div'),
          s = () => {
            var p, h;
            r.value === a &&
              ((h = (p = r.value) === null || p === void 0 ? void 0 : p.parentNode) === null ||
                h === void 0 ||
                h.removeChild(r.value)),
              (r.value = null);
          };
        let l = null;
        const c = function () {
            return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ||
              (r.value && !r.value.parentNode)
              ? ((l = ed(e.getContainer)), l ? (l.appendChild(r.value), !0) : !1)
              : !0;
          },
          u = () => (Ei ? (r.value || ((r.value = a), c(!0)), f(), r.value) : null),
          f = () => {
            const { wrapperClassName: p } = e;
            r.value && p && p !== r.value.className && (r.value.className = p);
          };
        Xo(() => {
          f(), c();
        });
        const d = fn();
        return (
          CO(P(() => e.autoLock && e.visible && ln() && (r.value === document.body || r.value === a))),
          ut(() => {
            let p = !1;
            _e(
              [() => e.visible, () => e.getContainer],
              (h, m) => {
                let [y, b] = h,
                  [_, M] = m;
                Ei && ((l = ed(e.getContainer)), l === document.body && (y && !_ ? (Hn += 1) : p && (Hn -= 1))),
                  p &&
                    (typeof b == 'function' && typeof M == 'function' ? b.toString() !== M.toString() : b !== M) &&
                    s(),
                  (p = !0);
              },
              { immediate: !0, flush: 'post' },
            ),
              tt(() => {
                c() ||
                  (i.value = Xe(() => {
                    d.update();
                  }));
              });
          }),
          St(() => {
            const { visible: p } = e;
            Ei && l === document.body && (Hn = p && Hn ? Hn - 1 : Hn), s(), Xe.cancel(i.value);
          }),
          () => {
            const { forceRender: p, visible: h } = e;
            let m = null;
            const y = { getOpenCount: () => Hn, getContainer: u };
            return (
              (p || h || o.value) &&
                (m = v(
                  yO,
                  { getContainer: u, ref: o, didUpdate: e.didUpdate },
                  {
                    default: () => {
                      var b;
                      return (b = n.default) === null || b === void 0 ? void 0 : b.call(n, y);
                    },
                  },
                )),
              m
            );
          }
        );
      },
    }),
    $O = [
      'onClick',
      'onMousedown',
      'onTouchstart',
      'onMouseenter',
      'onMouseleave',
      'onFocus',
      'onBlur',
      'onContextmenu',
    ],
    pc = ce({
      compatConfig: { MODE: 3 },
      name: 'Trigger',
      mixins: [vO],
      inheritAttrs: !1,
      props: $$(),
      setup(e) {
        const t = P(() => {
            const { popupPlacement: o, popupAlign: i, builtinPlacements: a } = e;
            return o && a ? Qf(a, o, i) : i;
          }),
          n = le(null),
          r = (o) => {
            n.value = o;
          };
        return {
          vcTriggerContext: Ae('vcTriggerContext', {}),
          popupRef: n,
          setPopupRef: r,
          triggerRef: le(null),
          align: t,
          focusTime: null,
          clickOutsideHandler: null,
          contextmenuOutsideHandler1: null,
          contextmenuOutsideHandler2: null,
          touchOutsideHandler: null,
          attachId: null,
          delayTimer: null,
          hasPopupMouseDown: !1,
          preClickTime: null,
          preTouchTime: null,
          mouseDownTimeout: null,
          childOriginEvents: {},
        };
      },
      data() {
        const e = this.$props;
        let t;
        return (
          this.popupVisible !== void 0 ? (t = !!e.popupVisible) : (t = !!e.defaultPopupVisible),
          $O.forEach((n) => {
            this[`fire${n}`] = (r) => {
              this.fireEvents(n, r);
            };
          }),
          { prevPopupVisible: t, sPopupVisible: t, point: null }
        );
      },
      watch: {
        popupVisible(e) {
          e !== void 0 && ((this.prevPopupVisible = this.sPopupVisible), (this.sPopupVisible = e));
        },
      },
      created() {
        it('vcTriggerContext', {
          onPopupMouseDown: this.onPopupMouseDown,
          onPopupMouseenter: this.onPopupMouseenter,
          onPopupMouseleave: this.onPopupMouseleave,
        }),
          Qm(this);
      },
      deactivated() {
        this.setPopupVisible(!1);
      },
      mounted() {
        this.$nextTick(() => {
          this.updatedCal();
        });
      },
      updated() {
        this.$nextTick(() => {
          this.updatedCal();
        });
      },
      beforeUnmount() {
        this.clearDelayTimer(),
          this.clearOutsideHandler(),
          clearTimeout(this.mouseDownTimeout),
          Xe.cancel(this.attachId);
      },
      methods: {
        updatedCal() {
          const e = this.$props;
          if (this.$data.sPopupVisible) {
            let n;
            !this.clickOutsideHandler &&
              (this.isClickToHide() || this.isContextmenuToShow()) &&
              ((n = e.getDocument(this.getRootDomNode())),
              (this.clickOutsideHandler = uo(n, 'mousedown', this.onDocumentClick))),
              this.touchOutsideHandler ||
                ((n = n || e.getDocument(this.getRootDomNode())),
                (this.touchOutsideHandler = uo(n, 'touchstart', this.onDocumentClick, Cr ? { passive: !1 } : !1))),
              !this.contextmenuOutsideHandler1 &&
                this.isContextmenuToShow() &&
                ((n = n || e.getDocument(this.getRootDomNode())),
                (this.contextmenuOutsideHandler1 = uo(n, 'scroll', this.onContextmenuClose))),
              !this.contextmenuOutsideHandler2 &&
                this.isContextmenuToShow() &&
                (this.contextmenuOutsideHandler2 = uo(window, 'blur', this.onContextmenuClose));
          } else this.clearOutsideHandler();
        },
        onMouseenter(e) {
          const { mouseEnterDelay: t } = this.$props;
          this.fireEvents('onMouseenter', e), this.delaySetPopupVisible(!0, t, t ? null : e);
        },
        onMouseMove(e) {
          this.fireEvents('onMousemove', e), this.setPoint(e);
        },
        onMouseleave(e) {
          this.fireEvents('onMouseleave', e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
        },
        onPopupMouseenter() {
          const { vcTriggerContext: e = {} } = this;
          e.onPopupMouseenter && e.onPopupMouseenter(), this.clearDelayTimer();
        },
        onPopupMouseleave(e) {
          var t;
          if (
            e &&
            e.relatedTarget &&
            !e.relatedTarget.setTimeout &&
            Vn((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget)
          )
            return;
          this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
          const { vcTriggerContext: n = {} } = this;
          n.onPopupMouseleave && n.onPopupMouseleave(e);
        },
        onFocus(e) {
          this.fireEvents('onFocus', e),
            this.clearDelayTimer(),
            this.isFocusToShow() &&
              ((this.focusTime = Date.now()), this.delaySetPopupVisible(!0, this.$props.focusDelay));
        },
        onMousedown(e) {
          this.fireEvents('onMousedown', e), (this.preClickTime = Date.now());
        },
        onTouchstart(e) {
          this.fireEvents('onTouchstart', e), (this.preTouchTime = Date.now());
        },
        onBlur(e) {
          Vn(e.target, e.relatedTarget || document.activeElement) ||
            (this.fireEvents('onBlur', e),
            this.clearDelayTimer(),
            this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
        },
        onContextmenu(e) {
          e.preventDefault(), this.fireEvents('onContextmenu', e), this.setPopupVisible(!0, e);
        },
        onContextmenuClose() {
          this.isContextmenuToShow() && this.close();
        },
        onClick(e) {
          if ((this.fireEvents('onClick', e), this.focusTime)) {
            let n;
            if (
              (this.preClickTime && this.preTouchTime
                ? (n = Math.min(this.preClickTime, this.preTouchTime))
                : this.preClickTime
                ? (n = this.preClickTime)
                : this.preTouchTime && (n = this.preTouchTime),
              Math.abs(n - this.focusTime) < 20)
            )
              return;
            this.focusTime = 0;
          }
          (this.preClickTime = 0),
            (this.preTouchTime = 0),
            this.isClickToShow() &&
              (this.isClickToHide() || this.isBlurToHide()) &&
              e &&
              e.preventDefault &&
              e.preventDefault(),
            e && e.domEvent && e.domEvent.preventDefault();
          const t = !this.$data.sPopupVisible;
          ((this.isClickToHide() && !t) || (t && this.isClickToShow())) &&
            this.setPopupVisible(!this.$data.sPopupVisible, e);
        },
        onPopupMouseDown() {
          const { vcTriggerContext: e = {} } = this;
          (this.hasPopupMouseDown = !0),
            clearTimeout(this.mouseDownTimeout),
            (this.mouseDownTimeout = setTimeout(() => {
              this.hasPopupMouseDown = !1;
            }, 0)),
            e.onPopupMouseDown && e.onPopupMouseDown(...arguments);
        },
        onDocumentClick(e) {
          if (this.$props.mask && !this.$props.maskClosable) return;
          const t = e.target,
            n = this.getRootDomNode(),
            r = this.getPopupDomNode();
          (!Vn(n, t) || this.isContextMenuOnly()) &&
            !Vn(r, t) &&
            !this.hasPopupMouseDown &&
            this.delaySetPopupVisible(!1, 0.1);
        },
        getPopupDomNode() {
          var e;
          return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
        },
        getRootDomNode() {
          var e, t, n, r;
          const { getTriggerDOMNode: o } = this.$props;
          if (o) {
            const i =
              ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0
                ? void 0
                : t.nodeName) === '#comment'
                ? null
                : co(this.triggerRef);
            return co(o(i));
          }
          try {
            const i =
              ((r = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || r === void 0
                ? void 0
                : r.nodeName) === '#comment'
                ? null
                : co(this.triggerRef);
            if (i) return i;
          } catch {}
          return co(this);
        },
        handleGetPopupClassFromAlign(e) {
          const t = [],
            n = this.$props,
            { popupPlacement: r, builtinPlacements: o, prefixCls: i, alignPoint: a, getPopupClassNameFromAlign: s } = n;
          return r && o && t.push(mO(o, i, e, a)), s && t.push(s(e)), t.join(' ');
        },
        getPopupAlign() {
          const e = this.$props,
            { popupPlacement: t, popupAlign: n, builtinPlacements: r } = e;
          return t && r ? Qf(r, t, n) : n;
        },
        getComponent() {
          const e = {};
          this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter),
            this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave),
            (e.onMousedown = this.onPopupMouseDown),
            (e[Cr ? 'onTouchstartPassive' : 'onTouchstart'] = this.onPopupMouseDown);
          const { handleGetPopupClassFromAlign: t, getRootDomNode: n, $attrs: r } = this,
            {
              prefixCls: o,
              destroyPopupOnHide: i,
              popupClassName: a,
              popupAnimation: s,
              popupTransitionName: l,
              popupStyle: c,
              mask: u,
              maskAnimation: f,
              maskTransitionName: d,
              zIndex: p,
              stretch: h,
              alignPoint: m,
              mobile: y,
              forceRender: b,
            } = this.$props,
            { sPopupVisible: _, point: M } = this.$data,
            R = E(
              E(
                {
                  prefixCls: o,
                  destroyPopupOnHide: i,
                  visible: _,
                  point: m ? M : null,
                  align: this.align,
                  animation: s,
                  getClassNameFromAlign: t,
                  stretch: h,
                  getRootDomNode: n,
                  mask: u,
                  zIndex: p,
                  transitionName: l,
                  maskAnimation: f,
                  maskTransitionName: d,
                  class: a,
                  style: c,
                  onAlign: r.onPopupAlign || Em,
                },
                e,
              ),
              { ref: this.setPopupRef, mobile: y, forceRender: b },
            );
          return v(pO, R, { default: this.$slots.popup || (() => V_(this, 'popup')) });
        },
        attachParent(e) {
          Xe.cancel(this.attachId);
          const { getPopupContainer: t, getDocument: n } = this.$props,
            r = this.getRootDomNode();
          let o;
          t ? (r || t.length === 0) && (o = t(r)) : (o = n(this.getRootDomNode()).body),
            o
              ? o.appendChild(e)
              : (this.attachId = Xe(() => {
                  this.attachParent(e);
                }));
        },
        getContainer() {
          const { $props: e } = this,
            { getDocument: t } = e,
            n = t(this.getRootDomNode()).createElement('div');
          return (
            (n.style.position = 'absolute'),
            (n.style.top = '0'),
            (n.style.left = '0'),
            (n.style.width = '100%'),
            this.attachParent(n),
            n
          );
        },
        setPopupVisible(e, t) {
          const { alignPoint: n, sPopupVisible: r, onPopupVisibleChange: o } = this;
          this.clearDelayTimer(),
            r !== e &&
              (z_(this, 'popupVisible') || this.setState({ sPopupVisible: e, prevPopupVisible: r }), o && o(e)),
            n && t && e && this.setPoint(t);
        },
        setPoint(e) {
          const { alignPoint: t } = this.$props;
          !t || !e || this.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
        },
        handlePortalUpdate() {
          this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
        },
        delaySetPopupVisible(e, t, n) {
          const r = t * 1e3;
          if ((this.clearDelayTimer(), r)) {
            const o = n ? { pageX: n.pageX, pageY: n.pageY } : null;
            this.delayTimer = setTimeout(() => {
              this.setPopupVisible(e, o), this.clearDelayTimer();
            }, r);
          } else this.setPopupVisible(e, n);
        },
        clearDelayTimer() {
          this.delayTimer && (clearTimeout(this.delayTimer), (this.delayTimer = null));
        },
        clearOutsideHandler() {
          this.clickOutsideHandler && (this.clickOutsideHandler.remove(), (this.clickOutsideHandler = null)),
            this.contextmenuOutsideHandler1 &&
              (this.contextmenuOutsideHandler1.remove(), (this.contextmenuOutsideHandler1 = null)),
            this.contextmenuOutsideHandler2 &&
              (this.contextmenuOutsideHandler2.remove(), (this.contextmenuOutsideHandler2 = null)),
            this.touchOutsideHandler && (this.touchOutsideHandler.remove(), (this.touchOutsideHandler = null));
        },
        createTwoChains(e) {
          let t = () => {};
          const n = ju(this);
          return this.childOriginEvents[e] && n[e]
            ? this[`fire${e}`]
            : ((t = this.childOriginEvents[e] || n[e] || t), t);
        },
        isClickToShow() {
          const { action: e, showAction: t } = this.$props;
          return e.indexOf('click') !== -1 || t.indexOf('click') !== -1;
        },
        isContextMenuOnly() {
          const { action: e } = this.$props;
          return e === 'contextmenu' || (e.length === 1 && e[0] === 'contextmenu');
        },
        isContextmenuToShow() {
          const { action: e, showAction: t } = this.$props;
          return e.indexOf('contextmenu') !== -1 || t.indexOf('contextmenu') !== -1;
        },
        isClickToHide() {
          const { action: e, hideAction: t } = this.$props;
          return e.indexOf('click') !== -1 || t.indexOf('click') !== -1;
        },
        isMouseEnterToShow() {
          const { action: e, showAction: t } = this.$props;
          return e.indexOf('hover') !== -1 || t.indexOf('mouseenter') !== -1;
        },
        isMouseLeaveToHide() {
          const { action: e, hideAction: t } = this.$props;
          return e.indexOf('hover') !== -1 || t.indexOf('mouseleave') !== -1;
        },
        isFocusToShow() {
          const { action: e, showAction: t } = this.$props;
          return e.indexOf('focus') !== -1 || t.indexOf('focus') !== -1;
        },
        isBlurToHide() {
          const { action: e, hideAction: t } = this.$props;
          return e.indexOf('focus') !== -1 || t.indexOf('blur') !== -1;
        },
        forcePopupAlign() {
          var e;
          this.$data.sPopupVisible && ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
        },
        fireEvents(e, t) {
          this.childOriginEvents[e] && this.childOriginEvents[e](t);
          const n = this.$props[e] || this.$attrs[e];
          n && n(t);
        },
        close() {
          this.setPopupVisible(!1);
        },
      },
      render() {
        const { $attrs: e } = this,
          t = qo(F_(this)),
          { alignPoint: n, getPopupContainer: r } = this.$props,
          o = t[0];
        this.childOriginEvents = ju(o);
        const i = { key: 'trigger' };
        this.isContextmenuToShow()
          ? (i.onContextmenu = this.onContextmenu)
          : (i.onContextmenu = this.createTwoChains('onContextmenu')),
          this.isClickToHide() || this.isClickToShow()
            ? ((i.onClick = this.onClick),
              (i.onMousedown = this.onMousedown),
              (i[Cr ? 'onTouchstartPassive' : 'onTouchstart'] = this.onTouchstart))
            : ((i.onClick = this.createTwoChains('onClick')),
              (i.onMousedown = this.createTwoChains('onMousedown')),
              (i[Cr ? 'onTouchstartPassive' : 'onTouchstart'] = this.createTwoChains('onTouchstart'))),
          this.isMouseEnterToShow()
            ? ((i.onMouseenter = this.onMouseenter), n && (i.onMousemove = this.onMouseMove))
            : (i.onMouseenter = this.createTwoChains('onMouseenter')),
          this.isMouseLeaveToHide()
            ? (i.onMouseleave = this.onMouseleave)
            : (i.onMouseleave = this.createTwoChains('onMouseleave')),
          this.isFocusToShow() || this.isBlurToHide()
            ? ((i.onFocus = this.onFocus), (i.onBlur = this.onBlur))
            : ((i.onFocus = this.createTwoChains('onFocus')),
              (i.onBlur = (c) => {
                c && (!c.relatedTarget || !Vn(c.target, c.relatedTarget)) && this.createTwoChains('onBlur')(c);
              }));
        const a = je(o && o.props && o.props.class, e.class);
        a && (i.class = a);
        const s = Xt(o, E(E({}, i), { ref: 'triggerRef' }), !0, !0),
          l = v(
            xO,
            {
              key: 'portal',
              getContainer: r && (() => r(this.getRootDomNode())),
              didUpdate: this.handlePortalUpdate,
              visible: this.$data.sPopupVisible,
            },
            { default: this.getComponent },
          );
        return v(Ie, null, [s, l]);
      },
    }),
    ve = {
      MAC_ENTER: 3,
      BACKSPACE: 8,
      TAB: 9,
      NUM_CENTER: 12,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      PRINT_SCREEN: 44,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      QUESTION_MARK: 63,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      META: 91,
      WIN_KEY_RIGHT: 92,
      CONTEXT_MENU: 93,
      NUM_ZERO: 96,
      NUM_ONE: 97,
      NUM_TWO: 98,
      NUM_THREE: 99,
      NUM_FOUR: 100,
      NUM_FIVE: 101,
      NUM_SIX: 102,
      NUM_SEVEN: 103,
      NUM_EIGHT: 104,
      NUM_NINE: 105,
      NUM_MULTIPLY: 106,
      NUM_PLUS: 107,
      NUM_MINUS: 109,
      NUM_PERIOD: 110,
      NUM_DIVISION: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUMLOCK: 144,
      SEMICOLON: 186,
      DASH: 189,
      EQUALS: 187,
      COMMA: 188,
      PERIOD: 190,
      SLASH: 191,
      APOSTROPHE: 192,
      SINGLE_QUOTE: 222,
      OPEN_SQUARE_BRACKET: 219,
      BACKSLASH: 220,
      CLOSE_SQUARE_BRACKET: 221,
      WIN_KEY: 224,
      MAC_FF_META: 224,
      WIN_IME: 229,
      isTextModifyingKeyEvent: function (t) {
        const { keyCode: n } = t;
        if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ve.F1 && n <= ve.F12)) return !1;
        switch (n) {
          case ve.ALT:
          case ve.CAPS_LOCK:
          case ve.CONTEXT_MENU:
          case ve.CTRL:
          case ve.DOWN:
          case ve.END:
          case ve.ESC:
          case ve.HOME:
          case ve.INSERT:
          case ve.LEFT:
          case ve.MAC_FF_META:
          case ve.META:
          case ve.NUMLOCK:
          case ve.NUM_CENTER:
          case ve.PAGE_DOWN:
          case ve.PAGE_UP:
          case ve.PAUSE:
          case ve.PRINT_SCREEN:
          case ve.RIGHT:
          case ve.SHIFT:
          case ve.UP:
          case ve.WIN_KEY:
          case ve.WIN_KEY_RIGHT:
            return !1;
          default:
            return !0;
        }
      },
      isCharacterKey: function (t) {
        if (
          (t >= ve.ZERO && t <= ve.NINE) ||
          (t >= ve.NUM_ZERO && t <= ve.NUM_MULTIPLY) ||
          (t >= ve.A && t <= ve.Z) ||
          (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
        )
          return !0;
        switch (t) {
          case ve.SPACE:
          case ve.QUESTION_MARK:
          case ve.NUM_PLUS:
          case ve.NUM_MINUS:
          case ve.NUM_PERIOD:
          case ve.NUM_DIVISION:
          case ve.SEMICOLON:
          case ve.DASH:
          case ve.EQUALS:
          case ve.COMMA:
          case ve.PERIOD:
          case ve.SLASH:
          case ve.APOSTROPHE:
          case ve.SINGLE_QUOTE:
          case ve.OPEN_SQUARE_BRACKET:
          case ve.BACKSLASH:
          case ve.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      },
    },
    kt = ve,
    Jm = Symbol('OverflowContextProviderKey'),
    ul = ce({
      compatConfig: { MODE: 3 },
      name: 'OverflowContextProvider',
      inheritAttrs: !1,
      props: { value: { type: Object } },
      setup(e, t) {
        let { slots: n } = t;
        return (
          it(
            Jm,
            P(() => e.value),
          ),
          () => {
            var r;
            return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
          }
        );
      },
    }),
    SO = () =>
      Ae(
        Jm,
        P(() => null),
      );
  var TO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const mr = void 0,
    Pi = ce({
      compatConfig: { MODE: 3 },
      name: 'Item',
      props: {
        prefixCls: String,
        item: fe.any,
        renderItem: Function,
        responsive: Boolean,
        itemKey: { type: [String, Number] },
        registerSize: Function,
        display: Boolean,
        order: Number,
        component: fe.any,
        invalidate: Boolean,
      },
      setup(e, t) {
        let { slots: n, expose: r } = t;
        const o = P(() => e.responsive && !e.display),
          i = te();
        r({ itemNodeRef: i });
        function a(s) {
          e.registerSize(e.itemKey, s);
        }
        return (
          Kr(() => {
            a(null);
          }),
          () => {
            var s;
            const {
                prefixCls: l,
                invalidate: c,
                item: u,
                renderItem: f,
                responsive: d,
                registerSize: p,
                itemKey: h,
                display: m,
                order: y,
                component: b = 'div',
              } = e,
              _ = TO(e, [
                'prefixCls',
                'invalidate',
                'item',
                'renderItem',
                'responsive',
                'registerSize',
                'itemKey',
                'display',
                'order',
                'component',
              ]),
              M = (s = n.default) === null || s === void 0 ? void 0 : s.call(n),
              R = f && u !== mr ? f(u) : M;
            let x;
            c ||
              (x = {
                opacity: o.value ? 0 : 1,
                height: o.value ? 0 : mr,
                overflowY: o.value ? 'hidden' : mr,
                order: d ? y : mr,
                pointerEvents: o.value ? 'none' : mr,
                position: o.value ? 'absolute' : mr,
              });
            const C = {};
            return (
              o.value && (C['aria-hidden'] = !0),
              v(
                Wi,
                {
                  disabled: !d,
                  onResize: (T) => {
                    let { offsetWidth: $ } = T;
                    a($);
                  },
                },
                {
                  default: () =>
                    v(b, de(de(de({ class: je(!c && l), style: x }, C), _), {}, { ref: i }), { default: () => [R] }),
                },
              )
            );
          }
        );
      },
    });
  var ws =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const OO = ce({
    compatConfig: { MODE: 3 },
    name: 'RawItem',
    inheritAttrs: !1,
    props: {
      component: fe.any,
      title: fe.any,
      id: String,
      onMouseenter: { type: Function },
      onMouseleave: { type: Function },
      onClick: { type: Function },
      onKeydown: { type: Function },
      onFocus: { type: Function },
      role: String,
      tabindex: Number,
    },
    setup(e, t) {
      let { slots: n, attrs: r } = t;
      const o = SO();
      return () => {
        var i;
        if (!o.value) {
          const { component: f = 'div' } = e,
            d = ws(e, ['component']);
          return v(f, de(de({}, d), r), {
            default: () => [(i = n.default) === null || i === void 0 ? void 0 : i.call(n)],
          });
        }
        const a = o.value,
          { className: s } = a,
          l = ws(a, ['className']),
          { class: c } = r,
          u = ws(r, ['class']);
        return v(ul, { value: null }, { default: () => [v(Pi, de(de(de({ class: je(s, c) }, l), u), e), n)] });
      };
    },
  });
  var EO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const ev = 'responsive',
    tv = 'invalidate';
  function PO(e) {
    return `+ ${e.length} ...`;
  }
  const kO = () => ({
      id: String,
      prefixCls: String,
      data: Array,
      itemKey: [String, Number, Function],
      itemWidth: { type: Number, default: 10 },
      renderItem: Function,
      renderRawItem: Function,
      maxCount: [Number, String],
      renderRest: Function,
      renderRawRest: Function,
      suffix: fe.any,
      component: String,
      itemComponent: fe.any,
      onVisibleChange: Function,
      ssr: String,
      onMousedown: Function,
    }),
    ja = ce({
      name: 'Overflow',
      inheritAttrs: !1,
      props: kO(),
      emits: ['visibleChange'],
      setup(e, t) {
        let { attrs: n, emit: r, slots: o } = t;
        const i = P(() => e.ssr === 'full'),
          a = le(null),
          s = P(() => a.value || 0),
          l = le(new Map()),
          c = le(0),
          u = le(0),
          f = le(0),
          d = le(null),
          p = le(null),
          h = P(() => (p.value === null && i.value ? Number.MAX_SAFE_INTEGER : p.value || 0)),
          m = le(!1),
          y = P(() => `${e.prefixCls}-item`),
          b = P(() => Math.max(c.value, u.value)),
          _ = P(() => !!(e.data.length && e.maxCount === ev)),
          M = P(() => e.maxCount === tv),
          R = P(() => _.value || (typeof e.maxCount == 'number' && e.data.length > e.maxCount)),
          x = P(() => {
            let k = e.data;
            return (
              _.value
                ? a.value === null && i.value
                  ? (k = e.data)
                  : (k = e.data.slice(0, Math.min(e.data.length, s.value / e.itemWidth)))
                : typeof e.maxCount == 'number' && (k = e.data.slice(0, e.maxCount)),
              k
            );
          }),
          C = P(() => (_.value ? e.data.slice(h.value + 1) : e.data.slice(x.value.length))),
          T = (k, A) => {
            var z;
            return typeof e.itemKey == 'function'
              ? e.itemKey(k)
              : (z = e.itemKey && (k == null ? void 0 : k[e.itemKey])) !== null && z !== void 0
              ? z
              : A;
          },
          $ = P(() => e.renderItem || ((k) => k)),
          L = (k, A) => {
            (p.value = k), A || ((m.value = k < e.data.length - 1), r('visibleChange', k));
          },
          S = (k, A) => {
            a.value = A.clientWidth;
          },
          B = (k, A) => {
            const z = new Map(l.value);
            A === null ? z.delete(k) : z.set(k, A), (l.value = z);
          },
          Y = (k, A) => {
            (c.value = u.value), (u.value = A);
          },
          ne = (k, A) => {
            f.value = A;
          },
          Z = (k) => l.value.get(T(x.value[k], k));
        return (
          _e([s, l, u, f, () => e.itemKey, x], () => {
            if (s.value && b.value && x.value) {
              let k = f.value;
              const A = x.value.length,
                z = A - 1;
              if (!A) {
                L(0), (d.value = null);
                return;
              }
              for (let j = 0; j < A; j += 1) {
                const ee = Z(j);
                if (ee === void 0) {
                  L(j - 1, !0);
                  break;
                }
                if (((k += ee), (z === 0 && k <= s.value) || (j === z - 1 && k + Z(z) <= s.value))) {
                  L(z), (d.value = null);
                  break;
                } else if (k + b.value > s.value) {
                  L(j - 1), (d.value = k - ee - f.value + u.value);
                  break;
                }
              }
              e.suffix && Z(0) + f.value > s.value && (d.value = null);
            }
          }),
          () => {
            const k = m.value && !!C.value.length,
              {
                itemComponent: A,
                renderRawItem: z,
                renderRawRest: j,
                renderRest: ee,
                prefixCls: ae = 'rc-overflow',
                suffix: Q,
                component: se = 'div',
                id: me,
                onMousedown: xe,
              } = e,
              { class: Pe, style: G } = n,
              I = EO(n, ['class', 'style']);
            let X = {};
            d.value !== null && _.value && (X = { position: 'absolute', left: `${d.value}px`, top: 0 });
            const K = { prefixCls: y.value, responsive: _.value, component: A, invalidate: M.value },
              q = z
                ? (O, N) => {
                    const F = T(O, N);
                    return v(
                      ul,
                      {
                        key: F,
                        value: E(E({}, K), { order: N, item: O, itemKey: F, registerSize: B, display: N <= h.value }),
                      },
                      { default: () => [z(O, N)] },
                    );
                  }
                : (O, N) => {
                    const F = T(O, N);
                    return v(
                      Pi,
                      de(
                        de({}, K),
                        {},
                        {
                          order: N,
                          key: F,
                          item: O,
                          renderItem: $.value,
                          itemKey: F,
                          registerSize: B,
                          display: N <= h.value,
                        },
                      ),
                      null,
                    );
                  };
            let ue = () => null;
            const g = {
              order: k ? h.value : Number.MAX_SAFE_INTEGER,
              className: `${y.value} ${y.value}-rest`,
              registerSize: Y,
              display: k,
            };
            if (j) j && (ue = () => v(ul, { value: E(E({}, K), g) }, { default: () => [j(C.value)] }));
            else {
              const O = ee || PO;
              ue = () => v(Pi, de(de({}, K), g), { default: () => (typeof O == 'function' ? O(C.value) : O) });
            }
            const w = () => {
              var O;
              return v(se, de({ id: me, class: je(!M.value && ae, Pe), style: G, onMousedown: xe }, I), {
                default: () => [
                  x.value.map(q),
                  R.value ? ue() : null,
                  Q &&
                    v(
                      Pi,
                      de(
                        de({}, K),
                        {},
                        { order: h.value, class: `${y.value}-suffix`, registerSize: ne, display: !0, style: X },
                      ),
                      { default: () => Q },
                    ),
                  (O = o.default) === null || O === void 0 ? void 0 : O.call(o),
                ],
              });
            };
            return v(Wi, { disabled: !_.value, onResize: S }, { default: w });
          }
        );
      },
    });
  ja.Item = OO;
  ja.RESPONSIVE = ev;
  ja.INVALIDATE = tv;
  const So = ja,
    MO = () => {
      if (typeof navigator > 'u' || typeof window > 'u') return !1;
      const e = navigator.userAgent || navigator.vendor || window.opera;
      return (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          e,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
          e == null ? void 0 : e.substr(0, 4),
        )
      );
    };
  function td(e, t) {
    const { defaultValue: n, value: r = te() } = t || {};
    let o = typeof e == 'function' ? e() : e;
    r.value !== void 0 && (o = J(r)), n !== void 0 && (o = typeof n == 'function' ? n() : n);
    const i = te(o),
      a = te(o);
    $t(() => {
      let l = r.value !== void 0 ? r.value : i.value;
      t.postState && (l = t.postState(l)), (a.value = l);
    });
    function s(l) {
      const c = a.value;
      (i.value = l), Te(a.value) !== l && t.onChange && t.onChange(l, c);
    }
    return (
      _e(r, () => {
        i.value = r.value;
      }),
      [a, s]
    );
  }
  function Qe(e) {
    const t = typeof e == 'function' ? e() : e,
      n = te(t);
    function r(o) {
      n.value = o;
    }
    return [n, r];
  }
  var AO = Symbol('iconContext'),
    nv = function () {
      return Ae(AO, { prefixCls: te('anticon'), rootClassName: te(''), csp: te() });
    };
  function hc() {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  }
  function IO(e, t) {
    return e && e.contains ? e.contains(t) : !1;
  }
  var nd = 'data-vc-order',
    RO = 'vc-icon-key',
    fl = new Map();
  function rv() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.mark;
    return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : RO;
  }
  function mc(e) {
    if (e.attachTo) return e.attachTo;
    var t = document.querySelector('head');
    return t || document.body;
  }
  function LO(e) {
    return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
  }
  function ov(e) {
    return Array.from((fl.get(e) || e).children).filter(function (t) {
      return t.tagName === 'STYLE';
    });
  }
  function iv(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!hc()) return null;
    var n = t.csp,
      r = t.prepend,
      o = document.createElement('style');
    o.setAttribute(nd, LO(r)), n && n.nonce && (o.nonce = n.nonce), (o.innerHTML = e);
    var i = mc(t),
      a = i.firstChild;
    if (r) {
      if (r === 'queue') {
        var s = ov(i).filter(function (l) {
          return ['prepend', 'prependQueue'].includes(l.getAttribute(nd));
        });
        if (s.length) return i.insertBefore(o, s[s.length - 1].nextSibling), o;
      }
      i.insertBefore(o, a);
    } else i.appendChild(o);
    return o;
  }
  function DO(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = mc(t);
    return ov(n).find(function (r) {
      return r.getAttribute(rv(t)) === e;
    });
  }
  function NO(e, t) {
    var n = fl.get(e);
    if (!n || !IO(document, n)) {
      var r = iv('', t),
        o = r.parentNode;
      fl.set(e, o), e.removeChild(r);
    }
  }
  function jO(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = mc(n);
    NO(r, n);
    var o = DO(t, n);
    if (o)
      return (
        n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce),
        o.innerHTML !== e && (o.innerHTML = e),
        o
      );
    var i = iv(e, n);
    return i.setAttribute(rv(n), t), i;
  }
  function rd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {},
        r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          }),
        )),
        r.forEach(function (o) {
          HO(e, o, n[o]);
        });
    }
    return e;
  }
  function HO(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  function od(e) {
    return (
      typeof e == 'object' &&
      typeof e.name == 'string' &&
      typeof e.theme == 'string' &&
      (typeof e.icon == 'object' || typeof e.icon == 'function')
    );
  }
  function dl(e, t, n) {
    return n
      ? Ar(
          e.tag,
          rd({ key: t }, n, e.attrs),
          (e.children || []).map(function (r, o) {
            return dl(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
          }),
        )
      : Ar(
          e.tag,
          rd({ key: t }, e.attrs),
          (e.children || []).map(function (r, o) {
            return dl(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
          }),
        );
  }
  function av(e) {
    return zo(e)[0];
  }
  function sv(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var BO = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
  function lv(e) {
    return e && e.getRootNode && e.getRootNode();
  }
  function zO(e) {
    return hc() ? lv(e) instanceof ShadowRoot : !1;
  }
  function FO(e) {
    return zO(e) ? lv(e) : null;
  }
  var WO = function () {
      var t = nv(),
        n = t.prefixCls,
        r = t.csp,
        o = fn(),
        i = BO;
      n && (i = i.replace(/anticon/g, n.value)),
        tt(function () {
          if (hc()) {
            var a = o.vnode.el,
              s = FO(a);
            jO(i, '@ant-design-vue-icons', { prepend: !0, csp: r.value, attachTo: s });
          }
        });
    },
    VO = ['icon', 'primaryColor', 'secondaryColor'];
  function KO(e, t) {
    if (e == null) return {};
    var n = UO(e, t),
      r,
      o;
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (o = 0; o < i.length; o++)
        (r = i[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function UO(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function ki(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {},
        r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          }),
        )),
        r.forEach(function (o) {
          YO(e, o, n[o]);
        });
    }
    return e;
  }
  function YO(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  var To = In({ primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 });
  function XO(e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (To.primaryColor = t), (To.secondaryColor = n || av(t)), (To.calculated = !!n);
  }
  function GO() {
    return ki({}, To);
  }
  var Xr = function (t, n) {
    var r = ki({}, t, n.attrs),
      o = r.icon,
      i = r.primaryColor,
      a = r.secondaryColor,
      s = KO(r, VO),
      l = To;
    if ((i && (l = { primaryColor: i, secondaryColor: a || av(i) }), od(o), !od(o))) return null;
    var c = o;
    return (
      c && typeof c.icon == 'function' && (c = ki({}, c, { icon: c.icon(l.primaryColor, l.secondaryColor) })),
      dl(
        c.icon,
        'svg-'.concat(c.name),
        ki({}, s, {
          'data-icon': c.name,
          'width': '1em',
          'height': '1em',
          'fill': 'currentColor',
          'aria-hidden': 'true',
        }),
      )
    );
  };
  Xr.props = { icon: Object, primaryColor: String, secondaryColor: String, focusable: String };
  Xr.inheritAttrs = !1;
  Xr.displayName = 'IconBase';
  Xr.getTwoToneColors = GO;
  Xr.setTwoToneColors = XO;
  const vc = Xr;
  function qO(e, t) {
    return e4(e) || JO(e, t) || QO(e, t) || ZO();
  }
  function ZO() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function QO(e, t) {
    if (e) {
      if (typeof e == 'string') return id(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
        return Array.from(e);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return id(e, t);
    }
  }
  function id(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function JO(e, t) {
    var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (n != null) {
      var r = [],
        o = !0,
        i = !1,
        a,
        s;
      try {
        for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0);
      } catch (l) {
        (i = !0), (s = l);
      } finally {
        try {
          !o && n.return != null && n.return();
        } finally {
          if (i) throw s;
        }
      }
      return r;
    }
  }
  function e4(e) {
    if (Array.isArray(e)) return e;
  }
  function cv(e) {
    var t = sv(e),
      n = qO(t, 2),
      r = n[0],
      o = n[1];
    return vc.setTwoToneColors({ primaryColor: r, secondaryColor: o });
  }
  function t4() {
    var e = vc.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var n4 = ce({
      name: 'InsertStyles',
      setup: function () {
        return (
          WO(),
          function () {
            return null;
          }
        );
      },
    }),
    r4 = ['class', 'icon', 'spin', 'rotate', 'tabindex', 'twoToneColor', 'onClick'];
  function o4(e, t) {
    return l4(e) || s4(e, t) || a4(e, t) || i4();
  }
  function i4() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a4(e, t) {
    if (e) {
      if (typeof e == 'string') return ad(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
        return Array.from(e);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ad(e, t);
    }
  }
  function ad(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function s4(e, t) {
    var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (n != null) {
      var r = [],
        o = !0,
        i = !1,
        a,
        s;
      try {
        for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0);
      } catch (l) {
        (i = !0), (s = l);
      } finally {
        try {
          !o && n.return != null && n.return();
        } finally {
          if (i) throw s;
        }
      }
      return r;
    }
  }
  function l4(e) {
    if (Array.isArray(e)) return e;
  }
  function sd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {},
        r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          }),
        )),
        r.forEach(function (o) {
          po(e, o, n[o]);
        });
    }
    return e;
  }
  function po(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  function c4(e, t) {
    if (e == null) return {};
    var n = u4(e, t),
      r,
      o;
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (o = 0; o < i.length; o++)
        (r = i[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function u4(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  cv(bx.primary);
  var Gr = function (t, n) {
    var r,
      o = sd({}, t, n.attrs),
      i = o.class,
      a = o.icon,
      s = o.spin,
      l = o.rotate,
      c = o.tabindex,
      u = o.twoToneColor,
      f = o.onClick,
      d = c4(o, r4),
      p = nv(),
      h = p.prefixCls,
      m = p.rootClassName,
      y =
        ((r = {}),
        po(r, m.value, !!m.value),
        po(r, h.value, !0),
        po(r, ''.concat(h.value, '-').concat(a.name), !!a.name),
        po(r, ''.concat(h.value, '-spin'), !!s || a.name === 'loading'),
        r),
      b = c;
    b === void 0 && f && (b = -1);
    var _ = l ? { msTransform: 'rotate('.concat(l, 'deg)'), transform: 'rotate('.concat(l, 'deg)') } : void 0,
      M = sv(u),
      R = o4(M, 2),
      x = R[0],
      C = R[1];
    return v('span', sd({ 'role': 'img', 'aria-label': a.name }, d, { onClick: f, class: [y, i], tabindex: b }), [
      v(vc, { icon: a, primaryColor: x, secondaryColor: C, style: _ }, null),
      v(n4, null, null),
    ]);
  };
  Gr.props = { spin: Boolean, rotate: Number, icon: Object, twoToneColor: [String, Array] };
  Gr.displayName = 'AntdIcon';
  Gr.inheritAttrs = !1;
  Gr.getTwoToneColor = t4;
  Gr.setTwoToneColor = cv;
  const gc = Gr;
  var f4 = {
    icon: {
      tag: 'svg',
      attrs: { 'fill-rule': 'evenodd', 'viewBox': '64 64 896 896', 'focusable': 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
          },
        },
      ],
    },
    name: 'close',
    theme: 'outlined',
  };
  const d4 = f4;
  function ld(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {},
        r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          }),
        )),
        r.forEach(function (o) {
          p4(e, o, n[o]);
        });
    }
    return e;
  }
  function p4(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  var yc = function (t, n) {
    var r = ld({}, t, n.attrs);
    return v(gc, ld({}, r, { icon: d4 }), null);
  };
  yc.displayName = 'CloseOutlined';
  yc.inheritAttrs = !1;
  const h4 = yc;
  var m4 = '[object Symbol]';
  function bc(e) {
    return typeof e == 'symbol' || (Br(e) && Yr(e) == m4);
  }
  function v4(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
    return o;
  }
  var g4 = 1 / 0,
    cd = Gt ? Gt.prototype : void 0,
    ud = cd ? cd.toString : void 0;
  function uv(e) {
    if (typeof e == 'string') return e;
    if (cn(e)) return v4(e, uv) + '';
    if (bc(e)) return ud ? ud.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -g4 ? '-0' : t;
  }
  function y4(e) {
    return e;
  }
  function b4(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  function w4() {}
  var _4 = 800,
    C4 = 16,
    x4 = Date.now;
  function $4(e) {
    var t = 0,
      n = 0;
    return function () {
      var r = x4(),
        o = C4 - (r - n);
      if (((n = r), o > 0)) {
        if (++t >= _4) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  function S4(e) {
    return function () {
      return e;
    };
  }
  var T4 = (function () {
    try {
      var e = fr(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })();
  const Qi = T4;
  var O4 = Qi
    ? function (e, t) {
        return Qi(e, 'toString', { configurable: !0, enumerable: !1, value: S4(t), writable: !0 });
      }
    : y4;
  const E4 = O4;
  var P4 = $4(E4);
  const k4 = P4;
  function M4(e, t, n, r) {
    for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; ) if (t(e[i], i, e)) return i;
    return -1;
  }
  function A4(e) {
    return e !== e;
  }
  function I4(e, t, n) {
    for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
    return -1;
  }
  function R4(e, t, n) {
    return t === t ? I4(e, t, n) : M4(e, A4, n);
  }
  function L4(e, t) {
    var n = e == null ? 0 : e.length;
    return !!n && R4(e, t, 0) > -1;
  }
  function D4(e, t, n) {
    t == '__proto__' && Qi ? Qi(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
  }
  var N4 = Object.prototype,
    j4 = N4.hasOwnProperty;
  function H4(e, t, n) {
    var r = e[t];
    (!(j4.call(e, t) && lc(r, n)) || (n === void 0 && !(t in e))) && D4(e, t, n);
  }
  var fd = Math.max;
  function B4(e, t, n) {
    return (
      (t = fd(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (var r = arguments, o = -1, i = fd(r.length - t, 0), a = Array(i); ++o < i; ) a[o] = r[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = r[o];
        return (s[t] = n(a)), b4(e, this, s);
      }
    );
  }
  var z4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    F4 = /^\w*$/;
  function W4(e, t) {
    if (cn(e)) return !1;
    var n = typeof e;
    return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || bc(e)
      ? !0
      : F4.test(e) || !z4.test(e) || (t != null && e in Object(t));
  }
  var V4 = 'Expected a function';
  function wc(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(V4);
    var n = function () {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, r);
      return (n.cache = i.set(o, a) || i), a;
    };
    return (n.cache = new (wc.Cache || hn)()), n;
  }
  wc.Cache = hn;
  var K4 = 500;
  function U4(e) {
    var t = wc(e, function (r) {
        return n.size === K4 && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var Y4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    X4 = /\\(\\)?/g,
    G4 = U4(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Y4, function (n, r, o, i) {
          t.push(o ? i.replace(X4, '$1') : r || n);
        }),
        t
      );
    });
  const q4 = G4;
  function Z4(e) {
    return e == null ? '' : uv(e);
  }
  function Ha(e, t) {
    return cn(e) ? e : W4(e, t) ? [e] : q4(Z4(e));
  }
  var Q4 = 1 / 0;
  function _c(e) {
    if (typeof e == 'string' || bc(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Q4 ? '-0' : t;
  }
  function J4(e, t) {
    t = Ha(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[_c(t[n++])];
    return n && n == r ? e : void 0;
  }
  var dd = Gt ? Gt.isConcatSpreadable : void 0;
  function eE(e) {
    return cn(e) || uc(e) || !!(dd && e && e[dd]);
  }
  function fv(e, t, n, r, o) {
    var i = -1,
      a = e.length;
    for (n || (n = eE), o || (o = []); ++i < a; ) {
      var s = e[i];
      t > 0 && n(s) ? (t > 1 ? fv(s, t - 1, n, r, o) : Vm(o, s)) : r || (o[o.length] = s);
    }
    return o;
  }
  function tE(e) {
    var t = e == null ? 0 : e.length;
    return t ? fv(e, 1) : [];
  }
  function nE(e) {
    return k4(B4(e, void 0, tE), e + '');
  }
  function rE(e, t) {
    return e != null && t in Object(e);
  }
  function oE(e, t, n) {
    t = Ha(t, e);
    for (var r = -1, o = t.length, i = !1; ++r < o; ) {
      var a = _c(t[r]);
      if (!(i = e != null && n(e, a))) break;
      e = e[a];
    }
    return i || ++r != o ? i : ((o = e == null ? 0 : e.length), !!o && dc(o) && fc(a, o) && (cn(e) || uc(e)));
  }
  function iE(e, t) {
    return e != null && oE(e, t, rE);
  }
  function aE(e, t, n) {
    for (var r = -1, o = e == null ? 0 : e.length; ++r < o; ) if (n(t, e[r])) return !0;
    return !1;
  }
  function sE(e, t, n, r) {
    if (!Zi(e)) return e;
    t = Ha(t, e);
    for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
      var l = _c(t[o]),
        c = n;
      if (l === '__proto__' || l === 'constructor' || l === 'prototype') return e;
      if (o != a) {
        var u = s[l];
        (c = r ? r(u, l, s) : void 0), c === void 0 && (c = Zi(u) ? u : fc(t[o + 1]) ? [] : {});
      }
      H4(s, l, c), (s = s[l]);
    }
    return e;
  }
  function lE(e, t, n) {
    for (var r = -1, o = t.length, i = {}; ++r < o; ) {
      var a = t[r],
        s = J4(e, a);
      n(s, a) && sE(i, Ha(a, e), s);
    }
    return i;
  }
  function cE(e, t) {
    return lE(e, t, function (n, r) {
      return iE(e, r);
    });
  }
  var uE = nE(function (e, t) {
    return e == null ? {} : cE(e, t);
  });
  const dv = uE;
  var fE = 1 / 0,
    dE =
      Er && 1 / cc(new Er([, -0]))[1] == fE
        ? function (e) {
            return new Er(e);
          }
        : w4;
  const pE = dE;
  var hE = 200;
  function mE(e, t, n) {
    var r = -1,
      o = L4,
      i = e.length,
      a = !0,
      s = [],
      l = s;
    if (n) (a = !1), (o = aE);
    else if (i >= hE) {
      var c = t ? null : pE(e);
      if (c) return cc(c);
      (a = !1), (o = Fm), (l = new Uo());
    } else l = t ? [] : s;
    e: for (; ++r < i; ) {
      var u = e[r],
        f = t ? t(u) : u;
      if (((u = n || u !== 0 ? u : 0), a && f === f)) {
        for (var d = l.length; d--; ) if (l[d] === f) continue e;
        t && l.push(f), s.push(u);
      } else o(l, f, n) || (l !== s && l.push(f), s.push(u));
    }
    return s;
  }
  function _s(e) {
    return e && e.length ? mE(e) : [];
  }
  const vE = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    gE = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
    pv = function (e, t, n, r) {
      const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? '&' : '';
      return {
        [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: E(E({}, vE(r)), { animationPlayState: 'paused' }),
        [`${i}${e}-leave`]: E(E({}, gE(r)), { animationPlayState: 'paused' }),
        [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
        [`${i}${e}-leave${e}-leave-active`]: { animationName: n, animationPlayState: 'running', pointerEvents: 'none' },
      };
    },
    yE = new Ke('antSlideUpIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    bE = new Ke('antSlideUpOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    wE = new Ke('antSlideDownIn', {
      '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
      '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    }),
    _E = new Ke('antSlideDownOut', {
      '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
      '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
    }),
    CE = new Ke('antSlideLeftIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    }),
    xE = new Ke('antSlideLeftOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    }),
    $E = new Ke('antSlideRightIn', {
      '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
      '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    }),
    SE = new Ke('antSlideRightOut', {
      '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
      '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    }),
    TE = {
      'slide-up': { inKeyframes: yE, outKeyframes: bE },
      'slide-down': { inKeyframes: wE, outKeyframes: _E },
      'slide-left': { inKeyframes: CE, outKeyframes: xE },
      'slide-right': { inKeyframes: $E, outKeyframes: SE },
    },
    Ji = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: o, outKeyframes: i } = TE[t];
      return [
        pv(r, o, i, e.motionDurationMid),
        {
          [`
      ${r}-enter,
      ${r}-appear
    `]: { transform: 'scale(0)', transformOrigin: '0% 0%', opacity: 0, animationTimingFunction: e.motionEaseOutQuint },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
        },
      ];
    },
    OE = new Ke('antZoomIn', {
      '0%': { transform: 'scale(0.2)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    EE = new Ke('antZoomOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.2)', opacity: 0 } }),
    pd = new Ke('antZoomBigIn', {
      '0%': { transform: 'scale(0.8)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    }),
    hd = new Ke('antZoomBigOut', { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.8)', opacity: 0 } }),
    PE = new Ke('antZoomUpIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    }),
    kE = new Ke('antZoomUpOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    }),
    ME = new Ke('antZoomLeftIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    }),
    AE = new Ke('antZoomLeftOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    }),
    IE = new Ke('antZoomRightIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    }),
    RE = new Ke('antZoomRightOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    }),
    LE = new Ke('antZoomDownIn', {
      '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
      '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    }),
    DE = new Ke('antZoomDownOut', {
      '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
      '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    }),
    NE = {
      'zoom': { inKeyframes: OE, outKeyframes: EE },
      'zoom-big': { inKeyframes: pd, outKeyframes: hd },
      'zoom-big-fast': { inKeyframes: pd, outKeyframes: hd },
      'zoom-left': { inKeyframes: ME, outKeyframes: AE },
      'zoom-right': { inKeyframes: IE, outKeyframes: RE },
      'zoom-up': { inKeyframes: PE, outKeyframes: kE },
      'zoom-down': { inKeyframes: LE, outKeyframes: DE },
    },
    hv = (e, t) => {
      const { antCls: n } = e,
        r = `${n}-${t}`,
        { inKeyframes: o, outKeyframes: i } = NE[t];
      return [
        pv(r, o, i, t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid),
        {
          [`
        ${r}-enter,
        ${r}-appear
      `]: {
            'transform': 'scale(0)',
            'opacity': 0,
            'animationTimingFunction': e.motionEaseOutCirc,
            '&-prepare': { transform: 'none' },
          },
          [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
        },
      ];
    },
    jE = (e) => ({
      [e.componentCls]: {
        [`${e.antCls}-motion-collapse-legacy`]: {
          'overflow': 'hidden',
          '&-active': {
            transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
          },
        },
        [`${e.antCls}-motion-collapse`]: {
          overflow: 'hidden',
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
        },
      },
    }),
    HE = jE,
    wt = { adjustX: 1, adjustY: 1 },
    _t = [0, 0],
    mv = {
      left: { points: ['cr', 'cl'], overflow: wt, offset: [-4, 0], targetOffset: _t },
      right: { points: ['cl', 'cr'], overflow: wt, offset: [4, 0], targetOffset: _t },
      top: { points: ['bc', 'tc'], overflow: wt, offset: [0, -4], targetOffset: _t },
      bottom: { points: ['tc', 'bc'], overflow: wt, offset: [0, 4], targetOffset: _t },
      topLeft: { points: ['bl', 'tl'], overflow: wt, offset: [0, -4], targetOffset: _t },
      leftTop: { points: ['tr', 'tl'], overflow: wt, offset: [-4, 0], targetOffset: _t },
      topRight: { points: ['br', 'tr'], overflow: wt, offset: [0, -4], targetOffset: _t },
      rightTop: { points: ['tl', 'tr'], overflow: wt, offset: [4, 0], targetOffset: _t },
      bottomRight: { points: ['tr', 'br'], overflow: wt, offset: [0, 4], targetOffset: _t },
      rightBottom: { points: ['bl', 'br'], overflow: wt, offset: [4, 0], targetOffset: _t },
      bottomLeft: { points: ['tl', 'bl'], overflow: wt, offset: [0, 4], targetOffset: _t },
      leftBottom: { points: ['br', 'bl'], overflow: wt, offset: [-4, 0], targetOffset: _t },
    },
    BE = { prefixCls: String, id: String, overlayInnerStyle: fe.any },
    zE = ce({
      compatConfig: { MODE: 3 },
      name: 'TooltipContent',
      props: BE,
      setup(e, t) {
        let { slots: n } = t;
        return () => {
          var r;
          return v('div', { class: `${e.prefixCls}-inner`, id: e.id, role: 'tooltip', style: e.overlayInnerStyle }, [
            (r = n.overlay) === null || r === void 0 ? void 0 : r.call(n),
          ]);
        };
      },
    });
  var FE =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function md() {}
  const WE = ce({
      compatConfig: { MODE: 3 },
      name: 'Tooltip',
      inheritAttrs: !1,
      props: {
        trigger: fe.any.def(['hover']),
        defaultVisible: { type: Boolean, default: void 0 },
        visible: { type: Boolean, default: void 0 },
        placement: fe.string.def('right'),
        transitionName: String,
        animation: fe.any,
        afterVisibleChange: fe.func.def(() => {}),
        overlayStyle: { type: Object, default: void 0 },
        overlayClassName: String,
        prefixCls: fe.string.def('rc-tooltip'),
        mouseEnterDelay: fe.number.def(0.1),
        mouseLeaveDelay: fe.number.def(0.1),
        getPopupContainer: Function,
        destroyTooltipOnHide: { type: Boolean, default: !1 },
        align: fe.object.def(() => ({})),
        arrowContent: fe.any.def(null),
        tipId: String,
        builtinPlacements: fe.object,
        overlayInnerStyle: { type: Object, default: void 0 },
        popupVisible: { type: Boolean, default: void 0 },
        onVisibleChange: Function,
        onPopupAlign: Function,
      },
      setup(e, t) {
        let { slots: n, attrs: r, expose: o } = t;
        const i = le(),
          a = () => {
            const { prefixCls: u, tipId: f, overlayInnerStyle: d } = e;
            return [
              v('div', { class: `${u}-arrow`, key: 'arrow' }, [Ul(n, e, 'arrowContent')]),
              v(zE, { key: 'content', prefixCls: u, id: f, overlayInnerStyle: d }, { overlay: n.overlay }),
            ];
          };
        o({
          getPopupDomNode: () => i.value.getPopupDomNode(),
          triggerDOM: i,
          forcePopupAlign: () => {
            var u;
            return (u = i.value) === null || u === void 0 ? void 0 : u.forcePopupAlign();
          },
        });
        const l = le(!1),
          c = le(!1);
        return (
          $t(() => {
            const { destroyTooltipOnHide: u } = e;
            if (typeof u == 'boolean') l.value = u;
            else if (u && typeof u == 'object') {
              const { keepParent: f } = u;
              (l.value = f === !0), (c.value = f === !1);
            }
          }),
          () => {
            const {
                overlayClassName: u,
                trigger: f,
                mouseEnterDelay: d,
                mouseLeaveDelay: p,
                overlayStyle: h,
                prefixCls: m,
                afterVisibleChange: y,
                transitionName: b,
                animation: _,
                placement: M,
                align: R,
                destroyTooltipOnHide: x,
                defaultVisible: C,
              } = e,
              T = FE(e, [
                'overlayClassName',
                'trigger',
                'mouseEnterDelay',
                'mouseLeaveDelay',
                'overlayStyle',
                'prefixCls',
                'afterVisibleChange',
                'transitionName',
                'animation',
                'placement',
                'align',
                'destroyTooltipOnHide',
                'defaultVisible',
              ]),
              $ = E({}, T);
            e.visible !== void 0 && ($.popupVisible = e.visible);
            const L = E(
              E(
                E(
                  {
                    popupClassName: u,
                    prefixCls: m,
                    action: f,
                    builtinPlacements: mv,
                    popupPlacement: M,
                    popupAlign: R,
                    afterPopupVisibleChange: y,
                    popupTransitionName: b,
                    popupAnimation: _,
                    defaultPopupVisible: C,
                    destroyPopupOnHide: l.value,
                    autoDestroy: c.value,
                    mouseLeaveDelay: p,
                    popupStyle: h,
                    mouseEnterDelay: d,
                  },
                  $,
                ),
                r,
              ),
              { onPopupVisibleChange: e.onVisibleChange || md, onPopupAlign: e.onPopupAlign || md, ref: i, popup: a() },
            );
            return v(pc, L, { default: n.default });
          }
        );
      },
    }),
    VE = () => ({
      'trigger': [String, Array],
      'open': { type: Boolean, default: void 0 },
      'visible': { type: Boolean, default: void 0 },
      'placement': String,
      'color': String,
      'transitionName': String,
      'overlayStyle': lt(),
      'overlayInnerStyle': lt(),
      'overlayClassName': String,
      'openClassName': String,
      'prefixCls': String,
      'mouseEnterDelay': Number,
      'mouseLeaveDelay': Number,
      'getPopupContainer': Function,
      'arrowPointAtCenter': { type: Boolean, default: void 0 },
      'autoAdjustOverflow': { type: [Boolean, Object], default: void 0 },
      'destroyTooltipOnHide': { type: Boolean, default: void 0 },
      'align': lt(),
      'builtinPlacements': lt(),
      'children': Array,
      'onVisibleChange': Function,
      'onUpdate:visible': Function,
      'onOpenChange': Function,
      'onUpdate:open': Function,
    }),
    KE = { adjustX: 1, adjustY: 1 },
    vd = { adjustX: 0, adjustY: 0 },
    UE = [0, 0];
  function gd(e) {
    return typeof e == 'boolean' ? (e ? KE : vd) : E(E({}, vd), e);
  }
  function YE(e) {
    const {
        arrowWidth: t = 4,
        horizontalArrowShift: n = 16,
        verticalArrowShift: r = 8,
        autoAdjustOverflow: o,
        arrowPointAtCenter: i,
      } = e,
      a = {
        left: { points: ['cr', 'cl'], offset: [-4, 0] },
        right: { points: ['cl', 'cr'], offset: [4, 0] },
        top: { points: ['bc', 'tc'], offset: [0, -4] },
        bottom: { points: ['tc', 'bc'], offset: [0, 4] },
        topLeft: { points: ['bl', 'tc'], offset: [-(n + t), -4] },
        leftTop: { points: ['tr', 'cl'], offset: [-4, -(r + t)] },
        topRight: { points: ['br', 'tc'], offset: [n + t, -4] },
        rightTop: { points: ['tl', 'cr'], offset: [4, -(r + t)] },
        bottomRight: { points: ['tr', 'bc'], offset: [n + t, 4] },
        rightBottom: { points: ['bl', 'cr'], offset: [4, r + t] },
        bottomLeft: { points: ['tl', 'bc'], offset: [-(n + t), 4] },
        leftBottom: { points: ['br', 'cl'], offset: [-4, r + t] },
      };
    return (
      Object.keys(a).forEach((s) => {
        (a[s] = i ? E(E({}, a[s]), { overflow: gd(o), targetOffset: UE }) : E(E({}, mv[s]), { overflow: gd(o) })),
          (a[s].ignoreShake = !0);
      }),
      a
    );
  }
  function XE() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    for (let t = 0, n = e.length; t < n; t++) if (e[t] !== void 0) return e[t];
  }
  const GE = Xi.map((e) => `${e}-inverse`);
  function qE(e) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
      ? [...GE, ...Xi].includes(e)
      : Xi.includes(e);
  }
  function ZE(e, t) {
    const n = qE(t),
      r = je({ [`${e}-${t}`]: t && n }),
      o = {},
      i = {};
    return (
      t && !n && ((o.background = t), (i['--antd-arrow-background-color'] = t)),
      { className: r, overlayStyle: o, arrowStyle: i }
    );
  }
  function bi(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return e.map((n) => `${t}${n}`).join(',');
  }
  const vv = 8;
  function QE(e) {
    const t = vv,
      { sizePopupArrow: n, contentRadius: r, borderRadiusOuter: o, limitVerticalRadius: i } = e,
      a = n / 2 - Math.ceil(o * (Math.sqrt(2) - 1)),
      s = (r > 12 ? r + 2 : 12) - a,
      l = i ? t - a : s;
    return { dropdownArrowOffset: s, dropdownArrowOffsetVertical: l };
  }
  function JE(e, t) {
    const {
        componentCls: n,
        sizePopupArrow: r,
        marginXXS: o,
        borderRadiusXS: i,
        borderRadiusOuter: a,
        boxShadowPopoverArrow: s,
      } = e,
      { colorBg: l, showArrowCls: c, contentRadius: u = e.borderRadiusLG, limitVerticalRadius: f } = t,
      { dropdownArrowOffsetVertical: d, dropdownArrowOffset: p } = QE({
        sizePopupArrow: r,
        contentRadius: u,
        borderRadiusOuter: a,
        limitVerticalRadius: f,
      }),
      h = r / 2 + o;
    return {
      [n]: {
        [`${n}-arrow`]: [
          E(E({ position: 'absolute', zIndex: 1, display: 'block' }, Dx(r, i, a, l, s)), {
            '&:before': { background: l },
          }),
        ],
        [[`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(',')]:
          { bottom: 0, transform: 'translateY(100%) rotate(180deg)' },
        [`&-placement-top ${n}-arrow`]: {
          left: { _skip_check_: !0, value: '50%' },
          transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
        },
        [`&-placement-topLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: p } },
        [`&-placement-topRight ${n}-arrow`]: { right: { _skip_check_: !0, value: p } },
        [[
          `&-placement-bottom ${n}-arrow`,
          `&-placement-bottomLeft ${n}-arrow`,
          `&-placement-bottomRight ${n}-arrow`,
        ].join(',')]: { top: 0, transform: 'translateY(-100%)' },
        [`&-placement-bottom ${n}-arrow`]: {
          left: { _skip_check_: !0, value: '50%' },
          transform: 'translateX(-50%) translateY(-100%)',
        },
        [`&-placement-bottomLeft ${n}-arrow`]: { left: { _skip_check_: !0, value: p } },
        [`&-placement-bottomRight ${n}-arrow`]: { right: { _skip_check_: !0, value: p } },
        [[`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(
          ',',
        )]: { right: { _skip_check_: !0, value: 0 }, transform: 'translateX(100%) rotate(90deg)' },
        [`&-placement-left ${n}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
        },
        [`&-placement-leftTop ${n}-arrow`]: { top: d },
        [`&-placement-leftBottom ${n}-arrow`]: { bottom: d },
        [[`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(
          ',',
        )]: { left: { _skip_check_: !0, value: 0 }, transform: 'translateX(-100%) rotate(-90deg)' },
        [`&-placement-right ${n}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop ${n}-arrow`]: { top: d },
        [`&-placement-rightBottom ${n}-arrow`]: { bottom: d },
        [bi(['&-placement-topLeft', '&-placement-top', '&-placement-topRight'], c)]: { paddingBottom: h },
        [bi(['&-placement-bottomLeft', '&-placement-bottom', '&-placement-bottomRight'], c)]: { paddingTop: h },
        [bi(['&-placement-leftTop', '&-placement-left', '&-placement-leftBottom'], c)]: {
          paddingRight: { _skip_check_: !0, value: h },
        },
        [bi(['&-placement-rightTop', '&-placement-right', '&-placement-rightBottom'], c)]: {
          paddingLeft: { _skip_check_: !0, value: h },
        },
      },
    };
  }
  const eP = (e) => {
      const {
        componentCls: t,
        tooltipMaxWidth: n,
        tooltipColor: r,
        tooltipBg: o,
        tooltipBorderRadius: i,
        zIndexPopup: a,
        controlHeight: s,
        boxShadowSecondary: l,
        paddingSM: c,
        paddingXS: u,
        tooltipRadiusOuter: f,
      } = e;
      return [
        {
          [t]: E(
            E(
              E(E({}, Aa(e)), {
                'position': 'absolute',
                'zIndex': a,
                'display': 'block',
                '&': [{ width: 'max-content' }, { width: 'intrinsic' }],
                'maxWidth': n,
                'visibility': 'visible',
                '&-hidden': { display: 'none' },
                '--antd-arrow-background-color': o,
                [`${t}-inner`]: {
                  minWidth: s,
                  minHeight: s,
                  padding: `${c / 2}px ${u}px`,
                  color: r,
                  textAlign: 'start',
                  textDecoration: 'none',
                  wordWrap: 'break-word',
                  backgroundColor: o,
                  borderRadius: i,
                  boxShadow: l,
                },
                [[
                  '&-placement-left',
                  '&-placement-leftTop',
                  '&-placement-leftBottom',
                  '&-placement-right',
                  '&-placement-rightTop',
                  '&-placement-rightBottom',
                ].join(',')]: { [`${t}-inner`]: { borderRadius: Math.min(i, vv) } },
                [`${t}-content`]: { position: 'relative' },
              }),
              Nx(e, (d, p) => {
                let { darkColor: h } = p;
                return {
                  [`&${t}-${d}`]: {
                    [`${t}-inner`]: { backgroundColor: h },
                    [`${t}-arrow`]: { '--antd-arrow-background-color': h },
                  },
                };
              }),
            ),
            { '&-rtl': { direction: 'rtl' } },
          ),
        },
        JE(or(e, { borderRadiusOuter: f }), {
          colorBg: 'var(--antd-arrow-background-color)',
          showArrowCls: '',
          contentRadius: i,
          limitVerticalRadius: !0,
        }),
        { [`${t}-pure`]: { position: 'relative', maxWidth: 'none' } },
      ];
    },
    tP = (e, t) =>
      Ia(
        'Tooltip',
        (r) => {
          if ((t == null ? void 0 : t.value) === !1) return [];
          const { borderRadius: o, colorTextLightSolid: i, colorBgDefault: a, borderRadiusOuter: s } = r,
            l = or(r, {
              tooltipMaxWidth: 250,
              tooltipColor: i,
              tooltipBorderRadius: o,
              tooltipBg: a,
              tooltipRadiusOuter: s > 4 ? 4 : s,
            });
          return [eP(l), hv(r, 'zoom-big-fast')];
        },
        (r) => {
          let { zIndexPopupBase: o, colorBgSpotlight: i } = r;
          return { zIndexPopup: o + 70, colorBgDefault: i };
        },
      )(e),
    nP = (e, t) => {
      const n = {},
        r = E({}, e);
      return (
        t.forEach((o) => {
          e && o in e && ((n[o] = e[o]), delete r[o]);
        }),
        { picked: n, omitted: r }
      );
    },
    rP = () => E(E({}, VE()), { title: fe.any }),
    oP = ce({
      compatConfig: { MODE: 3 },
      name: 'ATooltip',
      inheritAttrs: !1,
      props: Kl(rP(), {
        trigger: 'hover',
        align: {},
        placement: 'top',
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        arrowPointAtCenter: !1,
        autoAdjustOverflow: !0,
      }),
      slots: Object,
      setup(e, t) {
        let { slots: n, emit: r, attrs: o, expose: i } = t;
        const { prefixCls: a, getPopupContainer: s, direction: l, rootPrefixCls: c } = Zo('tooltip', e),
          u = P(() => {
            var S;
            return (S = e.open) !== null && S !== void 0 ? S : e.visible;
          }),
          f = te(XE([e.open, e.visible])),
          d = te();
        let p;
        _e(u, (S) => {
          Xe.cancel(p),
            (p = Xe(() => {
              f.value = !!S;
            }));
        });
        const h = () => {
            var S;
            const B = (S = e.title) !== null && S !== void 0 ? S : n.title;
            return !B && B !== 0;
          },
          m = (S) => {
            const B = h();
            u.value === void 0 && (f.value = B ? !1 : S),
              B || (r('update:visible', S), r('visibleChange', S), r('update:open', S), r('openChange', S));
          };
        i({
          getPopupDomNode: () => d.value.getPopupDomNode(),
          open: f,
          forcePopupAlign: () => {
            var S;
            return (S = d.value) === null || S === void 0 ? void 0 : S.forcePopupAlign();
          },
        });
        const b = P(() => {
            const { builtinPlacements: S, arrowPointAtCenter: B, autoAdjustOverflow: Y } = e;
            return S || YE({ arrowPointAtCenter: B, autoAdjustOverflow: Y });
          }),
          _ = (S) => S || S === '',
          M = (S) => {
            const B = S.type;
            if (
              typeof B == 'object' &&
              S.props &&
              (((B.__ANT_BUTTON === !0 || B === 'button') && _(S.props.disabled)) ||
                (B.__ANT_SWITCH === !0 && (_(S.props.disabled) || _(S.props.loading))) ||
                (B.__ANT_RADIO === !0 && _(S.props.disabled)))
            ) {
              const { picked: Y, omitted: ne } = nP(K_(S), [
                  'position',
                  'left',
                  'right',
                  'top',
                  'bottom',
                  'float',
                  'display',
                  'zIndex',
                ]),
                Z = E(E({ display: 'inline-block' }, Y), {
                  cursor: 'not-allowed',
                  lineHeight: 1,
                  width: S.props && S.props.block ? '100%' : void 0,
                }),
                k = E(E({}, ne), { pointerEvents: 'none' }),
                A = Xt(S, { style: k }, !0);
              return v('span', { style: Z, class: `${a.value}-disabled-compatible-wrapper` }, [A]);
            }
            return S;
          },
          R = () => {
            var S, B;
            return (S = e.title) !== null && S !== void 0
              ? S
              : (B = n.title) === null || B === void 0
              ? void 0
              : B.call(n);
          },
          x = (S, B) => {
            const Y = b.value,
              ne = Object.keys(Y).find((Z) => {
                var k, A;
                return (
                  Y[Z].points[0] === ((k = B.points) === null || k === void 0 ? void 0 : k[0]) &&
                  Y[Z].points[1] === ((A = B.points) === null || A === void 0 ? void 0 : A[1])
                );
              });
            if (ne) {
              const Z = S.getBoundingClientRect(),
                k = { top: '50%', left: '50%' };
              ne.indexOf('top') >= 0 || ne.indexOf('Bottom') >= 0
                ? (k.top = `${Z.height - B.offset[1]}px`)
                : (ne.indexOf('Top') >= 0 || ne.indexOf('bottom') >= 0) && (k.top = `${-B.offset[1]}px`),
                ne.indexOf('left') >= 0 || ne.indexOf('Right') >= 0
                  ? (k.left = `${Z.width - B.offset[0]}px`)
                  : (ne.indexOf('right') >= 0 || ne.indexOf('Left') >= 0) && (k.left = `${-B.offset[0]}px`),
                (S.style.transformOrigin = `${k.left} ${k.top}`);
            }
          },
          C = P(() => ZE(a.value, e.color)),
          T = P(() => o['data-popover-inject']),
          [$, L] = tP(
            a,
            P(() => !T.value),
          );
        return () => {
          var S, B;
          const { openClassName: Y, overlayClassName: ne, overlayStyle: Z, overlayInnerStyle: k } = e;
          let A =
            (B = qo((S = n.default) === null || S === void 0 ? void 0 : S.call(n))) !== null && B !== void 0 ? B : null;
          A = A.length === 1 ? A[0] : A;
          let z = f.value;
          if ((u.value === void 0 && h() && (z = !1), !A)) return null;
          const j = M(Oa(A) && !U_(A) ? A : v('span', null, [A])),
            ee = je({ [Y || `${a.value}-open`]: !0, [j.props && j.props.class]: j.props && j.props.class }),
            ae = je(ne, { [`${a.value}-rtl`]: l.value === 'rtl' }, C.value.className, L.value),
            Q = E(E({}, C.value.overlayStyle), k),
            se = C.value.arrowStyle,
            me = E(E(E({}, o), e), {
              prefixCls: a.value,
              getPopupContainer: s == null ? void 0 : s.value,
              builtinPlacements: b.value,
              visible: z,
              ref: d,
              overlayClassName: ae,
              overlayStyle: E(E({}, se), Z),
              overlayInnerStyle: Q,
              onVisibleChange: m,
              onPopupAlign: x,
              transitionName: fO(c.value, 'zoom-big-fast', e.transitionName),
            });
          return $(
            v(WE, me, {
              default: () => [f.value ? Xt(j, { class: ee }) : j],
              arrowContent: () => v('span', { class: `${a.value}-arrow-content` }, null),
              overlay: R,
            }),
          );
        };
      },
    }),
    iP = Xl(oP),
    vr = { adjustX: 1, adjustY: 1 },
    gr = [0, 0],
    aP = {
      topLeft: { points: ['bl', 'tl'], overflow: vr, offset: [0, -4], targetOffset: gr },
      topCenter: { points: ['bc', 'tc'], overflow: vr, offset: [0, -4], targetOffset: gr },
      topRight: { points: ['br', 'tr'], overflow: vr, offset: [0, -4], targetOffset: gr },
      bottomLeft: { points: ['tl', 'bl'], overflow: vr, offset: [0, 4], targetOffset: gr },
      bottomCenter: { points: ['tc', 'bc'], overflow: vr, offset: [0, 4], targetOffset: gr },
      bottomRight: { points: ['tr', 'br'], overflow: vr, offset: [0, 4], targetOffset: gr },
    },
    sP = aP;
  var lP =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  const cP = ce({
    compatConfig: { MODE: 3 },
    props: {
      minOverlayWidthMatchTrigger: { type: Boolean, default: void 0 },
      arrow: { type: Boolean, default: !1 },
      prefixCls: fe.string.def('rc-dropdown'),
      transitionName: String,
      overlayClassName: fe.string.def(''),
      openClassName: String,
      animation: fe.any,
      align: fe.object,
      overlayStyle: { type: Object, default: void 0 },
      placement: fe.string.def('bottomLeft'),
      overlay: fe.any,
      trigger: fe.oneOfType([fe.string, fe.arrayOf(fe.string)]).def('hover'),
      alignPoint: { type: Boolean, default: void 0 },
      showAction: fe.array,
      hideAction: fe.array,
      getPopupContainer: Function,
      visible: { type: Boolean, default: void 0 },
      defaultVisible: { type: Boolean, default: !1 },
      mouseEnterDelay: fe.number.def(0.15),
      mouseLeaveDelay: fe.number.def(0.1),
    },
    emits: ['visibleChange', 'overlayClick'],
    setup(e, t) {
      let { slots: n, emit: r, expose: o } = t;
      const i = te(!!e.visible);
      _e(
        () => e.visible,
        (p) => {
          p !== void 0 && (i.value = p);
        },
      );
      const a = te();
      o({ triggerRef: a });
      const s = (p) => {
          e.visible === void 0 && (i.value = !1), r('overlayClick', p);
        },
        l = (p) => {
          e.visible === void 0 && (i.value = p), r('visibleChange', p);
        },
        c = () => {
          var p;
          const h = (p = n.overlay) === null || p === void 0 ? void 0 : p.call(n),
            m = { prefixCls: `${e.prefixCls}-menu`, onClick: s };
          return v(Ie, { key: Ih }, [e.arrow && v('div', { class: `${e.prefixCls}-arrow` }, null), Xt(h, m, !1)]);
        },
        u = P(() => {
          const { minOverlayWidthMatchTrigger: p = !e.alignPoint } = e;
          return p;
        }),
        f = () => {
          var p;
          const h = (p = n.default) === null || p === void 0 ? void 0 : p.call(n);
          return i.value && h ? Xt(h[0], { class: e.openClassName || `${e.prefixCls}-open` }, !1) : h;
        },
        d = P(() => (!e.hideAction && e.trigger.indexOf('contextmenu') !== -1 ? ['click'] : e.hideAction));
      return () => {
        const {
            prefixCls: p,
            arrow: h,
            showAction: m,
            overlayStyle: y,
            trigger: b,
            placement: _,
            align: M,
            getPopupContainer: R,
            transitionName: x,
            animation: C,
            overlayClassName: T,
          } = e,
          $ = lP(e, [
            'prefixCls',
            'arrow',
            'showAction',
            'overlayStyle',
            'trigger',
            'placement',
            'align',
            'getPopupContainer',
            'transitionName',
            'animation',
            'overlayClassName',
          ]);
        return v(
          pc,
          de(
            de({}, $),
            {},
            {
              prefixCls: p,
              ref: a,
              popupClassName: je(T, { [`${p}-show-arrow`]: h }),
              popupStyle: y,
              builtinPlacements: sP,
              action: b,
              showAction: m,
              hideAction: d.value || [],
              popupPlacement: _,
              popupAlign: M,
              popupTransitionName: x,
              popupAnimation: C,
              popupVisible: i.value,
              stretch: u.value ? 'minWidth' : '',
              onPopupVisibleChange: l,
              getPopupContainer: R,
            },
          ),
          { popup: c, default: f },
        );
      };
    },
  });
  var uP = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'ellipsis',
    theme: 'outlined',
  };
  const fP = uP;
  function yd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {},
        r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          }),
        )),
        r.forEach(function (o) {
          dP(e, o, n[o]);
        });
    }
    return e;
  }
  function dP(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  var Cc = function (t, n) {
    var r = yd({}, t, n.attrs);
    return v(gc, yd({}, r, { icon: fP }), null);
  };
  Cc.displayName = 'EllipsisOutlined';
  Cc.inheritAttrs = !1;
  const gv = Cc,
    yv = Symbol('OverrideContextKey'),
    bv = () => Ae(yv, void 0),
    pP = (e) => {
      var t, n, r;
      const { prefixCls: o, mode: i, selectable: a, validator: s, onClick: l, expandIcon: c } = bv() || {};
      it(yv, {
        prefixCls: P(() => {
          var u, f;
          return (f = (u = e.prefixCls) === null || u === void 0 ? void 0 : u.value) !== null && f !== void 0
            ? f
            : o == null
            ? void 0
            : o.value;
        }),
        mode: P(() => {
          var u, f;
          return (f = (u = e.mode) === null || u === void 0 ? void 0 : u.value) !== null && f !== void 0
            ? f
            : i == null
            ? void 0
            : i.value;
        }),
        selectable: P(() => {
          var u, f;
          return (f = (u = e.selectable) === null || u === void 0 ? void 0 : u.value) !== null && f !== void 0
            ? f
            : a == null
            ? void 0
            : a.value;
        }),
        validator: (t = e.validator) !== null && t !== void 0 ? t : s,
        onClick: (n = e.onClick) !== null && n !== void 0 ? n : l,
        expandIcon: (r = e.expandIcon) !== null && r !== void 0 ? r : c == null ? void 0 : c.value,
      });
    };
  function hP(e, t, n, r) {
    let o = n ? n.call(r, e, t) : void 0;
    if (o !== void 0) return !!o;
    if (e === t) return !0;
    if (typeof e != 'object' || !e || typeof t != 'object' || !t) return !1;
    const i = Object.keys(e),
      a = Object.keys(t);
    if (i.length !== a.length) return !1;
    const s = Object.prototype.hasOwnProperty.bind(t);
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      if (!s(c)) return !1;
      const u = e[c],
        f = t[c];
      if (((o = n ? n.call(r, u, f, c) : void 0), o === !1 || (o === void 0 && u !== f))) return !1;
    }
    return !0;
  }
  function ao(e, t) {
    return hP(Te(e), Te(t));
  }
  const wv = Symbol('menuContextKey'),
    _v = (e) => {
      it(wv, e);
    },
    mn = () => Ae(wv),
    Cv = Symbol('ForceRenderKey'),
    mP = (e) => {
      it(Cv, e);
    },
    xv = () => Ae(Cv, !1),
    $v = Symbol('menuFirstLevelContextKey'),
    Sv = (e) => {
      it($v, e);
    },
    vP = () => Ae($v, !0),
    ea = ce({
      compatConfig: { MODE: 3 },
      name: 'MenuContextProvider',
      inheritAttrs: !1,
      props: { mode: { type: String, default: void 0 }, overflowDisabled: { type: Boolean, default: void 0 } },
      setup(e, t) {
        let { slots: n } = t;
        const r = mn(),
          o = E({}, r);
        return (
          e.mode !== void 0 && (o.mode = Li(e, 'mode')),
          e.overflowDisabled !== void 0 && (o.overflowDisabled = Li(e, 'overflowDisabled')),
          _v(o),
          () => {
            var i;
            return (i = n.default) === null || i === void 0 ? void 0 : i.call(n);
          }
        );
      },
    }),
    gP = _v,
    yP = Symbol('siderCollapsed'),
    wi = '$$__vc-menu-more__key',
    Tv = Symbol('KeyPathContext'),
    xc = () => Ae(Tv, { parentEventKeys: P(() => []), parentKeys: P(() => []), parentInfo: {} }),
    bP = (e, t, n) => {
      const { parentEventKeys: r, parentKeys: o } = xc(),
        i = P(() => [...r.value, e]),
        a = P(() => [...o.value, t]);
      return it(Tv, { parentEventKeys: i, parentKeys: a, parentInfo: n }), a;
    },
    Ov = Symbol('measure'),
    bd = ce({
      compatConfig: { MODE: 3 },
      setup(e, t) {
        let { slots: n } = t;
        return (
          it(Ov, !0),
          () => {
            var r;
            return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
          }
        );
      },
    }),
    $c = () => Ae(Ov, !1),
    wP = bP;
  function Ev(e) {
    const { mode: t, rtl: n, inlineIndent: r } = mn();
    return P(() =>
      t.value !== 'inline'
        ? null
        : n.value
        ? { paddingRight: `${e.value * r.value}px` }
        : { paddingLeft: `${e.value * r.value}px` },
    );
  }
  let _P = 0;
  const CP = () => ({
      id: String,
      role: String,
      disabled: Boolean,
      danger: Boolean,
      title: { type: [String, Boolean], default: void 0 },
      icon: fe.any,
      onMouseenter: Function,
      onMouseleave: Function,
      onClick: Function,
      onKeydown: Function,
      onFocus: Function,
      originItemValue: lt(),
    }),
    zr = ce({
      compatConfig: { MODE: 3 },
      name: 'AMenuItem',
      inheritAttrs: !1,
      props: CP(),
      slots: Object,
      setup(e, t) {
        let { slots: n, emit: r, attrs: o } = t;
        const i = fn(),
          a = $c(),
          s = typeof i.vnode.key == 'symbol' ? String(i.vnode.key) : i.vnode.key;
        nr(typeof i.vnode.key != 'symbol', 'MenuItem', `MenuItem \`:key="${String(s)}"\` not support Symbol type`);
        const l = `menu_item_${++_P}_$$_${s}`,
          { parentEventKeys: c, parentKeys: u } = xc(),
          {
            prefixCls: f,
            activeKeys: d,
            disabled: p,
            changeActiveKeys: h,
            rtl: m,
            inlineCollapsed: y,
            siderCollapsed: b,
            onItemClick: _,
            selectedKeys: M,
            registerMenuInfo: R,
            unRegisterMenuInfo: x,
          } = mn(),
          C = vP(),
          T = le(!1),
          $ = P(() => [...u.value, s]);
        R(l, { eventKey: l, key: s, parentEventKeys: c, parentKeys: u, isLeaf: !0 }),
          St(() => {
            x(l);
          }),
          _e(
            d,
            () => {
              T.value = !!d.value.find((Q) => Q === s);
            },
            { immediate: !0 },
          );
        const S = P(() => p.value || e.disabled),
          B = P(() => M.value.includes(s)),
          Y = P(() => {
            const Q = `${f.value}-item`;
            return {
              [`${Q}`]: !0,
              [`${Q}-danger`]: e.danger,
              [`${Q}-active`]: T.value,
              [`${Q}-selected`]: B.value,
              [`${Q}-disabled`]: S.value,
            };
          }),
          ne = (Q) => ({
            key: s,
            eventKey: l,
            keyPath: $.value,
            eventKeyPath: [...c.value, l],
            domEvent: Q,
            item: E(E({}, e), o),
          }),
          Z = (Q) => {
            if (S.value) return;
            const se = ne(Q);
            r('click', Q), _(se);
          },
          k = (Q) => {
            S.value || (h($.value), r('mouseenter', Q));
          },
          A = (Q) => {
            S.value || (h([]), r('mouseleave', Q));
          },
          z = (Q) => {
            if ((r('keydown', Q), Q.which === kt.ENTER)) {
              const se = ne(Q);
              r('click', Q), _(se);
            }
          },
          j = (Q) => {
            h($.value), r('focus', Q);
          },
          ee = (Q, se) => {
            const me = v('span', { class: `${f.value}-title-content` }, [se]);
            return (!Q || (Oa(se) && se.type === 'span')) && se && y.value && C && typeof se == 'string'
              ? v('div', { class: `${f.value}-inline-collapsed-noicon` }, [se.charAt(0)])
              : me;
          },
          ae = Ev(P(() => $.value.length));
        return () => {
          var Q, se, me, xe, Pe;
          if (a) return null;
          const G =
              (Q = e.title) !== null && Q !== void 0
                ? Q
                : (se = n.title) === null || se === void 0
                ? void 0
                : se.call(n),
            I = Lt((me = n.default) === null || me === void 0 ? void 0 : me.call(n)),
            X = I.length;
          let K = G;
          typeof G > 'u' ? (K = C && X ? I : '') : G === !1 && (K = '');
          const q = { title: K };
          !b.value && !y.value && ((q.title = null), (q.open = !1));
          const ue = {};
          e.role === 'option' && (ue['aria-selected'] = B.value);
          const g =
            (xe = e.icon) !== null && xe !== void 0
              ? xe
              : (Pe = n.icon) === null || Pe === void 0
              ? void 0
              : Pe.call(n, e);
          return v(
            iP,
            de(
              de({}, q),
              {},
              { placement: m.value ? 'left' : 'right', overlayClassName: `${f.value}-inline-collapsed-tooltip` },
            ),
            {
              default: () => [
                v(
                  So.Item,
                  de(
                    de(
                      de({ component: 'li' }, o),
                      {},
                      {
                        'id': e.id,
                        'style': E(E({}, o.style || {}), ae.value),
                        'class': [
                          Y.value,
                          { [`${o.class}`]: !!o.class, [`${f.value}-item-only-child`]: (g ? X + 1 : X) === 1 },
                        ],
                        'role': e.role || 'menuitem',
                        'tabindex': e.disabled ? null : -1,
                        'data-menu-id': s,
                        'aria-disabled': e.disabled,
                      },
                      ue,
                    ),
                    {},
                    {
                      onMouseenter: k,
                      onMouseleave: A,
                      onClick: Z,
                      onKeydown: z,
                      onFocus: j,
                      title: typeof G == 'string' ? G : void 0,
                    },
                  ),
                  {
                    default: () => [
                      Xt(typeof g == 'function' ? g(e.originItemValue) : g, { class: `${f.value}-item-icon` }, !1),
                      ee(g, I),
                    ],
                  },
                ),
              ],
            },
          );
        };
      },
    }),
    $n = { adjustX: 1, adjustY: 1 },
    xP = {
      topLeft: { points: ['bl', 'tl'], overflow: $n, offset: [0, -7] },
      bottomLeft: { points: ['tl', 'bl'], overflow: $n, offset: [0, 7] },
      leftTop: { points: ['tr', 'tl'], overflow: $n, offset: [-4, 0] },
      rightTop: { points: ['tl', 'tr'], overflow: $n, offset: [4, 0] },
    },
    $P = {
      topLeft: { points: ['bl', 'tl'], overflow: $n, offset: [0, -7] },
      bottomLeft: { points: ['tl', 'bl'], overflow: $n, offset: [0, 7] },
      rightTop: { points: ['tr', 'tl'], overflow: $n, offset: [-4, 0] },
      leftTop: { points: ['tl', 'tr'], overflow: $n, offset: [4, 0] },
    },
    SP = {
      'horizontal': 'bottomLeft',
      'vertical': 'rightTop',
      'vertical-left': 'rightTop',
      'vertical-right': 'leftTop',
    },
    wd = ce({
      compatConfig: { MODE: 3 },
      name: 'PopupTrigger',
      inheritAttrs: !1,
      props: {
        prefixCls: String,
        mode: String,
        visible: Boolean,
        popupClassName: String,
        popupOffset: Array,
        disabled: Boolean,
        onVisibleChange: Function,
      },
      slots: Object,
      emits: ['visibleChange'],
      setup(e, t) {
        let { slots: n, emit: r } = t;
        const o = le(!1),
          {
            getPopupContainer: i,
            rtl: a,
            subMenuOpenDelay: s,
            subMenuCloseDelay: l,
            builtinPlacements: c,
            triggerSubMenuAction: u,
            forceSubMenuRender: f,
            motion: d,
            defaultMotions: p,
            rootClassName: h,
          } = mn(),
          m = xv(),
          y = P(() => (a.value ? E(E({}, $P), c.value) : E(E({}, xP), c.value))),
          b = P(() => SP[e.mode]),
          _ = le();
        _e(
          () => e.visible,
          (x) => {
            Xe.cancel(_.value),
              (_.value = Xe(() => {
                o.value = x;
              }));
          },
          { immediate: !0 },
        ),
          St(() => {
            Xe.cancel(_.value);
          });
        const M = (x) => {
            r('visibleChange', x);
          },
          R = P(() => {
            var x, C;
            const T =
                d.value ||
                ((x = p.value) === null || x === void 0 ? void 0 : x[e.mode]) ||
                ((C = p.value) === null || C === void 0 ? void 0 : C.other),
              $ = typeof T == 'function' ? T() : T;
            return $ ? qm($.name, { css: !0 }) : void 0;
          });
        return () => {
          const { prefixCls: x, popupClassName: C, mode: T, popupOffset: $, disabled: L } = e;
          return v(
            pc,
            {
              prefixCls: x,
              popupClassName: je(`${x}-popup`, { [`${x}-rtl`]: a.value }, C, h.value),
              stretch: T === 'horizontal' ? 'minWidth' : null,
              getPopupContainer: i.value,
              builtinPlacements: y.value,
              popupPlacement: b.value,
              popupVisible: o.value,
              popupAlign: $ && { offset: $ },
              action: L ? [] : [u.value],
              mouseEnterDelay: s.value,
              mouseLeaveDelay: l.value,
              onPopupVisibleChange: M,
              forceRender: m || f.value,
              popupAnimation: R.value,
            },
            { popup: n.popup, default: n.default },
          );
        };
      },
    }),
    Pv = (e, t) => {
      let { slots: n, attrs: r } = t;
      var o;
      const { prefixCls: i, mode: a } = mn();
      return v(
        'ul',
        de(
          de({}, r),
          {},
          {
            'class': je(i.value, `${i.value}-sub`, `${i.value}-${a.value === 'inline' ? 'inline' : 'vertical'}`),
            'data-menu-list': !0,
          },
        ),
        [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)],
      );
    };
  Pv.displayName = 'SubMenuList';
  const kv = Pv,
    TP = ce({
      compatConfig: { MODE: 3 },
      name: 'InlineSubMenuList',
      inheritAttrs: !1,
      props: { id: String, open: Boolean, keyPath: Array },
      setup(e, t) {
        let { slots: n } = t;
        const r = P(() => 'inline'),
          { motion: o, mode: i, defaultMotions: a } = mn(),
          s = P(() => i.value === r.value),
          l = te(!s.value),
          c = P(() => (s.value ? e.open : !1));
        _e(
          i,
          () => {
            s.value && (l.value = !1);
          },
          { flush: 'post' },
        );
        const u = P(() => {
          var f, d;
          const p =
              o.value ||
              ((f = a.value) === null || f === void 0 ? void 0 : f[r.value]) ||
              ((d = a.value) === null || d === void 0 ? void 0 : d.other),
            h = typeof p == 'function' ? p() : p;
          return E(E({}, h), { appear: e.keyPath.length <= 1 });
        });
        return () => {
          var f;
          return l.value
            ? null
            : v(
                ea,
                { mode: r.value },
                {
                  default: () => [
                    v(lr, u.value, {
                      default: () => [
                        da(
                          v(
                            kv,
                            { id: e.id },
                            { default: () => [(f = n.default) === null || f === void 0 ? void 0 : f.call(n)] },
                          ),
                          [[Nl, c.value]],
                        ),
                      ],
                    }),
                  ],
                },
              );
        };
      },
    });
  let _d = 0;
  const OP = () => ({
      icon: fe.any,
      title: fe.any,
      disabled: Boolean,
      level: Number,
      popupClassName: String,
      popupOffset: Array,
      internalPopupClose: Boolean,
      eventKey: String,
      expandIcon: Function,
      theme: String,
      onMouseenter: Function,
      onMouseleave: Function,
      onTitleClick: Function,
      originItemValue: lt(),
    }),
    Fr = ce({
      compatConfig: { MODE: 3 },
      name: 'ASubMenu',
      inheritAttrs: !1,
      props: OP(),
      slots: Object,
      setup(e, t) {
        let { slots: n, attrs: r, emit: o } = t;
        var i, a;
        Sv(!1);
        const s = $c(),
          l = fn(),
          c = typeof l.vnode.key == 'symbol' ? String(l.vnode.key) : l.vnode.key;
        nr(typeof l.vnode.key != 'symbol', 'SubMenu', `SubMenu \`:key="${String(c)}"\` not support Symbol type`);
        const u = Vs(c) ? c : `sub_menu_${++_d}_$$_not_set_key`,
          f = (i = e.eventKey) !== null && i !== void 0 ? i : Vs(c) ? `sub_menu_${++_d}_$$_${c}` : u,
          { parentEventKeys: d, parentInfo: p, parentKeys: h } = xc(),
          m = P(() => [...h.value, u]),
          y = le([]),
          b = { eventKey: f, key: u, parentEventKeys: d, childrenEventKeys: y, parentKeys: h };
        (a = p.childrenEventKeys) === null || a === void 0 || a.value.push(f),
          St(() => {
            var D;
            p.childrenEventKeys &&
              (p.childrenEventKeys.value =
                (D = p.childrenEventKeys) === null || D === void 0 ? void 0 : D.value.filter((V) => V != f));
          }),
          wP(f, u, b);
        const {
            prefixCls: _,
            activeKeys: M,
            disabled: R,
            changeActiveKeys: x,
            mode: C,
            inlineCollapsed: T,
            openKeys: $,
            overflowDisabled: L,
            onOpenChange: S,
            registerMenuInfo: B,
            unRegisterMenuInfo: Y,
            selectedSubMenuKeys: ne,
            expandIcon: Z,
            theme: k,
          } = mn(),
          A = c != null,
          z = !s && (xv() || !A);
        mP(z),
          ((s && A) || (!s && !A) || z) &&
            (B(f, b),
            St(() => {
              Y(f);
            }));
        const j = P(() => `${_.value}-submenu`),
          ee = P(() => R.value || e.disabled),
          ae = le(),
          Q = le(),
          se = P(() => $.value.includes(u)),
          me = P(() => !L.value && se.value),
          xe = P(() => ne.value.includes(u)),
          Pe = le(!1);
        _e(
          M,
          () => {
            Pe.value = !!M.value.find((D) => D === u);
          },
          { immediate: !0 },
        );
        const G = (D) => {
            ee.value || (o('titleClick', D, u), C.value === 'inline' && S(u, !se.value));
          },
          I = (D) => {
            ee.value || (x(m.value), o('mouseenter', D));
          },
          X = (D) => {
            ee.value || (x([]), o('mouseleave', D));
          },
          K = Ev(P(() => m.value.length)),
          q = (D) => {
            C.value !== 'inline' && S(u, D);
          },
          ue = () => {
            x(m.value);
          },
          g = f && `${f}-popup`,
          w = P(() => je(_.value, `${_.value}-${e.theme || k.value}`, e.popupClassName)),
          O = (D, V) => {
            if (!V)
              return T.value && !h.value.length && D && typeof D == 'string'
                ? v('div', { class: `${_.value}-inline-collapsed-noicon` }, [D.charAt(0)])
                : v('span', { class: `${_.value}-title-content` }, [D]);
            const W = Oa(D) && D.type === 'span';
            return v(Ie, null, [
              Xt(typeof V == 'function' ? V(e.originItemValue) : V, { class: `${_.value}-item-icon` }, !1),
              W ? D : v('span', { class: `${_.value}-title-content` }, [D]),
            ]);
          },
          N = P(() => (C.value !== 'inline' && m.value.length > 1 ? 'vertical' : C.value)),
          F = P(() => (C.value === 'horizontal' ? 'vertical' : C.value)),
          H = P(() => (N.value === 'horizontal' ? 'vertical' : N.value)),
          U = () => {
            var D, V;
            const W = j.value,
              re =
                (D = e.icon) !== null && D !== void 0
                  ? D
                  : (V = n.icon) === null || V === void 0
                  ? void 0
                  : V.call(n, e),
              oe = e.expandIcon || n.expandIcon || Z.value,
              ie = O(Ul(n, e, 'title'), re);
            return v(
              'div',
              {
                'style': K.value,
                'class': `${W}-title`,
                'tabindex': ee.value ? null : -1,
                'ref': ae,
                'title': typeof ie == 'string' ? ie : null,
                'data-menu-id': u,
                'aria-expanded': me.value,
                'aria-haspopup': !0,
                'aria-controls': g,
                'aria-disabled': ee.value,
                'onClick': G,
                'onFocus': ue,
              },
              [
                ie,
                C.value !== 'horizontal' && oe
                  ? oe(E(E({}, e), { isOpen: me.value }))
                  : v('i', { class: `${W}-arrow` }, null),
              ],
            );
          };
        return () => {
          var D;
          if (s) return A ? ((D = n.default) === null || D === void 0 ? void 0 : D.call(n)) : null;
          const V = j.value;
          let W = () => null;
          if (!L.value && C.value !== 'inline') {
            const re = C.value === 'horizontal' ? [0, 8] : [10, 0];
            W = () =>
              v(
                wd,
                {
                  mode: N.value,
                  prefixCls: V,
                  visible: !e.internalPopupClose && me.value,
                  popupClassName: w.value,
                  popupOffset: e.popupOffset || re,
                  disabled: ee.value,
                  onVisibleChange: q,
                },
                {
                  default: () => [U()],
                  popup: () =>
                    v(ea, { mode: H.value }, { default: () => [v(kv, { id: g, ref: Q }, { default: n.default })] }),
                },
              );
          } else W = () => v(wd, null, { default: U });
          return v(
            ea,
            { mode: F.value },
            {
              default: () => [
                v(
                  So.Item,
                  de(
                    de({ component: 'li' }, r),
                    {},
                    {
                      'role': 'none',
                      'class': je(V, `${V}-${C.value}`, r.class, {
                        [`${V}-open`]: me.value,
                        [`${V}-active`]: Pe.value,
                        [`${V}-selected`]: xe.value,
                        [`${V}-disabled`]: ee.value,
                      }),
                      'onMouseenter': I,
                      'onMouseleave': X,
                      'data-submenu-id': u,
                    },
                  ),
                  {
                    default: () =>
                      v(Ie, null, [
                        W(),
                        !L.value && v(TP, { id: g, open: me.value, keyPath: m.value }, { default: n.default }),
                      ]),
                  },
                ),
              ],
            },
          );
        };
      },
    });
  function Mv(e, t) {
    return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
  }
  function Cd(e, t) {
    e.classList ? e.classList.add(t) : Mv(e, t) || (e.className = `${e.className} ${t}`);
  }
  function xd(e, t) {
    if (e.classList) e.classList.remove(t);
    else if (Mv(e, t)) {
      const n = e.className;
      e.className = ` ${n} `.replace(` ${t} `, ' ');
    }
  }
  const EP = function () {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'ant-motion-collapse',
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return {
        name: e,
        appear: t,
        css: !0,
        onBeforeEnter: (n) => {
          (n.style.height = '0px'), (n.style.opacity = '0'), Cd(n, e);
        },
        onEnter: (n) => {
          tt(() => {
            (n.style.height = `${n.scrollHeight}px`), (n.style.opacity = '1');
          });
        },
        onAfterEnter: (n) => {
          n && (xd(n, e), (n.style.height = null), (n.style.opacity = null));
        },
        onBeforeLeave: (n) => {
          Cd(n, e), (n.style.height = `${n.offsetHeight}px`), (n.style.opacity = null);
        },
        onLeave: (n) => {
          setTimeout(() => {
            (n.style.height = '0px'), (n.style.opacity = '0');
          });
        },
        onAfterLeave: (n) => {
          n && (xd(n, e), n.style && ((n.style.height = null), (n.style.opacity = null)));
        },
      };
    },
    PP = EP,
    kP = () => ({ title: fe.any, originItemValue: lt() }),
    ta = ce({
      compatConfig: { MODE: 3 },
      name: 'AMenuItemGroup',
      inheritAttrs: !1,
      props: kP(),
      slots: Object,
      setup(e, t) {
        let { slots: n, attrs: r } = t;
        const { prefixCls: o } = mn(),
          i = P(() => `${o.value}-item-group`),
          a = $c();
        return () => {
          var s, l;
          return a
            ? (s = n.default) === null || s === void 0
              ? void 0
              : s.call(n)
            : v('li', de(de({}, r), {}, { onClick: (c) => c.stopPropagation(), class: i.value }), [
                v('div', { title: typeof e.title == 'string' ? e.title : void 0, class: `${i.value}-title` }, [
                  Ul(n, e, 'title'),
                ]),
                v('ul', { class: `${i.value}-list` }, [(l = n.default) === null || l === void 0 ? void 0 : l.call(n)]),
              ]);
        };
      },
    }),
    MP = () => ({ prefixCls: String, dashed: Boolean }),
    na = ce({
      compatConfig: { MODE: 3 },
      name: 'AMenuDivider',
      props: MP(),
      setup(e) {
        const { prefixCls: t } = mn(),
          n = P(() => ({ [`${t.value}-item-divider`]: !0, [`${t.value}-item-divider-dashed`]: !!e.dashed }));
        return () => v('li', { class: n.value }, null);
      },
    });
  var AP =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      return n;
    };
  function pl(e, t, n) {
    return (e || [])
      .map((r, o) => {
        if (r && typeof r == 'object') {
          const i = r,
            { label: a, children: s, key: l, type: c } = i,
            u = AP(i, ['label', 'children', 'key', 'type']),
            f = l ?? `tmp-${o}`,
            d = n ? n.parentKeys.slice() : [],
            p = [],
            h = {
              eventKey: f,
              key: f,
              parentEventKeys: te(d),
              parentKeys: te(d),
              childrenEventKeys: te(p),
              isLeaf: !1,
            };
          if (s || c === 'group') {
            if (c === 'group') {
              const y = pl(s, t, n);
              return v(ta, de(de({ key: f }, u), {}, { title: a, originItemValue: r }), { default: () => [y] });
            }
            t.set(f, h), n && n.childrenEventKeys.push(f);
            const m = pl(s, t, { childrenEventKeys: p, parentKeys: [].concat(d, f) });
            return v(Fr, de(de({ key: f }, u), {}, { title: a, originItemValue: r }), { default: () => [m] });
          }
          return c === 'divider'
            ? v(na, de({ key: f }, u), null)
            : ((h.isLeaf = !0),
              t.set(f, h),
              v(zr, de(de({ key: f }, u), {}, { originItemValue: r }), { default: () => [a] }));
        }
        return null;
      })
      .filter((r) => r);
  }
  function IP(e) {
    const t = le([]),
      n = le(!1),
      r = le(new Map());
    return (
      _e(
        () => e.items,
        () => {
          const o = new Map();
          (n.value = !1), e.items ? ((n.value = !0), (t.value = pl(e.items, o))) : (t.value = void 0), (r.value = o);
        },
        { immediate: !0, deep: !0 },
      ),
      { itemsNodes: t, store: r, hasItmes: n }
    );
  }
  const RP = (e) => {
      const {
        componentCls: t,
        motionDurationSlow: n,
        menuHorizontalHeight: r,
        colorSplit: o,
        lineWidth: i,
        lineType: a,
        menuItemPaddingInline: s,
      } = e;
      return {
        [`${t}-horizontal`]: {
          'lineHeight': `${r}px`,
          'border': 0,
          'borderBottom': `${i}px ${a} ${o}`,
          'boxShadow': 'none',
          '&::after': { display: 'block', clear: 'both', height: 0, content: '"\\20"' },
          [`${t}-item, ${t}-submenu`]: {
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'bottom',
            paddingInline: s,
          },
          [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: { backgroundColor: 'transparent' },
          [`${t}-item, ${t}-submenu-title`]: { transition: [`border-color ${n}`, `background ${n}`].join(',') },
          [`${t}-submenu-arrow`]: { display: 'none' },
        },
      };
    },
    LP = RP,
    DP = (e) => {
      let { componentCls: t, menuArrowOffset: n } = e;
      return {
        [`${t}-rtl`]: { direction: 'rtl' },
        [`${t}-submenu-rtl`]: { transformOrigin: '100% 0' },
        [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
          [`${t}-submenu-arrow`]: {
            '&::before': { transform: `rotate(-45deg) translateY(-${n})` },
            '&::after': { transform: `rotate(45deg) translateY(${n})` },
          },
        },
      };
    },
    NP = DP,
    $d = (e) => E({}, dm(e)),
    jP = (e, t) => {
      const {
        componentCls: n,
        colorItemText: r,
        colorItemTextSelected: o,
        colorGroupTitle: i,
        colorItemBg: a,
        colorSubItemBg: s,
        colorItemBgSelected: l,
        colorActiveBarHeight: c,
        colorActiveBarWidth: u,
        colorActiveBarBorderSize: f,
        motionDurationSlow: d,
        motionEaseInOut: p,
        motionEaseOut: h,
        menuItemPaddingInline: m,
        motionDurationMid: y,
        colorItemTextHover: b,
        lineType: _,
        colorSplit: M,
        colorItemTextDisabled: R,
        colorDangerItemText: x,
        colorDangerItemTextHover: C,
        colorDangerItemTextSelected: T,
        colorDangerItemBgActive: $,
        colorDangerItemBgSelected: L,
        colorItemBgHover: S,
        menuSubMenuBg: B,
        colorItemTextSelectedHorizontal: Y,
        colorItemBgSelectedHorizontal: ne,
      } = e;
      return {
        [`${n}-${t}`]: {
          color: r,
          background: a,
          [`&${n}-root:focus-visible`]: E({}, $d(e)),
          [`${n}-item-group-title`]: { color: i },
          [`${n}-submenu-selected`]: { [`> ${n}-submenu-title`]: { color: o } },
          [`${n}-item-disabled, ${n}-submenu-disabled`]: { color: `${R} !important` },
          [`${n}-item:hover, ${n}-submenu-title:hover`]: {
            [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: { color: b },
          },
          [`&:not(${n}-horizontal)`]: {
            [`${n}-item:not(${n}-item-selected)`]: {
              '&:hover': { backgroundColor: S },
              '&:active': { backgroundColor: l },
            },
            [`${n}-submenu-title`]: { '&:hover': { backgroundColor: S }, '&:active': { backgroundColor: l } },
          },
          [`${n}-item-danger`]: {
            color: x,
            [`&${n}-item:hover`]: { [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: { color: C } },
            [`&${n}-item:active`]: { background: $ },
          },
          [`${n}-item a`]: { '&, &:hover': { color: 'inherit' } },
          [`${n}-item-selected`]: {
            'color': o,
            [`&${n}-item-danger`]: { color: T },
            'a, a:hover': { color: 'inherit' },
          },
          [`& ${n}-item-selected`]: { backgroundColor: l, [`&${n}-item-danger`]: { backgroundColor: L } },
          [`${n}-item, ${n}-submenu-title`]: { [`&:not(${n}-item-disabled):focus-visible`]: E({}, $d(e)) },
          [`&${n}-submenu > ${n}`]: { backgroundColor: B },
          [`&${n}-popup > ${n}`]: { backgroundColor: a },
          [`&${n}-horizontal`]: E(E({}, t === 'dark' ? { borderBottom: 0 } : {}), {
            [`> ${n}-item, > ${n}-submenu`]: {
              'top': f,
              'marginTop': -f,
              'marginBottom': 0,
              'borderRadius': 0,
              '&::after': {
                position: 'absolute',
                insetInline: m,
                bottom: 0,
                borderBottom: `${c}px solid transparent`,
                transition: `border-color ${d} ${p}`,
                content: '""',
              },
              '&:hover, &-active, &-open': { '&::after': { borderBottomWidth: c, borderBottomColor: Y } },
              '&-selected': {
                'color': Y,
                'backgroundColor': ne,
                '&::after': { borderBottomWidth: c, borderBottomColor: Y },
              },
            },
          }),
          [`&${n}-root`]: { [`&${n}-inline, &${n}-vertical`]: { borderInlineEnd: `${f}px ${_} ${M}` } },
          [`&${n}-inline`]: {
            [`${n}-sub${n}-inline`]: { background: s },
            [`${n}-item, ${n}-submenu-title`]: f && u ? { width: `calc(100% + ${f}px)` } : {},
            [`${n}-item`]: {
              'position': 'relative',
              '&::after': {
                position: 'absolute',
                insetBlock: 0,
                insetInlineEnd: 0,
                borderInlineEnd: `${u}px solid ${o}`,
                transform: 'scaleY(0.0001)',
                opacity: 0,
                transition: [`transform ${y} ${h}`, `opacity ${y} ${h}`].join(','),
                content: '""',
              },
              [`&${n}-item-danger`]: { '&::after': { borderInlineEndColor: T } },
            },
            [`${n}-selected, ${n}-item-selected`]: {
              '&::after': {
                transform: 'scaleY(1)',
                opacity: 1,
                transition: [`transform ${y} ${p}`, `opacity ${y} ${p}`].join(','),
              },
            },
          },
        },
      };
    },
    Sd = jP,
    Td = (e) => {
      const {
          componentCls: t,
          menuItemHeight: n,
          itemMarginInline: r,
          padding: o,
          menuArrowSize: i,
          marginXS: a,
          marginXXS: s,
        } = e,
        l = o + i + a;
      return {
        [`${t}-item`]: { position: 'relative' },
        [`${t}-item, ${t}-submenu-title`]: {
          height: n,
          lineHeight: `${n}px`,
          paddingInline: o,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginInline: r,
          marginBlock: s,
          width: `calc(100% - ${r * 2}px)`,
        },
        [`${t}-submenu`]: { paddingBottom: 0.02 },
        [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: { height: n, lineHeight: `${n}px` },
        [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: l },
      };
    },
    HP = (e) => {
      const {
          componentCls: t,
          iconCls: n,
          menuItemHeight: r,
          colorTextLightSolid: o,
          dropdownWidth: i,
          controlHeightLG: a,
          motionDurationMid: s,
          motionEaseOut: l,
          paddingXL: c,
          fontSizeSM: u,
          fontSizeLG: f,
          motionDurationSlow: d,
          paddingXS: p,
          boxShadowSecondary: h,
        } = e,
        m = { height: r, lineHeight: `${r}px`, listStylePosition: 'inside', listStyleType: 'disc' };
      return [
        {
          [t]: { '&-inline, &-vertical': E({ [`&${t}-root`]: { boxShadow: 'none' } }, Td(e)) },
          [`${t}-submenu-popup`]: { [`${t}-vertical`]: E(E({}, Td(e)), { boxShadow: h }) },
        },
        {
          [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
            'minWidth': i,
            'maxHeight': `calc(100vh - ${a * 2.5}px)`,
            'padding': '0',
            'overflow': 'hidden',
            'borderInlineEnd': 0,
            "&:not([class*='-active'])": { overflowX: 'hidden', overflowY: 'auto' },
          },
        },
        {
          [`${t}-inline`]: {
            width: '100%',
            [`&${t}-root`]: {
              [`${t}-item, ${t}-submenu-title`]: {
                'display': 'flex',
                'alignItems': 'center',
                'transition': [`border-color ${d}`, `background ${d}`, `padding ${s} ${l}`].join(','),
                [`> ${t}-title-content`]: { flex: 'auto', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' },
                '> *': { flex: 'none' },
              },
            },
            [`${t}-sub${t}-inline`]: {
              padding: 0,
              border: 0,
              borderRadius: 0,
              boxShadow: 'none',
              [`& > ${t}-submenu > ${t}-submenu-title`]: m,
              [`& ${t}-item-group-title`]: { paddingInlineStart: c },
            },
            [`${t}-item`]: m,
          },
        },
        {
          [`${t}-inline-collapsed`]: {
            'width': r * 2,
            [`&${t}-root`]: {
              [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
                [`> ${t}-inline-collapsed-noicon`]: { fontSize: f, textAlign: 'center' },
              },
            },
            [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
              insetInlineStart: 0,
              paddingInline: `calc(50% - ${u}px)`,
              textOverflow: 'clip',
              [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
              [`${t}-item-icon, ${n}`]: {
                'margin': 0,
                'fontSize': f,
                'lineHeight': `${r}px`,
                '+ span': { display: 'inline-block', opacity: 0 },
              },
            },
            [`${t}-item-icon, ${n}`]: { display: 'inline-block' },
            '&-tooltip': {
              'pointerEvents': 'none',
              [`${t}-item-icon, ${n}`]: { display: 'none' },
              'a, a:hover': { color: o },
            },
            [`${t}-item-group-title`]: E(E({}, fm), { paddingInline: p }),
          },
        },
      ];
    },
    BP = HP,
    Od = (e) => {
      const {
        componentCls: t,
        fontSize: n,
        motionDurationSlow: r,
        motionDurationMid: o,
        motionEaseInOut: i,
        motionEaseOut: a,
        iconCls: s,
        controlHeightSM: l,
      } = e;
      return {
        [`${t}-item, ${t}-submenu-title`]: {
          position: 'relative',
          display: 'block',
          margin: 0,
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          transition: [`border-color ${r}`, `background ${r}`, `padding ${r} ${i}`].join(','),
          [`${t}-item-icon, ${s}`]: {
            'minWidth': n,
            'fontSize': n,
            'transition': [`font-size ${o} ${a}`, `margin ${r} ${i}`, `color ${r}`].join(','),
            '+ span': {
              marginInlineStart: l - n,
              opacity: 1,
              transition: [`opacity ${r} ${i}`, `margin ${r}`, `color ${r}`].join(','),
            },
          },
          [`${t}-item-icon`]: E({}, jx()),
          [`&${t}-item-only-child`]: { [`> ${s}, > ${t}-item-icon`]: { marginInlineEnd: 0 } },
        },
        [`${t}-item-disabled, ${t}-submenu-disabled`]: {
          'background': 'none !important',
          'cursor': 'not-allowed',
          '&::after': { borderColor: 'transparent !important' },
          'a': { color: 'inherit !important' },
          [`> ${t}-submenu-title`]: { color: 'inherit !important', cursor: 'not-allowed' },
        },
      };
    },
    Ed = (e) => {
      const {
        componentCls: t,
        motionDurationSlow: n,
        motionEaseInOut: r,
        borderRadius: o,
        menuArrowSize: i,
        menuArrowOffset: a,
      } = e;
      return {
        [`${t}-submenu`]: {
          '&-expand-icon, &-arrow': {
            position: 'absolute',
            top: '50%',
            insetInlineEnd: e.margin,
            width: i,
            color: 'currentcolor',
            transform: 'translateY(-50%)',
            transition: `transform ${n} ${r}, opacity ${n}`,
          },
          '&-arrow': {
            '&::before, &::after': {
              position: 'absolute',
              width: i * 0.6,
              height: i * 0.15,
              backgroundColor: 'currentcolor',
              borderRadius: o,
              transition: [`background ${n} ${r}`, `transform ${n} ${r}`, `top ${n} ${r}`, `color ${n} ${r}`].join(','),
              content: '""',
            },
            '&::before': { transform: `rotate(45deg) translateY(-${a})` },
            '&::after': { transform: `rotate(-45deg) translateY(${a})` },
          },
        },
      };
    },
    zP = (e) => {
      const {
        antCls: t,
        componentCls: n,
        fontSize: r,
        motionDurationSlow: o,
        motionDurationMid: i,
        motionEaseInOut: a,
        lineHeight: s,
        paddingXS: l,
        padding: c,
        colorSplit: u,
        lineWidth: f,
        zIndexPopup: d,
        borderRadiusLG: p,
        radiusSubMenuItem: h,
        menuArrowSize: m,
        menuArrowOffset: y,
        lineType: b,
        menuPanelMaskInset: _,
      } = e;
      return [
        {
          '': { [`${n}`]: E(E({}, cf()), { '&-hidden': { display: 'none' } }) },
          [`${n}-submenu-hidden`]: { display: 'none' },
        },
        {
          [n]: E(
            E(
              E(
                E(
                  E(E(E({}, Aa(e)), cf()), {
                    'marginBottom': 0,
                    'paddingInlineStart': 0,
                    'fontSize': r,
                    'lineHeight': 0,
                    'listStyle': 'none',
                    'outline': 'none',
                    'transition': `width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,
                    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                    '&-overflow': { display: 'flex', [`${n}-item`]: { flex: 'none' } },
                    [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: { borderRadius: e.radiusItem },
                    [`${n}-item-group-title`]: {
                      padding: `${l}px ${c}px`,
                      fontSize: r,
                      lineHeight: s,
                      transition: `all ${o}`,
                    },
                    [`&-horizontal ${n}-submenu`]: {
                      transition: [`border-color ${o} ${a}`, `background ${o} ${a}`].join(','),
                    },
                    [`${n}-submenu, ${n}-submenu-inline`]: {
                      transition: [`border-color ${o} ${a}`, `background ${o} ${a}`, `padding ${i} ${a}`].join(','),
                    },
                    [`${n}-submenu ${n}-sub`]: {
                      cursor: 'initial',
                      transition: [`background ${o} ${a}`, `padding ${o} ${a}`].join(','),
                    },
                    [`${n}-title-content`]: { transition: `color ${o}` },
                    [`${n}-item a`]: {
                      '&::before': { position: 'absolute', inset: 0, backgroundColor: 'transparent', content: '""' },
                    },
                    [`${n}-item-divider`]: {
                      'overflow': 'hidden',
                      'lineHeight': 0,
                      'borderColor': u,
                      'borderStyle': b,
                      'borderWidth': 0,
                      'borderTopWidth': f,
                      'marginBlock': f,
                      'padding': 0,
                      '&-dashed': { borderStyle: 'dashed' },
                    },
                  }),
                  Od(e),
                ),
                {
                  [`${n}-item-group`]: {
                    [`${n}-item-group-list`]: {
                      margin: 0,
                      padding: 0,
                      [`${n}-item, ${n}-submenu-title`]: { paddingInline: `${r * 2}px ${c}px` },
                    },
                  },
                  '&-submenu': {
                    '&-popup': {
                      'position': 'absolute',
                      'zIndex': d,
                      'background': 'transparent',
                      'borderRadius': p,
                      'boxShadow': 'none',
                      'transformOrigin': '0 0',
                      '&::before': {
                        position: 'absolute',
                        inset: `${_}px 0 0`,
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        content: '""',
                      },
                    },
                    '&-placement-rightTop::before': { top: 0, insetInlineStart: _ },
                    [`> ${n}`]: E(E(E({ borderRadius: p }, Od(e)), Ed(e)), {
                      [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: { borderRadius: h },
                      [`${n}-submenu-title::after`]: { transition: `transform ${o} ${a}` },
                    }),
                  },
                },
              ),
              Ed(e),
            ),
            {
              [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
                '&::before': { transform: `rotate(-45deg) translateX(${y})` },
                '&::after': { transform: `rotate(45deg) translateX(-${y})` },
              },
              [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
                'transform': `translateY(-${m * 0.2}px)`,
                '&::after': { transform: `rotate(-45deg) translateX(-${y})` },
                '&::before': { transform: `rotate(45deg) translateX(${y})` },
              },
            },
          ),
        },
        { [`${t}-layout-header`]: { [n]: { lineHeight: 'inherit' } } },
      ];
    },
    FP = (e, t) =>
      Ia(
        'Menu',
        (r, o) => {
          let { overrideComponentToken: i } = o;
          if ((t == null ? void 0 : t.value) === !1) return [];
          const { colorBgElevated: a, colorPrimary: s, colorError: l, colorErrorHover: c, colorTextLightSolid: u } = r,
            { controlHeightLG: f, fontSize: d } = r,
            p = (d / 7) * 5,
            h = or(r, {
              menuItemHeight: f,
              menuItemPaddingInline: r.margin,
              menuArrowSize: p,
              menuHorizontalHeight: f * 1.15,
              menuArrowOffset: `${p * 0.25}px`,
              menuPanelMaskInset: -7,
              menuSubMenuBg: a,
            }),
            m = new et(u).setAlpha(0.65).toRgbString(),
            y = or(
              h,
              {
                colorItemText: m,
                colorItemTextHover: u,
                colorGroupTitle: m,
                colorItemTextSelected: u,
                colorItemBg: '#001529',
                colorSubItemBg: '#000c17',
                colorItemBgActive: 'transparent',
                colorItemBgSelected: s,
                colorActiveBarWidth: 0,
                colorActiveBarHeight: 0,
                colorActiveBarBorderSize: 0,
                colorItemTextDisabled: new et(u).setAlpha(0.25).toRgbString(),
                colorDangerItemText: l,
                colorDangerItemTextHover: c,
                colorDangerItemTextSelected: u,
                colorDangerItemBgActive: l,
                colorDangerItemBgSelected: l,
                menuSubMenuBg: '#001529',
                colorItemTextSelectedHorizontal: u,
                colorItemBgSelectedHorizontal: s,
              },
              E({}, i),
            );
          return [
            zP(h),
            LP(h),
            BP(h),
            Sd(h, 'light'),
            Sd(y, 'dark'),
            NP(h),
            HE(h),
            Ji(h, 'slide-up'),
            Ji(h, 'slide-down'),
            hv(h, 'zoom-big'),
          ];
        },
        (r) => {
          const {
            colorPrimary: o,
            colorError: i,
            colorTextDisabled: a,
            colorErrorBg: s,
            colorText: l,
            colorTextDescription: c,
            colorBgContainer: u,
            colorFillAlter: f,
            colorFillContent: d,
            lineWidth: p,
            lineWidthBold: h,
            controlItemBgActive: m,
            colorBgTextHover: y,
          } = r;
          return {
            dropdownWidth: 160,
            zIndexPopup: r.zIndexPopupBase + 50,
            radiusItem: r.borderRadiusLG,
            radiusSubMenuItem: r.borderRadiusSM,
            colorItemText: l,
            colorItemTextHover: l,
            colorItemTextHoverHorizontal: o,
            colorGroupTitle: c,
            colorItemTextSelected: o,
            colorItemTextSelectedHorizontal: o,
            colorItemBg: u,
            colorItemBgHover: y,
            colorItemBgActive: d,
            colorSubItemBg: f,
            colorItemBgSelected: m,
            colorItemBgSelectedHorizontal: 'transparent',
            colorActiveBarWidth: 0,
            colorActiveBarHeight: h,
            colorActiveBarBorderSize: p,
            colorItemTextDisabled: a,
            colorDangerItemText: i,
            colorDangerItemTextHover: i,
            colorDangerItemTextSelected: i,
            colorDangerItemBgActive: s,
            colorDangerItemBgSelected: s,
            itemMarginInline: r.marginXXS,
          };
        },
      )(e),
    WP = () => ({
      'id': String,
      'prefixCls': String,
      'items': Array,
      'disabled': Boolean,
      'inlineCollapsed': Boolean,
      'disabledOverflow': Boolean,
      'forceSubMenuRender': Boolean,
      'openKeys': Array,
      'selectedKeys': Array,
      'activeKey': String,
      'selectable': { type: Boolean, default: !0 },
      'multiple': { type: Boolean, default: !1 },
      'tabindex': { type: [Number, String] },
      'motion': Object,
      'role': String,
      'theme': { type: String, default: 'light' },
      'mode': { type: String, default: 'vertical' },
      'inlineIndent': { type: Number, default: 24 },
      'subMenuOpenDelay': { type: Number, default: 0 },
      'subMenuCloseDelay': { type: Number, default: 0.1 },
      'builtinPlacements': { type: Object },
      'triggerSubMenuAction': { type: String, default: 'hover' },
      'getPopupContainer': Function,
      'expandIcon': Function,
      'onOpenChange': Function,
      'onSelect': Function,
      'onDeselect': Function,
      'onClick': [Function, Array],
      'onFocus': Function,
      'onBlur': Function,
      'onMousedown': Function,
      'onUpdate:openKeys': Function,
      'onUpdate:selectedKeys': Function,
      'onUpdate:activeKey': Function,
    }),
    Pd = [],
    kn = ce({
      compatConfig: { MODE: 3 },
      name: 'AMenu',
      inheritAttrs: !1,
      props: WP(),
      slots: Object,
      setup(e, t) {
        let { slots: n, emit: r, attrs: o } = t;
        const { direction: i, getPrefixCls: a } = Zo('menu', e),
          s = bv(),
          l = P(() => {
            var G;
            return a(
              'menu',
              e.prefixCls || ((G = s == null ? void 0 : s.prefixCls) === null || G === void 0 ? void 0 : G.value),
            );
          }),
          [c, u] = FP(
            l,
            P(() => !s),
          ),
          f = le(new Map()),
          d = Ae(yP, te(void 0)),
          p = P(() => (d.value !== void 0 ? d.value : e.inlineCollapsed)),
          { itemsNodes: h } = IP(e),
          m = le(!1);
        ut(() => {
          m.value = !0;
        }),
          $t(() => {
            nr(
              !(e.inlineCollapsed === !0 && e.mode !== 'inline'),
              'Menu',
              '`inlineCollapsed` should only be used when `mode` is inline.',
            ),
              nr(
                !(d.value !== void 0 && e.inlineCollapsed === !0),
                'Menu',
                '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
              );
          });
        const y = te([]),
          b = te([]),
          _ = te({});
        _e(
          f,
          () => {
            const G = {};
            for (const I of f.value.values()) G[I.key] = I;
            _.value = G;
          },
          { flush: 'post' },
        ),
          $t(() => {
            if (e.activeKey !== void 0) {
              let G = [];
              const I = e.activeKey ? _.value[e.activeKey] : void 0;
              I && e.activeKey !== void 0 ? (G = _s([].concat(J(I.parentKeys), e.activeKey))) : (G = []),
                ao(y.value, G) || (y.value = G);
            }
          }),
          _e(
            () => e.selectedKeys,
            (G) => {
              G && (b.value = G.slice());
            },
            { immediate: !0, deep: !0 },
          );
        const M = te([]);
        _e(
          [_, b],
          () => {
            let G = [];
            b.value.forEach((I) => {
              const X = _.value[I];
              X && (G = G.concat(J(X.parentKeys)));
            }),
              (G = _s(G)),
              ao(M.value, G) || (M.value = G);
          },
          { immediate: !0 },
        );
        const R = (G) => {
            if (e.selectable) {
              const { key: I } = G,
                X = b.value.includes(I);
              let K;
              e.multiple ? (X ? (K = b.value.filter((ue) => ue !== I)) : (K = [...b.value, I])) : (K = [I]);
              const q = E(E({}, G), { selectedKeys: K });
              ao(K, b.value) ||
                (e.selectedKeys === void 0 && (b.value = K),
                r('update:selectedKeys', K),
                X && e.multiple ? r('deselect', q) : r('select', q));
            }
            S.value !== 'inline' && !e.multiple && x.value.length && ne(Pd);
          },
          x = te([]);
        _e(
          () => e.openKeys,
          function () {
            let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x.value;
            ao(x.value, G) || (x.value = G.slice());
          },
          { immediate: !0, deep: !0 },
        );
        let C;
        const T = (G) => {
            clearTimeout(C),
              (C = setTimeout(() => {
                e.activeKey === void 0 && (y.value = G), r('update:activeKey', G[G.length - 1]);
              }));
          },
          $ = P(() => !!e.disabled),
          L = P(() => i.value === 'rtl'),
          S = te('vertical'),
          B = le(!1);
        $t(() => {
          var G;
          (e.mode === 'inline' || e.mode === 'vertical') && p.value
            ? ((S.value = 'vertical'), (B.value = p.value))
            : ((S.value = e.mode), (B.value = !1)),
            !((G = s == null ? void 0 : s.mode) === null || G === void 0) && G.value && (S.value = s.mode.value);
        });
        const Y = P(() => S.value === 'inline'),
          ne = (G) => {
            (x.value = G), r('update:openKeys', G), r('openChange', G);
          },
          Z = te(x.value),
          k = le(!1);
        _e(
          x,
          () => {
            Y.value && (Z.value = x.value);
          },
          { immediate: !0 },
        ),
          _e(
            Y,
            () => {
              if (!k.value) {
                k.value = !0;
                return;
              }
              Y.value ? (x.value = Z.value) : ne(Pd);
            },
            { immediate: !0 },
          );
        const A = P(() => ({
            [`${l.value}`]: !0,
            [`${l.value}-root`]: !0,
            [`${l.value}-${S.value}`]: !0,
            [`${l.value}-inline-collapsed`]: B.value,
            [`${l.value}-rtl`]: L.value,
            [`${l.value}-${e.theme}`]: !0,
          })),
          z = P(() => a()),
          j = P(() => ({
            horizontal: { name: `${z.value}-slide-up` },
            inline: PP,
            other: { name: `${z.value}-zoom-big` },
          }));
        Sv(!0);
        const ee = function () {
            let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            const I = [],
              X = f.value;
            return (
              G.forEach((K) => {
                const { key: q, childrenEventKeys: ue } = X.get(K);
                I.push(q, ...ee(J(ue)));
              }),
              I
            );
          },
          ae = (G) => {
            var I;
            r('click', G), R(G), (I = s == null ? void 0 : s.onClick) === null || I === void 0 || I.call(s);
          },
          Q = (G, I) => {
            var X;
            const K = ((X = _.value[G]) === null || X === void 0 ? void 0 : X.childrenEventKeys) || [];
            let q = x.value.filter((ue) => ue !== G);
            if (I) q.push(G);
            else if (S.value !== 'inline') {
              const ue = ee(J(K));
              q = _s(q.filter((g) => !ue.includes(g)));
            }
            ao(x, q) || ne(q);
          },
          se = (G, I) => {
            f.value.set(G, I), (f.value = new Map(f.value));
          },
          me = (G) => {
            f.value.delete(G), (f.value = new Map(f.value));
          },
          xe = te(0),
          Pe = P(() => {
            var G;
            return e.expandIcon ||
              n.expandIcon ||
              (!((G = s == null ? void 0 : s.expandIcon) === null || G === void 0) && G.value)
              ? (I) => {
                  let X = e.expandIcon || n.expandIcon;
                  return (
                    (X = typeof X == 'function' ? X(I) : X), Xt(X, { class: `${l.value}-submenu-expand-icon` }, !1)
                  );
                }
              : null;
          });
        return (
          gP({
            prefixCls: l,
            activeKeys: y,
            openKeys: x,
            selectedKeys: b,
            changeActiveKeys: T,
            disabled: $,
            rtl: L,
            mode: S,
            inlineIndent: P(() => e.inlineIndent),
            subMenuCloseDelay: P(() => e.subMenuCloseDelay),
            subMenuOpenDelay: P(() => e.subMenuOpenDelay),
            builtinPlacements: P(() => e.builtinPlacements),
            triggerSubMenuAction: P(() => e.triggerSubMenuAction),
            getPopupContainer: P(() => e.getPopupContainer),
            inlineCollapsed: B,
            theme: P(() => e.theme),
            siderCollapsed: d,
            defaultMotions: P(() => (m.value ? j.value : null)),
            motion: P(() => (m.value ? e.motion : null)),
            overflowDisabled: le(void 0),
            onOpenChange: Q,
            onItemClick: ae,
            registerMenuInfo: se,
            unRegisterMenuInfo: me,
            selectedSubMenuKeys: M,
            expandIcon: Pe,
            forceSubMenuRender: P(() => e.forceSubMenuRender),
            rootClassName: u,
          }),
          () => {
            var G, I;
            const X = h.value || Lt((G = n.default) === null || G === void 0 ? void 0 : G.call(n)),
              K = xe.value >= X.length - 1 || S.value !== 'horizontal' || e.disabledOverflow,
              q =
                S.value !== 'horizontal' || e.disabledOverflow
                  ? X
                  : X.map((g, w) => v(ea, { key: g.key, overflowDisabled: w > xe.value }, { default: () => g })),
              ue = ((I = n.overflowedIndicator) === null || I === void 0 ? void 0 : I.call(n)) || v(gv, null, null);
            return c(
              v(
                So,
                de(
                  de({}, o),
                  {},
                  {
                    'onMousedown': e.onMousedown,
                    'prefixCls': `${l.value}-overflow`,
                    'component': 'ul',
                    'itemComponent': zr,
                    'class': [A.value, o.class, u.value],
                    'role': 'menu',
                    'id': e.id,
                    'data': q,
                    'renderRawItem': (g) => g,
                    'renderRawRest': (g) => {
                      const w = g.length,
                        O = w ? X.slice(-w) : null;
                      return v(Ie, null, [
                        v(
                          Fr,
                          { eventKey: wi, key: wi, title: ue, disabled: K, internalPopupClose: w === 0 },
                          { default: () => O },
                        ),
                        v(bd, null, {
                          default: () => [
                            v(
                              Fr,
                              { eventKey: wi, key: wi, title: ue, disabled: K, internalPopupClose: w === 0 },
                              { default: () => O },
                            ),
                          ],
                        }),
                      ]);
                    },
                    'maxCount': S.value !== 'horizontal' || e.disabledOverflow ? So.INVALIDATE : So.RESPONSIVE,
                    'ssr': 'full',
                    'data-menu-list': !0,
                    'onVisibleChange': (g) => {
                      xe.value = g;
                    },
                  },
                ),
                {
                  default: () => [
                    v(
                      Bp,
                      { to: 'body' },
                      {
                        default: () => [
                          v('div', { 'style': { display: 'none' }, 'aria-hidden': !0 }, [
                            v(bd, null, { default: () => [q] }),
                          ]),
                        ],
                      },
                    ),
                  ],
                },
              ),
            );
          }
        );
      },
    });
  kn.install = function (e) {
    return (
      e.component(kn.name, kn),
      e.component(zr.name, zr),
      e.component(Fr.name, Fr),
      e.component(na.name, na),
      e.component(ta.name, ta),
      e
    );
  };
  kn.Item = zr;
  kn.Divider = na;
  kn.SubMenu = Fr;
  kn.ItemGroup = ta;
  function VP(e) {
    const t = le(),
      n = le(!1);
    function r() {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      n.value ||
        (Xe.cancel(t.value),
        (t.value = Xe(() => {
          e(...i);
        })));
    }
    return (
      St(() => {
        (n.value = !0), Xe.cancel(t.value);
      }),
      r
    );
  }
  function KP(e) {
    const t = le([]),
      n = le(typeof e == 'function' ? e() : e),
      r = VP(() => {
        let i = n.value;
        t.value.forEach((a) => {
          i = a(i);
        }),
          (t.value = []),
          (n.value = i);
      });
    function o(i) {
      t.value.push(i), r();
    }
    return [n, o];
  }
  const UP = ce({
      compatConfig: { MODE: 3 },
      name: 'TabNode',
      props: {
        id: { type: String },
        prefixCls: { type: String },
        tab: { type: Object },
        active: { type: Boolean },
        closable: { type: Boolean },
        editable: { type: Object },
        onClick: { type: Function },
        onResize: { type: Function },
        renderWrapper: { type: Function },
        removeAriaLabel: { type: String },
        onFocus: { type: Function },
      },
      emits: ['click', 'resize', 'remove', 'focus'],
      setup(e, t) {
        let { expose: n, attrs: r } = t;
        const o = te();
        function i(l) {
          var c;
          (!((c = e.tab) === null || c === void 0) && c.disabled) || e.onClick(l);
        }
        n({ domRef: o });
        function a(l) {
          var c;
          l.preventDefault(),
            l.stopPropagation(),
            e.editable.onEdit('remove', { key: (c = e.tab) === null || c === void 0 ? void 0 : c.key, event: l });
        }
        const s = P(() => {
          var l;
          return e.editable && e.closable !== !1 && !(!((l = e.tab) === null || l === void 0) && l.disabled);
        });
        return () => {
          var l;
          const {
              prefixCls: c,
              id: u,
              active: f,
              tab: { key: d, tab: p, disabled: h, closeIcon: m },
              renderWrapper: y,
              removeAriaLabel: b,
              editable: _,
              onFocus: M,
            } = e,
            R = `${c}-tab`,
            x = v(
              'div',
              {
                key: d,
                ref: o,
                class: je(R, { [`${R}-with-remove`]: s.value, [`${R}-active`]: f, [`${R}-disabled`]: h }),
                style: r.style,
                onClick: i,
              },
              [
                v(
                  'div',
                  {
                    'role': 'tab',
                    'aria-selected': f,
                    'id': u && `${u}-tab-${d}`,
                    'class': `${R}-btn`,
                    'aria-controls': u && `${u}-panel-${d}`,
                    'aria-disabled': h,
                    'tabindex': h ? null : 0,
                    'onClick': (C) => {
                      C.stopPropagation(), i(C);
                    },
                    'onKeydown': (C) => {
                      [kt.SPACE, kt.ENTER].includes(C.which) && (C.preventDefault(), i(C));
                    },
                    'onFocus': M,
                  },
                  [typeof p == 'function' ? p() : p],
                ),
                s.value &&
                  v(
                    'button',
                    {
                      'type': 'button',
                      'aria-label': b || 'remove',
                      'tabindex': 0,
                      'class': `${R}-remove`,
                      'onClick': (C) => {
                        C.stopPropagation(), a(C);
                      },
                    },
                    [
                      (m == null ? void 0 : m()) ||
                        ((l = _.removeIcon) === null || l === void 0 ? void 0 : l.call(_)) ||
                        '×',
                    ],
                  ),
              ],
            );
          return y ? y(x) : x;
        };
      },
    }),
    kd = { width: 0, height: 0, left: 0, top: 0 };
  function YP(e, t) {
    const n = te(new Map());
    return (
      $t(() => {
        var r, o;
        const i = new Map(),
          a = e.value,
          s = t.value.get((r = a[0]) === null || r === void 0 ? void 0 : r.key) || kd,
          l = s.left + s.width;
        for (let c = 0; c < a.length; c += 1) {
          const { key: u } = a[c];
          let f = t.value.get(u);
          f || (f = t.value.get((o = a[c - 1]) === null || o === void 0 ? void 0 : o.key) || kd);
          const d = i.get(u) || E({}, f);
          (d.right = l - d.left - d.width), i.set(u, d);
        }
        n.value = new Map(i);
      }),
      n
    );
  }
  const Av = ce({
      compatConfig: { MODE: 3 },
      name: 'AddButton',
      inheritAttrs: !1,
      props: { prefixCls: String, editable: { type: Object }, locale: { type: Object, default: void 0 } },
      setup(e, t) {
        let { expose: n, attrs: r } = t;
        const o = te();
        return (
          n({ domRef: o }),
          () => {
            const { prefixCls: i, editable: a, locale: s } = e;
            return !a || a.showAdd === !1
              ? null
              : v(
                  'button',
                  {
                    'ref': o,
                    'type': 'button',
                    'class': `${i}-nav-add`,
                    'style': r.style,
                    'aria-label': (s == null ? void 0 : s.addAriaLabel) || 'Add tab',
                    'onClick': (l) => {
                      a.onEdit('add', { event: l });
                    },
                  },
                  [a.addIcon ? a.addIcon() : '+'],
                );
          }
        );
      },
    }),
    XP = {
      prefixCls: { type: String },
      id: { type: String },
      tabs: { type: Object },
      rtl: { type: Boolean },
      tabBarGutter: { type: Number },
      activeKey: { type: [String, Number] },
      mobile: { type: Boolean },
      moreIcon: fe.any,
      moreTransitionName: { type: String },
      editable: { type: Object },
      locale: { type: Object, default: void 0 },
      removeAriaLabel: String,
      onTabClick: { type: Function },
      popupClassName: String,
      getPopupContainer: Pt(),
    },
    GP = ce({
      compatConfig: { MODE: 3 },
      name: 'OperationNode',
      inheritAttrs: !1,
      props: XP,
      emits: ['tabClick'],
      slots: Object,
      setup(e, t) {
        let { attrs: n, slots: r } = t;
        const [o, i] = Qe(!1),
          [a, s] = Qe(null),
          l = (p) => {
            const h = e.tabs.filter((b) => !b.disabled);
            let m = h.findIndex((b) => b.key === a.value) || 0;
            const y = h.length;
            for (let b = 0; b < y; b += 1) {
              m = (m + p + y) % y;
              const _ = h[m];
              if (!_.disabled) {
                s(_.key);
                return;
              }
            }
          },
          c = (p) => {
            const { which: h } = p;
            if (!o.value) {
              [kt.DOWN, kt.SPACE, kt.ENTER].includes(h) && (i(!0), p.preventDefault());
              return;
            }
            switch (h) {
              case kt.UP:
                l(-1), p.preventDefault();
                break;
              case kt.DOWN:
                l(1), p.preventDefault();
                break;
              case kt.ESC:
                i(!1);
                break;
              case kt.SPACE:
              case kt.ENTER:
                a.value !== null && e.onTabClick(a.value, p);
                break;
            }
          },
          u = P(() => `${e.id}-more-popup`),
          f = P(() => (a.value !== null ? `${u.value}-${a.value}` : null)),
          d = (p, h) => {
            p.preventDefault(), p.stopPropagation(), e.editable.onEdit('remove', { key: h, event: p });
          };
        return (
          ut(() => {
            _e(
              a,
              () => {
                const p = document.getElementById(f.value);
                p && p.scrollIntoView && p.scrollIntoView(!1);
              },
              { flush: 'post', immediate: !0 },
            );
          }),
          _e(o, () => {
            o.value || s(null);
          }),
          pP({}),
          () => {
            var p;
            const {
              prefixCls: h,
              id: m,
              tabs: y,
              locale: b,
              mobile: _,
              moreIcon: M = ((p = r.moreIcon) === null || p === void 0 ? void 0 : p.call(r)) || v(gv, null, null),
              moreTransitionName: R,
              editable: x,
              tabBarGutter: C,
              rtl: T,
              onTabClick: $,
              popupClassName: L,
            } = e;
            if (!y.length) return null;
            const S = `${h}-dropdown`,
              B = b == null ? void 0 : b.dropdownAriaLabel,
              Y = { [T ? 'marginRight' : 'marginLeft']: C };
            y.length || ((Y.visibility = 'hidden'), (Y.order = 1));
            const ne = je({ [`${S}-rtl`]: T, [`${L}`]: !0 }),
              Z = _
                ? null
                : v(
                    cP,
                    {
                      prefixCls: S,
                      trigger: ['hover'],
                      visible: o.value,
                      transitionName: R,
                      onVisibleChange: i,
                      overlayClassName: ne,
                      mouseEnterDelay: 0.1,
                      mouseLeaveDelay: 0.1,
                      getPopupContainer: e.getPopupContainer,
                    },
                    {
                      overlay: () =>
                        v(
                          kn,
                          {
                            'onClick': (k) => {
                              let { key: A, domEvent: z } = k;
                              $(A, z), i(!1);
                            },
                            'id': u.value,
                            'tabindex': -1,
                            'role': 'listbox',
                            'aria-activedescendant': f.value,
                            'selectedKeys': [a.value],
                            'aria-label': B !== void 0 ? B : 'expanded dropdown',
                          },
                          {
                            default: () => [
                              y.map((k) => {
                                var A, z;
                                const j = x && k.closable !== !1 && !k.disabled;
                                return v(
                                  zr,
                                  {
                                    'key': k.key,
                                    'id': `${u.value}-${k.key}`,
                                    'role': 'option',
                                    'aria-controls': m && `${m}-panel-${k.key}`,
                                    'disabled': k.disabled,
                                  },
                                  {
                                    default: () => [
                                      v('span', null, [typeof k.tab == 'function' ? k.tab() : k.tab]),
                                      j &&
                                        v(
                                          'button',
                                          {
                                            'type': 'button',
                                            'aria-label': e.removeAriaLabel || 'remove',
                                            'tabindex': 0,
                                            'class': `${S}-menu-item-remove`,
                                            'onClick': (ee) => {
                                              ee.stopPropagation(), d(ee, k.key);
                                            },
                                          },
                                          [
                                            ((A = k.closeIcon) === null || A === void 0 ? void 0 : A.call(k)) ||
                                              ((z = x.removeIcon) === null || z === void 0 ? void 0 : z.call(x)) ||
                                              '×',
                                          ],
                                        ),
                                    ],
                                  },
                                );
                              }),
                            ],
                          },
                        ),
                      default: () =>
                        v(
                          'button',
                          {
                            'type': 'button',
                            'class': `${h}-nav-more`,
                            'style': Y,
                            'tabindex': -1,
                            'aria-hidden': 'true',
                            'aria-haspopup': 'listbox',
                            'aria-controls': u.value,
                            'id': `${m}-more`,
                            'aria-expanded': o.value,
                            'onKeydown': c,
                          },
                          [M],
                        ),
                    },
                  );
            return v('div', { class: je(`${h}-nav-operations`, n.class), style: n.style }, [
              Z,
              v(Av, { prefixCls: h, locale: b, editable: x }, null),
            ]);
          }
        );
      },
    }),
    Iv = Symbol('tabsContextKey'),
    qP = (e) => {
      it(Iv, e);
    },
    Rv = () => Ae(Iv, { tabs: te([]), prefixCls: te() }),
    ZP = 0.1,
    Md = 0.01,
    Mi = 20,
    Ad = Math.pow(0.995, Mi);
  function QP(e, t) {
    const [n, r] = Qe(),
      [o, i] = Qe(0),
      [a, s] = Qe(0),
      [l, c] = Qe(),
      u = te();
    function f(x) {
      const { screenX: C, screenY: T } = x.touches[0];
      r({ x: C, y: T }), clearInterval(u.value);
    }
    function d(x) {
      if (!n.value) return;
      x.preventDefault();
      const { screenX: C, screenY: T } = x.touches[0],
        $ = C - n.value.x,
        L = T - n.value.y;
      t($, L), r({ x: C, y: T });
      const S = Date.now();
      s(S - o.value), i(S), c({ x: $, y: L });
    }
    function p() {
      if (!n.value) return;
      const x = l.value;
      if ((r(null), c(null), x)) {
        const C = x.x / a.value,
          T = x.y / a.value,
          $ = Math.abs(C),
          L = Math.abs(T);
        if (Math.max($, L) < ZP) return;
        let S = C,
          B = T;
        u.value = setInterval(() => {
          if (Math.abs(S) < Md && Math.abs(B) < Md) {
            clearInterval(u.value);
            return;
          }
          (S *= Ad), (B *= Ad), t(S * Mi, B * Mi);
        }, Mi);
      }
    }
    const h = te();
    function m(x) {
      const { deltaX: C, deltaY: T } = x;
      let $ = 0;
      const L = Math.abs(C),
        S = Math.abs(T);
      L === S ? ($ = h.value === 'x' ? C : T) : L > S ? (($ = C), (h.value = 'x')) : (($ = T), (h.value = 'y')),
        t(-$, -$) && x.preventDefault();
    }
    const y = te({ onTouchStart: f, onTouchMove: d, onTouchEnd: p, onWheel: m });
    function b(x) {
      y.value.onTouchStart(x);
    }
    function _(x) {
      y.value.onTouchMove(x);
    }
    function M(x) {
      y.value.onTouchEnd(x);
    }
    function R(x) {
      y.value.onWheel(x);
    }
    ut(() => {
      var x, C;
      document.addEventListener('touchmove', _, { passive: !1 }),
        document.addEventListener('touchend', M, { passive: !1 }),
        (x = e.value) === null || x === void 0 || x.addEventListener('touchstart', b, { passive: !1 }),
        (C = e.value) === null || C === void 0 || C.addEventListener('wheel', R, { passive: !1 });
    }),
      St(() => {
        document.removeEventListener('touchmove', _), document.removeEventListener('touchend', M);
      });
  }
  function Id(e, t) {
    const n = te(e);
    function r(o) {
      const i = typeof o == 'function' ? o(n.value) : o;
      i !== n.value && t(i, n.value), (n.value = i);
    }
    return [n, r];
  }
  const JP = () => {
      const e = te(new Map()),
        t = (n) => (r) => {
          e.value.set(n, r);
        };
      return (
        Tp(() => {
          e.value = new Map();
        }),
        [t, e]
      );
    },
    ek = JP,
    Rd = { width: 0, height: 0, left: 0, top: 0, right: 0 },
    tk = () => ({
      id: { type: String },
      tabPosition: { type: String },
      activeKey: { type: [String, Number] },
      rtl: { type: Boolean },
      animated: lt(),
      editable: lt(),
      moreIcon: fe.any,
      moreTransitionName: { type: String },
      mobile: { type: Boolean },
      tabBarGutter: { type: Number },
      renderTabBar: { type: Function },
      locale: lt(),
      popupClassName: String,
      getPopupContainer: Pt(),
      onTabClick: { type: Function },
      onTabScroll: { type: Function },
    }),
    Ld = ce({
      compatConfig: { MODE: 3 },
      name: 'TabNavList',
      inheritAttrs: !1,
      props: tk(),
      slots: Object,
      emits: ['tabClick', 'tabScroll'],
      setup(e, t) {
        let { attrs: n, slots: r } = t;
        const { tabs: o, prefixCls: i } = Rv(),
          a = le(),
          s = le(),
          l = le(),
          c = le(),
          [u, f] = ek(),
          d = P(() => e.tabPosition === 'top' || e.tabPosition === 'bottom'),
          [p, h] = Id(0, (H, U) => {
            d.value && e.onTabScroll && e.onTabScroll({ direction: H > U ? 'left' : 'right' });
          }),
          [m, y] = Id(0, (H, U) => {
            !d.value && e.onTabScroll && e.onTabScroll({ direction: H > U ? 'top' : 'bottom' });
          }),
          [b, _] = Qe(0),
          [M, R] = Qe(0),
          [x, C] = Qe(null),
          [T, $] = Qe(null),
          [L, S] = Qe(0),
          [B, Y] = Qe(0),
          [ne, Z] = KP(new Map()),
          k = YP(o, ne),
          A = P(() => `${i.value}-nav-operations-hidden`),
          z = le(0),
          j = le(0);
        $t(() => {
          d.value
            ? e.rtl
              ? ((z.value = 0), (j.value = Math.max(0, b.value - x.value)))
              : ((z.value = Math.min(0, x.value - b.value)), (j.value = 0))
            : ((z.value = Math.min(0, T.value - M.value)), (j.value = 0));
        });
        const ee = (H) => (H < z.value ? z.value : H > j.value ? j.value : H),
          ae = le(),
          [Q, se] = Qe(),
          me = () => {
            se(Date.now());
          },
          xe = () => {
            clearTimeout(ae.value);
          },
          Pe = (H, U) => {
            H((D) => ee(D + U));
          };
        QP(a, (H, U) => {
          if (d.value) {
            if (x.value >= b.value) return !1;
            Pe(h, H);
          } else {
            if (T.value >= M.value) return !1;
            Pe(y, U);
          }
          return xe(), me(), !0;
        }),
          _e(Q, () => {
            xe(),
              Q.value &&
                (ae.value = setTimeout(() => {
                  se(0);
                }, 100));
          });
        const G = function () {
            let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activeKey;
            const U = k.value.get(H) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
            if (d.value) {
              let D = p.value;
              e.rtl
                ? U.right < p.value
                  ? (D = U.right)
                  : U.right + U.width > p.value + x.value && (D = U.right + U.width - x.value)
                : U.left < -p.value
                ? (D = -U.left)
                : U.left + U.width > -p.value + x.value && (D = -(U.left + U.width - x.value)),
                y(0),
                h(ee(D));
            } else {
              let D = m.value;
              U.top < -m.value
                ? (D = -U.top)
                : U.top + U.height > -m.value + T.value && (D = -(U.top + U.height - T.value)),
                h(0),
                y(ee(D));
            }
          },
          I = le(0),
          X = le(0);
        $t(() => {
          let H, U, D, V, W, re;
          const oe = k.value;
          ['top', 'bottom'].includes(e.tabPosition)
            ? ((H = 'width'),
              (V = x.value),
              (W = b.value),
              (re = L.value),
              (U = e.rtl ? 'right' : 'left'),
              (D = Math.abs(p.value)))
            : ((H = 'height'), (V = T.value), (W = b.value), (re = B.value), (U = 'top'), (D = -m.value));
          let ie = V;
          W + re > V && W < V && (ie = V - re);
          const pe = o.value;
          if (!pe.length) return ([I.value, X.value] = [0, 0]);
          const ye = pe.length;
          let ke = ye;
          for (let Oe = 0; Oe < ye; Oe += 1) {
            const He = oe.get(pe[Oe].key) || Rd;
            if (He[U] + He[H] > D + ie) {
              ke = Oe - 1;
              break;
            }
          }
          let be = 0;
          for (let Oe = ye - 1; Oe >= 0; Oe -= 1)
            if ((oe.get(pe[Oe].key) || Rd)[U] < D) {
              be = Oe + 1;
              break;
            }
          return ([I.value, X.value] = [be, ke]);
        });
        const K = () => {
            var H, U, D, V, W;
            const re = ((H = a.value) === null || H === void 0 ? void 0 : H.offsetWidth) || 0,
              oe = ((U = a.value) === null || U === void 0 ? void 0 : U.offsetHeight) || 0,
              ie = ((D = c.value) === null || D === void 0 ? void 0 : D.$el) || {},
              pe = ie.offsetWidth || 0,
              ye = ie.offsetHeight || 0;
            C(re), $(oe), S(pe), Y(ye);
            const ke = (((V = s.value) === null || V === void 0 ? void 0 : V.offsetWidth) || 0) - pe,
              be = (((W = s.value) === null || W === void 0 ? void 0 : W.offsetHeight) || 0) - ye;
            _(ke),
              R(be),
              Z(() => {
                const Oe = new Map();
                return (
                  o.value.forEach((He) => {
                    let { key: ft } = He;
                    const Ot = f.value.get(ft),
                      at = (Ot == null ? void 0 : Ot.$el) || Ot;
                    at &&
                      Oe.set(ft, {
                        width: at.offsetWidth,
                        height: at.offsetHeight,
                        left: at.offsetLeft,
                        top: at.offsetTop,
                      });
                  }),
                  Oe
                );
              });
          },
          q = P(() => [...o.value.slice(0, I.value), ...o.value.slice(X.value + 1)]),
          [ue, g] = Qe(),
          w = P(() => k.value.get(e.activeKey)),
          O = le(),
          N = () => {
            Xe.cancel(O.value);
          };
        _e([w, d, () => e.rtl], () => {
          const H = {};
          w.value &&
            (d.value
              ? (e.rtl ? (H.right = to(w.value.right)) : (H.left = to(w.value.left)), (H.width = to(w.value.width)))
              : ((H.top = to(w.value.top)), (H.height = to(w.value.height)))),
            N(),
            (O.value = Xe(() => {
              g(H);
            }));
        }),
          _e(
            [() => e.activeKey, w, k, d],
            () => {
              G();
            },
            { flush: 'post' },
          ),
          _e(
            [() => e.rtl, () => e.tabBarGutter, () => e.activeKey, () => o.value],
            () => {
              K();
            },
            { flush: 'post' },
          );
        const F = (H) => {
          let { position: U, prefixCls: D, extra: V } = H;
          if (!V) return null;
          const W = V == null ? void 0 : V({ position: U });
          return W ? v('div', { class: `${D}-extra-content` }, [W]) : null;
        };
        return (
          St(() => {
            xe(), N();
          }),
          () => {
            const {
                id: H,
                animated: U,
                activeKey: D,
                rtl: V,
                editable: W,
                locale: re,
                tabPosition: oe,
                tabBarGutter: ie,
                onTabClick: pe,
              } = e,
              { class: ye, style: ke } = n,
              be = i.value,
              Oe = !!q.value.length,
              He = `${be}-nav-wrap`;
            let ft, Ot, at, qr;
            d.value
              ? V
                ? ((Ot = p.value > 0), (ft = p.value + x.value < b.value))
                : ((ft = p.value < 0), (Ot = -p.value + x.value < b.value))
              : ((at = m.value < 0), (qr = -m.value + T.value < M.value));
            const Ge = {};
            oe === 'top' || oe === 'bottom'
              ? (Ge[V ? 'marginRight' : 'marginLeft'] = typeof ie == 'number' ? `${ie}px` : ie)
              : (Ge.marginTop = typeof ie == 'number' ? `${ie}px` : ie);
            const dt = o.value.map((dr, Dv) => {
              const { key: Zr } = dr;
              return v(
                UP,
                {
                  id: H,
                  prefixCls: be,
                  key: Zr,
                  tab: dr,
                  style: Dv === 0 ? void 0 : Ge,
                  closable: dr.closable,
                  editable: W,
                  active: Zr === D,
                  removeAriaLabel: re == null ? void 0 : re.removeAriaLabel,
                  ref: u(Zr),
                  onClick: (Nv) => {
                    pe(Zr, Nv);
                  },
                  onFocus: () => {
                    G(Zr), me(), a.value && (V || (a.value.scrollLeft = 0), (a.value.scrollTop = 0));
                  },
                },
                r,
              );
            });
            return v(
              'div',
              {
                role: 'tablist',
                class: je(`${be}-nav`, ye),
                style: ke,
                onKeydown: () => {
                  me();
                },
              },
              [
                v(F, { position: 'left', prefixCls: be, extra: r.leftExtra }, null),
                v(
                  Wi,
                  { onResize: K },
                  {
                    default: () => [
                      v(
                        'div',
                        {
                          class: je(He, {
                            [`${He}-ping-left`]: ft,
                            [`${He}-ping-right`]: Ot,
                            [`${He}-ping-top`]: at,
                            [`${He}-ping-bottom`]: qr,
                          }),
                          ref: a,
                        },
                        [
                          v(
                            Wi,
                            { onResize: K },
                            {
                              default: () => [
                                v(
                                  'div',
                                  {
                                    ref: s,
                                    class: `${be}-nav-list`,
                                    style: {
                                      transform: `translate(${p.value}px, ${m.value}px)`,
                                      transition: Q.value ? 'none' : void 0,
                                    },
                                  },
                                  [
                                    dt,
                                    v(
                                      Av,
                                      {
                                        ref: c,
                                        prefixCls: be,
                                        locale: re,
                                        editable: W,
                                        style: E(E({}, dt.length === 0 ? void 0 : Ge), {
                                          visibility: Oe ? 'hidden' : null,
                                        }),
                                      },
                                      null,
                                    ),
                                    v(
                                      'div',
                                      {
                                        class: je(`${be}-ink-bar`, { [`${be}-ink-bar-animated`]: U.inkBar }),
                                        style: ue.value,
                                      },
                                      null,
                                    ),
                                  ],
                                ),
                              ],
                            },
                          ),
                        ],
                      ),
                    ],
                  },
                ),
                v(
                  GP,
                  de(
                    de({}, e),
                    {},
                    {
                      removeAriaLabel: re == null ? void 0 : re.removeAriaLabel,
                      ref: l,
                      prefixCls: be,
                      tabs: q.value,
                      class: !Oe && A.value,
                    },
                  ),
                  dv(r, ['moreIcon']),
                ),
                v(F, { position: 'right', prefixCls: be, extra: r.rightExtra }, null),
                v(F, { position: 'right', prefixCls: be, extra: r.tabBarExtraContent }, null),
              ],
            );
          }
        );
      },
    }),
    nk = ce({
      compatConfig: { MODE: 3 },
      name: 'TabPanelList',
      inheritAttrs: !1,
      props: {
        activeKey: { type: [String, Number] },
        id: { type: String },
        rtl: { type: Boolean },
        animated: { type: Object, default: void 0 },
        tabPosition: { type: String },
        destroyInactiveTabPane: { type: Boolean },
      },
      setup(e) {
        const { tabs: t, prefixCls: n } = Rv();
        return () => {
          const { id: r, activeKey: o, animated: i, tabPosition: a, rtl: s, destroyInactiveTabPane: l } = e,
            c = i.tabPane,
            u = n.value,
            f = t.value.findIndex((d) => d.key === o);
          return v('div', { class: `${u}-content-holder` }, [
            v(
              'div',
              {
                class: [`${u}-content`, `${u}-content-${a}`, { [`${u}-content-animated`]: c }],
                style: f && c ? { [s ? 'marginRight' : 'marginLeft']: `-${f}00%` } : null,
              },
              [
                t.value.map((d) =>
                  Xt(d.node, {
                    key: d.key,
                    prefixCls: u,
                    tabKey: d.key,
                    id: r,
                    animated: c,
                    active: d.key === o,
                    destroyInactiveTabPane: l,
                  }),
                ),
              ],
            ),
          ]);
        };
      },
    });
  var rk = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        { tag: 'path', attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' } },
        { tag: 'path', attrs: { d: 'M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z' } },
      ],
    },
    name: 'plus',
    theme: 'outlined',
  };
  const ok = rk;
  function Dd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {},
        r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          }),
        )),
        r.forEach(function (o) {
          ik(e, o, n[o]);
        });
    }
    return e;
  }
  function ik(e, t, n) {
    return (
      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
    );
  }
  var Sc = function (t, n) {
    var r = Dd({}, t, n.attrs);
    return v(gc, Dd({}, r, { icon: ok }), null);
  };
  Sc.displayName = 'PlusOutlined';
  Sc.inheritAttrs = !1;
  const ak = Sc,
    sk = (e) => {
      const { componentCls: t, motionDurationSlow: n } = e;
      return [
        {
          [t]: {
            [`${t}-switch`]: {
              '&-appear, &-enter': {
                'transition': 'none',
                '&-start': { opacity: 0 },
                '&-active': { opacity: 1, transition: `opacity ${n}` },
              },
              '&-leave': {
                'position': 'absolute',
                'transition': 'none',
                'inset': 0,
                '&-start': { opacity: 1 },
                '&-active': { opacity: 0, transition: `opacity ${n}` },
              },
            },
          },
        },
        [Ji(e, 'slide-up'), Ji(e, 'slide-down')],
      ];
    },
    lk = sk,
    ck = (e) => {
      const {
        componentCls: t,
        tabsCardHorizontalPadding: n,
        tabsCardHeadBackground: r,
        tabsCardGutter: o,
        colorSplit: i,
      } = e;
      return {
        [`${t}-card`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              margin: 0,
              padding: n,
              background: r,
              border: `${e.lineWidth}px ${e.lineType} ${i}`,
              transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            },
            [`${t}-tab-active`]: { color: e.colorPrimary, background: e.colorBgContainer },
            [`${t}-ink-bar`]: { visibility: 'hidden' },
          },
          [`&${t}-top, &${t}-bottom`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
              [`${t}-tab + ${t}-tab`]: { marginLeft: { _skip_check_: !0, value: `${o}px` } },
            },
          },
          [`&${t}-top`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
              [`${t}-tab`]: { borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0` },
              [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
            },
          },
          [`&${t}-bottom`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
              [`${t}-tab`]: { borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px` },
              [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
            },
          },
          [`&${t}-left, &${t}-right`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: { marginTop: `${o}px` } },
          },
          [`&${t}-left`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
              [`${t}-tab`]: {
                borderRadius: { _skip_check_: !0, value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px` },
              },
              [`${t}-tab-active`]: { borderRightColor: { _skip_check_: !0, value: e.colorBgContainer } },
            },
          },
          [`&${t}-right`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
              [`${t}-tab`]: {
                borderRadius: { _skip_check_: !0, value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0` },
              },
              [`${t}-tab-active`]: { borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer } },
            },
          },
        },
      };
    },
    uk = (e) => {
      const { componentCls: t, tabsHoverColor: n, dropdownEdgeChildVerticalPadding: r } = e;
      return {
        [`${t}-dropdown`]: E(E({}, Aa(e)), {
          'position': 'absolute',
          'top': -9999,
          'left': { _skip_check_: !0, value: -9999 },
          'zIndex': e.zIndexPopup,
          'display': 'block',
          '&-hidden': { display: 'none' },
          [`${t}-dropdown-menu`]: {
            'maxHeight': e.tabsDropdownHeight,
            'margin': 0,
            'padding': `${r}px 0`,
            'overflowX': 'hidden',
            'overflowY': 'auto',
            'textAlign': { _skip_check_: !0, value: 'left' },
            'listStyleType': 'none',
            'backgroundColor': e.colorBgContainer,
            'backgroundClip': 'padding-box',
            'borderRadius': e.borderRadiusLG,
            'outline': 'none',
            'boxShadow': e.boxShadowSecondary,
            '&-item': E(E({}, fm), {
              'display': 'flex',
              'alignItems': 'center',
              'minWidth': e.tabsDropdownWidth,
              'margin': 0,
              'padding': `${e.paddingXXS}px ${e.paddingSM}px`,
              'color': e.colorText,
              'fontWeight': 'normal',
              'fontSize': e.fontSize,
              'lineHeight': e.lineHeight,
              'cursor': 'pointer',
              'transition': `all ${e.motionDurationSlow}`,
              '> span': { flex: 1, whiteSpace: 'nowrap' },
              '&-remove': {
                'flex': 'none',
                'marginLeft': { _skip_check_: !0, value: e.marginSM },
                'color': e.colorTextDescription,
                'fontSize': e.fontSizeSM,
                'background': 'transparent',
                'border': 0,
                'cursor': 'pointer',
                '&:hover': { color: n },
              },
              '&:hover': { background: e.controlItemBgHover },
              '&-disabled': {
                '&, &:hover': { color: e.colorTextDisabled, background: 'transparent', cursor: 'not-allowed' },
              },
            }),
          },
        }),
      };
    },
    fk = (e) => {
      const { componentCls: t, margin: n, colorSplit: r } = e;
      return {
        [`${t}-top, ${t}-bottom`]: {
          flexDirection: 'column',
          [`> ${t}-nav, > div > ${t}-nav`]: {
            'margin': `0 0 ${n}px 0`,
            '&::before': {
              position: 'absolute',
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              borderBottom: `${e.lineWidth}px ${e.lineType} ${r}`,
              content: "''",
            },
            [`${t}-ink-bar`]: {
              'height': e.lineWidthBold,
              '&-animated': {
                transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`,
              },
            },
            [`${t}-nav-wrap`]: {
              '&::before, &::after': { top: 0, bottom: 0, width: e.controlHeight },
              '&::before': { left: { _skip_check_: !0, value: 0 }, boxShadow: e.boxShadowTabsOverflowLeft },
              '&::after': { right: { _skip_check_: !0, value: 0 }, boxShadow: e.boxShadowTabsOverflowRight },
              [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
              [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
            },
          },
        },
        [`${t}-top`]: {
          [`> ${t}-nav,
        > div > ${t}-nav`]: { '&::before': { bottom: 0 }, [`${t}-ink-bar`]: { bottom: 0 } },
        },
        [`${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            'order': 1,
            'marginTop': `${n}px`,
            'marginBottom': 0,
            '&::before': { top: 0 },
            [`${t}-ink-bar`]: { top: 0 },
          },
          [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
        },
        [`${t}-left, ${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            flexDirection: 'column',
            minWidth: e.controlHeight * 1.25,
            [`${t}-tab`]: { padding: `${e.paddingXS}px ${e.paddingLG}px`, textAlign: 'center' },
            [`${t}-tab + ${t}-tab`]: { margin: `${e.margin}px 0 0 0` },
            [`${t}-nav-wrap`]: {
              'flexDirection': 'column',
              '&::before, &::after': {
                right: { _skip_check_: !0, value: 0 },
                left: { _skip_check_: !0, value: 0 },
                height: e.controlHeight,
              },
              '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
              '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
              [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
              [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
            },
            [`${t}-ink-bar`]: {
              'width': e.lineWidthBold,
              '&-animated': { transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}` },
            },
            [`${t}-nav-list, ${t}-nav-operations`]: { flex: '1 0 auto', flexDirection: 'column' },
          },
        },
        [`${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } } },
          [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
            marginLeft: { _skip_check_: !0, value: `-${e.lineWidth}px` },
            borderLeft: { _skip_check_: !0, value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}` },
            [`> ${t}-content > ${t}-tabpane`]: { paddingLeft: { _skip_check_: !0, value: e.paddingLG } },
          },
        },
        [`${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: { order: 1, [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } } },
          [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
            order: 0,
            marginRight: { _skip_check_: !0, value: -e.lineWidth },
            borderRight: { _skip_check_: !0, value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}` },
            [`> ${t}-content > ${t}-tabpane`]: { paddingRight: { _skip_check_: !0, value: e.paddingLG } },
          },
        },
      };
    },
    dk = (e) => {
      const { componentCls: t, padding: n } = e;
      return {
        [t]: {
          '&-small': { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${e.paddingXS}px 0`, fontSize: e.fontSize } } },
          '&-large': { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${n}px 0`, fontSize: e.fontSizeLG } } },
        },
        [`${t}-card`]: {
          [`&${t}-small`]: {
            [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${e.paddingXXS * 1.5}px ${n}px` } },
            [`&${t}-bottom`]: {
              [`> ${t}-nav ${t}-tab`]: { borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px` },
            },
            [`&${t}-top`]: { [`> ${t}-nav ${t}-tab`]: { borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0` } },
            [`&${t}-right`]: {
              [`> ${t}-nav ${t}-tab`]: {
                borderRadius: { _skip_check_: !0, value: `0 ${e.borderRadius}px ${e.borderRadius}px 0` },
              },
            },
            [`&${t}-left`]: {
              [`> ${t}-nav ${t}-tab`]: {
                borderRadius: { _skip_check_: !0, value: `${e.borderRadius}px 0 0 ${e.borderRadius}px` },
              },
            },
          },
          [`&${t}-large`]: {
            [`> ${t}-nav`]: { [`${t}-tab`]: { padding: `${e.paddingXS}px ${n}px ${e.paddingXXS * 1.5}px` } },
          },
        },
      };
    },
    pk = (e) => {
      const { componentCls: t, tabsActiveColor: n, tabsHoverColor: r, iconCls: o, tabsHorizontalGutter: i } = e,
        a = `${t}-tab`;
      return {
        [a]: {
          'position': 'relative',
          'display': 'inline-flex',
          'alignItems': 'center',
          'padding': `${e.paddingSM}px 0`,
          'fontSize': `${e.fontSize}px`,
          'background': 'transparent',
          'border': 0,
          'outline': 'none',
          'cursor': 'pointer',
          '&-btn, &-remove': E({ '&:focus:not(:focus-visible), &:active': { color: n } }, pm(e)),
          '&-btn': { outline: 'none', transition: 'all 0.3s' },
          '&-remove': {
            'flex': 'none',
            'marginRight': { _skip_check_: !0, value: -e.marginXXS },
            'marginLeft': { _skip_check_: !0, value: e.marginXS },
            'color': e.colorTextDescription,
            'fontSize': e.fontSizeSM,
            'background': 'transparent',
            'border': 'none',
            'outline': 'none',
            'cursor': 'pointer',
            'transition': `all ${e.motionDurationSlow}`,
            '&:hover': { color: e.colorTextHeading },
          },
          '&:hover': { color: r },
          [`&${a}-active ${a}-btn`]: { color: e.colorPrimary, textShadow: e.tabsActiveTextShadow },
          [`&${a}-disabled`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
          [`&${a}-disabled ${a}-btn, &${a}-disabled ${t}-remove`]: {
            '&:focus, &:active': { color: e.colorTextDisabled },
          },
          [`& ${a}-remove ${o}`]: { margin: 0 },
          [o]: { marginRight: { _skip_check_: !0, value: e.marginSM } },
        },
        [`${a} + ${a}`]: { margin: { _skip_check_: !0, value: `0 0 0 ${i}px` } },
      };
    },
    hk = (e) => {
      const { componentCls: t, tabsHorizontalGutter: n, iconCls: r, tabsCardGutter: o } = e;
      return {
        [`${t}-rtl`]: {
          direction: 'rtl',
          [`${t}-nav`]: {
            [`${t}-tab`]: {
              margin: { _skip_check_: !0, value: `0 0 0 ${n}px` },
              [`${t}-tab:last-of-type`]: { marginLeft: { _skip_check_: !0, value: 0 } },
              [r]: {
                marginRight: { _skip_check_: !0, value: 0 },
                marginLeft: { _skip_check_: !0, value: `${e.marginSM}px` },
              },
              [`${t}-tab-remove`]: {
                marginRight: { _skip_check_: !0, value: `${e.marginXS}px` },
                marginLeft: { _skip_check_: !0, value: `-${e.marginXXS}px` },
                [r]: { margin: 0 },
              },
            },
          },
          [`&${t}-left`]: { [`> ${t}-nav`]: { order: 1 }, [`> ${t}-content-holder`]: { order: 0 } },
          [`&${t}-right`]: { [`> ${t}-nav`]: { order: 0 }, [`> ${t}-content-holder`]: { order: 1 } },
          [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
              [`${t}-tab + ${t}-tab`]: {
                marginRight: { _skip_check_: !0, value: `${o}px` },
                marginLeft: { _skip_check_: !0, value: 0 },
              },
            },
          },
        },
        [`${t}-dropdown-rtl`]: { direction: 'rtl' },
        [`${t}-menu-item`]: { [`${t}-dropdown-rtl`]: { textAlign: { _skip_check_: !0, value: 'right' } } },
      };
    },
    mk = (e) => {
      const {
        componentCls: t,
        tabsCardHorizontalPadding: n,
        tabsCardHeight: r,
        tabsCardGutter: o,
        tabsHoverColor: i,
        tabsActiveColor: a,
        colorSplit: s,
      } = e;
      return {
        [t]: E(
          E(
            E(E({}, Aa(e)), {
              display: 'flex',
              [`> ${t}-nav, > div > ${t}-nav`]: {
                position: 'relative',
                display: 'flex',
                flex: 'none',
                alignItems: 'center',
                [`${t}-nav-wrap`]: {
                  'position': 'relative',
                  'display': 'flex',
                  'flex': 'auto',
                  'alignSelf': 'stretch',
                  'overflow': 'hidden',
                  'whiteSpace': 'nowrap',
                  'transform': 'translate(0)',
                  '&::before, &::after': {
                    position: 'absolute',
                    zIndex: 1,
                    opacity: 0,
                    transition: `opacity ${e.motionDurationSlow}`,
                    content: "''",
                    pointerEvents: 'none',
                  },
                },
                [`${t}-nav-list`]: {
                  position: 'relative',
                  display: 'flex',
                  transition: `opacity ${e.motionDurationSlow}`,
                },
                [`${t}-nav-operations`]: { display: 'flex', alignSelf: 'stretch' },
                [`${t}-nav-operations-hidden`]: { position: 'absolute', visibility: 'hidden', pointerEvents: 'none' },
                [`${t}-nav-more`]: {
                  'position': 'relative',
                  'padding': n,
                  'background': 'transparent',
                  'border': 0,
                  '&::after': {
                    position: 'absolute',
                    right: { _skip_check_: !0, value: 0 },
                    bottom: 0,
                    left: { _skip_check_: !0, value: 0 },
                    height: e.controlHeightLG / 8,
                    transform: 'translateY(100%)',
                    content: "''",
                  },
                },
                [`${t}-nav-add`]: E(
                  {
                    'minWidth': `${r}px`,
                    'marginLeft': { _skip_check_: !0, value: `${o}px` },
                    'padding': `0 ${e.paddingXS}px`,
                    'background': 'transparent',
                    'border': `${e.lineWidth}px ${e.lineType} ${s}`,
                    'borderRadius': `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                    'outline': 'none',
                    'cursor': 'pointer',
                    'color': e.colorText,
                    'transition': `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                    '&:hover': { color: i },
                    '&:active, &:focus:not(:focus-visible)': { color: a },
                  },
                  pm(e),
                ),
              },
              [`${t}-extra-content`]: { flex: 'none' },
              [`${t}-ink-bar`]: { position: 'absolute', background: e.colorPrimary, pointerEvents: 'none' },
            }),
            pk(e),
          ),
          {
            [`${t}-content`]: {
              'position': 'relative',
              'display': 'flex',
              'width': '100%',
              '&-animated': { transition: 'margin 0.3s' },
            },
            [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
            [`${t}-tabpane`]: { outline: 'none', flex: 'none', width: '100%' },
          },
        ),
        [`${t}-centered`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-nav-wrap`]: { [`&:not([class*='${t}-nav-wrap-ping'])`]: { justifyContent: 'center' } },
          },
        },
      };
    },
    vk = Ia(
      'Tabs',
      (e) => {
        const t = e.controlHeightLG,
          n = or(e, {
            tabsHoverColor: e.colorPrimaryHover,
            tabsActiveColor: e.colorPrimaryActive,
            tabsCardHorizontalPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${
              e.padding
            }px`,
            tabsCardHeight: t,
            tabsCardGutter: e.marginXXS / 2,
            tabsHorizontalGutter: 32,
            tabsCardHeadBackground: e.colorFillAlter,
            dropdownEdgeChildVerticalPadding: e.paddingXXS,
            tabsActiveTextShadow: '0 0 0.25px currentcolor',
            tabsDropdownHeight: 200,
            tabsDropdownWidth: 120,
          });
        return [dk(n), hk(n), fk(n), uk(n), ck(n), mk(n), lk(n)];
      },
      (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 }),
    );
  let Nd = 0;
  const Lv = () => ({
    'prefixCls': { type: String },
    'id': { type: String },
    'popupClassName': String,
    'getPopupContainer': Pt(),
    'activeKey': { type: [String, Number] },
    'defaultActiveKey': { type: [String, Number] },
    'direction': _r(),
    'animated': jh([Boolean, Object]),
    'renderTabBar': Pt(),
    'tabBarGutter': { type: Number },
    'tabBarStyle': lt(),
    'tabPosition': _r(),
    'destroyInactiveTabPane': Co(),
    'hideAdd': Boolean,
    'type': _r(),
    'size': _r(),
    'centered': Boolean,
    'onEdit': Pt(),
    'onChange': Pt(),
    'onTabClick': Pt(),
    'onTabScroll': Pt(),
    'onUpdate:activeKey': Pt(),
    'locale': lt(),
    'onPrevClick': Pt(),
    'onNextClick': Pt(),
    'tabBarExtraContent': fe.any,
  });
  function gk(e) {
    return e
      .map((t) => {
        if (Oa(t)) {
          const n = E({}, t.props || {});
          for (const [d, p] of Object.entries(n)) delete n[d], (n[Sa(d)] = p);
          const r = t.children || {},
            o = t.key !== void 0 ? t.key : void 0,
            {
              tab: i = r.tab,
              disabled: a,
              forceRender: s,
              closable: l,
              animated: c,
              active: u,
              destroyInactiveTabPane: f,
            } = n;
          return E(E({ key: o }, n), {
            node: t,
            closeIcon: r.closeIcon,
            tab: i,
            disabled: a === '' || a,
            forceRender: s === '' || s,
            closable: l === '' || l,
            animated: c === '' || c,
            active: u === '' || u,
            destroyInactiveTabPane: f === '' || f,
          });
        }
        return null;
      })
      .filter((t) => t);
  }
  const yk = ce({
      compatConfig: { MODE: 3 },
      name: 'InternalTabs',
      inheritAttrs: !1,
      props: E(E({}, Kl(Lv(), { tabPosition: 'top', animated: { inkBar: !0, tabPane: !1 } })), { tabs: Us() }),
      slots: Object,
      setup(e, t) {
        let { attrs: n, slots: r } = t;
        nr(
          e.onPrevClick === void 0 && e.onNextClick === void 0,
          'Tabs',
          '`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.',
        ),
          nr(
            e.tabBarExtraContent === void 0,
            'Tabs',
            '`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.',
          ),
          nr(
            r.tabBarExtraContent === void 0,
            'Tabs',
            '`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.',
          );
        const { prefixCls: o, direction: i, size: a, rootPrefixCls: s, getPopupContainer: l } = Zo('tabs', e),
          [c, u] = vk(o),
          f = P(() => i.value === 'rtl'),
          d = P(() => {
            const { animated: T, tabPosition: $ } = e;
            return T === !1 || ['left', 'right'].includes($)
              ? { inkBar: !1, tabPane: !1 }
              : T === !0
              ? { inkBar: !0, tabPane: !0 }
              : E({ inkBar: !0, tabPane: !1 }, typeof T == 'object' ? T : {});
          }),
          [p, h] = Qe(!1);
        ut(() => {
          h(MO());
        });
        const [m, y] = td(
            () => {
              var T;
              return (T = e.tabs[0]) === null || T === void 0 ? void 0 : T.key;
            },
            { value: P(() => e.activeKey), defaultValue: e.defaultActiveKey },
          ),
          [b, _] = Qe(() => e.tabs.findIndex((T) => T.key === m.value));
        $t(() => {
          var T;
          let $ = e.tabs.findIndex((L) => L.key === m.value);
          $ === -1 &&
            (($ = Math.max(0, Math.min(b.value, e.tabs.length - 1))),
            y((T = e.tabs[$]) === null || T === void 0 ? void 0 : T.key)),
            _($);
        });
        const [M, R] = td(null, { value: P(() => e.id) }),
          x = P(() => (p.value && !['left', 'right'].includes(e.tabPosition) ? 'top' : e.tabPosition));
        ut(() => {
          e.id || (R(`rc-tabs-${Nd}`), (Nd += 1));
        });
        const C = (T, $) => {
          var L, S;
          (L = e.onTabClick) === null || L === void 0 || L.call(e, T, $);
          const B = T !== m.value;
          y(T), B && ((S = e.onChange) === null || S === void 0 || S.call(e, T));
        };
        return (
          qP({ tabs: P(() => e.tabs), prefixCls: o }),
          () => {
            const {
                id: T,
                type: $,
                tabBarGutter: L,
                tabBarStyle: S,
                locale: B,
                destroyInactiveTabPane: Y,
                renderTabBar: ne = r.renderTabBar,
                onTabScroll: Z,
                hideAdd: k,
                centered: A,
              } = e,
              z = {
                id: M.value,
                activeKey: m.value,
                animated: d.value,
                tabPosition: x.value,
                rtl: f.value,
                mobile: p.value,
              };
            let j;
            $ === 'editable-card' &&
              (j = {
                onEdit: (se, me) => {
                  let { key: xe, event: Pe } = me;
                  var G;
                  (G = e.onEdit) === null || G === void 0 || G.call(e, se === 'add' ? Pe : xe, se);
                },
                removeIcon: () => v(h4, null, null),
                addIcon: r.addIcon ? r.addIcon : () => v(ak, null, null),
                showAdd: k !== !0,
              });
            let ee;
            const ae = E(E({}, z), {
              moreTransitionName: `${s.value}-slide-up`,
              editable: j,
              locale: B,
              tabBarGutter: L,
              onTabClick: C,
              onTabScroll: Z,
              style: S,
              getPopupContainer: l.value,
              popupClassName: je(e.popupClassName, u.value),
            });
            ne
              ? (ee = ne(E(E({}, ae), { DefaultTabBar: Ld })))
              : (ee = v(Ld, ae, dv(r, ['moreIcon', 'leftExtra', 'rightExtra', 'tabBarExtraContent'])));
            const Q = o.value;
            return c(
              v(
                'div',
                de(
                  de({}, n),
                  {},
                  {
                    id: T,
                    class: je(
                      Q,
                      `${Q}-${x.value}`,
                      {
                        [u.value]: !0,
                        [`${Q}-${a.value}`]: a.value,
                        [`${Q}-card`]: ['card', 'editable-card'].includes($),
                        [`${Q}-editable-card`]: $ === 'editable-card',
                        [`${Q}-centered`]: A,
                        [`${Q}-mobile`]: p.value,
                        [`${Q}-editable`]: $ === 'editable-card',
                        [`${Q}-rtl`]: f.value,
                      },
                      n.class,
                    ),
                  },
                ),
                [ee, v(nk, de(de({ destroyInactiveTabPane: Y }, z), {}, { animated: d.value }), null)],
              ),
            );
          }
        );
      },
    }),
    Oo = ce({
      compatConfig: { MODE: 3 },
      name: 'ATabs',
      inheritAttrs: !1,
      props: Kl(Lv(), { tabPosition: 'top', animated: { inkBar: !0, tabPane: !1 } }),
      slots: Object,
      setup(e, t) {
        let { attrs: n, slots: r, emit: o } = t;
        const i = (a) => {
          o('update:activeKey', a), o('change', a);
        };
        return () => {
          var a;
          const s = gk(Lt((a = r.default) === null || a === void 0 ? void 0 : a.call(r)));
          return v(yk, de(de(de({}, n$(e, ['onUpdate:activeKey'])), n), {}, { onChange: i, tabs: s }), r);
        };
      },
    }),
    bk = () => ({
      tab: fe.any,
      disabled: { type: Boolean },
      forceRender: { type: Boolean },
      closable: { type: Boolean },
      animated: { type: Boolean },
      active: { type: Boolean },
      destroyInactiveTabPane: { type: Boolean },
      prefixCls: { type: String },
      tabKey: { type: [String, Number] },
      id: { type: String },
    }),
    Pr = ce({
      compatConfig: { MODE: 3 },
      name: 'ATabPane',
      inheritAttrs: !1,
      __ANT_TAB_PANE: !0,
      props: bk(),
      slots: Object,
      setup(e, t) {
        let { attrs: n, slots: r } = t;
        const o = te(e.forceRender);
        _e(
          [() => e.active, () => e.destroyInactiveTabPane],
          () => {
            e.active ? (o.value = !0) : e.destroyInactiveTabPane && (o.value = !1);
          },
          { immediate: !0 },
        );
        const i = P(() =>
          e.active ? {} : e.animated ? { visibility: 'hidden', height: 0, overflowY: 'hidden' } : { display: 'none' },
        );
        return () => {
          var a;
          const { prefixCls: s, forceRender: l, id: c, active: u, tabKey: f } = e;
          return v(
            'div',
            {
              'id': c && `${c}-panel-${f}`,
              'role': 'tabpanel',
              'tabindex': u ? 0 : -1,
              'aria-labelledby': c && `${c}-tab-${f}`,
              'aria-hidden': !u,
              'style': [i.value, n.style],
              'class': [`${s}-tabpane`, u && `${s}-tabpane-active`, n.class],
            },
            [(u || o.value || l) && ((a = r.default) === null || a === void 0 ? void 0 : a.call(r))],
          );
        };
      },
    });
  Oo.TabPane = Pr;
  Oo.install = function (e) {
    return e.component(Oo.name, Oo), e.component(Pr.name, Pr), e;
  };
  const wk = { class: 'flex-center text-xl' },
    _k = { class: 'font-semibold text-lg' },
    Ck = ce({
      __name: 'RuleConfig',
      setup(e) {
        const { selectedRule: t } = i_();
        return (n, r) =>
          J(t)
            ? (he(),
              nt(
                J(rr),
                { key: 1, class: 'config-content overflow-hidden' },
                {
                  default: $e(() => [
                    v(
                      J(Oo),
                      { class: 'h-full', animated: '' },
                      {
                        default: $e(() => [
                          v(
                            J(Pr),
                            { key: 'basic-config', tab: 'Basic Config' },
                            { default: $e(() => [Se('div', _k, Kt(J(t).name), 1)]), _: 1 },
                          ),
                          v(
                            J(Pr),
                            { key: 'pattern-matcher', tab: 'Pattern Matcher' },
                            { default: $e(() => [gt(' Pattern Matcher ')]), _: 1 },
                          ),
                          v(
                            J(Pr),
                            { key: 'mock-data', tab: 'Mock Data' },
                            { default: $e(() => [gt(' Mock Data ')]), _: 1 },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ))
            : (he(),
              nt(
                J(rr),
                { key: 0 },
                {
                  default: $e(() => [
                    v(J(Hb), null, {
                      default: $e(() => [Se('div', wk, [v(J(l1), { class: 'mr-4' }), gt(' Select One Rule First ')])]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ));
      },
    }),
    xk = jt(Ck, [['__scopeId', 'data-v-387ed7f2']]),
    $k = (e) => (yp('data-v-a91e0666'), (e = e()), bp(), e),
    Sk = { class: 'px-4 py-2 flex items-center justify-between' },
    Tk = $k(() => Se('span', { class: 'text-xs font-semibold' }, 'Rules', -1)),
    Ok = { class: 'w-full h-full p-2 flex flex-col overflow-auto min-h-0' },
    Ek = { key: 0, class: 'rule-item create' },
    Pk = ce({
      __name: 'RuleList',
      setup(e) {
        const t = { name: 'new rule' },
          { rules: n, createRule: r, updateRule: o, deleteRule: i, selectedRuleId: a } = Fs(),
          s = te(!1),
          l = te(null);
        function c() {
          s.value || (s.value = !0),
            tt(() => {
              var p;
              (p = l.value) == null || p.focusEdit();
            });
        }
        async function u(p) {
          const h = p.trim();
          h && (await r(h)), (s.value = !1);
        }
        async function f(p) {
          await i(p);
        }
        async function d(p, h, m) {
          const y = h.trim();
          y && y !== p.name && (await o({ id: p.id, name: y })), m();
        }
        return (p, h) => (
          he(),
          nt(J(rr), null, {
            header: $e(() => [
              Se('div', Sk, [
                Tk,
                v(
                  J(_a),
                  { class: 'flex text-xs', content: 'Add Rule', position: 'bottom' },
                  { default: $e(() => [v(J(Xn), { onClick: c }, { default: $e(() => [v(J(a1))]), _: 1 })]), _: 1 },
                ),
              ]),
            ]),
            default: $e(() => [
              Se('div', Ok, [
                (he(!0),
                Ee(
                  Ie,
                  null,
                  Ni(
                    J(n),
                    (m) => (
                      he(),
                      Ee('div', { key: m.name, class: 'rule-item' }, [
                        v(
                          J(Ru),
                          {
                            class: 'rule-item',
                            rule: m,
                            selected: J(a) === m.id,
                            onDelete: (y) => f(m.id),
                            onEditConfirm: (y, b) => d(m, y, b),
                            onClick: (y) => (a.value = m.id),
                          },
                          null,
                          8,
                          ['rule', 'selected', 'onDelete', 'onEditConfirm', 'onClick'],
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
                s.value
                  ? (he(),
                    Ee('div', Ek, [
                      v(
                        J(Ru),
                        {
                          'ref_key': 'createRuleRef',
                          'ref': l,
                          'class': 'rule-item',
                          'rule': t,
                          'init-edit': '',
                          'onEditConfirm': u,
                        },
                        null,
                        512,
                      ),
                    ]))
                  : Yn('', !0),
              ]),
            ]),
            _: 1,
          })
        );
      },
    }),
    kk = jt(Pk, [['__scopeId', 'data-v-a91e0666']]),
    Mk = ce({
      __name: 'index',
      props: { id: {} },
      setup(e) {
        const t = e,
          { collectionId: n, fetchDetail: r } = br();
        return (
          (n.value = t.id),
          r(),
          (o, i) => (
            he(),
            nt(
              J(tw),
              {
                'class': 'detail-layout',
                'bar-focused-color': 'hsl(var(--p))',
                'init-start-size': '35%',
                'local-key': J(Sh).DetailResizeLayout,
                'start-min-size': 200,
                'start-max-size': 400,
              },
              { start: $e(() => [v(kk)]), end: $e(() => [v(xk)]), _: 1 },
              8,
              ['local-key'],
            )
          )
        );
      },
    }),
    Ak = (e) => (yp('data-v-8d7c1413'), (e = e()), bp(), e),
    Ik = { class: 'h-full w-full' },
    Rk = { key: 1, class: 'w-full h-full' },
    Lk = { class: 'responsive-grid' },
    Dk = Ak(() => Se('div', { class: 'font-bold text-xl mt-8 mb-5' }, 'All Collections', -1)),
    Nk = { class: 'responsive-grid' },
    jk = ce({
      __name: 'index',
      setup(e) {
        const t = fh();
        function n(l) {
          t.push({ name: 'detail', params: { id: l } });
        }
        const { fetched: r, collections: o, fetchCollections: i } = Vl(),
          a = te(!r);
        i().then(() => {
          a.value = !1;
        });
        const s = te(!1);
        return (l, c) => (
          he(),
          Ee('div', Ik, [
            v(
              J(rr),
              { class: 'flex-center p-6' },
              {
                default: $e(() => [
                  a.value
                    ? (he(), nt(J(zb), { key: 0, shape: 'dots', size: 'lg' }))
                    : (he(),
                      Ee('div', Rk, [
                        Se('div', Lk, [v(J(qw), { onClick: c[0] || (c[0] = (u) => (s.value = !0)) })]),
                        Dk,
                        Se('div', Nk, [
                          (he(!0),
                          Ee(
                            Ie,
                            null,
                            Ni(
                              J(o),
                              (u) => (
                                he(),
                                nt(
                                  J(Yw),
                                  { key: u.id, collection: u, onClick: (f) => n(u.id) },
                                  {
                                    default: $e(() => {
                                      var f;
                                      return [gt(Kt((f = J(o)[0]) == null ? void 0 : f.name), 1)];
                                    }),
                                    _: 2,
                                  },
                                  1032,
                                  ['collection', 'onClick'],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                      ])),
                ]),
                _: 1,
              },
            ),
            v(J(Zw), { 'modelValue': s.value, 'onUpdate:modelValue': c[1] || (c[1] = (u) => (s.value = u)) }, null, 8, [
              'modelValue',
            ]),
          ])
        );
      },
    }),
    Hk = jt(jk, [['__scopeId', 'data-v-8d7c1413']]),
    Bk = { class: 'h-full w-full' },
    zk = ce({
      __name: 'index',
      setup(e) {
        return (t, n) => (
          he(),
          Ee('div', Bk, [
            v(
              J(rr),
              { class: 'flex-center' },
              { default: $e(() => [v(J(An), null, { default: $e(() => [gt('Settings')]), _: 1 })]), _: 1 },
            ),
          ])
        );
      },
    }),
    Fk = { class: 'h-full w-full' },
    Wk = ce({
      __name: 'index',
      setup(e) {
        return (t, n) => (
          he(),
          Ee('div', Fk, [
            v(
              J(rr),
              { class: 'flex-center' },
              { default: $e(() => [v(J(An), null, { default: $e(() => [gt('Statistics')]), _: 1 })]), _: 1 },
            ),
          ])
        );
      },
    }),
    Vk = { class: 'h-full w-full' },
    Kk = ce({
      __name: 'index',
      setup(e) {
        return (t, n) => (
          he(),
          Ee('div', Vk, [
            v(
              J(rr),
              { class: 'flex-center' },
              { default: $e(() => [v(J(An), null, { default: $e(() => [gt('Traffic')]), _: 1 })]), _: 1 },
            ),
          ])
        );
      },
    }),
    Uk = [
      { path: '/', component: Hk },
      { name: 'detail', path: '/collection/:id', component: Mk, props: !0 },
      { name: 'settings', path: '/settings', component: zk },
      { name: 'statistics', path: '/statistics', component: Wk },
      { name: 'traffic', path: '/traffic', component: Kk },
    ],
    Yk = Eb({ history: Ky(), routes: Uk });
  Hd.extend(Fv);
  const Tc = gy(o_),
    Xk = wy();
  Tc.use(Yk);
  Tc.use(Xk);
  Tc.mount('#app');
});
export default Gk();
