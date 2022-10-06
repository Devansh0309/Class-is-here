function isLogged(link,fileKey){
    // console.log(link)
    if(localStorage.getItem('Logged')=='yes'){
    
        // link.setAttribute('href',JSON.parse(localStorage.getItem('Image Address'))[fileKey])
        link.addEventListener('click',()=>{window.location.href=fileKey})
       
    }
    else{
        //popup with alert and direct to signup/login
        document.getElementById('popup').style.display='block'
        document.body.style.opacity='0.5'
        
        // document.getElementById('popup').style.opacity='1'
         
        link.setAttribute('href','')
    }
}