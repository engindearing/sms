
const createError = require('http-errors');

export const restrictTo =
    (...roles: any) =>
        (req: any, res: any, next: any) => {
            const { role } = req.user;

            if (!roles.includes(role)) {
                next(createError(401, 'You are unauthorized to perform this action'));
            }
            next();
        };

