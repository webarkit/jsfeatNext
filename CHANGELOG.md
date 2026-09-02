
## 0.15.0 - 2026-09-02

### 🐛 Bug Fixes

- Rename vitest.config.ts to .mts to silence the CJS/ESM warning (63e802b)

- Match_t is original, not derived from jsfeat (11572e4)


### 📚 Documentation

- Record the agreed 1.0.0 milestone plan (dcfb524)

- Restore the class description displaced by the ic_angle change (9c3d8b0)


### 📦 Build

- Bump actions/upload-artifact from 5 to 7 (7d28d72)

- Bump vite from 8.2.1 to 8.2.2 (4ff82fc)


### 🚀 Features

- Brute-force Hamming matcher and match_t (f82d402)

- Use bfmatcher in the ORB samples instead of inline match_pattern (4c48c50)

- Closed-form planar pose from homography and intrinsics (c0ca5d5)

- Expose ic_angle, the keypoint orientation step (#96) (3baaf09)


### 🧪 Testing

- Cover ratio_test edge cases and empty-train cross-check (5fb2402)

- Perturbed-H orthonormalization case; document pose_t.t (eb54c61)

- Cover setIntrinsics, the n2 guard, and the normalize zero-fallback (24a9c65)



## 0.14.0 - 2026-08-25

### ⚡ Performance

- Share one data_type instance instead of one per matrix_t (017ce32)

- Hoist EPSILON out of invert_3x3's per-call path (c5323ef)

- Alias imported helpers to module-scope consts (6d33e78)


### 🐛 Bug Fixes

- Scope detector thresholds per suite and bound the keypoint pools (cfb9fc6)

- Assert detector count parity and reconcile the thr60 verdict (e781f82)

- Fix type error hidden by tsconfig scope and bound the LK pool (03e40e1)

- Fix Math.random leak using tinybench's own teardown option (1044dd5)

- Redesign the resize case around a fixed target, fix scope claims (2b212ab)

- Fix collection-time node leak, wording nits from third review pass (66fc38a)

- Fix qsort comparator and transform storage confound (46d98db)

- Avoid ambiguity: the title said PR but it's an issue (74fdd6c)

- Resolve the README contradiction, scope the perf claim (8bcd20d)

- Restore contiguous imports, correct the yape06 rationale (3f5b956)

- Correct callout in the section header because misleading (3b475f3)


### 📚 Documentation

- Add a Current status table, realign three stale verdicts (6944511)

- Add benchmark history data as .jsonl (66a5b67)

- Link the tests/** typecheck gap to issue #171 (377c656)

- Drop the broken Dependabot badge, note Dependabot in Contributing (d8c3a00)


### 🚀 Features

- Add detector benchmarks, surfacing a real YAPE slowdown (655e382)

- Add optical_flow_lk throughput benchmark (519c492)

- Add linalg throughput benchmarks, surfacing a broader slowdown (2df9146)

- Add motion_estimator throughput benchmarks (d78e660)

- Add cache pool throughput benchmarks, closing out phase 2 (8751ef0)

- Add math, matmath and transform benchmarks, completing phase 2 (65e8ea2)

- Add motion_model kernel benchmarks, surfacing a per-call allocation (eb10ddb)

- Gate on a bench smoke check, add local ratio history (#86 phase 3) (e63d6f1)



## 0.13.0 - 2026-08-20

### ⚡ Performance

- Shrink the ORB keypoint pool and drop a redundant CLI flag (04e00d6)


### 🐛 Bug Fixes

- Invert_3x3 reports singularity instead of only returning NaN (ba76305)


### 👷 CI

- Upload coverage for per-PR diff reporting (78a3c44)


### 📚 Documentation

- Document the 20px edge margin for describe(), and pin it under rotation (9b7ca1a)

- Correct the curr_xy docstring — it is pure output (#111) (e759037)

- Document the noise floor, drop an unmeasured claim, add guidance (58012cc)


### 📦 Build

- Bump codecov/codecov-action from 5 to 7 (c0a490e)


### 🚀 Features

- Add a throughput benchmark harness measured as ratios vs jsfeat (79bd30b)


### 🧪 Testing

- Fix the rotation sweep in the #110 margin test (Copilot review) (8f727c1)

- Refresh the overview after the invert_3x3 fix (e95957a)

- Guard the abs check and document the epsilon's scale-dependence (74786be)

- Pin invert_3x3's singular output byte-identical to jsfeat (#120) (7f7d4c9)

- Add Vitest v8 coverage reporting as a gap detector (f24878a)



## 0.12.0 - 2026-08-19

### 🐛 Bug Fixes

- Fill the (-1, 0) source band in warp_affine instead of extrapolating (caac2a6)

- Make box_blur_gray correct below the kernel size and at radius 3 (6771c8c)

- Keep box_blur_gray window area as a float to avoid int32 overflow (85f1e15)


### 📚 Documentation

- Add the features2d expansion plan for GMS, TEBLID and FREAK (fcb0819)

- Record the applied state of the features2d plan (6c00f7e)

- Correct the stale test-suite description (2d9af65)

- Record the warp_affine fix and how OpenCV differs (601cbb1)


### 📦 Build

- Bump vite from 8.1.5 to 8.2.1 (a2fa8e8)


### 🧪 Testing

- Address Copilot review of the box_blur_gray fix (#114) (22581c0)



## 0.11.0 - 2026-08-03

### 🐛 Bug Fixes

- Reject non-square input in svd_invert instead of returning garbage (refs #102) (ff07687)

- Restore closing brace and apply the n*n fix to both SVD tests (9fad73e)


### 📚 Documentation

- Link the newly filed issues from the implementation notes (refs #87) (093fcca)

- Record what the reference approach cannot answer (refs #87) (2a88d36)


### 🧪 Testing

- Add linalg and matmath invariant tests (refs #87) (4c66488)

- Check the full SVD reconstruction, not just the first row (e525b06)

- Drop unused rng import from the matmath tests (84ecd4d)

- Add imgproc invariant tests (refs #87) (1e75a31)

- Close a monotonicity gap in the equalize_histogram test (refs #87) (71982da)

- Add math, detector and optical-flow invariants (refs #87) (23da8a7)

- Correct the ORB margin and LK scope rationale (refs #87) (0f1741d)

- Link the ORB edge-fill characterization to issue #110 (940e75e)

- Use the yape singleton and stop overclaiming LK seed behaviour (refs #87) (bf3cbe9)

- Drop the stale yape API-divergence note (refs #41) (79455f4)

- Add boundary-input tests, finding a box_blur bug (refs #87, #114) (58efb77)

- Cover data structures, node_utils and the buffer pool (refs #87) (d0e1414)

- Cover the three pool users the balance test missed (refs #87) (9bd10f9)

- Sweep the box_blur positive test instead of sampling it (refs #87, #114) (7ce000f)

- Check buffer-pool balance after every test (refs #87) (e3f6431)

- Add ground-truth tests and implementation notes (refs #87) (7c268d9)

- Pin gaussian_blur and warp_affine against references (refs #87) (a7bc07d)

- Pin resample against an exact area average (refs #87) (50db39d)

- Cover the float convolution path (refs #87, #123) (382aebf)


### 🧹 Miscellaneous

- Add LGPL license headers to every source file and bundle (closes #112) (90b90bd)



## 0.10.1 - 2026-07-26

### ♻️ Refactoring

- Add shared ESM demo helpers, convert 2 pilots (refs #79) (aac4674)

- Convert 13 camera examples to ESM helpers (refs #79) (f94220a)

- Convert the two ORB examples to ESM, restructure README (refs #79) (af5804d)

- Give the API demos real data, verifiable output and docs (closes #99) (a76648a)


### 👷 CI

- Support prerelease tags (alpha/beta/rc) (closes #81) (5a020a7)


### 📦 Build

- Bump prettier from 3.9.5 to 3.9.6 (d2ad58c)


### 🧹 Miscellaneous

- Back-merge main into dev to converge branch history (fab129b)



## 0.10.0 - 2026-07-22

### ♻️ Refactoring

- Replace all `any` in src with shared types/interfaces (closes #85) (d1da67e)

- Re-export public interfaces & shared types from the entry (closes #92) (23e42ec)


### 🎨 Style

- Remove stray leading blank line in src/types.ts (071c25e)


### 📦 Build

- Bump actions/setup-node from 6 to 7 (f28506a)

- Bump vite from 8.1.4 to 8.1.5 (8e7a6a0)



## 0.9.0 - 2026-07-11

### 🐛 Bug Fixes

- Git-cliff-action has no 'output' input; write notes via content output (5159e61)


### 📚 Documentation

- Fix broken Twitter/X follow badge (closes #78) (2fafa6e)

- Add any-avoidance rule and refresh roadmap/instructions (ce76796)


### 🚀 Features

- Singleton modules, shared cache, direct namespace export (#41) (3b9eb95)

## 0.8.0 - 2026-07-10

### ♻️ Refactoring

- Extract core base class and de-duplicate math module (#47) (a8a393e)

- De-duplicate imgproc module (#47) (f1dff70)

- De-duplicate fast_corners module (#47) (c0d6c01)

- De-duplicate pyramid_t module (#47) (40cffef)

- De-duplicate linalg module (#47) (a6b379d)

- De-duplicate orb module (#47) (9082831)

- De-duplicate yape06 module (#47) (36df266)

- De-duplicate motion_estimator and extract kernels (#47) (67e1a22)

- De-duplicate the last module; jsfeatNext.ts is now a thin aggregator (#47) (bb84d83)


### 👷 CI

- Automate tag-triggered npm publish with git-cliff changelog (closes #61) (88b9b03)

- Add emoji to changelog group headings (365f90f)


### 📚 Documentation

- Add TSDoc to the whole API; set up TypeDoc generation (36e2591)

- Rewrite README and fix LICENSE mismatch (070844e)


### 📦 Build

- Rebuild dist and types after the #47 de-duplication (6486a4d)

- Bump vite from 8.1.3 to 8.1.4 (600edf0)

- Bump prettier from 3.5.3 to 3.9.5, reformat 11 files (36732a1)


### 🧹 Miscellaneous

- Stop shipping raw src/ in the published npm package (#60) (cb74126)


## 0.7.6 - 2026-07-07

### 🎨 Style

- Format transform parity test with prettier (855e375)

- Prettier-format src/jsfeatNext.ts (148e6f2)


### 🐛 Bug Fixes

- Restore affine2d error() and check_subset() (#51) (657afe5)

- Regenerate lockfile with npm 11 for complete cross-platform optionals (af3ebfd)


### 👷 CI

- Install without lockfile so Linux native binaries resolve (c6fab77)

- Install via npm ci with a cross-platform-corrected lockfile (5b9614a)

- Upgrade Node to 24 (npm 11) to fix optional native-binary install (c40be99)


### 📚 Documentation

- Add jsfeat parity/refactor audit plan and cross-agent instructions (b0e3f17)

- Require PRs to target dev and adopt Conventional Commits (ea05529)

- Update Node to v24 and note the Vitest test suite (4d78c59)


### 📦 Build

- Pin prettier to 3.5.1 for stable lock-free CI formatting (db7da36)

- Migrate webpack to Vite 8 library mode; modernize tsconfig (#42) (45ea746)


### 🧪 Testing

- Add Vitest characterization harness with first jsfeat parity test (4b48b96)

- Add matmath and transform parity suites; vendor jsfeat master as oracle (a4c628c)

- Add math and linalg parity suites (09dc516)

- Add imgproc parity suite; document original jsfeat hough bug (c98f52a)

- Add detector/descriptor/tracker parity suites (32d8035)

- Add motion_estimator parity suite; pin affine2d ransac bug (#51) (dcc50c0)

- Add structs, data-type helper and resample-f32 parity suites (d9edfcc)


### 🧹 Miscellaneous

- Pin runners to ubuntu-24.04 and run tests in CI (6553a42)

- Add .gitattributes to force LF line endings (164cb8c)

- Upgrade dependencies and fix packaging metadata (20a9ae0)