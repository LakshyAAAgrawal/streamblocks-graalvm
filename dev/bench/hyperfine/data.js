window.BENCHMARK_DATA = {
  "lastUpdate": 1651673819154,
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
            "unit": "s",
            "range": 0.08112036551219308
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.15275231942,
            "unit": "s",
            "range": 0.001806301338520523
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4369879035200002,
            "unit": "s",
            "range": 0.0014918249270822524
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1379877973438095,
            "unit": "s",
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
            "unit": "s",
            "range": 0.22184463766716703
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 16.537520436940003,
            "unit": "s",
            "range": 0.010130471736601344
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.8108617597399999,
            "unit": "s",
            "range": 0.004306624216526919
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.178278065565,
            "unit": "s",
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
            "unit": "s",
            "range": 0.07452004376017322
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.11526222942,
            "unit": "s",
            "range": 0.010067290806112579
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.45715418292,
            "unit": "s",
            "range": 0.002457091773221963
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13935901785809526,
            "unit": "s",
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
            "unit": "s",
            "range": 0.02807009837603012
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.7929805942,
            "unit": "s",
            "range": 0.004678693990764908
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.436259961,
            "unit": "s",
            "range": 0.0010059546118617617
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1249720505130435,
            "unit": "s",
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
            "unit": "s",
            "range": 0.02513302670844096
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.5113031726,
            "unit": "s",
            "range": 0.0031067004025435766
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4542094852999998,
            "unit": "s",
            "range": 0.004842385226020836
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13917482832857142,
            "unit": "s",
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
            "unit": "s",
            "range": 0.27037430867091716
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 17.057106455419994,
            "unit": "s",
            "range": 0.03572987621630554
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.8441337967200002,
            "unit": "s",
            "range": 0.001955536792874153
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.17446358480235297,
            "unit": "s",
            "range": 0.00001974596576042873
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
          "id": "d73e24db47d903ee97850e9a317364e73780a61b",
          "message": "Disable cargo cache in GHAction due to issue:https://github.com/rust-lang/cargo/issues/6727",
          "timestamp": "2022-05-03T13:06:04+05:30",
          "tree_id": "010750515c16285c9d45db1faf5945ee9799ecc9",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/d73e24db47d903ee97850e9a317364e73780a61b"
        },
        "date": 1651564141783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.98705470922,
            "unit": "s",
            "range": 0.11530646340223889
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.406557595719999,
            "unit": "s",
            "range": 0.005266657168547849
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4284338190200003,
            "unit": "s",
            "range": 0.0014055254096372826
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13728158339142857,
            "unit": "s",
            "range": 0.0000024419145486211578
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
          "id": "b9258ac27c6f34606d8ac8fb9c417e548c4f5e04",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-03T13:38:45+05:30",
          "tree_id": "8af45f5098b3df26231ab1e0639f30ddebbf6992",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/b9258ac27c6f34606d8ac8fb9c417e548c4f5e04"
        },
        "date": 1651566070444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.9068130692,
            "unit": "s",
            "range": 0.03464141606194159
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.076694360400001,
            "unit": "s",
            "range": 0.02633709474847789
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4268622636,
            "unit": "s",
            "range": 0.0022239481371971615
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12636084214347829,
            "unit": "s",
            "range": 0.0000019777794681754955
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
          "id": "f3e5fbad6c562e617d6718efcf7bbb0cdf537c56",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-03T14:05:29+05:30",
          "tree_id": "e7c42b0fea468fea889ff38b79b3f491e1b74241",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/f3e5fbad6c562e617d6718efcf7bbb0cdf537c56"
        },
        "date": 1651567919548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.603156485220001,
            "unit": "s",
            "range": 0.12556891518965346
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 18.448647493520003,
            "unit": "s",
            "range": 0.14667771720485212
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.8184857486200001,
            "unit": "s",
            "range": 0.0015507896841833984
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.17335862197294122,
            "unit": "s",
            "range": 0.00003835026475570999
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
          "id": "f3e5fbad6c562e617d6718efcf7bbb0cdf537c56",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-03T14:05:29+05:30",
          "tree_id": "e7c42b0fea468fea889ff38b79b3f491e1b74241",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/f3e5fbad6c562e617d6718efcf7bbb0cdf537c56"
        },
        "date": 1651569282174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 12.48148832596,
            "unit": "s",
            "range": 0.18279550836775518
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 15.50984182956,
            "unit": "s",
            "range": 0.09511142859337163
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.6255332287599997,
            "unit": "s",
            "range": 0.0024513171107169345
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1532392127126316,
            "unit": "s",
            "range": 0.000019381354410193846
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
          "id": "a1ba957c41d58127e2022c6f458eb38bfcd06459",
          "message": "Update unit in benchmarking file",
          "timestamp": "2022-05-03T19:09:14+05:30",
          "tree_id": "d93215f0f509fd49e52c38d740fa97f262573fdc",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/a1ba957c41d58127e2022c6f458eb38bfcd06459"
        },
        "date": 1651586220882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 15.20878577906,
            "unit": "s",
            "range": 0.1577422474909017
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 19.66786224226,
            "unit": "s",
            "range": 0.04640379616480559
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.99768500886,
            "unit": "s",
            "range": 0.004213405668611811
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.18842092359333334,
            "unit": "s",
            "range": 0.000020191094178991788
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
          "id": "a1ba957c41d58127e2022c6f458eb38bfcd06459",
          "message": "Update unit in benchmarking file",
          "timestamp": "2022-05-03T19:09:14+05:30",
          "tree_id": "d93215f0f509fd49e52c38d740fa97f262573fdc",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/a1ba957c41d58127e2022c6f458eb38bfcd06459"
        },
        "date": 1651587139166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.959851424700002,
            "unit": "s",
            "range": 0.07201476370747874
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.992994739399998,
            "unit": "s",
            "range": 0.004351878478513763
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4646898142000002,
            "unit": "s",
            "range": 0.0022098434213509498
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13744058768095238,
            "unit": "s",
            "range": 0.000005817448288910358
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
          "id": "2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80",
          "message": "Create new matrix job for running multiple benchmarks per commit as GHAction",
          "timestamp": "2022-05-03T23:41:16+05:30",
          "tree_id": "98740aa4751146985871a264b7fa0f64798ce56b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80"
        },
        "date": 1651602253448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.076535545999999,
            "unit": "s",
            "range": 0.0733859544868491
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.242484406000003,
            "unit": "s",
            "range": 0.28363544165663757
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4152951529000002,
            "unit": "s",
            "range": 0.0011071760267791564
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13700566443809528,
            "unit": "s",
            "range": 7.696690552419921e-7
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
          "id": "2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80",
          "message": "Create new matrix job for running multiple benchmarks per commit as GHAction",
          "timestamp": "2022-05-03T23:41:16+05:30",
          "tree_id": "98740aa4751146985871a264b7fa0f64798ce56b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80"
        },
        "date": 1651602985004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.68593977902,
            "unit": "s",
            "range": 0.038495141441200836
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.715235663720003,
            "unit": "s",
            "range": 0.0015423723390668308
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.3909906640199998,
            "unit": "s",
            "range": 0.0017233696412721005
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12379324587217393,
            "unit": "s",
            "range": 6.851239854934182e-7
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
          "id": "2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80",
          "message": "Create new matrix job for running multiple benchmarks per commit as GHAction",
          "timestamp": "2022-05-03T23:41:16+05:30",
          "tree_id": "98740aa4751146985871a264b7fa0f64798ce56b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80"
        },
        "date": 1651602995176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 9.87725659966,
            "unit": "s",
            "range": 0.09695710067425654
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.251187417359997,
            "unit": "s",
            "range": 0.4478064736538492
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4538150041600002,
            "unit": "s",
            "range": 0.0007645638280821253
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13151122825523812,
            "unit": "s",
            "range": 0.00003827634869855279
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
          "id": "2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80",
          "message": "Create new matrix job for running multiple benchmarks per commit as GHAction",
          "timestamp": "2022-05-03T23:41:16+05:30",
          "tree_id": "98740aa4751146985871a264b7fa0f64798ce56b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/2b51ab859ac62c7c63c2b64f5c67f9e5e983cf80"
        },
        "date": 1651603724422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.74988244734,
            "unit": "s",
            "range": 0.18949491464897933
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.198568256939998,
            "unit": "s",
            "range": 0.5486782092517994
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4119155034400002,
            "unit": "s",
            "range": 0.002310260012467476
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13412609463047617,
            "unit": "s",
            "range": 0.00005234342439561159
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
          "id": "0fb9bd56919454e57648e924aa30c534a307750d",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T02:14:11+05:30",
          "tree_id": "81dc5121c4249d37eed2607c129ee8251cef825d",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/0fb9bd56919454e57648e924aa30c534a307750d"
        },
        "date": 1651611649564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.439236614320004,
            "unit": "s",
            "range": 0.400093370003711
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 18.191810104220004,
            "unit": "s",
            "range": 0.042682762280845256
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.8442892807200004,
            "unit": "s",
            "range": 0.0040477334354844735
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.17054028140823532,
            "unit": "s",
            "range": 0.000009548509997547393
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
          "id": "0fb9bd56919454e57648e924aa30c534a307750d",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T02:14:11+05:30",
          "tree_id": "81dc5121c4249d37eed2607c129ee8251cef825d",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/0fb9bd56919454e57648e924aa30c534a307750d"
        },
        "date": 1651612443810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.22610414188,
            "unit": "s",
            "range": 0.14194011049816393
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.306845266180002,
            "unit": "s",
            "range": 0.0065378499541936565
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.50543831168,
            "unit": "s",
            "range": 0.0016013950676228112
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.14313470788000002,
            "unit": "s",
            "range": 8.588522238179909e-7
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
          "id": "0fb9bd56919454e57648e924aa30c534a307750d",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T02:14:11+05:30",
          "tree_id": "81dc5121c4249d37eed2607c129ee8251cef825d",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/0fb9bd56919454e57648e924aa30c534a307750d"
        },
        "date": 1651612563041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.440653020899997,
            "unit": "s",
            "range": 0.20824749826050595
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 16.7331335195,
            "unit": "s",
            "range": 0.0077540004435568965
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.7357087106000002,
            "unit": "s",
            "range": 0.0031321336820675557
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1646124449555556,
            "unit": "s",
            "range": 0.00001930079501154499
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
          "id": "0fb9bd56919454e57648e924aa30c534a307750d",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T02:14:11+05:30",
          "tree_id": "81dc5121c4249d37eed2607c129ee8251cef825d",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/0fb9bd56919454e57648e924aa30c534a307750d"
        },
        "date": 1651613176904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.12324390812,
            "unit": "s",
            "range": 5.430479524273503
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.86842477562,
            "unit": "s",
            "range": 0.6465804530663823
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.45993807512,
            "unit": "s",
            "range": 0.002559199665699572
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13339308783428572,
            "unit": "s",
            "range": 0.00004998179583998581
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
          "id": "948778d679894a393bcd75a8e8cd718f7606f773",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T03:19:21+05:30",
          "tree_id": "639bfcdbd86f6be8160b2a7f25bb750d9f68883e",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/948778d679894a393bcd75a8e8cd718f7606f773"
        },
        "date": 1651615372912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.696936598800002,
            "unit": "s",
            "range": 1.3236089738501975
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.571341031700001,
            "unit": "s",
            "range": 0.0017411553992372998
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4988288475,
            "unit": "s",
            "range": 0.0021849265543939247
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.14245053970952382,
            "unit": "s",
            "range": 0.0000019670321079511626
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
          "id": "948778d679894a393bcd75a8e8cd718f7606f773",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T03:19:21+05:30",
          "tree_id": "639bfcdbd86f6be8160b2a7f25bb750d9f68883e",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/948778d679894a393bcd75a8e8cd718f7606f773"
        },
        "date": 1651616094153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.80843109984,
            "unit": "s",
            "range": 0.02232762145565602
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.82029954994,
            "unit": "s",
            "range": 0.0015669224768189488
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.43715932474,
            "unit": "s",
            "range": 0.0008173828223699743
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12433306410666667,
            "unit": "s",
            "range": 8.829921165197057e-7
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
          "id": "948778d679894a393bcd75a8e8cd718f7606f773",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T03:19:21+05:30",
          "tree_id": "639bfcdbd86f6be8160b2a7f25bb750d9f68883e",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/948778d679894a393bcd75a8e8cd718f7606f773"
        },
        "date": 1651616137670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.086080742560002,
            "unit": "s",
            "range": 0.1967736385422273
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.597304671359998,
            "unit": "s",
            "range": 0.0045145692108310344
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.45511459636,
            "unit": "s",
            "range": 0.0022588316681906124
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13975763722190476,
            "unit": "s",
            "range": 0.0000020584289116026885
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
          "id": "948778d679894a393bcd75a8e8cd718f7606f773",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T03:19:21+05:30",
          "tree_id": "639bfcdbd86f6be8160b2a7f25bb750d9f68883e",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/948778d679894a393bcd75a8e8cd718f7606f773"
        },
        "date": 1651616821908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.8873302229,
            "unit": "s",
            "range": 0.03298966331675576
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.8320807393,
            "unit": "s",
            "range": 0.0016977290957821832
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4625923507,
            "unit": "s",
            "range": 0.0017076333801571808
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12690219451739132,
            "unit": "s",
            "range": 0.0000019010920276641866
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
          "id": "9ad6e962216179b303fc222eb569a980b086a1ad",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T04:31:27+05:30",
          "tree_id": "8801ac6a4293e5bcb5298bda86542cad8d4a1493",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9ad6e962216179b303fc222eb569a980b086a1ad"
        },
        "date": 1651619630235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.078139153779999,
            "unit": "s",
            "range": 0.01411068991361291
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 12.52303515858,
            "unit": "s",
            "range": 0.004245747548235907
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.2881406938800002,
            "unit": "s",
            "range": 0.0018045191553340125
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12319512568,
            "unit": "s",
            "range": 0.000001048139735625481
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
          "id": "9ad6e962216179b303fc222eb569a980b086a1ad",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T04:31:27+05:30",
          "tree_id": "8801ac6a4293e5bcb5298bda86542cad8d4a1493",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9ad6e962216179b303fc222eb569a980b086a1ad"
        },
        "date": 1651620361454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.717821674600001,
            "unit": "s",
            "range": 0.03899167796961242
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.763079850100002,
            "unit": "s",
            "range": 0.005795452186461165
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.3989098781,
            "unit": "s",
            "range": 0.001248702765998028
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12366965074166665,
            "unit": "s",
            "range": 2.2042247858217075e-7
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
          "id": "9ad6e962216179b303fc222eb569a980b086a1ad",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T04:31:27+05:30",
          "tree_id": "8801ac6a4293e5bcb5298bda86542cad8d4a1493",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9ad6e962216179b303fc222eb569a980b086a1ad"
        },
        "date": 1651620516535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.31793148896,
            "unit": "s",
            "range": 0.11560621640038414
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 17.093067040759998,
            "unit": "s",
            "range": 0.051737820269001256
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.81218700316,
            "unit": "s",
            "range": 0.003137404682006483
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.16396270416,
            "unit": "s",
            "range": 0.00005036788454342389
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
          "id": "9ad6e962216179b303fc222eb569a980b086a1ad",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T04:31:27+05:30",
          "tree_id": "8801ac6a4293e5bcb5298bda86542cad8d4a1493",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9ad6e962216179b303fc222eb569a980b086a1ad"
        },
        "date": 1651621108410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.52200813704,
            "unit": "s",
            "range": 2.5891190325560145
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.124716149240001,
            "unit": "s",
            "range": 0.0016235982234897378
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4572988956400001,
            "unit": "s",
            "range": 0.001397868460018334
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13724093637636361,
            "unit": "s",
            "range": 0.0000010520097854659573
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
          "id": "9447042ff7ed3b3589104bc1072795c43decaba9",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T10:26:50+05:30",
          "tree_id": "5432012b7dd039578503cc6df40b91df076b2e0b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9447042ff7ed3b3589104bc1072795c43decaba9"
        },
        "date": 1651640951951,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.71234161668,
            "unit": "s",
            "range": 0.059583907799655
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.94703328898,
            "unit": "s",
            "range": 0.005776113644657068
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.43268983938,
            "unit": "s",
            "range": 0.006247639215493792
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12415381441043477,
            "unit": "s",
            "range": 5.305538554979326e-7
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
          "id": "9447042ff7ed3b3589104bc1072795c43decaba9",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T10:26:50+05:30",
          "tree_id": "5432012b7dd039578503cc6df40b91df076b2e0b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9447042ff7ed3b3589104bc1072795c43decaba9"
        },
        "date": 1651641717181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.759208162940002,
            "unit": "s",
            "range": 0.0577313543657083
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.76384195334,
            "unit": "s",
            "range": 0.005320790239537052
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.46944003054,
            "unit": "s",
            "range": 0.0013291337063600294
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12639453078347826,
            "unit": "s",
            "range": 5.76510384156496e-7
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
          "id": "9447042ff7ed3b3589104bc1072795c43decaba9",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T10:26:50+05:30",
          "tree_id": "5432012b7dd039578503cc6df40b91df076b2e0b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9447042ff7ed3b3589104bc1072795c43decaba9"
        },
        "date": 1651641883221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.016604141799998,
            "unit": "s",
            "range": 0.0750649315391094
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 17.8072741663,
            "unit": "s",
            "range": 0.01018015136091268
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.7963642120999999,
            "unit": "s",
            "range": 0.003689278273532407
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.17231546444705884,
            "unit": "s",
            "range": 0.000022080329610678234
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
          "id": "9447042ff7ed3b3589104bc1072795c43decaba9",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T10:26:50+05:30",
          "tree_id": "5432012b7dd039578503cc6df40b91df076b2e0b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/9447042ff7ed3b3589104bc1072795c43decaba9"
        },
        "date": 1651642431541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.813842515199998,
            "unit": "s",
            "range": 0.01611401327286473
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.8627801382,
            "unit": "s",
            "range": 0.005414684113091403
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4367063763,
            "unit": "s",
            "range": 0.003048780040088966
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12654050098695652,
            "unit": "s",
            "range": 0.000006584537870313098
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
          "id": "7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12",
          "message": "Remove benchmarking steps from build and artifact job in GHAction",
          "timestamp": "2022-05-04T12:03:54+05:30",
          "tree_id": "65e74a6d6e76d6c066a5ce2066449fc29aa74018",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12"
        },
        "date": 1651647130429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.99955900358,
            "unit": "s",
            "range": 0.03672691203504946
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 15.375722274179997,
            "unit": "s",
            "range": 0.04163936128314861
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.6056937209800002,
            "unit": "s",
            "range": 0.003661002980348763
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.14815053642999998,
            "unit": "s",
            "range": 0.000016626497756404338
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
          "id": "7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12",
          "message": "Remove benchmarking steps from build and artifact job in GHAction",
          "timestamp": "2022-05-04T12:03:54+05:30",
          "tree_id": "65e74a6d6e76d6c066a5ce2066449fc29aa74018",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12"
        },
        "date": 1651647222220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.943882786799998,
            "unit": "s",
            "range": 0.06748969399042874
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 16.5143038895,
            "unit": "s",
            "range": 0.037111065130160284
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.7906799818000003,
            "unit": "s",
            "range": 0.004308942427996287
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.16058585432222225,
            "unit": "s",
            "range": 0.00003620042842358717
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
          "id": "7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12",
          "message": "Remove benchmarking steps from build and artifact job in GHAction",
          "timestamp": "2022-05-04T12:03:54+05:30",
          "tree_id": "65e74a6d6e76d6c066a5ce2066449fc29aa74018",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12"
        },
        "date": 1651647940892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.019845819040002,
            "unit": "s",
            "range": 0.05028630547996031
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.35815725804,
            "unit": "s",
            "range": 0.012649300186795491
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4194351214399998,
            "unit": "s",
            "range": 0.0015193704339456781
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13625291856380953,
            "unit": "s",
            "range": 0.0000010995432901644643
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
          "id": "7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12",
          "message": "Remove benchmarking steps from build and artifact job in GHAction",
          "timestamp": "2022-05-04T12:03:54+05:30",
          "tree_id": "65e74a6d6e76d6c066a5ce2066449fc29aa74018",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/7558a5555bbf0ba6e7e79ecf8cb0e082ded2fd12"
        },
        "date": 1651647945635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 17.76660432186,
            "unit": "s",
            "range": 39.231515041703865
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.376050235960003,
            "unit": "s",
            "range": 0.003449784056931116
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4456421961600001,
            "unit": "s",
            "range": 0.002440691938123548
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1386891586457143,
            "unit": "s",
            "range": 0.000003133338687292012
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
          "id": "410443868f3b3200a49491c5016dbcec11271a83",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T12:41:53+05:30",
          "tree_id": "1d7730e7bafc492e6c68812a65a98695208ee6fd",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/410443868f3b3200a49491c5016dbcec11271a83"
        },
        "date": 1651649267471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.765696827159998,
            "unit": "s",
            "range": 0.15556218773100042
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.75857203146,
            "unit": "s",
            "range": 0.007442461914841665
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.39994636166,
            "unit": "s",
            "range": 0.0007926650627618445
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12439869930999997,
            "unit": "s",
            "range": 3.644267743916763e-7
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
          "id": "410443868f3b3200a49491c5016dbcec11271a83",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T12:41:53+05:30",
          "tree_id": "1d7730e7bafc492e6c68812a65a98695208ee6fd",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/410443868f3b3200a49491c5016dbcec11271a83"
        },
        "date": 1651649274388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.668007042220001,
            "unit": "s",
            "range": 0.09750931833735327
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.777758641720002,
            "unit": "s",
            "range": 0.0021000924602611235
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4033153460199999,
            "unit": "s",
            "range": 0.0013947030714890275
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12429839322434785,
            "unit": "s",
            "range": 0.0000010024114889364954
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
          "id": "410443868f3b3200a49491c5016dbcec11271a83",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T12:41:53+05:30",
          "tree_id": "1d7730e7bafc492e6c68812a65a98695208ee6fd",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/410443868f3b3200a49491c5016dbcec11271a83"
        },
        "date": 1651649964479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.701878036859998,
            "unit": "s",
            "range": 0.02659812753031128
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.705980875560002,
            "unit": "s",
            "range": 0.002427269019969914
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4143550700599996,
            "unit": "s",
            "range": 0.0011292005031758707
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12455442876000003,
            "unit": "s",
            "range": 3.0306113607936387e-7
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
          "id": "01e8f9e4f0a098dde064f83c14f46b4fee77d978",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T13:27:26+05:30",
          "tree_id": "a403c7e926b02f9a9141a7be6ce7b464a15fb2c1",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/01e8f9e4f0a098dde064f83c14f46b4fee77d978"
        },
        "date": 1651652013418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.742445154779999,
            "unit": "s",
            "range": 0.0925144405734158
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.007089093080001,
            "unit": "s",
            "range": 0.007028782156907184
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.3893302794800002,
            "unit": "s",
            "range": 0.0013241784733445355
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12395086180499998,
            "unit": "s",
            "range": 6.566147030872917e-7
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
          "id": "01e8f9e4f0a098dde064f83c14f46b4fee77d978",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T13:27:26+05:30",
          "tree_id": "a403c7e926b02f9a9141a7be6ce7b464a15fb2c1",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/01e8f9e4f0a098dde064f83c14f46b4fee77d978"
        },
        "date": 1651652050112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.09006813052,
            "unit": "s",
            "range": 0.03656607403460552
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.14553941392,
            "unit": "s",
            "range": 0.0020895113524705706
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.43195158722,
            "unit": "s",
            "range": 0.0024706663170136135
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13856144055809527,
            "unit": "s",
            "range": 8.252984988430972e-7
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
          "id": "01e8f9e4f0a098dde064f83c14f46b4fee77d978",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T13:27:26+05:30",
          "tree_id": "a403c7e926b02f9a9141a7be6ce7b464a15fb2c1",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/01e8f9e4f0a098dde064f83c14f46b4fee77d978"
        },
        "date": 1651652758452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.928787058500001,
            "unit": "s",
            "range": 0.07419057939267067
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.150222202900002,
            "unit": "s",
            "range": 0.0042970555971985356
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4696130751,
            "unit": "s",
            "range": 0.0009643717656963341
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13952658071904767,
            "unit": "s",
            "range": 5.567328457659443e-7
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
          "id": "01e8f9e4f0a098dde064f83c14f46b4fee77d978",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T13:27:26+05:30",
          "tree_id": "a403c7e926b02f9a9141a7be6ce7b464a15fb2c1",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/01e8f9e4f0a098dde064f83c14f46b4fee77d978"
        },
        "date": 1651652762584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.2145257429,
            "unit": "s",
            "range": 0.24982913276640098
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 12.767649566699998,
            "unit": "s",
            "range": 0.28729763095368394
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.3801259670000001,
            "unit": "s",
            "range": 0.0054483036351333815
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1331667203095238,
            "unit": "s",
            "range": 0.00004641584776312329
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
          "id": "5af51810d5e106e4b6c9523ab07dd7b464f44301",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T15:08:12+05:30",
          "tree_id": "7745c2af9eeda4d89fe4e4e213bba794cea766f0",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/5af51810d5e106e4b6c9523ab07dd7b464f44301"
        },
        "date": 1651658088582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.693616843920001,
            "unit": "s",
            "range": 0.012816522915716501
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.690219234119999,
            "unit": "s",
            "range": 0.0013940339632718887
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.40954031092,
            "unit": "s",
            "range": 0.0024356448335558865
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.1251242428330435,
            "unit": "s",
            "range": 0.00000310407729957973
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
          "id": "5af51810d5e106e4b6c9523ab07dd7b464f44301",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T15:08:12+05:30",
          "tree_id": "7745c2af9eeda4d89fe4e4e213bba794cea766f0",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/5af51810d5e106e4b6c9523ab07dd7b464f44301"
        },
        "date": 1651658308524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.33972403782,
            "unit": "s",
            "range": 0.1377590907058685
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 18.685954317519997,
            "unit": "s",
            "range": 0.10331937189002802
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.9659872469200004,
            "unit": "s",
            "range": 0.0038184276389124218
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.18127197212,
            "unit": "s",
            "range": 0.00004462723181762083
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
          "id": "5af51810d5e106e4b6c9523ab07dd7b464f44301",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T15:08:12+05:30",
          "tree_id": "7745c2af9eeda4d89fe4e4e213bba794cea766f0",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/5af51810d5e106e4b6c9523ab07dd7b464f44301"
        },
        "date": 1651658803114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.8999783205,
            "unit": "s",
            "range": 0.45550428686850064
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.819118640000003,
            "unit": "s",
            "range": 0.0029759663825595427
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4038944444999997,
            "unit": "s",
            "range": 0.0011614455811717202
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12539453158695654,
            "unit": "s",
            "range": 5.926209182164584e-7
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
          "id": "5af51810d5e106e4b6c9523ab07dd7b464f44301",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T15:08:12+05:30",
          "tree_id": "7745c2af9eeda4d89fe4e4e213bba794cea766f0",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/5af51810d5e106e4b6c9523ab07dd7b464f44301"
        },
        "date": 1651659058684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 11.35769254514,
            "unit": "s",
            "range": 0.13367249049191782
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.033662311740002,
            "unit": "s",
            "range": 0.0010298112119200937
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.48101159004,
            "unit": "s",
            "range": 0.0030150624052372567
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13850029668285715,
            "unit": "s",
            "range": 7.12427195178732e-7
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
          "id": "e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0",
          "message": "Create test-benchmarking",
          "timestamp": "2022-05-04T17:31:46+05:30",
          "tree_id": "c9633df7e70512a1e1887b850666bf180fa68c1b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0"
        },
        "date": 1651666701058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.744936049420001,
            "unit": "s",
            "range": 0.041222461552854174
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.922986759520004,
            "unit": "s",
            "range": 0.025579447114452397
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4198105290200003,
            "unit": "s",
            "range": 0.0017245901740831745
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12427379728666665,
            "unit": "s",
            "range": 1.9292106286857985e-7
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
          "id": "e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0",
          "message": "Create test-benchmarking",
          "timestamp": "2022-05-04T17:31:46+05:30",
          "tree_id": "c9633df7e70512a1e1887b850666bf180fa68c1b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0"
        },
        "date": 1651666713849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.655838811619999,
            "unit": "s",
            "range": 0.035572905985115616
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.96416357432,
            "unit": "s",
            "range": 0.006737274705328879
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.42115915332,
            "unit": "s",
            "range": 0.0009757195106031428
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13006605007789473,
            "unit": "s",
            "range": 0.00012986901772609177
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
          "id": "e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0",
          "message": "Create test-benchmarking",
          "timestamp": "2022-05-04T17:31:46+05:30",
          "tree_id": "c9633df7e70512a1e1887b850666bf180fa68c1b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0"
        },
        "date": 1651667416041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.335472746079999,
            "unit": "s",
            "range": 0.30803550060158275
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.47521485728,
            "unit": "s",
            "range": 0.6309477518683778
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.44156661778,
            "unit": "s",
            "range": 0.006526768268277001
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13558174518000002,
            "unit": "s",
            "range": 0.00011484048099159386
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
          "id": "e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0",
          "message": "Create test-benchmarking",
          "timestamp": "2022-05-04T17:31:46+05:30",
          "tree_id": "c9633df7e70512a1e1887b850666bf180fa68c1b",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/e7c36433b8c9082deccd58f6eb8d7a5d7871b6f0"
        },
        "date": 1651667455057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.94157419104,
            "unit": "s",
            "range": 0.040751046762603056
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 14.396311989440003,
            "unit": "s",
            "range": 0.0014425852796030446
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.4772413268400002,
            "unit": "s",
            "range": 0.00206180123703962
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.13967071797333333,
            "unit": "s",
            "range": 0.0000010129305054210316
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
          "id": "e3ebb8735f57dd30f5bf59b9316f2df2c3a03dc4",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T19:30:43+05:30",
          "tree_id": "c320f8de2be8c5620dbfd965150627b350657f63",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/e3ebb8735f57dd30f5bf59b9316f2df2c3a03dc4"
        },
        "date": 1651673814080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.755345397780001,
            "unit": "s",
            "range": 0.03537425288304124
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.76949609978,
            "unit": "s",
            "range": 0.011116548451647874
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.40393195268,
            "unit": "s",
            "range": 0.0007434236278250159
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12469943564521739,
            "unit": "s",
            "range": 2.7250894684471725e-7
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
          "id": "e3ebb8735f57dd30f5bf59b9316f2df2c3a03dc4",
          "message": "Update test-benchmarking",
          "timestamp": "2022-05-04T19:30:43+05:30",
          "tree_id": "c320f8de2be8c5620dbfd965150627b350657f63",
          "url": "https://github.com/LakshyAAAgrawal/streamblocks-graalvm/commit/e3ebb8735f57dd30f5bf59b9316f2df2c3a03dc4"
        },
        "date": 1651673817779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "./cal --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 10.61904799018,
            "unit": "s",
            "range": 0.03041351806965271
          },
          {
            "name": "./native/calnative --cal.entity-qid=jpeg.SingleImagePrinter --cal.directory-lookup=true language/tests/jpeg/SingleImageTest.cal",
            "value": 13.818280526379997,
            "unit": "s",
            "range": 0.015528360803871193
          },
          {
            "name": "./cal --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 1.38080653508,
            "unit": "s",
            "range": 0.002553986447335228
          },
          {
            "name": "./native/calnative --cal.entity-qid=mdp.TopFibonacci --cal.directory-lookup=true language/tests/mdp/src/TopFibonacci.cal",
            "value": 0.12366731125500001,
            "unit": "s",
            "range": 3.6213372467341897e-7
          }
        ]
      }
    ]
  }
}