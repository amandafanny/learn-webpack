# Entry Points

* If there are any duplicated modules between entry chunks they will be included in both bundles.
* It isn't as flexible and can't be used to dynamically split code with the core application logic.

# Dynamic Imports
import() calls use promises internally. If you use import() with older browsers (e.g., IE 11), remember to shim Promise using a polyfill such as es6-promise or promise-polyfill.