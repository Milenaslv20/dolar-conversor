const iconEnglish = document.getElementById('icon_englosh');
const iconPortuguese = document.getElementById('icon_portuguese');

const text1 = document.getElementById('text_1');
const text2 = document.getElementById('text_2');
const data = document.getElementById('data');


let messages = {
    english: {
        text1: "1 United States Dollar",
        text2: "5.66 Brazilian Real",
        data: "May 6"
    },
    portuguese: {
        text1: "1 dolar estadunidense",
        text2: "5.66 reais brasileiros",
        data: "Maio 6"
    }
};

window.addEventListener('DOMContentLoaded', () => {
    text1.textContent = messages['portuguese'].text1;
    text2.textContent = messages['portuguese'].text2;
    data.textContent = messages['portuguese'].data;
});

let currentLanguage = "english"
function languageChange(language){
    currentLanguage = language;

    text1.textContent = messages[currentLanguage].text1;
    text2.textContent = messages[currentLanguage].text2;
    data.textContent = messages[currentLanguage].data;
}

