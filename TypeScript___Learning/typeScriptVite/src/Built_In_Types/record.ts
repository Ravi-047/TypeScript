type PersonA = {
    name: string;
    age: number;
}

// type PeopleGroupedByName = {
//     [index: string]: PersonA[]
// }

type PeopleGroupedByName = Record<string, PersonA[]>