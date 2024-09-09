var directDomains = [
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
    "*.iri",
    "collector.github.com",
    "*.skyroom.online",
    "*.digikala.com",
    "*.ifilo.net",
    "*.p30world.com",
    "*.spotify.com"
];

function shouldDirectConnect(host) {
    for (let i = 0; i < directDomains.length; i++) {
        if (shExpMatch(host, directDomains[i])) {
            return true;
        }
    }
    return false;
}