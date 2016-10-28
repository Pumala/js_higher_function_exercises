// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

var names = ["Sarah", "Thomas", "Franklin", "Joseph", "Zoey", "Earl"];

var sortedNames = names.sort(function(name1, name2) {
  return name1.length - name2.length;
});
