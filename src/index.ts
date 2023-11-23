import data from "./data";
import { dataProp } from "./interface";

export interface CountryProp extends dataProp {}

/**
 * Retrieves a list of whatsapp supported countries with their relevant information.
 *
 * @returns {Array} An array of country objects, each containing the following properties:
 *   - Country: The name of the country.
 *   - Alpha-2 code: The two-letter country code.
 *   - Alpha-3 code: The three-letter country code.
 *   - Country Code: The international dialing code for the country.
 */
export function getCountries(): CountryProp[] {
  return data;
}

/**
 * Filters out countries from the data whose names are present in the specified array.
 *
 * @param {string[]} excludedNames - An array of country names to exclude from the result.
 * @returns {dataProp[]} An array of country objects that do not have names in the excluded list.
 */
export function filterByExcludedNames(excludedNames: string[]) {
  return data.filter((item: dataProp) => !excludedNames.includes(item.name));
}

/**
 * Retrieves a country object by its name.
 *
 * @param {string} name - The name of the country.
 * @returns {dataProp | undefined} The country object if found, or undefined if not found.
 */
export function getByName(name: string): dataProp | undefined {
  return data.find((item: dataProp) => item.name === name);
}

/**
 * Retrieves the first country object by its code.
 *
 * @param {string} code - The country code.
 * @returns {dataProp | undefined} The country object if found, or undefined if not found.
 */
export function getByCode(code: string): dataProp | undefined {
  return data.find((item: dataProp) => item.code === code);
}

/**
 * Retrieves list of countries with same code.
 *
 * @param {string} code - The country code.
 * @returns {dataProp[] | undefined} The country object if found, or undefined if not found.
 */
export function getAllByCode(code: string): dataProp[] | undefined {
  return data.filter((item: dataProp) => item.code === code);
}

/**
 * Retrieves a country object by its Alpha-2 code.
 *
 * @param {string} alpha2Code - The two-letter country code.
 * @returns {dataProp | undefined} The country object if found, or undefined if not found.
 */
export function getByAlpha2Code(alpha2Code: string): dataProp | undefined {
  return data.find((item: dataProp) => item.iso_alpha_2_code === alpha2Code);
}

/**
 * Retrieves a country object by its Alpha-3 code.
 *
 * @param {string} alpha3Code - The three-letter country code.
 * @returns {dataProp | undefined} The country object if found, or undefined if not found.
 */
export function getByAlpha3Code(alpha3Code: string): dataProp | undefined {
  return data.find((item: dataProp) => item.iso_alpha_2_code === alpha3Code);
}
