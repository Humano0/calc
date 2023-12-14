async function handleEnterOperator(setOpExists: any) {
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
			}
	} catch (e) {
		console.log("error occurred when doing the post req.");
	}
}

export default handleEnterOperator;