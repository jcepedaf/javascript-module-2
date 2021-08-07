// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };

   
  // Prints
  // TOM - 20
  // ABDUL - 19

  for (let i =0 ; i < Object.keys(studentGrades).length ; i ++){
    if(Object.values(studentGrades)[i]>18){
      console.log(Object.keys(studentGrades)[i]+" - "+Object.values(studentGrades)[i])
    }
  }