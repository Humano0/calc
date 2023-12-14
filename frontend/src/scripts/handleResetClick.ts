function handleResetClick(element: any, setOpExists: any) {
	const board = document.querySelector('.board');
	if(board) {
		board.innerHTML = '';
		setOpExists('');
	}
}

export default handleResetClick;