# GPT.sh - Hello, Dave.

<p align="center">
  <a href="https://github.com/shorwood/gptsh">
    <img src="assets/gptsh.png" alt="GPT.sh" width="836" height="418">
  </a>
</p>

GPT.sh is a CLI tool built with NodeJS and powered by [Open AI's GPT-3](https://openai.com/). It's main purpose is to translate natural language questions and requests into shell commands. Heavily inspired by projects such as [nlsh](https://vimeo.com/427943407/98fe5258a7) and [cmdxyz](https://cmd.xyz/), it can be easily installed and used in conjunction with your classic shell environment.

## Installation

Use the package manager NPM or Yarn to install GPT.sh globally on your system.

```bash
npm install --global gptsh
```

```bash
yarn global add gptsh
```
To use this tool, you will need to set your [OpenAI API key](https://beta.openai.com/) as a parameter or environment variable.
```bash
OPENAI_SECRET_KEY=<YOUR_SECRET_KEY>
OPENAI_ENGINE_ID=davinci
```

## Usage


```
Usage: gptsh <input> [options]

Options:
      --version      Show version number                               [boolean]
  -s, --secret       OpenAI API key for authentication                  [string]
  -e, --engine       ID of the engine to use                            [string]
  -t, --tokens       Maximum number of tokens to consume [number] [default: 100]
      --temperature  Higher values means the model will take more risks
                                                         [number] [default: 0.0]
  -p, --platform     Platform of the command to output                  [string]
  -n                 Number of completions to generate                  [number]
      --help         Show help                                         [boolean]
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

Oh, and it works for other platforms too.
```powershell
PS C:\WINDOWS\system32> gptsh Add a new user --platform win32
Add-ADUser -Name "username" -SamAccountName username -AccountPassword (Read-Host -AsSecureString "Password") -Enabled $true -ChangePasswordAtLogon $false
```

```powershell
$ gptsh Add a new user --platform aix
mkuser username
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
