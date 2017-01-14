# number-aggregator-stats

Dump numbers to this script, it will calculate some stats for you:

```
$ repeat 100 sleep 1 && shuf -i 1-100 -n 1 | number-aggregator-stats

Meas: 1 Min: 54 Max: 54 Avg: 54 Cur: 54
```

## Installation 

```
npm install -g number-aggregator-stats
```

## Why?

See [this](http://odino.org/better-performance-the-case-for-timeouts/).
