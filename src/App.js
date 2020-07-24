import React from "react";
// import * as V from "victory";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import StudentOverview from "./components/StudentOverview";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import StudentPage from "./components/StudentPage";

import studentEvaluationData from "./data/student-evaluation-data";

import "./App.css";

function App() {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of students
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   const getStudentList = [...new Set(studentEvaluationData.map((x) => x.student))].sort((student1, student2) => {
      if (student1 > student2) {
         return 1;
      } else if (student1 === student2) {
         return 0;
      } else if (student1 < student2) {
         return -1;
      }
      return 0;
   });

   // console.log("getStudentList: ", getStudentList);

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of assignments
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   const getAssignments = [...new Set(studentEvaluationData.map((x) => x.assignment))].sort(
      (assignment1, assignment2) => {
         if (assignment1 > assignment2) {
            return 1;
         } else if (assignment1 === assignment2) {
            return 0;
         } else if (assignment1 < assignment2) {
            return -1;
         }
         return 0;
      }
   );

   //   console.log("getAssignments: ", getAssignments);
   /* Output: ["W1D1-1", "W1D2-1", "W1D2-2", "W1D2-3", "W1D2-4", "W1D2-5", "W1D3-1", "W1D3-2", "W1D3-4", "W1D3-5", "W1D3-6", "W1D4-1", "W1D4-2", "W1D5-1", "W2D1-1", "W2D1-2", "W2D2-1", "W2D2-2", "W2D2-3", "W2D3-1", "W2D3-2", "W2D3-3", "W2D4-1", "W2D4-2", "W2D4-3", "W2D5-1", "W3D1-1", "W3D1-2", "W3D1-3", "W3D1-4", "W3D2-1", "W3D2-2", "W3D2-3", "W3D3-1", "W3D3-2", "W3D3-3", "W3D3-4", "W3D4-1", "W3D4-2", "W3D5-1", "W4D2-1", "W4D2-2", "W4D2-3", "W4D2-4", "W4D2-5", "W4D3-1", "W4D3-2", "W4D3-3", "W4D3-4", "W4D3-5", "W4D3-6", "W5D4-1", "W5D5-1", "W6D1-1", "W6D2-1"] */

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing enjoyment rating for student x
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const getEnjoymentRatings = (student, assignment) => {
      return studentEvaluationData
         .filter((item) => {
            return item.student === student;
         })
         .filter((student) => {
            return student.assignment === assignment;
         })
         .map((assignment) => assignment.enjoymentRating);
   };

   console.log(getEnjoymentRatings("Piet Paulusma", "W1D2-3"));

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing difficulty rating for student x
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const getDifficultyRatings = (student, assignment) => {
      return studentEvaluationData
         .filter((item) => {
            return item.student === student;
         })
         .filter((student) => {
            return student.assignment === assignment;
         })
         .map((assignment) => assignment.difficultyRating);
   };

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Return
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   return (
      <Router>
         <div className="app-container">
            <NavBar />
            <Switch>
               <Route path="/" exact>
                  <Dashboard
                     getStudentList={getStudentList}
                     getAssignments={getAssignments}
                     studentEvaluationData={studentEvaluationData}
                  />
               </Route>
               <Route path="/studentoverview">
                  <StudentOverview getStudentList={getStudentList} getAssignments={getAssignments} />
               </Route>
               {getStudentList
                  ? getStudentList.map((student) => (
                       <Route exact path={`/${student.replace(/\s/g, "-")}`} key={student}>
                          <StudentPage
                             getStudentList={getStudentList}
                             getAssignments={getAssignments}
                             student={student}
                             getEnjoymentRatings={getEnjoymentRatings}
                             getDifficultyRatings={getDifficultyRatings}
                             studentEvaluationData={studentEvaluationData}
                          />
                       </Route>
                    ))
                  : null}
            </Switch>
            <Footer />
         </div>
      </Router>
   );
}

export default App;

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Developer Functions

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Get enjoymentRating of Piet Paulusma of W1D2-1
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/* const getEnjoyRatingPietW1D2_1 = studentEvaluationData
      .filter((item) => {
         return item.student === "Piet Paulusma";
      })
      .filter((student) => {
         return student.assignment === "W1D2-1";
      })
      .map((assignment) => assignment.enjoymentRating);

   console.log("Enjoyment Rating van Piet Paulusma voor W1D2-1: ", getEnjoyRatingPietW1D2_1);
*/
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Get average difficultyRating of W5D4-1
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/* 
   const getTotalDifficultyRatingW5D4_1 = studentEvaluationData
      .filter((item) => {
         return item.assignment === "W5D4-1";
      })
      .map((item) => item.difficultyRating)
      .reduce((currentTotal, grading) => {
         return grading + currentTotal;
      }, 0);
   console.log("getTotalDifficultyRatingW5D4_1: ", getTotalDifficultyRatingW5D4_1);

   const getAverageDifficultyRatingW5D4_1 = getTotalDifficultyRatingW5D4_1 / getStudentList.length;
   console.log("getAverageDifficultyRatingW5D4_1: ", getAverageDifficultyRatingW5D4_1); */

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Sort studentlist
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/*    const sortedStudentList = getStudentList.sort((student1, student2) => {
      if (student1 > student2) {
         return 1;
      } else if (student1 === student2) {
         return 0;
      } else if (student1 < student2) {
         return -1;
      }
      return 0;
   }); */

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Sort assignments
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/* const sortedAssignmentList = getAssignments.sort((assignment1, assignment2) => {
   if (assignment1 > assignment2) {
      return 1;
   } else if (assignment1 === assignment2) {
      return 0;
   } else if (assignment1 < assignment2) {
      return -1;
   }
   return 0;
});
 */
