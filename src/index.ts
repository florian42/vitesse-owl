import { promises as fs } from 'fs'
import getTheme from './theme'

const lightTheme = getTheme({
  style: 'light',
  name: 'Vitesse Owl Light',
})



fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile('./themes/light.json', JSON.stringify(lightTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
