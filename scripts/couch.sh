# curl http://emilia:1234@localhost:5984"$@" -s | python -m json.tool > out.json
# bat out.json
# rm out.json
first_arg="$1"
shift
curl -X "$first_arg" http://emilia:1234@localhost:5984/"$@" -s | jq '.'
