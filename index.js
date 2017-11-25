var recipes = { a: '1', b: '2' };

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  // return object;
  Object.assign({newObject}, {key: value});
  return object;
}

/* 
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({newObject}, {key: value});
  return object;
}
*/
