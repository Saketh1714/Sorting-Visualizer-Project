let comparisons = 0;
let swaps = 0;


function resetStats() {
    comparisons = 0;
    swaps = 0;
    document.getElementById("comparison-count").innerText = "0";
    document.getElementById("swap-count").innerText = "0";

}
function updateStats() {
    document.getElementById("comparison-count").innerText = comparisons;
    document.getElementById("swap-count").innerText = swaps;
}

function getSpeed() {
    return document.getElementById('speed').value;
}



const toggle = document.getElementById("toggle-mode");
const modeLabel = document.getElementById("mode-label");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");

    // Update label text
    if (toggle.checked) {
        modeLabel.textContent = "Light Mode";
    } else {
        modeLabel.textContent = "Dark Mode";
    }


});



let music1 = new Audio("click-1.mp3");
let music2 = new Audio("click-2.mp3");
let music3 = new Audio("click-3.mp3");
let music4 = new Audio("click-4.mp3");
let music5 = new Audio("click-5.mp3");


const sizeInput = document.getElementById('size');
const speedInput = document.getElementById('speed');

const sizeDisplay = document.createElement('span');
sizeDisplay.id = 'sizeDisplay';
sizeDisplay.style.marginLeft = '10px';
sizeDisplay.style.fontWeight = 'bold';

sizeInput.insertAdjacentElement("afterend", sizeDisplay);

sizeDisplay.innerText = sizeInput.value;

const speedDisplay = document.createElement("span");
speedDisplay.id = "speedDisplay";
speedDisplay.style.marginLeft = "10px";
speedDisplay.style.fontWeight = "bold";


speedInput.insertAdjacentElement("afterend", speedDisplay);

speedDisplay.innerText = speedInput.value;


sizeInput.addEventListener("input", () => {
    sizeDisplay.innerText = sizeInput.value;
});

speedInput.addEventListener("input", () => {
    speedDisplay.innerText = speedInput.value;
});


document.getElementById('generate').addEventListener('click', function () {
    createArray();
    music1.play();
});
document.getElementById('bubbleSortBtn').addEventListener('click', function () {
    bubbleSort();
    music2.play();
});
document.getElementById('selectionSortBtn').addEventListener('click', function () {
    selectionSort();
    music3.play();
});
document.getElementById('InsertionSortBtn').addEventListener('click', function () {
    insertionSort();
    music4.play();
});
document.getElementById('mergeSortBtn').addEventListener('click', function () {
    mergeSort();
    music5.play();
});
document.getElementById('quickSortBtn').addEventListener('click', function () {
    quickSort();
    music3.play();

});
document.getElementById('heapSortBtn').addEventListener('click', function () {
    heapSort();
    music1.play();
});

function createArray() {
    const barcontainer = document.getElementById('bars-container');
    barcontainer.innerHTML = "";
    const arraysize = document.getElementById('size').value;
    for (let i = 0; i < arraysize; i++) {
        const bar = document.createElement('div');
        const barheight = Math.floor(Math.random() * 300) + 50;
        bar.style.height = barheight + 'px';

        bar.classList.add("bar");
        barcontainer.appendChild(bar);
    }
}
function bubbleSort() {
    resetStats();
    document.getElementById('Time_Worst').innerText = "O(N^2)";
    document.getElementById('Time_Best').innerText = "O(N)";
    document.getElementById('Time_Average').innerText = "O(N^2)";
    document.getElementById('Time_Space').innerText = "O(1)";
    const bars = document.querySelectorAll('.bar');
    const arraySize = bars.length;
    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize - i - 1; j++) {
            const bar1 = bars[j];
            const bar2 = bars[j + 1];
            setTimeout(() => {
                compareAndSwap(bar1, bar2);

            }, i * animationspeed + j * animationspeed)

        }
    }

}

