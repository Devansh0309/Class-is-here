function render(){
    hindiList.innerHTML=''
    englishList.innerHTML=''
    mathsList.innerHTML=''
    physicsList.innerHTML=''
    bioList.innerHTML=''
    let subjectCards=JSON.parse(localStorage.getItem('cards'))
    let subject=document.getElementById('subject').value
    let material=document.getElementById('class-material').value
    let classes=document.getElementById('classes').value;
    let section=document.getElementById('section').value;
    if(localStorage.getItem('Logged')=='yes'){
        document.getElementById('sign').style.display='none'
        document.getElementById('log').style.display='none'
        document.getElementById('logout').style.display='block'
        document.getElementById('profile').style.display='block'
    }
    else{
        document.getElementById('sign').style.display='block'
        document.getElementById('log').style.display='block'
        document.getElementById('logout').style.display='none'
        document.getElementById('profile').style.display='none'
    }
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
                if(subject=='Subject..' && material=='Class Material..' && classes=='Class..' && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && material=='Class Material..' && classes=='Class..' && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && material=='Class Material..' && classes==subjectCards[index].class &&
                section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && material=='Class Material..' && classes==subjectCards[index].class && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && subjectCards[index].material==material && classes=='Class..' && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && subjectCards[index].material==material && classes=='Class..' && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && subjectCards[index].material==material && classes==subjectCards[index].class && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subject=='Subject..' && subjectCards[index].material==material && classes==subjectCards[index].class &&
                section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && material=='Class Material..' && classes=='Class..' && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && material=='Class Material..' && classes=='Class..' && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && material=='Class Material..' && classes==subjectCards[index].class && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && material=='Class Material..' && classes==subjectCards[index].class && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && subjectCards[index].material==material && classes=='Class..' && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && subjectCards[index].material==material && classes=='Class..' && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && subjectCards[index].material==material && classes==subjectCards[index].class && section=='Section..'){
                    createCard(subjectCards,index)
                }
                else if(subjectCards[index].subject==subject && subjectCards[index].material==material && classes==subjectCards[index].class && section==subjectCards[index].section){
                    createCard(subjectCards,index)
                }
        }
    }
}

function createCard(subjectCards,index){
    console.log('hi')
    let ele=subjectCards[index]
    let card=document.createElement('div')
    let buttons=document.createElement('div')
    let closeButton=document.createElement('button')
    
    let edit=document.createElement('div')
    let editClass=document.createElement('select')
    let editSection=document.createElement('select')
    let editSubject=document.createElement('select')
    let editMaterial=document.createElement('select')
    let img=document.createElement('img')
    let list=document.createElement('ul')
    let fileLink=document.createElement('button')
    let currentUser=JSON.parse(localStorage.getItem('currentUser'))
    
    card.className='subject-card'
    buttons.className='card-buttons'
    fileLink.className='file-address'
    closeButton.className='close-button'
    edit.className='edit'
    editClass.className='edit-button'
    editSection.className='edit-button'
    editSubject.className='edit-button'
    editMaterial.className='edit-button'

    closeButton.innerText='X'
    closeButton.setAttribute('type','button')

    editClass.innerHTML='<option>Class</option><option>9</option><option>10</option><option>11</option><option>12</option>'
        
    editSection.innerHTML='<option>Section</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option>'

    editSubject.innerHTML='<option>Subject</option><option>Hindi</option><option>English</option><option>Mathematics</option><option>Physics</option><option>Biology</option>'

    editMaterial.innerHTML='<option>Material</option><option>Practice Paper</option><option>Previous year papers</option><option>Notes</option><option>Classwork</option><option>Homework</option>'

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
    edit.append(editClass,editSection,editSubject,editMaterial)
    buttons.append(fileLink,edit,closeButton)
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

    //Edit to enable make changes in subject, material type and can change file by uploading again.

    editClass.addEventListener('change',()=>{

        if(localStorage.getItem('Logged')=='yes' && subjectCards[card.id].email===currentUser.email && editClass.value!='Class'){
            document.getElementById(card.id).children.item(2).children.item(0).innerText=`Class: ${editClass.value}`
            subjectCards[card.id].class=editClass.value
            localStorage.setItem('cards',JSON.stringify(subjectCards))
            card.children.item(2).children.item(0).innerText=`Class: ${editClass.value}`
        }
        else if(editClass.value=='Class'){
            alert('Select valid class to make change!')
        }
        else{
            alert('SignUp-->LogIn to make changes!')
            document.getElementById('popup').style.display='block'
            document.body.style.opacity='0.5'
        }
    })

    editSection.addEventListener('change',()=>{

        if(localStorage.getItem('Logged')=='yes' && subjectCards[card.id].email===currentUser.email && editSection.value!='Section'){
            document.getElementById(card.id).children.item(2).children.item(1).innerText=`Section: ${editSection.value}`
            subjectCards[card.id].section=editSection.value
            localStorage.setItem('cards',JSON.stringify(subjectCards))
            card.children.item(2).children.item(1).innerText=`Section: ${editSection.value}`
        }
        else if(editSection.value=='Section'){
            alert('Select valid section to make change!')
        }
        else{
            alert('SignUp-->LogIn to make changes!')
            document.getElementById('popup').style.display='block'
            document.body.style.opacity='0.5'
        }
    })

    editSubject.addEventListener('change',()=>{

        if(localStorage.getItem('Logged')=='yes' && subjectCards[card.id].email===currentUser.email && editSubject.value!='Subject'){
            document.getElementById(card.id).children.item(2).children.item(3).innerText=`Subject: ${editSubject.value}`
            subjectCards[card.id].subject=editSubject.value
            localStorage.setItem('cards',JSON.stringify(subjectCards))
            card.children.item(2).children.item(3).innerText=`Subject: ${editSubject.value}`
        }
        else if(editSubject.value=='Subject'){
            alert('Select valid subject to make change!')
        }
        else{
            alert('SignUp-->LogIn to make changes!')
            document.getElementById('popup').style.display='block'
            document.body.style.opacity='0.5'
        }
    }) 

    editMaterial.addEventListener('change',()=>{

        if(localStorage.getItem('Logged')=='yes' && subjectCards[card.id].email===currentUser.email && editMaterial.value!='Material'){
            document.getElementById(card.id).children.item(2).children.item(4).innerText=`Material: ${editMaterial.value}`
            subjectCards[card.id].material=editMaterial.value
            localStorage.setItem('cards',JSON.stringify(subjectCards))
            card.children.item(2).children.item(4).innerText=`Material: ${editMaterial.value}`
        }
        else if(editMaterial.value=='Material'){
            alert('Select valid Material to make changes!')
        }
        else{
            alert('SignUp-->LogIn to make changes!')
            document.getElementById('popup').style.display='block'
            document.body.style.opacity='0.5'
        }
    }) 
    
}