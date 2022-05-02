import json
import sys

if __name__ == "__main__":
    assert len(sys.argv) == 3, "Please specify the input json filename and output json filename"
    inp_filename = sys.argv[1]
    out_filename = sys.argv[2]
    with open(inp_filename, "r") as f:
        inp = json.load(f)

    output = [
        {
          "name": result["command"],
          "value": result["mean"],
          "unit": "ms",
          "range": result["stddev"]**2,
        }
        for result in inp["results"]
    ]

    with open(out_filename, "w") as f:
        json.dump(output, f)