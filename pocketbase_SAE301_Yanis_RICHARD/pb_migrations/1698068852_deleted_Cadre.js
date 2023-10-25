/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("od4tstdfia3vpy4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "od4tstdfia3vpy4",
    "created": "2023-10-23 13:00:22.464Z",
    "updated": "2023-10-23 13:46:58.720Z",
    "name": "Cadre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hrssy3vz",
        "name": "nom_cadre",
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
        "id": "efhuygw1",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "Rectangulaire",
            "Rond",
            "Carré",
            "Ovale"
          ]
        }
      },
      {
        "system": false,
        "id": "nt9gnowr",
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
})
