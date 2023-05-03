function st(e, t) {
    const r = Object.create(null),
        n = e.split(',')
    for (let s = 0; s < n.length; s++) r[n[s]] = !0
    return t ? (s) => !!r[s.toLowerCase()] : (s) => !!r[s]
}
function he(e) {
    if (B(e)) {
        const t = {}
        for (let r = 0; r < e.length; r++) {
            const n = e[r],
                s = i2(n) ? Q1(n) : he(n)
            if (s) for (const i in s) t[i] = s[i]
        }
        return t
    } else {
        if (i2(e)) return e
        if (X(e)) return e
    }
}
const q1 = /;(?![^(]*\))/g,
    z1 = /:([^]+)/,
    J1 = /\/\*.*?\*\//gs
function Q1(e) {
    const t = {}
    return (
        e
            .replace(J1, '')
            .split(q1)
            .forEach((r) => {
                if (r) {
                    const n = r.split(z1)
                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                }
            }),
        t
    )
}
function pe(e) {
    let t = ''
    if (i2(e)) t = e
    else if (B(e))
        for (let r = 0; r < e.length; r++) {
            const n = pe(e[r])
            n && (t += n + ' ')
        }
    else if (X(e)) for (const r in e) e[r] && (t += r + ' ')
    return t.trim()
}
function el(e) {
    if (!e) return null
    let { class: t, style: r } = e
    return t && !i2(t) && (e.class = pe(t)), r && (e.style = he(r)), e
}
const Y1 = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    X1 = st(Y1)
function A3(e) {
    return !!e || e === ''
}
const er = (e) =>
        i2(e)
            ? e
            : e == null
            ? ''
            : B(e) || (X(e) && (e.toString === F3 || !P(e.toString)))
            ? JSON.stringify(e, b3, 2)
            : String(e),
    b3 = (e, t) =>
        t && t.__v_isRef
            ? b3(e, t.value)
            : l0(t)
            ? { [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => ((r[`${n} =>`] = s), r), {}) }
            : x3(t)
            ? { [`Set(${t.size})`]: [...t.values()] }
            : X(t) && !B(t) && !v3(t)
            ? String(t)
            : t,
    Y = {},
    o0 = [],
    x2 = () => {},
    tr = () => !1,
    rr = /^on[^a-z]/,
    U0 = (e) => rr.test(e),
    it = (e) => e.startsWith('onUpdate:'),
    c2 = Object.assign,
    ot = (e, t) => {
        const r = e.indexOf(t)
        r > -1 && e.splice(r, 1)
    },
    nr = Object.prototype.hasOwnProperty,
    Z = (e, t) => nr.call(e, t),
    B = Array.isArray,
    l0 = (e) => Ce(e) === '[object Map]',
    x3 = (e) => Ce(e) === '[object Set]',
    P = (e) => typeof e == 'function',
    i2 = (e) => typeof e == 'string',
    lt = (e) => typeof e == 'symbol',
    X = (e) => e !== null && typeof e == 'object',
    w3 = (e) => X(e) && P(e.then) && P(e.catch),
    F3 = Object.prototype.toString,
    Ce = (e) => F3.call(e),
    sr = (e) => Ce(e).slice(8, -1),
    v3 = (e) => Ce(e) === '[object Object]',
    at = (e) => i2(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    x0 = st(
        ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    ge = (e) => {
        const t = Object.create(null)
        return (r) => t[r] || (t[r] = e(r))
    },
    ir = /-(\w)/g,
    H2 = ge((e) => e.replace(ir, (t, r) => (r ? r.toUpperCase() : ''))),
    or = /\B([A-Z])/g,
    D0 = ge((e) => e.replace(or, '-$1').toLowerCase()),
    De = ge((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Le = ge((e) => (e ? `on${De(e)}` : '')),
    H0 = (e, t) => !Object.is(e, t),
    ke = (e, t) => {
        for (let r = 0; r < e.length; r++) e[r](t)
    },
    te = (e, t, r) => {
        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r })
    },
    lr = (e) => {
        const t = parseFloat(e)
        return isNaN(t) ? e : t
    },
    ar = (e) => {
        const t = i2(e) ? Number(e) : NaN
        return isNaN(t) ? e : t
    }
let Ut
const cr = () =>
    Ut ||
    (Ut =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
            ? self
            : typeof window < 'u'
            ? window
            : typeof global < 'u'
            ? global
            : {})
let E2
class fr {
    constructor(t = !1) {
        ;(this.detached = t),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = E2),
            !t && E2 && (this.index = (E2.scopes || (E2.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const r = E2
            try {
                return (E2 = this), t()
            } finally {
                E2 = r
            }
        }
    }
    on() {
        E2 = this
    }
    off() {
        E2 = this.parent
    }
    stop(t) {
        if (this._active) {
            let r, n
            for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop()
            for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]()
            if (this.scopes) for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0)
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop()
                s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index))
            }
            ;(this.parent = void 0), (this._active = !1)
        }
    }
}
function ur(e, t = E2) {
    t && t.active && t.effects.push(e)
}
function dr() {
    return E2
}
const ct = (e) => {
        const t = new Set(e)
        return (t.w = 0), (t.n = 0), t
    },
    L3 = (e) => (e.w & V2) > 0,
    k3 = (e) => (e.n & V2) > 0,
    hr = ({ deps: e }) => {
        if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= V2
    },
    pr = (e) => {
        const { deps: t } = e
        if (t.length) {
            let r = 0
            for (let n = 0; n < t.length; n++) {
                const s = t[n]
                L3(s) && !k3(s) ? s.delete(e) : (t[r++] = s), (s.w &= ~V2), (s.n &= ~V2)
            }
            t.length = r
        }
    },
    re = new WeakMap()
let b0 = 0,
    V2 = 1
const je = 30
let b2
const Q2 = Symbol(''),
    $e = Symbol('')
class ft {
    constructor(t, r = null, n) {
        ;(this.fn = t), (this.scheduler = r), (this.active = !0), (this.deps = []), (this.parent = void 0), ur(this, n)
    }
    run() {
        if (!this.active) return this.fn()
        let t = b2,
            r = j2
        for (; t; ) {
            if (t === this) return
            t = t.parent
        }
        try {
            return (
                (this.parent = b2), (b2 = this), (j2 = !0), (V2 = 1 << ++b0), b0 <= je ? hr(this) : Pt(this), this.fn()
            )
        } finally {
            b0 <= je && pr(this),
                (V2 = 1 << --b0),
                (b2 = this.parent),
                (j2 = r),
                (this.parent = void 0),
                this.deferStop && this.stop()
        }
    }
    stop() {
        b2 === this
            ? (this.deferStop = !0)
            : this.active && (Pt(this), this.onStop && this.onStop(), (this.active = !1))
    }
}
function Pt(e) {
    const { deps: t } = e
    if (t.length) {
        for (let r = 0; r < t.length; r++) t[r].delete(e)
        t.length = 0
    }
}
let j2 = !0
const M3 = []
function _0() {
    M3.push(j2), (j2 = !1)
}
function m0() {
    const e = M3.pop()
    j2 = e === void 0 ? !0 : e
}
function u2(e, t, r) {
    if (j2 && b2) {
        let n = re.get(e)
        n || re.set(e, (n = new Map()))
        let s = n.get(r)
        s || n.set(r, (s = ct())), H3(s)
    }
}
function H3(e, t) {
    let r = !1
    b0 <= je ? k3(e) || ((e.n |= V2), (r = !L3(e))) : (r = !e.has(b2)), r && (e.add(b2), b2.deps.push(e))
}
function S2(e, t, r, n, s, i) {
    const o = re.get(e)
    if (!o) return
    let l = []
    if (t === 'clear') l = [...o.values()]
    else if (r === 'length' && B(e)) {
        const a = Number(n)
        o.forEach((c, d) => {
            ;(d === 'length' || d >= a) && l.push(c)
        })
    } else
        switch ((r !== void 0 && l.push(o.get(r)), t)) {
            case 'add':
                B(e) ? at(r) && l.push(o.get('length')) : (l.push(o.get(Q2)), l0(e) && l.push(o.get($e)))
                break
            case 'delete':
                B(e) || (l.push(o.get(Q2)), l0(e) && l.push(o.get($e)))
                break
            case 'set':
                l0(e) && l.push(o.get(Q2))
                break
        }
    if (l.length === 1) l[0] && Ve(l[0])
    else {
        const a = []
        for (const c of l) c && a.push(...c)
        Ve(ct(a))
    }
}
function Ve(e, t) {
    const r = B(e) ? e : [...e]
    for (const n of r) n.computed && Bt(n)
    for (const n of r) n.computed || Bt(n)
}
function Bt(e, t) {
    ;(e !== b2 || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function Cr(e, t) {
    var r
    return (r = re.get(e)) === null || r === void 0 ? void 0 : r.get(t)
}
const gr = st('__proto__,__v_isRef,__isVue'),
    T3 = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== 'arguments' && e !== 'caller')
            .map((e) => Symbol[e])
            .filter(lt)
    ),
    Dr = ut(),
    _r = ut(!1, !0),
    mr = ut(!0),
    It = Er()
function Er() {
    const e = {}
    return (
        ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
            e[t] = function (...r) {
                const n = G(this)
                for (let i = 0, o = this.length; i < o; i++) u2(n, 'get', i + '')
                const s = n[t](...r)
                return s === -1 || s === !1 ? n[t](...r.map(G)) : s
            }
        }),
        ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
            e[t] = function (...r) {
                _0()
                const n = G(this)[t].apply(this, r)
                return m0(), n
            }
        }),
        e
    )
}
function yr(e) {
    const t = G(this)
    return u2(t, 'has', e), t.hasOwnProperty(e)
}
function ut(e = !1, t = !1) {
    return function (n, s, i) {
        if (s === '__v_isReactive') return !e
        if (s === '__v_isReadonly') return e
        if (s === '__v_isShallow') return t
        if (s === '__v_raw' && i === (e ? (t ? Pr : P3) : t ? U3 : R3).get(n)) return n
        const o = B(n)
        if (!e) {
            if (o && Z(It, s)) return Reflect.get(It, s, i)
            if (s === 'hasOwnProperty') return yr
        }
        const l = Reflect.get(n, s, i)
        return (lt(s) ? T3.has(s) : gr(s)) || (e || u2(n, 'get', s), t)
            ? l
            : o2(l)
            ? o && at(s)
                ? l
                : l.value
            : X(l)
            ? e
                ? B3(l)
                : X2(l)
            : l
    }
}
const Ar = O3(),
    br = O3(!0)
function O3(e = !1) {
    return function (r, n, s, i) {
        let o = r[n]
        if (e0(o) && o2(o) && !o2(s)) return !1
        if (!e && (!ne(s) && !e0(s) && ((o = G(o)), (s = G(s))), !B(r) && o2(o) && !o2(s))) return (o.value = s), !0
        const l = B(r) && at(n) ? Number(n) < r.length : Z(r, n),
            a = Reflect.set(r, n, s, i)
        return r === G(i) && (l ? H0(s, o) && S2(r, 'set', n, s) : S2(r, 'add', n, s)), a
    }
}
function xr(e, t) {
    const r = Z(e, t)
    e[t]
    const n = Reflect.deleteProperty(e, t)
    return n && r && S2(e, 'delete', t, void 0), n
}
function wr(e, t) {
    const r = Reflect.has(e, t)
    return (!lt(t) || !T3.has(t)) && u2(e, 'has', t), r
}
function Fr(e) {
    return u2(e, 'iterate', B(e) ? 'length' : Q2), Reflect.ownKeys(e)
}
const S3 = { get: Dr, set: Ar, deleteProperty: xr, has: wr, ownKeys: Fr },
    vr = {
        get: mr,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        },
    },
    Lr = c2({}, S3, { get: _r, set: br }),
    dt = (e) => e,
    _e = (e) => Reflect.getPrototypeOf(e)
function $0(e, t, r = !1, n = !1) {
    e = e.__v_raw
    const s = G(e),
        i = G(t)
    r || (t !== i && u2(s, 'get', t), u2(s, 'get', i))
    const { has: o } = _e(s),
        l = n ? dt : r ? Ct : T0
    if (o.call(s, t)) return l(e.get(t))
    if (o.call(s, i)) return l(e.get(i))
    e !== s && e.get(t)
}
function V0(e, t = !1) {
    const r = this.__v_raw,
        n = G(r),
        s = G(e)
    return t || (e !== s && u2(n, 'has', e), u2(n, 'has', s)), e === s ? r.has(e) : r.has(e) || r.has(s)
}
function N0(e, t = !1) {
    return (e = e.__v_raw), !t && u2(G(e), 'iterate', Q2), Reflect.get(e, 'size', e)
}
function jt(e) {
    e = G(e)
    const t = G(this)
    return _e(t).has.call(t, e) || (t.add(e), S2(t, 'add', e, e)), this
}
function $t(e, t) {
    t = G(t)
    const r = G(this),
        { has: n, get: s } = _e(r)
    let i = n.call(r, e)
    i || ((e = G(e)), (i = n.call(r, e)))
    const o = s.call(r, e)
    return r.set(e, t), i ? H0(t, o) && S2(r, 'set', e, t) : S2(r, 'add', e, t), this
}
function Vt(e) {
    const t = G(this),
        { has: r, get: n } = _e(t)
    let s = r.call(t, e)
    s || ((e = G(e)), (s = r.call(t, e))), n && n.call(t, e)
    const i = t.delete(e)
    return s && S2(t, 'delete', e, void 0), i
}
function Nt() {
    const e = G(this),
        t = e.size !== 0,
        r = e.clear()
    return t && S2(e, 'clear', void 0, void 0), r
}
function Z0(e, t) {
    return function (n, s) {
        const i = this,
            o = i.__v_raw,
            l = G(o),
            a = t ? dt : e ? Ct : T0
        return !e && u2(l, 'iterate', Q2), o.forEach((c, d) => n.call(s, a(c), a(d), i))
    }
}
function G0(e, t, r) {
    return function (...n) {
        const s = this.__v_raw,
            i = G(s),
            o = l0(i),
            l = e === 'entries' || (e === Symbol.iterator && o),
            a = e === 'keys' && o,
            c = s[e](...n),
            d = r ? dt : t ? Ct : T0
        return (
            !t && u2(i, 'iterate', a ? $e : Q2),
            {
                next() {
                    const { value: h, done: D } = c.next()
                    return D ? { value: h, done: D } : { value: l ? [d(h[0]), d(h[1])] : d(h), done: D }
                },
                [Symbol.iterator]() {
                    return this
                },
            }
        )
    }
}
function U2(e) {
    return function (...t) {
        return e === 'delete' ? !1 : this
    }
}
function kr() {
    const e = {
            get(i) {
                return $0(this, i)
            },
            get size() {
                return N0(this)
            },
            has: V0,
            add: jt,
            set: $t,
            delete: Vt,
            clear: Nt,
            forEach: Z0(!1, !1),
        },
        t = {
            get(i) {
                return $0(this, i, !1, !0)
            },
            get size() {
                return N0(this)
            },
            has: V0,
            add: jt,
            set: $t,
            delete: Vt,
            clear: Nt,
            forEach: Z0(!1, !0),
        },
        r = {
            get(i) {
                return $0(this, i, !0)
            },
            get size() {
                return N0(this, !0)
            },
            has(i) {
                return V0.call(this, i, !0)
            },
            add: U2('add'),
            set: U2('set'),
            delete: U2('delete'),
            clear: U2('clear'),
            forEach: Z0(!0, !1),
        },
        n = {
            get(i) {
                return $0(this, i, !0, !0)
            },
            get size() {
                return N0(this, !0)
            },
            has(i) {
                return V0.call(this, i, !0)
            },
            add: U2('add'),
            set: U2('set'),
            delete: U2('delete'),
            clear: U2('clear'),
            forEach: Z0(!0, !0),
        }
    return (
        ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
            ;(e[i] = G0(i, !1, !1)), (r[i] = G0(i, !0, !1)), (t[i] = G0(i, !1, !0)), (n[i] = G0(i, !0, !0))
        }),
        [e, r, t, n]
    )
}
const [Mr, Hr, Tr, Or] = kr()
function ht(e, t) {
    const r = t ? (e ? Or : Tr) : e ? Hr : Mr
    return (n, s, i) =>
        s === '__v_isReactive'
            ? !e
            : s === '__v_isReadonly'
            ? e
            : s === '__v_raw'
            ? n
            : Reflect.get(Z(r, s) && s in n ? r : n, s, i)
}
const Sr = { get: ht(!1, !1) },
    Rr = { get: ht(!1, !0) },
    Ur = { get: ht(!0, !1) },
    R3 = new WeakMap(),
    U3 = new WeakMap(),
    P3 = new WeakMap(),
    Pr = new WeakMap()
function Br(e) {
    switch (e) {
        case 'Object':
        case 'Array':
            return 1
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2
        default:
            return 0
    }
}
function Ir(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Br(sr(e))
}
function X2(e) {
    return e0(e) ? e : pt(e, !1, S3, Sr, R3)
}
function jr(e) {
    return pt(e, !1, Lr, Rr, U3)
}
function B3(e) {
    return pt(e, !0, vr, Ur, P3)
}
function pt(e, t, r, n, s) {
    if (!X(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
    const i = s.get(e)
    if (i) return i
    const o = Ir(e)
    if (o === 0) return e
    const l = new Proxy(e, o === 2 ? n : r)
    return s.set(e, l), l
}
function a0(e) {
    return e0(e) ? a0(e.__v_raw) : !!(e && e.__v_isReactive)
}
function e0(e) {
    return !!(e && e.__v_isReadonly)
}
function ne(e) {
    return !!(e && e.__v_isShallow)
}
function I3(e) {
    return a0(e) || e0(e)
}
function G(e) {
    const t = e && e.__v_raw
    return t ? G(t) : e
}
function j3(e) {
    return te(e, '__v_skip', !0), e
}
const T0 = (e) => (X(e) ? X2(e) : e),
    Ct = (e) => (X(e) ? B3(e) : e)
function $3(e) {
    j2 && b2 && ((e = G(e)), H3(e.dep || (e.dep = ct())))
}
function V3(e, t) {
    e = G(e)
    const r = e.dep
    r && Ve(r)
}
function o2(e) {
    return !!(e && e.__v_isRef === !0)
}
function w0(e) {
    return $r(e, !1)
}
function $r(e, t) {
    return o2(e) ? e : new Vr(e, t)
}
class Vr {
    constructor(t, r) {
        ;(this.__v_isShallow = r),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._rawValue = r ? t : G(t)),
            (this._value = r ? t : T0(t))
    }
    get value() {
        return $3(this), this._value
    }
    set value(t) {
        const r = this.__v_isShallow || ne(t) || e0(t)
        ;(t = r ? t : G(t)), H0(t, this._rawValue) && ((this._rawValue = t), (this._value = r ? t : T0(t)), V3(this))
    }
}
function y2(e) {
    return o2(e) ? e.value : e
}
const Nr = {
    get: (e, t, r) => y2(Reflect.get(e, t, r)),
    set: (e, t, r, n) => {
        const s = e[t]
        return o2(s) && !o2(r) ? ((s.value = r), !0) : Reflect.set(e, t, r, n)
    },
}
function N3(e) {
    return a0(e) ? e : new Proxy(e, Nr)
}
class Zr {
    constructor(t, r, n) {
        ;(this._object = t), (this._key = r), (this._defaultValue = n), (this.__v_isRef = !0)
    }
    get value() {
        const t = this._object[this._key]
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Cr(G(this._object), this._key)
    }
}
function Z3(e, t, r) {
    const n = e[t]
    return o2(n) ? n : new Zr(e, t, r)
}
var G3
class Gr {
    constructor(t, r, n, s) {
        ;(this._setter = r),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this[G3] = !1),
            (this._dirty = !0),
            (this.effect = new ft(t, () => {
                this._dirty || ((this._dirty = !0), V3(this))
            })),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !s),
            (this.__v_isReadonly = n)
    }
    get value() {
        const t = G(this)
        return $3(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    }
    set value(t) {
        this._setter(t)
    }
}
G3 = '__v_isReadonly'
function Wr(e, t, r = !1) {
    let n, s
    const i = P(e)
    return i ? ((n = e), (s = x2)) : ((n = e.get), (s = e.set)), new Gr(n, s, i || !s, r)
}
function $2(e, t, r, n) {
    let s
    try {
        s = n ? e(...n) : e()
    } catch (i) {
        E0(i, t, r)
    }
    return s
}
function w2(e, t, r, n) {
    if (P(e)) {
        const i = $2(e, t, r, n)
        return (
            i &&
                w3(i) &&
                i.catch((o) => {
                    E0(o, t, r)
                }),
            i
        )
    }
    const s = []
    for (let i = 0; i < e.length; i++) s.push(w2(e[i], t, r, n))
    return s
}
function E0(e, t, r, n = !0) {
    const s = t ? t.vnode : null
    if (t) {
        let i = t.parent
        const o = t.proxy,
            l = r
        for (; i; ) {
            const c = i.ec
            if (c) {
                for (let d = 0; d < c.length; d++) if (c[d](e, o, l) === !1) return
            }
            i = i.parent
        }
        const a = t.appContext.config.errorHandler
        if (a) {
            $2(a, null, 10, [e, o, l])
            return
        }
    }
    Kr(e, r, s, n)
}
function Kr(e, t, r, n = !0) {
    console.error(e)
}
let O0 = !1,
    Ne = !1
const l2 = []
let M2 = 0
const c0 = []
let O2 = null,
    q2 = 0
const W3 = Promise.resolve()
let gt = null
function Dt(e) {
    const t = gt || W3
    return e ? t.then(this ? e.bind(this) : e) : t
}
function qr(e) {
    let t = M2 + 1,
        r = l2.length
    for (; t < r; ) {
        const n = (t + r) >>> 1
        S0(l2[n]) < e ? (t = n + 1) : (r = n)
    }
    return t
}
function me(e) {
    ;(!l2.length || !l2.includes(e, O0 && e.allowRecurse ? M2 + 1 : M2)) &&
        (e.id == null ? l2.push(e) : l2.splice(qr(e.id), 0, e), K3())
}
function K3() {
    !O0 && !Ne && ((Ne = !0), (gt = W3.then(z3)))
}
function zr(e) {
    const t = l2.indexOf(e)
    t > M2 && l2.splice(t, 1)
}
function q3(e) {
    B(e) ? c0.push(...e) : (!O2 || !O2.includes(e, e.allowRecurse ? q2 + 1 : q2)) && c0.push(e), K3()
}
function Zt(e, t = O0 ? M2 + 1 : 0) {
    for (; t < l2.length; t++) {
        const r = l2[t]
        r && r.pre && (l2.splice(t, 1), t--, r())
    }
}
function se(e) {
    if (c0.length) {
        const t = [...new Set(c0)]
        if (((c0.length = 0), O2)) {
            O2.push(...t)
            return
        }
        for (O2 = t, O2.sort((r, n) => S0(r) - S0(n)), q2 = 0; q2 < O2.length; q2++) O2[q2]()
        ;(O2 = null), (q2 = 0)
    }
}
const S0 = (e) => (e.id == null ? 1 / 0 : e.id),
    Jr = (e, t) => {
        const r = S0(e) - S0(t)
        if (r === 0) {
            if (e.pre && !t.pre) return -1
            if (t.pre && !e.pre) return 1
        }
        return r
    }
