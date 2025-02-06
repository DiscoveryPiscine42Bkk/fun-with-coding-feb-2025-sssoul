if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi

for dir in "$@"; do
	if [ ! -d "$dir" ]; then
		mkdir "ex$dir"
	fi
	
done