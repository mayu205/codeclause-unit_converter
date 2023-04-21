var input = document.getElementById('input')
var result = document.getElementById('result')
var inputType = document.getElementById('inputType')
var resultType = document.getElementById('resultType')
var option_form, option_to;
input.addEventListener("keyup", myResult);
inputType.addEventListener("change" , myResult);
resultType.addEventListener("change", myResult);
option_form = inputType.value;
option_to = resultType.value;

function myResult(){
    option_form = inputType.value;
    option_to = resultType.value;

    if(option_form === "meter" && option_to ==="kilometer"){
        result.value = Number(input.value)*0.001;
    }else if(option_form ==="meter" && option_to ==="centimeter"){
        result.value = Number(input.value)*100;
    }else if(option_form ==="meter" && option_to ==="meter"){
        result.value = input.value
    }
    if(option_form === "kilometer" && option_to ==="meter"){
        result.value = Number(input.value)*1000;
    }else if(option_form ==="kilometer" && option_to ==="centimeter"){
        result.value = Number(input.value)*100000;
    }else if(option_form ==="kilometer" && option_to ==="kilometer"){
        result.value = input.value
    }
    if(option_form === "centimeter" && option_to ==="kilometer"){
        result.value = Number(input.value)*0.00001;
    }else if(option_form ==="centimeter" && option_to ==="meter"){
        result.value = Number(input.value)*0.01;
    }else if(option_form ==="centimeter" && option_to ==="centimeter"){
        result.value = input.value
    }
}