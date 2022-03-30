source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2.3'
gem 'puma', '~> 4.3'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'                         #https://github.com/rails/webpacker
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'                # https://github.com/turbolinks/turbolinks
gem 'jbuilder', '~> 2.5'                # https://github.com/rails/jbuilder
gem 'bootsnap', '>= 1.1.0', require: false
gem 'rack-cors'

gem 'bootstrap', '~> 4.3.1'            # https://github.com/twbs/bootstrap-rubygem
gem 'jquery-rails'
gem 'react_on_rails', '11.1.4'          #https://github.com/shakacode/react_on_rails
gem 'rest-client'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'sqlite3'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'pg'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'mini_racer', platforms: :ruby