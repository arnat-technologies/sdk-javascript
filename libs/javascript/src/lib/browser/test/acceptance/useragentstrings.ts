const listOfUA = {
  Chrome: [
    {
      ua:
        'Mozilla/5.0 (Linux; Android 7.0; HUAWEI CAN-L01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '71.0.3578.99',
        },
        os: {
          name: 'Android',
          version: '7.0',
          versionName: 'Nougat',
        },
        platform: {
          type: 'mobile',
          vendor: 'Huawei',
          model: 'Nova',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 9 Build/LMY48T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '47.0.2526.83',
        },
        os: {
          name: 'Android',
          version: '5.1.1',
          versionName: 'Lollipop',
        },
        platform: {
          type: 'tablet',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 7 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '32.0.1700.99',
        },
        os: {
          name: 'Android',
          version: '4.4.2',
          versionName: 'KitKat',
        },
        platform: {
          type: 'tablet',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '32.0.1700.99',
        },
        os: {
          name: 'Android',
          version: '4.3',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 4.1; Galaxy Nexus Build/JRN84D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
      spec: {
        browser: {
          name: 'Chrome',
          version: '18.0.1025.166',
        },
        os: {
          name: 'Android',
          version: '4.1',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'WebKit',
          version: '535.19',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Xoom Build/IML77) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Safari/535.7',
      spec: {
        browser: {
          name: 'Chrome',
          version: '16.0.912.75',
        },
        os: {
          name: 'Android',
          version: '4.0.3',
          versionName: 'Ice Cream Sandwich',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '535.7',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Galaxy Nexus Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Mobile Safari/535.7',
      spec: {
        browser: {
          name: 'Chrome',
          version: '16.0.912.75',
        },
        os: {
          name: 'Android',
          version: '4.0.3',
          versionName: 'Ice Cream Sandwich',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'WebKit',
          version: '535.7',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
      spec: {
        browser: {
          name: 'Chrome',
          version: '19.0.1084.60',
        },
        os: {
          name: 'iOS',
          version: '5.1.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '534.46.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPad; U; CPU OS 5_1_1 like Mac OS X; en-us) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
      spec: {
        browser: {
          name: 'Chrome',
          version: '19.0.1084.60',
        },
        os: {
          name: 'iOS',
          version: '5.1.1',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '534.46.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '30.0.1599.17',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.2',
          versionName: '8',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '29.0.1547.62',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '29.0.1547.57',
        },
        os: {
          name: 'Chrome OS',
        },
        platform: {},
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '29.0.1547.2',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.2',
          versionName: '8',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '28.0.1468.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '49.0.2623.112',
        },
        os: {
          name: 'macOS',
          version: '10.7.5',
          versionName: 'Lion',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.57 Safari/534.24',
      spec: {
        browser: {
          name: 'Chrome',
          version: '11.0.696.57',
        },
        os: {
          name: 'macOS',
          version: '10.6.7',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '534.24',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.462.0 Safari/534.3',
      spec: {
        browser: {
          name: 'Chrome',
          version: '6.0.462.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '534.3',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/50.0.2661.95 Mobile/13E238 Safari/601.1.46',
      spec: {
        browser: {
          name: 'Chrome',
          version: '50.0.2661.95',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '601.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 5.0.2; SM-T705 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.105 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '49.0.2623.105',
        },
        os: {
          name: 'Android',
          version: '5.0.2',
          versionName: 'Lollipop',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 6.0.99; Build/NPC91K) AppleWebKit/537.36(KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '50.0.2661.86',
        },
        os: {
          name: 'Android',
          version: '6.0.99',
          versionName: 'Marshmallow',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NRD90T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '63.0.3239.111',
        },
        os: {
          name: 'Android',
          version: '7.0',
          versionName: 'Nougat',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 8.0.0; LG-H870 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Chrome',
          version: '68.0.3440.91',
        },
        os: {
          name: 'Android',
          version: '8.0.0',
          versionName: 'Oreo',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 Roku/DVP-7.53 (147.53E04068A)',
      spec: {
        browser: {
          name: 'Chrome',
          version: '60.0.3112.113',
        },
        os: {
          name: 'Roku',
          version: '7.53',
        },
        platform: {
          type: 'tv',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'Google Search': [
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/83.0.268992909 Mobile/15E148 Safari/605.1',
      spec: {
        browser: {
          name: 'Google Search',
          version: '83.0.268992909',
        },
        os: {
          name: 'iOS',
          version: '12.4',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  'Amazon Silk': [
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.4 Mobile Safari/535.19 Silk-Accelerated=true',
      spec: {
        browser: {
          name: 'Amazon Silk',
          version: '3.4',
        },
        os: {
          name: 'Android',
          version: '4.0.3',
          versionName: 'Ice Cream Sandwich',
        },
        platform: {
          type: 'tablet',
          vendor: 'Amazon',
          model: 'Kindle Fire HD 7',
        },
        engine: {
          name: 'WebKit',
          version: '535.19',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.4 Safari/535.19 Silk-Accelerated=true',
      spec: {
        browser: {
          name: 'Amazon Silk',
          version: '3.4',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'tablet',
          vendor: 'Amazon',
          model: 'Kindle Fire HD 7',
        },
        engine: {
          name: 'WebKit',
          version: '535.19',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 Silk-Accelerated=true',
      spec: {
        browser: {
          name: 'Amazon Silk',
          version: '1.0.13.81_10003810',
        },
        os: {
          name: 'Android',
          version: '2.3.4',
          versionName: 'Gingerbread',
        },
        platform: {
          type: 'tablet',
          vendor: 'Amazon',
        },
        engine: {
          name: 'WebKit',
          version: '533.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.153_10033210) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true',
      spec: {
        browser: {
          name: 'Amazon Silk',
          version: '1.0.22.153_10033210',
        },
        os: {
          name: 'macOS',
          version: '10.6.3',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'tablet',
          vendor: 'Amazon',
        },
        engine: {
          name: 'WebKit',
          version: '533.16',
        },
      },
    },
  ],
  Opera: [
    {
      ua:
        'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 7 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.72 Safari/537.36 OPR/19.0.1340.69721',
      spec: {
        browser: {
          name: 'Opera',
          version: '19.0.1340.69721',
        },
        os: {
          name: 'Android',
          version: '4.4.2',
          versionName: 'KitKat',
        },
        platform: {
          type: 'tablet',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.72 Mobile Safari/537.36 OPR/19.0.1340.69721',
      spec: {
        browser: {
          name: 'Opera',
          version: '19.0.1340.69721',
        },
        os: {
          name: 'Android',
          version: '4.3',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100',
      spec: {
        browser: {
          name: 'Opera',
          version: '15.0.1147.100',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Opera/9.80 (Android 4.3; Linux; Opera Mobi/ADR-1309251116) Presto/2.11.355 Version/12.10',
      spec: {
        browser: {
          name: 'Opera',
          version: '12.10',
        },
        os: {
          name: 'Android',
          version: '4.3',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Presto',
          version: '2.11.355',
        },
      },
    },
    {
      ua:
        'Opera/9.80 (Android 4.4.2; Linux; Opera Tablet/ADR-1309251116) Presto/2.11.355 Version/12.10',
      spec: {
        browser: {
          name: 'Opera',
          version: '12.10',
        },
        os: {
          name: 'Android',
          version: '4.4.2',
          versionName: 'KitKat',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'Presto',
          version: '2.11.355',
        },
      },
    },
    {
      ua: 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14',
      spec: {
        browser: {
          name: 'Opera',
          version: '12.14',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.0',
          versionName: 'Vista',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Presto',
          version: '2.12.388',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.0; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14',
      spec: {
        browser: {
          name: 'Opera',
          version: '12.14',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.0',
          versionName: 'Vista',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0) Opera 12.14',
      spec: {
        browser: {
          name: 'Opera',
          version: '12.14',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.0',
          versionName: 'Vista',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua: 'Opera/12.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.02',
      spec: {
        browser: {
          name: 'Opera',
          version: '12.02',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.1',
          versionName: 'XP',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Presto',
          version: '2.10.289',
        },
      },
    },
    {
      ua: 'Opera/9.80 (X11; Linux i686; U; es-ES) Presto/2.8.131 Version/11.11',
      spec: {
        browser: {
          name: 'Opera',
          version: '11.11',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Presto',
          version: '2.8.131',
        },
      },
    },
    {
      ua: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.7; U; en) Presto/2.7.62 Version/11.01',
      spec: {
        browser: {
          name: 'Opera',
          version: '11.01',
        },
        os: {
          name: 'macOS',
          version: '10.6.7',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Presto',
          version: '2.7.62',
        },
      },
    },
    {
      ua: 'Opera/9.80 (Windows NT 5.2; U; zh-cn) Presto/2.6.30 Version/10.63',
      spec: {
        browser: {
          name: 'Opera',
          version: '10.63',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.2',
          versionName: '2003',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Presto',
          version: '2.6.30',
        },
      },
    },
    {
      ua: 'Opera/9.80 (X11; Linux i686; U; it) Presto/2.5.24 Version/10.54',
      spec: {
        browser: {
          name: 'Opera',
          version: '10.54',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Presto',
          version: '2.5.24',
        },
      },
    },
    {
      ua: 'Opera/9.70 (Linux ppc64 ; U; en) Presto/2.2.1',
      spec: {
        browser: {
          name: 'Opera',
          version: '9.70',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Presto',
          version: '2.2.1',
        },
      },
    },
    {
      ua: 'Opera/9.63 (X11; Linux i686)',
      spec: {
        browser: {
          name: 'Opera',
          version: '9.63',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux i686; U; en) Opera 8.52',
      spec: {
        browser: {
          name: 'Opera',
          version: '8.52',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_4 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) OPiOS/14.0.0.104835 Mobile/13G35 Safari/9537.53',
      spec: {
        browser: {
          name: 'Opera',
          version: '14.0.0.104835',
        },
        os: {
          name: 'iOS',
          version: '9.3.4',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPod',
        },
        engine: {
          name: 'WebKit',
          version: '601.1.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 6.0; R1 HD Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/537.36 OPR/18.0.2254.106542',
      spec: {
        browser: {
          name: 'Opera',
          version: '18.0.2254.106542',
        },
        os: {
          name: 'Android',
          version: '6.0',
          versionName: 'Marshmallow',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'Opera Coast': [
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Coast/5.02.99991 Mobile/13E238 Safari/7534.48.3',
      spec: {
        browser: {
          name: 'Opera Coast',
          version: '5.02.99991',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '601.1.46',
        },
      },
    },
  ],
  'Opera Touch': [
    {
      ua:
        'Mozilla/5.0 (Linux; Android 7.0; SM-A520F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/65.0.3325.109 Mobile Safari/537.36 OPT/1.0.9',
      spec: {
        browser: {
          name: 'Opera Touch',
          version: '1.0.9',
        },
        os: {
          name: 'Android',
          version: '7.0',
          versionName: 'Nougat',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'Yandex Browser': [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 YaBrowser/15.4.2272.3420 (beta) Yowser/2.0 Safari/537.36',
      spec: {
        browser: {
          name: 'Yandex Browser',
          version: '15.4.2272.3420',
        },
        os: {
          name: 'macOS',
          version: '10.10.3',
          versionName: 'Yosemite',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 YaBrowser/15.4.2272.3608.00 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Yandex Browser',
          version: '15.4.2272.3608.00',
        },
        os: {
          name: 'Android',
          version: '5.1.1',
          versionName: 'Lollipop',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 YaBrowser/19.3.3.157.10 Mobile/15E148 Safari/605.1',
      spec: {
        browser: {
          name: 'Yandex Browser',
          version: '19.3.3.157.10',
        },
        os: {
          name: 'iOS',
          version: '12.2',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  Safari: [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.1.7',
        },
        os: {
          name: 'macOS',
          version: '10.6.8',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '537.13',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.0.5',
        },
        os: {
          name: 'macOS',
          version: '10.6.7',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '533.21.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.0.2',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.1',
          versionName: 'XP',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '533.18.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '531.2',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-en) AppleWebKit/533.16 (KHTML, like Gecko) Version/4.1 Safari/533.16',
      spec: {
        browser: {
          name: 'Safari',
          version: '4.1',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.0',
          versionName: '2000',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '533.16',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_6_1; en_GB, en_US) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10',
      spec: {
        browser: {
          name: 'Safari',
          version: '4.0.4',
        },
        os: {
          name: 'macOS',
          version: '10.6.1',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '531.21.10',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A',
      spec: {
        browser: {
          name: 'Safari',
          version: '7.0.3',
        },
        os: {
          name: 'macOS',
          version: '10.9.3',
          versionName: 'Mavericks',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '537.75.14',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; de-de) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.28.3',
      spec: {
        browser: {
          name: 'Safari',
          version: '3.2.3',
        },
        os: {
          name: 'macOS',
          version: '10.5.7',
          versionName: 'Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '525.28.3',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a',
      spec: {
        browser: {
          name: 'Safari',
        },
        os: {
          name: 'iOS',
          version: '7.0.4',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '537.51.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.0.2',
        },
        os: {
          name: 'iOS',
          version: '4.3.2',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '533.17.9',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3',
      spec: {
        browser: {
          name: 'Safari',
          version: '3.0',
        },
        os: {
          name: 'iOS',
          version: '',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '420',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B5097d Safari/6531.22.7',
      spec: {
        browser: {
          name: 'Safari',
          version: '4.0.5',
        },
        os: {
          name: 'iOS',
          version: '4.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '532.9',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13) AppleWebKit/604.1.31 (KHTML, like Gecko) Version/11.0 Safari/604.1.31',
      spec: {
        browser: {
          name: 'Safari',
          version: '11.0',
        },
        os: {
          name: 'macOS',
          version: '10.13',
          versionName: 'High Sierra',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '604.1.31',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_2; en-gb) AppleWebKit/526+ (KHTML, like Gecko) Version/3.1 iPhone',
      spec: {
        browser: {
          name: 'Safari',
          version: '3.1',
        },
        os: {
          name: 'macOS',
          version: '10.5.2',
          versionName: 'Leopard',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '526',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1',
      spec: {
        browser: {
          name: 'Safari',
          version: '9.0',
        },
        os: {
          name: 'iOS',
          version: '9.0',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '601.1.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53',
      spec: {
        browser: {
          name: 'Safari',
          version: '7.0',
        },
        os: {
          name: 'iOS',
          version: '7.0.4',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '537.51.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',
      spec: {
        browser: {
          name: 'Safari',
          version: '6.0',
        },
        os: {
          name: 'iOS',
          version: '6.0',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '536.26',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko ) Version/5.1 Mobile/9B176 Safari/7534.48.3',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.1',
        },
        os: {
          name: 'iOS',
          version: '5.1',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '534.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.0.2',
        },
        os: {
          name: 'iOS',
          version: '4.3.2',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '533.17.9',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; es-es) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B360 Safari/531.21.10',
      spec: {
        browser: {
          name: 'Safari',
          version: '4.0.4',
        },
        os: {
          name: 'iOS',
          version: '3.2',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '531.21.10',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53',
      spec: {
        browser: {
          name: 'Safari',
          version: '7.0',
        },
        os: {
          name: 'iOS',
          version: '7.0.3',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPod',
        },
        engine: {
          name: 'WebKit',
          version: '537.51.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPod; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.1',
        },
        os: {
          name: 'iOS',
          version: '5.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPod',
        },
        engine: {
          name: 'WebKit',
          version: '534.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
      spec: {
        browser: {
          name: 'Safari',
          version: '5.0.2',
        },
        os: {
          name: 'iOS',
          version: '4.3.3',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPod',
        },
        engine: {
          name: 'WebKit',
          version: '533.17.9',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3',
      spec: {
        browser: {
          name: 'Safari',
          version: '3.0',
        },
        os: {
          name: 'iOS',
          version: '',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPod',
        },
        engine: {
          name: 'WebKit',
          version: '420.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1',
      spec: {
        browser: {
          name: 'Safari',
          version: '9.0',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '601.1.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15G77 [FBAN/FBIOS;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/11.4.1;FBSS/2;FBCR/vfnl;FBID/phone;FBLC/nl_NL;FBOP/5;FBRV/0]',
      spec: {
        browser: {
          name: 'Safari',
        },
        os: {
          name: 'iOS',
          version: '11.4.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  'Internet Explorer': [
    {
      ua: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MAARJS; rv:11.0) like Gecko',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.3',
          versionName: '8.1',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.3',
          versionName: '8.1',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '10.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.2',
          versionName: '8',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '6.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; Media Center PC 6.0; rv:11.0) like Gecko',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.3',
          versionName: '8.1',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '10.6',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '5.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.0; InfoPath.2; SV1; .NET CLR 2.0.50727; WOW64)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '10.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '4.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '9.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '5.0',
        },
      },
    },
    {
      ua:
        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '8.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '5.0',
        },
      },
    },
    {
      ua:
        'Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.1; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 2.0.50727)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '7.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.1',
          versionName: 'XP',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua: 'Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '6.1',
        },
        os: {
          name: 'Windows',
          version: 'XP',
          versionName: 'XP',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua:
        'Mozilla/4.0 (Compatible; Windows NT 5.1; MSIE 6.0) (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '6.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.1',
          versionName: 'XP',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua: 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '5.01',
        },
        os: {
          name: 'Windows',
          version: 'NT',
          versionName: 'NT',
        },
        platform: {
          type: 'desktop',
        },
        engine: {},
      },
    },
    {
      ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '10.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.2',
          versionName: '8',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '6.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.3',
          versionName: '8.1',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; LCTE; rv:11.0)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920; Vodafone)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '10.0',
        },
        os: {
          name: 'Windows Phone',
          version: '8.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Trident',
          version: '6.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '10.0',
        },
        os: {
          name: 'Windows Phone',
          version: '8.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Trident',
          version: '6.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '9.0',
        },
        os: {
          name: 'Windows Phone',
          version: '7.5',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Trident',
          version: '5.0',
        },
      },
    },
    {
      ua:
        'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Nokia;N70)',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '7.0',
        },
        os: {
          name: 'Windows Phone',
          version: '7.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Trident',
          version: '3.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; Microsoft; Lumia 640 LTE) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows Phone',
          version: '8.1',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0; Zoom 3.6.0; InfoPath.3; rv:11.0) like Gecko',
      spec: {
        browser: {
          name: 'Internet Explorer',
          version: '11.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Trident',
          version: '7.0',
        },
      },
    },
  ],
  'Microsoft Edge': [
    {
      ua:
        'Mozilla/5.0 (Linux; Android 8.0; Pixel XL Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.0 Mobile Safari/537.36 EdgA/41.1.35.1',
      spec: {
        browser: {
          name: 'Microsoft Edge',
          version: '41.1.35.1',
        },
        os: {
          name: 'Android',
          version: '8.0',
          versionName: 'Oreo',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'EdgeHTML',
          version: '',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 Safari/603.2.4 EdgiOS/41.1.35.1',
      spec: {
        browser: {
          name: 'Microsoft Edge',
          version: '41.1.35.1',
        },
        os: {
          name: 'iOS',
          version: '10.3.2',
        },
        platform: {
          type: 'mobile',
          model: 'iPhone',
          vendor: 'Apple',
        },
        engine: {
          name: 'EdgeHTML',
          version: '',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0',
      spec: {
        browser: {
          name: 'Microsoft Edge',
          version: '12.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'EdgeHTML',
          version: '12.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0',
      spec: {
        browser: {
          name: 'Microsoft Edge',
          version: '12.0',
        },
        os: {
          name: 'Windows Phone',
          version: '10.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'EdgeHTML',
          version: '12.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.48 Safari/537.36 Edg/74.1.96.24',
      spec: {
        browser: {
          name: 'Microsoft Edge',
          version: '74.1.96.24',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3739.0 Safari/537.36 Edg/75.0.109.0',
      spec: {
        browser: {
          name: 'Microsoft Edge',
          version: '75.0.109.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  Firefox: [
    {
      ua: 'Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '26.0',
        },
        os: {},
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Gecko',
          version: '26.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '26.0',
        },
        os: {},
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'Gecko',
          version: '26.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Mobile; LG-D300; rv:18.1) Gecko/18.1 Firefox/18.1',
      spec: {
        browser: {
          name: 'Firefox',
          version: '18.1',
        },
        os: {},
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Gecko',
          version: '18.1',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Android; Mobile; rv:27.0) Gecko/27.0 Firefox/27.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '27.0',
        },
        os: {
          name: 'Android',
          version: '',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Gecko',
          version: '27.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Android; Tablet; rv:26.0) Gecko/26.0 Firefox/26.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '26.0',
        },
        os: {
          name: 'Android',
          version: '',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'Gecko',
          version: '26.0',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '25.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '24.0',
        },
        os: {
          name: 'macOS',
          version: '10.8',
          versionName: 'Mountain Lion',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux i686; rv:21.0) Gecko/20100101 Firefox/21.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '21.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:17.0) Gecko/20121202 Firefox/17.0 Iceweasel/17.0.1',
      spec: {
        browser: {
          name: 'Firefox',
          version: '17.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20121202',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:15.0) Gecko/20120724 Debian Iceweasel/15.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '15.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20120724',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:15.0) Gecko/20120910144328 Firefox/15.0.2',
      spec: {
        browser: {
          name: 'Firefox',
          version: '15.0.2',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.2',
          versionName: '8',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20120910144328',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows; U; Windows NT 6.1; WOW64; en-US; rv:2.0.4) Gecko/20120718 AskTbAVR-IDW/3.12.5.17700 Firefox/14.0.1',
      spec: {
        browser: {
          name: 'Firefox',
          version: '14.0.1',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20120718',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 5.1; rv:6.0) Gecko/20100101 Firefox/6.0 FirePHP/0.6',
      spec: {
        browser: {
          name: 'Firefox',
          version: '6.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.1',
          versionName: 'XP',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:2.2a1pre) Gecko/20100101 Firefox/4.2a1pre',
      spec: {
        browser: {
          name: 'Firefox',
          version: '4.2',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0) Gecko/20100101 Firefox/4.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '4.0',
        },
        os: {
          name: 'macOS',
          version: '10.6',
          versionName: 'Snow Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2b1) Gecko/20091014 Firefox/3.6b1 GTB5',
      spec: {
        browser: {
          name: 'Firefox',
          version: '3.6',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20091014',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows; U; Windows NT 6.0; de; rv:1.9.0.15) Gecko/2009101601 Firefox 2.1 (.NET CLR 3.5.30729)',
      spec: {
        browser: {
          name: 'Firefox',
          version: '2.1',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.0',
          versionName: 'Vista',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '2009101601',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.7) Gecko/20061014 Firefox/1.5.0.7',
      spec: {
        browser: {
          name: 'Firefox',
          version: '1.5.0.7',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20061014',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0',
      spec: {
        browser: {
          name: 'Firefox',
          version: '68.0',
        },
        os: {
          name: 'macOS',
          version: '10.14',
          versionName: 'Mojave',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
  ],
  'Firefox iOS': [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/24.1 Safari/605.1.15',
      spec: {
        browser: {
          name: 'Firefox iOS',
          version: '24.1',
        },
        os: {
          name: 'iOS',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) FxiOS/3.0 Mobile/13E238 Safari/601.1.46',
      spec: {
        browser: {
          name: 'Firefox iOS',
          version: '3.0',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '601.1.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/21.0 Version/13.0.3 Safari/605.1.15',
      spec: {
        browser: {
          name: 'Firefox iOS',
          version: '21.0',
        },
        os: {
          name: 'iOS',
          version: '13.0.3',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  SeaMonkey: [
    {
      ua: 'Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
      spec: {
        browser: {
          name: 'SeaMonkey',
          version: '2.7.1',
        },
        os: {
          name: 'Windows',
          version: 'NT 5.2',
          versionName: '2003',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
      spec: {
        browser: {
          name: 'SeaMonkey',
          version: '2.7.1',
        },
        os: {
          name: 'macOS',
          version: '10.5',
          versionName: 'Leopard',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
      spec: {
        browser: {
          name: 'SeaMonkey',
          version: '2.7.1',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
  ],
  BlackBerry: [
    {
      ua:
        'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.4633 Mobile Safari/537.10+',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '10.1.0.4633',
        },
        os: {
          name: 'BlackBerry',
          version: '10',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '537.10',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (BB10; Kbd) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.1429 Mobile Safari/537.10+',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '10.1.0.1429',
        },
        os: {
          name: 'BlackBerry',
          version: '10',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '537.10',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '7.2.1.0',
        },
        os: {
          name: 'BlackBerry',
          version: '2.1.0',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '536.2',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '7.1.0.7',
        },
        os: {
          name: 'BlackBerry',
          version: '1.0.0',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.11',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '7.1.0.346',
        },
        os: {
          name: 'BlackBerry',
          version: '',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '534.11',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (BlackBerry; U; BlackBerry 9360; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.530 Mobile Safari/534.11+',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '7.0.0.530',
        },
        os: {
          name: 'BlackBerry',
          version: '',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '534.11',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.450 Mobile Safari/534.8+',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '6.0.0.450',
        },
        os: {
          name: 'BlackBerry',
          version: '',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '534.8',
        },
      },
    },
    {
      ua:
        'BlackBerry9800/5.0.0.862 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/331 UNTRUSTED/1.0 3gpp-gba',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '5.0.0.862',
        },
        os: {
          name: 'BlackBerry',
          version: '5',
        },
        platform: {
          type: 'mobile',
          vendor: 'BlackBerry',
        },
        engine: {},
      },
    },
    {
      ua: 'BlackBerry8320/4.5.0.52 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '4.5.0.52',
        },
        os: {
          name: 'BlackBerry',
          version: '4',
        },
        platform: {
          type: 'mobile',
          vendor: 'BlackBerry',
        },
        engine: {},
      },
    },
    {
      ua: 'BlackBerry8700/4.1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179',
      spec: {
        browser: {
          name: 'BlackBerry',
          version: '4.1.0',
        },
        os: {
          name: 'BlackBerry',
          version: '4',
        },
        platform: {
          type: 'mobile',
          vendor: 'BlackBerry',
        },
        engine: {},
      },
    },
  ],
  'WebOS Browser': [
    {
      ua:
        'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.5; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.83 Safari/534.6 TouchPad/1.0',
      spec: {
        browser: {
          name: 'WebOS Browser',
          version: '234.83',
        },
        os: {
          name: 'WebOS',
          version: '3.0.5',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.6',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
      spec: {
        browser: {
          name: 'WebOS Browser',
          version: '234.40.1',
        },
        os: {
          name: 'WebOS',
          version: '3.0.2',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.6',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
      spec: {
        browser: {
          name: 'WebOS Browser',
          version: '233.70',
        },
        os: {
          name: 'WebOS',
          version: '3.0.0',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.6',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; webOS/2.1.2; U; xx-xx) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.11 Safari/534.6 Pre/3.0',
      spec: {
        browser: {
          name: 'WebOS Browser',
          version: '221.11',
        },
        os: {
          name: 'WebOS',
          version: '2.1.2',
        },
        platform: {},
        engine: {
          name: 'WebKit',
          version: '534.6',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (webOS/1.4.1.1; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0',
      spec: {
        browser: {
          name: 'WebOS Browser',
          version: '1.0',
        },
        os: {
          name: 'WebOS',
          version: '1.4.1.1',
        },
        platform: {},
        engine: {
          name: 'WebKit',
          version: '532.2',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0',
      spec: {
        browser: {
          name: 'WebOS Browser',
          version: '1.0',
        },
        os: {
          name: 'WebOS',
          version: '1.0',
        },
        platform: {},
        engine: {
          name: 'WebKit',
          version: '525.27.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36 WebAppManager',
      spec: {
        browser: {
          name: 'WebOS Browser',
        },
        os: {
          name: 'WebOS',
        },
        platform: {},
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'Android Browser': [
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.4.2; de-de; Nexus 7 Build/KOT49H) AppleWebKit/537.16 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.16',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '4.4.2',
          versionName: 'KitKat',
        },
        platform: {
          type: 'tablet',
          vendor: 'Nexus',
        },
        engine: {
          name: 'WebKit',
          version: '537.16',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.3; de-de; Galaxy Nexus Build/JWR66Y) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '4.3',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'mobile',
          vendor: 'Nexus',
        },
        engine: {
          name: 'WebKit',
          version: '534.30',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.2; en-us; Nexus 10 Build/JVP15I) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '4.2',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'tablet',
          vendor: 'Nexus',
        },
        engine: {
          name: 'WebKit',
          version: '534.30',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 3.2; de-de; A100 Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '3.2',
          versionName: 'Honeycomb',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.13',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; T-Mobile G2 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '2.3.4',
          versionName: 'Gingerbread',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '533.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 2.2; en-us; GT-I5800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '2.2',
          versionName: 'Froyo',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '533.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 1.6; ar-us; SonyEricssonX10i Build/R2BA026) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
      spec: {
        browser: {
          name: 'Android Browser',
          version: '3.1.2',
        },
        os: {
          name: 'Android',
          version: '1.6',
          versionName: 'Donut',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '528.5',
        },
      },
    },
  ],
  Bada: [
    {
      ua:
        'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XPKJ1; U; Bada/2.0; it-it) AppleWebKit/534.20 (KHTML, like Gecko) Dolfin/3.0 WVGA SMM-MMS/1.2.0 OPN-B',
      spec: {
        browser: {
          name: 'Bada',
          version: '3.0',
        },
        os: {
          name: 'Bada',
          version: '2.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '534.20',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XXJL2; U; Bada/1.2; de-de) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 OPN-B',
      spec: {
        browser: {
          name: 'Bada',
          version: '2.2',
        },
        os: {
          name: 'Bada',
          version: '1.2',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '533.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XXJF4; U; Bada/1.0; fr-fr) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B',
      spec: {
        browser: {
          name: 'Bada',
          version: '2.0',
        },
        os: {
          name: 'Bada',
          version: '1.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '533.1',
        },
      },
    },
  ],
  Tizen: [
    {
      ua:
        'Mozilla/5.0 (Linux; Tizen 2.2; sdk) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.2 Mobile Safari/537.3',
      spec: {
        browser: {
          name: 'Tizen',
          version: '2.2',
        },
        os: {
          name: 'Tizen',
          version: '2.2',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '537.3',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Tizen 2.1; sdk) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.1 Mobile Safari/537.3',
      spec: {
        browser: {
          name: 'Tizen',
          version: '2.1',
        },
        os: {
          name: 'Tizen',
          version: '2.1',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '537.3',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Tizen 2.0; en-us) AppleWebKit/537.1 (KHTML, like Gecko) Mobile TizenBrowser/2.0',
      spec: {
        browser: {
          name: 'Tizen',
          version: '2.0',
        },
        os: {
          name: 'Tizen',
          version: '2.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '537.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Tizen/1.0 like Android; en-us; AppleWebKit/534.46 (KHTML, like Gecko) Tizen Browser/1.0 Mobile',
      spec: {
        browser: {
          name: 'Tizen',
          version: '1.0',
        },
        os: {
          name: 'Tizen',
          version: '1.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '534.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-i9500/1.0; U; Tizen/1.0 like Android; en-us) AppleWebKit/534.46 (KHTML, like Gecko) SLP Browser/1.0 Mobile',
      spec: {
        browser: {
          name: 'Tizen',
          version: '1.0',
        },
        os: {
          name: 'Tizen',
          version: '1.0',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'WebKit',
          version: '534.46',
        },
      },
    },
  ],
  Sailfish: [
    {
      ua:
        'Mozilla/5.0 (Maemo; Linux; U; Jolla; Sailfish; Mobile; rv:26.0) Gecko/26.0 Firefox/26.0 SailfishBrowser/1.0 like Safari/538.1',
      spec: {
        browser: {
          name: 'Sailfish',
          version: '1.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Gecko',
          version: '26.0',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Jolla; Sailfish; Mobile; rv:20.0) Gecko/20.0 Firefox/20.0 Sailfish Browser/1.0 like Safari/535.19',
      spec: {
        browser: {
          name: 'Sailfish',
          version: '1.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Gecko',
          version: '20.0',
        },
      },
    },
  ],
  PhantomJS: [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.5.0 Safari/534.34',
      spec: {
        browser: {
          name: 'PhantomJS',
          version: '1.5.0',
        },
        os: {
          name: 'macOS',
          version: '',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '534.34',
        },
      },
    },
  ],
  Vivaldi: [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36 Vivaldi/1.0.303.52',
      spec: {
        browser: {
          name: 'Vivaldi',
          version: '1.0.303.52',
        },
        os: {
          name: 'macOS',
          version: '10.11.1',
          versionName: 'El Capitan',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36 Vivaldi/1.0.303.52',
      spec: {
        browser: {
          name: 'Vivaldi',
          version: '1.0.303.52',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  Googlebot: [
    {
      ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      spec: {
        browser: {
          name: 'Googlebot',
          version: '2.1',
        },
        os: {},
        platform: {
          type: 'bot',
          vendor: 'Google',
        },
        engine: {},
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      spec: {
        browser: {
          name: 'Googlebot',
          version: '2.1',
        },
        os: {
          name: 'Android',
          version: '6.0.1',
          versionName: 'Marshmallow',
        },
        platform: {
          type: 'bot',
          vendor: 'Google',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Safari/537.36',
      spec: {
        browser: {
          name: 'Googlebot',
          version: '2.1',
        },
        os: {},
        platform: {
          type: 'bot',
          vendor: 'Google',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  WeChat: [
    {
      ua:
        'Mozilla/5.0 (iPad; U; CPU OS 9 like Mac OS X; en-us; iPad4,4) AppleWebKit/534.46 (KHTML, like Gecko) MicroMessenger/6.5.2.501 U3/1 Safari/7543.48.3',
      spec: {
        browser: {
          name: 'WeChat',
          version: '6.5.2.501',
        },
        os: {
          name: 'iOS',
          version: '9',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '534.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SM-T210R Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30 MicroMessenger/6.1.0',
      spec: {
        browser: {
          name: 'WeChat',
          version: '6.1.0',
        },
        os: {
          name: 'Android',
          version: '4.1.2',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.30',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13E238 MicroMessenger/6.6.1 Mobile',
      spec: {
        browser: {
          name: 'WeChat',
          version: '6.6.1',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '537.51.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat',
      spec: {
        browser: {
          name: 'WeChat',
          version: '6.5.2.501',
        },
        os: {
          name: 'macOS',
          version: '10.15.1',
          versionName: 'Catalina',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  'UC Browser': [
    {
      ua:
        'Mozilla/5.0 (iPad; U; CPU OS 9 like Mac OS X; en-us; iPad4,4) AppleWebKit/534.46 (KHTML, like Gecko) UCBrowser/2.4.0.367 U3/1 Safari/7543.48.3',
      spec: {
        browser: {
          name: 'UC Browser',
          version: '2.4.0.367',
        },
        os: {
          name: 'iOS',
          version: '9',
        },
        platform: {
          type: 'tablet',
          vendor: 'Apple',
          model: 'iPad',
        },
        engine: {
          name: 'WebKit',
          version: '534.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SM-T210R Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30 UCBrowser/2.3.2.300',
      spec: {
        browser: {
          name: 'UC Browser',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '4.1.2',
          versionName: 'Jelly Bean',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'WebKit',
          version: '534.30',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13E238 UCBrowser/10.7.0.782 Mobile',
      spec: {
        browser: {
          name: 'UC Browser',
          version: '10.7.0.782',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '537.51.1',
        },
      },
    },
  ],
  QupZilla: [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) QupZilla/1.8.2 Safari/538.1',
      spec: {
        browser: {
          name: 'QupZilla',
          version: '1.8.2',
        },
        os: {
          name: 'macOS',
          version: '',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '538.1',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.21 (KHTML, like Gecko) QupZilla/1.8.6 Safari/537.21',
      spec: {
        browser: {
          name: 'QupZilla',
          version: '1.8.6',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.2',
          versionName: '8',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '537.21',
        },
      },
    },
  ],
  Maxthon: [
    {
      ua:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1 MXiOS/4.8.6.59',
      spec: {
        browser: {
          name: 'Maxthon',
          version: '9.0',
        },
        os: {
          name: 'iOS',
          version: '9.3.1',
        },
        platform: {
          type: 'mobile',
          vendor: 'Apple',
          model: 'iPhone',
        },
        engine: {
          name: 'WebKit',
          version: '601.1.46',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Maxthon/4.1.0.4000 Chrome/26.0.1410.43 Safari/537.1',
      spec: {
        browser: {
          name: 'Maxthon',
          version: '4.1.0.4000',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '537.1',
        },
      },
    },
  ],
  Epiphany: [
    {
      ua:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/602.1 (KHTML, like Gecko) Version/8.0 Safari/602.1 Debian/buildd-unstable (3.18.5-1) Epiphany/3.18.5',
      spec: {
        browser: {
          name: 'Epiphany',
          version: '8.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'WebKit',
          version: '602.1',
        },
      },
    },
  ],
  Puffin: [
    {
      ua:
        'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36 Puffin/3.7.0IT',
      spec: {
        browser: {
          name: 'Puffin',
          version: '3.7.0',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  Sleipnir: [
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 Sleipnir/6.1.4',
      spec: {
        browser: {
          name: 'Sleipnir',
          version: '6.1.4',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'K-Meleon': [
    {
      ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:24.0) Gecko/20140105 Firefox/24.0 K-Meleon/74.0',
      spec: {
        browser: {
          name: 'K-Meleon',
          version: '74.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20140105',
        },
      },
    },
  ],
  Chromium: [
    {
      ua:
        'Mozilla/5.0 (Linux; Ubuntu 14.04 like Android 4.4) AppleWebKit/537.36 Chromium/35.0.1870.2 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Chromium',
          version: '35.0.1870.2',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/50.0.2661.102 Chrome/50.0.2661.102 Safari/537.36',
      spec: {
        browser: {
          name: 'Chromium',
          version: '50.0.2661.102',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  SlimerJS: [
    {
      ua: 'Mozilla/5.0 (X11; Linux x86_64; rv:21.0) Gecko/20100101 SlimerJS/0.7',
      spec: {
        browser: {
          name: 'SlimerJS',
          version: '0.7',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Gecko',
          version: '20100101',
        },
      },
    },
  ],
  'Samsung Internet for Android': [
    {
      ua:
        'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'Samsung Internet for Android',
          version: '4.0',
        },
        os: {
          name: 'Android',
          version: '5.0.2',
          versionName: 'Lollipop',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'NAVER Whale Browser': [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Whale/1.0.40.10 Safari/537.36',
      spec: {
        browser: {
          name: 'NAVER Whale Browser',
          version: '1.0.40.10',
        },
        os: {
          name: 'macOS',
          version: '10.12.6',
          versionName: 'Sierra',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'MZ Browser': [
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 6.0; zh-CN; MZ-PRO 6 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 MZBrowser/6.9.511-2018012510 UWS/2.11.0.33 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'MZ Browser',
          version: '6.9.511',
        },
        os: {
          name: 'Android',
          version: '6.0',
          versionName: 'Marshmallow',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  Focus: [
    {
      ua:
        'Mozilla/5.0 (Linux; Android 7.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.2.1 Chrome/59.0.3071.125',
      spec: {
        browser: {
          name: 'Focus',
          version: '1.2.1',
        },
        os: {
          name: 'Android',
          version: '7.1.1',
          versionName: 'Nougat',
        },
        platform: {
          type: 'tablet',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  Swing: [
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.105 Safari/537.36 Swing/4.2.4.0',
      spec: {
        browser: {
          name: 'Swing',
          version: '4.2.4.0',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'PlayStation 4': [
    {
      ua: 'Mozilla/5.0 (PlayStation 4 6.20) AppleWebKit/605.1.15 (KHTML, like Gecko) ',
      spec: {
        browser: {
          name: 'PlayStation 4',
        },
        os: {
          name: 'PlayStation 4',
          version: '6.20',
        },
        platform: {
          type: 'tv',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  Roku: [
    {
      ua: 'Roku/DVP-9.0 (047.00E09044A)',
      spec: {
        browser: {
          name: 'Roku',
          version: 'DVP-9.0',
        },
        os: {
          name: 'Roku',
          version: '9.0',
        },
        platform: {
          type: 'tv',
        },
        engine: {},
      },
    },
  ],
  'QQ Browser': [
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.0 QQ-URL-Manager Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'QQ Browser',
          version: '5.0',
        },
        os: {
          name: 'Android',
          version: '4.4.2',
          versionName: 'KitKat',
        },
        platform: {
          type: 'mobile',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (iPhone 84; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 MQQBrowser/7.8.0 Mobile/14G60 Safari/8536.25 MttCustomUA/2 QBWebViewType/1 WKType/1',
      spec: {
        browser: {
          name: 'QQ Browser',
          version: '7.8.0',
        },
        os: {
          name: 'iOS',
          version: '10.3.3',
        },
        platform: {
          model: 'iPhone',
          type: 'mobile',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '603.3.8',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Linux; U; Android 9; zh-cn; DUK-AL20 Build/HUAWEIDUK-AL20) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/9.6 Mobile Safari/537.36',
      spec: {
        browser: {
          name: 'QQ Browser',
          version: '9.6',
        },
        os: {
          name: 'Android',
          version: '9',
          versionName: 'Pie',
        },
        platform: {
          type: 'mobile',
          vendor: 'Huawei',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.104 Safari/537.36 Core/1.53.2141.400 QQBrowser/9.5.10219.400',
      spec: {
        browser: {
          name: 'QQ Browser',
          version: '9.5.10219.400',
        },
        os: {
          name: 'Windows',
          version: 'NT 6.1',
          versionName: '7',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36 QQBrowser/3.8.3858.400',
      spec: {
        browser: {
          name: 'QQ Browser',
          version: '3.8.3858.400',
        },
        os: {
          name: 'macOS',
          version: '10.10.5',
          versionName: 'Yosemite',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
  'QQ Browser Lite': [
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.3 Safari/605.1.15 QQBrowserLite/1.2.5',
      spec: {
        browser: {
          name: 'QQ Browser Lite',
          version: '1.2.5',
        },
        os: {
          name: 'macOS',
          version: '10.13.6',
          versionName: 'High Sierra',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'WebKit',
          version: '605.1.15',
        },
      },
    },
  ],
  Electron: [
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) my-app/1.0.0 Chrome/78.0.3904.113 Electron/7.1.2 Safari/537.36',
      spec: {
        browser: {
          name: 'Electron',
          version: '7.1.2',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.146 Electron/6.1.5 Safari/537.36',
      spec: {
        browser: {
          name: 'Electron',
          version: '6.1.5',
        },
        os: {
          name: 'Windows',
          version: 'NT 10.0',
          versionName: '10',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.113 Electron/7.1.2 Safari/537.36',
      spec: {
        browser: {
          name: 'Electron',
          version: '7.1.2',
        },
        os: {
          name: 'macOS',
          version: '10.15.1',
          versionName: 'Catalina',
        },
        platform: {
          type: 'desktop',
          vendor: 'Apple',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
    {
      ua:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.113 Electron/7.1.2 Safari/537.36',
      spec: {
        browser: {
          name: 'Electron',
          version: '7.1.2',
        },
        os: {
          name: 'Linux',
        },
        platform: {
          type: 'desktop',
        },
        engine: {
          name: 'Blink',
        },
      },
    },
  ],
};

export default listOfUA;
