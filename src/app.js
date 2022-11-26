import dotenv from 'dotenv';

dotenv.config();
import { resolve } from 'path';
import './database';
import express from 'express';

import cors from 'cors';
import homeRoutes from './routers/homeRoutes';
import userRoutes from './routers/userRoutes';
import tokenRoutes from './routers/tokenRoutes';
import alunoRoutes from './routers/alunoRoutes';
import fotoRoutes from './routers/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors);
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
