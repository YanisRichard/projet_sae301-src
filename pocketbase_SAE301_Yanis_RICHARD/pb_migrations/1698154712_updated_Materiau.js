/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n4adu4ilq4bfeh")

  collection.name = "materiau"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n4adu4ilq4bfeh")

  collection.name = "Materiau"

  return dao.saveCollection(collection)
})
