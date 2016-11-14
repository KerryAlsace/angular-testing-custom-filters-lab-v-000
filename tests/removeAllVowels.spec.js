describe('removeAllVowels Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should remove all vowels from a string', function() {
    var string = 'minneanapolis';

    var vowellessString = $filter('removeAllVowels')(string);

    expect(vowellessString.length).toBe(7);
    expect(vowellessString).toBe('mnnnpls');
  });

});