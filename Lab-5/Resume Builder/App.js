import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import './App.css'; // Import your separate CSS file

function App() {
  return (
    <div className="resume-builder container mt-5">
      <h1 className="text-center mb-4">Resume Builder</h1>

      <form className="resume-form">
        {/* Professional Summary */}
        <div className="form-group">
          <label htmlFor="professional-summary">Professional Summary</label>
          <textarea className="form-control" id="professional-summary" rows="3" placeholder="Enter your professional summary"></textarea>
        </div>

        {/* Education Qualifications */}
        <div className="form-group">
          <label htmlFor="education-qualifications">Education Qualifications</label>
          <input type="text" className="form-control" id="education-qualifications" placeholder="Enter your qualifications" />
        </div>

        {/* Academic and Non-Academic Skills */}
        <div className="form-group">
          <label htmlFor="skills">Academic and Non-Academic Skills</label>
          <textarea className="form-control" id="skills" rows="3" placeholder="Enter your skills"></textarea>
        </div>

        {/* Career Objective */}
        <div className="form-group">
          <label htmlFor="career-objective">Career Objective</label>
          <textarea className="form-control" id="career-objective" rows="3" placeholder="Enter your career objective"></textarea>
        </div>

        {/* Experience and Internships */}
        <div className="form-group">
          <label htmlFor="experience">Experience and Internships</label>
          <textarea className="form-control" id="experience" rows="3" placeholder="Enter your experience and internships"></textarea>
        </div>

        {/* Skills and Achievements */}
        <div className="form-group">
          <label htmlFor="achievements">Skills and Achievements</label>
          <textarea className="form-control" id="achievements" rows="3" placeholder="Enter your skills and achievements"></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-4">Generate Resume</button>
      </form>
    </div>
  );
}

export default App;