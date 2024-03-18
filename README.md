# whistle.mockya

A rule-based API Data Mock plugin built on [whistle](https://www.npmjs.com/package/whistle).

<img src="https://github.com/aijun-li/mockya/assets/26110333/fe8b9e6a-8c1d-4d68-8012-a1eaadea7df3" width="49%" />
<img src="https://github.com/aijun-li/mockya/assets/26110333/b1373333-7c1d-41a8-9ea3-b5b57993ac63" width="49%" />

## Usage

### Install & Start whistle

```bash
npm i -g whistle
w2 start
```

### Install whistle.mockya

```bash
w2 install whistle.mockya
```

### Proxy your website

Use tools like [SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en) to proxy your website to whistle


### Add rule in whistle's Rules tab

```bash
[your_api_prefix] mockya://[mockya_collection_id]

# for example
http://mockya.test/api mockya://test
```

<img width="1790" alt="image" src="https://github.com/aijun-li/mockya/assets/26110333/a5fd6ab4-f4e9-484a-99e6-c5c89ec27c2e">

### Open whistle.mockya to add mock data

Visit http://localhost:8899/whistle.mockya (replace port with your own one) and install as PWA (recommended)

<img width="500" alt="image" src="https://github.com/aijun-li/mockya/assets/26110333/c7fe774b-f92f-4f57-97a6-d118c57cdab9">

## Features

### Group your mock data in collections

<img width="500" alt="image" src="https://github.com/aijun-li/mockya/assets/26110333/1284adb5-bd5d-4a6d-ad6d-b85822e0f7cc">

### Match request by url path & key-value pair in query/body

<img width="300" alt="image" src="https://github.com/aijun-li/mockya/assets/26110333/11ee27e9-f1c1-4ff6-a4d9-a84206893df5">

### Auto switch mock data based on rules

![Kapture 2024-03-18 at 20 17 42](https://github.com/aijun-li/mockya/assets/26110333/9ead8c78-7397-4461-94d3-5e0774ea7906)

### Support JSON5 & JavaScript & Mock.js

You can compose your mock data in both [JSON5](https://json5.org/) and JavaScript, along with [Mock.js](http://mockjs.com/) syntax.

<img width="49%" alt="image" src="https://github.com/aijun-li/mockya/assets/26110333/ac0eb384-71db-4ef2-8a6f-eb51c3d94e1d">
<img width="49%" alt="image" src="https://github.com/aijun-li/mockya/assets/26110333/d991e9ef-f2e2-479c-82b9-ecb9cb33aa40">

### Customize response delay

Useful when you need to test things like loading state UI.

![Kapture 2024-03-18 at 20 32 38](https://github.com/aijun-li/mockya/assets/26110333/9c712c58-3deb-4190-b99e-508e340252a4)

### Encode your data on demand

MockYa has special 'command' syntax to encode specific value in json.

```javascript
// append '>[command]' to some field
{ "key>[command]": xxx }

// for example
{ "data>encode": { "a": 1 } }

// will return
{ "data": "{\"a\":1}" }
```

![Kapture 2024-03-18 at 20 41 53](https://github.com/aijun-li/mockya/assets/26110333/1f39ce90-8d79-4a8d-ad71-4e297e7749cf)

Currently support:

|Command| Description|
|----|----|
|encode| use `JSON.stringify` to encode field value|

