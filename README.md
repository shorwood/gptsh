# GPT.sh - Hello, Dave.

<p align="center">
  <a href="https://github.com/shorwood/gptsh">
    <img src="assets/gptsh.png" alt="GPT.sh" width="836" height="418">
  </a>
</p>

GPT.sh is a cross platform CLI tool built with NodeJS and powered by [Open AI's GPT-3](https://openai.com/). It's main purpose is to translate natural language questions and requests into shell commands. Heavily inspired by projects such as [nlsh](https://vimeo.com/427943407/98fe5258a7) and [cmdxyz](https://cmd.xyz/), it can easily be installed and used in conjunction with your classic shell environment.

This tool is not meant as a complete replacement for all of you shell commands. It's role is to integrate into your standard shell workflow to help you make generic task which commands you dont know by heart. For example, when compressing or uncompressing a files, using new frameworks, searching files on your system and much more...

## • Demo

<p align="center">
  <a href="https://github.com/shorwood/gptsh">
    <img src="assets/gptsh.gif" alt="GPT.sh" width="836" height="238">
  </a>
</p>

## • Installation

Use the package manager NPM or Yarn to install GPT.sh globally on your system.

```bash
npm install --global gptsh
```

```bash
yarn global add gptsh
```

## • Getting started
To use this tool, you will need to set [OpenAI API key](https://beta.openai.com/) either as an environment variable.
```bash
OPENAI_SECRET_KEY=<YOUR_SECRET_KEY>
OPENAI_ENGINE_ID=davinci
```

As a option while executing the command.
```bash
$ gptsh <input> --secret <YOUR_SECRET_KEY>
```

Or in the `~/.gptshrc` config file placed in your home directory.
```ini
secret=sk-XckwVRipQyM9nr1M8jVGGBUvDGIqwVmsbcrznkwz
engine=davinci
platform=linux
```


## • Usage


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

## • Examples
```bash
$ gptsh install node 12 repository
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

```bash
$ gptsh add yarn bin folder to path on zsh
echo 'export PATH="$HOME/.yarn/bin:$PATH"' >> ~/.zshrc
```

```bash
$ gptsh List all files of this directory | bash
LICENSE  data  node_modules  package.json  src  yarn.lock
```

```bash
$ gptsh Install the lodash package using yarn --secret <YOUR_SECRET_KEY>
yarn add lodash
```

```bash
$ gptsh Delete the root directory --engine ada
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

## • Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## • License
[MIT](https://choosealicense.com/licenses/mit/)
