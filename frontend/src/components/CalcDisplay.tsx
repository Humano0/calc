import '../styles/App.css';
import elementsData from '../interfaces/elementData';
import handleNumberClick from '../scripts/handleNumberClick';
import handleOperatorClick from '../scripts/handleOperatorClick';
import handleSpecialOperatorClick from '../scripts/handleSpecialOperatorClick';
import handleResetClick from '../scripts/handleResetClick';
import handleEnterOperator from '../scripts/handleEnterOperator';
import { useState } from 'react';

function CalcDisplay(): JSX.Element {
	const [opExist, setOpExists] = useState('');
	return (
    <div className="App">
      {elementsData.map((element, index) => (
        <div key={index} className={element.className} onClick={() => {
          switch (element.className) {
            case 'numbers':
              handleNumberClick(element);
              break;
						case 'zerodiv':
							handleNumberClick(element);
							break;
            case 'operators':
              handleOperatorClick(element, opExist, setOpExists);
              break;
            case 'specialOperators':
              handleSpecialOperatorClick(element, opExist);
              break;
						case 'reset':
              handleResetClick(element, setOpExists);
              break;
            case 'enter operators':
              handleEnterOperator(setOpExists);
              break;
            default:
              break;
            }
        }}>
          {element.textContent}
        </div>
      ))}
    </div>
  )
}

export default CalcDisplay;