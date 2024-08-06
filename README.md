
# Proxy PAC Configuration

Welcome to the **Proxy PAC Configuration** repository. This repository hosts a Proxy Auto-Configuration (PAC) file designed to manage and optimize proxy settings for specific domains. The PAC file ensures that certain domains bypass the proxy and connect directly, while all other traffic is routed through the designated proxy server.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup and Usage](#setup-and-usage)
  - [Using the PAC File](#using-the-pac-file)
  - [Configuration Instructions](#configuration-instructions)
- [List of Direct Domains](#list-of-direct-domains)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Proxy Auto-Configuration (PAC) file in this repository is intended to streamline your network traffic by specifying proxy rules for different domains. By using this PAC file, you can control which domains should connect directly and which should be routed through a proxy server.

## Features

- **Automatic Proxy Configuration**: Automatically determines whether to use a proxy server or connect directly based on the requested domain.
- **Customizable**: Easily modify the PAC file to add or remove domains from the direct connection list.
- **Centralized Management**: Host the PAC file on a web server (such as GitHub Pages) for easy deployment across multiple devices and users.

## Setup and Usage

### Using the PAC File

The PAC file is hosted on GitHub Pages and can be accessed using the following URL:

```
https://mahdi-hajian.github.io/proxy-pac/proxy.pac
```

### Configuration Instructions

To use the PAC file in your browser or system, follow these steps:

#### Google Chrome

1. Open **Settings**.
2. Scroll down and click on **Advanced**.
3. Under **System**, click **Open your computer’s proxy settings**.
4. In the **Automatic Proxy Configuration URL** field, enter the URL of the PAC file:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

5. Click **Save**.

#### Mozilla Firefox

1. Open **Options**.
2. Scroll down to **Network Settings** and click **Settings...**.
3. Select **Automatic proxy configuration URL**.
4. Enter the URL of the PAC file:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

5. Click **OK** to save the settings.

#### Windows

1. Open **Control Panel**.
2. Go to **Network and Internet** > **Internet Options**.
3. Click on the **Connections** tab and then **LAN settings**.
4. Check the box for **Use automatic configuration script**.
5. Enter the URL of the PAC file:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

6. Click **OK** to apply the changes.

#### macOS

1. Open **System Preferences**.
2. Go to **Network**.
3. Select your network and click **Advanced**.
4. Go to the **Proxies** tab.
5. Check **Automatic Proxy Configuration** and enter the URL of the PAC file:

   ```
   https://mahdi-hajian.github.io/proxy-pac/proxy.pac
   ```

6. Click **OK** to save the settings.

## List of Direct Domains

The PAC file is configured to allow direct connections to the following domains:

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

Feel free to modify the `directDomains` array in the PAC file to add or remove domains as needed.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
