// Initialize the performance charts
document.addEventListener('DOMContentLoaded', function() {
  // Math Chart
  const mathCtx = document.getElementById('mathChart').getContext('2d');
  const mathData = {
    labels: ['Test #1', 'Test #2', 'Test #3', 'Test #4', 'Test #5'],
    datasets: [{
      label: 'Math Score',
      data: [620, 650, 680, 650, 680],
      borderColor: '#4FC1E9',
      backgroundColor: 'rgba(79, 193, 233, 0.1)',
      fill: true
    }]
  };

  const mathConfig = {
    type: 'line',
    data: mathData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          bodyFont: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 600,
          max: 800,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            font: {
              family: "'Inter', sans-serif"
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              family: "'Inter', sans-serif"
            }
          }
        }
      }
    }
  };

  // Reading/Writing Chart
  const readingCtx = document.getElementById('readingChart').getContext('2d');
  const readingData = {
    labels: ['Test #1', 'Test #2', 'Test #3', 'Test #4', 'Test #5'],
    datasets: [{
      label: 'Reading/Writing Score',
      data: [680, 690, 700, 690, 710],
      borderColor: '#48CFAD',
      backgroundColor: 'rgba(72, 207, 173, 0.1)',
      fill: true
    }]
  };

  const readingConfig = {
    type: 'line',
    data: readingData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          bodyFont: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 600,
          max: 800,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            font: {
              family: "'Inter', sans-serif"
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              family: "'Inter', sans-serif"
            }
          }
        }
      }
    }
  };

  new Chart(mathCtx, mathConfig);
  new Chart(readingCtx, readingConfig);
});

// Function to show subject selection view
function showSubjectSelection() {
  document.getElementById('subjectSelectionView').style.display = 'block';
  document.getElementById('subjectDetailsView').style.display = 'none';
}

// Function to show subject details view
function showSubjectDetails(subjectId) {
  document.getElementById('subjectSelectionView').style.display = 'none';
  document.getElementById('subjectDetailsView').style.display = 'block';
  
  // Load appropriate content based on subject ID
  const detailsContainer = document.getElementById('subjectDetailsContent');
  
  if (subjectId === 'sat-math') {
    detailsContainer.innerHTML = getSATMathContent();
  } else if (subjectId === 'sat-reading') {
    detailsContainer.innerHTML = getSATReadingContent();
  } else if (subjectId === 'geometry') {
    detailsContainer.innerHTML = getGeometryContent();
  }
}

// Function to get SAT Math content
function getSATMathContent() {
  return `
    <div class="student-info-block">
      <h2>SAT Math</h2>
      <p>Most Recent Score: <strong>680/800</strong></p>
      
      <div class="section-header">
        <h2>Content Domain Breakdown</h2>
      </div>
      
      <div class="horizontal-scroll-container">
        <div class="card">
          <div class="diagnostic-title">Algebra</div>
          <div class="performance-bar hard-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label hard-level-text">Hard Level</div>
          <div class="diagnostic-subscore">Strong performance</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Advanced Mathematics</div>
          <div class="performance-bar medium-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label medium-level-text">Medium Level</div>
          <div class="diagnostic-subscore">Good progress</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Problem Solving</div>
          <div class="performance-bar easy-level">
            <div class="segment filled"></div>
            <div class="segment"></div>
            <div class="segment"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label easy-level-text">Easy Level</div>
          <div class="diagnostic-subscore">Needs improvement</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Data Analysis</div>
          <div class="performance-bar advanced-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
          </div>
          <div class="performance-label advanced-level-text">Advanced Level</div>
          <div class="diagnostic-subscore">Excellent</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
      </div>
      
      <div class="section-header">
        <h2>Performance by Topic</h2>
      </div>
      <div class="performance-chart">
        <div class="domain-performance-container">
          <!-- Algebra Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Algebra</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Linear Equations in Two Variables</div>
              <div class="performance-bar hard-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label hard-level-text">Hard Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Linear Functions</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Linear Inequalities in One or Two Variables</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
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
            
            <div class="topic-performance-item">
              <div class="topic-name">Equivalent Expressions</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Nonlinear Equations in One Variable and Systems of Equations</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
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
            
            <div class="topic-performance-item">
              <div class="topic-name">Evaluating Statistical Claims</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Inference from Sample Statistics and Margin of Error</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">One-Variable Data: Distributions and Measures</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Percentages</div>
              <div class="performance-bar hard-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label hard-level-text">Hard Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Probability and Conditional Probability</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Ratios, Rates, Proportional Relationships</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Two-Variable Data: Models and Scatterplots</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
          </div>
          
          <!-- Geometry and Trigonometry Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Geometry and Trigonometry</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Area and Volume</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Circles</div>
              <div class="performance-bar hard-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label hard-level-text">Hard Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Lines, Angles, and Triangles</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
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
    </div>
  `;
}

