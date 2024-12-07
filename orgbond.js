// Function to display chemical structure
function showStructure(imageSrc, compoundName) {
    const structureDiv = document.getElementById('structure');
    structureDiv.innerHTML = `
        <h2>${compoundName}</h2>
        <img src="${imageSrc}" alt="${compoundName} Structure">
    `;
}