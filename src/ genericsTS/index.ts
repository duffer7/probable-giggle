// ===============================
// Основы дженериков
// ===============================

// Универсальная функция
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity('hello'); // тип выводится автоматически

// ===============================
// Дженерики в функциях
// ===============================

function wrapInArray<T>(value: T): T[] {
    return [value];
}

const arrNum = wrapInArray(10); // number[]
const arrStr = wrapInArray('hi'); // string[]

// ===============================
// Дженерики в интерфейсах
// ===============================

interface ApiResponse<T> {
    data: T;
    status: number;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: 'Artemii' },
    status: 200,
};

// ===============================
// Дженерики в классах
// ===============================

class StorageBox<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const numberBox = new StorageBox<number>();
numberBox.add(1);
numberBox.add(2);

const stringBox = new StorageBox<string>();
stringBox.add('hello');

// ===============================
// Ограничения (Constraints)
// ===============================

function logLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

logLength('test'); // работает
logLength([1, 2, 3]); // работает
// logLength(42);        // ошибка: number не имеет length

// ===============================
// Несколько параметров типов
// ===============================

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: 'Artemii' }, { age: 28 });

// ===============================
// Значения по умолчанию для дженериков
// ===============================

interface Config<T = string> {
    option: T;
}

const defaultConfig: Config = { option: 'default' }; // T = string
const numberConfig: Config<number> = { option: 123 };

// ===============================
// Условные типы (Conditional Types)
// ===============================

type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// ===============================
// Utility Types (построены на дженериках)
// ===============================

interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>; // все поля необязательные
type PickUser = Pick<User, 'id' | 'name'>; // только id и name
type RecordMap = Record<string, number>; // объект с ключами string и значениями number
