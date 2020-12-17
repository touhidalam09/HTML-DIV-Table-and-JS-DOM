
console.log("JS !!");

// for Body AppendChild,  return className
function createDivParantBody(...args) {
    let div = document.createElement(args[0]);
    div.classList.add(args[1]);
    let parantDiv = document.body.appendChild(div);
    return parantDiv;
}
//Create DIV-- Tag Elements,  return className
function createDiv(...args) {

    //creating div, center, table, tr, td
    let tagName = document.createElement(args[0]);
    tagName.classList.add(args[1]);
    
    if (args[0] === 'h2') {

        tagName.innerHTML = args[3];
    }
    if (args[0] === 'img') {

        tagName.src = args[3];
        tagName.alt = "no image";
    }
    if (args[0] === 'a') {

        var link = document.createTextNode(args[4]);
        tagName.appendChild(link);
        tagName.href = args[3];
    }
    if (args[0] === 'td') {
        tagName.valign = args[3];
    }
    if (args[0] === 'label') {
        tagName.htmlFor = args[3];
        tagName.innerHTML = args[4];
    }
    if (args[0] === 'input') {
        tagName.type = args[3];
        tagName.id = args[4];
        tagName.name = args[5];
        tagName.value = args[6];
    }
    if (args[0] === 'p') {
        tagName.innerHTML = args[3];
    }
    let parantDiv = args[2].appendChild(tagName);
    return parantDiv;

}


//parameters tagName, className , parant Element
let container = createDivParantBody('div', 'container');
//header
let header = createDiv('div', 'header', container);
let logo = createDiv('div', 'logo', header);
let logoImg = createDiv('img', 'logo-img', logo, 'img/tomcat.png');
let companyName = createDiv('div', 'company-name', header);
let h2BrandName = createDiv('h2', 'brand-name', companyName, 'Swapnoloke');

//main body
let body = createDiv('div', 'body', container);
//body Menu bar
let menuBar = createDiv('div', 'menu-bar', body);
var hrefLink = [
    'index.php',
    'designWithJs.php',
    'form.php',
    'formWithJS.php',
    'mainIndex.php',
    'about.php',
    '#',
    '#'
];
//follow variable hrefLink Array to exact link naming
var btnName = [
    'Home Div',
    'home Div JS',
    'Form Table',
    'Form Table JS',
    'File Include',
    'About',
    'LogOut',
    'Contract'
];
var btnAnchotTag = [];
for (let i = 0; i<8; i++) {
    btnAnchotTag[i] = createDiv('a', 'btn', menuBar, hrefLink[i], btnName[i]);
}


//Body Form
let formBodyDiv = createDiv('div', 'form-body-div', body);
let h2FormTitle = createDiv('h2', 'form-title', formBodyDiv, 'Form');
let inputBodyDiv = createDiv('div', 'all-intype-div', formBodyDiv);
let centerBodyDiv = createDiv('center', 'center-body-div', inputBodyDiv);
//table start
let table = createDiv('table', 'input-table', centerBodyDiv);
let tableBody = createDiv('tbody', 'table-body', table);
//create rows

var numberOfRows = [];
var numberOfCols = [];
for (let i = 0; i < 10; i++) {
    numberOfRows[i] = createDiv('tr', 'table-row', tableBody);
    for (let j = 0; j < 2; j++) {
        numberOfCols[[i, j]] = createDiv('td', 'col', numberOfRows[i], 'center');

    }
}
createDiv('label', 'label', numberOfCols[[0, 0]], 'userName', 'User Name:');
createDiv('input', 'userinput', numberOfCols[[0, 1]], 'text', 'userName', 'user_Name', '')

createDiv('label', 'label', numberOfCols[[01, 0]], 'fatherName', `Father's Name:`);
createDiv('input', 'userinput', numberOfCols[[1, 1]], 'text', 'fatherName', 'father_Name', '')

createDiv('label', 'label', numberOfCols[[2, 0]], 'motherName', `Mother's Name:`);
createDiv('input', 'userinput', numberOfCols[[2, 1]], 'text', 'motherName', 'mother_Name', '')

createDiv('label', 'label', numberOfCols[[3, 0]], 'email', 'Email:');
createDiv('input', 'userinput', numberOfCols[[3, 1]], 'email', 'email', 'email', '')

createDiv('label', 'label', numberOfCols[[4, 0]], 'password', 'Password:');
createDiv('input', 'userinput', numberOfCols[[4, 1]], 'password', 'password', 'password', '');

createDiv('label', 'label', numberOfCols[[5, 0]], 'gender', 'Gender:');
numberOfCols[[5, 1]].innerHTML="<input type='radio' id='gender' name='gender' value='Male'> Male <input type='radio' id='gender' name='gender' value='Female'> Female";

createDiv('label', 'label', numberOfCols[[6, 0]], 'mcq', 'Coding ??');
numberOfCols[[6, 1]].innerHTML="<input type='checkbox' id='mcq' name='mcq' value='Like'> Like <input type='checkbox' id='mcq' name='mcq' value='Copy Paste'> Copy Paste";

createDiv('label', 'label', numberOfCols[[7, 0]], 'skillVolume', 'Skill:');
createDiv('input', 'userinput', numberOfCols[[7, 1]], 'range', 'skillVolume', 'skillVolume', '')

createDiv('label', 'label', numberOfCols[[8, 0]], 'birthday', 'Birthday:');
createDiv('input', 'userinput', numberOfCols[[8, 1]], 'date', 'birthday', 'birthday', '')

createDiv('label', 'label', numberOfCols[[9, 0]], 'time', 'Select Time:');
createDiv('input', 'userinput', numberOfCols[[9, 1]], 'time', 'time', 'time', '')
// //footer
let footer = createDiv('div', 'div-footer', container);
let footerP = createDiv('p', 'footer-para', footer, 'CopyRight &copy; SwapnoLoke 2020');

