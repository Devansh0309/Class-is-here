function editProfile(field,id1,id2){
    document.getElementById(id1).style.display='none'
    document.getElementById(id2).style.display='inline-block'
    let obj=JSON.parse(localStorage.getItem('profile Details IDs'))
    obj[field]=id2
    console.log('hiuy')
    localStorage.setItem('profile Details IDs',JSON.stringify(obj))
}

//Make a global array or in localStorage an array for storing input fields data or if it is not made on i.e. .style.display='inline' through editprofile.js then store span i.e. profile-..data in it.