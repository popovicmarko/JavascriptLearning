const BASA_URL = "https://catfact.ninja";

let data = null;
async function getFactData() {
    const res = await fetch(`${BASA_URL}/facts`)
    const resToJson = await res.json();
    data = { ...resToJson };



};

 function showFatchCrads(factsArr){
    const content = document.getElementById("content")
    date.date.forEach(e => {
        const factDiv = document.createElement("div")
        factDiv.textContent=factE
        content.appendChild(factDiv)
     });
 }

(async function () {
    await getFactData();
    console.log(data)

})();