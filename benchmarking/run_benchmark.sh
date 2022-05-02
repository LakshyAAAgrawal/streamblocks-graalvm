#!/usr/bin/env bash
hyperfine --export-json $1 \
 --time-unit millisecond \
 --warmup 5 \
 --parameter-list binary_name "./cal","./native/calnative" \
 --parameter-list run_configs "--cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal","--cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal" \
 "{binary_name} {run_configs}"