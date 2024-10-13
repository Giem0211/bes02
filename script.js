const quizData = [
  // Chapter 1 - Organizations and Management
  {
    question: "1. What is an organization?",
    choices: [
      "A collection of people working together to achieve a common purpose.",
      "A random group of individuals.",
      "An entity without a purpose.",
      "A set of unrelated tasks."
    ],
    answer: 0 // Correct answer index
  },
  {
    question: "2. Which of the following is a characteristic of an organization?",
    choices: [
      "Deliberate structure.",
      "Unlimited resources.",
      "Individual purpose.",
      "A temporary group."
    ],
    answer: 0
  },
  {
    question: "3. True or False: In a traditional organization, work is job-focused and stable.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "4. Which of the following individuals contributed early ideas about leadership through his book 'The Prince'?",
    choices: [
      "Adam Smith",
      "Niccolò Machiavelli",
      "Frederick W. Taylor",
      "Max Weber"
    ],
    answer: 1
  },
  {
    question: "5. What was Adam Smith's contribution to early management thought?",
    choices: [
      "The concept of division of labor in 'The Wealth of Nations'.",
      "The principles of Scientific Management.",
      "The idea of bureaucracy.",
      "The importance of human relations."
    ],
    answer: 0
  },
  {
    question: "6. Who wrote 'The Art of War'?",
    choices: [
      "Sun Tzu",
      "Machiavelli",
      "Frederick W. Taylor",
      "Henri Fayol"
    ],
    answer: 0
  },
  {
    question: "7. What is Scientific Management?",
    choices: [
      "An approach that seeks to find the best method to perform tasks through scientific analysis.",
      "An unstructured management approach.",
      "A focus on human relations.",
      "A way to reduce the workforce."
    ],
    answer: 0
  },
  {
    question: "8. What was the main idea behind Max Weber's Bureaucratic Management?",
    choices: [
      "Establishing a rational and efficient form of organization based on rules and hierarchy.",
      "Eliminating inefficiencies through employee engagement.",
      "Focusing on interpersonal relationships.",
      "Using financial incentives to motivate workers."
    ],
    answer: 0
  },
  {
    question: "9. What is one of the key principles in Henri Fayol's 14 Principles of Administrative Management?",
    choices: [
      "Division of work.",
      "Strict adherence to hierarchy.",
      "Emphasis on financial goals.",
      "Flexibility in management."
    ],
    answer: 0
  },
  
  // Chapter 2 - Historical Background of Management
  {
    question: "10. Which early advocate believed in the importance of group ethics and that managers should harmonize group efforts?",
    choices: [
      "Mary Parker Follett",
      "Hugo Munsterberg",
      "Chester Barnard",
      "Robert Owen"
    ],
    answer: 0
  },
  {
    question: "11. What is the Hawthorne Effect?",
    choices: [
      "The discovery that paying special attention to employees motivates them to put greater effort into their jobs.",
      "A phenomenon where productivity decreases in bright light.",
      "A study showing that monetary rewards are the only motivators.",
      "An effect of groupthink in organizations."
    ],
    answer: 0
  },
  {
    question: "12. What does Maslow's Hierarchy of Needs imply?",
    choices: [
      "Managers who help their subordinates satisfy important needs will achieve productivity.",
      "Employees only work for money.",
      "Workplace relationships are not important.",
      "People will always avoid responsibility."
    ],
    answer: 0
  },
  {
    question: "13. What is McGregor's Theory Y?",
    choices: [
      "A perspective that most employees do not dislike work and want to contribute.",
      "A belief that employees are inherently lazy.",
      "An approach to encourage strict supervision.",
      "A way to reduce employee input."
    ],
    answer: 0
  },
  {
    question: "14. What is the management science approach?",
    choices: [
      "An approach that emphasizes the use of scientific methods and quantitative techniques to increase organizational success.",
      "A way to focus solely on human behavior.",
      "A technique to eliminate bureaucracy.",
      "An informal method of management."
    ],
    answer: 0
  },
  {
    question: "15. Which management approach emphasizes that the actions of managers depend on specific circumstances?",
    choices: [
      "Contingency Approach",
      "Systems Approach",
      "Scientific Management",
      "Behavioral Approach"
    ],
    answer: 0
  },
  {
    question: "16. What does the systems approach to management involve?",
    choices: [
      "Viewing the organization as a system of interdependent parts.",
      "Focusing solely on individual performance.",
      "Eliminating hierarchy.",
      "Prioritizing financial outcomes."
    ],
    answer: 0
  },
  {
    question: "17. What is one of the main principles of Peter Senge’s Learning Organization?",
    choices: [
      "Continuous learning and adaptation to changes.",
      "Strict adherence to policies.",
      "Emphasizing past successes.",
      "Avoiding collaboration."
    ],
    answer: 0
  },
  {
    question: "18. What is the focus of the Quality Management Approach?",
    choices: [
      "Meeting customer requirements and enhancing satisfaction.",
      "Reducing costs at all levels.",
      "Increasing production speed.",
      "Focusing on employee satisfaction."
    ],
    answer: 0
  },
  
  // Chapter 3 - Planning
  {
    question: "19. What is planning?",
    choices: [
      "The systematic development of action programs aimed at achieving objectives.",
      "An informal way to set goals.",
      "A method to increase employee engagement.",
      "A technique for reducing costs."
    ],
    answer: 0
  },
  {
    question: "20. What are the benefits of planning?",
    choices: [
      "Provides direction, reduces uncertainty, and minimizes waste.",
      "Encourages complacency.",
      "Creates confusion among employees.",
      "Increases costs."
    ],
    answer: 0
  },
  {
    question: "21. What is a Gantt Chart?",
    choices: [
      "A scheduling tool that shows actual and planned output over time.",
      "A method to analyze customer needs.",
      "A type of financial report.",
      "A tool for team-building activities."
    ],
    answer: 0
  },
  {
    question: "22. What does environmental scanning involve?",
    choices: [
      "Gathering and screening information to anticipate changes.",
      "Creating marketing strategies.",
      "Analyzing competitor pricing.",
      "Scheduling employee shifts."
    ],
    answer: 0
  },
  {
    question: "23. What is qualitative forecasting?",
    choices: [
      "Uses judgment and opinions of knowledgeable individuals to predict outcomes.",
      "Analyzes past sales data to predict future trends.",
      "Calculates market share using mathematical models.",
      "Focuses solely on financial projections."
    ],
    answer: 0
  },
  {
    question: "24. What does the Delphi Method involve?",
    choices: [
      "Circulating questionnaires among experts to achieve a consensus forecast.",
      "Using surveys to gather employee feedback.",
      "Conducting interviews with customers.",
      "Analyzing historical sales data."
    ],
    answer: 0
  },
  {
    question: "25. What is time series analysis?",
    choices: [
      "Fits a trend line to past data to predict future outcomes.",
      "Uses market research to guide decisions.",
      "Calculates costs based on current expenses.",
      "Focuses on employee performance metrics."
    ],
    answer: 0
  },
  {
    question: "26. What is budgeting?",
    choices: [
      "Making a numerical plan for allocating resources to specific activities.",
      "Creating a report on employee performance.",
      "Estimating future sales figures.",
      "Analyzing competitor strategies."
    ],
    answer: 0
  },
  {
    question: "27. What is the critical path in PERT-CPM?",
    choices: [
      "The longest sequence of activities that determines the minimum project duration.",
      "The fastest route to complete a project.",
      "The least expensive path through the project.",
      "The shortest sequence of activities."
    ],
    answer: 0
  },
  {
    question: "28. What is one criticism of formal planning?",
    choices: [
      "Planning may create rigidity in a dynamic environment.",
      "Planning always leads to success.",
      "Planning eliminates the need for decisions.",
      "Planning focuses solely on financial outcomes."
    ],
    answer: 0
  }
];

let currentCardIndex = 0;
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const answerElement = document.getElementById('answer');

function loadCard() {
  const currentCard = quizData[currentCardIndex];
  questionElement.textContent = currentCard.question;

  // Clear previous choices
  choicesElement.innerHTML = '';
  answerElement.style.display = 'none';

  // Load choices
  currentCard.choices.forEach((choice, index) => {
    const choiceElement = document.createElement('div');
    choiceElement.classList.add('choice');
    choiceElement.textContent = choice;
    choiceElement.setAttribute('data-index', index);
    
    // Add click event for each choice
    choiceElement.addEventListener('click', () => {
      const selectedAnswer = index;
      if (selectedAnswer === currentCard.answer) {
        answerElement.textContent = "Correct!";
      } else {
        answerElement.textContent = "Wrong! The correct answer is: " + currentCard.choices[currentCard.answer];
      }
      answerElement.style.display = 'block';
    });
    
    choicesElement.appendChild(choiceElement);
  });
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentCardIndex = (currentCardIndex + 1) % quizData.length;
  loadCard();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentCardIndex = (currentCardIndex - 1 + quizData.length) % quizData.length;
  loadCard();
});

// Load the first card
loadCard();
