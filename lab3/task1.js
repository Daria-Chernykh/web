let n = parseInt(prompt("Введите количество строк (n):"));
let m = parseInt(prompt("Введите количество столбцов (m):"));

if (isNaN(n) || isNaN(m) || n <= 0 || m <= 0 || !Number.isInteger(n) || !Number.isInteger(m)) {
    alert("Ошибка: введите целые положительные числа для размеров матрицы");
} else {
    let matrix = Array.from({length: n}, () => Array.from({length: m}, () => Math.floor(Math.random() * 100)))
    let sum = matrix.flat().reduce((acc, val) => acc + val, 0);
    let average = sum / (n * m);
    
    let resultArray = matrix.map(row => {
        let count = row.filter(num => num > average).length;
        return count > 0 ? count : 0;
    });

    let output = "Матрица:\n";
    matrix.forEach(row => {
        output += row.join("\t") + "\n";
    });
    
    output += "\nСреднее арифметическое: " + average.toFixed(2) + "\n";
    output += "Результат: [" + resultArray.join(", ") + "]";
}