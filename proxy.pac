function FindProxyForURL(url, host) {
    // List of domains that should connect directly
    const directDomains = [
        "*.google.com",
        "abriment.com",
        "*.abriment.com",
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
        "*.skyroom.online",
        "*.digikala.com",
        "*.ifilo.net",
        "*.p30world.com"
    ];

    // Check for direct connection domains
    for (let i = 0; i < directDomains.length; i++) {
        if (shExpMatch(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    // Use proxy for all other requests
    return "PROXY 127.0.0.1:8086; DIRECT";
}
