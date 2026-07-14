export const businessInfo = {
  name: 'Ajinyx Advisory Group',
  shortName: 'Ajinyx',
  url: 'https://www.ajinyx.com',
  telephone: '806-331-9686',
  address: {
    streetAddress: '600 S. Tyler Street',
    addressLocality: 'Amarillo',
    addressRegion: 'TX',
    postalCode: '79101',
    addressCountry: 'US',
    display: '600 S. Tyler Street, Amarillo, TX 79101',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=600%20S.%20Tyler%20Street%2C%20Amarillo%2C%20TX%2079101',
  },
};

export const businessAddressSchema = {
  '@type': 'PostalAddress',
  streetAddress: businessInfo.address.streetAddress,
  addressLocality: businessInfo.address.addressLocality,
  addressRegion: businessInfo.address.addressRegion,
  postalCode: businessInfo.address.postalCode,
  addressCountry: businessInfo.address.addressCountry,
};
