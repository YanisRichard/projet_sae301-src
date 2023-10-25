/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wvnn8iuk",
    "name": "materiel_cadre",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wafq3zpn",
    "name": "materiel_verre",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  // remove
  collection.schema.removeField("wvnn8iuk")

  // remove
  collection.schema.removeField("wafq3zpn")

  return dao.saveCollection(collection)
})
