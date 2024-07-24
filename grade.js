function gradeCalc(){
    const mark = document.getElementById("mark").value;
    if (mark >= 0 && mark <=39){
        document.getElementById("result").value = "Fail";
    }
    else if (mark >= 40 && mark <= 49){
        document.getElementById("result").value = "Pass";
    }
    else if (mark >= 50 && mark <= 59){
        document.getElementById("result").value = "Credit";
    }
    else if (mark >= 60 && mark <= 74){
        document.getElementById("result").value = "Good";
    }
    else if (mark >= 75 && mark <= 100){
        document.getElementById("result").value = "Excellent";
    }
    else{
        document.getElementById("result").value = "Oversabi";
    }
}