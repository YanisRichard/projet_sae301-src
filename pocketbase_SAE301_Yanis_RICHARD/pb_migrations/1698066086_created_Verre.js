/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "flbwoe8cszp38jm",
    "created": "2023-10-23 13:01:26.499Z",
    "updated": "2023-10-23 13:01:26.499Z",
    "name": "Verre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z6slnv6u",
        "name": "couleur",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "th0c8fa6",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "6n4adu4ilq4bfeh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("flbwoe8cszp38jm");

  return dao.deleteCollection(collection);
})
