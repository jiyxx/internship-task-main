const students = [
    {
        name : "Ria",
        marks : 48,
        subject : "Maths"
    },
    {
        name:"Nia",
        marks : 76,
        subject : "Science",
    },
    {
        name:"Rohan",
        marks: 84,
        subject : "Hindi"
    },
    {
        name:"Shreya",
        marks : 42,
        subject: "Social Studies"
    },
    {
        name:"Meena",
        marks:65,
        subject :"Marathi"
    }
];
const passedStudents = students.filter(student => student.marks >= 50);
console.log(passedStudents);

const result = passedStudents.map(student => {
    return `${student.name} passed with ${student.marks} marks`;
});

result.forEach(message => {
    console.log(message);
});

