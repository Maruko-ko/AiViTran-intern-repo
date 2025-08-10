## What cause the conflict?
The conflict happened because I modified the same file in two different branches (main and trial). When Git tried to merge the branches, it didn't know which change should be kept, so it flagged it as a marge conflict.
## How did I resolve it?
I used the **Merge Editor** to compare the differences between the 2 versions of the file. I reviewed each conflict section, chose the appropriate lines of code I wanted to keep for the project, and removed the unnecessary ones. Once I was satisfied with the merged result, I committed the changes to complete the merge.
## What did I learn?
The merge conflicts usually happen when two branches edit the same part of a file. Git can't automatically decide which version is correct, so a human needs to steps in and make the decision. I also learned how to read Git's conflict markers and that resolving conflicts is a normal part of collaborative development.