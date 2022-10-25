function logout(){
    localStorage.setItem('Logged','no')
    localStorage.removeItem('currentUser')
    document.getElementsByClassName('upload')[0].style.display='none'
    for(let i of document.getElementsByClassName('file-address')){
        i.setAttribute('href','')
    }
    document.getElementById('sign').style.display='block'
    document.getElementById('log').style.display='block'
    document.getElementById('logout').style.display='none'
}