function z3(e) {
    ;(Ne = !1), (O0 = !0), l2.sort(Jr)
    const t = x2
    try {
        for (M2 = 0; M2 < l2.length; M2++) {
            const r = l2[M2]
            r && r.active !== !1 && $2(r, null, 14)
        }
    } finally {
        ;(M2 = 0), (l2.length = 0), se(), (O0 = !1), (gt = null), (l2.length || c0.length) && z3()
    }
}
function Qr(e, t, ...r) {
    if (e.isUnmounted) return
    const n = e.vnode.props || Y
    let s = r
    const i = t.startsWith('update:'),
        o = i && t.slice(7)
    if (o && o in n) {
        const d = `${o === 'modelValue' ? 'model' : o}Modifiers`,
            { number: h, trim: D } = n[d] || Y
        D && (s = r.map((F) => (i2(F) ? F.trim() : F))), h && (s = r.map(lr))
    }
    let l,
        a = n[(l = Le(t))] || n[(l = Le(H2(t)))]
    !a && i && (a = n[(l = Le(D0(t)))]), a && w2(a, e, 6, s)
    const c = n[l + 'Once']
    if (c) {
        if (!e.emitted) e.emitted = {}
        else if (e.emitted[l]) return
        ;(e.emitted[l] = !0), w2(c, e, 6, s)
    }
}
function J3(e, t, r = !1) {
    const n = t.emitsCache,
        s = n.get(e)
    if (s !== void 0) return s
    const i = e.emits
    let o = {},
        l = !1
    if (!P(e)) {
        const a = (c) => {
            const d = J3(c, t, !0)
            d && ((l = !0), c2(o, d))
        }
        !r && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !i && !l
        ? (X(e) && n.set(e, null), null)
        : (B(i) ? i.forEach((a) => (o[a] = null)) : c2(o, i), X(e) && n.set(e, o), o)
}
function Ee(e, t) {
    return !e || !U0(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, '')), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, D0(t)) || Z(e, t))
}
let g2 = null,
    ye = null
function ie(e) {
    const t = g2
    return (g2 = e), (ye = (e && e.type.__scopeId) || null), t
}
function tl(e) {
    ye = e
}
function rl() {
    ye = null
}
function Q3(e, t = g2, r) {
    if (!t || e._n) return e
    const n = (...s) => {
        n._d && e3(-1)
        const i = ie(t)
        let o
        try {
            o = e(...s)
        } finally {
            ie(i), n._d && e3(1)
        }
        return o
    }
    return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function Me(e) {
    const {
        type: t,
        vnode: r,
        proxy: n,
        withProxy: s,
        props: i,
        propsOptions: [o],
        slots: l,
        attrs: a,
        emit: c,
        render: d,
        renderCache: h,
        data: D,
        setupState: F,
        ctx: g,
        inheritAttrs: x,
    } = e
    let I, _
    const p = ie(e)
    try {
        if (r.shapeFlag & 4) {
            const S = s || n
            ;(I = C2(d.call(S, S, h, i, F, D, g))), (_ = a)
        } else {
            const S = t
            ;(I = C2(S.length > 1 ? S(i, { attrs: a, slots: l, emit: c }) : S(i, null))), (_ = t.props ? a : Xr(a))
        }
    } catch (S) {
        ;(k0.length = 0), E0(S, e, 1), (I = s2(N2))
    }
    let y = I
    if (_ && x !== !1) {
        const S = Object.keys(_),
            { shapeFlag: R } = y
        S.length && R & 7 && (o && S.some(it) && (_ = en(_, o)), (y = p0(y, _)))
    }
    return (
        r.dirs && ((y = p0(y)), (y.dirs = y.dirs ? y.dirs.concat(r.dirs) : r.dirs)),
        r.transition && (y.transition = r.transition),
        (I = y),
        ie(p),
        I
    )
}
function Yr(e) {
    let t
    for (let r = 0; r < e.length; r++) {
        const n = e[r]
        if (ae(n)) {
            if (n.type !== N2 || n.children === 'v-if') {
                if (t) return
                t = n
            }
        } else return
    }
    return t
}
const Xr = (e) => {
        let t
        for (const r in e) (r === 'class' || r === 'style' || U0(r)) && ((t || (t = {}))[r] = e[r])
        return t
    },
    en = (e, t) => {
        const r = {}
        for (const n in e) (!it(n) || !(n.slice(9) in t)) && (r[n] = e[n])
        return r
    }
function tn(e, t, r) {
    const { props: n, children: s, component: i } = e,
        { props: o, children: l, patchFlag: a } = t,
        c = i.emitsOptions
    if (t.dirs || t.transition) return !0
    if (r && a >= 0) {
        if (a & 1024) return !0
        if (a & 16) return n ? Gt(n, o, c) : !!o
        if (a & 8) {
            const d = t.dynamicProps
            for (let h = 0; h < d.length; h++) {
                const D = d[h]
                if (o[D] !== n[D] && !Ee(c, D)) return !0
            }
        }
    } else return (s || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? (o ? Gt(n, o, c) : !0) : !!o
    return !1
}
function Gt(e, t, r) {
    const n = Object.keys(t)
    if (n.length !== Object.keys(e).length) return !0
    for (let s = 0; s < n.length; s++) {
        const i = n[s]
        if (t[i] !== e[i] && !Ee(r, i)) return !0
    }
    return !1
}
function _t({ vnode: e, parent: t }, r) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent)
}
const rn = (e) => e.__isSuspense,
    nn = {
        name: 'Suspense',
        __isSuspense: !0,
        process(e, t, r, n, s, i, o, l, a, c) {
            e == null ? on(t, r, n, s, i, o, l, a, c) : ln(e, t, r, n, s, o, l, a, c)
        },
        hydrate: an,
        create: mt,
        normalize: cn,
    },
    sn = nn
function R0(e, t) {
    const r = e.props && e.props[t]
    P(r) && r()
}
function on(e, t, r, n, s, i, o, l, a) {
    const {
            p: c,
            o: { createElement: d },
        } = a,
        h = d('div'),
        D = (e.suspense = mt(e, s, n, t, h, r, i, o, l, a))
    c(null, (D.pendingBranch = e.ssContent), h, null, n, D, i, o),
        D.deps > 0
            ? (R0(e, 'onPending'), R0(e, 'onFallback'), c(null, e.ssFallback, t, r, n, null, i, o), f0(D, e.ssFallback))
            : D.resolve()
}
function ln(e, t, r, n, s, i, o, l, { p: a, um: c, o: { createElement: d } }) {
    const h = (t.suspense = e.suspense)
    ;(h.vnode = t), (t.el = e.el)
    const D = t.ssContent,
        F = t.ssFallback,
        { activeBranch: g, pendingBranch: x, isInFallback: I, isHydrating: _ } = h
    if (x)
        (h.pendingBranch = D),
            I2(D, x)
                ? (a(x, D, h.hiddenContainer, null, s, h, i, o, l),
                  h.deps <= 0 ? h.resolve() : I && (a(g, F, r, n, s, null, i, o, l), f0(h, F)))
                : (h.pendingId++,
                  _ ? ((h.isHydrating = !1), (h.activeBranch = x)) : c(x, s, h),
                  (h.deps = 0),
                  (h.effects.length = 0),
                  (h.hiddenContainer = d('div')),
                  I
                      ? (a(null, D, h.hiddenContainer, null, s, h, i, o, l),
                        h.deps <= 0 ? h.resolve() : (a(g, F, r, n, s, null, i, o, l), f0(h, F)))
                      : g && I2(D, g)
                      ? (a(g, D, r, n, s, h, i, o, l), h.resolve(!0))
                      : (a(null, D, h.hiddenContainer, null, s, h, i, o, l), h.deps <= 0 && h.resolve()))
    else if (g && I2(D, g)) a(g, D, r, n, s, h, i, o, l), f0(h, D)
    else if (
        (R0(t, 'onPending'),
        (h.pendingBranch = D),
        h.pendingId++,
        a(null, D, h.hiddenContainer, null, s, h, i, o, l),
        h.deps <= 0)
    )
        h.resolve()
    else {
        const { timeout: p, pendingId: y } = h
        p > 0
            ? setTimeout(() => {
                  h.pendingId === y && h.fallback(F)
              }, p)
            : p === 0 && h.fallback(F)
    }
}
function mt(e, t, r, n, s, i, o, l, a, c, d = !1) {
    const {
            p: h,
            m: D,
            um: F,
            n: g,
            o: { parentNode: x, remove: I },
        } = c,
        _ = e.props ? ar(e.props.timeout) : void 0,
        p = {
            vnode: e,
            parent: t,
            parentComponent: r,
            isSVG: o,
            container: n,
            hiddenContainer: s,
            anchor: i,
            deps: 0,
            pendingId: 0,
            timeout: typeof _ == 'number' ? _ : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !0,
            isHydrating: d,
            isUnmounted: !1,
            effects: [],
            resolve(y = !1) {
                const {
                    vnode: S,
                    activeBranch: R,
                    pendingBranch: $,
                    pendingId: j,
                    effects: M,
                    parentComponent: N,
                    container: K,
                } = p
                if (p.isHydrating) p.isHydrating = !1
                else if (!y) {
                    const r2 = R && $.transition && $.transition.mode === 'out-in'
                    r2 &&
                        (R.transition.afterLeave = () => {
                            j === p.pendingId && D($, K, O, 0)
                        })
                    let { anchor: O } = p
                    R && ((O = g(R)), F(R, N, p, !0)), r2 || D($, K, O, 0)
                }
                f0(p, $), (p.pendingBranch = null), (p.isInFallback = !1)
                let W = p.parent,
                    d2 = !1
                for (; W; ) {
                    if (W.pendingBranch) {
                        W.effects.push(...M), (d2 = !0)
                        break
                    }
                    W = W.parent
                }
                d2 || q3(M), (p.effects = []), R0(S, 'onResolve')
            },
            fallback(y) {
                if (!p.pendingBranch) return
                const { vnode: S, activeBranch: R, parentComponent: $, container: j, isSVG: M } = p
                R0(S, 'onFallback')
                const N = g(R),
                    K = () => {
                        p.isInFallback && (h(null, y, j, N, $, null, M, l, a), f0(p, y))
                    },
                    W = y.transition && y.transition.mode === 'out-in'
                W && (R.transition.afterLeave = K), (p.isInFallback = !0), F(R, $, null, !0), W || K()
            },
            move(y, S, R) {
                p.activeBranch && D(p.activeBranch, y, S, R), (p.container = y)
            },
            next() {
                return p.activeBranch && g(p.activeBranch)
            },
            registerDep(y, S) {
                const R = !!p.pendingBranch
                R && p.deps++
                const $ = y.vnode.el
                y.asyncDep
                    .catch((j) => {
                        E0(j, y, 0)
                    })
                    .then((j) => {
                        if (y.isUnmounted || p.isUnmounted || p.pendingId !== y.suspenseId) return
                        y.asyncResolved = !0
                        const { vnode: M } = y
                        qe(y, j, !1), $ && (M.el = $)
                        const N = !$ && y.subTree.el
                        S(y, M, x($ || y.subTree.el), $ ? null : g(y.subTree), p, o, a),
                            N && I(N),
                            _t(y, M.el),
                            R && --p.deps === 0 && p.resolve()
                    })
            },
            unmount(y, S) {
                ;(p.isUnmounted = !0),
                    p.activeBranch && F(p.activeBranch, r, y, S),
                    p.pendingBranch && F(p.pendingBranch, r, y, S)
            },
        }
    return p
}
function an(e, t, r, n, s, i, o, l, a) {
    const c = (t.suspense = mt(t, n, r, e.parentNode, document.createElement('div'), null, s, i, o, l, !0)),
        d = a(e, (c.pendingBranch = t.ssContent), r, c, i, o)
    return c.deps === 0 && c.resolve(), d
}
function cn(e) {
    const { shapeFlag: t, children: r } = e,
        n = t & 32
    ;(e.ssContent = Wt(n ? r.default : r)), (e.ssFallback = n ? Wt(r.fallback) : s2(N2))
}
function Wt(e) {
    let t
    if (P(e)) {
        const r = h0 && e._c
        r && ((e._d = !1), s0()), (e = e()), r && ((e._d = !0), (t = D2), D1())
    }
    return (
        B(e) && (e = Yr(e)), (e = C2(e)), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((r) => r !== e)), e
    )
}
function Y3(e, t) {
    t && t.pendingBranch ? (B(e) ? t.effects.push(...e) : t.effects.push(e)) : q3(e)
}
function f0(e, t) {
    e.activeBranch = t
    const { vnode: r, parentComponent: n } = e,
        s = (r.el = t.el)
    n && n.subTree === r && ((n.vnode.el = s), _t(n, s))
}
function X3(e, t) {
    if (t2) {
        let r = t2.provides
        const n = t2.parent && t2.parent.provides
        n === r && (r = t2.provides = Object.create(n)), (r[e] = t)
    }
}
function u0(e, t, r = !1) {
    const n = t2 || g2
    if (n) {
        const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides
        if (s && e in s) return s[e]
        if (arguments.length > 1) return r && P(t) ? t.call(n.proxy) : t
    }
}
function fn(e, t) {
    return Et(e, null, t)
}
const W0 = {}
function X0(e, t, r) {
    return Et(e, t, r)
}
function Et(e, t, { immediate: r, deep: n, flush: s, onTrack: i, onTrigger: o } = Y) {
    const l = dr() === (t2 == null ? void 0 : t2.scope) ? t2 : null
    let a,
        c = !1,
        d = !1
    if (
        (o2(e)
            ? ((a = () => e.value), (c = ne(e)))
            : a0(e)
            ? ((a = () => e), (n = !0))
            : B(e)
            ? ((d = !0),
              (c = e.some((y) => a0(y) || ne(y))),
              (a = () =>
                  e.map((y) => {
                      if (o2(y)) return y.value
                      if (a0(y)) return n0(y)
                      if (P(y)) return $2(y, l, 2)
                  })))
            : P(e)
            ? t
                ? (a = () => $2(e, l, 2))
                : (a = () => {
                      if (!(l && l.isUnmounted)) return h && h(), w2(e, l, 3, [D])
                  })
            : (a = x2),
        t && n)
    ) {
        const y = a
        a = () => n0(y())
    }
    let h,
        D = (y) => {
            h = _.onStop = () => {
                $2(y, l, 4)
            }
        },
        F
    if (g0)
        if (((D = x2), t ? r && w2(t, l, 3, [a(), d ? [] : void 0, D]) : a(), s === 'sync')) {
            const y = ss()
            F = y.__watcherHandles || (y.__watcherHandles = [])
        } else return x2
    let g = d ? new Array(e.length).fill(W0) : W0
    const x = () => {
        if (_.active)
            if (t) {
                const y = _.run()
                ;(n || c || (d ? y.some((S, R) => H0(S, g[R])) : H0(y, g))) &&
                    (h && h(), w2(t, l, 3, [y, g === W0 ? void 0 : d && g[0] === W0 ? [] : g, D]), (g = y))
            } else _.run()
    }
    x.allowRecurse = !!t
    let I
    s === 'sync'
        ? (I = x)
        : s === 'post'
        ? (I = () => f2(x, l && l.suspense))
        : ((x.pre = !0), l && (x.id = l.uid), (I = () => me(x)))
    const _ = new ft(a, I)
    t ? (r ? x() : (g = _.run())) : s === 'post' ? f2(_.run.bind(_), l && l.suspense) : _.run()
    const p = () => {
        _.stop(), l && l.scope && ot(l.scope.effects, _)
    }
    return F && F.push(p), p
}
function un(e, t, r) {
    const n = this.proxy,
        s = i2(e) ? (e.includes('.') ? e1(n, e) : () => n[e]) : e.bind(n, n)
    let i
    P(t) ? (i = t) : ((i = t.handler), (r = t))
    const o = t2
    C0(this)
    const l = Et(s, i.bind(n), r)
    return o ? C0(o) : Y2(), l
}
function e1(e, t) {
    const r = t.split('.')
    return () => {
        let n = e
        for (let s = 0; s < r.length && n; s++) n = n[r[s]]
        return n
    }
}
function n0(e, t) {
    if (!X(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
    if ((t.add(e), o2(e))) n0(e.value, t)
    else if (B(e)) for (let r = 0; r < e.length; r++) n0(e[r], t)
    else if (x3(e) || l0(e))
        e.forEach((r) => {
            n0(r, t)
        })
    else if (v3(e)) for (const r in e) n0(e[r], t)
    return e
}
function dn(e) {
    return P(e) ? { setup: e, name: e.name } : e
}
const F0 = (e) => !!e.type.__asyncLoader
function hn(e) {
    P(e) && (e = { loader: e })
    const {
        loader: t,
        loadingComponent: r,
        errorComponent: n,
        delay: s = 200,
        timeout: i,
        suspensible: o = !0,
        onError: l,
    } = e
    let a = null,
        c,
        d = 0
    const h = () => (d++, (a = null), D()),
        D = () => {
            let F
            return (
                a ||
                (F = a =
                    t()
                        .catch((g) => {
                            if (((g = g instanceof Error ? g : new Error(String(g))), l))
                                return new Promise((x, I) => {
                                    l(
                                        g,
                                        () => x(h()),
                                        () => I(g),
                                        d + 1
                                    )
                                })
                            throw g
                        })
                        .then((g) =>
                            F !== a && a
                                ? a
                                : (g && (g.__esModule || g[Symbol.toStringTag] === 'Module') && (g = g.default),
                                  (c = g),
                                  g)
                        ))
            )
        }
    return dn({
        name: 'AsyncComponentWrapper',
        __asyncLoader: D,
        get __asyncResolved() {
            return c
        },
        setup() {
            const F = t2
            if (c) return () => He(c, F)
            const g = (p) => {
                ;(a = null), E0(p, F, 13, !n)
            }
            if ((o && F.suspense) || g0)
                return D()
                    .then((p) => () => He(p, F))
                    .catch((p) => (g(p), () => (n ? s2(n, { error: p }) : null)))
            const x = w0(!1),
                I = w0(),
                _ = w0(!!s)
            return (
                s &&
                    setTimeout(() => {
                        _.value = !1
                    }, s),
                i != null &&
                    setTimeout(() => {
                        if (!x.value && !I.value) {
                            const p = new Error(`Async component timed out after ${i}ms.`)
                            g(p), (I.value = p)
                        }
                    }, i),
                D()
                    .then(() => {
                        ;(x.value = !0), F.parent && yt(F.parent.vnode) && me(F.parent.update)
                    })
                    .catch((p) => {
                        g(p), (I.value = p)
                    }),
                () => {
                    if (x.value && c) return He(c, F)
                    if (I.value && n) return s2(n, { error: I.value })
                    if (r && !_.value) return s2(r)
                }
            )
        },
    })
}
function He(e, t) {
    const { ref: r, props: n, children: s, ce: i } = t.vnode,
        o = s2(e, n, s)
    return (o.ref = r), (o.ce = i), delete t.vnode.ce, o
}
const yt = (e) => e.type.__isKeepAlive
function t1(e, t) {
    n1(e, 'a', t)
}
function r1(e, t) {
    n1(e, 'da', t)
}
function n1(e, t, r = t2) {
    const n =
        e.__wdc ||
        (e.__wdc = () => {
            let s = r
            for (; s; ) {
                if (s.isDeactivated) return
                s = s.parent
            }
            return e()
        })
    if ((Ae(t, n, r), r)) {
        let s = r.parent
        for (; s && s.parent; ) yt(s.parent.vnode) && pn(n, t, r, s), (s = s.parent)
    }
}
function pn(e, t, r, n) {
    const s = Ae(t, e, n, !0)
    i1(() => {
        ot(n[t], s)
    }, r)
}
function Ae(e, t, r = t2, n = !1) {
    if (r) {
        const s = r[e] || (r[e] = []),
            i =
                t.__weh ||
                (t.__weh = (...o) => {
                    if (r.isUnmounted) return
                    _0(), C0(r)
                    const l = w2(t, r, e, o)
                    return Y2(), m0(), l
                })
        return n ? s.unshift(i) : s.push(i), i
    }
}
const R2 =
        (e) =>
        (t, r = t2) =>
            (!g0 || e === 'sp') && Ae(e, (...n) => t(...n), r),
    Cn = R2('bm'),
    gn = R2('m'),
    Dn = R2('bu'),
    _n = R2('u'),
    s1 = R2('bum'),
    i1 = R2('um'),
    mn = R2('sp'),
    En = R2('rtg'),
    yn = R2('rtc')
function o1(e, t = t2) {
    Ae('ec', e, t)
}
function k2(e, t, r, n) {
    const s = e.dirs,
        i = t && t.dirs
    for (let o = 0; o < s.length; o++) {
        const l = s[o]
        i && (l.oldValue = i[o].value)
        let a = l.dir[n]
        a && (_0(), w2(a, r, 8, [e.el, l, e, t]), m0())
    }
}
const l1 = 'components'
function nl(e, t) {
    return bn(l1, e, !0, t) || e
}
const An = Symbol()
function bn(e, t, r = !0, n = !1) {
    const s = g2 || t2
    if (s) {
        const i = s.type
        if (e === l1) {
            const l = Xn(i, !1)
            if (l && (l === t || l === H2(t) || l === De(H2(t)))) return i
        }
        const o = Kt(s[e] || i[e], t) || Kt(s.appContext[e], t)
        return !o && n ? i : o
    }
}
function Kt(e, t) {
    return e && (e[t] || e[H2(t)] || e[De(H2(t))])
}
const Ze = (e) => (e ? (y1(e) ? Ft(e) || e.proxy : Ze(e.parent)) : null),
    v0 = c2(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Ze(e.parent),
        $root: (e) => Ze(e.root),
        $emit: (e) => e.emit,
        $options: (e) => At(e),
        $forceUpdate: (e) => e.f || (e.f = () => me(e.update)),
        $nextTick: (e) => e.n || (e.n = Dt.bind(e.proxy)),
        $watch: (e) => un.bind(e),
    }),
    Te = (e, t) => e !== Y && !e.__isScriptSetup && Z(e, t),
    xn = {
        get({ _: e }, t) {
            const { ctx: r, setupState: n, data: s, props: i, accessCache: o, type: l, appContext: a } = e
            let c
            if (t[0] !== '$') {
                const F = o[t]
                if (F !== void 0)
                    switch (F) {
                        case 1:
                            return n[t]
                        case 2:
                            return s[t]
                        case 4:
                            return r[t]
                        case 3:
                            return i[t]
                    }
                else {
                    if (Te(n, t)) return (o[t] = 1), n[t]
                    if (s !== Y && Z(s, t)) return (o[t] = 2), s[t]
                    if ((c = e.propsOptions[0]) && Z(c, t)) return (o[t] = 3), i[t]
                    if (r !== Y && Z(r, t)) return (o[t] = 4), r[t]
                    Ge && (o[t] = 0)
                }
            }
            const d = v0[t]
            let h, D
            if (d) return t === '$attrs' && u2(e, 'get', t), d(e)
            if ((h = l.__cssModules) && (h = h[t])) return h
            if (r !== Y && Z(r, t)) return (o[t] = 4), r[t]
            if (((D = a.config.globalProperties), Z(D, t))) return D[t]
        },
        set({ _: e }, t, r) {
            const { data: n, setupState: s, ctx: i } = e
            return Te(s, t)
                ? ((s[t] = r), !0)
                : n !== Y && Z(n, t)
                ? ((n[t] = r), !0)
                : Z(e.props, t) || (t[0] === '$' && t.slice(1) in e)
                ? !1
                : ((i[t] = r), !0)
        },
        has({ _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: s, propsOptions: i } }, o) {
            let l
            return (
                !!r[o] ||
                (e !== Y && Z(e, o)) ||
                Te(t, o) ||
                ((l = i[0]) && Z(l, o)) ||
                Z(n, o) ||
                Z(v0, o) ||
                Z(s.config.globalProperties, o)
            )
        },
        defineProperty(e, t, r) {
            return (
                r.get != null ? (e._.accessCache[t] = 0) : Z(r, 'value') && this.set(e, t, r.value, null),
                Reflect.defineProperty(e, t, r)
            )
        },
    }
