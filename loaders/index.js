import path from 'path';
import dotenv from 'dotenv';
import express from './express.js';
import mongoose from './mongoose.js';
import redis from './redis.js';


export default async () =>  {
    const rootPath = process.cwd();
    const envPath = path.join(rootPath, 'conf/.env');
    dotenv.config({path: envPath});

    const application = await express(process.env);
    // const mongoConnection = await mongoose(process.env);
    const redisDatabase = await redis(process.env);
}