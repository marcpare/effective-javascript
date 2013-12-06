var _ = require('underscore');
var filters = [
  function () { 
    return item.width ? item.width > 100 : true; 
  },
  function () {
    var excludes = {
      'File:Med 1.png':true, 
      'File:Med 2.png':true, 
      'File:Med 3.png':true
    };
    return !(item.title in excludes);
  }
];

var list = [
{ width: 20 },
{ width: 150},
{ title: 'File:Med 1.png'},
{ title: 'foo'}
];

filtered = list.filter(function (item) {
  return _.all(
    filters.map(function (filter) { 
      return filter(item); 
    })
  );
});

console.log(filtered)