let Ge = !0
function wn(e) {
    const t = At(e),
        r = e.proxy,
        n = e.ctx
    ;(Ge = !1), t.beforeCreate && qt(t.beforeCreate, e, 'bc')
    const {
        data: s,
        computed: i,
        methods: o,
        watch: l,
        provide: a,
        inject: c,
        created: d,
        beforeMount: h,
        mounted: D,
        beforeUpdate: F,
        updated: g,
        activated: x,
        deactivated: I,
        beforeDestroy: _,
        beforeUnmount: p,
        destroyed: y,
        unmounted: S,
        render: R,
        renderTracked: $,
        renderTriggered: j,
        errorCaptured: M,
        serverPrefetch: N,
        expose: K,
        inheritAttrs: W,
        components: d2,
        directives: r2,
        filters: O,
    } = t
    if ((c && Fn(c, n, null, e.appContext.config.unwrapInjectedRef), o))
        for (const e2 in o) {
            const z = o[e2]
            P(z) && (n[e2] = z.bind(r))
        }
    if (s) {
        const e2 = s.call(r, r)
        X(e2) && (e.data = X2(e2))
    }
    if (((Ge = !0), i))
        for (const e2 in i) {
            const z = i[e2],
                Z2 = P(z) ? z.bind(r, r) : P(z.get) ? z.get.bind(r, r) : x2,
                I0 = !P(z) && P(z.set) ? z.set.bind(r) : x2,
                G2 = ts({ get: Z2, set: I0 })
            Object.defineProperty(n, e2, {
                enumerable: !0,
                configurable: !0,
                get: () => G2.value,
                set: (v2) => (G2.value = v2),
            })
        }
    if (l) for (const e2 in l) a1(l[e2], n, r, e2)
    if (a) {
        const e2 = P(a) ? a.call(r) : a
        Reflect.ownKeys(e2).forEach((z) => {
            X3(z, e2[z])
        })
    }
    d && qt(d, e, 'c')
    function Q(e2, z) {
        B(z) ? z.forEach((Z2) => e2(Z2.bind(r))) : z && e2(z.bind(r))
    }
    if (
        (Q(Cn, h),
        Q(gn, D),
        Q(Dn, F),
        Q(_n, g),
        Q(t1, x),
        Q(r1, I),
        Q(o1, M),
        Q(yn, $),
        Q(En, j),
        Q(s1, p),
        Q(i1, S),
        Q(mn, N),
        B(K))
    )
        if (K.length) {
            const e2 = e.exposed || (e.exposed = {})
            K.forEach((z) => {
                Object.defineProperty(e2, z, { get: () => r[z], set: (Z2) => (r[z] = Z2) })
            })
        } else e.exposed || (e.exposed = {})
    R && e.render === x2 && (e.render = R),
        W != null && (e.inheritAttrs = W),
        d2 && (e.components = d2),
        r2 && (e.directives = r2)
}
function Fn(e, t, r = x2, n = !1) {
    B(e) && (e = We(e))
    for (const s in e) {
        const i = e[s]
        let o
        X(i) ? ('default' in i ? (o = u0(i.from || s, i.default, !0)) : (o = u0(i.from || s))) : (o = u0(i)),
            o2(o) && n
                ? Object.defineProperty(t, s, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => o.value,
                      set: (l) => (o.value = l),
                  })
                : (t[s] = o)
    }
}
function qt(e, t, r) {
    w2(B(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
}
function a1(e, t, r, n) {
    const s = n.includes('.') ? e1(r, n) : () => r[n]
    if (i2(e)) {
        const i = t[e]
        P(i) && X0(s, i)
    } else if (P(e)) X0(s, e.bind(r))
    else if (X(e))
        if (B(e)) e.forEach((i) => a1(i, t, r, n))
        else {
            const i = P(e.handler) ? e.handler.bind(r) : t[e.handler]
            P(i) && X0(s, i, e)
        }
}
function At(e) {
    const t = e.type,
        { mixins: r, extends: n } = t,
        {
            mixins: s,
            optionsCache: i,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        l = i.get(t)
    let a
    return (
        l
            ? (a = l)
            : !s.length && !r && !n
            ? (a = t)
            : ((a = {}), s.length && s.forEach((c) => oe(a, c, o, !0)), oe(a, t, o)),
        X(t) && i.set(t, a),
        a
    )
}
function oe(e, t, r, n = !1) {
    const { mixins: s, extends: i } = t
    i && oe(e, i, r, !0), s && s.forEach((o) => oe(e, o, r, !0))
    for (const o in t)
        if (!(n && o === 'expose')) {
            const l = vn[o] || (r && r[o])
            e[o] = l ? l(e[o], t[o]) : t[o]
        }
    return e
}
const vn = {
    data: zt,
    props: K2,
    emits: K2,
    methods: K2,
    computed: K2,
    beforeCreate: a2,
    created: a2,
    beforeMount: a2,
    mounted: a2,
    beforeUpdate: a2,
    updated: a2,
    beforeDestroy: a2,
    beforeUnmount: a2,
    destroyed: a2,
    unmounted: a2,
    activated: a2,
    deactivated: a2,
    errorCaptured: a2,
    serverPrefetch: a2,
    components: K2,
    directives: K2,
    watch: kn,
    provide: zt,
    inject: Ln,
}
function zt(e, t) {
    return t
        ? e
            ? function () {
                  return c2(P(e) ? e.call(this, this) : e, P(t) ? t.call(this, this) : t)
              }
            : t
        : e
}
function Ln(e, t) {
    return K2(We(e), We(t))
}
function We(e) {
    if (B(e)) {
        const t = {}
        for (let r = 0; r < e.length; r++) t[e[r]] = e[r]
        return t
    }
    return e
}
function a2(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function K2(e, t) {
    return e ? c2(c2(Object.create(null), e), t) : t
}
function kn(e, t) {
    if (!e) return t
    if (!t) return e
    const r = c2(Object.create(null), e)
    for (const n in t) r[n] = a2(e[n], t[n])
    return r
}
function Mn(e, t, r, n = !1) {
    const s = {},
        i = {}
    te(i, be, 1), (e.propsDefaults = Object.create(null)), c1(e, t, s, i)
    for (const o in e.propsOptions[0]) o in s || (s[o] = void 0)
    r ? (e.props = n ? s : jr(s)) : e.type.props ? (e.props = s) : (e.props = i), (e.attrs = i)
}
function Hn(e, t, r, n) {
    const {
            props: s,
            attrs: i,
            vnode: { patchFlag: o },
        } = e,
        l = G(s),
        [a] = e.propsOptions
    let c = !1
    if ((n || o > 0) && !(o & 16)) {
        if (o & 8) {
            const d = e.vnode.dynamicProps
            for (let h = 0; h < d.length; h++) {
                let D = d[h]
                if (Ee(e.emitsOptions, D)) continue
                const F = t[D]
                if (a)
                    if (Z(i, D)) F !== i[D] && ((i[D] = F), (c = !0))
                    else {
                        const g = H2(D)
                        s[g] = Ke(a, l, g, F, e, !1)
                    }
                else F !== i[D] && ((i[D] = F), (c = !0))
            }
        }
    } else {
        c1(e, t, s, i) && (c = !0)
        let d
        for (const h in l)
            (!t || (!Z(t, h) && ((d = D0(h)) === h || !Z(t, d)))) &&
                (a ? r && (r[h] !== void 0 || r[d] !== void 0) && (s[h] = Ke(a, l, h, void 0, e, !0)) : delete s[h])
        if (i !== l) for (const h in i) (!t || !Z(t, h)) && (delete i[h], (c = !0))
    }
    c && S2(e, 'set', '$attrs')
}
function c1(e, t, r, n) {
    const [s, i] = e.propsOptions
    let o = !1,
        l
    if (t)
        for (let a in t) {
            if (x0(a)) continue
            const c = t[a]
            let d
            s && Z(s, (d = H2(a)))
                ? !i || !i.includes(d)
                    ? (r[d] = c)
                    : ((l || (l = {}))[d] = c)
                : Ee(e.emitsOptions, a) || ((!(a in n) || c !== n[a]) && ((n[a] = c), (o = !0)))
        }
    if (i) {
        const a = G(r),
            c = l || Y
        for (let d = 0; d < i.length; d++) {
            const h = i[d]
            r[h] = Ke(s, a, h, c[h], e, !Z(c, h))
        }
    }
    return o
}
function Ke(e, t, r, n, s, i) {
    const o = e[r]
    if (o != null) {
        const l = Z(o, 'default')
        if (l && n === void 0) {
            const a = o.default
            if (o.type !== Function && P(a)) {
                const { propsDefaults: c } = s
                r in c ? (n = c[r]) : (C0(s), (n = c[r] = a.call(null, t)), Y2())
            } else n = a
        }
        o[0] && (i && !l ? (n = !1) : o[1] && (n === '' || n === D0(r)) && (n = !0))
    }
    return n
}
function f1(e, t, r = !1) {
    const n = t.propsCache,
        s = n.get(e)
    if (s) return s
    const i = e.props,
        o = {},
        l = []
    let a = !1
    if (!P(e)) {
        const d = (h) => {
            a = !0
            const [D, F] = f1(h, t, !0)
            c2(o, D), F && l.push(...F)
        }
        !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
    }
    if (!i && !a) return X(e) && n.set(e, o0), o0
    if (B(i))
        for (let d = 0; d < i.length; d++) {
            const h = H2(i[d])
            Jt(h) && (o[h] = Y)
        }
    else if (i)
        for (const d in i) {
            const h = H2(d)
            if (Jt(h)) {
                const D = i[d],
                    F = (o[h] = B(D) || P(D) ? { type: D } : Object.assign({}, D))
                if (F) {
                    const g = Xt(Boolean, F.type),
                        x = Xt(String, F.type)
                    ;(F[0] = g > -1), (F[1] = x < 0 || g < x), (g > -1 || Z(F, 'default')) && l.push(h)
                }
            }
        }
    const c = [o, l]
    return X(e) && n.set(e, c), c
}
function Jt(e) {
    return e[0] !== '$'
}
function Qt(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
    return t ? t[2] : e === null ? 'null' : ''
}
function Yt(e, t) {
    return Qt(e) === Qt(t)
}
function Xt(e, t) {
    return B(t) ? t.findIndex((r) => Yt(r, e)) : P(t) && Yt(t, e) ? 0 : -1
}
const u1 = (e) => e[0] === '_' || e === '$stable',
    bt = (e) => (B(e) ? e.map(C2) : [C2(e)]),
    Tn = (e, t, r) => {
        if (t._n) return t
        const n = Q3((...s) => bt(t(...s)), r)
        return (n._c = !1), n
    },
    d1 = (e, t, r) => {
        const n = e._ctx
        for (const s in e) {
            if (u1(s)) continue
            const i = e[s]
            if (P(i)) t[s] = Tn(s, i, n)
            else if (i != null) {
                const o = bt(i)
                t[s] = () => o
            }
        }
    },
    h1 = (e, t) => {
        const r = bt(t)
        e.slots.default = () => r
    },
    On = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const r = t._
            r ? ((e.slots = G(t)), te(t, '_', r)) : d1(t, (e.slots = {}))
        } else (e.slots = {}), t && h1(e, t)
        te(e.slots, be, 1)
    },
    Sn = (e, t, r) => {
        const { vnode: n, slots: s } = e
        let i = !0,
            o = Y
        if (n.shapeFlag & 32) {
            const l = t._
            l ? (r && l === 1 ? (i = !1) : (c2(s, t), !r && l === 1 && delete s._)) : ((i = !t.$stable), d1(t, s)),
                (o = t)
        } else t && (h1(e, t), (o = { default: 1 }))
        if (i) for (const l in s) !u1(l) && !(l in o) && delete s[l]
    }
function p1() {
    return {
        app: null,
        config: {
            isNativeTag: tr,
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
    }
}
let Rn = 0
function Un(e, t) {
    return function (n, s = null) {
        P(n) || (n = Object.assign({}, n)), s != null && !X(s) && (s = null)
        const i = p1(),
            o = new Set()
        let l = !1
        const a = (i.app = {
            _uid: Rn++,
            _component: n,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: b1,
            get config() {
                return i.config
            },
            set config(c) {},
            use(c, ...d) {
                return (
                    o.has(c) || (c && P(c.install) ? (o.add(c), c.install(a, ...d)) : P(c) && (o.add(c), c(a, ...d))), a
                )
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c), a
            },
            component(c, d) {
                return d ? ((i.components[c] = d), a) : i.components[c]
            },
            directive(c, d) {
                return d ? ((i.directives[c] = d), a) : i.directives[c]
            },
            mount(c, d, h) {
                if (!l) {
                    const D = s2(n, s)
                    return (
                        (D.appContext = i),
                        d && t ? t(D, c) : e(D, c, h),
                        (l = !0),
                        (a._container = c),
                        (c.__vue_app__ = a),
                        Ft(D.component) || D.component.proxy
                    )
                }
            },
            unmount() {
                l && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(c, d) {
                return (i.provides[c] = d), a
            },
        })
        return a
    }
}
function le(e, t, r, n, s = !1) {
    if (B(e)) {
        e.forEach((D, F) => le(D, t && (B(t) ? t[F] : t), r, n, s))
        return
    }
    if (F0(n) && !s) return
    const i = n.shapeFlag & 4 ? Ft(n.component) || n.component.proxy : n.el,
        o = s ? null : i,
        { i: l, r: a } = e,
        c = t && t.r,
        d = l.refs === Y ? (l.refs = {}) : l.refs,
        h = l.setupState
    if ((c != null && c !== a && (i2(c) ? ((d[c] = null), Z(h, c) && (h[c] = null)) : o2(c) && (c.value = null)), P(a)))
        $2(a, l, 12, [o, d])
    else {
        const D = i2(a),
            F = o2(a)
        if (D || F) {
            const g = () => {
                if (e.f) {
                    const x = D ? (Z(h, a) ? h[a] : d[a]) : a.value
                    s
                        ? B(x) && ot(x, i)
                        : B(x)
                        ? x.includes(i) || x.push(i)
                        : D
                        ? ((d[a] = [i]), Z(h, a) && (h[a] = d[a]))
                        : ((a.value = [i]), e.k && (d[e.k] = a.value))
                } else D ? ((d[a] = o), Z(h, a) && (h[a] = o)) : F && ((a.value = o), e.k && (d[e.k] = o))
            }
            o ? ((g.id = -1), f2(g, r)) : g()
        }
    }
}
let P2 = !1
const K0 = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
    q0 = (e) => e.nodeType === 8
function Pn(e) {
    const {
            mt: t,
            p: r,
            o: { patchProp: n, createText: s, nextSibling: i, parentNode: o, remove: l, insert: a, createComment: c },
        } = e,
        d = (_, p) => {
            if (!p.hasChildNodes()) {
                r(null, _, p), se(), (p._vnode = _)
                return
            }
            ;(P2 = !1),
                h(p.firstChild, _, null, null, null),
                se(),
                (p._vnode = _),
                P2 && console.error('Hydration completed but contains mismatches.')
        },
        h = (_, p, y, S, R, $ = !1) => {
            const j = q0(_) && _.data === '[',
                M = () => x(_, p, y, S, R, j),
                { type: N, ref: K, shapeFlag: W, patchFlag: d2 } = p
            let r2 = _.nodeType
            ;(p.el = _), d2 === -2 && (($ = !1), (p.dynamicChildren = null))
            let O = null
            switch (N) {
                case d0:
                    r2 !== 3
                        ? p.children === ''
                            ? (a((p.el = s('')), o(_), _), (O = _))
                            : (O = M())
                        : (_.data !== p.children && ((P2 = !0), (_.data = p.children)), (O = i(_)))
                    break
                case N2:
                    r2 !== 8 || j ? (O = M()) : (O = i(_))
                    break
                case L0:
                    if ((j && ((_ = i(_)), (r2 = _.nodeType)), r2 === 1 || r2 === 3)) {
                        O = _
                        const F2 = !p.children.length
                        for (let Q = 0; Q < p.staticCount; Q++)
                            F2 && (p.children += O.nodeType === 1 ? O.outerHTML : O.data),
                                Q === p.staticCount - 1 && (p.anchor = O),
                                (O = i(O))
                        return j ? i(O) : O
                    } else M()
                    break
                case A2:
                    j ? (O = g(_, p, y, S, R, $)) : (O = M())
                    break
                default:
                    if (W & 1)
                        r2 !== 1 || p.type.toLowerCase() !== _.tagName.toLowerCase()
                            ? (O = M())
                            : (O = D(_, p, y, S, R, $))
                    else if (W & 6) {
                        p.slotScopeIds = R
                        const F2 = o(_)
                        if (
                            (t(p, F2, null, y, S, K0(F2), $),
                            (O = j ? I(_) : i(_)),
                            O && q0(O) && O.data === 'teleport end' && (O = i(O)),
                            F0(p))
                        ) {
                            let Q
                            j
                                ? ((Q = s2(A2)), (Q.anchor = O ? O.previousSibling : F2.lastChild))
                                : (Q = _.nodeType === 3 ? E1('') : s2('div')),
                                (Q.el = _),
                                (p.component.subTree = Q)
                        }
                    } else
                        W & 64
                            ? r2 !== 8
                                ? (O = M())
                                : (O = p.type.hydrate(_, p, y, S, R, $, e, F))
                            : W & 128 && (O = p.type.hydrate(_, p, y, S, K0(o(_)), R, $, e, h))
            }
            return K != null && le(K, null, S, p), O
        },
        D = (_, p, y, S, R, $) => {
            $ = $ || !!p.dynamicChildren
            const { type: j, props: M, patchFlag: N, shapeFlag: K, dirs: W } = p,
                d2 = (j === 'input' && W) || j === 'option'
            if (d2 || N !== -1) {
                if ((W && k2(p, null, y, 'created'), M))
                    if (d2 || !$ || N & 48)
                        for (const O in M)
                            ((d2 && O.endsWith('value')) || (U0(O) && !x0(O))) && n(_, O, null, M[O], !1, void 0, y)
                    else M.onClick && n(_, 'onClick', null, M.onClick, !1, void 0, y)
                let r2
                if (
                    ((r2 = M && M.onVnodeBeforeMount) && p2(r2, y, p),
                    W && k2(p, null, y, 'beforeMount'),
                    ((r2 = M && M.onVnodeMounted) || W) &&
                        Y3(() => {
                            r2 && p2(r2, y, p), W && k2(p, null, y, 'mounted')
                        }, S),
                    K & 16 && !(M && (M.innerHTML || M.textContent)))
                ) {
                    let O = F(_.firstChild, p, _, y, S, R, $)
                    for (; O; ) {
                        P2 = !0
                        const F2 = O
                        ;(O = O.nextSibling), l(F2)
                    }
                } else K & 8 && _.textContent !== p.children && ((P2 = !0), (_.textContent = p.children))
            }
            return _.nextSibling
        },
        F = (_, p, y, S, R, $, j) => {
            j = j || !!p.dynamicChildren
            const M = p.children,
                N = M.length
            for (let K = 0; K < N; K++) {
                const W = j ? M[K] : (M[K] = C2(M[K]))
                if (_) _ = h(_, W, S, R, $, j)
                else {
                    if (W.type === d0 && !W.children) continue
                    ;(P2 = !0), r(null, W, y, null, S, R, K0(y), $)
                }
            }
            return _
        },
        g = (_, p, y, S, R, $) => {
            const { slotScopeIds: j } = p
            j && (R = R ? R.concat(j) : j)
            const M = o(_),
                N = F(i(_), p, M, y, S, R, $)
            return N && q0(N) && N.data === ']' ? i((p.anchor = N)) : ((P2 = !0), a((p.anchor = c(']')), M, N), N)
        },
        x = (_, p, y, S, R, $) => {
            if (((P2 = !0), (p.el = null), $)) {
                const N = I(_)
                for (;;) {
                    const K = i(_)
                    if (K && K !== N) l(K)
                    else break
                }
            }
            const j = i(_),
                M = o(_)
            return l(_), r(null, p, M, j, y, S, K0(M), R), j
        },
        I = (_) => {
            let p = 0
            for (; _; )
                if (((_ = i(_)), _ && q0(_) && (_.data === '[' && p++, _.data === ']'))) {
                    if (p === 0) return i(_)
                    p--
                }
            return _
        }
    return [d, h]
}
const f2 = Y3
function Bn(e) {
    return C1(e)
}
function In(e) {
    return C1(e, Pn)
}
function C1(e, t) {
    const r = cr()
    r.__VUE__ = !0
    const {
            insert: n,
            remove: s,
            patchProp: i,
            createElement: o,
            createText: l,
            createComment: a,
            setText: c,
            setElementText: d,
            parentNode: h,
            nextSibling: D,
            setScopeId: F = x2,
            insertStaticContent: g,
        } = e,
        x = (f, u, C, E = null, m = null, w = null, L = !1, b = null, v = !!u.dynamicChildren) => {
            if (f === u) return
            f && !I2(f, u) && ((E = j0(f)), v2(f, m, w, !0), (f = null)),
                u.patchFlag === -2 && ((v = !1), (u.dynamicChildren = null))
            const { type: A, ref: H, shapeFlag: k } = u
            switch (A) {
                case d0:
                    I(f, u, C, E)
                    break
                case N2:
                    _(f, u, C, E)
                    break
                case L0:
                    f == null && p(u, C, E, L)
                    break
                case A2:
                    d2(f, u, C, E, m, w, L, b, v)
                    break
                default:
                    k & 1
                        ? R(f, u, C, E, m, w, L, b, v)
                        : k & 6
                        ? r2(f, u, C, E, m, w, L, b, v)
                        : (k & 64 || k & 128) && A.process(f, u, C, E, m, w, L, b, v, t0)
            }
            H != null && m && le(H, f && f.ref, w, u || f, !u)
        },
        I = (f, u, C, E) => {
            if (f == null) n((u.el = l(u.children)), C, E)
            else {
                const m = (u.el = f.el)
                u.children !== f.children && c(m, u.children)
            }
        },
        _ = (f, u, C, E) => {
            f == null ? n((u.el = a(u.children || '')), C, E) : (u.el = f.el)
        },
        p = (f, u, C, E) => {
            ;[f.el, f.anchor] = g(f.children, u, C, E, f.el, f.anchor)
        },
        y = ({ el: f, anchor: u }, C, E) => {
            let m
            for (; f && f !== u; ) (m = D(f)), n(f, C, E), (f = m)
            n(u, C, E)
        },
        S = ({ el: f, anchor: u }) => {
            let C
            for (; f && f !== u; ) (C = D(f)), s(f), (f = C)
            s(u)
        },
        R = (f, u, C, E, m, w, L, b, v) => {
            ;(L = L || u.type === 'svg'), f == null ? $(u, C, E, m, w, L, b, v) : N(f, u, m, w, L, b, v)
        },
        $ = (f, u, C, E, m, w, L, b) => {
            let v, A
            const { type: H, props: k, shapeFlag: T, transition: U, dirs: V } = f
            if (
                ((v = f.el = o(f.type, w, k && k.is, k)),
                T & 8 ? d(v, f.children) : T & 16 && M(f.children, v, null, E, m, w && H !== 'foreignObject', L, b),
                V && k2(f, null, E, 'created'),
                j(v, f, f.scopeId, L, E),
                k)
            ) {
                for (const q in k) q !== 'value' && !x0(q) && i(v, q, null, k[q], w, f.children, E, m, T2)
                'value' in k && i(v, 'value', null, k.value), (A = k.onVnodeBeforeMount) && p2(A, E, f)
            }
            V && k2(f, null, E, 'beforeMount')
            const J = (!m || (m && !m.pendingBranch)) && U && !U.persisted
            J && U.beforeEnter(v),
                n(v, u, C),
                ((A = k && k.onVnodeMounted) || J || V) &&
                    f2(() => {
                        A && p2(A, E, f), J && U.enter(v), V && k2(f, null, E, 'mounted')
                    }, m)
        },
        j = (f, u, C, E, m) => {
            if ((C && F(f, C), E)) for (let w = 0; w < E.length; w++) F(f, E[w])
            if (m) {
                let w = m.subTree
                if (u === w) {
                    const L = m.vnode
                    j(f, L, L.scopeId, L.slotScopeIds, m.parent)
                }
            }
        },
        M = (f, u, C, E, m, w, L, b, v = 0) => {
            for (let A = v; A < f.length; A++) {
                const H = (f[A] = b ? B2(f[A]) : C2(f[A]))
                x(null, H, u, C, E, m, w, L, b)
            }
        },
        N = (f, u, C, E, m, w, L) => {
            const b = (u.el = f.el)
            let { patchFlag: v, dynamicChildren: A, dirs: H } = u
            v |= f.patchFlag & 16
            const k = f.props || Y,
                T = u.props || Y
            let U
            C && W2(C, !1),
                (U = T.onVnodeBeforeUpdate) && p2(U, C, u, f),
                H && k2(u, f, C, 'beforeUpdate'),
                C && W2(C, !0)
            const V = m && u.type !== 'foreignObject'
            if ((A ? K(f.dynamicChildren, A, b, C, E, V, w) : L || z(f, u, b, null, C, E, V, w, !1), v > 0)) {
                if (v & 16) W(b, u, k, T, C, E, m)
                else if (
                    (v & 2 && k.class !== T.class && i(b, 'class', null, T.class, m),
                    v & 4 && i(b, 'style', k.style, T.style, m),
                    v & 8)
                ) {
                    const J = u.dynamicProps
                    for (let q = 0; q < J.length; q++) {
                        const n2 = J[q],
                            m2 = k[n2],
                            r0 = T[n2]
                        ;(r0 !== m2 || n2 === 'value') && i(b, n2, m2, r0, m, f.children, C, E, T2)
                    }
                }
                v & 1 && f.children !== u.children && d(b, u.children)
            } else !L && A == null && W(b, u, k, T, C, E, m)
            ;((U = T.onVnodeUpdated) || H) &&
                f2(() => {
                    U && p2(U, C, u, f), H && k2(u, f, C, 'updated')
                }, E)
        },
        K = (f, u, C, E, m, w, L) => {
            for (let b = 0; b < u.length; b++) {
                const v = f[b],
                    A = u[b],
                    H = v.el && (v.type === A2 || !I2(v, A) || v.shapeFlag & 70) ? h(v.el) : C
                x(v, A, H, null, E, m, w, L, !0)
            }
        },
        W = (f, u, C, E, m, w, L) => {
            if (C !== E) {
                if (C !== Y) for (const b in C) !x0(b) && !(b in E) && i(f, b, C[b], null, L, u.children, m, w, T2)
                for (const b in E) {
                    if (x0(b)) continue
                    const v = E[b],
                        A = C[b]
                    v !== A && b !== 'value' && i(f, b, A, v, L, u.children, m, w, T2)
                }
                'value' in E && i(f, 'value', C.value, E.value)
            }
        },
        d2 = (f, u, C, E, m, w, L, b, v) => {
            const A = (u.el = f ? f.el : l('')),
                H = (u.anchor = f ? f.anchor : l(''))
            let { patchFlag: k, dynamicChildren: T, slotScopeIds: U } = u
            U && (b = b ? b.concat(U) : U),
                f == null
                    ? (n(A, C, E), n(H, C, E), M(u.children, C, H, m, w, L, b, v))
                    : k > 0 && k & 64 && T && f.dynamicChildren
                    ? (K(f.dynamicChildren, T, C, m, w, L, b),
                      (u.key != null || (m && u === m.subTree)) && g1(f, u, !0))
                    : z(f, u, C, H, m, w, L, b, v)
        },
        r2 = (f, u, C, E, m, w, L, b, v) => {
            ;(u.slotScopeIds = b),
                f == null ? (u.shapeFlag & 512 ? m.ctx.activate(u, C, E, L, v) : O(u, C, E, m, w, L, v)) : F2(f, u, v)
        },
        O = (f, u, C, E, m, w, L) => {
            const b = (f.component = qn(f, E, m))
            if ((yt(f) && (b.ctx.renderer = t0), zn(b), b.asyncDep)) {
                if ((m && m.registerDep(b, Q), !f.el)) {
                    const v = (b.subTree = s2(N2))
                    _(null, v, u, C)
                }
                return
            }
            Q(b, f, u, C, m, w, L)
        },
        F2 = (f, u, C) => {
            const E = (u.component = f.component)
            if (tn(f, u, C))
                if (E.asyncDep && !E.asyncResolved) {
                    e2(E, u, C)
                    return
                } else (E.next = u), zr(E.update), E.update()
            else (u.el = f.el), (E.vnode = u)
        },
        Q = (f, u, C, E, m, w, L) => {
            const b = () => {
                    if (f.isMounted) {
                        let { next: H, bu: k, u: T, parent: U, vnode: V } = f,
                            J = H,
                            q
                        W2(f, !1),
                            H ? ((H.el = V.el), e2(f, H, L)) : (H = V),
                            k && ke(k),
                            (q = H.props && H.props.onVnodeBeforeUpdate) && p2(q, U, H, V),
                            W2(f, !0)
                        const n2 = Me(f),
                            m2 = f.subTree
                        ;(f.subTree = n2),
                            x(m2, n2, h(m2.el), j0(m2), f, m, w),
                            (H.el = n2.el),
                            J === null && _t(f, n2.el),
                            T && f2(T, m),
                            (q = H.props && H.props.onVnodeUpdated) && f2(() => p2(q, U, H, V), m)
                    } else {
                        let H
                        const { el: k, props: T } = u,
                            { bm: U, m: V, parent: J } = f,
                            q = F0(u)
                        if (
                            (W2(f, !1),
                            U && ke(U),
                            !q && (H = T && T.onVnodeBeforeMount) && p2(H, J, u),
                            W2(f, !0),
                            k && ve)
                        ) {
                            const n2 = () => {
                                ;(f.subTree = Me(f)), ve(k, f.subTree, f, m, null)
                            }
                            q ? u.type.__asyncLoader().then(() => !f.isUnmounted && n2()) : n2()
                        } else {
                            const n2 = (f.subTree = Me(f))
                            x(null, n2, C, E, f, m, w), (u.el = n2.el)
                        }
                        if ((V && f2(V, m), !q && (H = T && T.onVnodeMounted))) {
                            const n2 = u
                            f2(() => p2(H, J, n2), m)
                        }
                        ;(u.shapeFlag & 256 || (J && F0(J.vnode) && J.vnode.shapeFlag & 256)) && f.a && f2(f.a, m),
                            (f.isMounted = !0),
                            (u = C = E = null)
                    }
                },
                v = (f.effect = new ft(b, () => me(A), f.scope)),
                A = (f.update = () => v.run())
            ;(A.id = f.uid), W2(f, !0), A()
        },
        e2 = (f, u, C) => {
            u.component = f
            const E = f.vnode.props
            ;(f.vnode = u), (f.next = null), Hn(f, u.props, E, C), Sn(f, u.children, C), _0(), Zt(), m0()
        },
        z = (f, u, C, E, m, w, L, b, v = !1) => {
            const A = f && f.children,
                H = f ? f.shapeFlag : 0,
                k = u.children,
                { patchFlag: T, shapeFlag: U } = u
            if (T > 0) {
                if (T & 128) {
                    I0(A, k, C, E, m, w, L, b, v)
                    return
                } else if (T & 256) {
                    Z2(A, k, C, E, m, w, L, b, v)
                    return
                }
            }
            U & 8
                ? (H & 16 && T2(A, m, w), k !== A && d(C, k))
                : H & 16
                ? U & 16
                    ? I0(A, k, C, E, m, w, L, b, v)
                    : T2(A, m, w, !0)
                : (H & 8 && d(C, ''), U & 16 && M(k, C, E, m, w, L, b, v))
        },
        Z2 = (f, u, C, E, m, w, L, b, v) => {
            ;(f = f || o0), (u = u || o0)
            const A = f.length,
                H = u.length,
                k = Math.min(A, H)
            let T
            for (T = 0; T < k; T++) {
                const U = (u[T] = v ? B2(u[T]) : C2(u[T]))
                x(f[T], U, C, null, m, w, L, b, v)
            }
            A > H ? T2(f, m, w, !0, !1, k) : M(u, C, E, m, w, L, b, v, k)
        },
        I0 = (f, u, C, E, m, w, L, b, v) => {
            let A = 0
            const H = u.length
            let k = f.length - 1,
                T = H - 1
            for (; A <= k && A <= T; ) {
                const U = f[A],
                    V = (u[A] = v ? B2(u[A]) : C2(u[A]))
                if (I2(U, V)) x(U, V, C, null, m, w, L, b, v)
                else break
                A++
            }
            for (; A <= k && A <= T; ) {
                const U = f[k],
                    V = (u[T] = v ? B2(u[T]) : C2(u[T]))
                if (I2(U, V)) x(U, V, C, null, m, w, L, b, v)
                else break
                k--, T--
            }
            if (A > k) {
                if (A <= T) {
                    const U = T + 1,
                        V = U < H ? u[U].el : E
                    for (; A <= T; ) x(null, (u[A] = v ? B2(u[A]) : C2(u[A])), C, V, m, w, L, b, v), A++
                }
            } else if (A > T) for (; A <= k; ) v2(f[A], m, w, !0), A++
            else {
                const U = A,
                    V = A,
                    J = new Map()
                for (A = V; A <= T; A++) {
                    const h2 = (u[A] = v ? B2(u[A]) : C2(u[A]))
                    h2.key != null && J.set(h2.key, A)
                }
                let q,
                    n2 = 0
                const m2 = T - V + 1
                let r0 = !1,
                    Ot = 0
                const y0 = new Array(m2)
                for (A = 0; A < m2; A++) y0[A] = 0
                for (A = U; A <= k; A++) {
                    const h2 = f[A]
                    if (n2 >= m2) {
                        v2(h2, m, w, !0)
                        continue
                    }
                    let L2
                    if (h2.key != null) L2 = J.get(h2.key)
                    else
                        for (q = V; q <= T; q++)
                            if (y0[q - V] === 0 && I2(h2, u[q])) {
                                L2 = q
                                break
                            }
                    L2 === void 0
                        ? v2(h2, m, w, !0)
                        : ((y0[L2 - V] = A + 1),
                          L2 >= Ot ? (Ot = L2) : (r0 = !0),
                          x(h2, u[L2], C, null, m, w, L, b, v),
                          n2++)
                }
                const St = r0 ? jn(y0) : o0
                for (q = St.length - 1, A = m2 - 1; A >= 0; A--) {
                    const h2 = V + A,
                        L2 = u[h2],
                        Rt = h2 + 1 < H ? u[h2 + 1].el : E
                    y0[A] === 0
                        ? x(null, L2, C, Rt, m, w, L, b, v)
                        : r0 && (q < 0 || A !== St[q] ? G2(L2, C, Rt, 2) : q--)
                }
            }
        },
        G2 = (f, u, C, E, m = null) => {
            const { el: w, type: L, transition: b, children: v, shapeFlag: A } = f
            if (A & 6) {
                G2(f.component.subTree, u, C, E)
                return
            }
            if (A & 128) {
                f.suspense.move(u, C, E)
                return
            }
            if (A & 64) {
                L.move(f, u, C, t0)
                return
            }
            if (L === A2) {
                n(w, u, C)
                for (let k = 0; k < v.length; k++) G2(v[k], u, C, E)
                n(f.anchor, u, C)
                return
            }
            if (L === L0) {
                y(f, u, C)
                return
            }
            if (E !== 2 && A & 1 && b)
                if (E === 0) b.beforeEnter(w), n(w, u, C), f2(() => b.enter(w), m)
                else {
                    const { leave: k, delayLeave: T, afterLeave: U } = b,
                        V = () => n(w, u, C),
                        J = () => {
                            k(w, () => {
                                V(), U && U()
                            })
                        }
                    T ? T(w, V, J) : J()
                }
            else n(w, u, C)
        },
        v2 = (f, u, C, E = !1, m = !1) => {
            const {
                type: w,
                props: L,
                ref: b,
                children: v,
                dynamicChildren: A,
                shapeFlag: H,
                patchFlag: k,
                dirs: T,
            } = f
            if ((b != null && le(b, null, C, f, !0), H & 256)) {
                u.ctx.deactivate(f)
                return
            }
            const U = H & 1 && T,
                V = !F0(f)
            let J
            if ((V && (J = L && L.onVnodeBeforeUnmount) && p2(J, u, f), H & 6)) K1(f.component, C, E)
            else {
                if (H & 128) {
                    f.suspense.unmount(C, E)
                    return
                }
                U && k2(f, null, u, 'beforeUnmount'),
                    H & 64
                        ? f.type.remove(f, u, C, m, t0, E)
                        : A && (w !== A2 || (k > 0 && k & 64))
                        ? T2(A, u, C, !1, !0)
                        : ((w === A2 && k & 384) || (!m && H & 16)) && T2(v, u, C),
                    E && Ht(f)
            }
            ;((V && (J = L && L.onVnodeUnmounted)) || U) &&
                f2(() => {
                    J && p2(J, u, f), U && k2(f, null, u, 'unmounted')
                }, C)
        },
        Ht = (f) => {
            const { type: u, el: C, anchor: E, transition: m } = f
            if (u === A2) {
                W1(C, E)
                return
            }
            if (u === L0) {
                S(f)
                return
            }
            const w = () => {
                s(C), m && !m.persisted && m.afterLeave && m.afterLeave()
            }
            if (f.shapeFlag & 1 && m && !m.persisted) {
                const { leave: L, delayLeave: b } = m,
                    v = () => L(C, w)
                b ? b(f.el, w, v) : v()
            } else w()
        },
        W1 = (f, u) => {
            let C
            for (; f !== u; ) (C = D(f)), s(f), (f = C)
            s(u)
        },
        K1 = (f, u, C) => {
            const { bum: E, scope: m, update: w, subTree: L, um: b } = f
            E && ke(E),
                m.stop(),
                w && ((w.active = !1), v2(L, f, u, C)),
                b && f2(b, u),
                f2(() => {
                    f.isUnmounted = !0
                }, u),
                u &&
                    u.pendingBranch &&
                    !u.isUnmounted &&
                    f.asyncDep &&
                    !f.asyncResolved &&
                    f.suspenseId === u.pendingId &&
                    (u.deps--, u.deps === 0 && u.resolve())
        },
        T2 = (f, u, C, E = !1, m = !1, w = 0) => {
            for (let L = w; L < f.length; L++) v2(f[L], u, C, E, m)
        },
        j0 = (f) =>
            f.shapeFlag & 6 ? j0(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : D(f.anchor || f.el),
        Tt = (f, u, C) => {
            f == null ? u._vnode && v2(u._vnode, null, null, !0) : x(u._vnode || null, f, u, null, null, null, C),
                Zt(),
                se(),
                (u._vnode = f)
        },
        t0 = { p: x, um: v2, m: G2, r: Ht, mt: O, mc: M, pc: z, pbc: K, n: j0, o: e }
    let Fe, ve
    return t && ([Fe, ve] = t(t0)), { render: Tt, hydrate: Fe, createApp: Un(Tt, Fe) }
}
function W2({ effect: e, update: t }, r) {
    e.allowRecurse = t.allowRecurse = r
}
function g1(e, t, r = !1) {
    const n = e.children,
        s = t.children
    if (B(n) && B(s))
        for (let i = 0; i < n.length; i++) {
            const o = n[i]
            let l = s[i]
            l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = s[i] = B2(s[i])), (l.el = o.el)), r || g1(o, l)),
                l.type === d0 && (l.el = o.el)
        }
}
function jn(e) {
    const t = e.slice(),
        r = [0]
    let n, s, i, o, l
    const a = e.length
    for (n = 0; n < a; n++) {
        const c = e[n]
        if (c !== 0) {
            if (((s = r[r.length - 1]), e[s] < c)) {
                ;(t[n] = s), r.push(n)
                continue
            }
            for (i = 0, o = r.length - 1; i < o; ) (l = (i + o) >> 1), e[r[l]] < c ? (i = l + 1) : (o = l)
            c < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), (r[i] = n))
        }
    }
    for (i = r.length, o = r[i - 1]; i-- > 0; ) (r[i] = o), (o = t[o])
    return r
}
const $n = (e) => e.__isTeleport,
    A2 = Symbol(void 0),
    d0 = Symbol(void 0),
    N2 = Symbol(void 0),
    L0 = Symbol(void 0),
    k0 = []
