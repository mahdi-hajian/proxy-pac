# پیکربندی پروکسی PAC

[Switch to English](README.md)

به مخزن **پیکربندی پروکسی PAC** خوش آمدید. این مخزن شامل یک فایل تنظیمات خودکار پروکسی (PAC) است که برای مدیریت و بهینه‌سازی تنظیمات پروکسی برای دامنه‌های خاص طراحی شده است. این فایل PAC تضمین می‌کند که برخی دامنه‌ها پروکسی را دور زده و به‌صورت مستقیم متصل می‌شوند، در حالی که سایر ترافیک‌ها از طریق سرور پروکسی تعیین‌شده هدایت می‌شوند.

## فهرست مطالب

- [مقدمه](#مقدمه)
- [ویژگی‌ها](#ویژگی‌ها)
- [نصب و استفاده](#نصب-و-استفاده)
  - [استفاده از فایل PAC](#استفاده-از-فایل-pac)
  - [دستورالعمل‌های پیکربندی](#دستورالعمل‌های-پیکربندی)
- [لیست دامنه‌های مستقیم](#لیست-دامنه‌های-مستقیم)
- [مشارکت](#مشارکت)
- [مجوز](#مجوز)

## مقدمه

فایل تنظیمات خودکار پروکسی (PAC) در این مخزن برای ساده‌سازی ترافیک شبکه شما طراحی شده است و با تعیین قوانین پروکسی برای دامنه‌های مختلف به شما کمک می‌کند. با استفاده از این فایل PAC، می‌توانید کنترل کنید که کدام دامنه‌ها باید به‌صورت مستقیم متصل شوند و کدام باید از طریق سرور پروکسی هدایت شوند.

## ویژگی‌ها

- **پیکربندی خودکار پروکسی**: به‌طور خودکار تشخیص می‌دهد که آیا باید از سرور پروکسی استفاده کند یا به‌صورت مستقیم متصل شود، بر اساس دامنه درخواست شده.
- **قابلیت سفارشی‌سازی**: به‌راحتی می‌توانید فایل PAC را برای اضافه یا حذف دامنه‌ها از لیست اتصال مستقیم تغییر دهید.
- **مدیریت متمرکز**: فایل PAC را بر روی یک سرور وب (مانند GitHub Pages) میزبانی کنید تا به‌راحتی در بین دستگاه‌ها و کاربران مختلف مستقر شود.

## نصب و استفاده

### استفاده از فایل PAC

فایل PAC بر روی GitHub Pages میزبانی شده و می‌توانید با استفاده از URL زیر به آن دسترسی پیدا کنید:

```
https://mahdi-hajian.github.io/proxy-pac/proxy.pac
```

### دستورالعمل‌های پیکربندی

برای استفاده از فایل PAC در مرورگر یا سیستم خود، مراحل زیر را دنبال کنید:

#### گوگل کروم

1. **تنظیمات** را باز کنید.
2. به پایین بروید و بر روی **پیشرفته** کلیک کنید.
3. در بخش **سیستم**، بر روی **تنظیمات پروکسی رایانه خود را باز کنید** کلیک کنید.
4. در فیلد **URL پیکربندی خودکار پروکسی**، URL فایل PAC را وارد کنید:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

5. بر روی **ذخیره** کلیک کنید.

#### موزیلا فایرفاکس

1. **گزینه‌ها** را باز کنید.
2. به بخش **تنظیمات شبکه** بروید و بر روی **تنظیمات...** کلیک کنید.
3. گزینه **URL پیکربندی خودکار پروکسی** را انتخاب کنید.
4. URL فایل PAC را وارد کنید:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

5. بر روی **تأیید** کلیک کنید تا تنظیمات ذخیره شود.

#### ویندوز

1. **کنترل پنل** را باز کنید.
2. به **شبکه و اینترنت** > **گزینه‌های اینترنت** بروید.
3. بر روی تب **اتصالات** و سپس **تنظیمات LAN** کلیک کنید.
4. تیک گزینه **استفاده از اسکریپت پیکربندی خودکار** را بزنید.
5. URL فایل PAC را وارد کنید:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

6. بر روی **تأیید** کلیک کنید تا تغییرات اعمال شود.

#### مک‌او‌اس

1. **تنظیمات سیستم** را باز کنید.
2. به **شبکه** بروید.
3. شبکه خود را انتخاب کرده و بر روی **پیشرفته** کلیک کنید.
4. به تب **پروکسی‌ها** بروید.
5. گزینه **پیکربندی خودکار پروکسی** را تیک بزنید و URL فایل PAC را وارد کنید:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

6. بر روی **تأیید** کلیک کنید تا تنظیمات ذخیره شود.

## لیست دامنه‌های مستقیم

فایل PAC به گونه‌ای تنظیم شده است که اجازه می‌دهد اتصال مستقیم به دامنه‌های زیر برقرار شود:

- `*.google.com`
- `abriment.com`
- `analytics.abriment.com`
- `*.arvancloud.com`
- `*.neshan.org`
- `mrtehran.app`
- `www.google-analytics.com`
- `dastyar.io`
- `*.microsoftonline.com`
- `*.live.com`
- `*.microsoft.com`
- `*.ir`
- `collector.github.com`
- `digikala.com`
- `...`

می‌توانید آرایه `directDomains` را در فایل PAC تغییر دهید تا دامنه‌ها را بر اساس نیاز خود اضافه یا حذف کنید.

## مشارکت

مشارکت‌ها خوش‌آمد هستند! اگر می‌خواهید به این پروژه کمک کنید، لطفاً مراحل زیر را دنبال کنید:

1. مخزن را فورک کنید.
2. یک شاخه جدید برای ویژگی یا رفع اشکال خود ایجاد کنید.
3. تغییرات خود را با پیام‌های توصیفی کامیت کنید.
4. تغییرات خود را به مخزن فورک‌شده خود پوش کنید.
5. یک درخواست کشش برای توضیح تغییرات خود ایجاد کنید.