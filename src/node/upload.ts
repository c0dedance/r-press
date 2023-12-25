import path from 'node:path'
import glob from 'fast-glob'
import fs from 'fs-extra'
import ora from 'ora'
import axios from 'axios'

import type { AiConfig } from 'shared/types'

const handleError = (spinnies, name, error) => {
  let message = ''
  if (error && error.response && error.response.data) {
    message = error.response.data.error
  } else {
    message = error.message
  }
  spinnies.fail(name, { text: `Failed: ${message}`, successColor: 'redBright' })
  return
}

const uploadFiles = async (uploadUrl, files) => {
  const uploadSpinner = ora({
    text: `Uploading files: 0/${files.length}`,
    color: 'blue',
  }).start()
  try {
    let uploadedFilesNum = 0

    for (const file of files) {
      uploadSpinner.text = `Uploading files: ${uploadedFilesNum}/${files.length} ${file.fileName}`

      await axios.post(uploadUrl, {
        operation: 'add',
        path: file.fileName,
        content: file.content,
      })

      uploadedFilesNum += 1
    }

    uploadSpinner.succeed(`${files.length} files uploaded.`)
  } catch (error) {
    return handleError(uploadSpinner, 'uploading', error)
  }

  const genSpinner = ora({
    text: 'Generating knowledge base...',
    color: 'blue',
  }).start()

  try {
    await axios.post(uploadUrl, {
      operation: 'generate',
    })
    genSpinner.succeed('Knowledge base generated.')
  } catch (error) {
    return handleError(genSpinner, 'generating', error)
  }

  console.log('\nDone.')
  console.log('Now you can try to Ask AI in you doc site.')
}

const readFilesByFileNames = async (rootPath, fileNames) => {
  const results = []
  for (const fileName of fileNames) {
    const content = await fs.readFile(path.join(rootPath, fileName), 'utf8')
    if (content.length !== 0) {
      results.push({ fileName, content })
    }
  }
  return results
}

const getFilesContents = async (config: AiConfig) => {
  let ignore = []
  if (config.exclude) {
    ignore = Array.isArray(config.exclude) ? config.exclude : [config.exclude]
  }
  ignore.push('node_modules/**')

  const include = config.include || '**'

  const fileNames = await glob(include, { ignore, cwd: config.root })

  const files = await readFilesByFileNames(config.root, fileNames)

  return files
}
export async function upload(config: AiConfig) {
  console.log('Start uploading files to backend.\n')
  const uploadUrl = config.server.upload
  if (!uploadUrl) {
    throw new Error('The parameter `server.upload` is required.')
  }

  const filesContents = await getFilesContents(config)
  await uploadFiles(uploadUrl, filesContents)
}
