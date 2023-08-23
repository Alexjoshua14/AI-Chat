/* Alex Joshua (c) 2023 */

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
      authorId: "4423ffe2a3b4c5d6",
      author: userA,
      content: 'Hello World!',
      timestamp: new Date(),
    },
    {
      id: "37ab119a0ac2cff1",
      authorId: "1293ffe2a3b4c5d6",
      author: LLM,
      content: 'Hello World!!',
      timestamp: new Date(),
    },
    {
      id: "13ab119a0ac2cff1",
      authorId: "4423ffe2a3b4c5d6",
      author: userA,
      content: 'Two messages in a row!',
      timestamp: new Date(),
    },
    {
      id: "299s119a0ac2cff1",
      authorId: "4423ffe2a3b4c5d6",
      author: userA,
      content: 'Here\'s the second one!',
      timestamp: new Date(),
    },
    {
      id: "9810ab119a0ac2cff1",
      authorId: "1293ffe2a3b4c5d6",
      author: LLM,
      content: 'Here is a longer message that will wrap around to the next line. I wonder how long this can be? Does it wrap around to the next line? Does the container expand to fit the content? I guess we\'ll find out!',
      timestamp: new Date(),
    },
    {
      id: "2105a119a0ac2cff1",
      authorId: "4423ffe2a3b4c5d6",
      author: userA,
      content: 'Cool cool',
      timestamp: new Date(),
    },
    {
      id: "ffece119a0ac2cff1",
      authorId: "1293ffe2a3b4c5d6",
      author: LLM,
      content: 'What a long message this is going to be! I wonder how long it will be? I guess we\'ll find out! Look it\'s still going! Wow!',
      timestamp: new Date(),
    },
    {
      id: "902a119a0ac2cff1",
      authorId: "4423ffe2a3b4c5d6",
      author: userA,
      content: 'That sure is a long message..',
      timestamp: new Date(),
    },
    {
      id: "902a119a0ac2cff1",
      authorId: "4423ffe2a3b4c5d6",
      author: userA,
      content: 'I think we\'ve reached the end of the messages.',
      timestamp: new Date(),
    },
    {
      id: "ffece119a0ac2cff1",
      authorId: "1293ffe2a3b4c5d6",
      author: LLM,
      content: 'I think you may be right...',
      timestamp: new Date(),
    },
  ]