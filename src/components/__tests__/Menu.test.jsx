let Actions   = require('../../actions/blocks')
let Colonel   = require('../../Colonel')
let Menu      = require('../Menu')
let TestUtils = React.addons.TestUtils
let config    = require('./fixtures/colonelConfig')
let render    = TestUtils.renderIntoDocument

describe('Components - Menu', function() {
  let app, menu;

  beforeEach(function(done) {
    app = new Colonel(config)

    app.push = sinon.mock()

    app.start(function() {
      menu = React.createElement(Menu, {
        app: app,
        block: app.refine('blocks').first(),
        onOpen: sinon.mock(),
        onExit: sinon.mock(),
        active: true
      })
    }, done)
  })

  it ('calls the onOpen property when the handle is clicked', function() {
    let test = render(menu)
    TestUtils.Simulate.click(test.refs.handle.getDOMNode())
    menu.props.onOpen.should.have.been.called
  })

  it ('can add new menu items', function() {
    let test = render(React.cloneElement(menu, { items: [{ id: 'test', label: 'Test'}] }))
    test.refs.should.have.property('test')
  })

  it ('does not activate the action if the onSelect handler returns false', function() {
    let test = render(React.cloneElement(menu, { onSelect: (e => false) }))
    TestUtils.Simulate.click(test.refs.destroy.getDOMNode())
    app.push.should.not.have.been.called
  })

  it ('calls the destroy action', function() {
    let test  = render(menu)
    let block = test.props.block

    TestUtils.Simulate.click(test.refs.destroy.getDOMNode())

    app.push.should.have.been.calledWith(Actions.destroy, block.id)
  })

  it ('moves a block up when Move Up is clicked', function() {
    let block = app.refine('blocks').last()
    let test  = render(React.cloneElement(menu, { block }))

    TestUtils.Simulate.click(test.refs.moveUp.getDOMNode())

    app.push.should.have.been.calledWith(Actions.move, block, -1)
  })

  it ('disables Move Up if the block is the first child', function() {
    let test = render(menu)
    test.refs.moveUp.isDisabled().should.equal(true)
  })

  it ('moves a block down when Move Down is clicked', function() {
    let block = app.refine('blocks').first()
    let test  = render(React.cloneElement(menu, { block }))

    TestUtils.Simulate.click(test.refs.moveDown.getDOMNode())

    app.push.should.have.been.calledWith(Actions.move, block, 1)
  })

  it ('disables Move Down if the block is the first child', function() {
    let block = app.refine('blocks').last()
    let test  = render(React.cloneElement(menu, { block }))

    test.refs.moveDown.isDisabled().should.equal(true)
  })
})
