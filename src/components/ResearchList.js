import React from 'react';

function ResearchList() {
  const courses = ['Computer Science 101', 'Web Development 202', 'Data Structures 301'];

  return (
    <div className="courses-list">
      <h2>Courses Taught</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchList;