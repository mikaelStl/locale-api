import express, { request, response } from 'express';
import { create, list, find, update, delete_user } from '../controller/User.controller'

const router = express.Router();

// Create
router.post('/', create);

// Read
router.get('/', list);

router.get('/:email', find);

// Update
router.put('/:email', update);

// Delete
router.delete('/:email', delete_user);

export default router;