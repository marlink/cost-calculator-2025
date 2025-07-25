#!/bin/bash

File_png="${1?:Usage: $0 file.png}"

if [[ ! -s "$File_png" ]]; then
  echo >&2 "The first argument ($File_png)"
  echo >&2 "must be a file having a size greater than zero"
  ( set -x ; ls -s "$File_png" )
  exit 1
fi

File="${File_png%.*}"

echo "Converting $File_png to square SVG with centered content..."

# First, reduce colors to 2 and remove background
magick "$File_png" -colors 2 -fuzz 15% -transparent white "$File-2color.png"

# Convert to high contrast black and white
magick "$File-2color.png" -threshold 50% "$File-bw.png"

# Make the image square by adding padding to center it
magick "$File-bw.png" -background transparent -gravity center -extent 500x500 "$File-square.png"

# Convert PNG to PNM
magick "$File-square.png" "$File.pnm"

# PNM to SVG using potrace with better settings for complete paths
potrace "$File.pnm" -s -t 5 -O 0.5 --flat -o "$File-temp.svg"

# Create final square SVG with proper centering and scaling
cat > "$File-sharp.svg" << EOF
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="500" height="500" viewBox="0 0 500 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by convert_logo.sh - Square centered logo
</metadata>
<g transform="translate(0,500) scale(0.1,-0.1)" fill="#000000" stroke="none">
EOF

# Extract and process the path data from the temporary SVG (handle multiline paths)
PATH_DATA=$(sed -n '/<path d="/,/"/p' "$File-temp.svg" | tr -d '\n' | sed 's/.*d="//;s/".*//')

if [ -z "$PATH_DATA" ]; then
    echo "Error: Could not extract path data from SVG"
    # Clean up temporary files
    rm -f "$File.pnm" "$File-2color.png" "$File-bw.png" "$File-square.png" "$File-temp.svg"
    exit 1
fi

# Ensure path is closed (add 'z' if not present)
if [[ ! "$PATH_DATA" =~ z$ ]]; then
    PATH_DATA="${PATH_DATA}z"
fi

echo "<path d=\"$PATH_DATA\" fill=\"#000000\" stroke=\"none\"/>" >> "$File-sharp.svg"

# Close the SVG
echo '</g>' >> "$File-sharp.svg"
echo '</svg>' >> "$File-sharp.svg"

# Clean up temporary files
rm "$File.pnm"
rm "$File-2color.png"
rm "$File-bw.png"
rm "$File-square.png"
rm "$File-temp.svg"

echo "Conversion complete: $File-sharp.svg"
echo "Square, centered, white logo created"