import id from './id'
import su from './su'

export const translations = { id, su }
export type Lang = keyof typeof translations

export function getLabels(lang: Lang) {
  return translations[lang] ?? translations.id
}
