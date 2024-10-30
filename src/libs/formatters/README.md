# Formatters typescript

These formatters are made to be used with html input-elements.
Example:

```javscript
  <input
    value={this.state.value}
    onChange={value => this.setState({ value: formatter(value)})}
  />
```

These formatters takes a value and returns that value in a formatted fashion.
Each formatter accepts a boolean which determines if the format should be formatted for api-usage.

Formatters that only expects numbers will strip all characters from the value before doing the formatting.

### AccountNumberFormatter

| value               | toApi | result              |
| ------------------- | ----- | ------------------- |
| 1234123412341234    | false | 1234 1234 1234 1234 |
| 1234123412341234    | true  | 1234123412341234    |
| 1234 1234 1234 1234 | true  | 1234123412341234    |

### MoneyFormatter

| value      | toApi | result        |
| ---------- | ----- | ------------- |
| 1123456789 | false | 1 123 456 789 |
| 1123456789 | true  | 1123456789    |

### NumberFormatter

| value      | toApi | result     |
| ---------- | ----- | ---------- |
| 1123456789 | any   | 1123456789 |
| 11char6789 | any   | 116789     |
| 1123456789 | any   | 1123456789 |

### UUID4Formatter

| value                                | toApi | result                               |
| ------------------------------------ | ----- | ------------------------------------ |
| db286e818eae4855a2a7a4cf9237a4ae     | any   | db286e81-8eae-4855-a2a7-a4cf9237a4ae |
| db286e81-8eae-4855-a2a7-a4cf9237a4ae | any   | db286e81-8eae-4855-a2a7-a4cf9237a4ae |

### ZipFormatter

| value  | toApi | result |
| ------ | ----- | ------ |
| 12345  | false | 123 45 |
| 12345  | true  | 12345  |
| 123 45 | true  | 12345  |

### PidnFormatter

TODO: Accept 10 digit pidn

| value         | toApi | result        |
| ------------- | ----- | ------------- |
| 199105060205  | false | 19910506-0205 |
| 199105060205  | true  | 199105060205  |
| 19910506-0205 | true  | 199105060205  |

### PhoneFormatter

| value        | toApi | result             |
| ------------ | ----- | ------------------ |
| +46701188850 | any   | (+46) 70-118 88 10 |
| 00701188810  | any   | (+46) 70-118 88 10 |
| 0701188810   | any   | 070-118 88 10      |
