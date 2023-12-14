import { Request, Response, NextFunction } from 'express';

// Checks if the operation is division and makes sure the right side is not 0.
function checkDivideByZero(req: Request, res: Response, next: NextFunction): void {
    const { boardContent } = req.body;

    if (boardContent && boardContent.includes('÷')) {
        const parts = boardContent.split('÷');
        const rightSideValue = parseFloat(parts[1]);

        if (rightSideValue === 0) {
            res.status(400).json({ error: 'Cannot divide by zero.' });
        }
    }
    next();
}

export default checkDivideByZero;
