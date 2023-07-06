import { Account, BaseAccount } from "../types/account.type";
import { v4 as uuidv4 } from 'uuid';

let accountData:  Array<Account> = [];

function create(payload: BaseAccount) {
    accountData.push({...payload, id: uuidv4()});
}

function update(payload: Account) {
    const updatedData = accountData.map((d) => {
        if(d.id === payload.id) {
            d = payload
        }
        return d;
    })
    console.log(updatedData);
    accountData = updatedData;
}
function remove(id: string) {
    accountData = accountData.filter(d => (d.id !== id));
}
function get(): Array<Account> {
    return accountData;
}

export {
    create,
    update,
    remove,
    get
}