function oddishOrEvenish(fnumber) {
    let a = fnumber.toString();
    let b = 0;
    for (let i = 0; i < fnumber.length; i++) {
        b = b + (a[i]);
    }
    if (b % 2 === 1) {
        return "The given number is: <b>Oddish</b>."
    } else return "The given number is: <b>Evenish</b>."
}
function get_input_number() {

    var input_val_selector = document.getElementById('text-input');
    var input_value = input_val_selector.value;
    if (input_value == "" || input_value == null || input_value == undefined) {
        alert("Please enter your value");
    } else {
        var get_result = oddishOrEvenish(input_value);
        var show_result_selector = document.getElementById('result');
        show_result_selector.innerHTML = get_result;
        show_result_selector.style = "display:block";

    }
    input_val_selector.value = "";
}
