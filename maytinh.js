function Curculator(type) {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    if (type == 1) {
        let c = a + b;
        document.getElementById('result').innerHTML = "Ket qua la :" + c;
    }
    if (type == 2) {
        let c = a - b
        document.getElementById('result').innerHTML = "Ket qua la :" + c;
    }
    if (type == 3) {
        let c = a * b
        document.getElementById('result').innerHTML = "Ket qua la :" + c;
    }
    if (type == 4) {
        let c = a / b
        document.getElementById('result').innerHTML = "Ket qua la :" + c;
    }
}
