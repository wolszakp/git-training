# GIT Training - commands

## How to install?
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Commands

### System-level configuration

```
git config --system
\Program Files\Git\etc\gitconfig
```

### User level configuration
```
git config --global
C:\Users\<Name>\.gitconfig
```

### Repository level configuration
```
git config
.git/config in each repo
```

### Git configuration
```
git config --global --list
	list all global configuration
git config --global user.name "user name"	
git config --global user.email "user_email"	
git config --global core.editor "notepad++"	
git config --global help.autocorrect 1	
	auto correct some misspeled words (it will wait 1- 0.1s to auto corect)
git config --global color.ui auto	
	it will color the output automatically
git config --global core.autocrlf true|false|input	
	convert crlf into solve characters into repository style, when getting back convert into original in text files (binaries not)
	( in script it will not color an output, in terminal it will color the output)
	; false do nothing
	; input convert crlf to lf when put into repository, but when get do nothing
git config --global alias.lga "log --graph --oneline --all --decorate" 	
	create shortcat for git command next you can use it by pressing "git lga"
git init	
	create repository in current folder
git status 
	show status of current repository
```