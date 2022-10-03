function isLogged(link,fileKey){
    console.log(link)
    if(localStorage.getItem('Logged')=='yes'){
        link.setAttribute('href',JSON.parse(localStorage.getItem('Image Address'))[fileKey])
    }
    else{
        //popup with alert and direct to signup/login
        document.getElementById('popup').style.display='block'
        document.body.style.opacity='0.5'
        
        // document.getElementById('popup').style.opacity='1'
        // window.location.assign('LogIn.html')
        link.setAttribute('href','')
    }
}