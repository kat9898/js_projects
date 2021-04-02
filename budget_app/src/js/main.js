// Получить кнопку "Начать расчет" через id
let startButton = document.querySelector('#start');

// Получить все блоки в правой части программы через классы (которые
// имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )
let budgetValue = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level'),
    levelValue = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpenses = document.querySelector('.optionalexpenses'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income'),
    incomeValue = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

//     Получить поля (input) c обязательными расходами через класс
//     (class=”expenses-item”)
let expensesItems = document.querySelectorAll('.expenses-item');

//     Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей
//     переменной
let buttonSubmit1 = document.querySelector('button');
let buttonSubmit2 = document.querySelectorAll('button')[1];
let buttonCalculate = document.querySelectorAll('button')[2];

//     Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesInput = document.querySelectorAll('.optionalexpenses-item');

//     Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let incomeInput = document.querySelector('#income');
let savingsCheckbox = document.querySelector('#savings');
let sumInput = document.querySelector('#sum');
let percentInput = document.querySelector('#percent');
let yearValueInput = document.querySelector('.year-value');
let monthValueInput = document.querySelector('.month-value');
let dayValueInput = document.querySelector('.day-value');
//при нажатиии на кнопку счетчик увеличивается


let money;
let time;

buttonSubmit1.disabled = true;
buttonSubmit2.disabled = true;
buttonCalculate.disabled = true;


startButton.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValueInput.value = new Date(Date.parse(time)).getFullYear();
    monthValueInput.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValueInput.value = new Date(Date.parse(time)).getDate() + 1;
    buttonSubmit1.disabled = false;
    buttonSubmit2.disabled = false;
    buttonCalculate.disabled = false;
});

buttonSubmit1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
        if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) && (a != '') && (b != '') && (a.length < 50)) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("wrong result");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

buttonSubmit2.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesInput.length; i++) {
        let exp = optionalexpensesInput[i].value;
        if ((typeof (exp) === 'string') && (typeof (exp) != null) && (exp != '') && (exp.length < 50)) {
            appData.optionalExpenses[i] = exp;
        } else {
            console.log("wrong result");
            i--;
        }
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

buttonCalculate.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "произошла ошибка";
    }
});

incomeInput.addEventListener('input', function () {
    let items = incomeInput.value;
    if ((typeof (items) === 'string') && (typeof (items) != null) && (items != '')) {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
        // appData.income.push(prompt("Может что-то еще?"));
        // appData.income.sort();
    } else {
        console.log("wrong result");
    }
});


savingsCheckbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInput.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let text = "Наша программа включает в себя данные: ";

for (let key in appData) {
    text = text + key + ', ';
}
console.log(text);

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}