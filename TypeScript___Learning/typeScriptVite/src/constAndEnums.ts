let anum = 1
const bnum = 1 as const

const numsArray = [1, 2, 3];

const SKILL_LEVEL = ["beginner", "intermediate", "advanced"] as const;

type Person9 = {
    skillLevel: (typeof SKILL_LEVEL)[number];
}

SKILL_LEVEL.forEach(skillLevel => {
    console.log(skillLevel);
})

const preson9 = {
    name: "Kyle",
    age: 30,
    address: {
        street: "123 Oak St",
        city: "Salt Lake City",
        state: "UT"
    }
} as const


