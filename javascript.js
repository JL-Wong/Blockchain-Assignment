const btnSubscribe = document.getElementById("btnSubscribe")
const tableData = document.getElementsByTagName("tbody")
// const createRow = document.createElement("tr")
// const createData = document.createElement("td")
const form = document.getElementById("subscribe-form");

const msg = "Hello Testing"

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form submission
});

btnSubscribe.addEventListener("click", () => {
    const createRow = document.createElement("tr")
    const createData = document.createElement("td")
    const msgTextNode = document.createTextNode(msg);
    createData.appendChild(msgTextNode)
    createRow.appendChild(createData)
    for (let i = 0; i < tableData.length; i++) {
        tableData[i].appendChild(createRow);
    }
})

