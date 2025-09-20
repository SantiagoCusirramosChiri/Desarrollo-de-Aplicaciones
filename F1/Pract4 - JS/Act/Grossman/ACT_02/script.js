console.log(x === undefined);
var x = 3;
console.log("Valor de x después de asignar:", x);

var Xvar = 'my value';

(function() {
    console.log(Xvar); 
    var Xvar = 'valor local';
    console.log("var:", Xvar); 
})();
