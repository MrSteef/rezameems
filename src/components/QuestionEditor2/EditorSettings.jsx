const settings = {
  parties: [
    'PvdAGL',
    'BBB',
    'CDA',
    'D66',
    'FvD',
    'Volt',
    'PVV',
    'NSC',
    'VVD',
    'PvdD',
  ],
  minScoreEffect: -15,
  maxScoreEffect: 15,
  minAbsurdity: 1,
  maxAbsurdity: 15,
  questionModifierTypes: [

  ],
  answerModifierTypes: [
    {
      setting: 'followup',
      display: 'Followup question',
      optionName: 'Question ID',
      optionType: 'number'
    },
    {
      setting: 'redirect',
      display: 'Website redirect',
      optionName: 'Website URL',
      optionType: 'text'
    },
    {
      setting: 'error',
      display: 'Custom error message',
      optionName: 'Error message',
      optionType: 'text'
    },
    {
      setting: 'finish',
      display: 'Finish kieswijzer',
      optionName: 'Ignore scores',
      optionType: 'checkbox'
    }
  ],
  questionTypes: [
    {
      setting: 'mc',
      display: 'Multiple choice'
    },
  ],
}
export default settings