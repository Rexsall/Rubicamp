// Tulis function objectAnalyzer di sini
function objectAnalyzer(obj) {
    let depth = 0
    let arrayCount = 0
    let objectCount = 0
    let primitiveCount = 0
    let flattened = {}
    let keys = []

    function analyze(input, flatkey = '', depthflat = 0) {
        depth = Math.max(depth, depthflat);
        if (input !== null && typeof input === 'object' && !Array.isArray(input)) { // cek is object
            objectCount++
            for (key in input) {
                if (!keys.includes(key)) keys.push(key)
                analyze(input[key], `${flatkey ? `${flatkey}.` : ``}${key}`, depthflat + 1)
            }
        } else if (Array.isArray(input)) { // cek is array
            arrayCount++
            input.forEach((value, index) => {
                analyze(value, `${flatkey ? `${flatkey}.` : ``}${index}`, depthflat + 1)
            });
        } else {
            primitiveCount++
            flattened[flatkey] = input
            depth = Math.max(depth, depthflat);
        }
    }

    analyze(obj)
    let totalPosts = obj.users.reduce((total, item) => total + item.posts.length, 0)
    let totalLikes = obj.users.reduce((total, item) => total + item.posts.reduce((totallikes, post) => totallikes + post.likes, 0), 0)
    const enabledFeatures = []
    const disabledFeatures = []
    for (feature in obj.settings.notifications) {
        if (obj.settings.notifications[feature]) {
            enabledFeatures.push(feature)
        } else {
            disabledFeatures.push(feature)
        }
    }
    return {
        structure: {
            depth,
            totalKeys: keys.length,
            arrayCount,
            objectCount,
            primitiveCount
        },
        analysis: {
            users: {
                count: obj.users.length,
                totalPosts,
                totalLikes,
                averageLikes: totalLikes / totalPosts
            },
            settings: {
                enabledFeatures,
                disabledFeatures
            }
        },
        flattened
    }
}
let complexData = {
    users: [
        { id: 1, name: "Alice", posts: [{ title: "Hello", likes: 10 }] },
        { id: 2, name: "Bob", posts: [{ title: "World", likes: 5 }, { title: "Test", likes: 15 }] }
    ],
    settings: {
        theme: "dark",
        notifications: { email: true, push: false }
    },
    metadata: {
        version: "1.0",
        lastUpdated: "2023-01-01"
    }
};

console.log(JSON.stringify(objectAnalyzer(complexData), null, 3));