import { Account, BaseAccount } from "../types/account.type";
import * as AccountDB from "./db";

async function create(accountPayload: BaseAccount) {
    AccountDB.create(accountPayload);
    return 'created successfully'
}

async function update(payload: Account) {
    AccountDB.update(payload)
    return 'updated successfully';
}

async function remove(id: string) {
   AccountDB.remove(id);
   return 'removed successfully';
}

async function getAll() {
   return AccountDB.get();
}

export {
    create,
    update,
    remove,
    getAll
}