require 'spec_helper'
require './lib/note'

describe 'add' do
  it 'adds a note to the database' do
    Note.create( content: 'hello' )
    expect(Note.count).to eq(1)
  end
end
