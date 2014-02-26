var types = {
  '[object Boolean]':  'boolean',
  '[object Number]':   'number',
  '[object String]':   'string',
  '[object Function]': 'function',
  '[object Array]':    'array',
  '[object Date]':     'date',
  '[object RegExp]':   'regexp',
  '[object Object]':   'object'
};

js.types.type = function(input) {
  if (input === void 0 || input === null) {
    return String(input);
  }
  return types[Object.prototype.toString.call(input)];
};
