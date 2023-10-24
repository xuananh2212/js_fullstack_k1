(function () { const n = document.createElement("link").relList; if (n && n.supports && n.supports("modulepreload")) return; for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a); new MutationObserver(a => { for (const s of a) if (s.type === "childList") for (const f of s.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f) }).observe(document, { childList: !0, subtree: !0 }); function i(a) { const s = {}; return a.integrity && (s.integrity = a.integrity), a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function r(a) { if (a.ep) return; a.ep = !0; const s = i(a); fetch(a.href, s) } })(); function _e() { return "<h1>Home</h1>" } function ye() { return "<h1>About</h1>" } const V = [{ id: 1, name: "sản phẩm 1" }, { id: 2, name: "sản phẩm 2" }, { id: 3, name: "sản phẩm 3" }, { id: 4, name: "sản phẩm 4" }, { id: 5, name: "sản phẩm 5" }]; function Le() {
     return `<h1>Danh sách các sản phẩm</h1>
     <ul>
     ${V.map(e => `<li><a href="/san-pham/${e.id}" data-route>${e.name}</a></li>`).join("")}
     </ul>`} var Oe = /([:*])(\w+)/g, Ee = "([^/]+)", Ae = /\*/g, Re = "?(?:.*)", Pe = /\/\?/g, ke = "/?([^/]+|)", be = "(?:/^|^)", we = ""; function Q(e) { return e === void 0 && (e = "/"), U() ? location.pathname + location.search + location.hash : e } function l(e) { return e.replace(/\/+$/, "").replace(/^\/+/, "") } function k(e) { return typeof e == "string" } function Se(e) { return typeof e == "function" } function b(e) { return e && e.indexOf("#") >= 0 && e.split("#").pop() || "" } function He(e, n) { return n.length === 0 || !e ? null : e.slice(1, e.length).reduce(function (i, r, a) { return i === null && (i = {}), i[n[a]] = decodeURIComponent(r), i }, null) } function w(e) { var n = l(e).split(/\?(.*)?$/); return [l(n[0]), n.slice(1).join("")] } function N(e) { for (var n = {}, i = e.split("&"), r = 0; r < i.length; r++) { var a = i[r].split("="); if (a[0] !== "") { var s = decodeURIComponent(a[0]); n[s] ? (Array.isArray(n[s]) || (n[s] = [n[s]]), n[s].push(decodeURIComponent(a[1] || ""))) : n[s] = decodeURIComponent(a[1] || "") } } return n } function Y(e, n) { var i = w(l(e.currentLocationPath)), r = i[0], a = i[1], s = a === "" ? null : N(a), f = [], d; if (k(n.path)) { if (d = be + l(n.path).replace(Oe, function (L, _, O) { return f.push(O), Ee }).replace(Ae, Re).replace(Pe, ke) + "$", l(n.path) === "" && l(r) === "") return { url: r, queryString: a, hashString: b(e.to), route: n, data: null, params: s } } else d = n.path; var m = new RegExp(d, we), p = r.match(m); if (p) { var E = k(n.path) ? He(p, f) : p.groups ? p.groups : p.slice(1); return { url: l(r.replace(new RegExp("^" + e.instance.root), "")), queryString: a, hashString: b(e.to), route: n, data: E, params: s } } return !1 } function J() { return !!(typeof window < "u" && window.history && window.history.pushState) } function y(e, n) { return typeof e[n] > "u" || e[n] === !0 } function Fe(e) { if (!e) return {}; var n = e.split(","), i = {}, r; return n.forEach(function (a) { var s = a.split(":").map(function (f) { return f.replace(/(^ +| +$)/g, "") }); switch (s[0]) { case "historyAPIMethod": i.historyAPIMethod = s[1]; break; case "resolveOptionsStrategy": r || (r = {}), r.strategy = s[1]; break; case "resolveOptionsHash": r || (r = {}), r.hash = s[1] === "true"; break; case "updateBrowserURL": case "callHandler": case "updateState": case "force": i[s[0]] = s[1] === "true"; break } }), r && (i.resolveOptions = r), i } function U() { return typeof window < "u" } function Ce(e, n) { return e === void 0 && (e = []), n === void 0 && (n = {}), e.filter(function (i) { return i }).forEach(function (i) { ["before", "after", "already", "leave"].forEach(function (r) { i[r] && (n[r] || (n[r] = []), n[r].push(i[r])) }) }), n } function g(e, n, i) { var r = n || {}, a = 0; (function s() { if (!e[a]) { i && i(r); return } Array.isArray(e[a]) ? (e.splice.apply(e, [a, 1].concat(e[a][0](r) ? e[a][1] : e[a][2])), s()) : e[a](r, function (f) { typeof f > "u" || f === !0 ? (a += 1, s()) : i && i(r) }) })() } g.if = function (e, n, i) { return Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]), [e, n, i] }; function D(e, n) { typeof e.currentLocationPath > "u" && (e.currentLocationPath = e.to = Q(e.instance.root)), e.currentLocationPath = e.instance._checkForAHash(e.currentLocationPath), n() } function S(e, n) { for (var i = 0; i < e.instance.routes.length; i++) { var r = e.instance.routes[i], a = Y(e, r); if (a && (e.matches || (e.matches = []), e.matches.push(a), e.resolveOptions.strategy === "ONE")) { n(); return } } n() } function Te(e, n) { e.navigateOptions && (typeof e.navigateOptions.shouldResolve < "u" && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), typeof e.navigateOptions.silent < "u" && console.warn('"silent" is deprecated. Please check the documentation.')), n() } function Ne(e, n) { e.navigateOptions.force === !0 ? (e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]), n(!1)) : n() } var $ = U(), Ue = J(); function Me(e, n) { if (y(e.navigateOptions, "updateBrowserURL")) { var i = ("/" + e.to).replace(/\/\//g, "/"), r = $ && e.resolveOptions && e.resolveOptions.hash === !0; Ue ? (history[e.navigateOptions.historyAPIMethod || "pushState"](e.navigateOptions.stateObj || {}, e.navigateOptions.title || "", r ? "#" + i : i), location && location.hash && (e.instance.__freezeListening = !0, setTimeout(function () { if (!r) { var a = location.hash; location.hash = "", location.hash = a } e.instance.__freezeListening = !1 }, 1))) : $ && (window.location.href = e.to) } n() } function Z(e, n) { var i = e.instance; if (!i.lastResolved()) { n(); return } g(i.lastResolved().map(function (r) { return function (a, s) { if (!r.route.hooks || !r.route.hooks.leave) { s(); return } var f = !1, d = e.instance.matchLocation(r.route.path, e.currentLocationPath, !1); if (r.route.path !== "*") f = !d; else { var m = e.matches ? e.matches.find(function (p) { return r.route.path === p.route.path }) : !1; f = !m } if (y(e.navigateOptions, "callHooks") && f) { g(r.route.hooks.leave.map(function (p) { return function (E, L) { return p(function (_) { _ === !1 ? e.instance.__markAsClean(e) : L() }, e.matches && e.matches.length > 0 ? e.matches.length === 1 ? e.matches[0] : e.matches : void 0) } }).concat([function () { return s() }])); return } else s() } }), {}, function () { return n() }) } function je(e, n) { e.match.route.hooks && e.match.route.hooks.before && y(e.navigateOptions, "callHooks") ? g(e.match.route.hooks.before.map(function (i) { return function (a, s) { return i(function (f) { f === !1 ? e.instance.__markAsClean(e) : s() }, e.match) } }).concat([function () { return n() }])) : n() } function Ge(e, n) { y(e.navigateOptions, "callHandler") && e.match.route.handler(e.match), e.instance.updatePageLinks(), n() } function Ie(e, n) { e.match.route.hooks && e.match.route.hooks.after && y(e.navigateOptions, "callHooks") && e.match.route.hooks.after.forEach(function (i) { return i(e.match) }), n() } function qe(e, n) { var i = e.instance.lastResolved(); if (i && i[0] && i[0].route === e.match.route && i[0].url === e.match.url && i[0].queryString === e.match.queryString) { i.forEach(function (r) { r.route.hooks && r.route.hooks.already && y(e.navigateOptions, "callHooks") && r.route.hooks.already.forEach(function (a) { return a(e.match) }) }), n(!1); return } n() } function Be(e, n) { var i = e.instance._notFoundRoute; if (i) { e.notFoundHandled = !0; var r = w(e.currentLocationPath), a = r[0], s = r[1], f = b(e.to); i.path = l(a); var d = { url: i.path, queryString: s, hashString: f, data: null, route: i, params: s !== "" ? N(s) : null }; e.matches = [d], e.match = d } n() } function De(e, n) { (!e.resolveOptions || e.resolveOptions.noMatchWarning === !1 || typeof e.resolveOptions.noMatchWarning > "u") && console.warn('Navigo: "' + e.currentLocationPath + `" didn't match any of the registered routes.`), n() } function $e(e, n) { e.instance._setCurrent(null), n() } function x(e, n) { y(e.navigateOptions, "updateState") && e.instance._setCurrent(e.matches), n() } var ee = [qe, je, Ge, Ie], W = [Z, Be, g.if(function (e) { var n = e.notFoundHandled; return n }, ee.concat([x]), [De, $e])]; function F() { return F = Object.assign || function (e) { for (var n = 1; n < arguments.length; n++) { var i = arguments[n]; for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]) } return e }, F.apply(this, arguments) } function X(e, n) { var i = 0; function r() { if (i === e.matches.length) { x(e, n); return } g(ee, F({}, e, { match: e.matches[i] }), function () { i += 1, r() }) } Z(e, r) } function H(e) { e.instance.__markAsClean(e) } function C() { return C = Object.assign || function (e) { for (var n = 1; n < arguments.length; n++) { var i = arguments[n]; for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]) } return e }, C.apply(this, arguments) } var z = "[data-navigo]"; function We(e, n) { var i = n || { strategy: "ONE", hash: !1, noMatchWarning: !1, linksSelector: z }, r = this, a = "/", s = null, f = [], d = !1, m, p = J(), E = U(); e ? a = l(e) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'); function L(t) { return t.indexOf("#") >= 0 && (i.hash === !0 ? t = t.split("#")[1] || "/" : t = t.split("#")[0]), t } function _(t) { return l(a + "/" + l(t)) } function O(t, o, u, h) { return t = k(t) ? _(t) : t, { name: h || l(String(t)), path: t, handler: o, hooks: Ce(u) } } function te(t, o, u) { var h = this; return typeof t == "object" && !(t instanceof RegExp) ? (Object.keys(t).forEach(function (c) { if (typeof t[c] == "function") h.on(c, t[c]); else { var v = t[c], A = v.uses, ge = v.as, me = v.hooks; f.push(O(c, A, [m, me], ge)) } }), this) : (typeof t == "function" && (u = o, o = t, t = a), f.push(O(t, o, [m, u])), this) } function M(t, o) { if (r.__dirty) { r.__waiting.push(function () { return r.resolve(t, o) }); return } else r.__dirty = !0; t = t ? l(a) + "/" + l(t) : void 0; var u = { instance: r, to: t, currentLocationPath: t, navigateOptions: {}, resolveOptions: C({}, i, o) }; return g([D, S, g.if(function (h) { var c = h.matches; return c && c.length > 0 }, X, W)], u, H), u.matches ? u.matches : !1 } function j(t, o) { if (r.__dirty) { r.__waiting.push(function () { return r.navigate(t, o) }); return } else r.__dirty = !0; t = l(a) + "/" + l(t); var u = { instance: r, to: t, navigateOptions: o || {}, resolveOptions: o && o.resolveOptions ? o.resolveOptions : i, currentLocationPath: L(t) }; g([Te, Ne, S, g.if(function (h) { var c = h.matches; return c && c.length > 0 }, X, W), Me, H], u, H) } function ne(t, o, u) { var h = I(t, o); return h !== null ? (j(h.replace(new RegExp("^/?" + a), ""), u), !0) : !1 } function re(t) { return this.routes = f = f.filter(function (o) { return k(t) ? l(o.path) !== l(t) : Se(t) ? t !== o.handler : String(o.path) !== String(t) }), this } function ie() { p && (this.__popstateListener = function () { r.__freezeListening || M() }, window.addEventListener("popstate", this.__popstateListener)) } function ae() { this.routes = f = [], p && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = d = !0 } function oe(t, o) { return r._notFoundRoute = O("*", t, [m, o], "__NOT_FOUND__"), this } function G() { if (E) return se().forEach(function (t) { if (t.getAttribute("data-navigo") === "false" || t.getAttribute("target") === "_blank") { t.hasListenerAttached && t.removeEventListener("click", t.navigoHandler); return } t.hasListenerAttached || (t.hasListenerAttached = !0, t.navigoHandler = function (o) { if ((o.ctrlKey || o.metaKey) && o.target.tagName.toLowerCase() === "a") return !1; var u = t.getAttribute("href"); if (typeof u > "u" || u === null) return !1; if (u.match(/^(http|https)/) && typeof URL < "u") try { var h = new URL(u); u = h.pathname + h.search } catch { } var c = Fe(t.getAttribute("data-navigo-options")); d || (o.preventDefault(), o.stopPropagation(), r.navigate(l(u), c)) }, t.addEventListener("click", t.navigoHandler)) }), r } function se() { return E ? [].slice.call(document.querySelectorAll(i.linksSelector || z)) : [] } function ue(t) { return "/" + a + "/" + l(t) } function ce(t) { return m = t, this } function fe() { return s } function I(t, o, u) { var h = f.find(function (A) { return A.name === t }), c = null; if (h) { if (c = h.path, o) for (var v in o) c = c.replace(":" + v, o[v]); c = c.match(/^\//) ? c : "/" + c } return c && u && !u.includeRoot && (c = c.replace(new RegExp("^/" + a), "")), c } function he(t) { return t.getAttribute("href") } function q(t) { var o = w(l(t)), u = o[0], h = o[1], c = h === "" ? null : N(h), v = b(t), A = O(u, function () { }, [m], u); return { url: u, queryString: h, hashString: v, route: A, data: null, params: c } } function le() { return q(l(Q(a)).replace(new RegExp("^" + a), "")) } function de(t) { var o = { instance: r, currentLocationPath: t, to: t, navigateOptions: {}, resolveOptions: i }; return S(o, function () { }), o.matches ? o.matches : !1 } function pe(t, o, u) { typeof o < "u" && (typeof u > "u" || u) && (o = _(o)); var h = { instance: r, to: o, currentLocationPath: o }; D(h, function () { }), typeof t == "string" && (t = typeof u > "u" || u ? _(t) : t); var c = Y(h, { name: String(t), path: t, handler: function () { }, hooks: {} }); return c || !1 } function P(t, o, u) { return typeof o == "string" && (o = B(o)), o ? (o.hooks[t] || (o.hooks[t] = []), o.hooks[t].push(u), function () { o.hooks[t] = o.hooks[t].filter(function (h) { return h !== u }) }) : (console.warn("Route doesn't exists: " + o), function () { }) } function B(t) { return typeof t == "string" ? f.find(function (o) { return o.name === _(t) }) : f.find(function (o) { return o.handler === t }) } function ve(t) { t.instance.__dirty = !1, t.instance.__waiting.length > 0 && t.instance.__waiting.shift()() } this.root = a, this.routes = f, this.destroyed = d, this.current = s, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = ve, this.on = te, this.off = re, this.resolve = M, this.navigate = j, this.navigateByName = ne, this.destroy = ae, this.notFound = oe, this.updatePageLinks = G, this.link = ue, this.hooks = ce, this.extractGETParameters = function (t) { return w(L(t)) }, this.lastResolved = fe, this.generate = I, this.getLinkPath = he, this.match = de, this.matchLocation = pe, this.getCurrentLocation = le, this.addBeforeHook = P.bind(this, "before"), this.addAfterHook = P.bind(this, "after"), this.addAlreadyHook = P.bind(this, "already"), this.addLeaveHook = P.bind(this, "leave"), this.getRoute = B, this._pathToMatchObject = q, this._clean = l, this._checkForAHash = L, this._setCurrent = function (t) { return s = r.current = t }, ie.call(this), G.call(this) } const Xe = "./Error-404-8a4e40ee.jpg"; const ze = () => `
     <div class="error-page">
       <img src="${Xe}" />
     </div>
     `, R = new We("/", { linksSelector: "a" }), T = document.querySelector("#root"); console.log(T); function K(e, n) { e.innerHTML = n } window.navigate = function (e) { R.navigate(e) }; function Ke(e, n, i) { var r = e(); return r ? r = r.replace(/\{.*\}/g, n(i)) : r = n(i), r } console.log(R); function Ve(e, n) { Array.isArray(e) && (e.forEach(i => { R.on(i.path, r => K(T, Ke(n, i.component, r))) }), R.notFound(() => K(T, ze())), R.resolve()) } function Qe({ data: e }) {
     return `
     <h1>Chi tiết sản phẩm:${V.find(i => i.id === +e.id) ? e.id : "không có sản phẩm " + e.id}</h1>
     <button onclick="navigate('/san-pham')">Back</button>
     `} function Ye() {
     return `
     <header class="mb-3">
     <div class="container">
     <h1><a href="/" data-route>Header</a></h1>
     </div>
     </header>
     <hr>
     <main>
     <div class="container">
     <div class="row">
          <div class="col-3">
               <h2>Menu</h2>
               <ul>
                    <li><a href="/" data-route>Trang Chủ</a></li>
                    <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
                    <li><a href="/san-pham" data-route>Sản Phẩm</a></li>
               </ul>
          </div>
          <div class="col-9">
               {body}
          </div>
     </div>
     </div>
     </main>
     <footer class="mt-3">
          <div class="container">
               <h1>FOOTER</h1>
          </div>
     </footer>
     `} function Je() { return Ve([{ path: "/", component: _e }, { path: "/gioi-thieu", component: ye }, { path: "/san-pham", component: Le }, { path: "/san-pham/:id", component: Qe }], Ye) } Je();
