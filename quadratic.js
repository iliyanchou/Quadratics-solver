function solve() {
    var a = document.getElementById('firstcoef').value;
    var a = parseFloat(a);
    var b = document.getElementById('secondcoef').value;
    var b = parseFloat(b);
    var c = document.getElementById('thirdcoef').value;
    var c = parseFloat(c);
    var discriminant = b * b - 4 * a * c;
    if (a == 0) {
        blank = "";
        let error = "That's not a quadratic the coeficient 'a' has to be different than zero!"
        document.getElementById("output3").textContent = error;
        document.getElementById("output1").textContent = blank;
        document.getElementById("output2").textContent = blank;
    }
    else {
        if (discriminant > 0 && a !== 0) {
            let solution1 = (-b - Math.sqrt(discriminant)) / (2 * a);
            let solution2 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let solution1final = `x1 = ${solution1}`;
            let solution2final = `x2 = ${solution2}`;
            let blank = "";
            let text = "There are two  different solutions and they are:";
            document.getElementById("output1").textContent = blank;
            document.getElementById("output2").textContent = blank;
            document.getElementById("output3").textContent = blank;
            document.getElementById("output1").textContent = solution1final;
            document.getElementById("output2").textContent = solution2final;
            document.getElementById("output3").textContent = text;
        }



        if (discriminant == 0 && a !== 0) {
            let text = "There is only one double solution and it's:";
            let solution = (-b) / (2 * a);
            let solutionfinal = `x = ${solution}`;
            let blank = "";
            document.getElementById("output1").textContent = blank;
            document.getElementById("output2").textContent = blank;
            document.getElementById("output3").textContent = blank;
            document.getElementById("output3").textContent = text;
            document.getElementById("output1").textContent = solutionfinal;

        }
        if (discriminant < 0 && a !== 0) {
            let blank = "";
            document.getElementById("output1").textContent = blank;
            document.getElementById("output2").textContent = blank;
            document.getElementById("output3").textContent = blank;
            let text = "There are no real solutions to this equation"
            document.getElementById("output3").textContent = text;
        }
    }
}


