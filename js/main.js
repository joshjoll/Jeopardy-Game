//const
// topics[i].topic/a/q/value

const topics = [
  { topic: 'HTML',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'HTML',
  a: 'HTML Stands For',
  q: 'What is Hyper Text Markup Language?',
  value: '$100',
},
  { topic: 'HTML',
  a: 'The largest heading tag',
  q: 'What is <h1>?',
  value: '$200',
},
  { topic: 'HTML',
  a: 'Inserts a line break',
  q: 'What is <br>?',
  value: '$200',
},
  { topic: 'HTML',
  a: 'Opens a link in a new tab',
  q: 'What is target= "_blank"?',
  value: '$300',
},
  { topic: 'HTML',
  a: 'An identifier used for multiple elements',
  q: 'What is a class?',
  value: '$300',
},
  { topic: 'HTML',
  a: 'Displays text describing an image',
  q: 'What is alt?',
  value: '$400',
},
  { topic: 'HTML',
  a: 'Content for a side of a body',
  q: 'What is <aside>?',
  value: '$400',
},
  { topic: 'HTML',
  a: 'Tag indicating JS',
  q: 'What is <script>?',
  value: '$500',
},
  { topic: 'HTML',
  a: 'Inventor of HTML',
  q: 'Who is Tim Berners-Lee?',
  value: '$500',
},
  { topic: 'CSS Properties',
  a: 'this is sadfasdfasdfasdf option',
  q: 'also an option',
  value: '$100',
},
  { topic: 'CSS Properties',
  a: 'plus sadfasdfasdfsaf another one',
  q: 'more options!',
  value: '$100',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'what is <img>?',
  value: '$500',
},
  { topic: 'CSS Properties',
  a: 'A self asdfasdf closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'JS Functions',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$100',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$200',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$300',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$400',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
  value: '$500',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self asdfasdf closing tag?',
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


  // Works.  filters through all titles in Topics array and returns new array with only the first instance of the title. Pushes it to the Options page
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



  //Add an option for a full randomization. Possibly consolidate to 1 function for full render. Filters all question topics from topics array, randomizes answers/questions, and pushes it to the board.
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
    document.querySelector('#a'+p + ' .answer').textContent = qav.a;
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


  //Currently Broken: trying to add an option to un-click a topic. Add button to reset chosenTopics array if I can't fix the first sentence. future change add random button that fills the chosenTopics array. pushes the selected topic to the chosenTopics array. Limits to 6 catgories
function pushTopic(evt) {
    if (evt.target.style.border == '1px solid pink') {
    evt.target.style.border = '1px solid black';
    let num = chosenTopics.indexOf(evt.target.textContent)
    chosenTopics.splice(num, 1);
    for (let i = 1 ; i <= 6; i++) {
      document.getElementById('t' + i).textContent = 'Jeopardy';
    }
    for (let i = 0; i < chosenTopics.length; i++) {
        document.getElementById('t' + (i + 1)).textContent = chosenTopics[i];
      }
  } else if (chosenTopics.length > 5) {
  alert(`You've already selected 6 categories. Let's Play!`);
  }else if (evt.target.className !== 'choices') {
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


  //Add button to reset chosenTopics array. Gives functionality to the "Let's play" button on the options page. Requires user to have 6 categories selected.
function removeOptions() {
  if (chosenTopics.length === 6) {
  document.querySelector('div').style.display = 'none';
  } else {
    alert(`Please select 6 categories`)
  }
}
