# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( templatemo_style.css )
Rails.application.config.assets.precompile += %w( coda-slider.css )
Rails.application.config.assets.precompile += %w( form_style.css )

Rails.application.config.assets.precompile += %w( coda-slider.js )
Rails.application.config.assets.precompile += %w( jquery-1.2.6.js )
Rails.application.config.assets.precompile += %w( jquery.scrollTo-1.3.3.js )
Rails.application.config.assets.precompile += %w( jquery.localscroll-1.2.5.js )
Rails.application.config.assets.precompile += %w( jquery.serialScroll-1.2.1.js )
Rails.application.config.assets.precompile += %w( c4logic.js )

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
