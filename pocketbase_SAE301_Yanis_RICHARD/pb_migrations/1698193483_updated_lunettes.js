/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vx3fac1z",
    "name": "type_verre",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Opaque",
        "Clair"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vx3fac1z",
    "name": "type_verre",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Opaque",
        "Clair",
        "Correcteur"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
