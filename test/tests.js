/*test( "hello test", function() {

  var json = {
    loo: 'doo'
  };

  var exp = jsontree(json);
  ok( exp == "<div>loo</div><div>doo</div>", "Passed!" );
});
*/

test( "test1 basico", function() {

  var json = {
    loo: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json);

  equal( exp, "<ul><li><span>loo: </span><ul><li><span>nombre: </span>Eric</li></ul><ul><li><span>apellido: </span>Ponce</li></ul></li></ul>", "Passed!" );
});


test( "test2 basico", function() {

  var json = {
    jii: { nombre: 'Eric', apellidos: {apellido1: 'Ponce', apellido2: 'Rodriguez'} }
  };

  var exp = jsontree(json);
  equal( exp, "<ul><li><span>jii: </span><ul><li><span>nombre: </span>Eric</li></ul><ul><li><span>apellidos: </span><ul><li><span>apellido1: </span>Ponce</li></ul><ul><li><span>apellido2: </span>Rodriguez</li></ul></li></ul></li></ul>", "Passed!" );
});


/*test( "test3 basico", function() {

  var json = {
    jii: { nombre: 'Eric', apellidos: ['Ponce','Rodriguez'] }
  };

  var exp = jsontree(json);
  equal( exp, "<ul><li>jii<ul><li>nombreEric</li></ul><ul><li>apellidos<ul><li>0Ponce</li></ul><ul><li>1Rodriguez</li></ul></li></ul></li></ul>", "Passed!" );
});


test( "test4 basico", function() {

  var json = [
    { nombre: 'Eric', apellido: 'Ponce' },
    { nombre: 'Juan', apellido: 'Artero' }
  ];

  var exp = jsontree(json);
  equal( exp, "<ul><li>0<ul><li>nombreEric</li></ul><ul><li>apellidoPonce</li></ul></li></ul><ul><li>1<ul><li>nombreJuan</li></ul><ul><li>apellidoArtero</li></ul></li></ul>", "Passed!" );
});*/


test( "test1 change html structure", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json, { parent: 'span', child: 'div', keyLabel: 'i' });
  console.log(exp);
  equal( exp, "<span><div><i>lap: </i><span><div><i>nombre: </i>Eric</div></span><span><div><i>apellido: </i>Ponce</div></span></div></span>", "Passed!" );
});

test( "test1 change html structure and add a class", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json, { parent: 'span', child: 'div', keyLabel: 'i.key' });
  console.log(exp);
  equal( exp, '<span><div><i class="key">lap: </i><span><div><i class="key">nombre: </i>Eric</div></span><span><div><i class="key">apellido: </i>Ponce</div></span></div></span>', "Passed!" );
});

test( "test1 change html structure, add a class and template element", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json, { parent: 'span', child: 'div', keyLabel: 'i.key', templateElement: '%element%# ' });
  console.log(exp);
  equal( exp, '<span><div><i class="key">lap# </i><span><div><i class="key">nombre# </i>Eric</div></span><span><div><i class="key">apellido# </i>Ponce</div></span></div></span>', "Passed!" );
});

test( "test key filters", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json);
  console.log(exp);
  equal( exp, '<ul><li><span>lap: </span><ul><li><span>nombre: </span>Eric</li></ul><ul><li><span>apellido: </span>Ponce</li></ul></li></ul>', "Passed!" );
});


