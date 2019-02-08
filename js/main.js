//const
// topics[i].topic/a/q/value

const topics = [
  { topic: 'HTML',
  a: 'A closing tag',
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
  a: 'Changes the text size of an element',
  q: 'What is font-size?',
  value: '$100',
},
  { topic: 'CSS Properties',
  a: 'Cascading Style Sheets',
  q: 'What is CSS?',
  value: '$100',
},
  { topic: 'CSS Properties',
  a: 'Adds space between content and border',
  q: 'What is padding?',
  value: '$200',
},
  { topic: 'CSS Properties',
  a: 'Preferred method to style an element',
  q: 'What is an External Style Sheet??',
  value: '$200',
},
  { topic: 'CSS Properties',
  a: 'Positions an element right in its container',
  q: 'What is float: right?',
  value: '$300',
},
  { topic: 'CSS Properties',
  a: 'A self closing tag',
  q: 'Option 5?',
  value: '$300',
},
  { topic: 'CSS Properties',
  a: 'PseudoClass that reads user mouse postion',
  q: 'What is :hover?',
  value: '$400',
},
  { topic: 'CSS Properties',
  a: 'Uses an . to style an element',
  q: 'What is a class?',
  value: '$400',
},
  { topic: 'CSS Properties',
  a: 'Uses a # to style an element',
  q: 'What is an ID?',
  value: '$500',
},
  { topic: 'CSS Properties',
  a: 'Forces elements to line up horizontally',
  q: 'What is display: inline?',
  value: '$500',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'Arrays',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'Github',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'Loops',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'JavaScript',
  a: 'Cycles through each item in an array',
  q: 'What is forEach?',
  value: '$100',
},
  { topic: 'JavaScript',
  a: 'Returns a single value from an array',
  q: 'What is reduce?',
  value: '$100',
},
  { topic: 'JavaScript',
  a: 'Returns index of item requested',
  q: 'What is findIndex?',
  value: '$200',
},
  { topic: 'JavaScript',
  a: 'Type of bracket used in an object',
  q: 'What is a curly bracket?',
  value: '$200',
},
  { topic: 'JavaScript',
  a: 'Type of bracket used in an array',
  q: 'What is a square bracket?',
  value: '$300',
},
  { topic: 'JavaScript',
  a: 'Stores a variable that cant be changed',
  q: 'What is a const?',
  value: '$300',
},
  { topic: 'JavaScript',
  a: 'An object that listens for user actions',
  q: 'What is an event listener?',
  value: '$400',
},
  { topic: 'JavaScript',
  a: 'Method that adds value to end of an array',
  q: 'What is push?',
  value: '$400',
},
  { topic: 'JavaScript',
  a: 'Method that removes value to end of an array',
  q: 'What is pop?',
  value: '$500',
},
  { topic: 'JavaScript',
  a: 'An operator used to set a new value',
  q: 'What is =?',
  value: '$500',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$100',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$200',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$300',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$400',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
  { topic: 'Jquery',
  a: 'A self closing tag',
  q: 'A self closing tag?',
  value: '$500',
},
];

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