// Function to get SAT Reading content
function getSATReadingContent() {
  return `
    <div class="student-info-block">
      <h2>SAT Reading/Writing</h2>
      <p>Most Recent Score: <strong>710/800</strong></p>
      
      <div class="section-header">
        <h2>Domain Breakdown</h2>
      </div>
      
      <div class="horizontal-scroll-container">
        <div class="card">
          <div class="diagnostic-title">Reading Comprehension</div>
          <div class="performance-bar hard-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label hard-level-text">Hard Level</div>
          <div class="diagnostic-subscore">Strong performance</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Vocabulary in Context</div>
          <div class="performance-bar advanced-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
          </div>
          <div class="performance-label advanced-level-text">Advanced Level</div>
          <div class="diagnostic-subscore">Excellent</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Grammar & Usage</div>
          <div class="performance-bar medium-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label medium-level-text">Medium Level</div>
          <div class="diagnostic-subscore">Good progress</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Organization</div>
          <div class="performance-bar medium-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label medium-level-text">Medium Level</div>
          <div class="diagnostic-subscore">Good progress</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
      </div>
      
      <div class="section-header">
        <h2>Performance Trend</h2>
      </div>
      <div class="performance-chart">
        <div class="domain-performance-container">
          <!-- Reading Comprehension Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Reading Comprehension</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Main Idea and Details</div>
              <div class="performance-bar hard-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label hard-level-text">Hard Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Analyzing Text Structure</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Analyzing Author's Purpose</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Analyzing Text for Details</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
          
          <!-- Vocabulary in Context Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Vocabulary in Context</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Understanding Word Meanings</div>
              <div class="performance-bar hard-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label hard-level-text">Hard Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Using Context Clues</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Understanding Word Relationships</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Using Word Parts</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
          
          <!-- Grammar & Usage Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Grammar & Usage</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Correct Use of Pronouns</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Correct Use of Verbs</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Correct Use of Adjectives and Adverbs</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Correct Use of Conjunctions</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
          
          <!-- Organization Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Organization</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Maintaining Focus</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Managing Time</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Planning and Prioritizing</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to get Geometry content
function getGeometryContent() {
  return `
    <div class="student-info-block">
      <h2>Geometry</h2>
      <p>Most Recent Score: <strong>92%</strong></p>
      
      <div class="section-header">
        <h2>Topic Breakdown</h2>
      </div>
      
      <div class="horizontal-scroll-container">
        <div class="card">
          <div class="diagnostic-title">Triangles</div>
          <div class="performance-bar advanced-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
          </div>
          <div class="performance-label advanced-level-text">Advanced Level</div>
          <div class="diagnostic-subscore">Excellent</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Circles</div>
          <div class="performance-bar hard-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label hard-level-text">Hard Level</div>
          <div class="diagnostic-subscore">Strong performance</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Area & Volume</div>
          <div class="performance-bar advanced-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment filled"></div>
          </div>
          <div class="performance-label advanced-level-text">Advanced Level</div>
          <div class="diagnostic-subscore">Excellent</div>
          <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
        
        <div class="card">
          <div class="diagnostic-title">Coordinate Geometry</div>
          <div class="performance-bar medium-level">
            <div class="segment filled"></div>
            <div class="segment filled"></div>
            <div class="segment"></div>
            <div class="segment"></div>
          </div>
          <div class="performance-label medium-level-text">Medium Level</div>
          <div class="diagnostic-subscore">Good progress</div>
            <a href="practice.html" class="view-details-btn">Practice More</a>
        </div>
      </div>
      
      <div class="section-header">
        <h2>Performance Trend</h2>
      </div>
      <div class="performance-chart">
        <div class="domain-performance-container">
          <!-- Triangles Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Triangles</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Equilateral Triangles</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Isosceles Triangles</div>
              <div class="performance-bar advanced-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label advanced-level-text">Advanced Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Scalene Triangles</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Right Triangles</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
          </div>
          
          <!-- Circles Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Circles</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Tangents and Secants</div>
              <div class="performance-bar hard-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label hard-level-text">Hard Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Chords and Arcs</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Angles in Circles</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Areas of Circles</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
          
          <!-- Area and Volume Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Area and Volume</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Areas of Rectangles and Parallelograms</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Areas of Triangles and Trapezoids</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Volumes of Rectangular Prisms and Cylinders</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
          
          <!-- Coordinate Geometry Domain -->
          <div class="domain-performance-card">
            <h3 class="domain-name">Coordinate Geometry</h3>
            
            <div class="topic-performance-item">
              <div class="topic-name">Distance Formula</div>
              <div class="performance-bar medium-level">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label medium-level-text">Medium Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Midpoint Formula</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
            
            <div class="topic-performance-item">
              <div class="topic-name">Slope Formula</div>
              <div class="performance-bar easy-level">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="performance-label easy-level-text">Easy Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
} 