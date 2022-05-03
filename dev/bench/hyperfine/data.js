window.BENCHMARK_DATA = {
  "lastUpdate": 1651562320829,
  "repoUrl": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm",
  "entries": {
    "Hyperfine based CAL Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lakshya.aagrawal@gmail.com",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "committer": {
            "email": "lakshya.aagrawal@gmail.com",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "distinct": true,
          "id": "3407d3638914bd31ce80d44a29bd61b457477e01",
          "message": "Add benchmarking Github Action for push to master",
          "timestamp": "2022-05-03T02:59:47+05:30",
          "tree_id": "57bcf9f3bb3d27dd9da3dd74fe0e97b388ee18b1",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/3407d3638914bd31ce80d44a29bd61b457477e01"
        },
        "date": 1651528621935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.93188011912,
            "unit": "ms",
            "range": 0.08112036551219308
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.15275231942,
            "unit": "ms",
            "range": 0.001806301338520523
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4369879035200002,
            "unit": "ms",
            "range": 0.0014918249270822524
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1379877973438095,
            "unit": "ms",
            "range": 0.0000011302400022092689
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lakshya18242@iiitd.ac.in",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "304de2f80fc37372424fd2eac8b5cf8a4d91f0ad",
          "message": "Create test-benchmarking",
          "timestamp": "2022-05-03T04:04:03+05:30",
          "tree_id": "bf005bbf226db9ba56eb755874a833ab361d8ed4",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/304de2f80fc37372424fd2eac8b5cf8a4d91f0ad"
        },
        "date": 1651531819862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.402195477640001,
            "unit": "ms",
            "range": 0.22184463766716703
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 16.537520436940003,
            "unit": "ms",
            "range": 0.010130471736601344
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.8108617597399999,
            "unit": "ms",
            "range": 0.004306624216526919
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.178278065565,
            "unit": "ms",
            "range": 0.0003200477467468872
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lakshya18242@iiitd.ac.in",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "183db5aded6d5843c2e7922f773ba19fd0f9b197",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-03T04:25:02+05:30",
          "tree_id": "5f5ab0107b0fe1c4f6a55d90796b0541eb6f03f9",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/183db5aded6d5843c2e7922f773ba19fd0f9b197"
        },
        "date": 1651532882642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.06965709382,
            "unit": "ms",
            "range": 0.07452004376017322
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.11526222942,
            "unit": "ms",
            "range": 0.010067290806112579
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.45715418292,
            "unit": "ms",
            "range": 0.002457091773221963
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13935901785809526,
            "unit": "ms",
            "range": 0.0000011000790474134927
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lakshya18242@iiitd.ac.in",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5b2e3e0a9104fe70cfed9cf5e6f953b647c680a",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-03T12:03:25+05:30",
          "tree_id": "a0c25ee0fe731c42dd8c976f045a05ad6118532c",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/f5b2e3e0a9104fe70cfed9cf5e6f953b647c680a"
        },
        "date": 1651560354615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.849646450800002,
            "unit": "ms",
            "range": 0.02807009837603012
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.7929805942,
            "unit": "ms",
            "range": 0.004678693990764908
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.436259961,
            "unit": "ms",
            "range": 0.0010059546118617617
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1249720505130435,
            "unit": "ms",
            "range": 3.123881789484369e-7
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lakshya.aagrawal@gmail.com",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "committer": {
            "email": "lakshya.aagrawal@gmail.com",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "distinct": true,
          "id": "361d7714e3830d834ee3f1cdaf37b5336c325a40",
          "message": "Add cargo based cache for hyperfine to master push GHAction",
          "timestamp": "2022-05-03T12:17:56+05:30",
          "tree_id": "57261063f8f746d4426e25b061c5b6886684433e",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/361d7714e3830d834ee3f1cdaf37b5336c325a40"
        },
        "date": 1651561249427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.122851852600002,
            "unit": "ms",
            "range": 0.02513302670844096
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.5113031726,
            "unit": "ms",
            "range": 0.0031067004025435766
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4542094852999998,
            "unit": "ms",
            "range": 0.004842385226020836
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13917482832857142,
            "unit": "ms",
            "range": 9.262186588670623e-7
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lakshya.aagrawal@gmail.com",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "committer": {
            "email": "lakshya.aagrawal@gmail.com",
            "name": "Lakshya A Agrawal",
            "username": "LakshyAAAgrawal"
          },
          "distinct": true,
          "id": "8907a2efbe3cc36a9276929dd1e4829561d0c7ce",
          "message": "Add more cache directories for cargo cache in master-push GHAction",
          "timestamp": "2022-05-03T12:33:23+05:30",
          "tree_id": "315ad701276d1a196b8c4c1b5a068e39414b68f7",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/8907a2efbe3cc36a9276929dd1e4829561d0c7ce"
        },
        "date": 1651562319994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.426080458620001,
            "unit": "ms",
            "range": 0.27037430867091716
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 17.057106455419994,
            "unit": "ms",
            "range": 0.03572987621630554
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.8441337967200002,
            "unit": "ms",
            "range": 0.001955536792874153
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.17446358480235297,
            "unit": "ms",
            "range": 0.00001974596576042873
          }
        ]
      }
    ]
  }
}