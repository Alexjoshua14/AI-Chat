
export const userA = {
  id: "4423ffe2a3b4c5d6",
  username: "Sally",
  color: "yellow",
}

export const LLM = {
  id: "1293ffe2a3b4c5d6",
  username: "Concrete",
  color: "teal",
}

export const messages = [
    {
      id: "903278910ab27e17",
      userId: "4423ffe2a3b4c5d6",
      user: userA,
      content: 'Hello World!',
      timestamp: new Date(),
    },
    {
      id: "37ab119a0ac2cff1",
      userId: "1293ffe2a3b4c5d6",
      user: LLM,
      content: 'Hello World!!',
      timestamp: new Date(),
    },
    {
      id: "13ab119a0ac2cff1",
      userId: "4423ffe2a3b4c5d6",
      user: userA,
      content: 'Two messages in a row!',
      timestamp: new Date(),
    },
    {
      id: "299s119a0ac2cff1",
      userId: "4423ffe2a3b4c5d6",
      user: userA,
      content: 'Here\'s the second one!',
      timestamp: new Date(),
    },
    {
      id: "9810ab119a0ac2cff1",
      userId: "1293ffe2a3b4c5d6",
      user: LLM,
      content: 'Here is a longer message that will wrap around to the next line. I wonder how long this can be? Does it wrap around to the next line? Does the container expand to fit the content? I guess we\'ll find out!',
      timestamp: new Date(),
    },
    {
      id: "2105a119a0ac2cff1",
      userId: "4423ffe2a3b4c5d6",
      user: userA,
      content: 'Cool cool',
      timestamp: new Date(),
    },
    {
      id: "ffece119a0ac2cff1",
      userId: "1293ffe2a3b4c5d6",
      user: LLM,
      content: 'What a long message this is going to be! I wonder how long it will be? I guess we\'ll find out! Look it\'s still going! Wow!',
      timestamp: new Date(),
    },
    {
      id: "902a119a0ac2cff1",
      userId: "4423ffe2a3b4c5d6",
      user: userA,
      content: 'That sure is a long message..',
      timestamp: new Date(),
    },
  ]