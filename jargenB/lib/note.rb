require 'data_mapper'
require 'dm-postgres-adapter'

class Note
    include DataMapper::Resource

    property :id,       Serial
    property :content,  String

    DataMapper.setup(:default, "postgres://localhost/notes_development")
    DataMapper.finalize
    DataMapper.auto_upgrade!

end
