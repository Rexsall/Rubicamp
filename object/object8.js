// Tulis function validateObjectSchema di sini
function validateObjectSchema(obj, schema) {
    let errors = [];
    let validatedFields = [];

    function check(data, rules, path = "") {
        for (let key in rules) {
            let rule = rules[key];
            let value = data[key];
            let field = path ? `${path}.${key}` : key;

            if (rule.required && value === undefined) {
                errors.push(`${field} is required`);
                continue;
            }

            if (value === undefined) continue;

            if (typeof value !== rule.type) {
                errors.push(`${field} must be ${rule.type}`);
                continue;
            }

            if (rule.minLength && value.length < rule.minLength)
                errors.push(`${field} is too short`);

            if (rule.min !== undefined && value < rule.min)
                errors.push(`${field} is too small`);

            if (rule.max !== undefined && value > rule.max)
                errors.push(`${field} is too large`);

            if (rule.pattern && !rule.pattern.test(value))
                errors.push(`${field} has invalid format`);

            if (rule.properties) {
                check(value, rule.properties, field);
            } else if (!errors.some(e => e.startsWith(field))) {
                validatedFields.push(field);
            }
        }
    }

    check(obj, schema);

    return {
        isValid: errors.length === 0,
        errors,
        validatedFields,
        summary: {
            total: validatedFields.length + errors.length,
            valid: validatedFields.length,
            invalid: errors.length
        }
    };
}

let user = {
    name: "John",
    email: "john@example.com",
    age: 25,
    address: {
        street: "Jl. Sudirman",
        city: "Jakarta"
    }
};

let schema = {
    name: { type: "string", required: true, minLength: 2 },
    email: { type: "string", required: true, pattern: /@/ },
    age: { type: "number", required: true, min: 18, max: 100 },
    address: {
        type: "object",
        required: true,
        properties: {
            street: { type: "string", required: true },
            city: { type: "string", required: true }
        }
    }
};

console.log(validateObjectSchema(user, schema));