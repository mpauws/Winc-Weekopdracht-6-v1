import React from "react";
import "../App.css";

function StudentButton({ student }) {
   return (
      <div>
         <button className="student-tile" key={student}>
            <p>{student}</p>
         </button>
      </div>
   );
}

export default StudentButton;