function compareAndSwap(bar1, bar2) {
    comparisons++;
    const height1 = parseInt(bar1.style.height);
    const height2 = parseInt(bar2.style.height);
    if (height1 > height2) {
        swapBars(bar1, bar2);
        swaps++;
        updateStats();
    }
    updateStats();
    bar1.style.backgroundColor = "#4a69bd";
    bar2.style.backgroundColor = "#6a89cc";
}
function swapBars(bar1, bar2) {
    const tempheight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempheight;

}
function selectionSort() {
    resetStats();
    document.getElementById('Time_Worst').innerText = "O(N^2)";
    document.getElementById('Time_Best').innerText = "O(N^2)";
    document.getElementById('Time_Average').innerText = "O(N^2)";
    document.getElementById('Time_Space').innerText = "O(1)";
    const bars = document.querySelectorAll('.bar');
    const arraySize = bars.length;
    let small;
    for (let i = 0; i < arraySize; i++) {
        small = i;
        for (let j = i + 1; j < arraySize; j++) {
            const bar1 = bars[j];
            const bar2 = bars[small];
            setTimeout(() => {
                compareAndSwap2(bar1, bar2);
            }, i * animationspeed + j * animationspeed)
        }
    }

}
function compareAndSwap2(bar1, bar2) {
    comparisons++;
    const height1 = parseInt(bar1.style.height);
    const height2 = parseInt(bar2.style.height);

    if (height1 < height2) {
        swapBars2(bar1, bar2);
        swaps++;
        updateStats();

    }
    bar1.style.backgroundColor = '#4a69bd';
    bar2.style.backgroundColor = '#1e3799';
}
function swapBars2(bar1, bar2) {
    bar1.style.backgroundColor = '#6a89cc';
    bar2.style.backgroundColor = '#4a69bd';

    const tempheight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempheight;
}

async function insertionSort() {
    resetStats();
    document.getElementById('Time_Worst').innerText = "O(N^2)";
    document.getElementById('Time_Best').innerText = "O(N)";
    document.getElementById('Time_Average').innerText = "O(N^2)";
    document.getElementById('Time_Space').innerText = "O(1)";

    const bars = document.querySelectorAll('.bar');
    const arraySize = bars.length;

    for (let i = 1; i < arraySize; i++) {
        let key = parseInt(bars[i].style.height);
        let j = i - 1;
        bars[i].style.backgroundColor = '#4a69bd';

        await new Promise(resolve => setTimeout(resolve, getSpeed()));

        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            comparisons++;
            updateStats();

            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].style.backgroundColor = '#4a69bd';
            bars[j].style.backgroundColor = '#6a89cc';
            swaps++;
            updateStats();

            await new Promise(resolve => setTimeout(resolve, j * getSpeed()));

            j = j - 1;
        }
        bars[j + 1].style.height = key + "px";
        swaps++;
        updateStats();
        bars[j + 1].style.backgroundColor = '#1e3799';
    }

    for (let t = 0; t < arraySize; t++) {
        bars[t].style.backgroundColor = '#0c2461';
        await new Promise(resolve => setTimeout(resolve, t * getSpeed()));
    }

}

async function mergeSort() {
    resetStats();
    document.getElementById('Time_Worst').innerText = "O(N log N)";
    document.getElementById('Time_Average').innerText = "O(N log N)";
    document.getElementById('Time_Best').innerText = "O(N log N)";
    document.getElementById('Time_Space').innerText = "O(N)";

    const bars = document.querySelectorAll('.bar');
    const arraySize = bars.length;

    await mergePartition(bars, 0, arraySize - 1);

    for (let i = 0; i < arraySize; i++) {
        bars[i].style.backgroundColor = "green";
        await new Promise(resolve => setTimeout(resolve, getSpeed()));
    }

    enable_buttons();

}

async function mergeSortHelper(bars, start, mid, end) {
    comparisons++;  // Every bar comparison
    updateStats();
    let p = start;
    let q = mid + 1;

    const Arr = [];
    let k = 0;

    for (let i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = parseInt(bars[q].style.height);
            swaps++;
            updateStats();
            bars[q++].style.backgroundColor = "#4a69bd";
            await new Promise(resolve => setTimeout(resolve, getSpeed()));
        } else if (q > end) {
            Arr[k++] = parseInt(bars[p].style.height);
            swaps++;
            updateStats();
            bars[p++].style.backgroundColor = "#4a69bd";
            await new Promise(resolve => setTimeout(resolve, getSpeed()));
        } else if (parseInt(bars[p].style.height) < parseInt(bars[q].style.height)) {
            Arr[k++] = parseInt(bars[p].style.height);
            swaps++;
            updateStats();
            bars[p++].style.backgroundColor = "#4a69bd";
            await new Promise(resolve => setTimeout(resolve, getSpeed()));
        } else {
            Arr[k++] = parseInt(bars[q].style.height);
            swaps++;
            updateStats();
            bars[q++].style.backgroundColor = "#4a69bd";
            await new Promise(resolve => setTimeout(resolve, getSpeed()));
        }
    }

    for (let t = 0; t < k; t++) {
        bars[start].style.height = Arr[t] + "px";
        bars[start++].style.backgroundColor = "#0c2461";
        await new Promise(resolve => setTimeout(resolve, getSpeed()));
    }
}

