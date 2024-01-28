
// Name Input
function filterNameInput() {
    var inputElement = document.getElementById("name");
    var inputValue = inputElement.value;

    // Remove any characters that are not alphabets or spaces
    var filteredValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input value
    inputElement.value = filteredValue;
}

// Phone number input
function filterPhoneNumber() {
    var inputElement = document.getElementById("phone");
    var inputValue = inputElement.value;

    // Remove any non-numeric characters
    var numericValue = inputValue.replace(/\D/g, '');

    // Limit the total digit count to 10
    var limitedValue = numericValue.slice(0, 10);

    // Update the input value
    inputElement.value = limitedValue;
}

// Pincode
function filterPincode() {
    var inputElement = document.getElementById("pincode");
    var inputValue = inputElement.value;

    // Remove any non-numeric characters
    var numericValue = inputValue.replace(/\D/g, '');

    // Limit the total digit count to 6
    var limitedValue = numericValue.slice(0, 6);

    // Update the input value
    inputElement.value = limitedValue;
}

// PAN number
function filterPANNumber() {
    var inputElement = document.getElementById("pannumber");
    var inputValue = inputElement.value;

    // Remove any non-alphanumeric characters
    var alphanumericValue = inputValue.replace(/[^A-Za-z0-9]/g, '');

    // Limit the total character count to 10
    var limitedValue = alphanumericValue.slice(0, 10);

    // Update the input value
    inputElement.value = limitedValue;
}

// Checkbox
function togglePanNumberRequired() {
    var panNumberInput = document.getElementById('pannumber');
    var atgCheckbox = document.getElementById('atgCheckbox');

    if (atgCheckbox.checked) {
        // If checkbox is checked, make PAN number field required and remove placeholder
        panNumberInput.removeAttribute('placeholder');
        panNumberInput.setAttribute('required', true);
    } else {
        // If checkbox is unchecked, make PAN number field optional and add placeholder
        panNumberInput.setAttribute('placeholder', 'Optional');
        panNumberInput.removeAttribute('required');
    }
}
