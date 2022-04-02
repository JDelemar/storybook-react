//@ts-check
import React, { useEffect, useState } from 'react';

import './date-time-picker.component.css';

/**
 * @typedef {Object} Props
 * @property {string} fieldName
 */

/**
 * Date Time Picker Component
 * @param {Props} props 
 * @returns 
 */
export const DateTimePickerComponent = (props) => {
  const [dateTime, setDateTime] = useState('');

  /** @type {[boolean, Function]} IsWithTime */
  const [isWithTime, setIsWithTime] = useState(false);
  const [init, setInit] = useState(false);

  const isDark = document.querySelector('body.theme-dark') !== null;

  const inputStyle = {
    'colorScheme': isDark ? 'dark' : 'light',
    backgroundColor: 'var(--background-modifier-form-field)',
    border: '1px solid var(--background-modifier-border)',
    color: 'var(--text-normal)',
    fontFamily: "'Inter', sans-serif",
    padding: '5px 14px',
    fontSize: '16px',
    borderRadius: '4px',
    outline: 'none',
    height: '30px',
  };
  
  // const inputDateStyle = {
  //   backgroundColor: 'gray',
  //   'input[type="date"]::-webkit-calendar-picker-indicator': {
  //     'backgroundImage': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>')`
  //   },
  // };

  const initialize = async () => {
    // console.log('initialize');

    // const fileDateTimeValue = await getFileDateTimeValue();

    // const fileDateTime = fileDateTimeValue ? fileDateTimeValue : null;

    // // console.log('  fileDateTimeValue', fileDateTimeValue);
    // // console.log('  fileDateTime', fileDateTime);
    // // console.log('  dateTimeValue', dateTime);

    // if (
    //   fileDateTime !== dateTime
    //   && fileDateTime !== null
    // ) {
    //   // console.log('  ***initialize dateTime component value');
    //   updateDateTime(fileDateTime);
    // }

    setInit(true);
  }

  // /**
  //  * 
  //  * @returns {Promise<string>}
  //  */
  // const getFileDateTimeValue = async () => {
  //   const fileContents = await ObsidianApp().getFileContent();
  
  //   return ObsidianApp().getFieldValueAndPosition(props.fieldName, fileContents)?.value;
  // }

  /**
   * Update file content according to selection
   */
  const updateContent = async () => {
    // console.log('updateContent');

    // const fileDateTimeValue = await getFileDateTimeValue();

    // const fileDateTime = fileDateTimeValue ? fileDateTimeValue : null;

    // // console.log('  fileDateTimeValue', fileDateTimeValue);
    // // console.log('  fileDateTime', fileDateTime);
    // // console.log('  dateTimeValue', dateTime);

    // const newTime = isWithTime ? ` ${getDateFromString(dateTime)
    //     .toLocaleString('en-US', { timeStyle: 'short'})}` :
    //   '';

    // const newDate = `${getDateFromString(dateTime)
    //   .toISOString()
    //     .split('T')[0]}${newTime}`;

    // // console.log('  newDate', newDate);

    // if (fileDateTime !== newDate) {
    //   // console.log('  ***update Content');
    //   ObsidianApp().setFileFieldContent(props.fieldName, newDate);
    // }
  };
  
  /**
   * 
   * @param {string} dateString
   * @returns {Date}
   */
  const getDateFromString = (dateString) => {
    // .replace is for Safari/iOS
    return new Date(dateString.replace(/-/g, '/'));
  }

  /**
   * Update DateTime
   * @param {string} newDateTimeString 
   */
  const updateDateTime = (newDateTimeString) => {
    // console.log('updateDateTime', newDateTimeString, dateTime, init);
    const hasTime = newDateTimeString.includes('M');

    // console.log('  hasTime', hasTime);
    if (isWithTime !== hasTime) {
      setIsWithTime(hasTime);
    }
 
    setDateTime(newDateTimeString);
  };

  useEffect(() => {
    // console.log('render init');
    initialize();
  }, []);

  useEffect(() => {
    if (!init) return;

    // console.log('render DateTime', dateTime);
    updateContent();
  }, [dateTime]);

  const toggleDate = () => {
    const newValue = !isWithTime;
    // console.log('set isWithTime', newValue);

    setIsWithTime(newValue);
  };

  /**
   * Handle selected option change
   * @param {any} e 
   */
  const handleDateChange = (e) => {
    // console.log('dateChanged', e.target.value);
    setDateTime(e.target.value.replace('T', ' '));
  };

  return (
    <>
      <div style={{display: 'flex'}}>
        {isWithTime ? (
          <>
           <label className="input-label" htmlFor="datetime-local-picker">Pick a date </label>
           <input 
            style={inputStyle}
            type="datetime-local"
            name="datetime-local-picker"
            value={dateTime ? getDateFromString(`${dateTime} GMT`).toISOString().slice(0, 16) : ''}
            onChange={handleDateChange}
            id="datetime-local-picker" />
          </>
        ) : (
          <>
           <label className="input-label" htmlFor="date-picker">Pick a date </label>
           <input
            style={inputStyle}
            type="date"
            name="date-picker"
            value={dateTime?.split(' ')[0]}
            onChange={handleDateChange}
            id="date-picker" />
          </>
        )}
        <>
          <div style={{display: 'flex'}}>
            <label>&nbsp; Include time? </label>
            <div className="setting-item-control" onClick={toggleDate}>
              <div className={`checkbox-container ${isWithTime ? 'is-enabled' : ''}`}></div>
            </div>
          </div>
        </>
      </div>
      {/* <p>dateTime: {dateTime}</p> */}
    </>
  );

};
