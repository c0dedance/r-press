import path from 'node:path'
import glob from 'fast-glob'
import fs from 'fs-extra'
import ora from 'ora'
import axios from 'axios'

import type { AiConfig } from 'shared/types'

interface UploadConfig extends AiConfig {
  accessToken: string
}

const http = axios.create()

const initAxios = (accessToken: string, project: string) => {
  // 配置默认的Authorization header
  http.defaults.headers.common['Authorization'] = accessToken
  // 添加请求拦截器
  http.interceptors.request.use((config) => {
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        project, // 添加默认参数
      }
    }
    return config
  })
}

const handleError = (spinnies, name, error) => {
  let message = ''
  if (error?.response?.data) {
    message = error.response.data.error
  } else {
    message = error.message
  }
  spinnies.fail(`${name} failed: ${message}`)
}

const uploadFiles = async (uploadUrl, files) => {
  if (!files.length) {
    return ora('No files to upload.').fail()
  }

  const uploadSpinner = ora({
    text: `Uploading files: 0/${files.length}`,
    color: 'blue',
  }).start()

  try {
    let uploadedFilesNum = 0

    for (const file of files) {
      uploadSpinner.text = `Uploading files: ${uploadedFilesNum}/${files.length} ${file.fileName}`
      // add auth header
      await http.post(uploadUrl, {
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
    await http.post(uploadUrl, {
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

const getFilesContents = async (config: UploadConfig) => {
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
export async function upload(config: UploadConfig) {
  console.log('Start uploading files to backend.\n')
  const { accessToken, server, project } = config
  const uploadUrl = server.upload

  if (!uploadUrl || !project) {
    throw new Error(
      `The parameter ${!uploadUrl ? 'server.upload' : 'project'} is required.`
    )
  }
  if (!accessToken) {
    // TODO: 快速初始化accessToken
    throw new Error('access token not found')
  }
  initAxios(accessToken, project)

  const filesContents = await getFilesContents(config)
  await uploadFiles(uploadUrl, filesContents)
}
