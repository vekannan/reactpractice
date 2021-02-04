import React , {useState, useEffect} from 'react';
import Child from './child'
const Master = () => {
    const [name] = useState('venkat');
  const [inputValue, setInputValue] = useState(2);
  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  }
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if(isNaN(inputValue)) {
      setInputError(true);
    }else {
      setInputError(false);
    }
  },[inputValue]);
  return (
    <div>
      <Child name={name} inputValue={inputValue} onChangeInput={onChangeInput}/>
      <div>changes reflecting here: {inputValue}</div>
      { inputError && <div className='input-error'>Please use only numbers</div> }
    </div>
  );
}

export default Master;