//const

//topics.*topic*.q*#*.*value*

const topics = {
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

console.log(topics.HTMLTags.v100.children[0]);

const ids = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6'];

// app's state variables
var nextTopic =;
var topics = []; /*need to push topics into this array. Maybe push all qs, as, and values into here*/

// cached element references

// event listeners

  //removes the initial options overlay
document.getElementById('play').addEventListener('click', removeOptions);

  //cycles through value/answer/question on the board
document.getElementsByClassName('board')[0].addEventListener('click', revealAnswer);

//need to add in event listener for the options page for topics
// functions

//need to randomize the questions picked for each topic. Also need an option for a full randomization
var random = function() {
  Math.floor(Math.random() * topics./*need to add an event listener/target in here for the options page*/.length
}

function revealAnswer(evt) {
  console.log(evt.target.className);
  if (evt.target.className == 'answer' || evt.target.className == 'question' || evt.target.className == 'value') {
    evt.target.style.display = 'none';
    evt.target.nextElementSibling.style.display = 'inline';
  } else {
    console.log('Try another square');
  }
}

function funFun() {
  for (let i = 0; i < ids.length; i++) {
    //add childElement to assign value?
    document.getElementById(ids[i]).children[0].innerHTML = topics.HTMLTags.v100.q1.value; /*need to replace this with a var/method */
    
    // document.querySelector('#ids[i]').innerHTML = topics.HTMLTags.v100.q1.value;
  }
}
funFun();

function removeOptions() {
  document.querySelector('div').style.display = 'none';
}
