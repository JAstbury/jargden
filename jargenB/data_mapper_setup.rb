ENV['RACK_ENV'] ||= 'development'


require 'data_mapper'
require 'dm-postgres-adapter'

require_relative './lib/note'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/notes_#{ENV['RACK_ENV']}")
DataMapper.finalize
DataMapper.auto_upgrade!
