# GroupMe Piazza bot

GroupMe bot to link to Piazza topics

## Contents

- [Quickly get bot up and running in your groups](#deploy)
  - Deploy the code to heroku
  - Create a bot
  - Configure to your bot's credentials

## Requirements

- GroupMe account
- Heroku account
- [Heroku Toolbelt](https://toolbelt.heroku.com/)

# Get your bot up and running<a name="deploy"></a>

## Deploy to Heroku

Be sure to log into heroku, using your heroku credentials, then click the link below.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Optionally, you can give your app a name, or instead leave
it blank and let Heroku name it for you (you can change it later).

## Next, create a GroupMe Bot

Go [here](https://dev.groupme.com/session/new)

Use your GroupMe credentials to log into the developer site.

Once you have successfully logged in, go [here](https://dev.groupme.com/bots/new)

Fill out the form to create your new bot.

- Select the group where you want the bot to live
- Give your bot a name
- Paste in the url to your newly deply heroku app
  - `http://your-app-name-here.herokuapp.com/`
- (Optional) Give your bot an avatar by providing a url to an image
- Click submit

## Find your Bot ID

Go [here](https://dev.groupme.com/bots) to view all of your bots.

Click on the one you just created.

On your Bot's page, copy the Bot ID

## Add your Bot ID to your Heroku app

Go [here](https://dashboard-next.heroku.com/apps) to see all of your Heroku apps and select the one you just created before.

On your app page, click settings in the top navigation.

On your app's setting page, find the Config Vars section and click the Reveal Config Vars button.

Then click edit.

Fill out the form to add an environment variable to your app.

- In the "key" field type: BOT_ID
- In the "value" field paste your Bot ID that you copied in the previous steps
- Add another environment variable with key "PIAZZA_CLASS_ID", and value equal to the class ID from Piazza (the "abcdefg" in "https://piazza.com/class/abcdefg", don't include quotation marks)
- Click the save button

## Now go test your bot

Go to GroupMe and type "piazza@1" in the group where your bot lives to see it in action.
