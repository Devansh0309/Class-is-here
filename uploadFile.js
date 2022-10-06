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
        img.setAttribute('src',fileAddress)
        list.setAttribute('type','none')
        fileLink.innerText='Open'
        fileLink.addEventListener('click',isLogged(fileLink,fileAddress))

        list.innerHTML=`
        <li>Class:${currentUser.classInput}</li>
        <li>Section:${currentUser.section}</li>
        <li>Submitted By:${currentUser.firstName}   ${currentUser.lastName}</li>
        <li>Subject:${subject}</li>
        <li>Material:${material}</li>`
        buttons.append(fileLink,editButton,closeButton)
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
            class:currentUser.classInput,
            section:currentUser.section,
            name:currentUser.firstName+currentUser.lastName,
            subject:subject,
            material:material,
            link:fileAddress
        })
        localStorage.setItem('cards',JSON.stringify(cards))

        //close/delete button for subject card uploaded
        closeButton.addEventListener('click',()=>{
            console.log('hello bhai')
            if(localStorage.getItem('Logged')=='yes'){
                console.log(card.id,cards[card.id])
                document.getElementById(cards[card.id].subject).children.item(1).removeChild(card)
                let cardDivs=document.getElementsByClassName('subject-card')
                for(let i=card.id;i<cardDivs.length;i++){
                    cardDivs[i].id--
                }
                cards.splice(card.id,1)
                imageAddr.splice(card.id,1)
                localStorage.setItem('cards',JSON.stringify(cards))
                localStorage.setItem('Image Address',JSON.stringify(imageAddr))
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