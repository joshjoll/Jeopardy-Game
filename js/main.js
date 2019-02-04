//const

//topics.*topic*.q*#*.*value*

var topics = {
  HTMLTags: {
    v100: {
      q1: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$100',
      },
      q2: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$200',
      },
      q3: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$300',
      },
      q4: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$400',
      },
      q5: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$500',
      },
    },
    v200: {
      q1: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$100',
      },
      q2: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$200',
      },
      q3: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$300',
      },
      q4: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$400',
      },
      q5: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$500',
      },
    },
    v300: {
      q1: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$100',
      },
      q2: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$200',
      },
      q3: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$300',
      },
      q4: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$400',
      },
      q5: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$500',
      },
    },
    v400: {
      q1: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$100',
      },
      q2: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$200',
      },
      q3: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$300',
      },
      q4: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$400',
      },
      q5: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$500',
      },
    },
    v500: {
      q1: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$100',
      },
      q2: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$200',
      },
      q3: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$300',
      },
      q4: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$400',
      },
      q5: {
        a: 'A self closing tag',
        q: 'what is <img>?',
        value: '$500',
      },
    },

  },
  CSSProperties: {

  },
  arrays: {

  },
  typeof: {

  },
  gitHub: {

  },
  loops: {

  },
  jsFunctions: {

  },
  jquery: {

  },
};

console.log(topics.HTMLTags.v100.q1);
// app's state variables

// cached element references

// event listeners

document.getElementById('play').addEventListener('click', removeOptions);
// document.querySelectorAll('.table-row')[0].addEventListener('click', revealAnswer); /*if row is clicked, deletes last .cell element */


document.getElementsByClassName('board')[0].addEventListener('click', revealAnswer); /* hides all values when number clicked, but if row is clicked it deletes last .cell element*/


// functions

function revealAnswer(evt) {
  console.log(evt.target.className);
  if (evt.target.className == 'answer' || evt.target.className == 'question' || evt.target.className == 'value') {
    evt.target.style.display = 'none';
    evt.target.nextElementSibling.style.display = 'inline';
  } else {
    console.log('Try another square');
}
}

// function revealAnswer() {
//   this.getElementsByClassName('value')[0].style.display = 'none';
//   this.getElementsByClassName('answer')[0].style.display = 'inline';
//   this.addEventListener('click', function() {
//     this.getElementsByClassName('answer')[0].style.display = 'none';
//     this.getElementsByClassName('question')[0].style.display = 'inline';
//     this.addEventListener('click', function() {
//       this.getElementsByClassName('question')[0].style.display = 'none';
//     });
//   });
// }

function removeOptions() {
  document.querySelector('div').style.display = 'none';
}
