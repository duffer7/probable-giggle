// ==========================================
// 1. ИНТЕРФЕЙСЫ И АБСТРАКТНЫЕ КЛАССЫ
// ==========================================

interface Loggable {
    log(): void;
}

interface Printable {
    print(): void;
}

abstract class BaseEntity {
    // Parameter Properties + readonly
    constructor(public readonly id: number) {}

    // Абстрактный метод (обязателен к реализации в наследниках)
    abstract getMetadata(): string;

    // Обычный метод с реализацией
    public getCreatedTimestamp(): number {
        return Date.now();
    }
}

// ==========================================
// 2. ОСНОВНОЙ КЛАСС: МОДИФИКАТОРЫ, GET/SET, STATIC
// ==========================================

class User extends BaseEntity implements Loggable, Printable {
    // 1. Модификаторы доступа и readonly
    public name: string;
    protected role: string;
    private pinCode: number;
    #secretHash: string; // Native JS private (#)

    // 2. Definite assignment assertion (!), если значение задается вне конструктора
    lateInitializedField!: string;

    // 3. Static поля и блочная инициализация
    static readonly defaultRole: string = 'GUEST';
    private static instanceCount: number = 0;

    static {
        // Static initialization block (выполняется при загрузке класса)
        User.instanceCount = 0;
    }

    // Конструктор
    constructor(
        id: number,
        name: string,
        role: string = User.defaultRole,
        pinCode: number,
        secretHash: string,
    ) {
        super(id); // Обязательный вызов родительского конструктора
        this.name = name;
        this.role = role;
        this.pinCode = pinCode;
        this.#secretHash = secretHash;

        User.instanceCount++;
    }

    // 4. Геттеры и Сеттеры
    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            throw new Error('Age cannot be negative');
        }
        this._age = value;
    }

    // Static метод
    static getInstanceCount(): number {
        return User.instanceCount;
    }

    // Реализация абстрактного метода
    override getMetadata(): string {
        return `User #${this.id}: ${this.name}`;
    }

    // Реализация интерфейсов
    log(): void {
        console.log(`[LOG] ${this.getMetadata()}`);
    }

    print(): void {
        console.log(`[PRINT] Name: ${this.name}, Role: ${this.role}`);
    }
}

// ==========================================
// 3. НАСЛЕДОВАНИЕ И OVERRIDE
// ==========================================

class AdminUser extends User {
    // Parameter Properties в наследнике
    constructor(
        id: number,
        name: string,
        pinCode: number,
        secretHash: string,
        public superAdminPermissions: string[],
    ) {
        super(id, name, 'ADMIN', pinCode, secretHash);
    }

    // Переопределение метода с использованием override
    override getMetadata(): string {
        // Доступ к protected свойству 'role' родительского класса
        return `[ADMIN] ID: ${this.id}, Role: ${this.role}, Permissions: ${this.superAdminPermissions.length}`;
    }
}

// ==========================================
// 4. GENERIC КЛАССЫ
// ==========================================

class Repository<T extends BaseEntity> {
    private items: Map<number, T> = new Map();

    add(item: T): void {
        this.items.set(item.id, item);
    }

    getById(id: number): T | undefined {
        return this.items.get(id);
    }

    getAll(): T[] {
        return Array.from(this.items.values());
    }
}

// ==========================================
// 5. КОНТЕКСТ THIS: FLUENT INTERFACE & TYPE GUARDS
// ==========================================

// Polymorphic 'this' (Fluent Interface)
class QueryBuilder {
    protected fields: string[] = [];

    select(...fields: string[]): this {
        this.fields.push(...fields);
        return this;
    }
}

class UserQueryBuilder extends QueryBuilder {
    whereActive(): this {
        this.fields.push('is_active = true');
        return this;
    }
}

// This-based type guard
abstract class NetworkState {
    isSuccess(): this is SuccessState {
        return this instanceof SuccessState;
    }

    isError(): this is ErrorState {
        return this instanceof ErrorState;
    }
}

class SuccessState extends NetworkState {
    constructor(public data: string) {
        super();
    }
}

class ErrorState extends NetworkState {
    constructor(public error: Error) {
        super();
    }
}

// ==========================================
// 6. СТРУКТУРНАЯ ТИПИЗАЦИЯ И ТИПЫ КОНСТРУКТОРОВ
// ==========================================

// Структурная совместимость (Shape Matching)
class Point2D {
    x: number = 0;
    y: number = 0;
}

class Vector2D {
    x: number = 0;
    y: number = 0;
}

const point: Point2D = new Vector2D(); // Работает благодаря структурной типизации

// Class Expression (Классовое выражение)
const AnonymousLogger = class {
    log(msg: string) {
        console.log(msg);
    }
};

// Типизация конструктора (Constructor Type / Factory)
interface ComponentFactory<T> {
    new (...args: any[]): T;
}

function createInstance<T>(ctor: ComponentFactory<T>, ...args: any[]): T {
    return new ctor(...args);
}

// ==========================================
// 7. ИСПОЛЬЗОВАНИЕ И ПРОВЕРКА
// ==========================================

// Инициализация объекта
const user = new User(1, 'Artem', 'DEVELOPER', 1234, 'hash_secret_val');
user.age = 25;
user.log();

// Использование Generic-репозитория
const userRepo = new Repository<User>();
userRepo.add(user);

// Fluent interface с polymorphic this
const query = new UserQueryBuilder().select('id', 'name').whereActive();

// Fabric функция
const createdAdmin = createInstance(AdminUser, 2, 'Alex', 9999, 'hash_admin', ['READ', 'WRITE']);
