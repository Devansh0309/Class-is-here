const hindi={}
document.getElementsByClassName('upload')[0].style.display='none'
let subject;
let material;
let classes;
let section;
function showUpload(){
    console.log('hello inside showupload')
    subject=document.getElementById('subject').value;
    material=document.getElementById('class-material').value;
    classes=document.getElementById('classes').value;
    section=document.getElementById('section').value;
    if(subject!='Subject..' && material!='Class Material..' && classes!='Class..' && section!='Section..'){
        document.getElementsByClassName('upload')[0].style.display='block'
    }
    else{
        document.getElementsByClassName('upload')[0].style.display='none'
    }
}



