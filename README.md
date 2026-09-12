# مدونة عدسة (Adasa Blog)

تطبيق ويب لمدونة متخصصة في التصوير الفوتوغرافي، مبني باستخدام React و Tailwind CSS.
تم تصميم المشروع لتوفير واجهة مستخدم عصرية بتصميم داكن (Dark Theme) ودعم كامل للغة العربية (RTL).

## خصائص المشروع

- دعم كامل للغة العربية والاتجاه من اليمين لليسار.
- واجهة مستخدم بتصميم داكن مريح للعين.
- نظام بحث وفلترة للمقالات حسب التصنيفات.
- إمكانية التبديل بين عرض المقالات في شبكة (Grid) أو قائمة (List).
- نظام ترقيم صفحات (Pagination) للانتقال بين المقالات.
- توجيه ديناميكي (Dynamic Routing) لعرض تفاصيل كل مقال باستخدام React Router.
- صفحة خطأ 404 مخصصة للروابط غير الموجودة.

## التقنيات المستخدمة

- React.js (v18)
- Vite
- Tailwind CSS
- React Router DOM
- FontAwesome 

## طريقة التشغيل محلياً

1. نسخ المشروع:
   ```bash
   git clone https://github.com/your-username/adasa-blog.git
   ```

2. تثبيت الحزم:
   ```bash
   cd adasa-blog
   npm install
   ```

3. تشغيل المشروع:
   ```bash
   npm run dev
   ```

## هيكل المشروع

```text
src/
├── assets/
├── components/
│   ├── about/
│   ├── article/
│   ├── blog/
│   ├── error/
│   ├── footer/
│   ├── home/
│   └── navbar/
├── data/
│   └── posts.json
├── pages/
│   ├── About.jsx
│   ├── ArticleDetails.jsx
│   ├── Blog.jsx
│   ├── ErrorPage.jsx
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## ملاحظات إضافية

- يعتمد المشروع على الـ Hooks الأساسية في React مثل `useState` و `useRef` في إدارة الحالة.
- يتم جلب بيانات المقالات من ملف JSON محلي لمحاكاة العمل مع API حقيقي.
