import Generator from 'yeoman-generator'

export default class GeneratorBabel extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.option('esmodules')

    this.packageType = this.options.esmodules ? 'esmodules' : 'commonjs'
  }

  writing() {
    const { packageType } = this

    this.fs.copy(
      this.templatePath(`${packageType}/babel.config.json`),
      this.destinationPath('babel.config.json'),
    )
  }
}
