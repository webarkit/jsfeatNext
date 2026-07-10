
## Unreleased

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