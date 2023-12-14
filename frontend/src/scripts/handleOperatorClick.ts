import handleEnterOperator from "./handleEnterOperator";

async function handleOperatorClick(element: any, opExist: any, setOpExists: any) {
	const allOperators = ['+', '-', 'x', '÷', '%'];
	const board = document.querySelector('.board')!;
	const lastElem: string = board?.innerHTML.slice(-1)!;

	if(opExist.length === 0) {
		if (board && board.innerHTML.length !== 0) {
			setOpExists(element.textContent);
			board.innerHTML += element.textContent;
		}
	} else if (opExist.length !== 0 && allOperators.includes(lastElem)) {
		setOpExists(element.textContent);
		if (board) {
			board.innerHTML = board.innerHTML.slice(0, -1) + element.textContent;
		}
	} else {
		await handleEnterOperator(setOpExists);
		board.innerHTML += element.textContent;
	}
}

export default handleOperatorClick;