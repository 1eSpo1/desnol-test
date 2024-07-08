export const ITEMS_PER_PAGE = 3;

export const MOCK_THEMES = [
    'Тема',
    'Номер',
    'Дата создания',
    'Дата изменения',
    'Крайний срок',
    'Состояние',
    'Ожидает ответа',
    'Описание',
    'Решение',
    'Услуга',
    'Состав услуги',
]

export type MockData = {
    deadline_date: string;
    serviceComposition: string;
    solution: null | string;
    change_date: string;
    service: string;
    description: string;
    theme: string;
    id: number;
    creation_date: string;
    state: string;
    user: string;
    awaits: boolean
}

export const MOCK_DATA : MockData[] = [
    {
        user: 'gavrilov',
        theme: 'Электронная почта',
        id: 95708,
        creation_date: '20.05.2024 15:22',
        change_date: '20.05.2024 17:22',
        deadline_date: '21.05.2024 17:22',
        state: 'В работе',
        awaits: false,
        description: 'Прошу сделать переадресацию на время отпуска',
        solution: null,
        service: 'Интернет',
        serviceComposition: 'Почта',
    },
    {
        user: 'gavrilov',
        theme: 'Установка почты',
        id: 95802,
        creation_date: '22.05.2024 11:22',
        change_date: '22.05.2024 12:22',
        deadline_date: '23.05.2024 17:22',
        state: 'Зарегистрировано',
        awaits: false,
        description: 'Прошу установить платформу 8.3.24',
        solution: null,
        service: 'Поддержка рабочих мест',
        serviceComposition: 'Настройка ПО',
    },
    {
        user: 'gavrilov',
        theme: 'Подключение к сети',
        id: 95803,
        creation_date: '24.05.2024 9:22',
        change_date: '24.05.2024 11:22',
        deadline_date: '25.05.2024 17:22',
        state: 'На согласовании',
        awaits: false,
        description: 'Нужен доступ к serversoft',
        solution: null,
        service: 'Интернет',
        serviceComposition: 'Доступ',
    },
    {
        user: 'gavrilov',
        theme: 'Установка ПО на ПК',
        id: 95804,
        creation_date: '24.05.2024 15:22',
        change_date: '24.05.2024 17:22',
        deadline_date: '25.05.2024 17:22',
        state: 'Выполнено. Требует подтверждения',
        awaits: true,
        description: 'Для нового сотрудника нужна IDE',
        solution: 'Софт установлен',
        service: 'Поддержка рабочих мест',
        serviceComposition: 'Настройка ПО',
    },
    {
        user: 'gavrilov',
        theme: 'Проблема с сетью',
        id: 95901,
        creation_date: '25.05.2024 15:22',
        change_date: '26.05.2024 17:22',
        deadline_date: '26.05.2024 17:22',
        state: 'Зарегестрировано',
        awaits: false,
        description: 'Не заходит на внешние сайты при включенном впн',
        solution: null,
        service: 'Интернет',
        serviceComposition: 'Доступ',
    },
    {
        user: 'gavrilov',
        theme: 'Установка проектора',
        id: 95902,
        creation_date: '27.05.2024 15:22',
        change_date: '27.05.2024 17:22',
        deadline_date: '28.05.2024 17:22',
        state: 'Закрыто',
        awaits: false,
        description: 'В ауд. 312',
        solution: 'Проекторор установлен',
        service: 'Поддержка рабочих мест',
        serviceComposition: 'Настройка оборудования',
    },
    {
        user: 'gavrilov',
        theme: 'Активация Office',
        id: 95903,
        creation_date: '29.05.2024 15:22',
        change_date: '29.05.2024 17:22',
        deadline_date: '30.05.2024 17:22',
        state: 'На согласовании',
        awaits: true,
        description: 'Требуется офис на выездном ноутбуке',
        solution: 'Активирован 2016',
        service: 'Поддержка рабочих мест',
        serviceComposition: 'Настройка ПО',
    },
    {
        user: 'fedorov',
        theme: 'Замена картриджа',
        id: 95918,
        creation_date: '29.05.2024 15:22',
        change_date: '29.05.2024 17:22',
        deadline_date: '30.05.2024 17:22',
        state: 'В работе',
        awaits: false,
        description: 'В каб. 111',
        solution: null,
        service: 'Поддержка рабочих мест',
        serviceComposition: 'Настройка оборудования',
    },
]