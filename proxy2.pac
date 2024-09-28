loadScript('direct_domains.js');

function FindProxyForURL(url, host) {
    if (shouldDirectConnect(host)) {
        return "DIRECT";
    }

    // Proxy settings for other domains
    return "PROXY 192.168.254.1:3128; DIRECT";
}
