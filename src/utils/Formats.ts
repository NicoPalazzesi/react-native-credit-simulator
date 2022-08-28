const currency = (number: number, currency?: "ARS") => {
  const poundAR = Intl.NumberFormat(
    "es-AR",
    {
      style: currency ? "currency" : undefined,
      currency: currency ?? undefined,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );
  return poundAR.format(number);
};

const toInteger = (string: string) => Number(string.replace(/[$.,-]+/g,""));

export default {
  currency,
  toInteger,
};