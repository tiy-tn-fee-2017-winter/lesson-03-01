Variable Declaration Phase

| Location/Name   | Value/Pointer |
|-----------------|---------------|
| `crewMember`          | const lock    |
| `crew`          | const lock    |
| `fry`           | const lock    |

Through Line 9

| Location/Name | Value/Pointer                                                                  |
|---------------|--------------------------------------------------------------------------------|
| `crewMember`  | *OBJECT #1   🔐                                                                |
| `crew`        | *OBJECT #2   🔐                                                                |
| `fry`         | *OBJECT #3   🔐                                                                |
| OBJECT #1     | { getFullName: function, goodNews: function }                                  |
| OBJECT #2     | { deliveryBoy: *OBJECT #2 }                                                    |
| OBJECT #3     | { first: 'Phillip', occupationChip: 'Delivery Boy', goodNews: function, iq: 60 }  (Prototype Object#1) |

Through Line 14

| Location/Name | Value/Pointer                                                                      |
|---------------|------------------------------------------------------------------------------------|
| `crewMember`  | *OBJECT #1   🔐                                                                    |
| `crew`        | *OBJECT #2   🔐                                                                    |
| `fry`         | *OBJECT #3   🔐                                                                    |
| OBJECT #1     | { getFullName: function, goodNews: function }                                      |
| OBJECT #2     | { deliveryBoy: *OBJECT #2 }                                                        |
| OBJECT #3     | { first: 'Phillip', occupationChip: 'Delivery Boy', goodNews: function, iq: 80 }  (Prototype Object#1) |
