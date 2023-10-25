/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6n4adu4ilq4bfeh",
    "created": "2023-10-23 12:56:58.574Z",
    "updated": "2023-10-23 12:56:58.574Z",
    "name": "Materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7jvgouoh",
        "name": "libelle_materiau",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("6n4adu4ilq4bfeh");

  return dao.deleteCollection(collection);
})
