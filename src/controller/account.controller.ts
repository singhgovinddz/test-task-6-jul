import {Request, Response, NextFunction } from 'express';
import * as AccountService from '../services/account.service'

async function get(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await AccountService.getAll());
    } catch(err) {
        console.error('Error in getting accounts')
    }
}

async function create(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await AccountService.create(req.body));
    } catch (err) {
      console.error(`Error while creating account`);
      next(err);
    }
  }
  
  async function update(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await AccountService.update(req.body));
    } catch (err) {
      console.error(`Error while updating account`);
      next(err);
    }
  }
  
  async function remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params?.id;
      if(!id) {
        throw 'not valid request';
      }

      res.json(await AccountService.remove(id));
    } catch (err) {
      console.error(`Error while deleting account`);
      next(err);
    }
  }
  
  export {
    get,
    create,
    update,
    remove
  };