let subjName = document.querySelector('#subjName');
let subjCode = document.querySelector('#subjCode');
let gradeLet = document.querySelector('#gradeLet');
let semesterSel = document.querySelector('#semesterSel');

let gpax = document.querySelector('#GPAX');
let gpat1 = document.querySelector('#GPAT1');
let gpat2 = document.querySelector('#GPAT2');
let subjCounter = 0;
let gOutput = 0;
let t1Out = 0;
let t2Out = 0;
let t1Cnt = 0;
let t2Cnt = 0;

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
    let termSel = semesterSel.value;

    if(gLetter === 'A')         gOutput += 4.00;
    else if(gLetter === 'B+')   gOutput += 3.50;
    else if(gLetter === 'B')    gOutput += 3.00;
    else if(gLetter === 'C+')   gOutput += 2.5;
    else if(gLetter === 'C')    gOutput += 2.00;
    else if(gLetter === 'D+')   gOutput += 1.50;
    else if(gLetter === 'D')    gOutput += 1.00;
    else if(gLetter === 'F')    gOutput += 0;
    else alert('Please only insert letter A to F');

    if (termSel === '1') {
        if(gLetter === 'A')         t1Out += 4.00, t1Cnt++;
        else if(gLetter === 'B+')   t1Out += 3.50, t1Cnt++;
        else if(gLetter === 'B')    t1Out += 3.00, t1Cnt++;
        else if(gLetter === 'C+')   t1Out += 2.5,  t1Cnt++;
        else if(gLetter === 'C')    t1Out += 2.00, t1Cnt++;
        else if(gLetter === 'D+')   t1Out += 1.50, t1Cnt++;
        else if(gLetter === 'D')    t1Out += 1.00, t1Cnt++;
        else if(gLetter === 'F')    t1Out += 0,    t1Cnt++;
        else ;
    } else if (termSel === '2') {
        if(gLetter === 'A')         t2Out += 4.00, t2Cnt++;
        else if(gLetter === 'B+')   t2Out += 3.50, t2Cnt++;
        else if(gLetter === 'B')    t2Out += 3.00, t2Cnt++;
        else if(gLetter === 'C+')   t2Out += 2.5,  t2Cnt++;
        else if(gLetter === 'C')    t2Out += 2.00, t2Cnt++;
        else if(gLetter === 'D+')   t2Out += 1.50, t2Cnt++;
        else if(gLetter === 'D')    t2Out += 1.00, t2Cnt++;
        else if(gLetter === 'F')    t2Out += 0,    t2Cnt++;
        else ;
    }
    

    subjCounter++;

    console.log(subjCounter);
        
    gpax.innerHTML = (gOutput/subjCounter).toFixed(2);
    gpat1.innerHTML = (t1Out/t1Cnt).toFixed(2);
    gpat2.innerHTML = (t2Out/t2Cnt).toFixed(2);
}



btnAdd.addEventListener('click', subjectDisplay);
