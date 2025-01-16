export const words = [
  {
    id: 1,
    word: 'hello',
    date: '2021-05-01',
    category: 'greeting'
  },
  {
    id: 2,
    word: 'world',
    date: '2021-05-02',
    category: 'noun'
  },
  {
    id: 3,
    word: 'javascript',
    date: '2021-05-03',
    category: 'programming'
  },
  {
    id: 4,
    word: 'minisearch',
    date: '2021-05-04',
    category: 'library'
  },
  {
    id: 5,
    word: 'nodejs',
    date: '2021-05-05',
    category: 'runtime'
  },
  {
    id: 6,
    word: 'express',
    date: '2021-05-06',
    category: 'framework'
  },
  {
    id: 7,
    word: 'react',
    date: '2021-05-07',
    category: 'library'
  },
  {
    id: 8,
    word: 'mongodb',
    date: '2021-05-08',
    category: 'database'
  },
  {
    id: 9,
    word: 'postgresql',
    date: '2021-05-09',
    category: 'database'
  },
  {
    id: 10,
    word: 'mysql',
    date: '2021-05-10',
    category: 'database'
  }
]

export function addWordToStorage (newWord) {
  words.push(newWord)
}
