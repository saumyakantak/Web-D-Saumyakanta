
var min, max;
function get_min(input){
    console.log(input.value);
    min=input.value;
}

function get_max(input){
    console.log(input.value);
    max=input.value;
    if(max<=min)
        alert('expected max value greater than min value');
}

function active(this){
    $(this).addClass("active");
}
























