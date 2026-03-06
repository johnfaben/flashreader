#!/bin/bash
# Download ARASAAC pictograms for all words in the app
# Downloads up to 5 options per word for manual curation

WORDS=(
  sat tap pan pin tin nap mat man map dig dog god got cat cap cop kid kit kick duck sock pack neck
  net pet pen red run rug cup cut sun mug bug bus bat bed bin big hug hat hen hit hot hop fun fan fig fog leg lid log lip
  ship shop shed shut shell fish dish rush chin chop chat rich much thin thick moth
  king ring sing song rain tail mail nail snail
  bee tree seed feet moon boot food cool pool boat coat goat road
  car star park dark fork corn horn curl burn hurt fur cow owl town
  coin oil soil her fern
  flag flat frog drum drop crab clip clap plug plum grip grin brim brick black blob
  skip skin slim slug slip snip spot spin stem stop step swim swan trim trip trap tram truck pram press glad glass smell scan
  cake lake gate name game bike kite lime nine bone home nose rope cube tube
  leaf meat bean seal peach pie tie loud cloud mouse house phone whale wheel white key monkey honey
)

OUTDIR="/c/Users/jdfab/Dropbox/Flask/readflip/pictograms"
TOTAL=${#WORDS[@]}
COUNT=0
FAILED=()

for word in "${WORDS[@]}"; do
  COUNT=$((COUNT + 1))

  # Create word directory
  mkdir -p "$OUTDIR/$word"

  # Check how many we already have
  EXISTING=$(find "$OUTDIR/$word" -name "*.png" 2>/dev/null | wc -l)
  if [ "$EXISTING" -ge 3 ]; then
    echo "[$COUNT/$TOTAL] $word: already have $EXISTING images, skipping"
    continue
  fi

  echo "[$COUNT/$TOTAL] Searching: $word"

  # Search ARASAAC API and extract IDs directly, stripping any \r
  IDS=$(curl -s "https://api.arasaac.org/v1/pictograms/en/search/$word" 2>/dev/null | \
    python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if isinstance(data, list):
        for item in data[:5]:
            print(item['_id'])
except:
    pass
" 2>/dev/null | tr -d '\r')

  if [ -z "$IDS" ]; then
    echo "  No results for: $word"
    FAILED+=("$word")
    continue
  fi

  DLCOUNT=0
  for id in $IDS; do
    OUTFILE="$OUTDIR/$word/${id}.png"

    if [ -f "$OUTFILE" ]; then
      DLCOUNT=$((DLCOUNT + 1))
      continue
    fi

    IMGURL="https://static.arasaac.org/pictograms/${id}/${id}_500.png"
    curl -s -o "$OUTFILE" "$IMGURL"

    if [ -f "$OUTFILE" ]; then
      DLCOUNT=$((DLCOUNT + 1))
    else
      echo "  Failed: $id"
    fi
  done
  echo "  Got $DLCOUNT image(s)"

  sleep 0.15
done

echo ""
echo "=== Done ==="
echo "Total words: $TOTAL"
if [ ${#FAILED[@]} -gt 0 ]; then
  echo "No results: ${FAILED[*]}"
fi

# Summary
TOTAL_IMGS=$(find "$OUTDIR" -name "*.png" | wc -l)
WORDS_WITH_IMGS=$(find "$OUTDIR" -mindepth 1 -maxdepth 1 -type d -exec sh -c 'test $(find "$1" -name "*.png" | wc -l) -gt 0 && basename "$1"' _ {} \; | wc -l)
echo "Total images: $TOTAL_IMGS across $WORDS_WITH_IMGS words"
