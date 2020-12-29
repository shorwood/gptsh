# GPT.sh

GPT.sh is a CLI tool build with NodeJs and powered by [Open AI's GPT-3](https://openai.com/). It's main purpose is to translate natural language questions and requests into Bash and Powershell commands. Heavily inspired by projects such as [nlsh](https://vimeo.com/427943407/98fe5258a7) and [cmdxyz](https://cmd.xyz/), it can be easily installed and used in conjunction with your classic shell environment.

## Installation

Use the package manager NPM or Yarn to install GPT.sh globally on your system.

```bash
sudo npm install --global gptsh
```

```bash
yarn global add gptsh
```

## Usage

```
Usage: gptsh <query> [options]

Options:
      --version     Show version number                              [boolean]
  -e, --engine      The ID of the engine to use for this request      [string]
  -s, --secret      The OpenAI API API keys for authentication        [string]
  -t, --max-tokens  The maximum number of tokens to generate          [number]
  -n                How many completions to generate for each prompt. [number]
      --help        Show help                                        [boolean]
```

## Examples
```bash
$ gptsh install node 12 repository
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

```bash
$ List all files of this directory | bash
LICENSE  data  node_modules  package.json  src  yarn.lock
```

```bash
$ Install the lodash package using yarn --secret <YOUR_SECRET_KEY>
yarn add lodash
```

```bash
$  Delete the root directory --engine ada
rm -rf /
```

```bash
$ gptsh Add remote from github with name shorwood/gptsh
git remote add shorwood https://github.com/shorwood/gptsh.git
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
