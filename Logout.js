function logout(){
    localStorage.setItem('Logged','no')
    localStorage.removeItem('currentUser')
    document.getElementsByClassName('upload')[0].style.display='none'
    for(let i of document.getElementsByClassName('file-address')){
        i.setAttribute('href','')
    }
}