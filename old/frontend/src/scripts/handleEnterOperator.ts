async function handleEnterOperator(setOpExists: any, extraOperator?: any) {
    const board = document.querySelector('.board')!;
	setOpExists('');
    try {
			const response = await fetch("http://localhost:3003/calc", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					boardContent: board.innerHTML
				})
			});

			if(response.ok) {
				const data = await response.json();
				board.innerHTML = data.result;
				if(extraOperator) {
					board.innerHTML += extraOperator;
					setOpExists(extraOperator);
				}
			} else if(response.status === 400) {
				const errorData = await response.json();
				alert(errorData.error);
				board.innerHTML = '';
			}
	} catch (e) {
		console.log(e);
	}
}

export default handleEnterOperator;