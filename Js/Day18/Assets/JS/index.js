
let createCounter = () => {
    let count = 0;

    return () => {
        count = count + 10;

        document.getElementById("count").textContent = count;
    };
};

let counter = createCounter();

document.getElementById("counterBtn").addEventListener("click", () => {
    counter();
});
