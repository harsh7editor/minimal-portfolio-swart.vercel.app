(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[883], {
    86602: function(e, t, n) {
        "use strict";
        let r, i, o;
        n.d(t, {
            A: function() {
                return eu
            },
            B: function() {
                return O
            },
            C: function() {
                return ec
            },
            E: function() {
                return A
            },
            a: function() {
                return M
            },
            b: function() {
                return ew
            },
            c: function() {
                return Z
            },
            d: function() {
                return eP
            },
            e: function() {
                return k
            },
            i: function() {
                return _
            },
            u: function() {
                return j
            }
        });
        var a, s, l = n(66376), u = n(2265), c = n(87777);
        let f = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? u.useEffect : u.useLayoutEffect;
        var d = n(44812)
          , h = n.n(d)
          , p = n(99514);
        let m = e=>"object" == typeof e && "function" == typeof e.then
          , v = [];
        function g(e, t, n=(e,t)=>e === t) {
            if (e === t)
                return !0;
            if (!e || !t)
                return !1;
            let r = e.length;
            if (t.length !== r)
                return !1;
            for (let i = 0; i < r; i++)
                if (!n(e[i], t[i]))
                    return !1;
            return !0
        }
        function y(e, t=null, n=!1, r={}) {
            for (let i of (null === t && (t = [e]),
            v))
                if (g(t, i.keys, i.equal)) {
                    if (n)
                        return;
                    if (Object.prototype.hasOwnProperty.call(i, "error"))
                        throw i.error;
                    if (Object.prototype.hasOwnProperty.call(i, "response"))
                        return r.lifespan && r.lifespan > 0 && (i.timeout && clearTimeout(i.timeout),
                        i.timeout = setTimeout(i.remove, r.lifespan)),
                        i.response;
                    if (!n)
                        throw i.promise
                }
            let i = {
                keys: t,
                equal: r.equal,
                remove: ()=>{
                    let e = v.indexOf(i);
                    -1 !== e && v.splice(e, 1)
                }
                ,
                promise: (m(e) ? e : e(...t)).then(e=>{
                    i.response = e,
                    r.lifespan && r.lifespan > 0 && (i.timeout = setTimeout(i.remove, r.lifespan))
                }
                ).catch(e=>i.error = e)
            };
            if (v.push(i),
            !n)
                throw i.promise
        }
        let b = (e,t,n)=>y(e, t, !1, n)
          , x = (e,t,n)=>void y(e, t, !0, n)
          , w = e=>{
            if (void 0 === e || 0 === e.length)
                v.splice(0, v.length);
            else {
                let t = v.find(t=>g(e, t.keys, t.equal));
                t && t.remove()
            }
        }
        ;
        var S = n(49079);
        let P = {}
          , k = e=>void Object.assign(P, e)
          , E = e=>"colorSpace"in e || "outputColorSpace"in e
          , C = ()=>{
            var e;
            return null != (e = P.ColorManagement) ? e : null
        }
          , T = e=>e && e.isOrthographicCamera
          , _ = e=>e && e.hasOwnProperty("current")
          , M = "undefined" != typeof window && (null != (a = window.document) && a.createElement || (null == (s = window.navigator) ? void 0 : s.product) === "ReactNative") ? u.useLayoutEffect : u.useEffect;
        function j(e) {
            let t = u.useRef(e);
            return M(()=>void (t.current = e), [e]),
            t
        }
        function O({set: e}) {
            return M(()=>(e(new Promise(()=>null)),
            ()=>e(!1)), [e]),
            null
        }
        class A extends u.Component {
            constructor(...e) {
                super(...e),
                this.state = {
                    error: !1
                }
            }
            componentDidCatch(e) {
                this.props.set(e)
            }
            render() {
                return this.state.error ? null : this.props.children
            }
        }
        A.getDerivedStateFromError = ()=>({
            error: !0
        });
        let R = "__default"
          , z = new Map
          , L = e=>e && !!e.memoized && !!e.changes;
        function D(e) {
            var t;
            let n = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
            return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e
        }
        let N = e=>{
            var t;
            return null == (t = e.__r3f) ? void 0 : t.root.getState()
        }
        ;
        function I(e) {
            let t = e.__r3f.root;
            for (; t.getState().previousRoot; )
                t = t.getState().previousRoot;
            return t
        }
        let F = {
            obj: e=>e === Object(e) && !F.arr(e) && "function" != typeof e,
            fun: e=>"function" == typeof e,
            str: e=>"string" == typeof e,
            num: e=>"number" == typeof e,
            boo: e=>"boolean" == typeof e,
            und: e=>void 0 === e,
            arr: e=>Array.isArray(e),
            equ(e, t, {arrays: n="shallow", objects: r="reference", strict: i=!0}={}) {
                let o;
                if (typeof e != typeof t || !!e != !!t)
                    return !1;
                if (F.str(e) || F.num(e))
                    return e === t;
                let a = F.obj(e);
                if (a && "reference" === r)
                    return e === t;
                let s = F.arr(e);
                if (s && "reference" === n)
                    return e === t;
                if ((s || a) && e === t)
                    return !0;
                for (o in e)
                    if (!(o in t))
                        return !1;
                if (a && "shallow" === n && "shallow" === r) {
                    for (o in i ? t : e)
                        if (!F.equ(e[o], t[o], {
                            strict: i,
                            objects: "reference"
                        }))
                            return !1
                } else
                    for (o in i ? t : e)
                        if (e[o] !== t[o])
                            return !1;
                if (F.und(o)) {
                    if (s && 0 === e.length && 0 === t.length || a && 0 === Object.keys(e).length && 0 === Object.keys(t).length)
                        return !0;
                    if (e !== t)
                        return !1
                }
                return !0
            }
        };
        function V(e, t) {
            return e.__r3f = {
                type: "",
                root: null,
                previousAttach: null,
                memoizedProps: {},
                eventCount: 0,
                handlers: {},
                objects: [],
                parent: null,
                ...t
            },
            e
        }
        function B(e, t) {
            let n = e;
            if (!t.includes("-"))
                return {
                    target: n,
                    key: t
                };
            {
                let r = t.split("-")
                  , i = r.pop();
                return {
                    target: n = r.reduce((e,t)=>e[t], e),
                    key: i
                }
            }
        }
        let U = /-\d+$/;
        function W(e, t, n) {
            if (F.str(n)) {
                if (U.test(n)) {
                    let {target: t, key: r} = B(e, n.replace(U, ""));
                    Array.isArray(t[r]) || (t[r] = [])
                }
                let {target: r, key: i} = B(e, n);
                t.__r3f.previousAttach = r[i],
                r[i] = t
            } else
                t.__r3f.previousAttach = n(e, t)
        }
        function $(e, t, n) {
            var r, i;
            if (F.str(n)) {
                let {target: r, key: i} = B(e, n)
                  , o = t.__r3f.previousAttach;
                void 0 === o ? delete r[i] : r[i] = o
            } else
                null == (r = t.__r3f) || null == r.previousAttach || r.previousAttach(e, t);
            null == (i = t.__r3f) || delete i.previousAttach
        }
        function H(e, {children: t, key: n, ref: r, ...i}, {children: o, key: a, ref: s, ...l}={}, u=!1) {
            var c;
            let f = null != (c = null == e ? void 0 : e.__r3f) ? c : {}
              , d = Object.entries(i)
              , h = [];
            if (u) {
                let e = Object.keys(l);
                for (let t = 0; t < e.length; t++)
                    i.hasOwnProperty(e[t]) || d.unshift([e[t], R + "remove"])
            }
            d.forEach(([t,n])=>{
                var r;
                if (null != (r = e.__r3f) && r.primitive && "object" === t || F.equ(n, l[t]))
                    return;
                if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))
                    return h.push([t, n, !0, []]);
                let o = [];
                for (let e in t.includes("-") && (o = t.split("-")),
                h.push([t, n, !1, o]),
                i) {
                    let n = i[e];
                    e.startsWith(`${t}-`) && h.push([e, n, !1, e.split("-")])
                }
            }
            );
            let p = {
                ...i
            };
            return f.memoizedProps && f.memoizedProps.args && (p.args = f.memoizedProps.args),
            f.memoizedProps && f.memoizedProps.attach && (p.attach = f.memoizedProps.attach),
            {
                memoized: p,
                changes: h
            }
        }
        let q = void 0 !== S && !1;
        function G(e, t) {
            var n, r, i;
            let o = null != (n = e.__r3f) ? n : {}
              , a = o.root
              , s = null != (r = null == a ? void 0 : null == a.getState ? void 0 : a.getState()) ? r : {}
              , {memoized: u, changes: c} = L(t) ? t : H(e, t)
              , f = o.eventCount;
            e.__r3f && (e.__r3f.memoizedProps = u);
            for (let t = 0; t < c.length; t++) {
                let[n,r,i,a] = c[t];
                if (E(e)) {
                    let e = "srgb"
                      , t = "srgb-linear";
                    "encoding" === n ? (n = "colorSpace",
                    r = 3001 === r ? e : t) : "outputEncoding" === n && (n = "outputColorSpace",
                    r = 3001 === r ? e : t)
                }
                let u = e
                  , f = u[n];
                if (a.length && !((f = a.reduce((e,t)=>e[t], e)) && f.set)) {
                    let[t,...r] = a.reverse();
                    u = r.reverse().reduce((e,t)=>e[t], e),
                    n = t
                }
                if (r === R + "remove") {
                    if (u.constructor) {
                        let e = z.get(u.constructor);
                        e || (e = new u.constructor,
                        z.set(u.constructor, e)),
                        r = e[n]
                    } else
                        r = 0
                }
                if (i)
                    r ? o.handlers[n] = r : delete o.handlers[n],
                    o.eventCount = Object.keys(o.handlers).length;
                else if (f && f.set && (f.copy || f instanceof l.Layers)) {
                    if (Array.isArray(r))
                        f.fromArray ? f.fromArray(r) : f.set(...r);
                    else if (f.copy && r && r.constructor && (q ? f.constructor.name === r.constructor.name : f.constructor === r.constructor))
                        f.copy(r);
                    else if (void 0 !== r) {
                        let e = f instanceof l.Color;
                        !e && f.setScalar ? f.setScalar(r) : f instanceof l.Layers && r instanceof l.Layers ? f.mask = r.mask : f.set(r),
                        C() || s.linear || !e || f.convertSRGBToLinear()
                    }
                } else if (u[n] = r,
                u[n]instanceof l.Texture && u[n].format === l.RGBAFormat && u[n].type === l.UnsignedByteType) {
                    let e = u[n];
                    E(e) && E(s.gl) ? e.colorSpace = s.gl.outputColorSpace : e.encoding = s.gl.outputEncoding
                }
                Q(e)
            }
            if (o.parent && e.raycast && f !== o.eventCount) {
                let t = I(e).getState().internal
                  , n = t.interaction.indexOf(e);
                n > -1 && t.interaction.splice(n, 1),
                o.eventCount && t.interaction.push(e)
            }
            return !(1 === c.length && "onUpdate" === c[0][0]) && c.length && null != (i = e.__r3f) && i.parent && X(e),
            e
        }
        function Q(e) {
            var t, n;
            let r = null == (t = e.__r3f) ? void 0 : null == (n = t.root) ? void 0 : null == n.getState ? void 0 : n.getState();
            r && 0 === r.internal.frames && r.invalidate()
        }
        function X(e) {
            null == e.onUpdate || e.onUpdate(e)
        }
        function Y(e) {
            return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
        }
        function K(e, t, n, r) {
            let i = n.get(t);
            i && (n.delete(t),
            0 === n.size && (e.delete(r),
            i.target.releasePointerCapture(r)))
        }
        function Z(e) {
            function t(e) {
                return e.filter(e=>["Move", "Over", "Enter", "Out", "Leave"].some(t=>{
                    var n;
                    return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t]
                }
                ))
            }
            function n(t) {
                let {internal: n} = e.getState();
                for (let e of n.hovered.values())
                    if (!t.length || !t.find(t=>t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                        let r = e.eventObject.__r3f
                          , i = null == r ? void 0 : r.handlers;
                        if (n.hovered.delete(Y(e)),
                        null != r && r.eventCount) {
                            let n = {
                                ...e,
                                intersections: t
                            };
                            null == i.onPointerOut || i.onPointerOut(n),
                            null == i.onPointerLeave || i.onPointerLeave(n)
                        }
                    }
            }
            function r(e, t) {
                for (let n = 0; n < t.length; n++) {
                    let r = t[n].__r3f;
                    null == r || null == r.handlers.onPointerMissed || r.handlers.onPointerMissed(e)
                }
            }
            return {
                handlePointer: function(i) {
                    switch (i) {
                    case "onPointerLeave":
                    case "onPointerCancel":
                        return ()=>n([]);
                    case "onLostPointerCapture":
                        return t=>{
                            let {internal: r} = e.getState();
                            "pointerId"in t && r.capturedMap.has(t.pointerId) && requestAnimationFrame(()=>{
                                r.capturedMap.has(t.pointerId) && (r.capturedMap.delete(t.pointerId),
                                n([]))
                            }
                            )
                        }
                    }
                    return function(o) {
                        let {onPointerMissed: a, internal: s} = e.getState();
                        s.lastEvent.current = o;
                        let u = "onPointerMove" === i
                          , c = "onClick" === i || "onContextMenu" === i || "onDoubleClick" === i
                          , f = function(t, n) {
                            let r = e.getState()
                              , i = new Set
                              , o = []
                              , a = n ? n(r.internal.interaction) : r.internal.interaction;
                            for (let e = 0; e < a.length; e++) {
                                let t = N(a[e]);
                                t && (t.raycaster.camera = void 0)
                            }
                            r.previousRoot || null == r.events.compute || r.events.compute(t, r);
                            let s = a.flatMap(function(e) {
                                let n = N(e);
                                if (!n || !n.events.enabled || null === n.raycaster.camera)
                                    return [];
                                if (void 0 === n.raycaster.camera) {
                                    var r;
                                    null == n.events.compute || n.events.compute(t, n, null == (r = n.previousRoot) ? void 0 : r.getState()),
                                    void 0 === n.raycaster.camera && (n.raycaster.camera = null)
                                }
                                return n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []
                            }).sort((e,t)=>{
                                let n = N(e.object)
                                  , r = N(t.object);
                                return n && r && r.events.priority - n.events.priority || e.distance - t.distance
                            }
                            ).filter(e=>{
                                let t = Y(e);
                                return !i.has(t) && (i.add(t),
                                !0)
                            }
                            );
                            for (let e of (r.events.filter && (s = r.events.filter(s, r)),
                            s)) {
                                let t = e.object;
                                for (; t; ) {
                                    var l;
                                    null != (l = t.__r3f) && l.eventCount && o.push({
                                        ...e,
                                        eventObject: t
                                    }),
                                    t = t.parent
                                }
                            }
                            if ("pointerId"in t && r.internal.capturedMap.has(t.pointerId))
                                for (let e of r.internal.capturedMap.get(t.pointerId).values())
                                    i.has(Y(e.intersection)) || o.push(e.intersection);
                            return o
                        }(o, u ? t : void 0)
                          , d = c ? function(t) {
                            let {internal: n} = e.getState()
                              , r = t.offsetX - n.initialClick[0]
                              , i = t.offsetY - n.initialClick[1];
                            return Math.round(Math.sqrt(r * r + i * i))
                        }(o) : 0;
                        "onPointerDown" === i && (s.initialClick = [o.offsetX, o.offsetY],
                        s.initialHits = f.map(e=>e.eventObject)),
                        c && !f.length && d <= 2 && (r(o, s.interaction),
                        a && a(o)),
                        u && n(f),
                        function(t, r, i, o) {
                            let a = e.getState();
                            if (t.length) {
                                let e = {
                                    stopped: !1
                                };
                                for (let s of t) {
                                    let {raycaster: u, pointer: c, camera: f, internal: d} = N(s.object) || a
                                      , h = new l.Vector3(c.x,c.y,0).unproject(f)
                                      , p = e=>{
                                        var t, n;
                                        return null != (t = null == (n = d.capturedMap.get(e)) ? void 0 : n.has(s.eventObject)) && t
                                    }
                                      , m = e=>{
                                        let t = {
                                            intersection: s,
                                            target: r.target
                                        };
                                        d.capturedMap.has(e) ? d.capturedMap.get(e).set(s.eventObject, t) : d.capturedMap.set(e, new Map([[s.eventObject, t]])),
                                        r.target.setPointerCapture(e)
                                    }
                                      , v = e=>{
                                        let t = d.capturedMap.get(e);
                                        t && K(d.capturedMap, s.eventObject, t, e)
                                    }
                                      , g = {};
                                    for (let e in r) {
                                        let t = r[e];
                                        "function" != typeof t && (g[e] = t)
                                    }
                                    let y = {
                                        ...s,
                                        ...g,
                                        pointer: c,
                                        intersections: t,
                                        stopped: e.stopped,
                                        delta: i,
                                        unprojectedPoint: h,
                                        ray: u.ray,
                                        camera: f,
                                        stopPropagation() {
                                            let i = "pointerId"in r && d.capturedMap.get(r.pointerId);
                                            (!i || i.has(s.eventObject)) && (y.stopped = e.stopped = !0,
                                            d.hovered.size && Array.from(d.hovered.values()).find(e=>e.eventObject === s.eventObject) && n([...t.slice(0, t.indexOf(s)), s]))
                                        },
                                        target: {
                                            hasPointerCapture: p,
                                            setPointerCapture: m,
                                            releasePointerCapture: v
                                        },
                                        currentTarget: {
                                            hasPointerCapture: p,
                                            setPointerCapture: m,
                                            releasePointerCapture: v
                                        },
                                        nativeEvent: r
                                    };
                                    if (o(y),
                                    !0 === e.stopped)
                                        break
                                }
                            }
                        }(f, o, d, function(e) {
                            let t = e.eventObject
                              , n = t.__r3f
                              , a = null == n ? void 0 : n.handlers;
                            if (null != n && n.eventCount) {
                                if (u) {
                                    if (a.onPointerOver || a.onPointerEnter || a.onPointerOut || a.onPointerLeave) {
                                        let t = Y(e)
                                          , n = s.hovered.get(t);
                                        n ? n.stopped && e.stopPropagation() : (s.hovered.set(t, e),
                                        null == a.onPointerOver || a.onPointerOver(e),
                                        null == a.onPointerEnter || a.onPointerEnter(e))
                                    }
                                    null == a.onPointerMove || a.onPointerMove(e)
                                } else {
                                    let n = a[i];
                                    n ? (!c || s.initialHits.includes(t)) && (r(o, s.interaction.filter(e=>!s.initialHits.includes(e))),
                                    n(e)) : c && s.initialHits.includes(t) && r(o, s.interaction.filter(e=>!s.initialHits.includes(e)))
                                }
                            }
                        })
                    }
                }
            }
        }
        let J = e=>!!(null != e && e.render)
          , ee = u.createContext(null)
          , et = (e,t)=>{
            let n = function(e) {
                let t = "function" == typeof e ? function(e) {
                    let t;
                    let n = new Set
                      , r = (e,r)=>{
                        let i = "function" == typeof e ? e(t) : e;
                        if (i !== t) {
                            let e = t;
                            t = r ? i : Object.assign({}, t, i),
                            n.forEach(n=>n(t, e))
                        }
                    }
                      , i = ()=>t
                      , o = (e,r=i,o=Object.is)=>{
                        console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                        let a = r(t);
                        function s() {
                            let n = r(t);
                            if (!o(a, n)) {
                                let t = a;
                                e(a = n, t)
                            }
                        }
                        return n.add(s),
                        ()=>n.delete(s)
                    }
                      , a = {
                        setState: r,
                        getState: i,
                        subscribe: (e,t,r)=>t || r ? o(e, t, r) : (n.add(e),
                        ()=>n.delete(e)),
                        destroy: ()=>n.clear()
                    };
                    return t = e(r, i, a),
                    a
                }(e) : e
                  , n = (e=t.getState,n=Object.is)=>{
                    let r;
                    let[,i] = (0,
                    u.useReducer)(e=>e + 1, 0)
                      , o = t.getState()
                      , a = (0,
                    u.useRef)(o)
                      , s = (0,
                    u.useRef)(e)
                      , l = (0,
                    u.useRef)(n)
                      , c = (0,
                    u.useRef)(!1)
                      , d = (0,
                    u.useRef)();
                    void 0 === d.current && (d.current = e(o));
                    let h = !1;
                    (a.current !== o || s.current !== e || l.current !== n || c.current) && (r = e(o),
                    h = !n(d.current, r)),
                    f(()=>{
                        h && (d.current = r),
                        a.current = o,
                        s.current = e,
                        l.current = n,
                        c.current = !1
                    }
                    );
                    let p = (0,
                    u.useRef)(o);
                    f(()=>{
                        let e = ()=>{
                            try {
                                let e = t.getState()
                                  , n = s.current(e);
                                l.current(d.current, n) || (a.current = e,
                                d.current = n,
                                i())
                            } catch (e) {
                                c.current = !0,
                                i()
                            }
                        }
                          , n = t.subscribe(e);
                        return t.getState() !== p.current && e(),
                        n
                    }
                    , []);
                    let m = h ? r : d.current;
                    return (0,
                    u.useDebugValue)(m),
                    m
                }
                ;
                return Object.assign(n, t),
                n[Symbol.iterator] = function() {
                    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                    let e = [n, t];
                    return {
                        next() {
                            let t = e.length <= 0;
                            return {
                                value: e.shift(),
                                done: t
                            }
                        }
                    }
                }
                ,
                n
            }((n,r)=>{
                let i;
                let o = new l.Vector3
                  , a = new l.Vector3
                  , s = new l.Vector3;
                function c(e=r().camera, t=a, n=r().size) {
                    let {width: i, height: u, top: c, left: f} = n
                      , d = i / u;
                    t instanceof l.Vector3 ? s.copy(t) : s.set(...t);
                    let h = e.getWorldPosition(o).distanceTo(s);
                    if (T(e))
                        return {
                            width: i / e.zoom,
                            height: u / e.zoom,
                            top: c,
                            left: f,
                            factor: 1,
                            distance: h,
                            aspect: d
                        };
                    {
                        let t = 2 * Math.tan(e.fov * Math.PI / 180 / 2) * h
                          , n = i / u * t;
                        return {
                            width: n,
                            height: t,
                            top: c,
                            left: f,
                            factor: i / n,
                            distance: h,
                            aspect: d
                        }
                    }
                }
                let f = e=>n(t=>({
                    performance: {
                        ...t.performance,
                        current: e
                    }
                }))
                  , d = new l.Vector2;
                return {
                    set: n,
                    get: r,
                    gl: null,
                    camera: null,
                    raycaster: null,
                    events: {
                        priority: 1,
                        enabled: !0,
                        connected: !1
                    },
                    xr: null,
                    scene: null,
                    invalidate: (t=1)=>e(r(), t),
                    advance: (e,n)=>t(e, n, r()),
                    legacy: !1,
                    linear: !1,
                    flat: !1,
                    controls: null,
                    clock: new l.Clock,
                    pointer: d,
                    mouse: d,
                    frameloop: "always",
                    onPointerMissed: void 0,
                    performance: {
                        current: 1,
                        min: .5,
                        max: 1,
                        debounce: 200,
                        regress: ()=>{
                            let e = r();
                            i && clearTimeout(i),
                            e.performance.current !== e.performance.min && f(e.performance.min),
                            i = setTimeout(()=>f(r().performance.max), e.performance.debounce)
                        }
                    },
                    size: {
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        updateStyle: !1
                    },
                    viewport: {
                        initialDpr: 0,
                        dpr: 0,
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        aspect: 0,
                        distance: 0,
                        factor: 0,
                        getCurrentViewport: c
                    },
                    setEvents: e=>n(t=>({
                        ...t,
                        events: {
                            ...t.events,
                            ...e
                        }
                    })),
                    setSize: (e,t,i,o,s)=>{
                        let l = r().camera
                          , u = {
                            width: e,
                            height: t,
                            top: o || 0,
                            left: s || 0,
                            updateStyle: i
                        };
                        n(e=>({
                            size: u,
                            viewport: {
                                ...e.viewport,
                                ...c(l, a, u)
                            }
                        }))
                    }
                    ,
                    setDpr: e=>n(t=>{
                        let n = D(e);
                        return {
                            viewport: {
                                ...t.viewport,
                                dpr: n,
                                initialDpr: t.viewport.initialDpr || n
                            }
                        }
                    }
                    ),
                    setFrameloop: (e="always")=>{
                        let t = r().clock;
                        t.stop(),
                        t.elapsedTime = 0,
                        "never" !== e && (t.start(),
                        t.elapsedTime = 0),
                        n(()=>({
                            frameloop: e
                        }))
                    }
                    ,
                    previousRoot: void 0,
                    internal: {
                        active: !1,
                        priority: 0,
                        frames: 0,
                        lastEvent: u.createRef(),
                        interaction: [],
                        hovered: new Map,
                        subscribers: [],
                        initialClick: [0, 0],
                        initialHits: [],
                        capturedMap: new Map,
                        subscribe: (e,t,n)=>{
                            let i = r().internal;
                            return i.priority = i.priority + (t > 0 ? 1 : 0),
                            i.subscribers.push({
                                ref: e,
                                priority: t,
                                store: n
                            }),
                            i.subscribers = i.subscribers.sort((e,t)=>e.priority - t.priority),
                            ()=>{
                                let n = r().internal;
                                null != n && n.subscribers && (n.priority = n.priority - (t > 0 ? 1 : 0),
                                n.subscribers = n.subscribers.filter(t=>t.ref !== e))
                            }
                        }
                    }
                }
            }
            )
              , r = n.getState()
              , i = r.size
              , o = r.viewport.dpr
              , a = r.camera;
            return n.subscribe(()=>{
                let {camera: e, size: t, viewport: r, gl: s, set: l} = n.getState();
                if (t.width !== i.width || t.height !== i.height || r.dpr !== o) {
                    var u;
                    i = t,
                    o = r.dpr,
                    e.manual || (T(e) ? (e.left = -(t.width / 2),
                    e.right = t.width / 2,
                    e.top = t.height / 2,
                    e.bottom = -(t.height / 2)) : e.aspect = t.width / t.height,
                    e.updateProjectionMatrix(),
                    e.updateMatrixWorld()),
                    s.setPixelRatio(r.dpr);
                    let n = null != (u = t.updateStyle) ? u : "undefined" != typeof HTMLCanvasElement && s.domElement instanceof HTMLCanvasElement;
                    s.setSize(t.width, t.height, n)
                }
                e !== a && (a = e,
                l(t=>({
                    viewport: {
                        ...t.viewport,
                        ...t.viewport.getCurrentViewport(e)
                    }
                })))
            }
            ),
            n.subscribe(t=>e(t)),
            n
        }
          , en = new Set
          , er = new Set
          , ei = new Set;
        function eo(e, t) {
            if (e.size)
                for (let {callback: n} of e.values())
                    n(t)
        }
        function ea(e, t) {
            switch (e) {
            case "before":
                return eo(en, t);
            case "after":
                return eo(er, t);
            case "tail":
                return eo(ei, t)
            }
        }
        function es(e, t, n) {
            let a = t.clock.getDelta();
            for ("never" === t.frameloop && "number" == typeof e && (a = e - t.clock.elapsedTime,
            t.clock.oldTime = t.clock.elapsedTime,
            t.clock.elapsedTime = e),
            i = t.internal.subscribers,
            r = 0; r < i.length; r++)
                (o = i[r]).ref.current(o.store.getState(), a, n);
            return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
            t.internal.frames = Math.max(0, t.internal.frames - 1),
            "always" === t.frameloop ? 1 : t.internal.frames
        }
        function el() {
            let e = u.useContext(ee);
            if (!e)
                throw Error("R3F: Hooks can only be used within the Canvas component!");
            return e
        }
        function eu(e=e=>e, t) {
            return el()(e, t)
        }
        function ec(e, t=0) {
            let n = el()
              , r = n.getState().internal.subscribe
              , i = j(e);
            return M(()=>r(i, t, n), [t, r, n]),
            null
        }
        let ef = new WeakMap;
        function ed(e, t) {
            return function(n, ...r) {
                let i = ef.get(n);
                return i || (i = new n,
                ef.set(n, i)),
                e && e(i),
                Promise.all(r.map(e=>new Promise((n,r)=>i.load(e, e=>{
                    e.scene && Object.assign(e, function(e) {
                        let t = {
                            nodes: {},
                            materials: {}
                        };
                        return e && e.traverse(e=>{
                            e.name && (t.nodes[e.name] = e),
                            e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material)
                        }
                        ),
                        t
                    }(e.scene)),
                    n(e)
                }
                , t, t=>r(Error(`Could not load ${e}: ${null == t ? void 0 : t.message}`))))))
            }
        }
        function eh(e, t, n, r) {
            let i = Array.isArray(t) ? t : [t]
              , o = b(ed(n, r), [e, ...i], {
                equal: F.equ
            });
            return Array.isArray(t) ? o : o[0]
        }
        eh.preload = function(e, t, n) {
            let r = Array.isArray(t) ? t : [t];
            return x(ed(n), [e, ...r])
        }
        ,
        eh.clear = function(e, t) {
            return w([e, ...Array.isArray(t) ? t : [t]])
        }
        ;
        let ep = new Map
          , {invalidate: em, advance: ev} = function(e) {
            let t, n, r, i = !1, o = !1;
            function a(s) {
                for (let u of (n = requestAnimationFrame(a),
                i = !0,
                t = 0,
                ea("before", s),
                o = !0,
                e.values())) {
                    var l;
                    (r = u.store.getState()).internal.active && ("always" === r.frameloop || r.internal.frames > 0) && !(null != (l = r.gl.xr) && l.isPresenting) && (t += es(s, r))
                }
                if (o = !1,
                ea("after", s),
                0 === t)
                    return ea("tail", s),
                    i = !1,
                    cancelAnimationFrame(n)
            }
            return {
                loop: a,
                invalidate: function t(n, r=1) {
                    var s;
                    if (!n)
                        return e.forEach(e=>t(e.store.getState(), r));
                    null != (s = n.gl.xr) && s.isPresenting || !n.internal.active || "never" === n.frameloop || (r > 1 ? n.internal.frames = Math.min(60, n.internal.frames + r) : o ? n.internal.frames = 2 : n.internal.frames = 1,
                    i || (i = !0,
                    requestAnimationFrame(a)))
                },
                advance: function(t, n=!0, r, i) {
                    if (n && ea("before", t),
                    r)
                        es(t, r, i);
                    else
                        for (let n of e.values())
                            es(t, n.store.getState());
                    n && ea("after", t)
                }
            }
        }(ep)
          , {reconciler: eg, applyProps: ey} = function(e, t) {
            function n(e, {args: t=[], attach: n, ...r}, i) {
                let o, a = `${e[0].toUpperCase()}${e.slice(1)}`;
                if ("primitive" === e) {
                    if (void 0 === r.object)
                        throw Error("R3F: Primitives without 'object' are invalid!");
                    o = V(r.object, {
                        type: e,
                        root: i,
                        attach: n,
                        primitive: !0
                    })
                } else {
                    let r = P[a];
                    if (!r)
                        throw Error(`R3F: ${a} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                    if (!Array.isArray(t))
                        throw Error("R3F: The args prop must be an array!");
                    o = V(new r(...t), {
                        type: e,
                        root: i,
                        attach: n,
                        memoizedProps: {
                            args: t
                        }
                    })
                }
                return void 0 === o.__r3f.attach && (o instanceof l.BufferGeometry ? o.__r3f.attach = "geometry" : o instanceof l.Material && (o.__r3f.attach = "material")),
                "inject" !== a && G(o, r),
                o
            }
            function r(e, t) {
                let n = !1;
                if (t) {
                    var r, i;
                    null != (r = t.__r3f) && r.attach ? W(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.add(t),
                    n = !0),
                    n || null == (i = e.__r3f) || i.objects.push(t),
                    t.__r3f || V(t, {}),
                    t.__r3f.parent = e,
                    X(t),
                    Q(t)
                }
            }
            function i(e, t, n) {
                let r = !1;
                if (t) {
                    var i, o;
                    if (null != (i = t.__r3f) && i.attach)
                        W(e, t, t.__r3f.attach);
                    else if (t.isObject3D && e.isObject3D) {
                        t.parent = e,
                        t.dispatchEvent({
                            type: "added"
                        }),
                        e.dispatchEvent({
                            type: "childadded",
                            child: t
                        });
                        let i = e.children.filter(e=>e !== t)
                          , o = i.indexOf(n);
                        e.children = [...i.slice(0, o), t, ...i.slice(o)],
                        r = !0
                    }
                    r || null == (o = e.__r3f) || o.objects.push(t),
                    t.__r3f || V(t, {}),
                    t.__r3f.parent = e,
                    X(t),
                    Q(t)
                }
            }
            function o(e, t, n=!1) {
                e && [...e].forEach(e=>a(t, e, n))
            }
            function a(e, t, n) {
                if (t) {
                    var r, i, a, s, l;
                    t.__r3f && (t.__r3f.parent = null),
                    null != (r = e.__r3f) && r.objects && (e.__r3f.objects = e.__r3f.objects.filter(e=>e !== t)),
                    null != (i = t.__r3f) && i.attach ? $(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.remove(t),
                    null != (s = t.__r3f) && s.root && function(e, t) {
                        let {internal: n} = e.getState();
                        n.interaction = n.interaction.filter(e=>e !== t),
                        n.initialHits = n.initialHits.filter(e=>e !== t),
                        n.hovered.forEach((e,r)=>{
                            (e.eventObject === t || e.object === t) && n.hovered.delete(r)
                        }
                        ),
                        n.capturedMap.forEach((e,r)=>{
                            K(n.capturedMap, t, e, r)
                        }
                        )
                    }(I(t), t));
                    let u = null == (a = t.__r3f) ? void 0 : a.primitive
                      , c = !u && (void 0 === n ? null !== t.dispose : n);
                    if (u || (o(null == (l = t.__r3f) ? void 0 : l.objects, t, c),
                    o(t.children, t, c)),
                    delete t.__r3f,
                    c && t.dispose && "Scene" !== t.type) {
                        let e = ()=>{
                            try {
                                t.dispose()
                            } catch (e) {}
                        }
                        ;
                        "undefined" == typeof IS_REACT_ACT_ENVIRONMENT ? (0,
                        p.unstable_scheduleCallback)(p.unstable_IdlePriority, e) : e()
                    }
                    Q(e)
                }
            }
            let s = ()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
            return {
                reconciler: h()({
                    createInstance: n,
                    removeChild: a,
                    appendChild: r,
                    appendInitialChild: r,
                    insertBefore: i,
                    supportsMutation: !0,
                    isPrimaryRenderer: !1,
                    supportsPersistence: !1,
                    supportsHydration: !1,
                    noTimeout: -1,
                    appendChildToContainer: (e,t)=>{
                        if (!t)
                            return;
                        let n = e.getState().scene;
                        n.__r3f && (n.__r3f.root = e,
                        r(n, t))
                    }
                    ,
                    removeChildFromContainer: (e,t)=>{
                        t && a(e.getState().scene, t)
                    }
                    ,
                    insertInContainerBefore: (e,t,n)=>{
                        if (!t || !n)
                            return;
                        let r = e.getState().scene;
                        r.__r3f && i(r, t, n)
                    }
                    ,
                    getRootHostContext: ()=>null,
                    getChildHostContext: e=>e,
                    finalizeInitialChildren(e) {
                        var t;
                        return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {}).handlers
                    },
                    prepareUpdate(e, t, n, r) {
                        var i;
                        if ((null != (i = null == e ? void 0 : e.__r3f) ? i : {}).primitive && r.object && r.object !== e)
                            return [!0];
                        {
                            let {args: t=[], children: i, ...o} = r
                              , {args: a=[], children: s, ...l} = n;
                            if (!Array.isArray(t))
                                throw Error("R3F: the args prop must be an array!");
                            if (t.some((e,t)=>e !== a[t]))
                                return [!0];
                            let u = H(e, o, l, !0);
                            return u.changes.length ? [!1, u] : null
                        }
                    },
                    commitUpdate(e, [t,i], o, s, l, u) {
                        t ? function(e, t, i, o) {
                            var s;
                            let l = null == (s = e.__r3f) ? void 0 : s.parent;
                            if (!l)
                                return;
                            let u = n(t, i, e.__r3f.root);
                            if (e.children) {
                                for (let t of e.children)
                                    t.__r3f && r(u, t);
                                e.children = e.children.filter(e=>!e.__r3f)
                            }
                            e.__r3f.objects.forEach(e=>r(u, e)),
                            e.__r3f.objects = [],
                            e.__r3f.autoRemovedBeforeAppend || a(l, e),
                            u.parent && (u.__r3f.autoRemovedBeforeAppend = !0),
                            r(l, u),
                            u.raycast && u.__r3f.eventCount && I(u).getState().internal.interaction.push(u),
                            [o, o.alternate].forEach(e=>{
                                null !== e && (e.stateNode = u,
                                e.ref && ("function" == typeof e.ref ? e.ref(u) : e.ref.current = u))
                            }
                            )
                        }(e, o, l, u) : G(e, i)
                    },
                    commitMount(e, t, n, r) {
                        var i;
                        let o = null != (i = e.__r3f) ? i : {};
                        e.raycast && o.handlers && o.eventCount && I(e).getState().internal.interaction.push(e)
                    },
                    getPublicInstance: e=>e,
                    prepareForCommit: ()=>null,
                    preparePortalMount: e=>V(e.getState().scene),
                    resetAfterCommit: ()=>{}
                    ,
                    shouldSetTextContent: ()=>!1,
                    clearContainer: ()=>!1,
                    hideInstance(e) {
                        var t;
                        let {attach: n, parent: r} = null != (t = e.__r3f) ? t : {};
                        n && r && $(r, e, n),
                        e.isObject3D && (e.visible = !1),
                        Q(e)
                    },
                    unhideInstance(e, t) {
                        var n;
                        let {attach: r, parent: i} = null != (n = e.__r3f) ? n : {};
                        r && i && W(i, e, r),
                        (e.isObject3D && null == t.visible || t.visible) && (e.visible = !0),
                        Q(e)
                    },
                    createTextInstance: s,
                    hideTextInstance: s,
                    unhideTextInstance: s,
                    getCurrentEventPriority: ()=>t ? t() : c.DefaultEventPriority,
                    beforeActiveInstanceBlur: ()=>{}
                    ,
                    afterActiveInstanceBlur: ()=>{}
                    ,
                    detachDeletedInstance: ()=>{}
                    ,
                    now: "undefined" != typeof performance && F.fun(performance.now) ? performance.now : F.fun(Date.now) ? Date.now : ()=>0,
                    scheduleTimeout: F.fun(setTimeout) ? setTimeout : void 0,
                    cancelTimeout: F.fun(clearTimeout) ? clearTimeout : void 0
                }),
                applyProps: G
            }
        }(0, function() {
            var e;
            let t = "undefined" != typeof self && self || "undefined" != typeof window && window;
            if (!t)
                return c.DefaultEventPriority;
            switch (null == (e = t.event) ? void 0 : e.type) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
                return c.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
                return c.ContinuousEventPriority;
            default:
                return c.DefaultEventPriority
            }
        })
          , eb = {
            objects: "shallow",
            strict: !1
        }
          , ex = (e,t)=>{
            let n = "function" == typeof e ? e(t) : e;
            return J(n) ? n : new l.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: t,
                antialias: !0,
                alpha: !0,
                ...e
            })
        }
        ;
        function ew(e) {
            let t, n;
            let r = ep.get(e)
              , i = null == r ? void 0 : r.fiber
              , o = null == r ? void 0 : r.store;
            r && console.warn("R3F.createRoot should only be called once!");
            let a = "function" == typeof reportError ? reportError : console.error
              , s = o || et(em, ev)
              , f = i || eg.createContainer(s, c.ConcurrentRoot, null, !1, null, "", a, null);
            r || ep.set(e, {
                fiber: f,
                store: s
            });
            let d = !1;
            return {
                configure(r={}) {
                    var i, o;
                    let {gl: a, size: u, scene: c, events: f, onCreated: h, shadows: p=!1, linear: m=!1, flat: v=!1, legacy: g=!1, orthographic: y=!1, frameloop: b="always", dpr: x=[1, 2], performance: w, raycaster: S, camera: P, onPointerMissed: k} = r
                      , E = s.getState()
                      , T = E.gl;
                    E.gl || E.set({
                        gl: T = ex(a, e)
                    });
                    let _ = E.raycaster;
                    _ || E.set({
                        raycaster: _ = new l.Raycaster
                    });
                    let {params: M, ...j} = S || {};
                    if (F.equ(j, _, eb) || ey(_, {
                        ...j
                    }),
                    F.equ(M, _.params, eb) || ey(_, {
                        params: {
                            ..._.params,
                            ...M
                        }
                    }),
                    !E.camera || E.camera === n && !F.equ(n, P, eb)) {
                        n = P;
                        let e = P instanceof l.Camera
                          , t = e ? P : y ? new l.OrthographicCamera(0,0,0,0,.1,1e3) : new l.PerspectiveCamera(75,0,.1,1e3);
                        e || (t.position.z = 5,
                        P && ey(t, P),
                        E.camera || null != P && P.rotation || t.lookAt(0, 0, 0)),
                        E.set({
                            camera: t
                        }),
                        _.camera = t
                    }
                    if (!E.scene) {
                        let e;
                        c instanceof l.Scene ? e = c : (e = new l.Scene,
                        c && ey(e, c)),
                        E.set({
                            scene: V(e)
                        })
                    }
                    if (!E.xr) {
                        let e = (e,t)=>{
                            let n = s.getState();
                            "never" !== n.frameloop && ev(e, !0, n, t)
                        }
                          , t = ()=>{
                            let t = s.getState();
                            t.gl.xr.enabled = t.gl.xr.isPresenting,
                            t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null),
                            t.gl.xr.isPresenting || em(t)
                        }
                          , n = {
                            connect() {
                                let e = s.getState().gl;
                                e.xr.addEventListener("sessionstart", t),
                                e.xr.addEventListener("sessionend", t)
                            },
                            disconnect() {
                                let e = s.getState().gl;
                                e.xr.removeEventListener("sessionstart", t),
                                e.xr.removeEventListener("sessionend", t)
                            }
                        };
                        "function" == typeof (null == (i = T.xr) ? void 0 : i.addEventListener) && n.connect(),
                        E.set({
                            xr: n
                        })
                    }
                    if (T.shadowMap) {
                        let e = T.shadowMap.enabled
                          , t = T.shadowMap.type;
                        if (T.shadowMap.enabled = !!p,
                        F.boo(p))
                            T.shadowMap.type = l.PCFSoftShadowMap;
                        else if (F.str(p)) {
                            let e = {
                                basic: l.BasicShadowMap,
                                percentage: l.PCFShadowMap,
                                soft: l.PCFSoftShadowMap,
                                variance: l.VSMShadowMap
                            };
                            T.shadowMap.type = null != (o = e[p]) ? o : l.PCFSoftShadowMap
                        } else
                            F.obj(p) && Object.assign(T.shadowMap, p);
                        (e !== T.shadowMap.enabled || t !== T.shadowMap.type) && (T.shadowMap.needsUpdate = !0)
                    }
                    let O = C();
                    O && ("enabled"in O ? O.enabled = !g : "legacyMode"in O && (O.legacyMode = g)),
                    d || ey(T, {
                        outputEncoding: m ? 3e3 : 3001,
                        toneMapping: v ? l.NoToneMapping : l.ACESFilmicToneMapping
                    }),
                    E.legacy !== g && E.set(()=>({
                        legacy: g
                    })),
                    E.linear !== m && E.set(()=>({
                        linear: m
                    })),
                    E.flat !== v && E.set(()=>({
                        flat: v
                    })),
                    !a || F.fun(a) || J(a) || F.equ(a, T, eb) || ey(T, a),
                    f && !E.events.handlers && E.set({
                        events: f(s)
                    });
                    let A = function(e, t) {
                        let n = "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement;
                        if (t) {
                            let {width: e, height: r, top: i, left: o, updateStyle: a=n} = t;
                            return {
                                width: e,
                                height: r,
                                top: i,
                                left: o,
                                updateStyle: a
                            }
                        }
                        if ("undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                            let {width: t, height: r, top: i, left: o} = e.parentElement.getBoundingClientRect();
                            return {
                                width: t,
                                height: r,
                                top: i,
                                left: o,
                                updateStyle: n
                            }
                        }
                        return "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                            width: e.width,
                            height: e.height,
                            top: 0,
                            left: 0,
                            updateStyle: n
                        } : {
                            width: 0,
                            height: 0,
                            top: 0,
                            left: 0
                        }
                    }(e, u);
                    return F.equ(A, E.size, eb) || E.setSize(A.width, A.height, A.updateStyle, A.top, A.left),
                    x && E.viewport.dpr !== D(x) && E.setDpr(x),
                    E.frameloop !== b && E.setFrameloop(b),
                    E.onPointerMissed || E.set({
                        onPointerMissed: k
                    }),
                    w && !F.equ(w, E.performance, eb) && E.set(e=>({
                        performance: {
                            ...e.performance,
                            ...w
                        }
                    })),
                    t = h,
                    d = !0,
                    this
                },
                render(n) {
                    return d || this.configure(),
                    eg.updateContainer(u.createElement(eS, {
                        store: s,
                        children: n,
                        onCreated: t,
                        rootElement: e
                    }), f, null, ()=>void 0),
                    s
                },
                unmount() {
                    eP(e)
                }
            }
        }
        function eS({store: e, children: t, onCreated: n, rootElement: r}) {
            return M(()=>{
                let t = e.getState();
                t.set(e=>({
                    internal: {
                        ...e.internal,
                        active: !0
                    }
                })),
                n && n(t),
                e.getState().events.connected || null == t.events.connect || t.events.connect(r)
            }
            , []),
            u.createElement(ee.Provider, {
                value: e
            }, t)
        }
        function eP(e, t) {
            let n = ep.get(e)
              , r = null == n ? void 0 : n.fiber;
            if (r) {
                let i = null == n ? void 0 : n.store.getState();
                i && (i.internal.active = !1),
                eg.updateContainer(null, r, null, ()=>{
                    i && setTimeout(()=>{
                        try {
                            var n, r, o, a;
                            null == i.events.disconnect || i.events.disconnect(),
                            null == (n = i.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(),
                            null == (o = i.gl) || null == o.forceContextLoss || o.forceContextLoss(),
                            null != (a = i.gl) && a.xr && i.xr.disconnect(),
                            function(e) {
                                for (let t in e.dispose && "Scene" !== e.type && e.dispose(),
                                e)
                                    null == t.dispose || t.dispose(),
                                    delete e[t]
                            }(i),
                            ep.delete(e),
                            t && t(e)
                        } catch (e) {}
                    }
                    , 500)
                }
                )
            }
        }
        eg.injectIntoDevTools({
            bundleType: 0,
            rendererPackageName: "@react-three/fiber",
            version: u.version
        }),
        u.unstable_act
    },
    29631: function(e, t, n) {
        "use strict";
        n.d(t, {
            Xz: function() {
                return M
            }
        });
        var r, i, o = n(86602), a = n(14749), s = n(2265), l = n(66376), u = n(83802), c = n.n(u);
        let f = ["x", "y", "top", "bottom", "left", "right", "width", "height"]
          , d = (e,t)=>f.every(n=>e[n] === t[n]);
        var h = Object.defineProperty
          , p = Object.defineProperties
          , m = Object.getOwnPropertyDescriptors
          , v = Object.getOwnPropertySymbols
          , g = Object.prototype.hasOwnProperty
          , y = Object.prototype.propertyIsEnumerable
          , b = (e,t,n)=>t in e ? h(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , x = (e,t)=>{
            for (var n in t || (t = {}))
                g.call(t, n) && b(e, n, t[n]);
            if (v)
                for (var n of v(t))
                    y.call(t, n) && b(e, n, t[n]);
            return e
        }
          , w = (e,t)=>p(e, m(t));
        function S(e) {
            try {
                return Object.defineProperties(e, {
                    _currentRenderer: {
                        get: ()=>null,
                        set() {}
                    },
                    _currentRenderer2: {
                        get: ()=>null,
                        set() {}
                    }
                })
            } catch (t) {
                return e
            }
        }
        "undefined" != typeof window && ((null == (r = window.document) ? void 0 : r.createElement) || (null == (i = window.navigator) ? void 0 : i.product) === "ReactNative") ? s.useLayoutEffect : s.useEffect;
        let P = console.error;
        console.error = function() {
            let e = [...arguments].join("");
            if ((null == e ? void 0 : e.startsWith("Warning:")) && e.includes("useContext")) {
                console.error = P;
                return
            }
            return P.apply(this, arguments)
        }
        ;
        let k = S(s.createContext(null));
        class E extends s.Component {
            render() {
                return s.createElement(k.Provider, {
                    value: this._reactInternals
                }, this.props.children)
            }
        }
        n(87777),
        n(44812),
        n(99514);
        let C = {
            onClick: ["click", !1],
            onContextMenu: ["contextmenu", !1],
            onDoubleClick: ["dblclick", !1],
            onWheel: ["wheel", !0],
            onPointerDown: ["pointerdown", !0],
            onPointerUp: ["pointerup", !0],
            onPointerLeave: ["pointerleave", !0],
            onPointerMove: ["pointermove", !0],
            onPointerCancel: ["pointercancel", !0],
            onLostPointerCapture: ["lostpointercapture", !0]
        };
        function T(e) {
            let {handlePointer: t} = (0,
            o.c)(e);
            return {
                priority: 1,
                enabled: !0,
                compute(e, t, n) {
                    t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(e.offsetY / t.size.height * 2) + 1),
                    t.raycaster.setFromCamera(t.pointer, t.camera)
                },
                connected: void 0,
                handlers: Object.keys(C).reduce((e,n)=>({
                    ...e,
                    [n]: t(n)
                }), {}),
                update: ()=>{
                    var t;
                    let {events: n, internal: r} = e.getState();
                    null != (t = r.lastEvent) && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current)
                }
                ,
                connect: t=>{
                    var n;
                    let {set: r, events: i} = e.getState();
                    null == i.disconnect || i.disconnect(),
                    r(e=>({
                        events: {
                            ...e.events,
                            connected: t
                        }
                    })),
                    Object.entries(null != (n = i.handlers) ? n : []).forEach(([e,n])=>{
                        let[r,i] = C[e];
                        t.addEventListener(r, n, {
                            passive: i
                        })
                    }
                    )
                }
                ,
                disconnect: ()=>{
                    let {set: t, events: n} = e.getState();
                    if (n.connected) {
                        var r;
                        Object.entries(null != (r = n.handlers) ? r : []).forEach(([e,t])=>{
                            if (n && n.connected instanceof HTMLElement) {
                                let[r] = C[e];
                                n.connected.removeEventListener(r, t)
                            }
                        }
                        ),
                        t(e=>({
                            events: {
                                ...e.events,
                                connected: void 0
                            }
                        }))
                    }
                }
            }
        }
        let _ = s.forwardRef(function({children: e, fallback: t, resize: n, style: r, gl: i, events: u=T, eventSource: f, eventPrefix: h, shadows: p, linear: m, flat: v, legacy: g, orthographic: y, frameloop: b, dpr: P, performance: C, raycaster: _, camera: M, scene: j, onPointerMissed: O, onCreated: A, ...R}, z) {
            s.useMemo(()=>(0,
            o.e)(l), []);
            let L = function() {
                let e = function() {
                    let e = function() {
                        let e = s.useContext(k);
                        if (null === e)
                            throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                        let t = s.useId();
                        return s.useMemo(()=>{
                            for (let n of [e, null == e ? void 0 : e.alternate]) {
                                if (!n)
                                    continue;
                                let e = function e(t, n, r) {
                                    if (!t)
                                        return;
                                    if (!0 === r(t))
                                        return t;
                                    let i = n ? t.return : t.child;
                                    for (; i; ) {
                                        let t = e(i, n, r);
                                        if (t)
                                            return t;
                                        i = n ? null : i.sibling
                                    }
                                }(n, !1, e=>{
                                    let n = e.memoizedState;
                                    for (; n; ) {
                                        if (n.memoizedState === t)
                                            return !0;
                                        n = n.next
                                    }
                                }
                                );
                                if (e)
                                    return e
                            }
                        }
                        , [e, t])
                    }()
                      , [t] = s.useState(()=>new Map);
                    t.clear();
                    let n = e;
                    for (; n; ) {
                        if (n.type && "object" == typeof n.type) {
                            let e = void 0 === n.type._context && n.type.Provider === n.type ? n.type : n.type._context;
                            e && e !== k && !t.has(e) && t.set(e, s.useContext(S(e)))
                        }
                        n = n.return
                    }
                    return t
                }();
                return s.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>r=>s.createElement(t, null, s.createElement(n.Provider, w(x({}, r), {
                    value: e.get(n)
                }))), e=>s.createElement(E, x({}, e))), [e])
            }()
              , [D,N] = function(e) {
                var t;
                let {debounce: n, scroll: r, polyfill: i, offsetSize: o} = void 0 === e ? {
                    debounce: 0,
                    scroll: !1,
                    offsetSize: !1
                } : e
                  , a = i || ("undefined" == typeof window ? class {
                }
                : window.ResizeObserver);
                if (!a)
                    throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                let[l,u] = (0,
                s.useState)({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    bottom: 0,
                    right: 0,
                    x: 0,
                    y: 0
                })
                  , f = (0,
                s.useRef)({
                    element: null,
                    scrollContainers: null,
                    resizeObserver: null,
                    lastBounds: l
                })
                  , h = n ? "number" == typeof n ? n : n.scroll : null
                  , p = n ? "number" == typeof n ? n : n.resize : null
                  , m = (0,
                s.useRef)(!1);
                (0,
                s.useEffect)(()=>(m.current = !0,
                ()=>void (m.current = !1)));
                let[v,g,y] = (0,
                s.useMemo)(()=>{
                    let e = ()=>{
                        if (!f.current.element)
                            return;
                        let {left: e, top: t, width: n, height: r, bottom: i, right: a, x: s, y: l} = f.current.element.getBoundingClientRect()
                          , c = {
                            left: e,
                            top: t,
                            width: n,
                            height: r,
                            bottom: i,
                            right: a,
                            x: s,
                            y: l
                        };
                        f.current.element instanceof HTMLElement && o && (c.height = f.current.element.offsetHeight,
                        c.width = f.current.element.offsetWidth),
                        Object.freeze(c),
                        m.current && !d(f.current.lastBounds, c) && u(f.current.lastBounds = c)
                    }
                    ;
                    return [e, p ? c()(e, p) : e, h ? c()(e, h) : e]
                }
                , [u, o, h, p]);
                function b() {
                    f.current.scrollContainers && (f.current.scrollContainers.forEach(e=>e.removeEventListener("scroll", y, !0)),
                    f.current.scrollContainers = null),
                    f.current.resizeObserver && (f.current.resizeObserver.disconnect(),
                    f.current.resizeObserver = null)
                }
                function x() {
                    f.current.element && (f.current.resizeObserver = new a(y),
                    f.current.resizeObserver.observe(f.current.element),
                    r && f.current.scrollContainers && f.current.scrollContainers.forEach(e=>e.addEventListener("scroll", y, {
                        capture: !0,
                        passive: !0
                    })))
                }
                return t = !!r,
                (0,
                s.useEffect)(()=>{
                    if (t)
                        return window.addEventListener("scroll", y, {
                            capture: !0,
                            passive: !0
                        }),
                        ()=>void window.removeEventListener("scroll", y, !0)
                }
                , [y, t]),
                (0,
                s.useEffect)(()=>(window.addEventListener("resize", g),
                ()=>void window.removeEventListener("resize", g)), [g]),
                (0,
                s.useEffect)(()=>{
                    b(),
                    x()
                }
                , [r, y, g]),
                (0,
                s.useEffect)(()=>b, []),
                [e=>{
                    e && e !== f.current.element && (b(),
                    f.current.element = e,
                    f.current.scrollContainers = function e(t) {
                        let n = [];
                        if (!t || t === document.body)
                            return n;
                        let {overflow: r, overflowX: i, overflowY: o} = window.getComputedStyle(t);
                        return [r, i, o].some(e=>"auto" === e || "scroll" === e) && n.push(t),
                        [...n, ...e(t.parentElement)]
                    }(e),
                    x())
                }
                , l, v]
            }({
                scroll: !0,
                debounce: {
                    scroll: 50,
                    resize: 0
                },
                ...n
            })
              , I = s.useRef(null)
              , F = s.useRef(null);
            s.useImperativeHandle(z, ()=>I.current);
            let V = (0,
            o.u)(O)
              , [B,U] = s.useState(!1)
              , [W,$] = s.useState(!1);
            if (B)
                throw B;
            if (W)
                throw W;
            let H = s.useRef(null);
            (0,
            o.a)(()=>{
                let t = I.current;
                N.width > 0 && N.height > 0 && t && (H.current || (H.current = (0,
                o.b)(t)),
                H.current.configure({
                    gl: i,
                    events: u,
                    shadows: p,
                    linear: m,
                    flat: v,
                    legacy: g,
                    orthographic: y,
                    frameloop: b,
                    dpr: P,
                    performance: C,
                    raycaster: _,
                    camera: M,
                    scene: j,
                    size: N,
                    onPointerMissed: (...e)=>null == V.current ? void 0 : V.current(...e),
                    onCreated: e=>{
                        null == e.events.connect || e.events.connect(f ? (0,
                        o.i)(f) ? f.current : f : F.current),
                        h && e.setEvents({
                            compute: (e,t)=>{
                                let n = e[h + "X"]
                                  , r = e[h + "Y"];
                                t.pointer.set(n / t.size.width * 2 - 1, -(r / t.size.height * 2) + 1),
                                t.raycaster.setFromCamera(t.pointer, t.camera)
                            }
                        }),
                        null == A || A(e)
                    }
                }),
                H.current.render(s.createElement(L, null, s.createElement(o.E, {
                    set: $
                }, s.createElement(s.Suspense, {
                    fallback: s.createElement(o.B, {
                        set: U
                    })
                }, e)))))
            }
            ),
            s.useEffect(()=>{
                let e = I.current;
                if (e)
                    return ()=>(0,
                    o.d)(e)
            }
            , []);
            let q = f ? "none" : "auto";
            return s.createElement("div", (0,
            a.Z)({
                ref: F,
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: q,
                    ...r
                }
            }, R), s.createElement("div", {
                ref: D,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, s.createElement("canvas", {
                ref: I,
                style: {
                    display: "block"
                }
            }, t)))
        })
          , M = s.forwardRef(function(e, t) {
            return s.createElement(E, null, s.createElement(_, (0,
            a.Z)({}, e, {
                ref: t
            })))
        })
    },
    69394: function(e, t, n) {
        e.exports = {
            default: n(62183),
            __esModule: !0
        }
    },
    32420: function(e, t, n) {
        e.exports = {
            default: n(45523),
            __esModule: !0
        }
    },
    50008: function(e, t, n) {
        e.exports = {
            default: n(87200),
            __esModule: !0
        }
    },
    98359: function(e, t, n) {
        e.exports = {
            default: n(10947),
            __esModule: !0
        }
    },
    56015: function(e, t, n) {
        e.exports = {
            default: n(65958),
            __esModule: !0
        }
    },
    53652: function(e, t, n) {
        e.exports = {
            default: n(543),
            __esModule: !0
        }
    },
    10828: function(e, t, n) {
        e.exports = {
            default: n(57098),
            __esModule: !0
        }
    },
    48472: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
    },
    93331: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, i = (r = n(50008)) && r.__esModule ? r : {
            default: r
        };
        t.default = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    (0,
                    i.default)(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
    },
    61389: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, i = (r = n(69394)) && r.__esModule ? r : {
            default: r
        };
        t.default = i.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    },
    98840: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = a(n(56015))
          , i = a(n(32420))
          , o = a(n(68206));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
                o.default)(t)));
            e.prototype = (0,
            i.default)(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (r.default ? (0,
            r.default)(e, t) : e.__proto__ = t)
        }
    },
    90364: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, i = (r = n(68206)) && r.__esModule ? r : {
            default: r
        };
        t.default = function(e, t) {
            if (!e)
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ((void 0 === t ? "undefined" : (0,
            i.default)(t)) === "object" || "function" == typeof t) ? t : e
        }
    },
    68206: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = a(n(10828))
          , i = a(n(53652))
          , o = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
        }
        ;
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(e) {
            return void 0 === e ? "undefined" : o(e)
        }
        : function(e) {
            return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
        }
    },
    62183: function(e, t, n) {
        n(30167),
        e.exports = n(7540).Object.assign
    },
    45523: function(e, t, n) {
        n(90380);
        var r = n(7540).Object;
        e.exports = function(e, t) {
            return r.create(e, t)
        }
    },
    87200: function(e, t, n) {
        n(68325);
        var r = n(7540).Object;
        e.exports = function(e, t, n) {
            return r.defineProperty(e, t, n)
        }
    },
    10947: function(e, t, n) {
        n(2319),
        e.exports = n(7540).Object.getPrototypeOf
    },
    65958: function(e, t, n) {
        n(28884),
        e.exports = n(7540).Object.setPrototypeOf
    },
    543: function(e, t, n) {
        n(89495),
        n(22104),
        n(23410),
        n(57102),
        e.exports = n(7540).Symbol
    },
    57098: function(e, t, n) {
        n(38734),
        n(85228),
        e.exports = n(77861).f("iterator")
    },
    18131: function(e) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    },
    55151: function(e) {
        e.exports = function() {}
    },
    81557: function(e, t, n) {
        var r = n(68645);
        e.exports = function(e) {
            if (!r(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    },
    47666: function(e, t, n) {
        var r = n(70459)
          , i = n(73301)
          , o = n(60720);
        e.exports = function(e) {
            return function(t, n, a) {
                var s, l = r(t), u = i(l.length), c = o(a, u);
                if (e && n != n) {
                    for (; u > c; )
                        if ((s = l[c++]) != s)
                            return !0
                } else
                    for (; u > c; c++)
                        if ((e || c in l) && l[c] === n)
                            return e || c || 0;
                return !e && -1
            }
        }
    },
    87951: function(e) {
        var t = {}.toString;
        e.exports = function(e) {
            return t.call(e).slice(8, -1)
        }
    },
    7540: function(e) {
        var t = e.exports = {
            version: "2.6.12"
        };
        "number" == typeof __e && (__e = t)
    },
    66320: function(e, t, n) {
        var r = n(18131);
        e.exports = function(e, t, n) {
            if (r(e),
            void 0 === t)
                return e;
            switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    64774: function(e) {
        e.exports = function(e) {
            if (void 0 == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    39738: function(e, t, n) {
        e.exports = !n(30063)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    13047: function(e, t, n) {
        var r = n(68645)
          , i = n(50813).document
          , o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    31355: function(e) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    43597: function(e, t, n) {
        var r = n(68897)
          , i = n(23779)
          , o = n(66275);
        e.exports = function(e) {
            var t = r(e)
              , n = i.f;
            if (n)
                for (var a, s = n(e), l = o.f, u = 0; s.length > u; )
                    l.call(e, a = s[u++]) && t.push(a);
            return t
        }
    },
    14516: function(e, t, n) {
        var r = n(50813)
          , i = n(7540)
          , o = n(66320)
          , a = n(76152)
          , s = n(67956)
          , l = "prototype"
          , u = function(e, t, n) {
            var c, f, d, h = e & u.F, p = e & u.G, m = e & u.S, v = e & u.P, g = e & u.B, y = e & u.W, b = p ? i : i[t] || (i[t] = {}), x = b[l], w = p ? r : m ? r[t] : (r[t] || {})[l];
            for (c in p && (n = t),
            n)
                !((f = !h && w && void 0 !== w[c]) && s(b, c)) && (d = f ? w[c] : n[c],
                b[c] = p && "function" != typeof w[c] ? n[c] : g && f ? o(d, r) : y && w[c] == d ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t,n)
                            }
                            return new e(t,n,r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t[l] = e[l],
                    t
                }(d) : v && "function" == typeof d ? o(Function.call, d) : d,
                v && ((b.virtual || (b.virtual = {}))[c] = d,
                e & u.R && x && !x[c] && a(x, c, d)))
        };
        u.F = 1,
        u.G = 2,
        u.S = 4,
        u.P = 8,
        u.B = 16,
        u.W = 32,
        u.U = 64,
        u.R = 128,
        e.exports = u
    },
    30063: function(e) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    50813: function(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    },
    67956: function(e) {
        var t = {}.hasOwnProperty;
        e.exports = function(e, n) {
            return t.call(e, n)
        }
    },
    76152: function(e, t, n) {
        var r = n(51046)
          , i = n(27997);
        e.exports = n(39738) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    },
    26547: function(e, t, n) {
        var r = n(50813).document;
        e.exports = r && r.documentElement
    },
    98767: function(e, t, n) {
        e.exports = !n(39738) && !n(30063)(function() {
            return 7 != Object.defineProperty(n(13047)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    47034: function(e, t, n) {
        var r = n(87951);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    1317: function(e, t, n) {
        var r = n(87951);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    68645: function(e) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    75745: function(e, t, n) {
        "use strict";
        var r = n(68933)
          , i = n(27997)
          , o = n(46815)
          , a = {};
        n(76152)(a, n(91410)("iterator"), function() {
            return this
        }),
        e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }),
            o(e, t + " Iterator")
        }
    },
    82478: function(e, t, n) {
        "use strict";
        var r = n(96282)
          , i = n(14516)
          , o = n(10603)
          , a = n(76152)
          , s = n(61594)
          , l = n(75745)
          , u = n(46815)
          , c = n(16933)
          , f = n(91410)("iterator")
          , d = !([].keys && "next"in [].keys())
          , h = "values"
          , p = function() {
            return this
        };
        e.exports = function(e, t, n, m, v, g, y) {
            l(n, t, m);
            var b, x, w, S = function(e) {
                return !d && e in C ? C[e] : function() {
                    return new n(this,e)
                }
            }, P = t + " Iterator", k = v == h, E = !1, C = e.prototype, T = C[f] || C["@@iterator"] || v && C[v], _ = T || S(v), M = v ? k ? S("entries") : _ : void 0, j = "Array" == t && C.entries || T;
            if (j && (w = c(j.call(new e))) !== Object.prototype && w.next && (u(w, P, !0),
            r || "function" == typeof w[f] || a(w, f, p)),
            k && T && T.name !== h && (E = !0,
            _ = function() {
                return T.call(this)
            }
            ),
            (!r || y) && (d || E || !C[f]) && a(C, f, _),
            s[t] = _,
            s[P] = p,
            v) {
                if (b = {
                    values: k ? _ : S(h),
                    keys: g ? _ : S("keys"),
                    entries: M
                },
                y)
                    for (x in b)
                        x in C || o(C, x, b[x]);
                else
                    i(i.P + i.F * (d || E), t, b)
            }
            return b
        }
    },
    80707: function(e) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    61594: function(e) {
        e.exports = {}
    },
    96282: function(e) {
        e.exports = !0
    },
    74247: function(e, t, n) {
        var r = n(83450)("meta")
          , i = n(68645)
          , o = n(67956)
          , a = n(51046).f
          , s = 0
          , l = Object.isExtensible || function() {
            return !0
        }
          , u = !n(30063)(function() {
            return l(Object.preventExtensions({}))
        })
          , c = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        }
          , f = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!i(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, r)) {
                    if (!l(e))
                        return "F";
                    if (!t)
                        return "E";
                    c(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!o(e, r)) {
                    if (!l(e))
                        return !0;
                    if (!t)
                        return !1;
                    c(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return u && f.NEED && l(e) && !o(e, r) && c(e),
                e
            }
        }
    },
    88296: function(e, t, n) {
        "use strict";
        var r = n(39738)
          , i = n(68897)
          , o = n(23779)
          , a = n(66275)
          , s = n(33498)
          , l = n(47034)
          , u = Object.assign;
        e.exports = !u || n(30063)(function() {
            var e = {}
              , t = {}
              , n = Symbol()
              , r = "abcdefghijklmnopqrst";
            return e[n] = 7,
            r.split("").forEach(function(e) {
                t[e] = e
            }),
            7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
        }) ? function(e, t) {
            for (var n = s(e), u = arguments.length, c = 1, f = o.f, d = a.f; u > c; )
                for (var h, p = l(arguments[c++]), m = f ? i(p).concat(f(p)) : i(p), v = m.length, g = 0; v > g; )
                    h = m[g++],
                    (!r || d.call(p, h)) && (n[h] = p[h]);
            return n
        }
        : u
    },
    68933: function(e, t, n) {
        var r = n(81557)
          , i = n(80473)
          , o = n(31355)
          , a = n(86996)("IE_PROTO")
          , s = function() {}
          , l = "prototype"
          , u = function() {
            var e, t = n(13047)("iframe"), r = o.length;
            for (t.style.display = "none",
            n(26547).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            u = e.F; r--; )
                delete u[l][o[r]];
            return u()
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s[l] = r(e),
            n = new s,
            s[l] = null,
            n[a] = e) : n = u(),
            void 0 === t ? n : i(n, t)
        }
    },
    51046: function(e, t, n) {
        var r = n(81557)
          , i = n(98767)
          , o = n(74208)
          , a = Object.defineProperty;
        t.f = n(39738) ? Object.defineProperty : function(e, t, n) {
            if (r(e),
            t = o(t, !0),
            r(n),
            i)
                try {
                    return a(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    },
    80473: function(e, t, n) {
        var r = n(51046)
          , i = n(81557)
          , o = n(68897);
        e.exports = n(39738) ? Object.defineProperties : function(e, t) {
            i(e);
            for (var n, a = o(t), s = a.length, l = 0; s > l; )
                r.f(e, n = a[l++], t[n]);
            return e
        }
    },
    25239: function(e, t, n) {
        var r = n(66275)
          , i = n(27997)
          , o = n(70459)
          , a = n(74208)
          , s = n(67956)
          , l = n(98767)
          , u = Object.getOwnPropertyDescriptor;
        t.f = n(39738) ? u : function(e, t) {
            if (e = o(e),
            t = a(t, !0),
            l)
                try {
                    return u(e, t)
                } catch (e) {}
            if (s(e, t))
                return i(!r.f.call(e, t), e[t])
        }
    },
    77654: function(e, t, n) {
        var r = n(70459)
          , i = n(96450).f
          , o = {}.toString
          , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          , s = function(e) {
            try {
                return i(e)
            } catch (e) {
                return a.slice()
            }
        };
        e.exports.f = function(e) {
            return a && "[object Window]" == o.call(e) ? s(e) : i(r(e))
        }
    },
    96450: function(e, t, n) {
        var r = n(5446)
          , i = n(31355).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, i)
        }
    },
    23779: function(e, t) {
        t.f = Object.getOwnPropertySymbols
    },
    16933: function(e, t, n) {
        var r = n(67956)
          , i = n(33498)
          , o = n(86996)("IE_PROTO")
          , a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return r(e = i(e), o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    5446: function(e, t, n) {
        var r = n(67956)
          , i = n(70459)
          , o = n(47666)(!1)
          , a = n(86996)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = i(e), l = 0, u = [];
            for (n in s)
                n != a && r(s, n) && u.push(n);
            for (; t.length > l; )
                r(s, n = t[l++]) && (~o(u, n) || u.push(n));
            return u
        }
    },
    68897: function(e, t, n) {
        var r = n(5446)
          , i = n(31355);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    66275: function(e, t) {
        t.f = ({}).propertyIsEnumerable
    },
    12704: function(e, t, n) {
        var r = n(14516)
          , i = n(7540)
          , o = n(30063);
        e.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e]
              , a = {};
            a[e] = t(n),
            r(r.S + r.F * o(function() {
                n(1)
            }), "Object", a)
        }
    },
    27997: function(e) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    10603: function(e, t, n) {
        e.exports = n(76152)
    },
    50654: function(e, t, n) {
        var r = n(68645)
          , i = n(81557)
          , o = function(e, t) {
            if (i(e),
            !r(t) && null !== t)
                throw TypeError(t + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, r) {
                try {
                    (r = n(66320)(Function.call, n(25239).f(Object.prototype, "__proto__").set, 2))(e, []),
                    t = !(e instanceof Array)
                } catch (e) {
                    t = !0
                }
                return function(e, n) {
                    return o(e, n),
                    t ? e.__proto__ = n : r(e, n),
                    e
                }
            }({}, !1) : void 0),
            check: o
        }
    },
    46815: function(e, t, n) {
        var r = n(51046).f
          , i = n(67956)
          , o = n(91410)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    86996: function(e, t, n) {
        var r = n(41433)("keys")
          , i = n(83450);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    41433: function(e, t, n) {
        var r = n(7540)
          , i = n(50813)
          , o = "__core-js_shared__"
          , a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: r.version,
            mode: n(96282) ? "pure" : "global",
            copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    4594: function(e, t, n) {
        var r = n(61887)
          , i = n(64774);
        e.exports = function(e) {
            return function(t, n) {
                var o, a, s = String(i(t)), l = r(n), u = s.length;
                return l < 0 || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536
            }
        }
    },
    60720: function(e, t, n) {
        var r = n(61887)
          , i = Math.max
          , o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    61887: function(e) {
        var t = Math.ceil
          , n = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
        }
    },
    70459: function(e, t, n) {
        var r = n(47034)
          , i = n(64774);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    73301: function(e, t, n) {
        var r = n(61887)
          , i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    },
    33498: function(e, t, n) {
        var r = n(64774);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    74208: function(e, t, n) {
        var r = n(68645);
        e.exports = function(e, t) {
            var n, i;
            if (!r(e))
                return e;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e)) || "function" == typeof (n = e.valueOf) && !r(i = n.call(e)) || !t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    83450: function(e) {
        var t = 0
          , n = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
        }
    },
    62660: function(e, t, n) {
        var r = n(50813)
          , i = n(7540)
          , o = n(96282)
          , a = n(77861)
          , s = n(51046).f;
        e.exports = function(e) {
            var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            })
        }
    },
    77861: function(e, t, n) {
        t.f = n(91410)
    },
    91410: function(e, t, n) {
        var r = n(41433)("wks")
          , i = n(83450)
          , o = n(50813).Symbol
          , a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }
        ).store = r
    },
    87975: function(e, t, n) {
        "use strict";
        var r = n(55151)
          , i = n(80707)
          , o = n(61594)
          , a = n(70459);
        e.exports = n(82478)(Array, "Array", function(e, t) {
            this._t = a(e),
            this._i = 0,
            this._k = t
        }, function() {
            var e = this._t
              , t = this._k
              , n = this._i++;
            return !e || n >= e.length ? (this._t = void 0,
            i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
        }, "values"),
        o.Arguments = o.Array,
        r("keys"),
        r("values"),
        r("entries")
    },
    30167: function(e, t, n) {
        var r = n(14516);
        r(r.S + r.F, "Object", {
            assign: n(88296)
        })
    },
    90380: function(e, t, n) {
        var r = n(14516);
        r(r.S, "Object", {
            create: n(68933)
        })
    },
    68325: function(e, t, n) {
        var r = n(14516);
        r(r.S + !n(39738) * r.F, "Object", {
            defineProperty: n(51046).f
        })
    },
    2319: function(e, t, n) {
        var r = n(33498)
          , i = n(16933);
        n(12704)("getPrototypeOf", function() {
            return function(e) {
                return i(r(e))
            }
        })
    },
    28884: function(e, t, n) {
        var r = n(14516);
        r(r.S, "Object", {
            setPrototypeOf: n(50654).set
        })
    },
    22104: function() {},
    38734: function(e, t, n) {
        "use strict";
        var r = n(4594)(!0);
        n(82478)(String, "String", function(e) {
            this._t = String(e),
            this._i = 0
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n),
            this._i += e.length,
            {
                value: e,
                done: !1
            })
        })
    },
    89495: function(e, t, n) {
        "use strict";
        var r = n(50813)
          , i = n(67956)
          , o = n(39738)
          , a = n(14516)
          , s = n(10603)
          , l = n(74247).KEY
          , u = n(30063)
          , c = n(41433)
          , f = n(46815)
          , d = n(83450)
          , h = n(91410)
          , p = n(77861)
          , m = n(62660)
          , v = n(43597)
          , g = n(1317)
          , y = n(81557)
          , b = n(68645)
          , x = n(33498)
          , w = n(70459)
          , S = n(74208)
          , P = n(27997)
          , k = n(68933)
          , E = n(77654)
          , C = n(25239)
          , T = n(23779)
          , _ = n(51046)
          , M = n(68897)
          , j = C.f
          , O = _.f
          , A = E.f
          , R = r.Symbol
          , z = r.JSON
          , L = z && z.stringify
          , D = "prototype"
          , N = h("_hidden")
          , I = h("toPrimitive")
          , F = {}.propertyIsEnumerable
          , V = c("symbol-registry")
          , B = c("symbols")
          , U = c("op-symbols")
          , W = Object[D]
          , $ = "function" == typeof R && !!T.f
          , H = r.QObject
          , q = !H || !H[D] || !H[D].findChild
          , G = o && u(function() {
            return 7 != k(O({}, "a", {
                get: function() {
                    return O(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = j(W, t);
            r && delete W[t],
            O(e, t, n),
            r && e !== W && O(W, t, r)
        }
        : O
          , Q = function(e) {
            var t = B[e] = k(R[D]);
            return t._k = e,
            t
        }
          , X = $ && "symbol" == typeof R.iterator ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            return e instanceof R
        }
          , Y = function(e, t, n) {
            return (e === W && Y(U, t, n),
            y(e),
            t = S(t, !0),
            y(n),
            i(B, t)) ? (n.enumerable ? (i(e, N) && e[N][t] && (e[N][t] = !1),
            n = k(n, {
                enumerable: P(0, !1)
            })) : (i(e, N) || O(e, N, P(1, {})),
            e[N][t] = !0),
            G(e, t, n)) : O(e, t, n)
        }
          , K = function(e, t) {
            y(e);
            for (var n, r = v(t = w(t)), i = 0, o = r.length; o > i; )
                Y(e, n = r[i++], t[n]);
            return e
        }
          , Z = function(e) {
            var t = F.call(this, e = S(e, !0));
            return (!(this === W && i(B, e)) || !!i(U, e)) && (!(t || !i(this, e) || !i(B, e) || i(this, N) && this[N][e]) || t)
        }
          , J = function(e, t) {
            if (e = w(e),
            t = S(t, !0),
            !(e === W && i(B, t)) || i(U, t)) {
                var n = j(e, t);
                return n && i(B, t) && !(i(e, N) && e[N][t]) && (n.enumerable = !0),
                n
            }
        }
          , ee = function(e) {
            for (var t, n = A(w(e)), r = [], o = 0; n.length > o; )
                i(B, t = n[o++]) || t == N || t == l || r.push(t);
            return r
        }
          , et = function(e) {
            for (var t, n = e === W, r = A(n ? U : w(e)), o = [], a = 0; r.length > a; )
                i(B, t = r[a++]) && (!n || i(W, t)) && o.push(B[t]);
            return o
        };
        $ || (s((R = function() {
            if (this instanceof R)
                throw TypeError("Symbol is not a constructor!");
            var e = d(arguments.length > 0 ? arguments[0] : void 0)
              , t = function(n) {
                this === W && t.call(U, n),
                i(this, N) && i(this[N], e) && (this[N][e] = !1),
                G(this, e, P(1, n))
            };
            return o && q && G(W, e, {
                configurable: !0,
                set: t
            }),
            Q(e)
        }
        )[D], "toString", function() {
            return this._k
        }),
        C.f = J,
        _.f = Y,
        n(96450).f = E.f = ee,
        n(66275).f = Z,
        T.f = et,
        o && !n(96282) && s(W, "propertyIsEnumerable", Z, !0),
        p.f = function(e) {
            return Q(h(e))
        }
        ),
        a(a.G + a.W + !$ * a.F, {
            Symbol: R
        });
        for (var en = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), er = 0; en.length > er; )
            h(en[er++]);
        for (var ei = M(h.store), eo = 0; ei.length > eo; )
            m(ei[eo++]);
        a(a.S + !$ * a.F, "Symbol", {
            for: function(e) {
                return i(V, e += "") ? V[e] : V[e] = R(e)
            },
            keyFor: function(e) {
                if (!X(e))
                    throw TypeError(e + " is not a symbol!");
                for (var t in V)
                    if (V[t] === e)
                        return t
            },
            useSetter: function() {
                q = !0
            },
            useSimple: function() {
                q = !1
            }
        }),
        a(a.S + !$ * a.F, "Object", {
            create: function(e, t) {
                return void 0 === t ? k(e) : K(k(e), t)
            },
            defineProperty: Y,
            defineProperties: K,
            getOwnPropertyDescriptor: J,
            getOwnPropertyNames: ee,
            getOwnPropertySymbols: et
        });
        var ea = u(function() {
            T.f(1)
        });
        a(a.S + a.F * ea, "Object", {
            getOwnPropertySymbols: function(e) {
                return T.f(x(e))
            }
        }),
        z && a(a.S + a.F * (!$ || u(function() {
            var e = R();
            return "[null]" != L([e]) || "{}" != L({
                a: e
            }) || "{}" != L(Object(e))
        })), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], i = 1; arguments.length > i; )
                    r.push(arguments[i++]);
                if (n = t = r[1],
                !(!b(t) && void 0 === e || X(e)))
                    return g(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)),
                        !X(t))
                            return t
                    }
                    ),
                    r[1] = t,
                    L.apply(z, r)
            }
        }),
        R[D][I] || n(76152)(R[D], I, R[D].valueOf),
        f(R, "Symbol"),
        f(Math, "Math", !0),
        f(r.JSON, "JSON", !0)
    },
    23410: function(e, t, n) {
        n(62660)("asyncIterator")
    },
    57102: function(e, t, n) {
        n(62660)("observable")
    },
    85228: function(e, t, n) {
        n(87975);
        for (var r = n(50813), i = n(76152), o = n(61594), a = n(91410)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
            var u = s[l]
              , c = r[u]
              , f = c && c.prototype;
            f && !f[a] && i(f, a, u),
            o[u] = o.Array
        }
    },
    83802: function(e) {
        function t(e, t, n) {
            function r() {
                var u = Date.now() - s;
                u < t && u >= 0 ? i = setTimeout(r, t - u) : (i = null,
                n || (l = e.apply(a, o),
                a = o = null))
            }
            null == t && (t = 100);
            var i, o, a, s, l, u = function() {
                a = this,
                o = arguments,
                s = Date.now();
                var u = n && !i;
                return i || (i = setTimeout(r, t)),
                u && (l = e.apply(a, o),
                a = o = null),
                l
            };
            return u.clear = function() {
                i && (clearTimeout(i),
                i = null)
            }
            ,
            u.flush = function() {
                i && (l = e.apply(a, o),
                a = o = null,
                clearTimeout(i),
                i = null)
            }
            ,
            u
        }
        t.debounce = t,
        e.exports = t
    },
    24232: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return i.a
            }
        });
        var r = n(24930)
          , i = n.n(r)
    },
    20703: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return i.a
            }
        });
        var r = n(67447)
          , i = n.n(r)
    },
    8792: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return i.a
            }
        });
        var r = n(25250)
          , i = n.n(r)
    },
    66406: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(82139),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    81749: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let r = n(86921)
          , i = n(91884)
          , o = n(57437)
          , a = i._(n(2265))
          , s = r._(n(54887))
          , l = r._(n(42251))
          , u = n(38630)
          , c = n(76906)
          , f = n(60337);
        n(76184);
        let d = n(46993)
          , h = r._(n(10536))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, n, r, i, o) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
            ("decode"in e ? e.decode() : Promise.resolve()).catch(()=>{}
            ).then(()=>{
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && i(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , i = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: ()=>r,
                            isPropagationStopped: ()=>i,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                i = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            ))
        }
        function v(e) {
            let[t,n] = a.version.split(".", 2)
              , r = parseInt(t, 10)
              , i = parseInt(n, 10);
            return r > 18 || 18 === r && i >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let g = (0,
        a.forwardRef)((e,t)=>{
            let {src: n, srcSet: r, sizes: i, height: s, width: l, decoding: u, className: c, style: f, fetchPriority: d, placeholder: h, loading: p, unoptimized: g, fill: y, onLoadRef: b, onLoadingCompleteRef: x, setBlurComplete: w, setShowAltText: S, onLoad: P, onError: k, ...E} = e;
            return (0,
            o.jsx)("img", {
                ...E,
                ...v(d),
                loading: p,
                width: l,
                height: s,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: c,
                style: f,
                sizes: i,
                srcSet: r,
                src: n,
                ref: (0,
                a.useCallback)(e=>{
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (k && (e.src = e.src),
                    e.complete && m(e, h, b, x, w, g))
                }
                , [n, h, b, x, w, k, g, t]),
                onLoad: e=>{
                    m(e.currentTarget, h, b, x, w, g)
                }
                ,
                onError: e=>{
                    S(!0),
                    "empty" !== h && w(!0),
                    k && k(e)
                }
            })
        }
        );
        function y(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...v(n.fetchPriority)
            };
            return t && s.default.preload ? (s.default.preload(n.src, r),
            null) : (0,
            o.jsx)(l.default, {
                children: (0,
                o.jsx)("link", {
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }, "__nimg-" + n.src + n.srcSet + n.sizes)
            })
        }
        let b = (0,
        a.forwardRef)((e,t)=>{
            let n = (0,
            a.useContext)(d.RouterContext)
              , r = (0,
            a.useContext)(f.ImageConfigContext)
              , i = (0,
            a.useMemo)(()=>{
                let e = p || r || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , n = e.deviceSizes.sort((e,t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: s, onLoadingComplete: l} = e
              , m = (0,
            a.useRef)(s);
            (0,
            a.useEffect)(()=>{
                m.current = s
            }
            , [s]);
            let v = (0,
            a.useRef)(l);
            (0,
            a.useEffect)(()=>{
                v.current = l
            }
            , [l]);
            let[b,x] = (0,
            a.useState)(!1)
              , [w,S] = (0,
            a.useState)(!1)
              , {props: P, meta: k} = (0,
            u.getImgProps)(e, {
                defaultLoader: h.default,
                imgConf: i,
                blurComplete: b,
                showAltText: w
            });
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(g, {
                    ...P,
                    unoptimized: k.unoptimized,
                    placeholder: k.placeholder,
                    fill: k.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: v,
                    setBlurComplete: x,
                    setShowAltText: S,
                    ref: t
                }), k.priority ? (0,
                o.jsx)(y, {
                    isAppRouter: !n,
                    imgAttributes: P
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    25250: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return x
            }
        });
        let r = n(86921)
          , i = n(57437)
          , o = r._(n(2265))
          , a = n(14542)
          , s = n(17434)
          , l = n(11030)
          , u = n(36874)
          , c = n(12956)
          , f = n(46993)
          , d = n(38599)
          , h = n(45291)
          , p = n(66406)
          , m = n(45786)
          , v = n(91414)
          , g = new Set;
        function y(e, t, n, r, i, o) {
            if ("undefined" != typeof window && (o || (0,
            s.isLocalURL)(t))) {
                if (!r.bypassPrefetchedCheck) {
                    let i = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0);
                    if (g.has(i))
                        return;
                    g.add(i)
                }
                Promise.resolve(o ? e.prefetch(t, i) : e.prefetch(t, n, r)).catch(e=>{}
                )
            }
        }
        function b(e) {
            return "string" == typeof e ? e : (0,
            l.formatUrl)(e)
        }
        let x = o.default.forwardRef(function(e, t) {
            let n, r;
            let {href: l, as: g, children: x, prefetch: w=null, passHref: S, replace: P, shallow: k, scroll: E, locale: C, onClick: T, onMouseEnter: _, onTouchStart: M, legacyBehavior: j=!1, ...O} = e;
            n = x,
            j && ("string" == typeof n || "number" == typeof n) && (n = (0,
            i.jsx)("a", {
                children: n
            }));
            let A = o.default.useContext(f.RouterContext)
              , R = o.default.useContext(d.AppRouterContext)
              , z = null != A ? A : R
              , L = !A
              , D = !1 !== w
              , N = null === w ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL
              , {href: I, as: F} = o.default.useMemo(()=>{
                if (!A) {
                    let e = b(l);
                    return {
                        href: e,
                        as: g ? b(g) : e
                    }
                }
                let[e,t] = (0,
                a.resolveHref)(A, l, !0);
                return {
                    href: e,
                    as: g ? (0,
                    a.resolveHref)(A, g) : t || e
                }
            }
            , [A, l, g])
              , V = o.default.useRef(I)
              , B = o.default.useRef(F);
            j && (r = o.default.Children.only(n));
            let U = j ? r && "object" == typeof r && r.ref : t
              , [W,$,H] = (0,
            h.useIntersection)({
                rootMargin: "200px"
            })
              , q = o.default.useCallback(e=>{
                (B.current !== F || V.current !== I) && (H(),
                B.current = F,
                V.current = I),
                W(e),
                U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
            }
            , [F, U, I, H, W]);
            o.default.useEffect(()=>{
                z && $ && D && y(z, I, F, {
                    locale: C
                }, {
                    kind: N
                }, L)
            }
            , [F, I, $, C, D, null == A ? void 0 : A.locale, z, L, N]);
            let G = {
                ref: q,
                onClick(e) {
                    j || "function" != typeof T || T(e),
                    j && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    z && !e.defaultPrevented && function(e, t, n, r, i, a, l, u, c) {
                        let {nodeName: f} = e.currentTarget;
                        if ("A" === f.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        s.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let d = ()=>{
                            let e = null == l || l;
                            "beforePopState"in t ? t[i ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: u,
                                scroll: e
                            }) : t[i ? "replace" : "push"](r || n, {
                                scroll: e
                            })
                        }
                        ;
                        c ? o.default.startTransition(d) : d()
                    }(e, z, I, F, P, k, E, C, L)
                },
                onMouseEnter(e) {
                    j || "function" != typeof _ || _(e),
                    j && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    z && (D || !L) && y(z, I, F, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: N
                    }, L)
                },
                onTouchStart(e) {
                    j || "function" != typeof M || M(e),
                    j && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    z && (D || !L) && y(z, I, F, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: N
                    }, L)
                }
            };
            if ((0,
            u.isAbsoluteUrl)(F))
                G.href = F;
            else if (!j || S || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== C ? C : null == A ? void 0 : A.locale
                  , t = (null == A ? void 0 : A.isLocaleDomain) && (0,
                p.getDomainLocale)(F, e, null == A ? void 0 : A.locales, null == A ? void 0 : A.domainLocales);
                G.href = t || (0,
                m.addBasePath)((0,
                c.addLocale)(F, e, null == A ? void 0 : A.defaultLocale))
            }
            return j ? o.default.cloneElement(r, G) : (0,
            i.jsx)("a", {
                ...O,
                ...G,
                children: n
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    45291: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(2265)
          , i = n(52185)
          , o = "function" == typeof IntersectionObserver
          , a = new Map
          , s = [];
        function l(e) {
            let {rootRef: t, rootMargin: n, disabled: l} = e
              , u = l || !o
              , [c,f] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , h = (0,
            r.useCallback)(e=>{
                d.current = e
            }
            , []);
            return (0,
            r.useEffect)(()=>{
                if (o) {
                    if (u || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName)
                        return function(e, t, n) {
                            let {id: r, observer: i, elements: o} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = s.find(e=>e.root === n.root && e.margin === n.margin);
                                if (r && (t = a.get(r)))
                                    return t;
                                let i = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e=>{
                                        e.forEach(e=>{
                                            let t = i.get(e.target)
                                              , n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: i
                                },
                                s.push(n),
                                a.set(n, t),
                                t
                            }(n);
                            return o.set(e, t),
                            i.observe(e),
                            function() {
                                if (o.delete(e),
                                i.unobserve(e),
                                0 === o.size) {
                                    i.disconnect(),
                                    a.delete(r);
                                    let e = s.findIndex(e=>e.root === r.root && e.margin === r.margin);
                                    e > -1 && s.splice(e, 1)
                                }
                            }
                        }(e, e=>e && f(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let e = (0,
                    i.requestIdleCallback)(()=>f(!0));
                    return ()=>(0,
                    i.cancelIdleCallback)(e)
                }
            }
            , [u, n, t, c, d.current]),
            [h, c, (0,
            r.useCallback)(()=>{
                f(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    2595: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(86921)._(n(2265)).default.createContext({})
    },
    43044: function(e, t) {
        "use strict";
        function n(e) {
            let {ampFirst: t=!1, hybrid: n=!1, hasQuery: r=!1} = void 0 === e ? {} : e;
            return t || n && r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    24930: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(86921);
        n(57437),
        n(2265);
        let i = r._(n(84795));
        function o(e, t) {
            let n = {
                loading: e=>{
                    let {error: t, isLoading: n, pastDelay: r} = e;
                    return null
                }
            };
            return "function" == typeof e && (n.loader = e),
            (0,
            i.default)({
                ...n,
                ...t
            })
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    38630: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return s
            }
        }),
        n(76184);
        let r = n(67160)
          , i = n(76906);
        function o(e) {
            return void 0 !== e.default
        }
        function a(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function s(e, t) {
            var n;
            let s, l, u, {src: c, sizes: f, unoptimized: d=!1, priority: h=!1, loading: p, className: m, quality: v, width: g, height: y, fill: b=!1, style: x, onLoad: w, onLoadingComplete: S, placeholder: P="empty", blurDataURL: k, fetchPriority: E, layout: C, objectFit: T, objectPosition: _, lazyBoundary: M, lazyRoot: j, ...O} = e, {imgConf: A, showAltText: R, blurComplete: z, defaultLoader: L} = t, D = A || i.imageConfigDefault;
            if ("allSizes"in D)
                s = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort((e,t)=>e - t)
                  , t = D.deviceSizes.sort((e,t)=>e - t);
                s = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            let N = O.loader || L;
            delete O.loader,
            delete O.srcSet;
            let I = "__next_img_default"in N;
            if (I) {
                if ("custom" === s.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = N;
                N = t=>{
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (C) {
                "fill" === C && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                e && (x = {
                    ...x,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                t && !f && (f = t)
            }
            let F = ""
              , V = a(g)
              , B = a(y);
            if ("object" == typeof (n = c) && (o(n) || void 0 !== n.src)) {
                let e = o(c) ? c.default : c;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                u = e.blurHeight,
                k = k || e.blurDataURL,
                F = e.src,
                !b) {
                    if (V || B) {
                        if (V && !B) {
                            let t = V / e.width;
                            B = Math.round(e.height * t)
                        } else if (!V && B) {
                            let t = B / e.height;
                            V = Math.round(e.width * t)
                        }
                    } else
                        V = e.width,
                        B = e.height
                }
            }
            let U = !h && ("lazy" === p || void 0 === p);
            (!(c = "string" == typeof c ? c : F) || c.startsWith("data:") || c.startsWith("blob:")) && (d = !0,
            U = !1),
            s.unoptimized && (d = !0),
            I && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (d = !0),
            h && (E = "high");
            let W = a(v)
              , $ = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: T,
                objectPosition: _
            } : {}, R ? {} : {
                color: "transparent"
            }, x)
              , H = z || "empty" === P ? null : "blur" === P ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: V,
                heightInt: B,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: k || "",
                objectFit: $.objectFit
            }) + '")' : 'url("' + P + '")'
              , q = H ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H
            } : {}
              , G = function(e) {
                let {config: t, src: n, unoptimized: r, width: i, quality: o, sizes: a, loader: s} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: i} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t=>t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e=>i.find(t=>t >= e) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(t, i, a)
                  , c = l.length - 1;
                return {
                    sizes: a || "w" !== u ? a : "100vw",
                    srcSet: l.map((e,r)=>s({
                        config: t,
                        src: n,
                        quality: o,
                        width: e
                    }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                    src: s({
                        config: t,
                        src: n,
                        quality: o,
                        width: l[c]
                    })
                }
            }({
                config: s,
                src: c,
                unoptimized: d,
                width: V,
                quality: W,
                sizes: f,
                loader: N
            });
            return {
                props: {
                    ...O,
                    loading: U ? "lazy" : p,
                    fetchPriority: E,
                    width: V,
                    height: B,
                    decoding: "async",
                    className: m,
                    style: {
                        ...$,
                        ...q
                    },
                    sizes: G.sizes,
                    srcSet: G.srcSet,
                    src: G.src
                },
                meta: {
                    unoptimized: d,
                    priority: h,
                    placeholder: P,
                    fill: b
                }
            }
        }
    },
    42251: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            defaultHead: function() {
                return f
            },
            default: function() {
                return m
            }
        });
        let r = n(86921)
          , i = n(91884)
          , o = n(57437)
          , a = i._(n(2265))
          , s = r._(n(27392))
          , l = n(2595)
          , u = n(27484)
          , c = n(43044);
        function f(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function d(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        n(76184);
        let h = ["name", "httpEquiv", "charSet", "itemProp"];
        function p(e, t) {
            let {inAmpMode: n} = t;
            return e.reduce(d, []).reverse().concat(f(n).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return i=>{
                    let o = !0
                      , a = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        a = !0;
                        let t = i.key.slice(i.key.indexOf("$") + 1);
                        e.has(t) ? o = !1 : e.add(t)
                    }
                    switch (i.type) {
                    case "title":
                    case "base":
                        t.has(i.type) ? o = !1 : t.add(i.type);
                        break;
                    case "meta":
                        for (let e = 0, t = h.length; e < t; e++) {
                            let t = h[e];
                            if (i.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    n.has(t) ? o = !1 : n.add(t);
                                else {
                                    let e = i.props[t]
                                      , n = r[t] || new Set;
                                    ("name" !== t || !a) && n.has(e) ? o = !1 : (n.add(e),
                                    r[t] = n)
                                }
                            }
                        }
                    }
                    return o
                }
            }()).reverse().map((e,t)=>{
                let r = e.key || t;
                if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    a.default.cloneElement(e, t)
                }
                return a.default.cloneElement(e, {
                    key: r
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , n = (0,
            a.useContext)(l.AmpStateContext)
              , r = (0,
            a.useContext)(u.HeadManagerContext);
            return (0,
            o.jsx)(s.default, {
                reduceComponentsToState: p,
                headManager: r,
                inAmpMode: (0,
                c.isInAmpMode)(n),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    67160: function(e, t) {
        "use strict";
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: a} = e
              , s = r ? 40 * r : t
              , l = i ? 40 * i : n
              , u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    60337: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(86921)._(n(2265))
          , i = n(76906)
          , o = r.default.createContext(i.imageConfigDefault)
    },
    76906: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            VALID_LOADERS: function() {
                return n
            },
            imageConfigDefault: function() {
                return r
            }
        });
        let n = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    67447: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            getImageProps: function() {
                return s
            },
            default: function() {
                return l
            }
        });
        let r = n(86921)
          , i = n(38630)
          , o = n(81749)
          , a = r._(n(10536))
          , s = e=>{
            let {props: t} = (0,
            i.getImgProps)(e, {
                defaultLoader: a.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
          , l = o.Image
    },
    10536: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: i} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    19721: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(99775);
        function i(e) {
            let {reason: t, children: n} = e;
            if ("undefined" == typeof window)
                throw new r.BailoutToCSRError(t);
            return n
        }
    },
    84795: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(57437)
          , i = n(2265)
          , o = n(19721);
        function a(e) {
            var t;
            return {
                default: null != (t = null == e ? void 0 : e.default) ? t : e
            }
        }
        let s = {
            loader: ()=>Promise.resolve(a(()=>null)),
            loading: null,
            ssr: !0
        }
          , l = function(e) {
            let t = {
                ...s,
                ...e
            }
              , n = (0,
            i.lazy)(()=>t.loader().then(a))
              , l = t.loading;
            function u(e) {
                let a = l ? (0,
                r.jsx)(l, {
                    isLoading: !0,
                    pastDelay: !0,
                    error: null
                }) : null
                  , s = t.ssr ? (0,
                r.jsx)(n, {
                    ...e
                }) : (0,
                r.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0,
                    r.jsx)(n, {
                        ...e
                    })
                });
                return (0,
                r.jsx)(i.Suspense, {
                    fallback: a,
                    children: s
                })
            }
            return u.displayName = "LoadableComponent",
            u
        }
    },
    27392: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let r = n(2265)
          , i = "undefined" == typeof window
          , o = i ? ()=>{}
        : r.useLayoutEffect
          , a = i ? ()=>{}
        : r.useEffect;
        function s(e) {
            let {headManager: t, reduceComponentsToState: n} = e;
            function s() {
                if (t && t.mountedInstances) {
                    let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(i, e))
                }
            }
            if (i) {
                var l;
                null == t || null == (l = t.mountedInstances) || l.add(e.children),
                s()
            }
            return o(()=>{
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                ()=>{
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            ),
            o(()=>(t && (t._pendingUpdate = s),
            ()=>{
                t && (t._pendingUpdate = s)
            }
            )),
            a(()=>(t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            ()=>{
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    18314: function(e, t, n) {
        "use strict";
        var r = n(41811);
        function i() {}
        function o() {}
        o.resetWarningCache = i,
        e.exports = function() {
            function e(e, t, n, i, o, a) {
                if (a !== r) {
                    var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation",
                    s
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: i
            };
            return n.PropTypes = n,
            n
        }
    },
    74404: function(e, t, n) {
        e.exports = n(18314)()
    },
    41811: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    11411: function(e, t, n) {
        "use strict";
        var r = d(n(61389))
          , i = d(n(98359))
          , o = d(n(48472))
          , a = d(n(93331))
          , s = d(n(90364))
          , l = d(n(98840))
          , u = d(n(2265))
          , c = d(n(74404))
          , f = d(n(4698));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = function(e) {
            function t() {
                (0,
                o.default)(this, t);
                for (var e, n, r, a = arguments.length, l = Array(a), u = 0; u < a; u++)
                    l[u] = arguments[u];
                return n = r = (0,
                s.default)(this, (e = t.__proto__ || (0,
                i.default)(t)).call.apply(e, [this].concat(l))),
                r.handleClickToPause = function() {
                    r.anim.isPaused ? r.anim.play() : r.anim.pause()
                }
                ,
                (0,
                s.default)(r, n)
            }
            return (0,
            l.default)(t, e),
            (0,
            a.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.options
                      , n = e.eventListeners
                      , i = t.loop
                      , o = t.autoplay
                      , a = t.animationData
                      , s = t.rendererSettings
                      , l = t.segments;
                    this.options = {
                        container: this.el,
                        renderer: "svg",
                        loop: !1 !== i,
                        autoplay: !1 !== o,
                        segments: !1 !== l,
                        animationData: a,
                        rendererSettings: s
                    },
                    this.options = (0,
                    r.default)({}, this.options, t),
                    this.anim = f.default.loadAnimation(this.options),
                    this.registerEvents(n)
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    this.options.animationData !== e.options.animationData && (this.deRegisterEvents(this.props.eventListeners),
                    this.destroy(),
                    this.options = (0,
                    r.default)({}, this.options, e.options),
                    this.anim = f.default.loadAnimation(this.options),
                    this.registerEvents(e.eventListeners))
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(),
                    this.pause(),
                    this.setSpeed(),
                    this.setDirection()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.deRegisterEvents(this.props.eventListeners),
                    this.destroy(),
                    this.options.animationData = null,
                    this.anim = null
                }
            }, {
                key: "setSpeed",
                value: function() {
                    this.anim.setSpeed(this.props.speed)
                }
            }, {
                key: "setDirection",
                value: function() {
                    this.anim.setDirection(this.props.direction)
                }
            }, {
                key: "play",
                value: function() {
                    this.anim.play()
                }
            }, {
                key: "playSegments",
                value: function() {
                    this.anim.playSegments(this.props.segments)
                }
            }, {
                key: "stop",
                value: function() {
                    this.anim.stop()
                }
            }, {
                key: "pause",
                value: function() {
                    this.props.isPaused && !this.anim.isPaused ? this.anim.pause() : !this.props.isPaused && this.anim.isPaused && this.anim.pause()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.anim.destroy()
                }
            }, {
                key: "registerEvents",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        t.anim.addEventListener(e.eventName, e.callback)
                    })
                }
            }, {
                key: "deRegisterEvents",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        t.anim.removeEventListener(e.eventName, e.callback)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.width
                      , i = t.height
                      , o = t.ariaRole
                      , a = t.ariaLabel
                      , s = t.isClickToPauseDisabled
                      , l = t.title
                      , c = function(e) {
                        return "number" == typeof e ? e + "px" : e || "100%"
                    }
                      , f = (0,
                    r.default)({
                        width: c(n),
                        height: c(i),
                        overflow: "hidden",
                        margin: "0 auto",
                        outline: "none"
                    }, this.props.style)
                      , d = s ? function() {
                        return null
                    }
                    : this.handleClickToPause;
                    return u.default.createElement("div", {
                        ref: function(t) {
                            e.el = t
                        },
                        style: f,
                        onClick: d,
                        title: l,
                        role: o,
                        "aria-label": a,
                        tabIndex: "0"
                    })
                }
            }]),
            t
        }(u.default.Component);
        t.Z = h,
        h.propTypes = {
            eventListeners: c.default.arrayOf(c.default.object),
            options: c.default.object.isRequired,
            height: c.default.oneOfType([c.default.string, c.default.number]),
            width: c.default.oneOfType([c.default.string, c.default.number]),
            isStopped: c.default.bool,
            isPaused: c.default.bool,
            speed: c.default.number,
            segments: c.default.arrayOf(c.default.number),
            direction: c.default.number,
            ariaRole: c.default.string,
            ariaLabel: c.default.string,
            isClickToPauseDisabled: c.default.bool,
            title: c.default.string,
            style: c.default.string
        },
        h.defaultProps = {
            eventListeners: [],
            isStopped: !1,
            isPaused: !1,
            speed: 1,
            ariaRole: "button",
            ariaLabel: "animation",
            isClickToPauseDisabled: !1,
            title: ""
        }
    },
    78025: function(e, t) {
        "use strict";
        /**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        t.ConcurrentRoot = 1,
        t.ContinuousEventPriority = 4,
        t.DefaultEventPriority = 16,
        t.DiscreteEventPriority = 1
    },
    5224: function(e, t, n) {
        /**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        e.exports = function(e) {
            "use strict";
            var t, r, i, o, a, s = {}, l = n(2265), u = n(99514), c = Object.assign;
            function f(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , h = Symbol.for("react.element")
              , p = Symbol.for("react.portal")
              , m = Symbol.for("react.fragment")
              , v = Symbol.for("react.strict_mode")
              , g = Symbol.for("react.profiler")
              , y = Symbol.for("react.provider")
              , b = Symbol.for("react.context")
              , x = Symbol.for("react.forward_ref")
              , w = Symbol.for("react.suspense")
              , S = Symbol.for("react.suspense_list")
              , P = Symbol.for("react.memo")
              , k = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var E = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var C = Symbol.iterator;
            function T(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = C && e[C] || e["@@iterator"]) ? e : null
            }
            function _(e) {
                if (null == e)
                    return null;
                if ("function" == typeof e)
                    return e.displayName || e.name || null;
                if ("string" == typeof e)
                    return e;
                switch (e) {
                case m:
                    return "Fragment";
                case p:
                    return "Portal";
                case g:
                    return "Profiler";
                case v:
                    return "StrictMode";
                case w:
                    return "Suspense";
                case S:
                    return "SuspenseList"
                }
                if ("object" == typeof e)
                    switch (e.$$typeof) {
                    case b:
                        return (e.displayName || "Context") + ".Consumer";
                    case y:
                        return (e._context.displayName || "Context") + ".Provider";
                    case x:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case P:
                        return null !== (t = e.displayName || null) ? t : _(e.type) || "Memo";
                    case k:
                        t = e._payload,
                        e = e._init;
                        try {
                            return _(e(t))
                        } catch (e) {}
                    }
                return null
            }
            function M(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do
                        0 != (4098 & (t = e).flags) && (n = t.return),
                        e = t.return;
                    while (e)
                }
                return 3 === t.tag ? n : null
            }
            function j(e) {
                if (M(e) !== e)
                    throw Error(f(188))
            }
            function O(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = M(e)))
                        throw Error(f(188));
                    return t !== e ? null : e
                }
                for (var n = e, r = t; ; ) {
                    var i = n.return;
                    if (null === i)
                        break;
                    var o = i.alternate;
                    if (null === o) {
                        if (null !== (r = i.return)) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (i.child === o.child) {
                        for (o = i.child; o; ) {
                            if (o === n)
                                return j(i),
                                e;
                            if (o === r)
                                return j(i),
                                t;
                            o = o.sibling
                        }
                        throw Error(f(188))
                    }
                    if (n.return !== r.return)
                        n = i,
                        r = o;
                    else {
                        for (var a = !1, s = i.child; s; ) {
                            if (s === n) {
                                a = !0,
                                n = i,
                                r = o;
                                break
                            }
                            if (s === r) {
                                a = !0,
                                r = i,
                                n = o;
                                break
                            }
                            s = s.sibling
                        }
                        if (!a) {
                            for (s = o.child; s; ) {
                                if (s === n) {
                                    a = !0,
                                    n = o,
                                    r = i;
                                    break
                                }
                                if (s === r) {
                                    a = !0,
                                    r = o,
                                    n = i;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!a)
                                throw Error(f(189))
                        }
                    }
                    if (n.alternate !== r)
                        throw Error(f(190))
                }
                if (3 !== n.tag)
                    throw Error(f(188));
                return n.stateNode.current === n ? e : t
            }
            function A(e) {
                return null !== (e = O(e)) ? function e(t) {
                    if (5 === t.tag || 6 === t.tag)
                        return t;
                    for (t = t.child; null !== t; ) {
                        var n = e(t);
                        if (null !== n)
                            return n;
                        t = t.sibling
                    }
                    return null
                }(e) : null
            }
            var R, z = Array.isArray, L = e.getPublicInstance, D = e.getRootHostContext, N = e.getChildHostContext, I = e.prepareForCommit, F = e.resetAfterCommit, V = e.createInstance, B = e.appendInitialChild, U = e.finalizeInitialChildren, W = e.prepareUpdate, $ = e.shouldSetTextContent, H = e.createTextInstance, q = e.scheduleTimeout, G = e.cancelTimeout, Q = e.noTimeout, X = e.isPrimaryRenderer, Y = e.supportsMutation, K = e.supportsPersistence, Z = e.supportsHydration, J = e.getInstanceFromNode, ee = e.preparePortalMount, et = e.getCurrentEventPriority, en = e.detachDeletedInstance, er = e.supportsMicrotasks, ei = e.scheduleMicrotask, eo = e.supportsTestSelectors, ea = e.findFiberRoot, es = e.getBoundingRect, el = e.getTextContent, eu = e.isHiddenSubtree, ec = e.matchAccessibilityRole, ef = e.setFocusIfFocusable, ed = e.setupIntersectionObserver, eh = e.appendChild, ep = e.appendChildToContainer, em = e.commitTextUpdate, ev = e.commitMount, eg = e.commitUpdate, ey = e.insertBefore, eb = e.insertInContainerBefore, ex = e.removeChild, ew = e.removeChildFromContainer, eS = e.resetTextContent, eP = e.hideInstance, ek = e.hideTextInstance, eE = e.unhideInstance, eC = e.unhideTextInstance, eT = e.clearContainer, e_ = e.cloneInstance, eM = e.createContainerChildSet, ej = e.appendChildToContainerChildSet, eO = e.finalizeContainerChildren, eA = e.replaceContainerChildren, eR = e.cloneHiddenInstance, ez = e.cloneHiddenTextInstance, eL = e.canHydrateInstance, eD = e.canHydrateTextInstance, eN = e.canHydrateSuspenseInstance, eI = e.isSuspenseInstancePending, eF = e.isSuspenseInstanceFallback, eV = e.registerSuspenseInstanceRetry, eB = e.getNextHydratableSibling, eU = e.getFirstHydratableChild, eW = e.getFirstHydratableChildWithinContainer, e$ = e.getFirstHydratableChildWithinSuspenseInstance, eH = e.hydrateInstance, eq = e.hydrateTextInstance, eG = e.hydrateSuspenseInstance, eQ = e.getNextHydratableInstanceAfterSuspenseInstance, eX = e.commitHydratedContainer, eY = e.commitHydratedSuspenseInstance, eK = e.clearSuspenseBoundary, eZ = e.clearSuspenseBoundaryFromContainer, eJ = e.shouldDeleteUnhydratedTailInstances, e0 = e.didNotMatchHydratedContainerTextInstance, e1 = e.didNotMatchHydratedTextInstance;
            function e2(e) {
                if (void 0 === R)
                    try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        R = t && t[1] || ""
                    }
                return "\n" + R + e
            }
            var e3 = !1;
            function e4(e, t) {
                if (!e || e3)
                    return "";
                e3 = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) {
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (e) {
                                var r = e
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (e) {
                                r = e
                            }
                            e.call(t.prototype)
                        }
                    } else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (t) {
                    if (t && r && "string" == typeof t.stack) {
                        for (var i = t.stack.split("\n"), o = r.stack.split("\n"), a = i.length - 1, s = o.length - 1; 1 <= a && 0 <= s && i[a] !== o[s]; )
                            s--;
                        for (; 1 <= a && 0 <= s; a--,
                        s--)
                            if (i[a] !== o[s]) {
                                if (1 !== a || 1 !== s)
                                    do
                                        if (a--,
                                        0 > --s || i[a] !== o[s]) {
                                            var l = "\n" + i[a].replace(" at new ", " at ");
                                            return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                            l
                                        }
                                    while (1 <= a && 0 <= s);
                                break
                            }
                    }
                } finally {
                    e3 = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? e2(e) : ""
            }
            var e6 = Object.prototype.hasOwnProperty
              , e5 = []
              , e8 = -1;
            function e9(e) {
                return {
                    current: e
                }
            }
            function e7(e) {
                0 > e8 || (e.current = e5[e8],
                e5[e8] = null,
                e8--)
            }
            function te(e, t) {
                e5[++e8] = e.current,
                e.current = t
            }
            var tt = {}
              , tn = e9(tt)
              , tr = e9(!1)
              , ti = tt;
            function to(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return tt;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var i, o = {};
                for (i in n)
                    o[i] = t[i];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = o),
                o
            }
            function ta(e) {
                return null != (e = e.childContextTypes)
            }
            function ts() {
                e7(tr),
                e7(tn)
            }
            function tl(e, t, n) {
                if (tn.current !== tt)
                    throw Error(f(168));
                te(tn, t),
                te(tr, n)
            }
            function tu(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes,
                "function" != typeof r.getChildContext)
                    return n;
                for (var i in r = r.getChildContext())
                    if (!(i in t))
                        throw Error(f(108, function(e) {
                            var t = e.type;
                            switch (e.tag) {
                            case 24:
                                return "Cache";
                            case 9:
                                return (t.displayName || "Context") + ".Consumer";
                            case 10:
                                return (t._context.displayName || "Context") + ".Provider";
                            case 18:
                                return "DehydratedFragment";
                            case 11:
                                return e = (e = t.render).displayName || e.name || "",
                                t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                            case 7:
                                return "Fragment";
                            case 5:
                                return t;
                            case 4:
                                return "Portal";
                            case 3:
                                return "Root";
                            case 6:
                                return "Text";
                            case 16:
                                return _(t);
                            case 8:
                                return t === v ? "StrictMode" : "Mode";
                            case 22:
                                return "Offscreen";
                            case 12:
                                return "Profiler";
                            case 21:
                                return "Scope";
                            case 13:
                                return "Suspense";
                            case 19:
                                return "SuspenseList";
                            case 25:
                                return "TracingMarker";
                            case 1:
                            case 0:
                            case 17:
                            case 2:
                            case 14:
                            case 15:
                                if ("function" == typeof t)
                                    return t.displayName || t.name || null;
                                if ("string" == typeof t)
                                    return t
                            }
                            return null
                        }(e) || "Unknown", i));
                return c({}, n, r)
            }
            function tc(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tt,
                ti = tn.current,
                te(tn, e),
                te(tr, tr.current),
                !0
            }
            function tf(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(f(169));
                n ? (e = tu(e, t, ti),
                r.__reactInternalMemoizedMergedChildContext = e,
                e7(tr),
                e7(tn),
                te(tn, e)) : e7(tr),
                te(tr, n)
            }
            var td = Math.clz32 ? Math.clz32 : function(e) {
                return 0 == (e >>>= 0) ? 32 : 31 - (th(e) / tp | 0) | 0
            }
              , th = Math.log
              , tp = Math.LN2
              , tm = 64
              , tv = 4194304;
            function tg(e) {
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function ty(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , i = e.suspendedLanes
                  , o = e.pingedLanes
                  , a = 268435455 & n;
                if (0 !== a) {
                    var s = a & ~i;
                    0 !== s ? r = tg(s) : 0 != (o &= a) && (r = tg(o))
                } else
                    0 != (a = n & ~i) ? r = tg(a) : 0 !== o && (r = tg(o));
                if (0 === r)
                    return 0;
                if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || 16 === i && 0 != (4194240 & o)))
                    return t;
                if (0 != (4 & r) && (r |= 16 & n),
                0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        i = 1 << (n = 31 - td(t)),
                        r |= e[n],
                        t &= ~i;
                return r
            }
            function tb(e) {
                return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function tx(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function tw(e, t, n) {
                e.pendingLanes |= t,
                536870912 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[t = 31 - td(t)] = n
            }
            function tS(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - td(n)
                      , i = 1 << r;
                    i & t | e[r] & t && (e[r] |= t),
                    n &= ~i
                }
            }
            var tP = 0;
            function tk(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var tE = u.unstable_scheduleCallback
              , tC = u.unstable_cancelCallback
              , tT = u.unstable_shouldYield
              , t_ = u.unstable_requestPaint
              , tM = u.unstable_now
              , tj = u.unstable_ImmediatePriority
              , tO = u.unstable_UserBlockingPriority
              , tA = u.unstable_NormalPriority
              , tR = u.unstable_IdlePriority
              , tz = null
              , tL = null
              , tD = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
              , tN = null
              , tI = !1
              , tF = !1;
            function tV(e) {
                null === tN ? tN = [e] : tN.push(e)
            }
            function tB() {
                if (!tF && null !== tN) {
                    tF = !0;
                    var e = 0
                      , t = tP;
                    try {
                        var n = tN;
                        for (tP = 1; e < n.length; e++) {
                            var r = n[e];
                            do
                                r = r(!0);
                            while (null !== r)
                        }
                        tN = null,
                        tI = !1
                    } catch (t) {
                        throw null !== tN && (tN = tN.slice(e + 1)),
                        tE(tj, tB),
                        t
                    } finally {
                        tP = t,
                        tF = !1
                    }
                }
                return null
            }
            var tU = d.ReactCurrentBatchConfig;
            function tW(e, t) {
                if (tD(e, t))
                    return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (!e6.call(t, i) || !tD(e[i], t[i]))
                        return !1
                }
                return !0
            }
            function t$(e, t) {
                if (e && e.defaultProps)
                    for (var n in t = c({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                return t
            }
            var tH = e9(null)
              , tq = null
              , tG = null
              , tQ = null;
            function tX() {
                tQ = tG = tq = null
            }
            function tY(e, t, n) {
                X ? (te(tH, t._currentValue),
                t._currentValue = n) : (te(tH, t._currentValue2),
                t._currentValue2 = n)
            }
            function tK(e) {
                var t = tH.current;
                e7(tH),
                X ? e._currentValue = t : e._currentValue2 = t
            }
            function tZ(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function tJ(e, t) {
                tq = e,
                tQ = tG = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (r0 = !0),
                e.firstContext = null)
            }
            function t0(e) {
                var t = X ? e._currentValue : e._currentValue2;
                if (tQ !== e) {
                    if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    },
                    null === tG) {
                        if (null === tq)
                            throw Error(f(308));
                        tG = e,
                        tq.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        tG = tG.next = e
                }
                return t
            }
            var t1 = null
              , t2 = !1;
            function t3(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function t4(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function t6(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function t5(e, t) {
                var n = e.updateQueue;
                null !== n && (n = n.shared,
                null !== iY && 0 != (1 & e.mode) && 0 == (2 & iX) ? (null === (e = n.interleaved) ? (t.next = t,
                null === t1 ? t1 = [n] : t1.push(n)) : (t.next = e.next,
                e.next = t),
                n.interleaved = t) : (null === (e = n.pending) ? t.next = t : (t.next = e.next,
                e.next = t),
                n.pending = t))
            }
            function t8(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 != (4194240 & n))) {
                    var r = t.lanes;
                    r &= e.pendingLanes,
                    n |= r,
                    t.lanes = n,
                    tS(e, n)
                }
            }
            function t9(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var i = null
                      , o = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var a = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === o ? i = o = a : o = o.next = a,
                            n = n.next
                        } while (null !== n);
                        null === o ? i = o = t : o = o.next = t
                    } else
                        i = o = t;
                    n = {
                        baseState: r.baseState,
                        firstBaseUpdate: i,
                        lastBaseUpdate: o,
                        shared: r.shared,
                        effects: r.effects
                    },
                    e.updateQueue = n;
                    return
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function t7(e, t, n, r) {
                var i = e.updateQueue;
                t2 = !1;
                var o = i.firstBaseUpdate
                  , a = i.lastBaseUpdate
                  , s = i.shared.pending;
                if (null !== s) {
                    i.shared.pending = null;
                    var l = s
                      , u = l.next;
                    l.next = null,
                    null === a ? o = u : a.next = u,
                    a = l;
                    var f = e.alternate;
                    null !== f && (s = (f = f.updateQueue).lastBaseUpdate) !== a && (null === s ? f.firstBaseUpdate = u : s.next = u,
                    f.lastBaseUpdate = l)
                }
                if (null !== o) {
                    var d = i.baseState;
                    for (a = 0,
                    f = u = l = null,
                    s = o; ; ) {
                        var h = s.lane
                          , p = s.eventTime;
                        if ((r & h) === h) {
                            null !== f && (f = f.next = {
                                eventTime: p,
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            });
                            e: {
                                var m = e
                                  , v = s;
                                switch (h = t,
                                p = n,
                                v.tag) {
                                case 1:
                                    if ("function" == typeof (m = v.payload)) {
                                        d = m.call(p, d, h);
                                        break e
                                    }
                                    d = m;
                                    break e;
                                case 3:
                                    m.flags = -65537 & m.flags | 128;
                                case 0:
                                    if (null == (h = "function" == typeof (m = v.payload) ? m.call(p, d, h) : m))
                                        break e;
                                    d = c({}, d, h);
                                    break e;
                                case 2:
                                    t2 = !0
                                }
                            }
                            null !== s.callback && 0 !== s.lane && (e.flags |= 64,
                            null === (h = i.effects) ? i.effects = [s] : h.push(s))
                        } else
                            p = {
                                eventTime: p,
                                lane: h,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            },
                            null === f ? (u = f = p,
                            l = d) : f = f.next = p,
                            a |= h;
                        if (null === (s = s.next)) {
                            if (null === (s = i.shared.pending))
                                break;
                            s = (h = s).next,
                            h.next = null,
                            i.lastBaseUpdate = h,
                            i.shared.pending = null
                        }
                    }
                    if (null === f && (l = d),
                    i.baseState = l,
                    i.firstBaseUpdate = u,
                    i.lastBaseUpdate = f,
                    null !== (t = i.shared.interleaved)) {
                        i = t;
                        do
                            a |= i.lane,
                            i = i.next;
                        while (i !== t)
                    } else
                        null === o && (i.shared.lanes = 0);
                    i3 |= a,
                    e.lanes = a,
                    e.memoizedState = d
                }
            }
            function ne(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , i = r.callback;
                        if (null !== i) {
                            if (r.callback = null,
                            r = n,
                            "function" != typeof i)
                                throw Error(f(191, i));
                            i.call(r)
                        }
                    }
            }
            var nt = (new l.Component).refs;
            function nn(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : c({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var nr = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && M(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = of()
                      , i = od(e)
                      , o = t6(r, i);
                    o.payload = t,
                    null != n && (o.callback = n),
                    t5(e, o),
                    null !== (t = oh(e, i, r)) && t8(t, e, i)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = of()
                      , i = od(e)
                      , o = t6(r, i);
                    o.tag = 1,
                    o.payload = t,
                    null != n && (o.callback = n),
                    t5(e, o),
                    null !== (t = oh(e, i, r)) && t8(t, e, i)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = of()
                      , r = od(e)
                      , i = t6(n, r);
                    i.tag = 2,
                    null != t && (i.callback = t),
                    t5(e, i),
                    null !== (t = oh(e, r, n)) && t8(t, e, r)
                }
            };
            function ni(e, t, n, r, i, o, a) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || !tW(n, r) || !tW(i, o)
            }
            function no(e, t, n) {
                var r = !1
                  , i = tt
                  , o = t.contextType;
                return "object" == typeof o && null !== o ? o = t0(o) : (i = ta(t) ? ti : tn.current,
                o = (r = null != (r = t.contextTypes)) ? to(e, i) : tt),
                t = new t(n,o),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = nr,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i,
                e.__reactInternalMemoizedMaskedChildContext = o),
                t
            }
            function na(e, t, n, r) {
                e = t.state,
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && nr.enqueueReplaceState(t, t.state, null)
            }
            function ns(e, t, n, r) {
                var i = e.stateNode;
                i.props = n,
                i.state = e.memoizedState,
                i.refs = nt,
                t3(e);
                var o = t.contextType;
                "object" == typeof o && null !== o ? i.context = t0(o) : (o = ta(t) ? ti : tn.current,
                i.context = to(e, o)),
                i.state = e.memoizedState,
                "function" == typeof (o = t.getDerivedStateFromProps) && (nn(e, t, o, n),
                i.state = e.memoizedState),
                "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state,
                "function" == typeof i.componentWillMount && i.componentWillMount(),
                "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
                t !== i.state && nr.enqueueReplaceState(i, i.state, null),
                t7(e, n, i, r),
                i.state = e.memoizedState),
                "function" == typeof i.componentDidMount && (e.flags |= 4194308)
            }
            var nl = []
              , nu = 0
              , nc = null
              , nf = 0
              , nd = []
              , nh = 0
              , np = null
              , nm = 1
              , nv = "";
            function ng(e, t) {
                nl[nu++] = nf,
                nl[nu++] = nc,
                nc = e,
                nf = t
            }
            function ny(e, t, n) {
                nd[nh++] = nm,
                nd[nh++] = nv,
                nd[nh++] = np,
                np = e;
                var r = nm;
                e = nv;
                var i = 32 - td(r) - 1;
                r &= ~(1 << i),
                n += 1;
                var o = 32 - td(t) + i;
                if (30 < o) {
                    var a = i - i % 5;
                    o = (r & (1 << a) - 1).toString(32),
                    r >>= a,
                    i -= a,
                    nm = 1 << 32 - td(t) + i | n << i | r,
                    nv = o + e
                } else
                    nm = 1 << o | n << i | r,
                    nv = e
            }
            function nb(e) {
                null !== e.return && (ng(e, 1),
                ny(e, 1, 0))
            }
            function nx(e) {
                for (; e === nc; )
                    nc = nl[--nu],
                    nl[nu] = null,
                    nf = nl[--nu],
                    nl[nu] = null;
                for (; e === np; )
                    np = nd[--nh],
                    nd[nh] = null,
                    nv = nd[--nh],
                    nd[nh] = null,
                    nm = nd[--nh],
                    nd[nh] = null
            }
            var nw = null
              , nS = null
              , nP = !1
              , nk = !1
              , nE = null;
            function nC(e, t) {
                var n = oF(5, null, null, 0);
                n.elementType = "DELETED",
                n.stateNode = t,
                n.return = e,
                null === (t = e.deletions) ? (e.deletions = [n],
                e.flags |= 16) : t.push(n)
            }
            function nT(e, t) {
                switch (e.tag) {
                case 5:
                    return null !== (t = eL(t, e.type, e.pendingProps)) && (e.stateNode = t,
                    nw = e,
                    nS = eU(t),
                    !0);
                case 6:
                    return null !== (t = eD(t, e.pendingProps)) && (e.stateNode = t,
                    nw = e,
                    nS = null,
                    !0);
                case 13:
                    if (null !== (t = eN(t))) {
                        var n = null !== np ? {
                            id: nm,
                            overflow: nv
                        } : null;
                        return e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        },
                        (n = oF(18, null, null, 0)).stateNode = t,
                        n.return = e,
                        e.child = n,
                        nw = e,
                        nS = null,
                        !0
                    }
                    return !1;
                default:
                    return !1
                }
            }
            function n_(e) {
                return 0 != (1 & e.mode) && 0 == (128 & e.flags)
            }
            function nM(e) {
                if (nP) {
                    var t = nS;
                    if (t) {
                        var n = t;
                        if (!nT(e, t)) {
                            if (n_(e))
                                throw Error(f(418));
                            t = eB(n);
                            var r = nw;
                            t && nT(e, t) ? nC(r, n) : (e.flags = -4097 & e.flags | 2,
                            nP = !1,
                            nw = e)
                        }
                    } else {
                        if (n_(e))
                            throw Error(f(418));
                        e.flags = -4097 & e.flags | 2,
                        nP = !1,
                        nw = e
                    }
                }
            }
            function nj(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                nw = e
            }
            function nO(e) {
                if (!Z || e !== nw)
                    return !1;
                if (!nP)
                    return nj(e),
                    nP = !0,
                    !1;
                if (3 !== e.tag && (5 !== e.tag || eJ(e.type) && !$(e.type, e.memoizedProps))) {
                    var t = nS;
                    if (t) {
                        if (n_(e)) {
                            for (e = nS; e; )
                                e = eB(e);
                            throw Error(f(418))
                        }
                        for (; t; )
                            nC(e, t),
                            t = eB(t)
                    }
                }
                if (nj(e),
                13 === e.tag) {
                    if (!Z)
                        throw Error(f(316));
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(f(317));
                    nS = eQ(e)
                } else
                    nS = nw ? eB(e.stateNode) : null;
                return !0
            }
            function nA() {
                Z && (nS = nw = null,
                nk = nP = !1)
            }
            function nR(e) {
                null === nE ? nE = [e] : nE.push(e)
            }
            function nz(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(f(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(f(147, e));
                        var i = r
                          , o = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function(e) {
                            var t = i.refs;
                            t === nt && (t = i.refs = {}),
                            null === e ? delete t[o] : t[o] = e
                        }
                        )._stringRef = o,
                        t)
                    }
                    if ("string" != typeof e)
                        throw Error(f(284));
                    if (!n._owner)
                        throw Error(f(290, e))
                }
                return e
            }
            function nL(e, t) {
                throw Error(f(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function nD(e) {
                return (0,
                e._init)(e._payload)
            }
            function nN(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function i(e, t) {
                    return (e = oB(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function o(t, n, r) {
                    return (t.index = r,
                    e) ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2,
                    n) : r : (t.flags |= 2,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function a(t) {
                    return e && null === t.alternate && (t.flags |= 2),
                    t
                }
                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? (t = oH(n, e.mode, r)).return = e : (t = i(t, n)).return = e,
                    t
                }
                function l(e, t, n, r) {
                    var o = n.type;
                    return o === m ? c(e, t, n.props.children, r, n.key) : (null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === k && nD(o) === t.type) ? (r = i(t, n.props)).ref = nz(e, t, n) : (r = oU(n.type, n.key, n.props, null, e.mode, r)).ref = nz(e, t, n),
                    r.return = e,
                    r)
                }
                function u(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = oq(n, e.mode, r)).return = e : (t = i(t, n.children || [])).return = e,
                    t
                }
                function c(e, t, n, r, o) {
                    return null === t || 7 !== t.tag ? (t = oW(n, e.mode, r, o)).return = e : (t = i(t, n)).return = e,
                    t
                }
                function d(e, t, n) {
                    if ("string" == typeof t && "" !== t || "number" == typeof t)
                        return (t = oH("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case h:
                            return (n = oU(t.type, t.key, t.props, null, e.mode, n)).ref = nz(e, null, t),
                            n.return = e,
                            n;
                        case p:
                            return (t = oq(t, e.mode, n)).return = e,
                            t;
                        case k:
                            return d(e, (0,
                            t._init)(t._payload), n)
                        }
                        if (z(t) || T(t))
                            return (t = oW(t, e.mode, n, null)).return = e,
                            t;
                        nL(e, t)
                    }
                    return null
                }
                function v(e, t, n, r) {
                    var i = null !== t ? t.key : null;
                    if ("string" == typeof n && "" !== n || "number" == typeof n)
                        return null !== i ? null : s(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case h:
                            return n.key === i ? l(e, t, n, r) : null;
                        case p:
                            return n.key === i ? u(e, t, n, r) : null;
                        case k:
                            return v(e, t, (i = n._init)(n._payload), r)
                        }
                        if (z(n) || T(n))
                            return null !== i ? null : c(e, t, n, r, null);
                        nL(e, n)
                    }
                    return null
                }
                function g(e, t, n, r, i) {
                    if ("string" == typeof r && "" !== r || "number" == typeof r)
                        return s(t, e = e.get(n) || null, "" + r, i);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case h:
                            return l(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                        case p:
                            return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                        case k:
                            return g(e, t, n, (0,
                            r._init)(r._payload), i)
                        }
                        if (z(r) || T(r))
                            return c(t, e = e.get(n) || null, r, i, null);
                        nL(t, r)
                    }
                    return null
                }
                return function s(l, u, c, y) {
                    if ("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children),
                    "object" == typeof c && null !== c) {
                        switch (c.$$typeof) {
                        case h:
                            e: {
                                for (var b = c.key, x = u; null !== x; ) {
                                    if (x.key === b) {
                                        if ((b = c.type) === m) {
                                            if (7 === x.tag) {
                                                n(l, x.sibling),
                                                (u = i(x, c.props.children)).return = l,
                                                l = u;
                                                break e
                                            }
                                        } else if (x.elementType === b || "object" == typeof b && null !== b && b.$$typeof === k && nD(b) === x.type) {
                                            n(l, x.sibling),
                                            (u = i(x, c.props)).ref = nz(l, x, c),
                                            u.return = l,
                                            l = u;
                                            break e
                                        }
                                        n(l, x);
                                        break
                                    }
                                    t(l, x),
                                    x = x.sibling
                                }
                                c.type === m ? ((u = oW(c.props.children, l.mode, y, c.key)).return = l,
                                l = u) : ((y = oU(c.type, c.key, c.props, null, l.mode, y)).ref = nz(l, u, c),
                                y.return = l,
                                l = y)
                            }
                            return a(l);
                        case p:
                            e: {
                                for (x = c.key; null !== u; ) {
                                    if (u.key === x) {
                                        if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                            n(l, u.sibling),
                                            (u = i(u, c.children || [])).return = l,
                                            l = u;
                                            break e
                                        }
                                        n(l, u);
                                        break
                                    }
                                    t(l, u),
                                    u = u.sibling
                                }
                                (u = oq(c, l.mode, y)).return = l,
                                l = u
                            }
                            return a(l);
                        case k:
                            return s(l, u, (x = c._init)(c._payload), y)
                        }
                        if (z(c))
                            return function(i, a, s, l) {
                                for (var u = null, c = null, f = a, h = a = 0, p = null; null !== f && h < s.length; h++) {
                                    f.index > h ? (p = f,
                                    f = null) : p = f.sibling;
                                    var m = v(i, f, s[h], l);
                                    if (null === m) {
                                        null === f && (f = p);
                                        break
                                    }
                                    e && f && null === m.alternate && t(i, f),
                                    a = o(m, a, h),
                                    null === c ? u = m : c.sibling = m,
                                    c = m,
                                    f = p
                                }
                                if (h === s.length)
                                    return n(i, f),
                                    nP && ng(i, h),
                                    u;
                                if (null === f) {
                                    for (; h < s.length; h++)
                                        null !== (f = d(i, s[h], l)) && (a = o(f, a, h),
                                        null === c ? u = f : c.sibling = f,
                                        c = f);
                                    return nP && ng(i, h),
                                    u
                                }
                                for (f = r(i, f); h < s.length; h++)
                                    null !== (p = g(f, i, h, s[h], l)) && (e && null !== p.alternate && f.delete(null === p.key ? h : p.key),
                                    a = o(p, a, h),
                                    null === c ? u = p : c.sibling = p,
                                    c = p);
                                return e && f.forEach(function(e) {
                                    return t(i, e)
                                }),
                                nP && ng(i, h),
                                u
                            }(l, u, c, y);
                        if (T(c))
                            return function(i, a, s, l) {
                                var u = T(s);
                                if ("function" != typeof u)
                                    throw Error(f(150));
                                if (null == (s = u.call(s)))
                                    throw Error(f(151));
                                for (var c = u = null, h = a, p = a = 0, m = null, y = s.next(); null !== h && !y.done; p++,
                                y = s.next()) {
                                    h.index > p ? (m = h,
                                    h = null) : m = h.sibling;
                                    var b = v(i, h, y.value, l);
                                    if (null === b) {
                                        null === h && (h = m);
                                        break
                                    }
                                    e && h && null === b.alternate && t(i, h),
                                    a = o(b, a, p),
                                    null === c ? u = b : c.sibling = b,
                                    c = b,
                                    h = m
                                }
                                if (y.done)
                                    return n(i, h),
                                    nP && ng(i, p),
                                    u;
                                if (null === h) {
                                    for (; !y.done; p++,
                                    y = s.next())
                                        null !== (y = d(i, y.value, l)) && (a = o(y, a, p),
                                        null === c ? u = y : c.sibling = y,
                                        c = y);
                                    return nP && ng(i, p),
                                    u
                                }
                                for (h = r(i, h); !y.done; p++,
                                y = s.next())
                                    null !== (y = g(h, i, p, y.value, l)) && (e && null !== y.alternate && h.delete(null === y.key ? p : y.key),
                                    a = o(y, a, p),
                                    null === c ? u = y : c.sibling = y,
                                    c = y);
                                return e && h.forEach(function(e) {
                                    return t(i, e)
                                }),
                                nP && ng(i, p),
                                u
                            }(l, u, c, y);
                        nL(l, c)
                    }
                    return "string" == typeof c && "" !== c || "number" == typeof c ? (c = "" + c,
                    null !== u && 6 === u.tag ? (n(l, u.sibling),
                    (u = i(u, c)).return = l) : (n(l, u),
                    (u = oH(c, l.mode, y)).return = l),
                    a(l = u)) : n(l, u)
                }
            }
            var nI = nN(!0)
              , nF = nN(!1)
              , nV = {}
              , nB = e9(nV)
              , nU = e9(nV)
              , nW = e9(nV);
            function n$(e) {
                if (e === nV)
                    throw Error(f(174));
                return e
            }
            function nH(e, t) {
                te(nW, t),
                te(nU, e),
                te(nB, nV),
                e = D(t),
                e7(nB),
                te(nB, e)
            }
            function nq() {
                e7(nB),
                e7(nU),
                e7(nW)
            }
            function nG(e) {
                var t = n$(nW.current)
                  , n = n$(nB.current);
                t = N(n, e.type, t),
                n !== t && (te(nU, e),
                te(nB, t))
            }
            function nQ(e) {
                nU.current === e && (e7(nB),
                e7(nU))
            }
            var nX = e9(0);
            function nY(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || eI(n) || eF(n)))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var nK = [];
            function nZ() {
                for (var e = 0; e < nK.length; e++) {
                    var t = nK[e];
                    X ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null
                }
                nK.length = 0
            }
            var nJ = d.ReactCurrentDispatcher
              , n0 = d.ReactCurrentBatchConfig
              , n1 = 0
              , n2 = null
              , n3 = null
              , n4 = null
              , n6 = !1
              , n5 = !1
              , n8 = 0
              , n9 = 0;
            function n7() {
                throw Error(f(321))
            }
            function re(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!tD(e[n], t[n]))
                        return !1;
                return !0
            }
            function rt(e, t, n, r, i, o) {
                if (n1 = o,
                n2 = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                nJ.current = null === e || null === e.memoizedState ? rN : rI,
                e = n(r, i),
                n5) {
                    o = 0;
                    do {
                        if (n5 = !1,
                        n8 = 0,
                        25 <= o)
                            throw Error(f(301));
                        o += 1,
                        n4 = n3 = null,
                        t.updateQueue = null,
                        nJ.current = rF,
                        e = n(r, i)
                    } while (n5)
                }
                if (nJ.current = rD,
                t = null !== n3 && null !== n3.next,
                n1 = 0,
                n4 = n3 = n2 = null,
                n6 = !1,
                t)
                    throw Error(f(300));
                return e
            }
            function rn() {
                var e = 0 !== n8;
                return n8 = 0,
                e
            }
            function rr() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === n4 ? n2.memoizedState = n4 = e : n4 = n4.next = e,
                n4
            }
            function ri() {
                if (null === n3) {
                    var e = n2.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = n3.next;
                var t = null === n4 ? n2.memoizedState : n4.next;
                if (null !== t)
                    n4 = t,
                    n3 = e;
                else {
                    if (null === e)
                        throw Error(f(310));
                    e = {
                        memoizedState: (n3 = e).memoizedState,
                        baseState: n3.baseState,
                        baseQueue: n3.baseQueue,
                        queue: n3.queue,
                        next: null
                    },
                    null === n4 ? n2.memoizedState = n4 = e : n4 = n4.next = e
                }
                return n4
            }
            function ro(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            function ra(e) {
                var t = ri()
                  , n = t.queue;
                if (null === n)
                    throw Error(f(311));
                n.lastRenderedReducer = e;
                var r = n3
                  , i = r.baseQueue
                  , o = n.pending;
                if (null !== o) {
                    if (null !== i) {
                        var a = i.next;
                        i.next = o.next,
                        o.next = a
                    }
                    r.baseQueue = i = o,
                    n.pending = null
                }
                if (null !== i) {
                    o = i.next,
                    r = r.baseState;
                    var s = a = null
                      , l = null
                      , u = o;
                    do {
                        var c = u.lane;
                        if ((n1 & c) === c)
                            null !== l && (l = l.next = {
                                lane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }),
                            r = u.hasEagerState ? u.eagerState : e(r, u.action);
                        else {
                            var d = {
                                lane: c,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === l ? (s = l = d,
                            a = r) : l = l.next = d,
                            n2.lanes |= c,
                            i3 |= c
                        }
                        u = u.next
                    } while (null !== u && u !== o);
                    null === l ? a = r : l.next = s,
                    tD(r, t.memoizedState) || (r0 = !0),
                    t.memoizedState = r,
                    t.baseState = a,
                    t.baseQueue = l,
                    n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    i = e;
                    do
                        o = i.lane,
                        n2.lanes |= o,
                        i3 |= o,
                        i = i.next;
                    while (i !== e)
                } else
                    null === i && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }
            function rs(e) {
                var t = ri()
                  , n = t.queue;
                if (null === n)
                    throw Error(f(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , i = n.pending
                  , o = t.memoizedState;
                if (null !== i) {
                    n.pending = null;
                    var a = i = i.next;
                    do
                        o = e(o, a.action),
                        a = a.next;
                    while (a !== i);
                    tD(o, t.memoizedState) || (r0 = !0),
                    t.memoizedState = o,
                    null === t.baseQueue && (t.baseState = o),
                    n.lastRenderedState = o
                }
                return [o, r]
            }
            function rl() {}
            function ru(e, t) {
                var n = n2
                  , r = ri()
                  , i = t()
                  , o = !tD(r.memoizedState, i);
                if (o && (r.memoizedState = i,
                r0 = !0),
                r = r.queue,
                rx(rd.bind(null, n, r, e), [e]),
                r.getSnapshot !== t || o || null !== n4 && 1 & n4.memoizedState.tag) {
                    if (n.flags |= 2048,
                    rm(9, rf.bind(null, n, r, i, t), void 0, null),
                    null === iY)
                        throw Error(f(349));
                    0 != (30 & n1) || rc(n, t, i)
                }
                return i
            }
            function rc(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = n2.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                n2.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function rf(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                rh(t) && oh(e, 1, -1)
            }
            function rd(e, t, n) {
                return n(function() {
                    rh(t) && oh(e, 1, -1)
                })
            }
            function rh(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !tD(e, n)
                } catch (e) {
                    return !0
                }
            }
            function rp(e) {
                var t = rr();
                return "function" == typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: ro,
                    lastRenderedState: e
                },
                t.queue = e,
                e = e.dispatch = rO.bind(null, n2, e),
                [t.memoizedState, e]
            }
            function rm(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = n2.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                n2.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function rv() {
                return ri().memoizedState
            }
            function rg(e, t, n, r) {
                var i = rr();
                n2.flags |= e,
                i.memoizedState = rm(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function ry(e, t, n, r) {
                var i = ri();
                r = void 0 === r ? null : r;
                var o = void 0;
                if (null !== n3) {
                    var a = n3.memoizedState;
                    if (o = a.destroy,
                    null !== r && re(r, a.deps)) {
                        i.memoizedState = rm(t, n, o, r);
                        return
                    }
                }
                n2.flags |= e,
                i.memoizedState = rm(1 | t, n, o, r)
            }
            function rb(e, t) {
                return rg(8390656, 8, e, t)
            }
            function rx(e, t) {
                return ry(2048, 8, e, t)
            }
            function rw(e, t) {
                return ry(4, 2, e, t)
            }
            function rS(e, t) {
                return ry(4, 4, e, t)
            }
            function rP(e, t) {
                return "function" == typeof t ? (t(e = e()),
                function() {
                    t(null)
                }
                ) : null != t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function rk(e, t, n) {
                return n = null != n ? n.concat([e]) : null,
                ry(4, 4, rP.bind(null, t, e), n)
            }
            function rE() {}
            function rC(e, t) {
                var n = ri();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && re(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function rT(e, t) {
                var n = ri();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && re(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function r_(e, t) {
                var n = tP;
                tP = 0 !== n && 4 > n ? n : 4,
                e(!0);
                var r = n0.transition;
                n0.transition = {};
                try {
                    e(!1),
                    t()
                } finally {
                    tP = n,
                    n0.transition = r
                }
            }
            function rM() {
                return ri().memoizedState
            }
            function rj(e, t, n) {
                var r = od(e);
                n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                rA(e) ? rR(t, n) : (rz(e, t, n),
                null !== (e = oh(e, r, n = of())) && rL(e, t, r))
            }
            function rO(e, t, n) {
                var r = od(e)
                  , i = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (rA(e))
                    rR(t, i);
                else {
                    rz(e, t, i);
                    var o = e.alternate;
                    if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                        try {
                            var a = t.lastRenderedState
                              , s = o(a, n);
                            if (i.hasEagerState = !0,
                            i.eagerState = s,
                            tD(s, a))
                                return
                        } catch (e) {} finally {}
                    null !== (e = oh(e, r, n = of())) && rL(e, t, r)
                }
            }
            function rA(e) {
                var t = e.alternate;
                return e === n2 || null !== t && t === n2
            }
            function rR(e, t) {
                n5 = n6 = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function rz(e, t, n) {
                null !== iY && 0 != (1 & e.mode) && 0 == (2 & iX) ? (null === (e = t.interleaved) ? (n.next = n,
                null === t1 ? t1 = [t] : t1.push(t)) : (n.next = e.next,
                e.next = n),
                t.interleaved = n) : (null === (e = t.pending) ? n.next = n : (n.next = e.next,
                e.next = n),
                t.pending = n)
            }
            function rL(e, t, n) {
                if (0 != (4194240 & n)) {
                    var r = t.lanes;
                    r &= e.pendingLanes,
                    n |= r,
                    t.lanes = n,
                    tS(e, n)
                }
            }
            var rD = {
                readContext: t0,
                useCallback: n7,
                useContext: n7,
                useEffect: n7,
                useImperativeHandle: n7,
                useInsertionEffect: n7,
                useLayoutEffect: n7,
                useMemo: n7,
                useReducer: n7,
                useRef: n7,
                useState: n7,
                useDebugValue: n7,
                useDeferredValue: n7,
                useTransition: n7,
                useMutableSource: n7,
                useSyncExternalStore: n7,
                useId: n7,
                unstable_isNewReconciler: !1
            }
              , rN = {
                readContext: t0,
                useCallback: function(e, t) {
                    return rr().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: t0,
                useEffect: rb,
                useImperativeHandle: function(e, t, n) {
                    return n = null != n ? n.concat([e]) : null,
                    rg(4194308, 4, rP.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return rg(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return rg(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = rr();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = rr();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    },
                    r.queue = e,
                    e = e.dispatch = rj.bind(null, n2, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    rr().memoizedState = e
                },
                useState: rp,
                useDebugValue: rE,
                useDeferredValue: function(e) {
                    var t = rp(e)
                      , n = t[0]
                      , r = t[1];
                    return rb(function() {
                        var t = n0.transition;
                        n0.transition = {};
                        try {
                            r(e)
                        } finally {
                            n0.transition = t
                        }
                    }, [e]),
                    n
                },
                useTransition: function() {
                    var e = rp(!1)
                      , t = e[0];
                    return e = r_.bind(null, e[1]),
                    rr().memoizedState = e,
                    [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var r = n2
                      , i = rr();
                    if (nP) {
                        if (void 0 === n)
                            throw Error(f(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === iY)
                            throw Error(f(349));
                        0 != (30 & n1) || rc(r, t, n)
                    }
                    i.memoizedState = n;
                    var o = {
                        value: n,
                        getSnapshot: t
                    };
                    return i.queue = o,
                    rb(rd.bind(null, r, o, e), [e]),
                    r.flags |= 2048,
                    rm(9, rf.bind(null, r, o, n, t), void 0, null),
                    n
                },
                useId: function() {
                    var e = rr()
                      , t = iY.identifierPrefix;
                    if (nP) {
                        var n = nv
                          , r = nm;
                        t = ":" + t + "R" + (n = (r & ~(1 << 32 - td(r) - 1)).toString(32) + n),
                        0 < (n = n8++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = n9++).toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            }
              , rI = {
                readContext: t0,
                useCallback: rC,
                useContext: t0,
                useEffect: rx,
                useImperativeHandle: rk,
                useInsertionEffect: rw,
                useLayoutEffect: rS,
                useMemo: rT,
                useReducer: ra,
                useRef: rv,
                useState: function() {
                    return ra(ro)
                },
                useDebugValue: rE,
                useDeferredValue: function(e) {
                    var t = ra(ro)
                      , n = t[0]
                      , r = t[1];
                    return rx(function() {
                        var t = n0.transition;
                        n0.transition = {};
                        try {
                            r(e)
                        } finally {
                            n0.transition = t
                        }
                    }, [e]),
                    n
                },
                useTransition: function() {
                    return [ra(ro)[0], ri().memoizedState]
                },
                useMutableSource: rl,
                useSyncExternalStore: ru,
                useId: rM,
                unstable_isNewReconciler: !1
            }
              , rF = {
                readContext: t0,
                useCallback: rC,
                useContext: t0,
                useEffect: rx,
                useImperativeHandle: rk,
                useInsertionEffect: rw,
                useLayoutEffect: rS,
                useMemo: rT,
                useReducer: rs,
                useRef: rv,
                useState: function() {
                    return rs(ro)
                },
                useDebugValue: rE,
                useDeferredValue: function(e) {
                    var t = rs(ro)
                      , n = t[0]
                      , r = t[1];
                    return rx(function() {
                        var t = n0.transition;
                        n0.transition = {};
                        try {
                            r(e)
                        } finally {
                            n0.transition = t
                        }
                    }, [e]),
                    n
                },
                useTransition: function() {
                    return [rs(ro)[0], ri().memoizedState]
                },
                useMutableSource: rl,
                useSyncExternalStore: ru,
                useId: rM,
                unstable_isNewReconciler: !1
            };
            function rV(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do
                        n += function(e) {
                            switch (e.tag) {
                            case 5:
                                return e2(e.type);
                            case 16:
                                return e2("Lazy");
                            case 13:
                                return e2("Suspense");
                            case 19:
                                return e2("SuspenseList");
                            case 0:
                            case 2:
                            case 15:
                                return e = e4(e.type, !1);
                            case 11:
                                return e = e4(e.type.render, !1);
                            case 1:
                                return e = e4(e.type, !0);
                            default:
                                return ""
                            }
                        }(r),
                        r = r.return;
                    while (r);
                    var i = n
                } catch (e) {
                    i = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: i
                }
            }
            function rB(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    })
                }
            }
            var rU = "function" == typeof WeakMap ? WeakMap : Map;
            function rW(e, t, n) {
                (n = t6(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    ot || (ot = !0,
                    on = r),
                    rB(e, t)
                }
                ,
                n
            }
            function r$(e, t, n) {
                (n = t6(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var i = t.value;
                    n.payload = function() {
                        return r(i)
                    }
                    ,
                    n.callback = function() {
                        rB(e, t)
                    }
                }
                var o = e.stateNode;
                return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
                    rB(e, t),
                    "function" != typeof r && (null === or ? or = new Set([this]) : or.add(this));
                    var n = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== n ? n : ""
                    })
                }
                ),
                n
            }
            function rH(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new rU;
                    var i = new Set;
                    r.set(t, i)
                } else
                    void 0 === (i = r.get(t)) && (i = new Set,
                    r.set(t, i));
                i.has(n) || (i.add(n),
                e = oz.bind(null, e, t, n),
                t.then(e, e))
            }
            function rq(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                    t)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function rG(e, t, n, r, i) {
                return 0 == (1 & e.mode) ? e === t ? e.flags |= 65536 : (e.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = t6(-1, 1)).tag = 2,
                t5(n, t))),
                n.lanes |= 1) : (e.flags |= 65536,
                e.lanes = i),
                e
            }
            function rQ(e) {
                e.flags |= 4
            }
            function rX(e, t) {
                if (null !== e && e.child === t.child)
                    return !0;
                if (0 != (16 & t.flags))
                    return !1;
                for (e = t.child; null !== e; ) {
                    if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags))
                        return !1;
                    e = e.sibling
                }
                return !0
            }
            if (Y)
                t = function(e, t) {
                    for (var n = t.child; null !== n; ) {
                        if (5 === n.tag || 6 === n.tag)
                            B(e, n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n,
                            n = n.child;
                            continue
                        }
                        if (n === t)
                            break;
                        for (; null === n.sibling; ) {
                            if (null === n.return || n.return === t)
                                return;
                            n = n.return
                        }
                        n.sibling.return = n.return,
                        n = n.sibling
                    }
                }
                ,
                r = function() {}
                ,
                i = function(e, t, n, r, i) {
                    (e = e.memoizedProps) !== r && (n = W(t.stateNode, n, e, r, i, n$(nB.current)),
                    (t.updateQueue = n) && rQ(t))
                }
                ,
                o = function(e, t, n, r) {
                    n !== r && rQ(t)
                }
                ;
            else if (K) {
                t = function(e, n, r, i) {
                    for (var o = n.child; null !== o; ) {
                        if (5 === o.tag) {
                            var a = o.stateNode;
                            r && i && (a = eR(a, o.type, o.memoizedProps, o)),
                            B(e, a)
                        } else if (6 === o.tag)
                            a = o.stateNode,
                            r && i && (a = ez(a, o.memoizedProps, o)),
                            B(e, a);
                        else if (4 !== o.tag) {
                            if (22 === o.tag && null !== o.memoizedState)
                                null !== (a = o.child) && (a.return = o),
                                t(e, o, !0, !0);
                            else if (null !== o.child) {
                                o.child.return = o,
                                o = o.child;
                                continue
                            }
                        }
                        if (o === n)
                            break;
                        for (; null === o.sibling; ) {
                            if (null === o.return || o.return === n)
                                return;
                            o = o.return
                        }
                        o.sibling.return = o.return,
                        o = o.sibling
                    }
                }
                ;
                var rY = function(e, t, n, r) {
                    for (var i = t.child; null !== i; ) {
                        if (5 === i.tag) {
                            var o = i.stateNode;
                            n && r && (o = eR(o, i.type, i.memoizedProps, i)),
                            ej(e, o)
                        } else if (6 === i.tag)
                            o = i.stateNode,
                            n && r && (o = ez(o, i.memoizedProps, i)),
                            ej(e, o);
                        else if (4 !== i.tag) {
                            if (22 === i.tag && null !== i.memoizedState)
                                null !== (o = i.child) && (o.return = i),
                                rY(e, i, !0, !0);
                            else if (null !== i.child) {
                                i.child.return = i,
                                i = i.child;
                                continue
                            }
                        }
                        if (i === t)
                            break;
                        for (; null === i.sibling; ) {
                            if (null === i.return || i.return === t)
                                return;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                };
                r = function(e, t) {
                    var n = t.stateNode;
                    if (!rX(e, t)) {
                        var r = eM(e = n.containerInfo);
                        rY(r, t, !1, !1),
                        n.pendingChildren = r,
                        rQ(t),
                        eO(e, r)
                    }
                }
                ,
                i = function(e, n, r, i, o) {
                    var a = e.stateNode
                      , s = e.memoizedProps;
                    if ((e = rX(e, n)) && s === i)
                        n.stateNode = a;
                    else {
                        var l = n.stateNode
                          , u = n$(nB.current)
                          , c = null;
                        s !== i && (c = W(l, r, s, i, o, u)),
                        e && null === c ? n.stateNode = a : (U(a = e_(a, c, r, s, i, n, e, l), r, i, o, u) && rQ(n),
                        n.stateNode = a,
                        e ? rQ(n) : t(a, n, !1, !1))
                    }
                }
                ,
                o = function(e, t, n, r) {
                    n !== r ? (e = n$(nW.current),
                    n = n$(nB.current),
                    t.stateNode = H(r, e, n, t),
                    rQ(t)) : t.stateNode = e.stateNode
                }
            } else
                r = function() {}
                ,
                i = function() {}
                ,
                o = function() {}
                ;
            function rK(e, t) {
                if (!nP)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function rZ(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var i = e.child; null !== i; )
                        n |= i.lanes | i.childLanes,
                        r |= 14680064 & i.subtreeFlags,
                        r |= 14680064 & i.flags,
                        i.return = e,
                        i = i.sibling;
                else
                    for (i = e.child; null !== i; )
                        n |= i.lanes | i.childLanes,
                        r |= i.subtreeFlags,
                        r |= i.flags,
                        i.return = e,
                        i = i.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            var rJ = d.ReactCurrentOwner
              , r0 = !1;
            function r1(e, t, n, r) {
                t.child = null === e ? nF(t, null, n, r) : nI(t, e.child, n, r)
            }
            function r2(e, t, n, r, i) {
                n = n.render;
                var o = t.ref;
                return (tJ(t, i),
                r = rt(e, t, n, r, o, i),
                n = rn(),
                null === e || r0) ? (nP && n && nb(t),
                t.flags |= 1,
                r1(e, t, r, i),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~i,
                id(e, t, i))
            }
            function r3(e, t, n, r, i) {
                if (null === e) {
                    var o = n.type;
                    return "function" != typeof o || oV(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = oU(n.type, null, r, t, t.mode, i)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = o,
                    r4(e, t, o, r, i))
                }
                if (o = e.child,
                0 == (e.lanes & i)) {
                    var a = o.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : tW)(a, r) && e.ref === t.ref)
                        return id(e, t, i)
                }
                return t.flags |= 1,
                (e = oB(o, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function r4(e, t, n, r, i) {
                if (null !== e && tW(e.memoizedProps, r) && e.ref === t.ref) {
                    if (r0 = !1,
                    0 == (e.lanes & i))
                        return t.lanes = e.lanes,
                        id(e, t, i);
                    0 != (131072 & e.flags) && (r0 = !0)
                }
                return r8(e, t, n, r, i)
            }
            function r6(e, t, n) {
                var r = t.pendingProps
                  , i = r.children
                  , o = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode) {
                    if (0 == (1 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        },
                        te(i0, iJ),
                        iJ |= n;
                    else {
                        if (0 == (1073741824 & n))
                            return e = null !== o ? o.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e,
                                cachePool: null
                            },
                            t.updateQueue = null,
                            te(i0, iJ),
                            iJ |= e,
                            null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        },
                        r = null !== o ? o.baseLanes : n,
                        te(i0, iJ),
                        iJ |= r
                    }
                } else
                    null !== o ? (r = o.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    te(i0, iJ),
                    iJ |= r;
                return r1(e, t, i, n),
                t.child
            }
            function r5(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512,
                t.flags |= 2097152)
            }
            function r8(e, t, n, r, i) {
                var o = ta(n) ? ti : tn.current;
                return (o = to(t, o),
                tJ(t, i),
                n = rt(e, t, n, r, o, i),
                r = rn(),
                null === e || r0) ? (nP && r && nb(t),
                t.flags |= 1,
                r1(e, t, n, i),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~i,
                id(e, t, i))
            }
            function r9(e, t, n, r, i) {
                if (ta(n)) {
                    var o = !0;
                    tc(t)
                } else
                    o = !1;
                if (tJ(t, i),
                null === t.stateNode)
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    no(t, n, r),
                    ns(t, n, r, i),
                    r = !0;
                else if (null === e) {
                    var a = t.stateNode
                      , s = t.memoizedProps;
                    a.props = s;
                    var l = a.context
                      , u = n.contextType;
                    u = "object" == typeof u && null !== u ? t0(u) : to(t, u = ta(n) ? ti : tn.current);
                    var c = n.getDerivedStateFromProps
                      , f = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
                    f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== u) && na(t, a, r, u),
                    t2 = !1;
                    var d = t.memoizedState;
                    a.state = d,
                    t7(t, r, a, i),
                    l = t.memoizedState,
                    s !== r || d !== l || tr.current || t2 ? ("function" == typeof c && (nn(t, n, c, r),
                    l = t.memoizedState),
                    (s = t2 || ni(t, n, s, r, d, l, u)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                    "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = l),
                    a.props = r,
                    a.state = l,
                    a.context = u,
                    r = s) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    a = t.stateNode,
                    t4(e, t),
                    s = t.memoizedProps,
                    u = t.type === t.elementType ? s : t$(t.type, s),
                    a.props = u,
                    f = t.pendingProps,
                    d = a.context,
                    l = "object" == typeof (l = n.contextType) && null !== l ? t0(l) : to(t, l = ta(n) ? ti : tn.current);
                    var h = n.getDerivedStateFromProps;
                    (c = "function" == typeof h || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== f || d !== l) && na(t, a, r, l),
                    t2 = !1,
                    d = t.memoizedState,
                    a.state = d,
                    t7(t, r, a, i);
                    var p = t.memoizedState;
                    s !== f || d !== p || tr.current || t2 ? ("function" == typeof h && (nn(t, n, h, r),
                    p = t.memoizedState),
                    (u = t2 || ni(t, n, u, r, d, p, l) || !1) ? (c || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, l),
                    "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = p),
                    a.props = r,
                    a.state = p,
                    a.context = l,
                    r = u) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return r7(e, t, n, r, o, i)
            }
            function r7(e, t, n, r, i, o) {
                r5(e, t);
                var a = 0 != (128 & t.flags);
                if (!r && !a)
                    return i && tf(t, n, !1),
                    id(e, t, o);
                r = t.stateNode,
                rJ.current = t;
                var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && a ? (t.child = nI(t, e.child, null, o),
                t.child = nI(t, null, s, o)) : r1(e, t, s, o),
                t.memoizedState = r.state,
                i && tf(t, n, !0),
                t.child
            }
            function ie(e) {
                var t = e.stateNode;
                t.pendingContext ? tl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tl(e, t.context, !1),
                nH(e, t.containerInfo)
            }
            function it(e, t, n, r, i) {
                return nA(),
                nR(i),
                t.flags |= 256,
                r1(e, t, n, r),
                t.child
            }
            var ir = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function ii(e) {
                return {
                    baseLanes: e,
                    cachePool: null
                }
            }
            function io(e, t, n) {
                var r, i, o, a, s, l, u, c, d, h, p, m, v, g, y = t.pendingProps, b = nX.current, x = !1, w = 0 != (128 & t.flags);
                if ((g = w) || (g = (null === e || null !== e.memoizedState) && 0 != (2 & b)),
                g ? (x = !0,
                t.flags &= -129) : (null === e || null !== e.memoizedState) && (b |= 1),
                te(nX, 1 & b),
                null === e)
                    return (nM(t),
                    null !== (e = t.memoizedState) && null !== (e = e.dehydrated)) ? (0 == (1 & t.mode) ? t.lanes = 1 : eF(e) ? t.lanes = 8 : t.lanes = 1073741824,
                    null) : (b = y.children,
                    e = y.fallback,
                    x ? (y = t.mode,
                    x = t.child,
                    b = {
                        mode: "hidden",
                        children: b
                    },
                    0 == (1 & y) && null !== x ? (x.childLanes = 0,
                    x.pendingProps = b) : x = o$(b, y, 0, null),
                    e = oW(e, y, n, null),
                    x.return = t,
                    e.return = t,
                    x.sibling = e,
                    t.child = x,
                    t.child.memoizedState = ii(n),
                    t.memoizedState = ir,
                    e) : ia(t, b));
                if (null !== (b = e.memoizedState) && null !== (g = b.dehydrated)) {
                    if (w)
                        return 256 & t.flags ? (t.flags &= -257,
                        is(e, t, n, Error(f(422)))) : null !== t.memoizedState ? (t.child = e.child,
                        t.flags |= 128,
                        null) : (x = y.fallback,
                        b = t.mode,
                        y = o$({
                            mode: "visible",
                            children: y.children
                        }, b, 0, null),
                        x = oW(x, b, n, null),
                        x.flags |= 2,
                        y.return = t,
                        x.return = t,
                        y.sibling = x,
                        t.child = y,
                        0 != (1 & t.mode) && nI(t, e.child, null, n),
                        t.child.memoizedState = ii(n),
                        t.memoizedState = ir,
                        x);
                    if (0 == (1 & t.mode))
                        t = is(e, t, n, null);
                    else if (eF(g))
                        t = is(e, t, n, Error(f(419)));
                    else if (y = 0 != (n & e.childLanes),
                    r0 || y) {
                        if (null !== (y = iY)) {
                            switch (n & -n) {
                            case 4:
                                x = 2;
                                break;
                            case 16:
                                x = 8;
                                break;
                            case 64:
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                            case 4194304:
                            case 8388608:
                            case 16777216:
                            case 33554432:
                            case 67108864:
                                x = 32;
                                break;
                            case 536870912:
                                x = 268435456;
                                break;
                            default:
                                x = 0
                            }
                            0 !== (y = 0 != (x & (y.suspendedLanes | n)) ? 0 : x) && y !== b.retryLane && (b.retryLane = y,
                            oh(e, y, -1))
                        }
                        oC(),
                        t = is(e, t, n, Error(f(421)))
                    } else
                        eI(g) ? (t.flags |= 128,
                        t.child = e.child,
                        eV(g, t = oD.bind(null, e)),
                        t = null) : (n = b.treeContext,
                        Z && (nS = e$(g),
                        nw = t,
                        nP = !0,
                        nE = null,
                        nk = !1,
                        null !== n && (nd[nh++] = nm,
                        nd[nh++] = nv,
                        nd[nh++] = np,
                        nm = n.id,
                        nv = n.overflow,
                        np = t)),
                        t = ia(t, t.pendingProps.children),
                        t.flags |= 4096);
                    return t
                }
                return x ? (r = e,
                i = t,
                o = y.children,
                a = y.fallback,
                s = n,
                l = i.mode,
                u = (r = r.child).sibling,
                c = {
                    mode: "hidden",
                    children: o
                },
                0 == (1 & l) && i.child !== r ? ((o = i.child).childLanes = 0,
                o.pendingProps = c,
                i.deletions = null) : (o = oB(r, c)).subtreeFlags = 14680064 & r.subtreeFlags,
                null !== u ? a = oB(u, a) : (a = oW(a, l, s, null),
                a.flags |= 2),
                a.return = i,
                o.return = i,
                o.sibling = a,
                i.child = o,
                y = a,
                x = t.child,
                b = e.child.memoizedState,
                x.memoizedState = null === b ? ii(n) : {
                    baseLanes: b.baseLanes | n,
                    cachePool: null
                },
                x.childLanes = e.childLanes & ~n,
                t.memoizedState = ir,
                y) : (d = e,
                h = t,
                p = y.children,
                m = n,
                d = (v = d.child).sibling,
                p = oB(v, {
                    mode: "visible",
                    children: p
                }),
                0 == (1 & h.mode) && (p.lanes = m),
                p.return = h,
                p.sibling = null,
                null !== d && (null === (m = h.deletions) ? (h.deletions = [d],
                h.flags |= 16) : m.push(d)),
                n = h.child = p,
                t.memoizedState = null,
                n)
            }
            function ia(e, t) {
                return (t = o$({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e,
                e.child = t
            }
            function is(e, t, n, r) {
                return null !== r && nR(r),
                nI(t, e.child, null, n),
                e = ia(t, t.pendingProps.children),
                e.flags |= 2,
                t.memoizedState = null,
                e
            }
            function il(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                tZ(e.return, t, n)
            }
            function iu(e, t, n, r, i) {
                var o = e.memoizedState;
                null === o ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: i
                } : (o.isBackwards = t,
                o.rendering = null,
                o.renderingStartTime = 0,
                o.last = r,
                o.tail = n,
                o.tailMode = i)
            }
            function ic(e, t, n) {
                var r = t.pendingProps
                  , i = r.revealOrder
                  , o = r.tail;
                if (r1(e, t, r.children, n),
                0 != (2 & (r = nX.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 != (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && il(e, n, t);
                            else if (19 === e.tag)
                                il(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (te(nX, r),
                0 == (1 & t.mode))
                    t.memoizedState = null;
                else
                    switch (i) {
                    case "forwards":
                        for (i = null,
                        n = t.child; null !== n; )
                            null !== (e = n.alternate) && null === nY(e) && (i = n),
                            n = n.sibling;
                        null === (n = i) ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                        n.sibling = null),
                        iu(t, !1, i, n, o);
                        break;
                    case "backwards":
                        for (n = null,
                        i = t.child,
                        t.child = null; null !== i; ) {
                            if (null !== (e = i.alternate) && null === nY(e)) {
                                t.child = i;
                                break
                            }
                            e = i.sibling,
                            i.sibling = n,
                            n = i,
                            i = e
                        }
                        iu(t, !0, n, null, o);
                        break;
                    case "together":
                        iu(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function id(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                i3 |= t.lanes,
                0 == (n & t.childLanes))
                    return null;
                if (null !== e && t.child !== e.child)
                    throw Error(f(153));
                if (null !== t.child) {
                    for (n = oB(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = oB(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            var ih = !1
              , ip = !1
              , im = "function" == typeof WeakSet ? WeakSet : Set
              , iv = null;
            function ig(e, t) {
                var n = e.ref;
                if (null !== n) {
                    if ("function" == typeof n)
                        try {
                            n(null)
                        } catch (n) {
                            oR(e, t, n)
                        }
                    else
                        n.current = null
                }
            }
            function iy(e, t, n) {
                try {
                    n()
                } catch (n) {
                    oR(e, t, n)
                }
            }
            var ib = !1;
            function ix(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var i = r = r.next;
                    do {
                        if ((i.tag & e) === e) {
                            var o = i.destroy;
                            i.destroy = void 0,
                            void 0 !== o && iy(t, n, o)
                        }
                        i = i.next
                    } while (i !== r)
                }
            }
            function iw(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function iS(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e = 5 === e.tag ? L(n) : n,
                    "function" == typeof t ? t(e) : t.current = e
                }
            }
            function iP(e, t, n) {
                if (tL && "function" == typeof tL.onCommitFiberUnmount)
                    try {
                        tL.onCommitFiberUnmount(tz, t)
                    } catch (e) {}
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                        var r = e = e.next;
                        do {
                            var i = r
                              , o = i.destroy;
                            i = i.tag,
                            void 0 !== o && (0 != (2 & i) ? iy(t, n, o) : 0 != (4 & i) && iy(t, n, o)),
                            r = r.next
                        } while (r !== e)
                    }
                    break;
                case 1:
                    if (ig(t, n),
                    "function" == typeof (e = t.stateNode).componentWillUnmount)
                        try {
                            e.props = t.memoizedProps,
                            e.state = t.memoizedState,
                            e.componentWillUnmount()
                        } catch (e) {
                            oR(t, n, e)
                        }
                    break;
                case 5:
                    ig(t, n);
                    break;
                case 4:
                    Y ? i_(e, t, n) : K && K && (n = eM(t = t.stateNode.containerInfo),
                    eA(t, n))
                }
            }
            function ik(e, t, n) {
                for (var r = t; ; )
                    if (iP(e, r, n),
                    null === r.child || Y && 4 === r.tag) {
                        if (r === t)
                            break;
                        for (; null === r.sibling; ) {
                            if (null === r.return || r.return === t)
                                return;
                            r = r.return
                        }
                        r.sibling.return = r.return,
                        r = r.sibling
                    } else
                        r.child.return = r,
                        r = r.child
            }
            function iE(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function iC(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || iE(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags || null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function iT(e) {
                if (Y) {
                    e: {
                        for (var t = e.return; null !== t; ) {
                            if (iE(t))
                                break e;
                            t = t.return
                        }
                        throw Error(f(160))
                    }
                    var n = t;
                    switch (n.tag) {
                    case 5:
                        t = n.stateNode,
                        32 & n.flags && (eS(t),
                        n.flags &= -33),
                        n = iC(e),
                        function e(t, n, r) {
                            var i = t.tag;
                            if (5 === i || 6 === i)
                                t = t.stateNode,
                                n ? ey(r, t, n) : eh(r, t);
                            else if (4 !== i && null !== (t = t.child))
                                for (e(t, n, r),
                                t = t.sibling; null !== t; )
                                    e(t, n, r),
                                    t = t.sibling
                        }(e, n, t);
                        break;
                    case 3:
                    case 4:
                        t = n.stateNode.containerInfo,
                        n = iC(e),
                        function e(t, n, r) {
                            var i = t.tag;
                            if (5 === i || 6 === i)
                                t = t.stateNode,
                                n ? eb(r, t, n) : ep(r, t);
                            else if (4 !== i && null !== (t = t.child))
                                for (e(t, n, r),
                                t = t.sibling; null !== t; )
                                    e(t, n, r),
                                    t = t.sibling
                        }(e, n, t);
                        break;
                    default:
                        throw Error(f(161))
                    }
                }
            }
            function i_(e, t, n) {
                for (var r, i, o = t, a = !1; ; ) {
                    if (!a) {
                        a = o.return;
                        e: for (; ; ) {
                            if (null === a)
                                throw Error(f(160));
                            switch (r = a.stateNode,
                            a.tag) {
                            case 5:
                                i = !1;
                                break e;
                            case 3:
                            case 4:
                                r = r.containerInfo,
                                i = !0;
                                break e
                            }
                            a = a.return
                        }
                        a = !0
                    }
                    if (5 === o.tag || 6 === o.tag)
                        ik(e, o, n),
                        i ? ew(r, o.stateNode) : ex(r, o.stateNode);
                    else if (18 === o.tag)
                        i ? eZ(r, o.stateNode) : eK(r, o.stateNode);
                    else if (4 === o.tag) {
                        if (null !== o.child) {
                            r = o.stateNode.containerInfo,
                            i = !0,
                            o.child.return = o,
                            o = o.child;
                            continue
                        }
                    } else if (iP(e, o, n),
                    null !== o.child) {
                        o.child.return = o,
                        o = o.child;
                        continue
                    }
                    if (o === t)
                        break;
                    for (; null === o.sibling; ) {
                        if (null === o.return || o.return === t)
                            return;
                        4 === (o = o.return).tag && (a = !1)
                    }
                    o.sibling.return = o.return,
                    o = o.sibling
                }
            }
            function iM(e, t) {
                if (Y) {
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        ix(3, t, t.return),
                        iw(3, t),
                        ix(5, t, t.return);
                        return;
                    case 1:
                    case 12:
                    case 17:
                        return;
                    case 5:
                        var n = t.stateNode;
                        if (null != n) {
                            var r = t.memoizedProps;
                            e = null !== e ? e.memoizedProps : r;
                            var i = t.type
                              , o = t.updateQueue;
                            t.updateQueue = null,
                            null !== o && eg(n, o, i, e, r, t)
                        }
                        return;
                    case 6:
                        if (null === t.stateNode)
                            throw Error(f(162));
                        n = t.memoizedProps,
                        em(t.stateNode, null !== e ? e.memoizedProps : n, n);
                        return;
                    case 3:
                        Z && null !== e && e.memoizedState.isDehydrated && eX(t.stateNode.containerInfo);
                        return;
                    case 13:
                    case 19:
                        ij(t);
                        return
                    }
                    throw Error(f(163))
                }
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ix(3, t, t.return),
                    iw(3, t),
                    ix(5, t, t.return);
                    return;
                case 12:
                case 22:
                case 23:
                    return;
                case 13:
                case 19:
                    ij(t);
                    return;
                case 3:
                    Z && null !== e && e.memoizedState.isDehydrated && eX(t.stateNode.containerInfo)
                }
                e: if (K) {
                    switch (t.tag) {
                    case 1:
                    case 5:
                    case 6:
                        break e;
                    case 3:
                    case 4:
                        eA((t = t.stateNode).containerInfo, t.pendingChildren);
                        break e
                    }
                    throw Error(f(163))
                }
            }
            function ij(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new im),
                    t.forEach(function(t) {
                        var r = oN.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    })
                }
            }
            function iO(e) {
                for (; null !== iv; ) {
                    var t = iv;
                    if (0 != (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 != (8772 & t.flags))
                                switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ip || iw(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !ip) {
                                        if (null === n)
                                            r.componentDidMount();
                                        else {
                                            var i = t.elementType === t.type ? n.memoizedProps : t$(t.type, n.memoizedProps);
                                            r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    }
                                    var o = t.updateQueue;
                                    null !== o && ne(t, o, r);
                                    break;
                                case 3:
                                    var a = t.updateQueue;
                                    if (null !== a) {
                                        if (n = null,
                                        null !== t.child)
                                            switch (t.child.tag) {
                                            case 5:
                                                n = L(t.child.stateNode);
                                                break;
                                            case 1:
                                                n = t.child.stateNode
                                            }
                                        ne(t, a, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    null === n && 4 & t.flags && ev(s, t.type, t.memoizedProps, t);
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                    break;
                                case 13:
                                    if (Z && null === t.memoizedState) {
                                        var l = t.alternate;
                                        if (null !== l) {
                                            var u = l.memoizedState;
                                            if (null !== u) {
                                                var c = u.dehydrated;
                                                null !== c && eY(c)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(f(163))
                                }
                            ip || 512 & t.flags && iS(t)
                        } catch (e) {
                            oR(t, t.return, e)
                        }
                    }
                    if (t === e) {
                        iv = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return,
                        iv = n;
                        break
                    }
                    iv = t.return
                }
            }
            function iA(e) {
                for (; null !== iv; ) {
                    var t = iv;
                    if (t === e) {
                        iv = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return,
                        iv = n;
                        break
                    }
                    iv = t.return
                }
            }
            function iR(e) {
                for (; null !== iv; ) {
                    var t = iv;
                    try {
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                iw(4, t)
                            } catch (e) {
                                oR(t, n, e)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if ("function" == typeof r.componentDidMount) {
                                var i = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (e) {
                                    oR(t, i, e)
                                }
                            }
                            var o = t.return;
                            try {
                                iS(t)
                            } catch (e) {
                                oR(t, o, e)
                            }
                            break;
                        case 5:
                            var a = t.return;
                            try {
                                iS(t)
                            } catch (e) {
                                oR(t, a, e)
                            }
                        }
                    } catch (e) {
                        oR(t, t.return, e)
                    }
                    if (t === e) {
                        iv = null;
                        break
                    }
                    var s = t.sibling;
                    if (null !== s) {
                        s.return = t.return,
                        iv = s;
                        break
                    }
                    iv = t.return
                }
            }
            var iz = 0
              , iL = 1
              , iD = 2
              , iN = 3
              , iI = 4;
            if ("function" == typeof Symbol && Symbol.for) {
                var iF = Symbol.for;
                iz = iF("selector.component"),
                iL = iF("selector.has_pseudo_class"),
                iD = iF("selector.role"),
                iN = iF("selector.test_id"),
                iI = iF("selector.text")
            }
            function iV(e) {
                var t = J(e);
                if (null != t) {
                    if ("string" != typeof t.memoizedProps["data-testname"])
                        throw Error(f(364));
                    return t
                }
                if (null === (e = ea(e)))
                    throw Error(f(362));
                return e.stateNode.current
            }
            function iB(e, t) {
                switch (t.$$typeof) {
                case iz:
                    if (e.type === t.value)
                        return !0;
                    break;
                case iL:
                    e: {
                        t = t.value,
                        e = [e, 0];
                        for (var n = 0; n < e.length; ) {
                            var r = e[n++]
                              , i = e[n++]
                              , o = t[i];
                            if (5 !== r.tag || !eu(r)) {
                                for (; null != o && iB(r, o); )
                                    o = t[++i];
                                if (i === t.length) {
                                    t = !0;
                                    break e
                                }
                                for (r = r.child; null !== r; )
                                    e.push(r, i),
                                    r = r.sibling
                            }
                        }
                        t = !1
                    }
                    return t;
                case iD:
                    if (5 === e.tag && ec(e.stateNode, t.value))
                        return !0;
                    break;
                case iI:
                    if ((5 === e.tag || 6 === e.tag) && null !== (e = el(e)) && 0 <= e.indexOf(t.value))
                        return !0;
                    break;
                case iN:
                    if (5 === e.tag && "string" == typeof (e = e.memoizedProps["data-testname"]) && e.toLowerCase() === t.value.toLowerCase())
                        return !0;
                    break;
                default:
                    throw Error(f(365))
                }
                return !1
            }
            function iU(e) {
                switch (e.$$typeof) {
                case iz:
                    return "<" + (_(e.value) || "Unknown") + ">";
                case iL:
                    return ":has(" + (iU(e) || "") + ")";
                case iD:
                    return '[role="' + e.value + '"]';
                case iI:
                    return '"' + e.value + '"';
                case iN:
                    return '[data-testname="' + e.value + '"]';
                default:
                    throw Error(f(365))
                }
            }
            function iW(e, t) {
                var n = [];
                e = [e, 0];
                for (var r = 0; r < e.length; ) {
                    var i = e[r++]
                      , o = e[r++]
                      , a = t[o];
                    if (5 !== i.tag || !eu(i)) {
                        for (; null != a && iB(i, a); )
                            a = t[++o];
                        if (o === t.length)
                            n.push(i);
                        else
                            for (i = i.child; null !== i; )
                                e.push(i, o),
                                i = i.sibling
                    }
                }
                return n
            }
            function i$(e, t) {
                if (!eo)
                    throw Error(f(363));
                e = iW(e = iV(e), t),
                t = [],
                e = Array.from(e);
                for (var n = 0; n < e.length; ) {
                    var r = e[n++];
                    if (5 === r.tag)
                        eu(r) || t.push(r.stateNode);
                    else
                        for (r = r.child; null !== r; )
                            e.push(r),
                            r = r.sibling
                }
                return t
            }
            var iH = Math.ceil
              , iq = d.ReactCurrentDispatcher
              , iG = d.ReactCurrentOwner
              , iQ = d.ReactCurrentBatchConfig
              , iX = 0
              , iY = null
              , iK = null
              , iZ = 0
              , iJ = 0
              , i0 = e9(0)
              , i1 = 0
              , i2 = null
              , i3 = 0
              , i4 = 0
              , i6 = 0
              , i5 = null
              , i8 = null
              , i9 = 0
              , i7 = 1 / 0;
            function oe() {
                i7 = tM() + 500
            }
            var ot = !1
              , on = null
              , or = null
              , oi = !1
              , oo = null
              , oa = 0
              , os = 0
              , ol = null
              , ou = -1
              , oc = 0;
            function of() {
                return 0 != (6 & iX) ? tM() : -1 !== ou ? ou : ou = tM()
            }
            function od(e) {
                return 0 == (1 & e.mode) ? 1 : 0 != (2 & iX) && 0 !== iZ ? iZ & -iZ : null !== tU.transition ? (0 === oc && (e = tm,
                0 == (4194240 & (tm <<= 1)) && (tm = 64),
                oc = e),
                oc) : 0 !== (e = tP) ? e : et()
            }
            function oh(e, t, n) {
                if (50 < os)
                    throw os = 0,
                    ol = null,
                    Error(f(185));
                var r = op(e, t);
                return null === r ? null : (tw(r, t, n),
                (0 == (2 & iX) || r !== iY) && (r === iY && (0 == (2 & iX) && (i4 |= t),
                4 === i1 && ob(r, iZ)),
                om(r, n),
                1 === t && 0 === iX && 0 == (1 & e.mode) && (oe(),
                tI && tB())),
                r)
            }
            function op(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            function om(e, t) {
                var n, r = e.callbackNode;
                !function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
                        var a = 31 - td(o)
                          , s = 1 << a
                          , l = i[a];
                        -1 === l ? (0 == (s & n) || 0 != (s & r)) && (i[a] = function(e, t) {
                            switch (e) {
                            case 1:
                            case 2:
                            case 4:
                                return t + 250;
                            case 8:
                            case 16:
                            case 32:
                            case 64:
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                                return t + 5e3;
                            default:
                                return -1
                            }
                        }(s, t)) : l <= t && (e.expiredLanes |= s),
                        o &= ~s
                    }
                }(e, t);
                var i = ty(e, e === iY ? iZ : 0);
                if (0 === i)
                    null !== r && tC(r),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (t = i & -i,
                e.callbackPriority !== t) {
                    if (null != r && tC(r),
                    1 === t)
                        0 === e.tag ? (n = ox.bind(null, e),
                        tI = !0,
                        tV(n)) : tV(ox.bind(null, e)),
                        er ? ei(function() {
                            0 === iX && tB()
                        }) : tE(tj, tB),
                        r = null;
                    else {
                        switch (tk(i)) {
                        case 1:
                            r = tj;
                            break;
                        case 4:
                            r = tO;
                            break;
                        case 16:
                        default:
                            r = tA;
                            break;
                        case 536870912:
                            r = tR
                        }
                        r = tE(r, ov.bind(null, e))
                    }
                    e.callbackPriority = t,
                    e.callbackNode = r
                }
            }
            function ov(e, t) {
                if (ou = -1,
                oc = 0,
                0 != (6 & iX))
                    throw Error(f(327));
                var n = e.callbackNode;
                if (oO() && e.callbackNode !== n)
                    return null;
                var r = ty(e, e === iY ? iZ : 0);
                if (0 === r)
                    return null;
                if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
                    t = oT(e, r);
                else {
                    t = r;
                    var i = iX;
                    iX |= 2;
                    var o = oE();
                    for ((iY !== e || iZ !== t) && (oe(),
                    oP(e, t)); ; )
                        try {
                            !function() {
                                for (; null !== iK && !tT(); )
                                    o_(iK)
                            }();
                            break
                        } catch (t) {
                            ok(e, t)
                        }
                    tX(),
                    iq.current = o,
                    iX = i,
                    null !== iK ? t = 0 : (iY = null,
                    iZ = 0,
                    t = i1)
                }
                if (0 !== t) {
                    if (2 === t && 0 !== (i = tb(e)) && (r = i,
                    t = og(e, i)),
                    1 === t)
                        throw n = i2,
                        oP(e, 0),
                        ob(e, r),
                        om(e, tM()),
                        n;
                    if (6 === t)
                        ob(e, r);
                    else {
                        if (i = e.current.alternate,
                        0 == (30 & r) && !function(e) {
                            for (var t = e; ; ) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores))
                                        for (var r = 0; r < n.length; r++) {
                                            var i = n[r]
                                              , o = i.getSnapshot;
                                            i = i.value;
                                            try {
                                                if (!tD(o(), i))
                                                    return !1
                                            } catch (e) {
                                                return !1
                                            }
                                        }
                                }
                                if (n = t.child,
                                16384 & t.subtreeFlags && null !== n)
                                    n.return = t,
                                    t = n;
                                else {
                                    if (t === e)
                                        break;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e)
                                            return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return,
                                    t = t.sibling
                                }
                            }
                            return !0
                        }(i) && (2 === (t = oT(e, r)) && 0 !== (o = tb(e)) && (r = o,
                        t = og(e, o)),
                        1 === t))
                            throw n = i2,
                            oP(e, 0),
                            ob(e, r),
                            om(e, tM()),
                            n;
                        switch (e.finishedWork = i,
                        e.finishedLanes = r,
                        t) {
                        case 0:
                        case 1:
                            throw Error(f(345));
                        case 2:
                        case 5:
                            oj(e, i8);
                            break;
                        case 3:
                            if (ob(e, r),
                            (130023424 & r) === r && 10 < (t = i9 + 500 - tM())) {
                                if (0 !== ty(e, 0))
                                    break;
                                if (((i = e.suspendedLanes) & r) !== r) {
                                    of(),
                                    e.pingedLanes |= e.suspendedLanes & i;
                                    break
                                }
                                e.timeoutHandle = q(oj.bind(null, e, i8), t);
                                break
                            }
                            oj(e, i8);
                            break;
                        case 4:
                            if (ob(e, r),
                            (4194240 & r) === r)
                                break;
                            for (i = -1,
                            t = e.eventTimes; 0 < r; ) {
                                var a = 31 - td(r);
                                o = 1 << a,
                                (a = t[a]) > i && (i = a),
                                r &= ~o
                            }
                            if (r = i,
                            10 < (r = (120 > (r = tM() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iH(r / 1960)) - r)) {
                                e.timeoutHandle = q(oj.bind(null, e, i8), r);
                                break
                            }
                            oj(e, i8);
                            break;
                        default:
                            throw Error(f(329))
                        }
                    }
                }
                return om(e, tM()),
                e.callbackNode === n ? ov.bind(null, e) : null
            }
            function og(e, t) {
                var n = i5;
                return e.current.memoizedState.isDehydrated && (oP(e, t).flags |= 256),
                2 !== (e = oT(e, t)) && (t = i8,
                i8 = n,
                null !== t && oy(t)),
                e
            }
            function oy(e) {
                null === i8 ? i8 = e : i8.push.apply(i8, e)
            }
            function ob(e, t) {
                for (t &= ~i6,
                t &= ~i4,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - td(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function ox(e) {
                if (0 != (6 & iX))
                    throw Error(f(327));
                oO();
                var t = ty(e, 0);
                if (0 == (1 & t))
                    return om(e, tM()),
                    null;
                var n = oT(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = tb(e);
                    0 !== r && (t = r,
                    n = og(e, r))
                }
                if (1 === n)
                    throw n = i2,
                    oP(e, 0),
                    ob(e, t),
                    om(e, tM()),
                    n;
                if (6 === n)
                    throw Error(f(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                oj(e, i8),
                om(e, tM()),
                null
            }
            function ow(e) {
                null !== oo && 0 === oo.tag && 0 == (6 & iX) && oO();
                var t = iX;
                iX |= 1;
                var n = iQ.transition
                  , r = tP;
                try {
                    if (iQ.transition = null,
                    tP = 1,
                    e)
                        return e()
                } finally {
                    tP = r,
                    iQ.transition = n,
                    0 == (6 & (iX = t)) && tB()
                }
            }
            function oS() {
                iJ = i0.current,
                e7(i0)
            }
            function oP(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (n !== Q && (e.timeoutHandle = Q,
                G(n)),
                null !== iK)
                    for (n = iK.return; null !== n; ) {
                        var r = n;
                        switch (nx(r),
                        r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && ts();
                            break;
                        case 3:
                            nq(),
                            e7(tr),
                            e7(tn),
                            nZ();
                            break;
                        case 5:
                            nQ(r);
                            break;
                        case 4:
                            nq();
                            break;
                        case 13:
                        case 19:
                            e7(nX);
                            break;
                        case 10:
                            tK(r.type._context);
                            break;
                        case 22:
                        case 23:
                            oS()
                        }
                        n = n.return
                    }
                if (iY = e,
                iK = e = oB(e.current, null),
                iZ = iJ = t,
                i1 = 0,
                i2 = null,
                i6 = i4 = i3 = 0,
                i8 = i5 = null,
                null !== t1) {
                    for (t = 0; t < t1.length; t++)
                        if (null !== (r = (n = t1[t]).interleaved)) {
                            n.interleaved = null;
                            var i = r.next
                              , o = n.pending;
                            if (null !== o) {
                                var a = o.next;
                                o.next = i,
                                r.next = a
                            }
                            n.pending = r
                        }
                    t1 = null
                }
                return e
            }
            function ok(e, t) {
                for (; ; ) {
                    var n = iK;
                    try {
                        if (tX(),
                        nJ.current = rD,
                        n6) {
                            for (var r = n2.memoizedState; null !== r; ) {
                                var i = r.queue;
                                null !== i && (i.pending = null),
                                r = r.next
                            }
                            n6 = !1
                        }
                        if (n1 = 0,
                        n4 = n3 = n2 = null,
                        n5 = !1,
                        n8 = 0,
                        iG.current = null,
                        null === n || null === n.return) {
                            i1 = 1,
                            i2 = t,
                            iK = null;
                            break
                        }
                        e: {
                            var o = e
                              , a = n.return
                              , s = n
                              , l = t;
                            if (t = iZ,
                            s.flags |= 32768,
                            null !== l && "object" == typeof l && "function" == typeof l.then) {
                                var u = l
                                  , c = s
                                  , d = c.tag;
                                if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                                    var h = c.alternate;
                                    h ? (c.updateQueue = h.updateQueue,
                                    c.memoizedState = h.memoizedState,
                                    c.lanes = h.lanes) : (c.updateQueue = null,
                                    c.memoizedState = null)
                                }
                                var p = rq(a);
                                if (null !== p) {
                                    p.flags &= -257,
                                    rG(p, a, s, o, t),
                                    1 & p.mode && rH(o, u, t),
                                    t = p,
                                    l = u;
                                    var m = t.updateQueue;
                                    if (null === m) {
                                        var v = new Set;
                                        v.add(l),
                                        t.updateQueue = v
                                    } else
                                        m.add(l);
                                    break e
                                }
                                if (0 == (1 & t)) {
                                    rH(o, u, t),
                                    oC();
                                    break e
                                }
                                l = Error(f(426))
                            } else if (nP && 1 & s.mode) {
                                var g = rq(a);
                                if (null !== g) {
                                    0 == (65536 & g.flags) && (g.flags |= 256),
                                    rG(g, a, s, o, t),
                                    nR(l);
                                    break e
                                }
                            }
                            o = l,
                            4 !== i1 && (i1 = 2),
                            null === i5 ? i5 = [o] : i5.push(o),
                            l = rV(l, s),
                            s = a;
                            do {
                                switch (s.tag) {
                                case 3:
                                    s.flags |= 65536,
                                    t &= -t,
                                    s.lanes |= t;
                                    var y = rW(s, l, t);
                                    t9(s, y);
                                    break e;
                                case 1:
                                    o = l;
                                    var b = s.type
                                      , x = s.stateNode;
                                    if (0 == (128 & s.flags) && ("function" == typeof b.getDerivedStateFromError || null !== x && "function" == typeof x.componentDidCatch && (null === or || !or.has(x)))) {
                                        s.flags |= 65536,
                                        t &= -t,
                                        s.lanes |= t;
                                        var w = r$(s, o, t);
                                        t9(s, w);
                                        break e
                                    }
                                }
                                s = s.return
                            } while (null !== s)
                        }
                        oM(n)
                    } catch (e) {
                        t = e,
                        iK === n && null !== n && (iK = n = n.return);
                        continue
                    }
                    break
                }
            }
            function oE() {
                var e = iq.current;
                return iq.current = rD,
                null === e ? rD : e
            }
            function oC() {
                (0 === i1 || 3 === i1 || 2 === i1) && (i1 = 4),
                null === iY || 0 == (268435455 & i3) && 0 == (268435455 & i4) || ob(iY, iZ)
            }
            function oT(e, t) {
                var n = iX;
                iX |= 2;
                var r = oE();
                for (iY === e && iZ === t || oP(e, t); ; )
                    try {
                        !function() {
                            for (; null !== iK; )
                                o_(iK)
                        }();
                        break
                    } catch (t) {
                        ok(e, t)
                    }
                if (tX(),
                iX = n,
                iq.current = r,
                null !== iK)
                    throw Error(f(261));
                return iY = null,
                iZ = 0,
                i1
            }
            function o_(e) {
                var t = a(e.alternate, e, iJ);
                e.memoizedProps = e.pendingProps,
                null === t ? oM(e) : iK = t,
                iG.current = null
            }
            function oM(e) {
                var n = e;
                do {
                    var a = n.alternate;
                    if (e = n.return,
                    0 == (32768 & n.flags)) {
                        if (null !== (a = function(e, n, a) {
                            var s = n.pendingProps;
                            switch (nx(n),
                            n.tag) {
                            case 2:
                            case 16:
                            case 15:
                            case 0:
                            case 11:
                            case 7:
                            case 8:
                            case 12:
                            case 9:
                            case 14:
                                return rZ(n),
                                null;
                            case 1:
                            case 17:
                                return ta(n.type) && ts(),
                                rZ(n),
                                null;
                            case 3:
                                return s = n.stateNode,
                                nq(),
                                e7(tr),
                                e7(tn),
                                nZ(),
                                s.pendingContext && (s.context = s.pendingContext,
                                s.pendingContext = null),
                                (null === e || null === e.child) && (nO(n) ? rQ(n) : null === e || e.memoizedState.isDehydrated && 0 == (256 & n.flags) || (n.flags |= 1024,
                                null !== nE && (oy(nE),
                                nE = null))),
                                r(e, n),
                                rZ(n),
                                null;
                            case 5:
                                nQ(n),
                                a = n$(nW.current);
                                var l = n.type;
                                if (null !== e && null != n.stateNode)
                                    i(e, n, l, s, a),
                                    e.ref !== n.ref && (n.flags |= 512,
                                    n.flags |= 2097152);
                                else {
                                    if (!s) {
                                        if (null === n.stateNode)
                                            throw Error(f(166));
                                        return rZ(n),
                                        null
                                    }
                                    if (e = n$(nB.current),
                                    nO(n)) {
                                        if (!Z)
                                            throw Error(f(175));
                                        e = eH(n.stateNode, n.type, n.memoizedProps, a, e, n, !nk),
                                        n.updateQueue = e,
                                        null !== e && rQ(n)
                                    } else {
                                        var u = V(l, s, a, e, n);
                                        t(u, n, !1, !1),
                                        n.stateNode = u,
                                        U(u, l, s, a, e) && rQ(n)
                                    }
                                    null !== n.ref && (n.flags |= 512,
                                    n.flags |= 2097152)
                                }
                                return rZ(n),
                                null;
                            case 6:
                                if (e && null != n.stateNode)
                                    o(e, n, e.memoizedProps, s);
                                else {
                                    if ("string" != typeof s && null === n.stateNode)
                                        throw Error(f(166));
                                    if (e = n$(nW.current),
                                    a = n$(nB.current),
                                    nO(n)) {
                                        if (!Z)
                                            throw Error(f(176));
                                        if ((a = eq(e = n.stateNode, s = n.memoizedProps, n, !nk)) && null !== (l = nw))
                                            switch (u = 0 != (1 & l.mode),
                                            l.tag) {
                                            case 3:
                                                e0(l.stateNode.containerInfo, e, s, u);
                                                break;
                                            case 5:
                                                e1(l.type, l.memoizedProps, l.stateNode, e, s, u)
                                            }
                                        a && rQ(n)
                                    } else
                                        n.stateNode = H(s, e, a, n)
                                }
                                return rZ(n),
                                null;
                            case 13:
                                if (e7(nX),
                                s = n.memoizedState,
                                nP && null !== nS && 0 != (1 & n.mode) && 0 == (128 & n.flags)) {
                                    for (e = nS; e; )
                                        e = eB(e);
                                    return nA(),
                                    n.flags |= 98560,
                                    n
                                }
                                if (null !== s && null !== s.dehydrated) {
                                    if (s = nO(n),
                                    null === e) {
                                        if (!s)
                                            throw Error(f(318));
                                        if (!Z)
                                            throw Error(f(344));
                                        if (!(e = null !== (e = n.memoizedState) ? e.dehydrated : null))
                                            throw Error(f(317));
                                        eG(e, n)
                                    } else
                                        nA(),
                                        0 == (128 & n.flags) && (n.memoizedState = null),
                                        n.flags |= 4;
                                    return rZ(n),
                                    null
                                }
                                if (null !== nE && (oy(nE),
                                nE = null),
                                0 != (128 & n.flags))
                                    return n.lanes = a,
                                    n;
                                return s = null !== s,
                                a = !1,
                                null === e ? nO(n) : a = null !== e.memoizedState,
                                s && !a && (n.child.flags |= 8192,
                                0 != (1 & n.mode) && (null === e || 0 != (1 & nX.current) ? 0 === i1 && (i1 = 3) : oC())),
                                null !== n.updateQueue && (n.flags |= 4),
                                rZ(n),
                                null;
                            case 4:
                                return nq(),
                                r(e, n),
                                null === e && ee(n.stateNode.containerInfo),
                                rZ(n),
                                null;
                            case 10:
                                return tK(n.type._context),
                                rZ(n),
                                null;
                            case 19:
                                if (e7(nX),
                                null === (l = n.memoizedState))
                                    return rZ(n),
                                    null;
                                if (s = 0 != (128 & n.flags),
                                null === (u = l.rendering)) {
                                    if (s)
                                        rK(l, !1);
                                    else {
                                        if (0 !== i1 || null !== e && 0 != (128 & e.flags))
                                            for (e = n.child; null !== e; ) {
                                                if (null !== (u = nY(e))) {
                                                    for (n.flags |= 128,
                                                    rK(l, !1),
                                                    null !== (e = u.updateQueue) && (n.updateQueue = e,
                                                    n.flags |= 4),
                                                    n.subtreeFlags = 0,
                                                    e = a,
                                                    s = n.child; null !== s; )
                                                        a = s,
                                                        l = e,
                                                        a.flags &= 14680066,
                                                        null === (u = a.alternate) ? (a.childLanes = 0,
                                                        a.lanes = l,
                                                        a.child = null,
                                                        a.subtreeFlags = 0,
                                                        a.memoizedProps = null,
                                                        a.memoizedState = null,
                                                        a.updateQueue = null,
                                                        a.dependencies = null,
                                                        a.stateNode = null) : (a.childLanes = u.childLanes,
                                                        a.lanes = u.lanes,
                                                        a.child = u.child,
                                                        a.subtreeFlags = 0,
                                                        a.deletions = null,
                                                        a.memoizedProps = u.memoizedProps,
                                                        a.memoizedState = u.memoizedState,
                                                        a.updateQueue = u.updateQueue,
                                                        a.type = u.type,
                                                        l = u.dependencies,
                                                        a.dependencies = null === l ? null : {
                                                            lanes: l.lanes,
                                                            firstContext: l.firstContext
                                                        }),
                                                        s = s.sibling;
                                                    return te(nX, 1 & nX.current | 2),
                                                    n.child
                                                }
                                                e = e.sibling
                                            }
                                        null !== l.tail && tM() > i7 && (n.flags |= 128,
                                        s = !0,
                                        rK(l, !1),
                                        n.lanes = 4194304)
                                    }
                                } else {
                                    if (!s) {
                                        if (null !== (e = nY(u))) {
                                            if (n.flags |= 128,
                                            s = !0,
                                            null !== (e = e.updateQueue) && (n.updateQueue = e,
                                            n.flags |= 4),
                                            rK(l, !0),
                                            null === l.tail && "hidden" === l.tailMode && !u.alternate && !nP)
                                                return rZ(n),
                                                null
                                        } else
                                            2 * tM() - l.renderingStartTime > i7 && 1073741824 !== a && (n.flags |= 128,
                                            s = !0,
                                            rK(l, !1),
                                            n.lanes = 4194304)
                                    }
                                    l.isBackwards ? (u.sibling = n.child,
                                    n.child = u) : (null !== (e = l.last) ? e.sibling = u : n.child = u,
                                    l.last = u)
                                }
                                if (null !== l.tail)
                                    return n = l.tail,
                                    l.rendering = n,
                                    l.tail = n.sibling,
                                    l.renderingStartTime = tM(),
                                    n.sibling = null,
                                    e = nX.current,
                                    te(nX, s ? 1 & e | 2 : 1 & e),
                                    n;
                                return rZ(n),
                                null;
                            case 22:
                            case 23:
                                return oS(),
                                s = null !== n.memoizedState,
                                null !== e && null !== e.memoizedState !== s && (n.flags |= 8192),
                                s && 0 != (1 & n.mode) ? 0 != (1073741824 & iJ) && (rZ(n),
                                Y && 6 & n.subtreeFlags && (n.flags |= 8192)) : rZ(n),
                                null;
                            case 24:
                            case 25:
                                return null
                            }
                            throw Error(f(156, n.tag))
                        }(a, n, iJ))) {
                            iK = a;
                            return
                        }
                    } else {
                        if (null !== (a = function(e, t) {
                            switch (nx(t),
                            t.tag) {
                            case 1:
                                return ta(t.type) && ts(),
                                65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                                t) : null;
                            case 3:
                                return nq(),
                                e7(tr),
                                e7(tn),
                                nZ(),
                                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128,
                                t) : null;
                            case 5:
                                return nQ(t),
                                null;
                            case 13:
                                if (e7(nX),
                                null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                    if (null === t.alternate)
                                        throw Error(f(340));
                                    nA()
                                }
                                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                                t) : null;
                            case 19:
                                return e7(nX),
                                null;
                            case 4:
                                return nq(),
                                null;
                            case 10:
                                return tK(t.type._context),
                                null;
                            case 22:
                            case 23:
                                return oS(),
                                null;
                            default:
                                return null
                            }
                        }(a, n))) {
                            a.flags &= 32767,
                            iK = a;
                            return
                        }
                        if (null !== e)
                            e.flags |= 32768,
                            e.subtreeFlags = 0,
                            e.deletions = null;
                        else {
                            i1 = 6,
                            iK = null;
                            return
                        }
                    }
                    if (null !== (n = n.sibling)) {
                        iK = n;
                        return
                    }
                    iK = n = e
                } while (null !== n);
                0 === i1 && (i1 = 5)
            }
            function oj(e, t) {
                var n = tP
                  , r = iQ.transition;
                try {
                    iQ.transition = null,
                    tP = 1,
                    function(e, t, n) {
                        do
                            oO();
                        while (null !== oo);
                        if (0 != (6 & iX))
                            throw Error(f(327));
                        var r = e.finishedWork
                          , i = e.finishedLanes;
                        if (null !== r) {
                            if (e.finishedWork = null,
                            e.finishedLanes = 0,
                            r === e.current)
                                throw Error(f(177));
                            e.callbackNode = null,
                            e.callbackPriority = 0;
                            var o = r.lanes | r.childLanes;
                            if (function(e, t) {
                                var n = e.pendingLanes & ~t;
                                e.pendingLanes = t,
                                e.suspendedLanes = 0,
                                e.pingedLanes = 0,
                                e.expiredLanes &= t,
                                e.mutableReadLanes &= t,
                                e.entangledLanes &= t,
                                t = e.entanglements;
                                var r = e.eventTimes;
                                for (e = e.expirationTimes; 0 < n; ) {
                                    var i = 31 - td(n)
                                      , o = 1 << i;
                                    t[i] = 0,
                                    r[i] = -1,
                                    e[i] = -1,
                                    n &= ~o
                                }
                            }(e, o),
                            e === iY && (iK = iY = null,
                            iZ = 0),
                            0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags) || oi || (oi = !0,
                            a = tA,
                            s = function() {
                                return oO(),
                                null
                            }
                            ,
                            tE(a, s)),
                            o = 0 != (15990 & r.flags),
                            0 != (15990 & r.subtreeFlags) || o) {
                                o = iQ.transition,
                                iQ.transition = null;
                                var a, s, l, u, c = tP;
                                tP = 1;
                                var d = iX;
                                iX |= 4,
                                iG.current = null,
                                function(e, t) {
                                    for (I(e.containerInfo),
                                    iv = t; null !== iv; )
                                        if (t = (e = iv).child,
                                        0 != (1028 & e.subtreeFlags) && null !== t)
                                            t.return = e,
                                            iv = t;
                                        else
                                            for (; null !== iv; ) {
                                                e = iv;
                                                try {
                                                    var n = e.alternate;
                                                    if (0 != (1024 & e.flags))
                                                        switch (e.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                        case 5:
                                                        case 6:
                                                        case 4:
                                                        case 17:
                                                            break;
                                                        case 1:
                                                            if (null !== n) {
                                                                var r = n.memoizedProps
                                                                  , i = n.memoizedState
                                                                  , o = e.stateNode
                                                                  , a = o.getSnapshotBeforeUpdate(e.elementType === e.type ? r : t$(e.type, r), i);
                                                                o.__reactInternalSnapshotBeforeUpdate = a
                                                            }
                                                            break;
                                                        case 3:
                                                            Y && eT(e.stateNode.containerInfo);
                                                            break;
                                                        default:
                                                            throw Error(f(163))
                                                        }
                                                } catch (t) {
                                                    oR(e, e.return, t)
                                                }
                                                if (null !== (t = e.sibling)) {
                                                    t.return = e.return,
                                                    iv = t;
                                                    break
                                                }
                                                iv = e.return
                                            }
                                    n = ib,
                                    ib = !1
                                }(e, r),
                                function(e, t) {
                                    for (iv = t; null !== iv; ) {
                                        var n = (t = iv).deletions;
                                        if (null !== n)
                                            for (var r = 0; r < n.length; r++) {
                                                var i = n[r];
                                                try {
                                                    var o = e;
                                                    Y ? i_(o, i, t) : ik(o, i, t);
                                                    var a = i.alternate;
                                                    null !== a && (a.return = null),
                                                    i.return = null
                                                } catch (e) {
                                                    oR(i, t, e)
                                                }
                                            }
                                        if (n = t.child,
                                        0 != (12854 & t.subtreeFlags) && null !== n)
                                            n.return = t,
                                            iv = n;
                                        else
                                            for (; null !== iv; ) {
                                                t = iv;
                                                try {
                                                    var s = t.flags;
                                                    if (32 & s && Y && eS(t.stateNode),
                                                    512 & s) {
                                                        var l = t.alternate;
                                                        if (null !== l) {
                                                            var u = l.ref;
                                                            null !== u && ("function" == typeof u ? u(null) : u.current = null)
                                                        }
                                                    }
                                                    if (8192 & s)
                                                        switch (t.tag) {
                                                        case 13:
                                                            if (null !== t.memoizedState) {
                                                                var c = t.alternate;
                                                                (null === c || null === c.memoizedState) && (i9 = tM())
                                                            }
                                                            break;
                                                        case 22:
                                                            var f = null !== t.memoizedState
                                                              , d = t.alternate
                                                              , h = null !== d && null !== d.memoizedState;
                                                            if (n = t,
                                                            Y) {
                                                                e: if (r = n,
                                                                i = f,
                                                                o = null,
                                                                Y)
                                                                    for (var p = r; ; ) {
                                                                        if (5 === p.tag) {
                                                                            if (null === o) {
                                                                                o = p;
                                                                                var m = p.stateNode;
                                                                                i ? eP(m) : eE(p.stateNode, p.memoizedProps)
                                                                            }
                                                                        } else if (6 === p.tag) {
                                                                            if (null === o) {
                                                                                var v = p.stateNode;
                                                                                i ? ek(v) : eC(v, p.memoizedProps)
                                                                            }
                                                                        } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === r) && null !== p.child) {
                                                                            p.child.return = p,
                                                                            p = p.child;
                                                                            continue
                                                                        }
                                                                        if (p === r)
                                                                            break;
                                                                        for (; null === p.sibling; ) {
                                                                            if (null === p.return || p.return === r)
                                                                                break e;
                                                                            o === p && (o = null),
                                                                            p = p.return
                                                                        }
                                                                        o === p && (o = null),
                                                                        p.sibling.return = p.return,
                                                                        p = p.sibling
                                                                    }
                                                            }
                                                            if (f && !h && 0 != (1 & n.mode)) {
                                                                iv = n;
                                                                for (var g = n.child; null !== g; ) {
                                                                    for (n = iv = g; null !== iv; ) {
                                                                        var y = (r = iv).child;
                                                                        switch (r.tag) {
                                                                        case 0:
                                                                        case 11:
                                                                        case 14:
                                                                        case 15:
                                                                            ix(4, r, r.return);
                                                                            break;
                                                                        case 1:
                                                                            ig(r, r.return);
                                                                            var b = r.stateNode;
                                                                            if ("function" == typeof b.componentWillUnmount) {
                                                                                var x = r.return;
                                                                                try {
                                                                                    b.props = r.memoizedProps,
                                                                                    b.state = r.memoizedState,
                                                                                    b.componentWillUnmount()
                                                                                } catch (e) {
                                                                                    oR(r, x, e)
                                                                                }
                                                                            }
                                                                            break;
                                                                        case 5:
                                                                            ig(r, r.return);
                                                                            break;
                                                                        case 22:
                                                                            if (null !== r.memoizedState) {
                                                                                iA(n);
                                                                                continue
                                                                            }
                                                                        }
                                                                        null !== y ? (y.return = r,
                                                                        iv = y) : iA(n)
                                                                    }
                                                                    g = g.sibling
                                                                }
                                                            }
                                                        }
                                                    switch (4102 & s) {
                                                    case 2:
                                                        iT(t),
                                                        t.flags &= -3;
                                                        break;
                                                    case 6:
                                                        iT(t),
                                                        t.flags &= -3,
                                                        iM(t.alternate, t);
                                                        break;
                                                    case 4096:
                                                        t.flags &= -4097;
                                                        break;
                                                    case 4100:
                                                        t.flags &= -4097,
                                                        iM(t.alternate, t);
                                                        break;
                                                    case 4:
                                                        iM(t.alternate, t)
                                                    }
                                                } catch (e) {
                                                    oR(t, t.return, e)
                                                }
                                                if (null !== (n = t.sibling)) {
                                                    n.return = t.return,
                                                    iv = n;
                                                    break
                                                }
                                                iv = t.return
                                            }
                                    }
                                }(e, r, i),
                                F(e.containerInfo),
                                e.current = r,
                                l = r,
                                u = e,
                                iv = l,
                                function e(t, n, r) {
                                    for (var i = 0 != (1 & t.mode); null !== iv; ) {
                                        var o = iv
                                          , a = o.child;
                                        if (22 === o.tag && i) {
                                            var s = null !== o.memoizedState || ih;
                                            if (!s) {
                                                var l = o.alternate
                                                  , u = null !== l && null !== l.memoizedState || ip;
                                                l = ih;
                                                var c = ip;
                                                if (ih = s,
                                                (ip = u) && !c)
                                                    for (iv = o; null !== iv; )
                                                        u = (s = iv).child,
                                                        22 === s.tag && null !== s.memoizedState ? iR(o) : null !== u ? (u.return = s,
                                                        iv = u) : iR(o);
                                                for (; null !== a; )
                                                    iv = a,
                                                    e(a, n, r),
                                                    a = a.sibling;
                                                iv = o,
                                                ih = l,
                                                ip = c
                                            }
                                            iO(t, n, r)
                                        } else
                                            0 != (8772 & o.subtreeFlags) && null !== a ? (a.return = o,
                                            iv = a) : iO(t, n, r)
                                    }
                                }(l, u, i),
                                t_(),
                                iX = d,
                                tP = c,
                                iQ.transition = o
                            } else
                                e.current = r;
                            if (oi && (oi = !1,
                            oo = e,
                            oa = i),
                            0 === (o = e.pendingLanes) && (or = null),
                            function(e) {
                                if (tL && "function" == typeof tL.onCommitFiberRoot)
                                    try {
                                        tL.onCommitFiberRoot(tz, e, void 0, 128 == (128 & e.current.flags))
                                    } catch (e) {}
                            }(r.stateNode, n),
                            om(e, tM()),
                            null !== t)
                                for (n = e.onRecoverableError,
                                r = 0; r < t.length; r++)
                                    n(t[r]);
                            if (ot)
                                throw ot = !1,
                                e = on,
                                on = null,
                                e;
                            0 != (1 & oa) && 0 !== e.tag && oO(),
                            0 != (1 & (o = e.pendingLanes)) ? e === ol ? os++ : (os = 0,
                            ol = e) : os = 0,
                            tB()
                        }
                    }(e, t, n)
                } finally {
                    iQ.transition = r,
                    tP = n
                }
                return null
            }
            function oO() {
                if (null !== oo) {
                    var e = tk(oa)
                      , t = iQ.transition
                      , n = tP;
                    try {
                        if (iQ.transition = null,
                        tP = 16 > e ? 16 : e,
                        null === oo)
                            var r = !1;
                        else {
                            if (e = oo,
                            oo = null,
                            oa = 0,
                            0 != (6 & iX))
                                throw Error(f(331));
                            var i = iX;
                            for (iX |= 4,
                            iv = e.current; null !== iv; ) {
                                var o = iv
                                  , a = o.child;
                                if (0 != (16 & iv.flags)) {
                                    var s = o.deletions;
                                    if (null !== s) {
                                        for (var l = 0; l < s.length; l++) {
                                            var u = s[l];
                                            for (iv = u; null !== iv; ) {
                                                var c = iv;
                                                switch (c.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ix(8, c, o)
                                                }
                                                var d = c.child;
                                                if (null !== d)
                                                    d.return = c,
                                                    iv = d;
                                                else
                                                    for (; null !== iv; ) {
                                                        var h = (c = iv).sibling
                                                          , p = c.return;
                                                        if (!function e(t) {
                                                            var n = t.alternate;
                                                            null !== n && (t.alternate = null,
                                                            e(n)),
                                                            t.child = null,
                                                            t.deletions = null,
                                                            t.sibling = null,
                                                            5 === t.tag && null !== (n = t.stateNode) && en(n),
                                                            t.stateNode = null,
                                                            t.return = null,
                                                            t.dependencies = null,
                                                            t.memoizedProps = null,
                                                            t.memoizedState = null,
                                                            t.pendingProps = null,
                                                            t.stateNode = null,
                                                            t.updateQueue = null
                                                        }(c),
                                                        c === u) {
                                                            iv = null;
                                                            break
                                                        }
                                                        if (null !== h) {
                                                            h.return = p,
                                                            iv = h;
                                                            break
                                                        }
                                                        iv = p
                                                    }
                                            }
                                        }
                                        var m = o.alternate;
                                        if (null !== m) {
                                            var v = m.child;
                                            if (null !== v) {
                                                m.child = null;
                                                do {
                                                    var g = v.sibling;
                                                    v.sibling = null,
                                                    v = g
                                                } while (null !== v)
                                            }
                                        }
                                        iv = o
                                    }
                                }
                                if (0 != (2064 & o.subtreeFlags) && null !== a)
                                    a.return = o,
                                    iv = a;
                                else
                                    for (; null !== iv; ) {
                                        if (o = iv,
                                        0 != (2048 & o.flags))
                                            switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ix(9, o, o.return)
                                            }
                                        var y = o.sibling;
                                        if (null !== y) {
                                            y.return = o.return,
                                            iv = y;
                                            break
                                        }
                                        iv = o.return
                                    }
                            }
                            var b = e.current;
                            for (iv = b; null !== iv; ) {
                                var x = (a = iv).child;
                                if (0 != (2064 & a.subtreeFlags) && null !== x)
                                    x.return = a,
                                    iv = x;
                                else
                                    for (a = b; null !== iv; ) {
                                        if (s = iv,
                                        0 != (2048 & s.flags))
                                            try {
                                                switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    iw(9, s)
                                                }
                                            } catch (e) {
                                                oR(s, s.return, e)
                                            }
                                        if (s === a) {
                                            iv = null;
                                            break
                                        }
                                        var w = s.sibling;
                                        if (null !== w) {
                                            w.return = s.return,
                                            iv = w;
                                            break
                                        }
                                        iv = s.return
                                    }
                            }
                            if (iX = i,
                            tB(),
                            tL && "function" == typeof tL.onPostCommitFiberRoot)
                                try {
                                    tL.onPostCommitFiberRoot(tz, e)
                                } catch (e) {}
                            r = !0
                        }
                        return r
                    } finally {
                        tP = n,
                        iQ.transition = t
                    }
                }
                return !1
            }
            function oA(e, t, n) {
                t = rW(e, t = rV(n, t), 1),
                t5(e, t),
                t = of(),
                null !== (e = op(e, 1)) && (tw(e, 1, t),
                om(e, t))
            }
            function oR(e, t, n) {
                if (3 === e.tag)
                    oA(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            oA(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === or || !or.has(r))) {
                                e = r$(t, e = rV(n, e), 1),
                                t5(t, e),
                                e = of(),
                                null !== (t = op(t, 1)) && (tw(t, 1, e),
                                om(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function oz(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = of(),
                e.pingedLanes |= e.suspendedLanes & n,
                iY === e && (iZ & n) === n && (4 === i1 || 3 === i1 && (130023424 & iZ) === iZ && 500 > tM() - i9 ? oP(e, 0) : i6 |= n),
                om(e, t)
            }
            function oL(e, t) {
                0 === t && (0 == (1 & e.mode) ? t = 1 : (t = tv,
                0 == (130023424 & (tv <<= 1)) && (tv = 4194304)));
                var n = of();
                null !== (e = op(e, t)) && (tw(e, t, n),
                om(e, n))
            }
            function oD(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                oL(e, n)
            }
            function oN(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , i = e.memoizedState;
                    null !== i && (n = i.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(f(314))
                }
                null !== r && r.delete(t),
                oL(e, n)
            }
            function oI(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function oF(e, t, n, r) {
                return new oI(e,t,n,r)
            }
            function oV(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function oB(e, t) {
                var n = e.alternate;
                return null === n ? ((n = oF(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 14680064 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function oU(e, t, n, r, i, o) {
                var a = 2;
                if (r = e,
                "function" == typeof e)
                    oV(e) && (a = 1);
                else if ("string" == typeof e)
                    a = 5;
                else
                    e: switch (e) {
                    case m:
                        return oW(n.children, i, o, t);
                    case v:
                        a = 8,
                        i |= 8;
                        break;
                    case g:
                        return (e = oF(12, n, t, 2 | i)).elementType = g,
                        e.lanes = o,
                        e;
                    case w:
                        return (e = oF(13, n, t, i)).elementType = w,
                        e.lanes = o,
                        e;
                    case S:
                        return (e = oF(19, n, t, i)).elementType = S,
                        e.lanes = o,
                        e;
                    case E:
                        return o$(n, i, o, t);
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                            case y:
                                a = 10;
                                break e;
                            case b:
                                a = 9;
                                break e;
                            case x:
                                a = 11;
                                break e;
                            case P:
                                a = 14;
                                break e;
                            case k:
                                a = 16,
                                r = null;
                                break e
                            }
                        throw Error(f(130, null == e ? e : typeof e, ""))
                    }
                return (t = oF(a, n, t, i)).elementType = e,
                t.type = r,
                t.lanes = o,
                t
            }
            function oW(e, t, n, r) {
                return (e = oF(7, e, r, t)).lanes = n,
                e
            }
            function o$(e, t, n, r) {
                return (e = oF(22, e, r, t)).elementType = E,
                e.lanes = n,
                e.stateNode = {},
                e
            }
            function oH(e, t, n) {
                return (e = oF(6, e, null, t)).lanes = n,
                e
            }
            function oq(e, t, n) {
                return (t = oF(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function oG(e, t, n, r, i) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = Q,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = tx(0),
                this.expirationTimes = tx(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = tx(0),
                this.identifierPrefix = r,
                this.onRecoverableError = i,
                Z && (this.mutableSourceEagerHydrationData = null)
            }
            function oQ(e, t, n, r, i, o, a, s, l) {
                return e = new oG(e,t,n,s,l),
                1 === t ? (t = 1,
                !0 === o && (t |= 8)) : t = 0,
                o = oF(3, null, null, t),
                e.current = o,
                o.stateNode = e,
                o.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null
                },
                t3(o),
                e
            }
            function oX(e) {
                if (!e)
                    return tt;
                e = e._reactInternals;
                e: {
                    if (M(e) !== e || 1 !== e.tag)
                        throw Error(f(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (ta(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(f(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (ta(n))
                        return tu(e, n, t)
                }
                return t
            }
            function oY(e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render)
                        throw Error(f(188));
                    throw Error(f(268, e = Object.keys(e).join(",")))
                }
                return null === (e = A(t)) ? null : e.stateNode
            }
            function oK(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function oZ(e, t) {
                oK(e, t),
                (e = e.alternate) && oK(e, t)
            }
            function oJ(e) {
                return null === (e = A(e)) ? null : e.stateNode
            }
            function o0() {
                return null
            }
            return a = function(e, t, n) {
                if (null !== e) {
                    if (e.memoizedProps !== t.pendingProps || tr.current)
                        r0 = !0;
                    else {
                        if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                            return r0 = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    ie(t),
                                    nA();
                                    break;
                                case 5:
                                    nG(t);
                                    break;
                                case 1:
                                    ta(t.type) && tc(t);
                                    break;
                                case 4:
                                    nH(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    tY(t, t.type._context, t.memoizedProps.value);
                                    break;
                                case 13:
                                    var r = t.memoizedState;
                                    if (null !== r) {
                                        if (null !== r.dehydrated)
                                            return te(nX, 1 & nX.current),
                                            t.flags |= 128,
                                            null;
                                        if (0 != (n & t.child.childLanes))
                                            return io(e, t, n);
                                        return te(nX, 1 & nX.current),
                                        null !== (e = id(e, t, n)) ? e.sibling : null
                                    }
                                    te(nX, 1 & nX.current);
                                    break;
                                case 19:
                                    if (r = 0 != (n & t.childLanes),
                                    0 != (128 & e.flags)) {
                                        if (r)
                                            return ic(e, t, n);
                                        t.flags |= 128
                                    }
                                    var i = t.memoizedState;
                                    if (null !== i && (i.rendering = null,
                                    i.tail = null,
                                    i.lastEffect = null),
                                    te(nX, nX.current),
                                    !r)
                                        return null;
                                    break;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    r6(e, t, n)
                                }
                                return id(e, t, n)
                            }(e, t, n);
                        r0 = 0 != (131072 & e.flags)
                    }
                } else
                    r0 = !1,
                    nP && 0 != (1048576 & t.flags) && ny(t, nf, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    var r = t.type;
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    e = t.pendingProps;
                    var i = to(t, tn.current);
                    tJ(t, n),
                    i = rt(null, t, r, e, i, n);
                    var o = rn();
                    return t.flags |= 1,
                    "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    ta(r) ? (o = !0,
                    tc(t)) : o = !1,
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null,
                    t3(t),
                    i.updater = nr,
                    t.stateNode = i,
                    i._reactInternals = t,
                    ns(t, r, e, n),
                    t = r7(null, t, r, !0, o, n)) : (t.tag = 0,
                    nP && o && nb(t),
                    r1(null, t, i, n),
                    t = t.child),
                    t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (null !== e && (e.alternate = null,
                        t.alternate = null,
                        t.flags |= 2),
                        e = t.pendingProps,
                        r = (i = r._init)(r._payload),
                        t.type = r,
                        i = t.tag = function(e) {
                            if ("function" == typeof e)
                                return oV(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === x)
                                    return 11;
                                if (e === P)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = t$(r, e),
                        i) {
                        case 0:
                            t = r8(null, t, r, e, n);
                            break e;
                        case 1:
                            t = r9(null, t, r, e, n);
                            break e;
                        case 11:
                            t = r2(null, t, r, e, n);
                            break e;
                        case 14:
                            t = r3(null, t, r, t$(r.type, e), n);
                            break e
                        }
                        throw Error(f(306, r, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    i = t.pendingProps,
                    i = t.elementType === r ? i : t$(r, i),
                    r8(e, t, r, i, n);
                case 1:
                    return r = t.type,
                    i = t.pendingProps,
                    i = t.elementType === r ? i : t$(r, i),
                    r9(e, t, r, i, n);
                case 3:
                    e: {
                        if (ie(t),
                        null === e)
                            throw Error(f(387));
                        r = t.pendingProps,
                        i = (o = t.memoizedState).element,
                        t4(e, t),
                        t7(t, r, null, n);
                        var a = t.memoizedState;
                        if (r = a.element,
                        Z && o.isDehydrated) {
                            if (o = {
                                element: r,
                                isDehydrated: !1,
                                cache: a.cache,
                                transitions: a.transitions
                            },
                            t.updateQueue.baseState = o,
                            t.memoizedState = o,
                            256 & t.flags) {
                                t = it(e, t, r, n, i = Error(f(423)));
                                break e
                            }
                            if (r !== i) {
                                t = it(e, t, r, n, i = Error(f(424)));
                                break e
                            }
                            for (Z && (nS = eW(t.stateNode.containerInfo),
                            nw = t,
                            nP = !0,
                            nE = null,
                            nk = !1),
                            n = nF(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (nA(),
                            r === i) {
                                t = id(e, t, n);
                                break e
                            }
                            r1(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return nG(t),
                    null === e && nM(t),
                    r = t.type,
                    i = t.pendingProps,
                    o = null !== e ? e.memoizedProps : null,
                    a = i.children,
                    $(r, i) ? a = null : null !== o && $(r, o) && (t.flags |= 32),
                    r5(e, t),
                    r1(e, t, a, n),
                    t.child;
                case 6:
                    return null === e && nM(t),
                    null;
                case 13:
                    return io(e, t, n);
                case 4:
                    return nH(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = nI(t, null, r, n) : r1(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    i = t.pendingProps,
                    i = t.elementType === r ? i : t$(r, i),
                    r2(e, t, r, i, n);
                case 7:
                    return r1(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return r1(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        if (r = t.type._context,
                        i = t.pendingProps,
                        o = t.memoizedProps,
                        tY(t, r, a = i.value),
                        null !== o) {
                            if (tD(o.value, a)) {
                                if (o.children === i.children && !tr.current) {
                                    t = id(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                                    var s = o.dependencies;
                                    if (null !== s) {
                                        a = o.child;
                                        for (var l = s.firstContext; null !== l; ) {
                                            if (l.context === r) {
                                                if (1 === o.tag) {
                                                    (l = t6(-1, n & -n)).tag = 2;
                                                    var u = o.updateQueue;
                                                    if (null !== u) {
                                                        var c = (u = u.shared).pending;
                                                        null === c ? l.next = l : (l.next = c.next,
                                                        c.next = l),
                                                        u.pending = l
                                                    }
                                                }
                                                o.lanes |= n,
                                                null !== (l = o.alternate) && (l.lanes |= n),
                                                tZ(o.return, n, t),
                                                s.lanes |= n;
                                                break
                                            }
                                            l = l.next
                                        }
                                    } else if (10 === o.tag)
                                        a = o.type === t.type ? null : o.child;
                                    else if (18 === o.tag) {
                                        if (null === (a = o.return))
                                            throw Error(f(341));
                                        a.lanes |= n,
                                        null !== (s = a.alternate) && (s.lanes |= n),
                                        tZ(a, n, t),
                                        a = o.sibling
                                    } else
                                        a = o.child;
                                    if (null !== a)
                                        a.return = o;
                                    else
                                        for (a = o; null !== a; ) {
                                            if (a === t) {
                                                a = null;
                                                break
                                            }
                                            if (null !== (o = a.sibling)) {
                                                o.return = a.return,
                                                a = o;
                                                break
                                            }
                                            a = a.return
                                        }
                                    o = a
                                }
                        }
                        r1(e, t, i.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return i = t.type,
                    r = t.pendingProps.children,
                    tJ(t, n),
                    r = r(i = t0(i)),
                    t.flags |= 1,
                    r1(e, t, r, n),
                    t.child;
                case 14:
                    return i = t$(r = t.type, t.pendingProps),
                    i = t$(r.type, i),
                    r3(e, t, r, i, n);
                case 15:
                    return r4(e, t, t.type, t.pendingProps, n);
                case 17:
                    return r = t.type,
                    i = t.pendingProps,
                    i = t.elementType === r ? i : t$(r, i),
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    t.tag = 1,
                    ta(r) ? (e = !0,
                    tc(t)) : e = !1,
                    tJ(t, n),
                    no(t, r, i),
                    ns(t, r, i, n),
                    r7(null, t, r, !0, e, n);
                case 19:
                    return ic(e, t, n);
                case 22:
                    return r6(e, t, n)
                }
                throw Error(f(156, t.tag))
            }
            ,
            s.attemptContinuousHydration = function(e) {
                13 === e.tag && (oh(e, 134217728, of()),
                oZ(e, 134217728))
            }
            ,
            s.attemptHydrationAtCurrentPriority = function(e) {
                if (13 === e.tag) {
                    var t = of()
                      , n = od(e);
                    oh(e, n, t),
                    oZ(e, n)
                }
            }
            ,
            s.attemptSynchronousHydration = function(e) {
                switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = tg(t.pendingLanes);
                        0 !== n && (tS(t, 1 | n),
                        om(t, tM()),
                        0 == (6 & iX) && (oe(),
                        tB()))
                    }
                    break;
                case 13:
                    var r = of();
                    ow(function() {
                        return oh(e, 1, r)
                    }),
                    oZ(e, 1)
                }
            }
            ,
            s.batchedUpdates = function(e, t) {
                var n = iX;
                iX |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (iX = n) && (oe(),
                    tI && tB())
                }
            }
            ,
            s.createComponentSelector = function(e) {
                return {
                    $$typeof: iz,
                    value: e
                }
            }
            ,
            s.createContainer = function(e, t, n, r, i, o, a) {
                return oQ(e, t, !1, null, n, r, i, o, a)
            }
            ,
            s.createHasPseudoClassSelector = function(e) {
                return {
                    $$typeof: iL,
                    value: e
                }
            }
            ,
            s.createHydrationContainer = function(e, t, n, r, i, o, a, s, l) {
                return (e = oQ(n, r, !0, e, i, o, a, s, l)).context = oX(null),
                n = e.current,
                (o = t6(r = of(), i = od(n))).callback = null != t ? t : null,
                t5(n, o),
                e.current.lanes = i,
                tw(e, i, r),
                om(e, r),
                e
            }
            ,
            s.createPortal = function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: p,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }
            ,
            s.createRoleSelector = function(e) {
                return {
                    $$typeof: iD,
                    value: e
                }
            }
            ,
            s.createTestNameSelector = function(e) {
                return {
                    $$typeof: iN,
                    value: e
                }
            }
            ,
            s.createTextSelector = function(e) {
                return {
                    $$typeof: iI,
                    value: e
                }
            }
            ,
            s.deferredUpdates = function(e) {
                var t = tP
                  , n = iQ.transition;
                try {
                    return iQ.transition = null,
                    tP = 16,
                    e()
                } finally {
                    tP = t,
                    iQ.transition = n
                }
            }
            ,
            s.discreteUpdates = function(e, t, n, r, i) {
                var o = tP
                  , a = iQ.transition;
                try {
                    return iQ.transition = null,
                    tP = 1,
                    e(t, n, r, i)
                } finally {
                    tP = o,
                    iQ.transition = a,
                    0 === iX && oe()
                }
            }
            ,
            s.findAllNodes = i$,
            s.findBoundingRects = function(e, t) {
                if (!eo)
                    throw Error(f(363));
                t = i$(e, t),
                e = [];
                for (var n = 0; n < t.length; n++)
                    e.push(es(t[n]));
                for (t = e.length - 1; 0 < t; t--) {
                    n = e[t];
                    for (var r = n.x, i = r + n.width, o = n.y, a = o + n.height, s = t - 1; 0 <= s; s--)
                        if (t !== s) {
                            var l = e[s]
                              , u = l.x
                              , c = u + l.width
                              , d = l.y
                              , h = d + l.height;
                            if (r >= u && o >= d && i <= c && a <= h) {
                                e.splice(t, 1);
                                break
                            }
                            if (r !== u || n.width !== l.width || h < o || d > a) {
                                if (!(o !== d || n.height !== l.height || c < r || u > i)) {
                                    u > r && (l.width += u - r,
                                    l.x = r),
                                    c < i && (l.width = i - u),
                                    e.splice(t, 1);
                                    break
                                }
                            } else {
                                d > o && (l.height += d - o,
                                l.y = o),
                                h < a && (l.height = a - d),
                                e.splice(t, 1);
                                break
                            }
                        }
                }
                return e
            }
            ,
            s.findHostInstance = oY,
            s.findHostInstanceWithNoPortals = function(e) {
                return null === (e = null !== (e = O(e)) ? function e(t) {
                    if (5 === t.tag || 6 === t.tag)
                        return t;
                    for (t = t.child; null !== t; ) {
                        if (4 !== t.tag) {
                            var n = e(t);
                            if (null !== n)
                                return n
                        }
                        t = t.sibling
                    }
                    return null
                }(e) : null) ? null : e.stateNode
            }
            ,
            s.findHostInstanceWithWarning = function(e) {
                return oY(e)
            }
            ,
            s.flushControlled = function(e) {
                var t = iX;
                iX |= 1;
                var n = iQ.transition
                  , r = tP;
                try {
                    iQ.transition = null,
                    tP = 1,
                    e()
                } finally {
                    tP = r,
                    iQ.transition = n,
                    0 === (iX = t) && (oe(),
                    tB())
                }
            }
            ,
            s.flushPassiveEffects = oO,
            s.flushSync = ow,
            s.focusWithin = function(e, t) {
                if (!eo)
                    throw Error(f(363));
                for (t = Array.from(t = iW(e = iV(e), t)),
                e = 0; e < t.length; ) {
                    var n = t[e++];
                    if (!eu(n)) {
                        if (5 === n.tag && ef(n.stateNode))
                            return !0;
                        for (n = n.child; null !== n; )
                            t.push(n),
                            n = n.sibling
                    }
                }
                return !1
            }
            ,
            s.getCurrentUpdatePriority = function() {
                return tP
            }
            ,
            s.getFindAllNodesFailureDescription = function(e, t) {
                if (!eo)
                    throw Error(f(363));
                var n = 0
                  , r = [];
                e = [iV(e), 0];
                for (var i = 0; i < e.length; ) {
                    var o = e[i++]
                      , a = e[i++]
                      , s = t[a];
                    if ((5 !== o.tag || !eu(o)) && (iB(o, s) && (r.push(iU(s)),
                    ++a > n && (n = a)),
                    a < t.length))
                        for (o = o.child; null !== o; )
                            e.push(o, a),
                            o = o.sibling
                }
                if (n < t.length) {
                    for (e = []; n < t.length; n++)
                        e.push(iU(t[n]));
                    return "findAllNodes was able to match part of the selector:\n  " + r.join(" > ") + "\n\nNo matching component was found for:\n  " + e.join(" > ")
                }
                return null
            }
            ,
            s.getPublicRootInstance = function(e) {
                return (e = e.current).child ? 5 === e.child.tag ? L(e.child.stateNode) : e.child.stateNode : null
            }
            ,
            s.injectIntoDevTools = function(e) {
                if (e = {
                    bundleType: e.bundleType,
                    version: e.version,
                    rendererPackageName: e.rendererPackageName,
                    rendererConfig: e.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: d.ReactCurrentDispatcher,
                    findHostInstanceByFiber: oJ,
                    findFiberByHostInstance: e.findFiberByHostInstance || o0,
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.0.0-fc46dba67-20220329"
                },
                "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
                    e = !1;
                else {
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber)
                        e = !0;
                    else {
                        try {
                            tz = t.inject(e),
                            tL = t
                        } catch (e) {}
                        e = !!t.checkDCE
                    }
                }
                return e
            }
            ,
            s.isAlreadyRendering = function() {
                return !1
            }
            ,
            s.observeVisibleRects = function(e, t, n, r) {
                if (!eo)
                    throw Error(f(363));
                var i = ed(e = i$(e, t), n, r).disconnect;
                return {
                    disconnect: function() {
                        i()
                    }
                }
            }
            ,
            s.registerMutableSourceForHydration = function(e, t) {
                var n = t._getVersion;
                n = n(t._source),
                null == e.mutableSourceEagerHydrationData ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n)
            }
            ,
            s.runWithPriority = function(e, t) {
                var n = tP;
                try {
                    return tP = e,
                    t()
                } finally {
                    tP = n
                }
            }
            ,
            s.shouldError = function() {
                return null
            }
            ,
            s.shouldSuspend = function() {
                return !1
            }
            ,
            s.updateContainer = function(e, t, n, r) {
                var i = t.current
                  , o = of()
                  , a = od(i);
                return n = oX(n),
                null === t.context ? t.context = n : t.pendingContext = n,
                (t = t6(o, a)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                t5(i, t),
                null !== (e = oh(i, a, o)) && t8(e, i, a),
                a
            }
            ,
            s
        }
    },
    87777: function(e, t, n) {
        "use strict";
        e.exports = n(78025)
    },
    44812: function(e, t, n) {
        "use strict";
        e.exports = n(5224)
    },
    11803: function(e, t) {
        "use strict";
        /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        function n(e, t) {
            var n = e.length;
            for (e.push(t); 0 < n; ) {
                var r = n - 1 >>> 1
                  , i = e[r];
                if (0 < o(i, t))
                    e[r] = t,
                    e[n] = i,
                    n = r;
                else
                    break
            }
        }
        function r(e) {
            return 0 === e.length ? null : e[0]
        }
        function i(e) {
            if (0 === e.length)
                return null;
            var t = e[0]
              , n = e.pop();
            if (n !== t) {
                e[0] = n;
                for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
                    var s = 2 * (r + 1) - 1
                      , l = e[s]
                      , u = s + 1
                      , c = e[u];
                    if (0 > o(l, n))
                        u < i && 0 > o(c, l) ? (e[r] = c,
                        e[u] = n,
                        r = u) : (e[r] = l,
                        e[s] = n,
                        r = s);
                    else if (u < i && 0 > o(c, n))
                        e[r] = c,
                        e[u] = n,
                        r = u;
                    else
                        break
                }
            }
            return t
        }
        function o(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var a, s = performance;
            t.unstable_now = function() {
                return s.now()
            }
        } else {
            var l = Date
              , u = l.now();
            t.unstable_now = function() {
                return l.now() - u
            }
        }
        var c = []
          , f = []
          , d = 1
          , h = null
          , p = 3
          , m = !1
          , v = !1
          , g = !1
          , y = "function" == typeof setTimeout ? setTimeout : null
          , b = "function" == typeof clearTimeout ? clearTimeout : null
          , x = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
            for (var t = r(f); null !== t; ) {
                if (null === t.callback)
                    i(f);
                else if (t.startTime <= e)
                    i(f),
                    t.sortIndex = t.expirationTime,
                    n(c, t);
                else
                    break;
                t = r(f)
            }
        }
        function S(e) {
            if (g = !1,
            w(e),
            !v) {
                if (null !== r(c))
                    v = !0,
                    R(P);
                else {
                    var t = r(f);
                    null !== t && z(S, t.startTime - e)
                }
            }
        }
        function P(e, n) {
            v = !1,
            g && (g = !1,
            b(C),
            C = -1),
            m = !0;
            var o = p;
            try {
                for (w(n),
                h = r(c); null !== h && (!(h.expirationTime > n) || e && !M()); ) {
                    var a = h.callback;
                    if ("function" == typeof a) {
                        h.callback = null,
                        p = h.priorityLevel;
                        var s = a(h.expirationTime <= n);
                        n = t.unstable_now(),
                        "function" == typeof s ? h.callback = s : h === r(c) && i(c),
                        w(n)
                    } else
                        i(c);
                    h = r(c)
                }
                if (null !== h)
                    var l = !0;
                else {
                    var u = r(f);
                    null !== u && z(S, u.startTime - n),
                    l = !1
                }
                return l
            } finally {
                h = null,
                p = o,
                m = !1
            }
        }
        "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k = !1
          , E = null
          , C = -1
          , T = 5
          , _ = -1;
        function M() {
            return !(t.unstable_now() - _ < T)
        }
        function j() {
            if (null !== E) {
                var e = t.unstable_now();
                _ = e;
                var n = !0;
                try {
                    n = E(!0, e)
                } finally {
                    n ? a() : (k = !1,
                    E = null)
                }
            } else
                k = !1
        }
        if ("function" == typeof x)
            a = function() {
                x(j)
            }
            ;
        else if ("undefined" != typeof MessageChannel) {
            var O = new MessageChannel
              , A = O.port2;
            O.port1.onmessage = j,
            a = function() {
                A.postMessage(null)
            }
        } else
            a = function() {
                y(j, 0)
            }
            ;
        function R(e) {
            E = e,
            k || (k = !0,
            a())
        }
        function z(e, n) {
            C = y(function() {
                e(t.unstable_now())
            }, n)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(e) {
            e.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            v || m || (v = !0,
            R(P))
        }
        ,
        t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return p
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(c)
        }
        ,
        t.unstable_next = function(e) {
            switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = p
            }
            var n = p;
            p = t;
            try {
                return e()
            } finally {
                p = n
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
            }
            var n = p;
            p = e;
            try {
                return t()
            } finally {
                p = n
            }
        }
        ,
        t.unstable_scheduleCallback = function(e, i, o) {
            var a = t.unstable_now();
            switch (o = "object" == typeof o && null !== o && "number" == typeof (o = o.delay) && 0 < o ? a + o : a,
            e) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default:
                s = 5e3
            }
            return s = o + s,
            e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: s,
                sortIndex: -1
            },
            o > a ? (e.sortIndex = o,
            n(f, e),
            null === r(c) && e === r(f) && (g ? (b(C),
            C = -1) : g = !0,
            z(S, o - a))) : (e.sortIndex = s,
            n(c, e),
            v || m || (v = !0,
            R(P))),
            e
        }
        ,
        t.unstable_shouldYield = M,
        t.unstable_wrapCallback = function(e) {
            var t = p;
            return function() {
                var n = p;
                p = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    p = n
                }
            }
        }
    },
    99514: function(e, t, n) {
        "use strict";
        e.exports = n(11803)
    },
    14749: function(e, t, n) {
        "use strict";
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    56093: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        n.d(t, {
            _: function() {
                return r
            }
        })
    },
    75504: function(e, t, n) {
        "use strict";
        function r() {
            for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
                (e = arguments[n]) && (t = function e(t) {
                    var n, r, i = "";
                    if ("string" == typeof t || "number" == typeof t)
                        i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var o = t.length;
                            for (n = 0; n < o; n++)
                                t[n] && (r = e(t[n])) && (i && (i += " "),
                                i += r)
                        } else
                            for (r in t)
                                t[r] && (i && (i += " "),
                                i += r)
                    }
                    return i
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
        n.d(t, {
            W: function() {
                return r
            }
        })
    },
    39806: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return f
            }
        });
        var r = n(33303)
          , i = n(37229)
          , o = n(29908)
          , a = n(22476);
        function s(e, t) {
            return e * Math.sqrt(1 - t * t)
        }
        let l = ["duration", "bounce"]
          , u = ["stiffness", "damping", "mass"];
        function c(e, t) {
            return t.some(t=>void 0 !== e[t])
        }
        function f({keyframes: e, restDelta: t, restSpeed: n, ...f}) {
            let d;
            let h = e[0]
              , p = e[e.length - 1]
              , m = {
                done: !1,
                value: h
            }
              , {stiffness: v, damping: g, mass: y, duration: b, velocity: x, isResolvedFromDuration: w} = function(e) {
                let t = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!c(e, u) && c(e, l)) {
                    let n = function({duration: e=800, bounce: t=.25, velocity: n=0, mass: i=1}) {
                        let l, u;
                        (0,
                        o.K)(e <= (0,
                        r.w)(10), "Spring duration must be 10 seconds or less");
                        let c = 1 - t;
                        c = (0,
                        a.u)(.05, 1, c),
                        e = (0,
                        a.u)(.01, 10, (0,
                        r.X)(e)),
                        c < 1 ? (l = t=>{
                            let r = t * c
                              , i = r * e;
                            return .001 - (r - n) / s(t, c) * Math.exp(-i)
                        }
                        ,
                        u = t=>{
                            let r = t * c * e
                              , i = Math.pow(c, 2) * Math.pow(t, 2) * e
                              , o = Math.exp(-r)
                              , a = s(Math.pow(t, 2), c);
                            return (r * n + n - i) * o * (-l(t) + .001 > 0 ? -1 : 1) / a
                        }
                        ) : (l = t=>-.001 + Math.exp(-t * e) * ((t - n) * e + 1),
                        u = t=>e * e * (n - t) * Math.exp(-t * e));
                        let f = function(e, t, n) {
                            let r = n;
                            for (let n = 1; n < 12; n++)
                                r -= e(r) / t(r);
                            return r
                        }(l, u, 5 / e);
                        if (e = (0,
                        r.w)(e),
                        isNaN(f))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            };
                        {
                            let t = Math.pow(f, 2) * i;
                            return {
                                stiffness: t,
                                damping: 2 * c * Math.sqrt(i * t),
                                duration: e
                            }
                        }
                    }(e);
                    (t = {
                        ...t,
                        ...n,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return t
            }({
                ...f,
                velocity: -(0,
                r.X)(f.velocity || 0)
            })
              , S = x || 0
              , P = g / (2 * Math.sqrt(v * y))
              , k = p - h
              , E = (0,
            r.X)(Math.sqrt(v / y))
              , C = 5 > Math.abs(k);
            if (n || (n = C ? .01 : 2),
            t || (t = C ? .005 : .5),
            P < 1) {
                let e = s(E, P);
                d = t=>p - Math.exp(-P * E * t) * ((S + P * E * k) / e * Math.sin(e * t) + k * Math.cos(e * t))
            } else if (1 === P)
                d = e=>p - Math.exp(-E * e) * (k + (S + E * k) * e);
            else {
                let e = E * Math.sqrt(P * P - 1);
                d = t=>{
                    let n = Math.exp(-P * E * t)
                      , r = Math.min(e * t, 300);
                    return p - n * ((S + P * E * k) * Math.sinh(r) + e * k * Math.cosh(r)) / e
                }
            }
            return {
                calculatedDuration: w && b || null,
                next: e=>{
                    let r = d(e);
                    if (w)
                        m.done = e >= b;
                    else {
                        let o = S;
                        0 !== e && (o = P < 1 ? (0,
                        i.P)(d, e, r) : 0);
                        let a = Math.abs(o) <= n
                          , s = Math.abs(p - r) <= t;
                        m.done = a && s
                    }
                    return m.value = m.done ? p : r,
                    m
                }
            }
        }
    },
    19323: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return r
            },
            i: function() {
                return i
            }
        });
        let r = 2e4;
        function i(e) {
            let t = 0
              , n = e.next(t);
            for (; !n.done && t < r; )
                t += 50,
                n = e.next(t);
            return t >= r ? 1 / 0 : t
        }
    },
    37229: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return i
            }
        });
        var r = n(92181);
        function i(e, t, n) {
            let i = Math.max(t - 5, 0);
            return (0,
            r.R)(n - e(i), t - i)
        }
    },
    63706: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return D
            }
        });
        var r = n(72435)
          , i = n(62444)
          , o = n(84637)
          , a = n(48854)
          , s = n(29908)
          , l = n(14205);
        let u = (0,
        n(66190).X)(()=>void 0 !== window.ScrollTimeline);
        class c {
            constructor(e) {
                this.animations = e.filter(Boolean)
            }
            then(e, t) {
                return Promise.all(this.animations).then(e).catch(t)
            }
            getAll(e) {
                return this.animations[0][e]
            }
            setAll(e, t) {
                for (let n = 0; n < this.animations.length; n++)
                    this.animations[n][e] = t
            }
            attachTimeline(e) {
                let t = this.animations.map(t=>{
                    if (!u() || !t.attachTimeline)
                        return t.pause(),
                        function(e, t) {
                            let n;
                            let r = ()=>{
                                let {currentTime: r} = t
                                  , i = (null === r ? 0 : r.value) / 100;
                                n !== i && e(i),
                                n = i
                            }
                            ;
                            return l.Wi.update(r, !0),
                            ()=>(0,
                            l.Pn)(r)
                        }(e=>{
                            t.time = t.duration * e
                        }
                        , e);
                    t.attachTimeline(e)
                }
                );
                return ()=>{
                    t.forEach((e,t)=>{
                        e && e(),
                        this.animations[t].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(e) {
                this.setAll("time", e)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(e) {
                this.setAll("speed", e)
            }
            get duration() {
                let e = 0;
                for (let t = 0; t < this.animations.length; t++)
                    e = Math.max(e, this.animations[t].duration);
                return e
            }
            runAll(e) {
                this.animations.forEach(t=>t[e]())
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            stop() {
                this.runAll("stop")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        var f = n(31258)
          , d = n(41937)
          , h = n(81165)
          , p = n(86276)
          , m = n(96659)
          , v = n(39806)
          , g = n(19323)
          , y = n(33303)
          , b = n(55865)
          , x = n(12426)
          , w = n(16384)
          , S = n(82702);
        function P(e, t, n, r) {
            var i;
            return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null !== (i = r.get(t)) && void 0 !== i ? i : e
        }
        let k = (e,t,n)=>{
            let r = t - e;
            return ((n - e) % r + r) % r + e
        }
        ;
        var E = n(10113)
          , C = n(50406)
          , T = n(5312);
        function _(e, t) {
            return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
        }
        function M(e, t) {
            return t.has(e) || t.set(e, {}),
            t.get(e)
        }
        function j(e, t) {
            return t[e] || (t[e] = []),
            t[e]
        }
        let O = e=>"number" == typeof e
          , A = e=>e.every(O);
        function R(e, t, n, r) {
            let i = (0,
            o.I)(e, r)
              , l = i.length;
            (0,
            s.k)(!!l, "No valid element provided.");
            let u = [];
            for (let e = 0; e < l; e++) {
                let r = i[e];
                a.R.has(r) || function(e) {
                    let t = {
                        presenceContext: null,
                        props: {},
                        visualState: {
                            renderState: {
                                transform: {},
                                transformOrigin: {},
                                style: {},
                                vars: {},
                                attrs: {}
                            },
                            latestValues: {}
                        }
                    }
                      , n = (0,
                    d.v)(e) ? new h.e(t,{
                        enableHardwareAcceleration: !1
                    }) : new p.W(t,{
                        enableHardwareAcceleration: !0
                    });
                    n.mount(e),
                    a.R.set(e, n)
                }(r);
                let o = a.R.get(r)
                  , s = {
                    ...n
                };
                "function" == typeof s.delay && (s.delay = s.delay(e, l)),
                u.push(...(0,
                f.w)(o, {
                    ...t,
                    transition: s
                }, {}))
            }
            return new c(u)
        }
        let z = e=>Array.isArray(e) && Array.isArray(e[0])
          , L = e=>function(t, n, r) {
            let i;
            return i = z(t) ? function(e, t, n) {
                let r = [];
                return (function(e, {defaultTransition: t={}, ...n}={}, r) {
                    let i = t.duration || .3
                      , a = new Map
                      , s = new Map
                      , l = {}
                      , u = new Map
                      , c = 0
                      , f = 0
                      , d = 0;
                    for (let n = 0; n < e.length; n++) {
                        let a = e[n];
                        if ("string" == typeof a) {
                            u.set(a, f);
                            continue
                        }
                        if (!Array.isArray(a)) {
                            u.set(a.name, P(f, a.at, c, u));
                            continue
                        }
                        let[h,p,m={}] = a;
                        void 0 !== m.at && (f = P(f, m.at, c, u));
                        let w = 0
                          , _ = (e,n,r,o=0,a=0)=>{
                            let s = Array.isArray(e) ? e : [e]
                              , {delay: l=0, times: u=(0,
                            b.Y)(s), type: c="keyframes", ...h} = n
                              , {ease: p=t.ease || "easeOut", duration: m} = n
                              , S = "function" == typeof l ? l(o, a) : l
                              , P = s.length;
                            if (P <= 2 && "spring" === c) {
                                let e = 100;
                                2 === P && A(s) && (e = Math.abs(s[1] - s[0]));
                                let t = {
                                    ...h
                                };
                                void 0 !== m && (t.duration = (0,
                                y.w)(m));
                                let n = function(e, t=100) {
                                    let n = (0,
                                    v.S)({
                                        keyframes: [0, t],
                                        ...e
                                    })
                                      , r = Math.min((0,
                                    g.i)(n), g.E);
                                    return {
                                        type: "keyframes",
                                        ease: e=>n.next(r * e).value / t,
                                        duration: (0,
                                        y.X)(r)
                                    }
                                }(t, e);
                                p = n.ease,
                                m = n.duration
                            }
                            null != m || (m = i);
                            let _ = f + S
                              , M = _ + m;
                            1 === u.length && 0 === u[0] && (u[1] = 1);
                            let j = u.length - s.length;
                            j > 0 && (0,
                            x.c)(u, j),
                            1 === s.length && s.unshift(null),
                            function(e, t, n, r, i, o) {
                                !function(e, t, n) {
                                    for (let r = 0; r < e.length; r++) {
                                        let i = e[r];
                                        i.at > t && i.at < n && ((0,
                                        C.cl)(e, i),
                                        r--)
                                    }
                                }(e, i, o);
                                for (let s = 0; s < t.length; s++) {
                                    var a;
                                    e.push({
                                        value: t[s],
                                        at: (0,
                                        T.t)(i, o, r[s]),
                                        easing: (a = s,
                                        (0,
                                        E.N)(n) ? n[k(0, n.length, a)] : n)
                                    })
                                }
                            }(r, s, p, u, _, M),
                            w = Math.max(S + m, w),
                            d = Math.max(M, d)
                        }
                        ;
                        if ((0,
                        S.i)(h))
                            _(p, m, j("default", M(h, s)));
                        else {
                            let e = (0,
                            o.I)(h, r, l)
                              , t = e.length;
                            for (let n = 0; n < t; n++) {
                                let r = M(e[n], s);
                                for (let e in p)
                                    _(p[e], m[e] ? {
                                        ...m,
                                        ...m[e]
                                    } : {
                                        ...m
                                    }, j(e, r), n, t)
                            }
                        }
                        c = f,
                        f += w
                    }
                    return s.forEach((e,r)=>{
                        for (let i in e) {
                            let o = e[i];
                            o.sort(_);
                            let s = []
                              , l = []
                              , u = [];
                            for (let e = 0; e < o.length; e++) {
                                let {at: t, value: n, easing: r} = o[e];
                                s.push(n),
                                l.push((0,
                                w.Y)(0, d, t)),
                                u.push(r || "easeOut")
                            }
                            0 !== l[0] && (l.unshift(0),
                            s.unshift(s[0]),
                            u.unshift("easeInOut")),
                            1 !== l[l.length - 1] && (l.push(1),
                            s.push(null)),
                            a.has(r) || a.set(r, {
                                keyframes: {},
                                transition: {}
                            });
                            let c = a.get(r);
                            c.keyframes[i] = s,
                            c.transition[i] = {
                                ...t,
                                duration: d,
                                ease: u,
                                times: l,
                                ...n
                            }
                        }
                    }
                    ),
                    a
                }
                )(e, t, n).forEach(({keyframes: e, transition: t},n)=>{
                    let i;
                    i = (0,
                    S.i)(n) ? (0,
                    m.D)(n, e.default, t.default) : R(n, e, t),
                    r.push(i)
                }
                ),
                new c(r)
            }(t, n, e) : "object" != typeof n || Array.isArray(n) ? (0,
            m.D)(t, n, r) : R(t, n, r, e),
            e && e.animations.push(i),
            i
        }
        ;
        function D() {
            let e = (0,
            r.h)(()=>({
                current: null,
                animations: []
            }))
              , t = (0,
            r.h)(()=>L(e));
            return (0,
            i.z)(()=>{
                e.animations.forEach(e=>e.stop())
            }
            ),
            [e, t]
        }
        L()
    },
    58669: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return Y
            }
        });
        var r = n(33303)
          , i = n(60618);
        let o = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , a = e=>({
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , s = {
            type: "keyframes",
            duration: .8
        }
          , l = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , u = (e,{keyframes: t})=>t.length > 2 ? s : i.G.has(e) ? e.startsWith("scale") ? a(t[1]) : o : l;
        var c = n(95566)
          , f = n(36832);
        let d = {
            current: !1
        }
          , h = e=>null !== e;
        function p(e, {repeat: t, repeatType: n="loop"}, r) {
            let i = e.filter(h)
              , o = t && "loop" !== n && t % 2 == 1 ? 0 : i.length - 1;
            return o && void 0 !== r ? r : i[o]
        }
        var m = n(14205)
          , v = n(33791)
          , g = n(20928)
          , y = n(66190)
          , b = n(3393)
          , x = n(54178)
          , w = n(29908)
          , S = n(92263);
        let P = (e,t)=>"zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (S.P.test(e) || "0" === e) && !e.startsWith("url("));
        class k {
            constructor({autoplay: e=!0, delay: t=0, type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o="loop", ...a}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.options = {
                    autoplay: e,
                    delay: t,
                    type: n,
                    repeat: r,
                    repeatDelay: i,
                    repeatType: o,
                    ...a
                },
                this.updateFinishedPromise()
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (0,
                x.m)(),
                this._resolved
            }
            onKeyframesResolved(e, t) {
                this.hasAttemptedResolve = !0;
                let {name: n, type: r, velocity: i, delay: o, onComplete: a, onUpdate: s, isGenerator: l} = this.options;
                if (!l && !function(e, t, n, r) {
                    let i = e[0];
                    if (null === i)
                        return !1;
                    let o = e[e.length - 1]
                      , a = P(i, t)
                      , s = P(o, t);
                    return (0,
                    w.K)(a === s, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),
                    !!a && !!s && (function(e) {
                        let t = e[0];
                        if (1 === e.length)
                            return !0;
                        for (let n = 0; n < e.length; n++)
                            if (e[n] !== t)
                                return !0
                    }(e) || "spring" === n && r)
                }(e, n, r, i)) {
                    if (d.current || !o) {
                        null == s || s(p(e, this.options, t)),
                        null == a || a(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(e, t);
                !1 !== u && (this._resolved = {
                    keyframes: e,
                    finalKeyframe: t,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(e, t) {
                return this.currentFinishedPromise.then(e, t)
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(e=>{
                    this.resolveFinishedPromise = e
                }
                )
            }
        }
        var E = n(39806)
          , C = n(37229);
        function T({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: a, min: s, max: l, restDelta: u=.5, restSpeed: c}) {
            let f, d;
            let h = e[0]
              , p = {
                done: !1,
                value: h
            }
              , m = e=>void 0 !== s && e < s || void 0 !== l && e > l
              , v = e=>void 0 === s ? l : void 0 === l ? s : Math.abs(s - e) < Math.abs(l - e) ? s : l
              , g = n * t
              , y = h + g
              , b = void 0 === a ? y : a(y);
            b !== y && (g = b - h);
            let x = e=>-g * Math.exp(-e / r)
              , w = e=>b + x(e)
              , S = e=>{
                let t = x(e)
                  , n = w(e);
                p.done = Math.abs(t) <= u,
                p.value = p.done ? b : n
            }
              , P = e=>{
                m(p.value) && (f = e,
                d = (0,
                E.S)({
                    keyframes: [p.value, v(p.value)],
                    velocity: (0,
                    C.P)(w, e, p.value),
                    damping: i,
                    stiffness: o,
                    restDelta: u,
                    restSpeed: c
                }))
            }
            ;
            return P(0),
            {
                calculatedDuration: null,
                next: e=>{
                    let t = !1;
                    return (d || void 0 !== f || (t = !0,
                    S(e),
                    P(e)),
                    void 0 !== f && e >= f) ? d.next(e - f) : (t || S(e),
                    p)
                }
            }
        }
        var _ = n(39569)
          , M = n(10113)
          , j = n(47544)
          , O = n(39780)
          , A = n(55865);
        function R({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
            let i = (0,
            M.N)(r) ? r.map(j.R) : (0,
            j.R)(r)
              , o = {
                done: !1,
                value: t[0]
            }
              , a = (n && n.length === t.length ? n : (0,
            A.Y)(t)).map(t=>t * e)
              , s = (0,
            O.s)(a, t, {
                ease: Array.isArray(i) ? i : t.map(()=>i || _.mZ).splice(0, t.length - 1)
            });
            return {
                calculatedDuration: e,
                next: t=>(o.value = s(t),
                o.done = t >= e,
                o)
            }
        }
        var z = n(19280)
          , L = n(67416)
          , D = n(19323)
          , N = n(22476);
        let I = e=>{
            let t = ({timestamp: t})=>e(t);
            return {
                start: ()=>m.Wi.update(t, !0),
                stop: ()=>(0,
                m.Pn)(t),
                now: ()=>m.frameData.isProcessing ? m.frameData.timestamp : v.X.now()
            }
        }
          , F = {
            decay: T,
            inertia: T,
            tween: R,
            keyframes: R,
            spring: E.S
        }
          , V = e=>e / 100;
        class B extends k {
            constructor({KeyframeResolver: e=x.e, ...t}) {
                super(t),
                this.holdTime = null,
                this.startTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.state = "idle",
                this.stop = ()=>{
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: e} = this.options;
                    e && e()
                }
                ;
                let {name: n, motionValue: r, keyframes: i} = this.options
                  , o = (e,t)=>this.onKeyframesResolved(e, t);
                n && r && r.owner ? this.resolver = r.owner.resolveKeyframes(i, o, n, r) : this.resolver = new e(i,o,n,r),
                this.resolver.scheduleResolve()
            }
            initPlayback(e) {
                let t, n;
                let {type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: a, velocity: s=0} = this.options
                  , l = F[r] || R;
                l !== R && "number" != typeof e[0] && (t = (0,
                z.z)(V, (0,
                L.C)(e[0], e[1])),
                e = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: e
                });
                "mirror" === a && (n = l({
                    ...this.options,
                    keyframes: [...e].reverse(),
                    velocity: -s
                })),
                null === u.calculatedDuration && (u.calculatedDuration = (0,
                D.i)(u));
                let {calculatedDuration: c} = u
                  , f = c + o;
                return {
                    generator: u,
                    mirroredGenerator: n,
                    mapPercentToKeyframes: t,
                    calculatedDuration: c,
                    resolvedDuration: f,
                    totalDuration: f * (i + 1) - o
                }
            }
            onPostResolved() {
                let {autoplay: e=!0} = this.options;
                this.play(),
                "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
            }
            tick(e, t=!1) {
                let {resolved: n} = this;
                if (!n) {
                    let {keyframes: e} = this.options;
                    return {
                        done: !0,
                        value: e[e.length - 1]
                    }
                }
                let {finalKeyframe: r, generator: i, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: s, calculatedDuration: l, totalDuration: u, resolvedDuration: c} = n;
                if (null === this.startTime)
                    return i.next(0);
                let {delay: f, repeat: d, repeatType: h, repeatDelay: m, onUpdate: v} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
                t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
                let g = this.currentTime - f * (this.speed >= 0 ? 1 : -1)
                  , y = this.speed >= 0 ? g < 0 : g > u;
                this.currentTime = Math.max(g, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let b = this.currentTime
                  , x = i;
                if (d) {
                    let e = Math.min(this.currentTime, u) / c
                      , t = Math.floor(e)
                      , n = e % 1;
                    !n && e >= 1 && (n = 1),
                    1 === n && t--,
                    (t = Math.min(t, d + 1)) % 2 && ("reverse" === h ? (n = 1 - n,
                    m && (n -= m / c)) : "mirror" === h && (x = o)),
                    b = (0,
                    N.u)(0, 1, n) * c
                }
                let w = y ? {
                    done: !1,
                    value: s[0]
                } : x.next(b);
                a && (w.value = a(w.value));
                let {done: S} = w;
                y || null === l || (S = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
                return P && void 0 !== r && (w.value = p(s, this.options, r)),
                v && v(w.value),
                P && this.finish(),
                w
            }
            get duration() {
                let {resolved: e} = this;
                return e ? (0,
                r.X)(e.calculatedDuration) : 0
            }
            get time() {
                return (0,
                r.X)(this.currentTime)
            }
            set time(e) {
                e = (0,
                r.w)(e),
                this.currentTime = e,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(e) {
                let t = this.playbackSpeed !== e;
                this.playbackSpeed = e,
                t && (this.time = (0,
                r.X)(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: e=I, onPlay: t} = this.options;
                this.driver || (this.driver = e(e=>this.tick(e))),
                t && t();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime && "finished" !== this.state || (this.startTime = n),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var e;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: e} = this.options;
                e && e()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(e) {
                return this.startTime = 0,
                this.tick(e, !0)
            }
        }
        let U = e=>Array.isArray(e) && "number" == typeof e[0]
          , W = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
          , $ = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: W([0, .65, .55, 1]),
            circOut: W([.55, 0, 1, .45]),
            backIn: W([.31, .01, .66, -.59]),
            backOut: W([.33, 1.53, .69, .99])
        };
        function H(e) {
            return q(e) || $.easeOut
        }
        function q(e) {
            if (e)
                return U(e) ? W(e) : Array.isArray(e) ? e.map(H) : $[e]
        }
        let G = (0,
        y.X)(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
          , Q = new Set(["opacity", "clipPath", "filter", "transform"]);
        class X extends k {
            constructor(e) {
                super(e);
                let {name: t, motionValue: n, keyframes: r} = this.options;
                this.resolver = new g.s(r,(e,t)=>this.onKeyframesResolved(e, t),t,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(e, t) {
                var n, r;
                let {duration: i=300, times: o, ease: a, type: s, motionValue: l, name: u} = this.options;
                if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
                    return !1;
                if ("spring" === (r = this.options).type || "backgroundColor" === r.name || !function e(t) {
                    return !!(!t || "string" == typeof t && t in $ || U(t) || Array.isArray(t) && t.every(e))
                }(r.ease)) {
                    let {onComplete: t, onUpdate: n, motionValue: r, ...l} = this.options
                      , u = function(e, t) {
                        let n = new B({
                            ...t,
                            keyframes: e,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , r = {
                            done: !1,
                            value: e[0]
                        }
                          , i = []
                          , o = 0;
                        for (; !r.done && o < 2e4; )
                            i.push((r = n.sample(o)).value),
                            o += 10;
                        return {
                            times: void 0,
                            keyframes: i,
                            duration: o - 10,
                            ease: "linear"
                        }
                    }(e, l);
                    1 === (e = u.keyframes).length && (e[1] = e[0]),
                    i = u.duration,
                    o = u.times,
                    a = u.ease,
                    s = "keyframes"
                }
                let c = function(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: a="loop", ease: s, times: l}={}) {
                    let u = {
                        [t]: n
                    };
                    l && (u.offset = l);
                    let c = q(s);
                    return Array.isArray(c) && (u.easing = c),
                    e.animate(u, {
                        delay: r,
                        duration: i,
                        easing: Array.isArray(c) ? "linear" : c,
                        fill: "both",
                        iterations: o + 1,
                        direction: "reverse" === a ? "alternate" : "normal"
                    })
                }(l.owner.current, u, e, {
                    ...this.options,
                    duration: i,
                    times: o,
                    ease: a
                });
                return c.startTime = v.X.now(),
                this.pendingTimeline ? (c.timeline = this.pendingTimeline,
                this.pendingTimeline = void 0) : c.onfinish = ()=>{
                    let {onComplete: n} = this.options;
                    l.set(p(e, this.options, t)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: c,
                    duration: i,
                    times: o,
                    type: s,
                    ease: a,
                    keyframes: e
                }
            }
            get duration() {
                let {resolved: e} = this;
                if (!e)
                    return 0;
                let {duration: t} = e;
                return (0,
                r.X)(t)
            }
            get time() {
                let {resolved: e} = this;
                if (!e)
                    return 0;
                let {animation: t} = e;
                return (0,
                r.X)(t.currentTime || 0)
            }
            set time(e) {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: n} = t;
                n.currentTime = (0,
                r.w)(e)
            }
            get speed() {
                let {resolved: e} = this;
                if (!e)
                    return 1;
                let {animation: t} = e;
                return t.playbackRate
            }
            set speed(e) {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: n} = t;
                n.playbackRate = e
            }
            get state() {
                let {resolved: e} = this;
                if (!e)
                    return "idle";
                let {animation: t} = e;
                return t.playState
            }
            attachTimeline(e) {
                if (this._resolved) {
                    let {resolved: t} = this;
                    if (!t)
                        return b.Z;
                    let {animation: n} = t;
                    n.timeline = e,
                    n.onfinish = null
                } else
                    this.pendingTimeline = e;
                return b.Z
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: t} = e;
                "finished" === t.playState && this.updateFinishedPromise(),
                t.play()
            }
            pause() {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: t} = e;
                t.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: t, keyframes: n, duration: i, type: o, ease: a, times: s} = e;
                if ("idle" !== t.playState && "finished" !== t.playState) {
                    if (this.time) {
                        let {motionValue: e, onUpdate: t, onComplete: l, ...u} = this.options
                          , c = new B({
                            ...u,
                            keyframes: n,
                            duration: i,
                            type: o,
                            ease: a,
                            times: s,
                            isGenerator: !0
                        })
                          , f = (0,
                        r.w)(this.time);
                        e.setWithVelocity(c.sample(f - 10).value, c.sample(f).value, 10)
                    }
                    this.cancel()
                }
            }
            complete() {
                let {resolved: e} = this;
                e && e.animation.finish()
            }
            cancel() {
                let {resolved: e} = this;
                e && e.animation.cancel()
            }
            static supports(e) {
                let {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: a} = e;
                return G() && n && Q.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && "mirror" !== i && 0 !== o && "inertia" !== a
            }
        }
        let Y = (e,t,n,i={},o,a)=>s=>{
            let l = (0,
            c.e)(i, e) || {}
              , h = l.delay || i.delay || 0
              , {elapsed: v=0} = i;
            v -= (0,
            r.w)(h);
            let g = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...l,
                delay: -v,
                onUpdate: e=>{
                    t.set(e),
                    l.onUpdate && l.onUpdate(e)
                }
                ,
                onComplete: ()=>{
                    s(),
                    l.onComplete && l.onComplete()
                }
                ,
                name: e,
                motionValue: t,
                element: a ? void 0 : o
            };
            (0,
            c.r)(l) || (g = {
                ...g,
                ...u(e, g)
            }),
            g.duration && (g.duration = (0,
            r.w)(g.duration)),
            g.repeatDelay && (g.repeatDelay = (0,
            r.w)(g.repeatDelay)),
            void 0 !== g.from && (g.keyframes[0] = g.from);
            let y = !1;
            if (!1 !== g.type && (0 !== g.duration || g.repeatDelay) || (g.duration = 0,
            0 !== g.delay || (y = !0)),
            (d.current || f.c.skipAnimations) && (y = !0,
            g.duration = 0,
            g.delay = 0),
            y && !a && void 0 !== t.get()) {
                let e = p(g.keyframes, l);
                if (void 0 !== e) {
                    m.Wi.update(()=>{
                        g.onUpdate(e),
                        g.onComplete()
                    }
                    );
                    return
                }
            }
            return !a && X.supports(g) ? new X(g) : new B(g)
        }
    },
    96659: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return a
            }
        });
        var r = n(58669)
          , i = n(83299)
          , o = n(82702);
        function a(e, t, n) {
            let a = (0,
            o.i)(e) ? e : (0,
            i.BX)(e);
            return a.start((0,
            r.v)("", a, t, n)),
            a.animation
        }
    },
    31258: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return d
            }
        });
        var r = n(60618)
          , i = n(69043)
          , o = n(58669)
          , a = n(62212)
          , s = n(30698)
          , l = n(83299)
          , u = n(1148)
          , c = n(95566)
          , f = n(14205);
        function d(e, t, {delay: n=0, transitionOverride: d, type: h}={}) {
            var p;
            let {transition: m=e.getDefaultTransition(), transitionEnd: v, ...g} = t
              , y = e.getValue("willChange");
            d && (m = d);
            let b = []
              , x = h && e.animationState && e.animationState.getState()[h];
            for (let t in g) {
                let s = e.getValue(t, null !== (p = e.latestValues[t]) && void 0 !== p ? p : null)
                  , l = g[t];
                if (void 0 === l || x && function({protectedKeys: e, needsAnimating: t}, n) {
                    let r = e.hasOwnProperty(n) && !0 !== t[n];
                    return t[n] = !1,
                    r
                }(x, t))
                    continue;
                let u = {
                    delay: n,
                    elapsed: 0,
                    ...(0,
                    c.e)(m || {}, t)
                }
                  , f = !1;
                if (window.HandoffAppearAnimations) {
                    let n = e.getProps()[i.M];
                    if (n) {
                        let e = window.HandoffAppearAnimations(n, t);
                        null !== e && (u.elapsed = e,
                        f = !0)
                    }
                }
                s.start((0,
                o.v)(t, s, l, e.shouldReduceMotion && r.G.has(t) ? {
                    type: !1
                } : u, e, f));
                let d = s.animation;
                d && ((0,
                a.L)(y) && (y.add(t),
                d.then(()=>y.remove(t))),
                b.push(d))
            }
            return v && Promise.all(b).then(()=>{
                f.Wi.update(()=>{
                    v && function(e, t) {
                        let {transitionEnd: n={}, transition: r={}, ...i} = (0,
                        u.x)(e, t) || {};
                        for (let t in i = {
                            ...i,
                            ...n
                        }) {
                            let n = (0,
                            s.Y)(i[t]);
                            e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, (0,
                            l.BX)(n))
                        }
                    }(e, v)
                }
                )
            }
            ),
            b
        }
    },
    69043: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return r
            }
        });
        let r = "data-" + (0,
        n(65998).D)("framerAppearId")
    },
    54633: function(e, t, n) {
        "use strict";
        function r(e) {
            return null !== e && "object" == typeof e && "function" == typeof e.start
        }
        n.d(t, {
            H: function() {
                return r
            }
        })
    },
    60561: function(e, t, n) {
        "use strict";
        n.d(t, {
            C: function() {
                return r
            }
        });
        let r = e=>Array.isArray(e)
    },
    26990: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return i
            }
        });
        var r = n(47544);
        function i(e=.1, {startDelay: t=0, from: n=0, ease: i}={}) {
            return (o,a)=>{
                let s = e * Math.abs(("number" == typeof n ? n : function(e, t) {
                    if ("first" === e)
                        return 0;
                    {
                        let n = t - 1;
                        return "last" === e ? n : n / 2
                    }
                }(n, a)) - o);
                if (i) {
                    let t = a * e;
                    s = (0,
                    r.R)(i)(s / t) * t
                }
                return t + s
            }
        }
    },
    95566: function(e, t, n) {
        "use strict";
        function r({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c}) {
            return !!Object.keys(c).length
        }
        function i(e, t) {
            return e[t] || e.default || e
        }
        n.d(t, {
            e: function() {
                return i
            },
            r: function() {
                return r
            }
        })
    },
    46368: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return b
            }
        });
        var r = n(57437)
          , i = n(2265)
          , o = n(45526);
        function a() {
            let e = (0,
            i.useRef)(!1);
            return (0,
            o.L)(()=>(e.current = !0,
            ()=>{
                e.current = !1
            }
            ), []),
            e
        }
        var s = n(14205)
          , l = n(24561)
          , u = n(72435)
          , c = n(93449);
        class f extends i.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                    let e = this.props.sizeRef.current;
                    e.height = t.offsetHeight || 0,
                    e.width = t.offsetWidth || 0,
                    e.top = t.offsetTop,
                    e.left = t.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function d({children: e, isPresent: t}) {
            let n = (0,
            i.useId)()
              , o = (0,
            i.useRef)(null)
              , a = (0,
            i.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            })
              , {nonce: s} = (0,
            i.useContext)(c._);
            return (0,
            i.useInsertionEffect)(()=>{
                let {width: e, height: r, top: i, left: l} = a.current;
                if (t || !o.current || !e || !r)
                    return;
                o.current.dataset.motionPopId = n;
                let u = document.createElement("style");
                return s && (u.nonce = s),
                document.head.appendChild(u),
                u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),
                ()=>{
                    document.head.removeChild(u)
                }
            }
            , [t]),
            (0,
            r.jsx)(f, {
                isPresent: t,
                childRef: o,
                sizeRef: a,
                children: i.cloneElement(e, {
                    ref: o
                })
            })
        }
        let h = ({children: e, initial: t, isPresent: n, onExitComplete: o, custom: a, presenceAffectsLayout: s, mode: c})=>{
            let f = (0,
            u.h)(p)
              , h = (0,
            i.useId)()
              , m = (0,
            i.useMemo)(()=>({
                id: h,
                initial: t,
                isPresent: n,
                custom: a,
                onExitComplete: e=>{
                    for (let t of (f.set(e, !0),
                    f.values()))
                        if (!t)
                            return;
                    o && o()
                }
                ,
                register: e=>(f.set(e, !1),
                ()=>f.delete(e))
            }), s ? [Math.random()] : [n]);
            return (0,
            i.useMemo)(()=>{
                f.forEach((e,t)=>f.set(t, !1))
            }
            , [n]),
            i.useEffect(()=>{
                n || f.size || !o || o()
            }
            , [n]),
            "popLayout" === c && (e = (0,
            r.jsx)(d, {
                isPresent: n,
                children: e
            })),
            (0,
            r.jsx)(l.O.Provider, {
                value: m,
                children: e
            })
        }
        ;
        function p() {
            return new Map
        }
        var m = n(53856)
          , v = n(62444)
          , g = n(29908);
        let y = e=>e.key || ""
          , b = ({children: e, custom: t, initial: n=!0, onExitComplete: l, exitBeforeEnter: u, presenceAffectsLayout: c=!0, mode: f="sync"})=>{
            (0,
            g.k)(!u, "Replace exitBeforeEnter with mode='wait'");
            let d = (0,
            i.useContext)(m.p).forceRender || function() {
                let e = a()
                  , [t,n] = (0,
                i.useState)(0)
                  , r = (0,
                i.useCallback)(()=>{
                    e.current && n(t + 1)
                }
                , [t]);
                return [(0,
                i.useCallback)(()=>s.Wi.postRender(r), [r]), t]
            }()[0]
              , p = a()
              , b = function(e) {
                let t = [];
                return i.Children.forEach(e, e=>{
                    (0,
                    i.isValidElement)(e) && t.push(e)
                }
                ),
                t
            }(e)
              , x = b
              , w = (0,
            i.useRef)(new Map).current
              , S = (0,
            i.useRef)(x)
              , P = (0,
            i.useRef)(new Map).current
              , k = (0,
            i.useRef)(!0);
            if ((0,
            o.L)(()=>{
                k.current = !1,
                function(e, t) {
                    e.forEach(e=>{
                        let n = y(e);
                        t.set(n, e)
                    }
                    )
                }(b, P),
                S.current = x
            }
            ),
            (0,
            v.z)(()=>{
                k.current = !0,
                P.clear(),
                w.clear()
            }
            ),
            k.current)
                return (0,
                r.jsx)(r.Fragment, {
                    children: x.map(e=>(0,
                    r.jsx)(h, {
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: c,
                        mode: f,
                        children: e
                    }, y(e)))
                });
            x = [...x];
            let E = S.current.map(y)
              , C = b.map(y)
              , T = E.length;
            for (let e = 0; e < T; e++) {
                let t = E[e];
                -1 !== C.indexOf(t) || w.has(t) || w.set(t, void 0)
            }
            return "wait" === f && w.size && (x = []),
            w.forEach((e,n)=>{
                if (-1 !== C.indexOf(n))
                    return;
                let i = P.get(n);
                if (!i)
                    return;
                let o = E.indexOf(n)
                  , a = e;
                a || (a = (0,
                r.jsx)(h, {
                    isPresent: !1,
                    onExitComplete: ()=>{
                        w.delete(n);
                        let e = Array.from(P.keys()).filter(e=>!C.includes(e));
                        if (e.forEach(e=>P.delete(e)),
                        S.current = b.filter(t=>{
                            let r = y(t);
                            return r === n || e.includes(r)
                        }
                        ),
                        !w.size) {
                            if (!1 === p.current)
                                return;
                            d(),
                            l && l()
                        }
                    }
                    ,
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: f,
                    children: i
                }, y(i)),
                w.set(n, a)),
                x.splice(o, 0, a)
            }
            ),
            x = x.map(e=>{
                let t = e.key;
                return w.has(t) ? e : (0,
                r.jsx)(h, {
                    isPresent: !0,
                    presenceAffectsLayout: c,
                    mode: f,
                    children: e
                }, y(e))
            }
            ),
            (0,
            r.jsx)(r.Fragment, {
                children: w.size ? x : x.map(e=>(0,
                i.cloneElement)(e))
            })
        }
    },
    53856: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return r
            }
        });
        let r = (0,
        n(2265).createContext)({})
    },
    93449: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return r
            }
        });
        let r = (0,
        n(2265).createContext)({
            transformPagePoint: e=>e,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    24561: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return r
            }
        });
        let r = (0,
        n(2265).createContext)(null)
    },
    84354: function(e, t, n) {
        "use strict";
        n.d(t, {
            Bn: function() {
                return a
            },
            X7: function() {
                return s
            },
            Z7: function() {
                return o
            }
        });
        var r = n(47932)
          , i = n(18841);
        let o = e=>1 - Math.sin(Math.acos(e))
          , a = (0,
        i.M)(o)
          , s = (0,
        r.o)(o)
    },
    64718: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return o
            }
        });
        var r = n(3393);
        let i = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        function o(e, t, n, o) {
            if (e === t && n === o)
                return r.Z;
            let a = t=>(function(e, t, n, r, o) {
                let a, s;
                let l = 0;
                do
                    (a = i(s = t + (n - t) / 2, r, o) - e) > 0 ? n = s : t = s;
                while (Math.abs(a) > 1e-7 && ++l < 12);
                return s
            }
            )(t, 0, 1, e, n);
            return e=>0 === e || 1 === e ? e : i(a(e), t, o)
        }
    },
    39569: function(e, t, n) {
        "use strict";
        n.d(t, {
            Vv: function() {
                return o
            },
            YQ: function() {
                return i
            },
            mZ: function() {
                return a
            }
        });
        var r = n(64718);
        let i = (0,
        r._)(.42, 0, 1, 1)
          , o = (0,
        r._)(0, 0, .58, 1)
          , a = (0,
        r._)(.42, 0, .58, 1)
    },
    47932: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return r
            }
        });
        let r = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    },
    18841: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return r
            }
        });
        let r = e=>t=>1 - e(1 - t)
    },
    10113: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return r
            }
        });
        let r = e=>Array.isArray(e) && "number" != typeof e[0]
    },
    47544: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return p
            }
        });
        var r = n(29908)
          , i = n(64718)
          , o = n(3393)
          , a = n(39569)
          , s = n(84354)
          , l = n(47932)
          , u = n(18841);
        let c = (0,
        i._)(.33, 1.53, .69, .99)
          , f = (0,
        u.M)(c)
          , d = (0,
        l.o)(f)
          , h = {
            linear: o.Z,
            easeIn: a.YQ,
            easeInOut: a.mZ,
            easeOut: a.Vv,
            circIn: s.Z7,
            circInOut: s.X7,
            circOut: s.Bn,
            backIn: f,
            backInOut: d,
            backOut: c,
            anticipate: e=>(e *= 2) < 1 ? .5 * f(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        }
          , p = e=>{
            if (Array.isArray(e)) {
                (0,
                r.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                let[t,n,o,a] = e;
                return (0,
                i._)(t, n, o, a)
            }
            return "string" == typeof e ? ((0,
            r.k)(void 0 !== h[e], `Invalid easing type '${e}'`),
            h[e]) : e
        }
    },
    67839: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(36832);
        class i {
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
            add(e) {
                if (!this.scheduled.has(e))
                    return this.scheduled.add(e),
                    this.order.push(e),
                    !0
            }
            remove(e) {
                let t = this.order.indexOf(e);
                -1 !== t && (this.order.splice(t, 1),
                this.scheduled.delete(e))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
        }
        let o = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function a(e, t) {
            let n = !1
              , a = !0
              , s = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = o.reduce((e,t)=>(e[t] = function(e) {
                let t = new i
                  , n = new i
                  , r = 0
                  , o = !1
                  , a = !1
                  , s = new WeakSet
                  , l = {
                    schedule: (e,i=!1,a=!1)=>{
                        let l = a && o
                          , u = l ? t : n;
                        return i && s.add(e),
                        u.add(e) && l && o && (r = t.order.length),
                        e
                    }
                    ,
                    cancel: e=>{
                        n.remove(e),
                        s.delete(e)
                    }
                    ,
                    process: i=>{
                        if (o) {
                            a = !0;
                            return
                        }
                        if (o = !0,
                        [t,n] = [n, t],
                        n.clear(),
                        r = t.order.length)
                            for (let n = 0; n < r; n++) {
                                let r = t.order[n];
                                s.has(r) && (l.schedule(r),
                                e()),
                                r(i)
                            }
                        o = !1,
                        a && (a = !1,
                        l.process(i))
                    }
                };
                return l
            }(()=>n = !0),
            e), {})
              , u = e=>{
                l[e].process(s)
            }
              , c = ()=>{
                let i = r.c.useManualTiming ? s.timestamp : performance.now();
                n = !1,
                s.delta = a ? 1e3 / 60 : Math.max(Math.min(i - s.timestamp, 40), 1),
                s.timestamp = i,
                s.isProcessing = !0,
                o.forEach(u),
                s.isProcessing = !1,
                n && t && (a = !1,
                e(c))
            }
              , f = ()=>{
                n = !0,
                a = !0,
                s.isProcessing || e(c)
            }
            ;
            return {
                schedule: o.reduce((e,t)=>{
                    let r = l[t];
                    return e[t] = (e,t=!1,i=!1)=>(n || f(),
                    r.schedule(e, t, i)),
                    e
                }
                , {}),
                cancel: e=>o.forEach(t=>l[t].cancel(e)),
                state: s,
                steps: l
            }
        }
    },
    14205: function(e, t, n) {
        "use strict";
        n.d(t, {
            Pn: function() {
                return o
            },
            S6: function() {
                return s
            },
            Wi: function() {
                return i
            },
            frameData: function() {
                return a
            }
        });
        var r = n(3393);
        let {schedule: i, cancel: o, state: a, steps: s} = (0,
        n(67839).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z, !0)
    },
    33791: function(e, t, n) {
        "use strict";
        let r;
        n.d(t, {
            X: function() {
                return s
            }
        });
        var i = n(36832)
          , o = n(14205);
        function a() {
            r = void 0
        }
        let s = {
            now: ()=>(void 0 === r && s.set(o.frameData.isProcessing || i.c.useManualTiming ? o.frameData.timestamp : performance.now()),
            r),
            set: e=>{
                r = e,
                queueMicrotask(a)
            }
        }
    },
    25223: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return i
            }
        });
        let r = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , i = {};
        for (let e in r)
            i[e] = {
                isEnabled: t=>r[e].some(e=>!!t[e])
            }
    },
    5403: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return o
            }
        });
        var r = n(67381)
          , i = n(60618);
        function o(e, {layout: t, layoutId: n}) {
            return i.G.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!r.P[e] || "opacity" === e)
        }
    },
    49068: function(e, t, n) {
        "use strict";
        function r({top: e, left: t, right: n, bottom: r}) {
            return {
                x: {
                    min: t,
                    max: n
                },
                y: {
                    min: e,
                    max: r
                }
            }
        }
        function i({x: e, y: t}) {
            return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
            }
        }
        function o(e, t) {
            if (!t)
                return e;
            let n = t({
                x: e.left,
                y: e.top
            })
              , r = t({
                x: e.right,
                y: e.bottom
            });
            return {
                top: n.y,
                left: n.x,
                bottom: r.y,
                right: r.x
            }
        }
        n.d(t, {
            d7: function() {
                return o
            },
            i8: function() {
                return r
            },
            z2: function() {
                return i
            }
        })
    },
    25015: function(e, t, n) {
        "use strict";
        n.d(t, {
            D2: function() {
                return m
            },
            YY: function() {
                return u
            },
            am: function() {
                return f
            },
            o2: function() {
                return l
            },
            q2: function() {
                return o
            }
        });
        var r = n(5312)
          , i = n(44352);
        function o(e, t, n) {
            return n + t * (e - n)
        }
        function a(e, t, n, r, i) {
            return void 0 !== i && (e = r + i * (e - r)),
            r + n * (e - r) + t
        }
        function s(e, t=0, n=1, r, i) {
            e.min = a(e.min, t, n, r, i),
            e.max = a(e.max, t, n, r, i)
        }
        function l(e, {x: t, y: n}) {
            s(e.x, t.translate, t.scale, t.originPoint),
            s(e.y, n.translate, n.scale, n.originPoint)
        }
        function u(e, t, n, r=!1) {
            let o, a;
            let s = n.length;
            if (s) {
                t.x = t.y = 1;
                for (let u = 0; u < s; u++) {
                    a = (o = n[u]).projectionDelta;
                    let s = o.instance;
                    (!s || !s.style || "contents" !== s.style.display) && (r && o.options.layoutScroll && o.scroll && o !== o.root && m(e, {
                        x: -o.scroll.offset.x,
                        y: -o.scroll.offset.y
                    }),
                    a && (t.x *= a.x.scale,
                    t.y *= a.y.scale,
                    l(e, a)),
                    r && (0,
                    i.ud)(o.latestValues) && m(e, o.latestValues))
                }
                t.x = c(t.x),
                t.y = c(t.y)
            }
        }
        function c(e) {
            return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
        }
        function f(e, t) {
            e.min = e.min + t,
            e.max = e.max + t
        }
        function d(e, t, [n,i,o]) {
            let a = void 0 !== t[o] ? t[o] : .5
              , l = (0,
            r.t)(e.min, e.max, a);
            s(e, t[n], t[i], l, t.scale)
        }
        let h = ["x", "scaleX", "originX"]
          , p = ["y", "scaleY", "originY"];
        function m(e, t) {
            d(e.x, t, h),
            d(e.y, t, p)
        }
    },
    24884: function(e, t, n) {
        "use strict";
        n.d(t, {
            dO: function() {
                return a
            },
            wc: function() {
                return i
            }
        });
        let r = ()=>({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , i = ()=>({
            x: r(),
            y: r()
        })
          , o = ()=>({
            min: 0,
            max: 0
        })
          , a = ()=>({
            x: o(),
            y: o()
        })
    },
    67381: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return i
            },
            P: function() {
                return r
            }
        });
        let r = {};
        function i(e) {
            Object.assign(r, e)
        }
    },
    44352: function(e, t, n) {
        "use strict";
        function r(e) {
            return void 0 === e || 1 === e
        }
        function i({scale: e, scaleX: t, scaleY: n}) {
            return !r(e) || !r(t) || !r(n)
        }
        function o(e) {
            return i(e) || a(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
        }
        function a(e) {
            var t, n;
            return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
        }
        n.d(t, {
            D_: function() {
                return a
            },
            Lj: function() {
                return i
            },
            ud: function() {
                return o
            }
        })
    },
    30411: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return o
            },
            z: function() {
                return a
            }
        });
        var r = n(49068)
          , i = n(25015);
        function o(e, t) {
            return (0,
            r.i8)((0,
            r.d7)(e.getBoundingClientRect(), t))
        }
        function a(e, t, n) {
            let r = o(e, n)
              , {scroll: a} = t;
            return a && ((0,
            i.am)(r.x, a.offset.x),
            (0,
            i.am)(r.y, a.offset.y)),
            r
        }
    },
    20928: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return d
            }
        });
        var r = n(96894)
          , i = n(29908)
          , o = n(34829)
          , a = n(57126);
        let s = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
        var l = n(22756)
          , u = n(61921)
          , c = n(54178)
          , f = n(23462);
        class d extends c.e {
            constructor(e, t, n, r) {
                super(e, t, n, r, null == r ? void 0 : r.owner, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: e, element: t, name: n} = this;
                if (!t.current)
                    return;
                super.readKeyframes();
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    if ("string" == typeof r && (0,
                    a.t)(r)) {
                        let l = function e(t, n, r=1) {
                            (0,
                            i.k)(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                            let[l,u] = function(e) {
                                let t = s.exec(e);
                                if (!t)
                                    return [, ];
                                let[,n,r,i] = t;
                                return [`--${null != n ? n : r}`, i]
                            }(t);
                            if (!l)
                                return;
                            let c = window.getComputedStyle(n).getPropertyValue(l);
                            if (c) {
                                let e = c.trim();
                                return (0,
                                o.P)(e) ? parseFloat(e) : e
                            }
                            return (0,
                            a.t)(u) ? e(u, n, r + 1) : u
                        }(r, t.current);
                        void 0 !== l && (e[n] = l),
                        n === e.length - 1 && (this.finalKeyframe = r)
                    }
                }
                if (!l.z2.has(n) || 2 !== e.length)
                    return this.resolveNoneKeyframes();
                let[r,c] = e
                  , f = (0,
                u.C)(r)
                  , d = (0,
                u.C)(c);
                if (f !== d) {
                    if ((0,
                    l.mP)(f) && (0,
                    l.mP)(d))
                        for (let t = 0; t < e.length; t++) {
                            let n = e[t];
                            "string" == typeof n && (e[t] = parseFloat(n))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: e, name: t} = this
                  , n = [];
                for (let t = 0; t < e.length; t++) {
                    var i;
                    ("number" == typeof (i = e[t]) ? 0 === i : null === i || "none" === i || "0" === i || (0,
                    r.W)(i)) && n.push(t)
                }
                n.length && function(e, t, n) {
                    let r, i = 0;
                    for (; i < e.length && !r; )
                        "string" == typeof e[i] && "none" !== e[i] && "0" !== e[i] && (r = e[i]),
                        i++;
                    if (r && n)
                        for (let i of t)
                            e[i] = (0,
                            f.T)(n, r)
                }(e, n, t)
            }
            measureInitialState() {
                let {element: e, unresolvedKeyframes: t, name: n} = this;
                if (!e.current)
                    return;
                "height" === n && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = l.lw[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
                t[0] = this.measuredOrigin;
                let r = t[t.length - 1];
                void 0 !== r && e.getValue(n, r).jump(r, !1)
            }
            measureEndState() {
                var e;
                let {element: t, name: n, unresolvedKeyframes: r} = this;
                if (!t.current)
                    return;
                let i = t.getValue(n);
                i && i.jump(this.measuredOrigin, !1);
                let o = r.length - 1
                  , a = r[o];
                r[o] = l.lw[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
                null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a),
                (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach(([e,n])=>{
                    t.getValue(e).set(n)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
    },
    70176: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return D
            }
        });
        var r = n(24884)
          , i = n(98285)
          , o = n(61702);
        let a = {
            current: null
        }
          , s = {
            current: !1
        };
        var l = n(52685)
          , u = n(83299)
          , c = n(62212)
          , f = n(82702)
          , d = n(60618)
          , h = n(79739)
          , p = n(16930)
          , m = n(51422)
          , v = n(25223)
          , g = n(41867)
          , y = n(48854)
          , b = n(54178)
          , x = n(34829)
          , w = n(96894)
          , S = n(22809)
          , P = n(92263)
          , k = n(61921)
          , E = n(94707);
        let C = [...k.$, S.$, P.P]
          , T = e=>C.find((0,
        E.l)(e));
        var _ = n(23462)
          , M = n(14205);
        let j = Object.keys(v.A)
          , O = j.length
          , A = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , R = g.V.length;
        class z {
            scrapeMotionValuesFromProps(e, t, n) {
                return {}
            }
            constructor({parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: o}, a={}) {
                this.resolveKeyframes = (e,t,n,r)=>new this.KeyframeResolver(e,t,n,r,this),
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = b.e,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
                this.render = ()=>{
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = ()=>M.Wi.render(this.render, !1, !0);
                let {latestValues: s, renderState: l} = o;
                this.latestValues = s,
                this.baseTarget = {
                    ...s
                },
                this.initialValues = t.initial ? {
                    ...s
                } : {},
                this.renderState = l,
                this.parent = e,
                this.props = t,
                this.presenceContext = n,
                this.depth = e ? e.depth + 1 : 0,
                this.reducedMotionConfig = r,
                this.options = a,
                this.blockInitialAnimation = !!i,
                this.isControllingVariants = (0,
                h.G)(t),
                this.isVariantNode = (0,
                h.M)(t),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(e && e.current);
                let {willChange: u, ...d} = this.scrapeMotionValuesFromProps(t, {}, this);
                for (let e in d) {
                    let t = d[e];
                    void 0 !== s[e] && (0,
                    f.i)(t) && (t.set(s[e], !1),
                    (0,
                    c.L)(u) && u.add(e))
                }
            }
            mount(e) {
                this.current = e,
                y.R.set(e, this),
                this.projection && !this.projection.instance && this.projection.mount(e),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((e,t)=>this.bindToMotionValue(t, e)),
                s.current || function() {
                    if (s.current = !0,
                    o.j) {
                        if (window.matchMedia) {
                            let e = window.matchMedia("(prefers-reduced-motion)")
                              , t = ()=>a.current = e.matches;
                            e.addListener(t),
                            t()
                        } else
                            a.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || a.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                var e;
                for (let e in y.R.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                M.Pn)(this.notifyUpdate),
                (0,
                M.Pn)(this.render),
                this.valueSubscriptions.forEach(e=>e()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[e].clear();
                for (let t in this.features)
                    null === (e = this.features[t]) || void 0 === e || e.unmount();
                this.current = null
            }
            bindToMotionValue(e, t) {
                let n = d.G.has(e)
                  , r = t.on("change", t=>{
                    this.latestValues[e] = t,
                    this.props.onUpdate && M.Wi.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , i = t.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(e, ()=>{
                    r(),
                    i(),
                    t.owner && t.stop()
                }
                )
            }
            sortNodePosition(e) {
                return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
            }
            loadFeatures({children: e, ...t}, n, r, o) {
                let a, s;
                for (let e = 0; e < O; e++) {
                    let n = j[e]
                      , {isEnabled: r, Feature: i, ProjectionNode: o, MeasureLayout: l} = v.A[n];
                    o && (a = o),
                    r(t) && (!this.features[n] && i && (this.features[n] = new i(this)),
                    l && (s = l))
                }
                if (("html" === this.type || "svg" === this.type) && !this.projection && a) {
                    this.projection = new a(this.latestValues,function e(t) {
                        if (t)
                            return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                    }(this.parent));
                    let {layoutId: e, layout: n, drag: r, dragConstraints: s, layoutScroll: l, layoutRoot: u} = t;
                    this.projection.setOptions({
                        layoutId: e,
                        layout: n,
                        alwaysMeasureLayout: !!r || s && (0,
                        i.I)(s),
                        visualElement: this,
                        scheduleRender: ()=>this.scheduleRender(),
                        animationType: "string" == typeof n ? n : "both",
                        initialPromotionConfig: o,
                        layoutScroll: l,
                        layoutRoot: u
                    })
                }
                return s
            }
            updateFeatures() {
                for (let e in this.features) {
                    let t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(),
                    t.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0,
                r.dO)()
            }
            getStaticValue(e) {
                return this.latestValues[e]
            }
            setStaticValue(e, t) {
                this.latestValues[e] = t
            }
            update(e, t) {
                (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = e,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = t;
                for (let t = 0; t < A.length; t++) {
                    let n = A[t];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                    delete this.propEventSubscriptions[n]);
                    let r = e["on" + n];
                    r && (this.propEventSubscriptions[n] = this.on(n, r))
                }
                this.prevMotionValues = function(e, t, n) {
                    let {willChange: r} = t;
                    for (let i in t) {
                        let o = t[i]
                          , a = n[i];
                        if ((0,
                        f.i)(o))
                            e.addValue(i, o),
                            (0,
                            c.L)(r) && r.add(i);
                        else if ((0,
                        f.i)(a))
                            e.addValue(i, (0,
                            u.BX)(o, {
                                owner: e
                            })),
                            (0,
                            c.L)(r) && r.remove(i);
                        else if (a !== o) {
                            if (e.hasValue(i)) {
                                let t = e.getValue(i);
                                !0 === t.liveStyle ? t.jump(o) : t.hasAnimated || t.set(o)
                            } else {
                                let t = e.getStaticValue(i);
                                e.addValue(i, (0,
                                u.BX)(void 0 !== t ? t : o, {
                                    owner: e
                                }))
                            }
                        }
                    }
                    for (let r in n)
                        void 0 === t[r] && e.removeValue(r);
                    return t
                }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(e) {
                return this.props.variants ? this.props.variants[e] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(e=!1) {
                if (e)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let e = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (e.initial = this.props.initial),
                    e
                }
                let t = {};
                for (let e = 0; e < R; e++) {
                    let n = g.V[e]
                      , r = this.props[n];
                    ((0,
                    p.$)(r) || !1 === r) && (t[n] = r)
                }
                return t
            }
            addVariantChild(e) {
                let t = this.getClosestVariantNode();
                if (t)
                    return t.variantChildren && t.variantChildren.add(e),
                    ()=>t.variantChildren.delete(e)
            }
            addValue(e, t) {
                let n = this.values.get(e);
                t !== n && (n && this.removeValue(e),
                this.bindToMotionValue(e, t),
                this.values.set(e, t),
                this.latestValues[e] = t.get())
            }
            removeValue(e) {
                this.values.delete(e);
                let t = this.valueSubscriptions.get(e);
                t && (t(),
                this.valueSubscriptions.delete(e)),
                delete this.latestValues[e],
                this.removeValueFromRenderState(e, this.renderState)
            }
            hasValue(e) {
                return this.values.has(e)
            }
            getValue(e, t) {
                if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                let n = this.values.get(e);
                return void 0 === n && void 0 !== t && (n = (0,
                u.BX)(null === t ? void 0 : t, {
                    owner: this
                }),
                this.addValue(e, n)),
                n
            }
            readValue(e, t) {
                var n;
                let r = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
                return null != r && ("string" == typeof r && ((0,
                x.P)(r) || (0,
                w.W)(r)) ? r = parseFloat(r) : !T(r) && P.P.test(t) && (r = (0,
                _.T)(e, t)),
                this.setBaseTarget(e, (0,
                f.i)(r) ? r.get() : r)),
                (0,
                f.i)(r) ? r.get() : r
            }
            setBaseTarget(e, t) {
                this.baseTarget[e] = t
            }
            getBaseTarget(e) {
                var t;
                let n;
                let {initial: r} = this.props;
                if ("string" == typeof r || "object" == typeof r) {
                    let i = (0,
                    m.o)(this.props, r, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                    i && (n = i[e])
                }
                if (r && void 0 !== n)
                    return n;
                let i = this.getBaseTargetFromProps(this.props, e);
                return void 0 === i || (0,
                f.i)(i) ? void 0 !== this.initialValues[e] && void 0 === n ? void 0 : this.baseTarget[e] : i
            }
            on(e, t) {
                return this.events[e] || (this.events[e] = new l.L),
                this.events[e].add(t)
            }
            notify(e, ...t) {
                this.events[e] && this.events[e].notify(...t)
            }
        }
        var L = n(20928);
        class D extends z {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = L.s
            }
            sortInstanceNodePosition(e, t) {
                return 2 & e.compareDocumentPosition(t) ? 1 : -1
            }
            getBaseTargetFromProps(e, t) {
                return e.style ? e.style[t] : void 0
            }
            removeValueFromRenderState(e, {vars: t, style: n}) {
                delete t[e],
                delete n[e]
            }
        }
    },
    21715: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return nd
            }
        });
        var r, i = n(57437), o = n(2265), a = n(93449);
        let s = (0,
        o.createContext)({});
        var l = n(24561)
          , u = n(45526);
        let c = (0,
        o.createContext)({
            strict: !1
        });
        var f = n(69043);
        let {schedule: d, cancel: h} = (0,
        n(67839).Z)(queueMicrotask, !1);
        var p = n(98285)
          , m = n(16930)
          , v = n(79739);
        function g(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        var y = n(25223)
          , b = n(61702)
          , x = n(53856);
        let w = (0,
        o.createContext)({})
          , S = Symbol.for("motionComponentSymbol")
          , P = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function k(e) {
            if ("string" != typeof e || e.includes("-"))
                ;
            else if (P.indexOf(e) > -1 || /[A-Z]/u.test(e))
                return !0;
            return !1
        }
        var E = n(5403)
          , C = n(82702)
          , T = n(25275);
        let _ = ()=>({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function M(e, t, n) {
            for (let r in t)
                (0,
                C.i)(t[r]) || (0,
                E.j)(r, n) || (e[r] = t[r])
        }
        let j = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function O(e) {
            return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || j.has(e)
        }
        let A = e=>!O(e);
        try {
            (r = require("@emotion/is-prop-valid").default) && (A = e=>e.startsWith("on") ? !O(e) : r(e))
        } catch (e) {}
        var R = n(48348);
        let z = ()=>({
            ..._(),
            attrs: {}
        });
        var L = n(27612)
          , D = n(81661)
          , N = n(9548)
          , I = n(54633)
          , F = n(51422)
          , V = n(72435)
          , B = n(30698);
        function U(e) {
            let t = (0,
            C.i)(e) ? e.get() : e;
            return (0,
            B.p)(t) ? t.toValue() : t
        }
        let W = e=>(t,n)=>{
            let r = (0,
            o.useContext)(s)
              , i = (0,
            o.useContext)(l.O)
              , a = ()=>(function({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
                let a = {
                    latestValues: function(e, t, n, r) {
                        let i = {}
                          , o = r(e, {});
                        for (let e in o)
                            i[e] = U(o[e]);
                        let {initial: a, animate: s} = e
                          , l = (0,
                        v.G)(e)
                          , u = (0,
                        v.M)(e);
                        t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial),
                        void 0 === s && (s = t.animate));
                        let c = !!n && !1 === n.initial
                          , f = (c = c || !1 === a) ? s : a;
                        return f && "boolean" != typeof f && !(0,
                        I.H)(f) && (Array.isArray(f) ? f : [f]).forEach(t=>{
                            let n = (0,
                            F.o)(e, t);
                            if (!n)
                                return;
                            let {transitionEnd: r, transition: o, ...a} = n;
                            for (let e in a) {
                                let t = a[e];
                                if (Array.isArray(t)) {
                                    let e = c ? t.length - 1 : 0;
                                    t = t[e]
                                }
                                null !== t && (i[e] = t)
                            }
                            for (let e in r)
                                i[e] = r[e]
                        }
                        ),
                        i
                    }(r, i, o, e),
                    renderState: t()
                };
                return n && (a.mount = e=>n(r, e, a)),
                a
            }
            )(e, t, r, i);
            return n ? a() : (0,
            V.h)(a)
        }
        ;
        var $ = n(14205);
        let H = {
            useVisualState: W({
                scrapeMotionValuesFromProps: N.U,
                createRenderState: z,
                onMount: (e,t,{renderState: n, latestValues: r})=>{
                    $.Wi.read(()=>{
                        try {
                            n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                        } catch (e) {
                            n.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    $.Wi.render(()=>{
                        (0,
                        R.i)(n, r, {
                            enableHardwareAcceleration: !1
                        }, (0,
                        L.a)(t.tagName), e.transformTemplate),
                        (0,
                        D.K)(t, n)
                    }
                    )
                }
            })
        }
          , q = {
            useVisualState: W({
                scrapeMotionValuesFromProps: n(46235).U,
                createRenderState: _
            })
        };
        function G(e, t, n, r={
            passive: !0
        }) {
            return e.addEventListener(t, n, r),
            ()=>e.removeEventListener(t, n)
        }
        let Q = e=>"mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
        function X(e, t="page") {
            return {
                point: {
                    x: e[`${t}X`],
                    y: e[`${t}Y`]
                }
            }
        }
        let Y = e=>t=>Q(t) && e(t, X(t));
        function K(e, t, n, r) {
            return G(e, t, Y(n), r)
        }
        var Z = n(19280);
        function J(e) {
            let t = null;
            return ()=>null === t && (t = e,
            ()=>{
                t = null
            }
            )
        }
        let ee = J("dragHorizontal")
          , et = J("dragVertical");
        function en(e) {
            let t = !1;
            if ("y" === e)
                t = et();
            else if ("x" === e)
                t = ee();
            else {
                let e = ee()
                  , n = et();
                e && n ? t = ()=>{
                    e(),
                    n()
                }
                : (e && e(),
                n && n())
            }
            return t
        }
        function er() {
            let e = en(!0);
            return !e || (e(),
            !1)
        }
        class ei {
            constructor(e) {
                this.isMounted = !1,
                this.node = e
            }
            update() {}
        }
        function eo(e, t) {
            let n = t ? "onHoverStart" : "onHoverEnd";
            return K(e.current, t ? "pointerenter" : "pointerleave", (r,i)=>{
                if ("touch" === r.pointerType || er())
                    return;
                let o = e.getProps();
                e.animationState && o.whileHover && e.animationState.setActive("whileHover", t);
                let a = o[n];
                a && a(r, i)
            }
            , {
                passive: !e.getProps()[n]
            })
        }
        class ea extends ei {
            mount() {
                this.unmount = (0,
                Z.z)(eo(this.node, !0), eo(this.node, !1))
            }
            unmount() {}
        }
        class es extends ei {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let e = !1;
                try {
                    e = this.node.current.matches(":focus-visible")
                } catch (t) {
                    e = !0
                }
                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = (0,
                Z.z)(G(this.node.current, "focus", ()=>this.onFocus()), G(this.node.current, "blur", ()=>this.onBlur()))
            }
            unmount() {}
        }
        let el = (e,t)=>!!t && (e === t || el(e, t.parentElement));
        var eu = n(3393);
        function ec(e, t) {
            if (!t)
                return;
            let n = new PointerEvent("pointer" + e);
            t(n, X(n))
        }
        class ef extends ei {
            constructor() {
                super(...arguments),
                this.removeStartListeners = eu.Z,
                this.removeEndListeners = eu.Z,
                this.removeAccessibleListeners = eu.Z,
                this.startPointerPress = (e,t)=>{
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    let n = this.node.getProps()
                      , r = K(window, "pointerup", (e,t)=>{
                        if (!this.checkPressEnd())
                            return;
                        let {onTap: n, onTapCancel: r, globalTapTarget: i} = this.node.getProps();
                        i || el(this.node.current, e.target) ? n && n(e, t) : r && r(e, t)
                    }
                    , {
                        passive: !(n.onTap || n.onPointerUp)
                    })
                      , i = K(window, "pointercancel", (e,t)=>this.cancelPress(e, t), {
                        passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                    this.removeEndListeners = (0,
                    Z.z)(r, i),
                    this.startPress(e, t)
                }
                ,
                this.startAccessiblePress = ()=>{
                    let e = G(this.node.current, "keydown", e=>{
                        "Enter" !== e.key || this.isPressing || (this.removeEndListeners(),
                        this.removeEndListeners = G(this.node.current, "keyup", e=>{
                            "Enter" === e.key && this.checkPressEnd() && ec("up", (e,t)=>{
                                let {onTap: n} = this.node.getProps();
                                n && n(e, t)
                            }
                            )
                        }
                        ),
                        ec("down", (e,t)=>{
                            this.startPress(e, t)
                        }
                        ))
                    }
                    )
                      , t = G(this.node.current, "blur", ()=>{
                        this.isPressing && ec("cancel", (e,t)=>this.cancelPress(e, t))
                    }
                    );
                    this.removeAccessibleListeners = (0,
                    Z.z)(e, t)
                }
            }
            startPress(e, t) {
                this.isPressing = !0;
                let {onTapStart: n, whileTap: r} = this.node.getProps();
                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                n && n(e, t)
            }
            checkPressEnd() {
                return this.removeEndListeners(),
                this.isPressing = !1,
                this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !er()
            }
            cancelPress(e, t) {
                if (!this.checkPressEnd())
                    return;
                let {onTapCancel: n} = this.node.getProps();
                n && n(e, t)
            }
            mount() {
                let e = this.node.getProps()
                  , t = K(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(e.onTapStart || e.onPointerStart)
                })
                  , n = G(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0,
                Z.z)(t, n)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
        let ed = new WeakMap
          , eh = new WeakMap
          , ep = e=>{
            let t = ed.get(e.target);
            t && t(e)
        }
          , em = e=>{
            e.forEach(ep)
        }
          , ev = {
            some: 0,
            all: 1
        };
        class eg extends ei {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: e={}} = this.node.getProps()
                  , {root: t, margin: n, amount: r="some", once: i} = e
                  , o = {
                    root: t ? t.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof r ? r : ev[r]
                };
                return function(e, t, n) {
                    let r = function({root: e, ...t}) {
                        let n = e || document;
                        eh.has(n) || eh.set(n, {});
                        let r = eh.get(n)
                          , i = JSON.stringify(t);
                        return r[i] || (r[i] = new IntersectionObserver(em,{
                            root: e,
                            ...t
                        })),
                        r[i]
                    }(t);
                    return ed.set(e, n),
                    r.observe(e),
                    ()=>{
                        ed.delete(e),
                        r.unobserve(e)
                    }
                }(this.node.current, o, e=>{
                    let {isIntersecting: t} = e;
                    if (this.isInView === t || (this.isInView = t,
                    i && !t && this.hasEnteredView))
                        return;
                    t && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", t);
                    let {onViewportEnter: n, onViewportLeave: r} = this.node.getProps()
                      , o = t ? n : r;
                    o && o(e)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: e, prevProps: t} = this.node;
                ["amount", "margin", "root"].some(function({viewport: e={}}, {viewport: t={}}={}) {
                    return n=>e[n] !== t[n]
                }(e, t)) && this.startObserver()
            }
            unmount() {}
        }
        var ey = n(60561);
        function eb(e, t) {
            if (!Array.isArray(t))
                return !1;
            let n = t.length;
            if (n !== e.length)
                return !1;
            for (let r = 0; r < n; r++)
                if (t[r] !== e[r])
                    return !1;
            return !0
        }
        var ex = n(1148)
          , ew = n(41867)
          , eS = n(31258);
        function eP(e, t, n={}) {
            var r;
            let i = (0,
            ex.x)(e, t, "exit" === n.type ? null === (r = e.presenceContext) || void 0 === r ? void 0 : r.custom : void 0)
              , {transition: o=e.getDefaultTransition() || {}} = i || {};
            n.transitionOverride && (o = n.transitionOverride);
            let a = i ? ()=>Promise.all((0,
            eS.w)(e, i, n)) : ()=>Promise.resolve()
              , s = e.variantChildren && e.variantChildren.size ? (r=0)=>{
                let {delayChildren: i=0, staggerChildren: a, staggerDirection: s} = o;
                return function(e, t, n=0, r=0, i=1, o) {
                    let a = []
                      , s = (e.variantChildren.size - 1) * r
                      , l = 1 === i ? (e=0)=>e * r : (e=0)=>s - e * r;
                    return Array.from(e.variantChildren).sort(ek).forEach((e,r)=>{
                        e.notify("AnimationStart", t),
                        a.push(eP(e, t, {
                            ...o,
                            delay: n + l(r)
                        }).then(()=>e.notify("AnimationComplete", t)))
                    }
                    ),
                    Promise.all(a)
                }(e, t, i + r, a, s, n)
            }
            : ()=>Promise.resolve()
              , {when: l} = o;
            if (!l)
                return Promise.all([a(), s(n.delay)]);
            {
                let[e,t] = "beforeChildren" === l ? [a, s] : [s, a];
                return e().then(()=>t())
            }
        }
        function ek(e, t) {
            return e.sortNodePosition(t)
        }
        let eE = [...ew.e].reverse()
          , eC = ew.e.length;
        function eT(e=!1) {
            return {
                isActive: e,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        class e_ extends ei {
            constructor(e) {
                super(e),
                e.animationState || (e.animationState = function(e) {
                    let t = t=>Promise.all(t.map(({animation: t, options: n})=>(function(e, t, n={}) {
                        let r;
                        if (e.notify("AnimationStart", t),
                        Array.isArray(t))
                            r = Promise.all(t.map(t=>eP(e, t, n)));
                        else if ("string" == typeof t)
                            r = eP(e, t, n);
                        else {
                            let i = "function" == typeof t ? (0,
                            ex.x)(e, t, n.custom) : t;
                            r = Promise.all((0,
                            eS.w)(e, i, n))
                        }
                        return r.then(()=>{
                            $.Wi.postRender(()=>{
                                e.notify("AnimationComplete", t)
                            }
                            )
                        }
                        )
                    }
                    )(e, t, n)))
                      , n = {
                        animate: eT(!0),
                        whileInView: eT(),
                        whileHover: eT(),
                        whileTap: eT(),
                        whileDrag: eT(),
                        whileFocus: eT(),
                        exit: eT()
                    }
                      , r = !0
                      , i = t=>(n,r)=>{
                        var i;
                        let o = (0,
                        ex.x)(e, r, "exit" === t ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                        if (o) {
                            let {transition: e, transitionEnd: t, ...r} = o;
                            n = {
                                ...n,
                                ...r,
                                ...t
                            }
                        }
                        return n
                    }
                    ;
                    function o(o) {
                        let a = e.getProps()
                          , s = e.getVariantContext(!0) || {}
                          , l = []
                          , u = new Set
                          , c = {}
                          , f = 1 / 0;
                        for (let t = 0; t < eC; t++) {
                            var d;
                            let h = eE[t]
                              , p = n[h]
                              , v = void 0 !== a[h] ? a[h] : s[h]
                              , g = (0,
                            m.$)(v)
                              , y = h === o ? p.isActive : null;
                            !1 === y && (f = t);
                            let b = v === s[h] && v !== a[h] && g;
                            if (b && r && e.manuallyAnimateOnMount && (b = !1),
                            p.protectedKeys = {
                                ...c
                            },
                            !p.isActive && null === y || !v && !p.prevProp || (0,
                            I.H)(v) || "boolean" == typeof v)
                                continue;
                            let x = (d = p.prevProp,
                            ("string" == typeof v ? v !== d : !!Array.isArray(v) && !eb(v, d)) || h === o && p.isActive && !b && g || t > f && g)
                              , w = !1
                              , S = Array.isArray(v) ? v : [v]
                              , P = S.reduce(i(h), {});
                            !1 === y && (P = {});
                            let {prevResolvedValues: k={}} = p
                              , E = {
                                ...k,
                                ...P
                            }
                              , C = t=>{
                                x = !0,
                                u.has(t) && (w = !0,
                                u.delete(t)),
                                p.needsAnimating[t] = !0;
                                let n = e.getValue(t);
                                n && (n.liveStyle = !1)
                            }
                            ;
                            for (let e in E) {
                                let t = P[e]
                                  , n = k[e];
                                if (!c.hasOwnProperty(e))
                                    ((0,
                                    ey.C)(t) && (0,
                                    ey.C)(n) ? eb(t, n) : t === n) ? void 0 !== t && u.has(e) ? C(e) : p.protectedKeys[e] = !0 : null != t ? C(e) : u.add(e)
                            }
                            p.prevProp = v,
                            p.prevResolvedValues = P,
                            p.isActive && (c = {
                                ...c,
                                ...P
                            }),
                            r && e.blockInitialAnimation && (x = !1),
                            x && (!b || w) && l.push(...S.map(e=>({
                                animation: e,
                                options: {
                                    type: h
                                }
                            })))
                        }
                        if (u.size) {
                            let t = {};
                            u.forEach(n=>{
                                let r = e.getBaseTarget(n)
                                  , i = e.getValue(n);
                                i && (i.liveStyle = !0),
                                t[n] = null != r ? r : null
                            }
                            ),
                            l.push({
                                animation: t
                            })
                        }
                        let h = !!l.length;
                        return r && (!1 === a.initial || a.initial === a.animate) && !e.manuallyAnimateOnMount && (h = !1),
                        r = !1,
                        h ? t(l) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(t, r) {
                            var i;
                            if (n[t].isActive === r)
                                return Promise.resolve();
                            null === (i = e.variantChildren) || void 0 === i || i.forEach(e=>{
                                var n;
                                return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                            }
                            ),
                            n[t].isActive = r;
                            let a = o(t);
                            for (let e in n)
                                n[e].protectedKeys = {};
                            return a
                        },
                        setAnimateFunction: function(n) {
                            t = n(e)
                        },
                        getState: ()=>n
                    }
                }(e))
            }
            updateAnimationControlsSubscription() {
                let {animate: e} = this.node.getProps();
                this.unmount(),
                (0,
                I.H)(e) && (this.unmount = e.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: e} = this.node.getProps()
                  , {animate: t} = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription()
            }
            unmount() {}
        }
        let eM = 0;
        class ej extends ei {
            constructor() {
                super(...arguments),
                this.id = eM++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: e, onExitComplete: t} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n)
                    return;
                let r = this.node.animationState.setActive("exit", !e);
                t && !e && r.then(()=>t(this.id))
            }
            mount() {
                let {register: e} = this.node.presenceContext || {};
                e && (this.unmount = e(this.id))
            }
            unmount() {}
        }
        var eO = n(29908)
          , eA = n(33303);
        let eR = (e,t)=>Math.abs(e - t);
        class ez {
            constructor(e, t, {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = ()=>{
                    var e, t;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let n = eN(this.lastMoveEventInfo, this.history)
                      , r = null !== this.startEvent
                      , i = (e = n.offset,
                    t = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(eR(e.x, t.x) ** 2 + eR(e.y, t.y) ** 2) >= 3);
                    if (!r && !i)
                        return;
                    let {point: o} = n
                      , {timestamp: a} = $.frameData;
                    this.history.push({
                        ...o,
                        timestamp: a
                    });
                    let {onStart: s, onMove: l} = this.handlers;
                    r || (s && s(this.lastMoveEvent, n),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, n)
                }
                ,
                this.handlePointerMove = (e,t)=>{
                    this.lastMoveEvent = e,
                    this.lastMoveEventInfo = eL(t, this.transformPagePoint),
                    $.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (e,t)=>{
                    this.end();
                    let {onEnd: n, onSessionEnd: r, resumeAnimation: i} = this.handlers;
                    if (this.dragSnapToOrigin && i && i(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let o = eN("pointercancel" === e.type ? this.lastMoveEventInfo : eL(t, this.transformPagePoint), this.history);
                    this.startEvent && n && n(e, o),
                    r && r(e, o)
                }
                ,
                !Q(e))
                    return;
                this.dragSnapToOrigin = i,
                this.handlers = t,
                this.transformPagePoint = n,
                this.contextWindow = r || window;
                let o = eL(X(e), this.transformPagePoint)
                  , {point: a} = o
                  , {timestamp: s} = $.frameData;
                this.history = [{
                    ...a,
                    timestamp: s
                }];
                let {onSessionStart: l} = t;
                l && l(e, eN(o, this.history)),
                this.removeListeners = (0,
                Z.z)(K(this.contextWindow, "pointermove", this.handlePointerMove), K(this.contextWindow, "pointerup", this.handlePointerUp), K(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(e) {
                this.handlers = e
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                $.Pn)(this.updatePoint)
            }
        }
        function eL(e, t) {
            return t ? {
                point: t(e.point)
            } : e
        }
        function eD(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }
        function eN({point: e}, t) {
            return {
                point: e,
                delta: eD(e, eI(t)),
                offset: eD(e, t[0]),
                velocity: function(e, t) {
                    if (e.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = e.length - 1
                      , r = null
                      , i = eI(e);
                    for (; n >= 0 && (r = e[n],
                    !(i.timestamp - r.timestamp > (0,
                    eA.w)(.1))); )
                        n--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = (0,
                    eA.X)(i.timestamp - r.timestamp);
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let a = {
                        x: (i.x - r.x) / o,
                        y: (i.y - r.y) / o
                    };
                    return a.x === 1 / 0 && (a.x = 0),
                    a.y === 1 / 0 && (a.y = 0),
                    a
                }(t, 0)
            }
        }
        function eI(e) {
            return e[e.length - 1]
        }
        var eF = n(16384)
          , eV = n(5312);
        function eB(e) {
            return e.max - e.min
        }
        function eU(e, t=0, n=.01) {
            return Math.abs(e - t) <= n
        }
        function eW(e, t, n, r=.5) {
            e.origin = r,
            e.originPoint = (0,
            eV.t)(t.min, t.max, e.origin),
            e.scale = eB(n) / eB(t),
            (eU(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
            e.translate = (0,
            eV.t)(n.min, n.max, e.origin) - e.originPoint,
            (eU(e.translate) || isNaN(e.translate)) && (e.translate = 0)
        }
        function e$(e, t, n, r) {
            eW(e.x, t.x, n.x, r ? r.originX : void 0),
            eW(e.y, t.y, n.y, r ? r.originY : void 0)
        }
        function eH(e, t, n) {
            e.min = n.min + t.min,
            e.max = e.min + eB(t)
        }
        function eq(e, t, n) {
            e.min = t.min - n.min,
            e.max = e.min + eB(t)
        }
        function eG(e, t, n) {
            eq(e.x, t.x, n.x),
            eq(e.y, t.y, n.y)
        }
        var eQ = n(22476);
        function eX(e, t, n) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
            }
        }
        function eY(e, t) {
            let n = t.min - e.min
              , r = t.max - e.max;
            return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
            {
                min: n,
                max: r
            }
        }
        function eK(e, t, n) {
            return {
                min: eZ(e, t),
                max: eZ(e, n)
            }
        }
        function eZ(e, t) {
            return "number" == typeof e ? e : e[t] || 0
        }
        var eJ = n(24884);
        function e0(e) {
            return [e("x"), e("y")]
        }
        var e1 = n(30411)
          , e2 = n(49068)
          , e3 = n(72724)
          , e4 = n(58669);
        let e6 = ({current: e})=>e ? e.ownerDocument.defaultView : null
          , e5 = new WeakMap;
        class e8 {
            constructor(e) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = (0,
                eJ.dO)(),
                this.visualElement = e
            }
            start(e, {snapToCursor: t=!1}={}) {
                let {presenceContext: n} = this.visualElement;
                if (n && !1 === n.isPresent)
                    return;
                let {dragSnapToOrigin: r} = this.getProps();
                this.panSession = new ez(e,{
                    onSessionStart: e=>{
                        let {dragSnapToOrigin: n} = this.getProps();
                        n ? this.pauseAnimation() : this.stopAnimation(),
                        t && this.snapToCursor(X(e, "page").point)
                    }
                    ,
                    onStart: (e,t)=>{
                        let {drag: n, dragPropagation: r, onDragStart: i} = this.getProps();
                        if (n && !r && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = en(n),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        e0(e=>{
                            let t = this.getAxisMotionValue(e).get() || 0;
                            if (e3.aQ.test(t)) {
                                let {projection: n} = this.visualElement;
                                if (n && n.layout) {
                                    let r = n.layout.layoutBox[e];
                                    if (r) {
                                        let e = eB(r);
                                        t = parseFloat(t) / 100 * e
                                    }
                                }
                            }
                            this.originPoint[e] = t
                        }
                        ),
                        i && i(e, t);
                        let {animationState: o} = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (e,t)=>{
                        let {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: o} = this.getProps();
                        if (!n && !this.openGlobalLock)
                            return;
                        let {offset: a} = t;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(e, t=10) {
                                let n = null;
                                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
                                n
                            }(a),
                            null !== this.currentDirection && i && i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", t.point, a),
                        this.updateAxis("y", t.point, a),
                        this.visualElement.render(),
                        o && o(e, t)
                    }
                    ,
                    onSessionEnd: (e,t)=>this.stop(e, t),
                    resumeAnimation: ()=>e0(e=>{
                        var t;
                        return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: r,
                    contextWindow: e6(this.visualElement)
                })
            }
            stop(e, t) {
                let n = this.isDragging;
                if (this.cancel(),
                !n)
                    return;
                let {velocity: r} = t;
                this.startAnimation(r);
                let {onDragEnd: i} = this.getProps();
                i && i(e, t)
            }
            cancel() {
                this.isDragging = !1;
                let {projection: e, animationState: t} = this.visualElement;
                e && (e.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                t && t.setActive("whileDrag", !1)
            }
            updateAxis(e, t, n) {
                let {drag: r} = this.getProps();
                if (!n || !e9(e, r, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(e)
                  , o = this.originPoint[e] + n[e];
                this.constraints && this.constraints[e] && (o = function(e, {min: t, max: n}, r) {
                    return void 0 !== t && e < t ? e = r ? (0,
                    eV.t)(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? (0,
                    eV.t)(n, e, r.max) : Math.min(e, n)),
                    e
                }(o, this.constraints[e], this.elastic[e])),
                i.set(o)
            }
            resolveConstraints() {
                var e;
                let {dragConstraints: t, dragElastic: n} = this.getProps()
                  , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout
                  , i = this.constraints;
                t && (0,
                p.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = function(e, {top: t, left: n, bottom: r, right: i}) {
                    return {
                        x: eX(e.x, n, i),
                        y: eX(e.y, t, r)
                    }
                }(r.layoutBox, t) : this.constraints = !1,
                this.elastic = function(e=.35) {
                    return !1 === e ? e = 0 : !0 === e && (e = .35),
                    {
                        x: eK(e, "left", "right"),
                        y: eK(e, "top", "bottom")
                    }
                }(n),
                i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && e0(e=>{
                    !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                        let n = {};
                        return void 0 !== t.min && (n.min = t.min - e.min),
                        void 0 !== t.max && (n.max = t.max - e.min),
                        n
                    }(r.layoutBox[e], this.constraints[e]))
                }
                )
            }
            resolveRefConstraints() {
                var e;
                let {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
                if (!t || !(0,
                p.I)(t))
                    return !1;
                let r = t.current;
                (0,
                eO.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let o = (0,
                e1.z)(r, i.root, this.visualElement.getTransformPagePoint())
                  , a = {
                    x: eY((e = i.layout.layoutBox).x, o.x),
                    y: eY(e.y, o.y)
                };
                if (n) {
                    let e = n((0,
                    e2.z2)(a));
                    this.hasMutatedConstraints = !!e,
                    e && (a = (0,
                    e2.i8)(e))
                }
                return a
            }
            startAnimation(e) {
                let {drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
                  , s = this.constraints || {};
                return Promise.all(e0(a=>{
                    if (!e9(a, t, this.currentDirection))
                        return;
                    let l = s && s[a] || {};
                    o && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: n ? e[a] : 0,
                        bounceStiffness: r ? 200 : 1e6,
                        bounceDamping: r ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...l
                    };
                    return this.startAxisValueAnimation(a, u)
                }
                )).then(a)
            }
            startAxisValueAnimation(e, t) {
                let n = this.getAxisMotionValue(e);
                return n.start((0,
                e4.v)(e, n, 0, t, this.visualElement))
            }
            stopAnimation() {
                e0(e=>this.getAxisMotionValue(e).stop())
            }
            pauseAnimation() {
                e0(e=>{
                    var t;
                    return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
                }
                )
            }
            getAnimationState(e) {
                var t;
                return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
            }
            getAxisMotionValue(e) {
                let t = `_drag${e.toUpperCase()}`
                  , n = this.visualElement.getProps();
                return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
            }
            snapToCursor(e) {
                e0(t=>{
                    let {drag: n} = this.getProps();
                    if (!e9(t, n, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement
                      , i = this.getAxisMotionValue(t);
                    if (r && r.layout) {
                        let {min: n, max: o} = r.layout.layoutBox[t];
                        i.set(e[t] - (0,
                        eV.t)(n, o, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: e, dragConstraints: t} = this.getProps()
                  , {projection: n} = this.visualElement;
                if (!(0,
                p.I)(t) || !n || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                e0(e=>{
                    let t = this.getAxisMotionValue(e);
                    if (t && !1 !== this.constraints) {
                        let n = t.get();
                        r[e] = function(e, t) {
                            let n = .5
                              , r = eB(e)
                              , i = eB(t);
                            return i > r ? n = (0,
                            eF.Y)(t.min, t.max - r, e.min) : r > i && (n = (0,
                            eF.Y)(e.min, e.max - i, t.min)),
                            (0,
                            eQ.u)(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[e])
                    }
                }
                );
                let {transformTemplate: i} = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none",
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                e0(t=>{
                    if (!e9(t, e, null))
                        return;
                    let n = this.getAxisMotionValue(t)
                      , {min: i, max: o} = this.constraints[t];
                    n.set((0,
                    eV.t)(i, o, r[t]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                e5.set(this.visualElement, this);
                let e = K(this.visualElement.current, "pointerdown", e=>{
                    let {drag: t, dragListener: n=!0} = this.getProps();
                    t && n && this.start(e)
                }
                )
                  , t = ()=>{
                    let {dragConstraints: e} = this.getProps();
                    (0,
                    p.I)(e) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: n} = this.visualElement
                  , r = n.addEventListener("measure", t);
                n && !n.layout && (n.root && n.root.updateScroll(),
                n.updateLayout()),
                t();
                let i = G(window, "resize", ()=>this.scalePositionWithinConstraints())
                  , o = n.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t})=>{
                    this.isDragging && t && (e0(t=>{
                        let n = this.getAxisMotionValue(t);
                        n && (this.originPoint[t] += e[t].translate,
                        n.set(n.get() + e[t].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return ()=>{
                    i(),
                    e(),
                    r(),
                    o && o()
                }
            }
            getProps() {
                let e = this.visualElement.getProps()
                  , {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: o=.35, dragMomentum: a=!0} = e;
                return {
                    ...e,
                    drag: t,
                    dragDirectionLock: n,
                    dragPropagation: r,
                    dragConstraints: i,
                    dragElastic: o,
                    dragMomentum: a
                }
            }
        }
        function e9(e, t, n) {
            return (!0 === t || t === e) && (null === n || n === e)
        }
        class e7 extends ei {
            constructor(e) {
                super(e),
                this.removeGroupControls = eu.Z,
                this.removeListeners = eu.Z,
                this.controls = new e8(e)
            }
            mount() {
                let {dragControls: e} = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || eu.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let te = e=>(t,n)=>{
            e && e(t, n)
        }
        ;
        class tt extends ei {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = eu.Z
            }
            onPointerDown(e) {
                this.session = new ez(e,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: e6(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
                return {
                    onSessionStart: te(e),
                    onStart: te(t),
                    onMove: n,
                    onEnd: (e,t)=>{
                        delete this.session,
                        r && r(e, t)
                    }
                }
            }
            mount() {
                this.removePointerDownListener = K(this.node.current, "pointerdown", e=>this.onPointerDown(e))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        let tn = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function tr(e, t) {
            return t.max === t.min ? 0 : e / (t.max - t.min) * 100
        }
        let ti = {
            correct: (e,t)=>{
                if (!t.target)
                    return e;
                if ("string" == typeof e) {
                    if (!e3.px.test(e))
                        return e;
                    e = parseFloat(e)
                }
                let n = tr(e, t.target.x)
                  , r = tr(e, t.target.y);
                return `${n}% ${r}%`
            }
        };
        var to = n(92263)
          , ta = n(67381);
        class ts extends o.Component {
            componentDidMount() {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props
                  , {projection: i} = e;
                (0,
                ta.B)(tu),
                i && (t.group && t.group.add(i),
                n && n.register && r && n.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", ()=>{
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                tn.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(e) {
                let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props
                  , o = n.projection;
                return o && (o.isPresent = i,
                r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(),
                e.isPresent === i || (i ? o.promote() : o.relegate() || $.Wi.postRender(()=>{
                    let e = o.getStack();
                    e && e.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: e} = this.props.visualElement;
                e && (e.root.didUpdate(),
                d.postRender(()=>{
                    !e.currentAnimation && e.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props
                  , {projection: r} = e;
                r && (r.scheduleCheckAfterUnmount(),
                t && t.group && t.group.remove(r),
                n && n.deregister && n.deregister(r))
            }
            safeToRemove() {
                let {safeToRemove: e} = this.props;
                e && e()
            }
            render() {
                return null
            }
        }
        function tl(e) {
            let[t,n] = function() {
                let e = (0,
                o.useContext)(l.O);
                if (null === e)
                    return [!0, null];
                let {isPresent: t, onExitComplete: n, register: r} = e
                  , i = (0,
                o.useId)();
                return (0,
                o.useEffect)(()=>r(i), []),
                !t && n ? [!1, ()=>n && n(i)] : [!0]
            }()
              , r = (0,
            o.useContext)(x.p);
            return (0,
            i.jsx)(ts, {
                ...e,
                layoutGroup: r,
                switchLayoutGroup: (0,
                o.useContext)(w),
                isPresent: t,
                safeToRemove: n
            })
        }
        let tu = {
            borderRadius: {
                ...ti,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: ti,
            borderTopRightRadius: ti,
            borderBottomLeftRadius: ti,
            borderBottomRightRadius: ti,
            boxShadow: {
                correct: (e,{treeScale: t, projectionDelta: n})=>{
                    let r = to.P.parse(e);
                    if (r.length > 5)
                        return e;
                    let i = to.P.createTransformer(e)
                      , o = "number" != typeof r[0] ? 1 : 0
                      , a = n.x.scale * t.x
                      , s = n.y.scale * t.y;
                    r[0 + o] /= a,
                    r[1 + o] /= s;
                    let l = (0,
                    eV.t)(a, s, .5);
                    return "number" == typeof r[2 + o] && (r[2 + o] /= l),
                    "number" == typeof r[3 + o] && (r[3 + o] /= l),
                    i(r)
                }
            }
        };
        var tc = n(52685)
          , tf = n(84354);
        let td = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , th = td.length
          , tp = e=>"string" == typeof e ? parseFloat(e) : e
          , tm = e=>"number" == typeof e || e3.px.test(e);
        function tv(e, t) {
            return void 0 !== e[t] ? e[t] : e.borderRadius
        }
        let tg = tb(0, .5, tf.Bn)
          , ty = tb(.5, .95, eu.Z);
        function tb(e, t, n) {
            return r=>r < e ? 0 : r > t ? 1 : n((0,
            eF.Y)(e, t, r))
        }
        function tx(e, t) {
            e.min = t.min,
            e.max = t.max
        }
        function tw(e, t) {
            tx(e.x, t.x),
            tx(e.y, t.y)
        }
        var tS = n(25015);
        function tP(e, t, n, r, i) {
            return e -= t,
            e = (0,
            tS.q2)(e, 1 / n, r),
            void 0 !== i && (e = (0,
            tS.q2)(e, 1 / i, r)),
            e
        }
        function tk(e, t, [n,r,i], o, a) {
            !function(e, t=0, n=1, r=.5, i, o=e, a=e) {
                if (e3.aQ.test(t) && (t = parseFloat(t),
                t = (0,
                eV.t)(a.min, a.max, t / 100) - a.min),
                "number" != typeof t)
                    return;
                let s = (0,
                eV.t)(o.min, o.max, r);
                e === o && (s -= t),
                e.min = tP(e.min, t, n, s, i),
                e.max = tP(e.max, t, n, s, i)
            }(e, t[n], t[r], t[i], t.scale, o, a)
        }
        let tE = ["x", "scaleX", "originX"]
          , tC = ["y", "scaleY", "originY"];
        function tT(e, t, n, r) {
            tk(e.x, t, tE, n ? n.x : void 0, r ? r.x : void 0),
            tk(e.y, t, tC, n ? n.y : void 0, r ? r.y : void 0)
        }
        var t_ = n(95566);
        function tM(e) {
            return 0 === e.translate && 1 === e.scale
        }
        function tj(e) {
            return tM(e.x) && tM(e.y)
        }
        function tO(e, t) {
            return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
        }
        function tA(e) {
            return eB(e.x) / eB(e.y)
        }
        var tR = n(50406);
        class tz {
            constructor() {
                this.members = []
            }
            add(e) {
                (0,
                tR.y4)(this.members, e),
                e.scheduleRender()
            }
            remove(e) {
                if ((0,
                tR.cl)(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead) {
                    let e = this.members[this.members.length - 1];
                    e && this.promote(e)
                }
            }
            relegate(e) {
                let t;
                let n = this.members.findIndex(t=>e === t);
                if (0 === n)
                    return !1;
                for (let e = n; e >= 0; e--) {
                    let n = this.members[e];
                    if (!1 !== n.isPresent) {
                        t = n;
                        break
                    }
                }
                return !!t && (this.promote(t),
                !0)
            }
            promote(e, t) {
                let n = this.lead;
                if (e !== n && (this.prevLead = n,
                this.lead = e,
                e.show(),
                n)) {
                    n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    e.resumeFrom = n,
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot && (e.snapshot = n.snapshot,
                    e.snapshot.latestValues = n.animationValues || n.latestValues),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                    let {crossfade: r} = e.options;
                    !1 === r && n.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(e=>{
                    let {options: t, resumingFrom: n} = e;
                    t.onExitComplete && t.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(e=>{
                    e.instance && e.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function tL(e, t, n) {
            let r = ""
              , i = e.x.translate / t.x
              , o = e.y.translate / t.y
              , a = (null == n ? void 0 : n.z) || 0;
            if ((i || o || a) && (r = `translate3d(${i}px, ${o}px, ${a}px) `),
            (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
            n) {
                let {transformPerspective: e, rotate: t, rotateX: i, rotateY: o, skewX: a, skewY: s} = n;
                e && (r = `perspective(${e}px) ${r}`),
                t && (r += `rotate(${t}deg) `),
                i && (r += `rotateX(${i}deg) `),
                o && (r += `rotateY(${o}deg) `),
                a && (r += `skewX(${a}deg) `),
                s && (r += `skewY(${s}deg) `)
            }
            let s = e.x.scale * t.x
              , l = e.y.scale * t.y;
            return (1 !== s || 1 !== l) && (r += `scale(${s}, ${l})`),
            r || "none"
        }
        var tD = n(44352);
        let tN = (e,t)=>e.depth - t.depth;
        class tI {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(e) {
                (0,
                tR.y4)(this.children, e),
                this.isDirty = !0
            }
            remove(e) {
                (0,
                tR.cl)(this.children, e),
                this.isDirty = !0
            }
            forEach(e) {
                this.isDirty && this.children.sort(tN),
                this.isDirty = !1,
                this.children.forEach(e)
            }
        }
        var tF = n(33791)
          , tV = n(41937)
          , tB = n(96659);
        let tU = ["", "X", "Y", "Z"]
          , tW = {
            visibility: "hidden"
        }
          , t$ = 0
          , tH = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function tq(e, t, n, r) {
            let {latestValues: i} = t;
            i[e] && (n[e] = i[e],
            t.setStaticValue(e, 0),
            r && (r[e] = 0))
        }
        function tG({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
            return class {
                constructor(e={}, n=null == t ? void 0 : t()) {
                    this.id = t$++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        this.projectionUpdateScheduled = !1,
                        tH.totalNodes = tH.resolvedTargetDeltas = tH.recalculatedProjection = 0,
                        this.nodes.forEach(tY),
                        this.nodes.forEach(t3),
                        this.nodes.forEach(t4),
                        this.nodes.forEach(tK),
                        window.MotionDebug && window.MotionDebug.record(tH)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = e,
                    this.root = n ? n.root || n : this,
                    this.path = n ? [...n.path, n] : [],
                    this.parent = n,
                    this.depth = n ? n.depth + 1 : 0;
                    for (let e = 0; e < this.path.length; e++)
                        this.path[e].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new tI)
                }
                addEventListener(e, t) {
                    return this.eventHandlers.has(e) || this.eventHandlers.set(e, new tc.L),
                    this.eventHandlers.get(e).add(t)
                }
                notifyListeners(e, ...t) {
                    let n = this.eventHandlers.get(e);
                    n && n.notify(...t)
                }
                hasListeners(e) {
                    return this.eventHandlers.has(e)
                }
                mount(t, n=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = (0,
                    tV.v)(t),
                    this.instance = t;
                    let {layoutId: r, layout: i, visualElement: o} = this.options;
                    if (o && !o.current && o.mount(t),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    n && (i || r) && (this.isLayoutDirty = !0),
                    e) {
                        let n;
                        let r = ()=>this.root.updateBlockedByResize = !1;
                        e(t, ()=>{
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = function(e, t) {
                                let n = tF.X.now()
                                  , r = ({timestamp: i})=>{
                                    let o = i - n;
                                    o >= t && ((0,
                                    $.Pn)(r),
                                    e(o - t))
                                }
                                ;
                                return $.Wi.read(r, !0),
                                ()=>(0,
                                $.Pn)(r)
                            }(r, 250),
                            tn.hasAnimatedSinceResize && (tn.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(t2))
                        }
                        )
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && o && (r || i) && this.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r})=>{
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let i = this.options.transition || o.getDefaultTransition() || ne
                          , {onLayoutAnimationStart: a, onLayoutAnimationComplete: s} = o.getProps()
                          , l = !this.targetLayout || !tO(this.targetLayout, r) || n
                          , u = !t && n;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || t && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(e, u);
                            let t = {
                                ...(0,
                                t_.e)(i, "layout"),
                                onPlay: a,
                                onComplete: s
                            };
                            (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0,
                            t.type = !1),
                            this.startAnimation(t)
                        } else
                            t || t2(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = r
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let e = this.getStack();
                    e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    $.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(t6),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: e} = this.options;
                    return e && e.getProps().transformTemplate
                }
                willUpdate(e=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let e = 0; e < this.path.length; e++) {
                        let t = this.path[e];
                        t.shouldResetTransform = !0,
                        t.updateScroll("snapshot"),
                        t.options.layoutRoot && t.willUpdate(!1)
                    }
                    let {layoutId: t, layout: n} = this.options;
                    if (void 0 === t && !n)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(tJ);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(t0),
                    this.isUpdating = !1,
                    window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(),
                    this.nodes.forEach(t1),
                    this.nodes.forEach(tQ),
                    this.nodes.forEach(tX),
                    this.clearAllSnapshots();
                    let e = tF.X.now();
                    $.frameData.delta = (0,
                    eQ.u)(0, 1e3 / 60, e - $.frameData.timestamp),
                    $.frameData.timestamp = e,
                    $.frameData.isProcessing = !0,
                    $.S6.update.process($.frameData),
                    $.S6.preRender.process($.frameData),
                    $.S6.render.process($.frameData),
                    $.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    d.read(()=>this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(tZ),
                    this.sharedNodes.forEach(t5)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    $.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    $.Wi.postRender(()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let e = 0; e < this.path.length; e++)
                            this.path[e].updateScroll();
                    let e = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = (0,
                    eJ.dO)(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: t} = this.options;
                    t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                }
                updateScroll(e="measure") {
                    let t = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
                    t && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: r(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform() {
                    if (!i)
                        return;
                    let e = this.isLayoutDirty || this.shouldResetTransform
                      , t = this.projectionDelta && !tj(this.projectionDelta)
                      , n = this.getTransformTemplate()
                      , r = n ? n(this.latestValues, "") : void 0
                      , o = r !== this.prevTransformTemplateValue;
                    e && (t || (0,
                    tD.ud)(this.latestValues) || o) && (i(this.instance, r),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(e=!0) {
                    var t;
                    let n = this.measurePageBox()
                      , r = this.removeElementScroll(n);
                    return e && (r = this.removeTransform(r)),
                    nr((t = r).x),
                    nr(t.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return (0,
                        eJ.dO)();
                    let t = e.measureViewportBox()
                      , {scroll: n} = this.root;
                    return n && ((0,
                    tS.am)(t.x, n.offset.x),
                    (0,
                    tS.am)(t.y, n.offset.y)),
                    t
                }
                removeElementScroll(e) {
                    let t = (0,
                    eJ.dO)();
                    tw(t, e);
                    for (let n = 0; n < this.path.length; n++) {
                        let r = this.path[n]
                          , {scroll: i, options: o} = r;
                        if (r !== this.root && i && o.layoutScroll) {
                            if (i.isRoot) {
                                tw(t, e);
                                let {scroll: n} = this.root;
                                n && ((0,
                                tS.am)(t.x, -n.offset.x),
                                (0,
                                tS.am)(t.y, -n.offset.y))
                            }
                            (0,
                            tS.am)(t.x, i.offset.x),
                            (0,
                            tS.am)(t.y, i.offset.y)
                        }
                    }
                    return t
                }
                applyTransform(e, t=!1) {
                    let n = (0,
                    eJ.dO)();
                    tw(n, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let r = this.path[e];
                        !t && r.options.layoutScroll && r.scroll && r !== r.root && (0,
                        tS.D2)(n, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        (0,
                        tD.ud)(r.latestValues) && (0,
                        tS.D2)(n, r.latestValues)
                    }
                    return (0,
                    tD.ud)(this.latestValues) && (0,
                    tS.D2)(n, this.latestValues),
                    n
                }
                removeTransform(e) {
                    let t = (0,
                    eJ.dO)();
                    tw(t, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e];
                        if (!n.instance || !(0,
                        tD.ud)(n.latestValues))
                            continue;
                        (0,
                        tD.Lj)(n.latestValues) && n.updateSnapshot();
                        let r = (0,
                        eJ.dO)();
                        tw(r, n.measurePageBox()),
                        tT(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                    }
                    return (0,
                    tD.ud)(this.latestValues) && tT(t, this.latestValues),
                    t
                }
                setTargetDelta(e) {
                    this.targetDelta = e,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(e) {
                    this.options = {
                        ...this.options,
                        ...e,
                        crossfade: void 0 === e.crossfade || e.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(e=!1) {
                    var t, n, r, i;
                    let o = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                    let a = !!this.resumingFrom || this !== o;
                    if (!(e || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                        return;
                    let {layout: s, layoutId: l} = this.options;
                    if (this.layout && (s || l)) {
                        if (this.resolvedRelativeTargetAt = $.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let e = this.getClosestProjectingParent();
                            e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = (0,
                            eJ.dO)(),
                            this.relativeTargetOrigin = (0,
                            eJ.dO)(),
                            eG(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                            tw(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = (0,
                            eJ.dO)(),
                            this.targetWithTransforms = (0,
                            eJ.dO)()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            n = this.target,
                            r = this.relativeTarget,
                            i = this.relativeParent.target,
                            eH(n.x, r.x, i.x),
                            eH(n.y, r.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tw(this.target, this.layout.layoutBox),
                            (0,
                            tS.o2)(this.target, this.targetDelta)) : tw(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let e = this.getClosestProjectingParent();
                                e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = (0,
                                eJ.dO)(),
                                this.relativeTargetOrigin = (0,
                                eJ.dO)(),
                                eG(this.relativeTargetOrigin, this.target, e.target),
                                tw(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            tH.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || (0,
                    tD.Lj)(this.parent.latestValues) || (0,
                    tD.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var e;
                    let t = this.getLead()
                      , n = !!this.resumingFrom || this !== t
                      , r = !0;
                    if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1),
                    n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                    this.resolvedRelativeTargetAt === $.frameData.timestamp && (r = !1),
                    r)
                        return;
                    let {layout: i, layoutId: o} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(i || o))
                        return;
                    tw(this.layoutCorrected, this.layout.layoutBox);
                    let a = this.treeScale.x
                      , s = this.treeScale.y;
                    (0,
                    tS.YY)(this.layoutCorrected, this.treeScale, this.path, n),
                    t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox,
                    t.targetWithTransforms = (0,
                    eJ.dO)());
                    let {target: l} = t;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = (0,
                        eJ.wc)(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = (0,
                    eJ.wc)(),
                    this.projectionDeltaWithTransform = (0,
                    eJ.wc)());
                    let u = this.projectionTransform;
                    e$(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = tL(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== s) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    tH.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(e=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    e) {
                        let e = this.getStack();
                        e && e.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(e, t=!1) {
                    let n;
                    let r = this.snapshot
                      , i = r ? r.latestValues : {}
                      , o = {
                        ...this.latestValues
                    }
                      , a = (0,
                    eJ.wc)();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !t;
                    let s = (0,
                    eJ.dO)()
                      , l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , c = !u || u.members.length <= 1
                      , f = !!(l && !c && !0 === this.options.crossfade && !this.path.some(t7));
                    this.animationProgress = 0,
                    this.mixTargetDelta = t=>{
                        let r = t / 1e3;
                        if (t8(a.x, e.x, r),
                        t8(a.y, e.y, r),
                        this.setTargetDelta(a),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, h, p;
                            eG(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            h = this.relativeTarget,
                            p = this.relativeTargetOrigin,
                            t9(h.x, p.x, s.x, r),
                            t9(h.y, p.y, s.y, r),
                            n && (u = this.relativeTarget,
                            d = n,
                            u.x.min === d.x.min && u.x.max === d.x.max && u.y.min === d.y.min && u.y.max === d.y.max) && (this.isProjectionDirty = !1),
                            n || (n = (0,
                            eJ.dO)()),
                            tw(n, this.relativeTarget)
                        }
                        l && (this.animationValues = o,
                        function(e, t, n, r, i, o) {
                            i ? (e.opacity = (0,
                            eV.t)(0, void 0 !== n.opacity ? n.opacity : 1, tg(r)),
                            e.opacityExit = (0,
                            eV.t)(void 0 !== t.opacity ? t.opacity : 1, 0, ty(r))) : o && (e.opacity = (0,
                            eV.t)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                            for (let i = 0; i < th; i++) {
                                let o = `border${td[i]}Radius`
                                  , a = tv(t, o)
                                  , s = tv(n, o);
                                (void 0 !== a || void 0 !== s) && (a || (a = 0),
                                s || (s = 0),
                                0 === a || 0 === s || tm(a) === tm(s) ? (e[o] = Math.max((0,
                                eV.t)(tp(a), tp(s), r), 0),
                                (e3.aQ.test(s) || e3.aQ.test(a)) && (e[o] += "%")) : e[o] = s)
                            }
                            (t.rotate || n.rotate) && (e.rotate = (0,
                            eV.t)(t.rotate || 0, n.rotate || 0, r))
                        }(o, i, this.latestValues, r, f, c)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = r
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(e) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    $.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = $.Wi.update(()=>{
                        tn.hasAnimatedSinceResize = !0,
                        this.currentAnimation = (0,
                        tB.D)(0, 1e3, {
                            ...e,
                            onUpdate: t=>{
                                this.mixTargetDelta(t),
                                e.onUpdate && e.onUpdate(t)
                            }
                            ,
                            onComplete: ()=>{
                                e.onComplete && e.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let e = this.getStack();
                    e && e.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let e = this.getLead()
                      , {targetWithTransforms: t, target: n, layout: r, latestValues: i} = e;
                    if (t && n && r) {
                        if (this !== e && this.layout && r && ni(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            n = this.target || (0,
                            eJ.dO)();
                            let t = eB(this.layout.layoutBox.x);
                            n.x.min = e.target.x.min,
                            n.x.max = n.x.min + t;
                            let r = eB(this.layout.layoutBox.y);
                            n.y.min = e.target.y.min,
                            n.y.max = n.y.min + r
                        }
                        tw(t, n),
                        (0,
                        tS.D2)(t, i),
                        e$(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                    }
                }
                registerSharedNode(e, t) {
                    this.sharedNodes.has(e) || this.sharedNodes.set(e, new tz),
                    this.sharedNodes.get(e).add(t);
                    let n = t.options.initialPromotionConfig;
                    t.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
                    })
                }
                isLead() {
                    let e = this.getStack();
                    return !e || e.lead === this
                }
                getLead() {
                    var e;
                    let {layoutId: t} = this.options;
                    return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                }
                getPrevLead() {
                    var e;
                    let {layoutId: t} = this.options;
                    return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                }
                getStack() {
                    let {layoutId: e} = this.options;
                    if (e)
                        return this.root.sharedNodes.get(e)
                }
                promote({needsReset: e, transition: t, preserveFollowOpacity: n}={}) {
                    let r = this.getStack();
                    r && r.promote(this, n),
                    e && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    t && this.setOptions({
                        transition: t
                    })
                }
                relegate() {
                    let e = this.getStack();
                    return !!e && e.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return;
                    let t = !1
                      , {latestValues: n} = e;
                    if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
                    !t)
                        return;
                    let r = {};
                    n.z && tq("z", e, r, this.animationValues);
                    for (let t = 0; t < tU.length; t++)
                        tq(`rotate${tU[t]}`, e, r, this.animationValues),
                        tq(`skew${tU[t]}`, e, r, this.animationValues);
                    for (let t in e.render(),
                    r)
                        e.setStaticValue(t, r[t]),
                        this.animationValues && (this.animationValues[t] = r[t]);
                    e.scheduleRender()
                }
                getProjectionStyles(e) {
                    var t, n;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return tW;
                    let r = {
                        visibility: ""
                    }
                      , i = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        r.opacity = "",
                        r.pointerEvents = U(null == e ? void 0 : e.pointerEvents) || "",
                        r.transform = i ? i(this.latestValues, "") : "none",
                        r;
                    let o = this.getLead();
                    if (!this.projectionDelta || !this.layout || !o.target) {
                        let t = {};
                        return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        t.pointerEvents = U(null == e ? void 0 : e.pointerEvents) || ""),
                        this.hasProjected && !(0,
                        tD.ud)(this.latestValues) && (t.transform = i ? i({}, "") : "none",
                        this.hasProjected = !1),
                        t
                    }
                    let a = o.animationValues || o.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = tL(this.projectionDeltaWithTransform, this.treeScale, a),
                    i && (r.transform = i(a, r.transform));
                    let {x: s, y: l} = this.projectionDelta;
                    for (let e in r.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`,
                    o.animationValues ? r.opacity = o === this ? null !== (n = null !== (t = a.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0,
                    ta.P) {
                        if (void 0 === a[e])
                            continue;
                        let {correct: t, applyTo: n} = ta.P[e]
                          , i = "none" === r.transform ? a[e] : t(a[e], o);
                        if (n) {
                            let e = n.length;
                            for (let t = 0; t < e; t++)
                                r[n[t]] = i
                        } else
                            r[e] = i
                    }
                    return this.options.layoutId && (r.pointerEvents = o === this ? U(null == e ? void 0 : e.pointerEvents) || "" : "none"),
                    r
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(e=>{
                        var t;
                        return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                    }
                    ),
                    this.root.nodes.forEach(tJ),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function tQ(e) {
            e.updateLayout()
        }
        function tX(e) {
            var t;
            let n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
            if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                let {layoutBox: t, measuredBox: r} = e.layout
                  , {animationType: i} = e.options
                  , o = n.source !== e.layout.source;
                "size" === i ? e0(e=>{
                    let r = o ? n.measuredBox[e] : n.layoutBox[e]
                      , i = eB(r);
                    r.min = t[e].min,
                    r.max = r.min + i
                }
                ) : ni(i, n.layoutBox, t) && e0(r=>{
                    let i = o ? n.measuredBox[r] : n.layoutBox[r]
                      , a = eB(t[r]);
                    i.max = i.min + a,
                    e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[r].max = e.relativeTarget[r].min + a)
                }
                );
                let a = (0,
                eJ.wc)();
                e$(a, t, n.layoutBox);
                let s = (0,
                eJ.wc)();
                o ? e$(s, e.applyTransform(r, !0), n.measuredBox) : e$(s, t, n.layoutBox);
                let l = !tj(a)
                  , u = !1;
                if (!e.resumeFrom) {
                    let r = e.getClosestProjectingParent();
                    if (r && !r.resumeFrom) {
                        let {snapshot: i, layout: o} = r;
                        if (i && o) {
                            let a = (0,
                            eJ.dO)();
                            eG(a, n.layoutBox, i.layoutBox);
                            let s = (0,
                            eJ.dO)();
                            eG(s, t, o.layoutBox),
                            tO(a, s) || (u = !0),
                            r.options.layoutRoot && (e.relativeTarget = s,
                            e.relativeTargetOrigin = a,
                            e.relativeParent = r)
                        }
                    }
                }
                e.notifyListeners("didUpdate", {
                    layout: t,
                    snapshot: n,
                    delta: s,
                    layoutDelta: a,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (e.isLead()) {
                let {onExitComplete: t} = e.options;
                t && t()
            }
            e.options.transition = void 0
        }
        function tY(e) {
            tH.totalNodes++,
            e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
        }
        function tK(e) {
            e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
        }
        function tZ(e) {
            e.clearSnapshot()
        }
        function tJ(e) {
            e.clearMeasurements()
        }
        function t0(e) {
            e.isLayoutDirty = !1
        }
        function t1(e) {
            let {visualElement: t} = e.options;
            t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
            e.resetTransform()
        }
        function t2(e) {
            e.finishAnimation(),
            e.targetDelta = e.relativeTarget = e.target = void 0,
            e.isProjectionDirty = !0
        }
        function t3(e) {
            e.resolveTargetDelta()
        }
        function t4(e) {
            e.calcProjection()
        }
        function t6(e) {
            e.resetSkewAndRotation()
        }
        function t5(e) {
            e.removeLeadSnapshot()
        }
        function t8(e, t, n) {
            e.translate = (0,
            eV.t)(t.translate, 0, n),
            e.scale = (0,
            eV.t)(t.scale, 1, n),
            e.origin = t.origin,
            e.originPoint = t.originPoint
        }
        function t9(e, t, n, r) {
            e.min = (0,
            eV.t)(t.min, n.min, r),
            e.max = (0,
            eV.t)(t.max, n.max, r)
        }
        function t7(e) {
            return e.animationValues && void 0 !== e.animationValues.opacityExit
        }
        let ne = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , nt = e=>"undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
          , nn = nt("applewebkit/") && !nt("chrome/") ? Math.round : eu.Z;
        function nr(e) {
            e.min = nn(e.min),
            e.max = nn(e.max)
        }
        function ni(e, t, n) {
            return "position" === e || "preserve-aspect" === e && !eU(tA(t), tA(n), .2)
        }
        let no = tG({
            attachResizeListener: (e,t)=>G(e, "resize", t),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , na = {
            current: void 0
        }
          , ns = tG({
            measureScroll: e=>({
                x: e.scrollLeft,
                y: e.scrollTop
            }),
            defaultParent: ()=>{
                if (!na.current) {
                    let e = new no({});
                    e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    na.current = e
                }
                return na.current
            }
            ,
            resetTransform: (e,t)=>{
                e.style.transform = void 0 !== t ? t : "none"
            }
            ,
            checkIsScrollRoot: e=>"fixed" === window.getComputedStyle(e).position
        });
        var nl = n(86276)
          , nu = n(81165);
        let nc = (e,t)=>k(e) ? new nu.e(t,{
            enableHardwareAcceleration: !1
        }) : new nl.W(t,{
            allowProjection: e !== o.Fragment,
            enableHardwareAcceleration: !0
        })
          , nf = {
            animation: {
                Feature: e_
            },
            exit: {
                Feature: ej
            },
            inView: {
                Feature: eg
            },
            tap: {
                Feature: ef
            },
            focus: {
                Feature: es
            },
            hover: {
                Feature: ea
            },
            pan: {
                Feature: tt
            },
            drag: {
                Feature: e7,
                ProjectionNode: ns,
                MeasureLayout: tl
            },
            layout: {
                ProjectionNode: ns,
                MeasureLayout: tl
            }
        }
          , nd = function(e) {
            function t(t, n={}) {
                return function({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: h}) {
                    e && function(e) {
                        for (let t in e)
                            y.A[t] = {
                                ...y.A[t],
                                ...e[t]
                            }
                    }(e);
                    let P = (0,
                    o.forwardRef)(function(y, S) {
                        var P;
                        let k;
                        let E = {
                            ...(0,
                            o.useContext)(a._),
                            ...y,
                            layoutId: function({layoutId: e}) {
                                let t = (0,
                                o.useContext)(x.p).id;
                                return t && void 0 !== e ? t + "-" + e : e
                            }(y)
                        }
                          , {isStatic: C} = E
                          , T = function(e) {
                            let {initial: t, animate: n} = function(e, t) {
                                if ((0,
                                v.G)(e)) {
                                    let {initial: t, animate: n} = e;
                                    return {
                                        initial: !1 === t || (0,
                                        m.$)(t) ? t : void 0,
                                        animate: (0,
                                        m.$)(n) ? n : void 0
                                    }
                                }
                                return !1 !== e.inherit ? t : {}
                            }(e, (0,
                            o.useContext)(s));
                            return (0,
                            o.useMemo)(()=>({
                                initial: t,
                                animate: n
                            }), [g(t), g(n)])
                        }(y)
                          , _ = r(y, C);
                        if (!C && b.j) {
                            T.visualElement = function(e, t, n, r) {
                                let {visualElement: i} = (0,
                                o.useContext)(s)
                                  , h = (0,
                                o.useContext)(c)
                                  , p = (0,
                                o.useContext)(l.O)
                                  , m = (0,
                                o.useContext)(a._).reducedMotion
                                  , v = (0,
                                o.useRef)();
                                r = r || h.renderer,
                                !v.current && r && (v.current = r(e, {
                                    visualState: t,
                                    parent: i,
                                    props: n,
                                    presenceContext: p,
                                    blockInitialAnimation: !!p && !1 === p.initial,
                                    reducedMotionConfig: m
                                }));
                                let g = v.current;
                                (0,
                                o.useInsertionEffect)(()=>{
                                    g && g.update(n, p)
                                }
                                );
                                let y = (0,
                                o.useRef)(!!(n[f.M] && !window.HandoffComplete));
                                return (0,
                                u.L)(()=>{
                                    g && (d.postRender(g.render),
                                    y.current && g.animationState && g.animationState.animateChanges())
                                }
                                ),
                                (0,
                                o.useEffect)(()=>{
                                    g && (g.updateFeatures(),
                                    !y.current && g.animationState && g.animationState.animateChanges(),
                                    y.current && (y.current = !1,
                                    window.HandoffComplete = !0))
                                }
                                ),
                                g
                            }(h, _, E, t);
                            let n = (0,
                            o.useContext)(w)
                              , r = (0,
                            o.useContext)(c).strict;
                            T.visualElement && (k = T.visualElement.loadFeatures(E, r, e, n))
                        }
                        return (0,
                        i.jsxs)(s.Provider, {
                            value: T,
                            children: [k && T.visualElement ? (0,
                            i.jsx)(k, {
                                visualElement: T.visualElement,
                                ...E
                            }) : null, n(h, y, (P = T.visualElement,
                            (0,
                            o.useCallback)(e=>{
                                e && _.mount && _.mount(e),
                                P && (e ? P.mount(e) : P.unmount()),
                                S && ("function" == typeof S ? S(e) : (0,
                                p.I)(S) && (S.current = e))
                            }
                            , [P])), _, C, T.visualElement)]
                        })
                    });
                    return P[S] = h,
                    P
                }(e(t, n))
            }
            if ("undefined" == typeof Proxy)
                return t;
            let n = new Map;
            return new Proxy(t,{
                get: (e,r)=>(n.has(r) || n.set(r, t(r)),
                n.get(r))
            })
        }((e,t)=>(function(e, {forwardMotionProps: t=!1}, n, r) {
            return {
                ...k(e) ? H : q,
                preloadedFeatures: n,
                useRender: function(e=!1) {
                    return (t,n,r,{latestValues: i},a)=>{
                        let s = (k(t) ? function(e, t, n, r) {
                            let i = (0,
                            o.useMemo)(()=>{
                                let n = z();
                                return (0,
                                R.i)(n, t, {
                                    enableHardwareAcceleration: !1
                                }, (0,
                                L.a)(r), e.transformTemplate),
                                {
                                    ...n.attrs,
                                    style: {
                                        ...n.style
                                    }
                                }
                            }
                            , [t]);
                            if (e.style) {
                                let t = {};
                                M(t, e.style, e),
                                i.style = {
                                    ...t,
                                    ...i.style
                                }
                            }
                            return i
                        }
                        : function(e, t, n) {
                            let r = {}
                              , i = function(e, t, n) {
                                let r = e.style || {}
                                  , i = {};
                                return M(i, r, e),
                                Object.assign(i, function({transformTemplate: e}, t, n) {
                                    return (0,
                                    o.useMemo)(()=>{
                                        let r = _();
                                        return (0,
                                        T.r)(r, t, {
                                            enableHardwareAcceleration: !n
                                        }, e),
                                        Object.assign({}, r.vars, r.style)
                                    }
                                    , [t])
                                }(e, t, n)),
                                i
                            }(e, t, n);
                            return e.drag && !1 !== e.dragListener && (r.draggable = !1,
                            i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
                            i.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`),
                            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
                            r.style = i,
                            r
                        }
                        )(n, i, a, t)
                          , l = function(e, t, n) {
                            let r = {};
                            for (let i in e)
                                ("values" !== i || "object" != typeof e.values) && (A(i) || !0 === n && O(i) || !t && !O(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                            return r
                        }(n, "string" == typeof t, e)
                          , u = t !== o.Fragment ? {
                            ...l,
                            ...s,
                            ref: r
                        } : {}
                          , {children: c} = n
                          , f = (0,
                        o.useMemo)(()=>(0,
                        C.i)(c) ? c.get() : c, [c]);
                        return (0,
                        o.createElement)(t, {
                            ...u,
                            children: f
                        })
                    }
                }(t),
                createVisualElement: r,
                Component: e
            }
        }
        )(e, t, nf, nc))
    },
    65998: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return r
            }
        });
        let r = e=>e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
    },
    57126: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return i
            },
            t: function() {
                return a
            }
        });
        let r = e=>t=>"string" == typeof t && t.startsWith(e)
          , i = r("--")
          , o = r("var(--")
          , a = e=>!!o(e) && s.test(e.split("/*")[0].trim())
          , s = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    },
    41937: function(e, t, n) {
        "use strict";
        function r(e) {
            return e instanceof SVGElement && "svg" !== e.tagName
        }
        n.d(t, {
            v: function() {
                return r
            }
        })
    },
    84637: function(e, t, n) {
        "use strict";
        n.d(t, {
            I: function() {
                return i
            }
        });
        var r = n(29908);
        function i(e, t, n) {
            var i;
            if ("string" == typeof e) {
                let o = document;
                t && ((0,
                r.k)(!!t.current, "Scope provided, but no element detected."),
                o = t.current),
                n ? (null !== (i = n[e]) && void 0 !== i || (n[e] = o.querySelectorAll(e)),
                e = n[e]) : e = o.querySelectorAll(e)
            } else
                e instanceof Element && (e = [e]);
            return Array.from(e || [])
        }
    },
    22756: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ei: function() {
                return d
            },
            lw: function() {
                return h
            },
            mP: function() {
                return s
            },
            z2: function() {
                return a
            }
        });
        var r = n(60618)
          , i = n(25218)
          , o = n(72724);
        let a = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , s = e=>e === i.Rx || e === o.px
          , l = (e,t)=>parseFloat(e.split(", ")[t])
          , u = (e,t)=>(n,{transform: r})=>{
            if ("none" === r || !r)
                return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i)
                return l(i[1], t);
            {
                let t = r.match(/^matrix\((.+)\)$/u);
                return t ? l(t[1], e) : 0
            }
        }
          , c = new Set(["x", "y", "z"])
          , f = r._.filter(e=>!c.has(e));
        function d(e) {
            let t = [];
            return f.forEach(n=>{
                let r = e.getValue(n);
                void 0 !== r && (t.push([n, r.get()]),
                r.set(n.startsWith("scale") ? 1 : 0))
            }
            ),
            t
        }
        let h = {
            width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
            height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
            top: (e,{top: t})=>parseFloat(t),
            left: (e,{left: t})=>parseFloat(t),
            bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
            right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
            x: u(4, 13),
            y: u(5, 14)
        };
        h.translateX = h.x,
        h.translateY = h.y
    },
    23462: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return a
            }
        });
        var r = n(92263)
          , i = n(82915)
          , o = n(56217);
        function a(e, t) {
            let n = (0,
            o.A)(e);
            return n !== i.h && (n = r.P),
            n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        }
    },
    56217: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return a
            }
        });
        var r = n(22809)
          , i = n(82915);
        let o = {
            ...n(97346).j,
            color: r.$,
            backgroundColor: r.$,
            outlineColor: r.$,
            fill: r.$,
            stroke: r.$,
            borderColor: r.$,
            borderTopColor: r.$,
            borderRightColor: r.$,
            borderBottomColor: r.$,
            borderLeftColor: r.$,
            filter: i.h,
            WebkitFilter: i.h
        }
          , a = e=>o[e]
    },
    61921: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return a
            },
            C: function() {
                return s
            }
        });
        var r = n(25218)
          , i = n(72724)
          , o = n(94707);
        let a = [r.Rx, i.px, i.aQ, i.RW, i.vw, i.vh, {
            test: e=>"auto" === e,
            parse: e=>e
        }]
          , s = e=>a.find((0,
        o.l)(e))
    },
    97346: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return a
            }
        });
        var r = n(25218)
          , i = n(72724);
        let o = {
            ...r.Rx,
            transform: Math.round
        }
          , a = {
            borderWidth: i.px,
            borderTopWidth: i.px,
            borderRightWidth: i.px,
            borderBottomWidth: i.px,
            borderLeftWidth: i.px,
            borderRadius: i.px,
            radius: i.px,
            borderTopLeftRadius: i.px,
            borderTopRightRadius: i.px,
            borderBottomRightRadius: i.px,
            borderBottomLeftRadius: i.px,
            width: i.px,
            maxWidth: i.px,
            height: i.px,
            maxHeight: i.px,
            size: i.px,
            top: i.px,
            right: i.px,
            bottom: i.px,
            left: i.px,
            padding: i.px,
            paddingTop: i.px,
            paddingRight: i.px,
            paddingBottom: i.px,
            paddingLeft: i.px,
            margin: i.px,
            marginTop: i.px,
            marginRight: i.px,
            marginBottom: i.px,
            marginLeft: i.px,
            rotate: i.RW,
            rotateX: i.RW,
            rotateY: i.RW,
            rotateZ: i.RW,
            scale: r.bA,
            scaleX: r.bA,
            scaleY: r.bA,
            scaleZ: r.bA,
            skew: i.RW,
            skewX: i.RW,
            skewY: i.RW,
            distance: i.px,
            translateX: i.px,
            translateY: i.px,
            translateZ: i.px,
            x: i.px,
            y: i.px,
            z: i.px,
            perspective: i.px,
            transformPerspective: i.px,
            opacity: r.Fq,
            originX: i.$C,
            originY: i.$C,
            originZ: i.px,
            zIndex: o,
            backgroundPositionX: i.px,
            backgroundPositionY: i.px,
            fillOpacity: r.Fq,
            strokeOpacity: r.Fq,
            numOctaves: o
        }
    },
    94707: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return r
            }
        });
        let r = e=>t=>t.test(e)
    },
    86276: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return d
            }
        });
        var r = n(25275)
          , i = n(57126)
          , o = n(60618)
          , a = n(46235)
          , s = n(54269)
          , l = n(56217)
          , u = n(30411)
          , c = n(70176)
          , f = n(82702);
        class d extends c.J {
            constructor() {
                super(...arguments),
                this.type = "html"
            }
            readValueFromInstance(e, t) {
                if (o.G.has(t)) {
                    let e = (0,
                    l.A)(t);
                    return e && e.default || 0
                }
                {
                    let n = window.getComputedStyle(e)
                      , r = ((0,
                    i.f)(t) ? n.getPropertyValue(t) : n[t]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(e, {transformPagePoint: t}) {
                return (0,
                u.J)(e, t)
            }
            build(e, t, n, i) {
                (0,
                r.r)(e, t, n, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(e, t, n) {
                return (0,
                a.U)(e, t, n)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: e} = this.props;
                (0,
                f.i)(e) && (this.childSubscription = e.on("change", e=>{
                    this.current && (this.current.textContent = `${e}`)
                }
                ))
            }
            renderInstance(e, t, n, r) {
                (0,
                s.N)(e, t, n, r)
            }
        }
    },
    25275: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return u
            }
        });
        var r = n(60618);
        let i = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , o = r._.length;
        var a = n(57126);
        let s = (e,t)=>t && "number" == typeof e ? t.transform(e) : e;
        var l = n(97346);
        function u(e, t, n, u) {
            let {style: c, vars: f, transform: d, transformOrigin: h} = e
              , p = !1
              , m = !1
              , v = !0;
            for (let e in t) {
                let n = t[e];
                if ((0,
                a.f)(e)) {
                    f[e] = n;
                    continue
                }
                let i = l.j[e]
                  , o = s(n, i);
                if (r.G.has(e)) {
                    if (p = !0,
                    d[e] = o,
                    !v)
                        continue;
                    n !== (i.default || 0) && (v = !1)
                } else
                    e.startsWith("origin") ? (m = !0,
                    h[e] = o) : c[e] = o
            }
            if (!t.transform && (p || u ? c.transform = function(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, a, s) {
                let l = "";
                for (let t = 0; t < o; t++) {
                    let n = r._[t];
                    if (void 0 !== e[n]) {
                        let t = i[n] || n;
                        l += `${t}(${e[n]}) `
                    }
                }
                return t && !e.z && (l += "translateZ(0)"),
                l = l.trim(),
                s ? l = s(e, a ? "" : l) : n && a && (l = "none"),
                l
            }(e.transform, n, v, u) : c.transform && (c.transform = "none")),
            m) {
                let {originX: e="50%", originY: t="50%", originZ: n=0} = h;
                c.transformOrigin = `${e} ${t} ${n}`
            }
        }
    },
    54269: function(e, t, n) {
        "use strict";
        function r(e, {style: t, vars: n}, r, i) {
            for (let o in Object.assign(e.style, t, i && i.getProjectionStyles(r)),
            n)
                e.style.setProperty(o, n[o])
        }
        n.d(t, {
            N: function() {
                return r
            }
        })
    },
    46235: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return o
            }
        });
        var r = n(5403)
          , i = n(82702);
        function o(e, t, n) {
            var o;
            let {style: a} = e
              , s = {};
            for (let l in a)
                ((0,
                i.i)(a[l]) || t.style && (0,
                i.i)(t.style[l]) || (0,
                r.j)(l, e) || (null === (o = null == n ? void 0 : n.getValue(l)) || void 0 === o ? void 0 : o.liveStyle) !== void 0) && (s[l] = a[l]);
            return s
        }
    },
    60618: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return i
            },
            _: function() {
                return r
            }
        });
        let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , i = new Set(r)
    },
    48854: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return r
            }
        });
        let r = new WeakMap
    },
    81165: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return h
            }
        });
        var r = n(9548)
          , i = n(70176)
          , o = n(48348)
          , a = n(65998)
          , s = n(38766)
          , l = n(60618)
          , u = n(81661)
          , c = n(56217)
          , f = n(24884)
          , d = n(27612);
        class h extends i.J {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(e, t) {
                return e[t]
            }
            readValueFromInstance(e, t) {
                if (l.G.has(t)) {
                    let e = (0,
                    c.A)(t);
                    return e && e.default || 0
                }
                return t = s.s.has(t) ? t : (0,
                a.D)(t),
                e.getAttribute(t)
            }
            measureInstanceViewportBox() {
                return (0,
                f.dO)()
            }
            scrapeMotionValuesFromProps(e, t, n) {
                return (0,
                r.U)(e, t, n)
            }
            build(e, t, n, r) {
                (0,
                o.i)(e, t, n, this.isSVGTag, r.transformTemplate)
            }
            renderInstance(e, t, n, r) {
                (0,
                u.K)(e, t, n, r)
            }
            mount(e) {
                this.isSVGTag = (0,
                d.a)(e.tagName),
                super.mount(e)
            }
        }
    },
    48348: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return l
            }
        });
        var r = n(25275)
          , i = n(72724);
        function o(e, t, n) {
            return "string" == typeof e ? e : i.px.transform(t + n * e)
        }
        let a = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , s = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function l(e, {attrX: t, attrY: n, attrScale: l, originX: u, originY: c, pathLength: f, pathSpacing: d=1, pathOffset: h=0, ...p}, m, v, g) {
            if ((0,
            r.r)(e, p, m, g),
            v) {
                e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                return
            }
            e.attrs = e.style,
            e.style = {};
            let {attrs: y, style: b, dimensions: x} = e;
            y.transform && (x && (b.transform = y.transform),
            delete y.transform),
            x && (void 0 !== u || void 0 !== c || b.transform) && (b.transformOrigin = function(e, t, n) {
                let r = o(t, e.x, e.width)
                  , i = o(n, e.y, e.height);
                return `${r} ${i}`
            }(x, void 0 !== u ? u : .5, void 0 !== c ? c : .5)),
            void 0 !== t && (y.x = t),
            void 0 !== n && (y.y = n),
            void 0 !== l && (y.scale = l),
            void 0 !== f && function(e, t, n=1, r=0, o=!0) {
                e.pathLength = 1;
                let l = o ? a : s;
                e[l.offset] = i.px.transform(-r);
                let u = i.px.transform(t)
                  , c = i.px.transform(n);
                e[l.array] = `${u} ${c}`
            }(y, f, d, h, !1)
        }
    },
    38766: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return r
            }
        });
        let r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    27612: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return r
            }
        });
        let r = e=>"string" == typeof e && "svg" === e.toLowerCase()
    },
    81661: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return a
            }
        });
        var r = n(65998)
          , i = n(54269)
          , o = n(38766);
        function a(e, t, n, a) {
            for (let n in (0,
            i.N)(e, t, void 0, a),
            t.attrs)
                e.setAttribute(o.s.has(n) ? n : (0,
                r.D)(n), t.attrs[n])
        }
    },
    9548: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return a
            }
        });
        var r = n(82702)
          , i = n(46235)
          , o = n(60618);
        function a(e, t, n) {
            let a = (0,
            i.U)(e, t, n);
            for (let n in e)
                ((0,
                r.i)(e[n]) || (0,
                r.i)(t[n])) && (a[-1 !== o._.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
            return a
        }
    },
    54178: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return f
            },
            m: function() {
                return c
            }
        });
        var r = n(22756)
          , i = n(14205);
        let o = new Set
          , a = !1
          , s = !1;
        function l() {
            if (s) {
                let e = Array.from(o).filter(e=>e.needsMeasurement)
                  , t = new Set(e.map(e=>e.element))
                  , n = new Map;
                t.forEach(e=>{
                    let t = (0,
                    r.Ei)(e);
                    t.length && (n.set(e, t),
                    e.render())
                }
                ),
                e.forEach(e=>e.measureInitialState()),
                t.forEach(e=>{
                    e.render();
                    let t = n.get(e);
                    t && t.forEach(([t,n])=>{
                        var r;
                        null === (r = e.getValue(t)) || void 0 === r || r.set(n)
                    }
                    )
                }
                ),
                e.forEach(e=>e.measureEndState()),
                e.forEach(e=>{
                    void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
                }
                )
            }
            s = !1,
            a = !1,
            o.forEach(e=>e.complete()),
            o.clear()
        }
        function u() {
            o.forEach(e=>{
                e.readKeyframes(),
                e.needsMeasurement && (s = !0)
            }
            )
        }
        function c() {
            u(),
            l()
        }
        class f {
            constructor(e, t, n, r, i, o=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...e],
                this.onComplete = t,
                this.name = n,
                this.motionValue = r,
                this.element = i,
                this.isAsync = o
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (o.add(this),
                a || (a = !0,
                i.Wi.read(u),
                i.Wi.resolveKeyframes(l))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: e, name: t, element: n, motionValue: r} = this;
                for (let i = 0; i < e.length; i++)
                    if (null === e[i]) {
                        if (0 === i) {
                            let i = null == r ? void 0 : r.get()
                              , o = e[e.length - 1];
                            if (void 0 !== i)
                                e[0] = i;
                            else if (n && t) {
                                let r = n.readValue(t, o);
                                null != r && (e[0] = r)
                            }
                            void 0 === e[0] && (e[0] = o),
                            r && void 0 === i && r.set(e[0])
                        } else
                            e[i] = e[i - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                o.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                o.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
    },
    79739: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return a
            },
            M: function() {
                return s
            }
        });
        var r = n(54633)
          , i = n(16930)
          , o = n(41867);
        function a(e) {
            return (0,
            r.H)(e.animate) || o.V.some(t=>(0,
            i.$)(e[t]))
        }
        function s(e) {
            return !!(a(e) || e.variants)
        }
    },
    16930: function(e, t, n) {
        "use strict";
        function r(e) {
            return "string" == typeof e || Array.isArray(e)
        }
        n.d(t, {
            $: function() {
                return r
            }
        })
    },
    1148: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return i
            }
        });
        var r = n(51422);
        function i(e, t, n) {
            let i = e.getProps();
            return (0,
            r.o)(i, t, void 0 !== n ? n : i.custom, function(e) {
                let t = {};
                return e.values.forEach((e,n)=>t[n] = e.get()),
                t
            }(e), function(e) {
                let t = {};
                return e.values.forEach((e,n)=>t[n] = e.getVelocity()),
                t
            }(e))
        }
    },
    51422: function(e, t, n) {
        "use strict";
        function r(e, t, n, r={}, i={}) {
            return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
            "string" == typeof t && (t = e.variants && e.variants[t]),
            "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
            t
        }
        n.d(t, {
            o: function() {
                return r
            }
        })
    },
    41867: function(e, t, n) {
        "use strict";
        n.d(t, {
            V: function() {
                return i
            },
            e: function() {
                return r
            }
        });
        let r = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , i = ["initial", ...r]
    },
    36832: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return r
            }
        });
        let r = {
            skipAnimations: !1,
            useManualTiming: !1
        }
    },
    50406: function(e, t, n) {
        "use strict";
        function r(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function i(e, t) {
            let n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        n.d(t, {
            cl: function() {
                return i
            },
            y4: function() {
                return r
            }
        })
    },
    22476: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return r
            }
        });
        let r = (e,t,n)=>n > t ? t : n < e ? e : n
    },
    29908: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return i
            },
            k: function() {
                return o
            }
        });
        var r = n(3393);
        let i = r.Z
          , o = r.Z
    },
    39780: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return u
            }
        });
        var r = n(29908)
          , i = n(22476)
          , o = n(19280)
          , a = n(16384)
          , s = n(3393)
          , l = n(67416);
        function u(e, t, {clamp: n=!0, ease: u, mixer: c}={}) {
            let f = e.length;
            if ((0,
            r.k)(f === t.length, "Both input and output ranges must be the same length"),
            1 === f)
                return ()=>t[0];
            if (2 === f && e[0] === e[1])
                return ()=>t[1];
            e[0] > e[f - 1] && (e = [...e].reverse(),
            t = [...t].reverse());
            let d = function(e, t, n) {
                let r = []
                  , i = n || l.C
                  , a = e.length - 1;
                for (let n = 0; n < a; n++) {
                    let a = i(e[n], e[n + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[n] || s.Z : t;
                        a = (0,
                        o.z)(e, a)
                    }
                    r.push(a)
                }
                return r
            }(t, u, c)
              , h = d.length
              , p = t=>{
                let n = 0;
                if (h > 1)
                    for (; n < e.length - 2 && !(t < e[n + 1]); n++)
                        ;
                let r = (0,
                a.Y)(e[n], e[n + 1], t);
                return d[n](r)
            }
            ;
            return n ? t=>p((0,
            i.u)(e[0], e[f - 1], t)) : p
        }
    },
    61702: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return r
            }
        });
        let r = "undefined" != typeof document
    },
    34829: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return r
            }
        });
        let r = e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
    },
    98285: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }
        n.d(t, {
            I: function() {
                return r
            }
        })
    },
    96894: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return r
            }
        });
        let r = e=>/^0[^.\s]+$/u.test(e)
    },
    66190: function(e, t, n) {
        "use strict";
        function r(e) {
            let t;
            return ()=>(void 0 === t && (t = e()),
            t)
        }
        n.d(t, {
            X: function() {
                return r
            }
        })
    },
    67416: function(e, t, n) {
        "use strict";
        n.d(t, {
            C: function() {
                return k
            }
        });
        var r = n(5312)
          , i = n(29908);
        function o(e, t, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var a = n(34184)
          , s = n(46352)
          , l = n(99808);
        let u = (e,t,n)=>{
            let r = e * e
              , i = n * (t * t - r) + r;
            return i < 0 ? 0 : Math.sqrt(i)
        }
          , c = [a.$, s.m, l.J]
          , f = e=>c.find(t=>t.test(e));
        function d(e) {
            let t = f(e);
            (0,
            i.k)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
            let n = t.parse(e);
            return t === l.J && (n = function({hue: e, saturation: t, lightness: n, alpha: r}) {
                e /= 360,
                n /= 100;
                let i = 0
                  , a = 0
                  , s = 0;
                if (t /= 100) {
                    let r = n < .5 ? n * (1 + t) : n + t - n * t
                      , l = 2 * n - r;
                    i = o(l, r, e + 1 / 3),
                    a = o(l, r, e),
                    s = o(l, r, e - 1 / 3)
                } else
                    i = a = s = n;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * a),
                    blue: Math.round(255 * s),
                    alpha: r
                }
            }(n)),
            n
        }
        let h = (e,t)=>{
            let n = d(e)
              , i = d(t)
              , o = {
                ...n
            };
            return e=>(o.red = u(n.red, i.red, e),
            o.green = u(n.green, i.green, e),
            o.blue = u(n.blue, i.blue, e),
            o.alpha = (0,
            r.t)(n.alpha, i.alpha, e),
            s.m.transform(o))
        }
        ;
        var p = n(19280)
          , m = n(22809)
          , v = n(92263)
          , g = n(57126);
        function y(e, t) {
            return n=>n > 0 ? t : e
        }
        function b(e, t) {
            return n=>(0,
            r.t)(e, t, n)
        }
        function x(e) {
            return "number" == typeof e ? b : "string" == typeof e ? (0,
            g.t)(e) ? y : m.$.test(e) ? h : P : Array.isArray(e) ? w : "object" == typeof e ? m.$.test(e) ? h : S : y
        }
        function w(e, t) {
            let n = [...e]
              , r = n.length
              , i = e.map((e,n)=>x(e)(e, t[n]));
            return e=>{
                for (let t = 0; t < r; t++)
                    n[t] = i[t](e);
                return n
            }
        }
        function S(e, t) {
            let n = {
                ...e,
                ...t
            }
              , r = {};
            for (let i in n)
                void 0 !== e[i] && void 0 !== t[i] && (r[i] = x(e[i])(e[i], t[i]));
            return e=>{
                for (let t in r)
                    n[t] = r[t](e);
                return n
            }
        }
        let P = (e,t)=>{
            let n = v.P.createTransformer(t)
              , r = (0,
            v.V)(e)
              , o = (0,
            v.V)(t);
            return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? (0,
            p.z)(w(function(e, t) {
                var n;
                let r = []
                  , i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let o = 0; o < t.values.length; o++) {
                    let a = t.types[o]
                      , s = e.indexes[a][i[a]]
                      , l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                    r[o] = l,
                    i[a]++
                }
                return r
            }(r, o), o.values), n) : ((0,
            i.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            y(e, t))
        }
        ;
        function k(e, t, n) {
            return "number" == typeof e && "number" == typeof t && "number" == typeof n ? (0,
            r.t)(e, t, n) : x(e)(e, t)
        }
    },
    5312: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return r
            }
        });
        let r = (e,t,n)=>e + (t - e) * n
    },
    3393: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        let r = e=>e
    },
    55865: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return i
            }
        });
        var r = n(12426);
        function i(e) {
            let t = [0];
            return (0,
            r.c)(t, e.length - 1),
            t
        }
    },
    12426: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return o
            }
        });
        var r = n(5312)
          , i = n(16384);
        function o(e, t) {
            let n = e[e.length - 1];
            for (let o = 1; o <= t; o++) {
                let a = (0,
                i.Y)(0, t, o);
                e.push((0,
                r.t)(n, 1, a))
            }
        }
    },
    19280: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return i
            }
        });
        let r = (e,t)=>n=>t(e(n))
          , i = (...e)=>e.reduce(r)
    },
    16384: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return r
            }
        });
        let r = (e,t,n)=>{
            let r = t - e;
            return 0 === r ? 1 : (n - e) / r
        }
    },
    30698: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return o
            },
            p: function() {
                return i
            }
        });
        var r = n(60561);
        let i = e=>!!(e && "object" == typeof e && e.mix && e.toValue)
          , o = e=>(0,
        r.C)(e) ? e[e.length - 1] || 0 : e
    },
    52685: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return i
            }
        });
        var r = n(50406);
        class i {
            constructor() {
                this.subscriptions = []
            }
            add(e) {
                return (0,
                r.y4)(this.subscriptions, e),
                ()=>(0,
                r.cl)(this.subscriptions, e)
            }
            notify(e, t, n) {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](e, t, n);
                    else
                        for (let i = 0; i < r; i++) {
                            let r = this.subscriptions[i];
                            r && r(e, t, n)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    33303: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return i
            },
            w: function() {
                return r
            }
        });
        let r = e=>1e3 * e
          , i = e=>e / 1e3
    },
    13767: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return a
            }
        });
        var r = n(2265)
          , i = n(93449)
          , o = n(14205);
        function a(e) {
            let t = (0,
            r.useRef)(0)
              , {isStatic: n} = (0,
            r.useContext)(i._);
            (0,
            r.useEffect)(()=>{
                if (n)
                    return;
                let r = ({timestamp: n, delta: r})=>{
                    t.current || (t.current = n),
                    e(n - t.current, r)
                }
                ;
                return o.Wi.update(r, !0),
                ()=>(0,
                o.Pn)(r)
            }
            , [e])
        }
    },
    72435: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return i
            }
        });
        var r = n(2265);
        function i(e) {
            let t = (0,
            r.useRef)(null);
            return null === t.current && (t.current = e()),
            t.current
        }
    },
    45526: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return i
            }
        });
        var r = n(2265);
        let i = n(61702).j ? r.useLayoutEffect : r.useEffect
    },
    85364: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return i
            }
        });
        var r = n(2265);
        function i(e, t, n) {
            (0,
            r.useInsertionEffect)(()=>e.on(t, n), [e, t, n])
        }
    },
    62444: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return i
            }
        });
        var r = n(2265);
        function i(e) {
            return (0,
            r.useEffect)(()=>()=>e(), [])
        }
    },
    92181: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return t ? 1e3 / t * e : 0
        }
        n.d(t, {
            R: function() {
                return r
            }
        })
    },
    83299: function(e, t, n) {
        "use strict";
        n.d(t, {
            BX: function() {
                return c
            },
            S1: function() {
                return l
            }
        });
        var r = n(52685)
          , i = n(92181)
          , o = n(33791)
          , a = n(14205);
        let s = e=>!isNaN(parseFloat(e))
          , l = {
            current: void 0
        };
        class u {
            constructor(e, t={}) {
                this.version = "11.1.7",
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (e,t=!0)=>{
                    let n = o.X.now();
                    this.updatedAt !== n && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(e),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(e),
                this.canTrackVelocity = s(this.current),
                this.owner = t.owner
            }
            setCurrent(e) {
                this.current = e,
                this.updatedAt = o.X.now()
            }
            setPrevFrameValue(e=this.current) {
                this.prevFrameValue = e,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(e) {
                return this.on("change", e)
            }
            on(e, t) {
                this.events[e] || (this.events[e] = new r.L);
                let n = this.events[e].add(t);
                return "change" === e ? ()=>{
                    n(),
                    a.Wi.read(()=>{
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : n
            }
            clearListeners() {
                for (let e in this.events)
                    this.events[e].clear()
            }
            attach(e, t) {
                this.passiveEffect = e,
                this.stopPassiveEffect = t
            }
            set(e, t=!0) {
                t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
            }
            setWithVelocity(e, t, n) {
                this.set(t),
                this.prev = void 0,
                this.prevFrameValue = e,
                this.prevUpdatedAt = this.updatedAt - n
            }
            jump(e, t=!0) {
                this.updateAndNotify(e),
                this.prev = e,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                t && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return l.current && l.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let e = o.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                i.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
            }
            start(e) {
                return this.stop(),
                new Promise(t=>{
                    this.hasAnimated = !0,
                    this.animation = e(t),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then(()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function c(e, t) {
            return new u(e,t)
        }
    },
    34184: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return i
            }
        });
        var r = n(46352);
        let i = {
            test: (0,
            n(90204).i)("#"),
            parse: function(e) {
                let t = ""
                  , n = ""
                  , r = ""
                  , i = "";
                return e.length > 5 ? (t = e.substring(1, 3),
                n = e.substring(3, 5),
                r = e.substring(5, 7),
                i = e.substring(7, 9)) : (t = e.substring(1, 2),
                n = e.substring(2, 3),
                r = e.substring(3, 4),
                i = e.substring(4, 5),
                t += t,
                n += n,
                r += r,
                i += i),
                {
                    red: parseInt(t, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: r.m.transform
        }
    },
    99808: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return s
            }
        });
        var r = n(25218)
          , i = n(72724)
          , o = n(93922)
          , a = n(90204);
        let s = {
            test: (0,
            a.i)("hsl", "hue"),
            parse: (0,
            a.d)("hue", "saturation", "lightness"),
            transform: ({hue: e, saturation: t, lightness: n, alpha: a=1})=>"hsla(" + Math.round(e) + ", " + i.aQ.transform((0,
            o.Nw)(t)) + ", " + i.aQ.transform((0,
            o.Nw)(n)) + ", " + (0,
            o.Nw)(r.Fq.transform(a)) + ")"
        }
    },
    22809: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return s
            }
        });
        var r = n(93922)
          , i = n(34184)
          , o = n(99808)
          , a = n(46352);
        let s = {
            test: e=>a.m.test(e) || i.$.test(e) || o.J.test(e),
            parse: e=>a.m.test(e) ? a.m.parse(e) : o.J.test(e) ? o.J.parse(e) : i.$.parse(e),
            transform: e=>(0,
            r.HD)(e) ? e : e.hasOwnProperty("red") ? a.m.transform(e) : o.J.transform(e)
        }
    },
    46352: function(e, t, n) {
        "use strict";
        n.d(t, {
            m: function() {
                return u
            }
        });
        var r = n(22476)
          , i = n(25218)
          , o = n(93922)
          , a = n(90204);
        let s = e=>(0,
        r.u)(0, 255, e)
          , l = {
            ...i.Rx,
            transform: e=>Math.round(s(e))
        }
          , u = {
            test: (0,
            a.i)("rgb", "red"),
            parse: (0,
            a.d)("red", "green", "blue"),
            transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(n) + ", " + (0,
            o.Nw)(i.Fq.transform(r)) + ")"
        }
    },
    90204: function(e, t, n) {
        "use strict";
        n.d(t, {
            d: function() {
                return o
            },
            i: function() {
                return i
            }
        });
        var r = n(93922);
        let i = (e,t)=>n=>!!((0,
        r.HD)(n) && r.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
          , o = (e,t,n)=>i=>{
            if (!(0,
            r.HD)(i))
                return i;
            let[o,a,s,l] = i.match(r.KP);
            return {
                [e]: parseFloat(o),
                [t]: parseFloat(a),
                [n]: parseFloat(s),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    82915: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return l
            }
        });
        var r = n(92263)
          , i = n(93922);
        let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function a(e) {
            let[t,n] = e.slice(0, -1).split("(");
            if ("drop-shadow" === t)
                return e;
            let[r] = n.match(i.KP) || [];
            if (!r)
                return e;
            let a = n.replace(r, "")
              , s = o.has(t) ? 1 : 0;
            return r !== n && (s *= 100),
            t + "(" + s + a + ")"
        }
        let s = /\b([a-z-]*)\(.*?\)/gu
          , l = {
            ...r.P,
            getAnimatableNone: e=>{
                let t = e.match(s);
                return t ? t.map(a).join(" ") : e
            }
        }
    },
    92263: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return d
            },
            V: function() {
                return l
            }
        });
        var r = n(22809)
          , i = n(93922);
        let o = "number"
          , a = "color"
          , s = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function l(e) {
            let t = e.toString()
              , n = []
              , i = {
                color: [],
                number: [],
                var: []
            }
              , l = []
              , u = 0
              , c = t.replace(s, e=>(r.$.test(e) ? (i.color.push(u),
            l.push(a),
            n.push(r.$.parse(e))) : e.startsWith("var(") ? (i.var.push(u),
            l.push("var"),
            n.push(e)) : (i.number.push(u),
            l.push(o),
            n.push(parseFloat(e))),
            ++u,
            "${}")).split("${}");
            return {
                values: n,
                split: c,
                indexes: i,
                types: l
            }
        }
        function u(e) {
            return l(e).values
        }
        function c(e) {
            let {split: t, types: n} = l(e)
              , s = t.length;
            return e=>{
                let l = "";
                for (let u = 0; u < s; u++)
                    if (l += t[u],
                    void 0 !== e[u]) {
                        let t = n[u];
                        t === o ? l += (0,
                        i.Nw)(e[u]) : t === a ? l += r.$.transform(e[u]) : l += e[u]
                    }
                return l
            }
        }
        let f = e=>"number" == typeof e ? 0 : e
          , d = {
            test: function(e) {
                var t, n;
                return isNaN(e) && (0,
                i.HD)(e) && ((null === (t = e.match(i.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(i.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: u,
            createTransformer: c,
            getAnimatableNone: function(e) {
                let t = u(e);
                return c(e)(t.map(f))
            }
        }
    },
    25218: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fq: function() {
                return o
            },
            Rx: function() {
                return i
            },
            bA: function() {
                return a
            }
        });
        var r = n(22476);
        let i = {
            test: e=>"number" == typeof e,
            parse: parseFloat,
            transform: e=>e
        }
          , o = {
            ...i,
            transform: e=>(0,
            r.u)(0, 1, e)
        }
          , a = {
            ...i,
            default: 1
        }
    },
    72724: function(e, t, n) {
        "use strict";
        n.d(t, {
            $C: function() {
                return c
            },
            RW: function() {
                return o
            },
            aQ: function() {
                return a
            },
            px: function() {
                return s
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var r = n(93922);
        let i = e=>({
            test: t=>(0,
            r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t=>`${t}${e}`
        })
          , o = i("deg")
          , a = i("%")
          , s = i("px")
          , l = i("vh")
          , u = i("vw")
          , c = {
            ...a,
            parse: e=>a.parse(e) / 100,
            transform: e=>a.transform(100 * e)
        }
    },
    93922: function(e, t, n) {
        "use strict";
        n.d(t, {
            HD: function() {
                return s
            },
            KP: function() {
                return i
            },
            Nw: function() {
                return r
            },
            dA: function() {
                return o
            },
            mj: function() {
                return a
            }
        });
        let r = e=>Math.round(1e5 * e) / 1e5
          , i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , o = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , a = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
        function s(e) {
            return "string" == typeof e
        }
    },
    39631: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return a
            }
        });
        var r = n(26696)
          , i = n(45526)
          , o = n(14205);
        function a(e, t) {
            let n = (0,
            r.c)(t())
              , a = ()=>n.set(t());
            return a(),
            (0,
            i.L)(()=>{
                let t = ()=>o.Wi.preRender(a, !1, !0)
                  , n = e.map(e=>e.on("change", t));
                return ()=>{
                    n.forEach(e=>e()),
                    (0,
                    o.Pn)(a)
                }
            }
            ),
            n
        }
    },
    7996: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return o
            }
        });
        var r = n(39631)
          , i = n(82702);
        function o(e, ...t) {
            let n = e.length;
            return (0,
            r.N)(t.filter(i.i), function() {
                let r = "";
                for (let o = 0; o < n; o++) {
                    r += e[o];
                    let n = t[o];
                    n && (r += (0,
                    i.i)(n) ? n.get() : n)
                }
                return r
            })
        }
    },
    26696: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return s
            }
        });
        var r = n(2265)
          , i = n(83299)
          , o = n(93449)
          , a = n(72435);
        function s(e) {
            let t = (0,
            a.h)(()=>(0,
            i.BX)(e))
              , {isStatic: n} = (0,
            r.useContext)(o._);
            if (n) {
                let[,n] = (0,
                r.useState)(e);
                (0,
                r.useEffect)(()=>t.on("change", n), [])
            }
            return t
        }
    },
    11723: function(e, t, n) {
        "use strict";
        let r, i;
        n.d(t, {
            v: function() {
                return L
            }
        });
        var o = n(83299)
          , a = n(72435)
          , s = n(2265)
          , l = n(29908)
          , u = n(84637);
        let c = new WeakMap;
        function f({target: e, contentRect: t, borderBoxSize: n}) {
            var r;
            null === (r = c.get(e)) || void 0 === r || r.forEach(r=>{
                r({
                    target: e,
                    contentSize: t,
                    get size() {
                        return function(e, t) {
                            if (t) {
                                let {inlineSize: e, blockSize: n} = t[0];
                                return {
                                    width: e,
                                    height: n
                                }
                            }
                            return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
                                width: e.offsetWidth,
                                height: e.offsetHeight
                            }
                        }(e, n)
                    }
                })
            }
            )
        }
        function d(e) {
            e.forEach(f)
        }
        let h = new Set;
        var p = n(16384)
          , m = n(92181);
        let v = ()=>({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        })
          , g = ()=>({
            time: 0,
            x: v(),
            y: v()
        })
          , y = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };
        function b(e, t, n, r) {
            let i = n[t]
              , {length: o, position: a} = y[t]
              , s = i.current
              , l = n.time;
            i.current = e[`scroll${a}`],
            i.scrollLength = e[`scroll${o}`] - e[`client${o}`],
            i.offset.length = 0,
            i.offset[0] = 0,
            i.offset[1] = i.scrollLength,
            i.progress = (0,
            p.Y)(0, i.scrollLength, i.current);
            let u = r - l;
            i.velocity = u > 50 ? 0 : (0,
            m.R)(i.current - s, u)
        }
        let x = {
            All: [[0, 0], [1, 1]]
        }
          , w = {
            start: 0,
            center: .5,
            end: 1
        };
        function S(e, t, n=0) {
            let r = 0;
            if (e in w && (e = w[e]),
            "string" == typeof e) {
                let t = parseFloat(e);
                e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
            }
            return "number" == typeof e && (r = t * e),
            n + r
        }
        let P = [0, 0];
        var k = n(39780)
          , E = n(55865);
        let C = {
            x: 0,
            y: 0
        };
        var T = n(14205);
        let _ = new WeakMap
          , M = new WeakMap
          , j = new WeakMap
          , O = e=>e === document.documentElement ? window : e;
        var A = n(45526);
        function R(e, t) {
            (0,
            l.K)(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
        }
        let z = ()=>({
            scrollX: (0,
            o.BX)(0),
            scrollY: (0,
            o.BX)(0),
            scrollXProgress: (0,
            o.BX)(0),
            scrollYProgress: (0,
            o.BX)(0)
        });
        function L({container: e, target: t, layoutEffect: n=!0, ...o}={}) {
            let l = (0,
            a.h)(z);
            return (n ? A.L : s.useEffect)(()=>(R("target", t),
            R("container", e),
            function(e, {container: t=document.documentElement, ...n}={}) {
                let o = j.get(t);
                o || (o = new Set,
                j.set(t, o));
                let a = function(e, t, n, r={}) {
                    return {
                        measure: ()=>(function(e, t=e, n) {
                            if (n.x.targetOffset = 0,
                            n.y.targetOffset = 0,
                            t !== e) {
                                let r = t;
                                for (; r && r !== e; )
                                    n.x.targetOffset += r.offsetLeft,
                                    n.y.targetOffset += r.offsetTop,
                                    r = r.offsetParent
                            }
                            n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
                            n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
                            n.x.containerLength = e.clientWidth,
                            n.y.containerLength = e.clientHeight
                        }
                        )(e, r.target, n),
                        update: t=>{
                            b(e, "x", n, t),
                            b(e, "y", n, t),
                            n.time = t,
                            (r.offset || r.target) && function(e, t, n) {
                                let {offset: r=x.All} = n
                                  , {target: i=e, axis: o="y"} = n
                                  , a = "y" === o ? "height" : "width"
                                  , s = i !== e ? function(e, t) {
                                    let n = {
                                        x: 0,
                                        y: 0
                                    }
                                      , r = e;
                                    for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                            n.x += r.offsetLeft,
                                            n.y += r.offsetTop,
                                            r = r.offsetParent;
                                        else if ("svg" === r.tagName) {
                                            let e = r.getBoundingClientRect()
                                              , t = (r = r.parentElement).getBoundingClientRect();
                                            n.x += e.left - t.left,
                                            n.y += e.top - t.top
                                        } else if (r instanceof SVGGraphicsElement) {
                                            let {x: e, y: t} = r.getBBox();
                                            n.x += e,
                                            n.y += t;
                                            let i = null
                                              , o = r.parentNode;
                                            for (; !i; )
                                                "svg" === o.tagName && (i = o),
                                                o = r.parentNode;
                                            r = i
                                        } else
                                            break;
                                    return n
                                }(i, e) : C
                                  , l = i === e ? {
                                    width: e.scrollWidth,
                                    height: e.scrollHeight
                                } : "getBBox"in i && "svg" !== i.tagName ? i.getBBox() : {
                                    width: i.clientWidth,
                                    height: i.clientHeight
                                }
                                  , u = {
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                };
                                t[o].offset.length = 0;
                                let c = !t[o].interpolate
                                  , f = r.length;
                                for (let e = 0; e < f; e++) {
                                    let n = function(e, t, n, r) {
                                        let i = Array.isArray(e) ? e : P
                                          , o = 0;
                                        return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, w[e] ? e : "0"]),
                                        S(i[0], n, r) - S(i[1], t)
                                    }(r[e], u[a], l[a], s[o]);
                                    c || n === t[o].interpolatorOffsets[e] || (c = !0),
                                    t[o].offset[e] = n
                                }
                                c && (t[o].interpolate = (0,
                                k.s)(t[o].offset, (0,
                                E.Y)(r)),
                                t[o].interpolatorOffsets = [...t[o].offset]),
                                t[o].progress = t[o].interpolate(t[o].current)
                            }(e, n, r)
                        }
                        ,
                        notify: ()=>t(n)
                    }
                }(t, e, g(), n);
                if (o.add(a),
                !_.has(t)) {
                    let e = ()=>{
                        for (let e of o)
                            e.measure()
                    }
                      , n = ()=>{
                        for (let e of o)
                            e.update(T.frameData.timestamp)
                    }
                      , a = ()=>{
                        for (let e of o)
                            e.notify()
                    }
                      , s = ()=>{
                        T.Wi.read(e, !1, !0),
                        T.Wi.read(n, !1, !0),
                        T.Wi.update(a, !1, !0)
                    }
                    ;
                    _.set(t, s);
                    let l = O(t);
                    window.addEventListener("resize", s, {
                        passive: !0
                    }),
                    t !== document.documentElement && M.set(t, "function" == typeof t ? (h.add(t),
                    i || (i = ()=>{
                        let e = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                          , t = {
                            target: window,
                            size: e,
                            contentSize: e
                        };
                        h.forEach(e=>e(t))
                    }
                    ,
                    window.addEventListener("resize", i)),
                    ()=>{
                        h.delete(t),
                        !h.size && i && (i = void 0)
                    }
                    ) : function(e, t) {
                        r || "undefined" == typeof ResizeObserver || (r = new ResizeObserver(d));
                        let n = (0,
                        u.I)(e);
                        return n.forEach(e=>{
                            let n = c.get(e);
                            n || (n = new Set,
                            c.set(e, n)),
                            n.add(t),
                            null == r || r.observe(e)
                        }
                        ),
                        ()=>{
                            n.forEach(e=>{
                                let n = c.get(e);
                                null == n || n.delete(t),
                                (null == n ? void 0 : n.size) || null == r || r.unobserve(e)
                            }
                            )
                        }
                    }(t, s)),
                    l.addEventListener("scroll", s, {
                        passive: !0
                    })
                }
                let s = _.get(t);
                return T.Wi.read(s, !1, !0),
                ()=>{
                    var e;
                    (0,
                    T.Pn)(s);
                    let n = j.get(t);
                    if (!n || (n.delete(a),
                    n.size))
                        return;
                    let r = _.get(t);
                    _.delete(t),
                    r && (O(t).removeEventListener("scroll", r),
                    null === (e = M.get(t)) || void 0 === e || e(),
                    window.removeEventListener("resize", r))
                }
            }(({x: e, y: t})=>{
                l.scrollX.set(e.current),
                l.scrollXProgress.set(e.progress),
                l.scrollY.set(t.current),
                l.scrollYProgress.set(t.progress)
            }
            , {
                ...o,
                container: (null == e ? void 0 : e.current) || void 0,
                target: (null == t ? void 0 : t.current) || void 0
            })), [e, t, JSON.stringify(o.offset)]),
            l
        }
    },
    3348: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return u
            }
        });
        var r = n(39780);
        let i = e=>e && "object" == typeof e && e.mix
          , o = e=>i(e) ? e.mix : void 0;
        var a = n(39631)
          , s = n(72435)
          , l = n(83299);
        function u(e, t, n, i) {
            if ("function" == typeof e)
                return function(e) {
                    l.S1.current = [],
                    e();
                    let t = (0,
                    a.N)(l.S1.current, e);
                    return l.S1.current = void 0,
                    t
                }(e);
            let s = "function" == typeof t ? t : function(...e) {
                let t = !Array.isArray(e[0])
                  , n = t ? 0 : -1
                  , i = e[0 + n]
                  , a = e[1 + n]
                  , s = e[2 + n]
                  , l = e[3 + n]
                  , u = (0,
                r.s)(a, s, {
                    mixer: o(s[0]),
                    ...l
                });
                return t ? u(i) : u
            }(t, n, i);
            return Array.isArray(e) ? c(e, s) : c([e], ([e])=>s(e))
        }
        function c(e, t) {
            let n = (0,
            s.h)(()=>[]);
            return (0,
            a.N)(e, ()=>{
                n.length = 0;
                let r = e.length;
                for (let t = 0; t < r; t++)
                    n[t] = e[t].get();
                return t(n)
            }
            )
        }
    },
    62212: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return i
            }
        });
        var r = n(82702);
        function i(e) {
            return !!((0,
            r.i)(e) && e.add)
        }
    },
    82702: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return r
            }
        });
        let r = e=>!!(e && e.getVelocity)
    },
    70158: function(e, t, n) {
        "use strict";
        n.d(t, {
            w_: function() {
                return c
            }
        });
        var r = n(2265)
          , i = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , o = r.createContext && r.createContext(i)
          , a = ["attr", "size", "title"];
        function s() {
            return (s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach(function(t) {
                    var r, i;
                    r = t,
                    i = n[t],
                    (r = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(e, t || "default");
                                if ("object" != typeof r)
                                    return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(r))in e ? Object.defineProperty(e, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = i
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function c(e) {
            return t=>r.createElement(f, s({
                attr: u({}, e.attr)
            }, t), function e(t) {
                return t && t.map((t,n)=>r.createElement(t.tag, u({
                    key: n
                }, t.attr), e(t.child)))
            }(e.child))
        }
        function f(e) {
            var t = t=>{
                var n, {attr: i, size: o, title: l} = e, c = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, i = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, i = {}, o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            n = o[r],
                            t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++)
                            n = o[r],
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }(e, a), f = o || t.size || "1em";
                return t.className && (n = t.className),
                e.className && (n = (n ? n + " " : "") + e.className),
                r.createElement("svg", s({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, i, c, {
                    className: n,
                    style: u(u({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: f,
                    width: f,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && r.createElement("title", null, l), e.children)
            }
            ;
            return void 0 !== o ? r.createElement(o.Consumer, null, e=>t(e)) : t(i)
        }
    },
    51367: function(e, t, n) {
        "use strict";
        n.d(t, {
            m6: function() {
                return D
            }
        });
        let r = /^\[(.+)\]$/;
        function i(e, t) {
            let n = e;
            return t.split("-").forEach(e=>{
                n.nextPart.has(e) || n.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                n = n.nextPart.get(e)
            }
            ),
            n
        }
        let o = /\s+/;
        function a() {
            let e, t, n = 0, r = "";
            for (; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    let n;
                    if ("string" == typeof t)
                        return t;
                    let r = "";
                    for (let i = 0; i < t.length; i++)
                        t[i] && (n = e(t[i])) && (r && (r += " "),
                        r += n);
                    return r
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
        function s(e) {
            let t = t=>t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
        let l = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , u = /^\d+\/\d+$/
          , c = new Set(["px", "full", "screen"])
          , f = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , d = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , h = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , p = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function v(e) {
            return y(e) || c.has(e) || u.test(e)
        }
        function g(e) {
            return O(e, "length", A)
        }
        function y(e) {
            return !!e && !Number.isNaN(Number(e))
        }
        function b(e) {
            return O(e, "number", y)
        }
        function x(e) {
            return !!e && Number.isInteger(Number(e))
        }
        function w(e) {
            return e.endsWith("%") && y(e.slice(0, -1))
        }
        function S(e) {
            return l.test(e)
        }
        function P(e) {
            return f.test(e)
        }
        let k = new Set(["length", "size", "percentage"]);
        function E(e) {
            return O(e, k, R)
        }
        function C(e) {
            return O(e, "position", R)
        }
        let T = new Set(["image", "url"]);
        function _(e) {
            return O(e, T, L)
        }
        function M(e) {
            return O(e, "", z)
        }
        function j() {
            return !0
        }
        function O(e, t, n) {
            let r = l.exec(e);
            return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]))
        }
        function A(e) {
            return d.test(e) && !h.test(e)
        }
        function R() {
            return !1
        }
        function z(e) {
            return p.test(e)
        }
        function L(e) {
            return m.test(e)
        }
        let D = function(e) {
            let t, n, s;
            let l = function(o) {
                var a;
                return n = (t = {
                    cache: function(e) {
                        if (e < 1)
                            return {
                                get: ()=>void 0,
                                set: ()=>{}
                            };
                        let t = 0
                          , n = new Map
                          , r = new Map;
                        function i(i, o) {
                            n.set(i, o),
                            ++t > e && (t = 0,
                            r = n,
                            n = new Map)
                        }
                        return {
                            get(e) {
                                let t = n.get(e);
                                return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (i(e, t),
                                t) : void 0
                            },
                            set(e, t) {
                                n.has(e) ? n.set(e, t) : i(e, t)
                            }
                        }
                    }((a = [].reduce((e,t)=>t(e), e())).cacheSize),
                    splitModifiers: function(e) {
                        let t = e.separator
                          , n = 1 === t.length
                          , r = t[0]
                          , i = t.length;
                        return function(e) {
                            let o;
                            let a = []
                              , s = 0
                              , l = 0;
                            for (let u = 0; u < e.length; u++) {
                                let c = e[u];
                                if (0 === s) {
                                    if (c === r && (n || e.slice(u, u + i) === t)) {
                                        a.push(e.slice(l, u)),
                                        l = u + i;
                                        continue
                                    }
                                    if ("/" === c) {
                                        o = u;
                                        continue
                                    }
                                }
                                "[" === c ? s++ : "]" === c && s--
                            }
                            let u = 0 === a.length ? e : e.substring(l)
                              , c = u.startsWith("!")
                              , f = c ? u.substring(1) : u;
                            return {
                                modifiers: a,
                                hasImportantModifier: c,
                                baseClassName: f,
                                maybePostfixModifierPosition: o && o > l ? o - l : void 0
                            }
                        }
                    }(a),
                    ...function(e) {
                        let t = function(e) {
                            var t;
                            let {theme: n, prefix: r} = e
                              , o = {
                                nextPart: new Map,
                                validators: []
                            };
                            return (t = Object.entries(e.classGroups),
                            r ? t.map(([e,t])=>[e, t.map(e=>"string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e,t])=>[r + e, t])) : e)]) : t).forEach(([e,t])=>{
                                (function e(t, n, r, o) {
                                    t.forEach(t=>{
                                        if ("string" == typeof t) {
                                            ("" === t ? n : i(n, t)).classGroupId = r;
                                            return
                                        }
                                        if ("function" == typeof t) {
                                            if (t.isThemeGetter) {
                                                e(t(o), n, r, o);
                                                return
                                            }
                                            n.validators.push({
                                                validator: t,
                                                classGroupId: r
                                            });
                                            return
                                        }
                                        Object.entries(t).forEach(([t,a])=>{
                                            e(a, i(n, t), r, o)
                                        }
                                        )
                                    }
                                    )
                                }
                                )(t, o, e, n)
                            }
                            ),
                            o
                        }(e)
                          , {conflictingClassGroups: n, conflictingClassGroupModifiers: o} = e;
                        return {
                            getClassGroupId: function(e) {
                                let n = e.split("-");
                                return "" === n[0] && 1 !== n.length && n.shift(),
                                function e(t, n) {
                                    if (0 === t.length)
                                        return n.classGroupId;
                                    let r = t[0]
                                      , i = n.nextPart.get(r)
                                      , o = i ? e(t.slice(1), i) : void 0;
                                    if (o)
                                        return o;
                                    if (0 === n.validators.length)
                                        return;
                                    let a = t.join("-");
                                    return n.validators.find(({validator: e})=>e(a))?.classGroupId
                                }(n, t) || function(e) {
                                    if (r.test(e)) {
                                        let t = r.exec(e)[1]
                                          , n = t?.substring(0, t.indexOf(":"));
                                        if (n)
                                            return "arbitrary.." + n
                                    }
                                }(e)
                            },
                            getConflictingClassGroupIds: function(e, t) {
                                let r = n[e] || [];
                                return t && o[e] ? [...r, ...o[e]] : r
                            }
                        }
                    }(a)
                }).cache.get,
                s = t.cache.set,
                l = u,
                u(o)
            };
            function u(e) {
                let r = n(e);
                if (r)
                    return r;
                let i = function(e, t) {
                    let {splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
                      , a = new Set;
                    return e.trim().split(o).map(e=>{
                        let {modifiers: t, hasImportantModifier: i, baseClassName: o, maybePostfixModifierPosition: a} = n(e)
                          , s = r(a ? o.substring(0, a) : o)
                          , l = !!a;
                        if (!s) {
                            if (!a || !(s = r(o)))
                                return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                            l = !1
                        }
                        let u = (function(e) {
                            if (e.length <= 1)
                                return e;
                            let t = []
                              , n = [];
                            return e.forEach(e=>{
                                "[" === e[0] ? (t.push(...n.sort(), e),
                                n = []) : n.push(e)
                            }
                            ),
                            t.push(...n.sort()),
                            t
                        }
                        )(t).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: i ? u + "!" : u,
                            classGroupId: s,
                            originalClassName: e,
                            hasPostfixModifier: l
                        }
                    }
                    ).reverse().filter(e=>{
                        if (!e.isTailwindClass)
                            return !0;
                        let {modifierId: t, classGroupId: n, hasPostfixModifier: r} = e
                          , o = t + n;
                        return !a.has(o) && (a.add(o),
                        i(n, r).forEach(e=>a.add(t + e)),
                        !0)
                    }
                    ).reverse().map(e=>e.originalClassName).join(" ")
                }(e, t);
                return s(e, i),
                i
            }
            return function() {
                return l(a.apply(null, arguments))
            }
        }(function() {
            let e = s("colors")
              , t = s("spacing")
              , n = s("blur")
              , r = s("brightness")
              , i = s("borderColor")
              , o = s("borderRadius")
              , a = s("borderSpacing")
              , l = s("borderWidth")
              , u = s("contrast")
              , c = s("grayscale")
              , f = s("hueRotate")
              , d = s("invert")
              , h = s("gap")
              , p = s("gradientColorStops")
              , m = s("gradientColorStopPositions")
              , k = s("inset")
              , T = s("margin")
              , O = s("opacity")
              , A = s("padding")
              , R = s("saturate")
              , z = s("scale")
              , L = s("sepia")
              , D = s("skew")
              , N = s("space")
              , I = s("translate")
              , F = ()=>["auto", "contain", "none"]
              , V = ()=>["auto", "hidden", "clip", "visible", "scroll"]
              , B = ()=>["auto", S, t]
              , U = ()=>[S, t]
              , W = ()=>["", v, g]
              , $ = ()=>["auto", y, S]
              , H = ()=>["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , q = ()=>["solid", "dashed", "dotted", "double", "none"]
              , G = ()=>["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , Q = ()=>["start", "end", "center", "between", "around", "evenly", "stretch"]
              , X = ()=>["", "0", S]
              , Y = ()=>["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , K = ()=>[y, b]
              , Z = ()=>[y, S];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [j],
                    spacing: [v, g],
                    blur: ["none", "", P, S],
                    brightness: K(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", P, S],
                    borderSpacing: U(),
                    borderWidth: W(),
                    contrast: K(),
                    grayscale: X(),
                    hueRotate: Z(),
                    invert: X(),
                    gap: U(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [w, g],
                    inset: B(),
                    margin: B(),
                    opacity: K(),
                    padding: U(),
                    saturate: K(),
                    scale: K(),
                    sepia: X(),
                    skew: Z(),
                    space: U(),
                    translate: U()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", S]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [P]
                    }],
                    "break-after": [{
                        "break-after": Y()
                    }],
                    "break-before": [{
                        "break-before": Y()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...H(), S]
                    }],
                    overflow: [{
                        overflow: V()
                    }],
                    "overflow-x": [{
                        "overflow-x": V()
                    }],
                    "overflow-y": [{
                        "overflow-y": V()
                    }],
                    overscroll: [{
                        overscroll: F()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": F()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": F()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [k]
                    }],
                    "inset-x": [{
                        "inset-x": [k]
                    }],
                    "inset-y": [{
                        "inset-y": [k]
                    }],
                    start: [{
                        start: [k]
                    }],
                    end: [{
                        end: [k]
                    }],
                    top: [{
                        top: [k]
                    }],
                    right: [{
                        right: [k]
                    }],
                    bottom: [{
                        bottom: [k]
                    }],
                    left: [{
                        left: [k]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", x, S]
                    }],
                    basis: [{
                        basis: B()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", S]
                    }],
                    grow: [{
                        grow: X()
                    }],
                    shrink: [{
                        shrink: X()
                    }],
                    order: [{
                        order: ["first", "last", "none", x, S]
                    }],
                    "grid-cols": [{
                        "grid-cols": [j]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", x, S]
                        }, S]
                    }],
                    "col-start": [{
                        "col-start": $()
                    }],
                    "col-end": [{
                        "col-end": $()
                    }],
                    "grid-rows": [{
                        "grid-rows": [j]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [x, S]
                        }, S]
                    }],
                    "row-start": [{
                        "row-start": $()
                    }],
                    "row-end": [{
                        "row-end": $()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", S]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", S]
                    }],
                    gap: [{
                        gap: [h]
                    }],
                    "gap-x": [{
                        "gap-x": [h]
                    }],
                    "gap-y": [{
                        "gap-y": [h]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...Q()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...Q(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...Q(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [A]
                    }],
                    px: [{
                        px: [A]
                    }],
                    py: [{
                        py: [A]
                    }],
                    ps: [{
                        ps: [A]
                    }],
                    pe: [{
                        pe: [A]
                    }],
                    pt: [{
                        pt: [A]
                    }],
                    pr: [{
                        pr: [A]
                    }],
                    pb: [{
                        pb: [A]
                    }],
                    pl: [{
                        pl: [A]
                    }],
                    m: [{
                        m: [T]
                    }],
                    mx: [{
                        mx: [T]
                    }],
                    my: [{
                        my: [T]
                    }],
                    ms: [{
                        ms: [T]
                    }],
                    me: [{
                        me: [T]
                    }],
                    mt: [{
                        mt: [T]
                    }],
                    mr: [{
                        mr: [T]
                    }],
                    mb: [{
                        mb: [T]
                    }],
                    ml: [{
                        ml: [T]
                    }],
                    "space-x": [{
                        "space-x": [N]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [N]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", S, t]
                    }],
                    "min-w": [{
                        "min-w": [S, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [S, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [P]
                        }, P]
                    }],
                    h: [{
                        h: [S, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [S, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [S, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [S, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", P, g]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", b]
                    }],
                    "font-family": [{
                        font: [j]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", S]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", y, b]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", v, S]
                    }],
                    "list-image": [{
                        "list-image": ["none", S]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", S]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [O]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [O]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...q(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", v, g]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", v, S]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: U()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", S]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", S]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [O]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...H(), C]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", E]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, _]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [o]
                    }],
                    "rounded-s": [{
                        "rounded-s": [o]
                    }],
                    "rounded-e": [{
                        "rounded-e": [o]
                    }],
                    "rounded-t": [{
                        "rounded-t": [o]
                    }],
                    "rounded-r": [{
                        "rounded-r": [o]
                    }],
                    "rounded-b": [{
                        "rounded-b": [o]
                    }],
                    "rounded-l": [{
                        "rounded-l": [o]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [o]
                    }],
                    "rounded-se": [{
                        "rounded-se": [o]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [o]
                    }],
                    "rounded-es": [{
                        "rounded-es": [o]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [o]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [o]
                    }],
                    "rounded-br": [{
                        "rounded-br": [o]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [o]
                    }],
                    "border-w": [{
                        border: [l]
                    }],
                    "border-w-x": [{
                        "border-x": [l]
                    }],
                    "border-w-y": [{
                        "border-y": [l]
                    }],
                    "border-w-s": [{
                        "border-s": [l]
                    }],
                    "border-w-e": [{
                        "border-e": [l]
                    }],
                    "border-w-t": [{
                        "border-t": [l]
                    }],
                    "border-w-r": [{
                        "border-r": [l]
                    }],
                    "border-w-b": [{
                        "border-b": [l]
                    }],
                    "border-w-l": [{
                        "border-l": [l]
                    }],
                    "border-opacity": [{
                        "border-opacity": [O]
                    }],
                    "border-style": [{
                        border: [...q(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [l]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [l]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [O]
                    }],
                    "divide-style": [{
                        divide: q()
                    }],
                    "border-color": [{
                        border: [i]
                    }],
                    "border-color-x": [{
                        "border-x": [i]
                    }],
                    "border-color-y": [{
                        "border-y": [i]
                    }],
                    "border-color-t": [{
                        "border-t": [i]
                    }],
                    "border-color-r": [{
                        "border-r": [i]
                    }],
                    "border-color-b": [{
                        "border-b": [i]
                    }],
                    "border-color-l": [{
                        "border-l": [i]
                    }],
                    "divide-color": [{
                        divide: [i]
                    }],
                    "outline-style": [{
                        outline: ["", ...q()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [v, S]
                    }],
                    "outline-w": [{
                        outline: [v, g]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: W()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [O]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [v, g]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", P, M]
                    }],
                    "shadow-color": [{
                        shadow: [j]
                    }],
                    opacity: [{
                        opacity: [O]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": G()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [n]
                    }],
                    brightness: [{
                        brightness: [r]
                    }],
                    contrast: [{
                        contrast: [u]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", P, S]
                    }],
                    grayscale: [{
                        grayscale: [c]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [f]
                    }],
                    invert: [{
                        invert: [d]
                    }],
                    saturate: [{
                        saturate: [R]
                    }],
                    sepia: [{
                        sepia: [L]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [n]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [r]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [u]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [c]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [f]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [d]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [O]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [R]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [L]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [a]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [a]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [a]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", S]
                    }],
                    duration: [{
                        duration: Z()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", S]
                    }],
                    delay: [{
                        delay: Z()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", S]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [z]
                    }],
                    "scale-x": [{
                        "scale-x": [z]
                    }],
                    "scale-y": [{
                        "scale-y": [z]
                    }],
                    rotate: [{
                        rotate: [x, S]
                    }],
                    "translate-x": [{
                        "translate-x": [I]
                    }],
                    "translate-y": [{
                        "translate-y": [I]
                    }],
                    "skew-x": [{
                        "skew-x": [D]
                    }],
                    "skew-y": [{
                        "skew-y": [D]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", S]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", S]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": U()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": U()
                    }],
                    "scroll-my": [{
                        "scroll-my": U()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": U()
                    }],
                    "scroll-me": [{
                        "scroll-me": U()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": U()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": U()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": U()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": U()
                    }],
                    "scroll-p": [{
                        "scroll-p": U()
                    }],
                    "scroll-px": [{
                        "scroll-px": U()
                    }],
                    "scroll-py": [{
                        "scroll-py": U()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": U()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": U()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": U()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": U()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": U()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": U()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", S]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [v, g, b]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);
