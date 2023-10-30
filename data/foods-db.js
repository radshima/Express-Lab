const foods = [
    { food: 'Pizza', delicious: true },
    { food: 'Sushi', delicious: true },
    { food: 'Burger', delicious: true },
    { food: 'Salad', delicious: false },
    { food: 'Ice Cream', delicious: true },
    { food: 'Tacos', delicious: true }
  ];

  module.exports = {
    getAll: function() {
        return foods;
    }
  };