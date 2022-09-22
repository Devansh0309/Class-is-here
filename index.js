// import {currentUser} from './signup-login.js'
const imageAddr={}
document.getElementsByClassName('upload')[0].style.display='none'
let subject;
let material;
function showUpload(){
    subject=document.getElementById('subject').value;
    material=document.getElementById('class-material').value;
    if(subject!='Subject..' && material!='Class Material..'){
        document.getElementsByClassName('upload')[0].style.display='block'
    }
    else{
        document.getElementsByClassName('upload')[0].style.display='none'
    }
}

function isLogged(link){
    console.log(link)
    if(localStorage.getItem('Logged')=='yes'){
        link.setAttribute('href',JSON.parse(localStorage.getItem('Image Address')).file)
    }
    else{
        alert('Signup if new user and then Login first or Login if old user!')
    }
}

function logout(){
    localStorage.setItem('Logged','no')
    localStorage.removeItem('currentUser')
    for(let i of document.getElementsByClassName('file-address')){
        i.setAttribute('href','')
        console.log(i)
        // hindiList.re
    }
}

let hindiList=document.getElementById('hindi-list')

function upload(file){
    if(localStorage.getItem('Logged')=='yes'){
        // console.log(currentUser)
        let fileAddress=file.value
        imageAddr.file=fileAddress
        localStorage.setItem('Image Address',JSON.stringify(imageAddr))
        let card=document.createElement('div')
        let img=document.createElement('img')
        let list=document.createElement('ul')
        let fileLink=document.createElement('a')
        let currentUser=JSON.parse(localStorage.getItem('currentUser'))

        card.className='hindi-card'
        fileLink.className='file-address'

        img.setAttribute('alt','not found')
        img.setAttribute('src',fileAddress)
        list.setAttribute('type','none')
        console.log(fileLink)
        fileLink.innerText='Click to Open'
        fileLink.addEventListener('click',isLogged(fileLink))
        console.log(fileLink.href)
        list.innerHTML=`
        <li>Class:${currentUser.classInput}</li>
        <li>Section:${currentUser.section}</li>
        <li>Submitted By:${currentUser.firstName} ${currentUser.lastName}</li>
        <li>Subject:${document.getElementById("subject").value}</li>
        <li>Material:${document.getElementById('class-material').value}</li>
        <li><a href=${fileLink.href} alt="none">Click to Open</a></li>`
        card.append(img,list)
        hindiList.insertBefore(card,hindiList.firstChild)
    }
    else{
        alert('Signup if new user and then Login first or Login if old user!')
    }
    
    // <li>Date:${Date}</li>
}
