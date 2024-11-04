function fizzbuzz() {
    document.getElementById("output").innerHTML = "";

    let ceiling = Number(document.getElementById("ceiling").value) + 1;

    if (ceiling > 1000) {
        document.getElementById("output").innerHTML += "Invalid number. Please pick a number less than 1000.";
        exit();
    }

    for (let i = 1; i < ceiling; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            document.getElementById("output").innerHTML += "FizzBuzz";
        }
        else if (i % 3 == 0) {
            document.getElementById("output").innerHTML += "Fizz";
        }
        else if (i % 5 == 0) {
            document.getElementById("output").innerHTML += "Buzz";
        }
        else {
            document.getElementById("output").innerHTML += i;
        }

        document.getElementById("output").innerHTML += " ";
    }
}
