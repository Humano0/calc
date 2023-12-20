function handleNumberClick(element: any) {
    const board = document.querySelector('.board');
        if(board) {
            board.innerHTML += element.textContent;
        }
}

export default handleNumberClick;