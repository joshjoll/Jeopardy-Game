//const
// topics[i].topic/a/q/value

const topics = [
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'HTML Tags',
  a: 'this is the second option',
  q: 'second option',
  value: '$100',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'HTML Tags',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'CSS Properties',
  a: 'this is another option',
  q: 'also an option',
  value: '$100',
},
  { topic: 'CSS Properties',
  a: 'plus another one',
  q: 'more options!',
  value: '$100',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$100',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$200',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$300',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$400',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
];

// const ids = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6'];

const tcells = ['t1', 't2', 't3', 't4', 't5', 't6'];

// app's state variables
  //new array to store first instance of a topic value to push to the options page
var optionTopics =[];


  //store the topics chosen by the user on option page
var chosenTopics = [];

// cached element references

// event listeners

  //removes the initial options overlay
document.getElementById('play').addEventListener('click', removeOptions);

  //pull the topics from the chosenTopics array, pushes to the board
document.getElementById('play').addEventListener('click', render);

  //cycles through value/answer/question on the board
document.getElementsByClassName('board')[0].addEventListener('click', revealAnswer);

  //selects the topic and pushes it chosenTopic array
document.querySelector('section').addEventListener('click', pushTopic);

// functions





  // Works. future change add random button that fills the chosenTopics array. filters through all titles in Topics array and returns new array with only the first instance of the title. Pushes it to the Options page
function createChoices() {
  for (let i = 0; i < topics.length; i++) {
    if (optionTopics.includes(topics[i].topic)) {
    } else {
      optionTopics.push(topics[i].topic)
    }
  }
  for (let i = 0; i < optionTopics.length; i++) {
    var newDiv = document.createElement('DIV');
    var newTopic = document.createTextNode(optionTopics[i]);
    newDiv.appendChild(newTopic);
    document.querySelector('section').appendChild(newDiv).classList.add('choices');

  }
}
createChoices();



  //need to randomize the questions picked for each topic. Also need an option for a full randomization
  //DO NOT DELETE. Need to remove from event listner first
function render() {
  let p = 1;
  chosenTopics.forEach(function(topic) {
    var tempArray = [];
    for (let i = 0; i < topics.length; i++) {
      if (topic == topics[i].topic && topics[i].value == '$100') {
        tempArray.push(topics[i]);
      }
    }
    var qav = tempArray[Math.floor(Math.random() * tempArray.length)];
    console.log(qav.a);
    document.querySelector('#a'+p + ' .answer').textContent = qav.a
    document.querySelector('#a'+p + ' .question').textContent = qav.q;
    p += 1;
  });
  p = 1;
  chosenTopics.forEach(function(topic) {
    var tempArray = [];
    for (let i = 0; i < topics.length; i++) {
      if (topic == topics[i].topic && topics[i].value == '$200') {
        tempArray.push(topics[i]);
      }
    }
    var qav = tempArray[Math.floor(Math.random() * tempArray.length)];
    console.log(qav.a);
    document.querySelector('#b'+p + ' .answer').textContent = qav.a;
    document.querySelector('#b'+p + ' .question').textContent = qav.q;
    p += 1;
  });
  p = 1;
  chosenTopics.forEach(function(topic) {
    var tempArray = [];
    for (let i = 0; i < topics.length; i++) {
      if (topic == topics[i].topic && topics[i].value == '$300') {
        tempArray.push(topics[i]);
      }
    }
    var qav = tempArray[Math.floor(Math.random() * tempArray.length)];
    console.log(qav.a);
    document.querySelector('#c'+p + ' .answer').textContent = qav.a;
    document.querySelector('#c'+p + ' .question').textContent = qav.q;
    p += 1;
  });
  p = 1;
  chosenTopics.forEach(function(topic) {
    var tempArray = [];
    for (let i = 0; i < topics.length; i++) {
      if (topic == topics[i].topic && topics[i].value == '$400') {
        tempArray.push(topics[i]);
      }
    }
    var qav = tempArray[Math.floor(Math.random() * tempArray.length)];
    console.log(qav.a);
    document.querySelector('#d'+p + ' .answer').textContent = qav.a;
    document.querySelector('#d'+p + ' .question').textContent = qav.q;
    p += 1;
  });
  p = 1;
  chosenTopics.forEach(function(topic) {
    var tempArray = [];
    for (let i = 0; i < topics.length; i++) {
      if (topic == topics[i].topic && topics[i].value == '$500') {
        tempArray.push(topics[i]);
      }
    }
    var qav = tempArray[Math.floor(Math.random() * tempArray.length)];
    console.log(qav.a);
    document.querySelector('#e'+p + ' .answer').textContent = qav.a;
    document.querySelector('#e'+p + ' .question').textContent = qav.q;
    p += 1;
  });
}


  //pushes the selected topic to the chosenTopics array. Limits to 6 catgories
function pushTopic(evt) {
    if (chosenTopics.length > 5) {
    alert(`You've already selected 6 categories. Let's Play!`);
  } else if (evt.target.style.border == '1px solid pink') {
    alert(`Please do not select the same topic twice`);
  } else if (evt.target.className !== 'choices') {
    console.log('not an option');
  } else if (chosenTopics.length < 6) {
    chosenTopics.push(evt.target.textContent);
    evt.target.style.border = '1px solid pink';
    let i = chosenTopics.length;
    document.getElementById('t' + i).textContent = evt.target.textContent;
  }
}

  //Works. changes from value to answer to question when clicked. want to add margin/padding to the text in cells so it can be clicked anywhere in cell
function revealAnswer(evt) {
  if (evt.target.className == 'answer' || evt.target.className == 'question' || evt.target.className == 'value') {
    evt.target.style.display = 'none';
    evt.target.nextElementSibling.style.display = 'inline';
  } else {
    console.log('Try another square');
  }
}


  //Works. future change to automatically exit options page after six topics are chosen. Gives functionality to the "Let's play" button on the options page. Requires user to have 6 categories selected.
function removeOptions() {
  if (chosenTopics.length === 6) {
  document.querySelector('div').style.display = 'none';
  } else {
    alert(`Please select 6 categories`)
  }
}
