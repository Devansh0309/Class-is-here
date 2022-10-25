function render(){
    hindiList.innerHTML=''
    englishList.innerHTML=''
    mathsList.innerHTML=''
    physicsList.innerHTML=''
    bioList.innerHTML=''
    let subjectCards=JSON.parse(localStorage.getItem('cards'))
    let subject=document.getElementById('subject').value
    let material=document.getElementById('class-material').value
    if(subjectCards){
        if(subject!='Subject..'){
            console.log(subjectCards[0])
            document.getElementById(subject).style.display='block'
            for (let option of document.getElementById("subject").options){
                if(option.value!=subject && option.value!='Subject..'){
                    document.getElementById(option.value).style.display='none'
                }
            }
        }
        else{
            for (let option of document.getElementById("subject").options){
                if(option.value!='Subject..'){
                document.getElementById(option.value).style.display='block'
            }
        }
        
    }
        
    for(let index=0;index<subjectCards.length;index++){
            if(localStorage.getItem('Logged')=='no'){
                console.log('ni')
                if(subject=='Subject..' && material=='Class Material..'){
                    createCard(subjectCards,index)
                }
                else if(material=='Class Material..' && subjectCards[index].subject==subject){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && subjectCards[index].material==material){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && subjectCards[index].material==material){
                    createCard(subjectCards,index)
                }
            }
            else if(subjectCards[index].class==JSON.parse(localStorage.getItem('currentUser')).classInput && subjectCards[index].section==JSON.parse(localStorage.getItem('currentUser')).section){
                console.log('you are inside')
                if(subject=='Subject..' && material=='Class Material..'){
                    createCard(subjectCards,index)
                }
                else if(material=='Class Material..' && subjectCards[index].subject==subject){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && subjectCards[index].material==material){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && subjectCards[index].material==material){
                    createCard(subjectCards,index)
                }
            }
        }
    }
}

function createCard(subjectCards,index){
    let ele=subjectCards[index]
    let card=document.createElement('div')
    let buttons=document.createElement('div')
    let closeButton=document.createElement('button')
    
    let editButton=document.createElement('button')
    let img=document.createElement('img')
    let list=document.createElement('ul')
    let fileLink=document.createElement('button')
    let currentUser=JSON.parse(localStorage.getItem('currentUser'))
    
    card.className='subject-card'
    buttons.className='card-buttons'
    fileLink.className='file-address'
    closeButton.className='close-button'
    editButton.className='edit-button'

    closeButton.innerText='X'
    closeButton.setAttribute('type','button')
    editButton.innerText='Make Changes'
    editButton.setAttribute('type','button')
    img.setAttribute('alt','not found')
    img.setAttribute('src',ele.link)
    list.setAttribute('type','none')
    fileLink.innerText='Open'
    fileLink.addEventListener('click',isLogged(fileLink,ele.link))
    
    
    list.innerHTML=`
    <li>Class:${ele.class}</li>
    <li>Section:${ele.section}</li>
    <li>Submitted By:${ele.name}</li>
    <li>Subject:${ele.subject}</li>
    <li>Material:${ele.material}</li>`
    // list.appendChild(fileLink)
    buttons.append(fileLink,editButton,closeButton)
    card.append(buttons,img,list)
    card.setAttribute('id',index)
    
    if(ele.subject=='Hindi'){
        hindiList.insertBefore(card,hindiList.firstChild)
    }
    else if(ele.subject=='English'){
        englishList.insertBefore(card,englishList.firstChild)
    }
    else if(ele.subject=='Mathematics'){
        mathsList.insertBefore(card,mathsList.firstChild)
    }
    else if(ele.subject=='Physics'){
        physicsList.insertBefore(card,physicsList.firstChild)
    }
    else{
        bioList.insertBefore(card,bioList.firstChild)
    } 

    //close/delete button for subject card uploaded
    closeButton.addEventListener('click',()=>{
        let ans=confirm('Want to delete this file?')
        if(localStorage.getItem('Logged')=='yes' && ele.email===currentUser.email && ans===true){
            document.getElementById(ele.subject).children.item(1).removeChild(card)
            let cardDivs=document.getElementsByClassName('subject-card')
            console.log(cardDivs)
            for(let i=0;i<cardDivs.length-card.id;i++){
                cardDivs[i].id--
            }
            let imgAddr=JSON.parse(localStorage.getItem('Image Address'))
            subjectCards.splice(card.id,1)
            imgAddr.splice(card.id,1)
            localStorage.setItem('cards',JSON.stringify(subjectCards))
            localStorage.setItem('Image Address',JSON.stringify(imgAddr))
        }
        else if(localStorage.getItem('Logged')=='no'){
            alert('SignUp-->LogIn to make changes!')
            document.getElementById('popup').style.display='block'
            document.body.style.opacity='0.5'
        }
        else if(ele.email!==currentUser.email){
            alert('Not a vlaid person to delete this file!')
        }
    })
    
}