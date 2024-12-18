document.addEventListener('DOMContentLoaded', function() {
  $('showOptionsBtn').addEventListener('click', function() {
      $('testOptions').style.display = 'block';
  });

  $('testTriangleBtn').addEventListener('click', function() {
      var sideA = parseInt($('sideA').value);
      var sideB = parseInt($('sideB').value);
      var sideC = parseInt($('sideC').value);

      if (isTriangle(sideA, sideB, sideC)) {
          $('result').innerText = 'These side lengths can form a triangle.';
      } else {
          $('result').innerText = 'These side lengths cannot form a triangle.';
      }
  });

  $('testRightTriangleBtn').addEventListener('click', function() {
      var sideA = parseInt($('sideA').value);
      var sideB = parseInt($('sideB').value);
      var sideC = parseInt($('sideC').value);

      if (isTriangle(sideA, sideB, sideC) && isRightTriangle(sideA, sideB, sideC)) {
          $('result').innerText = 'These sides can form a right triangle.';
      } else {
          $('result').innerText = 'These sides cannot form a right triangle.';
      }
  });

  $('testBothBtn').addEventListener('click', function() {
      var sideA = parseInt($('sideA').value);
      var sideB = parseInt($('sideB').value);
      var sideC = parseInt($('sideC').value);

      if (isTriangle(sideA, sideB, sideC)) {
          $('result').innerText = 'These sides can form a triangle.';
          if (isRightTriangle(sideA, sideB, sideC)) {
              $('result').innerHTML += '<br>These sides can form a right triangle.';
          }
      } else {
          $('result').innerText = 'These sides cannot form a triangle.';
      }
  });

  $('clearBtn').addEventListener('click', function() {
      $('result').innerText = '';
      $('sideA').value = '';
      $('sideB').value = '';
      $('sideC').value = '';
  });

  function isTriangle(a, b, c) {
      return (a + b > c && a + c > b && b + c > a);
  }

  function isRightTriangle(a, b, c) {
      return (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a);
  }
});