async function mergePartition(bars, start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        bars[mid].style.backgroundColor = "#6a89cc";
        await new Promise(resolve => setTimeout(resolve, getSpeed()));

        await mergePartition(bars, start, mid);
        await mergePartition(bars, mid + 1, end);

        await mergeSortHelper(bars, start, mid, end);
    }
}

async function quickSort() {
    resetStats();
    document.getElementById('Time_Worst').innerText = "O(N^2)";
    document.getElementById('Time_Average').innerText = "O(N log N)";
    document.getElementById('Time_Best').innerText = "O(N log N)";
    document.getElementById('Time_Space').innerText = "O(log N)";
    const bars = document.querySelectorAll('.bar');
    await quick(bars, 0, bars.length - 1);


    bars.forEach(bar => {
        bar.style.backgroundColor = '#0c2461';
    });

}

async function quick(bars, low, high) {
    if (low < high) {
        const pivotIndex = await partition(bars, low, high);
        await quick(bars, low, pivotIndex - 1);
        await quick(bars, pivotIndex + 1, high);
    }
}


async function partition(bars, low, high) {
    const pivot = parseInt(bars[high].style.height);
    let i = low - 1;

    for (let j = low; j < high; j++) {
        const bar1 = bars[j];
        const bar2 = bars[high];

        bar1.style.backgroundColor = 'red';
        bar2.style.backgroundColor = 'yellow';
        await new Promise(resolve => setTimeout(resolve, j * getSpeed()));
        comparisons++;
        updateStats();

        if (parseInt(bar1.style.height) < pivot) {
            i++;
            await swapBars(bar1, bars[i]);
            swaps++;
            updateStats();
        }

        bar1.style.backgroundColor = '#4a69bd';
        bar2.style.backgroundColor = '#6a89cc';
    }

    await swapBars(bars[i + 1], bars[high]);
    swaps++;
    updateStats();


    bars[i + 1].style.backgroundColor = '#1e3799';
    for (let k = low; k <= high; k++) {
        if (k !== i + 1) {
            bars[k].style.backgroundColor = '#0c2461';
        }
    }

    return i + 1;
}

async function heapSort() {
    resetStats();
    document.getElementById('Time_Worst').innerText = "O(N log N)";
    document.getElementById('Time_Average').innerText = "O(N log N)";
    document.getElementById('Time_Best').innerText = "O(N log N)";
    document.getElementById('Time_Space').innerText = "O(1)";
    const bars = document.querySelectorAll('.bar');
    const arraySize = bars.length;

    for (let i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
        await heapify(bars, arraySize, i);
    }

    for (let i = arraySize - 1; i > 0; i--) {

        await swapBars(bars[0], bars[i]);

        await heapify(bars, i, 0);
    }


    bars.forEach(bar => {
        bar.style.backgroundColor = 'green';
    });

}

async function heapify(bars, arraySize, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;


    if (left < arraySize && parseInt(bars[left].style.height) > parseInt(bars[largest].style.height)) {
        comparisons++;
        updateStats();
        largest = left;
    }

    if (right < arraySize && parseInt(bars[right].style.height) > parseInt(bars[largest].style.height)) {
        comparisons++;
        updateStats();
        largest = right;
    }

    if (largest !== i) {
        await swapBars(bars[i], bars[largest]);
        swaps++;
        updateStats();


        await heapify(bars, arraySize, largest);
    }
}
async function swapBars(bar1, bar2) {
    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
    await new Promise(resolve => setTimeout(resolve, getSpeed()));
}