let hindiList=document.getElementById('hindi-list')
let englishList=document.getElementById('english-list')
let mathsList=document.getElementById('maths-list')
let physicsList=document.getElementById('physics-list')
let bioList=document.getElementById('bio-list')
let cards=[]
let imageAddr=[]

function upload(file){
    let fileAddress=file.value
    if(localStorage.getItem('Image Address')){
        imageAddr=JSON.parse(localStorage.getItem('Image Address'))
    }
    if(localStorage.getItem('Logged')=='yes' && !imageAddr.includes(fileAddress)){
        imageAddr.push(fileAddress)
        localStorage.setItem('Image Address',JSON.stringify(imageAddr))
        // console.log(currentUser)
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
        img.setAttribute('src',fileAddress)
        list.setAttribute('type','none')
        fileLink.innerText='Open'
        fileLink.addEventListener('click',isLogged(fileLink,fileAddress))

        list.innerHTML=`
        <li>Class:${classes}</li>
        <li>Section:${section}</li>
        <li>Submitted By:${currentUser.firstName}   ${currentUser.lastName}</li>
        <li>Subject:${subject}</li>
        <li>Material:${material}</li>`
        edit.append(editClass,editSection,editSubject,editMaterial)
        buttons.append(fileLink,edit,closeButton)
        card.append(buttons,img,list)

        if(subject!='Subject..'){
            document.getElementById(subject).style.display='block'
            for (let option of document.getElementById("subject").options){
                if(option.value!=subject && option.value!='Subject..'){
                    document.getElementById(option.value).style.display='none'
                }
            }
        }
        else{
            for (let option of document.getElementById("subject").options){
                document.getElementById(option.value).style.display='block'
            }
        }
        if(subject=='Hindi'){
            hindiList.insertBefore(card,hindiList.firstChild)
            document.getElementById('Hindi').style.display='block'
        }
        else if(subject=='English'){
            englishList.insertBefore(card,englishList.firstChild)
            document.getElementById('English').style.display='block' 
        }
        else if(subject=='Mathematics'){
            mathsList.insertBefore(card,mathsList.firstChild)
            document.getElementById('Mathematics').style.display='block'
        }
        else if(subject=='Physics'){
            physicsList.insertBefore(card,physicsList.firstChild)
            document.getElementById('Physics').style.display='block'
        }
        else{
            bioList.insertBefore(card,bioList.firstChild)
            document.getElementById('Biology').style.display='block'
        }
        if(localStorage.getItem('cards')){
            cards=JSON.parse(localStorage.getItem('cards'))
        }
        card.setAttribute('id',`${cards.length>0?cards.length:0}`)

        cards.push({
            class:classes,
            section:section,
            name:currentUser.firstName+currentUser.lastName,
            subject:subject,
            material:material,
            link:fileAddress,
            email:currentUser.email
        })
        localStorage.setItem('cards',JSON.stringify(cards))

        //close/delete button for subject card uploaded
        closeButton.addEventListener('click',()=>{
            let ans=confirm('Want to delete this file?')
            if(localStorage.getItem('Logged')=='yes' && cards[card.id].email===currentUser.email && ans===true){
                document.getElementById(cards[card.id].subject).children.item(1).removeChild(card)
                let cardDivs=document.getElementsByClassName('subject-card')
                console.log(cardDivs)
                for(let i=0;i<cardDivs.length-card.id;i++){
                    cardDivs[i].id--
                }
                cards.splice(card.id,1)
                imageAddr.splice(card.id,1)
                localStorage.setItem('cards',JSON.stringify(cards))
                localStorage.setItem('Image Address',JSON.stringify(imageAddr))
            }
            else if(localStorage.getItem('Logged')=='no'){
                alert('SignUp-->LogIn to make changes!')
                document.getElementById('popup').style.display='block'
                document.body.style.opacity='0.5'
            }
            else if(cards[card.id].email!==currentUser.email){
                alert('Not a vlaid person to delete this file!')
            }
        })

        //Edit to enable make changes in subject, material type and can change file by uploading again.

        editClass.addEventListener('change',()=>{
            if(localStorage.getItem('Logged')=='yes' && cards[card.id].email===currentUser.email && editClass.value!='Class'){
                document.getElementById(card.id).children.item(2).children.item(0).innerText=`Class: ${editClass.value}`
                cards[card.id].class=editClass.value
                localStorage.setItem('cards',JSON.stringify(cards))
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

            if(localStorage.getItem('Logged')=='yes' && cards[card.id].email===currentUser.email && editSection.value!='Section'){
                document.getElementById(card.id).children.item(2).children.item(1).innerText=`Section: ${editSection.value}`
                cards[card.id].section=editSection.value
                localStorage.setItem('cards',JSON.stringify(cards))
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

            if(localStorage.getItem('Logged')=='yes' && cards[card.id].email===currentUser.email && editSubject.value!='Subject'){
                document.getElementById(card.id).children.item(2).children.item(3).innerText=`Subject: ${editSubject.value}`
                cards[card.id].subject=editSubject.value
                localStorage.setItem('cards',JSON.stringify(cards))
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

            if(localStorage.getItem('Logged')=='yes' && cards[card.id].email===currentUser.email && editMaterial.value!='Material'){
                document.getElementById(card.id).children.item(2).children.item(4).innerText=`Material: ${editMaterial.value}`
                cards[card.id].material=editMaterial.value
                localStorage.setItem('cards',JSON.stringify(cards))
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
    else if(imageAddr && imageAddr.includes(fileAddress)){
        alert('File already uploaded, delete to reload')
    }
    else{
        document.getElementById('popup').style.display='block'
        document.body.style.opacity='0.5'
    }
}