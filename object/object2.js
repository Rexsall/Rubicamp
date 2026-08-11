// Tulis function createPerson di sini
function createPerson(name, age, profession) {
    return {
        name: name,
        age: age,
        profession: profession,
        yearsExperience: 0,

        introduce() {
            return `Hello, my name is${this.name} and I am a ${this.profession}`;
        },

        updateAge(newAge) {
            this.age = newAge;
            this.yearsExperience = newAge - age;
        },

        getInfo() {
            return {
                name: this.name,
                age: this.age,
                profession: this.profession,
                yearsExperience: this.yearsExperience

            };
        }
    };

}

let person = createPerson("Alice", 30, "Developer");
console.log(person.introduce());
person.updateAge(31);
console.log(person.getInfo());