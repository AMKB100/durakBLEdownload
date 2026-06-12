# Durak Download Site

Мини-сайт-качалка для тестовой Android APK-сборки игры «Дурак».

## Как использовать

1. Скопируй новый APK сюда:

```text
downloads/Durak-test-v1.apk
```

Можно взять его из Flutter-проекта:

```text
C:\Users\KrutoyBekabraZz\Documents\Durak Mobile\build\app\outputs\flutter-apk\app-debug.apk
```

и переименовать в:

```text
Durak-test-v1.apk
```

2. Посчитай SHA256:

```powershell
cd "C:\Users\KrutoyBekabraZz\Documents\Durak Mobile\build\app\outputs\flutter-apk"
Get-FileHash ".\app-debug.apk" -Algorithm SHA256
```

3. В `index.html` замени:

```text
ВСТАВЬТЕ_SHA256_СЮДА
```

на полученный SHA256.

4. Залей файлы в GitHub repository.

## GitHub Pages

В GitHub:

1. Repository → Settings.
2. Pages.
3. Source: Deploy from a branch.
4. Branch: main.
5. Folder: /root.
6. Save.

После этого сайт будет доступен по адресу GitHub Pages.

## Важно

Для теста можно использовать debug APK. Для более нормальной раздачи людям лучше потом сделать release APK/AAB с подписью.
