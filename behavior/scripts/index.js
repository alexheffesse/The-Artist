'use strict'

<<<<<<< Updated upstream
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
    classifications: {},
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
