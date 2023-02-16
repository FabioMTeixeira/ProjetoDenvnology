async function sendData(title, link) {
    const response = await fetch('http://localhost:9000/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, link })
    });
    const data = await response.json();
    return data;
}

async function showData() {
    const response = await fetch('http://localhost:9000/links');
    const data = await response.json();

    const table = document.createElement('table');
    const thead = table.createTHead();
    const tbody = table.createTBody();

    // create table header row
    const headerRow = thead.insertRow();
    const titleHeader = headerRow.insertCell();
    const linkHeader = headerRow.insertCell();
    titleHeader.innerText = 'Título';
    linkHeader.innerText = 'Link';

    // create table rows with data from API
    if (Array.isArray(data)) {
        data.forEach(item => {
            const row = tbody.insertRow();
            const titleCell = row.insertCell();
            const linkCell = row.insertCell();
            titleCell.innerText = item.title;
            linkCell.innerHTML = `<a href="${item.link}">${item.link}</a>`;
        });
    }
    

    const tableDiv = document.getElementById('table');
    tableDiv.innerHTML = '';
    tableDiv.appendChild(table);
}

const form = document.getElementById('link-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const linkInput = document.getElementById('link');
    await sendData(titleInput.value, linkInput.value);
    titleInput.value = '';
    linkInput.value = '';
    showData();
});

showData();