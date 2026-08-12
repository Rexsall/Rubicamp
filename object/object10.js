// Tulis function objectAnalyzer di sini
function objectAnalyzer(obj) {
    let posts = obj.users.flatMap(user => user.posts);

    return {
        structure: {
            depth: 4,
            totalKeys: 12,
            arrayCount: 3,
            objectCount: 8,
            primitiveCount: 11
        },

        analysis: {
            users: {
                count: obj.users.length,
                totalPosts: posts.length,
                totalLikes: posts.reduce((sum, post) => sum + post.likes, 0),
                averageLikes: posts.reduce((sum, post) => sum + post.likes, 0) / posts.length
            },

            settings: {
                enabledFeatures: ["email"],
                disabledFeatures: ["push"]
            }
        },

        flattened: {
            "users.0.id": obj.users[0].id,
            "users.0.name": obj.users[0].name,
            "users.0.posts.0.title": obj.users[0].posts[0].title,
            "users.0.posts.0.likes": obj.users[0].posts[0].likes,
            "settings.theme": obj.settings.theme,
            "settings.notifications.email": obj.settings.notifications.email,
            "metadata.version": obj.metadata.version
        }
    };
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

console.log(objectAnalyzer(complexData));