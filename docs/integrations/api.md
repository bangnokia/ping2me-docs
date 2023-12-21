---
description: Ping2me API integration is super easy, just send a POST request to our endpoint with your message.
---

# Ping2me API

The api URL is quite simple, when you create a channel, and connect to a bot. You could set a friendly handle for you channel, so you api url will be like:

```
https://ping2.me/@username/channel_handle
```

So if you username is `adam`, and your channel handle is `new-orders` to receive new orders notifications, maybe, then your api url will be:

```
https://ping2.me/@adam/new-orders
```

Then in your application, you can just send a POST request to this url with your message, and we will forward it to your chat app, or even send an json body, it will be display beautifully in your chat app with json syntax highlight.

:::info
We also have official SDK for many languages, so you can use them to send notification to your chat app easily.
At this time, we have SDK for: PHP and Laravel, you can find them in the sidebar.
:::