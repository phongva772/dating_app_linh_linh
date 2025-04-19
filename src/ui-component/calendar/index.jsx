import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Scheduler from 'react-mui-scheduler';

function CalendarComponent() {
  const [state] = useState({
    options: {
      transitionMode: 'zoom',
      startWeekOn: 'mon',
      defaultMode: 'month',
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540
    },
    alertProps: {
      open: true,
      color: 'info',
      severity: 'info',
      message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥",
      showActionButton: true,
      showNotification: true,
      delay: 1500
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true
    }
  });

  const events = [
    {
      id: 'event-1',
      label: 'Medical consultation',
      groupLabel: 'Dr Shaun Murphy',
      user: 'Dr Shaun Murphy',
      color: '#f28f6a',
      startHour: '17:00 AM',
      endHour: ':00 AM',
      date: '2025-04-19',
      createdAt: new Date(),
      createdBy: 'Kristina Mayer'
    },
    {
      id: 'event-2',
      label: 'Medical consultation',
      groupLabel: 'Dr Claire Brown',
      user: 'Dr Claire Brown',
      color: '#099ce5',
      startHour: '04:00 AM',
      endHour: '05:00 AM',
      date: '2025-04-19',
      createdAt: new Date(),
      createdBy: 'Kristina Mayer'
    },
    {
      id: 'event-3',
      label: 'Medical consultation',
      groupLabel: 'Dr Menlendez Hary',
      user: 'Dr Menlendez Hary',
      color: '#263686',
      startHour: '04:00 AM',
      endHour: '05:00 AM',
      date: '2025-04-19',
      createdAt: new Date(),
      createdBy: 'Kristina Mayer'
    },
    {
      id: 'event-4',
      label: 'Consultation prénatale',
      groupLabel: 'Dr Shaun Murphy',
      user: 'Dr Shaun Murphy',
      color: '#f28f6a',
      startHour: '04:00 AM',
      endHour: '05:00 AM',
      date: '2025-04-19',
      createdAt: new Date(),
      createdBy: 'Kristina Mayer'
    }
  ];

  const handleCellClick = (event, row, day) => {};

  const handleEventClick = (event, item) => {};

  const handleEventsChange = (item) => {};

  const handleAlertCloseButtonClicked = (item) => {};

  return (
    <Scheduler
      locale="vn"
      events={events}
      legacyStyle={false}
      options={state?.options}
      alertProps={state?.alertProps}
      toolbarProps={state?.toolbarProps}
      onEventsChange={handleEventsChange}
      onCellClick={handleCellClick}
      onTaskClick={handleEventClick}
      onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
    />
  );
}

export default CalendarComponent;
