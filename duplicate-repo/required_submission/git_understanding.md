## What is the different between staging and committing?

Staging is the process of selecting specific changes we want to include in the next commit. This is done using **git add <file/.>** or though a Git client interface. Staged changes are stored in the staging area (also called the index), but they are not yet saved in the project history.
Committing is the action of saving the staged changes into the Git repository's history with a commit message. Once committed, the changes become part of the permanent version hsitory and can be pushed to remote repositories.

## Why does Git separate these two steps?

Git separates staging and committing so developers can have more control over what changes are recorded in each commit. It helps grouping related changes together even if they ware made in different files. Also allowing reviewing and editing the list of changes before finalise them.

## When would I want to stage changes without committing?

When I am in the middle of working on a feature but want to temporatyily save my progress to avoid losing work. Or when I need to review or adjust the changes into a single commit so that the porject history remains clear and easy to follow.
