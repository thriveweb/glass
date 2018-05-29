const fs = require('fs')
const path = require('path')
const globCb = require('glob')
const util = require('util')
const sharp = require('sharp')

const glob = util.promisify(globCb)
const readFile = util.promisify(fs.readFile)

const options = {
  inputDir: './public/images/uploads',
  outputDir: './public/images/uploads/resized',
  imageFormats: ['webp'],
  convertToFormat: 'png'
}

const saveImage = ({ buffer, outputFile }) => {
  return new Promise((resolve, reject) => {
    sharp(buffer).toFile(outputFile, err => {
      if (err) {
        return reject(err)
      } else {
        return resolve(console.log(`✅ Saved ${outputFile}`))
      }
    })
  })
}

const saveImages = async ({ buffer, filename }) => {
  console.log(`🎞  Processing ${filename}`)

  const extname = path.extname(filename)
  const newFilename = `${path.basename(filename, extname)}${extname}.${
    options.convertToFormat
  }`
  const outputFile = `${options.outputDir}/${newFilename}`
  const fileExists = await doesFileExist({ filename: outputFile })
  if (fileExists) return console.log(`↩️  ${outputFile} exists, skipping`)
  return saveImage({ buffer, outputFile })
}

const readFiles = files =>
  Promise.all(
    files.map(async filename => {
      const buffer = await readFile(filename)
      return { filename, buffer }
    })
  )

const doesFileExist = async ({ filename }) => {
  try {
    await readFile(filename)
    return true
  } catch (e) {
    return false
  }
}

const convertImages = async () => {
  console.log(`✨  Reading image files in ${options.inputDir}`)
  try {
    const fileGlob = `${options.inputDir}/**/**.+(${options.imageFormats.join(
      '|'
    )})`
    const filesToResize = await glob(fileGlob)
    const imageFiles = await readFiles(filesToResize)
    Promise.all(imageFiles.map(saveImages))
      .then(() => process.exit())
      .catch(console.error)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

convertImages()
