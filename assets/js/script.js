var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));

var container = $('.container');
var start = 8;
var end = 20;
var hours = [];
var store =[];
var currentTime = moment().hour();
console.log(currentTime);

for(var i = start; i <= end; i++){
    hours[i-8] = i;
}

function render1(){
    localStorage.getItem
}

function hourEl(time){
   var a = $(`<div class="col-1 hour" id="` + time + `-hour">${time}</div>`);

   return a;
}

function textEl(time){
    var b = $(`<textarea class="col-10 text" id="` + time + `-textarea"></textarea>`);

    return b;
}

function saveEl(time){
   var c = $(`<button class="col-1 saveBtn" id="` + time + `-saveBtn"> 💾 </button>`);

   return c;
}

function timeBlocks(){
    for(var i = start; i <= end; i++){
        var hour = i + 'am';
        if(i > 12){
            hour = (i-12) + 'pm';
        }

        console.log(hour);

        var blockEl = $(`<div class="row time-block" id="` + hours[i-8] + `-hours"></div>`);
        blockEl.append(hourEl(hour));
        blockEl.append(textEl(hour));
        blockEl.append(saveEl(hour));
        container.append(blockEl);
    }
}

function colors(){
    for(var i = start; i <= end; i++){
        var temp = $('#' + i + '-hour');
        if(hours[i-8] < currentTime){
            temp.removeClass('future');
            temp.removeClass('present');
            temp.addClass('past');
        }
        else if(hours[i-8] == currentTime){
            temp.removeClass('future');
            temp.removeClass('past');
            temp.addClass('present');
        }
        else{
            temp.removeClass('past');
            temp.removeClass('present');
            temp.addClass('future');
        }
        console.log(i);
    }
}

timeBlocks();

colors();

var saveButton1 = $('#8-hour');

saveButton1.on('click', '#8am-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#8am-textarea').value;

    localStorage.setItem('store', JSON.stringify(activity));

    console.log(activity);
});

var saveButton2 = $('#9-hour');

saveButton2.on('click', '#9am-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#9am-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton3 = $('#10-hour');

saveButton3.on('click', '#10am-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#10am-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton4 = $('#11-hour');

saveButton4.on('click', '#11am-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#11am-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton5 = $('#12-hour');

saveButton5.on('click', '#12am-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#12am-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton6 = $('#13-hour');

saveButton6.on('click', '#1pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#1pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton7 = $('#14-hour');

saveButton7.on('click', '#2pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#2pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton8 = $('#15-hour');

saveButton8.on('click', '#3pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#3pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton9 = $('#16-hour');

saveButton9.on('click', '#4pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#4pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton10 = $('#17-hour');

saveButton10.on('click', '#5pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#5pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton11 = $('#18-hour');

saveButton11.on('click', '#6pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#6pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton12 = $('#19-hour');

saveButton12.on('click', '#7pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#7pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});

var saveButton13 = $('#20-hour');

saveButton13.on('click', '#8pm-saveBtn',function(event){
    event.preventDefault();

    var activity = document.querySelector('#8pm-textarea').value;

    localStorage.setItem('store', JSON.stringify(store));
});