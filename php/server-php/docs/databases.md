# Databases Service

## List Databases

```http request
GET https://HOSTNAME/v1/databases
```

** Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| search | string | Search term to filter your list results. Max length: 256 chars. |  |
| limit | integer | Maximum number of collection to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. | 25 |
| offset | integer | Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) | 0 |
| cursor | string | ID of the collection used as the starting point for the query, excluding the collection itself. Should be used for efficient pagination when working with large sets of data. |  |
| cursorDirection | string | Direction of the cursor, can be either &#039;before&#039; or &#039;after&#039;. | after |
| orderType | string | Order result by ASC or DESC order. | ASC |

## Create Database

```http request
POST https://HOSTNAME/v1/databases
```

** Create a new Database.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | Unique Id. Choose your own unique ID or pass the string &quot;unique()&quot; to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can&#039;t start with a special char. Max length is 36 chars. |  |
| name | string | Collection name. Max length: 128 chars. |  |

## Get Database

```http request
GET https://HOSTNAME/v1/databases/{databaseId}
```

** Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |

## Update Database

```http request
PUT https://HOSTNAME/v1/databases/{databaseId}
```

** Update a database by its unique ID. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| name | string | Collection name. Max length: 128 chars. |  |

## Delete Database

```http request
DELETE https://HOSTNAME/v1/databases/{databaseId}
```

** Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |

## List Collections

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections
```

** Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| search | string | Search term to filter your list results. Max length: 256 chars. |  |
| limit | integer | Maximum number of collection to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. | 25 |
| offset | integer | Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) | 0 |
| cursor | string | ID of the collection used as the starting point for the query, excluding the collection itself. Should be used for efficient pagination when working with large sets of data. |  |
| cursorDirection | string | Direction of the cursor, can be either &#039;before&#039; or &#039;after&#039;. | after |
| orderType | string | Order result by ASC or DESC order. | ASC |

## Create Collection

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections
```

** Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](/docs/server/databases#databasesCreateCollection) API or directly from your database console. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | Unique Id. Choose your own unique ID or pass the string &quot;unique()&quot; to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can&#039;t start with a special char. Max length is 36 chars. |  |
| name | string | Collection name. Max length: 128 chars. |  |
| permissions | array | An array of strings with permissions. By default no user is granted with any permissions. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions. |  |
| documentSecurity | boolean | Specifies the permissions model used in this collection, which accepts either &#039;collection&#039; or &#039;document&#039;. For &#039;collection&#039; level permission, the permissions specified in read and write params are applied to all documents in the collection. For &#039;document&#039; level permissions, read and write permissions are specified in each document. [learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions. |  |

## Get Collection

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}
```

** Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. |  |

## Update Collection

```http request
PUT https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}
```

** Update a collection by its unique ID. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. |  |
| name | string | Collection name. Max length: 128 chars. |  |
| permissions | array | An array of strings with permissions. By default no user is granted with any permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. |  |
| documentSecurity | boolean | Whether to enable document-level permission where each document&#039;s permissions parameter will decide who has access to each file individually. [learn more about permissions](/docs/permissions) and get a full list of available permissions. |  |
| enabled | boolean | Is collection enabled? | 1 |

## Delete Collection

```http request
DELETE https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}
```

** Delete a collection by its unique ID. Only users with write permissions have access to delete this resource. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. |  |

## List Attributes

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |

## Create Boolean Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/boolean
```

** Create a boolean attribute.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| default | boolean | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create DateTime Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/datetime
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create Email Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/email
```

** Create an email attribute.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create Enum Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/enum
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| elements | array | Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 4096 characters long. |  |
| required | boolean | Is attribute required? |  |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create Float Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/float
```

** Create a float attribute. Optionally, minimum and maximum values can be provided.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| min | number | Minimum value to enforce on new documents |  |
| max | number | Maximum value to enforce on new documents |  |
| default | number | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create Integer Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/integer
```

** Create an integer attribute. Optionally, minimum and maximum values can be provided.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| min | integer | Minimum value to enforce on new documents |  |
| max | integer | Maximum value to enforce on new documents |  |
| default | integer | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create IP Address Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/ip
```

** Create IP address attribute.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create String Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/string
```

** Create a string attribute.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| size | integer | Attribute size for text attributes, in number of characters. |  |
| required | boolean | Is attribute required? |  |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Create URL Attribute

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/url
```

** Create a URL attribute.
 **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Attribute Key. |  |
| required | boolean | Is attribute required? |  |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |  |
| array | boolean | Is attribute an array? |  |

## Get Attribute

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/{key}
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | **Required** Attribute Key. |  |

## Delete Attribute

```http request
DELETE https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/attributes/{key}
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | **Required** Attribute Key. |  |

## List Documents

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/documents
```

** Get a list of all the user&#039;s documents in a given collection. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of documents belonging to the provided collectionId. [Learn more about different API modes](/docs/admin). **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| queries | array | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/database#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. | [] |
| limit | integer | Maximum number of documents to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. | 25 |
| offset | integer | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) | 0 |
| cursor | string | ID of the document used as the starting point for the query, excluding the document itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |  |
| cursorDirection | string | Direction of the cursor, can be either &#039;before&#039; or &#039;after&#039;. | after |
| orderAttributes | array | Array of attributes used to sort results. Maximum of 100 order attributes are allowed, each 4096 characters long. | [] |
| orderTypes | array | Array of order directions for sorting attribtues. Possible values are DESC for descending order, or ASC for ascending order. Maximum of 100 order types are allowed. | [] |

## Create Document

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/documents
```

** Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/databases#databasesCreateCollection) API or directly from your database console. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). Make sure to define attributes before creating documents. |  |
| documentId | string | Document ID. Choose your own unique ID or pass the string &quot;unique()&quot; to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can&#039;t start with a special char. Max length is 36 chars. |  |
| data | object | Document data as JSON object. | {} |
| permissions | array | An array of strings with permissions. By default no user is granted with any permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. |  |

## Get Document

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId}
```

** Get a document by its unique ID. This endpoint response returns a JSON object with the document data. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| documentId | string | **Required** Document ID. |  |

## Update Document

```http request
PATCH https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId}
```

** Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. |  |
| documentId | string | **Required** Document ID. |  |
| data | object | Document data as JSON object. Include only attribute and value pairs to be updated. | {} |
| permissions | array | An array of strings with permissions. By default no user is granted with any permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions. |  |

## Delete Document

```http request
DELETE https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId}
```

** Delete a document by its unique ID. **

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| documentId | string | **Required** Document ID. |  |

## List Indexes

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/indexes
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |

## Create Index

```http request
POST https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/indexes
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | Index Key. |  |
| type | string | Index type. |  |
| attributes | array | Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long. |  |
| orders | array | Array of index orders. Maximum of 100 orders are allowed. | [] |

## Get Index

```http request
GET https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/indexes/{key}
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | **Required** Index Key. |  |

## Delete Index

```http request
DELETE https://HOSTNAME/v1/databases/{databaseId}/collections/{collectionId}/indexes/{key}
```

### Parameters

| Field Name | Type | Description | Default |
| --- | --- | --- | --- |
| databaseId | string | **Required** Database ID. |  |
| collectionId | string | **Required** Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |  |
| key | string | **Required** Index Key. |  |

