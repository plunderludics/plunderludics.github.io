# Checkout gh-pages branch
git checkout gh-pages && # TODO find a way around warnings for local files or whatever

# Mirror main
git reset --hard origin/main &&

# Build files
npm run build &&

# Add and commit built files
git add docs &&
git commit -m "add built files" &&

# Squash history (don't need versioning on generated files)
git reset $(git commit-tree HEAD^{tree} -m "Erase history") &&

# Force push
git push -f &&

# Back to main branch
git checkout main &&

true;