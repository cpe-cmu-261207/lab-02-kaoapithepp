let subjName = document.querySelector('#subjName');
let subjCode = document.querySelector('#subjCode');
let gradeLet = document.querySelector('#gradeLet');
let semesterSel = document.querySelector('#semesterSel');

let gpax = document.querySelector('#GPAX');
let gpat1 = document.querySelector('#GPAT1');
let gpat2 = document.querySelector('#GPAT2');
let subjCounter = 0;
let gOutput = 0;

let btnAdd = document.querySelector('#btnAdd');

function subjectDisplay() {
    let name = subjName.value;
    let code = subjCode.value;
    let grade = gradeLet.value;
    let semester = semesterSel.value;

    let outputHtml = '';
    outputHtml += '<tr>';
    outputHtml += '<td>' + name + '</td>';
    outputHtml += '<td>' + code + '</td>';
    outputHtml += '<td>' + grade + '</td>';
    outputHtml += '<td>' + semester + '</td>';
    outputHtml += '</tr>';

    document.querySelector('#outputTb').innerHTML += outputHtml;
    gradeDisplay();
}

function gradeDisplay() {
    let gLetter = gradeLet.value;
    

    if(gLetter === 'A')         gOutput += 4.00;
    else if(gLetter === 'B+')   gOutput += 3.50;
    else if(gLetter === 'B')    gOutput += 3.00;
    else if(gLetter === 'C+')   gOutput += 2.5;
    else if(gLetter === 'C')    gOutput += 2.00;
    else if(gLetter === 'D+')   gOutput += 1.50;
    else if(gLetter === 'D')    gOutput += 1.00;
    else if(gLetter === 'F')    gOutput += 0;
    else alert('Please only insert letter A to F');

    subjCounter++;

    console.log(subjCounter);
        
    gpax.innerHTML = (gOutput/subjCounter).toFixed(2);
    gpat1.innerHTML = gOutput;
    gpat2.innerHTML = gOutput;
}



btnAdd.addEventListener('click', subjectDisplay);
