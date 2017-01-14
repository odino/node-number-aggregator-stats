#!/usr/bin/env node
let inputs = []

process.stdin.on('data', (data) => {
  inputs.push(parseInt(data.toString(), 10))

  let min = Math.round(Math.min(...inputs))
  let max = Math.round(Math.max(...inputs))
  let avg = Math.round(inputs.reduce((a, b) => a + b) / inputs.length)
  let cur = Math.round(inputs[inputs.length - 1])

  process.stdout.write(`Meas: ${inputs.length} Min: ${min} Max: ${max} Avg: ${avg} Cur: ${cur}\r`)
});
