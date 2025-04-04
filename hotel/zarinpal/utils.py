def get_payment_status_description(code):
    code_descriptions = {
        -50: "مبلغ پرداخت شده با مقدار مبلغ ارسالی در متد وریفای متفاوت است.",
        -51: "پرداخت ناموفق",
        -52: "خطای غیر منتظره‌ای رخ داده است. پذیرنده مشکل خود را به امور مشتریان زرین‌پال ارجاع دهد.",
        -53: "پرداخت متعلق به این مرچنت کد نیست.",
        -54: "اتوریتی نامعتبر است.",
        -55: "تراکنش مورد نظر یافت نشد",
        101: "تراکنش وریفای شده است."
    }

    return code_descriptions.get(code, "کد وضعیت نامشخص")