export interface Introduce {
  words: string
  keyword: string[]
  color: string[]
  weight: number
}

export const myIntroduce: Introduce[] = [
  {
    words: 'Hi, I\'m Joseph Deng.',
    keyword: ['Joseph Deng 👋'],
    color: ['#7DB9DE'],
    weight: 10,
  },
  {
    words: 'I\'m a student in Chongqing.',
    keyword: ['Student 👨‍🎓', 'Chongqing'],
    color: ['#E03C8A', '#FFB11B'],
    weight: 6,
  },
  {
    words: 'I\'m learning Vue.js and Vite.',
    keyword: ['Vue.js', 'Vite⚡'],
    color: ['#3eaf7c', '#ba38fe'],
    weight: 7,
  },
  {
    words: 'Music and movie are my favorite!',
    keyword: ['Music 🎵', 'Movies 🎥'],
    color: ['#B481BB', '#F19483'],
    weight: 6,
  },
  {
    words: 'I like reading,too.',
    keyword: ['Read 📕'],
    color: ['#61dafb'],
    weight: 5,
  },
]
