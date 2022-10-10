function validateChanges(){
    let obj=JSON.parse(localStorage.getItem('profile Details IDs'))
    let err=false;
    console.log(document.getElementById(obj.firstName).value,obj.firstName)
    let fName=document.getElementById(obj.firstName).value;
    let lName=document.getElementById(obj.lastName).value;
    let clas=document.getElementById(obj.classInput).value;
    let sect=document.getElementById(obj.section).value;
    let mail=document.getElementById(obj.email).value;
    let phone=document.getElementById(obj.phone).value;
    // console.log(phone)
    if(fName==undefined){
    }
    else if(fName.length==0){
        err=true;
    }
    if(lName==undefined){
    }
    else if(lName.length==0){
        err=true;
    }
    if(clas && clas>=9 && clas<=12){
        // Nothing to do
    }
    else if(clas==undefined){

    }
    else{
        err=true;
    }
    if(sect && (sect=='A' || sect=='a' || sect=='B' || sect=='b' || sect=='C' || sect=='c' || sect=='D' || sect=='d' || sect=='E' || sect=='e')){
        // Nothing to do
    }
    else if(sect==undefined){
        
    }
    else{
        err=true;
    }
    if(mail && mail.includes('@') && mail.includes('.') && mail.length-mail.lastIndexOf('.')>=3 &&
    mail.indexOf('@')!=0 && mail.indexOf('.')-mail.indexOf('@')>=2 && mail.indexOf('@')==mail.lastIndexOf('@') && (localStorage.getItem('Data')==null || !JSON.parse(localStorage.getItem('Data')).find((user) => user.mail===mail))){
        // Nothing to do
    }
    else if(mail==undefined){
        
    }
    else{
        err=true;
    }
    if(phone && phone.length==10 && (parseInt(phone, 10)).toString().length==10 && (localStorage.getItem('Data')==null || !JSON.parse(localStorage.getItem('Data')).find((user) => user.phone===phone))){
        // Nothing to do
    }
    else if(phone==undefined){
        
    }
    else{
        err=true;
    }
    if(err==true){
        alert('Please enter valid details')
    }
    else{
        saveProfile([{id:'fname-input',val:'firstName'},{id:'lname-input',val:'lastName'},
        {id:'class-input',val:'classInput'},
        {id:'section-input',val:'section'},
        {id:'email-input',val:'email'},
        {id:'phone-input',val:'phone'}])
    }
}