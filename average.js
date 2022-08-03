var marks = [75.25, 65, 80.50, 90.45, 65.25];

var subjects = ['math', 'physics', 'chemistry', 'bangla','english'];

for( var i = 0;  i < subjects.length; i++){
    console.log(subjects[i]);
    for(var j=0; j< marks.length; j++){
        if(i===j){
            console.log(marks[i]);
        }
    }
}
var totalMarks = 0;

for(i=0; i <marks.length; i++){
    totalMarks=totalMarks + marks[i];
}
console.log(totalMarks);

var average = totalMarks/5;
var averageMarksTwoDecimal = average.toFixed(2);
