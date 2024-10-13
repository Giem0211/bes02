const quizData = [
  // Chapter 1 - Organizations and Management
  {
    question: "1. Which of the following is a characteristic of an organization?",
    choices: [
      "Random group of individuals",
      "Deliberate structure",
      "Unlimited resources",
      "Individual purpose"
    ],
    answer: 1 // Correct answer index
  },
  {
    question: "2. True or False: An organization’s distinct purpose is defined by the goods or services it hopes to produce or render.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "3. Define what an organization is.",
    fillInTheBlank: true,
    answer: "A collection of people working together to achieve a common purpose."
  },
  {
    question: "4. In a contemporary organization, work is defined in terms of:",
    choices: [
      "Tasks to be done",
      "Job positions",
      "Individual roles",
      "Permanent jobs"
    ],
    answer: 0
  },
  {
    question: "5. True or False: Contemporary organizations are skills-focused and tend to have dynamic structures, while traditional organizations are job-focused and stable.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },

  // Part 2: What is Management?
  {
    question: "6. Fill in the Blank: Management is the process of reaching organizational goals by working with and through people and other resources.",
    fillInTheBlank: true,
    answer: "Management"
  },
  {
    question: "7. Which of the following best describes managerial effectiveness?",
    choices: [
      "Minimizing resource use",
      "Achieving organizational goals",
      "Reducing costs",
      "Maximizing employee productivity"
    ],
    answer: 1
  },
  {
    question: "8. True or False: Efficiency in management refers to getting the most output from the least amount of inputs.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "9. How does managerial efficiency differ from managerial effectiveness?",
    fillInTheBlank: true,
    answer: "Managerial efficiency is about minimizing resource waste, while managerial effectiveness is about achieving organizational goals."
  },
  {
    question: "10. The main characteristics of management include:",
    choices: [
      "Process, resources, goal attainment",
      "Organization, motivation, coordination",
      "People, processes, control",
      "Leadership, efficiency, output"
    ],
    answer: 0
  },

  // Part 3: Types of Managers
  {
    question: "11. True or False: A manager’s primary responsibility is personal achievement.",
    choices: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "12. Who is responsible for coordinating and overseeing the work of others to achieve organizational goals?",
    choices: [
      "CEO",
      "Supervisor",
      "Manager",
      "Worker"
    ],
    answer: 2
  },
  {
    question: "13. Fill in the Blank: The three levels of managers in a traditional organization are top managers, middle managers, and __________.",
    fillInTheBlank: true,
    answer: "first-line managers"
  },
  {
    question: "14. True or False: Top managers deal primarily with operational issues, while first-line managers focus on long-term strategy.",
    choices: [
      "True",
      "False"
    ],
    answer: 1
  },

  // Part 4: What do Managers do?
  {
    question: "15. Which of the following is not one of the four management functions?",
    choices: [
      "Planning",
      "Organizing",
      "Motivating",
      "Controlling"
    ],
    answer: 2
  },
  {
    question: "16. True or False: Planning involves defining goals and developing strategies to achieve them.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "17. Fill in the Blank: Influencing is the management function that involves inspiring and leading people to achieve high performance.",
    fillInTheBlank: true,
    answer: "Influencing"
  },
  {
    question: "18. Which management role involves holding board meetings and transmitting information to outsiders?",
    choices: [
      "Monitor",
      "Spokesperson",
      "Leader",
      "Negotiator"
    ],
    answer: 1
  },
  {
    question: "19. True or False: The controlling function ensures that activities are accomplished as planned by monitoring performance and taking corrective actions.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },

  // Part 5: Management Skills
  {
    question: "20. Which of the following managerial skills is job-specific and typically more important for lower-level managers?",
    choices: [
      "Human skills",
      "Conceptual skills",
      "Technical skills",
      "Communication skills"
    ],
    answer: 2
  },
  {
    question: "21. True or False: Human skills involve the ability to work well with people, and they are important at all levels of management.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "22. Fill in the Blank: Conceptual skills involve the ability to think __________ and deal with abstract and complex situations.",
    fillInTheBlank: true,
    answer: "abstractly"
  },
  {
    question: "23. Managers with strong conceptual skills are better at:",
    choices: [
      "Resolving conflicts within teams",
      "Managing day-to-day operations",
      "Visualizing the organization as a whole",
      "Performing technical tasks efficiently"
    ],
    answer: 2
  },

  // Part 6: Current Trends and Issues
  {
    question: "24. True or False: Globalization and workforce diversity are two current trends that impact management.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "25. What does 'globalization' mean in the context of management?",
    choices: [
      "Increasing the size of an organization",
      "Working with people from different cultures and backgrounds",
      "Reducing costs by limiting the workforce",
      "Moving jobs to low-cost countries"
    ],
    answer: 1
  },
  {
    question: "26. Fill in the Blank: Ethics and __________ responsibility are becoming increasingly important concerns in modern organizations.",
    fillInTheBlank: true,
    answer: "social"
  },
  {
    question: "27. Which of the following is a significant challenge for managers in today's dynamic work environment?",
    choices: [
      "Dealing with changing technology and digitization",
      "Working in stable, inflexible environments",
      "Motivating workers with fixed work hours",
      "Managing a homogeneous workforce"
    ],
    answer: 0
  },
  {
    question: "28. Short Answer: Name two issues or challenges that managers face in today’s work environment.",
    fillInTheBlank: true,
    answer: "Globalization, changing technology, workforce diversity, or ethics and social responsibility."
  },

  // Part 7: Becoming a Manager
  {
    question: "29. True or False: Reading business news and taking leadership roles in student organizations can help in preparing to become a manager.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "30. Which of the following soft skills are most important for managers to develop?",
    choices: [
      "Work ethic, communication, and people skills",
      "Technical skills, efficiency, and goal-setting",
      "Personal ambition, leadership, and resource management",
      "Organizational structure, staffing, and strategy development"
    ],
    answer: 0
  },
  {
    question: "31. Fill in the Blank: Good managers know how to communicate, motivate, lead, and inspire __________.",
    fillInTheBlank: true,
    answer: "trust"
  },
  {
    question: "32. Short Answer: Provide two examples of how one can prepare for a management career.",
    fillInTheBlank: true,
    answer: "Reading business news, developing leadership skills, networking, improving communication and people skills."
  },

  // Quiz: Chapter 2 - Historical Background of Management
  {
    question: "33. Which of the following individuals contributed early ideas about leadership through his book 'The Prince'?",
    choices: [
      "Adam Smith",
      "Niccolò Machiavelli",
      "Frederick W. Taylor",
      "Max Weber"
    ],
    answer: 1
  },
  {
    question: "34. True or False: Sun Tzu’s 'The Art of War' compared the marketplace to a battlefield, influencing early management strategy.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "35. What was Adam Smith's contribution to early management thought?",
    fillInTheBlank: true,
    answer: "The concept of division of labor in his book 'The Wealth of Nations'."
  },

  // Part 2: The Classical Approach
  {
    question: "36. Which of the following is not a key figure in the development of Scientific Management?",
    choices: [
      "Frederick W. Taylor",
      "Frank Gilbreth",
      "Max Weber",
      "Lillian Gilbreth"
    ],
    answer: 2
  },
  {
    question: "37. True or False: Frederick W. Taylor’s Scientific Management focused on improving work efficiency by scientifically analyzing tasks to find the 'one best way' to perform a job.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "38. Fill in the Blank: Frank and Lillian Gilbreth introduced the concept of __________, which evaluates and analyzes workers' movements to eliminate unnecessary or redundant motions.",
    fillInTheBlank: true,
    answer: "motion study"
  },
  {
    question: "39. What was the main idea behind Max Weber's Bureaucratic Management?",
    choices: [
      "Eliminating inefficiencies in the workforce",
      "Applying scientific methods to job performance",
      "Establishing a rational and efficient form of organization based on rules and hierarchy",
      "Improving employee motivation through incentives"
    ],
    answer: 2
  },
  {
    question: "40. True or False: Max Weber’s ideal bureaucracy advocated for formal rules, division of labor, impersonality, and career advancement based on merit.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "41. What is one of the key principles in Henri Fayol's 14 Principles of Administrative Management?",
    fillInTheBlank: true,
    answer: "Division of work, Authority, Unity of command, Discipline, etc."
  },

  // Part 3: The Human Resource (Behavioral) Approach
  {
    question: "42. Which early advocate of the Human Resource approach believed in the importance of group ethics and that managers should harmonize group efforts?",
    choices: [
      "Mary Parker Follett",
      "Hugo Munsterberg",
      "Chester Barnard",
      "Robert Owen"
    ],
    answer: 0
  },
  {
    question: "43. True or False: The Hawthorne studies, performed at Western Electric Company, led to the discovery of the Hawthorne Effect, showing that paying special attention to workers increases their productivity.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "44. Fill in the Blank: Maslow's Hierarchy of Needs includes five levels, starting with __________ needs and ending with self-actualization.",
    fillInTheBlank: true,
    answer: "physiological"
  },
  {
    question: "45. Which of the following describes McGregor's Theory Y?",
    choices: [
      "Employees are inherently lazy and need constant supervision",
      "Employees do not dislike work and want to contribute meaningfully to the organization",
      "Managers should focus on strict control and oversight",
      "Workers avoid responsibility whenever possible"
    ],
    answer: 1
  },
  {
    question: "46. True or False: According to Chris Argyris's Theory of Personality and Organization, treating employees positively and allowing them more responsibility will lead to higher productivity.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "47. Short Answer: What did Hugo Munsterberg advocate for in the field of industrial psychology?",
    fillInTheBlank: true,
    answer: "Using psychological tests for employee selection, learning theories for employee training, and studying human behavior for motivation."
  },

  // Part 4: The Quantitative Approach
  {
    question: "48. The Quantitative (Management) Science approach is primarily focused on:",
    choices: [
      "Motivating employees through better management practices",
      "Using scientific methods and quantitative techniques to solve complex organizational problems",
      "Enhancing employee collaboration in teams",
      "Improving communication within organizations"
    ],
    answer: 1
  },
  {
    question: "49. True or False: The application of operations research (OR) in solving problems during World War II was a key event in the development of the Quantitative Approach to management.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },

  // Part 5: The Contingency and Systems Approaches
  {
    question: "50. What is the main principle of the Contingency Approach to management?",
    choices: [
      "Managers' actions depend on the specific circumstances and environment they face",
      "All organizations should be managed according to the same set of rules",
      "Employees perform best in a rigid, structured environment",
      "Success in management is based solely on employee satisfaction"
    ],
    answer: 0
  },
  {
    question: "51. True or False: The Systems Approach to management views organizations as a set of interdependent parts that need to function together to achieve overall success.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "52. Fill in the Blank: The Systems Approach was influenced by __________ theory, which emphasizes understanding how the different parts of an organization are interrelated.",
    fillInTheBlank: true,
    answer: "general systems"
  },

  // Part 6: Learning Organization and Quality Management Approaches
  {
    question: "53. What is the main concept behind Peter Senge’s Learning Organization?",
    choices: [
      "Top-down decision making",
      "Bureaucratic control",
      "Continuous learning and adaptation to changes to stay ahead of competitors",
      "Standardization of work processes"
    ],
    answer: 2
  },
  {
    question: "54. True or False: A learning organization encourages employees to challenge existing mental models and think differently about how work should be done.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "55. Short Answer: What are two characteristics of a learning organization?",
    fillInTheBlank: true,
    answer: "System thinking, shared vision, team learning, personal mastery, challenging mental models."
  },
  {
    question: "56. The Quality Management Approach focuses on:",
    choices: [
      "Maximizing profits at the expense of customer satisfaction",
      "Meeting customer requirements and enhancing customer satisfaction",
      "Reducing labor costs",
      "Increasing production speed"
    ],
    answer: 1
  },

  // Quiz: Chapter 3 - Planning
  {
    question: "57. Planning is the systematic development of action programs aimed at reaching business objectives by:",
    choices: [
      "Implementing top-down strategies",
      "Analyzing, evaluating, and selecting among the opportunities foreseen",
      "Focusing solely on short-term gains",
      "Relying on past performance to guide decisions"
    ],
    answer: 1
  },
  {
    question: "58. True or False: Planning should respond to changing conditions while addressing present needs efficiently.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "59. Fill in the Blank: The purpose of planning is to provide direction, reduce uncertainty, minimize waste, and establish goals or standards for controlling.",
    fillInTheBlank: true,
    answer: "Planning"
  },
  {
    question: "60. Which of the following is an indicator of poor planning?",
    choices: [
      "Delivery not met, machines idle, and material wasted",
      "Jobs turned out on time and good relationships with other departments",
      "Proper machines doing their designated jobs",
      "People using their highest skills"
    ],
    answer: 0
  },

  // Part 2: Benefits and Process of Planning
  {
    question: "61. Which of the following is not a benefit of planning?",
    choices: [
      "More focus and flexibility",
      "Encouraging complacency through successes",
      "Improved coordination and control",
      "Better time management"
    ],
    answer: 1
  },
  {
    question: "62. True or False: Action-oriented planning helps individuals and organizations avoid the trap of complacency and focus on results.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "63. Fill in the Blank: The planning process consists of defining objectives, determining current standing relative to objectives, analyzing future conditions, choosing the best action alternatives, implementing, and evaluating results.",
    fillInTheBlank: true,
    answer: "planning process"
  },
  {
    question: "64. What are goals in the context of planning?",
    choices: [
      "Detailed strategies for operational success",
      "Random targets set by top management",
      "Desired outcomes that guide management decisions",
      "Flexible plans that adapt based on circumstances"
    ],
    answer: 2
  },

  // Part 3: Types of Goals and Well-Designed Goals
  {
    question: "65. Which of the following is not a type of goal in planning?",
    choices: [
      "Financial goals",
      "Strategic goals",
      "Stated goals",
      "Routine goals"
    ],
    answer: 3
  },
  {
    question: "66. True or False: Well-designed goals should be written in terms of actions rather than outcomes.",
    choices: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "67. Fill in the Blank: Well-designed goals are measurable, challenging yet attainable, communicated, and have clear time frames.",
    fillInTheBlank: true,
    answer: "Well-designed goals"
  },
  {
    question: "68. Which of the following is not a characteristic of well-designed goals?",
    choices: [
      "Written down",
      "Communicated to necessary members",
      "Ambiguous in time frame",
      "Challenging but attainable"
    ],
    answer: 2
  },

  // Part 4: Types of Plans and Planning Approaches
  {
    question: "69. Which of the following is an example of a top-down approach to planning?",
    choices: [
      "Plans initiated by top management and passed down to lower levels",
      "Plans initiated by lower management and moved up the hierarchy",
      "Planning based on internal strengths only",
      "Planning focused on customer input"
    ],
    answer: 0
  },
  {
    question: "70. True or False: The outside-in approach focuses on internal strengths to determine how tasks could be done better.",
    choices: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "71. Fill in the Blank: Participatory planning involves engaging organizational members in the planning process to enhance involvement and ownership.",
    fillInTheBlank: true,
    answer: "Participatory planning"
  },

  // Part 5: Planning Tools and Techniques
  {
    question: "72. What does environmental scanning involve?",
    choices: [
      "Forecasting sales figures for the next quarter",
      "Gathering and screening information to anticipate and interpret changes in the environment",
      "Comparing internal employee performance metrics",
      "Scheduling team meetings"
    ],
    answer: 1
  },
  {
    question: "73. True or False: Benchmarking is the process of searching for best practices among competitors to achieve superior performance.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "74. Fill in the Blank: Forecasting predicts future environmental situations that might influence the operation of the organization. It can be either qualitative (based on opinions and judgments) or __________ (based on historical data and mathematical models).",
    fillInTheBlank: true,
    answer: "quantitative"
  },

  // Part 6: Forecasting Methods
  {
    question: "75. Which forecasting method uses the opinions of experts to predict outcomes?",
    choices: [
      "Time series analysis",
      "Jury of opinion",
      "Economic indicators",
      "Substitution effect"
    ],
    answer: 1
  },
  {
    question: "76. True or False: The Delphi Method involves anonymous questionnaires to gather expert opinions and reach a consensus on future outcomes.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "77. Fill in the Blank: Time series analysis fits a trend line to past data to predict future outcomes, while __________ models predict one variable based on other known variables.",
    fillInTheBlank: true,
    answer: "regression"
  },
  {
    question: "78. Which of the following is an example of a quantitative forecasting method?",
    choices: [
      "Delphi method",
      "Moving average",
      "Jury of opinion",
      "Sales force composition"
    ],
    answer: 1
  },

  // Part 7: Resource Allocation, Scheduling, and Breakeven Analysis
  {
    question: "79. Budgeting is the process of:",
    choices: [
      "Scheduling projects for completion",
      "Making a numerical plan for allocating resources to specific activities",
      "Forecasting sales for future quarters",
      "Calculating breakeven points"
    ],
    answer: 1
  },
  {
    question: "80. True or False: Fixed budgets assume a stable level of sales or production, while variable budgets account for changes in volume.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "81. Fill in the Blank: Gantt charts are a scheduling device that shows actual and planned output over time, while __________ diagrams depict the sequence of activities needed to complete a project and the associated time or cost.",
    fillInTheBlank: true,
    answer: "PERT-CPM"
  },
  {
    question: "82. The critical path in a PERT-CPM diagram is:",
    choices: [
      "The shortest path through the network",
      "The longest sequence of activities that determines the minimum project duration",
      "The sequence with the most delays",
      "The path with the least cost"
    ],
    answer: 1
  },

  // Part 8: Criticisms of Planning
  {
    question: "83. Which of the following is a valid criticism of formal planning?",
    choices: [
      "Planning may create rigidity in a dynamic environment",
      "Planning always encourages creativity and intuition",
      "Planning eliminates the need for decision-making",
      "Formal plans are always adaptive to change"
    ],
    answer: 0
  },
  {
    question: "84. True or False: Formal planning focuses on today’s competition but may overlook tomorrow’s survival.",
    choices: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "85. Fill in the Blank: Planning isn’t enough by itself; successful implementation and adaptability are crucial for sustained success.",
    fillInTheBlank: true,
    answer: "Planning"
  }
];

let currentCardIndex = 0;
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const answerElement = document.getElementById('answer');

function loadCard() {
  const currentCard = quizData[currentCardIndex];
  questionElement.textContent = currentCard.question;

  // Clear previous choices and answer
  choicesElement.innerHTML = '';
  answerElement.style.display = 'none';

  if (currentCard.fillInTheBlank) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('placeholder', 'Type your answer...');
    inputElement.classList.add('fill-in-the-blank');
    choicesElement.appendChild(inputElement);

    const checkAnswerBtn = document.createElement('button');
    checkAnswerBtn.textContent = "Check Answer";
    checkAnswerBtn.addEventListener('click', () => {
      const userAnswer = inputElement.value.trim().toLowerCase();
      if (userAnswer === currentCard.answer.toLowerCase()) {
        answerElement.textContent = "Correct!";
      } else {
        answerElement.textContent = `Wrong! The correct answer is: ${currentCard.answer}`;
      }
      answerElement.style.display = 'block';
    });
    choicesElement.appendChild(checkAnswerBtn);
  } else {
    // Load choices for multiple-choice and true/false questions
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
          answerElement.textContent = `Wrong! The correct answer is: ${currentCard.choices[currentCard.answer]}`;
        }
        answerElement.style.display = 'block';
      });
      
      choicesElement.appendChild(choiceElement);
    });
  }
}

// Jump to specific question
document.getElementById('jumpToBtn').addEventListener('click', () => {
  const inputValue = document.getElementById('jumpToInput').value;
  const inputNumber = parseInt(inputValue) - 1; // Adjust for zero-based index
  if (inputNumber >= 0 && inputNumber < quizData.length) {
    currentCardIndex = inputNumber;
    loadCard();
  } else {
    alert('Please enter a valid question number (1 to 85).');
  }
});

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
