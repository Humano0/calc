import express, { Request, Response } from 'express';
import checkDivideByZero from '../middleware/checkDivideByZero';
const router = express.Router();

router.post('/', checkDivideByZero, (req: Request, res: Response) => {
    const { boardContent } = req.body;

    // Split the boardContent into parts based on operators
    const operators = ['+', '-', 'x', '÷', '%'];
    let operatorIndex = -1;
    let left, operator, right;

    for(let i = 0; i < boardContent.length; i++) {
        if(operators.includes(boardContent[i])) {
            operatorIndex = i;
            break;
        }
    }
    if (operatorIndex !== -1) {
        left = boardContent.substring(0, operatorIndex);
        operator = boardContent.charAt(operatorIndex);
        right = boardContent.substring(operatorIndex + 1);
    }

    // parse strings to floating numbers
    const leftNumber: number = parseFloat(left);
    const rightNumber: number = parseFloat(right);

    let result: number;
    switch (operator) {
        case '+':
            result = parseFloat((leftNumber + rightNumber).toFixed(4));
            break;
        case '-':
            result = parseFloat((leftNumber - rightNumber).toFixed(4));
            break;
        case 'x':
            result = leftNumber * rightNumber;
            break;
        case '÷':
            result = leftNumber / rightNumber;
            break;
        case '%':
            result = leftNumber % rightNumber;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operator.' });
    }
    result = parseFloat(result.toFixed(4));
    // Send the result as response
    res.status(200).json({ result });
});

export default router;