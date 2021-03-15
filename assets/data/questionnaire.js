let questionnaire = (function () {
  if (localStorage.getItem("Questionnaire")) {    
    return JSON.parse(localStorage.getItem("Questionnaire"));
  } else {
    let questionnaire = [
      {
        title: "Влюбени ли сте?",
        question: {
          "Да, любовта е основна движеща сила в живота ми.": 16,
          "Не, това е измислица, за да ни вземат парите.": 67,
          "Айде сега и екзистенциални въпроси в съмнителни сайтове...": 154,
        },
      },
      {
        title: "Верно ли е тва?",
        question: {
          "Не, фейк нюс от фабриката за тролове на Цветанцветан.": 50,
          "Да, не бих се изненадал.": 49,
          "Апокалипсисът започва.": 73,
        },
      },
      {
        title: "Работа ли му е на Гешев да дири Путин?",
        question: {
          "Да, добротата не бива да познава граници.": 163,
          "Не, да погне тукашните Путини.": 44,
          "А за Байдън що нищо не казва, соросоид!": 166,
        },
      },
      {
        title: "Как се бори расизма?",
        question: {
          "С шамари.": 87,
          "С контрарасизъм.": 96,
          "С това да си остане вкъщи, а не да се разнася на работното място и в социалистическите мрежи.": 155,
        },
      },
      {
        title: "Защо Маджо клати Путин?",
        question: {
          "Майтап.": 95,
          "Наговорили са се да си чистят имиджа така.": 164,
          "Защото има зъб на Дерипаска.": 205,
        },
      },
      {
        title: "Кой има по-големи шансове да управлява Русия?",
        question: {
          "Тръмп.": 20,
          "Навални.": 24,
          "Демократична България.": 136,
        },
      },
      {
        title: "Ще турите ли лайк на новата страница?",
        question: {
          "Да, смяната на главния герой от безкос в рижокос е едно добро освежаване.": 63,
          "Не, родното си е родно, даже и като е хоро в ледена вода посред пандемия.": 43,
          "Тойотата продава ли се, за един преател питам?": 182,
        },
      },
      {
        title: "Колко трябва да е топло?",
        question: {
          "2-5 градуса е идеално за бира": 89,
          "32 по Фахренхайт": 23,
          "100 по Келвин": 33,
          "Като сърцето на бившата": 256,
        },
      },
      {
        title: "Ще си купите ли книгата?",
        question: {
          "Ще нахлуя да си я открадна.": 85,
          "Не чета литература за реднеци.": 46,
          "Вече се набутах.": 26,
        },
      },
      {
        title: "Как сте във фентъзито?",
        question: {
          "Изненадващо добре.": 48,
          "Толкова зле, че обмислям да изям прилеп.": 110,
          "Добре, че ме подсетихте да обявя, че не ми пука за инфантилните ви глупости.": 106,
        },
      },
      {
        title: "На кого е кръстен той.",
        question: {
          "На Джак, ма! Бахти въпроса.": 235,
          "На Жак Пепен.": 24,
          "На майор Майор Майор.": 54,
        },
      },
      {
        title: "Какво ще си поръчате от Дядо Коледа експрес?",
        question: {
          "Пица.": 35,
          "Годеница. <3": 37,
          "Конзола.": 13,
          "Да спре да ми тече сополът.": 116,
        },
      },
      {
        title: "Ще се ваксинисате ли?",
        question: {
          "Само, ако няма да мога да ида на Гърция.": 387,
          "Да, тогава ще мога да се държа странно с хората и да имам оправдание.": 487,
          "Не, ще настина, това нещо е на -70 градуса, ще ме замрази отвътре.": 488,
        },
      },
      {
        title: "Какво ще правите със стария си COVID?",
        question: {
          "Надявам се да има оферта да го върна и да доплатя малко за новия.": 250,
          "Надявам се, че ще издържи още, без да му пуснат ъпдейт, който го ограничава.": 164,
          "Надявам се, че ще си остана на обикновен грип и за вбъдеще.": 203,
        },
      },
      {
        title: "Англичаните готови ли са за нова радикална промяна?",
        question: {
          "От тия всичко се очаква.": 72,
          "Ще назначат царското семейство на висши партийни позиции. Няма ко да стане.": 105,
          "Тва го знаем отдавна. Очакваше се след изборите в САЩ": 51,
        },
      },
      {
        title: "На кого да вярваме?",
        question: {
          "Е на нашенеца, няма далавера да лъже.": 121,
          "На официалните източници, все пак са официални.": 10,
          "На никого не вярвам вече, само на Джуди Майковиц.": 52,
        },
      },
      {
        title: "Ако бяхте македонци, как бихте постъпили?",
        question: {
          "Ние сме македонци": 94,
          "Само Горан Пандев и плешиви патки": 73,
          "Ако загубим и трите мача в групата им обявяваме война на руска рулетка": 89,
        },
      },
    ];
    questionnaire.forEach((element, index) => {
      element.id = index + 1;
      
    });    
    let survey = JSON.stringify(questionnaire);    
    localStorage.setItem("Questionnaire", survey);    
    return JSON.parse(localStorage.getItem("Questionnaire"));
  }
})();

