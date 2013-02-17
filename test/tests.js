test( "test1 basic", function() {

  var json = {
    loo: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json);

  equal( exp, "<ul><li><span>loo: </span><ul><li><span>nombre: </span>Eric</li></ul><ul><li><span>apellido: </span>Ponce</li></ul></li></ul>", "Passed!" );
});


test( "test2 basic", function() {

  var json = {
    jii: { nombre: 'Eric', apellidos: {apellido1: 'Ponce', apellido2: 'Rodriguez'} }
  };

  var exp = jsontree(json);
  equal( exp, "<ul><li><span>jii: </span><ul><li><span>nombre: </span>Eric</li></ul><ul><li><span>apellidos: </span><ul><li><span>apellido1: </span>Ponce</li></ul><ul><li><span>apellido2: </span>Rodriguez</li></ul></li></ul></li></ul>", "Passed!" );
});


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


