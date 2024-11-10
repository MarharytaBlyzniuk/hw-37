"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = exports.Calculator = void 0;
exports.createPerson = createPerson;
console.log('#20. TypeScript homework example file');
function createPerson(name, age, isActive) {
    return {
        name,
        age,
        isActive
    };
}
// Example usage
const newPerson = createPerson('Олександр', 31, false);
console.log(newPerson); // { name: 'Олександр', age: 31, isActive: false }
/*
 * #2
 *
 * Задача: Розробити клас `Calculator` з методами `add` і `multiply`, які будуть логувати виклики цих методів за допомогою декоратора `LogMethodCalls`.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас `Calculator` має містити метод `add`, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас `Calculator` має містити метод `multiply`, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (`add` і `multiply`) мають бути оздоблені декоратором `LogMethodCalls`. Цей декоратор має логувати ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор `LogMethodCalls` має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу. При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: `Calling "<ім'я_методу>" with arguments: <аргументи_методу>`.
 * 5. Всі виводи логів мають здійснюватись через `console.log`.
 *
 */
// Декоратор для логирования вызовов методов
// Декоратор для логирования вызовов методов
function LogMethodCalls(target, propertyName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value; // Сохраняем оригинальный метод
    // Переопределяем метод для добавления логирования
    propertyDescriptor.value = function (...args) {
        // Логируем имя метода и его аргументы
        console.log(`Calling "${propertyName}" with arguments: ${args.join(', ')}`);
        // Вызываем оригинальный метод и возвращаем его результат
        return originalMethod.apply(this, args);
    };
}
let Calculator = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _add_decorators;
    let _multiply_decorators;
    return _a = class Calculator {
            // Применяем декоратор для метода add
            add(a, b) {
                return a + b;
            }
            // Применяем декоратор для метода multiply
            multiply(a, b) {
                return a * b;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [LogMethodCalls];
            _multiply_decorators = [LogMethodCalls];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _multiply_decorators, { kind: "method", name: "multiply", static: false, private: false, access: { has: obj => "multiply" in obj, get: obj => obj.multiply }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.Calculator = Calculator;
// Пример использования
const calculator = new Calculator();
// Тестируем метод add с логированием
console.log(calculator.add(2, 3)); // Лог: "Calling "add" with arguments: 2, 3" -> 5
// Тестируем метод multiply с логированием
console.log(calculator.multiply(3, 4)); // Лог: "Calling "multiply" with arguments: 3, 4" -> 12
/*
 * #3
 *
 * Задача: Реалізувати функціонал для створення профілю користувача в просторі імен UserProfile.
 *
 * Мета: Надати можливість створювати об'єкт профілю з унікальним ідентифікатором, ім'ям та електронною поштою.
 *
 * Вимоги до реалізації:
 * 1. Створити namespace `UserProfile`, що слугуватиме контейнером для визначення інтерфейсу профілю та функцій.
 * 2. Визначити всередині `UserProfile` інтерфейс `ProfileInterface`, який має містити властивості `id` (string), `name` (string) та `email` (string).
 * 3. Реалізувати функцію `createProfile` всередині `UserProfile`, яка приймає `name` та `email`, створює та повертає об'єкт `ProfileInterface` з унікальним `id`, вказаним ім'ям та електронною поштою.
 * 4. Функція `generateId` має бути приватною всередині `UserProfile` і слугувати для генерації унікального ідентифікатора для кожного профілю.
 *
 */
var UserProfile;
(function (UserProfile) {
    function createProfile(name, email) {
        return {
            id: generateId(),
            name,
            email
        };
    }
    UserProfile.createProfile = createProfile;
    function generateId() {
        return Math.random().toString(36).substr(2, 10);
    }
})(UserProfile || (exports.UserProfile = UserProfile = {}));
// Example usage
const profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile); // { id: "unique_id", name: "John Doe", email: "john@example.com" }
