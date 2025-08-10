
`git cherry-pick <commit>`
### What?
Applies the changes from a single commit (by hash) onto current branch - no need to merge the entire source branch.
### When?
Ideal fir hitfixes and backports in multi-dev, long-running projects - bring a specific fix from a feature/release branch into main or another release line.
### What surprise me most?
Even small commit can cause merge conflicts if the surrounding code has changed, and that resolving them was similar to normal merge but faster.
`git log`
### What?
Show commit history with flags
### When?
Auditing changes, finding when something changed, locating commits to cherry-pick and understanding branch history during reviews
### What surprise me most?
I show clearly who made the changes and when, even the commit messages.
`git blame`
### What?
Annotates each line with the commit that last changed it
### When?
To trace the context behind a line (who changed it, when, and in which commit), decide whom to ask in reviews, or jump to the commit to understand intent
### What surprised I while testing these commands?
I give useful historical context for why a line of code exist which makes it easier to debug.