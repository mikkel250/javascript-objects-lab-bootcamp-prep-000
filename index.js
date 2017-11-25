var recipes = { a: '1', b: '2' };

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({newObject}, {key: value});
  return newObject;
}

/* 
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({newObject}, {key: value});
  return object;
}
*/
