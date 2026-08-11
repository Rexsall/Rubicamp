// Tulis function manageStudents di sini
function manageStudents(students, options) {
    let data = [...students];

    if (options.newStudent) {
        data.push(options.newStudent);
    }

    let totalStudents = data.length;
    let totalGrade = data.reduce((total, student) => total + student.grade, 0);
    let averageGrade = totalGrade / totalStudents;

    let topStudent = data.reduce((top, student) => {
        return student.grade > top.grade ? student : top;
    });

    let bySubject = {};

    data.forEach(student => {
        if (!bySubject[student.subject]) {
            bySubject[student.subject] = [];
        }

        bySubject[student.subject].push(student);
    });

    let statistics = {};

    for (let subject in bySubject) {
        let studentsSubject = bySubject[subject];

        let total = studentsSubject.reduce(
            (sum, student) => sum + student.grade,
            0
        );

        statistics[subject] = {
            count: studentsSubject.length,
            average: total / studentsSubject.length
        };
    }

    return {
        totalStudents,
        averageGrade,
        topStudent,
        bySubject,
        statistics
    };
}
let students = [
    { id: 1, name: "Alice", grade: 85, subject: "Math" },
    { id: 2, name: "Bob", grade: 92, subject: "Science" },
    { id: 3, name: "Charlie", grade: 78, subject: "Math" }
];

let result = manageStudents(students, {
    action: "analyze",
    newStudent: { id: 4, name: "Diana", grade: 88, subject: "Science" }
});
console.log(result);