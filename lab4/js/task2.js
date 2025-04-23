let canvas = document.getElementById("drawingCanvas");
let ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, 600, 600);

let n = parseInt(prompt("Введите количество строк (n):"));
let m = parseInt(prompt("Введите количество столбцов (m):"));

if (isNaN(n) || isNaN(m) || n <= 0 || m <= 0 || !Number.isInteger(n) || !Number.isInteger(m)) {
    alert("Ошибка: введите целые положительные числа для размеров матрицы");
} else {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (j % 2 === 0) {
                ctx.fillStyle = "blue";
            } else {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(j * 40, i * 40, 10, 10);
        }
    }
}