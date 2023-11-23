# whatsapp-country-code

npm package to fetch the list of country name and codes supported by whatsapp.

## Use Case

To display the list of country codes which is supported by whatsapp.
Can be used in a project related to whatsapp business or any project which is gonna ask for user's whatsapp phone number.

## Sample Data

```
[
  {
    name: "Afghanistan",
    iso_alpha_2_code: "AF",
    iso_alpha_3_code: "AFG",
    code: "+93",
  },
  {
    name: "Albania",
    iso_alpha_2_code: "AL",
    iso_alpha_3_code: "ALB",
    code: "+355",
  },
  {
    name: "Algeria",
    iso_alpha_2_code: "DZ",
    iso_alpha_3_code: "DZA",
    code: "+213",
  },
  ...
]
```

## Methods

### React or JS

```
import {getCountries} from 'whatsapp-country-code';

const data = getCountries();
```

### NODEJS

```
const {getCountries} = require('whatsapp-country-code');

const data = getCountries();
```

### Other Methods

```
const data = getCountries();

const excludeCountries = filterByExcludedNames(['Egypt','Antarctica']) // this will not return the data of Egypt and Antarctica

const data = getByName('Egypt'); // single country by name

const data = getByCode('+91'); // first country by code

const data = getAllByCode('+91'); // list of countires with same code

const data = getByAlpha2Code('IN'); // single country by alpha 2 code

const data = getByAlpha3Code('IND'); // single country by alpha 3 code
```

### TypeScript

```
 import {CountryProp} from 'whatsapp-country-code';

 const data: CountryProp = getByName('Egypt');
```
