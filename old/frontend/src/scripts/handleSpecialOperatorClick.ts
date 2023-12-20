function handleSpecialOperatorClick(element: any, opExist: any) {
	const board = document.querySelector('.board');
	const lastDotIndex = board?.innerHTML.lastIndexOf(element.textContent)!;
	const firstDotIndex = board?.innerHTML.indexOf(element.textContent)!;
	const operatorIndex = board?.innerHTML.lastIndexOf(opExist)!;

	if(board) {
		if(firstDotIndex === -1) {
			board.innerHTML += element.textContent;
		} else if (firstDotIndex !== -1) {
			if(firstDotIndex < operatorIndex) {
				if(board?.innerHTML.length > operatorIndex && lastDotIndex < operatorIndex) {
					board.innerHTML += element.textContent;
				}
			} else if (firstDotIndex > operatorIndex) {
				return;
			}
		}
	}
}

export default handleSpecialOperatorClick;