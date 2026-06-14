# Durak Download Site

Мини-сайт для загрузки APK игры «Дурак».

APK-файлы не хранятся в папке сайта. Сайт ссылается на файлы из GitHub Releases.

## Как добавить новую версию

Открой `script.js` и добавь новый объект в массив `apkVersions`.

Используй только формат с точкой:

```text
v0.4
v0.5
v0.6
```

Не используй `v04`, `v05`, `v06`.

Поля версии:

```js
{
  version: 'v0.4',
  title: 'Название версии',
  description: 'Краткое описание',
  status: 'текущая версия',
  url: 'https://github.com/AMKB100/durakBLEdownload/releases/download/v0.4/Durak-test-v4.apk',
  available: true,
  current: true,
}
```

Если версия ещё не готова, поставь:

```js
available: false
url: ''
```

## Текущая активная версия

Сейчас активная версия для скачивания:

```text
v0.2
https://github.com/AMKB100/durakBLEdownload/releases/download/v0.2/Durak-test-v2.apk
```

## Как проверить локально

Можно открыть `index.html` напрямую в браузере.

Или запустить простой локальный сервер из папки сайта:

```powershell
cd "C:\Users\KrutoyBekabraZz\Documents\Durak Mobile\durak-download-site"
python -m http.server 8080
```

Потом открыть:

```text
http://localhost:8080
```

## Перед публикацией на GitHub Pages

1. Проверь, что нужный APK загружен в GitHub Releases.
2. Проверь ссылку в `script.js`.
3. Открой сайт локально.
4. Нажми «Скачать APK».
5. Проверь, что `v0.2` скачивается, `v0.1` доступна как старая версия, `v0.3` disabled.
6. Залей изменения сайта в GitHub Pages branch/repository.
