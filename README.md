# 📝 GenDiff — CLI-утилита для сравнения файлов конфигураций

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)

#### Hexlet tests and linter status:
[![Actions Status](https://github.com/kronnoss37/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kronnoss37/frontend-project-46/actions)

#### GenDiff
[![CI](https://github.com/kronnoss37/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/kronnoss37/frontend-project-46/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kronnoss37_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=kronnoss37_frontend-project-46)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=kronnoss37_frontend-project-46&metric=bugs)](https://sonarcloud.io/summary/new_code?id=kronnoss37_frontend-project-46)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kronnoss37_frontend-project-46&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=kronnoss37_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kronnoss37_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=kronnoss37_frontend-project-46)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=kronnoss37_frontend-project-46&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=kronnoss37_frontend-project-46)

## 📘 Описание проекта

**GenDiff** — консольная утилита для определения различий между двумя структурами данных. Позволяет сравнивать данные с вложенной структурой и отображать изменения в удобном формате.

GenDiff умеет принимать через командную строку два аргумента — пути до двух файлов, анализирует их и определяет:

- какие параметры **добавлены**
- какие **удалены**
- какие **остались без изменений**

Утилита корректно работает с вложенными объектами и поддерживает несколько форматов вывода, что делает её удобной для анализа конфигураций и данных.

## 📂 Поддерживаемые форматы

### Входные файлы
- JSON
- YAML / YML

### Форматы вывода

- **stylish** — древовидное представление (по умолчанию)
- **plain** — текстовое описание изменений
- **json** — структурированный JSON-вывод

## ✨ Возможности

- 🔍 Сравнение вложенных структур любой глубины  
- 📄 Поддержка JSON и YAML  
- 🧾 Несколько форматов отображения результата  
- 🧪 Покрытие тестами (Jest)  
- ⚙️ Удобный CLI-интерфейс  
- 📚 Может работать как библиотека

## 🛠 Используемые технологии

- JavaScript (ES6+)
- Node.js
- Commander.js
- Jest
- Lodash

## 🚀 Установка и запуск

```bash
# Clone the repository
git clone https://github.com/kronnoss37/frontend-project-46.git

# Navigate to the project directory
cd frontend-project-46

# Install dependencies for the program to work correctly
make install

# Makes the CLI command `gendiff` available globally
npm link
```

## 🧭 Примеры использования

#### Вывод справки об cli-утилите
```bash
gendiff -h
```

#### Общий формат команды
```bash
gendiff [options] <filepath1> <filepath2>
```
- `[options]` — дополнительные параметры (например, формат вывода)
- `<filepath1> <filepath2>` - пути до файлов

#### Сравнение JSON-файлов
```bash
# Example with ready-made json files
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

#### Сравнение YAML-файлов
```bash
# Example with ready-made yml files
gendiff __fixtures__/file1.yml __fixtures__/file2.yml
```

#### Использование формата stylish (по умолчанию)
```bash
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

#### Использование формата json
```bash
gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
```

#### Использование формата plain text
```bash
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
```

## 🎥 Демонстрация

<!-- See how to run GenDiff tool in terminal with comparison of two json files:
[![asciicast](https://asciinema.org/a/MSbS8x8KigXzCQ4zQ8oo84IFj.svg)](https://asciinema.org/a/MSbS8x8KigXzCQ4zQ8oo84IFj)

See how to compare two yml files:
[![asciicast](https://asciinema.org/a/roAepCshvpGBmjFxQZ8SZgi4c.svg)](https://asciinema.org/a/roAepCshvpGBmjFxQZ8SZgi4c) -->

#### 1. Пример запуска приложения, используя Stylish format (форматы файлов: json и yml):
[![asciicast](https://asciinema.org/a/eTleFAKumHYA9xLJH2BgIJpHb.svg)](https://asciinema.org/a/eTleFAKumHYA9xLJH2BgIJpHb)

#### 2. Пример запуска приложения, используя Plain format (форматы файлов: json и yml):
[![asciicast](https://asciinema.org/a/3iAORfA4olmLECv5Ut8dmajey.svg)](https://asciinema.org/a/3iAORfA4olmLECv5Ut8dmajey)

#### 3. Пример запуска приложения, используя JSON format (форматы файлов: json и yml):
[![asciicast](https://asciinema.org/a/xNqbUh2rwp4f4YqtUf1Ej1uMw.svg)](https://asciinema.org/a/xNqbUh2rwp4f4YqtUf1Ej1uMw)
