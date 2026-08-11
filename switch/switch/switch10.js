let bahasa = "EN";

switch (bahasa) {
    case "id":
    case "ID":
        console.log("Language: Bahasa Indonesia");
        break;

    case "en":
    case "EN":
        console.log("Language: English");
        console.log("Welcome! How can we help you today?");
        break;

    case "jp":
    case "JP":
        console.log("Language: Japanese");
        break;

    case "kr":
    case "KR":
        console.log("Language: Korean");
        break;

    default:
        console.log("Language not supported");
}