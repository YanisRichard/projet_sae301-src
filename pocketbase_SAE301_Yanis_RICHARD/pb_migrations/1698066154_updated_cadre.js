/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4tstdfia3vpy4")

  collection.name = "Cadre"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4tstdfia3vpy4")

  collection.name = "cadre"

  return dao.saveCollection(collection)
})
