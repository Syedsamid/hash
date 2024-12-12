import dotenv from 'dotenv';
import express from "express";

// This is env file 
dotenv.config();

const app = express();

const PORT = process.env.PORT || 6000
console.log(PORT);
console.log(process.env.NAMES);
console.log(process.env.AGE);
console.log(process.env.PASSWORD);

// let NAMES = process.env.NAMES;
// console.log(NAMES);
