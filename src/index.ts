import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const PORT = process.env.PORT;
const app = express();
const prismaClient = new PrismaClient();

const sendResponse = (status: Boolean = true, message: String = 'Request Processed Successfully!!', data: any = null) => ({ status, message, data });

app.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await prismaClient.user.findMany();
        res.status(200).json(sendResponse(true, 'Data fetched successfully', data));
    } catch (error) {
        console.error('Error fetching data in GET API :', error);
        res.status(500).json(sendResponse(false, 'Internal Server Error'));
    }
});
app.post('/', async (req, res): Promise<void> => {
    try {
        const email = `${Math.random().toString(36).substring(2, 15)}@example.com`;
        const password = Math.random().toString(36).substring(2, 15);
        const newUser = await prismaClient.user.create({
            data: { email, password },
        });
        res.status(201).json(sendResponse(true, 'User created successfully', { user: newUser }));
    } catch (error) {
        console.error('Error creating user in POST API :', error);
        res.status(500).json(sendResponse(false, 'Internal Server Error'));
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
