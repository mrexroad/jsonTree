test( "test1 basic", function() {

  var json = {
    loo: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json);

  equal( exp, "<ul><li><span>loo: </span><ul><li><span>nombre: </span>Eric</li><li><span>apellido: </span>Ponce</li></ul></li></ul>", "Passed!" );
});


test( "test2 basic", function() {

  var json = {
    jii: { nombre: 'Eric', apellidos: {apellido1: 'Ponce', apellido2: 'Rodriguez'} }
  };

  var exp = jsontree(json);
  equal( exp, "<ul><li><span>jii: </span><ul><li><span>nombre: </span>Eric</li><li><span>apellidos: </span><ul><li><span>apellido1: </span>Ponce</li><li><span>apellido2: </span>Rodriguez</li></ul></li></ul></li></ul>", "Passed!" );
});


test( "test1 change html structure", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json, { parentLabel: 'span', childLabel: 'div', keyLabel: 'i' });
  equal( exp, "<span><div><i>lap: </i><span><div><i>nombre: </i>Eric</div><div><i>apellido: </i>Ponce</div></span></div></span>", "Passed!" );
});

test( "test1 change html structure and add a class", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json, { parentLabel: 'span', childLabel: 'div', keyLabel: 'i.key' });
  equal( exp, '<span><div><i class="key">lap: </i><span><div><i class="key">nombre: </i>Eric</div><div><i class="key">apellido: </i>Ponce</div></span></div></span>', "Passed!" );
});

test( "test1 change html structure, add a class and template element", function() {

  var json = {
    lap: { nombre: 'Eric', apellido: 'Ponce' }
  };

  var exp = jsontree(json, { parentLabel: 'span', childLabel: 'div', keyLabel: 'i.key', keyTemplate: '%element%# ' });
  equal( exp, '<span><div><i class="key">lap# </i><span><div><i class="key">nombre# </i>Eric</div><div><i class="key">apellido# </i>Ponce</div></span></div></span>', "Passed!" );
});


