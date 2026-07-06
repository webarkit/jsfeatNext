/**
 * Golden oracle for the parity/characterization tests: the ORIGINAL jsfeat.
 *
 * Vendored from https://github.com/inspirit/jsfeat
 * commit 4c7b336bbeeb26e6cd4cdf3c7d414abe273846f3 (master):
 *   - jsfeat-master.js    = build/jsfeat.js  (the distributed bundle)
 *   - jsfeat_transform.js = src/jsfeat_transform.js (never included in the
 *     distributed build/npm package — a parity-audit finding in itself, see
 *     docs/jsfeat-parity-and-refactor-audit.md and issue #45)
 *
 * NOTE the original calling conventions differ between the two:
 *   - jsfeat.math.perspective_4point_transform(model, ...)  takes a matrix_t
 *   - jsfeat.transform.*                                    takes RAW ARRAYS
 * jsfeatNext uses matrix_t everywhere (signature divergence, documented).
 */
const fs = require("fs");
const path = require("path");

const jsfeat = require("./jsfeat-master.js");

// jsfeat_transform.js is an IIFE `(function(global){ ... })(jsfeat)` that
// expects a `jsfeat` identifier in scope; evaluate it with ours.
const transformSrc = fs.readFileSync(path.join(__dirname, "jsfeat_transform.js"), "utf8");
new Function("jsfeat", transformSrc)(jsfeat);

module.exports = jsfeat;
