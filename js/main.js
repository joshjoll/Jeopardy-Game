//const
// topics[i].topic/a/q/value

const questions = {
  'HTML': {
    100: [
      {
        a: 'Provides bold font to text',
        q: 'What is <strong>?',
      },{
        a: 'HTML Stands For',
        q: 'What is Hyper Text Markup Language?',
      }
    ],
    200: [
      {
        a: 'The largest heading tag',
        q: 'What is <h1>?',
      },{
        a: 'Inserts a line break',
        q: 'What is <br>?',
      }
    ],
    300: [
      {
        a: 'Opens a link in a new tab',
        q: 'What is target= "_blank"?',
      },{
        a: 'An identifier used for multiple elements',
        q: 'What is a class?',
      }
    ],
    400: [
      {
        a: 'Displays text describing an image',
        q: 'What is alt?',
      },{
        a: 'Content for a side of a body',
        q: 'What is <aside>?',
      }
    ],
    500: [
      {
        a: 'Tag indicating JS',
        q: 'What is <script>?',
      },{
        a: 'Inventor of HTML',
        q: 'Who is Tim Berners-Lee?',
      }
    ],
  },
  'CSS Properties': {
    100: [
      {
        a: 'Changes the text size of an element',
        q: 'What is font-size?',
      },{
        a: 'Cascading Style Sheets',
        q: 'What is CSS?',
      }
    ],
    200: [
      {
        a: 'Adds space between content and border',
        q: 'What is padding?',
      },{
        a: 'Preferred method to style an element',
        q: 'What is an External Style Sheet??',
      }
    ],
    300: [
      {
        a: 'Positions an element right in its container',
        q: 'What is float: right?',
      },{
        // help
        a: 'A self closing tag',
        q: 'Option 5?',
      }
    ],
    400: [
      {
        a: 'PseudoClass that reads user mouse postion',
        q: 'What is :hover?',
      },{
        a: 'Uses an . to style an element',
        q: 'What is a class?',
      }
    ],
    500: [
      {
        a: 'Uses a # to style an element',
        q: 'What is an ID?',
      },{
        a: 'Forces elements to line up horizontally',
        q: 'What is display: inline?',
      }
    ],
  },
  'JavaScript': {
    100: [
      {
        a: 'Cycles through each item in an array',
        q: 'What is forEach?',
      },{
        a: 'Returns a single value from an array',
        q: 'What is reduce?',
      }
    ],
    200: [
      {
        a: 'Returns index of item requested',
        q: 'What is findIndex?',
      },{
        a: 'Type of bracket used in an object',
        q: 'What is a curly bracket?',
      }
    ],
    300: [
      {
        a: 'Type of bracket used in an array',
        q: 'What is a square bracket?',
      },{
        a: 'Stores a variable that cant be changed',
        q: 'What is a const?',
      }
    ],
    400: [
      {
        a: 'An object that listens for user actions',
        q: 'What is an event listener?',
      },{
        a: 'Method that adds value to end of an array',
        q: 'What is push?',
      }
    ],
    500: [
      {
        a: 'Method that removes at the end of an array',
        q: 'What is pop?',
      },{
        a: 'An operator used to set a new value',
        q: 'What is =?',
      }
    ],
  },
  'Dumb Jokes': {
    100: [
      {
        a: 'Nothing he just waved',
        q: 'What did the flag say?',
      },{
        a: 'Meet you at the corner',
        q: 'What did the wall say?',
      }
    ],
    200: [
      {
        a: 'Buh-dum-Tss',
        q: 'What is a snare drum and a cymbol?',
      },{
        a: 'Elliphino',
        q: 'What is a mix between a rhino and an elephant?',
      }
    ],
    300: [
      {
        a: 'He needed a little space',
        q: 'What is a claustrophobic astronaut?',
      },{
        a: 'An identifier used for multiple elements',
        q: 'What is a class?',
      }
    ],
    400: [
      {
        a: 'Throw him in the mainstream',
        q: 'How do you drown a hipster?',
      },{
        a: 'Gets jalapeno business',
        q: 'What does a nosy pepper do?',
      }
    ],
    500: [
      {
        a: 'Someone elses cheese',
        q: 'What is Nacho Cheese?',
      },{
        a: 'She had a bad code',
        q: 'Why the developer called in sick?',
      }
    ],
  },
  'Josh Trivia': {
    100: [
      {
        a: 'Josh was born here',
        q: 'Where is Pittsburgh?',
      },{
        a: 'Josh lives here',
        q: 'Where is Austin?',
      }
    ],
    200: [
      {
        // help
        a: 'National Parks',
        q: 'What is Joshs favorite vacations?',
      },{
        a: 'Joshs favorite word to use as a password',
        q: 'What is *********?',
      }
    ],
    300: [
      {
        a: 'Josh identifies as this kitchen utensil',
        q: 'What is a wooden spoon?',
      },{
        a: 'Josh wanted to be this as a child',
        q: 'What is a firefighter?',
      }
    ],
    400: [
      {
        a: 'The number of cars Josh has owned',
        q: 'What is 2?',
      },{
        a: 'This is joshs favorite beverage',
        q: 'What is water?',
      }
    ],
    500: [
      {
        a: 'This is the first web game Josh made on his own',
        q: 'What is Jeopardy?',
      },{
        a: 'Joshs favorite type of food',
        q: 'What is Barbecue?',
      }
    ],
  },
  '5': {
    100: [
      {
        a: 'Provides bold font to text',
        q: 'What is <strong>?',
      },{
        a: 'HTML Stands For',
        q: 'What is Hyper Text Markup Language?',
      }
    ],
    200: [
      {
        a: 'The largest heading tag',
        q: 'What is <h1>?',
      },{
        a: 'Inserts a line break',
        q: 'What is <br>?',
      }
    ],
    300: [
      {
        a: 'Opens a link in a new tab',
        q: 'What is target= "_blank"?',
      },{
        a: 'An identifier used for multiple elements',
        q: 'What is a class?',
      }
    ],
    400: [
      {
        a: 'Displays text describing an image',
        q: 'What is alt?',
      },{
        a: 'Content for a side of a body',
        q: 'What is <aside>?',
      }
    ],
    500: [
      {
        a: 'Tag indicating JS',
        q: 'What is <script>?',
      },{
        a: 'Inventor of HTML',
        q: 'Who is Tim Berners-Lee?',
      }
    ],
  },
  '6': {
    100: [
      {
        a: 'Provides bold font to text',
        q: 'What is <strong>?',
      },{
        a: 'HTML Stands For',
        q: 'What is Hyper Text Markup Language?',
      }
    ],
    200: [
      {
        a: 'The largest heading tag',
        q: 'What is <h1>?',
      },{
        a: 'Inserts a line break',
        q: 'What is <br>?',
      }
    ],
    300: [
      {
        a: 'Opens a link in a new tab',
        q: 'What is target= "_blank"?',
      },{
        a: 'An identifier used for multiple elements',
        q: 'What is a class?',
      }
    ],
    400: [
      {
        a: 'Displays text describing an image',
        q: 'What is alt?',
      },{
        a: 'Content for a side of a body',
        q: 'What is <aside>?',
      }
    ],
    500: [
      {
        a: 'Tag indicating JS',
        q: 'What is <script>?',
      },{
        a: 'Inventor of HTML',
        q: 'Who is Tim Berners-Lee?',
      }
    ],
  },
}

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


  // loops through entries in questions object and appends the key to the topicOptions array
function createChoices() {
  for (const [key, value] of Object.entries(questions)) {
    if (!optionTopics.includes(key)){
      optionTopics.push(key)
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


  //Add button to reset chosenTopics array. future change add random button that fills the chosenTopics array. pushes the selected topic to the chosenTopics array. Limits to 6 catgories
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
