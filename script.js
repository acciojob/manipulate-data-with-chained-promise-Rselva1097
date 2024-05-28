//your JS code here. If required.
const arr=[1,2,3,4];

function getNumbers()=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(arr);
		},3000)
	})
}

 function updateOutput(elementId, text) {
            document.getElementById(elementId).textContent = text;
        }

function processNumbers()=>{
	getNumbers().then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const evenNumber=number.filter(a => a%2 == 0)
				updateOutput("output",evenNumber.join(','))
			},1000)
		})
	})
	.then(evenNumbers => {
                    // Multiply all even numbers by 2
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const multipliedNumbers = evenNumbers.map(num => num * 2);
                            updateOutput('output', multipliedNumbers.join(', '));
                            resolve(multipliedNumbers);
                        }, 2000);
                    });
                })
                .catch(error => console.error(error));
}

processNumbers()


