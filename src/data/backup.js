/* 
const studentEvaluationData = [
   {
      student: "Peter Timofeeff",
      assignment: "W4D2-5",
      enjoymentRating: 3,
      difficultyRating: 4,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D1-1",
      enjoymentRating: 3,
      difficultyRating: 3,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D2-1",
      enjoymentRating: 1,
      difficultyRating: 3,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D2-2",
      enjoymentRating: 1,
      difficultyRating: 4,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D2-3",
      enjoymentRating: 2,
      difficultyRating: 3,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D2-4",
      enjoymentRating: 3,
      difficultyRating: 4,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D2-5",
      enjoymentRating: 3,
      difficultyRating: 4,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D3-1",
      enjoymentRating: 3,
      difficultyRating: 4,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D3-2",
      enjoymentRating: 3,
      difficultyRating: 4,
        },
   {
      student: "Peter Timofeeff",
      assignment: "W1D3-4",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W1D3-5",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W1D3-6",
      enjoymentRating: 5,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W1D4-1",
      enjoymentRating: 4,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W1D4-2",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W1D5-1",
      enjoymentRating: 3,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D1-1",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D1-2",
      enjoymentRating: 2,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D2-1",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D2-2",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D2-3",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D3-1",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D3-2",
      enjoymentRating: 1,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D3-3",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D4-2",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D4-3",
      enjoymentRating: 1,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W2D5-1",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D1-1",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D1-2",
      enjoymentRating: 2,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D1-3",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D1-4",
      enjoymentRating: 3,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D2-1",
      enjoymentRating: 2,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D2-2",
      enjoymentRating: 3,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D2-3",
      enjoymentRating: 3,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D3-1",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D3-2",
      enjoymentRating: 4,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D3-3",
      enjoymentRating: 3,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D3-4",
      enjoymentRating: 4,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D4-1",
      enjoymentRating: 5,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D4-2",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W3D5-1",
      enjoymentRating: 2,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D2-1",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D2-2",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D2-3",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D2-4",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D3-1",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D3-2",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D3-3",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D3-4",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D3-5",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W4D3-6",
      enjoymentRating: 1,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W5D4-1",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W5D5-1",
      enjoymentRating: 4,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W6D1-1",
      enjoymentRating: 5,
      difficultyRating: 5,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W6D2-1",
      enjoymentRating: 4,
      difficultyRating: 3,
         },
   {
      student: "Peter Timofeeff",
      assignment: "W6D2-1",
      enjoymentRating: 5,
      difficultyRating: 5,
         },
   {
      student: "Piet Paulusma",
      assignment: "W4D2-5",
      enjoymentRating: 1,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D1-1",
      enjoymentRating: 4,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D2-1",
      enjoymentRating: 3,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D2-2",
      enjoymentRating: 3,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D2-3",
      enjoymentRating: 4,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D2-4",
      enjoymentRating: 2,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D2-5",
      enjoymentRating: 4,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D3-1",
      enjoymentRating: 3,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D3-2",
      enjoymentRating: 2,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D3-4",
      enjoymentRating: 1,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D3-5",
      enjoymentRating: 4,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D3-6",
      enjoymentRating: 2,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D4-1",
      enjoymentRating: 3,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D4-2",
      enjoymentRating: 4,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W1D5-1",
      enjoymentRating: 4,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D1-1",
      enjoymentRating: 2,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D1-2",
      enjoymentRating: 4,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D2-1",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D2-2",
      enjoymentRating: 3,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D2-3",
      enjoymentRating: 1,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D3-1",
      enjoymentRating: 4,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D3-2",
      enjoymentRating: 4,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D3-3",
      enjoymentRating: 1,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D4-1",
      enjoymentRating: 1,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D4-2",
      enjoymentRating: 2,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D4-3",
      enjoymentRating: 2,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W2D5-1",
      enjoymentRating: 2,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D1-1",
      enjoymentRating: 4,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D1-2",
      enjoymentRating: 3,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D1-3",
      enjoymentRating: 1,
      difficultyRating: 4,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D1-4",
      enjoymentRating: 1,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D2-1",
      enjoymentRating: 1,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D2-2",
      enjoymentRating: 2,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D2-3",
      enjoymentRating: 2,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D3-1",
      enjoymentRating: 2,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D3-2",
      enjoymentRating: 4,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D3-3",
      enjoymentRating: 3,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D3-4",
      enjoymentRating: 1,
      difficultyRating: 3,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D4-1",
      enjoymentRating: 1,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D4-2",
      enjoymentRating: 3,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W3D5-1",
      enjoymentRating: 1,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W4D2-1",
      enjoymentRating: 2,
      difficultyRating: 1,
         },
   {
      student: "Piet Paulusma",
      assignment: "W4D2-2",
      enjoymentRating: 3,
      difficultyRating: 2,
         },
   {
      student: "Piet Paulusma",
      assignment: "W4D2-3",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D2-4",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D3-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D3-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D3-3",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D3-4",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D3-5",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W4D3-6",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W5D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W5D5-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W6D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W6D2-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Piet Paulusma",
      assignment: "W6D2-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D2-5",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D1-1",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D2-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D2-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D2-3",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D2-4",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D2-5",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D3-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D3-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D3-4",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D3-5",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D3-6",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D4-2",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W1D5-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D1-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D1-2",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D2-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D2-2",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D2-3",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D3-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D3-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D3-3",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D4-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D4-2",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D4-3",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W2D5-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D1-1",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D1-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D1-3",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D1-4",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D2-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D2-2",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D2-3",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D3-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D3-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D3-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D3-4",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D4-2",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W3D5-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D2-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D2-3",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D2-4",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D3-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D3-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D3-3",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D3-4",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D3-5",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W4D3-6",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W5D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W5D5-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W6D1-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Erwin Kroll",
      assignment: "W6D2-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D2-5",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D1-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D2-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D2-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D2-3",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D2-4",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D2-5",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D3-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D3-2",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D3-4",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D3-5",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D3-6",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D4-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D4-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W1D5-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D1-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D1-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D2-1",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D2-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D2-3",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D3-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D3-2",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D3-3",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D4-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D4-2",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D4-3",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W2D5-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D1-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D1-3",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D1-4",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D2-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D2-2",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D2-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D3-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D3-2",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D3-3",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D3-4",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D4-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D4-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W3D5-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D2-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D2-2",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D2-3",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D2-4",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D3-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D3-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D3-3",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D3-4",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D3-5",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W4D3-6",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W5D4-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W5D5-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W6D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W6D2-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marjon de Hond",
      assignment: "W6D2-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D2-5",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D1-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D2-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D2-2",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D2-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D2-4",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D2-5",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D3-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D3-2",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D3-4",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D3-5",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D3-6",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D4-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D4-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W1D5-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D1-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D1-2",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D2-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D2-2",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D2-3",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D3-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D3-2",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D3-3",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D4-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D4-2",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D4-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W2D5-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D1-2",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D1-3",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D1-4",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D2-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D2-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D2-3",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D3-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D3-2",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D3-3",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D3-4",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D4-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D4-2",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W3D5-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D2-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D2-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D2-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D2-4",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D3-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D3-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D3-3",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D3-4",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D3-5",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W4D3-6",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W5D4-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W5D5-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W6D1-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Helga van Leur",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D2-5",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D1-1",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D2-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D2-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D2-3",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D2-4",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D2-5",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D3-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D3-2",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D3-4",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D3-5",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D3-6",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D4-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D4-2",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W1D5-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D1-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D2-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D2-2",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D2-3",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D3-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D3-2",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D3-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D4-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D4-3",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W2D5-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D1-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D1-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D1-3",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D1-4",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D2-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D2-3",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D3-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D3-2",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D3-3",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D3-4",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D4-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D4-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W3D5-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D2-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D2-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D2-3",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D2-4",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D3-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D3-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D3-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D3-4",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D3-5",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Diana Woei",
      assignment: "W4D3-6",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W5D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W5D5-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Diana Woei",
      assignment: "W6D1-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Diana Woei",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Diana Woei",
      assignment: "W6D2-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D2-5",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D1-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D2-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D2-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D2-3",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D2-4",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D2-5",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D3-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D3-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D3-4",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D3-5",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D3-6",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D4-1",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D4-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W1D5-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D1-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D1-2",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D2-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D2-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D2-3",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D3-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D3-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D3-3",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D4-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D4-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D4-3",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W2D5-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D1-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D1-3",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D1-4",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D2-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D2-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D2-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D3-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D3-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D3-3",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D3-4",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D4-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D4-2",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W3D5-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D2-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D2-2",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D2-3",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D2-4",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D3-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D3-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D3-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D3-4",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D3-5",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W4D3-6",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W5D4-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W5D5-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W6D1-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Gerrit Hiemstra",
      assignment: "W6D2-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D2-5",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D1-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D2-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D2-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D2-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D2-4",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D2-5",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D3-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D3-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D3-4",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D3-5",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D3-6",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D4-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D4-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W1D5-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D1-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D1-2",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D2-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D2-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D2-3",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D3-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D3-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D3-3",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D4-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D4-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D4-3",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W2D5-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D1-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D1-2",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D1-3",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D1-4",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D2-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D2-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D2-3",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D3-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D3-2",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D3-3",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D3-4",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D4-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D4-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W3D5-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D2-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D2-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D2-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D2-4",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D3-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D3-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D3-3",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D3-4",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D3-5",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W4D3-6",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W5D4-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W5D5-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W6D1-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W6D2-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Steven Seagal",
      assignment: "W6D2-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D2-5",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D1-1",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D2-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D2-3",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D2-4",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D2-5",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D3-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D3-2",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D3-4",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D3-5",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D3-6",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D4-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D4-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W1D5-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D1-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D1-2",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D2-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D2-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D2-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D3-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D3-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D3-3",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D4-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D4-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D4-3",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W2D5-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D1-1",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D1-2",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D1-3",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D1-4",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D2-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D2-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D2-3",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D3-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D3-2",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D3-3",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D3-4",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D4-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D4-2",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W3D5-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D2-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D2-2",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D2-3",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D2-4",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D3-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D3-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D3-3",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D3-4",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D3-5",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W4D3-6",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W5D4-1",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W5D5-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W6D1-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W6D2-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Marco Verhoef",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D2-5",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D1-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D2-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D2-2",
      enjoymentRating: 1,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D2-3",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D2-4",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D2-5",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D3-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D3-2",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D3-4",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D3-5",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D3-6",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D4-1",
      enjoymentRating: 4,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D4-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W1D5-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D1-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D1-2",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D2-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D2-2",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D2-3",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D3-1",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D3-2",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D3-3",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D4-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D4-2",
      enjoymentRating: 4,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D4-3",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W2D5-1",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D1-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D1-2",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D1-3",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D1-4",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D2-1",
      enjoymentRating: 1,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D2-2",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D2-3",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D3-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D3-2",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D3-3",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D3-4",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D4-1",
      enjoymentRating: 2,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D4-2",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W3D5-1",
      enjoymentRating: 3,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D2-1",
      enjoymentRating: 2,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D2-2",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D2-3",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D2-4",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D3-1",
      enjoymentRating: 3,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D3-2",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D3-3",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D3-4",
      enjoymentRating: 3,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D3-5",
      enjoymentRating: 2,
      difficultyRating: 3,
      
   },
   {
      student: "Monique Somers",
      assignment: "W4D3-6",
      enjoymentRating: 4,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W5D4-1",
      enjoymentRating: 2,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W5D5-1",
      enjoymentRating: 1,
      difficultyRating: 2,
      
   },
   {
      student: "Monique Somers",
      assignment: "W6D1-1",
      enjoymentRating: 4,
      difficultyRating: 4,
      
   },
   {
      student: "Monique Somers",
      assignment: "W6D2-1",
      enjoymentRating: 1,
      difficultyRating: 1,
      
   },
   {
      student: "Monique Somers",
      assignment: "W6D2-1",
      enjoymentRating: 3,
      difficultyRating: 3,
      
   },
];

export default studentEvaluationData;
 */
