// Tulis function extractUserData di sini
function extractUserData(user) {
    let {
        id,
        profile: {
            name,
            email,
            address: { street, city, zipCode }
        },
        preferences: { theme, language }
    } = user;

    let isComplate = id && name && email && street && city && zipCode && theme && language;

    return {
        userId: id,
        fullName: name,
        email: email,
        location: `${street}, ${city} ${zipCode}`,
        settings: {
            theme: theme,
            language: language
        },
        isComplete: Boolean(isComplete)
    };
}

let user = {
    id: 1,
    profile: {
        name: "John Doe",
        email: "john@example.com",
        address: {
            street: "Jl. Sudirman",
            city: "Jakarta",
            zipCode: "12345"
        }
    },
    preferences: {
        theme: "dark",
        language: "id"
    }
};
console.log(extractUserData(user));