let D2 = null
function s0(e = !1) {
    k0.push((D2 = e ? null : []))
}
function D1() {
    k0.pop(), (D2 = k0[k0.length - 1] || null)
}
let h0 = 1
function e3(e) {
    h0 += e
}
function _1(e) {
    return (e.dynamicChildren = h0 > 0 ? D2 || o0 : null), D1(), h0 > 0 && D2 && D2.push(e), e
}
function Vn(e, t, r, n, s, i) {
    return _1(z2(e, t, r, n, s, i, !0))
}
function z0(e, t, r, n, s) {
    return _1(s2(e, t, r, n, s, !0))
}
function ae(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function I2(e, t) {
    return e.type === t.type && e.key === t.key
}
const be = '__vInternal',
    m1 = ({ key: e }) => e ?? null,
    ee = ({ ref: e, ref_key: t, ref_for: r }) =>
        e != null ? (i2(e) || o2(e) || P(e) ? { i: g2, r: e, k: t, f: !!r } : e) : null
function z2(e, t = null, r = null, n = 0, s = null, i = e === A2 ? 0 : 1, o = !1, l = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && m1(t),
        ref: t && ee(t),
        scopeId: ye,
        slotScopeIds: null,
        children: r,
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
        patchFlag: n,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: g2,
    }
    return (
        l ? (wt(a, r), i & 128 && e.normalize(a)) : r && (a.shapeFlag |= i2(r) ? 8 : 16),
        h0 > 0 && !o && D2 && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && D2.push(a),
        a
    )
}
const s2 = Nn
function Nn(e, t = null, r = null, n = 0, s = null, i = !1) {
    if (((!e || e === An) && (e = N2), ae(e))) {
        const l = p0(e, t, !0)
        return (
            r && wt(l, r),
            h0 > 0 && !i && D2 && (l.shapeFlag & 6 ? (D2[D2.indexOf(e)] = l) : D2.push(l)),
            (l.patchFlag |= -2),
            l
        )
    }
    if ((es(e) && (e = e.__vccOpts), t)) {
        t = Zn(t)
        let { class: l, style: a } = t
        l && !i2(l) && (t.class = pe(l)), X(a) && (I3(a) && !B(a) && (a = c2({}, a)), (t.style = he(a)))
    }
    const o = i2(e) ? 1 : rn(e) ? 128 : $n(e) ? 64 : X(e) ? 4 : P(e) ? 2 : 0
    return z2(e, t, r, n, s, o, i, !0)
}
function Zn(e) {
    return e ? (I3(e) || be in e ? c2({}, e) : e) : null
}
function p0(e, t, r = !1) {
    const { props: n, ref: s, patchFlag: i, children: o } = e,
        l = t ? Gn(n || {}, t) : n
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && m1(l),
        ref: t && t.ref ? (r && s ? (B(s) ? s.concat(ee(t)) : [s, ee(t)]) : ee(t)) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== A2 ? (i === -1 ? 16 : i | 16) : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && p0(e.ssContent),
        ssFallback: e.ssFallback && p0(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
    }
}
function E1(e = ' ', t = 0) {
    return s2(d0, null, e, t)
}
function xt(e, t) {
    const r = s2(L0, null, e)
    return (r.staticCount = t), r
}
function C2(e) {
    return e == null || typeof e == 'boolean'
        ? s2(N2)
        : B(e)
        ? s2(A2, null, e.slice())
        : typeof e == 'object'
        ? B2(e)
        : s2(d0, null, String(e))
}
function B2(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : p0(e)
}
function wt(e, t) {
    let r = 0
    const { shapeFlag: n } = e
    if (t == null) t = null
    else if (B(t)) r = 16
    else if (typeof t == 'object')
        if (n & 65) {
            const s = t.default
            s && (s._c && (s._d = !1), wt(e, s()), s._c && (s._d = !0))
            return
        } else {
            r = 32
            const s = t._
            !s && !(be in t)
                ? (t._ctx = g2)
                : s === 3 && g2 && (g2.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        }
    else
        P(t)
            ? ((t = { default: t, _ctx: g2 }), (r = 32))
            : ((t = String(t)), n & 64 ? ((r = 16), (t = [E1(t)])) : (r = 8))
    ;(e.children = t), (e.shapeFlag |= r)
}
function Gn(...e) {
    const t = {}
    for (let r = 0; r < e.length; r++) {
        const n = e[r]
        for (const s in n)
            if (s === 'class') t.class !== n.class && (t.class = pe([t.class, n.class]))
            else if (s === 'style') t.style = he([t.style, n.style])
            else if (U0(s)) {
                const i = t[s],
                    o = n[s]
                o && i !== o && !(B(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o)
            } else s !== '' && (t[s] = n[s])
    }
    return t
}
function p2(e, t, r, n = null) {
    w2(e, t, 7, [r, n])
}
const Wn = p1()
let Kn = 0
function qn(e, t, r) {
    const n = e.type,
        s = (t ? t.appContext : e.appContext) || Wn,
        i = {
            uid: Kn++,
            vnode: e,
            type: n,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new fr(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: f1(n, s),
            emitsOptions: J3(n, s),
            emit: null,
            emitted: null,
            propsDefaults: Y,
            inheritAttrs: n.inheritAttrs,
            ctx: Y,
            data: Y,
            props: Y,
            attrs: Y,
            slots: Y,
            refs: Y,
            setupState: Y,
            setupContext: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
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
        }
    return (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = Qr.bind(null, i)), e.ce && e.ce(i), i
}
let t2 = null
const xe = () => t2 || g2,
    C0 = (e) => {
        ;(t2 = e), e.scope.on()
    },
    Y2 = () => {
        t2 && t2.scope.off(), (t2 = null)
    }
function y1(e) {
    return e.vnode.shapeFlag & 4
}
let g0 = !1
function zn(e, t = !1) {
    g0 = t
    const { props: r, children: n } = e.vnode,
        s = y1(e)
    Mn(e, r, s, t), On(e, n)
    const i = s ? Jn(e, t) : void 0
    return (g0 = !1), i
}
function Jn(e, t) {
    const r = e.type
    ;(e.accessCache = Object.create(null)), (e.proxy = j3(new Proxy(e.ctx, xn)))
    const { setup: n } = r
    if (n) {
        const s = (e.setupContext = n.length > 1 ? Yn(e) : null)
        C0(e), _0()
        const i = $2(n, e, 0, [e.props, s])
        if ((m0(), Y2(), w3(i))) {
            if ((i.then(Y2, Y2), t))
                return i
                    .then((o) => {
                        qe(e, o, t)
                    })
                    .catch((o) => {
                        E0(o, e, 0)
                    })
            e.asyncDep = i
        } else qe(e, i, t)
    } else A1(e, t)
}
function qe(e, t, r) {
    P(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : X(t) && (e.setupState = N3(t)), A1(e, r)
}
let t3
function A1(e, t, r) {
    const n = e.type
    if (!e.render) {
        if (!t && t3 && !n.render) {
            const s = n.template || At(e).template
            if (s) {
                const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
                    { delimiters: l, compilerOptions: a } = n,
                    c = c2(c2({ isCustomElement: i, delimiters: l }, o), a)
                n.render = t3(s, c)
            }
        }
        e.render = n.render || x2
    }
    C0(e), _0(), wn(e), m0(), Y2()
}
function Qn(e) {
    return new Proxy(e.attrs, {
        get(t, r) {
            return u2(e, 'get', '$attrs'), t[r]
        },
    })
}
function Yn(e) {
    const t = (n) => {
        e.exposed = n || {}
    }
    let r
    return {
        get attrs() {
            return r || (r = Qn(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t,
    }
}
function Ft(e) {
    if (e.exposed)
        return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy(N3(j3(e.exposed)), {
                get(t, r) {
                    if (r in t) return t[r]
                    if (r in v0) return v0[r](e)
                },
                has(t, r) {
                    return r in t || r in v0
                },
            }))
        )
}
function Xn(e, t = !0) {
    return P(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function es(e) {
    return P(e) && '__vccOpts' in e
}
const ts = (e, t) => Wr(e, t, g0)
function rs(e, t, r) {
    const n = arguments.length
    return n === 2
        ? X(t) && !B(t)
            ? ae(t)
                ? s2(e, null, [t])
                : s2(e, t)
            : s2(e, null, t)
        : (n > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : n === 3 && ae(r) && (r = [r]), s2(e, t, r))
}
const ns = Symbol(''),
    ss = () => u0(ns),
    b1 = '3.2.47',
    is = 'http://www.w3.org/2000/svg',
    J2 = typeof document < 'u' ? document : null,
    r3 = J2 && J2.createElement('template'),
    os = {
        insert: (e, t, r) => {
            t.insertBefore(e, r || null)
        },
        remove: (e) => {
            const t = e.parentNode
            t && t.removeChild(e)
        },
        createElement: (e, t, r, n) => {
            const s = t ? J2.createElementNS(is, e) : J2.createElement(e, r ? { is: r } : void 0)
            return e === 'select' && n && n.multiple != null && s.setAttribute('multiple', n.multiple), s
        },
        createText: (e) => J2.createTextNode(e),
        createComment: (e) => J2.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => J2.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, '')
        },
        insertStaticContent(e, t, r, n, s, i) {
            const o = r ? r.previousSibling : t.lastChild
            if (s && (s === i || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), r), !(s === i || !(s = s.nextSibling)); );
            else {
                r3.innerHTML = n ? `<svg>${e}</svg>` : e
                const l = r3.content
                if (n) {
                    const a = l.firstChild
                    for (; a.firstChild; ) l.appendChild(a.firstChild)
                    l.removeChild(a)
                }
                t.insertBefore(l, r)
            }
            return [o ? o.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
        },
    }
function ls(e, t, r) {
    const n = e._vtc
    n && (t = (t ? [t, ...n] : [...n]).join(' ')),
        t == null ? e.removeAttribute('class') : r ? e.setAttribute('class', t) : (e.className = t)
}
function as(e, t, r) {
    const n = e.style,
        s = i2(r)
    if (r && !s) {
        if (t && !i2(t)) for (const i in t) r[i] == null && ze(n, i, '')
        for (const i in r) ze(n, i, r[i])
    } else {
        const i = n.display
        s ? t !== r && (n.cssText = r) : t && e.removeAttribute('style'), '_vod' in e && (n.display = i)
    }
}
const n3 = /\s*!important$/
function ze(e, t, r) {
    if (B(r)) r.forEach((n) => ze(e, t, n))
    else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r)
    else {
        const n = cs(e, t)
        n3.test(r) ? e.setProperty(D0(n), r.replace(n3, ''), 'important') : (e[n] = r)
    }
}
const s3 = ['Webkit', 'Moz', 'ms'],
    Oe = {}
function cs(e, t) {
    const r = Oe[t]
    if (r) return r
    let n = H2(t)
    if (n !== 'filter' && n in e) return (Oe[t] = n)
    n = De(n)
    for (let s = 0; s < s3.length; s++) {
        const i = s3[s] + n
        if (i in e) return (Oe[t] = i)
    }
    return t
}
const i3 = 'http://www.w3.org/1999/xlink'
function fs(e, t, r, n, s) {
    if (n && t.startsWith('xlink:'))
        r == null ? e.removeAttributeNS(i3, t.slice(6, t.length)) : e.setAttributeNS(i3, t, r)
    else {
        const i = X1(t)
        r == null || (i && !A3(r)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : r)
    }
}
function us(e, t, r, n, s, i, o) {
    if (t === 'innerHTML' || t === 'textContent') {
        n && o(n, s, i), (e[t] = r ?? '')
        return
    }
    if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
        e._value = r
        const a = r ?? ''
        ;(e.value !== a || e.tagName === 'OPTION') && (e.value = a), r == null && e.removeAttribute(t)
        return
    }
    let l = !1
    if (r === '' || r == null) {
        const a = typeof e[t]
        a === 'boolean'
            ? (r = A3(r))
            : r == null && a === 'string'
            ? ((r = ''), (l = !0))
            : a === 'number' && ((r = 0), (l = !0))
    }
    try {
        e[t] = r
    } catch {}
    l && e.removeAttribute(t)
}
function ds(e, t, r, n) {
    e.addEventListener(t, r, n)
}
function hs(e, t, r, n) {
    e.removeEventListener(t, r, n)
}
function ps(e, t, r, n, s = null) {
    const i = e._vei || (e._vei = {}),
        o = i[t]
    if (n && o) o.value = n
    else {
        const [l, a] = Cs(t)
        if (n) {
            const c = (i[t] = _s(n, s))
            ds(e, l, c, a)
        } else o && (hs(e, l, o, a), (i[t] = void 0))
    }
}
const o3 = /(?:Once|Passive|Capture)$/
function Cs(e) {
    let t
    if (o3.test(e)) {
        t = {}
        let n
        for (; (n = e.match(o3)); ) (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
    }
    return [e[2] === ':' ? e.slice(3) : D0(e.slice(2)), t]
}
let Se = 0
const gs = Promise.resolve(),
    Ds = () => Se || (gs.then(() => (Se = 0)), (Se = Date.now()))
function _s(e, t) {
    const r = (n) => {
        if (!n._vts) n._vts = Date.now()
        else if (n._vts <= r.attached) return
        w2(ms(n, r.value), t, 5, [n])
    }
    return (r.value = e), (r.attached = Ds()), r
}
function ms(e, t) {
    if (B(t)) {
        const r = e.stopImmediatePropagation
        return (
            (e.stopImmediatePropagation = () => {
                r.call(e), (e._stopped = !0)
            }),
            t.map((n) => (s) => !s._stopped && n && n(s))
        )
    } else return t
}
const l3 = /^on[a-z]/,
    Es = (e, t, r, n, s = !1, i, o, l, a) => {
        t === 'class'
            ? ls(e, n, s)
            : t === 'style'
            ? as(e, r, n)
            : U0(t)
            ? it(t) || ps(e, t, r, n, o)
            : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : ys(e, t, n, s))
            ? us(e, t, n, i, o, l, a)
            : (t === 'true-value' ? (e._trueValue = n) : t === 'false-value' && (e._falseValue = n), fs(e, t, n, s))
    }
function ys(e, t, r, n) {
    return n
        ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && l3.test(t) && P(r)))
        : t === 'spellcheck' ||
          t === 'draggable' ||
          t === 'translate' ||
          t === 'form' ||
          (t === 'list' && e.tagName === 'INPUT') ||
          (t === 'type' && e.tagName === 'TEXTAREA') ||
          (l3.test(t) && i2(r))
        ? !1
        : t in e
}
const x1 = c2({ patchProp: Es }, os)
let M0,
    a3 = !1
function As() {
    return M0 || (M0 = Bn(x1))
}
function bs() {
    return (M0 = a3 ? M0 : In(x1)), (a3 = !0), M0
}
const xs = (...e) => {
        const t = As().createApp(...e),
            { mount: r } = t
        return (
            (t.mount = (n) => {
                const s = w1(n)
                if (!s) return
                const i = t._component
                !P(i) && !i.render && !i.template && (i.template = s.innerHTML), (s.innerHTML = '')
                const o = r(s, !1, s instanceof SVGElement)
                return s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), o
            }),
            t
        )
    },
    ws = (...e) => {
        const t = bs().createApp(...e),
            { mount: r } = t
        return (
            (t.mount = (n) => {
                const s = w1(n)
                if (s) return r(s, !0, s instanceof SVGElement)
            }),
            t
        )
    }
