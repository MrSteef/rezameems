const questions = [
  {
    id: 1,
    isFollowup: false,
    text: 'Houdt u van dieren?',
    type: 'mc',
    absurdity: 1,
    modifiers: [],
    answers: [
      {
        id: 0,
        text: 'yes',
        modifiers: [
          {
            type: 'followUp',
            options: {
              questionId: 2
            }
          }
        ],
        effects: {
          PvdAGL: -0.5,
          BBB: 5,
          CDA: 2,
          D66: 10,
          FvD: 0,
          Volt: 1,
          PVV: 1,
          NSC: 2,
          VVD: 10,
          PvdD: 100
        }
      },
      {
        id: 1,
        text: 'no',
        modifiers: [],
        effects: {
          PvdAGL: -0.5,
          BBB: 5,
          CDA: 2,
          D66: 10,
          FvD: 0,
          Volt: 1,
          PVV: 1,
          NSC: 2,
          VVD: 10,
          PvdD: -100
        }
      },
    ]
  },
  {
    id: 2,
    isFollowup: true,
    text: 'Als huisdier of op uw bord?',
    type: 'mc',
    absurdity: 1,
    modifiers: [],
    answers: [
      {
        id: 0,
        text: 'yes',
        modifiers: [],
        effects: {
          PvdAGL: -0.5,
          BBB: 5,
          CDA: 2,
          D66: 10,
          FvD: 0,
          Volt: 1,
          PVV: 1,
          NSC: 2,
          VVD: 10,
          PvdD: 100
        }
      },
      {
        id: 1,
        text: 'no',
        modifiers: [],
        effects: {
          PvdAGL: -0.5,
          BBB: 5,
          CDA: 2,
          D66: 10,
          FvD: 0,
          Volt: 1,
          PVV: 1,
          NSC: 2,
          VVD: 10,
          PvdD: -100
        }
      },
    ]
  }
]

export default questions