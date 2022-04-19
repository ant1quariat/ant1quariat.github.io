const changeLang = document.querySelector('#toggle-lang');
const allLang = ['ru', 'en'];
const langArr = {
        "lng-home" : 
            {
                "ru": "Главная",
                "en": "Home"
            },
        "lng-about" : 
            {
                "ru": "О нас",
                "en": "About Us"
            },
        "lng-project" : 
            {
                "ru": "Проекты",
                "en": "Projects"
            },
        "lng-more" : 
            {
                "ru": "Другое",
                "en": "More"
            },
        "lng-theme" : 
            {
                "ru": "Смена темы",
                "en": "Change theme"
            },
        "lng-lang" : 
            {
                "ru": "Сменить язык",
                "en": "Change lang"
            },
        "lng-title" : 
            {
                "ru": "Привет интернет!",
                "en": "Hi world!"
            },
        "lng-welcome" : 
            {
                "ru": "Добро пожаловать на демонстрационный сайт!",
                "en": "Welcome to demonstration site"
            }
    }


changeLang.addEventListener('change', changeURLLanguage);

function changeURLLanguage()
    {
        if (localStorage.getItem("lang") == "en")
            {
                localStorage.setItem("lang", "ru");
                
                let lang = "ru";

                location.href = window.location.pathname + '#' + lang;
        
                location.reload();
            }
        else
            {
                localStorage.setItem("lang", "en");

                let lang = "en";

                location.href = window.location.pathname + '#' + lang;
        
                location.reload();
            }
    }


function changeLanguage()
    {
        let hash = window.location.hash;
        hash = hash.substr(1);

        if (!allLang.includes(hash))
            {
                location.href = window.location.pathname + '#ru';
                location.reload();
            }
        changeLang.value = hash;

        document.querySelector('.lng-home').innerHTML = langArr['lng-home'][hash];
        document.querySelector('.lng-about').innerHTML = langArr['lng-about'][hash];
        document.querySelector('.lng-project').innerHTML = langArr['lng-project'][hash];
        document.querySelector('.lng-more').innerHTML = langArr['lng-more'][hash];
       
        document.querySelector('.lng-title').innerHTML = langArr['lng-title'][hash];
        document.querySelector('.lng-welcome').innerHTML = langArr['lng-welcome'][hash];
        
        document.querySelector('.lng-theme').innerHTML = langArr['lng-theme'][hash];
    }
changeLanguage()