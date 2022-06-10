const renderUsers = (data)=>{
    let pageContent = document.getElementById('page-content');
    pageContent.innerHTML='';
    let headContent = document.createElement('h2');
    headContent.classList.add('mt-5')
    headContent.innerHTML = 'Users';
    let table =  document.createElement('table')
    table.classList.add('table');
    let thead = document.createElement('thead');
    thead.innerHTML= `<tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Role</th>
                                                                <th scope="col">Description</th>
                                                                <th scope="col">Enable</th>
                                                                <th scope="col">Last Access</th>
                                                                <th scope="col"></th>
                                                            </tr>`;
    let tbody = document.createElement('tbody');
    data.forEach(item => {
        var tr= document.createElement('tr');
        tr.innerHTML=`
        <td>${item.name}</td>
        <td>${item.role}</td>
        <td>${item.desc}</td>
        <td>${item.enable}</td>
        <td>${item.lastAccess}</td>
        <td class="btn btn-outline-success p-0">Delete</td>
        `
        tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    pageContent.appendChild(headContent);
    pageContent.appendChild(table);
}
export default renderUsers;