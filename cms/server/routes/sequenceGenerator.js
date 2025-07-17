const Sequence = require("../models/sequence");

let maxDocumentId;
let maxMessageId;
let maxContactId;
let sequenceId = null;

class SequenceGenerator {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const sequence = await Sequence.findOne().exec();
      if (sequence) {
        sequenceId = sequence._id;
        maxDocumentId = sequence.maxDocumentId;
        maxMessageId = sequence.maxMessageId;
        maxContactId = sequence.maxContactId;
      } else {
        console.error("No sequence document found in the database.");
      }
    } catch (err) {
      console.error("Error initializing sequence generator:", err);
    }
  }

  async nextId(collectionType) {
    let updateObject = {};
    let nextId;

    switch (collectionType) {
      case "documents":
        maxDocumentId++;
        updateObject = { maxDocumentId };
        nextId = maxDocumentId;
        break;
      case "messages":
        maxMessageId++;
        updateObject = { maxMessageId };
        nextId = maxMessageId;
        break;
      case "contacts":
        maxContactId++;
        updateObject = { maxContactId };
        nextId = maxContactId;
        break;
      default:
        return -1;
    }

    try {
      await Sequence.updateOne({ _id: sequenceId }, { $set: updateObject });
    } catch (err) {
      console.error("nextId update error:", err);
      return null;
    }

    return nextId;
  }
}

module.exports = new SequenceGenerator();
