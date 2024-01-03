import { me, User } from "./importingTypes"
import { addDays } from 'date-fns'
import { times } from "lodash"


function printUser(user: User) {
    console.log(`${user.id} ${user.name} ${user.age}`)
}

printUser(me)
addDays(new Date(), 1)
// @ts-expect-error
times(3, () => console.log('hello'))