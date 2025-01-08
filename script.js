const symbolZones2 = {
    1: "$10.00",
    2: "$20.00",
    3: "$30.00",
    4: "$40.00",
    5: "$50.00",
    6: "$60.00",
    7: "$70.00",
    8: "$80.00",
};
const symbolZones1 = {
    1: "AAPL",
    2: "NVDA",
    3: "MSFT",
    4: "GOOGL",
    5: "AMZN",
    6: "META",
    7: "WMT",
    8: "TGT",
};

let wheel = document.querySelector(".wheel");
let inner = document.querySelector(".inner");
let spinBtn = document.querySelector(".spinBtn");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let value1 = -1 * (Math.ceil(Math.random() * 360 * 10) + 360 * 2);
let value2 = Math.ceil(Math.random() * 360 * 10) + 360 * 2;
// let kaching = new Audio();
// kaching.src = "ka-ching.mp3";

spinBtn.onclick = function () {
    spinBtn.classList.add("disabled");

    wheel.style.transform = "rotate(" + value1 + "deg)";
    inner.style.transform = "rotate(" + value2 + "deg)";

    const actualDeg1 = 360 - (((value1 % 360) + 360) % 360);
    const actualDeg2 = 360 - (((value2 % 360) + 360) % 360);

    handle1Win(actualDeg1);
    handle2Win(actualDeg2);

    value1 += -1 * (Math.ceil(Math.random() * 360 * 10) + 360 * 2);
    value2 += Math.ceil(Math.random() * 360 * 10) + 360 * 2;

    setTimeout(() => {
        spinBtn.classList.remove("disabled");
    }, 4000);
};

handle1Win = function (actualDeg1) {
    const winning1id = Math.ceil(actualDeg1 / 45);
    console.log(actualDeg1);
    console.log(winning1id);
    setTimeout(function () {
        output1.innerHTML = symbolZones1[winning1id];
        output1.innerHTML =
            "<a href=finance.yahoo.com/quote/" +
            symbolZones1[winning1id] +
            ' target="_blank">' +
            symbolZones1[winning1id] +
            "</a>";
    }, 3010);
};
handle2Win = function (actualDeg2) {
    const winning2id = Math.ceil(actualDeg2 / 45);
    console.log(actualDeg2);
    console.log(symbolZones2[winning2id]);
    setTimeout(function () {
        output2.innerHTML = symbolZones2[winning2id];
    }, 4010);
};

const priceButton = document.getElementById("priceButton");
priceButton.addEventListener("click", function () {
    console.log("Button clicked!");
    // document.querySelectorAll(".price").innerHTML = Math.floor(
    //     Math.random() * 100
    // );

    prices = document.querySelectorAll(".price");
    let i = 1;
    prices.forEach((item) => {
        let val = (Math.floor(Math.random() * 10000) / 100).toFixed(2);
        item.innerHTML = "$" + val;
        symbolZones2[i] = "$" + val;
        i += 1;
    });
});
