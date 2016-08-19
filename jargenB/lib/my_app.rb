
require 'sinatra/base'
require './data_mapper_setup'

class MyApp < Sinatra::Base

  get '/' do
    note = Note.create( content: params[:message] )
  end

  post '/' do

  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
