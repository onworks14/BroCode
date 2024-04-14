#!/bin/bash
count=1
prefix="img"
for file in *.jpg; do
new_name="$prefix$count"
mv -i "$file" "$new_name.jpg"
((count++))
done