![github releases](https://flat.badgen.net/github/release/webarkit/jsfeatNext)
![github stars](https://flat.badgen.net/github/stars/webarkit/jsfeatNext)
![github forks](https://flat.badgen.net/github/forks/webarkit/jsfeatNext)
![npm package version](https://flat.badgen.net/npm/v/@webarkit/jsfeat-next)
![Dependabot Badge](https://flat.badgen.net/dependabot/@webarkit/jsfeat-next?icon=dependabot)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CI](https://github.com/webarkit/ARnft/actions/workflows/CI.yml/badge.svg)](https://github.com/webarkit/jsfeatNext/actions/workflows/CI.yml)
![twitter](https://flat.badgen.net/twitter/follow/WebarkitO)

# jsfeatNext 🚀

A testing repository to develop a ES6 version of [jsfeat](https://github.com/inspirit/jsfeat) for the WebARKit project. Consider that this is a test and many things may changes during the development. I will provide some examples for testing.

## List of features ✨

- Typescript definitions

- ES6 support

- webpack bundler

- npm package

## Classes 📚
These public classes were implemented:
- cache
- fast_corners
- homography2d
- imgproc
- keypoint_t
- linalg
- math
- matmath
- matrix_t
- motion_estimator
- optical_flow_lk
- orb
- pyramid_t
- transform
- yape
- yape06

## npm package 📦
You can install the package with:

`npm install @webarkit/jsfeat-next`

Consider that the package is not well tested and many bugs may arise...

## Future features 🔮
Not all the original classes from jsfeat are yet implemented, this will be done in a near future.

## Examples 🧪
Go in the examples folder to test some of them.

working = ✔️ not working = ⚠️

- browser.html ✔️
- grayscale.html ✔️
- linalg_example.html ✔️
- mat_math_example.html ✔️
- matrix_t_example.html ✔️
- orb_test.html ✔️
- sample_box_blur.html ✔️
- sample_canny_edge.html 
- sample_equalize_hist.html ✔️
- sample_fast_corners.html ✔️
- sample_gaussblur.html ✔️
- sample_oflow_lk.html ✔️
- sample_orb.html ✔️
- sample_orb_pinball.html ✔️
- sample_pyrdown.html ✔️
- sample_scharr.html ✔️
- sample_sobel_edge.html ✔️
- sample_sobel.html ✔️
- sample_warp_affine.html ✔️
- sample_warp_perspective.html ✔️
- sample_yape.html ✔️
- sample_yape06.html ✔️

## Typescript examples  📝

You can find some Typescript examples in this repository [jsfeatNext-examples](https://github.com/webarkit/jsfeatNext-examples). 

## Documentation 📖

There is not yet an official JsfeatNext documentation but you can read the [original jsfeat docs](https://inspirit.github.io/jsfeat/) to have an idea of classes and functions. We tried to be much close as possible to the original code, so if it works on **jsfeat** it will works on **jsfeatNext**.