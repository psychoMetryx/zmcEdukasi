import { spawnSync } from 'node:child_process'

const rawArgs = process.argv.slice(2)
const normalizedArgs = []
let runInBand = false

for (const arg of rawArgs) {
  if (arg === '--runInBand' || arg === '-i') {
    runInBand = true
    continue
  }
  normalizedArgs.push(arg)
}

if (runInBand) {
  normalizedArgs.push('--pool=threads', '--max-workers=1')
}

const result = spawnSync('./node_modules/.bin/vitest', ['run', ...normalizedArgs], {
  stdio: 'inherit',
})

if (result.error) {
  console.error(result.error)
}

process.exit(result.status ?? 1)
