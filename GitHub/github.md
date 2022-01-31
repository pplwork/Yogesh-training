---------------------------------- GitHub Commands ----------------------------------

git status -> Changes that are not in git history yet / untracked files

git add . -> Put all the files in the dir to git staging area

git commit -m "message" -> Sets the commit message before being pushed to github

git restore --staged <fileName> -> Remove changes from the staged area to unstaged area

git log -> View overall history of project

git reset <commitId> -> Removing commit from history of project, all the previous changes goes to unstaged area

git stash -> used to go back in our project & we need clean codebase, Push previous changes to backstage area. First add changes on staged area using git add . then use this command to push to backstaged area

git stash pop -> Tranfer all the changes in backstage area to staged & unstaged area

git stash clear -> Removing all the changes in unstaged area that weren't commited

git remote add origin <URL> -> Connecting Remote repo to local repo

git push -u origin master -> Push code to remote repo

git branch <branchname> -> Creates new branch

git checkout <branchName> -> Used to switch our current branch

git merge <branchName> -> To merge some other branch to Master Branch

git push origin master -> Push new changes to Master Branch

git clone <URL> -> Used to clone any project on github to local repo

git remote add upstream <URL> -> To add the forked Project Url.

git remote -v -> Check origin url & upstream url. (Upstream represents the forked url & origin represents your personal Url)

For every new feature or any bug you are working on, make a new branch and create a new PR(Pull Request) Never commit on main branch.

=> Removing a commit from PR by force pushing to it:
git reset <commitId>
git add .
git stash
git push origin <branchName> -f

=> Making forked project in sync with main Project
git checkout master
git fetch --all --prune
git reset --hard upstream/main
git push -u origin master

            OR

        git pull upstream main
        git push -u origin master

=> squashing commits: Rebase Cmd
git rebase -i <CommitId>

        All the commits above <CommitId> we can (Squash)s or pick, Set the s and pick, whichever pick is above s will be merged together as single commit.

        esc :x -> allow to create a commit msg

git reset --hard <commitId> -> hard reset use with caution...

git diff -> diff of what is changed but not staged

git diff --staged -> diff of what is staged but not yet committed
