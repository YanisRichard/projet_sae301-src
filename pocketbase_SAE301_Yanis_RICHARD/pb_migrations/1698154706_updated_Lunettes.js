/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  collection.name = "lunettes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("apoatorb5uh2756")

  collection.name = "Lunettes"

  return dao.saveCollection(collection)
})
