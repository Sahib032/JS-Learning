const grades ={
    A:"A+",
    B:"B+",
    C:"C",
    D:"D",
    E:"E",
    F:"F"
}
let marks=85;
let userGrade =" "
console.log("<============Marksheet===========>")
if( marks<100 && marks>=90){
    userGrade = grades.A
}else if(marks>=80){
    userGrade = grades.B
}else if(marks>=70){
    userGrade = grades.B
}else if(marks>=60){
    userGrade = grades.C
}else if(marks>=50){
    userGrade = grades.D
}else{
    userGrade = grades.F
}
console.log(`Marks :${marks}`)
console.log(`Grade :${userGrade}`)