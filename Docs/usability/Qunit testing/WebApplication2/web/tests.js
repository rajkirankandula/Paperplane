/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
QUnit.test('placetest()', function(assert){
    assert.ok(placetest("Kansas"), 'Kansas is a string');
    assert.ok(placetest("Maryville"), 'Maryville is a string');
    assert.ok(placetest('Newyork'), 'Newyork is not a string');
    assert.ok(placetest("Chicago"), 'Chicago is a string');
});
QUnit.test('validateEmail', function(assert){
    assert.ok(validateEmail("adarshkumar.py@gmail.com"), 'valid');
    assert.ok(validateEmail("adarsh.py@gmail.com"), 'valid');
    assert.ok(validateEmail("kumar.py@gmail.com"), 'valid');
});
QUnit.test('timeformat',function(assert){
    assert.ok(timeformat("36 hours"),'invalid');
    assert.ok(timeformat("26 hours"),'invalid');
});

QUnit.test('isValidDate()', function(assert){
    assert.ok(isValidDate("2016-04-20"), 'valid date');
    assert.ok(isValidDate("2015-07-30"), 'valid date');
    assert.ok(isValidDate("2013-03-18"), 'valid date');
    assert.ok(isValidDate("2017-04-14"), 'valid date');
});
//QUnit.test('phonenumber()', function(assert){
//    assert.ok(phonenumber('1234567890'), 'valid phone');
//    assert.ok(phonenumber("123.456.7890"), 'valid phone');
//    assert.ok(phonenumber("123 456 7890"), 'valid phone');
//    assert.ok(phonenumber("+12-3456-7890"), 'valid phone');
//    assert.ok(phonenumber("+12.3456.7890"), 'valid phone');
//});
//
//QUnit.test('isEven()', function(assert) {
//    assert.ok(isEven(0), 'Zero is an even number');
//    assert.ok(isEven(2), 'So is two');
//    assert.ok(isEven(-4), 'So is negative four');
//    assert.ok(!isEven(1), 'One is not an even number');
//    assert.ok(!isEven(-7), 'Neither does negative seven');
// 
//    // Fails
//    ok(isEven(3), 'Three is an even number');
//});
//
//QUnit.test('test', function(assert) {
//    assert.same( {}, {}, 'passes, objects have the same content');
//    assert.same( {a: 1}, {a: 1} , 'passes');
//    assert.same( [], [], 'passes, arrays have the same content');
//    assert.same( [1], [1], 'passes');
//});
//QUnit.test( "Appends a div", function( assert ) {
//  var fixture = $( "#qunit-fixture" );
// 
//  fixture.append( "<div>hello!</div>" );
//  assert.equal( $( "div", fixture ).length, 1, "div added successfully!" );
//});
// 
//QUnit.test( "Appends a span", function( assert ) {
//  var fixture = $( "#qunit-fixture" );
// 
//  fixture.append("<span>hello!</span>" );
//  assert.equal( $( "span", fixture ).length, 1, "span added successfully!" );
//});
//
//
//


//QUnit.test( "global failure", extend( function() {
//QUnit.pushFailure( error, filePath + ":" + linerNr );
//}, { validTest: validTest } ) 