/*
A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

*/

function flattenDictionary(dict, path = '', output = {}) {

    let keys = Object.keys(dict), individualPath = path

    keys.forEach(function(key){

      if (path !== '' && key !== '') individualPath = path + '.' + key
      else if (path) individualPath = path
      else individualPath = key

      if (typeof dict[key] === 'object')flattenDictionary(dict[key], individualPath, output)
      else output[individualPath] = dict[key] 
    })

    return output
}
