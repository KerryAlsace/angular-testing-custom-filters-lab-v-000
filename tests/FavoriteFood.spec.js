describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter correctly by favorite food', function() {
    var people = [
      {
        name: 'Kevin',
        favoriteFood: 'Biscuits and Gravy'
      },
      {
        name: 'Kerry',
        favoriteFood: 'Apples'
      },
      {
        name: 'Nikki',
        favoriteFood: 'Trash'
      }
    ];

    var filteredList = $filter('favoriteFood')(people, 'Trash');

    expect(filteredList.length).toBe(1);
    expect(filteredList[0].name).toBe('Nikki');
  })

  
});