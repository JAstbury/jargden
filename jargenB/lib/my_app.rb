
require 'sinatra/base'
require './data_mapper_setup'
require 'json'

class MyApp < Sinatra::Base

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

  get '/' do

  end

  post '/notes' do
    note = Note.create(content: params[:content])
  end

  get '/notes' do
    Note.all.to_json
  end

  get '/notes/:id' do
    Note.get(params(:id)).to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
