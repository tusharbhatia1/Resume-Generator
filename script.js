function addNewSKILL(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enlist your skills");

    let SKILLSOb = document.getElementById("SKILLS");
    let SKILLSAddBtnOb = document.getElementById("skillsAddbBtn");

    SKILLSOb.insertBefore(newNode, SKILLSAddBtnOb);
}

function addNewCF(){

    var fieldName = prompt("Field Name:");
    document.getElementById("customField").innerHTML = fieldName;

    const button = document.getElementById("custom");
    button.disabled = true;
    // button.disabled = false;

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cusfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Details");

    let CSOb = document.getElementById("CF");
    let cusAddBtnOb = document.getElementById("cusAddbBtn");

    CSOb.insertBefore(newNode, cusAddBtnOb);
}

function addNewWE(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Work Experience");

    let WEOb = document.getElementById("WE");
    let weAddBtnOb = document.getElementById("weAddbBtn");

    WEOb.insertBefore(newNode, weAddBtnOb);
}

function addNewAQ(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Educational Qualification");

    let AQOb = document.getElementById("AQ");
    let aqAddBtnOb = document.getElementById("aqAddbBtn");

    AQOb.insertBefore(newNode, aqAddBtnOb);
}

function addNewCER(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cerfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Your Certifications");

    let CEROb = document.getElementById("CER");
    let cerAddBtnOb = document.getElementById("cerAddbBtn");

    CEROb.insertBefore(newNode, cerAddBtnOb);
}

function addNewCF2(){

    var fieldName = prompt("Field Name:");
    document.getElementById("customField2").innerHTML = fieldName;

    const button = document.getElementById("custom2");
    button.disabled = true;
    // button.disabled = false;

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cusfield2');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Details");

    let CSOb = document.getElementById("CF2");
    let cusAddBtnOb = document.getElementById("cusAddbBtn2");

    CSOb.insertBefore(newNode, cusAddBtnOb);
}