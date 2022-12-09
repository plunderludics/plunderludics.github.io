# usage: 
# heic2png.sh ./src/documentation/2022-12-03/*.HEIC

# Go through input files and convert all to jpg
# delete originals (be careful!)

# convert $1 $2

for f in "$@"
do
  if [[ "$f" == *.HEIC ]] && [[ -f "$f" ]]
  then
    of="${f%.HEIC}.png"
    cmd="convert $f $of"
    echo $cmd
    $cmd

    cmd="rm $f"
    rm $f
    echo $cmd
    $cmd
  fi
done
