/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qyeuhfl0",
    "name": "type_cadre",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Rond",
        "Rectangulaire",
        "Oval"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6v5iyvjr",
    "name": "couleur_cadre",
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

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i5rle6kv",
    "name": "couleur_verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dw0gqsgj",
    "name": "prix",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "emyu4wjq",
    "name": "commande",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  // remove
  collection.schema.removeField("qyeuhfl0")

  // remove
  collection.schema.removeField("6v5iyvjr")

  // remove
  collection.schema.removeField("vx3fac1z")

  // remove
  collection.schema.removeField("i5rle6kv")

  // remove
  collection.schema.removeField("dw0gqsgj")

  // remove
  collection.schema.removeField("emyu4wjq")

  return dao.saveCollection(collection)
})
