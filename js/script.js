/* ======= JavaScript ======= */
let teacherForms = document.getElementsByClassName("teacher-contract");

for(let teacherForm of teacherForms){
    teacherForm.addEventListener("submit", function(event) {
        event.preventDefault();
        //console.log("executou o submit");

        let price = teacherForm.price.value;
        let hours = teacherForm.hours.value;

        let total = price * hours;

        console.log(total);
    });
}












