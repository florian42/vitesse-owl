import { promises as fs } from 'fs'
import getTheme from './theme'




fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile('./themes/light.json', JSON.stringify(getTheme(), null, 2)),
  ]))
  .catch(() => process.exit(1))
