(function (global) {
  'use strict';
  var namespaces = '%namespaces%';
  if (namespaces.length) {
    for (var i in namespaces) {
      var ns = namespaces[i],
          scope = global,
          node,
          nodes = ns.split('.');
      while (nodes.length) {
        node = nodes.shift();
        scope = node in scope ? scope[node] : (scope[node] = {});
      }
    }
  }

  '%code%';
})((function () {
  if (typeof window !== 'undefined') {
    return window;
  } else if (typeof exports !== 'undefined') {
    return exports;
  } else {
    throw new Error("Unsupported global scope.");
  }
})());