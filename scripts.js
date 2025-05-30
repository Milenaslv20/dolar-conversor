const iconEnglish = document.getElementById('icon_englosh');
const iconPortuguese = document.getElementById('icon_portuguese');

const text1 = document.getElementById('text_1');
const text2 = document.getElementById('text_2');
const data = document.getElementById('data');

const inputDolar = document.getElementById('input_dolar');
const inputReal = document.getElementById('input_real');

const dateNow = new Date();
const monthNowBR = dateNow.toLocaleString('pt-BR', { month: 'long' });
const monthNowUS = dateNow.toLocaleString('en-US', { month: 'long' });
const dayNow = dateNow.getDate();

const monthDayBR = `${dayNow} de ${monthNowBR.charAt(0).toUpperCase() + monthNowBR.slice(1)}`;
const monthDayUS = `${monthNowUS.charAt(0).toUpperCase() + monthNowUS.slice(1)} ${dayNow}`;

let dolarbrr = null

async function getDolarValue(){
    try{
        const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const data = await res.json();

        const dolarBrValueNow = parseFloat(data.USDBRL.bid)
        dolarbrr = parseFloat(data.USDBRL.bid)
        return dolarBrValueNow;
    } catch (err){
        console.log("Error to search reais: ", err);
        return null;
    }
} 
getDolarValue().then(value =>{
    if(value != null){
        const dolarBr = value.toFixed(2);

        messages.portuguese.text2 = `${dolarBr} Reais Brasileiros`;
        messages.english.text2 = `${dolarBr} Brazilian Real`;

        text2.textContent = messages[currentLanguage].text2;

        inputReal.value = dolarBr;
    };
});


let messages = {
    english: {
        text1: "1 United States Dollar =",
        text2: "",
        data: monthDayUS
    },
    portuguese: {
        text1: "1 Dólar Estadunidense =",
        text2: "",
        data: monthDayBR
    }
};

let currentLanguage = "portuguese";
window.addEventListener('DOMContentLoaded', () => {
    text1.textContent = messages['portuguese'].text1;
    text2.textContent = messages['portuguese'].text2;
    data.textContent = messages['portuguese'].data;
});

function languageChange(language){
    currentLanguage = language;

    text1.textContent = messages[currentLanguage].text1;
    text2.textContent = messages[currentLanguage].text2;
    data.textContent = messages[currentLanguage].data;
};


inputDolar.value = 1;

inputDolar.addEventListener('input', () => {
    const dolarValue = inputDolar.value;
    if (dolarValue != '') {
        inputReal.value = (dolarValue * dolarbrr).toFixed(2);
    } else {
        inputReal.value = '';
    }
});

inputReal.addEventListener('input', () => {
    const realValue = inputReal.value;
    if (inputReal.value === ''){
        inputDolar.value = ''
    } else {
        inputDolar.value = (realValue / dolarbrr).toFixed(2);
    }

});