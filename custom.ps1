# Initialize the Git repository
echo "# projects" > README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/techanvconsulting/projects.git

# Loop through each folder and commit changes
Get-ChildItem -Directory | ForEach-Object {
    $folder = $_.Name
    git add $folder
    git commit -m "Add $folder"
}

# Push all commits to the remote repository
git push -u origin main

