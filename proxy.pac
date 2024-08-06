function FindProxyForURL(url, host) {
    // لیست دامنه‌هایی که باید مستقیم وصل شوند
    const directDomains = [
        "*.google.com",
        "abriment.com",
        "analytics.abriment.com",
        "*.arvancloud.com",
        "*.neshan.org",
        "mrtehran.app",
        "www.google-analytics.com",
        "dastyar.io",
        "*.microsoftonline.com",
        "*.live.com",
        "*.microsoft.com",
        "*.ir",
        "collector.github.com",
        "digikala.com"
    ];

    // بررسی دامنه‌های مستقیم
    for (let i = 0; i < directDomains.length; i++) {
        if (shExpMatch(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    // استفاده از پروکسی برای بقیه درخواست‌ها
    return "PROXY 127.0.0.1:8086; DIRECT";
}
