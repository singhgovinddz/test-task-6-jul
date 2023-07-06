import express from 'express';
import { get, update, remove, create } from '../controller/account.controller'

const router = express.Router();

router.get('/', get);

router.put('/', update);

router.post('/', create);

router.delete('/:id', remove);

export = router;

