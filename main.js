name_of_the_student_array=[];
display_student_array=[];
function submit() {
    
for (var i=1; i<=4;i++ ) {
    var name_of_student=document.getElementById("name_of_the_student_"+i).value;
console.log(name_of_student);

name_of_the_student_array.push(name_of_student);
}
console.log(name_of_the_student_array);

var length_of_array=name_of_the_student_array.length;
console.log(length_of_array);

for (var i=0; i<length_of_array;i++) {
    display_student_array.push("<h4>NAME-"+name_of_the_student_array[i]+"</h4>");
}


console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    name_of_the_student_array.sort();
    
 var display_student_sorting=[];

 console.log(name_of_the_student_array);
    var length_of_array=name_of_the_student_array.length;
    console.log(length_of_array);
    
    for (var i=0; i<length_of_array;i++) {
        display_student_sorting.push("<h4>NAME-"+name_of_the_student_array[i]+"</h4>");
    }


    console.log(display_student_sorting);
document.getElementById("display_name_with_commas").innerHTML=display_student_sorting;

var remove_commas=display_student_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;


}