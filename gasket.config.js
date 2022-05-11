module.exports = {
  plugins: {
    presets: [
      '@godaddy/webapp',
    ],
    add: [
      '@gasket/jest',
    ],
  },
  rigor: {
    serviceId: 'domain-collection',
  },
  helmet: {
    contentSecurityPolicy: false,
  },
  presentationCentral: {
    params: {
      app: 'domain-collection',
      header: 'application-header',
    },
  },
};
