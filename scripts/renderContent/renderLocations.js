const renderLocations = (data)=>{
    let pageContent = document.getElementById('page-content');
    pageContent.innerHTML='';
    let headContent = document.createElement('h2');
    headContent.classList.add('mt-5');
    headContent.textContent= 'Locations'
    let table =  document.createElement('table')
    table.classList.add('table');
    let thead = document.createElement('thead');
    thead.innerHTML= `<tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Address</th>
                                                                <th scope="col">#Classes</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Last view</th>
                                                                <th scope="col"></th>
                                                            </tr>`;
    let tbody = document.createElement('tbody');
    data.forEach(item => {
        var tr= document.createElement('tr');
        tr.innerHTML=`
        <td>${item.name}</td>
        <td>${item.address}</td>
        <td>${item.class}</td>
        <td>${item.status}</td>
        <td>${item.lastView}</td>
        <td class="btn btn-outline-success p-0">Delete</td>
        `
        tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    pageContent.appendChild(headContent);
    pageContent.appendChild(table);
}
export default renderLocations;