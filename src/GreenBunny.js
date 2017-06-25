/**
 * Created by ronald on 18/06/2017.
 */

function init() {

    var concatenateElem = document.getElementById("alpha");
    concatenateElem.innerHTML = "This is how we " + " concatenate Strings";

    var subStringElem = document.getElementById("beta");
    subStringElem.innerHTML = "Ronald Kneppers is the coolest ever (123)";

    alert(subStringElem.innerHTML.substr(0,2));

    var frog = document.getElementById("creta")
    frog.innerHTML = "The starting element of the inner element is " + subStringElem.innerHTML.indexOf("(") +
        " and the index of the closing bracket is " + subStringElem.innerHTML.indexOf(")") + ", therefore the id is " +
        subStringElem.innerHTML.substr(subStringElem.innerHTML.indexOf("(") + 1,subStringElem.innerHTML.indexOf(")")-37);

    // Or like so: document.getElementById("creta").innerHTM = "The....

    subStringElem.innerHTML = subStringElem.innerHTML.replace("coolest ever", "best teacher");

}