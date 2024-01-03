type SkillLevel = "Beginner" | "Intermediate" | "Expert" | "Master"

type Person7 = {
    name: string,
    skillLevel: SkillLevel
}

const person7: Person7 = { name: "Kyle", skillLevel: "Expert" }

function printSkillLevel(skillLevel: SkillLevel) {
    console.log(skillLevel)
}

printSkillLevel(person7.skillLevel) // Expert

// -------------------------------------------

type Person8 = {
    name: string,
    skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master"
}

const person8: Person8 = { name: "Kyle", skillLevel: "Expert" }

function printSkillLevel2(skillLevel: Person8["skillLevel"]) {
    console.log(skillLevel)
}

printSkillLevel2(person8.skillLevel) // Expert


//---------------------------------------------

const indexA = ["sdg", "d", true];

type A = (typeof indexA)[number]


const indexB = {
    name: "sdg",
    age: 12,
    isProgrammer: true
};

type B = (typeof indexB)[keyof typeof indexB]