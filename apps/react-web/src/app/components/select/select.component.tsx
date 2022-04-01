import React, { useEffect, useState } from 'react';

import './select.component.css';

interface Props {
  fieldName: string;
  options: string;
}

export const SelectComponent = (props: Props) => {
  const DEFAULT_VALUE = 'default';
  const DEFAULT_LABEL = 'Select...';

  const [init, setInit] = useState(false);
  const [options] = useState(props.options
    .split(',')
    .reduce<{ value: string, label: string }[]>( (previous, current, index) => {
      if (index === 0)
        previous.push({ value: DEFAULT_VALUE, label: DEFAULT_LABEL});
  
      previous.push({
        value: current.toLocaleLowerCase(),
        label: current,
      });
      return previous;
    }, [])
  );
  const [selectedOption, setSelectedOption] = useState(DEFAULT_VALUE);

  /**
   * Set SelectComponent initial value according to field in file
   */
   const initialize = async () => {
    // console.log('initialize');
    setInit(true);
  
    // const fileContents = await ObsidianApp().getFileContent();
  
    // const { value } = ObsidianApp().getFieldValueAndPosition(props.fieldName, fileContents);
    
    // console.log('initialize');
    // console.log('  content field value', value);
    // console.log('  init value:', init);
    // console.log('  selectedOption', selectedOption);
    // console.log('  props', props);
    // console.log('  options', options);
    // console.log('  props.fieldName', props.fieldName);
  
    // const label = selectedOption?.label ? selectedOption.label : '';
    // const fieldNameWithValue = `${props.fieldName} ${label}`;
    // console.log(`  file: '${props.fieldName} ${value}', selection: '${fieldNameWithValue}'`);
    
    // const fileOption = options.find(x => x.label === value)?.value || DEFAULT_VALUE;
  
    // console.log('  fileOption', fileOption);
    // console.log('  current option', selectedOption);
  
    // if (selectedOption !== fileOption) {
    //   // console.log('  **update initial value', fileOption);
    //   // ObsidianApp().sayHello();
    //   // console.log('ObsidianApp', ObsidianApp);
    //   // debugger;
  
    //   setSelectedOption(fileOption);
    // }
  };
  
  /**
   * Update file content according to selection
   */
  const updateContent = async () => {
    // console.log('updateContent');
    // console.log('  updateContent:init', init);
    // console.log('  updateContent:options', options);
    // console.log('  updateContent:selectedOption', selectedOption);
    // const fileContents = await ObsidianApp().getFileContent();
  
    // const fileFieldValue = ObsidianApp()
    //   .getFieldValueAndPosition(props.fieldName, fileContents).value;
  
    // const fieldValue = options.find(x =>
    //   selectedOption !== DEFAULT_VALUE
    //   && x.value === selectedOption)?.label
    //   || '';
  
    // // console.log(`  updateContent:fileFieldValue '${fileFieldValue}'`);
    // // console.log(`  updateContent:fieldValue '${fieldValue}'`);
    // // console.log(`  updateContent:props.fieldName '${props.fieldName}'`);
  
    // if (fileFieldValue != fieldValue) {
    //   // console.log('  ***update file contents');
    //   // ObsidianApp().setFileFieldContent(props.fieldName, fieldValue);
    // }
  };
  
  useEffect(() => {
    // console.log('renderInit');
    // console.log('  renderInit:selectedOption', selectedOption);
    // console.log('  renderInit:init', init);
    // console.log('  renderInit:should we initialize?', !init);
  
    initialize();
  
    // if (init) {
    //   updateContent();
    // }
  }, []) //, selectedOption])
  
  useEffect(() => {
    // console.log('renderSelectedOption');
    // console.log('  renderSelectedOption:init', init);
    // console.log('  renderSelectedOption:selectedOption', selectedOption);
  
    if (!init) return;
  
    updateContent();
  
  }, [selectedOption])
  
  /** Handle selected option change */
  const handleChange = (e?: any) => {
    const value: string = e?.target?.value || DEFAULT_VALUE;
    // console.log('handleChange', value);
    setSelectedOption(value);
  };
  
  /** Clear selected option */
  const clear = () => {
    // console.log('clear');
    handleChange();
  };

  return (
    <>

      <div className="setting-item-control" style={{justifyContent: 'flex-start'}}>
        <select
          className="dropdown"
          style={{width: '400px'}}
          onChange={handleChange}
          value={selectedOption}
        >
          { options?.map((option, index) => {
            return option.value === DEFAULT_VALUE ? (
              <option key={index.toString()} value={option.value} disabled hidden>{option.label}</option>
            ) : (
              <option key={index.toString()} value={option.value}>{option.label}</option>
            );
          })}
        </select>
        { selectedOption !== DEFAULT_VALUE ? (
          // <button
          //   onClick={clear}
          //   style={{marginLeft: '-65px', backgroundColor: 'transparent', width: '32px'}}
          // >
          //   x
          // </button>
          <div
            onClick={clear}
            style={{marginLeft: '-4em', display: 'flex', padding: '0.5em', fill: 'var(--text-normal)'}}
          >
            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg">
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
          </div>
        ) : 
          null 
        }
      </div>

    </>
  );
};
