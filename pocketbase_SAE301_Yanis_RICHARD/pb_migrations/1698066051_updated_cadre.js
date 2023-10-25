/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4tstdfia3vpy4")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4tstdfia3vpy4")

  // remove
  collection.schema.removeField("hrssy3vz")

  return dao.saveCollection(collection)
})
