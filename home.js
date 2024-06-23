/* Programmed by Njokuocha Francis 04/06/24 --- 09/06/2024 */
// backend code for denying/disabling access to the console/inspect section of the webpage-----
const alertDenyContainer = document.querySelector('.alert_denycontainer');
var motherPage = document.documentElement;
// disabling the right click mouse command-----
motherPage.oncontextmenu = function(event){
    event.preventDefault();
    alertDenyContainer.style.display = 'block';
}
// disabling the shortcut key for accessing the console/inspect section of the webpage-----
motherPage.onkeydown = function(event){
    // when using lowercase i
    if(event.ctrlKey && event.shiftKey && event.key === 'i'){
        // console.log("The control, shift and i key is active!")
        event.preventDefault();
        alertDenyContainer.style.display = 'block';
    }
    // when using uppercase I
    if(event.ctrlKey && event.shiftKey && event.key === 'I'){
        // console.log("The control, shift and I key is active!")
        event.preventDefault();
        alertDenyContainer.style.display = 'block';
    }
// disabling the shortcut key for accessing the source code section of the webpage-----
    // when using lowercase u
    if(event.ctrlKey && event.key === "u"){
        event.preventDefault();
        alertDenyContainer.style.display = 'block';
    }
    // when using lowercase U
    if(event.ctrlKey && event.key === "U"){
        event.preventDefault();
        alertDenyContainer.style.display = 'block';
    }
    // replacing the work of the "ok button" with the "enter button"
    if(event.key === 'Enter'){
        alertDenyContainer.style.display = 'none';
    }
}

// exiting the popup menu using the "ok button"
function exitPopupMenu(stopper){
    let parentHolder = stopper.parentElement;
    // console.log(parentHolder);
    let parentContainer = parentHolder.parentElement;
    // console.log(parentContainer);
    parentContainer.style.display = 'none';
}

// mobile nav dropdown toggle-----
function openMobileNavdrop1(dropdownHolder){
    // let dropdownTarget = dropdownHolder.lastElementChild;
    dropdownHolder.classList.toggle('open_mobiledropdown1');
    // console.log(testing);
}
function openMobileNavdrop(dropdownHolder){
    // let dropdownTarget = dropdownHolder.lastElementChild;
    dropdownHolder.classList.toggle('open_mobiledropdown');
    // console.log(testing);
}

var dropdownItem = document.getElementsByClassName("dropdown_item");
for(let i = 0; i < dropdownItem.length; i++){
    dropdownItem[i].onclick = function(event){
        event.stopPropagation();
    }
}