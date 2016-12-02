'use strict'

<<<<<<< Updated upstream
  const firstOfEntityRole = function(message, entity, role) {
  role = role || 'generic';

  const slots = message.slots
  const entityValues = message.slots[entity]
  const valsForRole = entityValues ? entityValues.values_by_role[role] : null

  return valsForRole ? valsForRole[0] : null
}
exports.handle = function handle(client) => {
  // Create steps
=======
exports.handle = function handle(client) {
>>>>>>> Stashed changes
  const sayHello = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().helloSent)
    },

    prompt() {
      client.addResponse('welcome')
      client.addResponse('provide/documentation', {
        documentation_link: 'http://docs.init.ai',
      })
      client.addResponse('provide/instructions')

      client.updateConversationState({
        helloSent: true
      })

      client.done()
    }
  })

  const untrained = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addResponse('apology/untrained')
      client.done()
    }
  })

  const handleGreeting = client.createStep({
    satisfied() {
      return false
    },
    const collectCity = client.createStep({
      satisfied() {
        return Boolean(client.getConversationState().weatherCity)
      },

      prompt() {
        // Need to prompt user for city
        console.log('Need to ask user for city')
        client.done()
      },
    })

    const provideWeather = client.createStep({
      satisfied() {
        return false
      },

      prompt() {
        let weatherData = {
      temperature: 69,
      condition: 'doom',
      city: client.getConversationState().weatherCity.value,
    }
        client.addResponse('app:response:name:provide_weather/current', weatherData)
        client.done()
      },
    })
    prompt() {
<<<<<<< Updated upstream
      client.addTextResponse('What would you like to know?')
=======
      client.addTextResponse('Hey! Do you like contemporary art?')
>>>>>>> Stashed changes
      client.done()
    }
  })

  const handleGoodbye = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addTextResponse('Enough. To continue the conversation, please send questions to alex.heffesse@gmail.com')
      client.done()
    }
  })
<<<<<<< Updated upstream

=======

>>>>>>> Stashed changes
  client.runFlow({
    classifications: {
    goodbye: 'goodbye',
    greeting: 'greeting',
    },
    streams: {
    main: 'hi',
    hi: [sayHello],
    getWeather: [collectCity, provideWeather],
    }
})
    autoResponses: {
      // configure responses to be automatically sent as predicted by the machine learning model
    },
    streams: {
      goodbye: handleGoodbye,
      greeting: handleGreeting,
      main: 'onboarding',
      onboarding: [sayHello],
      end: [untrained],
    },
  })
}
