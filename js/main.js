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

console.log(topics.HTMLTags);
// app's state variables

// cached element references

// event listeners

document.getElementById('play').addEventListener('click', removeOptions);
document.getElementsByClassName('cell')[0].addEventListener('click', revealAnswer);

// functions

function revealAnswer(evt) {
  console.log(evt.target);
  evt.target.style.display = "none"
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
