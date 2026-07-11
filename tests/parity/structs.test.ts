import { describe, it, expect } from "vitest";
import jsfeatNext from "../../src/jsfeatNext";
import jsfeat from "../vendor/oracle.cjs";

/**
 * Characterization tests (Phase 0, issue #39; parity audit rows for issue #45)
 * for the core structs and remaining paths: matrix_t (construction, resize,
 * copy_to), the data-type helpers, and imgproc.resample's f32 path.
 *
 * API note (Axis 2): get_data_type/get_channel/get_data_type_size are
 * top-level functions in original jsfeat but INSTANCE methods on the
 * jsfeatNext base class.
 */

const U8C1 = jsfeatNext.U8_t | jsfeatNext.C1_t;
const F32C1 = jsfeatNext.F32_t | jsfeatNext.C1_t;

describe("parity: matrix_t vs original jsfeat.matrix_t", () => {
    it("construction exposes the same shape and buffer size", () => {
        const nx = new jsfeatNext.matrix_t(320, 240, jsfeatNext.U8C3_t);
        const ox = new jsfeat.matrix_t(320, 240, jsfeat.U8C3_t);
        expect(nx.cols).toBe(ox.cols);
        expect(nx.rows).toBe(ox.rows);
        expect(nx.channel).toBe(ox.channel);
        expect(nx.type).toBe(ox.type);
        expect(nx.data.length).toBe(ox.data.length);
        expect(nx.buffer.size).toBe(ox.buffer.size);
    });

    it("resize matches (grow reallocates, shrink keeps shape fields)", () => {
        const nx = new jsfeatNext.matrix_t(16, 16, U8C1);
        const ox = new jsfeat.matrix_t(16, 16, jsfeat.U8_t | jsfeat.C1_t);
        nx.resize(64, 32, 1);
        ox.resize(64, 32, 1);
        expect(nx.cols).toBe(ox.cols);
        expect(nx.rows).toBe(ox.rows);
        expect(nx.data.length).toBe(ox.data.length);
        nx.resize(8, 8, 1);
        ox.resize(8, 8, 1);
        expect(nx.cols).toBe(ox.cols);
        expect(nx.rows).toBe(ox.rows);
        expect(nx.data.length).toBe(ox.data.length); // shrink keeps the buffer
    });

    it("copy_to copies identically", () => {
        const nx = new jsfeatNext.matrix_t(8, 6, U8C1);
        const ox = new jsfeat.matrix_t(8, 6, jsfeat.U8_t | jsfeat.C1_t);
        for (let i = 0; i < 48; i++) {
            nx.data[i] = (i * 7) & 255;
            ox.data[i] = (i * 7) & 255;
        }
        const nd = new jsfeatNext.matrix_t(8, 6, U8C1);
        const od = new jsfeat.matrix_t(8, 6, jsfeat.U8_t | jsfeat.C1_t);
        nx.copy_to(nd);
        ox.copy_to(od);
        for (let i = 0; i < 48; i++) {
            expect(nd.data[i]).toBe(od.data[i]);
        }
    });
});

describe("parity: data-type helpers vs original jsfeat top-level functions", () => {
    it("get_data_type / get_channel / get_data_type_size agree for all popular formats", () => {
        const base = new jsfeatNext();
        const formats = [
            jsfeatNext.U8C1_t,
            jsfeatNext.U8C3_t,
            jsfeatNext.U8C4_t,
            jsfeatNext.F32C1_t,
            jsfeatNext.F32C2_t,
            jsfeatNext.S32C1_t,
            jsfeatNext.S32C2_t,
        ];
        for (const t of formats) {
            expect(base.get_data_type(t)).toBe(jsfeat.get_data_type(t));
            expect(base.get_channel(t)).toBe(jsfeat.get_channel(t));
            expect(base.get_data_type_size(t)).toBe(jsfeat.get_data_type_size(t));
        }
    });
});

describe("parity: imgproc.resample f32 path", () => {
    it("resamples float matrices identically", () => {
        const W = 40,
            H = 30;
        const ip = jsfeatNext.imgproc;
        const nx = new jsfeatNext.matrix_t(W, H, F32C1);
        const ox = new jsfeat.matrix_t(W, H, jsfeat.F32_t | jsfeat.C1_t);
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const v = Math.sin(x * 0.35) * 40 + Math.cos(y * 0.2) * 25 + 100;
                nx.data[y * W + x] = v;
                ox.data[y * W + x] = v;
            }
        }
        const nd = new jsfeatNext.matrix_t(20, 15, F32C1);
        const od = new jsfeat.matrix_t(20, 15, jsfeat.F32_t | jsfeat.C1_t);
        ip.resample(nx, nd, 20, 15);
        jsfeat.imgproc.resample(ox, od, 20, 15);
        for (let i = 0; i < 20 * 15; i++) {
            expect(nd.data[i]).toBeCloseTo(od.data[i], 4);
        }
    });
});
