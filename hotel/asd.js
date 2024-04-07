mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
  });
  
  var calendar;
  var popup;
  var range;
  var oldEvent;
  var tempEvent = {};
  var deleteEvent;
  var restoreEvent;
  var colorPicker;
  var tempColor;
  var titleInput = document.getElementById('event-title');
  var descriptionTextarea = document.getElementById('event-desc');
  var allDaySwitch = document.getElementById('event-all-day');
  var freeSegmented = document.getElementById('event-status-free');
  var busySegmented = document.getElementById('event-status-busy');
  var deleteButton = document.getElementById('event-delete');
  var colorSelect = document.getElementById('event-color-picker');
  var pickedColor = document.getElementById('event-color');
  var colorElms = document.querySelectorAll('.crud-color-c');
  var datePickerResponsive = {
    medium: {
      controls: ['calendar'],
      touchUi: false,
    },
  };
  var datetimePickerResponsive = {
    medium: {
      controls: ['calendar', 'time'],
      touchUi: false,
    },
  };
  var myData = [
    {
      id: 1,
      start: '2024-04-07T13:00',
      end: '2024-04-07T15:00',
      title: "Lunch @ Butcher's",
      description: '',
      allDay: false,
      free: true,
      resource: 3,
    },
    {
      id: 2,
      start: '2024-04-07T14:00',
      end: '2024-04-07T16:00',
      title: 'General orientation',
      description: '',
      allDay: false,
      free: false,
      resource: 5,
    },
    {
      id: 3,
      start: '2024-04-07T18:00',
      end: '2024-04-07T22:00',
      title: 'Dexter BD',
      description: '',
      allDay: false,
      free: true,
      resource: 4,
    },
    {
      id: 4,
      start: '2024-04-07T10:30',
      end: '2024-04-07T13:00',
      title: 'Stakeholder mtg.',
      description: '',
      allDay: false,
      free: false,
      resource: 1,
    },
  ];
  
  var myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#ffeb3c',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#f44437',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#3f51b5',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#4baf4f',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff9900',
    },
  ];
  
  function createAddPopup(elm) {
    // hide delete button inside add popup
    deleteButton.style.display = 'none';
  
    deleteEvent = true;
    restoreEvent = false;
  
    // set popup header text and buttons for adding
    popup.setOptions({
      headerText: 'New event',
      buttons: [
        'cancel',
        {
          text: 'Add',
          keyCode: 'enter',
          handler: function () {
            calendar.updateEvent(tempEvent);
            deleteEvent = false;
            calendar.navigateToEvent(tempEvent);
            popup.close();
          },
          cssClass: 'mbsc-popup-button-primary',
        },
      ],
    });
  
    // fill popup with a new event data
    mobiscroll.getInst(titleInput).value = tempEvent.title;
    mobiscroll.getInst(descriptionTextarea).value = '';
    mobiscroll.getInst(allDaySwitch).checked = tempEvent.allDay;
    range.setVal([tempEvent.start, tempEvent.end]);
    mobiscroll.getInst(busySegmented).checked = true;
    range.setOptions({
      controls: tempEvent.allDay ? ['date'] : ['datetime'],
      responsive: tempEvent.allDay ? datePickerResponsive : datetimePickerResponsive,
    });
    selectColor(getResource(tempEvent.resource).color, true);
  
    // set anchor for the popup
    popup.setOptions({ anchor: elm });
  
    popup.open();
  }
  
  function createEditPopup(args) {
    var ev = args.event;
  
    // show delete button inside edit popup
    deleteButton.style.display = 'block';
  
    deleteEvent = false;
    restoreEvent = true;
  
    // set popup header text and buttons for editing
    popup.setOptions({
      headerText: 'Edit event',
      buttons: [
        'cancel',
        {
          text: 'Save',
          keyCode: 'enter',
          handler: function () {
            var date = range.getVal();
            var eventToSave = {
              id: ev.id,
              title: titleInput.value,
              description: descriptionTextarea.value,
              allDay: mobiscroll.getInst(allDaySwitch).checked,
              start: date[0],
              end: date[1],
              free: mobiscroll.getInst(freeSegmented).checked,
              color: ev.color,
              resource: ev.resource,
            };
            // update event with the new properties on save button click
            calendar.updateEvent(eventToSave);
            // navigate the calendar to the correct view
            calendar.navigateToEvent(eventToSave);
            restoreEvent = false;
            popup.close();
          },
          cssClass: 'mbsc-popup-button-primary',
        },
      ],
    });
  
    // fill popup with the selected event data
    mobiscroll.getInst(titleInput).value = ev.title || '';
    mobiscroll.getInst(descriptionTextarea).value = ev.description || '';
    mobiscroll.getInst(allDaySwitch).checked = ev.allDay || false;
    range.setVal([ev.start, ev.end]);
    selectColor(ev.color || getResource(ev.resource).color, true);
  
    if (ev.free) {
      mobiscroll.getInst(freeSegmented).checked = true;
    } else {
      mobiscroll.getInst(busySegmented).checked = true;
    }
  
    // change range settings based on the allDay
    range.setOptions({
      controls: ev.allDay ? ['date'] : ['datetime'],
      responsive: ev.allDay ? datePickerResponsive : datetimePickerResponsive,
    });
  
    // set anchor for the popup
    popup.setOptions({ anchor: args.domEvent.currentTarget });
    popup.open();
  }
  
  calendar = mobiscroll.eventcalendar('#demo-add-delete-event', {
    clickToCreate: 'double',
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      timeline: { type: 'day' },
    },
    data: myData,
    resources: myResources,
    onEventClick: function (args) {
      oldEvent = Object.assign({}, args.event);
      tempEvent = args.event;
  
      if (!popup.isVisible()) {
        createEditPopup(args);
      }
    },
    onEventCreated: function (args) {
      popup.close();
      // store temporary event
      tempEvent = args.event;
      createAddPopup(args.target);
    },
    onEventDeleted: function (args) {
      mobiscroll.snackbar({
        button: {
          action: function () {
            calendar.addEvent(args.event);
          },
          text: 'Undo',
        },
        message: 'Event deleted',
      });
    },
  });
  
  popup = mobiscroll.popup('#demo-add-popup', {
    display: 'bottom',
    contentPadding: false,
    fullScreen: true,
    onClose: function () {
      if (deleteEvent) {
        calendar.removeEvent(tempEvent);
      } else if (restoreEvent) {
        calendar.updateEvent(oldEvent);
      }
    },
    responsive: {
      medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    },
  });
  
  titleInput.addEventListener('input', function (ev) {
    // update current event's title
    tempEvent.title = ev.target.value;
  });
  
  descriptionTextarea.addEventListener('change', function (ev) {
    // update current event's title
    tempEvent.description = ev.target.value;
  });
  
  allDaySwitch.addEventListener('change', function () {
    var checked = this.checked;
    // change range settings based on the allDay
    range.setOptions({
      controls: checked ? ['date'] : ['datetime'],
      responsive: checked ? datePickerResponsive : datetimePickerResponsive,
    });
  
    // update current event's allDay property
    tempEvent.allDay = checked;
  });
  
  range = mobiscroll.datepicker('#event-date', {
    controls: ['date'],
    select: 'range',
    startInput: '#start-input',
    endInput: '#end-input',
    showRangeLabels: false,
    touchUi: true,
    responsive: datePickerResponsive,
    onChange: function (args) {
      var date = args.value;
      // update event's start date
      tempEvent.start = date[0];
      tempEvent.end = date[1];
    },
  });
  
  document.querySelectorAll('input[name=event-status]').forEach(function (elm) {
    elm.addEventListener('change', function () {
      // update current event's free property
      tempEvent.free = mobiscroll.getInst(freeSegmented).checked;
    });
  });
  
  deleteButton.addEventListener('click', function () {
    // delete current event on button click
    calendar.removeEvent(tempEvent);
    popup.close();
  
    // save a local reference to the deleted event
    var deletedEvent = tempEvent;
  
    mobiscroll.snackbar({
      button: {
        action: function () {
          calendar.addEvent(deletedEvent);
        },
        text: 'Undo',
      },
      message: 'Event deleted',
    });
  });
  
  colorPicker = mobiscroll.popup('#demo-event-color', {
    display: 'bottom',
    contentPadding: false,
    showArrow: false,
    showOverlay: false,
    buttons: [
      'cancel',
      {
        text: 'Set',
        keyCode: 'enter',
        handler: function () {
          setSelectedColor();
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    responsive: {
      medium: {
        display: 'anchored',
        anchor: document.getElementById('event-color-cont'),
        buttons: [],
      },
    },
  });
  
  function selectColor(color, setColor) {
    var selectedElm = document.querySelector('.crud-color-c.selected');
    var newSelected = document.querySelector('.crud-color-c[data-value="' + color + '"]');
  
    if (selectedElm) {
      selectedElm.classList.remove('selected');
    }
    if (newSelected) {
      newSelected.classList.add('selected');
    }
    if (setColor) {
      pickedColor.style.background = color;
    }
  }
  
  function setSelectedColor() {
    tempEvent.color = tempColor;
    pickedColor.style.background = tempColor;
    colorPicker.close();
  }
  
  function getResource(res) {
    return myResources.find(function (r) {
      return r.id == res;
    });
  }
  
  colorSelect.addEventListener('click', function () {
    selectColor(tempEvent.color || getResource(tempEvent.resource).color);
    colorPicker.open();
  });
  
  colorElms.forEach(function (elm) {
    elm.addEventListener('click', function () {
      tempColor = elm.getAttribute('data-value');
      selectColor(tempColor);
  
      if (!colorPicker.s.buttons.length) {
        setSelectedColor();
      }
    });
  });
    