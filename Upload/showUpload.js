// document.getElementsByClassName('upload')[0].style.display='none'
document.getElementById('add-material').style.display='none'
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
    if(subject && subject!='Subject..' &&  material && material!='Class Material..' && classes && classes!='Class..' && section &&  section!='Section..'){
        document.getElementById('upload-button').style.display='none'
        document.getElementById('add-material').style.display='block'
        // document.getElementsByClassName('upload')[0].style.display='block'
    }
    else{
        document.getElementById('upload-button').style.display='block'
        document.getElementById('add-material').style.display='none'
        alert('You must select class, section, subject and material type to upload')
        // document.getElementsByClassName('upload')[0].style.display='none'
    }
}



