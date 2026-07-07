//#region src/data_type/data_type.ts
var e = class {
	constructor() {
		this._data_type_size = new Int32Array([
			-1,
			1,
			4,
			-1,
			4,
			-1,
			-1,
			-1,
			8,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			8
		]);
	}
	_get_data_type(e) {
		return e & 65280;
	}
	_get_channel(e) {
		return e & 255;
	}
	_get_data_type_size(e) {
		return this._data_type_size[(e & 65280) >> 8];
	}
}, t = class {
	constructor(e, t) {
		this.size = (e + 7 | 0) & -8, t === void 0 ? this.buffer = new ArrayBuffer(this.size) : (this.buffer = t, this.size = t.length), this.u8 = new Uint8Array(this.buffer), this.i32 = new Int32Array(this.buffer), this.f32 = new Float32Array(this.buffer), this.f64 = new Float64Array(this.buffer);
	}
}, n = class {
	constructor(e) {
		this.next = null, this.data = new t(e), this.size = this.data.size, this.buffer = this.data.buffer, this.u8 = this.data.u8, this.i32 = this.data.i32, this.f32 = this.data.f32, this.f64 = this.data.f64;
	}
	resize(e) {
		delete this.data, this.data = new t(e), this.size = this.data.size, this.buffer = this.data.buffer, this.u8 = this.data.u8, this.i32 = this.data.i32, this.f32 = this.data.f32, this.f64 = this.data.f64;
	}
}, r = class {
	constructor() {
		this._pool_head, this._pool_tail, this._pool_size = 0;
	}
	allocate(e, t) {
		this._pool_head = this._pool_tail = new n(t);
		for (let r = 0; r < e; ++r) {
			let e = new n(t);
			this._pool_tail = this._pool_tail.next = e, this._pool_size++;
		}
	}
	get_buffer(e) {
		let t = this._pool_head;
		return this._pool_head = this._pool_head.next, this._pool_size--, e > t.size && t.resize(e), t;
	}
	put_buffer(e) {
		this._pool_tail = this._pool_tail.next = e, this._pool_size++;
	}
};
//#endregion
//#region src/imgproc/resample.ts
function i(e, t, n, r, i) {
	let a = 0, o = e.channel, s = e.cols, c = e.rows, l = e.data, u = t.data, d = s / r, f = c / i, p = d * f * 65536 | 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = n.get_buffer(r * o << 2), j = n.get_buffer(r * o << 2), M = n.get_buffer(s * 2 * 3 << 2), N = A.i32, P = j.i32, F = M.i32;
	for (; m < r; m++) {
		for (S = m * d, C = S + d, v = S + 1 - 1e-6 | 0, y = C | 0, v = Math.min(v, s - 1), y = Math.min(y, s - 1), v > S && (F[x++] = m * o | 0, F[x++] = (v - 1) * o | 0, F[x++] = (v - S) * 256 | 0, a++), g = v; g < y; g++) a++, F[x++] = m * o | 0, F[x++] = g * o | 0, F[x++] = 256;
		C - y > .001 && (a++, F[x++] = m * o | 0, F[x++] = y * o | 0, F[x++] = (C - y) * 256 | 0);
	}
	for (m = 0; m < r * o; m++) N[m] = P[m] = 0;
	for (h = 0, _ = 0; _ < c; _++) {
		for (w = s * _, x = 0; x < a; x++) for (E = F[x * 3], v = F[x * 3 + 1], D = F[x * 3 + 2], b = 0; b < o; b++) N[E + b] += l[w + v + b] * D;
		if ((h + 1) * f <= _ + 1 || _ == c - 1) {
			if (O = Math.max(_ + 1 - (h + 1) * f, 0) * 256 | 0, k = 256 - O, T = r * h, O <= 0) for (m = 0; m < r * o; m++) u[T + m] = Math.min(Math.max((P[m] + N[m] * 256) / p, 0), 255), P[m] = N[m] = 0;
			else for (m = 0; m < r * o; m++) u[T + m] = Math.min(Math.max((P[m] + N[m] * k) / p, 0), 255), P[m] = N[m] * O, N[m] = 0;
			h++;
		} else for (m = 0; m < r * o; m++) P[m] += N[m] * 256, N[m] = 0;
	}
	n.put_buffer(j), n.put_buffer(A), n.put_buffer(M);
}
function a(e, t, n, r, i) {
	let a = 0, o = e.channel, s = e.cols, c = e.rows, l = e.data, u = t.data, d = s / r, f = c / i, p = 1 / (d * f), m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = n.get_buffer(r * o << 2), j = n.get_buffer(r * o << 2), M = n.get_buffer(s * 2 * 3 << 2), N = A.f32, P = j.f32, F = M.f32;
	for (; m < r; m++) {
		for (S = m * d, C = S + d, v = S + 1 - 1e-6 | 0, y = C | 0, v = Math.min(v, s - 1), y = Math.min(y, s - 1), v > S && (a++, F[x++] = (v - 1) * o | 0, F[x++] = m * o | 0, F[x++] = (v - S) * p), g = v; g < y; g++) a++, F[x++] = g * o | 0, F[x++] = m * o | 0, F[x++] = p;
		C - y > .001 && (a++, F[x++] = y * o | 0, F[x++] = m * o | 0, F[x++] = (C - y) * p);
	}
	for (m = 0; m < r * o; m++) N[m] = P[m] = 0;
	for (h = 0, _ = 0; _ < c; _++) {
		for (w = s * _, x = 0; x < a; x++) for (v = F[x * 3] | 0, E = F[x * 3 + 1] | 0, D = F[x * 3 + 2], b = 0; b < o; b++) N[E + b] += l[w + v + b] * D;
		if ((h + 1) * f <= _ + 1 || _ == c - 1) {
			if (O = Math.max(_ + 1 - (h + 1) * f, 0), k = 1 - O, T = r * h, Math.abs(O) < .001) for (m = 0; m < r * o; m++) u[T + m] = P[m] + N[m], P[m] = N[m] = 0;
			else for (m = 0; m < r * o; m++) u[T + m] = P[m] + N[m] * k, P[m] = N[m] * O, N[m] = 0;
			h++;
		} else for (m = 0; m < r * o; m++) P[m] += N[m], N[m] = 0;
	}
	n.put_buffer(j), n.put_buffer(A), n.put_buffer(M);
}
//#endregion
//#region src/imgproc/convol.ts
function o(e, t, n, r, i, a, o, s) {
	let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = a[0], v = 0, y = r << 1, b = r * 3, x = r << 2;
	for (; c < i; ++c) {
		for (p = t[d], l = 0; l < s; ++l) e[l] = p;
		for (l = 0; l <= r - 2; l += 2) e[l + s] = t[d + l], e[l + s + 1] = t[d + l + 1];
		for (; l < r; ++l) e[l + s] = t[d + l];
		for (p = t[d + r - 1], l = r; l < s + r; ++l) e[l + s] = p;
		for (l = 0; l <= r - 4; l += 4) {
			for (p = e[l] * _, m = e[l + 1] * _, h = e[l + 2] * _, g = e[l + 3] * _, u = 1; u < o; ++u) v = a[u], p += e[u + l] * v, m += e[u + l + 1] * v, h += e[u + l + 2] * v, g += e[u + l + 3] * v;
			n[f + l] = Math.min(p >> 8, 255), n[f + l + 1] = Math.min(m >> 8, 255), n[f + l + 2] = Math.min(h >> 8, 255), n[f + l + 3] = Math.min(g >> 8, 255);
		}
		for (; l < r; ++l) {
			for (p = e[l] * _, u = 1; u < o; ++u) p += e[u + l] * a[u];
			n[f + l] = Math.min(p >> 8, 255);
		}
		d += r, f += r;
	}
	for (c = 0; c < r; ++c) {
		for (p = n[c], l = 0; l < s; ++l) e[l] = p;
		for (u = c, l = 0; l <= i - 2; l += 2, u += y) e[l + s] = n[u], e[l + s + 1] = n[u + r];
		for (; l < i; ++l, u += r) e[l + s] = n[u];
		for (p = n[(i - 1) * r + c], l = i; l < s + i; ++l) e[l + s] = p;
		for (f = c, l = 0; l <= i - 4; l += 4, f += x) {
			for (p = e[l] * _, m = e[l + 1] * _, h = e[l + 2] * _, g = e[l + 3] * _, u = 1; u < o; ++u) v = a[u], p += e[u + l] * v, m += e[u + l + 1] * v, h += e[u + l + 2] * v, g += e[u + l + 3] * v;
			n[f] = Math.min(p >> 8, 255), n[f + r] = Math.min(m >> 8, 255), n[f + y] = Math.min(h >> 8, 255), n[f + b] = Math.min(g >> 8, 255);
		}
		for (; l < i; ++l, f += r) {
			for (p = e[l] * _, u = 1; u < o; ++u) p += e[u + l] * a[u];
			n[f] = Math.min(p >> 8, 255);
		}
	}
}
function s(e, t, n, r, i, a, o, s) {
	let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = a[0], v = 0, y = r << 1, b = r * 3, x = r << 2;
	for (; c < i; ++c) {
		for (p = t[d], l = 0; l < s; ++l) e[l] = p;
		for (l = 0; l <= r - 2; l += 2) e[l + s] = t[d + l], e[l + s + 1] = t[d + l + 1];
		for (; l < r; ++l) e[l + s] = t[d + l];
		for (p = t[d + r - 1], l = r; l < s + r; ++l) e[l + s] = p;
		for (l = 0; l <= r - 4; l += 4) {
			for (p = e[l] * _, m = e[l + 1] * _, h = e[l + 2] * _, g = e[l + 3] * _, u = 1; u < o; ++u) v = a[u], p += e[u + l] * v, m += e[u + l + 1] * v, h += e[u + l + 2] * v, g += e[u + l + 3] * v;
			n[f + l] = p, n[f + l + 1] = m, n[f + l + 2] = h, n[f + l + 3] = g;
		}
		for (; l < r; ++l) {
			for (p = e[l] * _, u = 1; u < o; ++u) p += e[u + l] * a[u];
			n[f + l] = p;
		}
		d += r, f += r;
	}
	for (c = 0; c < r; ++c) {
		for (p = n[c], l = 0; l < s; ++l) e[l] = p;
		for (u = c, l = 0; l <= i - 2; l += 2, u += y) e[l + s] = n[u], e[l + s + 1] = n[u + r];
		for (; l < i; ++l, u += r) e[l + s] = n[u];
		for (p = n[(i - 1) * r + c], l = i; l < s + i; ++l) e[l + s] = p;
		for (f = c, l = 0; l <= i - 4; l += 4, f += x) {
			for (p = e[l] * _, m = e[l + 1] * _, h = e[l + 2] * _, g = e[l + 3] * _, u = 1; u < o; ++u) v = a[u], p += e[u + l] * v, m += e[u + l + 1] * v, h += e[u + l + 2] * v, g += e[u + l + 3] * v;
			n[f] = p, n[f + r] = m, n[f + y] = h, n[f + b] = g;
		}
		for (; l < i; ++l, f += r) {
			for (p = e[l] * _, u = 1; u < o; ++u) p += e[u + l] * a[u];
			n[f] = p;
		}
	}
}
//#endregion
//#region src/linalg/linalg_base.ts
function c(e, t, n, r) {
	r = e[t], e[t] = e[n], e[n] = r;
}
function l(e, t) {
	return e = Math.abs(e), t = Math.abs(t), e > t ? (t /= e, e * Math.sqrt(1 + t * t)) : t > 0 ? (e /= t, t * Math.sqrt(1 + e * e)) : 0;
}
//#endregion
//#region src/fast_corners/fast_private.ts
function u(e, t, n, r, i) {
	let a = 0, o = e[t], s = i, c = 0, l = 0, u = 0;
	for (; a < 25; ++a) r[a] = o - e[t + n[a]];
	for (a = 0; a < 16; a += 2) c = Math.min(r[a + 1], r[a + 2]), c = Math.min(c, r[a + 3]), !(c <= s) && (c = Math.min(c, r[a + 4]), c = Math.min(c, r[a + 5]), c = Math.min(c, r[a + 6]), c = Math.min(c, r[a + 7]), c = Math.min(c, r[a + 8]), s = Math.max(s, Math.min(c, r[a])), s = Math.max(s, Math.min(c, r[a + 9])));
	for (l = -s, a = 0; a < 16; a += 2) u = Math.max(r[a + 1], r[a + 2]), u = Math.max(u, r[a + 3]), u = Math.max(u, r[a + 4]), u = Math.max(u, r[a + 5]), !(u >= l) && (u = Math.max(u, r[a + 6]), u = Math.max(u, r[a + 7]), u = Math.max(u, r[a + 8]), l = Math.min(l, Math.max(u, r[a])), l = Math.min(l, Math.max(u, r[a + 9])));
	return -l - 1;
}
//#endregion
//#region src/matmath/matmath.ts
var d = class {
	constructor() {}
	identity(e, t) {
		t === void 0 && (t = 1);
		let n = e.data, r = e.rows, i = e.cols, a = i + 1 | 0, o = r * i, s = o;
		for (; --o >= 0;) n[o] = 0;
		for (o = s, s = 0; s < o;) n[s] = t, s += a;
	}
	transpose(e, t) {
		let n = 0, r = 0, i = t.rows, a = t.cols, o = 0, s = 0, c = 0, l = t.data, u = e.data;
		for (; n < i; s += 1, o += a, n++) for (c = s, r = 0; r < a; c += i, r++) u[c] = l[o + r];
	}
	multiply(e, t, n) {
		let r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = t.cols, f = t.rows, p = n.cols, m = t.data, h = n.data, g = e.data, _ = 0;
		for (; r < f; o += d, r++) for (l = 0, i = 0; i < p; u++, l++, i++) {
			for (c = l, s = o, _ = 0, a = 0; a < d; s++, c += p, a++) _ += m[s] * h[c];
			g[u] = _;
		}
	}
	multiply_ABt(e, t, n) {
		let r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = t.cols, d = t.rows, f = n.rows, p = t.data, m = n.data, h = e.data, g = 0;
		for (; r < d; o += u, r++) for (c = 0, i = 0; i < f; l++, i++) {
			for (s = o, g = 0, a = 0; a < u; s++, c++, a++) g += p[s] * m[c];
			h[l] = g;
		}
	}
	multiply_AtB(e, t, n) {
		let r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = t.cols, f = t.rows, p = n.cols, m = t.data, h = n.data, g = e.data, _ = 0;
		for (; r < d; o++, r++) for (l = 0, i = 0; i < p; u++, l++, i++) {
			for (c = l, s = o, _ = 0, a = 0; a < f; s += d, c += p, a++) _ += m[s] * h[c];
			g[u] = _;
		}
	}
	multiply_AAt(e, t) {
		let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = t.cols, f = t.rows, p = t.data, m = e.data, h = 0;
		for (; n < f; a += f + 1, o = s, n++) for (l = a, u = a, c = o, r = n; r < f; l++, u += f, r++) {
			for (s = o, h = 0, i = 0; i < d; i++) h += p[s++] * p[c++];
			m[l] = h, m[u] = h;
		}
	}
	multiply_AtA(e, t) {
		let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = t.cols, f = t.rows, p = t.data, m = e.data, h = 0;
		for (; n < d; c += d, n++) for (a = n, u = c + n, l = u, r = n; r < d; l++, u += d, r++) {
			for (o = a, s = r, h = 0, i = 0; i < f; o += d, s += d, i++) h += p[o] * p[s];
			m[l] = h, m[u] = h;
		}
	}
	identity_3x3(e, t) {
		t === void 0 && (t = 1);
		let n = e.data;
		n[0] = n[4] = n[8] = t, n[1] = n[2] = n[3] = 0, n[5] = n[6] = n[7] = 0;
	}
	invert_3x3(e, t) {
		let n = e.data, r = t.data, i = n[4], a = n[8], o = n[5], s = n[7], c = n[0], l = c * i, u = c * o, d = n[3], f = n[1], p = d * f, m = n[2], h = d * m, g = n[6], _ = g * f, v = g * m, y = 1 / (l * a - u * s - p * a + h * s + _ * o - v * i);
		r[0] = (i * a - o * s) * y, r[1] = -(f * a - m * s) * y, r[2] = -(-f * o + m * i) * y, r[3] = -(d * a - o * g) * y, r[4] = (c * a - v) * y, r[5] = -(u - h) * y, r[6] = -(-d * s + i * g) * y, r[7] = -(c * s - _) * y, r[8] = (l - p) * y;
	}
	multiply_3x3(e, t, n) {
		let r = e.data, i = t.data, a = n.data, o = i[0], s = i[1], c = i[2], l = i[3], u = i[4], d = i[5], f = i[6], p = i[7], m = i[8], h = a[0], g = a[1], _ = a[2], v = a[3], y = a[4], b = a[5], x = a[6], S = a[7], C = a[8];
		r[0] = o * h + s * v + c * x, r[1] = o * g + s * y + c * S, r[2] = o * _ + s * b + c * C, r[3] = l * h + u * v + d * x, r[4] = l * g + u * y + d * S, r[5] = l * _ + u * b + d * C, r[6] = f * h + p * v + m * x, r[7] = f * g + p * y + m * S, r[8] = f * _ + p * b + m * C;
	}
	mat3x3_determinant(e) {
		let t = e.data;
		return t[0] * t[4] * t[8] - t[0] * t[5] * t[7] - t[3] * t[1] * t[8] + t[3] * t[2] * t[7] + t[6] * t[1] * t[5] - t[6] * t[2] * t[4];
	}
	determinant_3x3(e, t, n, r, i, a, o, s, c) {
		return e * i * c - e * a * s - r * t * c + r * n * s + o * t * a - o * n * i;
	}
}, f = {
	EPSILON: 1.192092896e-7,
	FLT_MIN: 1e-37,
	U8_t: 256,
	S32_t: 512,
	F32_t: 1024,
	S64_t: 2048,
	F64_t: 4096,
	C1_t: 1,
	C2_t: 2,
	C3_t: 3,
	C4_t: 4,
	COLOR_RGBA2GRAY: 0,
	COLOR_RGB2GRAY: 1,
	COLOR_BGRA2GRAY: 2,
	COLOR_BGR2GRAY: 3,
	BOX_BLUR_NOSCALE: 1,
	SVD_U_T: 1,
	SVD_V_T: 2,
	U8C1_t: 257,
	U8C3_t: 259,
	U8C4_t: 260,
	F32C1_t: 1025,
	F32C2_t: 1026,
	S32C1_t: 513,
	S32C2_t: 514
}, p = class {
	constructor(t, n, r, i) {
		this.dt = new e(), this.type = this.dt._get_data_type(r) | 0, this.channel = this.dt._get_channel(r) | 0, this.cols = t | 0, this.rows = n | 0, i === void 0 ? this.allocate() : (this.buffer = i, this.data = this.type & f.U8_t ? this.buffer.u8 : this.type & f.S32_t ? this.buffer.i32 : this.type & f.F32_t ? this.buffer.f32 : this.buffer.f64);
	}
	allocate() {
		delete this.data, delete this.buffer, this.buffer = new t(this.cols * this.dt._get_data_type_size(this.type) * this.channel * this.rows), this.data = this.type & f.U8_t ? this.buffer.u8 : this.type & f.S32_t ? this.buffer.i32 : this.type & f.F32_t ? this.buffer.f32 : this.buffer.f64;
	}
	copy_to(e) {
		let t = e.data, n = this.data, r = 0, i = this.cols * this.rows * this.channel | 0;
		for (; r < i - 4; r += 4) t[r] = n[r], t[r + 1] = n[r + 1], t[r + 2] = n[r + 2], t[r + 3] = n[r + 3];
		for (; r < i; ++r) t[r] = n[r];
	}
	resize(e, t, n) {
		n === void 0 && (n = this.channel), e * this.dt._get_data_type_size(this.type) * n * t > this.buffer.size ? (this.cols = e, this.rows = t, this.channel = n, this.allocate()) : (this.cols = e, this.rows = t, this.channel = n);
	}
}, m = class {
	constructor() {}
	perspective_4point_transform(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		let _ = t, v = l, y = o, b = _ * v * y, x = m, S = _ * x, C = v * S, w = u, T = _ * w, E = a, D = n, O = p, k = D * O, A = k * E, j = O * E * w, M = O * y, N = O * w, P = v * y, F = x * v, I = x * E, L = w * E, R = 1 / (M - N - P + F - I + L), z = _ * O, B = D * E, V = y * _, ee = x * V, H = D * v, U = k * w, W = D * w * E, G = y * x * v, K = x * D, te = -(C - b + T * E - E * S - k * v + A - j + M * v) * R, q = (b - C - z * y + z * w + A - v * B + I * v - j) * R, ne = _, J = (-w * S + ee + H * y - k * y + U - W + I * w - G) * R, Y = (-ee + V * w - K * v + U - W + K * E + G - M * w) * R, X = D, Z = (-T + V + H - B + N - M - F + I) * R, Q = (-S + T + k - H + I - L - M + P) * R;
		_ = r, v = d, y = c, b = _ * v * y, x = g, S = _ * x, C = v * S, w = f, T = _ * w, E = s, D = i, O = h, k = D * O, A = k * E, j = O * E * w, M = O * y, N = O * w, P = v * y, F = x * v, I = x * E, L = w * E, R = 1 / (M - N - P + F - I + L), z = _ * O, B = D * E, V = y * _, ee = x * V, H = D * v, U = k * w, W = D * w * E, G = y * x * v, K = x * D;
		let re = -(C - b + T * E - E * S - k * v + A - j + M * v) * R, ie = (b - C - z * y + z * w + A - v * B + I * v - j) * R, ae = _, oe = (-w * S + ee + H * y - k * y + U - W + I * w - G) * R, se = (-ee + V * w - K * v + U - W + K * E + G - M * w) * R, ce = D, le = (-T + V + H - B + N - M - F + I) * R, ue = (-S + T + k - H + I - L - M + P) * R;
		v = Y - Q * X, y = te * Y, b = te * X, S = J * q, C = ne * J, T = q * Z;
		let de = ne * Z;
		O = 1 / (y - b * Q - S + C * Q + T * X - de * Y), A = -J + X * Z;
		let fe = -J * Q + Y * Z;
		L = -q + ne * Q;
		let pe = te - de;
		B = te * Q - T, V = -q * X + ne * Y;
		let me = b - C, he = y - S;
		W = v * O;
		let ge = L * O, _e = V * O, $ = e.data;
		$[0] = re * W + A * O * ie - fe * O * ae, $[1] = re * ge + pe * O * ie - B * O * ae, $[2] = -re * _e - me * O * ie + he * O * ae, $[3] = oe * W + A * O * se - fe * O * ce, $[4] = oe * ge + pe * O * se - B * O * ce, $[5] = -oe * _e - me * O * se + he * O * ce, $[6] = le * W + A * O * ue - fe * O, $[7] = le * ge + pe * O * ue - B * O, $[8] = -le * _e - me * O * ue + he * O;
	}
	invert_affine_transform(e, t) {
		let n = e.data, r = t.data, i = n[0], a = n[1], o = n[2], s = n[3], c = n[4], l = n[5], u = 1 / (i * c - a * s);
		r[0] = u * c, r[1] = u * -a, r[2] = u * (a * l - o * c), r[3] = u * -s, r[4] = u * i, r[5] = u * (o * s - i * l);
	}
	invert_perspective_transform(e, t) {
		let n = e.data, r = t.data, i = n[0], a = n[1], o = n[2], s = n[3], c = n[4], l = n[5], u = n[6], d = n[7], f = n[8], p = 1 / (i * (c * f - l * d) - a * (s * f - l * u) + o * (s * d - c * u));
		r[0] = p * (c * f - l * d), r[1] = p * (o * d - a * f), r[2] = p * (a * l - o * c), r[3] = p * (l * u - s * f), r[4] = p * (i * f - o * u), r[5] = p * (o * s - i * l), r[6] = p * (s * d - c * u), r[7] = p * (a * u - i * d), r[8] = p * (i * c - a * s);
	}
}, h = class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = -1) {
		this.x = e, this.y = t, this.score = n, this.level = r, this.angle = i;
	}
}, g = [
	8,
	-3,
	9,
	5,
	4,
	2,
	7,
	-12,
	-11,
	9,
	-8,
	2,
	7,
	-12,
	12,
	-13,
	2,
	-13,
	2,
	12,
	1,
	-7,
	1,
	6,
	-2,
	-10,
	-2,
	-4,
	-13,
	-13,
	-11,
	-8,
	-13,
	-3,
	-12,
	-9,
	10,
	4,
	11,
	9,
	-13,
	-8,
	-8,
	-9,
	-11,
	7,
	-9,
	12,
	7,
	7,
	12,
	6,
	-4,
	-5,
	-3,
	0,
	-13,
	2,
	-12,
	-3,
	-9,
	0,
	-7,
	5,
	12,
	-6,
	12,
	-1,
	-3,
	6,
	-2,
	12,
	-6,
	-13,
	-4,
	-8,
	11,
	-13,
	12,
	-8,
	4,
	7,
	5,
	1,
	5,
	-3,
	10,
	-3,
	3,
	-7,
	6,
	12,
	-8,
	-7,
	-6,
	-2,
	-2,
	11,
	-1,
	-10,
	-13,
	12,
	-8,
	10,
	-7,
	3,
	-5,
	-3,
	-4,
	2,
	-3,
	7,
	-10,
	-12,
	-6,
	11,
	5,
	-12,
	6,
	-7,
	5,
	-6,
	7,
	-1,
	1,
	0,
	4,
	-5,
	9,
	11,
	11,
	-13,
	4,
	7,
	4,
	12,
	2,
	-1,
	4,
	4,
	-4,
	-12,
	-2,
	7,
	-8,
	-5,
	-7,
	-10,
	4,
	11,
	9,
	12,
	0,
	-8,
	1,
	-13,
	-13,
	-2,
	-8,
	2,
	-3,
	-2,
	-2,
	3,
	-6,
	9,
	-4,
	-9,
	8,
	12,
	10,
	7,
	0,
	9,
	1,
	3,
	7,
	-5,
	11,
	-10,
	-13,
	-6,
	-11,
	0,
	10,
	7,
	12,
	1,
	-6,
	-3,
	-6,
	12,
	10,
	-9,
	12,
	-4,
	-13,
	8,
	-8,
	-12,
	-13,
	0,
	-8,
	-4,
	3,
	3,
	7,
	8,
	5,
	7,
	10,
	-7,
	-1,
	7,
	1,
	-12,
	3,
	-10,
	5,
	6,
	2,
	-4,
	3,
	-10,
	-13,
	0,
	-13,
	5,
	-13,
	-7,
	-12,
	12,
	-13,
	3,
	-11,
	8,
	-7,
	12,
	-4,
	7,
	6,
	-10,
	12,
	8,
	-9,
	-1,
	-7,
	-6,
	-2,
	-5,
	0,
	12,
	-12,
	5,
	-7,
	5,
	3,
	-10,
	8,
	-13,
	-7,
	-7,
	-4,
	5,
	-3,
	-2,
	-1,
	-7,
	2,
	9,
	5,
	-11,
	-11,
	-13,
	-5,
	-13,
	-1,
	6,
	0,
	-1,
	5,
	-3,
	5,
	2,
	-4,
	-13,
	-4,
	12,
	-9,
	-6,
	-9,
	6,
	-12,
	-10,
	-8,
	-4,
	10,
	2,
	12,
	-3,
	7,
	12,
	12,
	12,
	-7,
	-13,
	-6,
	5,
	-4,
	9,
	-3,
	4,
	7,
	-1,
	12,
	2,
	-7,
	6,
	-5,
	1,
	-13,
	11,
	-12,
	5,
	-3,
	7,
	-2,
	-6,
	7,
	-8,
	12,
	-7,
	-13,
	-7,
	-11,
	-12,
	1,
	-3,
	12,
	12,
	2,
	-6,
	3,
	0,
	-4,
	3,
	-2,
	-13,
	-1,
	-13,
	1,
	9,
	7,
	1,
	8,
	-6,
	1,
	-1,
	3,
	12,
	9,
	1,
	12,
	6,
	-1,
	-9,
	-1,
	3,
	-13,
	-13,
	-10,
	5,
	7,
	7,
	10,
	12,
	12,
	-5,
	12,
	9,
	6,
	3,
	7,
	11,
	5,
	-13,
	6,
	10,
	2,
	-12,
	2,
	3,
	3,
	8,
	4,
	-6,
	2,
	6,
	12,
	-13,
	9,
	-12,
	10,
	3,
	-8,
	4,
	-7,
	9,
	-11,
	12,
	-4,
	-6,
	1,
	12,
	2,
	-8,
	6,
	-9,
	7,
	-4,
	2,
	3,
	3,
	-2,
	6,
	3,
	11,
	0,
	3,
	-3,
	8,
	-8,
	7,
	8,
	9,
	3,
	-11,
	-5,
	-6,
	-4,
	-10,
	11,
	-5,
	10,
	-5,
	-8,
	-3,
	12,
	-10,
	5,
	-9,
	0,
	8,
	-1,
	12,
	-6,
	4,
	-6,
	6,
	-11,
	-10,
	12,
	-8,
	7,
	4,
	-2,
	6,
	7,
	-2,
	0,
	-2,
	12,
	-5,
	-8,
	-5,
	2,
	7,
	-6,
	10,
	12,
	-9,
	-13,
	-8,
	-8,
	-5,
	-13,
	-5,
	-2,
	8,
	-8,
	9,
	-13,
	-9,
	-11,
	-9,
	0,
	1,
	-8,
	1,
	-2,
	7,
	-4,
	9,
	1,
	-2,
	1,
	-1,
	-4,
	11,
	-6,
	12,
	-11,
	-12,
	-9,
	-6,
	4,
	3,
	7,
	7,
	12,
	5,
	5,
	10,
	8,
	0,
	-4,
	2,
	8,
	-9,
	12,
	-5,
	-13,
	0,
	7,
	2,
	12,
	-1,
	2,
	1,
	7,
	5,
	11,
	7,
	-9,
	3,
	5,
	6,
	-8,
	-13,
	-4,
	-8,
	9,
	-5,
	9,
	-3,
	-3,
	-4,
	-7,
	-3,
	-12,
	6,
	5,
	8,
	0,
	-7,
	6,
	-6,
	12,
	-13,
	6,
	-5,
	-2,
	1,
	-10,
	3,
	10,
	4,
	1,
	8,
	-4,
	-2,
	-2,
	2,
	-13,
	2,
	-12,
	12,
	12,
	-2,
	-13,
	0,
	-6,
	4,
	1,
	9,
	3,
	-6,
	-10,
	-3,
	-5,
	-3,
	-13,
	-1,
	1,
	7,
	5,
	12,
	-11,
	4,
	-2,
	5,
	-7,
	-13,
	9,
	-9,
	-5,
	7,
	1,
	8,
	6,
	7,
	-8,
	7,
	6,
	-7,
	-4,
	-7,
	1,
	-8,
	11,
	-7,
	-8,
	-13,
	6,
	-12,
	-8,
	2,
	4,
	3,
	9,
	10,
	-5,
	12,
	3,
	-6,
	-5,
	-6,
	7,
	8,
	-3,
	9,
	-8,
	2,
	-12,
	2,
	8,
	-11,
	-2,
	-10,
	3,
	-12,
	-13,
	-7,
	-9,
	-11,
	0,
	-10,
	-5,
	5,
	-3,
	11,
	8,
	-2,
	-13,
	-1,
	12,
	-1,
	-8,
	0,
	9,
	-13,
	-11,
	-12,
	-5,
	-10,
	-2,
	-10,
	11,
	-3,
	9,
	-2,
	-13,
	2,
	-3,
	3,
	2,
	-9,
	-13,
	-4,
	0,
	-4,
	6,
	-3,
	-10,
	-4,
	12,
	-2,
	-7,
	-6,
	-11,
	-4,
	9,
	6,
	-3,
	6,
	11,
	-13,
	11,
	-5,
	5,
	11,
	11,
	12,
	6,
	7,
	-5,
	12,
	-2,
	-1,
	12,
	0,
	7,
	-4,
	-8,
	-3,
	-2,
	-7,
	1,
	-6,
	7,
	-13,
	-12,
	-8,
	-13,
	-7,
	-2,
	-6,
	-8,
	-8,
	5,
	-6,
	-9,
	-5,
	-1,
	-4,
	5,
	-13,
	7,
	-8,
	10,
	1,
	5,
	5,
	-13,
	1,
	0,
	10,
	-13,
	9,
	12,
	10,
	-1,
	5,
	-8,
	10,
	-9,
	-1,
	11,
	1,
	-13,
	-9,
	-3,
	-6,
	2,
	-1,
	-10,
	1,
	12,
	-13,
	1,
	-8,
	-10,
	8,
	-11,
	10,
	-6,
	2,
	-13,
	3,
	-6,
	7,
	-13,
	12,
	-9,
	-10,
	-10,
	-5,
	-7,
	-10,
	-8,
	-8,
	-13,
	4,
	-6,
	8,
	5,
	3,
	12,
	8,
	-13,
	-4,
	2,
	-3,
	-3,
	5,
	-13,
	10,
	-12,
	4,
	-13,
	5,
	-1,
	-9,
	9,
	-4,
	3,
	0,
	3,
	3,
	-9,
	-12,
	1,
	-6,
	1,
	3,
	2,
	4,
	-8,
	-10,
	-10,
	-10,
	9,
	8,
	-13,
	12,
	12,
	-8,
	-12,
	-6,
	-5,
	2,
	2,
	3,
	7,
	10,
	6,
	11,
	-8,
	6,
	8,
	8,
	-12,
	-7,
	10,
	-6,
	5,
	-3,
	-9,
	-3,
	9,
	-1,
	-13,
	-1,
	5,
	-3,
	-7,
	-3,
	4,
	-8,
	-2,
	-8,
	3,
	4,
	2,
	12,
	12,
	2,
	-5,
	3,
	11,
	6,
	-9,
	11,
	-13,
	3,
	-1,
	7,
	12,
	11,
	-1,
	12,
	4,
	-3,
	0,
	-3,
	6,
	4,
	-11,
	4,
	12,
	2,
	-4,
	2,
	1,
	-10,
	-6,
	-8,
	1,
	-13,
	7,
	-11,
	1,
	-13,
	12,
	-11,
	-13,
	6,
	0,
	11,
	-13,
	0,
	-1,
	1,
	4,
	-13,
	3,
	-9,
	-2,
	-9,
	8,
	-6,
	-3,
	-13,
	-6,
	-8,
	-2,
	5,
	-9,
	8,
	10,
	2,
	7,
	3,
	-9,
	-1,
	-6,
	-1,
	-1,
	9,
	5,
	11,
	-2,
	11,
	-3,
	12,
	-8,
	3,
	0,
	3,
	5,
	-1,
	4,
	0,
	10,
	3,
	-6,
	4,
	5,
	-13,
	0,
	-10,
	5,
	5,
	8,
	12,
	11,
	8,
	9,
	9,
	-6,
	7,
	-4,
	8,
	-12,
	-10,
	4,
	-10,
	9,
	7,
	3,
	12,
	4,
	9,
	-7,
	10,
	-2,
	7,
	0,
	12,
	-2,
	-1,
	-6,
	0,
	-11
];
//#endregion
//#region src/orb/rectify_patch.ts
function _(e, t, n, r, i, a, o, s) {
	let c = Math.cos(n), l = Math.sin(n);
	o.data[0] = c, o.data[1] = -l, o.data[2] = (-c + l) * a * .5 + r, o.data[3] = l, o.data[4] = c, o.data[5] = (-l - c) * a * .5 + i, s.warp_affine(e, t, o, 128);
}
//#endregion
//#region src/yape/yape_utils.ts
function v(e, t, n) {
	let r = 0, i, a;
	for (i = n, a = 0; a < i; a++, r++) i = Math.sqrt(n * n - a * a) + .5 | 0, t[r] = i + e * a;
	for (i--; i < a && i >= 0; i--, r++) a = Math.sqrt(n * n - i * i) + .5 | 0, t[r] = i + e * a;
	for (; -i < a; i--, r++) a = Math.sqrt(n * n - i * i) + .5 | 0, t[r] = i + e * a;
	for (a--; a >= 0; a--, r++) i = -Math.sqrt(n * n - a * a) - .5 | 0, t[r] = i + e * a;
	for (; a > i; a--, r++) i = -Math.sqrt(n * n - a * a) - .5 | 0, t[r] = i + e * a;
	for (i++; i <= 0; i++, r++) a = -Math.sqrt(n * n - i * i) - .5 | 0, t[r] = i + e * a;
	for (; i < -a; i++, r++) a = -Math.sqrt(n * n - i * i) - .5 | 0, t[r] = i + e * a;
	for (a++; a < 0; a++, r++) i = Math.sqrt(n * n - a * a) + .5 | 0, t[r] = i + e * a;
	return t[r] = t[0], t[r + 1] = t[1], r;
}
function y(e, t, n) {
	let r = 0;
	return e[t + 1] != 0 && r++, e[t - 1] != 0 && r++, e[t + n] != 0 && r++, e[t + n + 1] != 0 && r++, e[t + n - 1] != 0 && r++, e[t - n] != 0 && r++, e[t - n + 1] != 0 && r++, e[t - n - 1] != 0 && r++, r;
}
function b(e, t, n, r, i) {
	let a, o;
	if (n > 0) for (t -= r * i, o = -i; o <= i; ++o) {
		for (a = -i; a <= i; ++a) if (e[t + a] > n) return !1;
		t += r;
	}
	else for (t -= r * i, o = -i; o <= i; ++o) {
		for (a = -i; a <= i; ++a) if (e[t + a] < n) return !1;
		t += r;
	}
	return !0;
}
function x(e, t, n, r, i, a, o, s) {
	let c = 0, l = 0, u = o - 1 | 0, d = 0, f = 0, p = 0, m = 0, h = 0;
	if (d = e[t + a[l]], d <= i) if (d >= r) if (f = e[t + a[u]], f <= i) if (f >= r) {
		n[t] = 0;
		return;
	} else if (u++, p = e[t + a[u]], p > i) if (u++, m = e[t + a[u]], m > i) h = 3;
	else if (m < r) h = 6;
	else {
		n[t] = 0;
		return;
	}
	else if (u++, m = e[t + a[u]], m > i) h = 7;
	else if (m < r) h = 2;
	else {
		n[t] = 0;
		return;
	}
	else if (u++, p = e[t + a[u]], p > i) if (u++, m = e[t + a[u]], m > i) h = 3;
	else if (m < r) h = 6;
	else {
		n[t] = 0;
		return;
	}
	else if (p < r) if (u++, m = e[t + a[u]], m > i) h = 7;
	else if (m < r) h = 2;
	else {
		n[t] = 0;
		return;
	}
	else {
		n[t] = 0;
		return;
	}
	else {
		if (f = e[t + a[u]], f > i) {
			n[t] = 0;
			return;
		}
		if (u++, p = e[t + a[u]], p > i) {
			n[t] = 0;
			return;
		}
		if (u++, m = e[t + a[u]], m > i) {
			n[t] = 0;
			return;
		}
		h = 1;
	}
	else {
		if (f = e[t + a[u]], f < r) {
			n[t] = 0;
			return;
		}
		if (u++, p = e[t + a[u]], p < r) {
			n[t] = 0;
			return;
		}
		if (u++, m = e[t + a[u]], m < r) {
			n[t] = 0;
			return;
		}
		h = 0;
	}
	for (l = 1; l <= o; l++) switch (d = e[t + a[l]], h) {
		case 0:
			if (d > i) {
				if (p = m, u++, m = e[t + a[u]], m < r) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 0;
				break;
			}
			if (d < r) {
				if (p > i) {
					n[t] = 0;
					return;
				}
				if (m > i) {
					n[t] = 0;
					return;
				}
				if (p = m, u++, m = e[t + a[u]], m > i) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 8;
				break;
			}
			if (p <= i) {
				n[t] = 0;
				return;
			}
			if (m <= i) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], m > i) {
				c -= d + p, h = 3;
				break;
			}
			if (m < r) {
				c -= d + p, h = 6;
				break;
			}
			n[t] = 0;
			return;
		case 1:
			if (d < r) {
				if (p = m, u++, m = e[t + a[u]], m > i) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 1;
				break;
			}
			if (d > i) {
				if (p < r) {
					n[t] = 0;
					return;
				}
				if (m < r) {
					n[t] = 0;
					return;
				}
				if (p = m, u++, m = e[t + a[u]], m < r) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 9;
				break;
			}
			if (p >= r) {
				n[t] = 0;
				return;
			}
			if (m >= r) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], m < r) {
				c -= d + p, h = 2;
				break;
			}
			if (m > i) {
				c -= d + p, h = 7;
				break;
			}
			n[t] = 0;
			return;
		case 2:
			if (d > i) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], d < r) {
				if (m > i) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 4;
				break;
			}
			if (m > i) {
				c -= d + p, h = 7;
				break;
			}
			if (m < r) {
				c -= d + p, h = 2;
				break;
			}
			n[t] = 0;
			return;
		case 3:
			if (d < r) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], d > i) {
				if (m < r) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 5;
				break;
			}
			if (m > i) {
				c -= d + p, h = 3;
				break;
			}
			if (m < r) {
				c -= d + p, h = 6;
				break;
			}
			n[t] = 0;
			return;
		case 4:
			if (d > i) {
				n[t] = 0;
				return;
			}
			if (d < r) {
				if (p = m, u++, m = e[t + a[u]], m > i) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 1;
				break;
			}
			if (m >= r) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], m < r) {
				c -= d + p, h = 2;
				break;
			}
			if (m > i) {
				c -= d + p, h = 7;
				break;
			}
			n[t] = 0;
			return;
		case 5:
			if (d < r) {
				n[t] = 0;
				return;
			}
			if (d > i) {
				if (p = m, u++, m = e[t + a[u]], m < r) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 0;
				break;
			}
			if (m <= i) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], m > i) {
				c -= d + p, h = 3;
				break;
			}
			if (m < r) {
				c -= d + p, h = 6;
				break;
			}
			n[t] = 0;
			return;
		case 7:
			if (d > i) {
				n[t] = 0;
				return;
			}
			if (d < r) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], m > i) {
				c -= d + p, h = 3;
				break;
			}
			if (m < r) {
				c -= d + p, h = 6;
				break;
			}
			n[t] = 0;
			return;
		case 6:
			if (d > i) {
				n[t] = 0;
				return;
			}
			if (d < r) {
				n[t] = 0;
				return;
			}
			if (p = m, u++, m = e[t + a[u]], m < r) {
				c -= d + p, h = 2;
				break;
			}
			if (m > i) {
				c -= d + p, h = 7;
				break;
			}
			n[t] = 0;
			return;
		case 8:
			if (d > i) {
				if (m < r) {
					n[t] = 0;
					return;
				}
				if (p = m, u++, m = e[t + a[u]], m < r) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 9;
				break;
			}
			if (d < r) {
				if (p = m, u++, m = e[t + a[u]], m > i) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 1;
				break;
			}
			n[t] = 0;
			return;
		case 9:
			if (d < r) {
				if (m > i) {
					n[t] = 0;
					return;
				}
				if (p = m, u++, m = e[t + a[u]], m > i) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 8;
				break;
			}
			if (d > i) {
				if (p = m, u++, m = e[t + a[u]], m < r) {
					n[t] = 0;
					return;
				}
				c -= d + p, h = 0;
				break;
			}
			n[t] = 0;
			return;
		default: break;
	}
	n[t] = c + s * e[t];
}
var S = class {
	constructor(e, t, n) {
		this.dirs = /* @__PURE__ */ new Int32Array(1024), this.dirs_count = v(e, this.dirs, n) | 0, this.scores = new Int32Array(e * t), this.radius = n | 0;
	}
}, C = class {
	constructor() {
		this.level_tables = [], this.tau = 7;
	}
	init(e, t, n, r = 1) {
		n = Math.min(n, 7), n = Math.max(n, 3);
		for (let i = 0; i < r; ++i) this.level_tables[i] = new S(e >> i, t >> i, n);
	}
	detect(e, t, n = 4) {
		let r = this.level_tables[0], i = r.radius | 0, a = i - 1 | 0, o = r.dirs, s = r.dirs_count | 0, c = s >> 1, l = e.data, u = e.cols | 0, d = e.rows | 0, f = u >> 1, p = r.scores, m = 0, h = 0, g = 0, _ = 0, v = 0, S = 0, C = 0, w = 0, T = this.tau | 0, E = 0, D, O = Math.max(i + 1, n) | 0, k = Math.max(i + 1, n) | 0, A = Math.min(u - i - 2, u - n) | 0, j = Math.min(d - i - 2, d - n) | 0;
		for (g = k * u + O | 0, h = k; h < j; ++h, g += u) for (m = O, _ = g; m < A; ++m, ++_) v = l[_] + T, S = l[_] - T, S < l[_ + i] && l[_ + i] < v && S < l[_ - i] && l[_ - i] < v ? p[_] = 0 : x(l, _, p, S, v, o, c, s);
		for (g = k * u + O | 0, h = k; h < j; ++h, g += u) for (m = O, _ = g; m < A; ++m, ++_) w = p[_], C = Math.abs(w), C < 5 ? (++m, ++_) : y(p, _, u) >= 3 && b(p, _, w, f, i) && (D = t[E], D.x = m, D.y = h, D.score = C, ++E, m += a, _ += a);
		return E;
	}
};
//#endregion
//#region src/yape06/yape06_utils.ts
function w(e, t, n, r, i, a, o, s, c) {
	let l = 0, u = 0, d = o * n + a | 0, f = d;
	for (l = o; l < c; ++l, d += n, f = d) for (u = a; u < s; ++u, ++f) f + r < e.length && f - r >= 0 && f + i < e.length && f - i >= 0 ? t[f] = -4 * e[f] + e[f + r] + e[f - r] + e[f + i] + e[f - i] : t[f] = 0;
}
function T(e, t, n, r, i, a, o) {
	let s = -2 * e[t] + e[t + r] + e[t - r], c = -2 * e[t] + e[t + i] + e[t - i], l = e[t + a] + e[t - a] - e[t + o] - e[t - o], u = Math.sqrt((s - c) * (s - c) + 4 * l * l) | 0;
	return Math.min(Math.abs(n - u), Math.abs(-(n + u)));
}
//#endregion
//#region src/motion_estimator/ransac_params_t.ts
var E = class {
	constructor(e = 0, t = .5, n = .5, r = .99) {
		this.size = e, this.thresh = t, this.eps = n, this.prob = r;
	}
	update_iters(e, t) {
		let n = Math.log(1 - this.prob), r = Math.log(1 - Math.pow(1 - e, this.size));
		return (r >= 0 || -n >= t * -r ? t : Math.round(n / r)) | 0;
	}
}, D = {
	name: "@webarkit/jsfeat-next",
	version: "0.7.5",
	description: "Typescript version of jsfeat for WebARKit",
	main: "dist/jsfeatNext.js",
	module: "dist/jsfeatNext.mjs",
	types: "types/src/index.d.ts",
	unpkg: "dist/jsfeatNext.js",
	jsdelivr: "dist/jsfeatNext.js",
	exports: {
		".": {
			types: "./types/src/index.d.ts",
			import: "./dist/jsfeatNext.mjs",
			require: "./dist/jsfeatNext.js"
		},
		"./package.json": "./package.json"
	},
	files: [
		"dist",
		"types",
		"src"
	],
	scripts: {
		"build-ts": "vite build",
		"dev-ts": "vite build --watch",
		"format-check": "prettier --check .",
		format: "prettier --write .",
		test: "vitest run",
		"test:watch": "vitest"
	},
	repository: {
		type: "git",
		url: "git+https://github.com/webarkit/jsfeatNext.git"
	},
	keywords: [
		"jsfeat",
		"jsfeatNext",
		"WebAR",
		"WebARKit",
		"AugmentedReality",
		"computer",
		"vision"
	],
	author: "Walter Perdan @kalwalt",
	license: "LGPL-3.0-or-later",
	bugs: { url: "https://github.com/webarkit/jsfeatNext/issues" },
	homepage: "https://github.com/webarkit/jsfeatNext#readme",
	devDependencies: {
		prettier: "~3.5.3",
		typescript: "^6.0.3",
		vite: "^8.1.3",
		"vite-plugin-dts": "^5.0.3",
		vitest: "^4.1.10"
	}
}, O, k = class {
	constructor() {
		this.dt = new e(), this.cache = new r(), this.cache.allocate(30, 640 * 4);
	}
	get_data_type(e) {
		return this.dt._get_data_type(e);
	}
	get_channel(e) {
		return this.dt._get_channel(e);
	}
	get_data_type_size(e) {
		return this.dt._get_data_type_size(e);
	}
};
O = k, O.VERSION = D.version, O.EPSILON = f.EPSILON, O.FLT_MIN = f.FLT_MIN, O.U8_t = f.U8_t, O.S32_t = f.S32_t, O.F32_t = f.F32_t, O.S64_t = f.S64_t, O.F64_t = f.F64_t, O.C1_t = f.C1_t, O.C2_t = f.C2_t, O.C3_t = f.C3_t, O.C4_t = f.C4_t, O.COLOR_RGBA2GRAY = f.COLOR_RGBA2GRAY, O.COLOR_RGB2GRAY = f.COLOR_RGB2GRAY, O.COLOR_BGRA2GRAY = f.COLOR_BGRA2GRAY, O.COLOR_BGR2GRAY = f.COLOR_BGR2GRAY, O.BOX_BLUR_NOSCALE = f.BOX_BLUR_NOSCALE, O.SVD_U_T = f.SVD_U_T, O.SVD_V_T = f.SVD_V_T, O.U8C1_t = O.U8_t | O.C1_t, O.U8C3_t = O.U8_t | O.C3_t, O.U8C4_t = O.U8_t | O.C4_t, O.F32C1_t = O.F32_t | O.C1_t, O.F32C2_t = O.F32_t | O.C2_t, O.S32C1_t = O.S32_t | O.C1_t, O.S32C2_t = O.S32_t | O.C2_t;
var A = class extends k {
	constructor() {
		super(), this.T0 = new p(3, 3, f.F32_t | f.C1_t), this.T1 = new p(3, 3, f.F32_t | f.C1_t), this.AtA = new p(6, 6, f.F32_t | f.C1_t), this.AtB = new p(6, 1, f.F32_t | f.C1_t);
	}
	sqr(e) {
		return e * e;
	}
	iso_normalize_points(e, t, n, r, i) {
		let a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0;
		for (; a < i; ++a) o += e[a].x, s += e[a].y, u += t[a].x, d += t[a].y;
		for (o /= i, s /= i, u /= i, d /= i, a = 0; a < i; ++a) m = e[a].x - o, h = e[a].y - s, c += Math.sqrt(m * m + h * h), m = t[a].x - u, h = t[a].y - d, f += Math.sqrt(m * m + h * h);
		c /= i, f /= i, l = Math.SQRT2 / c, p = Math.SQRT2 / f, n[0] = n[4] = l, n[2] = -o * l, n[5] = -s * l, n[1] = n[3] = n[6] = n[7] = 0, n[8] = 1, r[0] = r[4] = p, r[2] = -u * p, r[5] = -d * p, r[1] = r[3] = r[6] = r[7] = 0, r[8] = 1;
	}
	have_collinear_points(e, t) {
		let n = 0, r = 0, i = t - 1 | 0, a = 0, o = 0, s = 0, c = 0;
		for (; n < i; ++n) for (a = e[n].x - e[i].x, o = e[n].y - e[i].y, r = 0; r < n; ++r) if (s = e[r].x - e[i].x, c = e[r].y - e[i].y, Math.abs(s * o - c * a) <= f.EPSILON * (Math.abs(a) + Math.abs(o) + Math.abs(s) + Math.abs(c))) return !0;
		return !1;
	}
}, j = class extends A {
	constructor() {
		super();
	}
	run(e, t, n, r) {
		let i = 0, a = 0, o = n.type | f.C1_t, s = n.data, c = this.T0.data, l = this.T1.data, u, m, h = 0, g = 0, _ = new d(), v = new k.linalg();
		this.iso_normalize_points(e, t, c, l, r);
		let y = this.cache.get_buffer(2 * r * 6 << 3), b = this.cache.get_buffer(2 * r << 3), x = new p(6, 2 * r, o, y.data), S = new p(1, 2 * r, o, b.data), C = x.data, w = S.data;
		for (; i < r; ++i) u = e[i], m = t[i], h = c[0] * u.x + c[1] * u.y + c[2], g = c[3] * u.x + c[4] * u.y + c[5], a = i * 2 * 6, C[a] = h, C[a + 1] = g, C[a + 2] = 1, C[a + 3] = 0, C[a + 4] = 0, C[a + 5] = 0, a += 6, C[a] = 0, C[a + 1] = 0, C[a + 2] = 0, C[a + 3] = h, C[a + 4] = g, C[a + 5] = 1, w[i << 1] = l[0] * m.x + l[1] * m.y + l[2], w[(i << 1) + 1] = l[3] * m.x + l[4] * m.y + l[5];
		return _.multiply_AtA(this.AtA, x), _.multiply_AtB(this.AtB, x, S), v.lu_solve(this.AtA, this.AtB), s[0] = this.AtB.data[0], s[1] = this.AtB.data[1], s[2] = this.AtB.data[2], s[3] = this.AtB.data[3], s[4] = this.AtB.data[4], s[5] = this.AtB.data[5], s[6] = 0, s[7] = 0, s[8] = 1, _.invert_3x3(this.T1, this.T1), _.multiply_3x3(n, this.T1, n), _.multiply_3x3(n, n, this.T0), this.cache.put_buffer(y), this.cache.put_buffer(b), 1;
	}
	error(e, t, n, r, i) {
		let a = 0, o, s, c = n.data;
		for (; a < i; ++a) o = e[a], s = t[a], r[a] = this.sqr(s.x - c[0] * o.x - c[1] * o.y - c[2]) + this.sqr(s.y - c[3] * o.x - c[4] * o.y - c[5]);
	}
	check_subset(e, t, n) {
		return !0;
	}
}, M = class extends A {
	constructor() {
		super(), this.mLtL = new p(9, 9, f.F32_t | f.C1_t), this.Evec = new p(9, 9, f.F32_t | f.C1_t);
	}
	run(e, t, n, r) {
		let i = 0, a = 0, o = n.data, s = this.T0.data, c = this.T1.data, l = this.mLtL.data, u = this.Evec.data, p = 0, m = 0, h = 0, g = 0, _ = new k.linalg(), v = new d(), y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = 0;
		for (; i < r; ++i) x += t[i].x, S += t[i].y, T += e[i].x, E += e[i].y;
		for (x /= r, S /= r, T /= r, E /= r, i = 0; i < r; ++i) y += Math.abs(t[i].x - x), b += Math.abs(t[i].y - S), C += Math.abs(e[i].x - T), w += Math.abs(e[i].y - E);
		if (Math.abs(y) < f.EPSILON || Math.abs(b) < f.EPSILON || Math.abs(C) < f.EPSILON || Math.abs(w) < f.EPSILON) return 0;
		for (y = r / y, b = r / b, C = r / C, w = r / w, s[0] = C, s[1] = 0, s[2] = -T * C, s[3] = 0, s[4] = w, s[5] = -E * w, s[6] = 0, s[7] = 0, s[8] = 1, c[0] = 1 / y, c[1] = 0, c[2] = x, c[3] = 0, c[4] = 1 / b, c[5] = S, c[6] = 0, c[7] = 0, c[8] = 1, i = 81; --i >= 0;) l[i] = 0;
		for (i = 0; i < r; ++i) p = (t[i].x - x) * y, m = (t[i].y - S) * b, h = (e[i].x - T) * C, g = (e[i].y - E) * w, l[0] += h * h, l[1] += h * g, l[2] += h, l[6] += h * -p * h, l[7] += h * -p * g, l[8] += h * -p, l[10] += g * g, l[11] += g, l[15] += g * -p * h, l[16] += g * -p * g, l[17] += g * -p, l[20] += 1, l[24] += -p * h, l[25] += -p * g, l[26] += -p, l[30] += h * h, l[31] += h * g, l[32] += h, l[33] += h * -m * h, l[34] += h * -m * g, l[35] += h * -m, l[40] += g * g, l[41] += g, l[42] += g * -m * h, l[43] += g * -m * g, l[44] += g * -m, l[50] += 1, l[51] += -m * h, l[52] += -m * g, l[53] += -m, l[60] += -p * h * -p * h + -m * h * -m * h, l[61] += -p * h * -p * g + -m * h * -m * g, l[62] += -p * h * -p + -m * h * -m, l[70] += -p * g * -p * g + -m * g * -m * g, l[71] += -p * g * -p + -m * g * -m, l[80] += -p * -p + -m * -m;
		for (i = 0; i < 9; ++i) for (a = 0; a < i; ++a) l[i * 9 + a] = l[a * 9 + i];
		return _.eigenVV(this.mLtL, this.Evec), o[0] = u[72], o[1] = u[73], o[2] = u[74], o[3] = u[75], o[4] = u[76], o[5] = u[77], o[6] = u[78], o[7] = u[79], o[8] = u[80], v.multiply_3x3(n, this.T1, n), v.multiply_3x3(n, n, this.T0), p = 1 / o[8], o[0] *= p, o[1] *= p, o[2] *= p, o[3] *= p, o[4] *= p, o[5] *= p, o[6] *= p, o[7] *= p, o[8] = 1, 1;
	}
	error(e, t, n, r, i) {
		let a = 0, o, s, c = 0, l = 0, u = 0, d = n.data;
		for (; a < i; ++a) o = e[a], s = t[a], c = 1 / (d[6] * o.x + d[7] * o.y + 1), l = (d[0] * o.x + d[1] * o.y + d[2]) * c - s.x, u = (d[3] * o.x + d[4] * o.y + d[5]) * c - s.y, r[a] = l * l + u * u;
	}
	check_subset(e, t, n) {
		let r = new d();
		if (n == 4) {
			let n = 0, i = e[0], a = e[1], o = e[2], s = e[3], c = t[0], l = t[1], u = t[2], d = t[3], f = i.x, p = i.y, m = a.x, h = a.y, g = o.x, _ = o.y, v = c.x, y = c.y, b = l.x, x = l.y, S = u.x, C = u.y, w = r.determinant_3x3(f, p, 1, m, h, 1, g, _, 1), T = r.determinant_3x3(v, y, 1, b, x, 1, S, C, 1);
			if (w * T < 0 && n++, f = a.x, p = a.y, m = o.x, h = o.y, g = s.x, _ = s.y, v = l.x, y = l.y, b = u.x, x = u.y, S = d.x, C = d.y, w = r.determinant_3x3(f, p, 1, m, h, 1, g, _, 1), T = r.determinant_3x3(v, y, 1, b, x, 1, S, C, 1), w * T < 0 && n++, f = i.x, p = i.y, m = o.x, h = o.y, g = s.x, _ = s.y, v = c.x, y = c.y, b = u.x, x = u.y, S = d.x, C = d.y, w = r.determinant_3x3(f, p, 1, m, h, 1, g, _, 1), T = r.determinant_3x3(v, y, 1, b, x, 1, S, C, 1), w * T < 0 && n++, f = i.x, p = i.y, m = a.x, h = a.y, g = s.x, _ = s.y, v = c.x, y = c.y, b = l.x, x = l.y, S = d.x, C = d.y, w = r.determinant_3x3(f, p, 1, m, h, 1, g, _, 1), T = r.determinant_3x3(v, y, 1, b, x, 1, S, C, 1), w * T < 0 && n++, n != 0 && n != 4) return !1;
		}
		return !0;
	}
};
k.cache = r, k.pyramid_t = class extends k {
	constructor(e) {
		super(), this.levels = e | 0, this.data = Array(e);
		let t = new k.imgproc();
		this.pyrdown = t.pyrdown;
	}
	allocate(e, t, n) {
		let r = this.levels;
		for (; --r >= 0;) this.data[r] = new p(e >> r, t >> r, n);
	}
	build(e, t) {
		t === void 0 && (t = !0);
		let n = 2, r = e, i = this.data[0];
		if (!t) {
			let t = e.cols * e.rows;
			for (; --t >= 0;) i.data[t] = e.data[t];
		}
		for (i = this.data[1], this.pyrdown(r, i); n < this.levels; ++n) r = i, i = this.data[n], this.pyrdown(r, i);
	}
}, k.transform = m, k.matrix_t = p, k.keypoint_t = h, k.fast_corners = class extends k {
	constructor() {
		super(), this.offsets16 = new Int32Array([
			0,
			3,
			1,
			3,
			2,
			2,
			3,
			1,
			3,
			0,
			3,
			-1,
			2,
			-2,
			1,
			-3,
			0,
			-3,
			-1,
			-3,
			-2,
			-2,
			-3,
			-1,
			-3,
			0,
			-3,
			1,
			-2,
			2,
			-1,
			3
		]), this.threshold_tab = /* @__PURE__ */ new Uint8Array(512), this._threshold = 20, this.pixel_off = /* @__PURE__ */ new Int32Array(25), this.score_diff = /* @__PURE__ */ new Int32Array(25);
	}
	set_threshold(e) {
		this._threshold = Math.min(Math.max(e, 0), 255);
		for (let e = -255; e <= 255; ++e) this.threshold_tab[e + 255] = e < -this._threshold ? 1 : e > this._threshold ? 2 : 0;
		return this._threshold;
	}
	detect(e, t, n) {
		n === void 0 && (n = 3);
		let r = e.data, i = e.cols, a = e.rows, o = 0, s = 0, c = 0, l = 0, d = 0, f = 0, p = this.cache.get_buffer(3 * i), m = this.cache.get_buffer((i + 1) * 3 << 2), h = p.u8, g = m.i32, _ = this.pixel_off, v = this.score_diff, y = Math.max(3, n), b = Math.min(a - 2, a - n), x = Math.max(3, n), S = Math.min(i - 3, i - n), C = 0, w = 0, T, E = u, D = this.threshold_tab, O = this._threshold, k = 0, A = 0, j = 0, M = 0, N = 0, P = 0, F = 0, I = 0, L = 0, R = 0, z = 0, B = 0;
		this._cmp_offsets(_, i, 16);
		let V = _[0], ee = _[1], H = _[2], U = _[3], W = _[4], G = _[5], K = _[6], te = _[7], q = _[8], ne = _[9], J = _[10], Y = _[11], X = _[12], Z = _[13], Q = _[14], re = _[15];
		for (o = 0; o < i * 3; ++o) h[o] = 0;
		for (o = y; o < b; ++o) {
			for (F = o * i + x | 0, f = (o - 3) % 3, P = f * i | 0, N = f * (i + 1) | 0, s = 0; s < i; ++s) h[P + s] = 0;
			if (M = 0, o < b - 1) {
				for (s = x; s < S; ++s, ++F) if (k = r[F], A = -k + 255, j = D[A + r[F + V]] | D[A + r[F + q]], j != 0 && (j &= D[A + r[F + H]] | D[A + r[F + J]], j &= D[A + r[F + W]] | D[A + r[F + X]], j &= D[A + r[F + K]] | D[A + r[F + Q]], j != 0)) {
					if (j &= D[A + r[F + ee]] | D[A + r[F + ne]], j &= D[A + r[F + U]] | D[A + r[F + Y]], j &= D[A + r[F + G]] | D[A + r[F + Z]], j &= D[A + r[F + te]] | D[A + r[F + re]], j & 1) for (l = k - O, C = 0, c = 0; c < 25; ++c) if (d = r[F + _[c]], d < l) {
						if (++C, C > 8) {
							++M, g[N + M] = s, h[P + s] = E(r, F, _, v, O);
							break;
						}
					} else C = 0;
					if (j & 2) for (l = k + O, C = 0, c = 0; c < 25; ++c) if (d = r[F + _[c]], d > l) {
						if (++C, C > 8) {
							++M, g[N + M] = s, h[P + s] = E(r, F, _, v, O);
							break;
						}
					} else C = 0;
				}
			}
			if (g[N + i] = M, o != y) for (f = (o - 4 + 3) % 3, I = f * i | 0, N = f * (i + 1) | 0, f = (o - 5 + 3) % 3, L = f * i | 0, M = g[N + i], c = 0; c < M; ++c) s = g[N + c], R = s + 1 | 0, z = s - 1 | 0, B = h[I + s], B > h[I + R] && B > h[I + z] && B > h[L + z] && B > h[L + s] && B > h[L + R] && B > h[P + z] && B > h[P + s] && B > h[P + R] && (T = t[w], T.x = s, T.y = o - 1, T.score = B, w++);
		}
		return this.cache.put_buffer(p), this.cache.put_buffer(m), w;
	}
	_cmp_offsets(e, t, n) {
		let r = 0, i = this.offsets16;
		for (; r < n; ++r) e[r] = i[r << 1] + i[(r << 1) + 1] * t;
		for (; r < 25; ++r) e[r] = e[r - n];
	}
}, k.imgproc = class extends k {
	constructor() {
		super();
	}
	grayscale(e, t, n, r, i) {
		i === void 0 && (i = f.COLOR_RGBA2GRAY);
		let a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 4899, p = 9617, m = 1868, h = 4;
		(i == f.COLOR_BGRA2GRAY || i == f.COLOR_BGR2GRAY) && (d = 1868, m = 4899), (i == f.COLOR_RGB2GRAY || i == f.COLOR_BGR2GRAY) && (h = 3);
		let g = h << 1, _ = h * 3 | 0;
		r.resize(t, n, 1);
		let v = r.data;
		for (o = 0; o < n; ++o, c += t, s += t * h) {
			for (a = 0, l = s, u = c; a <= t - 4; a += 4, l += h << 2, u += 4) v[u] = e[l] * d + e[l + 1] * p + e[l + 2] * m + 8192 >> 14, v[u + 1] = e[l + h] * d + e[l + h + 1] * p + e[l + h + 2] * m + 8192 >> 14, v[u + 2] = e[l + g] * d + e[l + g + 1] * p + e[l + g + 2] * m + 8192 >> 14, v[u + 3] = e[l + _] * d + e[l + _ + 1] * p + e[l + _ + 2] * m + 8192 >> 14;
			for (; a < t; ++a, ++u, l += h) v[u] = e[l] * d + e[l + 1] * p + e[l + 2] * m + 8192 >> 14;
		}
	}
	resample(e, t, n, r) {
		let o = e.rows, s = e.cols;
		o > r && s > n && (t.resize(n, r, e.channel), e.type & f.U8_t && t.type & f.U8_t && o * s / (r * n) < 256 ? i(e, t, this.cache, n, r) : a(e, t, this.cache, n, r));
	}
	box_blur_gray(e, t, n, r) {
		r === void 0 && (r = 0);
		let i = e.cols, a = e.rows, o = a << 1, s = i << 1, c = 0, l = 0, u = 0, d = 0, p = (n << 1) + 1 | 0, m = n + 1 | 0, h = m + 1 | 0, g = r & f.BOX_BLUR_NOSCALE ? 1 : 1 / (p * p), _ = this.cache.get_buffer(i * a << 2), v = 0, y = 0, b = 0, x = 0, S = 0, C = _.i32, w = e.data, T = 0;
		for (t.resize(i, a, e.channel), u = 0; u < a; ++u) {
			for (y = u, v = m * w[b], c = b + 1 | 0, d = b + n | 0; c <= d; ++c) v += w[c];
			for (x = b + m | 0, S = b, T = w[S], l = 0; l < n; ++l, y += a) C[y] = v, v += w[x] - T, x++;
			for (; l < i - h; l += 2, y += o) C[y] = v, v += w[x] - w[S], C[y + a] = v, v += w[x + 1] - w[S + 1], x += 2, S += 2;
			for (; l < i - m; ++l, y += a) C[y] = v, v += w[x] - w[S], x++, S++;
			for (T = w[x - 1]; l < i; ++l, y += a) C[y] = v, v += T - w[S], S++;
			b += i;
		}
		if (b = 0, w = t.data, g == 1) for (u = 0; u < i; ++u) {
			for (y = u, v = m * C[b], c = b + 1 | 0, d = b + n | 0; c <= d; ++c) v += C[c];
			for (x = b + m, S = b, T = C[S], l = 0; l < n; ++l, y += i) w[y] = v, v += C[x] - T, x++;
			for (; l < a - h; l += 2, y += s) w[y] = v, v += C[x] - C[S], w[y + i] = v, v += C[x + 1] - C[S + 1], x += 2, S += 2;
			for (; l < a - m; ++l, y += i) w[y] = v, v += C[x] - C[S], x++, S++;
			for (T = C[x - 1]; l < a; ++l, y += i) w[y] = v, v += T - C[S], S++;
			b += a;
		}
		else for (u = 0; u < i; ++u) {
			for (y = u, v = m * C[b], c = b + 1 | 0, d = b + n | 0; c <= d; ++c) v += C[c];
			for (x = b + m, S = b, T = C[S], l = 0; l < n; ++l, y += i) w[y] = v * g, v += C[x] - T, x++;
			for (; l < a - h; l += 2, y += s) w[y] = v * g, v += C[x] - C[S], w[y + i] = v * g, v += C[x + 1] - C[S + 1], x += 2, S += 2;
			for (; l < a - m; ++l, y += i) w[y] = v * g, v += C[x] - C[S], x++, S++;
			for (T = C[x - 1]; l < a; ++l, y += i) w[y] = v * g, v += T - C[S], S++;
			b += a;
		}
		this.cache.put_buffer(_);
	}
	gaussian_blur(e, t, n, r) {
		let i = new k.math();
		r === void 0 && (r = 0), n === void 0 && (n = 0), n = n == 0 ? Math.max(1, 4 * r + 1 - 1e-8) * 2 + 1 | 0 : n;
		let a = n >> 1, c = e.cols, l = e.rows, u = e.type, d = u & f.U8_t;
		t.resize(c, l, e.channel);
		let p = e.data, m = t.data, h, g, _ = n + Math.max(l, c) | 0, v = this.cache.get_buffer(_ << 2), y = this.cache.get_buffer(n << 2);
		d ? (h = v.i32, g = y.i32) : u & f.S32_t ? (h = v.i32, g = y.f32) : (h = v.f32, g = y.f32), i.get_gaussian_kernel(n, r, g, u), d ? o(h, p, m, c, l, g, n, a) : s(h, p, m, c, l, g, n, a), this.cache.put_buffer(v), this.cache.put_buffer(y);
	}
	hough_transform(e, t, n, r) {
		let i, a, o = e.data, s = e.cols, c = e.rows, l = s, u = Math.round((Math.PI - 0) / n), d = Math.round(((s + c) * 2 + 1) / t), f = 1 / t, p = new Int32Array((u + 2) * (d + 2)), m = new Float32Array(u), h = new Float32Array(u), g = 0, _ = 0;
		for (; g < u; g++) m[g] = Math.sin(_) * f, h[g] = Math.cos(_) * f, _ += n;
		for (a = 0; a < c; a++) for (let e = 0; e < s; e++) if (o[a * l + e] != 0) for (g = 0; g < u; g++) i = Math.round(e * h[g] + a * m[g]), i += (d - 1) / 2, p[(g + 1) * (d + 2) + i + 1] += 1;
		let v = [];
		for (i = 0; i < d; i++) for (g = 0; g < u; g++) {
			let e = (g + 1) * (d + 2) + i + 1;
			p[e] > r && p[e] > p[e - 1] && p[e] >= p[e + 1] && p[e] > p[e - d - 2] && p[e] >= p[e + d + 2] && v.push(e);
		}
		v.sort(function(e, t) {
			return p[e] > p[t] || p[e] == p[t] && e < t;
		});
		let y = Math.min(u * d, v.length), b = 1 / (d + 2), x = [];
		for (a = 0; a < y; a++) {
			let e = v[a];
			g = Math.floor(e * b) - 1, i = e - (g + 1) * (d + 2) - 1;
			let r = (i - (d - 1) * .5) * t, o = g * n;
			x.push([r, o]);
		}
		return x;
	}
	pyrdown(e, t, n, r) {
		n === void 0 && (n = 0), r === void 0 && (r = 0);
		let i = e.cols, a = e.rows, o = i >> 1, s = a >> 1, c = o - (n << 1), l = s - (r << 1), u = 0, d = 0, f = n + r * i, p = 0, m = 0, h = 0;
		t.resize(o, s, e.channel);
		let g = e.data, _ = t.data;
		for (d = 0; d < l; ++d) {
			for (p = f, h = m, u = 0; u <= c - 2; u += 2, h += 2, p += 4) _[h] = g[p] + g[p + 1] + g[p + i] + g[p + i + 1] + 2 >> 2, _[h + 1] = g[p + 2] + g[p + 3] + g[p + i + 2] + g[p + i + 3] + 2 >> 2;
			for (; u < c; ++u, ++h, p += 2) _[h] = g[p] + g[p + 1] + g[p + i] + g[p + i + 1] + 2 >> 2;
			f += i << 1, m += o;
		}
	}
	scharr_derivatives(e, t) {
		let n = e.cols, r = e.rows, i = n << 1, a = 0, o = 0, s = 0, c, l, u, d, p, m, h = 0, g = 0, _ = 0, v = 0, y, b;
		t.resize(n, r, 2);
		let x = e.data, S = t.data, C = this.cache.get_buffer(n + 2 << 2), w = this.cache.get_buffer(n + 2 << 2);
		for (e.type & f.U8_t || e.type & f.S32_t ? (y = C.i32, b = w.i32) : (y = C.f32, b = w.f32); o < r; ++o, g += n) {
			for (h = (o > 0 ? o - 1 : 1) * n | 0, _ = (o < r - 1 ? o + 1 : r - 2) * n | 0, v = o * i | 0, a = 0, s = 1; a <= n - 2; a += 2, s += 2) c = x[h + a], l = x[_ + a], y[s] = (c + l) * 3 + x[g + a] * 10, b[s] = l - c, c = x[h + a + 1], l = x[_ + a + 1], y[s + 1] = (c + l) * 3 + x[g + a + 1] * 10, b[s + 1] = l - c;
			for (; a < n; ++a, ++s) c = x[h + a], l = x[_ + a], y[s] = (c + l) * 3 + x[g + a] * 10, b[s] = l - c;
			for (a = n + 1 | 0, y[0] = y[1], y[a] = y[n], b[0] = b[1], b[a] = b[n], a = 0; a <= n - 4; a += 4) c = b[a + 2], l = b[a + 1], u = b[a + 3], d = b[a + 4], p = y[a + 2], m = y[a + 3], S[v++] = p - y[a], S[v++] = (c + b[a]) * 3 + l * 10, S[v++] = m - y[a + 1], S[v++] = (u + l) * 3 + c * 10, S[v++] = y[a + 4] - p, S[v++] = (d + c) * 3 + u * 10, S[v++] = y[a + 5] - m, S[v++] = (b[a + 5] + u) * 3 + d * 10;
			for (; a < n; ++a) S[v++] = y[a + 2] - y[a], S[v++] = (b[a + 2] + b[a]) * 3 + b[a + 1] * 10;
		}
		this.cache.put_buffer(C), this.cache.put_buffer(w);
	}
	sobel_derivatives(e, t) {
		let n = e.cols, r = e.rows, i = n << 1, a = 0, o = 0, s = 0, c, l, u, d, p, m, h = 0, g = 0, _ = 0, v = 0, y, b;
		t.resize(n, r, 2);
		let x = e.data, S = t.data, C = this.cache.get_buffer(n + 2 << 2), w = this.cache.get_buffer(n + 2 << 2);
		for (e.type & f.U8_t || e.type & f.S32_t ? (y = C.i32, b = w.i32) : (y = C.f32, b = w.f32); o < r; ++o, g += n) {
			for (h = (o > 0 ? o - 1 : 1) * n | 0, _ = (o < r - 1 ? o + 1 : r - 2) * n | 0, v = o * i | 0, a = 0, s = 1; a <= n - 2; a += 2, s += 2) c = x[h + a], l = x[_ + a], y[s] = c + l + x[g + a] * 2, b[s] = l - c, c = x[h + a + 1], l = x[_ + a + 1], y[s + 1] = c + l + x[g + a + 1] * 2, b[s + 1] = l - c;
			for (; a < n; ++a, ++s) c = x[h + a], l = x[_ + a], y[s] = c + l + x[g + a] * 2, b[s] = l - c;
			for (a = n + 1 | 0, y[0] = y[1], y[a] = y[n], b[0] = b[1], b[a] = b[n], a = 0; a <= n - 4; a += 4) c = b[a + 2], l = b[a + 1], u = b[a + 3], d = b[a + 4], p = y[a + 2], m = y[a + 3], S[v++] = p - y[a], S[v++] = c + b[a] + l * 2, S[v++] = m - y[a + 1], S[v++] = u + l + c * 2, S[v++] = y[a + 4] - p, S[v++] = d + c + u * 2, S[v++] = y[a + 5] - m, S[v++] = b[a + 5] + u + d * 2;
			for (; a < n; ++a) S[v++] = y[a + 2] - y[a], S[v++] = b[a + 2] + b[a] + b[a + 1] * 2;
		}
		this.cache.put_buffer(C), this.cache.put_buffer(w);
	}
	compute_integral_image(e, t, n, r) {
		let i = e.cols | 0, a = e.rows | 0, o = e.data, s = i + 1 | 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0;
		if (t && n) {
			for (; f < s; ++f) t[f] = 0, n[f] = 0;
			for (u = s + 1 | 0, d = 1, f = 0, h = 0; f < a; ++f, ++u, ++d) {
				for (c = l = 0, p = 0; p <= i - 2; p += 2, h += 2, u += 2, d += 2) m = o[h], c += m, l += m * m, t[u] = t[d] + c, n[u] = n[d] + l, m = o[h + 1], c += m, l += m * m, t[u + 1] = t[d + 1] + c, n[u + 1] = n[d + 1] + l;
				for (; p < i; ++p, ++h, ++u, ++d) m = o[h], c += m, l += m * m, t[u] = t[d] + c, n[u] = n[d] + l;
			}
		} else if (t) {
			for (; f < s; ++f) t[f] = 0;
			for (u = s + 1 | 0, d = 1, f = 0, h = 0; f < a; ++f, ++u, ++d) {
				for (c = 0, p = 0; p <= i - 2; p += 2, h += 2, u += 2, d += 2) c += o[h], t[u] = t[d] + c, c += o[h + 1], t[u + 1] = t[d + 1] + c;
				for (; p < i; ++p, ++h, ++u, ++d) c += o[h], t[u] = t[d] + c;
			}
		} else if (n) {
			for (; f < s; ++f) n[f] = 0;
			for (u = s + 1 | 0, d = 1, f = 0, h = 0; f < a; ++f, ++u, ++d) {
				for (l = 0, p = 0; p <= i - 2; p += 2, h += 2, u += 2, d += 2) m = o[h], l += m * m, n[u] = n[d] + l, m = o[h + 1], l += m * m, n[u + 1] = n[d + 1] + l;
				for (; p < i; ++p, ++h, ++u, ++d) m = o[h], l += m * m, n[u] = n[d] + l;
			}
		}
		if (r) {
			for (f = 0; f < s; ++f) r[f] = 0;
			for (u = s + 1 | 0, d = 0, f = 0, h = 0; f < a; ++f, ++u, ++d) {
				for (p = 0; p <= i - 2; p += 2, h += 2, u += 2, d += 2) r[u] = o[h] + r[d], r[u + 1] = o[h + 1] + r[d + 1];
				for (; p < i; ++p, ++h, ++u, ++d) r[u] = o[h] + r[d];
			}
			for (u = s + i | 0, d = i, f = 0; f < a; ++f, u += s, d += s) r[u] += r[d];
			for (p = i - 1; p > 0; --p) for (u = p + a * s, d = u - s, f = a; f > 0; --f, u -= s, d -= s) r[u] += r[d] + r[d + 1];
		}
	}
	equalize_histogram(e, t) {
		let n = e.cols, r = e.rows, i = e.data;
		t.resize(n, r, e.channel);
		let a = t.data, o = n * r, s = 0, c = 0, l, u, d = this.cache.get_buffer(1024);
		for (l = d.i32; s < 256; ++s) l[s] = 0;
		for (s = 0; s < o; ++s) ++l[i[s]];
		for (c = l[0], s = 1; s < 256; ++s) c = l[s] += c;
		for (u = 255 / o, s = 0; s < o; ++s) a[s] = l[i[s]] * u + .5 | 0;
		this.cache.put_buffer(d);
	}
	canny(e, t, n, r) {
		let i = e.cols, a = e.rows;
		e.data, t.resize(i, a, e.channel);
		let o = t.data, s = 0, c = 0, l = 0, u = i << 1, d = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = this.cache.get_buffer(a * u << 2), S = this.cache.get_buffer(3 * (i + 2) << 2), C = this.cache.get_buffer((a + 2) * (i + 2) << 2), w = this.cache.get_buffer(a * i << 2), T = S.i32, E = C.i32, D = w.i32, O = x.i32, k = new p(i, a, f.S32C2_t, x.data), A = 1, j = i + 2 + 1 | 0, M = 2 * (i + 2) + 1 | 0, N = i + 2 | 0, P = N + 1 | 0, F = 0;
		for (this.sobel_derivatives(e, k), n > r && (s = n, n = r, r = s), s = 3 * (i + 2) | 0; --s >= 0;) T[s] = 0;
		for (s = (a + 2) * (i + 2) | 0; --s >= 0;) E[s] = 0;
		for (; c < i; ++c, l += 2) g = O[l], _ = O[l + 1], T[j + c] = (g ^ g >> 31) - (g >> 31) + ((_ ^ _ >> 31) - (_ >> 31));
		for (s = 1; s <= a; ++s, l += u) {
			if (s == a) for (c = M + i; --c >= M;) T[c] = 0;
			else for (c = 0; c < i; c++) g = O[l + (c << 1)], _ = O[l + (c << 1) + 1], T[M + c] = (g ^ g >> 31) - (g >> 31) + ((_ ^ _ >> 31) - (_ >> 31));
			for (d = l - u | 0, E[P - 1] = 0, m = 0, c = 0; c < i; ++c, d += 2) {
				if (h = T[j + c], h > n) {
					if (g = O[d], _ = O[d + 1], v = g ^ _, g = (g ^ g >> 31) - (g >> 31) | 0, _ = (_ ^ _ >> 31) - (_ >> 31) | 0, y = g * 13573, b = y + (g + g << 15), _ <<= 15, _ < y) {
						if (h > T[j + c - 1] && h >= T[j + c + 1]) {
							h > r && !m && E[P + c - N] != 2 ? (E[P + c] = 2, m = 1, D[F++] = P + c) : E[P + c] = 1;
							continue;
						}
					} else if (_ > b) {
						if (h > T[A + c] && h >= T[M + c]) {
							h > r && !m && E[P + c - N] != 2 ? (E[P + c] = 2, m = 1, D[F++] = P + c) : E[P + c] = 1;
							continue;
						}
					} else if (v = v < 0 ? -1 : 1, h > T[A + c - v] && h > T[M + c + v]) {
						h > r && !m && E[P + c - N] != 2 ? (E[P + c] = 2, m = 1, D[F++] = P + c) : E[P + c] = 1;
						continue;
					}
				}
				E[P + c] = 0, m = 0;
			}
			E[P + i] = 0, P += N, c = A, A = j, j = M, M = c;
		}
		for (c = P - N - 1, s = 0; s < N; ++s, ++c) E[c] = 0;
		for (; F > 0;) P = D[--F], P -= N + 1, E[P] == 1 && (E[P] = 2, D[F++] = P), P += 1, E[P] == 1 && (E[P] = 2, D[F++] = P), P += 1, E[P] == 1 && (E[P] = 2, D[F++] = P), P += N, E[P] == 1 && (E[P] = 2, D[F++] = P), P -= 2, E[P] == 1 && (E[P] = 2, D[F++] = P), P += N, E[P] == 1 && (E[P] = 2, D[F++] = P), P += 1, E[P] == 1 && (E[P] = 2, D[F++] = P), P += 1, E[P] == 1 && (E[P] = 2, D[F++] = P);
		for (P = N + 1, A = 0, s = 0; s < a; ++s, P += N) for (c = 0; c < i; ++c) o[A++] = Number(E[P + c] == 2) * 255;
		this.cache.put_buffer(x), this.cache.put_buffer(S), this.cache.put_buffer(C), this.cache.put_buffer(w);
	}
	warp_perspective(e, t, n, r) {
		r === void 0 && (r = 0);
		let i = e.cols | 0, a = e.rows | 0, o = t.cols | 0, s = t.rows | 0, c = e.data, l = t.data, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = n.data, E = T[0], D = T[1], O = T[2], k = T[3], A = T[4], j = T[5], M = T[6], N = T[7], P = T[8];
		for (let e = 0; d < s; ++d) for (_ = D * d + O, v = A * d + j, y = N * d + P, u = 0; u < o; ++u, ++e, _ += E, v += k, y += M) b = 1 / y, h = _ * b, g = v * b, p = h | 0, m = g | 0, h > 0 && g > 0 && p < i - 1 && m < a - 1 ? (x = Math.max(h - p, 0), S = Math.max(g - m, 0), f = i * m + p | 0, C = c[f] + x * (c[f + 1] - c[f]), w = c[f + i] + x * (c[f + i + 1] - c[f + i]), l[e] = C + S * (w - C)) : l[e] = r;
	}
	warp_affine(e, t, n, r) {
		r === void 0 && (r = 0);
		let i = e.cols, a = e.rows, o = t.cols, s = t.rows, c = e.data, l = t.data, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = n.data, S = x[0], C = x[1], w = x[2], T = x[3], E = x[4], D = x[5];
		for (let e = 0; d < s; ++d) for (h = C * d + w, g = E * d + D, u = 0; u < o; ++u, ++e, h += S, g += T) p = h | 0, m = g | 0, p >= 0 && m >= 0 && p < i - 1 && m < a - 1 ? (_ = h - p, v = g - m, f = i * m + p, y = c[f] + _ * (c[f + 1] - c[f]), b = c[f + i] + _ * (c[f + i + 1] - c[f + i]), l[e] = y + v * (b - y)) : l[e] = r;
	}
	skindetector(e, t) {
		let n, r, i, a, o = e.width * e.height;
		for (; o--;) a = o * 4, n = e.data[a], r = e.data[a + 1], i = e.data[a + 2], n > 95 && r > 40 && i > 20 && n > r && n > i && n - Math.min(r, i) > 15 && Math.abs(n - r) > 15 ? t[o] = 255 : t[o] = 0;
	}
}, k.math = class extends k {
	constructor() {
		super(), this.qsort_stack = /* @__PURE__ */ new Int32Array(96);
	}
	get_gaussian_kernel(e, t, n, r) {
		let i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = this.cache.get_buffer(e << 2), d = u.f32;
		if ((e & 1) == 1 && e <= 7 && t <= 0) switch (e >> 1) {
			case 0:
				d[0] = 1, l = 1;
				break;
			case 1:
				d[0] = .25, d[1] = .5, d[2] = .25, l = 1;
				break;
			case 2:
				d[0] = .0625, d[1] = .25, d[2] = .375, d[3] = .25, d[4] = .0625, l = 1;
				break;
			case 3:
				d[0] = .03125, d[1] = .109375, d[2] = .21875, d[3] = .28125, d[4] = .21875, d[5] = .109375, d[6] = .03125, l = 1;
				break;
		}
		else for (s = t > 0 ? t : ((e - 1) * .5 - 1) * .3 + .8, c = -.5 / (s * s); i < e; ++i) a = i - (e - 1) * .5, o = Math.exp(c * a * a), d[i] = o, l += o;
		if (r & f.U8_t) for (l = 256 / l, i = 0; i < e; ++i) n[i] = d[i] * l + .5 | 0;
		else for (l = 1 / l, i = 0; i < e; ++i) n[i] = d[i] * l;
		this.cache.put_buffer(u);
	}
	perspective_4point_transform(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		console.warn("⚠️⚠️⚠️ This method is deprecated ad will be removed in the next releases, use transform.perspective_4point_transform() instead. ⚠️⚠️⚠️");
		let _ = t, v = l, y = o, b = _ * v * y, x = m, S = _ * x, C = v * S, w = u, T = _ * w, E = a, D = n, O = p, k = D * O, A = k * E, j = O * E * w, M = O * y, N = O * w, P = v * y, F = x * v, I = x * E, L = w * E, R = 1 / (M - N - P + F - I + L), z = _ * O, B = D * E, V = y * _, ee = x * V, H = D * v, U = k * w, W = D * w * E, G = y * x * v, K = x * D, te = -(C - b + T * E - E * S - k * v + A - j + M * v) * R, q = (b - C - z * y + z * w + A - v * B + I * v - j) * R, ne = _, J = (-w * S + ee + H * y - k * y + U - W + I * w - G) * R, Y = (-ee + V * w - K * v + U - W + K * E + G - M * w) * R, X = D, Z = (-T + V + H - B + N - M - F + I) * R, Q = (-S + T + k - H + I - L - M + P) * R;
		_ = r, v = d, y = c, b = _ * v * y, x = g, S = _ * x, C = v * S, w = f, T = _ * w, E = s, D = i, O = h, k = D * O, A = k * E, j = O * E * w, M = O * y, N = O * w, P = v * y, F = x * v, I = x * E, L = w * E, R = 1 / (M - N - P + F - I + L), z = _ * O, B = D * E, V = y * _, ee = x * V, H = D * v, U = k * w, W = D * w * E, G = y * x * v, K = x * D;
		let re = -(C - b + T * E - E * S - k * v + A - j + M * v) * R, ie = (b - C - z * y + z * w + A - v * B + I * v - j) * R, ae = _, oe = (-w * S + ee + H * y - k * y + U - W + I * w - G) * R, se = (-ee + V * w - K * v + U - W + K * E + G - M * w) * R, ce = D, le = (-T + V + H - B + N - M - F + I) * R, ue = (-S + T + k - H + I - L - M + P) * R;
		v = Y - Q * X, y = te * Y, b = te * X, S = J * q, C = ne * J, T = q * Z;
		let de = ne * Z;
		O = 1 / (y - b * Q - S + C * Q + T * X - de * Y), A = -J + X * Z;
		let fe = -J * Q + Y * Z;
		L = -q + ne * Q;
		let pe = te - de;
		B = te * Q - T, V = -q * X + ne * Y;
		let me = b - C, he = y - S;
		W = v * O;
		let ge = L * O, _e = V * O, $ = e.data;
		$[0] = re * W + A * O * ie - fe * O * ae, $[1] = re * ge + pe * O * ie - B * O * ae, $[2] = -re * _e - me * O * ie + he * O * ae, $[3] = oe * W + A * O * se - fe * O * ce, $[4] = oe * ge + pe * O * se - B * O * ce, $[5] = -oe * _e - me * O * se + he * O * ce, $[6] = le * W + A * O * ue - fe * O, $[7] = le * ge + pe * O * ue - B * O, $[8] = -le * _e - me * O * ue + he * O;
	}
	qsort(e, t, n, r) {
		let i, a, o, s, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = this.qsort_stack;
		if (!(n - t + 1 <= 1)) for (E[0] = t, E[1] = n; c >= 0;) for (l = E[c << 1], u = E[(c << 1) + 1], c--;;) if (f = u - l + 1, f <= 7) {
			for (m = l + 1; m <= u; m++) for (h = m; h > l && r(e[h], e[h - 1]); h--) i = e[h], e[h] = e[h - 1], e[h - 1] = i;
			break;
		} else {
			for (T = 0, _ = l, y = u, x = l + (f >> 1), f > 40 && (g = f >> 3, S = l, C = l + g, w = l + (g << 1), a = e[S], o = e[C], s = e[w], l = r(a, o) ? r(o, s) ? C : r(a, s) ? w : S : r(s, o) ? C : r(a, s) ? S : w, S = x - g, C = x, w = x + g, a = e[S], o = e[C], s = e[w], x = r(a, o) ? r(o, s) ? C : r(a, s) ? w : S : r(s, o) ? C : r(a, s) ? S : w, S = u - (g << 1), C = u - g, w = u, a = e[S], o = e[C], s = e[w], u = r(a, o) ? r(o, s) ? C : r(a, s) ? w : S : r(s, o) ? C : r(a, s) ? S : w), S = l, C = x, w = u, a = e[S], o = e[C], s = e[w], x = r(a, o) ? r(o, s) ? C : r(a, s) ? w : S : r(s, o) ? C : r(a, s) ? S : w, x != _ && (i = e[x], e[x] = e[_], e[_] = i, x = _), l = v = _ + 1, u = b = y, a = e[x];;) {
				for (; l <= u && !r(a, e[l]);) r(e[l], a) || (l > v && (i = e[v], e[v] = e[l], e[l] = i), T = 1, v++), l++;
				for (; l <= u && !r(e[u], a);) r(a, e[u]) || (u < b && (i = e[b], e[b] = e[u], e[u] = i), T = 1, b--), u--;
				if (l > u) break;
				i = e[l], e[l] = e[u], e[u] = i, T = 1, l++, u--;
			}
			if (T == 0) {
				for (l = _, u = y, m = l + 1; m <= u; m++) for (h = m; h > l && r(e[h], e[h - 1]); h--) i = e[h], e[h] = e[h - 1], e[h - 1] = i;
				break;
			}
			for (f = Math.min(v - _, l - v), p = l - f | 0, d = 0; d < f; ++d, ++p) i = e[_ + d], e[_ + d] = e[p], e[p] = i;
			for (f = Math.min(y - b, b - u), p = y - f + 1 | 0, d = 0; d < f; ++d, ++p) i = e[l + d], e[l + d] = e[p], e[p] = i;
			if (f = l - v, p = b - u, f > 1) p > 1 ? f > p ? (++c, E[c << 1] = _, E[(c << 1) + 1] = _ + f - 1, l = y - p + 1, u = y) : (++c, E[c << 1] = y - p + 1, E[(c << 1) + 1] = y, l = _, u = _ + f - 1) : (l = _, u = _ + f - 1);
			else if (p > 1) l = y - p + 1, u = y;
			else break;
		}
	}
	median(e, t, n) {
		let r, i = 0, a = 0, o = 0, s = t + n >> 1;
		for (;;) {
			if (n <= t) return e[s];
			if (n == t + 1) return e[t] > e[n] && (r = e[t], e[t] = e[n], e[n] = r), e[s];
			for (i = t + n >> 1, e[i] > e[n] && (r = e[i], e[i] = e[n], e[n] = r), e[t] > e[n] && (r = e[t], e[t] = e[n], e[n] = r), e[i] > e[t] && (r = e[i], e[i] = e[t], e[t] = r), a = t + 1, r = e[i], e[i] = e[a], e[a] = r, o = n;;) {
				do
					++a;
				while (e[t] > e[a]);
				do
					--o;
				while (e[o] > e[t]);
				if (o < a) break;
				r = e[a], e[a] = e[o], e[o] = r;
			}
			r = e[t], e[t] = e[o], e[o] = r, o <= s ? t = a : o >= s && (n = o - 1);
		}
		return 0;
	}
}, k.matmath = d, k.linalg = class extends k {
	constructor() {
		super(), this.matmath = new d();
	}
	JacobiImpl(e, t, n, r, i, a) {
		let o = f.EPSILON, s = 0, u = 0, d = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = a * a * 30, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = this.cache.get_buffer(a << 2), A = this.cache.get_buffer(a << 2), j = k.i32, M = A.i32;
		if (r) for (; s < a; s++) {
			for (d = s * i, u = 0; u < a; u++) r[d + u] = 0;
			r[d + s] = 1;
		}
		for (d = 0; d < a; d++) {
			if (n[d] = e[(t + 1) * d], d < a - 1) {
				for (p = d + 1, b = Math.abs(e[t * d + p]), s = d + 2; s < a; s++) x = Math.abs(e[t * d + s]), b < x && (b = x, p = s);
				j[d] = p;
			}
			if (d > 0) {
				for (p = 0, b = Math.abs(e[d]), s = 1; s < d; s++) x = Math.abs(e[t * s + d]), b < x && (b = x, p = s);
				M[d] = p;
			}
		}
		if (a > 1) for (; v < y; v++) {
			for (d = 0, b = Math.abs(e[j[0]]), s = 1; s < a - 1; s++) x = Math.abs(e[t * s + j[s]]), b < x && (b = x, d = s);
			for (m = j[d], s = 1; s < a; s++) x = Math.abs(e[t * M[s] + s]), b < x && (b = x, d = M[s], m = s);
			if (S = e[t * d + m], Math.abs(S) <= o) break;
			for (C = (n[m] - n[d]) * .5, w = Math.abs(C) + l(S, C), T = l(S, w), E = w / T, T = S / T, w = S / w * S, C < 0 && (T = -T, w = -w), e[t * d + m] = 0, n[d] -= w, n[m] += w, s = 0; s < d; s++) g = t * s + d, _ = t * s + m, D = e[g], O = e[_], e[g] = D * E - O * T, e[_] = D * T + O * E;
			for (s = d + 1; s < m; s++) g = t * d + s, _ = t * s + m, D = e[g], O = e[_], e[g] = D * E - O * T, e[_] = D * T + O * E;
			for (s = m + 1, g = t * d + s, _ = t * m + s; s < a; s++, g++, _++) D = e[g], O = e[_], e[g] = D * E - O * T, e[_] = D * T + O * E;
			if (r) for (g = i * d, _ = i * m, s = 0; s < a; s++, g++, _++) D = r[g], O = r[_], r[g] = D * E - O * T, r[_] = D * T + O * E;
			for (u = 0; u < 2; u++) {
				if (h = u == 0 ? d : m, h < a - 1) {
					for (p = h + 1, b = Math.abs(e[t * h + p]), s = h + 2; s < a; s++) x = Math.abs(e[t * h + s]), b < x && (b = x, p = s);
					j[h] = p;
				}
				if (h > 0) {
					for (p = 0, b = Math.abs(e[h]), s = 1; s < h; s++) x = Math.abs(e[t * s + h]), b < x && (b = x, p = s);
					M[h] = p;
				}
			}
		}
		for (d = 0; d < a - 1; d++) {
			for (p = d, s = d + 1; s < a; s++) n[p] < n[s] && (p = s);
			if (d != p && (c(n, p, d, b), r)) for (s = 0; s < a; s++) c(r, i * p + s, i * d + s, b);
		}
		this.cache.put_buffer(k), this.cache.put_buffer(A);
	}
	JacobiSVDImpl(e, t, n, r, i, a, o, s) {
		let u = f.EPSILON * 2, d = f.FLT_MIN, p = 0, m = 0, h = 0, g = 0, _ = Math.max(a, 30), v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = 0, P = 0, F = 4660, I = 0, L = 0, R = 0, z = this.cache.get_buffer(o << 3), B = z.f64;
		for (; p < o; p++) {
			for (h = 0, O = 0; h < a; h++) T = e[p * t + h], O += T * T;
			if (B[p] = O, r) {
				for (h = 0; h < o; h++) r[p * i + h] = 0;
				r[p * i + p] = 1;
			}
		}
		for (; g < _; g++) {
			for (S = 0, p = 0; p < o - 1; p++) for (m = p + 1; m < o; m++) {
				for (v = p * t | 0, y = m * t | 0, M = B[p], N = 0, P = B[m], h = 2, N += e[v] * e[y], N += e[v + 1] * e[y + 1]; h < a; h++) N += e[v + h] * e[y + h];
				if (!(Math.abs(N) <= u * Math.sqrt(M * P))) {
					for (N *= 2, k = M - P, A = l(N, k), k < 0 ? (j = (A - k) * .5, w = Math.sqrt(j / A), C = N / (A * w * 2)) : (C = Math.sqrt((A + k) / (A * 2)), w = N / (A * C * 2)), M = 0, P = 0, h = 2, E = C * e[v] + w * e[y], D = -w * e[v] + C * e[y], e[v] = E, e[y] = D, M += E * E, P += D * D, E = C * e[v + 1] + w * e[y + 1], D = -w * e[v + 1] + C * e[y + 1], e[v + 1] = E, e[y + 1] = D, M += E * E, P += D * D; h < a; h++) E = C * e[v + h] + w * e[y + h], D = -w * e[v + h] + C * e[y + h], e[v + h] = E, e[y + h] = D, M += E * E, P += D * D;
					if (B[p] = M, B[m] = P, S = 1, r) for (b = p * i | 0, x = m * i | 0, h = 2, E = C * r[b] + w * r[x], D = -w * r[b] + C * r[x], r[b] = E, r[x] = D, E = C * r[b + 1] + w * r[x + 1], D = -w * r[b + 1] + C * r[x + 1], r[b + 1] = E, r[x + 1] = D; h < o; h++) E = C * r[b + h] + w * r[x + h], D = -w * r[b + h] + C * r[x + h], r[b + h] = E, r[x + h] = D;
				}
			}
			if (S == 0) break;
		}
		for (p = 0; p < o; p++) {
			for (h = 0, O = 0; h < a; h++) T = e[p * t + h], O += T * T;
			B[p] = Math.sqrt(O);
		}
		for (p = 0; p < o - 1; p++) {
			for (m = p, h = p + 1; h < o; h++) B[m] < B[h] && (m = h);
			if (p != m && (c(B, p, m, O), r)) {
				for (h = 0; h < a; h++) c(e, p * t + h, m * t + h, T);
				for (h = 0; h < o; h++) c(r, p * i + h, m * i + h, T);
			}
		}
		for (p = 0; p < o; p++) n[p] = B[p];
		if (!r) {
			this.cache.put_buffer(z);
			return;
		}
		for (p = 0; p < s; p++) {
			for (O = p < o ? B[p] : 0; O <= d;) {
				for (L = 1 / a, h = 0; h < a; h++) F = F * 214013 + 2531011, I = F >> 16 & 256 ? L : -L, e[p * t + h] = I;
				for (g = 0; g < 2; g++) for (m = 0; m < p; m++) {
					for (O = 0, h = 0; h < a; h++) O += e[p * t + h] * e[m * t + h];
					for (R = 0, h = 0; h < a; h++) T = e[p * t + h] - O * e[m * t + h], e[p * t + h] = T, R += Math.abs(T);
					for (R = R ? 1 / R : 0, h = 0; h < a; h++) e[p * t + h] *= R;
				}
				for (O = 0, h = 0; h < a; h++) T = e[p * t + h], O += T * T;
				O = Math.sqrt(O);
			}
			for (w = 1 / O, h = 0; h < a; h++) e[p * t + h] *= w;
		}
		this.cache.put_buffer(z);
	}
	lu_solve(e, t) {
		let n = 0, r = 0, i = 0, a = 1, o = e.cols, s = e.data, l = t.data, u, d, p;
		for (n = 0; n < o; n++) {
			for (i = n, r = n + 1; r < o; r++) Math.abs(s[r * o + n]) > Math.abs(s[i * o + n]) && (i = r);
			if (Math.abs(s[i * o + n]) < f.EPSILON) return 0;
			if (i != n) {
				for (r = n; r < o; r++) c(s, n * o + r, i * o + r, void 0);
				c(l, n, i, void 0), a = -a;
			}
			for (d = -1 / s[n * o + n], r = n + 1; r < o; r++) {
				for (u = s[r * o + n] * d, i = n + 1; i < o; i++) s[r * o + i] += u * s[n * o + i];
				l[r] += u * l[n];
			}
			s[n * o + n] = -d;
		}
		for (n = o - 1; n >= 0; n--) {
			for (p = l[n], i = n + 1; i < o; i++) p -= s[n * o + i] * l[i];
			l[n] = p * s[n * o + n];
		}
		return 1;
	}
	cholesky_solve(e, t) {
		let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = e.cols, u = e.data, d = t.data, f, p;
		for (n = 0; n < l; n++) for (p = 1, a = n * l, o = a, r = n; r < l; r++) {
			for (f = u[o + n], i = 0; i < n; i++) f -= u[i * l + n] * u[o + i];
			if (r == n) {
				if (u[o + n] = f, f == 0) return 0;
				p = 1 / f;
			} else u[a + r] = f, u[o + n] = f * p;
			o += l;
		}
		for (a = 0, s = 0; s < l; s++) {
			for (f = d[s], c = 0; c < s; c++) f -= u[a + c] * d[c];
			d[s] = f, a += l;
		}
		for (a = 0, s = 0; s < l; s++) d[s] /= u[a + s], a += l;
		for (s = l - 1; s >= 0; s--) {
			for (f = d[s], c = s + 1, a = c * l; c < l; c++) f -= u[a + s] * d[c], a += l;
			d[s] = f;
		}
		return 1;
	}
	svd_decompose(e, t, n, r, i) {
		i === void 0 && (i = 0);
		let a = 0, o = 0, s = e.rows, c = e.cols, l = s, u = c, d = e.type | f.C1_t;
		l < u && (a = 1, o = l, l = u, u = o);
		let m = this.cache.get_buffer(l * l << 3), h = this.cache.get_buffer(u << 3), g = this.cache.get_buffer(u * u << 3), _ = new p(l, l, d, m.data), v = new p(1, u, d, h.data), y = new p(u, u, d, g.data);
		if (a == 0) this.matmath.transpose(_, e);
		else {
			for (o = 0; o < c * s; o++) _.data[o] = e.data[o];
			for (; o < u * l; o++) _.data[o] = 0;
		}
		if (this.JacobiSVDImpl(_.data, l, v.data, y.data, u, l, u, l), t) {
			for (o = 0; o < u; o++) t.data[o] = v.data[o];
			for (; o < c; o++) t.data[o] = 0;
		}
		if (a == 0) {
			if (n && i & f.SVD_U_T) for (o = l * l; --o >= 0;) n.data[o] = _.data[o];
			else n && this.matmath.transpose(n, _);
			if (r && i & f.SVD_V_T) for (o = u * u; --o >= 0;) r.data[o] = y.data[o];
			else r && this.matmath.transpose(r, y);
		} else {
			if (n && i & f.SVD_U_T) for (o = u * u; --o >= 0;) n.data[o] = y.data[o];
			else n && this.matmath.transpose(n, y);
			if (r && i & f.SVD_V_T) for (o = l * l; --o >= 0;) r.data[o] = _.data[o];
			else r && this.matmath.transpose(r, _);
		}
		this.cache.put_buffer(m), this.cache.put_buffer(h), this.cache.put_buffer(g);
	}
	svd_solve(e, t, n) {
		let r = 0, i = 0, a = 0, o = 0, s = 0, c = e.rows, l = e.cols, u = 0, d = 0, m = 0, h = e.type | f.C1_t, g = this.cache.get_buffer(c * c << 3), _ = this.cache.get_buffer(l << 3), v = this.cache.get_buffer(l * l << 3), y = new p(c, c, h, g.data), b = new p(1, l, h, _.data), x = new p(l, l, h, v.data), S = n.data, C = y.data, w = b.data, T = x.data;
		for (this.svd_decompose(e, b, y, x, 0), m = f.EPSILON * w[0] * l; r < l; r++, s += l) {
			for (d = 0, i = 0; i < l; i++) if (w[i] > m) {
				for (a = 0, u = 0, o = 0; a < c; a++, o += l) u += C[o + i] * S[a];
				d += u * T[s + i] / w[i];
			}
			t.data[r] = d;
		}
		this.cache.put_buffer(g), this.cache.put_buffer(_), this.cache.put_buffer(v);
	}
	svd_invert(e, t) {
		let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = t.rows, l = t.cols, u = 0, d = 0, m = t.type | f.C1_t, h = this.cache.get_buffer(c * c << 3), g = this.cache.get_buffer(l << 3), _ = this.cache.get_buffer(l * l << 3), v = new p(c, c, m, h.data), y = new p(1, l, m, g.data), b = new p(l, l, m, _.data), x = e.data, S = v.data, C = y.data, w = b.data;
		for (this.svd_decompose(t, y, v, b, 0), d = f.EPSILON * C[0] * l; n < l; n++, o += l) for (r = 0, a = 0; r < c; r++, s++) {
			for (i = 0, u = 0; i < l; i++, a++) C[i] > d && (u += w[o + i] * S[a] / C[i]);
			x[s] = u;
		}
		this.cache.put_buffer(h), this.cache.put_buffer(g), this.cache.put_buffer(_);
	}
	eigenVV(e, t, n) {
		let r = e.cols, i = r * r, a = e.type | f.C1_t, o = this.cache.get_buffer(r * r << 3), s = this.cache.get_buffer(r << 3), c = new p(r, r, a, o.data), l = new p(1, r, a, s.data);
		for (; --i >= 0;) c.data[i] = e.data[i];
		if (this.JacobiImpl(c.data, r, l.data, t ? t.data : null, r, r), n) for (; --r >= 0;) n.data[r] = l.data[r];
		this.cache.put_buffer(o), this.cache.put_buffer(s);
	}
}, k.orb = class extends k {
	constructor() {
		super(), this.bit_pattern_31_ = new Int32Array(g), this.H = new p(3, 3, f.F32_t | f.C1_t), this.patch_img = new p(32, 32, f.U8_t | f.C1_t), this.imgproc = new k.imgproc();
	}
	describe(e, t, n, r) {
		let i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, p = this.patch_img.data, m = 0;
		r.type & f.U8_t ? r.resize(32, n, 1) : (r.type = f.U8_t, r.cols = 32, r.rows = n, r.channel = 1, r.allocate());
		let h = r.data, g = 0;
		for (i = 0; i < n; ++i) {
			for (o = t[i].x, s = t[i].y, c = t[i].angle, _(e, this.patch_img, c, o, s, 32, this.H, this.imgproc), m = 0, a = 0; a < 32; ++a) l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d = l < u | 0, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 1, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 2, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 3, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 4, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 5, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 6, l = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, u = p[528 + this.bit_pattern_31_[m + 1] * 32 + this.bit_pattern_31_[m]], m += 2, d |= (l < u) << 7, h[g + a] = d;
			g += 32;
		}
	}
}, k.yape = C, k.yape06 = class extends k {
	constructor() {
		super(), this.laplacian_threshold = 30, this.min_eigen_value_threshold = 25;
	}
	detect(e, t, n) {
		n === void 0 && (n = 5);
		let r = 0, i = 0, a = e.cols, o = e.rows, s = e.data, c = 5 * a | 0, l = 3 + 3 * a | 0, u = 3 - 3 * a | 0, d = this.cache.get_buffer(a * o << 2), f = d.i32, p = 0, m = 0, h = 0, g = 0, _, v = 0, y = this.laplacian_threshold, b = this.min_eigen_value_threshold, x = Math.max(5, n) | 0, S = Math.max(3, n) | 0, C = Math.min(a - 5, a - n) | 0, E = Math.min(o - 3, o - n) | 0;
		for (r = a * o; --r >= 0;) f[r] = 0;
		for (w(s, f, a, 5, c, x, S, C, E), m = S * a + x | 0, i = S; i < E; ++i, m += a) for (r = x, h = m; r < C; ++r, ++h) p = f[h], (p < -y && p < f[h - 1] && p < f[h + 1] && p < f[h - a] && p < f[h + a] && p < f[h - a - 1] && p < f[h + a - 1] && p < f[h - a + 1] && p < f[h + a + 1] || p > y && p > f[h - 1] && p > f[h + 1] && p > f[h - a] && p > f[h + a] && p > f[h - a - 1] && p > f[h + a - 1] && p > f[h - a + 1] && p > f[h + a + 1]) && (g = T(s, h, p, 5, c, l, u), g > b && (_ = t[v], _.x = r, _.y = i, _.score = g, ++v, ++r, ++h));
		return this.cache.put_buffer(d), v;
	}
}, k.motion_estimator = class extends k {
	constructor() {
		super();
	}
	get_subset(e, t, n, r, i, a, o) {
		let s = 1e3, c = [], l = 0, u = 0, d = 0, f = 0, p = !1;
		for (; d < s; ++d) {
			for (l = 0; l < r && d < s;) {
				for (p = !1, f = 0; !p;) for (p = !0, f = c[l] = Math.floor(Math.random() * i) | 0, u = 0; u < l; ++u) if (f == c[u]) {
					p = !1;
					break;
				}
				if (a[l] = t[f], o[l] = n[f], !e.check_subset(a, o, l + 1)) {
					d++;
					continue;
				}
				++l;
			}
			break;
		}
		return l == r && d < s;
	}
	find_inliers(e, t, n, r, i, a, o, s) {
		let c = 0, l = 0, u = 0, d = a * a;
		for (e.error(n, r, t, o, i); l < i; ++l) u = o[l] <= d, s[l] = u, c += u;
		return c;
	}
	ransac(e, t, n, r, i, a, o, s) {
		if (s === void 0 && (s = 1e3), i < e.size) return !1;
		let c = e.size, l = s, u = 0, d = !1, m = [], h = [], g = !1, _ = a.cols, v = a.rows, y = a.type | f.C1_t, b = this.cache.get_buffer(_ * v << 3), x = this.cache.get_buffer(i), S = this.cache.get_buffer(i << 2), C = new p(_, v, y, b.data), w = new p(i, 1, f.U8C1_t, x.data), T = -1, E = 0, D = 0, O = S.f32;
		if (i == c) {
			if (t.run(n, r, C, i) <= 0) return this.cache.put_buffer(b), this.cache.put_buffer(x), this.cache.put_buffer(S), !1;
			if (C.copy_to(a), o) for (; --i >= 0;) o.data[i] = 1;
			return this.cache.put_buffer(b), this.cache.put_buffer(x), this.cache.put_buffer(S), !0;
		}
		for (; u < l; ++u) {
			if (g = this.get_subset(t, n, r, c, i, m, h), !g) {
				if (u == 0) return this.cache.put_buffer(b), this.cache.put_buffer(x), this.cache.put_buffer(S), !1;
				break;
			}
			D = t.run(m, h, C, c), !(D <= 0) && (E = this.find_inliers(t, C, n, r, i, e.thresh, O, w.data), E > Math.max(T, c - 1) && (C.copy_to(a), T = E, o && w.copy_to(o), l = e.update_iters((i - E) / i, l), d = !0));
		}
		return this.cache.put_buffer(b), this.cache.put_buffer(x), this.cache.put_buffer(S), d;
	}
	lmeds(e, t, n, r, i, a, o, s) {
		if (s === void 0 && (s = 1e3), i < e.size) return !1;
		let c = e.size, l = s, u = 0, d = !1, m = new k.math(), h = [], g = [], _ = !1, v = a.cols, y = a.rows, b = a.type | f.C1_t, x = this.cache.get_buffer(v * y << 3), S = this.cache.get_buffer(i), C = this.cache.get_buffer(i << 2), w = new p(v, y, b, x.data), T = new p(i, 1, f.U8_t | f.C1_t, S.data), E = 0, D = 0, O = C.f32, A = 1e9, j = 0, M = 0;
		if (e.eps = .45, l = e.update_iters(e.eps, l), i == c) {
			if (t.run(n, r, w, i) <= 0) return this.cache.put_buffer(x), this.cache.put_buffer(S), this.cache.put_buffer(C), !1;
			if (w.copy_to(a), o) for (; --i >= 0;) o.data[i] = 1;
			return this.cache.put_buffer(x), this.cache.put_buffer(S), this.cache.put_buffer(C), !0;
		}
		for (; u < l; ++u) {
			if (_ = this.get_subset(t, n, r, c, i, h, g), !_) {
				if (u == 0) return this.cache.put_buffer(x), this.cache.put_buffer(S), this.cache.put_buffer(C), !1;
				break;
			}
			D = t.run(h, g, w, c), !(D <= 0) && (t.error(n, r, w, O, i), M = m.median(O, 0, i - 1), M < A && (A = M, w.copy_to(a), d = !0));
		}
		return d && (j = 2.5 * 1.4826 * (1 + 5 / (i - c)) * Math.sqrt(A), j = Math.max(j, .001), E = this.find_inliers(t, a, n, r, i, j, O, T.data), o && T.copy_to(o), d = E >= c), this.cache.put_buffer(x), this.cache.put_buffer(S), this.cache.put_buffer(C), d;
	}
}, k.ransac_params_t = E, k.affine2d = j, k.homography2d = M, k.optical_flow_lk = class extends k {
	constructor() {
		super();
		let e = new k.imgproc();
		this.scharr_deriv = e.scharr_derivatives;
	}
	track(e, t, n, r, i, a, o, s, c, l) {
		o === void 0 && (o = 30), s === void 0 && (s = new Uint8Array(i)), c === void 0 && (c = .01), l === void 0 && (l = 1e-4);
		let u = (a - 1) * .5, d = a * a | 0, m = d << 1, h = e.data, g = t.data, _ = h[0].data, v = g[0].data, y = h[0].cols, b = h[0].rows, x = 0, S = 0, C = this.cache.get_buffer(d << 2), w = this.cache.get_buffer(m << 2), T = this.cache.get_buffer(b * (y << 1) << 2), E = new p(y, b, f.S32C2_t, T.data), D = C.i32, O = w.i32, k = T.i32, A = 0, j = 0, M = 0, N = 0, P = 0, F = 0, I = 0, L = 0, R = 0, z = 0, B = 0, V = 0, ee = 0, H = 0, U = 0, W = 0, G = 0, K = 0, te = 0, q = 0, ne = 0, J = 0, Y = 0, X = 0, Z = 0, Q = 0, re = 0, ie = 0, ae = 0, oe = 0, se = 0, ce = 0, le = 16384, ue = 8192, de = 1 / (1 << 20), fe = 0, pe = 0, me = 0, he = 0, ge = 0, _e = 0, $ = 0, ve = 0, ye = 0, be = 0, xe = 0, Se = 0;
		for (c *= c; q < i; ++q) s[q] = 1;
		let Ce = e.levels - 1 | 0;
		for (X = Ce; X >= 0; --X) for (I = 1 / (1 << X), x = y >> X, S = b >> X, A = x << 1, _ = h[X].data, v = g[X].data, re = x - a | 0, ie = S - a | 0, this.scharr_deriv(h[X], E), Z = 0; Z < i; ++Z) {
			if (q = Z << 1, ne = q + 1, L = n[q] * I, R = n[ne] * I, X == Ce ? (z = L, B = R) : (z = r[q] * 2, B = r[ne] * 2), r[q] = z, r[ne] = B, L -= u, R -= u, W = L | 0, G = R | 0, J = W <= 0 || W >= re || G <= 0 || G >= ie, J != 0) {
				X == 0 && (s[Z] = 0);
				continue;
			}
			for (ae = L - W, oe = R - G, fe = (1 - ae) * (1 - oe) * le + .5 | 0, pe = ae * (1 - oe) * le + .5 | 0, me = (1 - ae) * oe * le + .5 | 0, he = le - fe - pe - me, ve = 0, ye = 0, be = 0, Y = 0; Y < a; ++Y) for (j = (Y + G) * x + W | 0, M = j << 1, N = Y * a | 0, P = N << 1, J = 0; J < a; ++J, ++j, ++N, M += 2) ge = _[j] * fe + _[j + 1] * pe + _[j + x] * me + _[j + x + 1] * he, ge = ge + 256 >> 9, _e = k[M] * fe + k[M + 2] * pe + k[M + A] * me + k[M + A + 2] * he, _e = _e + ue >> 14, $ = k[M + 1] * fe + k[M + 3] * pe + k[M + A + 1] * me + k[M + A + 3] * he, $ = $ + ue >> 14, D[N] = ge, O[P++] = _e, O[P++] = $, ve += _e * _e, ye += _e * $, be += $ * $;
			if (ve *= de, ye *= de, be *= de, xe = ve * be - ye * ye, Se = (be + ve - Math.sqrt((ve - be) * (ve - be) + 4 * ye * ye)) / m, Se < l || xe < 1.1920929e-7) {
				X == 0 && (s[Z] = 0);
				continue;
			}
			for (xe = 1 / xe, z -= u, B -= u, V = 0, ee = 0, Q = 0; Q < o; ++Q) {
				if (K = z | 0, te = B | 0, J = K <= 0 || K >= re || te <= 0 || te >= ie, J != 0) {
					X == 0 && (s[Z] = 0);
					break;
				}
				for (ae = z - K, oe = B - te, fe = (1 - ae) * (1 - oe) * le + .5 | 0, pe = ae * (1 - oe) * le + .5 | 0, me = (1 - ae) * oe * le + .5 | 0, he = le - fe - pe - me, se = 0, ce = 0, Y = 0; Y < a; ++Y) for (F = (Y + te) * x + K | 0, N = Y * a | 0, P = N << 1, J = 0; J < a; ++J, ++F, ++N) ge = v[F] * fe + v[F + 1] * pe + v[F + x] * me + v[F + x + 1] * he, ge = ge + 256 >> 9, ge -= D[N], se += ge * O[P++], ce += ge * O[P++];
				if (se *= de, ce *= de, H = (ye * ce - be * se) * xe, U = (ye * se - ve * ce) * xe, z += H, B += U, r[q] = z + u, r[ne] = B + u, H * H + U * U <= c) break;
				if (Q > 0 && Math.abs(H + V) < .01 && Math.abs(U + ee) < .01) {
					r[q] -= H * .5, r[ne] -= U * .5;
					break;
				}
				V = H, ee = U;
			}
		}
		this.cache.put_buffer(C), this.cache.put_buffer(w), this.cache.put_buffer(T);
	}
};
//#endregion
//#region src/index.ts
var N = { jsfeatNext: k };
//#endregion
export { N as default };
