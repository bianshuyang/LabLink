while read line; do
    wget $line
done < download_list.txt

