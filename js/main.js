//const

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

console.log(topics.HTMLTags.v100.childNodes);

const ids = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6'];

const tcells = ['t1', 't2', 't3', 't4', 't5', 't6']

// app's state variables

var nextTopic

//store the topics chosen by the user on option page
var chosenTopics = []

// cached element references

// event listeners

  //removes the initial options overlay
document.getElementById('play').addEventListener('click', removeOptions);

  //pull the topics from the chosenTopics array, finds question category in object, pushes to the board
document.getElementById('play').addEventListener('click', render);

  //cycles through value/answer/question on the board
document.getElementsByClassName('board')[0].addEventListener('click', revealAnswer);

  //only works on first topic
document.querySelector('section').addEventListener('click', pushTopic);

// functions

//need to randomize the questions picked for each topic. Also need an option for a full randomization
// var random = function() {
//   Math.floor(Math.random() * topics./*need to add an event listener/target in here for the options page.*/.length
// }

function render() {
  for (let i = 0; i < chosenTopics.length; i++) {

  }
}

//needs completely retweaked, but worked
function funFun() {
  for (let i = 0; i < ids.length; i++) {
    //add childElement to assign value?
    document.getElementById(ids[i]).children[0].innerHTML = topics.HTMLTags.v100.q1.value; /*need to replace this with a var/method */

    // document.querySelector('#ids[i]').innerHTML = topics.HTMLTags.v100.q1.value;
  }
}
funFun();

  //pushes the selected topic to the chosenTopics array. Limits to 6 catgories
function pushTopic(evt) {
  if (chosenTopics.length < 6) {
    chosenTopics.push(evt.target.textContent);
    let i = chosenTopics.length;
    document.getElementById('t' + i).textContent = evt.target.textContent;
  } else {
    alert(`You've selected 6 categories. Let's Play`)
  }
}

  //changes from value to answer to question when clicked. want to add margin/padding to the text in cells so it can be clicked anywhere in cell
function revealAnswer(evt) {
  if (evt.target.className == 'answer' || evt.target.className == 'question' || evt.target.className == 'value') {
    evt.target.style.display = 'none';
    evt.target.nextElementSibling.style.display = 'inline';
  } else {
    console.log('Try another square');
  }
}


  //Change to automatically exit options page after six topics are chosen. Change to make border different color if selected. Gives functionality to the "Let's play" button on the options page. Requires user to have 6 categories selected.
function removeOptions() {
  if (chosenTopics.length === 6) {
  document.querySelector('div').style.display = 'none';
  } else {
    alert(`Please select 6 categories`)
  }
}
