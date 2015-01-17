/* @flow */
var uid = require('../utils/uid')

class Block {
  content: ?Object;
  id: number;
  parentBlockListId: number;
  type: string;

  constructor(params: { content: ?Object; parentBlockListId: number; type: string }){
    this.content = params.content || null
    this.id = uid()
    this.parentBlockListId = params.parentBlockListId
    this.type = params.type || 'text'
  }

  toJSON(): Object {
    // Note: This is to get around circular dependency issues
    var BlockList = require('../stores/block_list_store')

    return {
      blocks  : BlockList.findByBlockId(this.id).toJSON(),
      content : this.content,
      type    : this.type
    }
  }
}

module.exports = Block
