let list = document.querySelector('ul');

let todos;
function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        toLocal();
    } else if (ev.target.tagName === "SPAN") {
        let div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == "") {
        alert("Введіть вашу справу!");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal()
}

if (localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}





var today = new Date();  
    var currYearTxt = document.querySelector('.currYear');
    var currMonthTxt = document.querySelector('.currMonth');
    var currDayTxt = document.querySelector('.currDay');
    var currDay = today.getDate();
    var currMonth = today.getMonth();
    var currYear = today.getFullYear();
    var monthes = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    var weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
    var maxMonth = monthes.length;
    var maxWeekDays = weekDays.length;
    var currWeekDay = today.getDay();
    var tableTbody = document.querySelector('.table');
    
    
    for (var i = 0; i < maxMonth;  i++) {
        currMonthTxt.textContent = monthes[currMonth];
        
    }
    for (var i = 0; i < maxWeekDays;  i++) {
        
        if (currWeekDay === 0) {
            currWeekDay = 6;
        }
       
            currDayTxt.textContent = currDay + ' ' + weekDays[currWeekDay-1];     
        
    }
    var firstDay = (new Date(currYear, currMonth, 1));
    var firstDayWeek = firstDay.getDay();
    var next;
    currYearTxt.textContent = currYear;
   
    var t = firstDayWeek - 1;
    if ( t < 0 ) {
        t = 6;
    }
    function createTable() {     
        
        var a = 0;
        
        while (firstDay.getMonth() == currMonth) {
            var tr = document.createElement('tr'); 
            var i = 0;              
            while (i < 7  ) {
                    var td = document.createElement('td');                                    
                    if (a == 0) {                     
                        if (i < t) {
                            td.innerHTML = ' ';
                        } else {
                            td.innerHTML = firstDay.getDate();
                            firstDay.setDate(firstDay.getDate() + 1);
                        }
                    } else {                                          
                            if ( next > currMonth) {

                                break;
                            }
                            td.innerHTML = firstDay.getDate();                
                            firstDay.setDate(firstDay.getDate() + 1);
                            next = firstDay.getMonth(); 
                    }                             
                    tr.appendChild(td);
                    i++;           
                }                  
            tableTbody.appendChild(tr);
            a++;          
        }      
    }
    
    createTable();  


    function showCurrentTime(){
        var currDate = new Date();
        var hours = currDate.getHours();
        var minutes = currDate.getMinutes();
        var seconds = currDate.getSeconds();
        if (minutes <= 9) {
         minutes = "0" + minutes;
        }
        if (seconds <= 9) {
         seconds = "0" + seconds;
        }
        document.Clock.timer.value = hours + ":" + minutes + ":" + seconds;
        setTimeout("showCurrentTime()", 1000);
       }
       showCurrentTime();