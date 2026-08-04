let bahasa = "EN"
let Language
let kalimat

switch (bahasa) {
  case "EN":
    Language = "English"
    kalimat = "Welcome! How can we help you today?"
    break;

  case "ID":
    Language = "Indonesia"
    kalimat = "Selamat datang! Ada yang bisa kami bantu hari ini?"
    break;  

  case "JP":
    Language = "Japanese"
    kalimat = "いらっしゃいませ。本日は何かお手伝いできることはございますか？"
    break;  

  case "KR":
    Language = "Korean"
    kalimat = "환영합니다! 오늘 무엇을 도와드릴까요?"
    break;  
  

default:
    Language = "Language not supported"; 
    kalimat = "-"
    break;

  
}

console.log(`Language: ${Language}
${kalimat}`);