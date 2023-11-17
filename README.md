# whatsapp-country-code

npm package to fetch the list of country name and codes supported by whatsapp.

## Use Case

To display the list of country codes which is supported by whatsapp.
Can be used in a project related to whatsapp business or any project which is gonna ask for user's whatsapp phone number.

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

const data = getByCode('+91'); // single country by code

const data = getByAlpha2Code('IN'); // single country by alpha 2 code

const data = getByAlpha3Code('IND'); // single country by alpha 3 code
```
