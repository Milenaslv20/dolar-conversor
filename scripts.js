const iconEnglish = document.getElementById('icon_englosh');
const iconPortuguese = document.getElementById('icon_portuguese');

const text1 = document.getElementById('text_1');
const text2 = document.getElementById('text_2');
const data = document.getElementById('data');

const dateNow = new Date();
const monthNowBR = dateNow.toLocaleString('pt-BR', { month: 'long' });
const monthNowUS = dateNow.toLocaleString('en-US', { month: 'long' });
const dayNow = dateNow.getDate();

const monthDayBR = `${dayNow} de ${monthNowBR.charAt(0).toUpperCase() + monthNowBR.slice(1)}`;
const monthDayUS = `${monthNowUS.charAt(0).toUpperCase() + monthNowUS.slice(1)} ${dayNow}`;

let messages = {
    english: {
        text1: "1 United States Dollar",
        text2: "5.66 Brazilian Real",
        data: monthDayUS
    },
    portuguese: {
        text1: "1 Dólar Estadunidense",
        text2: "5.66 Reais Brasileiros",
        data: monthDayBR
    }
};

window.addEventListener('DOMContentLoaded', () => {
    text1.textContent = messages['portuguese'].text1;
    text2.textContent = messages['portuguese'].text2;
    data.textContent = messages['portuguese'].data;
});

let currentLanguage = "english";
function languageChange(language){
    currentLanguage = language;

    text1.textContent = messages[currentLanguage].text1;
    text2.textContent = messages[currentLanguage].text2;
    data.textContent = messages[currentLanguage].data;
};

