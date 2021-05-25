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