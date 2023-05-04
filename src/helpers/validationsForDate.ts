import dayjs, { Dayjs } from 'dayjs';

/**
 *
 * Changes the format of a given date string to a valid Dayjs date.
 * @param {string} date - The date string to change the format of.
 * @returns {Dayjs|null} - Returns a valid Dayjs date or null if the input is invalid.
 *
 */
export const changeFormat_ValidDayjs = (date: string): Dayjs | null => {
  if (!date) return null;
  let newDate: Dayjs;
  const hyphen = dayjs(date, 'DD-MM-YYYY');
  const slash = dayjs(date, 'DD/MM/YYYY');

  if (hyphen.isValid()) newDate = hyphen;
  else if (slash.isValid()) newDate = slash;
  else return null;

  return newDate;
};

/**
 *
 * Removes dashes from a given date in format 'YYYY-MM-DD'
 * and returns the resulting date as a string in format 'YYYYMMDD'.
 * If the input date is invalid or null, returns an empty string.
 * @param date - A dayjs.Dayjs or string representation of a date in format 'YYYY-MM-DD'.
 * @returns A string representation of the date in format 'YYYYMMDD'.
 *
 */
export const removeDashesFromDate = (date: dayjs.Dayjs | string | null) => {
  if (isEnteredDateValid(date)) return dayjs(date).format('YYYYMMDD');
  return '';
};

/**
 *
 * Formats a given date object or string into multiple date/time formats.
 * @param date A Day.js object or string representation of a date.
 * @returns An object containing formatted date/time strings for various formats.
 * If the input date is invalid, all values in the returned object will be null.
 *
 */
export const dateFormatter = (date: dayjs.Dayjs | string | null) => {
  // Check if the input date is valid
  if (isEnteredDateValid(date)) {
    // Format the date into multiple date/time formats using Day.js
    const formattedDate = dayjs(date).format('DD/MM/YYYY');
    const formattedDateTimeHHmm = dayjs(date).format('DD/MM/YYYY HH:mm');
    const formattedDateTimeHHmmss = dayjs(date).format('DD/MM/YYYY HH:mm:ss');
    const formattedHHmm = dayjs(date).format('HH:mm');
    const formattedHHmmss = dayjs(date).format('HH:mm:ss');
    const formattedISODateWithoutT = dayjs(date).format('YYYY-MM-DD');
    const formattedISODateTimeWithoutT = dayjs(date).format(
      'YYYY-MM-DD HH:mm:ssZ[Z]'
    );
    const formattedISODateTimeWithT = dayjs(date).format(
      'YYYY-MM-DDTHH:mm:ssZ[Z]'
    );

    // Return an object containing the formatted date/time strings
    return {
      formattedDate,
      formattedDateTimeHHmm,
      formattedDateTimeHHmmss,
      formattedHHmm,
      formattedHHmmss,
      formattedISODateWithoutT,
      formattedISODateTimeWithoutT,
      formattedISODateTimeWithT,
    };
  }
  // If the input date is invalid, return an object with all values set to null
  else
    return {
      formattedDate: null,
      formattedDateTimeHHmm: null,
      formattedDateTimeHHmmss: null,
      formattedHHmmss: null,
      formattedHHmm: null,
      formattedISODateWithoutT: null,
      formattedISODateTimeWithoutT: null,
      formattedISODateTimeWithT: null,
    };
};

/**
 *
 * Check if two entered dates are not equal.
 * @param {dayjs.Dayjs | string} fromDate - The starting date.
 * @param {dayjs.Dayjs | string} toDate - The ending date.
 * @returns {boolean} - Returns true if the dates are not equal, otherwise false.
 *
 */
export const enteredDatesAreNotEqual = (
  fromDate: dayjs.Dayjs | string,
  toDate: dayjs.Dayjs | string
): boolean => {
  if (fromDate === undefined || toDate === undefined) return false;

  if (!dayjs(fromDate).isValid() || !dayjs(toDate).isValid()) return false;

  if (dayjs(fromDate).isSame(dayjs(toDate))) return false;
  return true;
};

/**
 *
 * Check if a given date is a valid dayjs object or string.
 * @param date - A dayjs object or string to validate.
 * @returns True if the given date is a valid dayjs object or string; otherwise, false.
 *
 */
export const isEnteredDateValid = (date: dayjs.Dayjs | string | null) => {
  if (date !== null && dayjs(date).isValid()) return true;
  return false;
};

/**
 *
 * Determines whether a date range is valid by checking if the toDate is after the fromDate.
 * @param {dayjs.Dayjs | string} fromDate - The starting date of the range
 * @param {dayjs.Dayjs | string} toDate - The ending date of the range
 * @returns {boolean} - Returns true if the toDate is before the fromDate, indicating an invalid date range
 *
 */
export const validDateRange = (
  fromDate: dayjs.Dayjs | string,
  toDate: dayjs.Dayjs | string
): boolean => {
  if (fromDate && toDate && !dayjs(toDate).isBefore(dayjs(fromDate)))
    return true;
  return false;
};
