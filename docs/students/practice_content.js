// HTML content for practice pages

// Function to show subject practice view that contains the HTML content
function showSubjectPractice(subjectId) {
  document.getElementById('subjectSelectionView').style.display = 'none';
  document.getElementById('subjectPracticeView').style.display = 'block';
  
  // Load appropriate content based on subject ID
  const practiceContainer = document.getElementById('subjectPracticeContent');
  
  if (subjectId === 'math') {
    practiceContainer.innerHTML = getMathPracticeHTML();
  } else if (subjectId === 'reading') {
    practiceContainer.innerHTML = getReadingPracticeHTML();
  } else if (subjectId === 'full-test') {
    practiceContainer.innerHTML = getFullTestPracticeHTML();
  }
}

// Content for Math Practice
function getMathPracticeHTML() {
  return `
    <div class="page-subheader">
      <h2>Math Practice Options</h2>
      <p>Choose how you want to practice Math</p>
    </div>
    
    <div class="practice-options">
      <div class="practice-option-card" onclick="startPractice('quick-math')">
        <h3>Quick Practice</h3>
        <p>Practice with a random set of questions across all math topics.</p>
        <a href="#" class="view-details-btn">Start Practice</a>
      </div>
      
      <div class="practice-option-card" onclick="startPractice('custom-math')">
        <h3>Custom Practice</h3>
        <p>Create a custom practice set by selecting specific topics and difficulty levels.</p>
        <a href="#" class="view-details-btn">Create Practice Set</a>
      </div>
    </div>
    
    <div class="section-header">
      <h2>Practice by Topic</h2>
    </div>
    
    <div class="performance-chart">
      <div class="domain-performance-container">
        <!-- Algebra Domain -->
        <div class="domain-performance-card">
          <h3 class="domain-name">Algebra</h3>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Linear%20Equations&level=hard'">
            <div class="topic-name">Linear Equations in Two Variables</div>
            <div class="performance-bar hard-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label hard-level-text">Hard Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Linear%20Functions&level=advanced'">
            <div class="topic-name">Linear Functions</div>
            <div class="performance-bar advanced-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
            </div>
            <div class="performance-label advanced-level-text">Advanced Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Linear%20Inequalities&level=medium'">
            <div class="topic-name">Linear Inequalities in One or Two Variables</div>
            <div class="performance-bar medium-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label medium-level-text">Medium Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Systems%20of%20Equations&level=hard'">
            <div class="topic-name">Systems of Two Linear Equations in Two Variables</div>
            <div class="performance-bar hard-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label hard-level-text">Hard Level</div>
          </div>
        </div>
        
        <!-- Advanced Math Domain -->
        <div class="domain-performance-card">
          <h3 class="domain-name">Advanced Math</h3>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Equivalent%20Expressions&level=medium'">
            <div class="topic-name">Equivalent Expressions</div>
            <div class="performance-bar medium-level">
              <div class="segment"></div>
              <div class="segment"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label medium-level-text2">Take the Diagnostic Quiz</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Nonlinear%20Equations&level=easy'">
            <div class="topic-name">Nonlinear Equations in One Variable and Systems of Equations</div>
            <div class="performance-bar easy-level">
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label easy-level-text">Easy Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Nonlinear%20Functions&level=medium'">
            <div class="topic-name">Nonlinear Functions</div>
            <div class="performance-bar medium-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label medium-level-text">Medium Level</div>
          </div>
        </div>
        
        <!-- Problem Solving and Data Analysis Domain -->
        <div class="domain-performance-card">
          <h3 class="domain-name">Problem Solving and Data Analysis</h3>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Statistical%20Claims&level=easy'">
            <div class="topic-name">Evaluating Statistical Claims</div>
            <div class="performance-bar easy-level">
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label easy-level-text">Easy Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Sample%20Statistics&level=easy'">
            <div class="topic-name">Inference from Sample Statistics and Margin of Error</div>
            <div class="performance-bar easy-level">
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label easy-level-text">Easy Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=One-Variable%20Data&level=medium'">
            <div class="topic-name">One-Variable Data: Distributions and Measures</div>
            <div class="performance-bar medium-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label medium-level-text">Medium Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Percentages&level=hard'">
            <div class="topic-name">Percentages</div>
            <div class="performance-bar hard-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label hard-level-text">Hard Level</div>
          </div>
        </div>
        
        <!-- Geometry and Trigonometry Domain -->
        <div class="domain-performance-card">
          <h3 class="domain-name">Geometry and Trigonometry</h3>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Area%20and%20Volume&level=advanced'">
            <div class="topic-name">Area and Volume</div>
            <div class="performance-bar advanced-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
            </div>
            <div class="performance-label advanced-level-text">Advanced Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Circles&level=hard'">
            <div class="topic-name">Circles</div>
            <div class="performance-bar hard-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label hard-level-text">Hard Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Lines%20and%20Angles&level=advanced'">
            <div class="topic-name">Lines, Angles, and Triangles</div>
            <div class="performance-bar advanced-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment filled"></div>
            </div>
            <div class="performance-label advanced-level-text">Advanced Level</div>
          </div>
          
          <div class="topic-performance-item" onclick="window.location.href='math_practice_topics.html?topic=Trigonometry&level=medium'">
            <div class="topic-name">Right Triangles and Trigonometry</div>
            <div class="performance-bar medium-level">
              <div class="segment filled"></div>
              <div class="segment filled"></div>
              <div class="segment"></div>
              <div class="segment"></div>
            </div>
            <div class="performance-label medium-level-text">Medium Level</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Content for Reading Practice
function getReadingPracticeHTML() {
  return `
    <div class="page-subheader">
      <h2>Reading & Writing Practice Options</h2>
      <p>Choose how you want to practice Reading & Writing</p>
    </div>
    
    <div class="practice-options">
      <div class="practice-option-card" onclick="startPractice('quick-reading')">
        <h3>Quick Practice</h3>
        <p>Practice with a random set of reading and writing questions.</p>
        <a href="#" class="view-details-btn">Start Practice</a>
      </div>
      
      <div class="practice-option-card" onclick="startPractice('custom-reading')">
        <h3>Custom Practice</h3>
        <p>Create a custom practice set by selecting specific topics and difficulty levels.</p>
        <a href="#" class="view-details-btn">Create Practice Set</a>
      </div>
    </div>
    
    <div class="section-header">
      <h2>Practice by Topic</h2>
    </div>
    
    <div class="horizontal-scroll-container">
      <div class="card">
        <div class="diagnostic-title">Reading Comprehension</div>
        <div class="diagnostic-subscore">Main ideas, supporting details</div>
        <div class="diagnostic-date">Your Success Rate: 88%</div>
        <a href="#" class="view-details-btn">Practice Now</a>
      </div>
      
      <div class="card">
        <div class="diagnostic-title">Vocabulary in Context</div>
        <div class="diagnostic-subscore">Word meanings, context clues</div>
        <div class="diagnostic-date">Your Success Rate: 92%</div>
        <a href="#" class="view-details-btn">Practice Now</a>
      </div>
      
      <div class="card">
        <div class="diagnostic-title">Grammar & Usage</div>
        <div class="diagnostic-subscore">Sentence structure, punctuation</div>
        <div class="diagnostic-date">Your Success Rate: 75%</div>
        <a href="#" class="view-details-btn">Practice Now</a>
      </div>
      
      <div class="card">
        <div class="diagnostic-title">Rhetorical Analysis</div>
        <div class="diagnostic-subscore">Author's purpose, argument structure</div>
        <div class="diagnostic-date">Your Success Rate: 80%</div>
        <a href="#" class="view-details-btn">Practice Now</a>
      </div>
      
      <div class="card">
        <div class="diagnostic-title">Data Interpretation</div>
        <div class="diagnostic-subscore">Graphs, tables, charts analysis</div>
        <div class="diagnostic-date">Your Success Rate: 83%</div>
        <a href="#" class="view-details-btn">Practice Now</a>
      </div>
    </div>
  `;
}

// Content for Full Test Practice
function getFullTestPracticeHTML() {
  return `
    <div class="page-subheader">
      <h2>Full SAT Practice Test</h2>
      <p>Take a complete timed SAT practice test</p>
    </div>
    
    <div class="student-info-block">
      <h3>Test Information</h3>
      <p>The full SAT practice test includes all sections:</p>
      <ul style="margin: 1rem 0; padding-left: 1.5rem;">
        <li>Reading Test (65 minutes)</li>
        <li>Writing and Language Test (35 minutes)</li>
        <li>Math Test - No Calculator (25 minutes)</li>
        <li>Math Test - Calculator (55 minutes)</li>
      </ul>
      <p>Total time: 3 hours</p>
      
      <div style="text-align: center; margin-top: 2rem;">
        <a href="#" class="view-details-btn" style="padding: 0.75rem 2rem; font-size: 1rem;">Start Full Practice Test</a>
      </div>
    </div>
    
    <div class="section-header">
      <h2>Recent Full Tests</h2>
    </div>
    
    <div class="card-container">
      <div class="subject-card">
        <h3>SAT Practice Test #5</h3>
        <p>Completed: April 4, 2023</p>
        <p>Total Score: 1390/1600</p>
        <p>Math: 680/800 | Reading/Writing: 710/800</p>
        <a href="#" class="view-details-btn">Review Answers</a>
      </div>
      
      <div class="subject-card">
        <h3>SAT Practice Test #4</h3>
        <p>Completed: March 21, 2023</p>
        <p>Total Score: 1350/1600</p>
        <p>Math: 650/800 | Reading/Writing: 700/800</p>
        <a href="#" class="view-details-btn">Review Answers</a>
      </div>
    </div>
  `;
} 