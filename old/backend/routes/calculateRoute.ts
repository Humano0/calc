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

    // check if any of the numbers exceeds the maximum integer
    if (Math.abs(leftNumber) > Number.MAX_SAFE_INTEGER || Math.abs(rightNumber) > Number.MAX_SAFE_INTEGER) {
        return res.status(400).json({ error: 'Number exceeds maximum safe integer.' });
    }

    let result: number;
    switch (operator) {
        case '+':
            result = leftNumber + rightNumber;
            break;
        case '-':
            result = leftNumber - rightNumber;
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

    // check if the result exceeds the maximum integer
    if (Math.abs(result) > Number.MAX_SAFE_INTEGER) {
        return res.status(400).json({ error: 'Result exceeds maximum safe integer.' });
    }

    result = parseFloat(result.toFixed(4));
    res.status(200).json({ result });
});

export default router;