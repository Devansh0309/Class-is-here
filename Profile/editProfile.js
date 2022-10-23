function editProfile(element,field,id1,id2){
    document.getElementById(id1).style.display='none'
    document.getElementById(id2).style.display='inline-block'
    let obj=JSON.parse(localStorage.getItem('profile Details IDs'))
    obj[field]=id2
    console.log('hiuy')
    localStorage.setItem('profile Details IDs',JSON.stringify(obj))
    element.style.display='none'
    console.log(element.nextElementSibling)
    element.nextElementSibling.style.display='inline-block'
}

function revert(element,field,id1,id2){
    let user=JSON.parse(localStorage.getItem('currentUser'))
    
    element.previousElementSibling.style.display='inline-block'

    document.getElementById(id1).style.display='inline-block'
    document.getElementById(id1).innerText=user[field]
    document.getElementById(id2).style.display='none'
    element.style.display='none'
}

//Make a global array or in localStorage an array for storing input fields data or if it is not made on i.e. .style.display='inline' through editprofile.js then store span i.e. profile-..data in it.