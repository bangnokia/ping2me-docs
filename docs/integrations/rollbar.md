---
description: Receive Rollbar exception notifications to Telegram, using ping2me integration via webhook made easy.
---

# Receiving Rollbar exception notifications to Telegram

Rollbar doesn't have Telegram notification integration, but it has a webhook integration. So we can use Ping2me to **receive notifications from Rollbar to Telegram**.

So first of all, you need to setup a channel and a Telegram bot on Ping2me.

Then visit Rollbar Project `Settings > Integrations > Notifications`, then active the webhook integration.
Put the channel endpoint to the `Webhook URL` field and save.

![](2023-12-22-01-14-09.png)

That's easy right? Now you can receive notifications from Rollbar to Telegram.



