const mock = [
    {
        id: 1,
        time: 'Перед рассветом',
        title: 'Утренний бухгалтер',
        subtitle: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
        items: [
            { icon: '../src/assets/Vector.svg', text: 'Новости для бухгалтеров, ИП и директора' },
            { icon: '../src/assets/Vector.svg', text: 'Подборка статей за день' }
        ],
        pinIcon: '..src/assets/Pin-light.svg',
        pinIconSmall: '../src/assets/Pin-light.svg',
        checkboxLabel: 'Уже получает 59 342 человек',
        checked: true
    },
    {
        id: 2,
        time: 'После заката',
        title: 'Ночной бухгалтер',
        subtitle: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
        items: [
            { icon: '../src/assets/Vector.svg', text: 'Анализ, оценка и только самое главное' },
            { icon: '../src/assets/Vector.svg', text: 'Лучшие комменты юзеров в обзоре' }
        ],
        pinIcon: '../src/assets/Pin-dark.svg',
        pinIconSmall: '../src/assets/Pin-dark.svg',
        checkboxLabel: 'Уже получает 37 480 человек',
    },
    {
        id: 3,
        time: 'Раз в две недели',
        title: 'Ножницы скидок',
        subtitle: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
        items: [
            { icon: '../src/assets/Vector.svg', text: 'Акции и скидки от лидеров рынка' },
            { icon: '../src/assets/Vector.svg', text: 'Те, кто подписался – экономят много денег' }
        ],
        pinIcon: '../src/assets/Scissors.svg',
        pinIconSmall: '../src/assets/Scissors-small.svg',
        checkboxLabel: 'Уже получает 92 118 человек',
    },
    {
        id: 4,
        time: 'По мере появления анонсов',
        title: 'Чемодан вебинаров',
        subtitle: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
        items: [
            { icon: '../src/assets/Vector.svg', text: 'Никогда не пришлем платные вебинары' },
            { icon: '../src/assets/Vector.svg', text: 'Подборка топовых тем для вебинаров' }
        ],
        pinIcon: '../src/assets/Pay.svg',
        pinIconSmall: '../src/assets/Pay-small.svg',
        checkboxLabel: 'Уже получает 92 082 человек',
    }, 
];

export { mock };