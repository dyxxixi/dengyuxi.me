export interface Introduce {
  words: string
  keyword: string[]
  color: string[]
  weight: number
}

export const myIntroduce: Introduce[] = [
  {
    words: 'Hello everyone, my name is Joseph Deng.',
    keyword: ['👋 Joseph Deng'],
    color: ['#7DB9DE'],
    weight: 5,
  },
  {
    words: 'I\'m a student studying in Chongqing.',
    keyword: ['Student 👨‍🎓', 'Chongqing 🚝'],
    color: ['#E03C8A', '#FFB11B'],
    weight: 4,
  },
  {
    words: 'I\'m dedicated to learning front-end development.',
    keyword: ['Development 👨‍💻', 'Programmer 🐵'],
    color: ['#3eaf7c', '#ba38fe'],
    weight: 3,
  },
  {
    words: 'Besides programming, I also enjoy reading, watching movies, and listening to music in my leisure time.',
    keyword: ['Books 📕', 'Movies 🎦', 'Music 🎵'],
    color: ['#B481BB', '#F19483', '#4fff33'],
    weight: 1,
  },
  {
    words: 'Looking ahead, I aspire to travel the world with someone dear to me.',
    keyword: ['Travel 🎒', '♥'],
    color: ['#61dafb', '#f00'],
    weight: 2,
  },
]
