const currency = (number: number, currency?: "ARS", precision = 0) => {
  const poundAR = Intl.NumberFormat(
    "es-AR",
    {
      style: currency ? "currency" : undefined,
      currency: currency ?? undefined,
      minimumFractionDigits: 0,
      maximumFractionDigits: precision,
    }
  );
  return poundAR.format(number);
};

const toInteger = (string: string) => Number(string.replace(/[$.,-]+/g,""));

const dateFormat = (date: Date) => (
  date.toLocaleString(
    "es-AR",
    { year: 'numeric', month: '2-digit', day: '2-digit' },
  )
);

export default {
  currency,
  toInteger,
  dateFormat,
};