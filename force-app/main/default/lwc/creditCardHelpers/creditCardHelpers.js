const getCreditCardType = (cc) => {
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
  
    if (visa.test(cc)) {
      return 'VISA';
    }
    if (amex.test(cc)) {
      return 'AMEX';
    }
    if (mastercard.test(cc) || mastercard2.test(cc)) {
      return 'MASTERCARD';
    }
    
    return undefined;
};

const getMonths = () => {
  const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('en', { month: 'short' }));
  const monthOptions = months.map((el, index) => {
    return {'label': el, 'value': `${index}`};
  });

  return monthOptions;
}

const getYears = () => {
  const years = [...Array(21).keys()].map(key => {
    const year = new Date().getFullYear() + key;
    return {'label': year, 'value': `${year}`};
  });

  return years;
}

export { getCreditCardType, getMonths, getYears };