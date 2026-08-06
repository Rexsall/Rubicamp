function validateEmail(email) {
    let cleanedEmail = email.trim();

    let hasAt = cleanedEmail.includes("@");
    let hasDot = cleanedEmail.includes(".");
    let validLength = cleanedEmail.length >= 5;
    let noSpaces = cleanedEmail.indexOf(" ") === -1;

    let valid = hasAt && hasDot && validLength && noSpaces;

    return {
        valid: valid,
        email: cleanedEmail,
        checks: {
            hasAt: hasAt,
            hasDot: hasDot,
            validLength: validLength,
            noSpaces: noSpaces
        }
    };
}

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));