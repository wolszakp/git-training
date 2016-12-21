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

### Working with remote repositories:
```
git clone https://..../project.git  
  get repository from the remote server
git remote  
  shows remote git repository
git remote -v 
  verbose show remote repository with url
git fetch 
  will pull down any changes from remote repository
git pull  
  git fetch + git merge origin/master
git branch --set-upstream master origin/master  
  set default pull operations
git fetch origin master 
  get changes from origin to master
git push origin master  
  push changes from the master to origin
git push origin branch_name 
  push changes from the branch_name branch into origin
git push origin branch_name:remote_branch_name  
  push changes from the local branch_name into origin and set remote_branch_name for it
git push origin :remote_branch_name 
  delete remote branch
git push --tags 
  push tags into remote repository
```

###Working with stash:  
```
git stash  
  copy pending changes into backgruond and keep branch clean
git stash list  
  display stash list
git stash applay  
  pull changes from stash back; stash changes are still on the list
git stash pop 
  pull changes from stash list and remove it from the list
git stash drop  
  delete last changes from the stash list
git stash branch branch_name  
  pull changes from the last stash list and put it in the branch branch_name
  checkout branch_name
```

###Work with local repository: 
```
git add file_name // add file_name to staged
git add -u        // add all files that are updated into staged state
git add -A        // add all files that are not in a repository
git log           // show history of commits
git log --oneline // display list of commits in one line
git log --oneline | wc -l   //get list of commits in one line, wc - word count -l count by lines
git log --oneline --graph   // display list of all commit in graph version
git shortlog    // git log --format=short
git shortlog -sne   // display shortlog -s summary -n order by numerical decreasing -e including email address
git show HEAD   // display last commit with changes
git show hash   // display hash commit with it changes
git commit -m "descripiton"     // commit changes into repository with commit description
git diff sha_one_commit..sha_other_commit   // display difference between two commits
git diff HEAD~1..HEAD~2   // display difference between commit last-1 and last-2
git tags    // display stable version witch were tagged
git checkout file_name  // get latest version of the file and overwrite local one
git reset --hard    // overwrite local version of file to the last repository commit
git reset --soft HEAD~1   // get repository -1 commit version and keep changes in local, before commit
  in log you will see log before last commit
git reset --hard HEAD~1   // get last but one version, and delete changes from local copy
git clean -n    // ask if you want't to clean changes in repository
git clean -f    // clean changes in local repository
touch .gitignore    //e.g. logs/*.txt folders logs recursive; /log/ - relative path for repository
```

###Working with branches: 
```
git branch    // display all barnches
git branch -r   // display all remote branches
git merge origin/master   // merge operation between origin branch and master
git merge branch_name   // merge branch_name with HEAD branch
git mergetool   // run default merge tool for file that have conflict after merging
git diff --cached   // compare repository version with staged
git rebase master   // move changes from the current branch up off the master (to the top of commit stack)
  when there are no conflict operation is completed
git rebase --continue   // when durgin rebase there are conflicts you have to merge files and say that you want to continue rebasing
git cherry-pick commit_sha    // get concrete commit (commit_sha) and copy it into master branch- create new commit
git branch branch_name        // create new branch with name
git branch branch_name sha_number   // ate new branch that is pointing on sha_number commit
git checkout branch_name        // move to branch branch_name
  branches are lables on sha hashes
  HEAD is pointing to the current branch
git checkout -b branch_name     // creates new branch and makes checkout to new branch
git branch -m old_name new_name // rename branch from old_name to new_name
git branch -d branch_name       // delete branch with name branch_name. if some changes will lose it will stop
git branch -D branch_name       // delete branch with name branch_name. Force deletion even if changes will lose
  
git reflog                      // display log with all references where HEAD has pointed (to 30 days )
git branch branch_name sha_number   // create branch branch_name created from sha number
  sha_number can be from reflog so you can get deleted commit
git show HEAD   // show difference betwen last commit and  current version
```