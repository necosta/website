---
sidebar_position: 2
---

# Helpers

A "cheat sheet" on local config to boost developer performance

### Git

Add file `~/.gitconfig`

```
[user]
	name = Name
	email = Email
	signingkey = SigningKey
[merge]
	tool = kdiff3
[core]
	excludesFile = ~/.gitignore_global
	ignorecase = false
[commit]
	gpgsign = true
[includeIf "gitdir:projects/org"]
  	path = ~/.gitconfig_org
[credential]
	helper = osxkeychain
```

Add file `~/.gitignore_global`

```
.envrc
.log
.diff
.orig
.bsp/
.idea/
*.iml
```

### Bash profile

* Add useful alias
* Easier jump between versions

```
export JAVA_8_HOME=$(/usr/libexec/java_home -v1.8)
export JAVA_11_HOME=$(/usr/libexec/java_home -v11)
export JAVA_17_HOME=$(/usr/libexec/java_home -v17)
export JAVA_23_HOME=$(/usr/libexec/java_home -v23)

alias java8='export JAVA_HOME=$JAVA_8_HOME'
alias java11='export JAVA_HOME=$JAVA_11_HOME'
alias java17='export JAVA_HOME=$JAVA_17_HOME'
alias java23='export JAVA_HOME=$JAVA_23_HOME'

# Default to Java23
java23

# Useful git alias
alias gitb='git branch -l'
alias gitc='git diff --stat'
gitd() { git show $1 --color-words; }
alias gitf='git fetch --tags --force --prune --all; git status'
alias gitp='git pull'
gitr() { git reset --hard HEAD~$1; git clean -d -i; }
alias gits='git status'
alias gitl='git log --stat'

# Useful docker alias
alias dp='docker system prune'
alias drm='docker rm -f $(docker ps -aq)'
alias drmi='docker image prune -a'

# Useful K8s alias
alias k="kubectl"
alias kd="kubectl describe"

# Shorten command line prompt (MacOS)
PS1="%1~ $"

# Other helpers
alias rm_orig="find . -name '*.orig' -delete"
alias rm_store="find . -name '.DS_Store' -delete"
```

### IDEs

* IntelliJ IDEA
* Visual Studio Code (with Metals plugin)
