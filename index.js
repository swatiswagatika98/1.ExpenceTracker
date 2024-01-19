document.getElementById('submitid').addEventListener('click',funsave)

function funsave(event){
    event.preventDefault();
    const expenseamount=document.getElementById('expenseid').value;
    const description=document.getElementById('descriptionid').value;
    const category=document.getElementById('choose').value;

    const fulldetails={expenseamount,description,category}

    localStorage.setItem(fulldetails.description, JSON.stringify(fulldetails));
    showuseronscreen(fulldetails)
}
function showuseronscreen(fulldetails){
    var parelement=document.getElementById('liid')
    var newli=document.createElement('li');
    newli.textContent=fulldetails.expenseamount+" "+fulldetails.description+" "+fulldetails.category
    parelement.appendChild(newli)


    //Edit button
    var editbtn=document.createElement('input');
    editbtn.type='button';
    editbtn.value='Edit';
    newli.appendChild(editbtn)
    editbtn.onclick= ()=>{
        localStorage.removeItem(fulldetails.description)
        parelement.removeChild(newli)

        document.getElementById('expenseid').value =fulldetails.expenseamount
        document.getElementById('descriptionid').value = fulldetails.description
        document.getElementById('choose').value=fulldetails.category

        
    }

    //delete button
    var deletebtn=document.createElement('input');
    deletebtn.type='button';
    deletebtn.value='Delete';
    newli.appendChild(deletebtn)
    deletebtn.onclick= ()=>{
        localStorage.removeItem(fulldetails.description)
        parelement.removeChild(newli)
    
}

}