function w1(e) {
    return i2(e) ? document.querySelector(e) : e
}
const Fs =
        /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    vs =
        /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Ls = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/
function ks(e, t) {
    if (e !== '__proto__' && !(e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) return t
}
function Ms(e, t = {}) {
    if (typeof e != 'string') return e
    const r = e.toLowerCase().trim()
    if (r === 'true') return !0
    if (r === 'false') return !1
    if (r === 'null') return null
    if (r === 'nan') return Number.NaN
    if (r === 'infinity') return Number.POSITIVE_INFINITY
    if (r !== 'undefined') {
        if (!Ls.test(e)) {
            if (t.strict) throw new SyntaxError('Invalid JSON')
            return e
        }
        try {
            return Fs.test(e) || vs.test(e) ? JSON.parse(e, ks) : JSON.parse(e)
        } catch (n) {
            if (t.strict) throw n
            return e
        }
    }
}
const Hs = /#/g,
    Ts = /&/g,
    Os = /=/g,
    F1 = /\+/g,
    Ss = /%5e/gi,
    Rs = /%60/gi,
    Us = /%7c/gi,
    Ps = /%20/gi
function Bs(e) {
    return encodeURI('' + e).replace(Us, '|')
}
function Je(e) {
    return Bs(typeof e == 'string' ? e : JSON.stringify(e))
        .replace(F1, '%2B')
        .replace(Ps, '+')
        .replace(Hs, '%23')
        .replace(Ts, '%26')
        .replace(Rs, '`')
        .replace(Ss, '^')
}
function Re(e) {
    return Je(e).replace(Os, '%3D')
}
function ce(e = '') {
    try {
        return decodeURIComponent('' + e)
    } catch {
        return '' + e
    }
}
function Is(e) {
    return ce(e.replace(F1, ' '))
}
function v1(e = '') {
    const t = {}
    e[0] === '?' && (e = e.slice(1))
    for (const r of e.split('&')) {
        const n = r.match(/([^=]+)=?(.*)/) || []
        if (n.length < 2) continue
        const s = ce(n[1])
        if (s === '__proto__' || s === 'constructor') continue
        const i = Is(n[2] || '')
        typeof t[s] < 'u' ? (Array.isArray(t[s]) ? t[s].push(i) : (t[s] = [t[s], i])) : (t[s] = i)
    }
    return t
}
function js(e, t) {
    return (
        (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
        t ? (Array.isArray(t) ? t.map((r) => `${Re(e)}=${Je(r)}`).join('&') : `${Re(e)}=${Je(t)}`) : Re(e)
    )
}
function L1(e) {
    return Object.keys(e)
        .filter((t) => e[t] !== void 0)
        .map((t) => js(t, e[t]))
        .join('&')
}
const $s = /^\w{2,}:([/\\]{1,2})/,
    Vs = /^\w{2,}:([/\\]{2})?/,
    Ns = /^([/\\]\s*){2,}[^/\\]/
function vt(e, t = {}) {
    return (
        typeof t == 'boolean' && (t = { acceptRelative: t }),
        t.strict ? $s.test(e) : Vs.test(e) || (t.acceptRelative ? Ns.test(e) : !1)
    )
}
const Zs = /\/$|\/\?/
function Qe(e = '', t = !1) {
    return t ? Zs.test(e) : e.endsWith('/')
}
function k1(e = '', t = !1) {
    if (!t) return (Qe(e) ? e.slice(0, -1) : e) || '/'
    if (!Qe(e, !0)) return e || '/'
    const [r, ...n] = e.split('?')
    return (r.slice(0, -1) || '/') + (n.length > 0 ? `?${n.join('?')}` : '')
}
function Ye(e = '', t = !1) {
    if (!t) return e.endsWith('/') ? e : e + '/'
    if (Qe(e, !0)) return e || '/'
    const [r, ...n] = e.split('?')
    return r + '/' + (n.length > 0 ? `?${n.join('?')}` : '')
}
function M1(e = '') {
    return e.startsWith('/')
}
function Gs(e = '') {
    return (M1(e) ? e.slice(1) : e) || '/'
}
function c3(e = '') {
    return M1(e) ? e : '/' + e
}
function Ws(e, t) {
    if (H1(t) || vt(e)) return e
    const r = k1(t)
    return e.startsWith(r) ? e : P0(r, e)
}
function Ks(e, t) {
    if (H1(t)) return e
    const r = k1(t)
    if (!e.startsWith(r)) return e
    const n = e.slice(r.length)
    return n[0] === '/' ? n : '/' + n
}
function qs(e, t) {
    const r = we(e),
        n = { ...v1(r.search), ...t }
    return (r.search = L1(n)), T1(r)
}
function H1(e) {
    return !e || e === '/'
}
function zs(e) {
    return e && e !== '/'
}
function P0(e, ...t) {
    let r = e || ''
    for (const n of t.filter((s) => zs(s))) r = r ? Ye(r) + Gs(n) : n
    return r
}
function Js(e, t, r = {}) {
    return (
        r.trailingSlash || ((e = Ye(e)), (t = Ye(t))),
        r.leadingSlash || ((e = c3(e)), (t = c3(t))),
        r.encoding || ((e = ce(e)), (t = ce(t))),
        e === t
    )
}
function we(e = '', t) {
    if (!vt(e, { acceptRelative: !0 })) return t ? we(t + e) : f3(e)
    const [r = '', n, s = ''] = (e.replace(/\\/g, '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1),
        [i = '', o = ''] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
        { pathname: l, search: a, hash: c } = f3(o.replace(/\/(?=[A-Za-z]:)/, ''))
    return {
        protocol: r,
        auth: n ? n.slice(0, Math.max(0, n.length - 1)) : '',
        host: i,
        pathname: l,
        search: a,
        hash: c,
    }
}
function f3(e = '') {
    const [t = '', r = '', n = ''] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1)
    return { pathname: t, search: r, hash: n }
}
function T1(e) {
    const t = e.pathname + (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') + e.hash
    return e.protocol ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t : t
}
class Qs extends Error {
    constructor() {
        super(...arguments), (this.name = 'FetchError')
    }
}
function Ys(e, t, r) {
    let n = ''
    t && (n = t.message),
        e && r ? (n = `${n} (${r.status} ${r.statusText} (${e.toString()}))`) : e && (n = `${n} (${e.toString()})`)
    const s = new Qs(n)
    return (
        Object.defineProperty(s, 'request', {
            get() {
                return e
            },
        }),
        Object.defineProperty(s, 'response', {
            get() {
                return r
            },
        }),
        Object.defineProperty(s, 'data', {
            get() {
                return r && r._data
            },
        }),
        Object.defineProperty(s, 'status', {
            get() {
                return r && r.status
            },
        }),
        Object.defineProperty(s, 'statusText', {
            get() {
                return r && r.statusText
            },
        }),
        Object.defineProperty(s, 'statusCode', {
            get() {
                return r && r.status
            },
        }),
        Object.defineProperty(s, 'statusMessage', {
            get() {
                return r && r.statusText
            },
        }),
        s
    )
}
const Xs = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function u3(e = 'GET') {
    return Xs.has(e.toUpperCase())
}
function ei(e) {
    if (e === void 0) return !1
    const t = typeof e
    return t === 'string' || t === 'number' || t === 'boolean' || t === null
        ? !0
        : t !== 'object'
        ? !1
        : Array.isArray(e)
        ? !0
        : (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function'
}
const ti = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
    ri = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function ni(e = '') {
    if (!e) return 'json'
    const t = e.split(';').shift() || ''
    return ri.test(t) ? 'json' : ti.has(t) || t.startsWith('text/') ? 'text' : 'blob'
}
const si = new Set([408, 409, 425, 429, 500, 502, 503, 504])
function O1(e) {
    const { fetch: t, Headers: r } = e
    function n(o) {
        const l = (o.error && o.error.name === 'AbortError') || !1
        if (o.options.retry !== !1 && !l) {
            let c
            typeof o.options.retry == 'number' ? (c = o.options.retry) : (c = u3(o.options.method) ? 0 : 1)
            const d = (o.response && o.response.status) || 500
            if (c > 0 && si.has(d)) return s(o.request, { ...o.options, retry: c - 1 })
        }
        const a = Ys(o.request, o.error, o.response)
        throw (Error.captureStackTrace && Error.captureStackTrace(a, s), a)
    }
    const s = async function (l, a = {}) {
            const c = { request: l, options: { ...e.defaults, ...a }, response: void 0, error: void 0 }
            c.options.onRequest && (await c.options.onRequest(c)),
                typeof c.request == 'string' &&
                    (c.options.baseURL && (c.request = Ws(c.request, c.options.baseURL)),
                    (c.options.query || c.options.params) &&
                        (c.request = qs(c.request, { ...c.options.params, ...c.options.query })),
                    c.options.body &&
                        u3(c.options.method) &&
                        ei(c.options.body) &&
                        ((c.options.body =
                            typeof c.options.body == 'string' ? c.options.body : JSON.stringify(c.options.body)),
                        (c.options.headers = new r(c.options.headers)),
                        c.options.headers.has('content-type') ||
                            c.options.headers.set('content-type', 'application/json'),
                        c.options.headers.has('accept') || c.options.headers.set('accept', 'application/json'))),
                (c.response = await t(c.request, c.options).catch(
                    async (h) => ((c.error = h), c.options.onRequestError && (await c.options.onRequestError(c)), n(c))
                ))
            const d =
                (c.options.parseResponse ? 'json' : c.options.responseType) ||
                ni(c.response.headers.get('content-type') || '')
            if (d === 'json') {
                const h = await c.response.text(),
                    D = c.options.parseResponse || Ms
                c.response._data = D(h)
            } else d === 'stream' ? (c.response._data = c.response.body) : (c.response._data = await c.response[d]())
            return (
                c.options.onResponse && (await c.options.onResponse(c)),
                c.response.status >= 400 && c.response.status < 600
                    ? (c.options.onResponseError && (await c.options.onResponseError(c)), n(c))
                    : c.response
            )
        },
        i = function (l, a) {
            return s(l, a).then((c) => c._data)
        }
    return (i.raw = s), (i.native = t), (i.create = (o = {}) => O1({ ...e, defaults: { ...e.defaults, ...o } })), i
}
const S1 = (function () {
        if (typeof globalThis < 'u') return globalThis
        if (typeof self < 'u') return self
        if (typeof window < 'u') return window
        if (typeof global < 'u') return global
        throw new Error('unable to locate global object')
    })(),
    ii = S1.fetch || (() => Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
    oi = S1.Headers,
    li = O1({ fetch: ii, Headers: oi }),
    ai = li,
    ci = () => {
        var e
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    fe = ci().app,
    fi = () => fe.baseURL,
    ui = () => fe.buildAssetsDir,
    di = (...e) => P0(R1(), ui(), ...e),
    R1 = (...e) => {
        const t = fe.cdnURL || fe.baseURL
        return e.length ? P0(t, ...e) : t
    }
;(globalThis.__buildAssetsURL = di), (globalThis.__publicAssetsURL = R1)
function Xe(e, t = {}, r) {
    for (const n in e) {
        const s = e[n],
            i = r ? `${r}:${n}` : n
        typeof s == 'object' && s !== null ? Xe(s, t, i) : typeof s == 'function' && (t[i] = s)
    }
    return t
}
const hi = { run: (e) => e() },
    pi = () => hi,
    U1 = typeof console.createTask < 'u' ? console.createTask : pi
function Ci(e, t) {
    const r = t.shift(),
        n = U1(r)
    return e.reduce((s, i) => s.then(() => n.run(() => i(...t))), Promise.resolve())
}
function gi(e, t) {
    const r = t.shift(),
        n = U1(r)
    return Promise.all(e.map((s) => n.run(() => s(...t))))
}
function Ue(e, t) {
    for (const r of [...e]) r(t)
}
class Di {
    constructor() {
        ;(this._hooks = {}),
            (this._before = void 0),
            (this._after = void 0),
            (this._deprecatedMessages = void 0),
            (this._deprecatedHooks = {}),
            (this.hook = this.hook.bind(this)),
            (this.callHook = this.callHook.bind(this)),
            (this.callHookWith = this.callHookWith.bind(this))
    }
    hook(t, r, n = {}) {
        if (!t || typeof r != 'function') return () => {}
        const s = t
        let i
        for (; this._deprecatedHooks[t]; ) (i = this._deprecatedHooks[t]), (t = i.to)
        if (i && !n.allowDeprecated) {
            let o = i.message
            o || (o = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : '')),
                this._deprecatedMessages || (this._deprecatedMessages = new Set()),
                this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o))
        }
        if (!r.name)
            try {
                Object.defineProperty(r, 'name', {
                    get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
                    configurable: !0,
                })
            } catch {}
        return (
            (this._hooks[t] = this._hooks[t] || []),
            this._hooks[t].push(r),
            () => {
                r && (this.removeHook(t, r), (r = void 0))
            }
        )
    }
    hookOnce(t, r) {
        let n,
            s = (...i) => (typeof n == 'function' && n(), (n = void 0), (s = void 0), r(...i))
        return (n = this.hook(t, s)), n
    }
    removeHook(t, r) {
        if (this._hooks[t]) {
            const n = this._hooks[t].indexOf(r)
            n !== -1 && this._hooks[t].splice(n, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, r) {
        this._deprecatedHooks[t] = typeof r == 'string' ? { to: r } : r
        const n = this._hooks[t] || []
        delete this._hooks[t]
        for (const s of n) this.hook(t, s)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t)
        for (const r in t) this.deprecateHook(r, t[r])
    }
    addHooks(t) {
        const r = Xe(t),
            n = Object.keys(r).map((s) => this.hook(s, r[s]))
        return () => {
            for (const s of n.splice(0, n.length)) s()
        }
    }
    removeHooks(t) {
        const r = Xe(t)
        for (const n in r) this.removeHook(n, r[n])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...r) {
        return r.unshift(t), this.callHookWith(Ci, t, ...r)
    }
    callHookParallel(t, ...r) {
        return r.unshift(t), this.callHookWith(gi, t, ...r)
    }
    callHookWith(t, r, ...n) {
        const s = this._before || this._after ? { name: r, args: n, context: {} } : void 0
        this._before && Ue(this._before, s)
        const i = t(r in this._hooks ? [...this._hooks[r]] : [], n)
        return i instanceof Promise
            ? i.finally(() => {
                  this._after && s && Ue(this._after, s)
              })
            : (this._after && s && Ue(this._after, s), i)
    }
    beforeEach(t) {
        return (
            (this._before = this._before || []),
            this._before.push(t),
            () => {
                if (this._before !== void 0) {
                    const r = this._before.indexOf(t)
                    r !== -1 && this._before.splice(r, 1)
                }
            }
        )
    }
    afterEach(t) {
        return (
            (this._after = this._after || []),
            this._after.push(t),
            () => {
                if (this._after !== void 0) {
                    const r = this._after.indexOf(t)
                    r !== -1 && this._after.splice(r, 1)
                }
            }
        )
    }
}
function P1() {
    return new Di()
}
function _i() {
    let e,
        t = !1
    const r = (n) => {
        if (e && e !== n) throw new Error('Context conflict')
    }
    return {
        use: () => {
            if (e === void 0) throw new Error('Context is not available')
            return e
        },
        tryUse: () => e,
        set: (n, s) => {
            s || r(n), (e = n), (t = !0)
        },
        unset: () => {
            ;(e = void 0), (t = !1)
        },
        call: (n, s) => {
            r(n), (e = n)
            try {
                return s()
            } finally {
                t || (e = void 0)
            }
        },
        async callAsync(n, s) {
            e = n
            const i = () => {
                    e = n
                },
                o = () => (e === n ? i : void 0)
            p3.add(o)
            try {
                const l = s()
                return t || (e = void 0), await l
            } finally {
                p3.delete(o)
            }
        },
    }
}
function mi() {
    const e = {}
    return {
        get(t) {
            return e[t] || (e[t] = _i()), e[t], e[t]
        },
    }
}
const ue =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
            ? self
            : typeof global < 'u'
            ? global
            : typeof window < 'u'
            ? window
            : {},
    d3 = '__unctx__',
    Ei = ue[d3] || (ue[d3] = mi()),
    yi = (e) => Ei.get(e),
    h3 = '__unctx_async_handlers__',
    p3 = ue[h3] || (ue[h3] = new Set()),
    B1 = yi('nuxt-app'),
    Ai = '__nuxt_plugin'
function bi(e) {
    let t = 0
    const r = {
        provide: void 0,
        globalName: 'nuxt',
        versions: {
            get nuxt() {
                return '3.3.3'
            },
            get vue() {
                return r.vueApp.version
            },
        },
        payload: X2({ data: {}, state: {}, _errors: {}, ...window.__NUXT__ }),
        static: { data: {} },
        isHydrating: !0,
        deferHydration() {
            if (!r.isHydrating) return () => {}
            t++
            let i = !1
            return () => {
                if (!i && ((i = !0), t--, t === 0)) return (r.isHydrating = !1), r.callHook('app:suspense:resolve')
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        ...e,
    }
    ;(r.hooks = P1()),
        (r.hook = r.hooks.hook),
        (r.callHook = r.hooks.callHook),
        (r.provide = (i, o) => {
            const l = '$' + i
            J0(r, l, o), J0(r.vueApp.config.globalProperties, l, o)
        }),
        J0(r.vueApp, '$nuxt', r),
        J0(r.vueApp.config.globalProperties, '$nuxt', r)
    {
        window.addEventListener('nuxt.preloadError', (o) => {
            r.callHook('app:chunkError', { error: o.payload })
        })
        const i = r.hook('app:error', (...o) => {
            console.error('[nuxt] error caught during app initialization', ...o)
        })
        r.hook('app:mounted', i)
    }
    const n = X2(r.payload.config),
        s = new Proxy(n, {
            get(i, o) {
                return o === 'public' ? i.public : i[o] ?? i.public[o]
            },
            set(i, o, l) {
                return o === 'public' || o === 'app' ? !1 : ((i[o] = l), (i.public[o] = l), !0)
            },
        })
    return r.provide('config', s), r
}
async function xi(e, t) {
    if (typeof t != 'function') return
    const { provide: r } = (await i0(e, t, [e])) || {}
    if (r && typeof r == 'object') for (const n in r) e.provide(n, r[n])
}
async function wi(e, t) {
    for (const r of t) await xi(e, r)
}
function Fi(e) {
    return e.map((r) => (typeof r != 'function' ? null : r.length > 1 ? (n) => r(n, n.provide) : r)).filter(Boolean)
}
function B0(e) {
    return (e[Ai] = !0), e
}
function i0(e, t, r) {
    const n = () => (r ? t(...r) : t())
    return B1.set(e), n()
}
function _2() {
    const e = B1.tryUse()
    if (!e) {
        const t = xe()
        if (!t) throw new Error('nuxt instance unavailable')
        return t.appContext.app.$nuxt
    }
    return e
}
function et() {
    return _2().$config
}
function J0(e, t, r) {
    Object.defineProperty(e, t, { get: () => r })
}
const Pe = {},
    vi = B0((e) => {
        for (const t in Pe) e.vueApp.component(t, Pe[t]), e.vueApp.component('Lazy' + t, Pe[t])
    })
function Li(e) {
    return Array.isArray(e) ? e : [e]
}
const I1 = ['title', 'script', 'style', 'noscript'],
    ki = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
    Mi = [
        'title',
        'titleTemplate',
        'templateParams',
        'base',
        'htmlAttrs',
        'bodyAttrs',
        'meta',
        'link',
        'style',
        'script',
        'noscript',
    ],
    Hi = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams'],
    Ti = ['tagPosition', 'tagPriority', 'tagDuplicateStrategy', 'innerHTML', 'textContent']
function j1(e) {
    let t = 9
    for (let r = 0; r < e.length; ) t = Math.imul(t ^ e.charCodeAt(r++), 9 ** 9)
    return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function tt(e) {
    return j1(
        `${e.tag}:${e.textContent || e.innerHTML || ''}:${Object.entries(e.props)
            .map(([t, r]) => `${t}:${String(r)}`)
            .join(',')}`
    )
}
function Oi(e) {
    let t = 9
    for (const r of e) for (let n = 0; n < r.length; ) t = Math.imul(t ^ r.charCodeAt(n++), 9 ** 9)
    return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function $1(e, t) {
    const { props: r, tag: n } = e
    if (Hi.includes(n)) return n
    if (n === 'link' && r.rel === 'canonical') return 'canonical'
    if (r.charset) return 'charset'
    const s = ['id']
    n === 'meta' && s.push('name', 'property', 'http-equiv')
    for (const i of s)
        if (typeof r[i] < 'u') {
            const o = String(r[i])
            return t && !t(o) ? !1 : `${n}:${i}:${o}`
        }
    return !1
}
const C3 = (e, t) => (e == null ? t || null : typeof e == 'function' ? e(t) : e),
    Q0 = (e, t = !1, r) => {
        const { tag: n, $el: s } = e
        s &&
            (Object.entries(n.props).forEach(([i, o]) => {
                o = String(o)
                const l = `attr:${i}`
                if (i === 'class') {
                    if (!o) return
                    for (const a of o.split(' ')) {
                        const c = `${l}:${a}`
                        r && r(e, c, () => s.classList.remove(a)), s.classList.contains(a) || s.classList.add(a)
                    }
                    return
                }
                r && !i.startsWith('data-h-') && r(e, l, () => s.removeAttribute(i)),
                    (t || s.getAttribute(i) !== o) && s.setAttribute(i, o)
            }),
            I1.includes(n.tag) &&
                (n.textContent && n.textContent !== s.textContent
                    ? (s.textContent = n.textContent)
                    : n.innerHTML && n.innerHTML !== s.innerHTML && (s.innerHTML = n.innerHTML)))
    }
let A0 = !1
async function Si(e, t = {}) {
    var D, F
    const r = { shouldRender: !0 }
    if ((await e.hooks.callHook('dom:beforeRender', r), !r.shouldRender)) return
    const n = t.document || e.resolvedOptions.document || window.document,
        s = (await e.resolveTags()).map(l)
    if (e.resolvedOptions.experimentalHashHydration && ((A0 = A0 || e._hash || !1), A0)) {
        const g = Oi(s.map((x) => x.tag._h))
        if (A0 === g) return
        A0 = g
    }
    const i = e._popSideEffectQueue()
    e.headEntries()
        .map((g) => g._sde)
        .forEach((g) => {
            Object.entries(g).forEach(([x, I]) => {
                i[x] = I
            })
        })
    const o = (g, x, I) => {
        ;(x = `${g.renderId}:${x}`), g.entry && (g.entry._sde[x] = I), delete i[x]
    }
    function l(g) {
        const x = e.headEntries().find((_) => _._i === g._e),
            I = {
                renderId: !g.key && g._d ? g._d : tt(g),
                $el: null,
                shouldRender: !0,
                tag: g,
                entry: x,
                markSideEffect: (_, p) => o(I, _, p),
            }
        return I
    }
    const a = [],
        c = { body: [], head: [] },
        d = (g) => {
            ;(e._elMap[g.renderId] = g.$el),
                a.push(g),
                o(g, 'el', () => {
                    var x
                    ;(x = g.$el) == null || x.remove(), delete e._elMap[g.renderId]
                })
        }
    for (const g of s) {
        if ((await e.hooks.callHook('dom:beforeRenderTag', g), !g.shouldRender)) continue
        const { tag: x } = g
        if (x.tag === 'title') {
            ;(n.title = x.textContent || ''), a.push(g)
            continue
        }
        if (x.tag === 'htmlAttrs' || x.tag === 'bodyAttrs') {
            ;(g.$el = n[x.tag === 'htmlAttrs' ? 'documentElement' : 'body']), Q0(g, !1, o), a.push(g)
            continue
        }
        if (
            ((g.$el = e._elMap[g.renderId]),
            !g.$el &&
                x.key &&
                (g.$el = n.querySelector(
                    `${(D = x.tagPosition) != null && D.startsWith('body') ? 'body' : 'head'} > ${x.tag}[data-h-${
                        x._h
                    }]`
                )),
            g.$el)
        ) {
            g.tag._d && Q0(g), d(g)
            continue
        }
        c[(F = x.tagPosition) != null && F.startsWith('body') ? 'body' : 'head'].push(g)
    }
    const h = { bodyClose: void 0, bodyOpen: void 0, head: void 0 }
    Object.entries(c).forEach(([g, x]) => {
        var _
        if (!x.length) return
        const I = (_ = n == null ? void 0 : n[g]) == null ? void 0 : _.children
        if (I) {
            for (const p of [...I].reverse()) {
                const y = p.tagName.toLowerCase()
                if (!ki.includes(y)) continue
                const S = p.getAttributeNames().reduce((M, N) => ({ ...M, [N]: p.getAttribute(N) }), {}),
                    R = { tag: y, props: S }
                p.innerHTML && (R.innerHTML = p.innerHTML)
                const $ = tt(R)
                let j = x.findIndex((M) => (M == null ? void 0 : M.renderId) === $)
                if (j === -1) {
                    const M = $1(R)
                    j = x.findIndex((N) => (N == null ? void 0 : N.tag._d) && N.tag._d === M)
                }
                if (j !== -1) {
                    const M = x[j]
                    ;(M.$el = p), Q0(M), d(M), delete x[j]
                }
            }
            x.forEach((p) => {
                const y = p.tag.tagPosition || 'head'
                ;(h[y] = h[y] || n.createDocumentFragment()),
                    p.$el || ((p.$el = n.createElement(p.tag.tag)), Q0(p, !0)),
                    h[y].appendChild(p.$el),
                    d(p)
            })
        }
    }),
        h.head && n.head.appendChild(h.head),
        h.bodyOpen && n.body.insertBefore(h.bodyOpen, n.body.firstChild),
        h.bodyClose && n.body.appendChild(h.bodyClose)
    for (const g of a) await e.hooks.callHook('dom:renderTag', g)
    Object.values(i).forEach((g) => g())
}
let Be = null
async function Ri(e, t = {}) {
    function r() {
        return (Be = null), Si(e, t)
    }
    const n = t.delayFn || ((s) => setTimeout(s, 10))
    return (Be = Be || new Promise((s) => n(() => s(r()))))
}
const Ui = (e) => ({
    hooks: {
        'entries:updated': function (t) {
            if (typeof (e == null ? void 0 : e.document) > 'u' && typeof window > 'u') return
            let r = e == null ? void 0 : e.delayFn
            !r && typeof requestAnimationFrame < 'u' && (r = requestAnimationFrame),
                Ri(t, { document: (e == null ? void 0 : e.document) || window.document, delayFn: r })
        },
    },
})
function Pi(e) {
    var t
    return (
        ((t = e == null ? void 0 : e.head.querySelector('meta[name="unhead:ssr"]')) == null
            ? void 0
            : t.getAttribute('content')) || !1
    )
}
const g3 = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 }
function D3(e) {
    if (typeof e.tagPriority == 'number') return e.tagPriority
    if (e.tag === 'meta') {
        if (e.props.charset) return -2
        if (e.props['http-equiv'] === 'content-security-policy') return 0
    }
    const t = e.tagPriority || e.tag
    return t in g3 ? g3[t] : 10
}
const Bi = [
    { prefix: 'before:', offset: -1 },
    { prefix: 'after:', offset: 1 },
]
function Ii() {
    return {
        hooks: {
            'tags:resolve': (e) => {
                const t = (r) => {
                    var n
                    return (n = e.tags.find((s) => s._d === r)) == null ? void 0 : n._p
                }
                for (const { prefix: r, offset: n } of Bi)
                    for (const s of e.tags.filter(
                        (i) => typeof i.tagPriority == 'string' && i.tagPriority.startsWith(r)
                    )) {
                        const i = t(s.tagPriority.replace(r, ''))
                        typeof i < 'u' && (s._p = i + n)
                    }
                e.tags.sort((r, n) => r._p - n._p).sort((r, n) => D3(r) - D3(n))
            },
        },
    }
}
const ji = () => ({
        hooks: {
            'tags:resolve': (e) => {
                const { tags: t } = e
                let r = t.findIndex((s) => s.tag === 'titleTemplate')
                const n = t.findIndex((s) => s.tag === 'title')
                if (n !== -1 && r !== -1) {
                    const s = C3(t[r].textContent, t[n].textContent)
                    s !== null ? (t[n].textContent = s || t[n].textContent) : delete t[n]
                } else if (r !== -1) {
                    const s = C3(t[r].textContent)
                    s !== null && ((t[r].textContent = s), (t[r].tag = 'title'), (r = -1))
                }
                r !== -1 && delete t[r], (e.tags = t.filter(Boolean))
            },
        },
    }),
    $i = () => ({
        hooks: {
            'tag:normalise': function ({ tag: e }) {
                typeof e.props.body < 'u' && ((e.tagPosition = 'bodyClose'), delete e.props.body)
            },
        },
    }),
    Vi = ['link', 'style', 'script', 'noscript'],
    Ni = () => ({
        hooks: {
            'tag:normalise': ({ tag: e, resolvedOptions: t }) => {
                t.experimentalHashHydration === !0 && (e._h = tt(e)),
                    e.key && Vi.includes(e.tag) && ((e._h = j1(e.key)), (e.props[`data-h-${e._h}`] = ''))
            },
        },
    }),
    _3 = ['script', 'link', 'bodyAttrs'],
    Zi = () => {
        const e = (t, r) => {
            const n = {},
                s = {}
            Object.entries(r.props).forEach(([o, l]) => {
                o.startsWith('on') && typeof l == 'function' ? (s[o] = l) : (n[o] = l)
            })
            let i
            return (
                t === 'dom' &&
                    r.tag === 'script' &&
                    typeof n.src == 'string' &&
                    typeof s.onload < 'u' &&
                    ((i = n.src), delete n.src),
                { props: n, eventHandlers: s, delayedSrc: i }
            )
        }
        return {
            hooks: {
                'ssr:render': function (t) {
                    t.tags = t.tags.map(
                        (r) => (
                            !_3.includes(r.tag) ||
                                !Object.entries(r.props).find(
                                    ([n, s]) => n.startsWith('on') && typeof s == 'function'
                                ) ||
                                (r.props = e('ssr', r).props),
                            r
                        )
                    )
                },
                'dom:beforeRenderTag': function (t) {
                    if (
                        !_3.includes(t.tag.tag) ||
                        !Object.entries(t.tag.props).find(([i, o]) => i.startsWith('on') && typeof o == 'function')
                    )
                        return
                    const { props: r, eventHandlers: n, delayedSrc: s } = e('dom', t.tag)
                    Object.keys(n).length && ((t.tag.props = r), (t.tag._eventHandlers = n), (t.tag._delayedSrc = s))
                },
                'dom:renderTag': function (t) {
                    const r = t.$el
                    if (!t.tag._eventHandlers || !r) return
                    const n = t.tag.tag === 'bodyAttrs' && typeof window < 'u' ? window : r
                    Object.entries(t.tag._eventHandlers).forEach(([s, i]) => {
                        const o = `${t.tag._d || t.tag._p}:${s}`,
                            l = s.slice(2).toLowerCase(),
                            a = `data-h-${l}`
                        if ((t.markSideEffect(o, () => {}), r.hasAttribute(a))) return
                        const c = i
                        r.setAttribute(a, ''),
                            n.addEventListener(l, c),
                            t.entry &&
                                (t.entry._sde[o] = () => {
                                    n.removeEventListener(l, c), r.removeAttribute(a)
                                })
                    }),
                        t.tag._delayedSrc && r.setAttribute('src', t.tag._delayedSrc)
                },
            },
        }
    },
    Gi = ['templateParams', 'htmlAttrs', 'bodyAttrs'],
    Wi = () => ({
        hooks: {
            'tag:normalise': function ({ tag: e }) {
                ;['hid', 'vmid', 'key'].forEach((r) => {
                    e.props[r] && ((e.key = e.props[r]), delete e.props[r])
                })
                const t = e.key ? `${e.tag}:${e.key}` : $1(e)
                t && (e._d = t)
            },
            'tags:resolve': function (e) {
                const t = {}
                e.tags.forEach((n) => {
                    const s = n._d || n._p,
                        i = t[s]
                    if (i) {
                        let o = n == null ? void 0 : n.tagDuplicateStrategy
                        if ((!o && Gi.includes(n.tag) && (o = 'merge'), o === 'merge')) {
                            const a = i.props
                            ;['class', 'style'].forEach((c) => {
                                n.props[c] &&
                                    a[c] &&
                                    (c === 'style' && !a[c].endsWith(';') && (a[c] += ';'),
                                    (n.props[c] = `${a[c]} ${n.props[c]}`))
                            }),
                                (t[s].props = { ...a, ...n.props })
                            return
                        } else if (n._e === i._e) {
                            ;(i._duped = i._duped || []), (n._d = `${i._d}:${i._duped.length + 1}`), i._duped.push(n)
                            return
                        }
                        const l = Object.keys(n.props).length
                        if (
                            (l === 0 || (l === 1 && typeof n.props['data-h-key'] < 'u')) &&
                            !n.innerHTML &&
                            !n.textContent
                        ) {
                            delete t[s]
                            return
                        }
                    }
                    t[s] = n
                })
                const r = []
                Object.values(t).forEach((n) => {
                    const s = n._duped
                    delete n._duped, r.push(n), s && r.push(...s)
                }),
                    (e.tags = r)
            },
        },
    })
function Y0(e, t) {
    function r(i) {
        if (['s', 'pageTitle'].includes(i)) return t.pageTitle
        let o
        return (
            i.includes('.') ? (o = i.split('.').reduce((l, a) => (l && l[a]) || void 0, t)) : (o = t[i]),
            typeof o < 'u' ? o || '' : !1
        )
    }
    let n = e
    try {
        n = decodeURI(e)
    } catch {}
    return (
        (n.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
            .sort()
            .reverse()
            .forEach((i) => {
                const o = r(i.slice(1))
                typeof o == 'string' && (e = e.replaceAll(new RegExp(`\\${i}(\\W|$)`, 'g'), `${o}$1`).trim())
            }),
        t.separator &&
            (e.endsWith(t.separator) && (e = e.slice(0, -t.separator.length).trim()),
            e.startsWith(t.separator) && (e = e.slice(t.separator.length).trim()),
            (e = e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`, 'g'), t.separator))),
        e
    )
}
function Ki() {
    return {
        hooks: {
            'tags:resolve': (e) => {
                var i
                const { tags: t } = e,
                    r = (i = t.find((o) => o.tag === 'title')) == null ? void 0 : i.textContent,
                    n = t.findIndex((o) => o.tag === 'templateParams'),
                    s = n !== -1 ? t[n].props : {}
                s.pageTitle = s.pageTitle || r || ''
                for (const o of t)
                    if (['titleTemplate', 'title'].includes(o.tag) && typeof o.textContent == 'string')
                        o.textContent = Y0(o.textContent, s)
                    else if (o.tag === 'meta' && typeof o.props.content == 'string')
                        o.props.content = Y0(o.props.content, s)
                    else if (o.tag === 'link' && typeof o.props.href == 'string') o.props.href = Y0(o.props.href, s)
                    else if (
                        o.tag === 'script' &&
                        ['application/json', 'application/ld+json'].includes(o.props.type) &&
                        typeof o.innerHTML == 'string'
                    )
                        try {
                            o.innerHTML = JSON.stringify(JSON.parse(o.innerHTML), (l, a) =>
                                typeof a == 'string' ? Y0(a, s) : a
                            )
                        } catch {}
                e.tags = t.filter((o) => o.tag !== 'templateParams')
            },
        },
    }
}
const qi = typeof window < 'u'
let V1
const zi = (e) => (V1 = e),
    Ji = () => V1
async function Qi(e, t) {
    const r = { tag: e, props: {} }
    return e === 'templateParams'
        ? ((r.props = t), r)
        : ['title', 'titleTemplate'].includes(e)
        ? ((r.textContent = t instanceof Promise ? await t : t), r)
        : typeof t == 'string'
        ? ['script', 'noscript', 'style'].includes(e)
            ? (e === 'script' && (/^(https?:)?\/\//.test(t) || t.startsWith('/'))
                  ? (r.props.src = t)
                  : (r.innerHTML = t),
              r)
            : !1
        : ((r.props = await Xi(e, { ...t })),
          r.props.children && (r.props.innerHTML = r.props.children),
          delete r.props.children,
          Object.keys(r.props)
              .filter((n) => Ti.includes(n))
              .forEach((n) => {
                  ;(!['innerHTML', 'textContent'].includes(n) || I1.includes(r.tag)) && (r[n] = r.props[n]),
                      delete r.props[n]
              }),
          ['innerHTML', 'textContent'].forEach((n) => {
              if (
                  r.tag === 'script' &&
                  typeof r[n] == 'string' &&
                  ['application/ld+json', 'application/json'].includes(r.props.type)
              )
                  try {
                      r[n] = JSON.parse(r[n])
                  } catch {
                      r[n] = ''
                  }
              typeof r[n] == 'object' && (r[n] = JSON.stringify(r[n]))
          }),
          r.props.class && (r.props.class = Yi(r.props.class)),
          r.props.content && Array.isArray(r.props.content)
              ? r.props.content.map((n) => ({ ...r, props: { ...r.props, content: n } }))
              : r)
}
function Yi(e) {
    return (
        typeof e == 'object' && !Array.isArray(e) && (e = Object.keys(e).filter((t) => e[t])),
        (Array.isArray(e) ? e.join(' ') : e)
            .split(' ')
            .filter((t) => t.trim())
            .filter(Boolean)
            .join(' ')
    )
}
async function Xi(e, t) {
    for (const r of Object.keys(t)) {
        const n = r.startsWith('data-')
        t[r] instanceof Promise && (t[r] = await t[r]),
            String(t[r]) === 'true'
                ? (t[r] = n ? 'true' : '')
                : String(t[r]) === 'false' && (n ? (t[r] = 'false') : delete t[r])
    }
    return t
}
const eo = 10
async function to(e) {
    const t = []
    return (
        Object.entries(e.resolvedInput)
            .filter(([r, n]) => typeof n < 'u' && Mi.includes(r))
            .forEach(([r, n]) => {
                const s = Li(n)
                t.push(...s.map((i) => Qi(r, i)).flat())
            }),
        (await Promise.all(t))
            .flat()
            .filter(Boolean)
            .map((r, n) => ((r._e = e._i), (r._p = (e._i << eo) + n), r))
    )
}
const ro = () => [Wi(), Ii(), Ki(), ji(), Ni(), Zi(), $i()],
    no = (e = {}) => [Ui({ document: e == null ? void 0 : e.document, delayFn: e == null ? void 0 : e.domDelayFn })]
function so(e = {}) {
    const t = io({ ...e, plugins: [...no(e), ...((e == null ? void 0 : e.plugins) || [])] })
    return (
        e.experimentalHashHydration && t.resolvedOptions.document && (t._hash = Pi(t.resolvedOptions.document)),
        zi(t),
        t
    )
}
function io(e = {}) {
    let t = [],
        r = {},
        n = 0
    const s = P1()
    e != null && e.hooks && s.addHooks(e.hooks),
        (e.plugins = [...ro(), ...((e == null ? void 0 : e.plugins) || [])]),
        e.plugins.forEach((l) => l.hooks && s.addHooks(l.hooks)),
        (e.document = e.document || (qi ? document : void 0))
    const i = () => s.callHook('entries:updated', o),
        o = {
            resolvedOptions: e,
            headEntries() {
                return t
            },
            get hooks() {
                return s
            },
            use(l) {
                l.hooks && s.addHooks(l.hooks)
            },
            push(l, a) {
                const c = { _i: n++, input: l, _sde: {} }
                return (
                    a != null && a.mode && (c._m = a == null ? void 0 : a.mode),
                    a != null && a.transform && (c._t = a == null ? void 0 : a.transform),
                    t.push(c),
                    i(),
                    {
                        dispose() {
                            t = t.filter((d) =>
                                d._i !== c._i ? !0 : ((r = { ...r, ...(d._sde || {}) }), (d._sde = {}), i(), !1)
                            )
                        },
                        patch(d) {
                            t = t.map((h) => (h._i === c._i && ((c.input = h.input = d), i()), h))
                        },
                    }
                )
            },
            async resolveTags() {
                const l = { tags: [], entries: [...t] }
                await s.callHook('entries:resolve', l)
                for (const a of l.entries) {
                    const c = a._t || ((d) => d)
                    if (((a.resolvedInput = c(a.resolvedInput || a.input)), a.resolvedInput))
                        for (const d of await to(a)) {
                            const h = { tag: d, entry: a, resolvedOptions: o.resolvedOptions }
                            await s.callHook('tag:normalise', h), l.tags.push(h.tag)
                        }
                }
                return await s.callHook('tags:resolve', l), l.tags
            },
            _popSideEffectQueue() {
                const l = { ...r }
                return (r = {}), l
            },
            _elMap: {},
        }
    return o.hooks.callHook('init', o), o
}
function oo(e) {
    return typeof e == 'function' ? e() : y2(e)
}
function de(e, t = '') {
    if (e instanceof Promise) return e
    const r = oo(e)
    return !e || !r
        ? r
        : Array.isArray(r)
        ? r.map((n) => de(n, t))
        : typeof r == 'object'
        ? Object.fromEntries(
              Object.entries(r).map(([n, s]) =>
                  n === 'titleTemplate' || n.startsWith('on') ? [n, y2(s)] : [n, de(s, n)]
              )
          )
        : r
}
const lo = b1.startsWith('3'),
    ao = typeof window < 'u',
    N1 = 'usehead'
function Lt() {
    return (xe() && u0(N1)) || Ji()
}
function co(e) {
    return {
        install(r) {
            lo && ((r.config.globalProperties.$unhead = e), (r.config.globalProperties.$head = e), r.provide(N1, e))
        },
    }.install
}
function fo(e = {}) {
    const t = so({
        ...e,
        domDelayFn: (r) => setTimeout(() => Dt(() => r()), 10),
        plugins: [uo(), ...((e == null ? void 0 : e.plugins) || [])],
    })
    return (t.install = co(t)), t
}
const uo = () => ({
    hooks: {
        'entries:resolve': function (e) {
            for (const t of e.entries) t.resolvedInput = de(t.input)
        },
    },
})
function ho(e, t = {}) {
    const r = Lt(),
        n = w0(!1),
        s = w0({})
    fn(() => {
        s.value = n.value ? {} : de(e)
    })
    const i = r.push(s.value, t)
    return (
        X0(s, (l) => {
            i.patch(l)
        }),
        xe() &&
            (s1(() => {
                i.dispose()
            }),
            r1(() => {
                n.value = !0
            }),
            t1(() => {
                n.value = !1
            })),
        i
    )
}
function po(e, t = {}) {
    return Lt().push(e, t)
}
function Z1(e, t = {}) {
    var n
    const r = Lt()
    if (r) {
        const s = ao || !!((n = r.resolvedOptions) != null && n.document)
        return (t.mode === 'server' && s) || (t.mode === 'client' && !s) ? void 0 : s ? ho(e, t) : po(e, t)
    }
}
const Co = {
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }],
        link: [],
        style: [],
        script: [],
        noscript: [],
    },
    go = '__nuxt',
    Do = B0((e) => {
        const r = fo()
        r.push(Co), e.vueApp.use(r)
        {
            let n = !0
            const s = () => {
                ;(n = !1), r.hooks.callHook('entries:updated', r)
            }
            r.hooks.hook('dom:beforeRender', (i) => {
                i.shouldRender = !n
            }),
                e.hooks.hook('page:start', () => {
                    n = !0
                }),
                e.hooks.hook('page:finish', s),
                e.hooks.hook('app:suspense:resolve', s)
        }
    })
function _o(e) {
    const t = e
    return (
        (t.headTags = e.resolveTags),
        (t.addEntry = e.push),
        (t.addHeadObjs = e.push),
        (t.addReactiveEntry = (r, n) => {
            const s = Z1(r, n)
            return typeof s < 'u' ? s.dispose : () => {}
        }),
        (t.removeHeadObjs = () => {}),
        (t.updateDOM = () => {
            e.hooks.callHook('entries:updated', e)
        }),
        (t.unhead = e),
        t
    )
}
const mo = B0((e) => {
    _o(e.vueApp._context.provides.usehead)
})
class rt extends Error {
    constructor() {
        super(...arguments),
            (this.statusCode = 500),
            (this.fatal = !1),
            (this.unhandled = !1),
            (this.statusMessage = void 0)
    }
    toJSON() {
        const t = { message: this.message, statusCode: nt(this.statusCode, 500) }
        return (
            this.statusMessage && (t.statusMessage = G1(this.statusMessage)),
            this.data !== void 0 && (t.data = this.data),
            t
        )
    }
}
rt.__h3_error__ = !0
function Eo(e) {
    if (typeof e == 'string') return new rt(e)
    if (yo(e)) return e
    const t = new rt(e.message ?? e.statusMessage, e.cause ? { cause: e.cause } : void 0)
    if ('stack' in e)
        try {
            Object.defineProperty(t, 'stack', {
                get() {
                    return e.stack
                },
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (
        (e.data && (t.data = e.data),
        e.statusCode
            ? (t.statusCode = nt(e.statusCode, t.statusCode))
            : e.status && (t.statusCode = nt(e.status, t.statusCode)),
        e.statusMessage ? (t.statusMessage = e.statusMessage) : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage)
    ) {
        const r = t.statusMessage
        G1(t.statusMessage) !== r &&
            console.warn(
                '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default.'
            )
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}
function yo(e) {
    var t
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const Ao = /[^\u0009\u0020-\u007E]/g
function G1(e = '') {
    return e.replace(Ao, '')
}
function nt(e, t = 200) {
    return !e || (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
function bo(...e) {
    const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
    typeof e[0] != 'string' && e.unshift(t)
    const [r, n] = e
    if (!r || typeof r != 'string') throw new TypeError('[nuxt] [useState] key must be a string: ' + r)
    if (n !== void 0 && typeof n != 'function') throw new Error('[nuxt] [useState] init must be a function: ' + n)
    const s = '$s' + r,
        i = _2(),
        o = Z3(i.payload.state, s)
    if (o.value === void 0 && n) {
        const l = n()
        if (o2(l)) return (i.payload.state[s] = l), l
        o.value = l
    }
    return o
}
function xo(e = _2()) {
    var t
    return (t = e.ssrContext) == null ? void 0 : t.event
}
const kt = () => {
        var e
        return (e = _2()) == null ? void 0 : e.$router
    },
    wo = () => (xe() ? u0('_route', _2()._route) : _2()._route),
    Fo = () => {
        try {
            if (_2()._processingMiddleware) return !0
        } catch {
            return !0
        }
        return !1
    },
    vo = (e, t) => {
        e || (e = '/')
        const r = typeof e == 'string' ? e : e.path || '/',
            n = (t == null ? void 0 : t.external) || vt(r, { acceptRelative: !0 })
        if (n && !(t != null && t.external))
            throw new Error(
                'Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.'
            )
        if (n && we(r).protocol === 'script:') throw new Error('Cannot navigate to an URL with script protocol.')
        if (!n && Fo()) return e
        const s = kt()
        return n
            ? (t != null && t.replace ? location.replace(r) : (location.href = r), Promise.resolve())
            : t != null && t.replace
            ? s.replace(e)
            : s.push(e)
    },
    Mt = () => Z3(_2().payload, 'error'),
    Lo = (e) => {
        const t = Ho(e)
        try {
            _2().callHook('app:error', t)
            const n = Mt()
            n.value = n.value || t
        } catch {
            throw t
        }
        return t
    },
    ko = async (e = {}) => {
        const t = _2(),
            r = Mt()
        t.callHook('app:error:cleared', e), e.redirect && (await kt().replace(e.redirect)), (r.value = null)
    },
    Mo = (e) => !!(e && typeof e == 'object' && '__nuxt_error' in e),
    Ho = (e) => {
        const t = Eo(e)
        return (t.__nuxt_error = !0), t
    },
    To = []
function Ie(e) {
    typeof e == 'object' && (e = T1({ pathname: e.path || '', search: L1(e.query || {}), hash: e.hash || '' }))
    const t = we(e.toString())
    return {
        path: t.pathname,
        fullPath: e,
        query: v1(t.search),
        hash: t.hash,
        params: {},
        name: void 0,
        matched: [],
        redirectedFrom: void 0,
        meta: {},
        href: e,
    }
}
const Oo = B0((e) => {
    const t = Ks(window.location.pathname, et().app.baseURL) + window.location.search + window.location.hash,
        r = [],
        n = { 'navigate:before': [], 'resolve:before': [], 'navigate:after': [], error: [] },
        s = (d, h) => (n[d].push(h), () => n[d].splice(n[d].indexOf(h), 1)),
        i = et().app.baseURL,
        o = X2(Ie(t))
    async function l(d, h) {
        try {
            const D = Ie(d)
            for (const F of n['navigate:before']) {
                const g = await F(D, o)
                if (g === !1 || g instanceof Error) return
                if (g) return l(g, !0)
            }
            for (const F of n['resolve:before']) await F(D, o)
            Object.assign(o, D),
                window.history[h ? 'replaceState' : 'pushState']({}, '', P0(i, D.fullPath)),
                e.isHydrating || (await i0(e, ko))
            for (const F of n['navigate:after']) await F(D, o)
        } catch (D) {
            for (const F of n.error) await F(D)
        }
    }
    const a = {
        currentRoute: o,
        isReady: () => Promise.resolve(),
        options: {},
        install: () => Promise.resolve(),
        push: (d) => l(d, !1),
        replace: (d) => l(d, !0),
        back: () => window.history.go(-1),
        go: (d) => window.history.go(d),
        forward: () => window.history.go(1),
        beforeResolve: (d) => s('resolve:before', d),
        beforeEach: (d) => s('navigate:before', d),
        afterEach: (d) => s('navigate:after', d),
        onError: (d) => s('error', d),
        resolve: Ie,
        addRoute: (d, h) => {
            r.push(h)
        },
        getRoutes: () => r,
        hasRoute: (d) => r.some((h) => h.name === d),
        removeRoute: (d) => {
            const h = r.findIndex((D) => D.name === d)
            h !== -1 && r.splice(h, 1)
        },
    }
    e.vueApp.component('RouterLink', {
        functional: !0,
        props: {
            to: String,
            custom: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            ariaCurrentValue: String,
        },
        setup: (d, { slots: h }) => {
            const D = () => l(d.to, d.replace)
            return () => {
                var g
                const F = a.resolve(d.to)
                return d.custom
                    ? (g = h.default) == null
                        ? void 0
                        : g.call(h, { href: d.to, navigate: D, route: F })
                    : rs('a', { href: d.to, onClick: (x) => (x.preventDefault(), D()) }, h)
            }
        },
    }),
        window.addEventListener('popstate', (d) => {
            const h = d.target.location
            a.replace(h.href.replace(h.origin, ''))
        }),
        (e._route = o),
        (e._middleware = e._middleware || { global: [], named: {} })
    const c = bo('_layout')
    return (
        e.hooks.hookOnce('app:created', async () => {
            if (
                (a.beforeEach(async (d, h) => {
                    ;(d.meta = X2(d.meta || {})),
                        e.isHydrating && c.value && !e0(d.meta.layout) && (d.meta.layout = c.value),
                        (e._processingMiddleware = !0)
                    const D = new Set([...To, ...e._middleware.global])
                    for (const F of D) {
                        const g = await i0(e, F, [d, h])
                        if (g || g === !1) return g
                    }
                }),
                a.afterEach(() => {
                    delete e._processingMiddleware
                }),
                await a.replace(t),
                !Js(o.fullPath, t))
            ) {
                const d = await i0(e, xo),
                    h = { redirectCode: (d.node.res.statusCode !== 200 && d.node.res.statusCode) || 302 }
                await i0(e, vo, [o.fullPath, h])
            }
        }),
        { provide: { route: o, router: a } }
    )
})
function So(e = {}) {
    const t = e.path || window.location.pathname
    let r = {}
    try {
        r = JSON.parse(sessionStorage.getItem('nuxt:reload') || '{}')
    } catch {}
    if (e.force || (r == null ? void 0 : r.path) !== t || (r == null ? void 0 : r.expires) < Date.now()) {
        try {
            sessionStorage.setItem('nuxt:reload', JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem('nuxt:reload:state', JSON.stringify({ state: _2().payload.state }))
            } catch {}
        window.location.pathname !== t ? (window.location.href = t) : window.location.reload()
    }
}
const Ro = B0((e) => {
        const t = kt(),
            r = et(),
            n = new Set()
        t.beforeEach(() => {
            n.clear()
        }),
            e.hook('app:chunkError', ({ error: s }) => {
                n.add(s)
            }),
            t.onError((s, i) => {
                if (n.has(s)) {
                    const l =
                        'href' in i && i.href.startsWith('#') ? r.app.baseURL + i.href : P0(r.app.baseURL, i.fullPath)
                    So({ path: l, persistState: !0 })
                }
            })
    }),
    Uo = [vi, Do, mo, Oo, Ro],
    Po = 'modulepreload',
    Bo = function (e, t) {
        return e.startsWith('.') ? new URL(e, t).href : e
    },
    m3 = {},
    Io = function (t, r, n) {
        if (!r || r.length === 0) return t()
        const s = document.getElementsByTagName('link')
        return Promise.all(
            r.map((i) => {
                if (((i = Bo(i, n)), i in m3)) return
                m3[i] = !0
                const o = i.endsWith('.css'),
                    l = o ? '[rel="stylesheet"]' : ''
                if (!!n)
                    for (let d = s.length - 1; d >= 0; d--) {
                        const h = s[d]
                        if (h.href === i && (!o || h.rel === 'stylesheet')) return
                    }
                else if (document.querySelector(`link[href="${i}"]${l}`)) return
                const c = document.createElement('link')
                if (
                    ((c.rel = o ? 'stylesheet' : Po),
                    o || ((c.as = 'script'), (c.crossOrigin = '')),
                    (c.href = i),
                    document.head.appendChild(c),
                    o)
                )
                    return new Promise((d, h) => {
                        c.addEventListener('load', d),
                            c.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${i}`)))
                    })
            })
        ).then(() => t())
    },
    jo = (...e) =>
        Io(...e).catch((t) => {
            const r = new Event('nuxt.preloadError')
            throw ((r.payload = t), window.dispatchEvent(r), t)
        })
const $o = (e, t) => {
        const r = e.__vccOpts || e
        for (const [n, s] of t) r[n] = s
        return r
    },
    Vo = {
        class: 'antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base',
    },
    No = xt(
        '<div class="flex-1 flex flex-col gap-y-16 py-14" data-v-a47dbf95><div class="flex flex-col gap-y-4 items-center justify-center" data-v-a47dbf95><a href="https://nuxt.com" target="_blank" data-v-a47dbf95><svg width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a47dbf95><path d="M33.9869 41.2211H56.412C57.1243 41.2212 57.824 41.0336 58.4408 40.6772C59.0576 40.3209 59.5698 39.8083 59.9258 39.191C60.2818 38.5737 60.469 37.8736 60.4687 37.1609C60.4684 36.4482 60.2805 35.7482 59.924 35.1313L44.864 9.03129C44.508 8.41416 43.996 7.90168 43.3793 7.54537C42.7626 7.18906 42.063 7.00147 41.3509 7.00147C40.6387 7.00147 39.9391 7.18906 39.3225 7.54537C38.7058 7.90168 38.1937 8.41416 37.8377 9.03129L33.9869 15.7093L26.458 2.65061C26.1018 2.03354 25.5895 1.52113 24.9726 1.16489C24.3557 0.808639 23.656 0.621094 22.9438 0.621094C22.2316 0.621094 21.5318 0.808639 20.915 1.16489C20.2981 1.52113 19.7858 2.03354 19.4296 2.65061L0.689224 35.1313C0.332704 35.7482 0.144842 36.4482 0.144532 37.1609C0.144222 37.8736 0.331476 38.5737 0.687459 39.191C1.04344 39.8083 1.5556 40.3209 2.17243 40.6772C2.78925 41.0336 3.48899 41.2212 4.20126 41.2211H18.2778C23.8551 41.2211 27.9682 38.7699 30.7984 33.9876L37.6694 22.0813L41.3498 15.7093L52.3951 34.8492H37.6694L33.9869 41.2211ZM18.0484 34.8426L8.2247 34.8404L22.9504 9.32211L30.2979 22.0813L25.3784 30.6092C23.4989 33.7121 21.3637 34.8426 18.0484 34.8426Z" fill="#00DC82" data-v-a47dbf95></path></svg></a><h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center" data-v-a47dbf95>Welcome to Nuxt!</h1></div><div class="grid grid-cols-2 lg:grid-cols-10 gap-6 max-w-[960px] px-4" data-v-a47dbf95><div class="col-span-2 lg:col-span-10 relative get-started-gradient-border" data-v-a47dbf95><div class="get-started-gradient-left absolute left-0 inset-y-0 w-[20%] bg-gradient-to-r to-transparent from-green-400 rounded-xl z-1 transition-opacity duration-300" data-v-a47dbf95></div><div class="get-started-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-a47dbf95></div><div class="w-full absolute inset-x-0 flex justify-center -top-[58px]" data-v-a47dbf95><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%2318181B%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.696c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.133%203.02-5.266%205.71-6.152a1.312%201.312%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.624%202.624%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316Zm8.482%202.657L53%2063.561l10.205-10.205c1.28-1.28%204.2-4.724%203.543-9.105-4.38-.656-7.826%202.264-9.105%203.544L47.438%2057.999Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%20shape-rendering%3D%22geometricPrecision%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.107%22%20y2%3D%2258.107%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2724_4091%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2724_4091%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="hidden dark:block" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M32%2037h42v42H32z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.697c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.134%203.02-5.266%205.71-6.152a1.314%201.314%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.626%202.626%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316ZM47.438%2058%2053%2063.562l10.205-10.204c1.28-1.28%204.2-4.725%203.543-9.106-4.38-.656-7.826%202.264-9.105%203.544L47.438%2058Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.108%22%20y2%3D%2258.108%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2726_4054%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2726_4054%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="dark:hidden" data-v-a47dbf95></div><div class="flex flex-col rounded-xl items-center gap-y-4 pt-[58px] px-4 sm:px-28 pb-6 z-10" data-v-a47dbf95><h2 class="font-semibold text-2xl text-black dark:text-white" data-v-a47dbf95>Get started</h2><p class="mb-2 text-center" data-v-a47dbf95>Remove this welcome page by replacing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-a47dbf95>&lt;NuxtWelcome /&gt;</a> in <a href="https://nuxt.com/docs/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-a47dbf95>app.vue</a> with your own code.</p></div></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl modules-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-a47dbf95><div class="gradient-border gradient-border-modules gradient-border-rect" data-v-a47dbf95></div><div class="modules-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-yellow-400 rounded-xl z-1 transition-opacity duration-300" data-v-a47dbf95></div><a href="https://nuxt.com/modules" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 dark:border-none bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-a47dbf95><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2613_3853)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3853)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2552H17.8193C16.7585%2042.2552%2015.7411%2041.8337%2014.9909%2041.0836C14.2408%2040.3334%2013.8193%2039.316%2013.8193%2038.2552V24.9218C13.8193%2023.861%2014.2408%2022.8435%2014.9909%2022.0934C15.7411%2021.3433%2016.7585%2020.9218%2017.8193%2020.9218H19.1527C19.1751%2019.792%2019.5558%2018.6985%2020.2399%2017.7991C20.924%2016.8996%2021.8761%2016.2407%2022.9589%2015.9173C24.0416%2015.594%2025.1992%2015.6229%2026.2644%2016C27.3297%2016.377%2028.2477%2017.0827%2028.886%2018.0152C29.4839%2018.8674%2029.8094%2019.8808%2029.8193%2020.9218H33.8193C34.173%2020.9218%2034.5121%2021.0623%2034.7621%2021.3124C35.0122%2021.5624%2035.1527%2021.9015%2035.1527%2022.2552V26.2552C36.2825%2026.2776%2037.376%2026.6583%2038.2754%2027.3424C39.1749%2028.0265%2039.8338%2028.9786%2040.1572%2030.0613C40.4805%2031.1441%2040.4516%2032.3016%2040.0745%2033.3669C39.6975%2034.4322%2038.9918%2035.3502%2038.0593%2035.9885C37.2071%2036.5864%2036.1937%2036.9118%2035.1527%2036.9218V36.9218V40.9218C35.1527%2041.2755%2035.0122%2041.6146%2034.7621%2041.8646C34.5121%2042.1147%2034.173%2042.2552%2033.8193%2042.2552ZM17.8193%2023.5885C17.4657%2023.5885%2017.1266%2023.729%2016.8765%2023.979C16.6265%2024.2291%2016.486%2024.5682%2016.486%2024.9218V38.2552C16.486%2038.6088%2016.6265%2038.9479%2016.8765%2039.198C17.1266%2039.448%2017.4657%2039.5885%2017.8193%2039.5885H32.486V35.3485C32.4849%2035.1347%2032.5351%2034.9238%2032.6326%2034.7335C32.7301%2034.5432%2032.8718%2034.3792%2033.046%2034.2552C33.2196%2034.1313%2033.4204%2034.051%2033.6316%2034.0208C33.8427%2033.9907%2034.058%2034.0116%2034.2593%2034.0818C34.6393%2034.2368%2035.0532%2034.2901%2035.46%2034.2363C35.8669%2034.1825%2036.2527%2034.0236%2036.5793%2033.7752C36.9045%2033.5769%2037.1834%2033.3113%2037.3973%2032.9962C37.6111%2032.6811%2037.7551%2032.3239%2037.8193%2031.9485C37.8708%2031.5699%2037.8402%2031.1847%2037.7298%2030.8189C37.6194%2030.4532%2037.4317%2030.1154%2037.1793%2029.8285C36.8381%2029.414%2036.3734%2029.1193%2035.8529%2028.9874C35.3325%2028.8555%2034.7835%2028.8932%2034.286%2029.0952C34.0846%2029.1654%2033.8694%2029.1863%2033.6582%2029.1562C33.4471%2029.126%2033.2463%2029.0457%2033.0727%2028.9218C32.8985%2028.7978%2032.7567%2028.6338%2032.6593%2028.4435C32.5618%2028.2532%2032.5115%2028.0423%2032.5127%2027.8285V23.5885H28.246C28.0269%2023.6009%2027.8081%2023.559%2027.609%2023.4666C27.4099%2023.3742%2027.2368%2023.234%2027.1049%2023.0586C26.973%2022.8832%2026.8864%2022.6779%2026.8529%2022.461C26.8194%2022.2441%2026.8399%2022.0222%2026.9127%2021.8152C27.0677%2021.4352%2027.1209%2021.0213%2027.0671%2020.6145C27.0134%2020.2076%2026.8544%2019.8218%2026.606%2019.4952C26.4091%2019.1607%2026.1395%2018.8749%2025.8172%2018.6588C25.4948%2018.4427%2025.128%2018.3019%2024.7438%2018.2468C24.3597%2018.1917%2023.9681%2018.2238%2023.598%2018.3407C23.2279%2018.4575%2022.8889%2018.6561%2022.606%2018.9218C22.3433%2019.1824%2022.1377%2019.4948%2022.0023%2019.8391C21.8668%2020.1834%2021.8045%2020.5521%2021.8193%2020.9218C21.8224%2021.2277%2021.8812%2021.5304%2021.9927%2021.8152C22.0632%2022.0168%2022.0842%2022.2324%2022.054%2022.4438C22.0237%2022.6553%2021.9432%2022.8564%2021.819%2023.0302C21.6949%2023.204%2021.5308%2023.3454%2021.3406%2023.4426C21.1504%2023.5397%2020.9396%2023.5898%2020.726%2023.5885H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2613_3853)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3853%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3853%22%20x1%3D%2213.7453%22%20y1%3D%2221.3705%22%20x2%3D%2240.3876%22%20y2%3D%2235.7024%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2613_3853%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-light" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5204%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7337)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7337)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7337%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7337%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-dark" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2691_4389)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4389)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V36.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4204%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2691_4389)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4389%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4389%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2691_4389%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-light" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7175)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7175)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7175%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7175%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-dark" data-v-a47dbf95><div class="flex flex-col space-y text-black dark:text-white" data-v-a47dbf95><h3 class="font-semibold text-xl" data-v-a47dbf95>Modules</h3><p class="text-gray-700 dark:text-gray-300" data-v-a47dbf95>Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community.</p></div></a></div><div class="row-span-2 col-span-2 order-last lg:order-none lg:col-span-4 text-black dark:text-white documentation-container rounded-xl relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-a47dbf95><div class="gradient-border gradient-border-square gradient-border-documentation" data-v-a47dbf95></div><a href="https://nuxt.com/docs" target="_blank" class="rounded-xl flex lg:flex-col items-center justify-center gap-y-4 bg-white dark:bg-gray-900" data-v-a47dbf95><div class="py-6 lg:py-7 px-5 rounded-xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-y-2" data-v-a47dbf95><div class="flex flex-col space-y text-black dark:text-white" data-v-a47dbf95><h3 class="font-semibold text-xl" data-v-a47dbf95>Documentation</h3><p class="text-gray-700 dark:text-gray-300" data-v-a47dbf95>We highly recommend you take a look at the Nuxt documentation to level up.</p></div><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3947)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3947)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3947%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3947%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3947%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3947%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3947%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3947%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3947%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3947%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-light h-32 sm:h-34" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7273)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7273)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7273%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7273%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7273%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7273%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7273%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7273%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7273%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7273%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-dark h-32 sm:h-34" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3977)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3977)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3977%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.831373%200%200%200%200%200.831373%200%200%200%200%200.847059%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3977%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3977%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3977%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3977%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3977%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3977%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3977%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-light h-32 sm:h-34" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7193)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7193)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7193%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7193%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7193%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7193%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7193%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7193%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7193%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7193%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-dark h-32 sm:h-34" data-v-a47dbf95></div></a></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl examples-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-a47dbf95><div class="gradient-border gradient-border-examples gradient-border-rect" data-v-a47dbf95></div><div class="examples-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-a47dbf95></div><a href="https://nuxt.com/docs/examples" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-a47dbf95><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3941)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2613_3941)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3941%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3941%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-light" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7426)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7426)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7426%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7426%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-dark" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4397)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2691_4397)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4397%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4397%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-light" data-v-a47dbf95> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7182)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7182)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7182%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7182%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-dark" data-v-a47dbf95><div class="flex flex-col space-y text-black dark:text-white" data-v-a47dbf95><h3 class="font-semibold text-xl" data-v-a47dbf95>Examples</h3><p class="text-gray-700 dark:text-gray-300" data-v-a47dbf95>Explore different way of using Nuxt features and get inspired with our list of examples.</p></div></a></div></div></div>',
        1
    ),
    Zo = {
        class: 'relative border-t bg-white dark:bg-black border-gray-200 dark:border-gray-900 w-full h-[70px] flex items-center',
    },
    Go = xt(
        '<div class="absolute inset-x-0 flex items-center justify-center -top-3" data-v-a47dbf95><a href="https://nuxt.com" target="_blank" data-v-a47dbf95><svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a47dbf95><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="white" class="dark:hidden" data-v-a47dbf95></ellipse><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="black" class="hidden dark:block" data-v-a47dbf95></ellipse><path d="M36.0605 15.9209H42.6256C42.8341 15.9209 43.0389 15.8655 43.2195 15.7602C43.4001 15.6548 43.55 15.5033 43.6543 15.3209C43.7585 15.1384 43.8133 14.9315 43.8132 14.7208C43.8131 14.5102 43.7581 14.3033 43.6537 14.1209L39.2448 6.40667C39.1406 6.22427 38.9907 6.0728 38.8101 5.96748C38.6296 5.86217 38.4248 5.80672 38.2163 5.80672C38.0078 5.80672 37.803 5.86217 37.6225 5.96748C37.4419 6.0728 37.292 6.22427 37.1878 6.40667L36.0605 8.38048L33.8563 4.52076C33.752 4.33837 33.602 4.18692 33.4214 4.08163C33.2409 3.97633 33.036 3.9209 32.8275 3.9209C32.619 3.9209 32.4141 3.97633 32.2335 4.08163C32.053 4.18692 31.903 4.33837 31.7987 4.52076L26.3123 14.1209C26.2079 14.3033 26.1529 14.5102 26.1528 14.7208C26.1527 14.9315 26.2076 15.1384 26.3118 15.3209C26.416 15.5033 26.5659 15.6548 26.7465 15.7602C26.9271 15.8655 27.1319 15.9209 27.3405 15.9209H31.4615C33.0943 15.9209 34.2984 15.1964 35.127 13.7829L37.1385 10.2638L38.216 8.38048L41.4496 14.0376H37.1385L36.0605 15.9209ZM31.3943 14.0356L28.5184 14.035L32.8294 6.49263L34.9805 10.2638L33.5402 12.7844C32.99 13.7015 32.3649 14.0356 31.3943 14.0356Z" fill="#00DC82" data-v-a47dbf95></path></svg></a></div>',
        1
    ),
    Wo = { class: 'mx-auto sm:px-6 lg:px-8 px-4 w-full' },
    Ko = { class: 'flex flex-col items-center gap-3 sm:flex-row sm:justify-between' },
    qo = { class: 'flex flex-col-reverse items-center gap-3 sm:flex-row' },
    zo = { class: 'text-sm text-gray-700 dark:text-gray-300' },
    Jo = xt(
        '<ul class="flex items-center justify-end gap-3" data-v-a47dbf95><li data-v-a47dbf95><a href="https://chat.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-a47dbf95><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a47dbf95><path d="M13.3705 1.07322C13.3663 1.06497 13.3594 1.05851 13.351 1.05499C12.3785 0.599487 11.3522 0.274675 10.2978 0.0886873C10.2882 0.0868693 10.2783 0.0881809 10.2695 0.0924354C10.2607 0.0966899 10.2534 0.103671 10.2487 0.112385C10.109 0.371315 9.98212 0.637279 9.86863 0.909263C8.73205 0.733138 7.57595 0.733138 6.43938 0.909263C6.32514 0.636589 6.19624 0.370559 6.05328 0.112385C6.04838 0.10386 6.04107 0.0970401 6.03232 0.0928132C6.02356 0.0885863 6.01377 0.0871486 6.0042 0.0886873C4.9497 0.274285 3.92333 0.599121 2.95092 1.05502C2.9426 1.05862 2.93558 1.06477 2.93082 1.07262C0.986197 4.03716 0.453491 6.92881 0.714819 9.78465C0.715554 9.79165 0.71766 9.79843 0.721013 9.80458C0.724365 9.81073 0.728896 9.81613 0.734334 9.82046C1.86667 10.6763 3.1332 11.3296 4.47988 11.7525C4.48937 11.7554 4.49949 11.7552 4.5089 11.7521C4.51831 11.7489 4.52655 11.7429 4.53251 11.7349C4.82175 11.3331 5.07803 10.9077 5.29876 10.4629C5.3018 10.4568 5.30353 10.4501 5.30384 10.4433C5.30416 10.4365 5.30305 10.4296 5.3006 10.4233C5.29814 10.4169 5.29439 10.4111 5.2896 10.4064C5.2848 10.4016 5.27906 10.3979 5.27277 10.3955C4.86862 10.2377 4.47736 10.0474 4.10266 9.82645C4.09586 9.82236 4.09014 9.81663 4.08602 9.80976C4.0819 9.80288 4.0795 9.79508 4.07903 9.78703C4.07856 9.77899 4.08004 9.77095 4.08334 9.76362C4.08664 9.7563 4.09166 9.74992 4.09794 9.74504C4.17657 9.68491 4.25524 9.62236 4.33032 9.55918C4.33699 9.55358 4.34506 9.54998 4.35362 9.5488C4.36218 9.54762 4.3709 9.54891 4.37879 9.55252C6.83362 10.6962 9.4913 10.6962 11.9171 9.55252C11.925 9.54868 11.9338 9.54721 11.9425 9.54829C11.9512 9.54936 11.9594 9.55293 11.9662 9.55858C12.0413 9.62176 12.1199 9.68491 12.1991 9.74504C12.2054 9.74987 12.2105 9.75621 12.2138 9.7635C12.2172 9.7708 12.2187 9.77882 12.2183 9.78687C12.2179 9.79492 12.2156 9.80274 12.2115 9.80964C12.2074 9.81654 12.2018 9.82232 12.195 9.82645C11.8211 10.0492 11.4295 10.2394 11.0243 10.3949C11.018 10.3974 11.0123 10.4012 11.0075 10.406C11.0028 10.4109 10.9991 10.4167 10.9967 10.4231C10.9943 10.4295 10.9932 10.4364 10.9936 10.4433C10.9939 10.4501 10.9957 10.4568 10.9988 10.4629C11.2232 10.9052 11.4791 11.3301 11.7645 11.7342C11.7703 11.7425 11.7785 11.7487 11.7879 11.7519C11.7974 11.7552 11.8076 11.7554 11.8171 11.7524C13.1662 11.331 14.4349 10.6776 15.5687 9.82046C15.5742 9.81635 15.5788 9.81108 15.5822 9.80501C15.5855 9.79893 15.5876 9.7922 15.5882 9.78525C15.9011 6.4836 15.0644 3.61565 13.3705 1.07322ZM5.66537 8.04574C4.92629 8.04574 4.31731 7.35337 4.31731 6.50305C4.31731 5.65274 4.91448 4.96032 5.66537 4.96032C6.42213 4.96032 7.02522 5.65875 7.01341 6.503C7.01341 7.35337 6.41622 8.04574 5.66537 8.04574ZM10.6496 8.04574C9.91051 8.04574 9.30153 7.35337 9.30153 6.50305C9.30153 5.65274 9.8987 4.96032 10.6496 4.96032C11.4064 4.96032 12.0094 5.65875 11.9976 6.503C11.9976 7.35337 11.4064 8.04574 10.6496 8.04574Z" fill="currentColor" data-v-a47dbf95></path></svg></a></li><li data-v-a47dbf95><a href="https://twitter.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-a47dbf95><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a47dbf95><path d="M17.486 1.75441C16.8596 2.02615 16.1972 2.20579 15.5193 2.28774C16.2345 1.86051 16.7704 1.18839 17.0277 0.396073C16.3556 0.796126 15.62 1.07799 14.8527 1.22941C14.3398 0.673216 13.6568 0.302987 12.9108 0.176783C12.1649 0.0505786 11.3981 0.175539 10.7308 0.532064C10.0635 0.88859 9.53345 1.45652 9.2237 2.14677C8.91396 2.83702 8.84208 3.61056 9.01934 4.34607C7.66053 4.27734 6.33137 3.92353 5.11822 3.30762C3.90506 2.69171 2.83504 1.82748 1.97767 0.771073C1.67695 1.29621 1.51894 1.89093 1.51934 2.49607C1.51827 3.05806 1.65618 3.61159 1.9208 4.10738C2.18541 4.60317 2.56852 5.02583 3.036 5.33774C2.49265 5.32296 1.96091 5.17716 1.486 4.91274V4.95441C1.49008 5.74182 1.766 6.50365 2.2671 7.11104C2.7682 7.71844 3.46372 8.13411 4.236 8.28774C3.93872 8.37821 3.63007 8.42591 3.31934 8.42941C3.10424 8.42689 2.88969 8.40739 2.67767 8.37107C2.89759 9.04842 3.32319 9.64036 3.89523 10.0645C4.46728 10.4887 5.15732 10.724 5.86934 10.7377C4.66701 11.6838 3.18257 12.2001 1.65267 12.2044C1.37412 12.2053 1.09578 12.1886 0.819336 12.1544C2.38136 13.163 4.20168 13.6983 6.061 13.6961C7.34408 13.7094 8.61695 13.4669 9.80527 12.9828C10.9936 12.4987 12.0735 11.7826 12.982 10.8765C13.8905 9.97033 14.6093 8.89223 15.0965 7.70516C15.5836 6.51809 15.8294 5.24585 15.8193 3.96274C15.8193 3.82107 15.8193 3.67107 15.8193 3.52107C16.4732 3.03342 17.0372 2.43559 17.486 1.75441Z" fill="currentColor" data-v-a47dbf95></path></svg></a></li><li data-v-a47dbf95><a href="https://github.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-a47dbf95><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a47dbf95><path d="M9.15269 0.792969C7.17392 0.793051 5.25974 1.49723 3.75266 2.77951C2.24558 4.06179 1.24394 5.83849 0.92697 7.7917C0.609997 9.74492 0.998373 11.7472 2.02261 13.4403C3.04684 15.1333 4.6401 16.4067 6.51729 17.0325C6.93396 17.1055 7.09021 16.8555 7.09021 16.6367C7.09021 16.4388 7.07978 15.7825 7.07978 15.0846C4.98603 15.47 4.44436 14.5742 4.27769 14.1055C4.09276 13.6496 3.79959 13.2456 3.42353 12.9284C3.13186 12.7721 2.71519 12.3867 3.4131 12.3763C3.67959 12.4052 3.93518 12.498 4.15822 12.6467C4.38125 12.7953 4.56516 12.9956 4.69436 13.2305C4.80833 13.4352 4.96159 13.6155 5.14535 13.7609C5.32911 13.9063 5.53975 14.014 5.76522 14.0779C5.99068 14.1418 6.22653 14.1605 6.45926 14.1331C6.69198 14.1056 6.917 14.0325 7.12143 13.918C7.1575 13.4943 7.34631 13.0982 7.65269 12.8034C5.79853 12.5951 3.86103 11.8763 3.86103 8.68883C3.84931 7.86062 4.15493 7.05931 4.71519 6.44924C4.46043 5.72943 4.49024 4.93948 4.79853 4.24091C4.79853 4.24091 5.49642 4.02215 7.09019 5.09508C8.45376 4.72005 9.89328 4.72005 11.2569 5.09508C12.8506 4.01174 13.5485 4.24091 13.5485 4.24091C13.8569 4.93947 13.8867 5.72943 13.6319 6.44924C14.1938 7.05826 14.4997 7.86027 14.486 8.68883C14.486 11.8867 12.5381 12.5951 10.6839 12.8034C10.8828 13.005 11.036 13.247 11.133 13.513C11.2301 13.779 11.2688 14.0628 11.2464 14.3451C11.2464 15.4597 11.236 16.3555 11.236 16.6367C11.236 16.8555 11.3923 17.1159 11.8089 17.0326C13.6828 16.4016 15.2715 15.1253 16.2914 13.4313C17.3112 11.7374 17.6959 9.73616 17.3768 7.78483C17.0576 5.83351 16.0553 4.05911 14.5489 2.77839C13.0425 1.49768 11.1299 0.793998 9.15269 0.792969Z" fill="currentColor" data-v-a47dbf95></path></svg></a></li></ul>',
        1
    ),
    Qo = {
        __name: 'welcome',
        props: {
            appName: { type: String, default: 'Nuxt' },
            version: { type: String, default: '' },
            title: { type: String, default: 'Welcome to Nuxt!' },
            readDocs: {
                type: String,
                default:
                    'We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework.',
            },
            followTwitter: {
                type: String,
                default:
                    'Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips.',
            },
            starGitHub: {
                type: String,
                default:
                    'Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source.',
            },
        },
        setup(e) {
            return (
                Z1({
                    title: `${e.title}`,
                    script: [],
                    style: [
                        {
                            children: `@property --gradient-angle{syntax:'<angle>';inherits:false;initial-value:180deg}@keyframes gradient-rotate{0%{--gradient-angle:0deg}100%{--gradient-angle:360deg}}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2,h3{margin:0}h1,h2,h3{font-size:inherit;font-weight:inherit}img{border-style:solid;max-width:100%;height:auto}svg,img{display:block;vertical-align:middle}ul{list-style:none;margin:0;padding:0}`,
                        },
                    ],
                }),
                (r, n) => (
                    s0(),
                    Vn('div', Vo, [
                        No,
                        z2('footer', Zo, [
                            Go,
                            z2('div', Wo, [
                                z2('div', Ko, [
                                    z2('div', qo, [
                                        z2(
                                            'span',
                                            zo,
                                            '© 2022-' + er(new Date().getFullYear()) + ' Nuxt - MIT License',
                                            1
                                        ),
                                    ]),
                                    Jo,
                                ]),
                            ]),
                        ]),
                    ])
                )
            )
        },
    },
    Yo = $o(Qo, [['__scopeId', 'data-v-a47dbf95']]),
    E3 = {
        __name: 'nuxt-root',
        setup(e) {
            const t = hn(() =>
                    jo(() => import('./error-component.67ecb5dc.js'), [], import.meta.url).then((l) => l.default || l)
                ),
                r = () => null,
                n = _2(),
                s = n.deferHydration()
            X3('_route', wo()), n.hooks.callHookWith((l) => l.map((a) => a()), 'vue:setup')
            const i = Mt()
            o1((l, a, c) => {
                if (
                    (n.hooks
                        .callHook('vue:error', l, a, c)
                        .catch((d) => console.error('[nuxt] Error in `vue:error` hook', d)),
                    Mo(l) && (l.fatal || l.unhandled))
                )
                    return i0(n, Lo, [l]), !1
            })
            const { islandContext: o } = !1
            return (l, a) => (
                s0(),
                z0(
                    sn,
                    { onResolve: y2(s) },
                    {
                        default: Q3(() => [
                            y2(i)
                                ? (s0(), z0(y2(t), { key: 0, error: y2(i) }, null, 8, ['error']))
                                : y2(o)
                                ? (s0(), z0(y2(r), { key: 1, context: y2(o) }, null, 8, ['context']))
                                : (s0(), z0(y2(Yo), { key: 2 })),
                        ]),
                        _: 1,
                    },
                    8,
                    ['onResolve']
                )
            )
        },
    }
globalThis.$fetch || (globalThis.$fetch = ai.create({ baseURL: fi() }))
let y3
const Xo = Fi(Uo)
;(y3 = async function () {
    var s
    const r = !!((s = window.__NUXT__) != null && s.serverRendered) ? ws(E3) : xs(E3),
        n = bi({ vueApp: r })
    try {
        await wi(n, Xo)
    } catch (i) {
        await n.callHook('app:error', i), (n.payload.error = n.payload.error || i)
    }
    try {
        await n.hooks.callHook('app:created', r),
            await n.hooks.callHook('app:beforeMount', r),
            r.mount('#' + go),
            await n.hooks.callHook('app:mounted', r),
            await Dt()
    } catch (i) {
        await n.callHook('app:error', i), (n.payload.error = n.payload.error || i)
    }
}),
    y3().catch((e) => {
        console.error('Error while mounting app:', e)
    })
export {
    s2 as A,
    Q3 as B,
    E1 as C,
    tl as D,
    rl as E,
    jo as _,
    kt as a,
    _2 as b,
    z0 as c,
    hn as d,
    dn as e,
    ts as f,
    Zn as g,
    vt as h,
    gn as i,
    s1 as j,
    rs as k,
    nl as l,
    v1 as m,
    el as n,
    s0 as o,
    we as p,
    k1 as q,
    w0 as r,
    vo as s,
    $o as t,
    y2 as u,
    Z1 as v,
    Ye as w,
    Vn as x,
    z2 as y,
    er as z,
}
