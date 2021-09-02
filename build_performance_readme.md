# [构建性能](https://webpack.js.org/guides/build-performance/)

* Use the latest webpack version. (package manager、Node)
* Use the include field to only apply the loader modules that actually need to be transformed by it
* Each additional loader/plugin has a bootup time. Try to use as few tools as possible

