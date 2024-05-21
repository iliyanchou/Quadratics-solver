function solve() {
    var a = document.getElementById('firstcoef').value;
    var a = parseFloat(a);
    var b = document.getElementById('secondcoef').value;
    var b = parseFloat(b);
    var c = document.getElementById('thirdcoef').value;
    var c = parseFloat(c);
    var discriminant = b * b - 4 * a * c;
    if (a == 0) {
        alert("That's not a quadratic the coeficient 'a' has to be different than zero!")
        blank = "";
        let error = "That's not a quadratic the coeficient 'a' has to be different than zero!"
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

function graph() {
    var a = document.getElementById('firstcoef').value;
    var a = parseFloat(a);
    if (a !== 0) {
        function f(x) {
            var a = document.getElementById('firstcoef').value;
            var a = parseFloat(a);
            var b = document.getElementById('secondcoef').value;
            var b = parseFloat(b);
            var c = document.getElementById('thirdcoef').value;
            var c = parseFloat(c);
            return a * x * x + b * x + c
        }
        var a = document.getElementById('firstcoef').value;
        var a = parseFloat(a);
        var b = document.getElementById('secondcoef').value;
        var b = parseFloat(b);
        var c = document.getElementById('thirdcoef').value;
        var c = parseFloat(c);
        const xValues = [];
        const yValues = [];
        var sumOfCoef = Math.abs(a + b + c);
        if (sumOfCoef <= 1000) {
            var sumOfCoef = sumOfCoef * 50;
        }
        else { }
        if (sumOfCoef == 0) {
            var sumOfCoef = 10;
        }
        else { }
        if (sumOfCoef > 100000) {
            var sumOfCoef = 10000;
        }
        console.log(sumOfCoef);
        for (let x = -sumOfCoef; x <= sumOfCoef; x += 1) {
            xValues.push(x);
            yValues.push(f(x));
        }

        const yIntercept = document.getElementById('thirdcoef').value;



        const trace = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { shape: 'spline' },
            name: 'f(x)'
        };
        const trace2 = {
            x: [0],
            y: [yIntercept],
            type: 'scatter',
            mode: 'markers',
            marker: { color: 'red', size: 10 },
            name: 'y-intercept'
        };
        const layout = {
            const: a = document.getElementById('firstcoef').value,
            const: b = document.getElementById('secondcoef').value,
            const: c = document.getElementById('thirdcoef').value,
            title: `Graph of f(x) = ${a}x\u00B2 + (${b})x + (${c})`,
            xaxis: { title: 'x' },
            yaxis: { title: 'f(x)' }
        };
        const data = [trace, trace2];
        Plotly.newPlot('plot', data, layout);
    }
}
