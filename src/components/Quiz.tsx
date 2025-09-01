import { useEffect, useState } from 'react'
import { track } from '../utils/analytics'

export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
}

interface QuizProps {
  questions: QuizQuestion[]
  onFinish: (score: number) => void
}

export default function Quiz({ questions, onFinish }: QuizProps) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number[]>(
    Array(questions.length).fill(-1)
  )
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    track('quiz_start', { total: questions.length })
  }, [questions.length])

  const q = questions[current]

  function selectOption(index: number) {
    const next = [...selected]
    next[current] = index
    setSelected(next)
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
    } else {
      const s = selected.reduce(
        (acc, val, i) => acc + (val === questions[i].answer ? 1 : 0),
        0
      )
      setScore(s)
      setFinished(true)
      track('quiz_finish', { score: s, total: questions.length })
      onFinish(s)
    }
  }

  if (finished) {
    return (
      <div className="mt-2">
        Skor Anda: {score}/{questions.length}
      </div>
    )
  }

  return (
    <div className="mt-2">
      <p className="mb-2">
        {current + 1}. {q.question}
      </p>
      <ul className="mb-2">
        {q.options.map((opt, i) => (
          <li key={i} className="mb-1">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name={`q-${current}`}
                checked={selected[current] === i}
                onChange={() => selectOption(i)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button
        disabled={selected[current] === -1}
        onClick={nextQuestion}
        className="rounded bg-blue-600 px-3 py-1 text-white disabled:opacity-50"
      >
        {current === questions.length - 1 ? 'Selesai' : 'Lanjut'}
      </button>
    </div>
  )
}

