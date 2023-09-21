
export class GraphqlService {
    constructor(baseUrl = '/graphql') {
        this.baseUrl = baseUrl;
    }

    base(queryString, storeFrontToken) {
        const httpHeaders = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storeFrontToken}`,
        };
        const headers = new Headers(httpHeaders);

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify({ query: queryString }),
            })
                .then((res) => {
                    if (res.status === 400) return reject();
                    return res.json();
                })
                .then((result) => {
                    const { data, error } = result;
                    if (data) return resolve(data);
                    return reject(error);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    request(query, storeFrontToken) {
        return this.base(query, storeFrontToken);
    }
}

export const graphqlService = new GraphqlService();

const getCustomerAttr = async (accessToken, id) => {
    const query = `
    query CustomerAttributes {
        customer {
         attributes {
           attribute(entityId: ${id}) {
             value
           }
         }
       }
     }
    `;

    return new Promise((resolve, reject) => {
        graphqlService.request(query, accessToken).then((result) => resolve(result)).catch((error) => reject(error));
    });
};

const getProductByIds = async (accessToken, ids) => {
    const query = `
    query scentFlirtProducts {
        site {
          products (entityIds: ${ids}) {
            edges {
              node {
                entityId
                sku
                path
                name
                description
                prices {
                  price {
                    value
                    currencyCode
                  }
                }
                customFields {
                  edges {
                    node {
                      name  
                      value
                    }
                  }
                }
                defaultImage {
                  url(width: 200, height: 150)
                }
              }
            }
          }
        }
      }
    `;
    return new Promise((resolve, reject) => {
        graphqlService.request(query, accessToken).then((result) => resolve(result)).catch((error) => reject(error));
    });
};

const getDataFromGraphql = (context, methodName, sfToken, options) => {
    if (!methodName || !sfToken) { return null; }
    if (methodName === 'getCustomerAttr') {
        const { default_consultant_attribute_key } = context.themeSetting.consultant;
        let key = default_consultant_attribute_key;

        if (options?.attributeId) {
            key = options.attributeId;
        }

        return getCustomerAttr(sfToken, key);
    } else if (methodName === 'getProductByIds') {
        return getProductByIds(sfToken, options.ids);
    }

    return null;
};

export { getDataFromGraphql };
