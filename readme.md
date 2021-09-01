## Entry Points

* If there are any duplicated modules between entry chunks they will be included in both bundles.
* It isn't as flexible and can't be used to dynamically split code with the core application logic.

## Dynamic Imports

import() calls use promises internally. If you use import() with older browsers (e.g., IE 11), remember to shim Promise using a polyfill such as es6-promise or promise-polyfill.

## [Prefetching/Preloading modules](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)

* **prefetch**: resource is probably needed for some navigation in the future
* **preload**: resource will also be needed during the current navigation

```
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```

This will result in `<link rel="prefetch" href="login-modal-chunk.js">` being appended in the head of the page, which will instruct the browser to prefetch in idle time the login-modal-chunk.js file.

> webpack will add the prefetch hint once the parent chunk has been loaded.


```
//...
import(/* webpackPreload: true */ 'ChartingLibrary');
```
When a page which uses the ChartComponent is requested, the charting-library-chunk is also requested via `<link rel="preload">`

## [Bundle Analysis](https://webpack.js.org/guides/code-splitting/#bundle-analysis)
