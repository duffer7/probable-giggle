# Type Guards в TypeScript

Type Guards — это механизм, позволяющий **сужать типы** во время выполнения, чтобы компилятор понимал, с каким типом мы работаем. Они делают код безопаснее и позволяют использовать возможности строгой типизации.

## 🔑 Основные виды Type Guards

### 1. typeof

Используется для проверки примитивных типов:

```ts
function isString(value: unknown): value is string {
    return typeof value === 'string';
}
```
````

### 2. instanceof

Применяется для проверки экземпляров классов:

```ts
if (animal instanceof Dog) {
    animal.bark();
}
```

### 3. in

Позволяет проверить наличие свойства в объекте:

```ts
if ('permissions' in person) {
    console.log(person.permissions);
}
```

### 4. Пользовательские функции

Создаются вручную для сложных случаев:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
```

### 5. Discriminated unions

Используют поле `kind` для различения вариантов:

```ts
if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
}
```

### 6. Null guards

Безопасная работа с `null` и `undefined`:

```ts
if (str != null) {
    console.log(str.length);
}
```

### 7. Conditional types

Логика на уровне типов:

```ts
type IsArray<T> = T extends any[] ? 'array' : 'not array';
```

---

## 📊 Преимущества использования Type Guards

| **Проблема**                    | **Решение с Type Guards**   |
| ------------------------------- | --------------------------- |
| Ошибки при работе с union типов | Сужение до конкретного типа |
| Потеря типизации при `any`      | Явные проверки типов        |
| Сложность поддержки             | Читаемый и безопасный код   |

---

## 🚀 Итог

Type Guards — это **основа безопасного кода в TypeScript**, позволяющая работать с union и неизвестными типами без потери строгой типизации. Они применяются в функциях, классах, интерфейсах и условных конструкциях.
