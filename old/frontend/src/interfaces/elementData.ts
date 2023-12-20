interface ElementData {
    className: string;
    textContent: string;
}

const elementsData: ElementData[] = [
    { className: 'board', textContent: '' },
    { className: 'numbers', textContent: '7' },
    { className: 'numbers', textContent: '8' },
    { className: 'numbers', textContent: '9' },
    { className: 'reset', textContent: 'AC' },
    { className: 'operators', textContent: '%' },
    { className: 'numbers', textContent: '4' },
    { className: 'numbers', textContent: '5' },
    { className: 'numbers', textContent: '6' },
    { className: 'operators', textContent: '+' },
    { className: 'operators', textContent: '-' },
    { className: 'numbers', textContent: '1' },
    { className: 'numbers', textContent: '2' },
    { className: 'numbers', textContent: '3' },
    { className: 'operators', textContent: 'x' },
    { className: 'operators', textContent: '÷' },
    { className: 'zerodiv', textContent: '0' },
    { className: 'specialOperators', textContent: '.' },
    { className: 'enter operators', textContent: '=' },
];

export default elementsData;