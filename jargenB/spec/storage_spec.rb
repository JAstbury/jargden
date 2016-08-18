require './lib/note'

describe 'add' do
  it 'adds a note to the database' do
    Note.create( content: 'hello' )
    expect(Note.count).to eq(1)
    # expect{Note.create( content: 'hello' )}.to change{Note.count}.by 1
  end
end
