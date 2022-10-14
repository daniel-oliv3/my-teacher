/**/
let teacherForms = document.getElementsByClassName("teacher-contract");

for(let teacherForm of teacherForms){
    teacherForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("executou o submit");
    });
}












