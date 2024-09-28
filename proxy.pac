loadScript('direct_domains.js');

function FindProxyForURL(url, host) {
    if (shouldDirectConnect(host)) {
        return "DIRECT";
    }

    // Proxy settings for other domains
    return "PROXY 127.0.0.1:8086; DIRECT";
}