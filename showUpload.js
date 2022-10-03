
const hindi={}
document.getElementsByClassName('upload')[0].style.display='none'
let subject;
let material;
function showUpload(){
    console.log('hello inside showupload')
    subject=document.getElementById('subject').value;
    material=document.getElementById('class-material').value;
    if(subject!='Subject..' && material!='Class Material..'){
        document.getElementsByClassName('upload')[0].style.display='block'
    }
    else{
        document.getElementsByClassName('upload')[0].style.display='none'
    }
}



